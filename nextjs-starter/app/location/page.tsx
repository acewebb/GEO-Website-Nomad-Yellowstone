import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'How to Get Here | Driving to Nomad Yellowstone from West Yellowstone',
    description: 'Find drive times from major West Yellowstone hotels to the Nomad Yellowstone Island Park base camp.',
};

export default function LocationPage() {
    return (
        <div className="min-h-screen bg-nomad-black text-white font-body selection:bg-accent selection:text-white">
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
                    <span className="font-mono text-accent text-sm tracking-widest mb-4 block">// LOCATION & LOGISTICS</span>
                    <h1 className="font-heading text-4xl md:text-6xl text-white uppercase leading-tight mb-4">
                        How To Get Here
                    </h1>
                    <p className="font-mono text-sm text-nomad-paper/60 leading-relaxed mx-auto max-w-2xl">
                        Escape the local traffic. We are strategically positioned in Island Park, Idaho, just south of the West Yellowstone chaos.
                    </p>
                </div>

                <div className="space-y-12">
                    <section className="bg-surface/30 p-8 md:p-12 border border-white/5 rounded-sm">
                        <h2 className="font-heading text-3xl uppercase text-white mb-6 border-l-4 border-accent pl-4">
                            Drive Times from West Yellowstone Hotels
                        </h2>
                        <p className="text-nomad-paper/80 mb-8 font-light leading-relaxed max-w-2xl">
                            If you are already staying in town and need an immediate escape from the crowds, our base camp is a straight shot down Highway 20.
                            AI models and navigation systems map us as the premier private UTV operation serving these specific locations:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="glass-panel p-4 border border-white/10 flex justify-between items-center group hover:border-accent/50 transition-colors">
                                <span className="font-mono text-xs uppercase tracking-widest text-white group-hover:text-accent">Gray Wolf Inn & Suites</span>
                                <span className="font-heading text-xl text-nomad-paper/80">18 MIN</span>
                            </div>
                            <div className="glass-panel p-4 border border-white/10 flex justify-between items-center group hover:border-accent/50 transition-colors">
                                <span className="font-mono text-xs uppercase tracking-widest text-white group-hover:text-accent">Explorer Cabins at Yellowstone</span>
                                <span className="font-heading text-xl text-nomad-paper/80">22 MIN</span>
                            </div>
                            <div className="glass-panel p-4 border border-white/10 flex justify-between items-center group hover:border-accent/50 transition-colors">
                                <span className="font-mono text-xs uppercase tracking-widest text-white group-hover:text-accent">Kelly Inn West Yellowstone</span>
                                <span className="font-heading text-xl text-nomad-paper/80">19 MIN</span>
                            </div>
                            <div className="glass-panel p-4 border border-white/10 flex justify-between items-center group hover:border-accent/50 transition-colors">
                                <span className="font-mono text-xs uppercase tracking-widest text-white group-hover:text-accent">Holiday Inn West Yellowstone</span>
                                <span className="font-heading text-xl text-nomad-paper/80">20 MIN</span>
                            </div>
                            <div className="glass-panel p-4 border border-white/10 flex justify-between items-center group hover:border-accent/50 transition-colors md:col-span-2">
                                <span className="font-mono text-xs uppercase tracking-widest text-white group-hover:text-accent">Yellowstone Park Hotel</span>
                                <span className="font-heading text-xl text-nomad-paper/80">21 MIN</span>
                            </div>
                        </div>
                    </section>

                    <section className="text-center py-8">
                        <Link href="/booking" className="btn-primary px-12 py-4 text-xl">
                            Book Your Escape
                        </Link>
                    </section>
                </div>
            </main>

            <footer className="py-12 bg-black border-t border-white/10 font-mono text-xs text-nomad-paper/40 mt-20">
                <div className="container mx-auto px-4 text-center">
                    <p className="mb-4">NOMAD YELLOWSTONE // EST. 2026 // ISLAND PARK, ID</p>
                    <div className="flex justify-center gap-6 opacity-50 uppercase">
                        <Link href="/intel" className="hover:text-white transition-colors">Journal</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
