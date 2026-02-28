import React from 'react';
import Link from 'next/link';

export default function PricingSection() {
    return (
        <section id="pricing" className="py-24 md:py-32 bg-nomad-black relative z-10 border-y border-white/5">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* Section Header */}
                <div className="text-center mb-16 md:mb-24">
                    <span className="font-mono text-accent text-sm tracking-widest mb-4 block font-bold uppercase drop-shadow-sm">
                        // SECURE YOUR EXPEDITION
                    </span>
                    <h2 className="font-heading text-4xl md:text-6xl text-white uppercase tracking-tight mb-6">
                        Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-600">Access</span>
                    </h2>
                    <p className="font-mono text-sm md:text-base text-nomad-paper/60 max-w-2xl mx-auto leading-relaxed">
                        Select the access tier that matches your desired level of wilderness immersion. All guided expeditions include dust protection gear and expert navigation.
                    </p>
                </div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 items-center">

                    {/* Left Column: Basic Frame */}
                    <div className="glass-panel p-8 border border-white/5 bg-surface/20 rounded-sm flex flex-col h-full opacity-80 hover:opacity-100 transition-opacity">
                        <div className="mb-6">
                            <h3 className="font-heading text-2xl uppercase text-white mb-2">Basic Rental</h3>
                            <p className="font-mono text-xs text-nomad-paper/50 uppercase tracking-widest h-8">Self-Drive E-Bike / Standard ATV</p>
                        </div>
                        <div className="mb-8">
                            <span className="font-heading text-5xl text-white tracking-tight">$149</span>
                            <span className="font-mono text-xs text-nomad-paper/40 ml-2">/ vehicle</span>
                        </div>
                        <ul className="space-y-4 font-mono text-xs text-nomad-paper/70 tracking-wide flex-grow mb-8">
                            <li className="flex gap-3"><span className="text-white/30">✗</span> No Guide Provided</li>
                            <li className="flex gap-3"><span className="text-white/30">✗</span> Standard Paved/Gravel Routes</li>
                            <li className="flex gap-3"><span className="text-white/30">✗</span> High Damage Liability</li>
                            <li className="flex gap-3"><span className="text-white/30">✗</span> High Traffic Zones</li>
                        </ul>
                        <div className="text-center font-mono text-[10px] text-nomad-paper/30 uppercase pt-4 border-t border-white/10">
                            Available Elsewhere in Town
                        </div>
                    </div>

                    {/* Middle Column: The Signature Core (Most Popular) */}
                    <div className="glass-panel p-8 border border-accent relative bg-gradient-to-b from-surface/80 to-nomad-black rounded-sm flex flex-col h-full transform md:-translate-y-4 shadow-[0_0_40px_rgba(200,60,60,0.15)]">
                        {/* Most Popular Badge */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-nomad-black font-bold font-mono text-xs px-4 py-1 uppercase tracking-widest shadow-lg">
                            Most Popular
                        </div>

                        <div className="mb-6 pt-4">
                            <h3 className="font-heading text-3xl uppercase text-accent mb-2">Signature Tour</h3>
                            <p className="font-mono text-xs text-nomad-paper/70 uppercase tracking-widest h-8">Guided Passenger-Only UTV</p>
                        </div>
                        <div className="mb-8 flex items-baseline gap-2">
                            <span className="font-heading text-6xl text-white tracking-tight">$249</span>
                            <span className="font-mono text-xs text-nomad-paper/40">/ passenger</span>
                        </div>
                        <ul className="space-y-4 font-mono text-sm text-white/90 tracking-wide flex-grow mb-8 border-y border-white/10 py-6">
                            <li className="flex gap-3"><span className="text-accent">✓</span> Professional Driver & Guide</li>
                            <li className="flex gap-3"><span className="text-accent">✓</span> The "Silent Chapter" Meditation Stop</li>
                            <li className="flex gap-3"><span className="text-accent">✓</span> Professional Media Package included</li>
                            <li className="flex gap-3"><span className="text-accent">✓</span> Zero Vehicle Liability for Guests</li>
                            <li className="flex gap-3"><span className="text-accent">✓</span> Deep Backcountry Access</li>
                        </ul>
                        <Link href="/booking" className="btn-primary w-full py-4 text-center">
                            Secure Your Seat
                        </Link>
                    </div>

                    {/* Right Column: The Anchor */}
                    <div className="glass-panel p-8 border border-white/5 bg-surface/20 rounded-sm flex flex-col h-full">
                        <div className="mb-6">
                            <h3 className="font-heading text-2xl uppercase text-white mb-2">The Legend</h3>
                            <p className="font-mono text-[10px] text-nomad-paper/50 uppercase tracking-widest h-8 pr-4">Complete Vehicle Exhaustive Buyout</p>
                        </div>
                        <div className="mb-8">
                            <span className="font-heading text-5xl text-white tracking-tight">$1,997</span>
                            <span className="font-mono text-xs text-nomad-paper/40 ml-2">/ flat rate</span>
                        </div>
                        <ul className="space-y-4 font-mono text-xs text-nomad-paper/70 tracking-wide flex-grow mb-8">
                            <li className="flex gap-3 text-white"><span className="text-accent font-bold">✓</span> Ultimate Privacy</li>
                            <li className="flex gap-3"><span className="text-white/50">✓</span> Custom Route Variations</li>
                            <li className="flex gap-3"><span className="text-white/50">✓</span> Dedicated Professional Driver</li>
                            <li className="flex gap-3"><span className="text-white/50">✓</span> Full Media Package</li>
                            <li className="flex gap-3"><span className="text-white/50">✓</span> Up to 5 Passengers</li>
                        </ul>
                        <Link href="/booking?buyout=true" className="btn-outline w-full py-4 text-center text-xs">
                            Request Buyout
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    );
}
