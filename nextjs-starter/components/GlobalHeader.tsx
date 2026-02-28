'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function GlobalHeader() {
    const [scrolled, setScrolled] = useState(false);

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
            <div className="container mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-nomad-paper rounded-full opacity-50 shadow-[0_0_8px_rgba(230,225,215,0.6)]"></div>
                    <Link href="/" className="text-2xl md:text-3xl font-heading tracking-widest text-nomad-paper hover:text-white transition-colors uppercase font-black">
                        Nomad
                        <span className="block text-[10px] tracking-[0.3em] text-nomad-paper/60 border-t border-nomad-paper/30 mt-1 pt-1">Yellowstone</span>
                    </Link>
                </div>

                <nav className="flex items-center gap-6 md:gap-8">
                    <Link href="/about" className="text-[10px] md:text-xs font-heading font-black tracking-widest text-nomad-paper hover:text-white transition-colors uppercase hidden md:block">THE GUIDES</Link>
                    <Link href="/location" className="text-[10px] md:text-xs font-heading font-black tracking-widest text-nomad-paper hover:text-white transition-colors uppercase hidden md:block">LOCATION</Link>
                    <Link href="/intel" className="text-[10px] md:text-xs font-heading font-black tracking-widest text-nomad-paper hover:text-white transition-colors uppercase">JOURNAL</Link>
                    <Link href="/booking" className="text-[10px] md:text-xs font-heading font-black tracking-widest px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-nomad-black transition-all uppercase rounded-sm shadow-[0_0_15px_rgba(200,60,60,0.2)]">BOOK NOW</Link>
                </nav>
            </div>
        </motion.header>
    );
}
