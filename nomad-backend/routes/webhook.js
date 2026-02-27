const express = require("express");
const router = express.Router();
const { stripe } = require("../config/stripe");
const { db, admin } = require("../config/firebase");
const { sendConfirmationEmail } = require("../config/transporter");

// POST /api/v1/webhook/stripe
// NOTE: This route must use express.raw() body parser, configured in server.js
router.post("/stripe", async (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;

    try {
        event = stripe.webhooks.constructEvent(
            req.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        console.error(`Webhook signature verification failed: ${err.message}`);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the checkout.session.completed event
    if (event.type === "checkout.session.completed") {
        const session = event.data.object;

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
                await sendConfirmationEmail({
                    name: bookingData.name,
                    email: bookingData.email,
                    tourId: Tour_Time_Slot,
                    date: Tour_Date,
                    seats: Number(Guest_Count)
                });

                console.log(`Booking ${bookingId} confirmed and email dispatched.`);
            }
        } catch (dbError) {
            console.error("Error updating booking on webhook success:", dbError);
            // Stripe will retry if we return 500, but the payment already succeeded.
            // Usually, you might log this to a dead-letter queue.
            return res.status(500).end();
        }
    }

    // Return a 200 response to acknowledge receipt of the event
    res.json({ received: true });
});

module.exports = router;
