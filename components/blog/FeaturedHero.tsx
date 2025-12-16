'use client';

import Link from 'next/link';
import { BlogPost } from "@/components/blog/blog";
import { GImage } from "@/ui/gimage";

interface FeaturedHeroProps {
    post: BlogPost;
}

export const FeaturedHero = ({ post }: FeaturedHeroProps) => {
    return (
        <div className="h-full group relative overflow-hidden rounded-3xl bg-black border border-white/10 shadow-2xl isolate">
            <Link href={`/blog/${post.slug}`} className="block h-full w-full relative">
                {/* Full Background Image */}
                <div className="absolute inset-0 z-0">
                    {post.image ? (
                        <GImage
                            src={post.image}
                            alt={post.title}
                            fill
                            fit="cover"
                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-60"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black" />
                    )}
                    {/* Gradient Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                    <div className="mb-6">
                        <span className="inline-block px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider bg-primary/80 backdrop-blur-md rounded-md border border-white/10 mb-4">
                            Featured Article
                        </span>

                        <div className="flex items-center gap-3 text-[11px] text-gray-300 font-medium uppercase tracking-wide mb-4">
                            <span>{post.date}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-500" />
                            <span>{post.author || 'Editorial Team'}</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                            {post.title}
                        </h2>

                        <p className="text-gray-300 text-lg max-w-2xl leading-relaxed line-clamp-3 mb-6">
                            {post.description || post.excerpt}
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
