import React from 'react';
import Link from 'next/link';

export default function PricingSection() {
    return (
        <section id="pricing" className="py-24 md:py-32 bg-nomad-black relative z-10 border-y border-white/5">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* Section Header */}
                <div className="text-center mb-16 md:mb-24">
                    <span className="font-mono text-accent text-sm tracking-widest mb-4 block font-bold uppercase drop-shadow-sm">
                        // PICK YOUR TOUR
                    </span>
                    <h2 className="font-heading text-4xl md:text-6xl text-white uppercase tracking-tight mb-6">
                        Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-600">Access</span>
                    </h2>
                    <p className="font-mono text-sm md:text-base text-nomad-paper/60 max-w-2xl mx-auto leading-relaxed">
                        Select the option that matches your desired level of wilderness adventure. All guided tours include safety gear and expert navigation.
                    </p>
                </div>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto items-stretch">

                    {/* Column 1: Signature Tour */}
                    <div className="glass-panel p-8 border border-white/10 bg-surface/20 rounded-sm flex flex-col h-full hover:border-white/30 transition-colors">
                        <div className="mb-6">
                            <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2">Guided / Passenger</span>
                            <h3 className="font-heading text-3xl uppercase text-white mb-2">Signature Tour</h3>
                            <p className="font-mono text-[11px] text-nomad-paper/60 uppercase tracking-widest h-8">2–3 Hour Guided ATV Adventure (Individual Seats)</p>
                        </div>
                        <div className="mb-8 flex items-baseline gap-2">
                            <span className="font-heading text-6xl text-white tracking-tight">$179</span>
                            <span className="font-mono text-xs text-nomad-paper/40">per seat</span>
                        </div>
                        <ul className="space-y-4 font-mono text-xs text-nomad-paper/70 tracking-wide flex-grow mb-8 border-t border-white/5 pt-6">
                            <li className="flex gap-3"><span className="text-accent">✓</span> Professional Driver & Guide</li>
                            <li className="flex gap-3"><span className="text-accent">✓</span> The "Silent Chapter" Meditation Stop</li>
                            <li className="flex gap-3"><span className="text-accent">✓</span> Professional Media Package included</li>
                            <li className="flex gap-3"><span className="text-accent">✓</span> Zero Vehicle Liability for Guests</li>
                            <li className="flex gap-3"><span className="text-accent">✓</span> Deep Backcountry Access</li>
                        </ul>
                        <Link href="/booking" className="btn-outline w-full py-4 px-2 text-center text-xs leading-relaxed flex items-center justify-center">
                            Book Seats
                        </Link>
                    </div>

                    {/* Column 2: Custom / Large Groups */}
                    <div className="glass-panel p-8 border border-white/10 relative bg-gradient-to-b from-surface/20 to-nomad-black rounded-sm flex flex-col h-full hover:border-white/30 transition-colors">
                        {/* Custom Badge */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-nomad-paper/20 text-white font-bold font-mono text-xs px-4 py-1 uppercase tracking-widest shadow-lg">
                            Custom Event
                        </div>

                        <div className="mb-6 pt-4">
                            <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2">Custom Routes & Events</span>
                            <h3 className="font-heading text-3xl uppercase text-white mb-2">Custom Tour</h3>
                            <p className="font-mono text-[11px] text-nomad-paper/60 uppercase tracking-widest h-8">Accommodations for Groups of More Than 5</p>
                        </div>
                        <div className="mb-8 flex items-baseline gap-2">
                            <span className="font-heading text-5xl text-white tracking-tight">Contact Us</span>
                            <span className="font-mono text-xs text-nomad-paper/40">for custom rates</span>
                        </div>
                        <ul className="space-y-4 font-mono text-xs text-nomad-paper/70 tracking-wide flex-grow mb-8 border-t border-white/5 pt-6">
                            <li className="flex gap-3"><span className="text-accent">✓</span> Multi-Vehicle Formations for Groups of 6+</li>
                            <li className="flex gap-3"><span className="text-accent">✓</span> Customized Route Planning & Trail Focus</li>
                            <li className="flex gap-3"><span className="text-accent">✓</span> Flexible Start Times & Extended Durations</li>
                            <li className="flex gap-3"><span className="text-accent">✓</span> Corporate Events, Weddings, & Large Families</li>
                            <li className="flex gap-3"><span className="text-accent">✓</span> Dedicated Lead Guide & Support Team</li>
                        </ul>
                        <div className="flex flex-col gap-3">
                            <a href="tel:+12087452088" className="btn-primary w-full py-4 text-center text-xs leading-relaxed flex items-center justify-center font-bold">
                                Call Base Camp: 208-745-2088
                            </a>
                            <Link href="/contact" className="btn-outline w-full py-3 text-center text-xs leading-relaxed flex items-center justify-center">
                                Send Inquiry Form
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Guided vs. Self-Drive Comparison Block */}
                <div className="mt-24 max-w-4xl mx-auto border-t border-white/10 pt-16">
                    <h3 className="font-heading text-3xl uppercase text-white text-center mb-12">
                        Guided Tour vs. Self-Drive Rental: What's the Difference?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-surface/10 p-6 border border-white/5 rounded-sm">
                            <h4 className="font-mono text-xs text-accent uppercase tracking-widest mb-3">// Safety & Liability</h4>
                            <p className="text-nomad-paper/80 text-sm font-medium leading-relaxed">
                                <strong>Self-Drive:</strong> You take on full responsibility for $20k+ machines. Scratches, rollovers, or trail damages can cost you thousands in deductibles.
                            </p>
                            <p className="text-accent text-sm font-medium leading-relaxed mt-3">
                                <strong>Nomad Guided:</strong> Zero liability. Our WFR-certified professional guides do the driving so you can relax, take photos, and look for wildlife.
                            </p>
                        </div>
                        <div className="bg-surface/10 p-6 border border-white/5 rounded-sm">
                            <h4 className="font-mono text-xs text-accent uppercase tracking-widest mb-3">// Route Access</h4>
                            <p className="text-nomad-paper/80 text-sm font-medium leading-relaxed">
                                <strong>Self-Drive:</strong> Often restricted to flat, dusty county dirt roads due to gate closures or difficulty navigating steep backcountry trails.
                            </p>
                            <p className="text-accent text-sm font-medium leading-relaxed mt-3">
                                <strong>Nomad Guided:</strong> We take you directly up to 10,000-foot summits, the Continental Divide, and remote trails hidden from standard tourists.
                            </p>
                        </div>
                        <div className="bg-surface/10 p-6 border border-white/5 rounded-sm">
                            <h4 className="font-mono text-xs text-accent uppercase tracking-widest mb-3">// Gear & Navigation</h4>
                            <p className="text-nomad-paper/80 text-sm font-medium leading-relaxed">
                                <strong>Self-Drive:</strong> Relies on cell coverage (non-existent in the mountains) or paper maps. No safety backup if you get stranded or lost.
                            </p>
                            <p className="text-accent text-sm font-medium leading-relaxed mt-3">
                                <strong>Nomad Guided:</strong> High-end safety gear, active 2-way headsets, Garmin satellite trackers, bear protection, and local route experts.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
