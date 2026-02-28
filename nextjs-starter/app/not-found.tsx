import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-charcoal text-foreground font-body bg-topo flex flex-col items-center justify-center p-4 text-center">

            <div className="mb-12 relative w-full max-w-2xl aspect-video mx-auto">
                <Image
                    src="/windows-95-serenity.jpg"
                    alt="Windows 95 Warning: Too much thinking detected. Would you like to restart in Serenity Mode?"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            <div className="flex justify-center gap-4">
                <Link href="/" className="btn-primary px-12 py-4">
                    YES (Restart Basecamp)
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
