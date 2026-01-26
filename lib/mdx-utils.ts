import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface TocItem {
    level: number;
    text: string;
    id: string;
}

export interface MdxContentResult {
    data: { [key: string]: any };
    content: string;
    mdxSource: any;
    toc: TocItem[];
    realSlug: string;
}

export const getFiles = (dirPath: string): string[] => {
    if (!fs.existsSync(dirPath)) {
        return [];
    }
    return fs.readdirSync(dirPath).filter((file) => file.endsWith('.md') || file.endsWith('.mdx'));
};

export const getMdxContent = async (slug: string, contentPath: string): Promise<MdxContentResult> => {
    const realSlug = slug.replace(/\.mdx?$/, '');
    let fullPath = path.join(contentPath, `${realSlug}.md`);
    if (!fs.existsSync(fullPath)) {
        fullPath = path.join(contentPath, `${realSlug}.mdx`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const toc = content
        .split('\n')
        .filter((line) => line.match(/^#{2,3}\s/))
        .map((line) => {
            const level = line.match(/^#{2,3}/)?.[0].length || 2;
            const text = line.replace(/^#{2,3}\s/, '');
            const id = text
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-');
            return { level, text, id };
        });

    return {
        data,
        content,
        mdxSource: null,
        toc,
        realSlug,
    };
};
