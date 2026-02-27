import { NextResponse } from 'next/server';
import { db, admin } from '@/lib/firebase';
import { checkAdminAuth } from '@/lib/adminAuth';

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const authError = checkAdminAuth(request);
    if (authError) return authError;

    try {
        const { id } = await params;

        await db.runTransaction(async (t) => {
            const bookingRef = db.collection("bookings").doc(id);
            const bookingDoc = await t.get(bookingRef);

            if (!bookingDoc.exists) throw new Error("Booking not found");

            const bookingData = bookingDoc.data();
            if (!bookingData) throw new Error("Booking not found");

            if (bookingData.status === "cancelled") {
                throw new Error("Booking is already cancelled");
            }

            // Restore seats
            const tourDocRef = db.collection("tours").doc(bookingData.date);
            const tourDoc = await t.get(tourDocRef);

            if (tourDoc.exists) {
                const tourData = tourDoc.data();
                if (tourData) {
                    const updatedSlots = { ...tourData.slots };
                    const seatsToRestore = bookingData.bookingType === "private" ? 5 : bookingData.seats;

                    // Add seats back, ensuring we don't exceed 5
                    updatedSlots[bookingData.tourId].seatsAvailable = Math.min(
                        5,
                        updatedSlots[bookingData.tourId].seatsAvailable + seatsToRestore
                    );

                    t.update(tourDocRef, { slots: updatedSlots });
                }
            }

            // Mark cancelled
            t.update(bookingRef, { status: "cancelled", cancelledAt: admin.firestore.FieldValue.serverTimestamp() });
        });

        return NextResponse.json({ success: true, message: "Booking cancelled and seats restored." }, { status: 200 });
    } catch (error: any) {
        if (error.message === "Booking not found" || error.message.includes("already cancelled")) {
            return NextResponse.json({ success: false, message: error.message }, { status: 400 });
        }
        console.error(error);
        return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
    }
}
