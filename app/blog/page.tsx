import { getAllPosts } from '@/lib/blog'
import BlogClientPage from '@/components/blog/BlogClientPage'

export const metadata = {
    title: 'Blog - FastTools',
    description: 'Latest updates, guides, and tools reviews.',
}

export default async function BlogIndex() {
    const posts = await getAllPosts()

    return <BlogClientPage allPosts={posts} />
}
