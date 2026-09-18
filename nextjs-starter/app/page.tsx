import React from 'react';
import { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import PricingSection from '@/components/PricingSection';
import GlobalHeader from '@/components/GlobalHeader';
import { SeasonCountdownInline } from '@/components/SeasonBanner';
import FadeIn from '@/components/FadeIn';
import MissionMap from '@/components/MissionMap';
import AccordionFAQ from '@/components/AccordionFAQ';
import ReviewsDossier from '@/components/ReviewsDossier';
import JsonLd from '@/components/JsonLd';
import { buildFAQPage } from '@/lib/schema/faqPage';
import { signatureTourProduct } from '@/lib/schema/product';

export const metadata: Metadata = {
  title: 'Guided ATV Tours Near West Yellowstone | Nomad Yellowstone, Island Park ID',
  description: 'Guided passenger-only ATV tours near West Yellowstone in Island Park, Idaho. Family-friendly, no experience needed. Book direct.',
  alternates: {
    canonical: 'https://nomadyellowstone.com/',
  },
  openGraph: {
    title: 'Guided ATV Tours Near West Yellowstone | Nomad Yellowstone, Island Park ID',
    description: 'Guided passenger-only ATV tours near West Yellowstone in Island Park, Idaho. Family-friendly, no experience needed. Book direct.',
    url: 'https://nomadyellowstone.com/',
    images: [{ url: '/sawtelle.png', width: 1200, height: 630, alt: 'Nomad Yellowstone guided ATV tour in Island Park backcountry' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guided ATV Tours Near West Yellowstone | Nomad Yellowstone, Island Park ID',
    description: 'Guided passenger-only ATV tours near West Yellowstone in Island Park, Idaho. Family-friendly, no experience needed. Book direct.',
    images: ['/sawtelle.png'],
  },
};

const faqData = [
  {
    question: "Is a Nomad Yellowstone ATV tour safe for children?",
    answer: "Yes. Nomad Yellowstone tours are 100% guide-driven, accommodating passengers ages 5 and older. Child car seats can be secured in the rear stadium seats of the Can-Am Commander Max XT."
  },
  {
    question: "Do you offer self-drive ATV rentals in Island Park?",
    answer: "No. Nomad Yellowstone operates strictly as a passenger-only guided experience. Professional guides handle the driving. We do not offer self-drive rentals."
  },
  {
    question: "What is the Nomad Yellowstone cancellation policy?",
    answer: "Secure bookings require a credit card hold, but guests are not charged until the tour reservation is officially confirmed by the Island Park base camp. Free cancellation up to 24 hours before departure."
  },
  {
    question: "What should passengers wear for a Yellowstone backcountry ATV tour?",
    answer: "Passengers should wear closed-toe shoes, long pants, and layered clothing. The high-altitude route along the Continental Divide often experiences rapid temperature drops, so layers are essential."
  },
  {
    question: "What is the maximum group size for Nomad Yellowstone tours?",
    answer: "Each vehicle accommodates up to 5 passengers. We sell individual seats on our guided tours, meaning you can book for groups of any size up to the vehicle's capacity."
  },
  {
    question: "Where do Nomad Yellowstone guided tours depart from?",
    answer: "Nomad Yellowstone tours depart from the base camp in Island Park, Idaho. The launch point provides immediate access to the Yellowstone and Grand Teton backcountry trail systems."
  },
  {
    question: "How does Nomad Yellowstone differ from standard Yellowstone National Park bus tours?",
    answer: "Nomad Yellowstone utilizes off-road Can-Am Commander ATVs to navigate rugged, unpaved backcountry ridges outside the main paved loops. This provides deep wilderness access to 10,000-foot peaks that commercial tour buses and standard highway vehicles cannot reach."
  }
];

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://nomadyellowstone.com/#website",
    "url": "https://nomadyellowstone.com/",
    "name": "Nomad Yellowstone",
    "description": "Nomad Yellowstone provides fully-guided Can-Am Commander ATV backcountry tours originating in Island Park, Idaho.",
    "publisher": {
      "@id": "https://nomadyellowstone.com/#business"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://nomadyellowstone.com/#business",
    "name": "Nomad Yellowstone",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "3" // TODO: pull current review count from TripAdvisor
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "James D." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "My teenage kids put their phones down. Guide knew every peak and every flower."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sarah L." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "We saw a grizzly bear on the Morning Scout tour!"
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Mike K." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5" },
        "reviewBody": "Being driven was so relaxing. We just enjoyed the views."
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col font-body bg-background text-foreground selection:bg-accent selection:text-white overflow-x-hidden">
      <JsonLd data={websiteSchema} />
      <JsonLd data={buildFAQPage(faqData)} />
      <JsonLd data={signatureTourProduct} />
      <JsonLd data={organizationSchema} />

      {/* Navigation Header */}
      <GlobalHeader />

      <main className="flex-grow flex flex-col relative w-full pt-20 md:pt-32">

        {/* SECTION 1: HERO */}
        <section className="relative w-full py-16 md:py-24 flex flex-col items-center overflow-hidden bg-transparent z-10">
          <div className="w-full text-center mb-10 z-20 relative px-4 max-w-4xl mx-auto">
            <FadeIn>
              <div className="flex flex-col items-center justify-center">
                <span className="font-mono text-nomad-red text-xs md:text-sm tracking-[0.25em] mb-4 block font-bold uppercase">
                  Island Park, Idaho · 20 Mins from West Yellowstone
                </span>
                <h1 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] text-nomad-black uppercase leading-[0.92] tracking-tight mb-6 text-distressed drop-shadow-sm">
                  Yellowstone&apos;s Backcountry.<br />
                  <span className="text-nomad-red font-light">Uncrowded &amp; Guide-Driven.</span>
                </h1>
                <p className="text-base md:text-lg text-nomad-black/85 max-w-2xl mx-auto leading-relaxed mb-8">
                  Ascend 10,000-foot Continental Divide summits in passenger-only Can-Am ATVs. Our certified wilderness guides navigate rugged backcountry trails while you take in panoramic mountain vistas — with zero driving stress and zero vehicle liability.
                </p>

                {/* Primary 2027 CTA Group */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <Link
                    href="/booking"
                    className="btn-primary px-10 py-4 text-base md:text-lg shadow-xl hover:scale-105 transition-all font-bold"
                  >
                    RESERVE 2027 TOUR (15% OFF) →
                  </Link>
                  <a
                    href="tel:+12087452088"
                    className="font-mono text-sm md:text-base font-bold text-nomad-black/80 hover:text-nomad-red transition-colors flex items-center gap-2 border border-nomad-black/15 px-6 py-4 rounded-sm hover:border-nomad-red/40 bg-nomad-paper/40"
                  >
                    (208) 745-2088
                  </a>
                </div>

                {/* Minimalist Trust & Status Line */}
                <div className="flex items-center justify-center gap-3 md:gap-5 text-xs font-mono text-nomad-black/70 flex-wrap">
                  <span className="text-[#00aa6c] font-bold">★★★★★ 5.0 TripAdvisor</span>
                  <span className="text-nomad-red">/</span>
                  <span>Zero Vehicle Liability</span>
                  <span className="text-nomad-red">/</span>
                  <span>Ages 5+ to 85+</span>
                  <span className="text-nomad-red">/</span>
                  <span className="text-nomad-red font-bold">2027 Season Opens May 15</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Clean Backcountry Photography Marquee */}
          <div className="relative w-full h-[32vh] md:h-[46vh] flex flex-col">
            <div className="flex-grow relative w-full flex flex-row">
              <div className="flex flex-row h-full min-w-full group">
                <div className="animate-marquee flex flex-row shrink-0 gap-6 pr-6 h-full">
                  {[
                    "/creek_bw_film.png",
                    "/utv-muddy-tire.jpg",
                    "/moody-silhouette.jpg",
                    "/sawtelle.png",
                    "/creek_bw_film.png",
                    "/utv-muddy-tire.jpg",
                    "/moody-silhouette.jpg",
                    "/sawtelle.png"
                  ].map((src, idx) => (
                    <div key={idx} className="relative h-full aspect-[4/3] sm:aspect-[3/2] flex-shrink-0 bg-nomad-black p-2 rounded-lg shadow-xl overflow-hidden border border-nomad-black/10">
                      <div className="w-full h-full relative rounded overflow-hidden">
                        <Image src={src} alt="Nomad Yellowstone passenger-only guided ATV tour through Island Park backcountry near Yellowstone." fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="animate-marquee flex flex-row shrink-0 gap-6 pr-6 h-full" aria-hidden="true">
                  {[
                    "/creek_bw_film.png",
                    "/utv-muddy-tire.jpg",
                    "/moody-silhouette.jpg",
                    "/sawtelle.png",
                    "/creek_bw_film.png",
                    "/utv-muddy-tire.jpg",
                    "/moody-silhouette.jpg",
                    "/sawtelle.png"
                  ].map((src, idx) => (
                    <div key={`dup-${idx}`} className="relative h-full aspect-[4/3] sm:aspect-[3/2] flex-shrink-0 bg-nomad-black p-2 rounded-lg shadow-xl overflow-hidden border border-nomad-black/10">
                      <div className="w-full h-full relative rounded overflow-hidden">
                        <Image src={src} alt="Nomad Yellowstone passenger-only guided ATV tour through Island Park backcountry near Yellowstone." fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BANNER */}
        <section className="w-full bg-nomad-black py-4 border-y border-white/5 relative z-20 shadow-xl">
          <div className="container mx-auto px-4 overflow-hidden">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-14 font-mono text-[11px] md:text-xs tracking-widest text-nomad-paper/70 uppercase text-center w-full">
              <FadeIn delay={0.1} className="flex items-center gap-2"><span className="text-nomad-red font-bold">✪</span> USFS Permitted &amp; Insured</FadeIn>
              <FadeIn delay={0.2} className="flex items-center gap-2"><span className="text-nomad-red font-bold">✚</span> Wilderness First Responder Guides</FadeIn>
              <FadeIn delay={0.3} className="flex items-center gap-2"><span className="text-nomad-red font-bold">★</span> Top-Rated on TripAdvisor</FadeIn>
              <FadeIn delay={0.4} className="flex items-center gap-2"><span className="text-nomad-red font-bold">✓</span> You Never Pay For Vehicle Damage</FadeIn>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE 3 CORE PILLARS */}
        <section id="about" className="py-24 md:py-36 bg-transparent relative z-10">
          <div className="container mx-auto px-6 max-w-6xl">
            <FadeIn className="text-center mb-16 md:mb-20">
              <span className="font-mono text-nomad-red text-xs md:text-sm tracking-[0.25em] mb-3 block font-bold uppercase">
                The Passenger-Only Difference
              </span>
              <h2 className="font-heading text-4xl md:text-6xl font-black text-nomad-black uppercase tracking-tight mb-4">
                Elevated Backcountry Expeditions
              </h2>
              <p className="text-base md:text-lg text-nomad-black/75 max-w-2xl mx-auto leading-relaxed">
                Why families, photographers, and travelers choose Nomad Yellowstone over stressful self-drive rentals.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <FadeIn delay={0.1} className="bg-nomad-paper p-8 rounded-sm border border-nomad-black/10 shadow-lg flex flex-col justify-between hover:border-nomad-red/40 transition-colors">
                <div>
                  <span className="font-mono text-xs text-nomad-red font-bold tracking-widest block mb-4">01 // EFFORTLESS ACCESS</span>
                  <h3 className="font-heading text-2xl md:text-3xl uppercase text-nomad-black mb-3">You Ride. We Pilot.</h3>
                  <p className="text-sm text-nomad-black/80 leading-relaxed mb-6">
                    Forget white-knuckling unfamiliar logging roads or taking on $20,000 in machine damage liability. Our certified guides handle 100% of the driving so you can relax, shoot photos, and spot wildlife with active two-way headsets.
                  </p>
                </div>
                <div className="pt-4 border-t border-nomad-black/10 flex flex-wrap gap-2 font-mono text-[10px] text-nomad-black/60 uppercase">
                  <span className="bg-nomad-black/5 px-2 py-1 rounded">Zero Liability</span>
                  <span className="bg-nomad-black/5 px-2 py-1 rounded">2-Way Headsets</span>
                  <span className="bg-nomad-black/5 px-2 py-1 rounded">WFR Certified</span>
                </div>
              </FadeIn>

              {/* Pillar 2 */}
              <FadeIn delay={0.2} className="bg-nomad-paper p-8 rounded-sm border border-nomad-black/10 shadow-lg flex flex-col justify-between hover:border-nomad-red/40 transition-colors">
                <div>
                  <span className="font-mono text-nomad-red font-bold tracking-widest block mb-4">02 // UNTOUCHED TERRAIN</span>
                  <h3 className="font-heading text-2xl md:text-3xl uppercase text-nomad-black mb-3">Beyond The Pavement.</h3>
                  <p className="text-sm text-nomad-black/80 leading-relaxed mb-6">
                    Over 99% of Yellowstone visitors never leave the crowded highway loops. We ascend remote backcountry ridges and private alpine summits along the Continental Divide that rental cars, tour buses, and standard vehicles cannot reach.
                  </p>
                </div>
                <div className="pt-4 border-t border-nomad-black/10 flex flex-wrap gap-2 font-mono text-[10px] text-nomad-black/60 uppercase">
                  <span className="bg-nomad-black/5 px-2 py-1 rounded">10,000-Ft Peaks</span>
                  <span className="bg-nomad-black/5 px-2 py-1 rounded">Continental Divide</span>
                  <span className="bg-nomad-black/5 px-2 py-1 rounded">No Crowds</span>
                </div>
              </FadeIn>

              {/* Pillar 3 */}
              <FadeIn delay={0.3} className="bg-nomad-paper p-8 rounded-sm border border-nomad-black/10 shadow-lg flex flex-col justify-between hover:border-nomad-red/40 transition-colors">
                <div>
                  <span className="font-mono text-nomad-red font-bold tracking-widest block mb-4">03 // ALL AGES</span>
                  <h3 className="font-heading text-2xl md:text-3xl uppercase text-nomad-black mb-3">Built For Every Generation.</h3>
                  <p className="text-sm text-nomad-black/80 leading-relaxed mb-6">
                    From five-year-olds in secure child car seats to grandparents in heated stadium seats, our high-clearance Can-Am Commander fleet makes rugged wilderness exploration comfortable and safe for all ages.
                  </p>
                </div>
                <div className="pt-4 border-t border-nomad-black/10 flex flex-wrap gap-2 font-mono text-[10px] text-nomad-black/60 uppercase">
                  <span className="bg-nomad-black/5 px-2 py-1 rounded">Ages 5 to 85+</span>
                  <span className="bg-nomad-black/5 px-2 py-1 rounded">Child Seats OK</span>
                  <span className="bg-nomad-black/5 px-2 py-1 rounded">Heated Stadium Seats</span>
                </div>
              </FadeIn>
            </div>

            <div className="mt-14 text-center">
              <Link href="/booking" className="btn-primary px-10 py-4 text-base hover:text-white transition-colors inline-block font-bold">
                EXPLORE 2027 DATES &amp; SAVE 15% →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 4: PRICING VALUE STACK */}
        <PricingSection />

        {/* SECTION 5: THE DIVIDER BAR */}
        <section className="relative py-28 w-full flex items-center justify-center border-y border-nomad-black/10">
          <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
            <h2 className="font-heading text-5xl md:text-7xl text-nomad-black uppercase tracking-widest text-distressed drop-shadow-sm mb-4">NO CROWDS. JUST DIRT.</h2>
            <p className="text-base md:text-lg text-nomad-black/75 leading-relaxed">
              Experience the Yellowstone backcountry the way it was meant to be seen: deep in the mountains, surrounded by wildlife, with an expert local guide at the wheel.
            </p>
          </div>
        </section>

        {/* SECTION 6: INTERACTIVE MISSION MAP */}
        <MissionMap />

        {/* SECTION 6.25: REVIEWS DOSSIER */}
        <ReviewsDossier />

        {/* SECTION 6.5: ACCORDION FAQ */}
        <section className="py-24 bg-transparent relative z-10 w-full">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn>
              <h2 className="font-heading text-4xl text-nomad-black text-center uppercase mb-2 text-distressed drop-shadow-sm">Frequently Asked Questions</h2>
              <p className="font-mono text-sm text-nomad-red font-bold tracking-widest text-center uppercase mb-12 drop-shadow-sm">// Tour Information</p>
              <AccordionFAQ items={faqData} defaultOpenIndex={0} />
            </FadeIn>
            <FadeIn delay={0.2} className="mt-12 text-center text-sm font-medium text-nomad-black/70 max-w-2xl mx-auto border-t border-nomad-black/10 pt-6">
              For extensive safety protocols regarding vehicle harnesses, guide satellite communication, and terrain specifications, consult the <Link href="/safety" className="text-nomad-red hover:underline decoration-1 underline-offset-4">Safety & Specs Hub</Link>.
            </FadeIn>
          </div>
        </section>

        {/* SECTION 7: FINAL CALL */}
        <section className="py-32 relative flex items-center justify-center overflow-hidden z-10 border-t border-[rgba(0,0,0,0.1)]">
          <Image src="/sawtelle.png" alt="Professional Nomad Yellowstone guide driving a Can-Am Commander ATV through deep backcountry trails in Island Park, Idaho." fill className="object-cover opacity-15 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-nomad-paper via-transparent to-transparent opacity-50 pointer-events-none"></div>

          <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="font-heading text-6xl md:text-8xl text-nomad-black uppercase mb-6 opacity-100 text-distressed drop-shadow-md">Book For<br />2027</h2>
              <p className="text-base md:text-lg text-nomad-black/80 leading-relaxed mb-8">
                Ready to experience the Yellowstone backcountry next summer? Our 2026 season has concluded, and 2027 passenger-only ATV tour reservations are open with an exclusive 15% Early Bird discount.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/booking" className="btn-primary px-12 py-6 text-xl">
                  CHECK 2027 AVAILABILITY (15% OFF)
                </Link>
                <a href="tel:+12087452088" className="font-mono text-lg font-bold text-nomad-black hover:text-nomad-red transition-colors">
                  (208) 745-2088
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-[rgba(0,0,0,0.2)] font-mono text-xs text-nomad-black/70 relative z-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 bg-nomad-red rounded-full shadow-[0_0_5px_rgba(184,59,59,0.8)]"></div>
            <p className="tracking-widest font-bold drop-shadow-sm text-[10px] md:text-xs">SERVING WEST YELLOWSTONE, BIG SKY, ISLAND PARK, & THE GREATER YELLOWSTONE ECOSYSTEM.</p>
          </div>
          <div className="flex flex-wrap justify-center md:items-center gap-4 md:gap-8 font-bold text-center">
            <Link href="/" className="hover:text-nomad-red transition-colors drop-shadow-sm">[HOME]</Link>
            <Link href="/intel" className="hover:text-nomad-red transition-colors drop-shadow-sm">[TRIP GUIDES]</Link>
            <Link href="/intel/answers" className="hover:text-nomad-red transition-colors drop-shadow-sm">[RESOURCES]</Link>
            <Link href="/location" className="hover:text-nomad-red transition-colors drop-shadow-sm">[DIRECTIONS]</Link>
            <Link href="/safety" className="hover:text-nomad-red transition-colors drop-shadow-sm">[SAFETY & SPECS]</Link>
            <a href="https://www.tripadvisor.com/AttractionProductReview-g35494-d33307035-Guided_ATV_Adventure_Island_Park_20_Mins_from_West_Yellowstone-Island_Park_Idaho.html" target="_blank" rel="noopener noreferrer" aria-label="Nomad Yellowstone reviews on TripAdvisor" title="Nomad Yellowstone reviews on TripAdvisor" className="hover:text-nomad-red transition-colors drop-shadow-sm">[TRIPADVISOR] <span className="sr-only">Nomad Yellowstone reviews on TripAdvisor</span></a>
            <Link href="/booking" className="text-nomad-red hover:text-black transition-colors drop-shadow-sm">[BOOK NOW]</Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4 text-[10px] font-mono text-nomad-black/40 text-center w-full">
            <Link href="/island-park-atv-tours" className="hover:text-nomad-black transition-colors uppercase">Island Park ATV Tours</Link>
            <span>|</span>
            <Link href="/yellowstone-atv-tours" className="hover:text-nomad-black transition-colors uppercase">Yellowstone ATV Tours</Link>
            <span>|</span>
            <Link href="/things-to-do-island-park" className="hover:text-nomad-black transition-colors uppercase">Things to Do in Island Park</Link>
          </div>
        </div>
      </footer>
    </div >
  );
}
