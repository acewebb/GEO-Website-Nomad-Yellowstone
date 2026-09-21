import React from 'react';
import Link from 'next/link';
import GlobalHeader from '@/components/GlobalHeader';
import FadeIn from '@/components/FadeIn';
import AccordionFAQ from '@/components/AccordionFAQ';
import JsonLd from '@/components/JsonLd';
import { buildBreadcrumbList } from '@/lib/schema/breadcrumbList';
import { buildFAQPage } from '@/lib/schema/faqPage';

export const metadata = {
    title: "ATV Rental vs Guided Tour: West Yellowstone & Island Park | Nomad Yellowstone",
    description: "Deciding between renting an ATV or booking a guided tour in West Yellowstone and Island Park? Compare damage deposits, driving stress, vehicle liability, family safety, and costs.",
    robots: { index: true, follow: true },
    alternates: { canonical: 'https://nomadyellowstone.com/rental-vs-guided' },
    openGraph: {
        title: "ATV Rental vs Guided Tour: West Yellowstone & Island Park | Nomad Yellowstone",
        description: "Compare self-drive ATV rentals vs. 100% guided passenger tours near Yellowstone. Understand damage deposits, liability, trail safety, and which option fits your group.",
        url: 'https://nomadyellowstone.com/rental-vs-guided',
        images: [{ url: '/sawtelle.png', width: 1200, height: 630, alt: 'Comparing ATV rentals vs guided tours in Island Park and West Yellowstone' }],
    },
};

const rentalFaqData = [
    {
        question: "Is a guided ATV tour cheaper than renting an ATV in Island Park or West Yellowstone?",
        answer: "For families and groups of 2 to 5, guided tours are often significantly cheaper when factoring in hidden rental fees. A full-day self-drive side-by-side rental typically costs $350–$600+ plus fuel ($40–$60), insurance waivers ($30–$50), trailer fees, and requires a $1,500–$3,000 credit card hold. Nomad guided tours are all-inclusive at $179/seat (with 15% off for early booking), covering guide, fuel, helmets, headsets, and zero damage liability."
    },
    {
        question: "Can kids ride on an ATV rental in Idaho and Montana?",
        answer: "While some rental shops allow minors as passengers, driving is strictly restricted to licensed adults (typically 18+ or 25+). More importantly, navigating steep, rocky switchbacks with young children in the vehicle can be terrifying for the parent driver. Nomad's guided tours feature raised stadium seating, four-point harnesses, and professional drivers, making them enjoyable and safe for kids ages 5 and up."
    },
    {
        question: "What happens if an ATV gets damaged on a trail?",
        answer: "With a self-drive rental, you are financially liable for damage. Rental contracts specify that bent tie-rods, punctured tires, belt breaks, or body roll damage come directly out of your $1,500 to $3,000 deposit. With Nomad Yellowstone, you are a passenger; you have ZERO liability for mechanical wear, tire punctures, or trail damage."
    },
    {
        question: "How far are you from Island Park Adventures and other rental shops?",
        answer: "Our basecamp is located right along US Highway 20 in Island Park, within 5–10 minutes of major Island Park rental shops and just 20 minutes south of West Yellowstone rental locations. We provide full parking on-site."
    }
];

