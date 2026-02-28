import React from 'react';
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "About | Nomad Yellowstone",
    description: "Learn why Nomad Yellowstone is the premier wilderness outfitter in Island Park, Idaho. Guided passenger-only off-road expeditions into the Grand Teton backcountry.",
};

export default function About() {
    return (
        <div className="min-h-screen flex flex-col font-body bg-background text-foreground selection:bg-accent selection:text-white">

            {/* Navigation Header */}
            <header className="relative w-full z-50 py-6 bg-nomad-black border-b-[8px] border-nomad-black">
                <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-nomad-paper rounded-full opacity-50"></div>
                        <Link href="/" className="text-3xl font-heading tracking-widest text-nomad-paper hover:text-white transition-colors uppercase font-black">
                            Nomad
                            <span className="block text-xs tracking-[0.3em] text-nomad-paper/60 border-t border-nomad-paper/30 mt-1 pt-1">Yellowstone</span>
                        </Link>
                    </div>

                    <nav className="flex items-center gap-8">
                        <Link href="/" className="text-xs font-heading font-black tracking-widest text-nomad-paper hover:text-white transition-colors uppercase">HOME</Link>
                        <Link href="/about" className="text-xs font-heading font-black tracking-widest text-accent hover:text-white transition-colors uppercase">ABOUT THE OUTFITTER</Link>
                        <Link href="/#tours" className="text-xs font-heading font-black tracking-widest text-nomad-paper hover:text-white transition-colors uppercase">EXPEDITIONS</Link>
                        <Link href="/intel" className="text-xs font-heading font-black tracking-widest text-nomad-paper hover:text-white transition-colors uppercase">GALLERY</Link>
                        <Link href="/booking" className="text-xs font-heading font-black tracking-widest text-nomad-paper hover:text-white transition-colors uppercase">BOOK NOW</Link>
                    </nav>
                </div>
            </header>

            <main className="flex-grow flex flex-col relative w-full pt-16 pb-24">
                <div className="container mx-auto px-6 max-w-4xl">

                    {/* Header Title */}
                    <div className="mb-16 text-center border-b-[1px] border-nomad-black/10 pb-12">
                        <span className="font-mono text-nomad-red text-sm tracking-widest mb-4 block font-bold uppercase">
                            Island Park, Idaho
                        </span>
                        <h1 className="font-heading text-5xl md:text-7xl font-black text-nomad-black uppercase leading-none tracking-tight">
                            Locally Forged. <br /> Expertly Guided.
                        </h1>
                    </div>

                    {/* Core Content - First Person Narrative */}
                    <article className="prose prose-lg md:prose-xl max-w-none text-nomad-black/90 font-medium">
                        <p className="lead text-2xl font-heading text-nomad-black mb-8 border-l-4 border-nomad-red pl-6 py-2">
                            My name is Ayson Webb, and I built Nomad Yellowstone because standard "rentals" don't cut it when you are trying to access the true depths of the Continental Divide.
                        </p>

                        <p className="mb-6">
                            I grew up right here in Island Park, Idaho. The trails spiderwebbing out into the Yellowstone and Grand Teton backcountry aren't just lines on a map to me—they are my backyard. Over the years, I watched thousands of tourists come to this incredible region, only to be shuffled onto crowded pavement loops or handed the keys to a rental machine with zero context of what they were driving into.
                        </p>

                        <p className="mb-6">
                            That is why Nomad Yellowstone operates exclusively as a <strong>Premium Wilderness Outfitter</strong>. We don't just hand you a helmet and hope you find your way. We put you in the passenger seat of a $30,000, purpose-built Can-Am Commander UTV, and we drive you into the wild.
                        </p>

                        <div className="bg-nomad-paper p-8 shadow-xl my-12 border border-nomad-black/5">
                            <h3 className="font-heading text-3xl uppercase text-nomad-black mb-4">The Guide Advantage</h3>
                            <p className="mb-4">
                                My partner and lead guide brings years of hardcore off-road experience to every expedition. When you are traversing a 10,000-foot ridgeline, you don't want to be staring nervously at a GPS screen. You want to be looking out the window, spotting grizzly bears, and taking in the panoramic views of the caldera.
                            </p>
                            <p>
                                Because we handle the driving, we can navigate terrain that standard civilian renters simply cannot reach safely. We know where the wildlife beds down at dusk during the <em>Golden Hour</em> tour, and we know exactly which trails lead to the untouched summits.
                            </p>
                        </div>

                        <h2 className="font-heading text-4xl uppercase text-nomad-black mt-12 mb-6">Elevating the Expedition</h2>
                        <p className="mb-6">
                            We believe a backcountry experience shouldn't mean sacrificing comfort. We treat every guest like VIPs exploring the frontier. While we provide the heavy-duty dust gear and isolation from the crowds, we also incorporate elements you won't find at standard rental shacks:
                        </p>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 font-mono text-sm tracking-wide bg-nomad-black text-nomad-paper p-8 list-none ml-0 shadow-2xl">
                            <li className="flex items-center gap-3 border-b border-nomad-paper/10 pb-4">
                                <span className="text-nomad-red font-bold text-lg">01</span> Private Transport Options
                            </li>
                            <li className="flex items-center gap-3 border-b border-nomad-paper/10 pb-4">
                                <span className="text-nomad-red font-bold text-lg">02</span> 4K Media Packages
                            </li>
                            <li className="flex items-center gap-3 border-b border-nomad-paper/10 pb-4">
                                <span className="text-nomad-red font-bold text-lg">03</span> Guided Wilderness Meditation
                            </li>
                            <li className="flex items-center gap-3 border-b border-nomad-paper/10 pb-4">
                                <span className="text-nomad-red font-bold text-lg">04</span> Professional Local Drivers
                            </li>
                        </ul>

                        <p className="mt-8 mb-12">
                            If you want to fight traffic on the Grand Loop Road with three million other tourists, there are plenty of bus tours available.
                            But if you want to see the Yellowstone ecosystem the way the locals see it—raw, rugged, and entirely secluded—secure your seat with us.
                        </p>

                        <div className="text-center mt-16 pt-12 border-t border-nomad-black/10">
                            <Link href="/booking" className="btn-primary px-12 py-5 text-xl inline-block hover:shadow-[0_0_30px_rgba(200,60,60,0.4)] transition-all">
                                BOOK YOUR EXPEDITION
                            </Link>
                        </div>

                    </article>
                </div>
            </main>

            <footer className="py-12 border-t border-[rgba(0,0,0,0.2)] font-mono text-xs text-nomad-black/70 relative z-20 mt-auto bg-background">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 bg-nomad-red rounded-full shadow-[0_0_5px_rgba(184,59,59,0.8)]"></div>
                        <p className="tracking-widest font-bold drop-shadow-sm">NOMAD YELLOWSTONE // 2026</p>
                    </div>
                    <div className="flex flex-wrap justify-center md:items-center gap-4 md:gap-8 font-bold text-center">
                        <Link href="/" className="hover:text-nomad-red transition-colors drop-shadow-sm">[HOME]</Link>
                        <Link href="/about" className="hover:text-nomad-red transition-colors drop-shadow-sm">[ABOUT]</Link>
                        <Link href="/intel" className="hover:text-nomad-red transition-colors drop-shadow-sm">[JOURNAL]</Link>
                        <Link href="/booking" className="text-nomad-red hover:text-black transition-colors drop-shadow-sm">[BOOK NOW]</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
