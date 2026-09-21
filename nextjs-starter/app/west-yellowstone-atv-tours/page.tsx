import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PricingSection from '@/components/PricingSection';
import GlobalHeader from '@/components/GlobalHeader';
import FadeIn from '@/components/FadeIn';
import AccordionFAQ from '@/components/AccordionFAQ';
import JsonLd from '@/components/JsonLd';
import { buildBreadcrumbList } from '@/lib/schema/breadcrumbList';
import { buildFAQPage } from '@/lib/schema/faqPage';
import { signatureTourProduct } from '@/lib/schema/product';

export const metadata = {
    title: "ATV Tours West Yellowstone | Guided & Passenger-Only | Nomad Yellowstone",
    description: "Book guided ATV tours 20 minutes from West Yellowstone. Passenger-only: we drive, you enjoy 10,000-ft Continental Divide views. Ages 5+, zero damage deposit. Book direct.",
    robots: { index: true, follow: true },
    alternates: { canonical: 'https://nomadyellowstone.com/west-yellowstone-atv-tours' },
    openGraph: {
        title: "ATV Tours West Yellowstone | Guided & Passenger-Only | Nomad Yellowstone",
        description: "Looking for ATV tours in West Yellowstone? Nomad Yellowstone provides 100% guide-driven, passenger-only backcountry tours just 20 minutes from the West Entrance. Ages 5+.",
        url: 'https://nomadyellowstone.com/west-yellowstone-atv-tours',
        images: [{ url: '/sawtelle.png', width: 1200, height: 630, alt: 'Guided ATV tour 20 minutes from West Yellowstone on Sawtelle Peak' }],
    },
};

const westYellowstoneFaqData = [
    {
        question: "How far is Nomad Yellowstone from West Yellowstone, Montana?",
        answer: "Our launch basecamp in Island Park, Idaho is exactly 20 minutes south of the West Yellowstone town center and the West Entrance to Yellowstone National Park along US Highway 20. It is a scenic, direct drive with zero mountain passes."
    },
    {
        question: "Can you ride ATVs or side-by-sides inside Yellowstone National Park?",
        answer: "No. Off-road vehicles and ATVs are strictly prohibited on all roads and trails inside Yellowstone National Park. The premier off-road terrain in the Greater Yellowstone Ecosystem is located in the Caribou-Targhee National Forest bordering the park, where our guided tours operate."
    },
    {
        question: "Is this an ATV rental or a guided tour?",
        answer: "Nomad Yellowstone is strictly a 100% guided, passenger-only tour. Our certified local guides do all the driving in custom Can-Am Commander Max XT vehicles. You never have to worry about driving, vehicle liability, trailer towing, or getting lost."
    },
    {
        question: "Is this suitable for families with kids and seniors visiting West Yellowstone?",
        answer: "Yes! Because you ride and we drive, our tours are built for multi-generational families. Passengers as young as age 5 and seniors into their 90s regularly ride with us. Stadium-style raised rear seating ensures everyone has unobstructed 360-degree views."
    },
    {
        question: "Do I have to pay a damage deposit or insurance fee like rental shops?",
        answer: "No! Unlike West Yellowstone ATV rental shops that require $1,500 to $3,000 credit card holds and hold you liable for bent tie-rods or scratched plastic, Nomad tours come with ZERO vehicle liability. You are a passenger; our company assumes full mechanical responsibility."
    },
    {
        question: "How long is the tour, and can we do it alongside visiting Yellowstone in the same day?",
        answer: "Our signature tours run 2.5 to 3 hours (half-day). A morning departure leaves you back in West Yellowstone by lunchtime, leaving the entire afternoon free to explore Old Faithful, Grand Prismatic Spring, or Hebgen Lake."
    }
];

