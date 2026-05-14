import Link from 'next/link';
import Image from 'next/image';
import type { Post } from '@/lib/posts';

interface RelatedPostsProps {
    posts: Post[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
    if (!posts.length) return null;

    return (
        <section className="mt-16 pt-12 border-t border-white/10">
            <h2 className="font-heading text-2xl text-white uppercase mb-8 tracking-wider">
                Related Field Reports
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/intel/${post.slug}`}
                        className="group block bg-white/5 border border-white/10 rounded-sm overflow-hidden hover:border-accent/40 transition-colors"
                    >
                        <div className="relative h-40 overflow-hidden">
                            <Image
                                src={post.image || '/hero-bg.png'}
                                alt={post.title}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div className="p-4">
                            <p className="font-mono text-[10px] text-accent/70 tracking-widest uppercase mb-2">
                                {post.tags?.slice(0, 2).join(' · ') || 'Field Intel'}
                            </p>
                            <h3 className="font-heading text-sm text-white uppercase leading-snug group-hover:text-accent transition-colors">
                                {post.title}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
