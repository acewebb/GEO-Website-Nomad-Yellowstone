const express = require("express");
const { db, admin } = require("../config/firebase");
const { stripe } = require("../config/stripe");
const { validateBooking } = require("../middlewares/validateInput");
const { requireAdmin } = require("../middlewares/adminAuth");

const publicRouter = express.Router();
const adminRouter = express.Router();

const INDIVIDUAL_PRICE = 149;
const PRIVATE_BUYOUT_PRICE = 699;

// -- PUBLIC ROUTES --

// POST /api/v1/book
publicRouter.post("/", validateBooking, async (req, res, next) => {
    try {
        const { name, email, phone, tourId, date, seats, bookingType } = req.body; // bookingType: 'individual' | 'private'

        // 1. Check availability inside a Firestore Transaction
        const checkoutSession = await db.runTransaction(async (t) => {
            const tourDocRef = db.collection("tours").doc(date);
            const tourDoc = await t.get(tourDocRef);

            if (!tourDoc.exists) {
                throw new Error("Tour date not initialized. Please fetch availability first.");
            }

            const tourData = tourDoc.data();
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

            // 2. We have seats. Let's create a pending booking record.
            const bookingRef = db.collection("bookings").doc();
            const bookingId = bookingRef.id;

            // 3. Create Stripe Checkout Session
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
                success_url: `${process.env.FRONTEND_URL}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${process.env.FRONTEND_URL}/booking?canceled=true`,
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

            // 4. Update the available seats in the transaction
            const updatedSlots = { ...tourData.slots };
            updatedSlots[tourId].seatsAvailable -= seatsToDeduct;

            t.update(tourDocRef, { slots: updatedSlots });

            // 5. Save the pending booking
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

        // 6. Return Checkout URL to client
        res.status(200).json({ success: true, url: checkoutSession.url });

    } catch (error) {
        if (error.message.includes("Not enough seats") || error.message.includes("not initialized")) {
            return res.status(400).json({ success: false, message: error.message });
        }
        next(error);
    }
});


// -- ADMIN ROUTES --

// GET /api/v1/admin/bookings
adminRouter.get("/", requireAdmin, async (req, res, next) => {
    try {
        const { status, date } = req.query;
        let query = db.collection("bookings");

        if (status) query = query.where("status", "==", status);
        if (date) query = query.where("date", "==", date);

        // Order by creation time if indices allow, skipping for simple queries here
        const snapshot = await query.get();

        const bookings = [];
        snapshot.forEach(doc => bookings.push(doc.data()));

        res.status(200).json({ success: true, count: bookings.length, data: bookings });
    } catch (error) {
        next(error);
    }
});

// PUT /api/v1/admin/bookings/:id/cancel
adminRouter.put("/:id/cancel", requireAdmin, async (req, res, next) => {
    try {
        const { id } = req.params;

        await db.runTransaction(async (t) => {
            const bookingRef = db.collection("bookings").doc(id);
            const bookingDoc = await t.get(bookingRef);

            if (!bookingDoc.exists) throw new Error("Booking not found");
            const bookingData = bookingDoc.data();

            if (bookingData.status === "cancelled") {
                throw new Error("Booking is already cancelled");
            }

            // Restore seats
            const tourDocRef = db.collection("tours").doc(bookingData.date);
            const tourDoc = await t.get(tourDocRef);

            if (tourDoc.exists) {
                const tourData = tourDoc.data();
                const updatedSlots = { ...tourData.slots };

                const seatsToRestore = bookingData.bookingType === "private" ? 5 : bookingData.seats;

                // Add seats back, ensuring we don't exceed 5
                updatedSlots[bookingData.tourId].seatsAvailable = Math.min(
                    5,
                    updatedSlots[bookingData.tourId].seatsAvailable + seatsToRestore
                );

                t.update(tourDocRef, { slots: updatedSlots });
            }

            // Mark cancelled
            t.update(bookingRef, { status: "cancelled", cancelledAt: admin.firestore.FieldValue.serverTimestamp() });
        });

        res.status(200).json({ success: true, message: "Booking cancelled and seats restored." });
    } catch (error) {
        if (error.message === "Booking not found" || error.message.includes("already cancelled")) {
            return res.status(400).json({ success: false, message: error.message });
        }
        next(error);
    }
});

module.exports = {
    publicRoutes: publicRouter,
    adminRoutes: adminRouter
};
