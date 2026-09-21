"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function StickyBookingBar() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Small delay so the entrance animation plays smoothly
        const timer = setTimeout(() => setMounted(true), 400);
        return () => clearTimeout(timer);
    }, []);

    // On the booking page: show a subtle help / click-to-call button
    if (pathname === '/booking') {
        return (
            <div
                className={`fixed bottom-5 right-5 z-50 transition-all duration-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
                <a
                    href="tel:+12087452088"
                    className="flex items-center gap-2 bg-nomad-black/90 backdrop-blur-md border border-white/20 text-nomad-paper hover:text-white hover:border-accent font-mono text-xs font-bold uppercase px-4 py-3 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-accent">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>Questions? (208) 745-2088</span>
                </a>
            </div>
        );
    }

    return (
        <aside aria-label="Quick Booking Bar">
            {/* MOBILE DUAL STICKY BAR: Docked at bottom of screen */}
            <div
                className={`fixed bottom-0 left-0 right-0 z-50 md:hidden bg-nomad-black/95 backdrop-blur-md border-t border-white/15 px-4 py-3 shadow-[0_-4px_25px_rgba(0,0,0,0.8)] transition-all duration-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
            >
                <div className="flex items-center justify-between gap-3">
                    {/* Click-to-call */}
                    <a
                        href="tel:+12087452088"
                        className="flex-1 flex items-center justify-center gap-2 border border-white/20 bg-white/5 text-white font-mono font-bold text-xs uppercase py-3 rounded-sm active:bg-white/10 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-accent">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span>CALL</span>
                    </a>

                    {/* Book button */}
                    <Link
                        href="/booking"
                        className="flex-[2] flex items-center justify-center gap-2 bg-accent text-white font-heading font-bold text-xs tracking-wider uppercase py-3 rounded-sm shadow-[0_2px_15px_rgba(166,60,36,0.6)] active:scale-95 transition-transform"
                    >
                        <span>BOOK TOUR (15% OFF)</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* DESKTOP STICKY DUAL CTA CAPSULE: Bottom right */}
            <div
                className={`hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-3 bg-nomad-black/95 backdrop-blur-md border border-white/20 p-2 pl-4 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.8)] transition-all duration-500 ${mounted ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}
            >
                {/* Distance and trust context */}
                <div className="flex flex-col pr-2 border-r border-white/10 font-mono">
                    <span className="text-[10px] text-accent font-bold tracking-widest uppercase">
                        20 Min from West Yellowstone
                    </span>
                    <span className="text-[11px] text-nomad-paper/90 font-medium">
                        Passenger-Only · Ages 5+
                    </span>
                </div>

                {/* Click-to-call */}
                <a
                    href="tel:+12087452088"
                    className="flex items-center gap-1.5 font-mono text-xs font-bold text-nomad-paper hover:text-accent transition-colors px-2 py-1"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-accent">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>(208) 745-2088</span>
                </a>

                {/* Book Now Button */}
                <Link
                    href="/booking"
                    className="group relative flex items-center gap-2 bg-accent text-white font-heading font-bold text-xs tracking-widest uppercase px-5 py-3 rounded-full shadow-[0_4px_20px_rgba(166,60,36,0.5)] hover:shadow-[0_6px_25px_rgba(166,60,36,0.8)] hover:scale-105 active:scale-95 transition-all duration-200"
                >
                    <span>BOOK 2027 TOUR</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </Link>
            </div>
        </aside>
    );
}
