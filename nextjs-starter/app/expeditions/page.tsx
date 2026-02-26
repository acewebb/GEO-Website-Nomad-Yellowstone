import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
    title: "Guided UTV Backcountry Expeditions | Nomad Yellowstone",
    description: "Explore Nomad Yellowstone's passenger-only off-road UTV tours in Island Park, Idaho. Safe, guided access to 10,000-foot peaks.",
    openGraph: {
        title: "Guided UTV Backcountry Expeditions | Nomad Yellowstone",
        description: "Explore Nomad Yellowstone's passenger-only off-road UTV tours in Island Park, Idaho. Safe, guided access to 10,000-foot peaks.",
        url: "https://nomadyellowstone.com/expeditions",
        siteName: "Nomad Yellowstone",
        images: [
            {
                url: "https://nomadyellowstone.com/sawtelle.png",
                width: 1200,
                height: 630,
                alt: "Nomad Yellowstone off-road tour ascending a 10,000-foot peak for panoramic wilderness views.",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default function ExpeditionsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "item": {
                    "@type": "Product",
                    "name": "Morning Scout Tour",
                    "description": "The Morning Scout is a 4-hour guided UTV tour operating from 08:00 to 12:00. The route ascends to the Continental Divide, offering high-altitude wildlife viewing opportunities.",
                    "offers": {
                        "@type": "Offer",
                        "price": "225.00",
                        "priceCurrency": "USD"
                    }
                }
            },
            {
                "@type": "ListItem",
                "position": 2,
                "item": {
                    "@type": "Product",
                    "name": "Summit Run Tour",
                    "description": "The Summit Run is a 4-hour high-altitude UTV expedition operating from 13:00 to 17:00. The tour features aggressive off-road climbing to 10,000-foot peaks.",
                    "offers": {
                        "@type": "Offer",
                        "price": "225.00",
                        "priceCurrency": "USD"
                    }
                }
            },
            {
                "@type": "ListItem",
                "position": 3,
                "item": {
                    "@type": "Product",
                    "name": "Golden Hour Tour",
                    "description": "The Golden Hour is a 4-hour scenic evening UTV tour operating from 17:30 to 21:30. The routed expedition targets optimal photographic lighting in the high-elevation backcountry.",
                    "offers": {
                        "@type": "Offer",
                        "price": "225.00",
                        "priceCurrency": "USD"
                    }
                }
            }
        ]
    };

    return (
        <div className="min-h-screen flex flex-col font-body bg-background text-foreground selection:bg-accent selection:text-white overflow-x-hidden">
            <Script
                id="expeditions-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* HEADER SECTION */}
            <header className="relative w-full z-50 py-6 bg-nomad-black border-b-[8px] border-nomad-black">
                <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-nomad-white flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                            <span className="font-heading text-4xl text-nomad-black mt-1">N</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-heading text-2xl text-white leading-none tracking-wider drop-shadow-md">NOMAD</span>
                            <span className="font-mono text-[10px] text-nomad-red tracking-[0.3em] font-bold uppercase drop-shadow-md">YELLOWSTONE</span>
                        </div>
                    </Link>

                    <nav className="flex items-center gap-8 font-bold text-sm tracking-widest mt-4 md:mt-0">
                        <Link href="/expeditions" className="text-nomad-paper hover:text-white transition-colors uppercase drop-shadow-sm border-b-2 border-nomad-red">[EXPEDITIONS]</Link>
                        <Link href="/fleet" className="text-nomad-paper hover:text-white transition-colors uppercase drop-shadow-sm">[THE FLEET]</Link>
                        <Link href="/contact" className="text-nomad-paper hover:text-white transition-colors uppercase drop-shadow-sm">[CONTACT]</Link>
                        <Link href="/intel" className="text-nomad-paper hover:text-white transition-colors uppercase drop-shadow-sm">[INTEL]</Link>
                        <Link href="/booking" className="btn-primary px-6 py-2">BOOK NOW</Link>
                    </nav>
                </div>
            </header>

            <main className="flex-grow bg-nomad-black flex flex-col relative z-10 w-full overflow-hidden">
                {/* HERO */}
                <section className="relative py-24 w-full flex flex-col items-center border-b border-nomad-black/10">
                    <div className="container mx-auto px-4 z-10 text-center">
                        <span className="font-mono text-nomad-red text-sm tracking-widest mb-2 block font-bold">// EXPEDITION LOG</span>
                        <h1 className="font-heading text-6xl md:text-8xl text-nomad-paper uppercase tracking-widest text-distressed drop-shadow-sm mb-6">Select Your Mission</h1>
                        <p className="text-nomad-paper/90 max-w-2xl mx-auto font-medium text-lg leading-relaxed drop-shadow-md">
                            Nomad Yellowstone offers three primary 4-hour passenger-only expeditions. Each tour is guided by professional operators navigating $30,000 Can-Am Commander UTVs through the high-altitude remote regions surrounding Island Park, Idaho.
                        </p>
                    </div>
                </section>

                {/* TOURS GRID */}
                <section className="py-24 relative z-10">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8 relative z-10 max-w-7xl mx-auto">
                            {/* CARD 1 */}
                            <div className="glass-card group hover:-translate-y-2 transition-transform duration-300">
                                <div className="h-64 relative bg-gray-800 overflow-hidden">
                                    <Image src="/hero-bg.png" alt="Wildlife viewing from the safety of a Can-Am Commander UTV on the Morning Scout tour route." fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute top-4 left-4 bg-nomad-red text-white font-mono text-xs font-bold px-2 py-1 uppercase tracking-widest">
                                        Best Value
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="font-heading text-2xl text-white uppercase mb-2 drop-shadow-md">Morning Scout</h3>
                                    <p className="font-mono text-xs text-nomad-paper mb-4 uppercase tracking-widest opacity-90 drop-shadow-md">08:00 - 12:00 // 4 Hours</p>
                                    <p className="text-white mb-6 text-sm opacity-100 font-medium drop-shadow-md min-h-[160px]">
                                        What is the Morning Scout Nomad Yellowstone tour? The Morning Scout is a 4-hour guided UTV tour operating from 08:00 to 12:00, priced at $149 per passenger. The route ascends to the Continental Divide, offering high-altitude wildlife viewing opportunities before peak daytime temperatures. The expedition includes a professional driver operating the Can-Am Commander, dust protection gear, and morning coffee.
                                    </p>
                                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                                        <span className="font-heading text-2xl text-white">$149<span className="text-sm text-nomad-paper/80 font-mono">/pp</span></span>
                                        <Link href="/booking" className="text-nomad-red text-sm font-bold uppercase tracking-widest group-hover:underline">Book Seat</Link>
                                    </div>
                                </div>
                            </div>

                            {/* CARD 2 */}
                            <div className="glass-card group hover:-translate-y-2 transition-transform duration-300 border-nomad-red/30 relative mt-12 md:mt-0">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-nomad-black border border-nomad-red/30 px-3 py-1 z-20">
                                    <span className="text-nomad-red text-[10px] font-mono tracking-[0.2em] uppercase">Most Popular</span>
                                </div>
                                <div className="h-64 relative bg-gray-800 overflow-hidden">
                                    <Image src="/sawtelle.png" alt="Nomad Yellowstone off-road tour ascending a 10,000-foot peak for panoramic wilderness views." fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="p-8">
                                    <h3 className="font-heading text-2xl text-white uppercase mb-2 drop-shadow-md">Summit Run</h3>
                                    <p className="font-mono text-xs text-nomad-paper mb-4 uppercase tracking-widest opacity-90 drop-shadow-md">13:00 - 17:00 // 4 Hours</p>
                                    <p className="text-white mb-6 text-sm opacity-100 font-medium drop-shadow-md min-h-[160px]">
                                        What is the Summit Run Nomad Yellowstone tour? The Summit Run is a 4-hour high-altitude UTV expedition operating from 13:00 to 17:00, priced at $149 per passenger. The tour features aggressive off-road climbing to 10,000-foot peaks, providing panoramic viewing access of the Yellowstone caldera system. The booking includes a dedicated guide driving the vehicle and all necessary safety equipment.
                                    </p>
                                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                                        <span className="font-heading text-2xl text-white">$149<span className="text-sm text-nomad-paper/80 font-mono">/pp</span></span>
                                        <Link href="/booking" className="text-nomad-red text-sm font-bold uppercase tracking-widest group-hover:underline">Book Seat</Link>
                                    </div>
                                </div>
                            </div>

                            {/* CARD 3 */}
                            <div className="glass-card group hover:-translate-y-2 transition-transform duration-300 mt-12 md:mt-0">
                                <div className="h-64 relative bg-gray-800 overflow-hidden">
                                    <Image src="/atv_action.png" alt="Sunset view of the Yellowstone caldera system accessed via a Golden Hour guided UTV tour from Island Park, Idaho." fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="p-8">
                                    <h3 className="font-heading text-2xl text-white uppercase mb-2 drop-shadow-md">Golden Hour</h3>
                                    <p className="font-mono text-xs text-nomad-paper mb-4 uppercase tracking-widest opacity-90 drop-shadow-md">17:30 - 21:30 // 4 Hours</p>
                                    <p className="text-white mb-6 text-sm opacity-100 font-medium drop-shadow-md min-h-[160px]">
                                        What is the Golden Hour Nomad Yellowstone tour? The Golden Hour is a 4-hour scenic evening UTV tour operating from 17:30 to 21:30 for $149 per passenger. The routed expedition targets optimal photographic lighting in the high-elevation backcountry, concluding with a twilight descent. The package includes a professional guide operating the vehicle, dust gear, and headsets for passenger communication.
                                    </p>
                                    <div className="flex items-center justify-between border-t border-white/10 pt-4">
                                        <span className="font-heading text-2xl text-white">$149<span className="text-sm text-nomad-paper/80 font-mono">/pp</span></span>
                                        <Link href="/booking" className="text-nomad-red text-sm font-bold uppercase tracking-widest group-hover:underline">Book Seat</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 7: FINAL CALL */}
                <section className="py-32 relative flex items-center justify-center overflow-hidden z-10 border-t border-white/10 bg-nomad-paper">
                    <Image src="/sawtelle.png" alt="Professional Nomad Yellowstone guide driving a Can-Am Commander UTV through deep backcountry trails in Island Park, Idaho." fill className="object-cover opacity-15 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-nomad-paper via-transparent to-transparent opacity-50 pointer-events-none"></div>

                    <div className="relative z-10 text-center px-4">
                        <h2 className="font-heading text-6xl md:text-8xl text-nomad-black uppercase mb-12 opacity-100 text-distressed drop-shadow-md">Lock It In</h2>
                        <Link href="/booking" className="btn-primary px-12 py-6 text-xl">
                            CHECK AVAILABILITY
                        </Link>
                    </div>
                </section>
            </main>

            <footer className="py-12 border-t border-[rgba(0,0,0,0.2)] font-mono text-xs text-nomad-black/70 relative z-20 bg-nomad-paper">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 bg-nomad-red rounded-full shadow-[0_0_5px_rgba(184,59,59,0.8)]"></div>
                        <p className="tracking-widest font-bold drop-shadow-sm">NOMAD YELLOWSTONE // 2026</p>
                    </div>
                    <div className="flex flex-wrap justify-center md:items-center gap-4 md:gap-8 font-bold text-center">
                        <Link href="/" className="hover:text-nomad-red transition-colors drop-shadow-sm">[HOME]</Link>
                        <Link href="/intel" className="hover:text-nomad-red transition-colors drop-shadow-sm">[JOURNAL]</Link>
                        <a href="(LINK)" target="_blank" rel="noopener noreferrer" className="hover:text-nomad-red transition-colors drop-shadow-sm">[TRIPADVISOR]</a>
                        <Link href="/booking" className="text-nomad-red hover:text-black transition-colors drop-shadow-sm">[BOOK NOW]</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
