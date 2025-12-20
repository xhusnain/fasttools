import { getAllPosts } from '@/components/blog/blog'
import BlogClientPage from '@/components/blog/BlogClientPage'

import { createMetadata } from "@/lib/metadata-base"

export const metadata = createMetadata({
    title: 'Blog',
    description: 'Latest updates, guides, and tools reviews.',
    path: '/blog'
})

export default async function BlogIndex() {
    const posts = await getAllPosts()

    return <BlogClientPage allPosts={posts} />
}
