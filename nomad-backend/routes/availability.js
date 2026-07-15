const express = require("express");
const router = express.Router();
const { db } = require("../config/firebase");

// Default availability schema per day
const defaultSlots = {
    "9am": { seatsAvailable: 5, tourTime: "09:00 - 12:00" },
    "12pm": { seatsAvailable: 5, tourTime: "12:00 - 15:00" },
    "3pm": { seatsAvailable: 5, tourTime: "15:00 - 18:00" },
    "6pm": { seatsAvailable: 5, tourTime: "18:00 - 21:00" },
};

// GET /api/v1/availability/:date
router.get("/:date", async (req, res, next) => {
    try {
        const { date } = req.params;

        // Basic date format validation (YYYY-MM-DD)
        if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
            return res.status(400).json({ success: false, message: "Invalid date format. Use YYYY-MM-DD." });
        }

        const docRef = db.collection("tours").doc(date);
        const docSnap = await docRef.get();

        if (!docSnap.exists) {
            // Auto-populate availability for this date if it doesn't exist
            await docRef.set({ date, slots: defaultSlots });
            return res.status(200).json({ success: true, date, slots: defaultSlots });
        }

        const data = docSnap.data();
        let slots = data.slots || {};
        if (!slots["6pm"]) {
            slots = { ...slots, "6pm": { seatsAvailable: 5, tourTime: "18:00 - 21:00" } };
            await docRef.update({ slots });
        }

        res.status(200).json({ success: true, date, slots });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
