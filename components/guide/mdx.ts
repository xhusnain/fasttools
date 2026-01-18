import path from 'path';
import { Guide } from "@/components/guide/guide";
import { getFiles, getMdxContent } from "@/lib/mdx-utils";

const root = process.cwd();
const contentPath = path.join(root, 'content/guide');

export interface GuidePost {
    frontMatter: Guide;
    content: string;
    mdxSource: any;
    toc: { level: number; text: string; id: string }[];
}

export const getGuideSlugs = () => {
    return getFiles(contentPath);
};

export const getGuideBySlugMdx = async (slug: string): Promise<GuidePost> => {
    const { data, content, mdxSource, toc, realSlug } = await getMdxContent(slug, contentPath);

    return {
        frontMatter: {
            ...data,
            slug: realSlug,
        } as Guide,
        content,
        mdxSource,
        toc,
    };
};
