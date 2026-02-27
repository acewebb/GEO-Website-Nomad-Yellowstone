import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { checkAdminAuth } from '@/lib/adminAuth';

export async function GET(request: Request) {
    const authError = checkAdminAuth(request);
    if (authError) return authError;

    try {
        const { searchParams } = new URL(request.url);
        const status = searchParams.get("status");
        const date = searchParams.get("date");

        let query: any = db.collection("bookings");

        if (status) query = query.where("status", "==", status);
        if (date) query = query.where("date", "==", date);

        const snapshot = await query.get();

        const bookings: any[] = [];
        snapshot.forEach((doc: any) => bookings.push(doc.data()));

        return NextResponse.json({ success: true, count: bookings.length, data: bookings }, { status: 200 });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
    }
}
