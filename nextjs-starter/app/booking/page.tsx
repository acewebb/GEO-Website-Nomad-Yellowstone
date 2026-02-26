'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays, isBefore, startOfDay } from 'date-fns';

function BookingCalendar({ selectedDate, onSelect, disabledDates }: { selectedDate: Date | null, onSelect: (d: Date) => void, disabledDates: Date[] }) {
    const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));

    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const today = startOfDay(new Date());

    const days = [];
    let day = startDate;

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            const cloneDay = day;
            const isSelected = selectedDate ? isSameDay(day, selectedDate) : false;
            const isMockDisabled = disabledDates.some(d => isSameDay(d, day));
            const isPast = isBefore(day, today);
            const isDisabled = isPast || isMockDisabled;

            days.push(
                <button
                    key={day.toString()}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => !isDisabled && onSelect(cloneDay)}
                    className={`h-10 w-full rounded-sm flex items-center justify-center font-mono text-sm transition-colors border border-transparent
                        ${!isSameMonth(day, monthStart) ? 'text-white/20' : ''}
                        ${isDisabled ? 'opacity-20 cursor-not-allowed bg-red-900/30 line-through decoration-red-500/50' : 'hover:border-accent/50'}
                        ${isSelected ? 'bg-accent text-white font-bold shadow-[0_0_15px_rgba(200,60,60,0.5)]' : ''}
                        ${!isSelected && !isDisabled ? 'text-white bg-white/5' : ''}
                    `}
                >
                    {format(day, 'd')}
                </button>
            );
            day = addDays(day, 1);
        }
    }

    const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
        <div key={day} className="text-center font-mono text-xs text-nomad-paper/50 uppercase mb-2">
            {day}
        </div>
    ));

    return (
        <div className="bg-nomad-black p-4 border border-white/10 rounded-sm">
            <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
                <button type="button" onClick={prevMonth} className="text-nomad-paper hover:text-accent font-mono px-3 py-1 bg-white/5 hover:bg-white/10 rounded-sm transition-colors">&lt; PREV</button>
                <div className="font-heading text-xl uppercase text-white tracking-widest drop-shadow-sm">
                    {format(currentMonth, 'MMMM yyyy')}
                </div>
                <button type="button" onClick={nextMonth} className="text-nomad-paper hover:text-accent font-mono px-3 py-1 bg-white/5 hover:bg-white/10 rounded-sm transition-colors">NEXT &gt;</button>
            </div>
            <div className="grid grid-cols-7 gap-1">
                {weekDays}
                {days}
            </div>
        </div>
    );
}

