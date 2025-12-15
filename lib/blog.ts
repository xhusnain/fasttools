import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content/blog')

export type BlogPostMetaData = {
    title: string
    date: string
    category?: string
    image?: string
    author?: string
    slug: string
}

export async function getPostBySlug(slug: string) {
    const realSlug = slug.replace(/\.mdx$/, '')
    const filePath = path.join(contentDirectory, `${realSlug}.mdx`)

    if (!fs.existsSync(filePath)) {
        throw new Error(`Post not found: ${filePath}`)
    }

    const fileContent = fs.readFileSync(filePath, 'utf8')

    const { data, content } = matter(fileContent)

    return {
        meta: { ...data, slug: realSlug } as BlogPostMetaData,
        content
    }
}

export async function getAllPosts() {
    if (!fs.existsSync(contentDirectory)) {
        return []
    }

    const files = fs.readdirSync(contentDirectory)

    const posts = files
        .filter((file) => file.endsWith('.mdx'))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx$/, '')
            const fileContent = fs.readFileSync(path.join(contentDirectory, fileName), 'utf8')
            const { data } = matter(fileContent)
            return { ...data, slug } as BlogPostMetaData
        })

    // Sort posts by date, descending
    posts.sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1))

    return posts
}
