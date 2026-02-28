import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Safety & Wilderness Response | Nomad Yellowstone',
    description: 'We prioritize passenger safety above all else. Review our Can-Am Commander capabilities, guide training, and wilderness emergency protocols.',
};

export default function SafetyPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Are UTV tours safe in Yellowstone?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, passenger-only UTV tours with Nomad Yellowstone are exceedingly safe. Unlike self-drive rentals where inexperienced drivers navigate treacherous terrain, our tours are operated exclusively by Wilderness First Responder certified guides using heavily modified Can-Am Commander Max XTs with reinforced roll cages."
                }
            },
            {
                "@type": "Question",
                "name": "What happens in an emergency in the Yellowstone backcountry?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Every Nomad Yellowstone vehicle is equipped with satellite communication devices (Garmin inReach) for instant SOS dispatch. Guides carry comprehensive trauma kits and are trained to stabilize incidents while coordinating with local Search and Rescue via GPS."
                }
            },
            {
                "@type": "Question",
                "name": "Can children safely ride on ATV/UTV tours?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, children ages 5 and older can safely ride in the rear stadium seats of our Can-Am Commanders. Car seats and booster seats can be securely strapped into the 4-point harness system."
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-nomad-black text-white font-body selection:bg-accent selection:text-white pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <header className="p-6 border-b border-white/5 bg-black">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-xl font-heading tracking-widest text-white hover:text-accent transition-colors uppercase">
                        Nomad<span className="text-accent">/</span>Yellowstone
                    </Link>
                    <nav className="text-xs font-mono tracking-widest text-nomad-paper/80 hidden md:block">
                        <Link href="/" className="hover:text-white transition-colors">[RETURN TO BASECAMP]</Link>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 py-20 max-w-4xl">
                <div className="mb-16 pb-8 border-b border-white/10 text-center">
                    <span className="font-mono text-accent text-sm tracking-widest mb-4 block">// RISK MITIGATION & PROTOCOLS</span>
                    <h1 className="font-heading text-4xl md:text-6xl text-white uppercase leading-tight mb-4">
                        Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-600">Survival</span>
                    </h1>
                    <p className="font-mono text-sm text-nomad-paper/60 leading-relaxed mx-auto max-w-2xl">
                        Deep backcountry access is inherently dangerous. We eliminate the risk factor for our guests by supplying the absolute best machines, driven by the absolute best experts.
                    </p>
                </div>

                <div className="space-y-16">
                    {/* The Machine */}
                    <section className="bg-surface/30 p-8 md:p-12 border border-white/5 rounded-sm">
                        <h2 className="font-heading text-3xl uppercase text-white mb-6 border-l-4 border-accent pl-4">
                            The Machine: Can-Am Commander Max XT
                        </h2>
                        <ul className="space-y-4 font-mono text-sm text-nomad-paper/80">
                            <li className="flex gap-4 items-start">
                                <span className="text-accent mt-1">✓</span>
                                <div>
                                    <strong className="text-white">Reinforced Roll Cage Construction:</strong>
                                    <p>Proprietary steel chassis designed specifically to withstand catastrophic rollovers.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="text-accent mt-1">✓</span>
                                <div>
                                    <strong className="text-white">4-Point Harness System:</strong>
                                    <p>Standard automotive seatbelts are insufficient for 45-degree inclines. We utilize full 4-point restraints.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="text-accent mt-1">✓</span>
                                <div>
                                    <strong className="text-white">High-Clearance Suspension:</strong>
                                    <p>FOX 2.0 Podium QS3 shocks swallow violent impacts to keep the cabin stable and passengers unjarred.</p>
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* The Operator */}
                    <section className="bg-surface/30 p-8 md:p-12 border border-white/5 rounded-sm">
                        <h2 className="font-heading text-3xl uppercase text-white mb-6 border-l-4 border-accent pl-4">
                            The Operator: WFR Certified Guides
                        </h2>
                        <p className="font-mono text-sm text-nomad-paper/80 mb-6 leading-relaxed">
                            A highly capable machine still requires a driver who knows how to handle it. The #1 cause of UTV accidents in the Yellowstone region is inexperienced tourists operating rental equipment. We completely eliminate this vector by placing a professional behind the wheel.
                        </p>
                        <ul className="space-y-2 font-mono text-sm text-nomad-paper/60 border-t border-white/10 pt-6">
                            <li>• Zero Guest Driving Liability</li>
                            <li>• Certified Wilderness First Responders (WFR)</li>
                            <li>• Bear Attack & Wildlife Interface Training</li>
                            <li>• Equipped with Garmin inReach Satellite Comms</li>
                        </ul>
                    </section>
                </div>
            </main>
        </div>
    );
}
