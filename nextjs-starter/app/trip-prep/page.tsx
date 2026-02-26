import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
    title: "Trip Preparation & Knowledge Hub | Nomad Yellowstone",
    description: "Prepare for your Island Park backcountry UTV expedition. View live National Park Service trails status, National Weather Service alerts, and expert guides.",
    openGraph: {
        title: "Trip Preparation & Knowledge Hub | Nomad Yellowstone",
        description: "Prepare for your Island Park backcountry UTV expedition. View live National Park Service trails status, National Weather Service alerts, and expert guides.",
        url: "https://nomadyellowstone.com/trip-prep",
        siteName: "Nomad Yellowstone",
        locale: "en_US",
        type: "website",
    },
};

export default function TripPrepPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Trip Preparation & Knowledge Hub",
        "description": "Essential preparation information and official external resources for backcountry UTV expeditions originating in Island Park, Idaho.",
        "relatedLink": [
            "https://www.nps.gov/yell/planyourvisit/conditions.htm",
            "https://forecast.weather.gov/MapClick.php?lat=44.4215&lon=-111.3831"
        ]
    };

    return (
        <div className="min-h-screen flex flex-col font-body bg-background text-foreground selection:bg-accent selection:text-white overflow-x-hidden">
            <Script
                id="prep-schema"
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
                        <Link href="/fleet" className="text-nomad-paper hover:text-white transition-colors uppercase drop-shadow-sm">[THE FLEET]</Link>
                        <Link href="/contact" className="text-nomad-paper hover:text-white transition-colors uppercase drop-shadow-sm">[CONTACT]</Link>
                        <Link href="/intel" className="text-nomad-paper hover:text-white transition-colors uppercase drop-shadow-sm">[INTEL]</Link>
                        <Link href="/booking" className="btn-primary px-6 py-2">BOOK NOW</Link>
                    </nav>
                </div>
            </header>

            <main className="flex-grow bg-nomad-paper flex flex-col relative z-10 w-full overflow-hidden">

                {/* HERO */}
                <section className="py-24 relative border-b border-[rgba(0,0,0,0.1)] z-10">
                    <div className="container mx-auto px-4 text-center">
                        <span className="font-mono text-nomad-red text-sm tracking-widest mb-2 block font-bold">// PRE-DEPLOYMENT</span>
                        <h1 className="font-heading text-6xl text-nomad-black uppercase mb-8 text-distressed drop-shadow-sm">Trip Preparation</h1>
                        <p className="text-nomad-black font-medium text-xl max-w-3xl mx-auto drop-shadow-sm">
                            The backcountry surrounding Island Park and Yellowstone operates on its own terms. Before deploying on a Nomad Yellowstone UTV expedition, consult these official channels for real-time intelligence.
                        </p>
                    </div>
                </section>

                {/* KNOWLEDGE HUB GRID */}
                <section className="py-24 bg-transparent relative z-10">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                            {/* EXTERNAL LINK 1: NPS */}
                            <div className="bg-nomad-black p-10 relative overflow-hidden group shadow-xl">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="font-heading text-6xl text-white">NPS</span>
                                </div>
                                <h2 className="font-heading text-3xl text-white uppercase mb-4 text-distressed-light">National Park Service</h2>
                                <p className="text-nomad-paper mb-8 font-medium">
                                    Access live trail closures, wildlife migratory warnings, and official region alerts directly from the NPS infrastructure covering the contiguous Yellowstone and Grand Teton zones.
                                </p>
                                <a href="https://www.nps.gov/yell/planyourvisit/conditions.htm" target="_blank" rel="noopener noreferrer" className="inline-block border-b-2 border-nomad-red text-nomad-red font-bold uppercase tracking-widest pb-1 hover:text-white transition-colors">
                                    VERIFY LIVE CONDITIONS ↗
                                </a>
                            </div>

                            {/* EXTERNAL LINK 2: NWS */}
                            <div className="bg-nomad-black p-10 relative overflow-hidden group shadow-xl">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="font-heading text-6xl text-white">NWS</span>
                                </div>
                                <h2 className="font-heading text-3xl text-white uppercase mb-4 text-distressed-light">National Weather Service</h2>
                                <p className="text-nomad-paper mb-8 font-medium">
                                    Temperatures at 10,000 feet can drop rapidly, even in August. Consult the official NOAA weather prediction center for exact, localized forecasts in Island Park, Idaho.
                                </p>
                                <a href="https://forecast.weather.gov/MapClick.php?lat=44.4215&lon=-111.3831" target="_blank" rel="noopener noreferrer" className="inline-block border-b-2 border-nomad-red text-nomad-red font-bold uppercase tracking-widest pb-1 hover:text-white transition-colors">
                                    CONSULT RADAR ↗
                                </a>
                            </div>

                        </div>
                    </div>
                </section>

                {/* GEAR PREP */}
                <section className="py-24 relative z-10 border-t border-[rgba(0,0,0,0.1)]">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <span className="font-mono text-nomad-red text-sm tracking-widest mb-2 block font-bold">// REQUIRED LOADOUT</span>
                        <h2 className="font-heading text-4xl text-nomad-black uppercase mb-12 text-distressed drop-shadow-sm">Standard Issue Gear</h2>
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="p-6 border border-nomad-black/20 bg-white/50">
                                <h3 className="font-bold text-nomad-black font-mono tracking-widest mb-2 uppercase border-b-2 border-nomad-red inline-block">1. Closed-Toe Footwear</h3>
                                <p className="text-sm font-medium mt-4">Required for safety when dismounting the Can-Am Commander on rugged trailheads.</p>
                            </div>
                            <div className="p-6 border border-nomad-black/20 bg-white/50">
                                <h3 className="font-bold text-nomad-black font-mono tracking-widest mb-2 uppercase border-b-2 border-nomad-red inline-block">2. Sturdy Long Pants</h3>
                                <p className="text-sm font-medium mt-4">Denim or reinforced hiking pants are recommended to protect against brush and ambient engine heat.</p>
                            </div>
                            <div className="p-6 border border-nomad-black/20 bg-white/50">
                                <h3 className="font-bold text-nomad-black font-mono tracking-widest mb-2 uppercase border-b-2 border-nomad-red inline-block">3. Layered Insulation</h3>
                                <p className="text-sm font-medium mt-4">Windbreakers or light jackets are critical for the altitude climbs where temperatures plunge.</p>
                            </div>
                        </div>
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