export default function WestYellowstoneAtvTours() {
    const touristTripSchema = {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        "name": "ATV Tours West Yellowstone — Guided Passenger-Only Backcountry Adventure",
        "description": "Guided passenger-only ATV tours 20 minutes from West Yellowstone in Island Park, Idaho. Professional guides drive custom Can-Am Commander Max XT side-by-sides to 10,000-ft peaks along the Continental Divide. Family-friendly, ages 5+, zero rental liability.",
        "image": "https://nomadyellowstone.com/sawtelle.png",
        "url": "https://nomadyellowstone.com/west-yellowstone-atv-tours",
        "touristType": ["Family", "Adventure", "Seniors", "Kids ages 5+", "Couples", "West Yellowstone Visitors"],
        "itinerary": {
            "@type": "Place",
            "name": "Island Park & Continental Divide Backcountry (20 min from West Yellowstone)",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "West Yellowstone",
                "addressRegion": "MT",
                "addressCountry": "US"
            }
        },
        "offers": {
            "@type": "Offer",
            "price": "179",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://nomadyellowstone.com/booking",
            "validFrom": "2027-05-15",
            "validThrough": "2027-10-31"
        },
        "provider": {
            "@type": "LocalBusiness",
            "@id": "https://nomadyellowstone.com/#business"
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-body bg-background text-foreground selection:bg-accent selection:text-white overflow-x-hidden">
            <JsonLd data={touristTripSchema} />
            <JsonLd data={buildBreadcrumbList([{ name: 'ATV Tours West Yellowstone', url: 'https://nomadyellowstone.com/west-yellowstone-atv-tours' }])} />
            <JsonLd data={buildFAQPage(westYellowstoneFaqData)} />
            <JsonLd data={signatureTourProduct} />
            <GlobalHeader />

            <main className="flex-grow flex flex-col relative w-full pt-20 md:pt-32">
                {/* HERO SECTION */}
                <section className="relative w-full py-12 md:py-20 flex flex-col items-center overflow-hidden bg-transparent z-10">
                    <div className="w-full text-center mb-8 z-20 relative px-4 max-w-4xl mx-auto">
                        <FadeIn>
                            <div className="flex flex-col items-center justify-center">
                                {/* Required hook kicker */}
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nomad-red/10 border border-nomad-red/30 text-nomad-red font-mono text-[11px] md:text-xs font-bold uppercase tracking-wider mb-5">
                                    <span>NOT A RENTAL</span>
                                    <span>·</span>
                                    <span>WE DRIVE</span>
                                    <span>·</span>
                                    <span>AGES 5+</span>
                                    <span>·</span>
                                    <span>HALF-DAY FROM TOWN</span>
                                </div>

                                <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-nomad-black uppercase leading-[0.88] tracking-tight mb-4 text-distressed drop-shadow-md">
                                    ATV TOURS<br />
                                    <span className="text-nomad-red font-light">WEST YELLOWSTONE</span>
                                </h1>

                                <p className="font-heading text-xl sm:text-2xl md:text-3xl text-nomad-black/85 uppercase tracking-wide mb-4">
                                    Guided Backcountry Tours · Passenger-Only · 20 Min from Town
                                </p>

                                <p className="text-sm md:text-base lg:text-lg text-nomad-black/90 max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
                                    Skip the \$2,500 rental damage deposits, trailer hassles, and stressful trail navigation. Our certified guides pilot custom Can-Am Commander ATVs up to 10,000-foot Continental Divide summits while your family relaxes and takes in the scenery. Basecamp in Island Park, exactly 20 minutes from the West Yellowstone park entrance.
                                </p>

                                {/* Primary CTAs: Book / Call */}
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto mb-6">
                                    <Link
                                        href="/booking"
                                        className="btn-primary w-full sm:w-auto px-8 py-4 text-base md:text-lg font-bold shadow-xl hover:scale-105 transition-all text-center"
                                    >
                                        BOOK 2027 TOUR (15% OFF) →
                                    </Link>
                                    <a
                                        href="tel:+12087452088"
                                        className="w-full sm:w-auto font-mono text-sm md:text-base font-bold text-nomad-black/90 hover:text-nomad-red transition-colors flex items-center justify-center gap-2 border-2 border-nomad-black/20 px-6 py-4 rounded-sm hover:border-nomad-red bg-nomad-paper/60 shadow-sm"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-nomad-red">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                        (208) 745-2088
                                    </a>
                                </div>

                                {/* Trust row */}
                                <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs font-mono text-nomad-black/75 flex-wrap">
                                    <span className="text-[#00aa6c] font-bold">★★★★★ 5.0 TripAdvisor</span>
                                    <span className="text-nomad-red">·</span>
                                    <span>Zero Vehicle Liability</span>
                                    <span className="text-nomad-red">·</span>
                                    <span>Helmets & Headsets Included</span>
                                    <span className="text-nomad-red">·</span>
                                    <span>20 Min from West Yellowstone</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Hero Visual */}
                    <div className="relative w-full h-[35vh] md:h-[48vh] flex flex-col max-w-5xl mx-auto p-4 md:px-6">
                        <div className="relative w-full h-full bg-nomad-black rounded-sm overflow-hidden shadow-2xl border border-white/5">
                            <Image
                                src="/sawtelle.png"
                                alt="Nomad Yellowstone guided ATV tour overlooking the Continental Divide near West Yellowstone."
                                fill
                                className="object-cover grayscale contrast-125"
                                priority
                                sizes="(max-width: 768px) 100vw, 900px"
                            />
                            <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.6)] z-10 pointer-events-none" />
                            <div className="absolute bottom-4 left-4 z-20 bg-nomad-black/80 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-sm font-mono text-[11px] text-white tracking-widest uppercase">
                                Continental Divide Summit // Elevation 9,866 ft
                            </div>
                        </div>
                    </div>
                </section>

                {/* THE CORE COMMERCIAL HOOK: WHY GUIDED BEATS RENTALS FOR WEST YELLOWSTONE VISITORS */}
                <section className="py-16 md:py-24 bg-transparent relative z-10">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <FadeIn>
                            <div className="text-center mb-12">
                                <span className="font-mono text-nomad-red text-xs md:text-sm tracking-[0.2em] font-bold uppercase block mb-2">
                                    The Honest Truth About West Yellowstone Off-Roading
                                </span>
                                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-nomad-black uppercase text-distressed">
                                    Why Rent When You Can Ride?
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {/* The Rental Experience */}
                                <div className="bg-nomad-paper/90 border border-nomad-black/15 p-6 md:p-8 rounded-sm shadow-md">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="w-3 h-3 rounded-full bg-nomad-black/50" />
                                        <h3 className="font-heading text-xl uppercase tracking-wider text-nomad-black">Self-Drive ATV Rentals</h3>
                                    </div>
                                    <ul className="space-y-3 text-sm text-nomad-black/80 font-medium leading-relaxed">
                                        <li className="flex items-start gap-2">
                                            <span className="text-nomad-red font-bold">✕</span>
                                            <span><strong>$1,500 to $3,000</strong> damage hold on your credit card.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-nomad-red font-bold">✕</span>
                                            <span><strong>You assume 100% liability</strong> for bent tie-rods, blown tires, or trail scrapes.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-nomad-red font-bold">✕</span>
                                            <span>Stressful navigation on rocky 10,000-ft switchbacks in bear country.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-nomad-red font-bold">✕</span>
                                            <span>Driver spends the entire day white-knuckling instead of enjoying vacation views.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-nomad-red font-bold">✕</span>
                                            <span>Strict age limits (18+ to 25+ to drive; young kids excluded or uneasy).</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* The Nomad Guided Experience */}
                                <div className="bg-nomad-black text-nomad-paper p-6 md:p-8 rounded-sm shadow-xl border-l-4 border-nomad-red">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="w-3 h-3 rounded-full bg-nomad-red animate-pulse" />
                                        <h3 className="font-heading text-xl uppercase tracking-wider text-white">Nomad Guided Tours</h3>
                                    </div>
                                    <ul className="space-y-3 text-sm font-medium leading-relaxed">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#00aa6c] font-bold">✓</span>
                                            <span><strong>Zero vehicle liability.</strong> No security deposits, no damage anxiety.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#00aa6c] font-bold">✓</span>
                                            <span><strong>Professional local driver:</strong> Certified guides who know every ridge and switchback.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#00aa6c] font-bold">✓</span>
                                            <span><strong>Built for families (ages 5+):</strong> Kids, parents, and grandparents ride together comfortably.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#00aa6c] font-bold">✓</span>
                                            <span><strong>Full headset intercoms:</strong> Crystal-clear communication and wildlife storytelling.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#00aa6c] font-bold">✓</span>
                                            <span><strong>Effortless 20-min drive:</strong> Basecamp in Island Park, right off US Highway 20.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Comparison Link Callout */}
                            <div className="p-4 bg-nomad-paper/60 border border-nomad-black/10 rounded-sm text-center">
                                <p className="text-xs md:text-sm font-mono text-nomad-black/80">
                                    Weighing your options between renting a machine or riding with a guide?{' '}
                                    <Link href="/rental-vs-guided" className="text-nomad-red font-bold hover:underline">
                                        Read our complete ATV Rental vs. Guided Tour Comparison Guide →
                                    </Link>
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* 20 MINUTES FROM WEST YELLOWSTONE — LOCATION & LOGISTICS */}
                <section className="py-16 bg-nomad-paper/50 border-y border-nomad-black/10 relative z-10">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <FadeIn>
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                <div className="md:col-span-7 space-y-4">
                                    <span className="font-mono text-nomad-red text-xs tracking-widest font-bold uppercase">
                                        Easy Half-Day Trip
                                    </span>
                                    <h2 className="font-heading text-3xl md:text-4xl text-nomad-black uppercase text-distressed">
                                        Just 20 Minutes From West Yellowstone
                                    </h2>
                                    <p className="text-sm md:text-base text-nomad-black/85 leading-relaxed">
                                        Yellowstone National Park does not allow off-road vehicles anywhere on its roads or trails. To get into the real mountain backcountry, visitors head 20 minutes south of West Yellowstone, Montana to our basecamp in Island Park, Idaho.
                                    </p>
                                    <p className="text-sm md:text-base text-nomad-black/85 leading-relaxed">
                                        The drive along US Highway 20 is completely paved, flat, and takes roughly 20 to 22 minutes door-to-door. With morning and afternoon departure times, a 2.5-hour tour slots effortlessly into your Yellowstone itinerary without sacrificing park time.
                                    </p>
                                    <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono font-bold text-nomad-black">
                                        <span className="bg-nomad-paper px-3 py-1.5 border border-nomad-black/15 rounded-sm">📍 4292 US Hwy 20, Island Park, ID</span>
                                        <span className="bg-nomad-paper px-3 py-1.5 border border-nomad-black/15 rounded-sm">⏱ 20 Minutes Door-to-Door</span>
                                        <span className="bg-nomad-paper px-3 py-1.5 border border-nomad-black/15 rounded-sm">🚗 Paved Highway Access</span>
                                    </div>
                                </div>

                                <div className="md:col-span-5 bg-nomad-black text-white p-6 rounded-sm shadow-xl space-y-4">
                                    <h3 className="font-heading text-xl uppercase tracking-wider text-accent border-b border-white/10 pb-2">
                                        Sample Day Plan
                                    </h3>
                                    <div className="space-y-3 font-mono text-xs text-nomad-paper/90">
                                        <div>
                                            <span className="text-accent font-bold">8:30 AM:</span> Leave West Yellowstone hotel or cabin
                                        </div>
                                        <div>
                                            <span className="text-accent font-bold">8:55 AM:</span> Arrive at Nomad Island Park basecamp; gear up with helmets & headsets
                                        </div>
                                        <div>
                                            <span className="text-accent font-bold">9:00 AM – 11:45 AM:</span> Scale 10,000-ft Continental Divide summits, spot wildlife, explore hidden springs
                                        </div>
                                        <div>
                                            <span className="text-accent font-bold">12:15 PM:</span> Back in West Yellowstone for lunch, then enter park for afternoon geyser basin exploration
                                        </div>
                                    </div>
                                    <Link
                                        href="/booking"
                                        className="btn-primary w-full block text-center py-3 text-xs tracking-widest font-bold"
                                    >
                                        RESERVE TOUR SEATS →
                                    </Link>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* PRICING & TOURS */}
                <PricingSection />

                {/* FAQ */}
                <section className="py-24 bg-transparent relative z-10 w-full">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <FadeIn>
                            <h2 className="font-heading text-4xl text-nomad-black text-center uppercase mb-2 text-distressed drop-shadow-sm">
                                West Yellowstone ATV Tours FAQ
                            </h2>
                            <p className="font-mono text-sm text-nomad-red font-bold tracking-widest text-center uppercase mb-12 drop-shadow-sm">
                                // Everything You Need To Know Before Booking
                            </p>
                            <AccordionFAQ items={westYellowstoneFaqData} defaultOpenIndex={0} />
                        </FadeIn>
                    </div>
                </section>

                {/* BOTTOM CONVERSION CTA */}
                <section className="py-20 relative flex items-center justify-center overflow-hidden z-10 border-t border-nomad-black/15 bg-nomad-black text-white">
                    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
                        <FadeIn>
                            <span className="font-mono text-accent text-xs tracking-[0.2em] font-bold uppercase block mb-3">
                                20 Minutes From West Yellowstone
                            </span>
                            <h2 className="font-heading text-4xl sm:text-6xl text-white uppercase mb-4 text-distressed">
                                Book Your West Yellowstone<br />ATV Tour
                            </h2>
                            <p className="text-nomad-paper/80 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light">
                                All 2027 reservations receive an automatic 15% early bird discount. Passenger-only, zero liability, ages 5+. Seats fill quickly during peak summer months.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/booking" className="btn-primary px-10 py-5 text-base font-bold shadow-2xl">
                                    BOOK ONLINE (15% OFF) →
                                </Link>
                                <a
                                    href="tel:+12087452088"
                                    className="font-mono text-sm font-bold text-white hover:text-accent transition-colors flex items-center gap-2 border border-white/20 px-8 py-5 rounded-sm hover:border-accent"
                                >
                                    CALL (208) 745-2088
                                </a>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </main>

            <footer className="py-8 border-t border-white/10 bg-nomad-black font-mono text-xs text-nomad-paper/60 relative z-20 text-center">
                <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link href="/" className="hover:text-white transition-colors">[RETURN TO HOME]</Link>
                    <span>·</span>
                    <Link href="/yellowstone-atv-tours" className="hover:text-white transition-colors">[YELLOWSTONE ATV TOURS]</Link>
                    <span>·</span>
                    <Link href="/rental-vs-guided" className="hover:text-white transition-colors">[RENTAL VS GUIDED]</Link>
                    <span>·</span>
                    <Link href="/booking" className="text-accent hover:text-white transition-colors">[BOOK ONLINE]</Link>
                </div>
            </footer>
        </div>
    );
}
