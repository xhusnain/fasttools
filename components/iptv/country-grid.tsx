'use client';

// Country Grid Component

import { Country } from '@/types/iptv';
import Link from 'next/link';
import { Tv } from 'lucide-react';

interface CountryGridProps {
    countries: Country[];
}

export function CountryGrid({ countries }: CountryGridProps) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {countries.map((country) => (
                <Link
                    key={country.code}
                    href={`/live-tv/${country.code}`}
                    className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                >
                    <div className="flex flex-col items-center gap-3 text-center">
                        {/* Flag */}
                        <div className="text-5xl transition-transform duration-300 group-hover:scale-110">
                            {country.flag}
                        </div>

                        {/* Country Name */}
                        <div className="space-y-1">
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                {country.name}
                            </h3>

                            {/* Channel Count */}
                            <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                                <Tv className="h-3.5 w-3.5" />
                                <span>{country.channelCount} {country.channelCount === 1 ? 'channel' : 'channels'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Hover Gradient Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Link>
            ))}
        </div>
    );
}
