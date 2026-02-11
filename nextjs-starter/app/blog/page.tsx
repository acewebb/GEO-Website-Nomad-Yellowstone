import React from 'react';
import { Outfit } from "next/font/google";
import Link from 'next/link';
import Image from 'next/image';

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
    title: "Yellowstone Crowd Avoidance Guide | Nomad Yellowstone Blog",
    description: "Expert tips on how to see the best of Yellowstone without the traffic. Guides for Sawtelle Peak, Island Park trails, and backcountry adventures.",
};

export default function Blog() {
    const posts = [
        {
            title: "Why an ATV is the Ultimate 'Cheat Code' for Yellowstone Solitude",
            excerpt: "Every summer, the West Yellowstone entrance becomes a bottleneck. Here is how to skip it entirely.",
            date: "May 20, 2026",
            slug: "atv-cheat-code",
            image: "/atv_action.png"
        },
        {
            title: "The 2026 Yellowstone Crowd Avoidance Guide",
            excerpt: "Why waiting in line at the West Entrance is a mistake, and where to go instead.",
            date: "May 1, 2026",
            slug: "crowd-avoidance-guide",
            image: "/sawtelle.png" // Reusing existing image
        },
        {
            title: "Why Sawtelle Peak is Better Than Old Faithful",
            excerpt: "Get a 360-degree view of three states and the Caldera without the boardwalk crowds.",
            date: "May 15, 2026",
            slug: "sawtelle-vs-old-faithful",
            image: "/atv_action.png" // Reusing
        },
        {
            title: "Top 5 Hidden Trails in Island Park",
            excerpt: "Local favorites for ATV and E-bike adventures that aren't on the main tourist maps.",
            date: "June 2, 2026",
            slug: "hidden-trails-island-park",
            image: "/ebike.png" // Reusing
        }
    ];

    return (
        <div className={`min-h-screen flex flex-col font-sans ${outfit.className} bg-background text-foreground selection:bg-accent selection:text-white`}>
            <header className="p-6 border-b border-mist/10">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-white tracking-tight">Nomad Yellowstone</Link>
                    <nav className="space-x-4 text-sm font-medium">
                        <Link href="/booking" className="text-accent hover:text-white transition-colors">Book Now</Link>
                        <Link href="/" className="text-mist hover:text-white transition-colors">Home</Link>
                    </nav>
                </div>
            </header>

            <main className="flex-grow container mx-auto px-4 py-16">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-gradient">Island Park Adventure Journal</h1>
                    <p className="text-xl text-mist/80">Expert guides, trail reports, and tips for experiencing the real Yellowstone ecosystem.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <article key={index} className="glass group rounded-2xl overflow-hidden hover:bg-surface/40 transition-all duration-300 border border-mist/5 hover:border-accent/30 flex flex-col">
                            <div className="h-48 w-full bg-surface relative overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-surface/20" />
                            </div>
                            <div className="p-8 flex-grow flex flex-col">
                                <div className="text-xs text-accent font-bold uppercase tracking-widest mb-3">{post.date}</div>
                                <h2 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors">{post.title}</h2>
                                <p className="text-mist/70 leading-relaxed mb-6 flex-grow text-sm">{post.excerpt}</p>
                                <a href={`/blog/${post.slug}`} className="text-white font-semibold hover:text-accent transition-colors inline-flex items-center gap-2 text-sm">
                                    Read Guide <span className="text-lg">→</span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </main>

            <footer className="w-full border-t border-mist/5 py-8 mt-12 bg-[#0E1817] text-center text-mist/60 text-sm">
                <p>&copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> Nomad Yellowstone. All rights reserved.</p>
            </footer>
        </div>
    );
}
