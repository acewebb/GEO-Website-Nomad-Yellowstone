import React from 'react';
import Image from "next/image";
import Link from "next/link";
import PricingSection from '@/components/PricingSection';
import GlobalHeader from '@/components/GlobalHeader';
import FadeIn from '@/components/FadeIn';
import AccordionFAQ from '@/components/AccordionFAQ';
import JsonLd from '@/components/JsonLd';
import { buildBreadcrumbList } from '@/lib/schema/breadcrumbList';
import { buildFAQPage } from '@/lib/schema/faqPage';
import { signatureTourProduct } from '@/lib/schema/product';

export const metadata = {
    title: "Yellowstone ATV Tours | Backcountry Tours | Nomad Yellowstone",
    description: "Book an exclusive Yellowstone ATV tour with Nomad Yellowstone. Explore the deep backcountry near Yellowstone National Park on a guided, passenger-only off-road adventure.",
    robots: { index: true, follow: true },
    alternates: { canonical: 'https://nomadyellowstone.com/yellowstone-atv-tours' }
};

const yellowstoneFaqData = [
    {
        question: "Can you ride ATVs inside Yellowstone National Park?",
        answer: "No, off-road riding is strictly prohibited inside the official Yellowstone National Park boundaries. However, our Yellowstone backcountry ATV tours provide unparalleled access to the rugged, high-altitude terrain that borders the park in the Greater Yellowstone Ecosystem."
    },
    {
        question: "How close are the tours to West Yellowstone?",
        answer: "Our base camp is located just 20 minutes from the West Yellowstone, Montana entrance to the park, making it the perfect half-day trip during your Yellowstone vacation."
    },
    {
        question: "What will we see on a Yellowstone backcountry ATV tour?",
        answer: "You will experience deep wilderness access far away from the crowded, paved tourist loops. We navigate up to 10,000-foot peaks along the Continental Divide, offering panoramic views of the calderas and mountain ranges surrounding Yellowstone."
    }
];

