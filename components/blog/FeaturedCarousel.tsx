'use client';

import Link from 'next/link';
import { BlogPost } from "@/components/blog/blog";
import { GImage } from "@/ui/gimage";
import { useState, useEffect } from 'react';

interface FeaturedCarouselProps {
    posts: BlogPost[];
}

export const FeaturedCarousel = ({ posts }: FeaturedCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    if (!posts || posts.length === 0) return null;

    const currentPost = posts[currentIndex];

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 8000); // 8 seconds per slide

        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % posts.length);
            setIsTransitioning(false);
        }, 300);
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
            setIsTransitioning(false);
        }, 300);
    };

    return (
        <div className="h-full group relative overflow-hidden rounded-3xl bg-background border border-border shadow-2xl isolate">
            {/* Navigation Arrows */}
            {posts.length > 1 && (
                <>
                    <button
                        onClick={(e) => { e.preventDefault(); handlePrev(); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-background/40 border border-border hover:bg-primary hover:border-primary text-foreground transition-all opacity-0 group-hover:opacity-100 backdrop-blur-md"
                        aria-label="Previous article"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={(e) => { e.preventDefault(); handleNext(); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-background/40 border border-border hover:bg-primary hover:border-primary text-foreground transition-all opacity-0 group-hover:opacity-100 backdrop-blur-md"
                        aria-label="Next article"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-6 right-8 z-30 flex gap-2">
                        {posts.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => { e.preventDefault(); setCurrentIndex(idx); }}
                                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-white/30 hover:bg-white/60'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}

            <Link href={`/blog/${currentPost.slug}`} className="block h-full w-full relative">
                {/* Full Background Image with Content Transition */}
                <div className={`absolute inset-0 z-0 transition-opacity duration-500 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
                    {currentPost.image ? (
                        <GImage
                            src={currentPost.image}
                            alt={currentPost.title}
                            fill
                            fit="cover"
                            className="object-cover transition-transform duration-[2000ms] group-hover:scale-105 opacity-80 group-hover:opacity-60"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black" />
                    )}
                    {/* Gradient Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />
                </div>

                {/* Content Overlay */}
                <div className={`relative z-10 h-full flex flex-col justify-end p-8 md:p-12 transition-all duration-500 transform ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
                    }`}>
                    <div className="mb-6">
                        <span className="inline-block px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider bg-primary/80 backdrop-blur-md rounded-md border border-white/10 mb-4">
                            Featured Article
                        </span>

                        <div className="flex items-center gap-3 text-[11px] text-gray-300 font-medium uppercase tracking-wide mb-4">
                            <span>{currentPost.date}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-500" />
                            <span>{currentPost.author || 'Editorial Team'}</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                            {currentPost.title}
                        </h2>

                        <p className="text-gray-300 text-lg max-w-2xl leading-relaxed line-clamp-3 mb-6">
                            {currentPost.description || currentPost.excerpt}
                        </p>

                        <span className="inline-flex items-center text-xs font-bold text-primary uppercase tracking-widest group-hover:text-white transition-colors">
                            Read Article
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};