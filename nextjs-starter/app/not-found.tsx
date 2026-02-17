import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-charcoal text-foreground font-body bg-topo flex flex-col items-center justify-center p-4 text-center">

            <div className="mb-8 relative">
                <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full"></div>
                <div className="p-6 border border-accent/30 bg-black/40 relative z-10 rounded-sm">
                    <h1 className="font-heading text-9xl text-accent/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">404</h1>
                    <div className="w-16 h-16 border-2 border-accent rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                        <span className="text-2xl">!</span>
                    </div>
                    <h2 className="font-heading text-3xl text-white uppercase">Signal Lost</h2>
                </div>
            </div>

            <p className="text-frost/60 max-w-md font-mono text-sm mb-8">
        // ERROR: NAVIGATION SYSTEM FAILURE <br />
                The coordinate you are attempting to reach does not exist or has been redacted from the map.
            </p>

            <div className="flex gap-4">
                <Link href="/" className="btn-primary px-8 py-3">
                    Return to Base
                </Link>
                <Link href="/booking" className="btn-outline px-8 py-3">
                    Book Rescue
                </Link>
            </div>

            <div className="fixed bottom-8 text-xs font-mono text-frost/20">
                NOMAD YELLOWSTONE // SYSTEM DIAGNOSTIC
            </div>
        </div>
    );
}
