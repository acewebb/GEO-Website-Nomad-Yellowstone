import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-8 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(10,10,15,0.8)] z-0 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/20 rounded-full blur-[120px] -z-10" />

        <div className="z-10 text-center max-w-4xl mx-auto space-y-6 animate-pulse-slow">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full glass text-sm font-medium text-accent-light border border-accent/20">
            v1.0 Premium Starter
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Build <span className="text-gradient">Premium</span> Web Experiences
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A high-performance Next.js starter template crafted with modern aesthetics, glassmorphism, and smooth animations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button className="px-8 py-4 rounded-full bg-accent hover:bg-accent/90 text-white font-semibold transition-all shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.7)] transform hover:-translate-y-1">
              Get Started
            </button>
            <button className="px-8 py-4 rounded-full glass hover:bg-white/5 text-gray-200 font-semibold transition-all border border-white/10 hover:border-white/20">
              View Documentation
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl z-10">
          {[
            { title: "Modern Design", desc: "Crafted with the latest design trends including glassmorphism and gradients." },
            { title: "High Performance", desc: "Built on Next.js 15+ for lighting fast page loads and SEO optimization." },
            { title: "Customizable", desc: "Easy to configure colors, fonts, and layouts to match your brand identity." }
          ].map((feature, i) => (
            <div key={i} className="glass p-8 rounded-2xl hover:bg-white/5 transition-colors group cursor-default">
              <h3 className="text-xl font-semibold mb-3 text-gray-100 group-hover:text-accent transition-colors">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/5 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Premium Next.js Starter. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
