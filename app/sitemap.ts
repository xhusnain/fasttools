import type { MetadataRoute } from "next"
import { noindexPaths } from "@/lib/noindex"

export const baseUrl = "https://fasttools.store"

const u = (path: string) => `${baseUrl}${path}`

// Full URLs of pages marked noindex (via proxy.ts X-Robots-Tag). These must never
// appear in the sitemap, /all-tools listings, or IndexNow submissions — doing so
// sends Google conflicting "crawl this / don't index this" signals and wastes crawl budget.
const noindexUrlSet = new Set(noindexPaths.map((p) => `${baseUrl}${p}`))

export const sitemapPages = [
  // ─── Main Pages ──────────────────────────────────────────────────────
  { url: baseUrl, lastModified: new Date("2026-03-23"), changeFrequency: "weekly" as const, priority: 1.0 },
  { url: u("/products"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/about"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.5 },
  { url: u("/contact"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.5 },
  { url: u("/faq"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.6 },
  { url: u("/all-tools"), lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
  { url: u("/privacy-policy"), lastModified: new Date("2025-11-25"), changeFrequency: "yearly" as const, priority: 0.3 },
  { url: u("/terms"), lastModified: new Date("2025-11-25"), changeFrequency: "yearly" as const, priority: 0.3 },
  { url: u("/cookie-preferences"), lastModified: new Date("2025-11-25"), changeFrequency: "yearly" as const, priority: 0.3 },
  { url: u("/dmca"), lastModified: new Date("2025-11-25"), changeFrequency: "yearly" as const, priority: 0.3 },

  // ─── Category Pages ──────────────────────────────────────────────────
  { url: u("/ai-tools"), lastModified: new Date("2026-03-23"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/converters"), lastModified: new Date("2026-03-23"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/finance-tools"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/social-media-tools"), lastModified: new Date("2026-03-23"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/dev-tools"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/web-tools"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/crypto-tools"), lastModified: new Date("2026-03-23"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/calculator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/image-tools"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/seo-tools"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/fun-tools"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/pdf-tools"), lastModified: new Date("2026-06-02"), changeFrequency: "monthly" as const, priority: 0.9 },

  // ─── Social Media Tools ──────────────────────────────────────────────
  // instagram-dp cluster (tool + 6 variant pages) removed entirely 2026-08-24 —
  // all URLs now 301 to /social-media-tools (see lib/redirects.mjs).
  { url: u("/social-media-tools/channel-checker"), lastModified: new Date("2026-03-23"), changeFrequency: "daily" as const, priority: 1.0 },
  { url: u("/social-media-tools/channel-checker/handle-availability-2026"), lastModified: new Date("2026-03-05"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/social-media-tools/channel-checker/channel-name-checker"), lastModified: new Date("2026-03-05"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/social-media-tools/channel-checker/check-if-taken"), lastModified: new Date("2026-03-05"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/social-media-tools/channel-checker/youtube-username-checker"), lastModified: new Date("2026-06-03"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/social-media-tools/youtube-channel-name-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "daily" as const, priority: 0.9 },
  { url: u("/social-media-tools/youtube-tags"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/social-media-tools/youtube-thumbnail"), lastModified: new Date("2026-06-17"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/social-media-tools/youtube-thumbnail/4k"), lastModified: new Date("2026-06-17"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/social-media-tools/youtube-thumbnail/hd"), lastModified: new Date("2026-06-17"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/social-media-tools/youtube-thumbnail/shorts"), lastModified: new Date("2026-06-17"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/social-media-tools/youtube-thumbnail/grabber"), lastModified: new Date("2026-06-17"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/social-media-tools/youtube-thumbnail/maxresdefault"), lastModified: new Date("2026-06-17"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/social-media-tools/youtube-thumbnail/mobile"), lastModified: new Date("2026-06-17"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/social-media-tools/youtube-thumbnail/live"), lastModified: new Date("2026-06-17"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/social-media-tools/youtube-thumbnail/viewer"), lastModified: new Date("2026-06-17"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/social-media-tools/hashtag-counter"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/social-media-tools/link-in-bio"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/social-media-tools/tiktok-engagement-calculator"), lastModified: new Date("2026-03-16"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/social-media-tools/influencer-rate-calculator"), lastModified: new Date("2026-03-16"), changeFrequency: "monthly" as const, priority: 0.9 },

  // ─── Calculators ─────────────────────────────────────────────────────
  { url: u("/calculator/love-calculator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/calculator/ip-subnet-calculator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/calculator/pregnancy-conception-calculator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },

  // ─── Finance Tools ───────────────────────────────────────────────────
  { url: u("/finance-tools/bill-splitter"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/paypal-fee"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },

  // ─── AI Tools ────────────────────────────────────────────────────────
  { url: u("/ai-tools/qr-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/ai-tools/caption-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/ai-tools/lyrics-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/ai-tools/pet-names"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/ai-tools/ai-text-detector"), lastModified: new Date("2026-03-10"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/ai-tools/ai-code-detector"), lastModified: new Date("2026-03-10"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/ai-tools/ai-readability-analyzer"), lastModified: new Date("2026-03-10"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/ai-tools/ai-paraphraser"), lastModified: new Date("2026-03-27"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/ai-tools/ai-api-cost-calculator"), lastModified: new Date("2026-05-14"), changeFrequency: "weekly" as const, priority: 1.0 },
  // ─── 2026-08-24 revenue-tools batch: prompt-generator, token-counter,
  // vram-calculator, text-cleaner clusters (see docs/superpowers/specs) ───
  { url: u("/ai-tools/prompt-generator"), lastModified: new Date("2026-08-24"), changeFrequency: "weekly" as const, priority: 1.0 },
  { url: u("/ai-tools/prompt-generator/sora"), lastModified: new Date("2026-08-24"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/ai-tools/prompt-generator/veo"), lastModified: new Date("2026-08-24"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/ai-tools/prompt-generator/midjourney"), lastModified: new Date("2026-08-24"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/ai-tools/prompt-generator/nano-banana"), lastModified: new Date("2026-08-24"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/ai-tools/token-counter"), lastModified: new Date("2026-08-24"), changeFrequency: "weekly" as const, priority: 1.0 },
  { url: u("/ai-tools/token-counter/chatgpt"), lastModified: new Date("2026-08-24"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/ai-tools/token-counter/claude"), lastModified: new Date("2026-08-24"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/ai-tools/token-counter/gemini"), lastModified: new Date("2026-08-24"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/ai-tools/llm-vram-calculator"), lastModified: new Date("2026-08-24"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/ai-tools/ai-text-cleaner"), lastModified: new Date("2026-08-24"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/ai-tools/ai-text-cleaner/em-dash-remover"), lastModified: new Date("2026-08-24"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/ai-tools/markdown-to-word"), lastModified: new Date("2026-08-24"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/ai-tools/word-to-markdown"), lastModified: new Date("2026-08-24"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/ai-tools/chatgpt-to-pdf"), lastModified: new Date("2026-08-24"), changeFrequency: "monthly" as const, priority: 0.9 },

  // ─── Converters ──────────────────────────────────────────────────────
  { url: u("/converters/file-size"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },

  // ─── Web Tools ───────────────────────────────────────────────────────
  { url: u("/web-tools/whois-lookup"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },

  // ─── Crypto Tools ────────────────────────────────────────────────────
  { url: u("/crypto-tools/bip39-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/hmac-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/rsa-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/password-strength-analyzer"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/uuid-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/bcrypt"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/token-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/otp-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },

  // ─── Dev Tools ───────────────────────────────────────────────────────
  { url: u("/dev-tools/jwt-decoder"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/regex-tester"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/json-to-csv"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/html-beautifier"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/mime-types"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/hex-to-rgb"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },

  // ─── Education Tools ────────────────────────────────────────────────
  { url: u("/dev-tools/html-to-markdown"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/markdown-previewer"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/timestamp-converter"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },

  // ─── SEO Tools ───────────────────────────────────────────────────────
  { url: u("/seo-tools/meta-tags"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/seo-tools/lorem-ipsum"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/seo-tools/blog-titles"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/seo-tools/keyword-density"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },

  // ─── Image Tools ─────────────────────────────────────────────────────
  { url: u("/image-tools/image-compressor"), lastModified: new Date("2026-06-04"), changeFrequency: "weekly" as const, priority: 0.5 },
  { url: u("/image-tools/image-to-text"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.5 },
  { url: u("/image-tools/ai-image-detector"), lastModified: new Date("2026-03-09"), changeFrequency: "weekly" as const, priority: 0.5 },
  { url: u("/image-tools/background-remover"), lastModified: new Date("2026-04-01"), changeFrequency: "weekly" as const, priority: 0.8 },
  { url: u("/image-tools/heic-to-jpg"), lastModified: new Date("2026-06-15"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/image-tools/png-to-jpg"), lastModified: new Date("2026-06-15"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/image-tools/webp-to-jpg"), lastModified: new Date("2026-06-15"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/image-tools/jpg-to-png"), lastModified: new Date("2026-06-15"), changeFrequency: "monthly" as const, priority: 0.8 },

  // ─── Security Tools ──────────────────────────────────────────────────

  // ─── PDF Tools ───────────────────────────────────────────────────────
  { url: u("/pdf-tools/pdf-splitter-merger"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/pdf-tools/pdf-signature-checker"), lastModified: new Date("2026-03-23"), changeFrequency: "weekly" as const, priority: 0.9 },

  // ─── Fun Tools ───────────────────────────────────────────────────────
  { url: u("/fun-tools/anniversary"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/fun-tools/birthday-countdown"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.5 },
  { url: u("/fun-tools/future-age"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/fun-tools/pomodoro-timer"), lastModified: new Date("2026-03-27"), changeFrequency: "monthly" as const, priority: 0.7 },

  // ─── Previously missing — added 2026-05-14 ────────────────────────────
  // AI Tools

  // Calculators (high-impression GSC queries: concrete calculator 279 imp, body fat, fraction, triangle, time duration, conversion)

  // Converters (utility tools — low individual volume but high cumulative)

  // Crypto Tools
  { url: u("/crypto-tools/ulid-generator"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.6 },

  // Dev Tools
  { url: u("/dev-tools/sql-to-json"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },

  // Finance Tools (large untapped category — multiple high-volume queries)

  // SEO Tools

]

// Indexable pages only — noindex pages are removed so they never leak into the
// sitemap, internal /all-tools listings, or IndexNow pings.
export const indexablePages = sitemapPages.filter((p) => !noindexUrlSet.has(p.url))

const mainPagePaths = new Set([
  "/products",
  "/about",
  "/contact",
  "/faq",
  "/all-tools",
  "/privacy-policy",
  "/terms",
  "/cookie-preferences",
  "/dmca",
])

const pathFromUrl = (url: string) => url.replace(baseUrl, "")

export const contentPages = indexablePages.filter((p) => pathFromUrl(p.url).startsWith("/blog/"))
export const mainPages = indexablePages.filter((p) => {
  const path = pathFromUrl(p.url)
  return path === "" || mainPagePaths.has(path)
})
export const toolPages = indexablePages.filter((p) => {
  const path = pathFromUrl(p.url)
  return path !== "" && !mainPagePaths.has(path) && !path.startsWith("/blog/")
})

export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePages.map((page) => ({
    url: page.url,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
