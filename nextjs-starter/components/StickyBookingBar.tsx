"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function StickyBookingBar() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Small delay so the entrance animation plays after page load
        const timer = setTimeout(() => setMounted(true), 400);
        return () => clearTimeout(timer);
    }, []);

    // Hide on the booking page — user is already there
    if (pathname === '/booking') return null;

    return (
        <div
            className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${mounted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-90'}`}
        >
            <Link
                href="/booking"
                className="group relative flex items-center gap-2.5 bg-accent text-white font-heading font-bold text-sm md:text-base tracking-[0.15em] uppercase px-6 py-4 md:px-8 md:py-4 rounded-full shadow-[0_4px_20px_rgba(166,60,36,0.5)] hover:shadow-[0_6px_30px_rgba(166,60,36,0.7)] hover:scale-105 active:scale-95 transition-all duration-200"
            >
                {/* Pulse ring on load */}
                <span className="absolute inset-0 rounded-full border-2 border-accent animate-ping opacity-30 pointer-events-none" style={{ animationIterationCount: 3, animationDuration: '1.5s' }} />

                {/* Calendar icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                </svg>

                BOOK NOW
            </Link>
        </div>
    );
}
