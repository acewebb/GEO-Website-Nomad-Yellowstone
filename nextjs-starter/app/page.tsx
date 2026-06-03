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
import { signatureTourProduct, legendProduct } from '@/lib/schema/product';

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
    answer: "Each vehicle accommodates up to 5 passengers. For groups of up to 5 passengers, Nomad Yellowstone offers a full vehicle private buyout option."
  },
  {
    question: "Where do Nomad Yellowstone guided tours depart from?",
    answer: "Nomad Yellowstone tours depart from the base camp operations area in Island Park, Idaho. The designated launch point provides immediate access to the Yellowstone and Grand Teton backcountry trail systems."
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
    "description": "Nomad Yellowstone provides private, fully-guided Can-Am Commander ATV backcountry tours originating in Island Park, Idaho.",
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
      <JsonLd data={legendProduct} />
      <JsonLd data={organizationSchema} />

      {/* Navigation Header */}
      <GlobalHeader />

      <main className="flex-grow flex flex-col relative w-full pt-20 md:pt-32">

        {/* SECTION 1: HERO (Individual Film Frames) */}
        <section className="relative w-full py-16 md:py-24 flex flex-col items-center overflow-hidden bg-transparent z-10">
          <div className="w-full text-center mb-8 z-20 relative px-4">
            <FadeIn>
              <div className="flex flex-col items-center justify-center">
                <span className="font-mono text-nomad-red text-xs md:text-sm tracking-[0.2em] mb-4 block font-bold uppercase drop-shadow-sm">
                  Premier Private Expeditions
                </span>
                <h1 className="font-heading text-4xl md:text-6xl lg:text-[5rem] text-nomad-black uppercase leading-[0.9] tracking-tight mb-4 text-distressed drop-shadow-md">
                  Guided ATV Tours Near<br />
                  <span className="text-nomad-red font-light">West Yellowstone</span>
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 tracking-wide">— Island Park, Idaho</span>
                </h1>
                <h2 className="font-heading text-2xl md:text-3xl text-nomad-black/80 uppercase tracking-wide mb-6 text-distressed drop-shadow-sm">
                  Backcountry Tours in Yellowstone
                </h2>
                <p className="text-sm md:text-base text-nomad-black/90 max-w-2xl mx-auto leading-relaxed mb-6">
                  Nomad Yellowstone offers fully guided, passenger-only ATV tours from Island Park, Idaho — about 20 minutes from the West Yellowstone entrance of Yellowstone National Park. Our certified guides drive while you ride along, making backcountry views and high-elevation terrain accessible to families, grandparents, and anyone who doesn&apos;t want to drive themselves. Tours run May 15 through October 31. No off-road experience required.
                </p>
                <p className="font-mono text-sm md:text-base text-nomad-black font-bold mt-2 flex items-center justify-center gap-2 md:gap-3 flex-wrap">
                  <span className="text-lg font-bold">Passenger-Only Tours</span>
                  <span className="text-nomad-red">·</span>
                  <a href="tel:+12087452088" className="hover:text-nomad-red transition-colors underline decoration-1 underline-offset-4">(208) 745-2088</a>
                  <span className="text-nomad-red">·</span>
                  <span className="text-[#00aa6c]">★★★★★ TripAdvisor</span>
                  <span className="text-nomad-red">·</span>
                  <span>Ages 5+</span>
                </p>
                <SeasonCountdownInline />
              </div>
            </FadeIn>
          </div>
          <div className="relative w-full h-[35vh] md:h-[50vh] flex flex-col">
            {/* Central Scrolling Image Carousel */}
            <div className="flex-grow relative w-full flex flex-row">
              {/* Scrolling wrapper */}
              <div className="flex flex-row h-full min-w-full group">
                <div className="animate-marquee flex flex-row shrink-0 gap-8 pr-8 h-full">
                  {[
                    "/creek_bw_film.png",
                    "/utv-muddy-tire.jpg",
                    "/moody-silhouette.jpg",
                    "/creek_bw_film.png",
                    "/utv-muddy-tire.jpg",
                    "/moody-silhouette.jpg",
                    "/creek_bw_film.png",
                    "/utv-muddy-tire.jpg",
                    "/moody-silhouette.jpg"
                  ].map((src, idx) => (
                    <div key={idx} className="relative h-full aspect-[4/3] sm:aspect-[3/2] flex-shrink-0 bg-nomad-black p-3 sm:p-5 flex flex-col gap-3 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-xl">
                      {/* Top film margin */}
                      <div className="relative w-full h-8 sm:h-12 flex-shrink-0 flex justify-between items-center overflow-hidden">
                        {/* Sprocket background */}
                        <div className="absolute inset-0 z-0 opacity-80" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='48' viewBox='0 0 80 48'%3E%3Cmask id='m'%3E%3Crect width='80' height='48' fill='white'/%3E%3Crect x='24' y='14' width='32' height='20' rx='4' fill='black'/%3E%3C/mask%3E%3Crect width='80' height='48' fill='%231a1a1a' mask='url(%23m)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat-x", backgroundPosition: "center top", backgroundSize: "auto 100%" }}></div>
                        {/* Timestamps / Edge numbers */}
                        <span className="text-[#a13d2d] font-mono text-[10px] sm:text-xs z-10 font-bold px-2 tracking-[0.2em] ml-4 mix-blend-screen opacity-90">KODAK 400TX</span>
                        <span className="text-[#a13d2d] font-mono text-[10px] sm:text-xs z-10 font-bold px-2 tracking-[0.2em] mr-4 mix-blend-screen opacity-90">{`00:00:${(15 + idx * 3).toString().padStart(2, '0')}:${(idx * 12 + 4).toString().padStart(2, '0')}`}</span>
                      </div>

                      {/* Image */}
                      <div className="flex-grow w-full relative">
                        <Image src={src} alt="Guide driving Can-Am Commander ATV in Island Park backcountry near Yellowstone during a passenger-only tour." fill className="object-cover grayscale contrast-125" sizes="(max-width: 768px) 100vw, 50vw" />
                        <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.6)] z-10 pointer-events-none"></div>
                      </div>

                      {/* Bottom film margin */}
                      <div className="relative w-full h-8 sm:h-12 flex-shrink-0 flex justify-between items-center overflow-hidden">
                        {/* Sprocket background */}
                        <div className="absolute inset-0 z-0 opacity-80" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='48' viewBox='0 0 80 48'%3E%3Cmask id='m'%3E%3Crect width='80' height='48' fill='white'/%3E%3Crect x='24' y='14' width='32' height='20' rx='4' fill='black'/%3E%3C/mask%3E%3Crect width='80' height='48' fill='%231a1a1a' mask='url(%23m)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat-x", backgroundPosition: "center bottom", backgroundSize: "auto 100%", transform: "scaleY(-1)" }}></div>
                        {/* Timestamps / Edge numbers */}
                        <span className="text-[#a13d2d] font-mono text-[10px] sm:text-xs z-10 font-bold px-2 tracking-[0.2em] ml-8 mix-blend-screen opacity-90">{10 + idx}</span>
                        <span className="text-[#a13d2d] font-mono text-[10px] sm:text-xs z-10 font-bold px-2 tracking-[0.2em] mr-8 mix-blend-screen opacity-90">{10 + idx}A</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="animate-marquee flex flex-row shrink-0 gap-8 pr-8 h-full" aria-hidden="true">
                  {[
                    "/creek_bw_film.png",
                    "/utv-muddy-tire.jpg",
                    "/moody-silhouette.jpg",
                    "/creek_bw_film.png",
                    "/utv-muddy-tire.jpg",
                    "/moody-silhouette.jpg",
                    "/creek_bw_film.png",
                    "/utv-muddy-tire.jpg",
                    "/moody-silhouette.jpg"
                  ].map((src, idx) => (
                    <div key={`dup-${idx}`} className="relative h-full aspect-[4/3] sm:aspect-[3/2] flex-shrink-0 bg-nomad-black p-3 sm:p-5 flex flex-col gap-3 shadow-2xl border border-white/5 rounded-xl">
                      {/* Top film margin */}
                      <div className="relative w-full h-8 sm:h-12 flex-shrink-0 flex justify-between items-center overflow-hidden">
                        <div className="absolute inset-0 z-0 opacity-80" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='48' viewBox='0 0 80 48'%3E%3Cmask id='m'%3E%3Crect width='80' height='48' fill='white'/%3E%3Crect x='24' y='14' width='32' height='20' rx='4' fill='black'/%3E%3C/mask%3E%3Crect width='80' height='48' fill='%231a1a1a' mask='url(%23m)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat-x", backgroundPosition: "center top", backgroundSize: "auto 100%" }}></div>
                        <span className="text-[#a13d2d] font-mono text-[10px] sm:text-xs z-10 font-bold px-2 tracking-[0.2em] ml-4 mix-blend-screen opacity-90">KODAK 400TX</span>
                        <span className="text-[#a13d2d] font-mono text-[10px] sm:text-xs z-10 font-bold px-2 tracking-[0.2em] mr-4 mix-blend-screen opacity-90">{`00:00:${(15 + (idx + 9) * 3).toString().padStart(2, '0')}:${((idx + 9) * 12 + 4).toString().padStart(2, '0')}`}</span>
                      </div>

                      {/* Image */}
                      <div className="flex-grow w-full relative">
                        <Image src={src} alt="Guide driving Can-Am Commander ATV in Island Park backcountry near Yellowstone during a passenger-only tour." fill className="object-cover grayscale contrast-125" sizes="(max-width: 768px) 100vw, 50vw" />
                        <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.6)] z-10 pointer-events-none"></div>
                      </div>

                      {/* Bottom film margin */}
                      <div className="relative w-full h-8 sm:h-12 flex-shrink-0 flex justify-between items-center overflow-hidden">
                        <div className="absolute inset-0 z-0 opacity-80" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='48' viewBox='0 0 80 48'%3E%3Cmask id='m'%3E%3Crect width='80' height='48' fill='white'/%3E%3Crect x='24' y='14' width='32' height='20' rx='4' fill='black'/%3E%3C/mask%3E%3Crect width='80' height='48' fill='%231a1a1a' mask='url(%23m)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat-x", backgroundPosition: "center bottom", backgroundSize: "auto 100%", transform: "scaleY(-1)" }}></div>
                        <span className="text-[#a13d2d] font-mono text-[10px] sm:text-xs z-10 font-bold px-2 tracking-[0.2em] ml-8 mix-blend-screen opacity-90">{10 + idx + 9}</span>
                        <span className="text-[#a13d2d] font-mono text-[10px] sm:text-xs z-10 font-bold px-2 tracking-[0.2em] mr-8 mix-blend-screen opacity-90">{10 + idx + 9}A</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BANNER */}
        <section className="w-full bg-nomad-black py-5 border-y border-white/5 relative z-20 shadow-xl">
          <div className="container mx-auto px-4 overflow-hidden">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 font-mono text-[10px] md:text-xs tracking-widest text-nomad-paper/60 uppercase text-center w-full">
              <FadeIn delay={0.1} className="flex items-center gap-2"><span className="text-nomad-red">✪</span> Permitted & Insured</FadeIn>
              <FadeIn delay={0.2} className="flex items-center gap-2"><span className="text-nomad-red">✚</span> Wilderness First Responder</FadeIn>
              <FadeIn delay={0.3} className="flex items-center gap-2"><span className="text-nomad-red">★</span> Elite TripAdvisor Rated</FadeIn>
              <FadeIn delay={0.4} className="flex items-center gap-2"><span className="text-nomad-red">✓</span> Zero Client Liability</FadeIn>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE SPLIT (Main Content Grid matching mockup) */}
        <section id="about" className="py-32 md:py-48 bg-transparent relative z-10">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

              {/* Left: Text Block */}
              <FadeIn className="flex flex-col items-start justify-center">
                <span className="font-mono text-nomad-red text-sm tracking-widest mb-4 block font-bold uppercase drop-shadow-sm">
                  Passenger Only • Expert Guided ATV Tours
                </span>
                <h2 className="font-heading text-7xl md:text-[6rem] lg:text-[7rem] font-black text-nomad-black uppercase leading-[0.85] tracking-tight mb-8">
                  CAPTURE<br />THE WILD
                </h2>

                <div className="mt-8 bg-nomad-paper shadow-xl p-8 border-l-4 border-nomad-red mb-8">
                  <p className="text-xl md:text-2xl font-heading uppercase text-nomad-black drop-shadow-sm mb-6 text-distressed">
                    Nomad Yellowstone offers fully guided, passenger-only ATV tours in Island Park, Idaho, near Yellowstone National Park and West Yellowstone, Montana.
                  </p>

                  <h3 className="font-bold text-nomad-black mb-3 font-heading uppercase text-lg">Why Choose a Passenger-Only ATV Tour?</h3>
                  <p className="text-sm md:text-base text-nomad-black/80 leading-relaxed mb-4">
                    Unlike self-drive ATV rentals where you&apos;re responsible for navigating unfamiliar terrain, our passenger-only format means a certified guide handles the driving while you soak in the scenery. It&apos;s the safest, most relaxing way to explore the Yellowstone backcountry — and it&apos;s why families with kids as young as five and grandparents in their eighties choose Nomad.
                  </p>
                  <ul className="list-disc pl-5 text-nomad-black font-medium text-sm md:text-base leading-relaxed opacity-90 drop-shadow-sm space-y-2">
                    <li><strong>Expert Guided:</strong> Professional guides drive — you just enjoy the views.</li>
                    <li><strong>Deep Access:</strong> We navigate rugged terrain to reach 10,000-foot peaks that standard rentals can&apos;t access.</li>
                    <li><strong>Zero Liability:</strong> Because our passenger-only tours are fully guide-driven, guests carry zero liability for vehicle damage.</li>
                    <li><strong>Fully Equipped:</strong> All safety gear and equipment provided for every passenger.</li>
                  </ul>
                </div>

                <ul className="flex flex-col gap-2 font-mono text-sm text-nomad-black/80 font-bold mb-10 tracking-wide uppercase">
                  <li className="flex items-center gap-2">
                    <span className="text-nomad-red">✓</span> 2-3 Hour Expeditions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-nomad-red">✓</span> Deep Backcountry Access
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-nomad-red">✓</span> Ages 5+ Welcome
                  </li>
                </ul>

                <Link href="/booking" className="btn-primary px-12 py-4 text-xl hover:text-white transition-colors mt-4">
                  BOOK NOW
                </Link>
              </FadeIn>

              {/* Right: Map Feature */}
              <FadeIn delay={0.2} className="relative aspect-square w-full max-w-lg mx-auto bg-nomad-paper shadow-2xl overflow-hidden border border-nomad-black/10 mix-blend-multiply">
                <Image
                  src="/map_placeholder.png"
                  alt="Nomad Yellowstone base camp in Island Park, Idaho, featuring purpose-built backcountry ATV vehicles."
                  fill
                  className="object-cover opacity-90 mix-blend-multiply"
                />
              </FadeIn>

            </div>
          </div>
        </section>

        {/* SECTION 3: MAP / DIVIDER BAR */}
        <section className="relative py-12 w-full bg-nomad-black flex items-center justify-center border-y-2 border-nomad-black/80 z-10 shadow-lg">
          <div className="relative z-10 text-center px-4">
          </div>
        </section>

        {/* SECTION 4: PRICING VALUE STACK */}
        <PricingSection />

        {/* SECTION 5: THE DIVIDER BAR */}
        <section className="relative py-32 w-full flex items-center justify-center border-y border-nomad-black/10">
          {/* The global before/after pseudo elements handle the grunge. We don't need explicit backgrounds here anymore. */}
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h2 className="font-heading text-6xl md:text-8xl text-nomad-black uppercase tracking-widest text-distressed drop-shadow-sm mb-6">NO CROWDS. JUST DIRT.</h2>
            <p className="text-base md:text-lg text-nomad-black/80 leading-relaxed">
              Most Yellowstone visitors never leave the pavement. Our passenger-only ATV tours take you deep into the backcountry on trails that buses, rental cars, and even self-drive ATVs can&apos;t reach — all while your guide does the driving.
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
              <h2 className="font-heading text-4xl text-nomad-black text-center uppercase mb-2 text-distressed drop-shadow-sm">Operations Protocol</h2>
              <p className="font-mono text-sm text-nomad-red font-bold tracking-widest text-center uppercase mb-12 drop-shadow-sm">// Frequently Asked Questions</p>
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
              <h2 className="font-heading text-6xl md:text-8xl text-nomad-black uppercase mb-6 opacity-100 text-distressed drop-shadow-md">Book Your<br />Expedition</h2>
              <p className="text-base md:text-lg text-nomad-black/80 leading-relaxed mb-8">
                Ready to experience the Yellowstone backcountry without the stress of driving? Our passenger-only ATV tours depart daily from Island Park, Idaho — just 20 minutes from the West Yellowstone entrance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/booking" className="btn-primary px-12 py-6 text-xl">
                  CHECK AVAILABILITY
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
            <Link href="/intel" className="hover:text-nomad-red transition-colors drop-shadow-sm">[JOURNAL]</Link>
            <Link href="/intel/answers" className="hover:text-nomad-red transition-colors drop-shadow-sm">[AEO HUB]</Link>
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
