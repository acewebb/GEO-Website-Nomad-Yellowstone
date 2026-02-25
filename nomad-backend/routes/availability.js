const express = require("express");
const router = express.Router();
const { db } = require("../config/firebase");

// Default availability schema per day
const defaultSlots = {
    "9am": { seatsAvailable: 4, tourTime: "09:00 - 13:00" },
    "1pm": { seatsAvailable: 4, tourTime: "13:00 - 17:00" },
    "5pm": { seatsAvailable: 4, tourTime: "17:00 - 21:00" },
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

        res.status(200).json({ success: true, date, slots: docSnap.data().slots });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
