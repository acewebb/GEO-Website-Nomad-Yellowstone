import Link from 'next/link';

/**
 * Shared footer component providing sitewide internal links.
 * Every page linking to every major section improves:
 * - Internal PageRank distribution
 * - Crawler path discovery
 * - User navigation consistency
 */
export default function GlobalFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-nomad-black border-t border-white/10 text-nomad-paper/60 font-mono text-xs">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Tours */}
                    <div>
                        <h3 className="text-white font-heading text-sm uppercase tracking-widest mb-4">Tours</h3>
                        <nav aria-label="Tour pages" className="flex flex-col gap-2">
                            <Link href="/island-park-atv-tours" className="hover:text-white transition-colors">Island Park ATV Tours</Link>
                            <Link href="/yellowstone-atv-tours" className="hover:text-white transition-colors">Yellowstone ATV Tours</Link>
                            <Link href="/expeditions" className="hover:text-white transition-colors">Expeditions</Link>
                            <Link href="/fleet" className="hover:text-white transition-colors">The Fleet</Link>
                            <Link href="/booking" className="hover:text-white transition-colors text-accent">Book Now</Link>
                        </nav>
                    </div>

                    {/* Plan Your Trip */}
                    <div>
                        <h3 className="text-white font-heading text-sm uppercase tracking-widest mb-4">Plan Your Trip</h3>
                        <nav aria-label="Trip planning pages" className="flex flex-col gap-2">
                            <Link href="/things-to-do-island-park" className="hover:text-white transition-colors">Things to Do — Island Park</Link>
                            <Link href="/location" className="hover:text-white transition-colors">How to Get Here</Link>
                            <Link href="/trip-prep" className="hover:text-white transition-colors">Trip Preparation</Link>
                            <Link href="/safety" className="hover:text-white transition-colors">Safety & Protocols</Link>
                        </nav>
                    </div>

                    {/* About */}
                    <div>
                        <h3 className="text-white font-heading text-sm uppercase tracking-widest mb-4">Company</h3>
                        <nav aria-label="Company pages" className="flex flex-col gap-2">
                            <Link href="/about" className="hover:text-white transition-colors">Our Story & Guides</Link>
                            <Link href="/contact" className="hover:text-white transition-colors">Contact Base Camp</Link>
                            <Link href="/intel" className="hover:text-white transition-colors">Field Reports</Link>
                            <Link href="/intel/answers" className="hover:text-white transition-colors">FAQ / Answers</Link>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-heading text-sm uppercase tracking-widest mb-4">Contact</h3>
                        <div className="flex flex-col gap-2">
                            <a href="tel:+12087452088" className="hover:text-white transition-colors">(208) 745-2088</a>
                            <span>Island Park, Idaho 83429</span>
                            <span>20 min from West Yellowstone</span>
                            <a
                                href="https://www.tripadvisor.com/AttractionProductReview-g35494-d33307035-Guided_ATV_Adventure_Island_Park_20_Mins_from_West_Yellowstone-Island_Park_Idaho.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors"
                            >
                                TripAdvisor Reviews →
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© <span suppressHydrationWarning>{currentYear}</span> Nomad Yellowstone. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
