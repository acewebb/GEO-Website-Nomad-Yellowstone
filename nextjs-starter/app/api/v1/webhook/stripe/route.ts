import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { db, admin } from '@/lib/firebase';
import { sendConfirmationEmail } from '@/lib/transporter';

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
        const { bookingId, Tour_Date, Tour_Time_Slot, Guest_Count, Booking_Type } = session.metadata;

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
                        seats: Number(Guest_Count)
                    });
                }

                console.log(`Booking ${bookingId} confirmed and email dispatched.`);
            }
        } catch (dbError) {
            console.error("Error updating booking on webhook success:", dbError);
            // Stripe will retry if we return 500, but the payment already succeeded.
            // Usually, you might log this to a dead-letter queue.
            return NextResponse.json({ error: "Database error" }, { status: 500 });
        }
    }

    // Return a 200 response to acknowledge receipt of the event
    return NextResponse.json({ received: true }, { status: 200 });
}
