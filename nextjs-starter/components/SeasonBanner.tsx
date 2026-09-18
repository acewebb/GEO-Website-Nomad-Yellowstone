'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const SEASON_START_2027 = new Date('2027-05-15T00:00:00-06:00');

export default function SeasonBanner() {
    const [now, setNow] = useState<Date | null>(null);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        setNow(new Date());
        const interval = setInterval(() => setNow(new Date()), 60_000);
        return () => clearInterval(interval);
    }, []);

    if (!now || dismissed) return null;

    return (
        <div className="relative z-[9999] w-full bg-gradient-to-r from-nomad-red via-accent to-nomad-red text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-2 text-xs md:text-sm font-mono uppercase tracking-widest relative text-center">
                <span className="inline-block w-2 h-2 bg-yellow-300 rounded-full animate-pulse flex-shrink-0" />
                <span>
                    <strong>2026 Season Closed</strong> — Now Booking for <strong>Summer 2027</strong> with <span className="text-yellow-300 font-bold">15% OFF</span> —{' '}
                    <Link href="/booking" className="underline underline-offset-2 hover:text-yellow-300 transition-colors font-bold">
                        Book Early for 2027 &amp; Save →
                    </Link>
                </span>
                <button
                    onClick={() => setDismissed(true)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-lg leading-none"
                    aria-label="Dismiss banner"
                >
                    ×
                </button>
            </div>
        </div>
    );
}

export function SeasonCountdownInline() {
    const [now, setNow] = useState<Date | null>(null);

    useEffect(() => {
        setNow(new Date());
        const interval = setInterval(() => setNow(new Date()), 60_000);
        return () => clearInterval(interval);
    }, []);

    if (!now) return null;

    const msUntilOpen = SEASON_START_2027.getTime() - now.getTime();
    const daysUntilOpen = msUntilOpen > 0 ? Math.ceil(msUntilOpen / (1000 * 60 * 60 * 24)) : 0;

    return (
        <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-nomad-red/10 border border-nomad-red/30 rounded-sm px-5 py-3">
            <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-nomad-red rounded-full animate-pulse" />
                <span className="font-mono text-xs md:text-sm text-nomad-red uppercase tracking-widest font-bold">
                    2026 Season Closed • 2027 Opens in {daysUntilOpen} Days (May 15)
                </span>
            </div>
            <span className="text-xs font-mono font-bold text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/30 uppercase tracking-wider">
                15% Off 2027 Bookings
            </span>
        </div>
    );
}

