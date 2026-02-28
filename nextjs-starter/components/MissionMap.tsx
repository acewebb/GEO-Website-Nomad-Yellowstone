'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type Waypoint = {
    id: string;
    x: number; // percentage from left
    y: number; // percentage from top
    title: string;
    elevation: string;
    vibe: string;
    description: string;
};

const waypoints: Waypoint[] = [
    {
        id: 'basecamp',
        x: 25,
        y: 65,
        title: 'Nomad Base Camp',
        elevation: '6,293 ft',
        vibe: 'Staging & Anticipation',
        description: 'Where the pavement ends. Receive your gear loadout and orientation on the Can-Am Commander Max before dispatching directly into the heavy timber.'
    },
    {
        id: 'sawtelle',
        x: 45,
        y: 20,
        title: 'Sawtelle Peak Summit',
        elevation: '9,875 ft',
        vibe: 'High-Altitude Awe',
        description: 'A punishing climb leading to an absolute panoramic dominance over the Greater Yellowstone Ecosystem. Look down upon three different states at once.'
    },
    {
        id: 'silent-chapter',
        x: 75,
        y: 45,
        title: 'The Silent Chapter',
        elevation: '8,400 ft',
        vibe: 'Absolute Stillness',
        description: 'We cut the 100-horsepower engines. We dismount. For 20 minutes, the only sound is the high-elevation wind moving through the ancient pines.'
    },
    {
        id: 'two-top',
        x: 60,
        y: 80,
        title: 'Continental Divide Trail',
        elevation: '7,500 ft',
        vibe: 'Deep Wilderness Navigation',
        description: 'Following the razor edge of the continent. Tight, technical corners through dense forest that standard rental vehicles cannot safely navigate.'
    }
];

export default function MissionMap() {
    const [activeWaypoint, setActiveWaypoint] = useState<Waypoint | null>(null);

    return (
        <section className="relative w-full py-24 bg-nomad-black overflow-hidden border-y border-white/5">
            {/* Background Texture Layers */}
            <div className="absolute inset-0 z-0 opacity-20 mix-blend-screen pointer-events-none">
                <Image
                    src="/topo-dark.png"
                    alt="Topographical map texture"
                    fill
                    className="object-cover"
                />
            </div>
            {/* Grid Overlay for tactical feel */}
            <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="container mx-auto px-4 relative z-20 flex flex-col md:flex-row items-center justify-between gap-12">

                {/* Left Text Block */}
                <div className="w-full md:w-1/3 text-left">
                    <span className="font-mono text-accent text-sm tracking-widest mb-4 block">// TACTICAL EXPLORATION</span>
                    <h2 className="font-heading text-4xl md:text-5xl text-white uppercase mb-6 leading-tight">
                        Map Your <span className="text-nomad-paper/60">Extraction</span>
                    </h2>
                    <p className="font-mono text-sm text-nomad-paper/70 leading-relaxed mb-8">
                        The "Yellowstone Experience" is rarely found on the paved loop. Select a waypoint on the operational grid to preview the true backcountry sectors we navigate daily.
                    </p>

                    {/* Active Waypoint Info Panel */}
                    <div className="min-h-[220px]">
                        <AnimatePresence mode="wait">
                            {activeWaypoint ? (
                                <motion.div
                                    key={activeWaypoint.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="p-6 bg-white/5 border border-white/10 backdrop-blur-sm rounded-sm"
                                >
                                    <h3 className="font-heading text-2xl text-white uppercase mb-4 text-accent">{activeWaypoint.title}</h3>
                                    <div className="flex gap-4 mb-4 font-mono text-[10px] tracking-widest text-nomad-paper/60 uppercase">
                                        <span className="px-2 py-1 border border-white/10">Elev: {activeWaypoint.elevation}</span>
                                        <span className="px-2 py-1 border border-white/10 max-w-[150px] truncate">{activeWaypoint.vibe}</span>
                                    </div>
                                    <p className="text-sm text-nomad-paper/90 font-light leading-relaxed">
                                        {activeWaypoint.description}
                                    </p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="empty"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="h-full flex items-center justify-center p-6 border border-white/5 border-dashed rounded-sm"
                                >
                                    <span className="font-mono text-xs text-nomad-paper/30 tracking-widest uppercase">Select A Waypoint To Load Intel</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Right Map Canvas */}
                <div className="w-full md:w-2/3 aspect-[4/3] md:aspect-video relative bg-black/40 border border-white/10 rounded-sm overflow-hidden shadow-2xl shadow-black">

                    {/* The "Map" Area - Just using the background topo, but we can add abstract shapes here later */}
                    <div className="absolute inset-0 opacity-50">
                        {/* We use a large, desaturated crop of the Sawtelle image as the actual base layer */}
                        <Image
                            src="/sawtelle.png"
                            alt="Island Park map base"
                            fill
                            className="object-cover grayscale contrast-125 opacity-30 mix-blend-luminosity"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-nomad-black to-transparent"></div>
                    </div>

                    {/* Waypoints */}
                    {waypoints.map((wp) => (
                        <div
                            key={wp.id}
                            className="absolute z-30 group cursor-pointer flex flex-col items-center justify-center"
                            style={{ left: `${wp.x}%`, top: `${wp.y}%`, transform: 'translate(-50%, -50%)' }}
                            onClick={() => setActiveWaypoint(wp)}
                        >
                            {/* Pulse Animation */}
                            <motion.div
                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute w-8 h-8 rounded-full bg-accent/40"
                            />
                            {/* Core Dot */}
                            <div className={`w-3 h-3 rounded-full border border-black shadow-[0_0_10px_rgba(200,60,60,0.8)] transition-colors duration-300 ${activeWaypoint?.id === wp.id ? 'bg-white scale-125' : 'bg-accent group-hover:bg-white'} z-10 relative`} />

                            {/* Floating Label (Visible on hover or active) */}
                            <div className={`absolute top-full mt-2 font-mono text-[10px] tracking-widest whitespace-nowrap transition-all duration-300 ${activeWaypoint?.id === wp.id ? 'opacity-100 text-white translate-y-0' : 'opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 text-nomad-paper/60'} bg-black/80 px-2 py-1 border border-white/10 pointer-events-none`}>
                                {wp.title}
                            </div>
                        </div>
                    ))}

                    {/* Map UI Overlay Elements */}
                    <div className="absolute bottom-4 left-4 font-mono text-[8px] text-white/30 tracking-[0.2em] pointer-events-none">
                        LAT: 44.4221 N<br />
                        LON: 111.3733 W<br />
                        GRID: OMEGA-7
                    </div>
                </div>
            </div>
        </section>
    );
}
