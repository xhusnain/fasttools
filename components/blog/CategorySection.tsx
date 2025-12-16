import Link from 'next/link';
import { PostCard } from './PostCard';
import { BlogPost } from "@/components/blog/blog";

interface CategorySectionProps {
    title: React.ReactNode;
    posts: BlogPost[];
    linkRef?: string;
    color?: string;
}

export const CategorySection = ({ title, posts, linkRef }: CategorySectionProps) => {
    if (!posts || posts.length === 0) return null;

    return (
        <section className="animate-in fade-in duration-700 slide-in-from-bottom-4">
            <div className="mb-8 flex justify-between items-end">
                <div>
                    <h2 className="text-2xl font-bold text-foreground tracking-tight">{title}</h2>
                </div>
                {linkRef && (
                    <Link
                        href={linkRef}
                        className="btn-ghost text-sm"
                    >
                        See posts
                        <span className="ml-2">→</span>
                    </Link>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {posts.slice(0, 4).map((post) => (
                    <PostCard key={post.slug} post={post} compact className="bg-transparent border-0 shadow-none hover:bg-transparent" />
                ))}
            </div>
        </section>
    );
};