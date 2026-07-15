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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto items-center">

                    {/* Left Column: Basic Frame */}
                    <div className="glass-panel p-8 border border-white/5 bg-surface/20 rounded-sm flex flex-col h-full opacity-80 hover:opacity-100 transition-opacity">
                        <div className="mb-6">
                            <h3 className="font-heading text-2xl uppercase text-white mb-2">Basic Rental</h3>
                            <p className="font-mono text-xs text-nomad-paper/50 uppercase tracking-widest h-8">Self-Drive E-Bike / Standard ATV</p>
                        </div>
                        <div className="mb-8">
                            <span className="font-heading text-5xl text-white tracking-tight">Basic</span>
                            <span className="font-mono text-xs text-nomad-paper/40 ml-2">/ vehicle</span>
                        </div>
                        <ul className="space-y-4 font-mono text-xs text-nomad-paper/70 tracking-wide flex-grow mb-8">
                            <li className="flex gap-3"><span className="text-white/30">✗</span> No Guide Provided</li>
                            <li className="flex gap-3"><span className="text-white/30">✗</span> Standard Paved/Gravel Routes</li>
                            <li className="flex gap-3"><span className="text-white/30">✗</span> High Damage Liability</li>
                            <li className="flex gap-3"><span className="text-white/30">✗</span> High Traffic Zones</li>
                        </ul>
                        <div className="text-center font-mono text-[10px] text-nomad-paper/30 uppercase pt-4 border-t border-white/10">
                            We do not offer self-drive rentals; comparison only
                        </div>
                    </div>

                    {/* Right Column: The Signature Core (Most Popular) */}
                    <div className="glass-panel p-8 border border-accent relative bg-gradient-to-b from-surface/80 to-nomad-black rounded-sm flex flex-col h-full transform md:-translate-y-4 shadow-2xl">
                        {/* Most Popular Badge */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-nomad-black font-bold font-mono text-xs px-4 py-1 uppercase tracking-widest shadow-lg">
                            Most Popular
                        </div>

                        <div className="mb-6 pt-4">
                            <h3 className="font-heading text-3xl uppercase text-accent mb-2">Signature Tour</h3>
                            <p className="font-mono text-xs text-nomad-paper/70 uppercase tracking-widest h-8">2–3 Hour Guided ATV Adventure<br />in Island Park (Passenger‑Only)</p>
                        </div>
                        <div className="mb-8 flex items-baseline gap-2">
                            <span className="font-heading text-6xl text-white tracking-tight">Guided</span>
                            <span className="font-mono text-xs text-nomad-paper/40">/ passenger</span>
                        </div>
                        <ul className="space-y-4 font-mono text-sm text-white/90 tracking-wide flex-grow mb-8 border-y border-white/10 py-6">
                            <li className="flex gap-3"><span className="text-accent">✓</span> Professional Driver & Guide</li>
                            <li className="flex gap-3"><span className="text-accent">✓</span> The "Silent Chapter" Meditation Stop</li>
                            <li className="flex gap-3"><span className="text-accent">✓</span> Professional Media Package included</li>
                            <li className="flex gap-3"><span className="text-accent">✓</span> Zero Vehicle Liability for Guests</li>
                            <li className="flex gap-3"><span className="text-accent">✓</span> Deep Backcountry Access</li>
                        </ul>
                        <Link href="/booking" className="btn-primary w-full py-4 px-2 text-center text-xs leading-relaxed flex items-center justify-center">
                            Signature Tour – 2–3 Hour Guided ATV Adventure in Island Park (Passenger‑Only)
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    );
}
