'use client';

import React, { Suspense, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function SuccessContent() {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get('session_id');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const sendConversion = () => {
                const gtag = (window as any).gtag;
                if (typeof gtag === 'function') {
                    gtag('event', 'conversion', {
                        'send_to': 'AW-18195711733/WkTzCJew37UcEPWNsuRD',
                        'value': 1.0,
                        'currency': 'USD',
                        'transaction_id': sessionId || ''
                    });
                }
            };
            sendConversion();
        }
    }, [sessionId]);

    return (
        <div className="max-w-xl w-full glass-card p-8 md:p-12 text-center rounded-sm relative hud-overlay">
            {/* HUD Corner Accents */}
            <div className="hud-corner hud-tl"></div>
            <div className="hud-corner hud-tr"></div>
            <div className="hud-corner hud-bl"></div>
            <div className="hud-corner hud-br"></div>

            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent border border-accent/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>

            <span className="font-mono text-accent text-xs tracking-widest mb-2 block uppercase">// Booking Confirmed</span>
            <h1 className="font-heading text-3xl md:text-4xl text-white uppercase mb-4">Gear Up for Adventure</h1>
            <p className="text-nomad-paper/85 text-sm md:text-base font-light mb-8 leading-relaxed">
                Your payment has been successfully processed. We have sent a confirmation email with all your tour details and preparation guidelines.
            </p>

            {sessionId && (
                <div className="mb-8 p-4 bg-white/5 border border-white/10 rounded-sm">
                    <span className="block font-mono text-[10px] text-nomad-paper/40 uppercase tracking-widest mb-1">Receipt reference</span>
                    <span className="font-mono text-xs text-nomad-paper/80 break-all select-all">{sessionId}</span>
                </div>
            )}

            <div className="space-y-4">
                <h3 className="font-mono text-xs text-nomad-paper/50 uppercase tracking-widest mb-4">// Next Steps</h3>
                <div className="text-left space-y-3 max-w-sm mx-auto mb-8">
                    <div className="flex items-start gap-3">
                        <span className="font-mono text-accent text-xs mt-0.5">[01]</span>
                        <p className="text-xs text-nomad-paper/70">Check your inbox for the confirmation email containing arrival times and driving directions.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="font-mono text-accent text-xs mt-0.5">[02]</span>
                        <p className="text-xs text-nomad-paper/70">Review our <Link href="/trip-prep" className="text-accent hover:underline">Trip Prep Guide</Link> for clothing recommendations and rental policies.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="font-mono text-accent text-xs mt-0.5">[03]</span>
                        <p className="text-xs text-nomad-paper/70">If you have any questions, feel free to call us at <a href="tel:+12087452088" className="text-accent hover:underline">(208) 745-2088</a>.</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link href="/" className="btn-primary px-8 py-3 text-sm">
                    Return to Basecamp
                </Link>
                <Link href="/trip-prep" className="btn-outline px-8 py-3 text-sm">
                    Read Trip Prep
                </Link>
            </div>
        </div>
    );
}

export default function SuccessPage() {
    return (
        <div className="min-h-screen flex flex-col font-body bg-nomad-black text-white selection:bg-accent selection:text-white">
            <header className="p-6 border-b border-white/5 glass-panel">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-xl font-heading tracking-widest text-white hover:text-accent transition-colors uppercase">
                        Nomad<span className="text-accent">/</span>Yellowstone
                    </Link>
                    <div className="flex items-center gap-4">
                        <a href="tel:+12087452088" className="flex items-center gap-1.5 text-nomad-paper/80 hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <span className="font-mono text-xs tracking-widest hidden md:inline">(208) 745-2088</span>
                            <span className="font-mono text-[9px] tracking-widest md:hidden">CALL</span>
                        </a>
                    </div>
                </div>
            </header>

            <main className="flex-grow container mx-auto px-4 py-16 flex flex-col items-center justify-center">
                <Suspense fallback={
                    <div className="font-mono text-xs text-nomad-paper/40 uppercase tracking-widest animate-pulse-slow">
                        Loading confirmation details...
                    </div>
                }>
                    <SuccessContent />
                </Suspense>
            </main>

            <footer className="py-12 bg-black border-t border-white/10 font-mono text-xs text-nomad-paper/40 mt-auto">
                <div className="container mx-auto px-4 text-center">
                    <p className="mb-2">Questions? Call <a href="tel:+12087452088" className="text-accent hover:text-white transition-colors">(208) 745-2088</a></p>
                    <p className="mb-4">NOMAD YELLOWSTONE // EST. 2026 // ISLAND PARK, ID</p>
                </div>
            </footer>
        </div>
    );
}
