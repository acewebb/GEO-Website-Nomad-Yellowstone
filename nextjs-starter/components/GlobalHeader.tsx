'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

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
            className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'py-4 bg-nomad-black/80 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/50'
                : 'py-6 bg-nomad-black border-b-[8px] border-nomad-black'
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between w-full h-12 md:h-auto">
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
                    <Link href="/booking" className="text-xs font-heading font-black tracking-widest px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-nomad-black transition-all uppercase rounded-sm shadow-[0_0_15px_rgba(200,60,60,0.2)]">BOOK NOW</Link>
                </nav>

                {/* Right: Mobile Hamburger & Quick Book */}
                <div className="flex md:hidden items-center gap-3">
                    <Link href="/booking" className="text-[9px] font-heading font-black tracking-widest px-3 py-2 border border-accent text-accent hover:bg-accent hover:text-nomad-black transition-all uppercase rounded-sm shadow-[0_0_15px_rgba(200,60,60,0.2)]">BOOK</Link>
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
