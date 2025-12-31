'use client';

import Link from 'next/link';
import { Tv, ArrowRight, X } from 'lucide-react';
import { useState } from 'react';

export function AnnouncementBanner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="relative bg-gradient-to-r from-red-600 via-rose-600 to-red-800 text-white overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

            <div className="container mx-auto px-4 py-3 sm:py-2">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left relative z-10">

                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 shadow-sm animate-pulse">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-400"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider">New Service</span>
                    </div>

                    <p className="text-sm font-medium leading-tight">
                        <span className="font-bold">FastTools TV is Live!</span> Stream 11,000+ Premium Channels for FREE.
                    </p>

                    <Link
                        href="/live-tv"
                        className="group flex items-center gap-1 text-sm font-bold bg-white text-red-600 px-4 py-1.5 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        <Tv className="w-4 h-4" />
                        Start Watching
                        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute right-0 sm:relative sm:ml-auto p-1 hover:bg-white/20 rounded-full transition-colors opacity-80 hover:opacity-100"
                        aria-label="Dismiss"
                    >
                        <X className="w-4 h-4" />
                    </button>

                </div>
            </div>
        </div>
    );
}
