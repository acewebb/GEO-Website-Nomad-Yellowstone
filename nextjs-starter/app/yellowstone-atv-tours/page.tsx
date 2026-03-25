import React from 'react';
import Image from "next/image";
import Link from "next/link";
import PricingSection from '@/components/PricingSection';
import GlobalHeader from '@/components/GlobalHeader';
import FadeIn from '@/components/FadeIn';
import AccordionFAQ from '@/components/AccordionFAQ';

export const metadata = {
    title: "Yellowstone ATV Tours | Backcountry Expeditions | Nomad Yellowstone",
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
    return (
        <div className="min-h-screen flex flex-col font-body bg-background text-foreground selection:bg-accent selection:text-white overflow-x-hidden">
            <GlobalHeader />

            <main className="flex-grow flex flex-col relative w-full pt-20 md:pt-32">
                <section className="relative w-full py-16 md:py-24 flex flex-col items-center overflow-hidden bg-transparent z-10">
                    <div className="w-full text-center mb-8 z-20 relative px-4">
                        <FadeIn>
                            <div className="flex flex-col items-center justify-center">
                                <span className="font-mono text-nomad-red text-xs md:text-sm tracking-[0.2em] mb-4 block font-bold uppercase drop-shadow-sm">
                                    Deep Wilderness Access
                                </span>
                                <h1 className="font-heading text-5xl md:text-7xl lg:text-[6rem] text-nomad-black uppercase leading-[0.85] tracking-tight mb-6 text-distressed drop-shadow-md">
                                    YELLOWSTONE<br />
                                    <span className="text-nomad-red font-light">ATV TOURS</span>
                                </h1>
                                <p className="font-mono text-xs md:text-sm text-nomad-black/80 font-bold uppercase tracking-[0.15em] max-w-xl mx-auto drop-shadow-sm leading-relaxed">
                                    Experience a guided Yellowstone backcountry ATV tour unlike any crowded park bus tour. Passenger-only expeditions.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                    <div className="relative w-full h-[35vh] md:h-[50vh] flex flex-col max-w-5xl mx-auto p-4 md:px-6">
                        <div className="relative w-full h-full bg-nomad-black rounded-sm overflow-hidden shadow-2xl border border-white/5">
                            <Image src="/moody-silhouette.jpg" alt="Yellowstone backcountry ATV tours with Nomad Yellowstone in Idaho and Montana." fill className="object-cover grayscale contrast-125" />
                            <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.6)] z-10 pointer-events-none"></div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-transparent relative z-10">
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
                                    Discover the wild, unfiltered side of the ecosystem on a premium, private expedition located just 20 minutes from the West Yellowstone, Montana entrance.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                <PricingSection />

                <section className="py-24 bg-transparent relative z-10 w-full">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <FadeIn>
                            <h2 className="font-heading text-4xl text-nomad-black text-center uppercase mb-2 text-distressed drop-shadow-sm">Operations Protocol</h2>
                            <p className="font-mono text-sm text-nomad-red font-bold tracking-widest text-center uppercase mb-12 drop-shadow-sm">// Frequently Asked Questions</p>
                            <AccordionFAQ items={yellowstoneFaqData} defaultOpenIndex={0} />
                        </FadeIn>
                    </div>
                </section>

                <section className="py-24 relative flex items-center justify-center overflow-hidden z-10 border-t border-[rgba(0,0,0,0.1)]">
                    <div className="relative z-10 text-center px-4">
                        <FadeIn>
                            <h2 className="font-heading text-5xl md:text-7xl text-nomad-black uppercase mb-8 opacity-100 text-distressed drop-shadow-md">Book Your <br />Yellowstone Expedition</h2>
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
