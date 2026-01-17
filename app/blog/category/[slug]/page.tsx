import { getAllPosts } from '@/components/blog/blog'
import Link from 'next/link'
import { Metadata } from 'next'
import { createMetadata } from '@/lib/metadata-base'
import { notFound } from 'next/navigation'
import { slugifyCategory } from '@/lib/utils'

export async function generateStaticParams() {
    const posts = getAllPosts()
    const categories = Array.from(new Set(posts.map(post =>
        post.category?.toLowerCase() || 'uncategorized'
    )))

    return categories.map((slug) => ({
        slug: slugifyCategory(slug),
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const posts = getAllPosts()

    // Find the original category name to use proper casing (e.g. "SEO & Marketing" instead of "Seo And Marketing")
    const originalCategory = Array.from(new Set(posts.map(p => p.category)))
        .find(cat => cat && slugifyCategory(cat) === slug)

    const categoryName = originalCategory || slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

    return createMetadata({
        title: `${categoryName} Articles - Blog`,
        description: `Browse all articles in the ${categoryName} category.`,
        path: `/blog/category/${slug}`,
    })
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const posts = getAllPosts()

    // Find the original category name by matching the slug
    // This allows us to handle "SEO & Marketing" -> "seo-and-marketing" correctly
    const originalCategory = Array.from(new Set(posts.map(p => p.category)))
        .find(cat => cat && slugifyCategory(cat) === slug)

    if (!originalCategory) {
        notFound()
    }

    const categoryPosts = posts.filter(post =>
        post.category === originalCategory
    )

    if (categoryPosts.length === 0) {
        notFound()
    }

    const displayCategoryName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

    return (
        <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20 selection:text-primary">
            {/* Ambient Background Glow */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-5xl mx-auto px-6 pt-40 pb-32">

                {/* Header Section */}
                <div className="mb-24 relative">
                    <Link
                        href="/blog/archive"
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-8 group"
                    >
                        <span className="w-5 h-px bg-white/20 group-hover:bg-primary transition-colors"></span>
                        <span className="group-hover:-translate-x-1 transition-transform">Back to Archive</span>
                    </Link>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/50">
                        {displayCategoryName}
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                        Explore our collection of {categoryPosts.length} articles focused on {displayCategoryName}.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryPosts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group relative bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-primary/20 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 backdrop-blur-sm flex flex-col justify-between"
                        >
                            <div className="flex flex-col gap-4 relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-2 py-1 rounded-md bg-primary/10 text-[10px] font-bold text-primary uppercase tracking-wider border border-primary/10">
                                        {post.category}
                                    </span>
                                    <time className="text-xs font-mono text-muted-foreground">
                                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </time>
                                </div>

                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                                    {post.title}
                                </h3>
                                {post.description && (
                                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 group-hover:text-foreground/80 transition-colors">
                                        {post.description}
                                    </p>
                                )}
                            </div>

                            <div className="mt-8 flex items-center text-xs font-mono uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                                Read Article
                                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    )
}
