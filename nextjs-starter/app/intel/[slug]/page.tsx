import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    return (
        <div className="min-h-screen bg-charcoal text-foreground font-body bg-topo">
            {/* Header */}
            <header className="p-6 border-b border-white/5 glass-panel sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/intel" className="text-xl font-heading tracking-widest text-white hover:text-accent transition-colors uppercase">
                        Nomad<span className="text-accent">/</span>Intel
                    </Link>
                    <nav className="space-x-8 text-xs font-mono tracking-widest text-frost/80 hidden md:block">
                        <Link href="/" className="hover:text-white transition-colors">[HOME]</Link>
                        <Link href="/booking" className="hover:text-white transition-colors text-accent">[BOOK TOUR]</Link>
                    </nav>
                </div>
            </header>

            <article className="container mx-auto px-4 py-20 max-w-4xl">
                {/* Post Header */}
                <div className="mb-12 text-center">
                    <div className="inline-block px-3 py-1 border border-accent/30 rounded-full mb-6">
                        <span className="font-mono text-xs text-accent tracking-widest uppercase bg-accent/10 px-2 py-1 rounded">
                            {post.tags?.[0]}
                        </span>
                    </div>
                    <h1 className="font-heading text-4xl md:text-6xl text-white uppercase leading-tight mb-6">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-frost/50 font-mono text-xs tracking-widest uppercase">
                        <span>{post.date}</span>
                        <span>//</span>
                        <span>{post.author}</span>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative w-full aspect-video mb-16 rounded-sm overflow-hidden border border-white/10 shadow-2xl">
                    {post.image && (
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    )}
                </div>

                {/* GEO Optimization Box */}
                <div className="bg-sage/10 border-l-4 border-accent p-8 mb-12 rounded-r-sm">
                    <h3 className="font-heading text-xl text-white uppercase mb-4 flex items-center gap-3">
                        <span className="text-accent">★</span> Key Takeaways (TL;DR)
                    </h3>
                    <p className="text-frost italic text-lg leading-relaxed">
                        {post.description} For 2026, the prime window is June through September. Book early for sunrise/sunset slots.
                    </p>
                </div>

                {/* MDX Content */}
                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-headings:uppercase prose-headings:tracking-wide prose-a:text-accent prose-img:rounded-sm">
                    <MDXRemote source={post.content} />
                </div>

                {/* Author Bio / Call to Action */}
                <div className="mt-20 p-8 glass-panel border border-white/10 rounded-sm flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-heading text-3xl text-charcoal">N</span>
                    </div>
                    <div>
                        <h3 className="font-heading text-2xl text-white uppercase mb-2">Ready to Go?</h3>
                        <p className="text-frost/70 mb-6 max-w-lg">
                            Don't just read about it. Experience the wilderness yourself on our premium guided electric-ATV tours.
                        </p>
                        <Link href="/booking" className="btn-primary px-8 py-3 text-lg inline-block">
                            Check Availability
                        </Link>
                    </div>
                </div>
            </article>

            <footer className="py-12 bg-black border-t border-white/10 font-mono text-xs text-frost/40 mt-20">
                <div className="container mx-auto px-4 text-center">
                    <p className="mb-4">NOMAD YELLOWSTONE // EST. 2026 // ISLAND PARK, ID</p>
                    <div className="flex justify-center gap-8 mb-4">
                        <Link href="/" className="hover:text-white transition-colors">[HOME]</Link>
                        <Link href="/intel" className="hover:text-white transition-colors">[JOURNAL]</Link>
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
