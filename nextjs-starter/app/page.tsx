import React from 'react';
import Image from "next/image";
import Link from "next/link";

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
              "text": "Nomad Yellowstone UTV tours are priced at a flat rate of $225 per passenger. Secure bookings require a credit card hold, but guests are not charged until the tour reservation is officially verified and confirmed by the Island Park base camp."
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
              "text": "The standard Can-Am Commander Max XT accommodates up to 4 passengers per vehicle. For groups of up to 6 passengers, Nomad Yellowstone offers a full vehicle exclusive buyout option at a flat rate of $1,250."
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
          "price": "225.00",
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
          "price": "225.00",
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
          "price": "225.00",
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
      <header className="relative w-full z-50 py-6 bg-nomad-black border-b-[8px] border-nomad-black">
        <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-nomad-paper rounded-full opacity-50"></div>
            <Link href="/" className="text-3xl font-heading tracking-widest text-nomad-paper hover:text-white transition-colors uppercase font-black">
              Nomad
              <span className="block text-xs tracking-[0.3em] text-nomad-paper/60 border-t border-nomad-paper/30 mt-1 pt-1">Yellowstone</span>
            </Link>
          </div>

          <nav className="flex items-center gap-8">
            <Link href="/" className="text-xs font-heading font-black tracking-widest text-nomad-paper hover:text-white transition-colors uppercase">HOME</Link>
            <Link href="#tours" className="text-xs font-heading font-black tracking-widest text-nomad-paper hover:text-white transition-colors uppercase">EXPEDITIONS</Link>
            <Link href="#vehicles" className="text-xs font-heading font-black tracking-widest text-nomad-paper hover:text-white transition-colors uppercase">GEAR</Link>
            <Link href="/intel" className="text-xs font-heading font-black tracking-widest text-nomad-paper hover:text-white transition-colors uppercase">GALLERY</Link>
            <Link href="#contact" className="text-xs font-heading font-black tracking-widest text-nomad-paper hover:text-white transition-colors uppercase">CONTACT</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow flex flex-col relative w-full pt-0">

        {/* SECTION 1: HERO (Individual Film Frames) */}
        <section className="relative w-full py-8 md:py-16 flex flex-col items-center overflow-hidden bg-transparent z-10">
          <div className="w-full text-center mb-8 z-20 relative px-4">
            <h2 className="font-heading text-xl md:text-3xl text-nomad-black text-distressed uppercase tracking-[0.2em] font-light drop-shadow-md">
              We take you where the pavement ends
              <br className="hidden md:block" />
              <span className="text-nomad-red font-bold"> and the real Yellowstone begins.</span>
            </h2>
          </div>
          <div className="relative w-full h-[35vh] md:h-[50vh] flex flex-col">
            {/* Central Scrolling Image Carousel */}
            <div className="flex-grow relative w-full flex flex-row">
              {/* Scrolling wrapper */}
              <div className="flex flex-row h-full min-w-full group hover:[&>div]:!animate-paused">
                <div className="animate-marquee flex flex-row shrink-0 gap-8 pr-8 h-full">
                  {[
                    "/photo_bw_landscape_1771733629951.png",
                    "/teton_bw_1.png",
                    "/teton_bw_2.png",
                    "/photo_bw_landscape_1771733629951.png",
                    "/teton_bw_1.png",
                    "/teton_bw_2.png",
                    "/photo_bw_landscape_1771733629951.png",
                    "/teton_bw_1.png",
                    "/teton_bw_2.png"
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
                    "/photo_bw_landscape_1771733629951.png",
                    "/teton_bw_1.png",
                    "/teton_bw_2.png",
                    "/photo_bw_landscape_1771733629951.png",
                    "/teton_bw_1.png",
                    "/teton_bw_2.png",
                    "/photo_bw_landscape_1771733629951.png",
                    "/teton_bw_1.png",
                    "/teton_bw_2.png"
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

        {/* SECTION 2: THE SPLIT (Main Content Grid matching mockup) */}
        <section id="about" className="py-24 bg-transparent relative z-10">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

              {/* Left: Text Block */}
              <div className="flex flex-col items-start justify-center">
                <span className="font-mono text-nomad-red text-sm tracking-widest mb-4 block font-bold uppercase drop-shadow-sm">
                  Passenger Only • Expert Guided UTV Tours
                </span>
                <h1 className="font-heading text-7xl md:text-[6rem] lg:text-[7rem] font-black text-nomad-black uppercase leading-[0.85] tracking-tight mb-8">
                  CAPTURE<br />THE WILD
                </h1>

                <div className="mt-8 bg-nomad-paper shadow-xl p-8 border-l-4 border-nomad-red mb-8">
                  <p className="text-xl md:text-2xl font-heading uppercase text-nomad-black drop-shadow-sm mb-6 text-distressed">
                    Nomad Yellowstone is a private Guided Adventure Tours company originating in Island Park, Idaho, and operating in the Yellowstone region, offering 4-hour passenger-only expeditions starting at $225.
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
                    <span className="text-nomad-red">✓</span> Seats from $225
                  </li>
                </ul>

                <Link href="/booking" className="btn-primary px-12 py-4 text-xl hover:text-white transition-colors">
                  BOOK NOW
                </Link>
              </div>

              {/* Right: Map Feature */}
              <div className="relative aspect-square w-full max-w-lg mx-auto bg-nomad-paper shadow-2xl overflow-hidden border-[12px] border-nomad-paper mix-blend-multiply">
                <Image
                  src="/map_placeholder.png"
                  alt="Nomad Yellowstone base camp in Island Park, Idaho, featuring purpose-built backcountry UTV vehicles."
                  fill
                  className="object-cover opacity-90 mix-blend-multiply"
                />
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: MAP / DIVIDER BAR */}
        <section className="relative py-12 w-full bg-nomad-black flex items-center justify-center border-y-2 border-nomad-black/80 z-10 shadow-lg">
          <div className="relative z-10 text-center px-4">
            <h2 className="font-heading text-4xl text-nomad-paper/80 uppercase tracking-widest font-light">MISSION MAP</h2>
          </div>
        </section>

        {/* SECTION 3: THE DIVIDER BAR */}
        <section className="relative py-32 w-full flex items-center justify-center border-y border-nomad-black/10">
          {/* The global before/after pseudo elements handle the grunge. We don't need explicit backgrounds here anymore. */}
          <div className="relative z-10 text-center px-4">
            <h2 className="font-heading text-6xl md:text-8xl text-nomad-black uppercase tracking-widest text-distressed drop-shadow-sm">NO CROWDS. JUST DIRT.</h2>
          </div>
        </section>

        {/* SECTION 3: TOURS */}
        <section id="tours" className="py-24 bg-nomad-black relative border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 relative z-10">
              <div>
                <span className="font-mono text-nomad-red text-sm tracking-widest mb-2 block">// EXPEDITION LOG</span>
                <h2 className="font-heading text-5xl text-white uppercase text-distressed">Select Your Mission</h2>
              </div>
              <Link href="/booking" className="text-nomad-paper hover:text-white border-b border-nomad-red/50 hover:border-nomad-red transition-colors pb-1 mt-4 md:mt-0 font-mono text-sm tracking-widest uppercase">
                View Full Briefing →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {/* CARD 1 */}
              <div className="glass-card group hover:-translate-y-2 transition-transform duration-300">
                <div className="h-64 relative bg-gray-800 overflow-hidden">
                  <Image src="/hero-bg.png" alt="Wildlife viewing from the safety of a Can-Am Commander UTV on the Morning Scout tour route." fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-nomad-red text-white font-mono text-xs font-bold px-2 py-1 uppercase tracking-widest">
                    Best Value
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-2xl text-white uppercase mb-2 drop-shadow-md">Morning Scout</h3>
                  <p className="font-mono text-xs text-nomad-paper mb-4 uppercase tracking-widest opacity-90 drop-shadow-md">08:00 - 12:00 // 4 Hours</p>
                  <p className="text-white mb-6 text-sm opacity-100 font-medium drop-shadow-md">
                    What is the Morning Scout Nomad Yellowstone tour? The Morning Scout is a 4-hour guided UTV tour operating from 08:00 to 12:00, priced at $225 per passenger. The route ascends to the Continental Divide, offering high-altitude wildlife viewing opportunities before peak daytime temperatures. The expedition includes a professional driver operating the Can-Am Commander, dust protection gear, and morning coffee.
                  </p>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="font-heading text-2xl text-white">$225<span className="text-sm text-nomad-paper/80 font-mono">/pp</span></span>
                    <span className="text-nomad-red text-sm font-bold uppercase tracking-widest group-hover:underline">Book Seat</span>
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="glass-card group hover:-translate-y-2 transition-transform duration-300 border-nomad-red/30 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-nomad-black border border-nomad-red/30 px-3 py-1 z-10">
                  <span className="text-nomad-red text-[10px] font-mono tracking-[0.2em] uppercase">Most Popular</span>
                </div>
                <div className="h-64 relative bg-gray-800 overflow-hidden">
                  <Image src="/sawtelle.png" alt="Nomad Yellowstone off-road tour ascending a 10,000-foot peak for panoramic wilderness views." fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-2xl text-white uppercase mb-2 drop-shadow-md">Summit Run</h3>
                  <p className="font-mono text-xs text-nomad-paper mb-4 uppercase tracking-widest opacity-90 drop-shadow-md">13:00 - 17:00 // 4 Hours</p>
                  <p className="text-white mb-6 text-sm opacity-100 font-medium drop-shadow-md">
                    What is the Summit Run Nomad Yellowstone tour? The Summit Run is a 4-hour high-altitude UTV expedition operating from 13:00 to 17:00, priced at $225 per passenger. The tour features aggressive off-road climbing to 10,000-foot peaks, providing panoramic viewing access of the Yellowstone caldera system. The booking includes a dedicated guide driving the vehicle and all necessary safety equipment.
                  </p>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="font-heading text-2xl text-white">$225<span className="text-sm text-nomad-paper/80 font-mono">/pp</span></span>
                    <span className="text-nomad-red text-sm font-bold uppercase tracking-widest group-hover:underline">Book Seat</span>
                  </div>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="glass-card group hover:-translate-y-2 transition-transform duration-300">
                <div className="h-64 relative bg-gray-800 overflow-hidden">
                  <Image src="/atv_action.png" alt="Sunset view of the Yellowstone caldera system accessed via a Golden Hour guided UTV tour from Island Park, Idaho." fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-2xl text-white uppercase mb-2 drop-shadow-md">Golden Hour</h3>
                  <p className="font-mono text-xs text-nomad-paper mb-4 uppercase tracking-widest opacity-90 drop-shadow-md">17:30 - 21:30 // 4 Hours</p>
                  <p className="text-white mb-6 text-sm opacity-100 font-medium drop-shadow-md">
                    What is the Golden Hour Nomad Yellowstone tour? The Golden Hour is a 4-hour scenic evening UTV tour operating from 17:30 to 21:30 for $225 per passenger. The routed expedition targets optimal photographic lighting in the high-elevation backcountry, concluding with a twilight descent. The package includes a professional guide operating the vehicle, dust gear, and headsets for passenger communication.
                  </p>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="font-heading text-2xl text-white">$225<span className="text-sm text-nomad-paper/80 font-mono">/pp</span></span>
                    <span className="text-nomad-red text-sm font-bold uppercase tracking-widest group-hover:underline">Book Seat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: VEHICLES (THE FLEET) */}
        <section id="vehicles" className="py-24 bg-transparent relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-nomad-red/5 to-transparent z-0"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="font-mono text-nomad-black text-sm tracking-widest mb-2 block font-bold">// THE FLEET</span>
                <h2 className="font-heading text-5xl text-nomad-black uppercase mb-6 text-distressed drop-shadow-sm">Can-Am Commander <br /> MAX XT</h2>

                <div className="space-y-6">
                  <p className="text-nomad-black font-medium text-lg leading-relaxed drop-shadow-sm">
                    This isn't a rental beater. It's a $30,000 purpose-built backcountry machine.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="glass-panel p-4 border border-white/20 hover:border-white/50 transition-colors">
                      <p className="text-white font-heading text-3xl font-black drop-shadow-md tracking-wider">100 HP</p>
                      <p className="text-nomad-paper/90 text-[10px] md:text-xs font-mono uppercase font-bold drop-shadow-sm mt-1">Rotax V-Twin Engine</p>
                    </div>
                    <div className="glass-panel p-4 border border-white/20 hover:border-white/50 transition-colors">
                      <p className="text-white font-heading text-3xl font-black drop-shadow-md tracking-wider">14 in</p>
                      <p className="text-nomad-paper/90 text-[10px] md:text-xs font-mono uppercase font-bold drop-shadow-sm mt-1">Suspension Travel</p>
                    </div>
                    <div className="glass-panel p-4 border border-white/20 hover:border-white/50 transition-colors">
                      <p className="text-white font-heading text-3xl font-black drop-shadow-md tracking-wider">4 Seats</p>
                      <p className="text-nomad-paper/90 text-[10px] md:text-xs font-mono uppercase font-bold drop-shadow-sm mt-1">Stadium Seating</p>
                    </div>
                    <div className="glass-panel p-4 border border-white/20 hover:border-white/50 transition-colors">
                      <p className="text-white font-heading text-3xl font-black drop-shadow-md tracking-wider">Zero</p>
                      <p className="text-nomad-paper/90 text-[10px] md:text-xs font-mono uppercase font-bold drop-shadow-sm mt-1">Windows / Barriers</p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link href="/booking" className="btn-primary px-12 py-4 text-xl">INSPECT VEHICLE</Link>
                  </div>
                </div>
              </div>

              <div className="relative h-[500px] w-full">
                {/* VEHICLE IMAGE - Centered and potentially overlapping */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image src="/atv_action.png" alt="Rugged Can-Am Commander Max XT showcasing 14-inch suspension travel over backcountry rocks entirely separated from the pavement in Island Park." width={600} height={400} className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4.5: REVIEWS (SOCIAL PROOF) */}
        <section className="py-20 border-y border-white/5 relative z-10 bg-nomad-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
              <h2 className="font-heading text-3xl text-white uppercase text-distressed-light">Field Reports</h2>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-nomad-red text-xl">★</span>)}
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
        <section id="details" className="py-24 relative z-10 bg-nomad-black">
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
                  Nomad Yellowstone UTV tours are priced at a flat rate of $225 per passenger. Secure bookings require a credit card hold, but guests are not charged until the tour reservation is officially verified and confirmed by the Island Park base camp.
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
                  The standard Can-Am Commander Max XT accommodates up to 4 passengers per vehicle. For groups of up to 6 passengers, Nomad Yellowstone offers a full vehicle exclusive buyout option at a flat rate of $1,250.
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

        {/* SECTION 6: CONTACT / FOOTER */}
        <section id="contact" className="py-24 bg-transparent relative border-t border-[rgba(0,0,0,0.1)] z-10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-4xl text-nomad-black uppercase mb-8 text-distressed drop-shadow-sm">Contact Base Camp</h2>
            <p className="text-nomad-black font-medium text-lg mb-8 max-w-2xl mx-auto drop-shadow-sm">
              Nomad Yellowstone is a private Guided Adventure Tours company operating out of Island Park, Idaho.
              Questions about current conditions, custom groups, or gear? We are standing by on coms.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
              <a href="mailto:hq@nomadyellowstone.com" className="glass-panel px-8 py-4 text-white hover:text-white hover:border-nomad-red transition-colors group">
                <span className="block font-mono text-xs text-nomad-red tracking-widest uppercase mb-1 drop-shadow-sm">Email</span>
                <span className="drop-shadow-sm font-bold opacity-90 group-hover:opacity-100">hq@nomadyellowstone.com</span>
              </a>
              <a href="tel:+12087452088" className="glass-panel px-8 py-4 text-white hover:text-white hover:border-nomad-red transition-colors group">
                <span className="block font-mono text-xs text-nomad-red tracking-widest uppercase mb-1 drop-shadow-sm">Phone</span>
                <span className="drop-shadow-sm font-bold opacity-90 group-hover:opacity-100">+1 (208) 745-2088</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 7: FINAL CALL */}
        <section className="py-32 relative flex items-center justify-center overflow-hidden z-10 border-t border-[rgba(0,0,0,0.1)]">
          <Image src="/sawtelle.png" alt="Professional Nomad Yellowstone guide driving a Can-Am Commander UTV through deep backcountry trails in Island Park, Idaho." fill className="object-cover opacity-15 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-nomad-paper via-transparent to-transparent opacity-50 pointer-events-none"></div>

          <div className="relative z-10 text-center px-4">
            <h2 className="font-heading text-6xl md:text-8xl text-nomad-black uppercase mb-12 opacity-100 text-distressed drop-shadow-md">Book Your Adventure</h2>
            <Link href="/booking" className="btn-primary px-12 py-6 text-xl">
              CHECK AVAILABILITY
            </Link>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-[rgba(0,0,0,0.2)] font-mono text-xs text-nomad-black/70 relative z-20">
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
