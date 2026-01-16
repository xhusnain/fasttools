import { getAllPosts } from '@/components/blog/blog'
import { slugifyCategory } from '@/lib/utils'
import Link from 'next/link'
import { createMetadata } from "@/lib/metadata-base"

export const metadata = createMetadata({
    title: 'Archive - Blog',
    description: 'Browse our complete archive of articles, tutorials, and guides organized by category. Find expert tips on calculators, AI tools, finance, and more.',
    path: '/blog/archive'
})

export default async function ArchivePage() {
    const posts = await getAllPosts()

    // Group posts by Category
    const postsByCategory = posts.reduce((acc, post) => {
        const category = post.category || 'Uncategorized'
        if (!acc[category]) acc[category] = []
        acc[category].push(post)
        return acc
    }, {} as Record<string, typeof posts>)

    // Sort categories alphabetically or by priority (custom logic can be added)
    const categories = Object.keys(postsByCategory).sort()

    return (
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
            {/* Ambient Background Glow */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-6xl mx-auto px-6 pt-40 pb-32">

                {/* Header Section */}
                <div className="mb-24 relative">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-8 group"
                    >
                        <span className="w-5 h-px bg-white/20 group-hover:bg-primary transition-colors"></span>
                        <span className="group-hover:-translate-x-1 transition-transform">Back to Journal</span>
                    </Link>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50">
                        Archive
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        Browse our complete library of articles, organized by topic.
                    </p>
                </div>

                <div className="space-y-32">
                    {categories.map((category) => {
                        const categorySlug = slugifyCategory(category);
                        const topPosts = postsByCategory[category].slice(0, 8); // Limit to top 8

                        return (
                            <section key={category} className="relative group/category">

                                <div className="flex flex-col gap-12">
                                    <div className="flex items-end justify-between border-b border-white/10 pb-6">
                                        <h2 className="text-4xl font-bold text-white tracking-tight">
                                            {category}
                                        </h2>
                                        <Link
                                            href={`/blog/category/${categorySlug}`}
                                            className="text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                                        >
                                            View All
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    </div>

                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        {topPosts.map((post) => (
                                            <Link
                                                key={post.slug}
                                                href={`/blog/${post.slug}`}
                                                className="group/card relative bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-primary/20 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 backdrop-blur-sm flex flex-col h-full"
                                            >
                                                <div className="flex flex-col gap-3 relative z-10 flex-1">
                                                    <time className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                                                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                    </time>

                                                    <h3 className="text-lg font-bold mb-2 group-hover/card:text-primary transition-colors duration-300 leading-snug line-clamp-3">
                                                        {post.title}
                                                    </h3>
                                                </div>

                                                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground group-hover/card:text-foreground transition-colors">
                                                    Read Article
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}
