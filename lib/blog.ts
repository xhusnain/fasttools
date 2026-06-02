import fs from "fs"
import path from "path"
import type { Metadata } from "next"
import matter from "gray-matter"
import readingTime from "reading-time"
import { marked } from "marked"

import { cleanContentForSearch } from "@/lib/text-utils"
import { createBreadcrumbSchema, createMetadata, getCanonicalUrl } from "@/lib/metadata-base"

const BASE_URL = "https://www.fasttools.store"
const SITE_NAME = "FastTools"
const BLOG_CONTENT_DIR = path.join(process.cwd(), "content", "blog")
const DEFAULT_AUTHOR = "FastTools Team"
const DEFAULT_CATEGORY = "Guides"
const DEFAULT_IMAGE = "/images/text-encryption-hero.png"

export interface BlogTocItem {
    level: number
    text: string
    id: string
}

export interface BlogPost {
    slug: string
    title: string
    description: string
    publishedAt: string
    updatedAt: string
    author: string
    category: string
    tags: string[]
    image: string
    imageAlt: string
    featured: boolean
    draft: boolean
    canonicalPath: string
    content: string
    html: string
    toc: BlogTocItem[]
    excerpt: string
    readingTime: {
        text: string
        minutes: number
        time: number
        words: number
    }
    searchContent: string
}

type BlogMatter = Record<string, unknown>

export function getBlogSlugs(): string[] {
    if (!fs.existsSync(BLOG_CONTENT_DIR)) {
        return []
    }

    return fs
        .readdirSync(BLOG_CONTENT_DIR)
        .filter((fileName) => /\.(md|mdx)$/.test(fileName))
        .map((fileName) => fileName.replace(/\.(md|mdx)$/, ""))
}

export function getAllBlogPosts({ includeDrafts = false } = {}): BlogPost[] {
    return getBlogSlugs()
        .map((slug) => getBlogPost(slug, { includeDrafts }))
        .filter((post): post is BlogPost => Boolean(post))
        .sort((a, b) => {
            const aTime = new Date(a.publishedAt).getTime()
            const bTime = new Date(b.publishedAt).getTime()

            if (Number.isNaN(aTime) || Number.isNaN(bTime)) {
                return a.title.localeCompare(b.title)
            }

            return bTime - aTime
        })
}

export function getBlogPost(slug: string, { includeDrafts = false } = {}): BlogPost | null {
    const file = getBlogFile(slug)

    if (!file) {
        return null
    }

    const { data, content } = matter(file.raw)
    const frontmatter = normalizeFrontmatter(data, slug, content)

    if (frontmatter.draft && !includeDrafts) {
        return null
    }

    const prepared = prepareMarkdownContent(content)
    const html = sanitizeRenderedHtml(
        marked.parse(prepared.content, {
            async: false,
            gfm: true,
            breaks: false,
        }) as string
    )
    const readingTimeResult = readingTime(content)

    return {
        ...frontmatter,
        content,
        html,
        toc: prepared.toc,
        readingTime: readingTimeResult,
        searchContent: cleanContentForSearch(content),
    }
}

export function getRelatedBlogPosts(post: BlogPost, limit = 3): BlogPost[] {
    return getAllBlogPosts()
        .filter((candidate) => candidate.slug !== post.slug)
        .map((candidate) => {
            const sharedTags = candidate.tags.filter((tag) => post.tags.includes(tag)).length
            const categoryScore = candidate.category === post.category ? 2 : 0

            return {
                post: candidate,
                score: sharedTags + categoryScore,
            }
        })
        .sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score
            }

            return new Date(b.post.publishedAt).getTime() - new Date(a.post.publishedAt).getTime()
        })
        .slice(0, limit)
        .map((item) => item.post)
}

export function getBlogSitemapPages() {
    return getAllBlogPosts().map((post) => ({
        url: getCanonicalUrl(post.canonicalPath),
        lastModified: new Date(post.updatedAt || post.publishedAt),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }))
}

