'use client';
import React, { useState } from 'react';
import { Outfit } from "next/font/google";
import Link from 'next/link';

const outfit = Outfit({ subsets: ["latin"] });

export default function Booking() {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const timeSlots = ["9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"];

    return (
        <div className={`min-h-screen flex flex-col font-sans ${outfit.className} bg-background text-foreground selection:bg-accent selection:text-white`}>
            <header className="p-6 border-b border-mist/10">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-white tracking-tight">Nomad Yellowstone</Link>
                    <nav className="space-x-4 text-sm font-medium">
                        <Link href="/blog" className="text-mist hover:text-white transition-colors">Blog</Link>
                        <Link href="/" className="text-mist hover:text-white transition-colors">Home</Link>
                    </nav>
                </div>
            </header>

            <main className="flex-grow container mx-auto px-4 py-12 md:py-20 flex flex-col items-center">
                <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Left: Booking Details */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-accent font-bold uppercase tracking-widest text-sm">Start Your Adventure</span>
                            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white leading-tight">Book Your Guided <br /><span className="text-gradient">ATV Tour</span></h1>
                            <p className="text-mist/80 text-lg">Small groups, expert guides, and exclusive access to the best views in Island Park.</p>
                        </div>

                        <div className="glass p-6 rounded-2xl border border-mist/10">
                            <h3 className="text-xl font-semibold text-white mb-4">Tour Details</h3>
                            <ul className="space-y-4 text-mist/70">
                                <li className="flex justify-between border-b border-mist/5 pb-2">
                                    <span>Duration</span>
                                    <span className="text-white font-medium">3 Hours</span>
                                </li>
                                <li className="flex justify-between border-b border-mist/5 pb-2">
                                    <span>Season</span>
                                    <span className="text-white font-medium">May 15 - Oct 31</span>
                                </li>
                                <li className="flex justify-between border-b border-mist/5 pb-2">
                                    <span>Group Size</span>
                                    <span className="text-white font-medium">Max 6 Vehicles</span>
                                </li>
                                <li className="flex justify-between pt-2">
                                    <span className="text-lg">Price</span>
                                    <span className="text-accent text-xl font-bold">$450 <span className="text-xs font-normal text-mist/50">/ vehicle</span></span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right: Booking Form */}
                    <div className="glass-card p-8 rounded-3xl border border-accent/20 shadow-2xl relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2" />

                        <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-mist/60 block">Select Date</label>
                                <input
                                    type="date"
                                    min="2026-05-15"
                                    max="2026-10-31"
                                    className="w-full bg-surface border border-mist/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors"
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-mist/60 block">Select Time</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {timeSlots.map((time) => (
                                        <button
                                            key={time}
                                            type="button"
                                            onClick={() => setSelectedTime(time)}
                                            className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all border ${selectedTime === time ? 'bg-accent text-white border-accent' : 'bg-surface text-mist border-mist/10 hover:border-mist/30 hover:bg-surface-hover'}`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-mist/10">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-mist/60 block">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-surface border border-mist/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-mist/60 block">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="w-full bg-surface border border-mist/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors" />
                                </div>
                            </div>

                            <button className="w-full py-4 rounded-xl bg-accent hover:bg-accent/90 text-white font-bold text-lg transition-all shadow-lg transform hover:-translate-y-1 mt-4">
                                Confirm Booking Request
                            </button>
                            <p className="text-center text-xs text-mist/40">No payment required today. We will confirm availability within 24 hours.</p>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}
