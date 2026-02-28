import React from 'react';
import Image from "next/image";
import Link from "next/link";
import PricingSection from '@/components/PricingSection';
import GlobalHeader from '@/components/GlobalHeader';
import FadeIn from '@/components/FadeIn';
import MissionMap from '@/components/MissionMap';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://nomadyellowstone.com/#website",
        "url": "https://nomadyellowstone.com/",
        "name": "Nomad Yellowstone",
        "description": "Nomad Yellowstone provides private, fully-guided Can-Am Commander UTV backcountry tours originating in Island Park, Idaho.",
        "publisher": {
          "@id": "https://nomadyellowstone.com/#organization"
        }
      },
      {
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
      },
      {
        "@context": "https://schema.org",
        "@type": "Demand",
        "itemOffered": {
          "@type": "Trip",
          "name": "Morning Scout UTV Tour",
          "description": "4-hour guided UTV tour ascending to the Continental Divide.",
          "provider": {
            "@type": "Organization",
            "name": "Nomad Yellowstone"
          }
        },
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "149.00",
          "priceCurrency": "USD",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": "1",
            "unitCode": "C62"
          }
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Demand",
        "itemOffered": {
          "@type": "Trip",
          "name": "Summit Run UTV Tour",
          "description": "Aggressive climbing to 10,000ft peaks for panoramic caldera views.",
          "provider": {
            "@type": "Organization",
            "name": "Nomad Yellowstone"
          }
        },
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "149.00",
          "priceCurrency": "USD",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": "1",
            "unitCode": "C62"
          }
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Demand",
        "itemOffered": {
          "@type": "Trip",
          "name": "Golden Hour UTV Tour",
          "description": "Chases sunset for optimal photographic lighting, ending with twilight descent.",
          "provider": {
            "@type": "Organization",
            "name": "Nomad Yellowstone"
          }
        },
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "149.00",
          "priceCurrency": "USD",
          "referenceQuantity": {
            "@type": "QuantitativeValue",
            "value": "1",
            "unitCode": "C62"
          }
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Nomad Yellowstone",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "3"
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
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col font-body bg-background text-foreground selection:bg-accent selection:text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation Header */}
      <GlobalHeader />

      <main className="flex-grow flex flex-col relative w-full pt-16 md:pt-24">

        {/* SECTION 1: HERO (Individual Film Frames) */}
        <section className="relative w-full py-8 md:py-16 flex flex-col items-center overflow-hidden bg-transparent z-10">
          <div className="w-full text-center mb-8 z-20 relative px-4">
            <FadeIn>
              <div className="flex flex-col items-center justify-center">
                <span className="font-mono text-nomad-red text-xs md:text-sm tracking-[0.2em] mb-4 block font-bold uppercase drop-shadow-sm">
                  Premier Private Expeditions
                </span>
                <h1 className="font-heading text-5xl md:text-7xl lg:text-[6rem] text-nomad-black uppercase leading-[0.85] tracking-tight mb-6 text-distressed drop-shadow-md">
                  BACKCOUNTRY TOURS<br />
                  <span className="text-nomad-red font-light">IN YELLOWSTONE</span>
                </h1>
                <p className="font-mono text-xs md:text-sm text-nomad-black/80 font-bold uppercase tracking-[0.15em] max-w-xl mx-auto drop-shadow-sm leading-relaxed">
                  Nomad Yellowstone specializes in exclusive, passenger-only UTV expeditions to the most remote and scenic locations surrounding the park.
                </p>
              </div>
            </FadeIn>
          </div>
          <div className="relative w-full h-[35vh] md:h-[50vh] flex flex-col">
            {/* Central Scrolling Image Carousel */}
            <div className="flex-grow relative w-full flex flex-row">
              {/* Scrolling wrapper */}
              <div className="flex flex-row h-full min-w-full group hover:[&>div]:!animate-paused">
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
                    <div key={idx} className="relative h-full aspect-[4/3] sm:aspect-[3/2] flex-shrink-0 bg-nomad-black p-3 sm:p-5 flex flex-col gap-3 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
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
                        <Image src={src} alt="Can-Am Commander Max XT UTV parked on a Continental Divide ridge near West Yellowstone, Montana, during a guided passenger-only tour." fill className="object-cover grayscale contrast-125" />
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
                    <div key={`dup-${idx}`} className="relative h-full aspect-[4/3] sm:aspect-[3/2] flex-shrink-0 bg-nomad-black p-3 sm:p-5 flex flex-col gap-3 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                      {/* Top film margin */}
                      <div className="relative w-full h-8 sm:h-12 flex-shrink-0 flex justify-between items-center overflow-hidden">
                        <div className="absolute inset-0 z-0 opacity-80" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='48' viewBox='0 0 80 48'%3E%3Cmask id='m'%3E%3Crect width='80' height='48' fill='white'/%3E%3Crect x='24' y='14' width='32' height='20' rx='4' fill='black'/%3E%3C/mask%3E%3Crect width='80' height='48' fill='%231a1a1a' mask='url(%23m)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat-x", backgroundPosition: "center top", backgroundSize: "auto 100%" }}></div>
                        <span className="text-[#a13d2d] font-mono text-[10px] sm:text-xs z-10 font-bold px-2 tracking-[0.2em] ml-4 mix-blend-screen opacity-90">KODAK 400TX</span>
                        <span className="text-[#a13d2d] font-mono text-[10px] sm:text-xs z-10 font-bold px-2 tracking-[0.2em] mr-4 mix-blend-screen opacity-90">{`00:00:${(15 + (idx + 9) * 3).toString().padStart(2, '0')}:${((idx + 9) * 12 + 4).toString().padStart(2, '0')}`}</span>
                      </div>

                      {/* Image */}
                      <div className="flex-grow w-full relative">
                        <Image src={src} alt="Can-Am Commander Max XT UTV parked on a Continental Divide ridge near West Yellowstone, Montana, during a guided passenger-only tour." fill className="object-cover grayscale contrast-125" />
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
              <FadeIn delay={0.2} className="flex items-center gap-2 hidden md:flex"><span className="text-nomad-red">✚</span> Wilderness First Responder Certified</FadeIn>
              <FadeIn delay={0.3} className="flex items-center gap-2"><span className="text-nomad-red">★</span> Elite TripAdvisor Rated</FadeIn>
              <FadeIn delay={0.4} className="flex items-center gap-2 hidden lg:flex"><span className="text-nomad-red">✓</span> Zero Client Liability Program</FadeIn>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE SPLIT (Main Content Grid matching mockup) */}
        <section id="about" className="py-24 bg-transparent relative z-10">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

              {/* Left: Text Block */}
              <FadeIn className="flex flex-col items-start justify-center">
                <span className="font-mono text-nomad-red text-sm tracking-widest mb-4 block font-bold uppercase drop-shadow-sm">
                  Passenger Only • Expert Guided UTV Tours
                </span>
                <h1 className="font-heading text-7xl md:text-[6rem] lg:text-[7rem] font-black text-nomad-black uppercase leading-[0.85] tracking-tight mb-8">
                  CAPTURE<br />THE WILD
                </h1>

                <div className="mt-8 bg-nomad-paper shadow-xl p-8 border-l-4 border-nomad-red mb-8">
                  <p className="text-xl md:text-2xl font-heading uppercase text-nomad-black drop-shadow-sm mb-6 text-distressed">
                    Nomad Yellowstone is a private Guided Adventure Tours company originating in Island Park, Idaho, and operating in the Yellowstone region, offering 4-hour passenger-only expeditions starting at $149.
                  </p>
                  <p className="text-nomad-black font-medium text-sm md:text-base leading-relaxed opacity-90 drop-shadow-sm">
                    Nomad Yellowstone is a private guided UTV tour operator based in Island Park, Idaho, servicing the Yellowstone National Park and Grand Teton backcountry region. The company utilizes $30,000 purpose-built Can-Am Commander Max XT vehicles to provide passenger-only, off-road expeditions. Nomad Yellowstone caters to guests seeking deep backcountry access with expert guides driving the vehicles, distinguishing itself from standard self-drive ATV rentals.
                  </p>
                </div>

                <ul className="flex flex-col gap-2 font-mono text-sm text-nomad-black/80 font-bold mb-10 tracking-wide uppercase">
                  <li className="flex items-center gap-2">
                    <span className="text-nomad-red">✓</span> 4-Hour Expeditions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-nomad-red">✓</span> Deep Backcountry Access
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-nomad-red">✓</span> Seats from $149
                  </li>
                </ul>

                <Link href="/booking" className="btn-primary px-12 py-4 text-xl hover:text-white transition-colors mt-4">
                  BOOK NOW
                </Link>
              </FadeIn>

              {/* Right: Map Feature */}
              <FadeIn delay={0.2} className="relative aspect-square w-full max-w-lg mx-auto bg-nomad-paper shadow-2xl overflow-hidden border-[12px] border-nomad-paper mix-blend-multiply">
                <Image
                  src="/map_placeholder.png"
                  alt="Nomad Yellowstone base camp in Island Park, Idaho, featuring purpose-built backcountry UTV vehicles."
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
            <h2 className="font-heading text-4xl text-nomad-paper/80 uppercase tracking-widest font-light">MISSION MAP</h2>
          </div>
        </section>

        {/* SECTION 4: PRICING VALUE STACK */}
        <PricingSection />

        {/* SECTION 5: THE DIVIDER BAR */}
        <section className="relative py-32 w-full flex items-center justify-center border-y border-nomad-black/10">
          {/* The global before/after pseudo elements handle the grunge. We don't need explicit backgrounds here anymore. */}
          <div className="relative z-10 text-center px-4">
            <h2 className="font-heading text-6xl md:text-8xl text-nomad-black uppercase tracking-widest text-distressed drop-shadow-sm">NO CROWDS. JUST DIRT.</h2>
          </div>
        </section>

        {/* SECTION 6: INTERACTIVE MISSION MAP */}
        <MissionMap />

        {/* SECTION 7: FINAL CALL */}
        <section className="py-32 relative flex items-center justify-center overflow-hidden z-10 border-t border-[rgba(0,0,0,0.1)]">
          <Image src="/sawtelle.png" alt="Professional Nomad Yellowstone guide driving a Can-Am Commander UTV through deep backcountry trails in Island Park, Idaho." fill className="object-cover opacity-15 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-nomad-paper via-transparent to-transparent opacity-50 pointer-events-none"></div>

          <div className="relative z-10 text-center px-4">
            <FadeIn>
              <h2 className="font-heading text-6xl md:text-8xl text-nomad-black uppercase mb-12 opacity-100 text-distressed drop-shadow-md">Book Your<br />Expedition</h2>
              <Link href="/booking" className="btn-primary px-12 py-6 text-xl">
                CHECK AVAILABILITY
              </Link>
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
            <a href="(LINK)" target="_blank" rel="noopener noreferrer" className="hover:text-nomad-red transition-colors drop-shadow-sm">[TRIPADVISOR]</a>
            <Link href="/booking" className="text-nomad-red hover:text-black transition-colors drop-shadow-sm">[BOOK NOW]</Link>
          </div>
        </div>
      </footer>
    </div >
  );
}