export default function RentalVsGuidedPage() {
    const comparisonRows = [
        {
            feature: "Who Does The Driving?",
            rental: "You drive. You navigate unfamiliar rocky terrain, blind corners, and mountain switchbacks.",
            nomad: "Professional guide drives. Sit back, take photos, and soak in 360° mountain vistas."
        },
        {
            feature: "Vehicle Damage Liability",
            rental: "100% on you. Renters pay for bent tie-rods, rim dents, punctured tires, or rollover repairs.",
            nomad: "ZERO vehicle liability. You are a passenger; we assume all mechanical & vehicle risk."
        },
        {
            feature: "Security Deposit Hold",
            rental: "$1,500 to $3,000 hold tied up on your credit card throughout your vacation.",
            nomad: "$0 security deposit. Simple, straightforward per-seat pricing."
        },
        {
            feature: "Ages & Passengers",
            rental: "Drivers must be 18–25+. Young kids can make drivers nervous on technical trails.",
            nomad: "Ages 5 to 90+. Multi-generational seating with headsets so everyone talks and learns together."
        },
        {
            feature: "Trail Navigation & Bear Country",
            rental: "You navigate via GPS or paper maps. Getting lost or stuck is your responsibility to recover.",
            nomad: "Certified guides know every fork, secret vista, wildlife corridor, and weather shift."
        },
        {
            feature: "10,000-ft Sawtelle Peak Access",
            rental: "Intimidating rocky switchbacks and steep exposure that cause many self-drivers to turn back.",
            nomad: "Effortless climb with an experienced driver who navigates the summit ascent daily."
        },
        {
            feature: "Logistics & Equipment Included",
            rental: "Must manage trailer towing, hitching, fuel refill before return, and gear rentals.",
            nomad: "Hop in at basecamp. High-end helmets, dust buffs, and two-way intercom headsets included."
        },
        {
            feature: "Vacation Time Required",
            rental: "Full-day commitment (6–8 hours) including orientation, inspection, towing, and cleanup.",
            nomad: "Half-day efficiency (2.5–3 hours). Leaves plenty of time for Yellowstone National Park."
        }
    ];

    const breadcrumbs = buildBreadcrumbList([
        { name: 'ATV Rental vs Guided', url: 'https://nomadyellowstone.com/rental-vs-guided' }
    ]);

    return (
        <div className="min-h-screen flex flex-col font-body bg-background text-foreground selection:bg-accent selection:text-white overflow-x-hidden">
            <JsonLd data={breadcrumbs} />
            <JsonLd data={buildFAQPage(rentalFaqData)} />
            <GlobalHeader />

            <main className="flex-grow flex flex-col relative w-full pt-20 md:pt-32">
                {/* HERO */}
                <section className="relative w-full py-12 md:py-20 flex flex-col items-center overflow-hidden bg-transparent z-10">
                    <div className="w-full text-center mb-8 z-20 relative px-4 max-w-4xl mx-auto">
                        <FadeIn>
                            <span className="font-mono text-nomad-red text-xs md:text-sm tracking-[0.2em] font-bold uppercase block mb-3">
                                Decision Guide // Island Park & West Yellowstone
                            </span>
                            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] text-nomad-black uppercase leading-[0.92] tracking-tight mb-4 text-distressed drop-shadow-md">
                                ATV RENTAL VS.<br />
                                <span className="text-nomad-red font-light">GUIDED TOUR</span>
                            </h1>
                            <p className="font-heading text-lg sm:text-xl md:text-2xl text-nomad-black/85 uppercase tracking-wide mb-6">
                                Which Option Is Right for Your Yellowstone Vacation?
                            </p>
                            <p className="text-sm md:text-base lg:text-lg text-nomad-black/90 max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
                                Planning an off-road trip in West Yellowstone or Island Park? Rental outfits like Island Park Adventures and BRP dealers will happily rent you a machine—but self-driving isn&apos;t right for everyone. Here is the honest comparison of costs, liabilities, driving stress, and who each option serves best.
                            </p>

                            {/* Dual CTAs */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto mb-6">
                                <Link
                                    href="/booking"
                                    className="btn-primary w-full sm:w-auto px-8 py-4 text-base font-bold shadow-xl hover:scale-105 transition-all text-center"
                                >
                                    BOOK GUIDED TOUR (15% OFF) →
                                </Link>
                                <a
                                    href="tel:+12087452088"
                                    className="w-full sm:w-auto font-mono text-sm md:text-base font-bold text-nomad-black/90 hover:text-nomad-red transition-colors flex items-center justify-center gap-2 border-2 border-nomad-black/20 px-6 py-4 rounded-sm hover:border-nomad-red bg-nomad-paper/60 shadow-sm"
                                >
                                    CALL (208) 745-2088
                                </a>
                            </div>

                            {/* Trust badges */}
                            <div className="flex items-center justify-center gap-3 md:gap-5 text-xs font-mono text-nomad-black/75 flex-wrap">
                                <span className="text-[#00aa6c] font-bold">★★★★★ 5.0 TripAdvisor</span>
                                <span className="text-nomad-red">·</span>
                                <span>Zero Vehicle Liability</span>
                                <span className="text-nomad-red">·</span>
                                <span>Ages 5+ Welcome</span>
                                <span className="text-nomad-red">·</span>
                                <span>20 Min from West Yellowstone</span>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* SIDE-BY-SIDE COMPARISON TABLE */}
                <section className="py-12 md:py-16 bg-transparent relative z-10">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <FadeIn>
                            <div className="my-8 w-full overflow-hidden border border-nomad-black/20 rounded-sm shadow-2xl bg-nomad-black font-mono">
                                <div className="bg-nomad-paper p-5 border-b-4 border-accent flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                                    <div>
                                        <h2 className="font-heading text-2xl md:text-3xl text-nomad-black uppercase tracking-tight m-0 text-distressed">
                                            Side-by-Side Comparison
                                        </h2>
                                        <p className="font-mono text-xs text-nomad-black/70 mt-1 uppercase">
                                            West Yellowstone & Island Park Off-Road Options
                                        </p>
                                    </div>
                                    <span className="font-mono text-[11px] font-bold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-sm uppercase self-start sm:self-auto">
                                        Verified 2026/2027 Season Data
                                    </span>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse min-w-[650px]">
                                        <thead className="bg-nomad-black text-white text-xs uppercase tracking-widest border-b-2 border-white/20">
                                            <tr>
                                                <th scope="col" className="p-4 md:p-5 w-1/4 font-bold opacity-70">
                                                    Comparison Point
                                                </th>
                                                <th scope="col" className="p-4 md:p-5 w-3/8 font-medium text-nomad-paper/70">
                                                    Self-Drive Rental (Island Park / West)
                                                </th>
                                                <th scope="col" className="p-4 md:p-5 w-3/8 font-bold text-accent border-l border-white/10 bg-accent/5">
                                                    Nomad Yellowstone Guided Tour
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-nomad-paper/90 text-xs md:text-sm">
                                            {comparisonRows.map((row, idx) => (
                                                <tr
                                                    key={idx}
                                                    className={`border-b border-white/10 transition-colors hover:bg-white/5 ${idx % 2 === 0 ? 'bg-transparent' : 'bg-black/30'}`}
                                                >
                                                    <th scope="row" className="p-4 md:p-5 font-bold uppercase tracking-wider text-white">
                                                        {row.feature}
                                                    </th>
                                                    <td className="p-4 md:p-5 text-nomad-paper/70 font-light leading-relaxed">
                                                        {row.rental}
                                                    </td>
                                                    <td className="p-4 md:p-5 text-white font-medium border-l border-white/10 bg-accent/5 leading-relaxed">
                                                        <span className="flex items-start gap-2">
                                                            <span className="text-accent font-bold mt-0.5">✓</span>
                                                            {row.nomad}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* THE DECISION FRAMEWORK: WHO SHOULD RENT VS WHO SHOULD GO GUIDED */}
                <section className="py-16 bg-transparent relative z-10">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <FadeIn>
                            <div className="text-center mb-12">
                                <span className="font-mono text-nomad-red text-xs md:text-sm tracking-[0.2em] font-bold uppercase block mb-2">
                                    Honest Breakdown
                                </span>
                                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-nomad-black uppercase text-distressed">
                                    How to Choose Between Rental & Guided
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Choose Rental If */}
                                <div className="bg-nomad-paper/95 border-2 border-nomad-black/20 p-6 md:p-8 rounded-sm shadow-lg flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="w-4 h-4 rounded-full bg-nomad-black/60" />
                                            <h3 className="font-heading text-2xl uppercase tracking-wider text-nomad-black">
                                                Choose a Rental If:
                                            </h3>
                                        </div>
                                        <p className="text-xs font-mono text-nomad-black/70 uppercase mb-4 tracking-wider">
                                            // Best for experienced solo riders & trail enthusiasts
                                        </p>
                                        <ul className="space-y-4 text-sm text-nomad-black/85 font-medium leading-relaxed">
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-nomad-black font-bold">1.</span>
                                                <span><strong>You have seasoned off-road drivers:</strong> Everyone in your group has driven side-by-sides or ATVs on rocky mountain trails and is comfortable navigating blind corners and steep declines.</span>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-nomad-black font-bold">2.</span>
                                                <span><strong>It is an adults-only group:</strong> No young kids or seniors who might feel anxious when the driver handles aggressive trail obstacles or deep mud ruts.</span>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-nomad-black font-bold">3.</span>
                                                <span><strong>You want a full 8-hour trail day:</strong> You intend to pack coolers, navigate 60+ miles of Forest Service roads, and spend the entire sunrise-to-sunset day in the woods.</span>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-nomad-black font-bold">4.</span>
                                                <span><strong>You are comfortable with damage liability:</strong> You don&apos;t mind putting down a $1,500–$3,000 security hold and accepting the financial risk of accidental trail damage.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-8 pt-4 border-t border-nomad-black/15 text-xs font-mono text-nomad-black/70">
                                        Popular local rental options: Island Park Adventures, High Mountain Adventures.
                                    </div>
                                </div>

                                {/* Choose Nomad Guided If */}
                                <div className="bg-nomad-black text-white p-6 md:p-8 rounded-sm shadow-2xl border-2 border-accent flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="w-4 h-4 rounded-full bg-accent animate-ping" />
                                            <h3 className="font-heading text-2xl uppercase tracking-wider text-white">
                                                Choose Nomad Guided If:
                                            </h3>
                                        </div>
                                        <p className="text-xs font-mono text-accent uppercase mb-4 tracking-wider">
                                            // Best for families, groups & stress-free explorers
                                        </p>
                                        <ul className="space-y-4 text-sm text-nomad-paper/90 font-medium leading-relaxed">
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-accent font-bold">1.</span>
                                                <span><strong>You are traveling with family (ages 5+):</strong> Kids, parents, and grandparents can sit together in comfort with four-point harnesses and stereo headsets without anyone having to drive.</span>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-accent font-bold">2.</span>
                                                <span><strong>You want ZERO vehicle liability:</strong> Never stress over scratched body panels, punctured sidewalls, or bent suspension. We take 100% responsibility.</span>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-accent font-bold">3.</span>
                                                <span><strong>You want to reach the 10,000-ft summit:</strong> Sawtelle Peak offers the greatest panoramic view of Yellowstone and the Tetons. Our guides drive it daily, so you get the view without the white-knuckle fear.</span>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-accent font-bold">4.</span>
                                                <span><strong>You want local wildlife & caldera knowledge:</strong> Guides know where moose and bears frequent, the history of the volcanic caldera, and the best photography spots.</span>
                                            </li>
                                            <li className="flex items-start gap-2.5">
                                                <span className="text-accent font-bold">5.</span>
                                                <span><strong>You want an efficient half-day adventure:</strong> 2.5 to 3 hours of adrenaline and wilderness access leaves your afternoon open for Yellowstone National Park.</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-8 pt-4 border-t border-white/10">
                                        <Link
                                            href="/booking"
                                            className="btn-primary w-full block text-center py-3 text-sm font-bold tracking-widest uppercase"
                                        >
                                            BOOK GUIDED TOUR NOW →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* HOW FAR ARE WE FROM WEST YELLOWSTONE & ISLAND PARK RENTALS? */}
                <section className="py-16 bg-nomad-paper/50 border-y border-nomad-black/10 relative z-10">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <FadeIn>
                            <h2 className="font-heading text-3xl md:text-4xl text-nomad-black uppercase text-distressed text-center mb-6">
                                Where We Are Located
                            </h2>
                            <p className="text-sm md:text-base text-nomad-black/85 text-center max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
                                Nomad Yellowstone operates from our private launch basecamp at <strong>4292 US Highway 20 in Island Park, Idaho</strong>—directly on the scenic corridor between Idaho Falls and West Yellowstone, Montana.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-center text-xs">
                                <div className="p-4 bg-nomad-paper border border-nomad-black/15 rounded-sm shadow-sm">
                                    <span className="block font-bold text-nomad-red text-sm mb-1">20 MINUTES</span>
                                    <span className="text-nomad-black/70 uppercase">From West Yellowstone, MT</span>
                                </div>
                                <div className="p-4 bg-nomad-paper border border-nomad-black/15 rounded-sm shadow-sm">
                                    <span className="block font-bold text-nomad-red text-sm mb-1">5–10 MINUTES</span>
                                    <span className="text-nomad-black/70 uppercase">From Island Park Rentals</span>
                                </div>
                                <div className="p-4 bg-nomad-paper border border-nomad-black/15 rounded-sm shadow-sm">
                                    <span className="block font-bold text-nomad-red text-sm mb-1">0 TRAILER HASSLE</span>
                                    <span className="text-nomad-black/70 uppercase">Hop In & Ride Directly</span>
                                </div>
                            </div>
                            <div className="text-center mt-8">
                                <Link
                                    href="/west-yellowstone-atv-tours"
                                    className="font-mono text-xs md:text-sm font-bold text-nomad-red hover:underline uppercase tracking-wider"
                                >
                                    Explore our West Yellowstone ATV Tours Guide →
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="py-20 bg-transparent relative z-10 w-full">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <FadeIn>
                            <h2 className="font-heading text-4xl text-nomad-black text-center uppercase mb-2 text-distressed drop-shadow-sm">
                                Frequently Asked Questions
                            </h2>
                            <p className="font-mono text-sm text-nomad-red font-bold tracking-widest text-center uppercase mb-12 drop-shadow-sm">
                                // Rentals vs. Guided Backcountry Tours
                            </p>
                            <AccordionFAQ items={rentalFaqData} defaultOpenIndex={0} />
                        </FadeIn>
                    </div>
                </section>

                {/* BOTTOM CONVERSION CTA */}
                <section className="py-20 relative flex items-center justify-center overflow-hidden z-10 border-t border-nomad-black/15 bg-nomad-black text-white">
                    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
                        <FadeIn>
                            <span className="font-mono text-accent text-xs tracking-[0.2em] font-bold uppercase block mb-3">
                                Skip the Stress · Zero Liability · We Drive
                            </span>
                            <h2 className="font-heading text-4xl sm:text-6xl text-white uppercase mb-4 text-distressed">
                                Ready to Ride With Nomad?
                            </h2>
                            <p className="text-nomad-paper/80 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light">
                                Reserve your seats for the 2027 season today and receive an automatic 15% early bird discount. No liability deposits, no trailer hassle. Just pure mountain views.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link href="/booking" className="btn-primary px-10 py-5 text-base font-bold shadow-2xl">
                                    CHECK AVAILABILITY (15% OFF) →
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
                    <Link href="/west-yellowstone-atv-tours" className="hover:text-white transition-colors">[WEST YELLOWSTONE ATV TOURS]</Link>
                    <span>·</span>
                    <Link href="/yellowstone-atv-tours" className="hover:text-white transition-colors">[YELLOWSTONE ATV TOURS]</Link>
                    <span>·</span>
                    <Link href="/booking" className="text-accent hover:text-white transition-colors">[BOOK DIRECT]</Link>
                </div>
            </footer>
        </div>
    );
}
