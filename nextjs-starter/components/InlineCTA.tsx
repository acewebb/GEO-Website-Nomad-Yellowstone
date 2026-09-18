import Link from 'next/link';

export default function InlineCTA() {
    return (
        <div className="my-10 p-6 md:p-8 bg-nomad-black/80 border border-accent/20 rounded-sm shadow-xl relative overflow-hidden glass-panel group hover:border-accent/40 transition-all duration-300">
            {/* Background glowing effects */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div className="space-y-3">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-accent font-bold uppercase border border-accent/20 bg-accent/5 px-2 py-0.5 rounded">
                        ★ Expedition Briefing
                    </span>
                    <h3 className="font-heading text-xl md:text-2xl text-white uppercase leading-snug tracking-wide">
                        Guided Backcountry ATV Tours
                    </h3>
                    <p className="text-nomad-paper/70 text-sm max-w-xl leading-relaxed">
                        Deploy from Island Park (20 mins from West Yellowstone). Explore rugged mountain trails that standard tourists never see. Daily departures.
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1 font-mono text-xs text-nomad-paper/50">
                        <div>
                            <span className="text-white">Price:</span> From $152 / person <span className="text-green-400 font-bold">(15% OFF)</span>
                        </div>
                        <div>
                            <span className="text-white">Season:</span> May 15 – October 31, 2027
                        </div>
                        <div>
                            <span className="text-white">Includes:</span> Can-Am ATV + Gear + Guide
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 flex items-center">
                    <Link
                        href="/booking"
                        className="btn-primary w-full md:w-auto px-8 py-3.5 text-center font-heading text-sm uppercase tracking-wider shadow-lg hover:shadow-accent/20 transition-all duration-300"
                    >
                        Book 2027 Season
                    </Link>
                </div>
            </div>
        </div>
    );
}
