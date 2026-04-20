import React, { Suspense } from 'react';
import Link from 'next/link';
import BookingForm from '@/components/BookingForm';

export default function Booking() {
    return (
        <div className="min-h-screen flex flex-col font-body bg-nomad-black text-white selection:bg-accent selection:text-white">
            {/* Header — server-rendered, visible to Google */}
            <header className="p-6 border-b border-white/5 glass-panel">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-xl font-heading tracking-widest text-white hover:text-accent transition-colors uppercase">
                        Nomad<span className="text-accent">/</span>Yellowstone
                    </Link>
                    <div className="flex items-center gap-4">
                        {/* Click-to-call (Fix 2) */}
                        <a href="tel:+12087452088" className="flex items-center gap-1.5 text-nomad-paper/80 hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <span className="font-mono text-xs tracking-widest hidden md:inline">(208) 745-2088</span>
                            <span className="font-mono text-[9px] tracking-widest md:hidden">CALL</span>
                        </a>
                        <nav className="space-x-8 text-xs font-mono tracking-widest text-nomad-paper/80 hidden md:block">
                            <Link href="/" className="hover:text-white transition-colors">[RETURN TO HOME]</Link>
                            <Link href="/intel" className="hover:text-white transition-colors">[JOURNAL]</Link>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="flex-grow container mx-auto px-4 py-12 md:py-20 flex flex-col items-center">
                {/* Static SEO content — server-rendered, visible to Google */}
                <div className="max-w-5xl w-full mb-12">
                    <span className="font-mono text-accent text-xs tracking-widest mb-2 block">// BOOK YOUR TOUR</span>
                    <h1 className="font-heading text-4xl md:text-5xl text-white uppercase leading-none mb-6">
                        Book a Guided ATV Tour Near Yellowstone
                    </h1>
                    <p className="text-nomad-paper/80 text-sm md:text-base font-light border-l-2 border-accent/20 pl-4 max-w-2xl leading-relaxed">
                        <strong>You ride, we drive.</strong> Professional guides pilot our Can-Am Commander ATVs through Island Park&apos;s backcountry — 20 minutes from West Yellowstone. All 2–3 hour tours start at $179 per seat and include dust protection gear and headsets. No experience needed, ages 5+.
                    </p>

                    {/* Trust badge — server-rendered social proof (Fix 6 bonus) */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6 py-4 border-y border-white/10">
                        <div className="flex items-center gap-2">
                            <div className="flex gap-0.5 text-[#00aa6c]">
                                {[0, 1, 2, 3, 4].map((i) => (
                                    <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                ))}
                            </div>
                            <span className="font-mono text-xs text-nomad-paper/60 uppercase tracking-widest">TripAdvisor</span>
                        </div>
                        <p className="text-nomad-paper/70 text-sm italic">&ldquo;Best part of our trip!! Great scenic views, and the driver was very friendly.&rdquo;</p>
                    </div>
                </div>

                {/* Interactive booking form — client island */}
                <BookingForm />
            </main>

            <footer className="py-12 bg-black border-t border-white/10 font-mono text-xs text-nomad-paper/40 mt-auto">
                <div className="container mx-auto px-4 text-center">
                    <p className="mb-2">Questions? Call <a href="tel:+12087452088" className="text-accent hover:text-white transition-colors">(208) 745-2088</a></p>
                    <p className="mb-4">NOMAD YELLOWSTONE // EST. 2026 // ISLAND PARK, ID</p>
                    <div className="flex justify-center gap-6 opacity-50">
                        <Link href="/privacy" className="hover:text-white transition-colors">PRIVACY</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">TERMS</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
