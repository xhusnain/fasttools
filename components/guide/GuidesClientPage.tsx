'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { BlogSearch } from '@/components/blog/BlogSearch';
import { Guide } from "@/components/guide/guide";
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard";
import { ArrowRight, BookOpen, Code, Sparkles, Clock, Target } from "lucide-react";

interface GuidesClientPageProps {
    allGuides: Guide[];
}

function GuideCard({ guide }: { guide: Guide }) {
    const difficultyColors = {
        'Beginner': 'bg-green-500/10 text-green-500 border-green-500/20',
        'Intermediate': 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
        'Advanced': 'bg-red-500/10 text-red-500 border-red-500/20',
    };

    return (
        <Link href={`/guides/${guide.slug}`} className="group block h-full">
            <GCard className="h-full border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 bg-card">
                <GCardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${difficultyColors[guide.difficulty || 'Beginner']}`}>
                            {guide.difficulty || 'Beginner'}
                        </span>
                        {guide.category && (
                            <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                                {guide.category}
                            </span>
                        )}
                    </div>
                    <GCardTitle className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2">
                        {guide.title}
                    </GCardTitle>
                    <GCardDescription className="text-sm text-muted-foreground line-clamp-2 mt-2">
                        {guide.description}
                    </GCardDescription>
                </GCardHeader>
                <GCardContent className="pt-0">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                                <Clock className="h-3.5 w-3.5" />
                                {guide.readingTime}
                            </span>
                        </div>
                        <span className="flex items-center gap-1 text-primary font-semibold group-hover:gap-2 transition-all">
                            Read Guide
                            <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                    </div>
                </GCardContent>
            </GCard>
        </Link>
    );
}

export default function GuidesClientPage({ allGuides }: GuidesClientPageProps) {
    const [searchQuery, setSearchQuery] = useState('');

    const fuse = useMemo(() => new Fuse(allGuides, {
        keys: [
            { name: 'title', weight: 0.35 },
            { name: 'description', weight: 0.25 },
            { name: 'searchContent', weight: 0.25 },
            { name: 'category', weight: 0.1 },
            { name: 'tags', weight: 0.05 },
        ],
        threshold: 0.4,
        includeScore: true,
        ignoreLocation: true,
        minMatchCharLength: 2,
    }), [allGuides]);

    const filteredGuides = useMemo(() => {
        if (!searchQuery) return allGuides;
        const results = fuse.search(searchQuery);
        return results.map(result => result.item);
    }, [fuse, searchQuery, allGuides]);

    const isSearching = !!searchQuery;

    const categories = useMemo(() => {
        const groups: Record<string, Guide[]> = {};
        allGuides.forEach(guide => {
            const cat = guide.category || 'General';
            if (!groups[cat]) {
                groups[cat] = [];
            }
            groups[cat].push(guide);
        });
        return Object.entries(groups).sort((a, b) => a[0].localeCompare(b[0]));
    }, [allGuides]);

    return (
        <div className="min-h-screen bg-background pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
                        <Sparkles className="h-4 w-4" />
                        LEARN & EARN
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6">
                        Learn How to Build Tools <span className="text-primary">&amp; Earn Online</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
                        FastTools empowers you to become a creator! Follow our step-by-step guides to build professional online tools,
                        monetize your skills, and start your journey as a tool developer.
                    </p>
                    <div className="w-full max-w-md mx-auto">
                        <BlogSearch onSearch={setSearchQuery} />
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="p-6 rounded-xl bg-card border border-border text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                            <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-3xl font-bold text-foreground mb-1">{allGuides.length}</div>
                        <div className="text-sm text-muted-foreground">Detailed Guides</div>
                    </div>
                    <div className="p-6 rounded-xl bg-card border border-border text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-500/10 mb-4">
                            <Code className="h-6 w-6 text-green-500" />
                        </div>
                        <div className="text-3xl font-bold text-foreground mb-1">{categories.length}</div>
                        <div className="text-sm text-muted-foreground">Tool Categories</div>
                    </div>
                    <div className="p-6 rounded-xl bg-card border border-border text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-yellow-500/10 mb-4">
                            <Target className="h-6 w-6 text-yellow-500" />
                        </div>
                        <div className="text-3xl font-bold text-foreground mb-1">Free</div>
                        <div className="text-sm text-muted-foreground">Full Access</div>
                    </div>
                </div>

                {/* Content */}
                <div>
                    {isSearching ? (
                        <div className="animate-in fade-in duration-500">
                            <h2 className="text-2xl font-bold mb-8 text-foreground">Search Results ({filteredGuides.length})</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredGuides.map(guide => (
                                    <GuideCard key={guide.slug} guide={guide} />
                                ))}
                            </div>
                            {filteredGuides.length === 0 && (
                                <p className="text-muted-foreground text-center py-12">No guides found matching your search.</p>
                            )}
                        </div>
                    ) : (
                        <div className="space-y-16">
                            {categories.map(([categoryName, guides]) => (
                                <section key={categoryName}>
                                    <div className="flex items-center gap-3 mb-8">
                                        <h2 className="text-2xl font-bold text-foreground">{categoryName}</h2>
                                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                                            {guides.length} guide{guides.length !== 1 ? 's' : ''}
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {guides.map(guide => (
                                            <GuideCard key={guide.slug} guide={guide} />
                                        ))}
                                    </div>
                                </section>
                            ))}

                            {allGuides.length === 0 && (
                                <div className="text-center py-20">
                                    <BookOpen className="h-16 w-16 text-muted-foreground/50 mx-auto mb-6" />
                                    <h3 className="text-xl font-semibold text-foreground mb-2">Guides Coming Soon!</h3>
                                    <p className="text-muted-foreground">We&apos;re working on detailed guides to help you build amazing tools.</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
