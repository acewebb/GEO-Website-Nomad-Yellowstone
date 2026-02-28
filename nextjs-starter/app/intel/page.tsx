import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import Image from 'next/image';

export default function BlogIndex() {
    const posts = getAllPosts();

    return (
        <div className="min-h-screen bg-charcoal text-foreground font-body bg-topo">
            {/* Header */}
            <header className="p-6 border-b border-white/5 glass-panel sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-xl font-heading tracking-widest text-white hover:text-accent transition-colors uppercase">
                        Nomad<span className="text-accent">/</span>Yellowstone
                    </Link>
                    <nav className="space-x-8 text-xs font-mono tracking-widest text-frost/80 hidden md:block">
                        <Link href="/" className="hover:text-white transition-colors">[RETURN TO HOME]</Link>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <span className="font-mono text-accent text-sm tracking-widest mb-2 block">// MISSION INTEL</span>
                    <h1 className="font-heading text-5xl md:text-6xl text-white uppercase">Field Reports</h1>
                    <p className="text-frost/80 mt-4 max-w-2xl mx-auto text-lg">
                        Guides, tips, and insights from the edge of the wilderness.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/intel/${post.slug}`} className="group relative block h-full">
                            <div className="glass-card h-full rounded-sm overflow-hidden flex flex-col transition-transform duration-300 group-hover:-translate-y-2">

                                {/* Image */}
                                <div className="relative h-48 w-full bg-slate-800">
                                    {/* Ideally use next/image here with real optimization. 
                        Using a simple div placeholder style for now if image fails, 
                        but assuming file exists from sample post. */}
                                    {post.image && (
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    )}
                                    <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur border border-white/10 px-3 py-1">
                                        <span className="font-mono text-xs text-accent tracking-widest">
                                            {post.tags?.[0] || 'UPDATE'}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="mb-4">
                                        <span className="font-mono text-xs text-white/60 tracking-widest uppercase block mb-2">{post.date}</span>
                                        <h2 className="font-heading text-2xl text-white uppercase group-hover:text-accent transition-colors leading-tight">
                                            {post.title}
                                        </h2>
                                    </div>

                                    <p className="text-white/80 text-sm line-clamp-3 mb-6 flex-grow">
                                        {post.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest border-t border-white/5 pt-4">
                                        <span>Read Analysis</span>
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>

            <footer className="py-12 bg-black border-t border-white/10 font-mono text-xs text-frost/40 mt-20">
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
