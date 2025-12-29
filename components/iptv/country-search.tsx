'use client';

// Country Search Component

import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Country } from '@/types/iptv';

interface CountrySearchProps {
    countries: Country[];
    onFilter: (filtered: Country[]) => void;
}

export function CountrySearch({ countries, onFilter }: CountrySearchProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (value: string) => {
        setSearchTerm(value);

        if (!value.trim()) {
            onFilter(countries);
            return;
        }

        const filtered = countries.filter(country =>
            country.name.toLowerCase().includes(value.toLowerCase()) ||
            country.code.toLowerCase().includes(value.toLowerCase())
        );

        onFilter(filtered);
    };

    const clearSearch = () => {
        setSearchTerm('');
        onFilter(countries);
    };

    return (
        <div className="relative max-w-md mx-auto">
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                    type="text"
                    placeholder="Search countries..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full pl-12 pr-12 py-3 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
                {searchTerm && (
                    <button
                        onClick={clearSearch}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Clear search"
                    >
                        <X className="h-5 w-5" />
                    </button>
                )}
            </div>
        </div>
    );
}
