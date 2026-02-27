import { NextResponse } from 'next/server';

export function checkAdminAuth(request: Request) {
    const authHeader = request.headers.get("x-admin-key") || request.headers.get("authorization");
    const expectedKey = process.env.ADMIN_API_KEY;

    if (!expectedKey) {
        return NextResponse.json({ success: false, message: "Server misconfiguration: No admin key set." }, { status: 500 });
    }

    // Allow either `x-admin-key: secret` OR `Authorization: Bearer secret`
    let incomingKey = authHeader;
    if (authHeader && authHeader.startsWith("Bearer ")) {
        incomingKey = authHeader.split(" ")[1];
    }

    if (incomingKey !== expectedKey) {
        return NextResponse.json({ success: false, message: "Unauthorized access." }, { status: 401 });
    }

    return null; // Authorization successful
}
