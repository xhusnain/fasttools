import Link from 'next/link';
import {GImage} from "@/ui/gimage";
import {BlogPost} from "@/components/blog/blog";

interface FeaturedPostProps {
    post: BlogPost;
}

export const FeaturedPost = ({ post }: FeaturedPostProps) => {
    return (
        <div className="col-span-1 lg:col-span-2 relative group overflow-hidden rounded-3xl bg-white/5 border border-white/10">
            <Link href={`/blog/${post.slug}`} className="block h-full relative">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Background Image */}
                <div className="absolute inset-0 h-full w-full">
                    {post.image ? (
                        <GImage
                            src={post.image}
                            alt={post.title}
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
                        <span className="text-xs font-mono font-medium text-hotpink bg-black/60 backdrop-blur-md px-3 py-1.5 rounded uppercase tracking-wider mb-4 inline-block">
                            Featured Article
                        </span>
                    </div>

                    <h2 className="font-serif text-white mb-6 leading-tight max-w-4xl group-hover:text-gray-200 transition-colors">
                        {post.title}
                    </h2>

                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed line-clamp-3">
                        {post.description || post.excerpt}
                    </p>

                    <div className="flex items-center gap-6 text-sm font-mono text-gray-400 uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <span className="text-white">By {post.author || 'Click Fortify'}</span>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-hotpink" />
                        <time dateTime={post.date}>{post.date}</time>
                    </div>
                </div>
            </Link>
        </div>
    );
};