import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export type BlogCategory = 'Click Fraud Protection' | 'Google Ads' | 'AI' | 'Case Studies';

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
            const slug = fileName.replace(/\.(md|mdx)$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);
            const readingTimeResult = readingTime(content);

            const searchContent = content
                .replace(/```[\s\S]*?```/g, '')
                .replace(/!\[.*?\]\(.*?\)/g, '')
                .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
                .replace(/<[^>]+>/g, '')
                .replace(/#{1,6}\s/g, '')
                .replace(/[*_~`]/g, '')
                .replace(/\n+/g, ' ')
                .trim()
                .slice(0, 2000);

            return {
                slug,
                title: data.title ? data.title.replace('<DynamicYear />', (new Date().getFullYear() + 1).toString()) : '',
                description: data.description || '',
                date: data.date || '',
                author: data.author || 'ClickFortify',
                readingTime: readingTimeResult.text,
                tags: data.tags || [],
                excerpt: data.excerpt || content.slice(0, 160) + '...',
                image: data.image,
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

export function getPostBySlug(slug: string): BlogPost | null {
    try {
        let fullPath = path.join(postsDirectory, `${slug}.md`);

        let fileContents: string;
        if (fs.existsSync(fullPath)) {
            fileContents = fs.readFileSync(fullPath, 'utf8');
        } else {
            const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
            if (fs.existsSync(mdxPath)) {
                fileContents = fs.readFileSync(mdxPath, 'utf8');
            } else {
                return null;
            }
        }

        const { data, content } = matter(fileContents);
        const readingTimeResult = readingTime(content);

        return {
            slug,
            title: data.title ? data.title.replace('<DynamicYear />', (new Date().getFullYear() + 1).toString()) : '',
            description: data.description || '',
            date: data.date || '',
            author: data.author || 'ClickFortify',
            readingTime: readingTimeResult.text,
            tags: data.tags || [],
            content,
            excerpt: data.excerpt || content.slice(0, 160) + '...',
            image: data.image,
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