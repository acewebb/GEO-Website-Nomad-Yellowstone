import { NextResponse } from 'next/server';
import { db, admin } from '@/lib/firebase';
import { stripe } from '@/lib/stripe';
import { bookingSchema } from '@/lib/validateInput';

const INDIVIDUAL_PRICE_REGULAR = 179;
const INDIVIDUAL_PRICE_DISCOUNTED = 152; // 15% off $179
const PRIVATE_BUYOUT_PRICE_REGULAR = 1997;
const PRIVATE_BUYOUT_PRICE_DISCOUNTED = 1697; // 15% off $1997

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // 1. Validate Input
        const { error } = bookingSchema.validate(body);
        if (error) {
            return NextResponse.json(
                { success: false, message: error.details[0].message },
                { status: 400 }
            );
        }

        const { name, email, phone, tourId, date, seats, bookingType } = body;

        // Block dates before 2027 season
        const tourYear = parseInt(date.split('-')[0], 10);
        if (tourYear < 2027) {
            return NextResponse.json(
                { success: false, message: "The 2026 tour season is closed. Reservations are now only available for the 2027 season (May 15 – Oct 31, 2027) with a 15% early bird discount." },
                { status: 400 }
            );
        }

        // 2. Check availability inside a Firestore Transaction
        const checkoutSession = await db.runTransaction(async (t) => {
            const tourDocRef = db.collection("tours").doc(date);
            const tourDoc = await t.get(tourDocRef);

            if (!tourDoc.exists) {
                throw new Error("Tour date not initialized. Please fetch availability first.");
            }

            const tourData = tourDoc.data();
            if (!tourData) throw new Error("Tour data not initialized.");

            const currentSlot = tourData.slots[tourId];
            if (!currentSlot) throw new Error("Invalid tour ID.");

            const seatsToDeduct = bookingType === "private" ? 5 : seats;

            if (currentSlot.seatsAvailable < seatsToDeduct) {
                throw new Error(
                    bookingType === "private"
                        ? `Cannot book a private tour. The vehicle is already partially booked.`
                        : `Not enough seats available. Only ${currentSlot.seatsAvailable} left.`
                );
            }

            // 3. We have seats. Let's create a pending booking record.
            const bookingRef = db.collection("bookings").doc();
            const bookingId = bookingRef.id;

            // Get the origin dynamically from headers, with env var and localhost fallbacks
            const origin = request.headers.get("origin") || process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";

            // 4. Create Stripe Checkout Session (with 15% Early Bird Discount applied)
            const isPrivate = bookingType === "private";
            const unitAmount = isPrivate ? PRIVATE_BUYOUT_PRICE_DISCOUNTED * 100 : INDIVIDUAL_PRICE_DISCOUNTED * 100;
            const thirtyMinutesFromNow = Math.floor(Date.now() / 1000) + 30 * 60;
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                allow_promotion_codes: true,
                expires_at: thirtyMinutesFromNow,
                line_items: [
                    {
                        price_data: {
                            currency: "usd",
                            product_data: {
                                name: isPrivate ? `Private Tour Buyout (2027 Early Bird Special - 15% OFF)` : `Signature Tour – Guided ATV Tour (2027 Early Bird - 15% OFF)`,
                                description: `2027 Season | Date: ${date} | Time: ${currentSlot.tourTime} | Guests: ${seats} | Passenger: ${name}`,
                            },
                            unit_amount: unitAmount,
                        },
                        quantity: isPrivate ? 1 : seats,
                    },
                ],
                mode: "payment",
                success_url: `${origin}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${origin}/booking?canceled=true`,
                client_reference_id: bookingId,
                customer_email: email,
                metadata: {
                    bookingId: bookingId,
                    Tour_Date: date,
                    Tour_Time_Slot: tourId,
                    Tour_Time: currentSlot.tourTime,
                    Booking_Type: bookingType,
                    Tour_Type: isPrivate ? "Private Buyout" : "Standard Tour",
                    Guest_Count: seats,
                    Guest_Phone: phone
                }
            });

            // 5. Update the available seats in the transaction
            const updatedSlots = { ...tourData.slots };
            updatedSlots[tourId].seatsAvailable -= seatsToDeduct;

            t.update(tourDocRef, { slots: updatedSlots });

            // 6. Save the pending booking
            const newBooking = {
                id: bookingId,
                name,
                email,
                phone,
                tourId,
                tourTime: currentSlot.tourTime,
                date,
                seats,
                bookingType,
                tourType: isPrivate ? "Private Buyout" : "Standard Tour",
                status: "pending",
                stripeSessionId: session.id,
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
            };

            t.set(bookingRef, newBooking);

            return session; // return checkout session to the caller
        });

        // 7. Return Checkout URL to client
        return NextResponse.json({ success: true, url: checkoutSession.url }, { status: 200 });

    } catch (error: any) {
        if (error.message.includes("Not enough seats") || error.message.includes("not initialized")) {
            return NextResponse.json({ success: false, message: error.message }, { status: 400 });
        }
        console.error(error);
        return NextResponse.json({ success: false, message: `Internal server error: ${error.message}` }, { status: 500 });
    }
}
