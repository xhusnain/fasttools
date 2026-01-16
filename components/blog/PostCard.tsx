import Link from 'next/link';
import { BlogPost } from "@/components/blog/blog";
import { slugifyCategory } from "@/lib/utils";
import { GImage } from "@/ui/gimage";

interface PostCardProps {
    post: BlogPost;
    className?: string;
    compact?: boolean;
}

export const PostCard = ({ post, className = '', compact = false }: PostCardProps) => {
    return (
        <div
            className={`group flex flex-col h-full overflow-hidden ${className} transition-all duration-300`}
        >
            {/* Image Container */}
            <div className={`relative w-full ${compact ? 'aspect-[3/2]' : 'aspect-video'} overflow-hidden rounded-xl bg-muted border border-border`}>
                <Link href={`/blog/${post.slug}`} className="block w-full h-full">
                    {post.image ? (
                        <GImage
                            src={post.image}
                            alt={post.title}
                            fill
                            fit="cover"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" />
                    )}
                </Link>

                {/* Category Pill - Overlay on Image */}
                <div className="absolute top-4 left-4 z-10" onClick={(e) => e.stopPropagation()}>
                    <Link href={`/blog/category/${slugifyCategory(post.category || 'Uncategorized')}`}>
                        <span className="px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider bg-black/60 backdrop-blur-md rounded-md border border-white/10 hover:bg-black/80 transition-colors">
                            {post.category || 'Article'}
                        </span>
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className={`flex flex-col flex-grow pt-6`}>
                {/* Date */}
                <div className="mb-3">
                    <time className="text-[11px] text-muted-foreground font-medium uppercase tracking-wide" dateTime={post.date}>
                        {post.date}
                    </time>
                </div>

                <Link href={`/blog/${post.slug}`} className="block flex-grow flex flex-col">
                    {/* Title */}
                    <h3 className={`text-foreground font-bold group-hover:text-primary transition-colors leading-tight mb-4 ${compact ? 'text-lg' : 'text-xl'}`}>
                        {post.title}
                    </h3>

                    {/* Read Article Link */}
                    <div className="mt-auto">
                        <span className="text-[11px] font-bold text-primary uppercase tracking-widest group-hover:text-primary/80 transition-colors flex items-center gap-2">
                            Read Article
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
};