import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        success: true,
        envKeys: Object.keys(process.env).filter(key => key.includes('FIREBASE') || key.includes('STRIPE') || key.includes('EMAIL')),
        projectId: process.env.FIREBASE_PROJECT_ID ? 'SET' : 'UNDEFINED'
    });
}
