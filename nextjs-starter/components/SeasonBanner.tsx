'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const SEASON_START = new Date('2026-04-15T00:00:00-06:00');
const SEASON_END = new Date('2026-10-31T23:59:59-06:00');

export default function SeasonBanner() {
    const [now, setNow] = useState<Date | null>(null);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        setNow(new Date());
        const interval = setInterval(() => setNow(new Date()), 60_000);
        return () => clearInterval(interval);
    }, []);

    if (!now || dismissed) return null;

    const msUntilOpen = SEASON_START.getTime() - now.getTime();
    const isPreSeason = msUntilOpen > 0;
    const isInSeason = now >= SEASON_START && now <= SEASON_END;

    if (!isPreSeason && !isInSeason) return null;

    const daysUntilOpen = Math.ceil(msUntilOpen / (1000 * 60 * 60 * 24));

    return (
        <div className="relative z-[9999] w-full bg-gradient-to-r from-nomad-red to-nomad-red/90 text-white">
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-2 text-xs md:text-sm font-mono uppercase tracking-widest relative">
                <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse flex-shrink-0" />
                {isPreSeason ? (
                    <span>
                        2026 Season Opens April 15 — <strong>{daysUntilOpen} day{daysUntilOpen !== 1 ? 's' : ''} away</strong> —{' '}
                        <Link href="/booking" className="underline underline-offset-2 hover:text-accent transition-colors font-bold">
                            Early Dates Filling Fast →
                        </Link>
                    </span>
                ) : (
                    <span>
                        2026 Season is <strong>LIVE</strong> —{' '}
                        <Link href="/booking" className="underline underline-offset-2 hover:text-accent transition-colors font-bold">
                            Limited Slots This Week →
                        </Link>
                    </span>
                )}
                <button
                    onClick={() => setDismissed(true)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-lg leading-none"
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

    const msUntilOpen = SEASON_START.getTime() - now.getTime();
    const isPreSeason = msUntilOpen > 0;

    if (!isPreSeason) return null;

    const daysUntilOpen = Math.ceil(msUntilOpen / (1000 * 60 * 60 * 24));

    return (
        <div className="mt-6 inline-flex items-center gap-3 bg-nomad-red/10 border border-nomad-red/30 rounded-sm px-5 py-3">
            <span className="inline-block w-2 h-2 bg-nomad-red rounded-full animate-pulse" />
            <span className="font-mono text-xs md:text-sm text-nomad-red uppercase tracking-widest font-bold">
                Season opens in {daysUntilOpen} day{daysUntilOpen !== 1 ? 's' : ''}
            </span>
        </div>
    );
}
