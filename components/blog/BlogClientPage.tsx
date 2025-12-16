'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { BlogSearch } from './BlogSearch';
import { FeaturedCarousel } from './FeaturedCarousel';
import { PostCard } from './PostCard';
import { CategorySection } from './CategorySection';
import {BlogPost} from "@/components/blog/blog";

interface BlogClientPageProps {
    allPosts: BlogPost[];
}

export default function BlogClientPage({ allPosts }: BlogClientPageProps) {
    const [searchQuery, setSearchQuery] = useState('');

    const fuse = useMemo(() => new Fuse(allPosts, {
        keys: [
            { name: 'title', weight: 0.35 },
            { name: 'description', weight: 0.25 },
            { name: 'searchContent', weight: 0.25 },
            { name: 'excerpt', weight: 0.1 },
            { name: 'tags', weight: 0.05 },
        ],
        threshold: 0.4,
        includeScore: true,
        ignoreLocation: true,
        minMatchCharLength: 2,
    }), [allPosts]);

    const filteredPosts = useMemo(() => {
        if (!searchQuery) return allPosts;
        const results = fuse.search(searchQuery);
        return results.map(result => result.item);
    }, [fuse, searchQuery]);

    const isSearching = !!searchQuery;

    const featuredPosts = allPosts.filter(p => p.featured).length > 0
        ? allPosts.filter(p => p.featured).slice(0, 4)
        : allPosts.slice(0, 4);
    const featuredSlugs = new Set(featuredPosts.map(p => p.slug));

    const latestPosts = allPosts.filter(p => !featuredSlugs.has(p.slug)).slice(0, 4);
    const latestSlugs = new Set(latestPosts.map(p => p.slug));

    const excludedSlugs = new Set([...featuredSlugs, ...latestSlugs]);

    const getPostsByCategory = (categoryName: string) =>
        allPosts.filter(p => p.category === categoryName && !excludedSlugs.has(p.slug));

    const fraudPosts = getPostsByCategory('Click Fraud Protection');
    const googleAdsPosts = getPostsByCategory('Google Ads');
    const aiPosts = getPostsByCategory('AI');
    const caseStudyPosts = getPostsByCategory('Case Studies');

    return (
        <div className="min-h-screen bg-backgroundPrimary pt-40 pb-24">
            <div className="max-w-6xl mx-auto border border-white/10 relative">
                <div className="border-b border-white/10 p-8 md:p-12 relative overflow-hidden">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                        <div>
                            <span className="text-xs text-muted-foreground uppercase tracking-widest mb-4 block">
                                The Journal
                            </span>
                            <h1 className="text-foreground tracking-tight">
                                Insights <span className="font-serif italic text-muted-foreground">&</span> Updates
                            </h1>
                        </div>
                        <div className="w-full md:w-auto">
                            <BlogSearch onSearch={setSearchQuery} />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="">
                    {isSearching ? (
                        <div className="p-8">
                            <h2 className="text-foreground mb-8">Search Results ({filteredPosts.length})</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredPosts.map(post => (
                                    <PostCard key={post.slug} post={post} />
                                ))}
                            </div>
                            {filteredPosts.length === 0 && (
                                <p className="text-muted-foreground">No articles found matching your search.</p>
                            )}
                        </div>
                    ) : (
                        <div className="divide-y divide-white/10">

                            {/* Featured Section Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
                                {/* Carousel - Spans 2 cols */}
                                <div className="col-span-1 lg:col-span-2 p-8">
                                    <FeaturedCarousel posts={featuredPosts} />
                                </div>

                                {/* Latest List - Spans 1 col */}
                                <div className="col-span-1 p-8 flex flex-col gap-6 bg-white/[0.02]">
                                    <h3 className="text-foreground mb-2 font-bold">Latest Articles</h3>
                                    <div className="flex flex-col gap-4 h-full">
                                        {latestPosts.map(post => (
                                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-card/50 border border-white/10 rounded-xl p-5 hover:bg-white/5 transition-colors">
                                                <div className="flex flex-col gap-2">
                                                    <span className="text-[10px] text-hotpink uppercase tracking-wider">{post.tags?.[0]}</span>
                                                    <h4 className="text-foreground font-medium group-hover:text-hotpink transition-colors line-clamp-2">
                                                        {post.title}
                                                    </h4>
                                                    <span className="text-xs text-muted-foreground">{post.date}</span>
                                                </div>
                                            </Link>
                                        ))}
                                        <Link href="/blog/archive" className="mt-auto text-center py-4 text-sm text-muted-foreground hover:text-foreground transition-colors border border-white/10 rounded-xl hover:border-white/20 bg-white/[0.02]">
                                            View Archive
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Categories */}
                            <CategorySection title="Click Fraud Protection" posts={fraudPosts} />
                            <CategorySection title="Google Ads" posts={googleAdsPosts} />
                            <CategorySection title={<>AI <span className="font-serif italic">&</span> Machine Learning</>} posts={aiPosts} />
                            <CategorySection title={<>Case Studies <span className="font-serif italic">&</span> Reports</>} posts={caseStudyPosts} />

                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}