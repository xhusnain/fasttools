import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { cleanContentForSearch } from "@/lib/text-utils";

export interface ProcessedContent {
    slug: string;
    frontmatter: { [key: string]: any };
    content: string;
    readingTime: {
        text: string;
        minutes: number;
        time: number;
        words: number;
    };
    searchContent: string;
}

export function processContentFile(directory: string, fileName: string): ProcessedContent {
    const slug = fileName.replace(/\.(md|mdx)$/, '');
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const readingTimeResult = readingTime(content);
    const searchContent = cleanContentForSearch(content);

    return {
        slug,
        frontmatter: data,
        content,
        readingTime: readingTimeResult,
        searchContent,
    };
}
