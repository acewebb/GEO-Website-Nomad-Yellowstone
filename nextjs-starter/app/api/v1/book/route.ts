import { NextResponse } from 'next/server';
import { db, admin } from '@/lib/firebase';
import { stripe } from '@/lib/stripe';
import { bookingSchema } from '@/lib/validateInput';

const INDIVIDUAL_PRICE = 149;
const PRIVATE_BUYOUT_PRICE = 699;

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

            // 4. Create Stripe Checkout Session
            const isPrivate = bookingType === "private";
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                line_items: [
                    {
                        price_data: {
                            currency: "usd",
                            product_data: {
                                name: isPrivate ? `Private UTV Tour Buyout (${tourId})` : `Nomad Yellowstone UTV Tour (${tourId})`,
                                description: `Date: ${date} | Guests: ${seats} | Passenger: ${name}`,
                            },
                            unit_amount: isPrivate ? PRIVATE_BUYOUT_PRICE * 100 : INDIVIDUAL_PRICE * 100,
                        },
                        quantity: isPrivate ? 1 : seats,
                    },
                ],
                mode: "payment",
                success_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"}/booking?canceled=true`,
                client_reference_id: bookingId,
                customer_email: email,
                metadata: {
                    bookingId: bookingId,
                    Tour_Date: date,
                    Tour_Time_Slot: tourId,
                    Booking_Type: bookingType,
                    Guest_Count: seats
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
                date,
                seats,
                bookingType,
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
        return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
    }
}