export function createBlogMetadata(post: BlogPost): Metadata {
    const baseMetadata = createMetadata({
        title: post.title,
        description: post.description,
        path: post.canonicalPath,
        ogImage: {
            url: post.image,
            width: 1200,
            height: 630,
            alt: post.imageAlt,
        },
        ogImageAlt: post.imageAlt,
        includeSchema: false,
    })

    return {
        ...baseMetadata,
        authors: [{ name: post.author }],
        openGraph: {
            ...baseMetadata.openGraph,
            type: "article",
            publishedTime: toDateTime(post.publishedAt),
            modifiedTime: toDateTime(post.updatedAt),
            authors: [post.author],
            section: post.category,
            tags: post.tags,
        },
    }
}

export function createBlogIndexSchemas(posts: BlogPost[]) {
    const blogUrl = getCanonicalUrl("/blog")

    return [
        {
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": `${blogUrl}#blog`,
            name: "FastTools Blog",
            description: "Practical guides for online tools, SEO, privacy, calculators, converters, and browser-based workflows.",
            url: blogUrl,
            inLanguage: "en-US",
            publisher: createPublisherSchema(),
            blogPost: posts.slice(0, 10).map((post) => ({
                "@type": "BlogPosting",
                headline: post.title,
                url: getCanonicalUrl(post.canonicalPath),
                datePublished: post.publishedAt,
                dateModified: post.updatedAt,
                author: createAuthorSchema(post.author),
            })),
        },
        {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "FastTools Blog Posts",
            itemListElement: posts.map((post, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: post.title,
                url: getCanonicalUrl(post.canonicalPath),
            })),
        },
    ]
}

export function createBlogPostSchemas(post: BlogPost) {
    const canonicalUrl = getCanonicalUrl(post.canonicalPath)

    return [
        createBreadcrumbSchema(
            [
                { label: "Blog", href: "/blog" },
                { label: post.title, href: post.canonicalPath },
            ],
            post.canonicalPath
        ),
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": `${canonicalUrl}#article`,
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": canonicalUrl,
            },
            headline: post.title,
            description: post.description,
            image: [absoluteUrl(post.image)],
            datePublished: toDateTime(post.publishedAt),
            dateModified: toDateTime(post.updatedAt),
            author: createAuthorSchema(post.author),
            publisher: createPublisherSchema(),
            articleSection: post.category,
            keywords: post.tags.join(", "),
            wordCount: post.readingTime.words,
            timeRequired: `PT${Math.max(1, Math.ceil(post.readingTime.minutes))}M`,
            inLanguage: "en-US",
            isAccessibleForFree: true,
        },
    ]
}

