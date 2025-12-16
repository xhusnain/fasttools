'use client';

import { useState } from 'react';
import Link from 'next/link';
import {BlogPost} from "@/components/blog/blog";
import {GImage} from "@/ui/gimage";

interface FeaturedCarouselProps {
    posts: BlogPost[];
}

export const FeaturedCarousel = ({ posts }: FeaturedCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const featuredPosts = posts.slice(0, 4); // Max 4 featured posts

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? featuredPosts.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === featuredPosts.length - 1 ? 0 : prev + 1));
    };

    const currentPost = featuredPosts[currentIndex];

    if (!currentPost) return null;

    return (
        <div className="col-span-1 lg:col-span-2 relative group overflow-hidden rounded-3xl bg-white/5 border border-white/10">
            <Link href={`/blog/${currentPost.slug}`} className="block h-full relative min-h-[500px] lg:min-h-[600px]">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute inset-0 h-full w-full">
                    {currentPost.image ? (
                        <GImage
                            src={currentPost.image}
                            alt={currentPost.title}
                            fill
                            fit="cover"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" />
                    )}
                </div>

                {/* Content Overlay */}
                <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-12 lg:p-16">
                    <div className="mb-6">
                        <span className="text-xs font-medium text-hotpink bg-black/60 backdrop-blur-md px-3 py-1.5 rounded uppercase tracking-wider mb-4 inline-block">
                            Featured Article
                        </span>
                    </div>

                    <h2 className="text-white mb-6 leading-tight max-w-3xl group-hover:text-gray-200 transition-colors">
                        {currentPost.title}
                    </h2>

                    <p className="text-gray-300 text-base md:text-lg max-w-2xl mb-8 leading-relaxed line-clamp-3">
                        {currentPost.description || currentPost.excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-gray-400 uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <span className="text-white">By {currentPost.author || 'Click Fortify'}</span>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-hotpink" />
                        <time dateTime={currentPost.date}>{currentPost.date}</time>
                    </div>
                </div>
            </Link>

            {/* Navigation Arrows */}
            {featuredPosts.length > 1 && (
                <>
                    <button
                        onClick={(e) => { e.preventDefault(); goToPrev(); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-hotpink/80 hover:border-hotpink transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Previous article"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={(e) => { e.preventDefault(); goToNext(); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-hotpink/80 hover:border-hotpink transition-all opacity-0 group-hover:opacity-100"
                        aria-label="Next article"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </>
            )}

            {/* Pagination Dots */}
            {featuredPosts.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
                    {featuredPosts.map((_, index) => (
                        <button
                            key={index}
                            onClick={(e) => { e.preventDefault(); setCurrentIndex(index); }}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex
                                ? 'bg-hotpink w-8'
                                : 'bg-white/40 hover:bg-white/60'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};