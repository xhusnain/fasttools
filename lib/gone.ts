export const goneUrls = new Set([
    '/ai-tools/meme-generator',
  '/ai-tools/hashtag-suggester',
  '/resources',
  '/announcements',
  '/image-tools/photo-editor',
  '/image-tools/pdf-tools',
  '/seo-tools/hashtags'
])

export function isGoneUrl(pathname: string): boolean {
  return goneUrls.has(pathname)
}

