import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
    title: "The Fleet: Can-Am Commander MAX XT | Nomad Yellowstone",
    description: "Nomad Yellowstone utilizes $30,000 purpose-built Can-Am Commander Max XT vehicles for all guided off-road excursions.",
    openGraph: {
        title: "The Fleet: Can-Am Commander MAX XT | Nomad Yellowstone",
        description: "Nomad Yellowstone utilizes $30,000 purpose-built Can-Am Commander Max XT vehicles for all guided off-road excursions.",
        url: "https://nomadyellowstone.com/fleet",
        siteName: "Nomad Yellowstone",
        images: [
            {
                url: "https://nomadyellowstone.com/atv_action.png",
                width: 1200,
                height: 630,
                alt: "Rugged Can-Am Commander Max XT showcasing 14-inch suspension travel over backcountry rocks entirely separated from the pavement in Island Park.",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default function FleetPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Can-Am Commander MAX XT",
        "image": "https://nomadyellowstone.com/atv_action.png",
        "description": "Nomad Yellowstone utilizes $30,000 purpose-built Can-Am Commander Max XT vehicles for all passenger-only guided off-road expeditions. Features 100HP Rotax engines, 14-inch suspension travel, and stadium seating.",
        "brand": {
            "@type": "Brand",
            "name": "Can-Am"
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-body bg-background text-foreground selection:bg-accent selection:text-white overflow-x-hidden">
            <Script
                id="fleet-schema"
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
                        <Link href="/expeditions" className="text-nomad-paper hover:text-white transition-colors uppercase drop-shadow-sm">[EXPEDITIONS]</Link>
                        <Link href="/fleet" className="text-nomad-paper hover:text-white transition-colors uppercase drop-shadow-sm border-b-2 border-nomad-red">[THE FLEET]</Link>
                        <Link href="/contact" className="text-nomad-paper hover:text-white transition-colors uppercase drop-shadow-sm">[CONTACT]</Link>
                        <Link href="/intel" className="text-nomad-paper hover:text-white transition-colors uppercase drop-shadow-sm">[INTEL]</Link>
                        <Link href="/booking" className="btn-primary px-6 py-2">BOOK NOW</Link>
                    </nav>
                </div>
            </header>

            <main className="flex-grow bg-nomad-paper flex flex-col relative z-10 w-full overflow-hidden">
                <section className="py-32 relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="font-mono text-nomad-black text-sm tracking-widest mb-2 block font-bold">// THE FLEET</span>
                                <h1 className="font-heading text-6xl text-nomad-black uppercase mb-6 text-distressed drop-shadow-sm leading-none">Can-Am Commander <br /> MAX XT</h1>

                                <div className="space-y-6">
                                    <p className="text-nomad-black font-medium text-lg leading-relaxed drop-shadow-sm">
                                        This isn't a rental beater. It's a $30,000 purpose-built backcountry machine. We trust the Can-Am Commander MAX XT to safely transport our passengers to 10,000-foot peaks that standard vehicles simply cannot reach.
                                    </p>

                                    <div className="grid grid-cols-2 gap-6 pt-4">
                                        <div className="bg-nomad-black p-6 border border-nomad-black/20 text-center">
                                            <p className="text-nomad-red font-heading text-4xl font-black drop-shadow-md tracking-wider">100 HP</p>
                                            <p className="text-white text-xs font-mono uppercase font-bold drop-shadow-sm mt-2">Rotax V-Twin Engine</p>
                                        </div>
                                        <div className="bg-nomad-black p-6 border border-nomad-black/20 text-center">
                                            <p className="text-nomad-red font-heading text-4xl font-black drop-shadow-md tracking-wider">14 in</p>
                                            <p className="text-white text-xs font-mono uppercase font-bold drop-shadow-sm mt-2">Suspension Travel</p>
                                        </div>
                                        <div className="bg-nomad-black p-6 border border-nomad-black/20 text-center">
                                            <p className="text-nomad-red font-heading text-4xl font-black drop-shadow-md tracking-wider">4 Seats</p>
                                            <p className="text-white text-xs font-mono uppercase font-bold drop-shadow-sm mt-2">Stadium Seating</p>
                                        </div>
                                        <div className="bg-nomad-black p-6 border border-nomad-black/20 text-center">
                                            <p className="text-nomad-red font-heading text-4xl font-black drop-shadow-md tracking-wider">Zero</p>
                                            <p className="text-white text-xs font-mono uppercase font-bold drop-shadow-sm mt-2">Windows / Barriers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative h-[600px] w-full overflow-hidden shadow-2xl">
                                <Image src="/can-am-commander.jpg" alt="Rugged Can-Am Commander Max XT showcasing 14-inch suspension travel over backcountry rocks entirely separated from the pavement in Island Park." fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 7: FINAL CALL */}
                <section className="py-32 relative flex items-center justify-center overflow-hidden z-10 border-t border-[rgba(0,0,0,0.1)]">
                    <Image src="/sawtelle.png" alt="Professional Nomad Yellowstone guide driving a Can-Am Commander UTV through deep backcountry trails in Island Park, Idaho." fill className="object-cover opacity-15 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-nomad-paper via-transparent to-transparent opacity-50 pointer-events-none"></div>

                    <div className="relative z-10 text-center px-4">
                        <h2 className="font-heading text-6xl md:text-8xl text-nomad-black uppercase mb-12 opacity-100 text-distressed drop-shadow-md">Select Your Mission</h2>
                        <Link href="/expeditions" className="btn-primary px-12 py-6 text-xl">
                            VIEW EXPEDITIONS
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
