import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export type GuideCategory = 'Calculators' | 'Converters' | 'AI Tools' | 'Image Tools' | 'SEO Tools' | 'Social Media Tools' | 'Developer Tools' | 'Finance Tools' | 'Health Tools' | 'Text Tools';

export interface Guide {
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
    category?: GuideCategory;
    searchContent?: string;
    faq?: { question: string; answer: string }[];
    lastModified?: string;
    authorUrl?: string;
    imageWidth?: number;
    imageHeight?: number;
    readingTimeMinutes?: number;
    toolLink?: string; // Link to the actual tool
    difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
}

const guidesDirectory = path.join(process.cwd(), 'content/guide');

export function getAllGuides(): Guide[] {
    if (!fs.existsSync(guidesDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(guidesDirectory);
    const allGuidesData = fileNames
        .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'))
        .map((fileName) => {
            const slug = fileName.replace(/\.(md|mdx)$/, '');
            const fullPath = path.join(guidesDirectory, fileName);
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
                title: data.title || '',
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
                toolLink: data.toolLink,
                difficulty: data.difficulty || 'Beginner',
            } as Guide;
        });

    return allGuidesData.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function getAllGuidesMeta(): Guide[] {
    if (!fs.existsSync(guidesDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(guidesDirectory);
    const allGuidesData = fileNames
        .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'))
        .map((fileName) => {
            const slug = fileName.replace(/\.(md|mdx)$/, '');
            const fullPath = path.join(guidesDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            // Use gray-matter to parse only frontmatter, ignoring content
            const { data } = matter(fileContents);

            return {
                slug,
                title: data.title || '',
                description: data.description || '',
                date: data.date || '',
                lastModified: data.lastModified || data.date || '',
                image: data.image,
                category: data.category,
                // Minimal fields needed for sitemap
            } as Guide;
        });

    return allGuidesData.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export function getGuideBySlug(slug: string): Guide | null {
    try {
        let fullPath = path.join(guidesDirectory, `${slug}.md`);

        let fileContents: string;
        if (fs.existsSync(fullPath)) {
            fileContents = fs.readFileSync(fullPath, 'utf8');
        } else {
            const mdxPath = path.join(guidesDirectory, `${slug}.mdx`);
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
            title: data.title || '',
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
            toolLink: data.toolLink,
            difficulty: data.difficulty || 'Beginner',
        };
    } catch (error) {
        console.error(`Error reading guide ${slug}:`, error);
        return null;
    }
}

export function getGuidesByCategory(category: string): Guide[] {
    const allGuides = getAllGuides();
    return allGuides.filter(guide =>
        guide.category?.toLowerCase() === category.toLowerCase()
    );
}

export function getFeaturedGuides(): Guide[] {
    const allGuides = getAllGuides();
    return allGuides.filter(guide => guide.featured);
}

export function getRelatedGuides(currentSlug: string, category?: string, limit = 3): Guide[] {
    const allGuides = getAllGuides();

    const relatedGuides = allGuides
        .filter(guide => guide.slug !== currentSlug)
        .filter(guide => category ? guide.category === category : true)
        .slice(0, limit);

    return relatedGuides;
}

export function getAllGuideCategories(): string[] {
    const allGuides = getAllGuides();
    const categories = new Set<string>();

    allGuides.forEach(guide => {
        if (guide.category) {
            categories.add(guide.category);
        }
    });

    return Array.from(categories).sort();
}
