import Link from 'next/link';
import { PostCard } from './PostCard';
import {BlogPost} from "@/components/blog/blog";

interface CategorySectionProps {
    title: React.ReactNode;
    posts: BlogPost[];
    linkRef?: string;
    color?: string;
}

export const CategorySection = ({ title, posts, linkRef }: CategorySectionProps) => {
    if (!posts || posts.length === 0) return null;

    return (
        <section className="">
            <div className="p-8 border-b border-white/10 bg-white/[0.02] flex justify-between items-end">
                <div>
                    <h2 className="text-foreground mb-1 font-bold">{title}</h2>
                    {typeof title === 'string' && <p className="text-sm text-muted-foreground">Explore the latest in {title}</p>}
                </div>
                {linkRef && (
                    <Link
                        href={linkRef}
                        className="hidden md:flex items-center text-xs font-medium text-hotpink hover:text-foreground transition-colors uppercase tracking-widest"
                    >
                        See all {title}
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {posts.slice(0, 4).map((post, i) => (
                    <div key={post.slug} className={`p-6 border-white/10 border-b lg:border-b-0 ${i < 3 ? 'lg:border-r' : ''} ${i === 1 || i === 3 ? 'md:border-l lg:border-l-0' : ''}`}>
                        <PostCard post={post} compact className="h-full border-0 bg-transparent hover:bg-transparent shadow-none" />
                    </div>
                ))}
            </div>

            {linkRef && (
                <div className="p-4 flex md:hidden justify-center border-t border-white/10">
                    <Link
                        href={linkRef}
                        className="flex items-center text-xs font-medium text-hotpink hover:text-foreground transition-colors uppercase tracking-widest"
                    >
                        See all {title}
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            )}
        </section>
    );
};