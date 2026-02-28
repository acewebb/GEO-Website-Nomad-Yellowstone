'use client';
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
    const [apiKey, setApiKey] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [bookings, setBookings] = useState<any[]>([]);

    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const res = await fetch('/api/v1/admin/bookings', {
                headers: {
                    'x-admin-key': apiKey
                }
            });

            const data = await res.json();

            if (data.success) {
                setIsAuthenticated(true);
                setBookings(data.data.sort((a: any, b: any) => new Date(b.createdAt?._seconds * 1000).getTime() - new Date(a.createdAt?._seconds * 1000).getTime()));
            } else {
                setError(data.message || 'Authentication failed');
            }
        } catch (err) {
            setError('Failed to connect to server');
        } finally {
            setIsLoading(false);
        }
    };

    const fetchBookings = async () => {
        try {
            const res = await fetch('/api/v1/admin/bookings', {
                headers: {
                    'x-admin-key': apiKey
                }
            });
            const data = await res.json();
            if (data.success) {
                setBookings(data.data.sort((a: any, b: any) => new Date(b.createdAt?._seconds * 1000).getTime() - new Date(a.createdAt?._seconds * 1000).getTime()));
            }
        } catch (err) {
            console.error("Failed to refresh bookings");
        }
    };


    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-nomad-black flex flex-col items-center justify-center font-body px-4">
                <div className="glass-panel p-8 md:p-12 max-w-md w-full border border-white/10 rounded-sm">
                    <div className="mb-8 text-center">
                        <h1 className="font-heading text-3xl uppercase text-white tracking-widest mb-2">Command Center</h1>
                        <p className="font-mono text-xs text-nomad-paper/50 tracking-widest uppercase">Authorized Personnel Only</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        {error && (
                            <div className="p-3 bg-red-900/20 border border-red-500/30 text-red-400 text-xs font-mono text-center">
                                {error}
                            </div>
                        )}
                        <div className="space-y-2">
                            <label className="font-mono text-xs text-nomad-paper/50 uppercase tracking-widest block">Access Key</label>
                            <input
                                type="password"
                                value={apiKey}
                                onChange={(e) => setApiKey(e.target.value)}
                                placeholder="ENTER KEY"
                                className="w-full bg-nomad-black border border-white/10 rounded-sm px-4 py-4 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none font-mono text-xs transition-all text-center tracking-[0.5em]"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full py-4 text-sm font-heading uppercase tracking-widest border transition-all ${isLoading ? 'border-white/10 text-white/50 cursor-not-allowed' : 'border-accent text-accent hover:bg-accent/10'}`}
                        >
                            {isLoading ? 'Verifying...' : 'Initialize'}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <Link href="/" className="font-mono text-[10px] text-nomad-paper/30 hover:text-white uppercase tracking-widest transition-colors">
                            Return to Basecamp
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-nomad-black font-body text-white selection:bg-accent selection:text-white pb-20">
            {/* Admin Header */}
            <header className="p-4 md:p-6 border-b border-white/5 glass-panel sticky top-0 z-50 bg-nomad-black/80 backdrop-blur-md">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-xl font-heading tracking-widest text-white hover:text-accent transition-colors uppercase">
                            Nomad<span className="text-accent">/</span>Admin
                        </Link>
                        <span className="font-mono text-xs bg-accent/20 text-accent px-2 py-1 rounded-[2px] border border-accent/30 hidden md:inline-block">LIVE COMMAND</span>
                    </div>
                    <div className="flex items-center gap-4 border-t md:border-t-0 border-white/10 pt-4 md:pt-0 w-full md:w-auto justify-between md:justify-end">
                        <div className="font-mono text-xs text-nomad-paper/50 uppercase tracking-widest">
                            {bookings.length} {bookings.length === 1 ? 'Record' : 'Records'} Found
                        </div>
                        <div className="flex items-center gap-4">
                            <button onClick={fetchBookings} className="font-mono text-xs text-nomad-paper hover:text-white transition-colors uppercase flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                                Sync
                            </button>
                            <button onClick={() => { setIsAuthenticated(false); setApiKey(''); }} className="font-mono text-xs text-red-400 hover:text-red-300 transition-colors uppercase border border-red-900/50 px-3 py-1 hover:bg-red-900/20">
                                Terminate
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="font-heading text-4xl uppercase text-white mb-2">Booking Reports</h2>
                        <p className="font-mono text-xs text-nomad-paper/60 tracking-widest uppercase">Master Ledger of all secure transactions and mission manifests.</p>
                    </div>
                </div>

                {/* Dashboard Ledger */}
                <div className="bg-surface/30 border border-white/5 rounded-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 bg-black/40 font-mono text-xs text-nomad-paper/50 uppercase tracking-widest">
                                    <th className="p-4 font-normal">Mission Date</th>
                                    <th className="p-4 font-normal">Deploy Time</th>
                                    <th className="p-4 font-normal">Passenger</th>
                                    <th className="p-4 font-normal">Seats</th>
                                    <th className="p-4 font-normal">Status</th>
                                    <th className="p-4 font-normal">Created On</th>
                                </tr>
                            </thead>
                            <tbody className="font-mono text-sm divide-y divide-white/5">
                                {bookings.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="p-12 text-center text-nomad-paper/30 italic">No records found.</td>
                                    </tr>
                                ) : bookings.map((booking) => {
                                    const createdDate = booking.createdAt
                                        ? format(new Date(booking.createdAt._seconds * 1000), 'MMM d, yyyy HH:mm')
                                        : 'Unknown';

                                    const timeLabel = booking.tourId === '9am' ? '0900 HRS' : booking.tourId === '1pm' ? '1300 HRS' : '1700 HRS';
                                    const isPaid = booking.paymentStatus === 'paid';

                                    return (
                                        <tr key={booking.id} className="hover:bg-white/[0.02] transition-colors group">
                                            <td className="p-4 text-white group-hover:text-accent transition-colors">{booking.date}</td>
                                            <td className="p-4 text-nomad-paper/80">{timeLabel}</td>
                                            <td className="p-4">
                                                <div className="text-white">{booking.name}</div>
                                                <div className="text-[10px] text-nomad-paper/50 mt-1 uppercase">{booking.email}</div>
                                                {booking.phone && <div className="text-[10px] text-accent/70 mt-0.5 tracking-wider font-mono">{booking.phone}</div>}
                                            </td>
                                            <td className="p-4">
                                                <span className={`inline-block px-2 py-0.5 rounded-sm ${booking.bookingType === 'private' ? 'bg-accent/10 border border-accent/30 text-accent text-xs' : 'text-nomad-paper'}`}>
                                                    {booking.bookingType === 'private' ? 'PRIVATE' : booking.seats}
                                                </span>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-2">
                                                    <span className={`w-2 h-2 rounded-full ${isPaid ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 'bg-red-500/50'}`}></span>
                                                    <span className={`text-xs uppercase tracking-widest ${isPaid ? 'text-green-400' : 'text-red-400/70'}`}>
                                                        {isPaid ? 'CONFIRMED' : booking.status}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-xs text-nomad-paper/40 tracking-widest">{createdDate}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

            </main>
        </div>
    );
}
