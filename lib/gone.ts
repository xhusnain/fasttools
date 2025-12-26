/**
 * List of permanently deleted URLs (410 Gone)
 * 
 * These URLs will return a 410 Gone status, which tells search engines
 * that the content is permanently removed and should be removed from their index.
 * 
 * Google's Policy:
 * - 410 Gone signals that a page is permanently deleted
 * - Google will remove these URLs from search results faster than 404
 * - No SEO penalty for returning 410/404 for deleted content
 * - You can also use Google Search Console to request URL removal
 */

export const goneUrls = new Set([
  '/guides/amortization-calculator-guide',
  '/guides/salary-calculator-guide',
  '/guides/ai-song-lyrics-generator-guide',
  '/guides/year-end-countdown-guide',
  '/guides/html-beautifier-guide',
  '/guides/tip-calculator-guide',
  '/guides/json-to-csv-converter-guide',
  '/guides/regex-tester-guide',

  '/guides/temperature-converter-guide',
  '/guides/lorem-ipsum-guide',
  '/guides/qr-code-generator-guide',
  '/guides/date-difference-calculator-guide',
  '/guides/zodiac-sign-finder-guide',
  '/guides/standard-deviation-guide',
  '/guides/scientific-calculator-guide',
  '/guides/image-to-text-ocr-guide',
  '/guides/developer-tools-guide',
  '/guides/bmr-calculator-guide',
  '/guides/inflation-calculator-guide',
  '/guides/meta-tags-guide',
  '/guides/investment-calculator-guide',
  '/guides/compound-interest-calculator-guide',
  '/guides/retirement-calculator-guide',
  '/guides/html-to-markdown-converter-guide',
  '/guides/love-calculator-guide',
  '/guides/ip-subnet-calculator-guide',
  '/guides/percentage-calculator-guide',
  '/guides/bmi-calculator-guide',
  '/guides/finance-calculator-guide',
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

