import Link from 'next/link';

export const metadata = {
    title: 'Terms of Service | Nomad Yellowstone',
    description: 'Rules of engagement.',
};

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-charcoal text-foreground font-body bg-topo">
            <header className="p-6 border-b border-white/5 glass-panel">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-xl font-heading tracking-widest text-white hover:text-accent transition-colors uppercase">
                        Nomad<span className="text-accent">/</span>Yellowstone
                    </Link>
                    <nav className="space-x-8 text-xs font-mono tracking-widest text-frost/60 hidden md:block">
                        <Link href="/" className="hover:text-white transition-colors">[RETURN TO HOME]</Link>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 py-20 max-w-3xl">
                <h1 className="font-heading text-4xl text-white uppercase mb-8">Terms of Service</h1>
                <div className="prose prose-invert prose-lg text-frost/80">
                    <p className="text-sm font-mono text-accent mb-8">EFFECTIVE DATE: FEBRUARY 15, 2026</p>

                    <h3>1. Acceptance of Terms</h3>
                    <p>
                        By booking a tour with Nomad Yellowstone, you agree to these Terms of Service. If you do not agree, please do not use our services.
                    </p>

                    <h3>2. Booking & Cancellations</h3>
                    <p>
                        <strong>Reservations:</strong> A deposit is required to secure your date. Full payment is due 48 hours prior to departure.<br />
                        <strong>Cancellations:</strong> Cancellations made 7 days or more in advance receive a 100% refund. Cancellations made within 48 hours are non-refundable but may be rescheduled subject to availability.
                    </p>

                    <h3>3. Liability Waiver</h3>
                    <p>
                        All guests must sign a liability waiver before participating in any tour. Adventure travel involves inherent risks, and while we prioritize safety, Nomad Yellowstone assumes no liability for personal injury or property damage.
                    </p>

                    <h3>4. Guest Conduct</h3>
                    <p>
                        We operate in a sensitive ecosystem. Guests are expected to follow guide instructions, respect wildlife distances, and adhere to Leave No Trace principles. We reserve the right to terminate a tour without refund if a guest's behavior endangers themselves, others, or the environment.
                    </p>
                </div>
            </main>

            <footer className="py-12 bg-black border-t border-white/10 font-mono text-xs text-frost/40 mt-20">
                <div className="container mx-auto px-4 text-center">
                    <p className="mb-4">NOMAD YELLOWSTONE // EST. 2026 // ISLAND PARK, ID</p>
                    <div className="flex justify-center gap-8">
                        <Link href="/" className="hover:text-white transition-colors">[HOME]</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
