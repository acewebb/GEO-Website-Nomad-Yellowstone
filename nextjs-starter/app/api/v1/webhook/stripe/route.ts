import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { db, admin } from '@/lib/firebase';
import { sendConfirmationEmail, sendAdminNotificationEmail } from '@/lib/transporter';
import { sendCustomerSmsConfirmation, sendOwnerSmsAlert } from '@/lib/sms/send-sms-confirmation';

export async function POST(request: Request) {
    const sig = request.headers.get("stripe-signature");

    if (!sig) {
        return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
    }

    let event;

    try {
        const bodyBuffer = await request.text();
        event = stripe.webhooks.constructEvent(
            bodyBuffer,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET as string
        );
    } catch (err: any) {
        console.error(`Webhook signature verification failed: ${err.message}`);
        return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
    }

    // Handle the checkout.session.completed event
    if (event.type === "checkout.session.completed") {
        const session = event.data.object as any;

        // Retrieve metadata passed during session creation
        const { bookingId, Tour_Date, Tour_Time_Slot, Tour_Time, Booking_Type, Tour_Type, Guest_Count, Guest_Phone } = session.metadata;

        try {
            const bookingRef = db.collection("bookings").doc(bookingId);
            const bookingDoc = await bookingRef.get();

            if (bookingDoc.exists) {
                const bookingData = bookingDoc.data();

                // 1. Mark booking as confirmed
                await bookingRef.update({
                    status: "confirmed",
                    paymentStatus: "paid",
                    updatedAt: admin.firestore.FieldValue.serverTimestamp()
                });

                // 2. Dispatch confirmation email
                if (bookingData) {
                    await sendConfirmationEmail({
                        name: bookingData.name,
                        email: bookingData.email,
                        tourId: Tour_Time_Slot,
                        date: Tour_Date,
                        seats: Number(Guest_Count),
                        tourTime: bookingData.tourTime,
                        tourType: bookingData.tourType,
                    });

                    // 3. Dispatch admin notification
                    await sendAdminNotificationEmail({
                        name: bookingData.name,
                        email: bookingData.email,
                        phone: Guest_Phone,
                        tourId: Tour_Time_Slot,
                        date: Tour_Date,
                        seats: Number(Guest_Count),
                        tourTime: bookingData.tourTime,
                        tourType: bookingData.tourType,
                    });
                }

                // 4. Dispatch SMS alerts if payment succeeded
                if (session.payment_status === 'paid') {
                    const amountTotal = session.amount_total ? session.amount_total / 100 : 0;
                    const bookingSmsData = {
                        customerName: bookingData?.name || session.metadata?.customerName || "Valued Customer",
                        customerPhone: session.metadata?.Guest_Phone || session.metadata?.customerPhone || bookingData?.phone || "",
                        tourId: Tour_Time_Slot || session.metadata?.tourId || "",
                        tourDate: Tour_Date || session.metadata?.tourDate || "",
                        numberOfSeats: Number(Guest_Count || session.metadata?.numberOfSeats || 0),
                        bookingType: Booking_Type || session.metadata?.bookingType || bookingData?.bookingType || "standard",
                        amountTotal,
                        tourTime: bookingData?.tourTime || Tour_Time || session.metadata?.tourTime || "",
                        tourType: bookingData?.tourType || Tour_Type || session.metadata?.tourType || "",
                    };

                    try {
                        await sendOwnerSmsAlert(bookingSmsData);
                    } catch (smsError) {
                        console.error("Error calling sendOwnerSmsAlert:", smsError);
                    }

                    try {
                        await sendCustomerSmsConfirmation(bookingSmsData);
                    } catch (smsError) {
                        console.error("Error calling sendCustomerSmsConfirmation:", smsError);
                    }
                } else {
                    console.log(`Payment status for session ${session.id} is "${session.payment_status}", skipping SMS notifications.`);
                }

                console.log(`Booking ${bookingId} confirmed and emails/SMS dispatched.`);
            }
        } catch (dbError) {
            console.error("Error updating booking on webhook success:", dbError);
            // Stripe will retry if we return 500, but the payment already succeeded.
            // Usually, you might log this to a dead-letter queue.
            return NextResponse.json({ error: "Database error" }, { status: 500 });
        }
    }

    // Handle session expiry — restore seats when user abandons checkout
    if (event.type === "checkout.session.expired") {
        const session = event.data.object as any;
        const { bookingId, Tour_Time_Slot } = session.metadata;

        try {
            await db.runTransaction(async (t) => {
                const bookingRef = db.collection("bookings").doc(bookingId);
                const bookingDoc = await t.get(bookingRef);

                if (!bookingDoc.exists) return;

                const bookingData = bookingDoc.data();
                if (!bookingData || bookingData.status !== "pending") return;

                // Restore seats
                const tourDocRef = db.collection("tours").doc(bookingData.date);
                const tourDoc = await t.get(tourDocRef);

                if (tourDoc.exists) {
                    const tourData = tourDoc.data();
                    if (tourData) {
                        const updatedSlots = { ...tourData.slots };
                        const seatsToRestore = bookingData.bookingType === "private" ? 5 : bookingData.seats;
                        updatedSlots[Tour_Time_Slot].seatsAvailable = Math.min(
                            5,
                            updatedSlots[Tour_Time_Slot].seatsAvailable + seatsToRestore
                        );
                        t.update(tourDocRef, { slots: updatedSlots });
                    }
                }

                // Mark booking cancelled
                t.update(bookingRef, {
                    status: "cancelled",
                    cancelledAt: admin.firestore.FieldValue.serverTimestamp(),
                });
            });

            console.log(`Booking ${bookingId} expired — seats restored.`);
        } catch (dbError) {
            console.error("Error restoring seats on session expiry:", dbError);
            return NextResponse.json({ error: "Database error" }, { status: 500 });
        }
    }

    // Return a 200 response to acknowledge receipt of the event
    return NextResponse.json({ received: true }, { status: 200 });
}