export function formatBlogDate(date: string): string {
    return new Intl.DateTimeFormat("en", {
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(new Date(date))
}

function getBlogFile(slug: string): { raw: string } | null {
    const cleanSlug = slug.replace(/\.(md|mdx)$/, "")
    const mdPath = path.join(BLOG_CONTENT_DIR, `${cleanSlug}.md`)
    const mdxPath = path.join(BLOG_CONTENT_DIR, `${cleanSlug}.mdx`)
    const fullPath = fs.existsSync(mdPath) ? mdPath : fs.existsSync(mdxPath) ? mdxPath : null

    if (!fullPath) {
        return null
    }

    return {
        raw: fs.readFileSync(fullPath, "utf8"),
    }
}

function normalizeFrontmatter(data: BlogMatter, slug: string, content: string) {
    const title = asString(data.title) || titleFromSlug(slug)
    const description = asString(data.description) || cleanContentForSearch(content, 155)
    const publishedAt = asDate(data.publishedAt || data.date)
    const updatedAt = asDate(data.updatedAt || data.modifiedAt || publishedAt)
    const author = asString(data.author) || DEFAULT_AUTHOR
    const category = asString(data.category) || DEFAULT_CATEGORY
    const tags = asStringArray(data.tags)
    const image = asString(data.image) || DEFAULT_IMAGE
    const imageAlt = asString(data.imageAlt) || title
    const excerpt = asString(data.excerpt) || cleanContentForSearch(content, 220)

    return {
        slug,
        title,
        description,
        publishedAt,
        updatedAt,
        author,
        category,
        tags,
        image,
        imageAlt,
        featured: Boolean(data.featured),
        draft: Boolean(data.draft),
        canonicalPath: `/blog/${slug}`,
        excerpt,
    }
}

function prepareMarkdownContent(content: string): { content: string; toc: BlogTocItem[] } {
    const usedIds = new Map<string, number>()
    const toc: BlogTocItem[] = []

    const lines = content.split("\n").map((line) => {
        const match = /^(#{2,3})\s+(.+?)\s*$/.exec(line)

        if (!match) {
            return line
        }

        const level = match[1].length
        const text = stripInlineMarkdown(match[2])
        const id = createUniqueHeadingId(text, usedIds)

        toc.push({ level, text, id })

        return `<h${level} id="${escapeHtml(id)}">${escapeHtml(text)}</h${level}>`
    })

    return {
        content: lines.join("\n"),
        toc,
    }
}

function createUniqueHeadingId(text: string, usedIds: Map<string, number>): string {
    const baseId = slugifyHeading(text) || "section"
    const count = usedIds.get(baseId) || 0
    usedIds.set(baseId, count + 1)

    return count === 0 ? baseId : `${baseId}-${count + 1}`
}

function slugifyHeading(text: string): string {
    return text
        .toLowerCase()
        .replace(/&/g, " and ")
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
}

function stripInlineMarkdown(text: string): string {
    return text
        .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/[*_~`]/g, "")
        .trim()
}

function sanitizeRenderedHtml(html: string): string {
    return html
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
        .replace(/\son[a-z]+\s*=\s*"[^"]*"/gi, "")
        .replace(/\son[a-z]+\s*=\s*'[^']*'/gi, "")
        .replace(/\son[a-z]+\s*=\s*[^\s>]+/gi, "")
        .replace(/(href|src)\s*=\s*(['"])\s*javascript:[\s\S]*?\2/gi, '$1="#"')
}

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
}

function asString(value: unknown): string | undefined {
    return typeof value === "string" && value.trim() ? value.trim() : undefined
}

function asStringArray(value: unknown): string[] {
    if (Array.isArray(value)) {
        return value.filter((item): item is string => typeof item === "string" && item.trim().length > 0)
    }

    if (typeof value === "string") {
        return value
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
    }

    return []
}

function asDate(value: unknown): string {
    if (value instanceof Date) {
        return value.toISOString().split("T")[0]
    }

    if (typeof value === "string" && value.trim()) {
        return value.trim()
    }

    return new Date().toISOString().split("T")[0]
}

function toDateTime(date: string): string {
    if (date.includes("T")) {
        return date
    }

    return `${date}T00:00:00.000Z`
}

function titleFromSlug(slug: string): string {
    return slug
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ")
}

function absoluteUrl(url: string): string {
    if (url.startsWith("http")) {
        return url
    }

    return `${BASE_URL}${url.startsWith("/") ? url : `/${url}`}`
}

function createAuthorSchema(author: string) {
    if (/fasttools/i.test(author)) {
        return {
            "@type": "Organization",
            name: SITE_NAME,
            url: BASE_URL,
        }
    }

    return {
        "@type": "Person",
        name: author,
    }
}

function createPublisherSchema() {
    return {
        "@type": "Organization",
        name: SITE_NAME,
        url: BASE_URL,
        logo: {
            "@type": "ImageObject",
            url: `${BASE_URL}/android-chrome-512x512.png`,
            width: 512,
            height: 512,
        },
    }
}
