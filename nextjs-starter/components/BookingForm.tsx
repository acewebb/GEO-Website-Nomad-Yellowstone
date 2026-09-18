'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays, isBefore, startOfDay } from 'date-fns';

// Compute the next available (bookable) date for 2027 season
function getNextAvailableDate(disabledDates: Date[]): Date {
    const seasonStart2027 = new Date('2027-05-15T00:00:00-06:00');
    let candidate = startOfDay(seasonStart2027);
    for (let i = 0; i < 365; i++) {
        const y = candidate.getFullYear();
        const m = candidate.getMonth();
        const d = candidate.getDate();
        const inSeason = y >= 2027 && (m > 3 || (m === 3 && d >= 15)) && m <= 9;
        const isDisabled = disabledDates.some(dd => isSameDay(dd, candidate));
        if (inSeason && !isDisabled) return candidate;
        candidate = addDays(candidate, 1);
    }
    return seasonStart2027;
}

function BookingCalendar({ selectedDate, onSelect, disabledDates }: { selectedDate: Date | null, onSelect: (d: Date) => void, disabledDates: Date[] }) {
    // Default to May 2027 (start of 2027 season)
    const getInitialMonth = () => {
        return startOfMonth(new Date(2027, 4, 1)); // May 2027
    };

    const [currentMonth, setCurrentMonth] = useState(getInitialMonth());

    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const today = startOfDay(new Date());
    const nextAvailable = getNextAvailableDate(disabledDates);

    const days = [];
    let day = startDate;

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            const cloneDay = day;
            const isSelected = selectedDate ? isSameDay(day, selectedDate) : false;
            const isMockDisabled = disabledDates.some(d => isSameDay(d, day));
            const isPast = isBefore(day, today);

            // Allow only 2027 season dates: May 15, 2027 to Oct 31, 2027
            const year = day.getFullYear();
            const month = day.getMonth(); // 0-indexed, April is 3, May is 4, Oct is 9
            const dayOfMonth = day.getDate();
            const isOutsideSeason = year < 2027 || month < 3 || (month === 3 && dayOfMonth < 15) || month > 9;

            const isDisabled = isPast || isMockDisabled || isOutsideSeason;
            const isNextAvailable = !selectedDate && isSameDay(day, nextAvailable);

            days.push(
                <button
                    key={day.toString()}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => !isDisabled && onSelect(cloneDay)}
                    className={`h-12 md:h-10 w-full rounded-sm flex items-center justify-center font-mono text-sm md:text-sm transition-colors border
                        ${!isSameMonth(day, monthStart) ? 'text-white/20' : ''}
                        ${isDisabled ? 'opacity-20 cursor-not-allowed bg-red-900/30 line-through decoration-red-500/50 border-transparent' : ''}
                        ${isSelected ? 'bg-accent text-white font-bold border-accent' : ''}
                        ${isNextAvailable && !isSelected ? 'border-accent/60 bg-accent/10 text-accent font-bold animate-pulse' : ''}
                        ${!isSelected && !isDisabled && !isNextAvailable ? 'text-white bg-white/5 border-transparent hover:border-accent/50' : ''}
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

function BookingFormInner() {
    const searchParams = useSearchParams();
    const initialObjective = searchParams.get('objective');

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [bookedDates, setBookedDates] = useState<Date[]>([]);
    const [availability, setAvailability] = useState<any>(null);
    const [isLoadingSlots, setIsLoadingSlots] = useState(false);

    const [missionType, setMissionType] = useState('9am');
    const [guestCount, setGuestCount] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (selectedDate) {
            const fetchAvailability = async () => {
                setIsLoadingSlots(true);
                try {
                    const dateStr = format(selectedDate, 'yyyy-MM-dd');
                    const res = await fetch(`/api/v1/availability/${dateStr}`);
                    const data = await res.json();
                    if (data.success) {
                        setAvailability(data.slots);
                    }
                } catch (error) {
                    console.error("Failed to fetch availability", error);
                } finally {
                    setIsLoadingSlots(false);
                }
            };
            fetchAvailability();
        } else {
            setAvailability(null);
        }
    }, [selectedDate]);

    // Pricing Constants (2027 Early Bird 15% Discount)
    const REGULAR_PRICE_PER_PASSENGER = 179;
    const DISCOUNT_PERCENT = 15;
    const PRICE_PER_PASSENGER = 152; // 15% off $179 ($27 savings per passenger)

    const missions = [
        { id: '9am', label: 'Morning Tour', time: '9:00 AM' },
        { id: '12pm', label: 'Mid-Day Tour', time: '12:00 PM' },
        { id: '3pm', label: 'Evening Tour', time: '3:00 PM' },
        { id: '6pm', label: 'Sunset Tour', time: '6:00 PM' }
    ];

    const currentSlotAvailability = availability ? availability[missionType]?.seatsAvailable : 5;
    const maxGuests = currentSlotAvailability !== undefined ? currentSlotAvailability : 5;

    // Constrain guest count if slot availability drops below selection
    useEffect(() => {
        if (guestCount > maxGuests && maxGuests > 0) {
            setGuestCount(maxGuests);
        }
    }, [maxGuests, guestCount]);

    const currentPrice = guestCount * PRICE_PER_PASSENGER;
    const originalPrice = guestCount * REGULAR_PRICE_PER_PASSENGER;
    const totalSavings = originalPrice - currentPrice;

    return (
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left: Mission Parameters */}
            <div className="space-y-10">
                <div>
                    <span className="font-mono text-accent text-xs tracking-widest mb-2 block">// STEP 01: CHOOSE ADVENTURE</span>
                    <h2 className="font-heading text-3xl md:text-4xl text-white uppercase leading-none mb-6">
                        Signature Tour – Guided ATV Adventure
                    </h2>
                </div>

                {/* Mission Selector */}
                <div className="space-y-4">
                    <label className="font-mono text-xs text-nomad-paper/50 uppercase tracking-widest">Select Trip</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {missions.map((mission) => {
                            const seatsLeft = availability ? availability[mission.id]?.seatsAvailable : 5;
                            const isSoldOut = availability && seatsLeft === 0;

                            return (
                                <button
                                    key={mission.id}
                                    onClick={() => !isSoldOut && setMissionType(mission.id)}
                                    disabled={isSoldOut}
                                    className={`glass-panel p-5 md:p-4 text-left border transition-all min-h-[56px] ${isSoldOut ? 'opacity-30 cursor-not-allowed border-white/5' : missionType === mission.id ? 'border-accent bg-accent/5' : 'border-white/10 hover:border-white/30'}`}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <span className={`font-heading text-xl uppercase ${missionType === mission.id && !isSoldOut ? 'text-accent' : 'text-white'}`}>{mission.label}</span>
                                        {missionType === mission.id && !isSoldOut && <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>}
                                    </div>
                                    <div className="flex justify-between items-center mt-2">
                                        <p className="font-mono text-xs tracking-widest">{mission.time}</p>
                                        {selectedDate && (
                                            <span className={`font-mono text-[10px] px-2 py-0.5 rounded-sm ${isSoldOut ? 'bg-red-900/50 text-red-200' : seatsLeft <= 2 ? 'bg-red-900/60 text-red-200 animate-pulse font-bold' : seatsLeft <= 3 ? 'bg-amber-900/50 text-amber-200' : 'bg-white/10 text-nomad-paper/80'}`}>
                                                {isLoadingSlots ? '...' : isSoldOut ? 'SOLD OUT' : seatsLeft <= 2 ? `ONLY ${seatsLeft} LEFT` : `${seatsLeft} SEATS`}
                                            </span>
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Guest Count */}
                <div className="space-y-6 bg-surface/30 p-6 rounded-sm border border-white/5">
                    <div className="flex items-center justify-between">
                        <label className="font-mono text-xs text-nomad-paper/50 uppercase tracking-widest">Group Size</label>
                        <span className="font-heading text-2xl text-white">
                            {`${guestCount} PASSENGER${guestCount > 1 ? 'S' : ''}`}
                        </span>
                    </div>

                    <div className="flex items-center justify-center gap-5">
                        <button
                            type="button"
                            onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                            disabled={guestCount <= 1}
                            className="w-14 h-14 md:w-12 md:h-12 flex items-center justify-center rounded-full border-2 border-white/20 text-white text-2xl font-bold hover:border-accent hover:text-accent active:scale-90 transition-all disabled:opacity-20 disabled:cursor-not-allowed select-none"
                            aria-label="Decrease passenger count"
                        >
                            −
                        </button>
                        <div className="font-heading text-4xl md:text-3xl text-white w-16 text-center tabular-nums">{guestCount}</div>
                        <button
                            type="button"
                            onClick={() => setGuestCount(Math.min(maxGuests || 1, guestCount + 1))}
                            disabled={guestCount >= (maxGuests || 1)}
                            className="w-14 h-14 md:w-12 md:h-12 flex items-center justify-center rounded-full border-2 border-white/20 text-white text-2xl font-bold hover:border-accent hover:text-accent active:scale-90 transition-all disabled:opacity-20 disabled:cursor-not-allowed select-none"
                            aria-label="Increase passenger count"
                        >
                            +
                        </button>
                    </div>
                </div>

                {/* Total Estimator with 15% Discount */}
                <div className="flex justify-between items-end border-t border-white/10 pt-8">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="font-mono text-xs text-nomad-paper/50 uppercase tracking-widest">2027 Early Bird Rate</span>
                            <span className="font-mono text-[10px] text-green-400 bg-green-950/60 border border-green-500/30 px-1.5 py-0.5 rounded font-bold uppercase">15% OFF</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="font-heading text-4xl text-accent">${currentPrice}</span>
                            <span className="font-mono text-sm text-nomad-paper/40 line-through">${originalPrice}</span>
                        </div>
                        <span className="font-mono text-xs text-green-400 block mt-1">You save ${totalSavings} ({guestCount} seat{guestCount > 1 ? 's' : ''})</span>
                    </div>
                    <div className="text-right">
                        <p className="text-accent font-mono text-xs uppercase tracking-widest mb-1">Includes</p>
                        <ul className="text-xs text-nomad-paper/70 text-right space-y-1">
                            <li>Professional Guide</li>
                            <li>Safety Gear</li>
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

                            <form className="space-y-6" onSubmit={async (e) => {
                                e.preventDefault();
                                if (!selectedDate) {
                                    alert("Please select an expedition date.");
                                    return;
                                }

                                const formData = new FormData(e.currentTarget);
                                const name = formData.get('name');
                                const email = formData.get('email');
                                const phone = formData.get('phone');
                                const notes = formData.get('notes');

                                try {
                                    setIsSubmitted(true);
                                    const res = await fetch(`/api/v1/book`, {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify({
                                            name,
                                            email,
                                            phone,
                                            tourId: missionType,
                                            date: format(selectedDate, 'yyyy-MM-dd'),
                                            seats: guestCount,
                                            bookingType: 'individual',
                                            notes
                                        })
                                    });
                                    const data = await res.json();
                                    if (data.success && data.url) {
                                        window.location.href = data.url;
                                    } else {
                                        setIsSubmitted(false);
                                        alert("Booking failed: " + data.message);
                                    }
                                } catch (err) {
                                    setIsSubmitted(false);
                                    console.error(err);
                                    alert("An error occurred connecting to the booking engine.");
                                }
                            }}>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-baseline">
                                        <label className="font-mono text-xs text-nomad-paper/50 uppercase tracking-widest">Preferred Date</label>
                                        {selectedDate && <span className="text-accent font-mono text-sm tracking-widest uppercase bg-accent/10 px-2 py-1 border border-accent/20">{format(selectedDate, 'MMM do, yyyy')}</span>}
                                    </div>
                                    {/* 2027 Early Bird Discount Badge */}
                                    {!selectedDate && (
                                         <div className="flex items-center gap-2 bg-nomad-red/20 border border-nomad-red/40 rounded-sm px-3 py-2">
                                             <span className="inline-block w-2 h-2 bg-nomad-red rounded-full animate-pulse flex-shrink-0" />
                                             <span className="font-mono text-[11px] text-nomad-paper uppercase tracking-widest">
                                                 ★ 2027 Early Bird: <strong>15% Off</strong> Auto-Applied
                                             </span>
                                         </div>
                                     )}
                                    <BookingCalendar
                                        selectedDate={selectedDate}
                                        onSelect={setSelectedDate}
                                        disabledDates={bookedDates}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="font-mono text-xs text-nomad-paper/50 uppercase tracking-widest">Full Name</label>
                                        <input required name="name" type="text" placeholder="NAME" className="w-full bg-nomad-black border border-white/10 rounded-sm px-4 py-4 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none font-mono text-xs transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-mono text-xs text-nomad-paper/50 uppercase tracking-widest">Email Address</label>
                                        <input required name="email" type="email" placeholder="EMAIL" className="w-full bg-nomad-black border border-white/10 rounded-sm px-4 py-4 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none font-mono text-xs transition-all" />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="font-mono text-xs text-nomad-paper/50 uppercase tracking-widest">Phone Number</label>
                                        <input required name="phone" type="tel" placeholder="PHONE NUMBER" className="w-full bg-nomad-black border border-white/10 rounded-sm px-4 py-4 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none font-mono text-xs transition-all" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="font-mono text-xs text-nomad-paper/50 uppercase tracking-widest">Notes / Requests</label>
                                    <textarea name="notes" placeholder="DIETARY RESTRICTIONS, SPECIAL OCCASIONS, ETC." className="w-full bg-nomad-black border border-white/10 rounded-sm px-4 py-4 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none font-mono text-xs h-24 resize-none transition-all"></textarea>
                                </div>

                                <div className="pt-2">
                                    <button type="submit" disabled={isSubmitted} className={`btn-primary w-full py-5 text-lg relative overflow-hidden group ${isSubmitted ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                        <span className="relative z-10">{isSubmitted ? 'Processing...' : 'Proceed to Checkout'}</span>
                                        {!isSubmitted && <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>}
                                    </button>
                                    <p className="text-center text-xs font-mono text-nomad-paper/30 mt-4 uppercase tracking-widest">
                                        ✓ Free cancellation up to 24 hours before departure.<br />
                                        Your card is held but not charged until we confirm your guide.
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
                                Stand by. Our team is verifying availability for your requested date. You will receive a confirmation text with details within 2 hours.
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
                                    Book Another Tour
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
    );
}

export default function BookingForm() {
    return (
        <Suspense fallback={
            <div className="max-w-5xl w-full text-center py-20">
                <div className="inline-block w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
                <p className="font-mono text-xs text-nomad-paper/50 uppercase tracking-widest mt-4">Loading booking form...</p>
            </div>
        }>
            <BookingFormInner />
        </Suspense>
    );
}
