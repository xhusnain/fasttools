export function injectArticleAds(content: string): string {
    if (!content) return content;

    let processedContent = content.replace(/^## Table of Contents$/m, '');

    const paragraphs = processedContent.split('\n\n');

    if (paragraphs.length > 6) {
        paragraphs.splice(3, 0, '<ArticleAd />');
        paragraphs.splice(paragraphs.length - 2, 0, '<ArticleAd />');
        processedContent = paragraphs.join('\n\n');
    } else if (paragraphs.length > 3) {
        paragraphs.splice(Math.floor(paragraphs.length / 2), 0, '<ArticleAd />');
        processedContent = paragraphs.join('\n\n');
    }

    return processedContent;
}
