/**
 * Converts HTML content to Markdown format.
 * Replaces common HTML tags with their Markdown equivalents.
 *
 * @param html The HTML string to convert
 * @returns The converted Markdown string
 */
export const convertHtmlToMarkdown = (html: string): string => {
    return html
        // Headers
        .replace(/<h1[^>]*>(.*?)<\/h1>/gi, "# $1\n\n")
        .replace(/<h2[^>]*>(.*?)<\/h2>/gi, "## $1\n\n")
        .replace(/<h3[^>]*>(.*?)<\/h3>/gi, "### $1\n\n")
        .replace(/<h4[^>]*>(.*?)<\/h4>/gi, "#### $1\n\n")
        .replace(/<h5[^>]*>(.*?)<\/h5>/gi, "##### $1\n\n")
        .replace(/<h6[^>]*>(.*?)<\/h6>/gi, "###### $1\n\n")
        // Bold and Italic
        .replace(/<strong[^>]*>(.*?)<\/strong>/gi, "**$1**")
        .replace(/<b[^>]*>(.*?)<\/b>/gi, "**$1**")
        .replace(/<em[^>]*>(.*?)<\/em>/gi, "*$1*")
        .replace(/<i[^>]*>(.*?)<\/i>/gi, "*$1*")
        // Links
        .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, "[$2]($1)")
        // Images
        .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/gi, "![$2]($1)")
        // Lists
        .replace(/<ul[^>]*>/gi, "")
        .replace(/<\/ul>/gi, "\n")
        .replace(/<ol[^>]*>/gi, "")
        .replace(/<\/ol>/gi, "\n")
        .replace(/<li[^>]*>(.*?)<\/li>/gi, "- $1\n")
        // Blockquote
        .replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gi, "> $1\n\n")
        // Code
        .replace(/<code[^>]*>(.*?)<\/code>/gi, "`$1`")
        .replace(/<pre[^>]*><code[^>]*>(.*?)<\/code><\/pre>/gi, "```\n$1\n```\n")
        .replace(/<pre[^>]*>(.*?)<\/pre>/gi, "```\n$1\n```\n")
        // Paragraphs
        .replace(/<p[^>]*>(.*?)<\/p>/gi, "$1\n\n")
        // Line breaks
        .replace(/<br\s*\/?>/gi, "\n")
        // Horizontal rule
        .replace(/<hr\s*\/?>/gi, "\n---\n\n")
        // Remove remaining HTML tags
        .replace(/<[^>]*>/g, "")
        // Decode HTML entities
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .trim()
}