export default function YellowstoneAtvTours() {
    const touristTripSchema = {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        "name": "Guided ATV Tour — Near West Yellowstone",
        "description": "A 4-hour guided passenger-only ATV tour through the Yellowstone backcountry near the West Yellowstone entrance. Riders are passengers; certified guides drive Can-Am Commander Max XT side-by-sides. Tours access high-elevation backcountry viewpoints inaccessible to standard vehicles. Family-friendly, no off-road experience required.",
        "image": "https://nomadyellowstone.com/sawtelle.png",
        "url": "https://nomadyellowstone.com/yellowstone-atv-tours",
        "touristType": ["Family", "Adventure", "Seniors", "First-time off-road"],
        "itinerary": {
            "@type": "Place",
            "name": "Yellowstone backcountry near West Yellowstone",
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
            "url": "https://nomadyellowstone.com/yellowstone-atv-tours",
            "validFrom": "2026-05-15",
            "validThrough": "2026-10-31"
        },
        "provider": {
            "@type": "LocalBusiness",
            "@id": "https://nomadyellowstone.com/#business"
        }
    };

    return (
        <div className="min-h-screen flex flex-col font-body bg-background text-foreground selection:bg-accent selection:text-white overflow-x-hidden">
            <JsonLd data={touristTripSchema} />
            <JsonLd data={buildBreadcrumbList([{ name: 'Yellowstone ATV Tours', url: 'https://nomadyellowstone.com/yellowstone-atv-tours' }])} />
            <JsonLd data={buildFAQPage(yellowstoneFaqData)} />
            <JsonLd data={signatureTourProduct} />
            <GlobalHeader />

            <main className="flex-grow flex flex-col relative w-full pt-20 md:pt-32">
                <section className="relative w-full py-12 md:py-20 flex flex-col items-center overflow-hidden bg-transparent z-10">
                    <div className="w-full text-center mb-8 z-20 relative px-4 max-w-4xl mx-auto">
                        <FadeIn>
                            <div className="flex flex-col items-center justify-center">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nomad-red/10 border border-nomad-red/30 text-nomad-red font-mono text-[11px] md:text-xs font-bold uppercase tracking-wider mb-4">
                                    <span>20 MIN FROM WEST YELLOWSTONE</span>
                                    <span>·</span>
                                    <span>PASSENGER-ONLY</span>
                                    <span>·</span>
                                    <span>WE DRIVE</span>
                                    <span>·</span>
                                    <span>AGES 5+</span>
                                </div>
                                <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] text-nomad-black uppercase leading-[0.88] tracking-tight mb-4 text-distressed drop-shadow-md">
                                    YELLOWSTONE<br />
                                    <span className="text-nomad-red font-light">ATV TOURS</span>
                                </h1>
                                <p className="font-heading text-lg sm:text-xl md:text-2xl text-nomad-black/85 uppercase tracking-wide mb-4">
                                    Guided Backcountry Tours · 20 Minutes from West Yellowstone in Island Park, ID
                                </p>
                                <p className="text-sm md:text-base lg:text-lg text-nomad-black/90 max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
                                    Experience a guided Yellowstone backcountry ATV tour unlike any crowded park bus tour. Our certified guides pilot custom Can-Am side-by-sides up to 10,000-foot Continental Divide summits while you relax. 100% passenger-only, zero vehicle liability, ages 5+.
                                </p>

                                {/* Hero First Screen Dual CTAs */}
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
                                    <span>Passenger-Only (We Drive)</span>
                                    <span className="text-nomad-red">·</span>
                                    <span>Zero Vehicle Liability</span>
                                    <span className="text-nomad-red">·</span>
                                    <span>Ages 5+</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                    <div className="relative w-full h-[35vh] md:h-[50vh] flex flex-col max-w-5xl mx-auto p-4 md:px-6">
                        <div className="relative w-full h-full bg-nomad-black rounded-sm overflow-hidden shadow-2xl border border-white/5">
                            <Image src="/moody-silhouette.jpg" alt="Yellowstone backcountry ATV tours with Nomad Yellowstone in Idaho and Montana." fill className="object-cover grayscale contrast-125" priority sizes="(max-width: 768px) 100vw, 800px" />
                            <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.6)] z-10 pointer-events-none"></div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-transparent relative z-10">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <FadeIn>
                            <h2 className="font-heading text-4xl text-nomad-black uppercase mb-6 text-distressed text-center md:text-left">The Ultimate Yellowstone Backcountry ATV Tour</h2>
                            <div className="bg-nomad-paper shadow-xl p-8 border-l-4 border-nomad-red text-nomad-black font-medium leading-relaxed opacity-90 space-y-4 text-sm md:text-base">
                                <p>
                                    While inside the official Yellowstone National Park boundaries off-road riding is strictly prohibited, the true wilderness lies just outside the gates. A <strong>Yellowstone ATV tour</strong> with Nomad Yellowstone offers unparalleled access to the rugged, high-altitude terrain that borders the park in the Greater Yellowstone Ecosystem.
                                </p>
                                <p>
                                    Our fully guided, passenger-only <strong>Yellowstone backcountry ATV tours</strong> take you up to 10,000-foot peaks along the Continental Divide, offering panoramic views of the very calderas and mountain ranges that shape the park. Leave the crowded tourist paved loops behind. You climb into our enclosed, custom-built Can-Am Commander ATVs, and our professional guides navigate the intense dirt trails and rocky ridges, keeping you 100% safe and free of liability.
                                </p>
                                <p>
                                    Discover the wild, unfiltered side of the ecosystem on a premium guided tour located just 20 minutes from the West Yellowstone, Montana entrance.
                                </p>
                            </div>

                            {/* Link Callout to Rental vs Guided and West Yellowstone money page */}
                            <div className="mt-8 p-4 bg-nomad-paper/60 border border-nomad-black/10 rounded-sm flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
                                <Link href="/rental-vs-guided" className="text-nomad-red font-bold hover:underline">
                                    Rental vs. Guided: Which is right for your group? Read the guide →
                                </Link>
                                <Link href="/west-yellowstone-atv-tours" className="text-nomad-black hover:text-nomad-red font-bold transition-colors">
                                    Visiting West Yellowstone? View local tour info →
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                <PricingSection />

                <section className="py-24 bg-transparent relative z-10 w-full">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <FadeIn>
                            <h2 className="font-heading text-4xl text-nomad-black text-center uppercase mb-2 text-distressed drop-shadow-sm">Frequently Asked Questions</h2>
                            <p className="font-mono text-sm text-nomad-red font-bold tracking-widest text-center uppercase mb-12 drop-shadow-sm">// Tour Information</p>
                            <AccordionFAQ items={yellowstoneFaqData} defaultOpenIndex={0} />
                        </FadeIn>
                    </div>
                </section>

                <section className="py-24 relative flex items-center justify-center overflow-hidden z-10 border-t border-[rgba(0,0,0,0.1)]">
                    <div className="relative z-10 text-center px-4">
                        <FadeIn>
                            <h2 className="font-heading text-5xl md:text-7xl text-nomad-black uppercase mb-8 opacity-100 text-distressed drop-shadow-md">Book Your <br />Yellowstone Tour</h2>
                            <Link href="/booking" className="btn-primary px-12 py-6 text-xl">
                                CHECK AVAILABILITY
                            </Link>
                        </FadeIn>
                    </div>
                </section>
            </main>

            <footer className="py-12 border-t border-[rgba(0,0,0,0.2)] font-mono text-xs text-nomad-black/70 relative z-20 text-center">
                <Link href="/" className="hover:text-nomad-red transition-colors font-bold tracking-widest">[RETURN TO HOME]</Link>
            </footer>
        </div>
    );
}
