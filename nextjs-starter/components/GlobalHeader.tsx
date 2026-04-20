'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import SeasonBanner from '@/components/SeasonBanner';

export default function GlobalHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 flex flex-col ${scrolled
                ? 'bg-nomad-black/80 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/50'
                : 'bg-nomad-black border-b-[8px] border-nomad-black'
                }`}
        >
            <div className="w-full">
                <SeasonBanner />
            </div>
            <div className={`container mx-auto px-4 md:px-8 flex items-center justify-between w-full h-12 md:h-auto transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
                {/* Left: Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-nomad-paper rounded-full opacity-50 shadow-[0_0_8px_rgba(230,225,215,0.6)] hidden sm:block"></div>
                    <Link href="/" className="text-xl md:text-3xl font-heading tracking-[0.15em] md:tracking-widest text-nomad-paper hover:text-white transition-colors uppercase font-black">
                        Nomad
                        <span className="block text-[8px] md:text-[10px] tracking-[0.3em] text-nomad-paper/60 border-t border-nomad-paper/30 mt-1 pt-0.5 md:pt-1">Yellowstone</span>
                    </Link>
                </div>

                {/* Right: Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/about" className="text-xs font-heading font-black tracking-widest text-nomad-paper hover:text-white transition-colors uppercase">THE GUIDES</Link>
                    <Link href="/location" className="text-xs font-heading font-black tracking-widest text-nomad-paper hover:text-white transition-colors uppercase">LOCATION</Link>
                    <Link href="/intel" className="text-xs font-heading font-black tracking-widest text-nomad-paper hover:text-white transition-colors uppercase">JOURNAL</Link>
                    <a href="tel:+12087452088" className="text-xs font-heading font-black tracking-widest text-nomad-paper hover:text-white transition-colors uppercase flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        (208) 745-2088
                    </a>
                    <Link href="/booking" className="text-xs font-heading font-black tracking-widest px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-nomad-black transition-all uppercase rounded-sm">BOOK NOW</Link>
                </nav>

                {/* Right: Mobile Hamburger & Quick Book */}
                <div className="flex md:hidden items-center gap-3">
                    <a href="tel:+12087452088" className="text-[9px] font-heading font-black tracking-widest px-2 py-2 text-nomad-paper hover:text-white transition-all uppercase flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                        CALL
                    </a>
                    <Link href="/booking" className="text-[9px] font-heading font-black tracking-widest px-3 py-2 border border-accent text-accent hover:bg-accent hover:text-nomad-black transition-all uppercase rounded-sm">BOOK</Link>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-nomad-paper focus:outline-none flex flex-col justify-center items-center w-8 h-8 relative"
                        aria-label="Toggle Menu"
                    >
                        <span className={`block w-5 h-px bg-nomad-paper absolute transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                        <span className={`block w-5 h-px bg-nomad-paper absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`block w-5 h-px bg-nomad-paper absolute transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 w-full bg-nomad-black/95 backdrop-blur-xl border-b border-white/10 md:hidden overflow-hidden shadow-2xl"
                    >
                        <nav className="flex flex-col px-6 py-6 gap-6">
                            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-heading font-black tracking-[0.2em] text-nomad-paper hover:text-white transition-colors uppercase">THE GUIDES</Link>
                            <div className="w-full h-px bg-white/5"></div>
                            <Link href="/location" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-heading font-black tracking-[0.2em] text-nomad-paper hover:text-white transition-colors uppercase">LOCATION</Link>
                            <div className="w-full h-px bg-white/5"></div>
                            <Link href="/intel" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-heading font-black tracking-[0.2em] text-nomad-paper hover:text-white transition-colors uppercase">JOURNAL</Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
