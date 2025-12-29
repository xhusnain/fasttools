export const goneUrls = new Set([
  '/guides/ai-meme-generator-guide',
  '/guides/interest-rate-calculator-guide',
  '/guides/pregnancy-calculator-guide',
  '/guides/age-in-hours-calculator-guide',
  '/guides/color-palette-generator-guide',
  '/guides/hex-to-rgb-converter-guide',
  '/guides/body-fat-calculator-guide',
  '/guides/calorie-calculator-guide',
  '/guides/ai-caption-generator-guide',
  '/guides/youtube-thumbnail-downloader-guide',
  '/guides/date-to-day-finder-guide',
  '/guides/conversion-calculator-guide',
  '/guides/triangle-calculator-guide',
  '/guides/pregnancy-conception-calculator-guide',
  '/guides/time-duration-calculator-guide',
  '/guides/tax-calculator-guide',
  '/guides/length-converter-guide',
  '/guides/discount-calculator-guide',
  '/guides/invoice-generator-guide',

  // AI Tools that were removed
  '/ai-tools/meme-generator',
  '/ai-tools/hashtag-suggester',

  // Other removed pages
  '/resources',
  '/announcements',
  '/youtube-downloader',

  // Image tools removed
  '/image-tools/photo-editor',
  '/image-tools/pdf-tools',
  '/social-media-tools/youtube-downloader',
  '/seo-tools/hashtags'
])

/**
 * Check if a URL path should return 410 Gone status
 */
export function isGoneUrl(pathname: string): boolean {
  return goneUrls.has(pathname)
}

