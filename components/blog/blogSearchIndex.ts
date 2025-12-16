import { getAllPosts, BlogPost } from './blog'

export interface BlogSearchIndexItem {
    slug: string
    title: string
    description: string
    excerpt?: string
    tags?: string[]
    keywords?: string[]
    featured?: boolean
    // Provide a truncated body field to improve matches (optional)
    body?: string
}

export function buildBlogSearchIndex(): BlogSearchIndexItem[] {
    const posts: BlogPost[] = getAllPosts()
    return posts.map((p) => ({
        slug: p.slug,
        title: p.title,
        description: p.description,
        excerpt: p.excerpt,
        tags: p.tags,
        keywords: p.keywords,
        featured: p.featured,
        body: [p.title, p.description, p.excerpt].join(' ')
    }))
}

export function getSerializableBlogSearchIndex() {
    return buildBlogSearchIndex()
}
