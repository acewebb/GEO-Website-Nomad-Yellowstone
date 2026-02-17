import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy | Nomad Yellowstone',
    description: 'How we handle your data.',
};

export default function PrivacyPolicy() {
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
                <h1 className="font-heading text-4xl text-white uppercase mb-8">Privacy Policy</h1>
                <div className="prose prose-invert prose-lg text-frost/80">
                    <p className="text-sm font-mono text-accent mb-8">LAST UPDATED: FEBRUARY 15, 2026</p>

                    <h3>1. Data Collection</h3>
                    <p>
                        We collect information you provide directly to us, such as when you request a booking, subscribe to our newsletter, or communicate with us. This may include your name, email address, phone number, and payment information.
                    </p>

                    <h3>2. Use of Information</h3>
                    <p>
                        We use your information to operate our tours, process transactions, communicate with you about your booking, and for internal analytics to improve our services.
                    </p>

                    <h3>3. Data Sharing</h3>
                    <p>
                        We do not sell your personal data. We may share information with third-party vendors who support our operations (e.g., payment processors, booking software) strictly for the purpose of providing our services to you.
                    </p>

                    <h3>4. Security</h3>
                    <p>
                        We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
                    </p>

                    <h3>5. Contact Us</h3>
                    <p>
                        If you have questions about this policy, please contact us at operations@nomadyellowstone.com.
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