function BookingContent() {
    const searchParams = useSearchParams();
    const initialObjective = searchParams.get('objective');

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [bookedDates, setBookedDates] = useState<Date[]>([
        addDays(startOfDay(new Date()), 2),
        addDays(startOfDay(new Date()), 5),
        addDays(startOfDay(new Date()), 6),
    ]);
    const [missionType, setMissionType] = useState(initialObjective === 'golden' ? 'golden' : 'morning');
    const [guestCount, setGuestCount] = useState(2);
    const [isBuyout, setIsBuyout] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Pricing Constants
    const PRICE_PER_PASSENGER = 149;
    const BUYOUT_PRICE = 600; // Flat rate for 6 seats (private)
    const MAX_GUESTS = 6;

    const missions = [
        { id: 'morning', label: 'The Morning Scout', time: '8:00 AM', icon: 'Sun' },
        { id: 'golden', label: 'The Golden Hour', time: '5:00 PM', icon: 'Sunset' }
    ];

    const currentPrice = isBuyout ? BUYOUT_PRICE : (guestCount * PRICE_PER_PASSENGER);

    return (
        <div className="min-h-screen flex flex-col font-body bg-nomad-black text-white selection:bg-accent selection:text-white">
            {/* Header */}
            <header className="p-6 border-b border-white/5 glass-panel">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/" className="text-xl font-heading tracking-widest text-white hover:text-accent transition-colors uppercase">
                        Nomad<span className="text-accent">/</span>Yellowstone
                    </Link>
                    <nav className="space-x-8 text-xs font-mono tracking-widest text-nomad-paper/80 hidden md:block">
                        <Link href="/" className="hover:text-white transition-colors">[RETURN TO HOME]</Link>
                        <Link href="/intel" className="hover:text-white transition-colors">[JOURNAL]</Link>
                    </nav>
                </div>
            </header>

            <main className="flex-grow container mx-auto px-4 py-12 md:py-20 flex flex-col items-center">
                <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left: Mission Parameters */}
                    <div className="space-y-10">
                        <div>
                            <span className="font-mono text-accent text-xs tracking-widest mb-2 block">// STEP 01: CHOOSE ADVENTURE</span>
                            <h1 className="font-heading text-5xl md:text-6xl text-white uppercase leading-none mb-6">
                                Secure Your <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-600">Start Time</span>
                            </h1>
                            <p className="text-nomad-paper/80 text-sm md:text-base font-light border-l-2 border-accent/20 pl-4 max-w-2xl leading-relaxed">
                                <strong>How do I book a Nomad Yellowstone UTV tour?</strong> Guests can book a private guided UTV tour by selecting a preferred trip time, such as the Morning Scout or Golden Hour, and entering their group size. The Can-Am Commander Max XT accommodates up to 4 standard passengers, with private vehicle buyouts available for larger groups. All 4-hour backcountry expeditions start at $149 per seat and include a professional driver, dust protection gear, and headsets. Nomad Yellowstone secures the reservation without charging the payment method until the departure date and guide availability are officially confirmed.
                            </p>
                        </div>

                        {/* Mission Selector */}
                        <div className="space-y-4">
                            <label className="font-mono text-xs text-nomad-paper/50 uppercase tracking-widest">Select Trip</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {missions.map((mission) => (
                                    <button
                                        key={mission.id}
                                        onClick={() => setMissionType(mission.id)}
                                        className={`glass-panel p-4 text-left border transition-all ${missionType === mission.id ? 'border-accent bg-accent/5' : 'border-white/10 hover:border-white/30'}`}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <span className={`font-heading text-xl uppercase ${missionType === mission.id ? 'text-accent' : 'text-white'}`}>{mission.label}</span>
                                            {missionType === mission.id && <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>}
                                        </div>
                                        <p className="font-mono text-xs tracking-widest">{mission.time}</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Guest Count & Buyout */}
                        <div className="space-y-6 bg-surface/30 p-6 rounded-sm border border-white/5">
                            <div className="flex items-center justify-between">
                                <label className="font-mono text-xs text-nomad-paper/50 uppercase tracking-widest">Group Size</label>
                                <span className="font-heading text-2xl text-white">{isBuyout ? 'PRIVATE TOUR' : `${guestCount} PASSENGER${guestCount > 1 ? 'S' : ''}`}</span>
                            </div>

                            {!isBuyout ? (
                                <div className="flex items-center gap-4">
                                    <input
                                        type="range"
                                        min="1"
                                        max={MAX_GUESTS}
                                        step="1"
                                        value={guestCount}
                                        onChange={(e) => setGuestCount(parseInt(e.target.value))}
                                        className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:rounded-full"
                                    />
                                    <div className="font-mono text-sm w-12 text-center border border-white/10 py-1 rounded-sm">{guestCount}</div>
                                </div>
                            ) : (
                                <div className="p-3 bg-accent/10 border border-accent/30 text-accent text-xs font-mono text-center">
                                    FULL VEHICLE EXCLUSIVE ACCESS UNLOCKED
                                </div>
                            )}

                            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                                <button
                                    onClick={() => { setIsBuyout(!isBuyout); if (!isBuyout) setGuestCount(6); }}
                                    className={`w-5 h-5 border flex items-center justify-center transition-colors ${isBuyout ? 'border-accent bg-accent' : 'border-white/30'}`}
                                >
                                    {isBuyout && <span className="text-charcoal font-bold text-xs">✓</span>}
                                </button>
                                <span className="text-sm text-nomad-paper/80 uppercase tracking-wide cursor-pointer" onClick={() => setIsBuyout(!isBuyout)}>
                                    Upgrade to Private Tour (+${BUYOUT_PRICE - (guestCount * PRICE_PER_PASSENGER)} flat rate)
                                </span>
                            </div>
                        </div>

                        {/* Total Estimator */}
                        <div className="flex justify-between items-end border-t border-white/10 pt-8">
                            <div>
                                <span className="font-mono text-xs text-nomad-paper/50 uppercase tracking-widest block mb-1">Estimated Total</span>
                                <span className="font-heading text-4xl text-accent">${currentPrice}</span>
                            </div>
                            <div className="text-right">
                                <p className="text-accent font-mono text-xs uppercase tracking-widest mb-1">Includes</p>
                                <ul className="text-xs text-nomad-paper/70 text-right space-y-1">
                                    <li>Professional Guide</li>
                                    <li>Dust Protection Gear</li>
                                    <li>Binoculars & Headsets</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right: Guest Details Form */}
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent to-orange-600 rounded-sm opacity-20 blur"></div>
                        <div className="glass-panel p-8 rounded-sm border border-white/10 relative h-full flex flex-col justify-center min-h-[600px]">

                            {!isSubmitted ? (
                                <>
                                    <h3 className="font-heading text-3xl text-white uppercase mb-6 flex items-center gap-3">
                                        <span className="w-2 h-8 bg-accent block"></span>
                                        Guest Details
                                    </h3>

                                    <form className="space-y-6" onSubmit={(e) => {
                                        e.preventDefault();
                                        if (!selectedDate) {
                                            alert("Please select an expedition date.");
                                            return;
                                        }
                                        setBookedDates([...bookedDates, selectedDate]);
                                        setIsSubmitted(true);
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }}>
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-baseline">
                                                <label className="font-mono text-xs text-nomad-paper/50 uppercase tracking-widest">Preferred Date</label>
                                                {selectedDate && <span className="text-accent font-mono text-sm tracking-widest uppercase bg-accent/10 px-2 py-1 border border-accent/20">{format(selectedDate, 'MMM do, yyyy')}</span>}
                                            </div>
                                            <BookingCalendar
                                                selectedDate={selectedDate}
                                                onSelect={setSelectedDate}
                                                disabledDates={bookedDates}
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="font-mono text-xs text-nomad-paper/50 uppercase tracking-widest">Full Name</label>
                                                <input required type="text" placeholder="NAME" className="w-full bg-nomad-black border border-white/10 rounded-sm px-4 py-4 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none font-mono text-xs transition-all" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="font-mono text-xs text-nomad-paper/50 uppercase tracking-widest">Email Address</label>
                                                <input required type="email" placeholder="EMAIL" className="w-full bg-nomad-black border border-white/10 rounded-sm px-4 py-4 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none font-mono text-xs transition-all" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="font-mono text-xs text-nomad-paper/50 uppercase tracking-widest">Notes / Requests</label>
                                            <textarea placeholder="DIETARY RESTRICTIONS, SPECIAL OCCASIONS, ETC." className="w-full bg-nomad-black border border-white/10 rounded-sm px-4 py-4 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none font-mono text-xs h-24 resize-none transition-all"></textarea>
                                        </div>

                                        <div className="pt-2">
                                            <button type="submit" className="btn-primary w-full py-5 text-lg shadow-xl shadow-accent/20 hover:shadow-accent/40 relative overflow-hidden group">
                                                <span className="relative z-10">Request Booking</span>
                                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                            </button>
                                            <p className="text-center text-xs font-mono text-nomad-paper/30 mt-4 uppercase tracking-widest">
                                                Secure Booking // No Charge Until Confirmation
                                            </p>
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <div className="text-center animate-in fade-in zoom-in duration-500">
                                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-accent">
                                        <div className="text-4xl text-accent">✓</div>
                                    </div>
                                    <h3 className="font-heading text-4xl text-white uppercase mb-4">Request Received</h3>
                                    <p className="text-nomad-paper/80 text-lg mb-8 max-w-md mx-auto">
                                        Stand by. Our team is verifying availability for your requested date. You will receive a confirmation email within 2 hours.
                                    </p>
                                    <div className="bg-surface/50 p-6 rounded-sm border border-white/10 mb-8 text-left max-w-xs mx-auto">
                                        <div className="flex justify-between mb-2">
                                            <span className="font-mono text-xs text-nomad-paper/50 uppercase">Trip:</span>
                                            <span className="font-heading text-white uppercase">{missions.find(m => m.id === missionType)?.label}</span>
                                        </div>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-mono text-xs text-nomad-paper/50 uppercase">Guests:</span>
                                            <span className="font-heading text-white">{guestCount}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="font-mono text-xs text-nomad-paper/50 uppercase">Est. Total:</span>
                                            <span className="font-heading text-accent">${currentPrice}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center gap-4">
                                        <button onClick={() => { setIsSubmitted(false); setSelectedDate(null); }} className="btn-outline px-8 py-3 text-sm inline-block">
                                            Book Another Mission
                                        </button>
                                        <Link href="/" className="text-xs font-mono text-nomad-paper/50 hover:text-white transition-colors uppercase tracking-widest inline-block border-b border-transparent hover:border-white pb-1">
                                            Return Home
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-12 bg-black border-t border-white/10 font-mono text-xs text-nomad-paper/40 mt-auto">
                <div className="container mx-auto px-4 text-center">
                    <p className="mb-4">NOMAD YELLOWSTONE // EST. 2026 // ISLAND PARK, ID</p>
                    <div className="flex justify-center gap-6 opacity-50">
                        <Link href="/privacy" className="hover:text-white transition-colors">PRIVACY</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">TERMS</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default function Booking() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-nomad-black flex items-center justify-center text-white">Loading config...</div>}>
            <BookingContent />
        </Suspense>
    );
}
