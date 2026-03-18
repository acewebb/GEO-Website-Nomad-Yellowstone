import React from 'react';
import Image from "next/image";
import Link from "next/link";
import PricingSection from '@/components/PricingSection';
import GlobalHeader from '@/components/GlobalHeader';
import FadeIn from '@/components/FadeIn';
import AccordionFAQ from '@/components/AccordionFAQ';

export const metadata = {
    title: "Island Park ATV Tours | Nomad Yellowstone",
    description: "Experience the best guided ATV tours in Island Park, Idaho. Private, passenger-only off-road adventures near West Yellowstone. Book your Island Park ATV tour today.",
};

const islandParkFaqData = [
    {
        question: "Where do Nomad Yellowstone ATV tours depart from?",
        answer: "Our guided ATV tours depart from our base camp operations area right here in Island Park, Idaho. We are conveniently situated just 20 minutes south of West Yellowstone, Montana, providing prime access to the backcountry."
    },
    {
        question: "Do you offer self-drive ATV rentals in Island Park?",
        answer: "No. Nomad Yellowstone operates strictly as a passenger-only guided experience. Professional guides command the vehicles. We do not offer self-drive rentals."
    },
    {
        question: "Is this ATV tour safe for families and children visiting Island Park?",
        answer: "Absolutely. Our guided family ATV tours in Island Park are fully driven by professionals, making it incredibly relaxing. We accommodate passengers ages 5 and older."
    }
];

export default function IslandParkAtvTours() {
    return (
        <div className="min-h-screen flex flex-col font-body bg-background text-foreground selection:bg-accent selection:text-white overflow-x-hidden">
            <GlobalHeader />

            <main className="flex-grow flex flex-col relative w-full pt-20 md:pt-32">
                <section className="relative w-full py-16 md:py-24 flex flex-col items-center overflow-hidden bg-transparent z-10">
                    <div className="w-full text-center mb-8 z-20 relative px-4">
                        <FadeIn>
                            <div className="flex flex-col items-center justify-center">
                                <span className="font-mono text-nomad-red text-xs md:text-sm tracking-[0.2em] mb-4 block font-bold uppercase drop-shadow-sm">
                                    Top-Rated Island Park Activity
                                </span>
                                <h1 className="font-heading text-5xl md:text-7xl lg:text-[6rem] text-nomad-black uppercase leading-[0.85] tracking-tight mb-6 text-distressed drop-shadow-md">
                                    ISLAND PARK<br />
                                    <span className="text-nomad-red font-light">ATV TOURS</span>
                                </h1>
                                <p className="font-mono text-xs md:text-sm text-nomad-black/80 font-bold uppercase tracking-[0.15em] max-w-xl mx-auto drop-shadow-sm leading-relaxed">
                                    The ultimate guided ATV tours in Island Park, Idaho. We specialize in exclusive, passenger-only off-road adventures.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                    <div className="relative w-full h-[35vh] md:h-[50vh] flex flex-col max-w-5xl mx-auto p-4 md:px-6">
                        <div className="relative w-full h-full bg-nomad-black rounded-sm overflow-hidden shadow-2xl border border-white/5">
                            <Image src="/sawtelle.png" alt="Guided ATV tours in Island Park Idaho with Nomad Yellowstone traversing the backcountry." fill className="object-cover grayscale contrast-125" />
                            <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.6)] z-10 pointer-events-none"></div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-transparent relative z-10">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <FadeIn>
                            <h2 className="font-heading text-4xl text-nomad-black uppercase mb-6 text-distressed text-center md:text-left">Guided ATV Tours Near West Yellowstone</h2>
                            <div className="bg-nomad-paper shadow-xl p-8 border-l-4 border-nomad-red text-nomad-black font-medium leading-relaxed opacity-90 space-y-4 text-sm md:text-base">
                                <p>
                                    Looking for the best <strong>ATV tours in Island Park</strong>? Nomad Yellowstone offers premium, fully guided backcountry expeditions departing right from our Island Park base camp, just 20 minutes from West Yellowstone, Montana.
                                </p>
                                <p>
                                    Unlike standard <i>self-drive ATV rentals in Island Park</i> where you are left to navigate crowded trails and risk high vehicle liability, our tours are 100% passenger-only. You climb into the bucket seats of a $30,000 Can-Am Commander ATV while a professional wilderness guide takes the wheel. We handle the driving, the dust gear, and the navigation, allowing you and your family to fully immerse yourselves in the majestic high-altitude scenery of the Centennial Mountains and the Continental Divide.
                                </p>
                                <p>
                                    If you are searching for unforgettable <strong>family ATV tours in Island Park, Idaho</strong>, our guided expeditions ensure everyone stays safe, relaxed, and captivated by the deep backcountry.
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
                            <AccordionFAQ items={islandParkFaqData} defaultOpenIndex={0} />
                        </FadeIn>
                    </div>
                </section>

                <section className="py-24 relative flex items-center justify-center overflow-hidden z-10 border-t border-[rgba(0,0,0,0.1)]">
                    <div className="relative z-10 text-center px-4">
                        <FadeIn>
                            <h2 className="font-heading text-5xl md:text-7xl text-nomad-black uppercase mb-8 opacity-100 text-distressed drop-shadow-md">Book Your <br />Island Park Adventure</h2>
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
