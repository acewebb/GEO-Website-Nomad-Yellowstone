import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.yellowstonebike.com/#website",
        "url": "https://www.yellowstonebike.com/",
        "name": "Nomad Yellowstone",
        "description": "A premier adventure tourism provider in Island Park, Idaho, specializing in guided ATV and backcountry tours near Yellowstone National Park.",
        "publisher": {
          "@id": "https://www.yellowstonebike.com/#organization"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.yellowstonebike.com/#organization",
        "name": "Nomad Yellowstone",
        "url": "https://www.yellowstonebike.com/",
        "description": "The home page for Nomad Yellowstone, offering guided backcountry ATV tours in the Island Park area.",
        "founder": {
          "@type": "Person",
          "name": "Ayson Webb"
        },
        "areaServed": {
          "@type": "City",
          "name": "Island Park",
          "containedInPlace": {
            "@type": "State",
            "name": "Idaho"
          }
        },
        "knowsAbout": [
          "ATV Tours",
          "Backcountry Guided Tours",
          "Island Park Tourism"
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
      <header className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 glass-panel border-b-0 border-white/5">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse-slow"></div>
            <Link href="/" className="text-xl font-heading tracking-widest text-white hover:text-accent transition-colors uppercase">
              Nomad<span className="text-accent">/</span>Yellowstone
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#tours" className="text-sm font-mono tracking-widest text-frost hover:text-white transition-colors uppercase">[Tours]</Link>
            <Link href="#vehicles" className="text-sm font-mono tracking-widest text-frost hover:text-white transition-colors uppercase">[Vehicles]</Link>
            <Link href="#about" className="text-sm font-mono tracking-widest text-frost hover:text-white transition-colors uppercase">[About]</Link>
            <Link href="/intel" className="text-sm font-mono tracking-widest text-frost hover:text-white transition-colors uppercase">[Journal]</Link>
            <Link href="#contact" className="text-sm font-mono tracking-widest text-frost hover:text-white transition-colors uppercase">[Contact]</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/booking" className="btn-primary px-6 py-2 text-sm clip-path-slant">
              Book Now
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col relative w-full">

        {/* SECTION 1: HERO */}
        <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-charcoal">
          {/* Hero Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.png"
              alt="Yellowstone River Valley"
              fill
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent"></div>
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-4 z-30 text-center mt-20">
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-black/40 backdrop-blur-md mb-8 rounded-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="font-mono text-xs tracking-[0.2em] text-green-400 uppercase">Season 2026: Open For Booking</span>
            </div>

            <h1 className="font-heading text-6xl md:text-8xl font-black text-white uppercase leading-[0.9] tracking-tight mb-6 drop-shadow-2xl">
              The Park is for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-400">Tourists.</span><br />
              The Wild is for <span className="text-accent">You.</span>
            </h1>

            <p className="font-body text-xl md:text-2xl text-frost max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Private, Open-Air Backcountry Expeditions. <br />
              <span className="text-white font-medium">No Windows. No Crowds. 100% Guided.</span>
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Link href="/booking" className="btn-primary px-10 py-5 text-lg shadow-[0_0_30px_rgba(255,107,53,0.3)] hover:shadow-[0_0_50px_rgba(255,107,53,0.5)]">
                Check Availability
              </Link>
              <Link href="#tours" className="btn-outline px-10 py-5 text-lg hidden md:inline-block">
                View Tours
              </Link>
            </div>
          </div>

          {/* Feature Bar - Bottom of Hero */}
          <div className="absolute bottom-0 w-full glass-panel border-t border-white/10 py-6 hidden md:block">
            <div className="container mx-auto px-4 flex justify-between text-frost font-mono text-xs tracking-widest uppercase">
              <div className="flex items-center gap-2">
                <span className="text-accent">●</span> Live Availability
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">●</span> Bear Safety Certified
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">●</span> West Yellowstone, MT
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE PROBLEM (WHY US) */}
        <section id="about" className="py-24 bg-charcoal relative">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/20 blur-xl rounded-full opacity-20"></div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10">
                  {/* REPLACING PLACEHOLDER WITH GUIDE IMAGE */}
                  <Image
                    src="/guide-portrait.png"
                    alt="Nomad Guide"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* HUD Element */}
                <div className="absolute -bottom-6 -right-6 glass-card p-6 border border-white/10">
                  <p className="font-heading text-4xl text-white">5.0</p>
                  <p className="font-mono text-xs text-frost uppercase tracking-widest">Average Rating</p>
                </div>
              </div>

              <div>
                <span className="font-mono text-accent text-sm tracking-widest mb-2 block">// THE MISSION</span>
                <h2 className="font-heading text-5xl text-white uppercase mb-6 leading-tight">
                  Escape the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-frost/50">Windshield.</span>
                </h2>
                <p className="text-frost text-lg mb-6 leading-relaxed">
                  98% of Yellowstone visitors never leave the pavement. They see the park through a rectangle of glass, fighting traffic and hunting for parking.
                </p>
                <p className="text-frost text-lg mb-8 leading-relaxed">
                  Nomad is different. We pilot high-performance UTVs into the deep backcountry. We access viewpoints, peaks, and trails that the tour buses simply can't reach.
                </p>

                <ul className="space-y-4 font-mono text-sm text-frost">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Passenger-Only (You drink the coffee, we drive)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Open-Air Connection (Smell the pine, feel the wind)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    Zero Crowds (Private trails, silent summits)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: TOURS */}
        <section id="tours" className="py-24 bg-slate relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div>
                <span className="font-mono text-accent text-sm tracking-widest mb-2 block">// EXPEDITION LOG</span>
                <h2 className="font-heading text-5xl text-white uppercase">Select Your Mission</h2>
              </div>
              <Link href="/booking" className="text-frost hover:text-white border-b border-accent/50 hover:border-accent transition-colors pb-1 mt-4 md:mt-0 font-mono text-sm tracking-widest uppercase">
                View Full Briefing →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* CARD 1 */}
              <div className="glass-card group hover:-translate-y-2 transition-transform duration-300">
                <div className="h-64 relative bg-gray-800 overflow-hidden">
                  <Image src="/hero-bg.png" alt="Morning Scout" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-accent text-white font-mono text-xs font-bold px-2 py-1 uppercase tracking-widest">
                    Best Value
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-2xl text-white uppercase mb-2">Morning Scout</h3>
                  <p className="font-mono text-xs text-frost mb-4 uppercase tracking-widest">08:00 - 12:00 // 4 Hours</p>
                  <p className="text-frost mb-6 text-sm">
                    Catch the wildlife when it's most active. Coffee included. Ascend to the Continental Divide before the heat of the day.
                  </p>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="font-heading text-2xl text-white">$225<span className="text-sm text-frost/80 font-mono">/pp</span></span>
                    <span className="text-accent text-sm font-bold uppercase tracking-widest group-hover:underline">Book Seat</span>
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="glass-card group hover:-translate-y-2 transition-transform duration-300 border-accent/30 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-charcoal border border-accent/30 px-3 py-1 z-10">
                  <span className="text-accent text-[10px] font-mono tracking-[0.2em] uppercase">Most Popular</span>
                </div>
                <div className="h-64 relative bg-gray-800 overflow-hidden">
                  <Image src="/sawtelle.png" alt="Summit Run" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-2xl text-white uppercase mb-2">Summit Run</h3>
                  <p className="font-mono text-xs text-frost mb-4 uppercase tracking-widest">13:00 - 17:00 // 4 Hours</p>
                  <p className="text-frost mb-6 text-sm">
                    High altitude focus. Aggressive climbing to 10,000ft peaks for panoramic views of the entire caldera system.
                  </p>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="font-heading text-2xl text-white">$225<span className="text-sm text-frost/80 font-mono">/pp</span></span>
                    <span className="text-accent text-sm font-bold uppercase tracking-widest group-hover:underline">Book Seat</span>
                  </div>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="glass-card group hover:-translate-y-2 transition-transform duration-300">
                <div className="h-64 relative bg-gray-800 overflow-hidden">
                  <Image src="/atv_action.png" alt="Golden Hour" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-2xl text-white uppercase mb-2">Golden Hour</h3>
                  <p className="font-mono text-xs text-frost mb-4 uppercase tracking-widest">17:30 - 21:30 // 4 Hours</p>
                  <p className="text-frost mb-6 text-sm">
                    Chase the sunset. The most photographic lighting of the day, ending with a descent in the twilight.
                  </p>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="font-heading text-2xl text-white">$225<span className="text-sm text-frost/80 font-mono">/pp</span></span>
                    <span className="text-accent text-sm font-bold uppercase tracking-widest group-hover:underline">Book Seat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: VEHICLES (THE FLEET) */}
        <section id="vehicles" className="py-24 bg-charcoal relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="font-mono text-accent text-sm tracking-widest mb-2 block">// THE FLEET</span>
                <h2 className="font-heading text-5xl text-white uppercase mb-6">Can-Am Commander <br /> MAX XT</h2>

                <div className="space-y-6">
                  <p className="text-frost text-lg leading-relaxed">
                    This isn't a rental beater. It's a $30,000 purpose-built backcountry machine.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="glass-panel p-4">
                      <p className="text-accent font-heading text-2xl">100 HP</p>
                      <p className="text-frost/80 text-xs font-mono uppercase">Rotax V-Twin Engine</p>
                    </div>
                    <div className="glass-panel p-4">
                      <p className="text-accent font-heading text-2xl">14 in</p>
                      <p className="text-frost/80 text-xs font-mono uppercase">Suspension Travel</p>
                    </div>
                    <div className="glass-panel p-4">
                      <p className="text-accent font-heading text-2xl">4 Seats</p>
                      <p className="text-frost/80 text-xs font-mono uppercase">Stadium Seating</p>
                    </div>
                    <div className="glass-panel p-4">
                      <p className="text-accent font-heading text-2xl">Zero</p>
                      <p className="text-frost/80 text-xs font-mono uppercase">Windows / Barriers</p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link href="/booking" className="btn-outline px-8 py-3 text-sm">Inspect Vehicle</Link>
                  </div>
                </div>
              </div>

              <div className="relative h-[500px] w-full">
                {/* VEHICLE IMAGE - Centered and potentially overlapping */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image src="/atv_action.png" alt="Can Am Commander" width={600} height={400} className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4.5: REVIEWS (SOCIAL PROOF) */}
        <section className="py-20 bg-slate border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
              <h2 className="font-heading text-3xl text-white uppercase">Field Reports</h2>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-accent text-xl">★</span>)}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-panel p-8">
                <p className="text-frost italic mb-6">"My teenage kids actually put their phones down. That never happens. The guide knew every peak and every flower. Worth every penny."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center font-heading text-white">JD</div>
                  <div>
                    <p className="text-white font-bold text-sm uppercase">James D.</p>
                    <p className="text-frost/60 text-xs font-mono">Austin, TX</p>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-8 md:scale-105 border-accent/20 border">
                <p className="text-frost italic mb-6">"We saw a grizzly bear on the Morning Scout tour! We were safely in the machine but close enough to see it digging. Highlight of our trip."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center font-heading text-white">SL</div>
                  <div>
                    <p className="text-white font-bold text-sm uppercase">Sarah L.</p>
                    <p className="text-frost/60 text-xs font-mono">Seattle, WA</p>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-8">
                <p className="text-frost italic mb-6">"I didn't want to drive a rental ATV and worry about getting lost. Being driven was so relaxing. We just enjoyed the views / drinks."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center font-heading text-white">MK</div>
                  <div>
                    <p className="text-white font-bold text-sm uppercase">Mike K.</p>
                    <p className="text-frost/60 text-xs font-mono">Denver, CO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: FAQ (DETAILS) */}
        <section id="details" className="py-24 bg-slate relative">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <span className="font-mono text-accent text-sm tracking-widest mb-2 block">// FAQ</span>
              <h2 className="font-heading text-4xl text-white uppercase">Details & Info</h2>
            </div>

            <div className="space-y-4">
              <div className="glass-panel p-6 border-l-2 border-accent">
                <h3 className="font-heading text-xl text-white mb-2 uppercase">Is this safe for children?</h3>
                <p className="text-frost">
                  <span className="text-accent font-bold">YES.</span> Because our tours are 100% guide-driven, the safety risk is minimized compared to self-drive rentals. We accept passengers ages 5+. Car seats can be secured in our rear stadium seats.
                </p>
              </div>

              <div className="glass-panel p-6 border-l-2 border-transparent hover:border-accent transition-colors">
                <h3 className="font-heading text-xl text-white mb-2 uppercase">What about dust?</h3>
                <p className="text-frost">
                  Conditions are variable. We provide every passenger with <span className="text-white font-medium">Dust Gear</span> (Goggles + Gaiter) included in your booking. The open-air cockpit is designed for airflow, not isolation.
                </p>
              </div>

              <div className="glass-panel p-6 border-l-2 border-transparent hover:border-accent transition-colors">
                <h3 className="font-heading text-xl text-white mb-2 uppercase">Can I drive?</h3>
                <p className="text-frost">
                  <span className="text-accent font-bold">NO.</span> This is a passenger-only experience. Our goal is to let you focus on the environment, not the clutch. For self-drive options, we can refer you to civilian rental agencies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: CONTACT / FOOTER */}
        <section id="contact" className="py-24 bg-charcoal relative border-t border-white/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-4xl text-white uppercase mb-8">Contact Base Camp</h2>
            <p className="text-frost text-lg mb-8 max-w-2xl mx-auto">
              Questions about current conditions, custom groups, or gear? We are standing by on coms.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
              <a href="mailto:hq@nomadyellowstone.com" className="glass-panel px-8 py-4 text-frost hover:text-white hover:border-accent transition-colors">
                <span className="block font-mono text-xs text-accent tracking-widest uppercase mb-1">Email</span>
                hq@nomadyellowstone.com
              </a>
              <a href="tel:+12085550123" className="glass-panel px-8 py-4 text-frost hover:text-white hover:border-accent transition-colors">
                <span className="block font-mono text-xs text-accent tracking-widest uppercase mb-1">Phone</span>
                +1 (208) 555-0123
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 7: FINAL CALL */}
        <section className="py-32 relative flex items-center justify-center overflow-hidden">
          <Image src="/sawtelle.png" alt="Final Call" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>

          <div className="relative z-10 text-center">
            <h2 className="font-heading text-6xl md:text-8xl text-white uppercase mb-8 opacity-50">Book Your Adventure</h2>
            <Link href="/booking" className="btn-primary px-12 py-6 text-xl">
              Check Availability
            </Link>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-black border-t border-white/10 font-mono text-xs text-frost/40">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">NOMAD YELLOWSTONE // EST. 2026 // ISLAND PARK, ID</p>
          <div className="flex justify-center gap-8 mb-4">
            <Link href="/" className="hover:text-white transition-colors">[HOME]</Link>
            <Link href="/booking" className="hover:text-white transition-colors text-accent">[BOOK NOW]</Link>
          </div>
          <div className="flex justify-center gap-6 opacity-50">
            <Link href="/privacy" className="hover:text-white transition-colors">PRIVACY</Link>
            <Link href="/terms" className="hover:text-white transition-colors">TERMS</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
