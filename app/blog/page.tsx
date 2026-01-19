import { getAllPosts } from '@/components/blog/blog'
import BlogClientPage from '@/components/blog/BlogClientPage'

import { Metadata } from 'next';
import { createMetadata } from "@/lib/metadata-base"

export const metadata: Metadata = createMetadata({
    title: 'Blog',
    description: 'Explore the latest updates, in-depth guides, tool reviews, and expert tips on productivity, development, finance, and AI tools from FastTools.',
    path: '/blog',
    breadcrumbs: [
        { label: 'Blog', href: '/blog' }
    ]
})

export default async function BlogIndex() {
    const posts = getAllPosts()

    return <BlogClientPage allPosts={posts} />
}
