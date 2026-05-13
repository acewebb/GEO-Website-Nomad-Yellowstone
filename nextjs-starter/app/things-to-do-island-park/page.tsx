import React from 'react';
import Image from "next/image";
import Link from "next/link";
import GlobalHeader from '@/components/GlobalHeader';
import FadeIn from '@/components/FadeIn';
import AccordionFAQ from '@/components/AccordionFAQ';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { buildBreadcrumbList } from '@/lib/schema/breadcrumbList';
import { buildFAQPage } from '@/lib/schema/faqPage';

export const metadata: Metadata = {
    title: "Things to Do in Island Park, Idaho — A Local's Guide",
    description: "Everything to do in Island Park, Idaho — ATV trails, wildlife, fishing, hiking, scenic drives, and family activities near West Yellowstone. Updated for 2026.",
    robots: { index: true, follow: true },
    alternates: { canonical: 'https://nomadyellowstone.com/things-to-do-island-park' },
    openGraph: {
        title: "Things to Do in Island Park, Idaho — A Local's Complete Guide",
        description: "Everything to do in Island Park, Idaho — ATV trails, wildlife, fishing, hiking, scenic drives, and family activities near West Yellowstone. Updated for 2026.",
        url: 'https://nomadyellowstone.com/things-to-do-island-park',
        images: [{ url: '/sawtelle.png', width: 1200, height: 630, alt: 'Things to do in Island Park Idaho near West Yellowstone' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Things to Do in Island Park, Idaho — A Local's Complete Guide",
        description: "Everything to do in Island Park, Idaho — ATV trails, wildlife, fishing, hiking, scenic drives, and family activities near West Yellowstone. Updated for 2026.",
        images: ['/sawtelle.png'],
    },
};

const faqData = [
    {
        question: "How far is Island Park from West Yellowstone?",
        answer: "Island Park is about 20 minutes (roughly 22 miles) southwest of West Yellowstone via US-20. The Yellowstone west entrance is the closest park gate."
    },
    {
        question: "Is Island Park or West Yellowstone a better base for visiting Yellowstone?",
        answer: "Both work, but Island Park typically offers lower lodging cost, less crowding, and better access to backcountry adventures like ATV trails and Henry's Lake. West Yellowstone is closer to the park entrance and has more in-town amenities."
    },
    {
        question: "What's the best ATV tour in Island Park?",
        answer: "Nomad Yellowstone offers fully guided, passenger-only ATV tours from Island Park into the Yellowstone-area backcountry. Riders are passengers — guides drive — making it accessible to families, kids age 5+, and non-drivers. Tours from $179/seat."
    },
    {
        question: "Is there cell service in Island Park?",
        answer: "Cell coverage is spotty in most of Island Park outside the main highway corridor. Most lodging has WiFi. Plan for limited connectivity in the backcountry."
    },
    {
        question: "When is the best time to visit Island Park?",
        answer: "Mid-June through August is peak. May and September are quieter shoulder months with good weather and fewer crowds. ATV tours run May 15 through October 31."
    }
];

const sections = [
    {
        id: "atv-tours",
        title: "Guided ATV & UTV Tours",
        content: `The single most popular activity in Island Park — and the reason many families extend their Yellowstone trip by a day — is a guided backcountry ATV tour. Unlike self-drive ATV rentals where you navigate unfamiliar trails alone and assume full liability for a $30,000 machine, passenger-only ATV tours let you sit back while a certified guide drives. That makes the experience accessible to everyone: kids as young as five, grandparents, couples who've never been off-road, and families who want adventure without the stress of driving.\n\nNomad Yellowstone operates daily guided ATV tours from May 15 through October 31, departing from Island Park. Routes access high-elevation ridgelines in the Caribou-Targhee National Forest, reaching viewpoints above 8,500 feet with panoramic views of the Teton Range and Yellowstone caldera. Tours last 2–4 hours and start at $179 per seat. Dust goggles, neck gaiters, and safety harnesses are included.`,
        links: [
            { href: "/island-park-atv-tours", label: "Island Park ATV Tour Details →" },
            { href: "/yellowstone-atv-tours", label: "Yellowstone Backcountry ATV Tours →" }
        ],
        showImage: true,
    },
    {
        id: "wildlife",
        title: "Wildlife Viewing in Island Park",
        content: `Island Park sits in the heart of the Greater Yellowstone Ecosystem, one of the largest intact temperate ecosystems in the world. The area supports healthy populations of elk, mule deer, moose, black bears, grizzly bears, wolves, sandhill cranes, osprey, and bald eagles. Wildlife viewing in Island Park often rivals what visitors find inside the park itself — with a fraction of the crowds.\n\nThe best viewing windows are early morning (before 8 AM) and the two hours before sunset. The Harriman State Park corridor along the Henry's Fork is a reliable elk and moose viewing area. Backcountry ATV tours with Nomad Yellowstone offer a unique advantage: guides know the seasonal migration patterns and routinely spot wildlife along ridgeline routes that are inaccessible by car. Many guests report seeing animals on their ATV tour that they never spotted inside Yellowstone.`,
        links: [
            { href: "/intel/island-park-wildlife-viewing", label: "Island Park Wildlife Viewing Guide →" },
            { href: "/intel/backcountry-atv-tours-spot-more-wildlife", label: "Why ATV Tours Spot More Wildlife →" }
        ],
    },
    {
        id: "atv-trails",
        title: "Best ATV Trails to Explore",
        content: `The Caribou-Targhee National Forest surrounding Island Park contains hundreds of miles of designated OHV trails ranging from beginner-friendly forest roads to technical ridgeline routes above treeline. The most scenic trails run east from Island Park toward the Continental Divide, climbing through lodgepole pine corridors into alpine meadows with wildflower displays from late June through August.\n\nPopular trail systems include the Sawtelle Peak area (panoramic Teton and Henry's Lake views), routes along the Continental Divide with 50-mile sightlines, and forest roads that wind through prime wildlife habitat. If you're not comfortable navigating backcountry trails on your own, guided passenger-only ATV tours offer access to the best routes without any driving experience required. Nomad Yellowstone's guides know every unmarked junction and seasonal closure.`,
        links: [
            { href: "/intel/best-atv-trails-near-west-yellowstone", label: "Best ATV Trails Near West Yellowstone →" },
            { href: "/intel/where-to-ride-atv-near-yellowstone", label: "Where to Ride ATVs Near Yellowstone →" }
        ],
    },
    {
        id: "camping",
        title: "Camping & RV Spots",
        content: `Island Park is surrounded by public land with excellent camping options ranging from developed campgrounds with hookups to dispersed backcountry sites in the national forest. The area is far less competitive for campsites than the West Yellowstone side, especially for last-minute travelers during peak July and August weekends.\n\nPopular campgrounds include those along the Henry's Fork corridor and near Henry's Lake. Many offer direct trail access for hiking and fishing. RV travelers will find full-hookup options at several private campgrounds in the Island Park corridor. For a more immersive experience, dispersed camping on national forest land is free and abundant — just follow Leave No Trace principles. Pair a camping trip with a guided ATV tour to maximize your backcountry time.`,
        links: [
            { href: "/intel/camping-near-island-park-idaho", label: "Camping Guide: Island Park, Idaho →" },
            { href: "/intel/best-cabin-rentals-near-yellowstone", label: "Best Cabin Rentals Near Yellowstone →" }
        ],
    },
    {
        id: "fishing",
        title: "Fishing on Henry's Fork & Henry's Lake",
        content: `Island Park is a world-class fly fishing destination. The Henry's Fork of the Snake River flows directly through the area and is widely considered one of the finest trout streams in North America. Technical dry-fly anglers travel from around the world to fish the Railroad Ranch stretch in Harriman State Park, where large rainbow and cutthroat trout rise to complex hatches in glassy, spring-fed water.\n\nHenry's Lake, just north of Island Park, offers a completely different experience: trophy-sized hybrid cutthroat-rainbow trout in a stunning mountain lake setting. Float tubes and small boats are popular. The lake typically opens in late May and fishes well through September. Whether you're a seasoned fly angler or a family looking for accessible shoreline fishing, Island Park has water to match your skill level. Local fly shops offer guided trips, gear rental, and daily hatch reports.`,
        links: [
            { href: "/intel/henrys-lake-things-to-do", label: "Henry's Lake Area Guide →" },
            { href: "/intel/things-to-do-island-park-summer", label: "Island Park Summer Activities →" }
        ],
    },
    {
        id: "scenic-drives",
        title: "Scenic Drives — Mesa Falls Byway",
        content: `The Mesa Falls Scenic Byway is a 28-mile loop off US-20 that passes through some of the most dramatic volcanic scenery in Idaho. The highlight is Upper and Lower Mesa Falls — two powerful waterfalls on the Henry's Fork that remain relatively uncrowded compared to waterfalls inside Yellowstone. Lower Mesa Falls drops 65 feet through a narrow basalt canyon; Upper Mesa Falls is even more impressive at 114 feet.\n\nThe byway is paved and suitable for all vehicles, with several pullouts and interpretive signs. Allow 1.5 to 2 hours for the full loop with photo stops. Early morning offers the best light and fewer visitors. The drive pairs perfectly with a morning ATV tour — do the backcountry in the morning and the scenic byway in the afternoon. Other notable drives from Island Park include the route to Henry's Lake (15 minutes north) and the drive through Ashton to Driggs with Teton views.`,
        links: [
            { href: "/intel/mesa-falls-scenic-byway-guide", label: "Mesa Falls Scenic Byway Guide →" },
            { href: "/intel/hidden-gems-island-park", label: "Hidden Gems of Island Park →" }
        ],
    },
    {
        id: "day-trips",
        title: "Day Trips Into Yellowstone",
        content: `Island Park's proximity to the West Yellowstone entrance makes it an ideal base for day trips into the park. The west entrance is roughly 20 minutes north via US-20, putting you at the Madison Junction within 45 minutes of leaving your cabin. From there, you can reach Old Faithful (30 minutes), the Grand Prismatic Spring overlook (20 minutes), or the Grand Canyon of the Yellowstone (1 hour).\n\nThe key advantage of basing in Island Park is avoiding the West Yellowstone morning traffic. Most park visitors depart from West Yellowstone between 8 and 10 AM, creating significant entrance gate delays. Leaving from Island Park at 7 AM — or better yet, spending the morning on a backcountry ATV tour and entering the park after 2 PM when crowds thin — gives you a dramatically better experience.`,
        links: [
            { href: "/intel/closest-airport-yellowstone", label: "Getting to Yellowstone — Airport Guide →" },
            { href: "/intel/best-yellowstone-itinerary-3-days", label: "3-Day Yellowstone Itinerary →" }
        ],
    },
    {
        id: "when-to-visit",
        title: "When to Visit (May–October)",
        content: `Island Park's outdoor season runs from mid-May through October, with each month offering a distinct experience. May and early June bring green-up, wildflower beginnings, and newborn wildlife — but trails at higher elevations may still have snow. July and August are peak season: warm days (65–80°F), long daylight, and the widest selection of activities. September is arguably the best-kept secret — golden aspens, bugling elk, almost no crowds, and comfortable temperatures. October offers the last window before winter, with dramatic fall color and excellent wildlife viewing as animals prepare for winter.\n\nNomad Yellowstone runs guided ATV tours from May 15 through October 31. Shoulder-season tours (May, September, October) often deliver the most memorable wildlife encounters and the most dramatic light for photography.`,
        links: [
            { href: "/intel/best-time-visit-yellowstone-outdoor-activities", label: "Best Time to Visit for Outdoor Activities →" },
            { href: "/intel/best-month-visit-yellowstone-atv", label: "Best Month for ATV Tours →" }
        ],
    },
    {
        id: "family-activities",
        title: "Family Activities for Kids",
        content: `Island Park is exceptionally family-friendly. The pace is slower than West Yellowstone, the crowds are smaller, and many of the best activities are naturally suited to multi-generational groups. Big Springs — one of the largest natural springs in the US — features an easy one-mile boardwalk loop where kids can watch enormous trout in crystal-clear water. Mesa Falls has paved overlook trails suitable for strollers.\n\nFor adventure-seeking families, guided passenger-only ATV tours are the standout activity. Because professional guides do all the driving, kids as young as five can ride safely in full safety harnesses while the family explores backcountry terrain that would otherwise be inaccessible. It's consistently rated the highlight of family Yellowstone trips. Fishing, wildlife spotting from the car, and evening campfire programs at nearby campgrounds round out a full family itinerary.`,
        links: [
            { href: "/intel/west-yellowstone-with-kids", label: "West Yellowstone with Kids →" },
            { href: "/intel/best-outdoor-activities-yellowstone-families", label: "Best Family Activities Near Yellowstone →" }
        ],
    },
    {
        id: "rainy-day",
        title: "Things to Do When It Rains",
        content: `Afternoon thunderstorms are common in Island Park during July and August — typically brief but intense. If you get a full rainy day, the good news is that Nomad Yellowstone's ATV tours run rain or shine (the Can-Am Commander Max XT vehicles have hard tops and weather protection). A rainy-day ATV tour through misty backcountry ridgelines is actually one of the most atmospheric experiences available.\n\nBeyond ATV tours, rainy-day options include visiting the Yellowstone Historic Center Museum in nearby West Yellowstone, browsing fly shops and outfitters, soaking at natural hot springs (Lava Hot Springs is a longer drive but worth it), or simply enjoying the quiet of a cabin with a book. The rain usually clears by evening, often producing spectacular sunset light.`,
        links: [
            { href: "/intel/things-to-do-yellowstone-when-raining", label: "Rainy Day Activities Near Yellowstone →" },
            { href: "/intel/west-yellowstone-vacation-planning-guide", label: "West Yellowstone Vacation Planning →" }
        ],
    },
];

export default function ThingsToDoIslandPark() {
    return (
        <div className="min-h-screen flex flex-col font-body bg-background text-foreground selection:bg-accent selection:text-white overflow-x-hidden">
            <JsonLd data={buildBreadcrumbList([{ name: 'Things to Do in Island Park', url: 'https://nomadyellowstone.com/things-to-do-island-park' }])} />
            <JsonLd data={buildFAQPage(faqData)} />

            <GlobalHeader />

            <main className="flex-grow flex flex-col relative w-full pt-20 md:pt-32">

                {/* HERO */}
                <section className="relative w-full py-16 md:py-24 flex flex-col items-center overflow-hidden bg-transparent z-10">
                    <div className="w-full text-center mb-8 z-20 relative px-4">
                        <FadeIn>
                            <div className="flex flex-col items-center justify-center">
                                <nav aria-label="Breadcrumb" className="font-mono text-xs text-nomad-black/50 tracking-widest mb-6 uppercase">
                                    <Link href="/" className="hover:text-nomad-red transition-colors">Home</Link>
                                    <span className="mx-2">/</span>
                                    <span className="text-nomad-black/80">Things to Do in Island Park</span>
                                </nav>
                                <span className="font-mono text-nomad-red text-xs md:text-sm tracking-[0.2em] mb-4 block font-bold uppercase drop-shadow-sm">
                                    Island Park, Idaho — Travel Guide
                                </span>
                                <h1 className="font-heading text-4xl md:text-6xl lg:text-[5rem] text-nomad-black uppercase leading-[0.9] tracking-tight mb-6 text-distressed drop-shadow-md">
                                    Things to Do in<br />
                                    <span className="text-nomad-red font-light">Island Park, Idaho</span>
                                </h1>
                                <p className="text-nomad-black/80 text-sm md:text-base max-w-3xl mx-auto leading-relaxed mb-4">
                                    A Local&apos;s Guide — Updated for 2026
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                    <div className="relative w-full h-[30vh] md:h-[45vh] flex flex-col max-w-5xl mx-auto p-4 md:px-6">
                        <div className="relative w-full h-full bg-nomad-black rounded-sm overflow-hidden shadow-2xl border border-white/5">
                            <Image src="/sawtelle.png" alt="Backcountry views from Island Park Idaho near Yellowstone National Park" fill className="object-cover grayscale contrast-125" />
                            <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.6)] z-10 pointer-events-none"></div>
                        </div>
                    </div>
                </section>

                {/* LEDE */}
                <section className="py-12 bg-transparent relative z-10">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <FadeIn>
                            <div className="bg-nomad-paper shadow-xl p-8 border-l-4 border-nomad-red text-nomad-black font-medium leading-relaxed space-y-4 text-sm md:text-base">
                                <p>
                                    Island Park, Idaho — population roughly 300 — sits in Fremont County along US-20, about 20 minutes southwest of the West Yellowstone entrance to Yellowstone National Park. Despite its tiny size, Island Park has quietly become one of the most versatile outdoor recreation bases in the Greater Yellowstone Ecosystem. It&apos;s where locals go when they want Yellowstone-caliber scenery without the Yellowstone-caliber crowds.
                                </p>
                                <p>
                                    For families planning a Yellowstone trip, Island Park solves several problems at once: lodging is typically 30–50% less expensive than West Yellowstone, you&apos;re closer to backcountry trail systems, and the atmosphere is genuinely quiet — no tourist-town traffic jams or overbooked restaurants. Multi-generational groups especially benefit because Island Park&apos;s cabin-style lodging accommodates large families better than hotel rooms in town.
                                </p>
                                <p>
                                    The activity menu is deep: guided passenger-only ATV tours into the Caribou-Targhee National Forest, world-class fly fishing on the Henry&apos;s Fork, wildlife viewing rivaling anything inside the park, waterfall hikes, scenic drives, and camping under some of the darkest skies in the Lower 48. Whether you&apos;re a budget-conscious family, an adventure seeker looking for backcountry access, or grandparents who want to experience the wild without driving an ATV themselves, Island Park delivers.
                                </p>
                                <p>
                                    This guide covers the best things to do in Island Park across every category, with links to deeper guides on each topic. Consider it your starting point for planning.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* TABLE OF CONTENTS */}
                <section className="py-8 bg-transparent relative z-10">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <FadeIn>
                            <div className="bg-nomad-black/5 border border-nomad-black/10 p-6 rounded-sm">
                                <h2 className="font-heading text-lg text-nomad-black uppercase mb-4 text-distressed">In This Guide</h2>
                                <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {sections.map((section) => (
                                        <a key={section.id} href={`#${section.id}`} className="text-sm text-nomad-black/80 hover:text-nomad-red transition-colors font-medium">
                                            → {section.title}
                                        </a>
                                    ))}
                                    <a href="#faq" className="text-sm text-nomad-black/80 hover:text-nomad-red transition-colors font-medium">
                                        → Frequently Asked Questions
                                    </a>
                                </nav>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* CONTENT SECTIONS */}
                {sections.map((section, index) => (
                    <section key={section.id} id={section.id} className="py-16 md:py-20 bg-transparent relative z-10 scroll-mt-24">
                        <div className="container mx-auto px-6 max-w-3xl">
                            <FadeIn>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="font-mono text-nomad-red text-xs tracking-widest font-bold">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <div className="h-px flex-grow bg-nomad-red/20"></div>
                                </div>
                                <h2 className="font-heading text-3xl md:text-4xl text-nomad-black uppercase mb-6 text-distressed drop-shadow-sm">
                                    {section.title}
                                </h2>

                                {section.showImage && (
                                    <div className="relative w-full h-64 md:h-80 mb-8 bg-nomad-black rounded-sm overflow-hidden shadow-xl">
                                        <Image src="/sawtelle.png" alt="Guided passenger-only ATV tour through Island Park Idaho backcountry near Yellowstone" fill className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 right-4 z-10">
                                            <p className="text-white font-mono text-xs tracking-widest uppercase">From $179/seat · Passenger-Only · Ages 5+</p>
                                        </div>
                                    </div>
                                )}

                                <div className="text-nomad-black/85 text-sm md:text-base leading-relaxed space-y-4">
                                    {section.content.split('\n\n').map((paragraph, pIdx) => (
                                        <p key={pIdx}>{paragraph}</p>
                                    ))}
                                </div>

                                <div className="mt-8 flex flex-wrap gap-4">
                                    {section.links.map((link) => (
                                        <Link key={link.href} href={link.href} className="font-mono text-sm text-nomad-red hover:text-nomad-black transition-colors font-bold tracking-wide">
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>

                                {index < sections.length - 1 && (
                                    <div className="mt-16 h-px bg-nomad-black/10"></div>
                                )}
                            </FadeIn>
                        </div>
                    </section>
                ))}

                {/* FAQ SECTION */}
                <section id="faq" className="py-24 bg-transparent relative z-10 w-full scroll-mt-24">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <FadeIn>
                            <h2 className="font-heading text-4xl text-nomad-black text-center uppercase mb-2 text-distressed drop-shadow-sm">Frequently Asked Questions</h2>
                            <p className="font-mono text-sm text-nomad-red font-bold tracking-widest text-center uppercase mb-12 drop-shadow-sm">// Island Park, Idaho</p>
                            <AccordionFAQ items={faqData} defaultOpenIndex={0} />
                        </FadeIn>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="py-24 relative flex items-center justify-center overflow-hidden z-10 border-t border-[rgba(0,0,0,0.1)]">
                    <Image src="/sawtelle.png" alt="Professional Nomad Yellowstone guide driving a Can-Am Commander ATV in Island Park Idaho backcountry" fill className="object-cover opacity-15 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-nomad-paper via-transparent to-transparent opacity-50 pointer-events-none"></div>
                    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
                        <FadeIn>
                            <h2 className="font-heading text-5xl md:text-7xl text-nomad-black uppercase mb-6 opacity-100 text-distressed drop-shadow-md">Book Your<br />Island Park Adventure</h2>
                            <p className="text-base md:text-lg text-nomad-black/80 leading-relaxed mb-8">
                                Guided passenger-only ATV tours departing daily from Island Park, Idaho — 20 minutes from the West Yellowstone entrance. From $179 per seat.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/island-park-atv-tours" className="btn-primary px-12 py-6 text-xl">
                                    BOOK A GUIDED ATV TOUR
                                </Link>
                                <a href="tel:+12087452088" className="font-mono text-lg font-bold text-nomad-black hover:text-nomad-red transition-colors">
                                    (208) 745-2088
                                </a>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </main>

            <footer className="py-12 border-t border-[rgba(0,0,0,0.2)] font-mono text-xs text-nomad-black/70 relative z-20 text-center">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-bold mb-6">
                        <Link href="/" className="hover:text-nomad-red transition-colors">[HOME]</Link>
                        <Link href="/island-park-atv-tours" className="hover:text-nomad-red transition-colors">[ISLAND PARK ATV TOURS]</Link>
                        <Link href="/intel" className="hover:text-nomad-red transition-colors">[JOURNAL]</Link>
                        <Link href="/booking" className="text-nomad-red hover:text-black transition-colors">[BOOK NOW]</Link>
                    </div>
                    <p className="text-nomad-black/40 text-[10px] tracking-widest">NOMAD YELLOWSTONE // ISLAND PARK, ID // EST. 2026</p>
                </div>
            </footer>
        </div>
    );
}
