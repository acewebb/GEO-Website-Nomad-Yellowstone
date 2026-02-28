import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Our Story & Guides | Nomad Yellowstone',
    description: 'Meet the expert backcountry guides behind Nomad Yellowstone. Decades of combined off-grid wilderness experience.',
};

export default function AboutPage() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ayson Webb",
        "jobTitle": "Lead Guide & Founder",
        "worksFor": {
            "@type": "Organization",
            "name": "Nomad Yellowstone"
        },
        "description": "Expert Yellowstone backcountry guide specializing in off-grid UTV navigation and wilderness first response.",
        "knowsAbout": ["Yellowstone National Park", "Backcountry Navigation", "Off-Road Driving", "Wilderness First Aid"]
    };

    return (
        <div className="min-h-screen bg-nomad-black text-white font-body selection:bg-accent selection:text-white pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
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

            <main className="container mx-auto px-4 py-20 max-w-5xl">
                <div className="mb-20 text-center">
                    <span className="font-mono text-accent text-sm tracking-widest mb-4 block">// THE FACES BEHIND THE MACHINE</span>
                    <h1 className="font-heading text-4xl md:text-7xl text-white uppercase leading-tight mb-6">
                        Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-600">Navigation</span>
                    </h1>
                    <p className="font-mono text-sm md:text-base text-nomad-paper/60 leading-relaxed mx-auto max-w-3xl">
                        A $30,000 piece of equipment is useless without the human element to guide it. You aren't just paying for the machine; you are paying to ride alongside seasoned backcountry professionals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="relative aspect-[3/4] w-full max-w-md mx-auto grayscale contrast-125 border-4 border-white/10 p-2 glass-panel bg-white/5">
                        <Image
                            src="/father-son-utv.jpg"
                            alt="Nomad Yellowstone Lead Guide and passenger navigating a UTV through the backcountry at sunset"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-accent/10 mix-blend-overlay"></div>
                    </div>

                    <div>
                        <h2 className="font-heading text-3xl md:text-5xl uppercase text-white mb-6">The Founder</h2>
                        <div className="space-y-6 text-nomad-paper/80 font-light leading-relaxed">
                            <p>
                                Nomad Yellowstone was born out of a profound frustration with the state of modern tourism in the Greater Yellowstone Ecosystem. Millions of people visit every year, yet 99% of them never leave the paved roads, viewing one of Earth's most dynamic landscapes entirely through the safety glass of a rental car.
                            </p>
                            <p>
                                I wanted to build an outfitter that bridged the gap between raw wilderness capability and high-end luxury. I noticed a massive hole in the market for people who wanted to see the *real* backcountry, but didn't want the stress, liability, or harsh conditions of renting a barebones ATV themselves.
                            </p>
                            <p className="pl-6 border-l-2 border-accent text-white italic font-serif">
                                "Our mission is to take the stress of navigation, the liability of the machines, and the annoyance of crowds entirely off your plate, replacing them with awe-inspiring topography and dead silence."
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-surface/20 border border-white/5 p-12 text-center rounded-sm">
                    <h3 className="font-heading text-2xl uppercase text-white mb-4">Ready to ride with us?</h3>
                    <p className="text-nomad-paper/60 mb-8 max-w-xl mx-auto">Seats are extremely limited as we only dispatch one private expedition at a time to guarantee the quality of the experience.</p>
                    <Link href="/booking" className="btn-primary px-12 py-4 text-lg">
                        Check Availability
                    </Link>
                </div>
            </main>
        </div>
    );
}
