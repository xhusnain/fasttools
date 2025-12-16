'use client';

import Link from 'next/link';
import { BlogPost } from "@/components/blog/blog";

interface LatestPostsListProps {
    posts: BlogPost[];
}

export const LatestPostsList = ({ posts }: LatestPostsListProps) => {
    return (
        <div className="h-full flex flex-col justify-center max-w-sm">
            <div className="mb-10 pl-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                    Latest Articles
                </h3>
            </div>

            <div className="flex flex-col gap-10">
                {posts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group block pl-4 border-l-2 border-white/10 hover:border-primary transition-colors py-1">
                        <article className="flex flex-col gap-2">
                            {/* Category Pill */}
                            <span className="text-[10px] font-bold text-primary uppercase tracking-wider">
                                {post.category || 'Article'}
                            </span>

                            <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors leading-snug line-clamp-2">
                                {post.title}
                            </h3>

                            <time dateTime={post.date} className="text-[11px] text-muted-foreground font-medium uppercase tracking-wide">
                                {post.date}
                            </time>
                        </article>
                    </Link>
                ))}
            </div>

            <div className="mt-10 pl-4">
                <Link
                    href="/blog/archive"
                    className="text-sm font-bold text-white hover:text-primary transition-colors uppercase tracking-wider"
                >
                    View Archive
                </Link>
            </div>
        </div>
    );
};
