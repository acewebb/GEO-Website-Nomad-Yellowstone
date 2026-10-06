"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function StickyBookingBar() {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show only when scrolled down past hero CTA area (350px)
            const shouldShow = window.scrollY > 350;
            setIsVisible(shouldShow);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Do not show on booking or admin pages
    if (pathname === '/booking' || pathname?.startsWith('/admin')) {
        return null;
    }

    return (
        <aside aria-label="Quick Booking Bar">
            {/* MOBILE DUAL STICKY BAR: Docked at bottom when scrolled down */}
            <div
                className={`fixed bottom-0 left-0 right-0 z-50 md:hidden bg-nomad-black/95 backdrop-blur-md border-t border-white/15 px-4 py-3 shadow-[0_-4px_25px_rgba(0,0,0,0.8)] transition-all duration-300 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-full opacity-0 pointer-events-none'
                }`}
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
                        <span>BOOK 2027 TOUR</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* DESKTOP STICKY BOOK NOW BUTTON: Bottom right floating button on scroll down */}
            <div
                className={`hidden md:block fixed bottom-6 right-6 z-50 transition-all duration-300 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto' : 'translate-y-8 opacity-0 scale-95 pointer-events-none'
                }`}
            >
                <Link
                    href="/booking"
                    className="group relative flex items-center gap-2.5 bg-accent hover:bg-accent/90 text-white font-heading font-bold text-xs tracking-widest uppercase px-6 py-3.5 rounded-full shadow-[0_4px_25px_rgba(166,60,36,0.6)] hover:shadow-[0_6px_30px_rgba(166,60,36,0.9)] hover:scale-105 active:scale-95 transition-all duration-200"
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
