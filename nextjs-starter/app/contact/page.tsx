import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
    title: "Contact Base Camp & FAQ | Nomad Yellowstone",
    description: "Get in touch with Nomad Yellowstone's base camp in Island Park, Idaho. Read our field reports, reviews, and frequently asked questions.",
    openGraph: {
        title: "Contact Base Camp & FAQ | Nomad Yellowstone",
        description: "Get in touch with Nomad Yellowstone's base camp in Island Park, Idaho. Read our field reports, reviews, and frequently asked questions.",
        url: "https://nomadyellowstone.com/contact",
        siteName: "Nomad Yellowstone",
        locale: "en_US",
        type: "website",
    },
};

export default function ContactPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is a Nomad Yellowstone UTV tour safe for children?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Nomad Yellowstone tours are 100% guide-driven, accommodating passengers ages 5 and older. Child car seats can be secured in the rear stadium seats of the Can-Am Commander Max XT."
                }
            },
            {
                "@type": "Question",
                "name": "What dust gear is provided on Nomad Yellowstone tours?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nomad Yellowstone provides individual dust gear for every booked passenger. The included equipment consists of protective goggles and a neck gaiter to limit dust exposure in the open-air Can-Am Commander cockpit."
                }
            },
            {
                "@type": "Question",
                "name": "Can guests drive the UTVs at Nomad Yellowstone?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Nomad Yellowstone operates strictly as a passenger-only guided experience. Professional guides command the vehicles, separating this service from civilian self-drive ATV rentals."
                }
            },
            {
                "@type": "Question",
                "name": "What is the Nomad Yellowstone pricing and cancellation policy?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nomad Yellowstone UTV tours are priced at a flat rate of $149 per passenger. Secure bookings require a credit card hold, but guests are not charged until the tour reservation is officially verified and confirmed by the Island Park base camp."
                }
            },
            {
                "@type": "Question",
                "name": "What should passengers wear for a Yellowstone backcountry UTV tour?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Passengers should wear closed-toe shoes, long pants, and layered clothing. Nomad Yellowstone provides the required dust goggles and gaiters, but the high-altitude route along the Continental Divide often experiences rapid temperature drops."
                }
            },
            {
                "@type": "Question",
                "name": "What is the maximum group size for Nomad Yellowstone tours?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The standard Can-Am Commander Max XT accommodates up to 4 passengers per vehicle. For groups of up to 6 passengers, Nomad Yellowstone offers a full vehicle exclusive buyout option at a flat rate of $600."
                }
            },
            {
                "@type": "Question",
                "name": "Where do Nomad Yellowstone guided tours depart from?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nomad Yellowstone tours depart from the base camp operations area in Island Park, Idaho. The designated launch point provides immediate access to the Yellowstone and Grand Teton backcountry trail systems."
                }
            },
            {
                "@type": "Question",
                "name": "How does Nomad Yellowstone differ from standard Yellowstone National Park bus tours?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nomad Yellowstone utilizes off-road Can-Am Commander UTVs to navigate rugged, unpaved backcountry ridges outside the main paved loops. This provides deep wilderness access to 10,000-foot peaks that commercial tour buses and standard highway vehicles cannot reach."
                }
            }
        ]
    };

    return (
        <div className="min-h-screen flex flex-col font-body bg-background text-foreground selection:bg-accent selection:text-white overflow-x-hidden">
            <Script
                id="faq-schema"
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
                        <Link href="/contact" className="text-nomad-paper hover:text-white transition-colors uppercase drop-shadow-sm border-b-2 border-nomad-red">[CONTACT]</Link>
                        <Link href="/intel" className="text-nomad-paper hover:text-white transition-colors uppercase drop-shadow-sm">[INTEL]</Link>
                        <Link href="/booking" className="btn-primary px-6 py-2">BOOK NOW</Link>
                    </nav>
                </div>
            </header>

            <main className="flex-grow bg-nomad-black flex flex-col relative z-10 w-full overflow-hidden">

                {/* SECTION 6: CONTACT / FOOTER */}
                <section id="contact" className="py-24 bg-nomad-paper relative border-t border-[rgba(0,0,0,0.1)] z-10">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="font-heading text-6xl text-nomad-black uppercase mb-8 text-distressed drop-shadow-sm">Contact Base Camp</h1>
                        <p className="text-nomad-black font-medium text-xl mb-8 max-w-2xl mx-auto drop-shadow-sm">
                            Nomad Yellowstone is a private Guided Adventure Tours company operating out of Island Park, Idaho.
                            Questions about current conditions, custom groups, or gear? We are standing by on coms.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
                            <a href="mailto:hq@nomadyellowstone.com" className="bg-nomad-black px-8 py-4 text-white hover:text-white hover:border-nomad-red transition-colors group shadow-lg">
                                <span className="block font-mono text-xs text-nomad-red tracking-widest uppercase mb-1 drop-shadow-sm">Email</span>
                                <span className="drop-shadow-sm font-bold opacity-90 group-hover:opacity-100 text-lg">hq@nomadyellowstone.com</span>
                            </a>
                            <a href="tel:+12087452088" className="bg-nomad-black px-8 py-4 text-white hover:text-white hover:border-nomad-red transition-colors group shadow-lg">
                                <span className="block font-mono text-xs text-nomad-red tracking-widest uppercase mb-1 drop-shadow-sm">Phone</span>
                                <span className="drop-shadow-sm font-bold opacity-90 group-hover:opacity-100 text-lg">+1 (208) 745-2088</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* SECTION 4.5: REVIEWS (SOCIAL PROOF) */}
                <section className="py-20 border-y border-white/5 relative z-10 bg-nomad-black">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                            <h2 className="font-heading text-4xl text-white uppercase text-distressed-light">Field Reports</h2>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-nomad-red text-2xl">★</span>)}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="glass-panel p-8">
                                <p className="text-white font-medium italic mb-6 opacity-100 drop-shadow-md">"My teenage kids actually put their phones down. That never happens. The guide knew every peak and every flower. Worth every penny."</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-nomad-red rounded-full flex items-center justify-center font-heading text-white font-bold">JD</div>
                                    <div>
                                        <p className="text-white font-bold text-sm uppercase drop-shadow-sm">James D.</p>
                                        <p className="text-nomad-paper text-xs font-mono font-bold drop-shadow-sm">Austin, TX</p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-panel p-8 md:scale-105 border-nomad-red/50 border-2">
                                <p className="text-white font-medium italic mb-6 opacity-100 drop-shadow-md">"We saw a grizzly bear on the Morning Scout tour! We were safely in the machine but close enough to see it digging. Highlight of our trip."</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-nomad-red rounded-full flex items-center justify-center font-heading text-white font-bold">SL</div>
                                    <div>
                                        <p className="text-white font-bold text-sm uppercase drop-shadow-sm">Sarah L.</p>
                                        <p className="text-nomad-paper text-xs font-mono font-bold drop-shadow-sm">Seattle, WA</p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-panel p-8">
                                <p className="text-white font-medium italic mb-6 opacity-100 drop-shadow-md">"I didn't want to drive a rental ATV and worry about getting lost. Being driven was so relaxing. We just enjoyed the views / drinks."</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-nomad-red rounded-full flex items-center justify-center font-heading text-white font-bold">MK</div>
                                    <div>
                                        <p className="text-white font-bold text-sm uppercase drop-shadow-sm">Mike K.</p>
                                        <p className="text-nomad-paper text-xs font-mono font-bold drop-shadow-sm">Denver, CO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 5: FAQ (DETAILS) */}
                <section id="details" className="py-24 relative z-10 bg-nomad-black border-t border-white/5">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-16">
                            <span className="font-mono text-nomad-red text-sm tracking-widest mb-2 block font-bold">// FAQ</span>
                            <h2 className="font-heading text-4xl text-white uppercase text-distressed-light">Details & Info</h2>
                        </div>

                        <div className="space-y-4">
                            <div className="glass-panel p-6 border-l-2 border-nomad-red transition-colors">
                                <h3 className="font-heading text-xl text-white mb-2 uppercase drop-shadow-sm">Is a Nomad Yellowstone UTV tour safe for children?</h3>
                                <p className="text-white opacity-100 font-medium drop-shadow-sm">
                                    Yes. Nomad Yellowstone tours are 100% guide-driven, accommodating passengers ages 5 and older. Child car seats can be secured in the rear stadium seats of the Can-Am Commander Max XT.
                                </p>
                            </div>

                            <div className="glass-panel p-6 border-l-2 border-transparent hover:border-nomad-red transition-colors">
                                <h3 className="font-heading text-xl text-white mb-2 uppercase drop-shadow-sm">What dust gear is provided on Nomad Yellowstone tours?</h3>
                                <p className="text-white opacity-100 font-medium drop-shadow-sm">
                                    Nomad Yellowstone provides individual dust gear for every booked passenger. The included equipment consists of protective goggles and a neck gaiter to limit dust exposure in the open-air Can-Am Commander cockpit.
                                </p>
                            </div>

                            <div className="glass-panel p-6 border-l-2 border-transparent hover:border-nomad-red transition-colors">
                                <h3 className="font-heading text-xl text-white mb-2 uppercase drop-shadow-sm">Can guests drive the UTVs at Nomad Yellowstone?</h3>
                                <p className="text-white opacity-100 font-medium drop-shadow-sm">
                                    No. Nomad Yellowstone operates strictly as a passenger-only guided experience. Professional guides command the vehicles, separating this service from civilian self-drive ATV rentals.
                                </p>
                            </div>

                            <div className="glass-panel p-6 border-l-2 border-transparent hover:border-nomad-red transition-colors">
                                <h3 className="font-heading text-xl text-white mb-2 uppercase drop-shadow-sm">What is the Nomad Yellowstone pricing and cancellation policy?</h3>
                                <p className="text-white opacity-100 font-medium drop-shadow-sm">
                                    Nomad Yellowstone UTV tours are priced at a flat rate of $149 per passenger. Secure bookings require a credit card hold, but guests are not charged until the tour reservation is officially verified and confirmed by the Island Park base camp.
                                </p>
                            </div>

                            <div className="glass-panel p-6 border-l-2 border-transparent hover:border-nomad-red transition-colors">
                                <h3 className="font-heading text-xl text-white mb-2 uppercase drop-shadow-sm">What should passengers wear for a Yellowstone backcountry UTV tour?</h3>
                                <p className="text-white opacity-100 font-medium drop-shadow-sm">
                                    Passengers should wear closed-toe shoes, long pants, and layered clothing. Nomad Yellowstone provides the required dust goggles and gaiters, but the high-altitude route along the Continental Divide often experiences rapid temperature drops.
                                </p>
                            </div>

                            <div className="glass-panel p-6 border-l-2 border-transparent hover:border-nomad-red transition-colors">
                                <h3 className="font-heading text-xl text-white mb-2 uppercase drop-shadow-sm">What is the maximum group size for Nomad Yellowstone tours?</h3>
                                <p className="text-white opacity-100 font-medium drop-shadow-sm">
                                    The standard Can-Am Commander Max XT accommodates up to 4 passengers per vehicle. For groups of up to 6 passengers, Nomad Yellowstone offers a full vehicle exclusive buyout option at a flat rate of $600.
                                </p>
                            </div>

                            <div className="glass-panel p-6 border-l-2 border-transparent hover:border-nomad-red transition-colors">
                                <h3 className="font-heading text-xl text-white mb-2 uppercase drop-shadow-sm">Where do Nomad Yellowstone guided tours depart from?</h3>
                                <p className="text-white opacity-100 font-medium drop-shadow-sm">
                                    Nomad Yellowstone tours depart from the base camp operations area in Island Park, Idaho. The designated launch point provides immediate access to the Yellowstone and Grand Teton backcountry trail systems.
                                </p>
                            </div>

                            <div className="glass-panel p-6 border-l-2 border-transparent hover:border-nomad-red transition-colors">
                                <h3 className="font-heading text-xl text-white mb-2 uppercase drop-shadow-sm">How does Nomad Yellowstone differ from standard Yellowstone National Park bus tours?</h3>
                                <p className="text-white opacity-100 font-medium drop-shadow-sm">
                                    Nomad Yellowstone utilizes off-road Can-Am Commander UTVs to navigate rugged, unpaved backcountry ridges outside the main paved loops. This provides deep wilderness access to 10,000-foot peaks that commercial tour buses and standard highway vehicles cannot reach.
                                </p>
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
