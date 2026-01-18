
/**
 * Cleans markdown/MDX content for search indexing by removing code blocks,
 * images, links, HTML tags, and other markdown syntax.
 * 
 * @param content The raw markdown/MDX content
 * @param maxLength Optional max length for the result (default: 2000)
 * @returns Cleaned plain text
 */
export function cleanContentForSearch(content: string, maxLength: number = 2000): string {
    return content
        .replace(/```[\s\S]*?```/g, '')
        .replace(/!\[.*?\]\(.*?\)/g, '')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/<[^>]+>/g, '')
        .replace(/#{1,6}\s/g, '')
        .replace(/[*_~`]/g, '')
        .replace(/\n+/g, ' ')
        .trim()
        .slice(0, maxLength);
}
