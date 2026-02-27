import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';

// Default availability schema per day
const defaultSlots = {
    "9am": { seatsAvailable: 5, tourTime: "09:00 - 12:00" },
    "12pm": { seatsAvailable: 5, tourTime: "12:00 - 15:00" },
    "3pm": { seatsAvailable: 5, tourTime: "15:00 - 18:00" },
};

export async function GET(
    request: Request,
    { params }: { params: Promise<{ date: string }> }
) {
    try {
        const { date } = await params;

        // Basic date format validation (YYYY-MM-DD)
        if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
            return NextResponse.json(
                { success: false, message: "Invalid date format. Use YYYY-MM-DD." },
                { status: 400 }
            );
        }

        const docRef = db.collection("tours").doc(date);
        const docSnap = await docRef.get();

        if (!docSnap.exists) {
            // Auto-populate availability for this date if it doesn't exist
            await docRef.set({ date, slots: defaultSlots });
            return NextResponse.json({ success: true, date, slots: defaultSlots }, { status: 200 });
        }

        return NextResponse.json({ success: true, date, slots: docSnap.data()?.slots }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
