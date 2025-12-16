'use client';

import { useState, useCallback, useEffect } from 'react';

interface BlogSearchProps {
    onSearch: (query: string) => void;
}

export const BlogSearch = ({ onSearch }: BlogSearchProps) => {
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(query);
        }, 300);
        return () => clearTimeout(timer);
    }, [query]);

    useEffect(() => {
        onSearch(debouncedQuery);
    }, [debouncedQuery, onSearch]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }, []);

    const handleClear = useCallback(() => {
        setQuery('');
        setDebouncedQuery('');
    }, []);

    return (
        <div className="relative w-full max-w-2xl">
            <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-muted-foreground group-focus-within:text-hotpink transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search all articles..."
                    className="block w-full pl-12 pr-24 py-4 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-hotpink/50 focus:border-hotpink transition-all font-sans"
                />
                <div className="absolute inset-y-0 right-2 flex items-center gap-2">
                    {query && (
                        <button
                            onClick={handleClear}
                            className="text-muted-foreground hover:text-foreground transition-colors p-2"
                            aria-label="Clear search"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};