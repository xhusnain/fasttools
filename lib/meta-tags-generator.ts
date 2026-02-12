/**
 * Meta Tags Generator - Generates Open Graph, Twitter Card, and SEO meta tags.
 * Follows Open Graph protocol (ogp.me) and 2024-2025 best practices.
 *
 * Open Graph image size: 1200×630px (1.91:1) for Facebook/LinkedIn.
 * Twitter: 1200×675px optimal. Min 200×200, max 8MB.
 */

export interface MetaTagsConfig {
  title: string
  description: string
  url: string
  image: string
  imageWidth?: number
  imageHeight?: number
  imageAlt?: string
  siteName?: string
  locale?: string
  type?: "website" | "article"
  keywords?: string
  author?: string
  twitterHandle?: string
  robots?: "index,follow" | "noindex,nofollow" | "index,nofollow" | "noindex,follow"
  canonical?: string
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

/**
 * Generate full meta tags HTML following Open Graph protocol.
 */
export function generateMetaTags(config: MetaTagsConfig): string {
  const t = config.title || "Your Page Title"
  const d = config.description || "Your page description"
  const u = config.url || "https://example.com/"
  const img = config.image
  const site = config.siteName || ""
  const loc = config.locale || "en_US"
  const typ = config.type || "website"
  const canon = config.canonical || u

  const lines: string[] = []

  lines.push("<!-- Primary Meta Tags -->")
  lines.push(`<title>${escapeHtml(t)}</title>`)
  lines.push(`<meta name="title" content="${escapeHtml(t)}" />`)
  lines.push(`<meta name="description" content="${escapeHtml(d)}" />`)
  if (config.keywords?.trim()) {
    lines.push(`<meta name="keywords" content="${escapeHtml(config.keywords.trim())}" />`)
  }
  if (config.author?.trim()) {
    lines.push(`<meta name="author" content="${escapeHtml(config.author.trim())}" />`)
  }
  lines.push(`<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />`)
  if (config.robots) {
    lines.push(`<meta name="robots" content="${config.robots}" />`)
  }
  if (config.canonical || u) {
    lines.push(`<link rel="canonical" href="${escapeHtml(canon)}" />`)
  }

  lines.push("")
  lines.push("<!-- Open Graph / Facebook / LinkedIn (Open Graph protocol) -->")
  lines.push(`<meta property="og:type" content="${typ}" />`)
  lines.push(`<meta property="og:url" content="${escapeHtml(u)}" />`)
  lines.push(`<meta property="og:title" content="${escapeHtml(t)}" />`)
  lines.push(`<meta property="og:description" content="${escapeHtml(d)}" />`)
  if (site) {
    lines.push(`<meta property="og:site_name" content="${escapeHtml(site)}" />`)
  }
  lines.push(`<meta property="og:locale" content="${escapeHtml(loc)}" />`)
  if (img) {
    lines.push(`<meta property="og:image" content="${escapeHtml(img)}" />`)
    if (config.imageWidth) {
      lines.push(`<meta property="og:image:width" content="${config.imageWidth}" />`)
    }
    if (config.imageHeight) {
      lines.push(`<meta property="og:image:height" content="${config.imageHeight}" />`)
    }
    if (config.imageAlt?.trim()) {
      lines.push(`<meta property="og:image:alt" content="${escapeHtml(config.imageAlt.trim())}" />`)
    }
  }

  lines.push("")
  lines.push("<!-- Twitter Card -->")
  lines.push(`<meta property="twitter:card" content="summary_large_image" />`)
  lines.push(`<meta property="twitter:url" content="${escapeHtml(u)}" />`)
  lines.push(`<meta property="twitter:title" content="${escapeHtml(t)}" />`)
  lines.push(`<meta property="twitter:description" content="${escapeHtml(d)}" />`)
  if (img) {
    lines.push(`<meta property="twitter:image" content="${escapeHtml(img)}" />`)
  }
  if (config.twitterHandle?.trim()) {
    const handle = config.twitterHandle.trim().replace(/^@/, "")
    lines.push(`<meta name="twitter:creator" content="@${escapeHtml(handle)}" />`)
  }

  return lines.join("\n")
}
