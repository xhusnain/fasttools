import Link from 'next/link';
import {BlogPost} from "@/components/blog/blog";
import {GImage} from "@/ui/gimage";

interface PostCardProps {
    post: BlogPost;
    className?: string;
    compact?: boolean;
}

export const PostCard = ({ post, className = '', compact = false }: PostCardProps) => {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className={`group flex flex-col h-full overflow-hidden ${className ? className : 'bg-card border border-white/10 rounded-2xl hover:bg-white/5'} transition-all duration-300`}
        >
            {/* Image Container */}
            <div className={`relative w-full ${compact ? 'aspect-[3/2]' : 'aspect-video'} overflow-hidden rounded-xl bg-white/5`}>
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
                <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-medium text-white bg-black/60 backdrop-blur-md px-2 py-1 rounded uppercase tracking-wider">
                        {post.tags?.[0] || 'Article'}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className={`flex flex-col flex-grow ${compact ? 'pt-4' : 'p-6'}`}>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 uppercase tracking-wide">
                    <time dateTime={post.date}>{post.date}</time>
                </div>

                <h3 className={`text-foreground mb-2 group-hover:text-hotpink transition-colors line-clamp-2 ${compact ? 'text-lg font-bold' : 'text-xl font-bold'}`}>
                    {post.title}
                </h3>

                {!compact && (
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 line-clamp-2 flex-grow">
                        {post.description || post.excerpt}
                    </p>
                )}

                <div className="mt-auto flex items-center text-hotpink text-xs font-bold uppercase tracking-widest group/btn pt-2">
                    <span className="group-hover:translate-x-1 transition-transform">Read Article</span>
                </div>
            </div>
        </Link>
    );
};