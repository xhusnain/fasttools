import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { processContentFile } from "@/lib/content-processing";

export type BlogCategory = 'Developer' | 'Guides';

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    author?: string;
    readingTime?: string;
    tags?: string[];
    content?: string;
    excerpt?: string;
    image?: string;
    keywords?: string[];
    featured?: boolean;
    category?: BlogCategory;
    searchContent?: string;
    faq?: { question: string; answer: string }[];
    lastModified?: string;
    authorUrl?: string;
    imageWidth?: number;
    imageHeight?: number;
    readingTimeMinutes?: number;
}

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getAllPosts(): BlogPost[] {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'))
        .map((fileName) => {
            const { slug, frontmatter: data, content, readingTime: readingTimeResult, searchContent } = processContentFile(postsDirectory, fileName);

            return {
                slug,
                title: data.title ? data.title.replace('<DynamicYear />', (new Date().getFullYear() + 1).toString()) : '',
                description: data.description || '',
                date: data.date || '',
                lastModified: data.lastModified || data.date || '',
                author: data.author || 'FastTools Team',
                authorUrl: data.authorUrl,
                readingTime: readingTimeResult.text,
                readingTimeMinutes: Math.ceil(readingTimeResult.minutes),
                tags: data.tags || [],
                excerpt: data.excerpt || content.slice(0, 160) + '...',
                image: data.image,
                imageWidth: data.imageWidth,
                imageHeight: data.imageHeight,
                keywords: data.keywords || [],
                featured: data.featured || false,
                category: data.category,
                searchContent,
                faq: data.faq,
            } as BlogPost;
        });

    return allPostsData.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function getAllPostsMeta(): BlogPost[] {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'))
        .map((fileName) => {
            const slug = fileName.replace(/\.(md|mdx)$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            // Use gray-matter to parse only frontmatter
            const { data } = matter(fileContents);

            return {
                slug,
                title: data.title ? data.title.replace('<DynamicYear />', (new Date().getFullYear() + 1).toString()) : '',
                date: data.date || '',
                lastModified: data.lastModified || data.date || '',
                image: data.image,
                category: data.category,
                // Minimal fields needed for sitemap
            } as BlogPost;
        });

    return allPostsData.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function getPostBySlug(slug: string): BlogPost | null {
    try {
        let fileName = `${slug}.md`;
        if (!fs.existsSync(path.join(postsDirectory, fileName))) {
            fileName = `${slug}.mdx`;
            if (!fs.existsSync(path.join(postsDirectory, fileName))) {
                return null;
            }
        }

        const { frontmatter: data, content, readingTime: readingTimeResult } = processContentFile(postsDirectory, fileName);

        return {
            slug,
            title: data.title ? data.title.replace('<DynamicYear />', (new Date().getFullYear() + 1).toString()) : '',
            description: data.description || '',
            date: data.date || '',
            lastModified: data.lastModified || data.date || '',
            author: data.author || 'FastTools Team',
            authorUrl: data.authorUrl,
            readingTime: readingTimeResult.text,
            readingTimeMinutes: Math.ceil(readingTimeResult.minutes),
            tags: data.tags || [],
            content,
            excerpt: data.excerpt || content.slice(0, 160) + '...',
            image: data.image,
            imageWidth: data.imageWidth,
            imageHeight: data.imageHeight,
            keywords: data.keywords || [],
            featured: data.featured || false,
            category: data.category,
            faq: data.faq,
        };
    } catch (error) {
        console.error(`Error reading post ${slug}:`, error);
        return null;
    }
}

export function getPostsByTag(tag: string): BlogPost[] {
    const allPosts = getAllPosts();
    return allPosts.filter(post =>
        post.tags?.some(postTag =>
            postTag.toLowerCase() === tag.toLowerCase()
        )
    );
}

export function getFeaturedPosts(): BlogPost[] {
    const allPosts = getAllPosts();
    return allPosts.filter(post => post.featured);
}

export function getRelatedPosts(currentSlug: string, tags: string[], limit = 3): BlogPost[] {
    const allPosts = getAllPosts();

    const relatedPosts = allPosts
        .filter(post => post.slug !== currentSlug)
        .filter(post =>
            post.tags?.some(tag =>
                tags.some(currentTag =>
                    currentTag.toLowerCase() === tag.toLowerCase()
                )
            )
        )
        .slice(0, limit);

    return relatedPosts;
}

export function getAllTags(): string[] {
    const allPosts = getAllPosts();
    const tags = new Set<string>();

    allPosts.forEach(post => {
        post.tags?.forEach(tag => tags.add(tag));
    });

    return Array.from(tags).sort();
}