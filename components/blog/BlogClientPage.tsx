'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { BlogSearch } from './BlogSearch';
import { FeaturedHero } from './FeaturedHero';
import { LatestPostsList } from './LatestPostsList';
import { PostCard } from './PostCard';
import { CategorySection } from './CategorySection';
import { BlogPost } from "@/components/blog/blog";

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

    // Logic:
    // 1. Featured Post: The very first post marked as featured, or just the first post.
    // 2. Latest Posts: The next 3 posts (excluding the featured one).
    // 3. Categories: Filtered by category (excluding featured/latest if desired, though often duplication is okay or handled by specific logic. Let's exclude to avoid repetition on the home screen if possible, but duplication in categories is standard).

    const featuredPost = allPosts.find(p => p.featured) || allPosts[0];
    // Remaining posts for the "Latest" list (exclude the absolute featured one)
    const otherPosts = allPosts.filter(p => p.slug !== featuredPost.slug);
    const latestPosts = otherPosts.slice(0, 3); // 3 items for the side list

    // Dynamic Category Grouping
    const categories = useMemo(() => {
        const groups: Record<string, BlogPost[]> = {};

        // We want all posts to appear in their respective categories
        // We can either exclude the featured post from here or include it.
        // Usually, for a "Browse by Category" feel, it's good to include everything (even the featured one)
        // or just the non-featured ones. Let's include everything to be safe, or just otherPosts.
        // User requested "auto fetch new category".

        const postsToGroup = allPosts; // Group everything

        postsToGroup.forEach(post => {
            const cat = post.category || 'Uncategorized';
            if (!groups[cat]) {
                groups[cat] = [];
            }
            groups[cat].push(post);
        });

        // If we want specific sort order for categories (e.g. "Developer" first), we can do it here.
        // Otherwise, just alphabetical or insertion order.
        return Object.entries(groups).sort((a, b) => a[0].localeCompare(b[0]));
    }, [allPosts]);

    return (
        <div className="min-h-screen bg-background pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-20 border-b border-white/10 pb-10">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white">
                            Insights <span className="text-white/40 font-light italic">&</span> Updates
                        </h1>
                    </div>
                    <div className="w-full md:w-auto min-w-[320px]">
                        <BlogSearch onSearch={setSearchQuery} />
                    </div>
                </div>

                {/* Content */}
                <div>
                    {isSearching ? (
                        <div className="animate-in fade-in duration-500">
                            <h2 className="text-2xl font-bold mb-8 text-foreground">Search Results ({filteredPosts.length})</h2>
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
                        <div className="space-y-20">

                            {/* Hero Section Grid */}
                            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[600px]">
                                {/* Featured Hero - Spans 2 cols */}
                                <div className="col-span-1 lg:col-span-2 min-h-[500px]">
                                    <FeaturedHero post={featuredPost} />
                                </div>

                                {/* Latest List - Spans 1 col */}
                                <div className="col-span-1 h-full">
                                    <LatestPostsList posts={latestPosts} />
                                </div>
                            </section>

                            {/* Categories */}
                            {/* Categories */}
                            <div className="space-y-20 py-12">
                                {categories.map(([categoryName, posts]) => (
                                    <CategorySection
                                        key={categoryName}
                                        title={categoryName}
                                        posts={posts}
                                    />
                                ))}
                            </div>

                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}