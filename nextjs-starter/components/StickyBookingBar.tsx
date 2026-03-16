"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function StickyBookingBar() {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    // Show on specific pages after scrolling
    useEffect(() => {
        const handleScroll = () => {
            // Show out of header view (approx 300px down)
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Only enable scroll listener on specific paths that act as marketing pages
        const activePaths = ['/', '/expeditions'];
        if (activePaths.includes(pathname)) {
            window.addEventListener('scroll', handleScroll);
            // Run once on mount in case they are already scrolled
            handleScroll();
        } else {
            setIsVisible(false); // Hide entirely
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-nomad-black border-t border-nomad-red/30 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md bg-opacity-95 transform transition-transform duration-300 translate-y-0 pb-safe">
            <div className="container mx-auto px-4 py-3 md:py-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">

                {/* Trust Badges Area */}
                <div className="flex items-center gap-3 md:gap-6 w-full sm:w-auto justify-center sm:justify-start">
                    <div className="flex items-center gap-2">
                        <span className="text-nomad-red text-lg hidden md:inline">✪</span>
                        <div className="flex flex-col">
                            <div className="flex gap-1 text-[#00aa6c]"> {/* TripAdvisor Green */}
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                            </div>
                            <span className="font-mono text-[9px] md:text-[10px] text-nomad-paper/70 tracking-widest uppercase mt-0.5">TripAdvisor Elite</span>
                        </div>
                    </div>

                    <div className="w-px h-8 bg-white/10 hidden sm:block"></div>

                    <div className="flex flex-col hidden sm:flex">
                        <span className="font-heading text-lg md:text-xl text-nomad-paper leading-none m-0">
                            SEATS FROM $179
                        </span>
                        <span className="font-mono text-[9px] text-nomad-red tracking-widest uppercase mt-1">
                            Passenger-Only Expeditions
                        </span>
                    </div>
                </div>

                {/* CTA Area */}
                <div className="w-full sm:w-auto">
                    <Link href="/booking" className="btn-primary px-8 py-3 text-sm md:text-base w-full sm:w-auto text-center block whitespace-nowrap shadow-[0_0_15px_rgba(184,59,59,0.3)] hover:shadow-[0_0_25px_rgba(184,59,59,0.6)] transition-shadow">
                        CHECK AVAILABILITY
                    </Link>
                </div>

            </div>
        </div>
    );
}
