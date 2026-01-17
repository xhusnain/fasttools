import path from 'path';
import { BlogPost } from "@/components/blog/blog";
import { getFiles, getMdxContent } from "@/lib/mdx-utils";

const root = process.cwd();
const contentPath = path.join(root, 'content/blog');

export interface Post {
    frontMatter: BlogPost;
    content: string;
    mdxSource: any;
    toc: { level: number; text: string; id: string }[];
}

export const getPostSlugs = () => {
    return getFiles(contentPath);
};

export const getPostBySlug = async (slug: string): Promise<Post> => {
    const { data, content, mdxSource, toc, realSlug } = await getMdxContent(slug, contentPath);

    return {
        frontMatter: {
            ...data,
            title: data.title ? data.title.replace('<DynamicYear />', (new Date().getFullYear() + 1).toString()) : data.title,
            slug: realSlug,
        } as BlogPost,
        content,
        mdxSource,
        toc,
    };
};