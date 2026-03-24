import type { MetadataRoute } from "next"

export const baseUrl = "https://www.fasttools.store"

const u = (path: string) => `${baseUrl}${path}`

export const sitemapPages = [
  // ─── Main Pages ──────────────────────────────────────────────────────
  { url: baseUrl, lastModified: new Date("2026-03-23"), changeFrequency: "weekly" as const, priority: 1.0 },
  { url: u("/products"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/api-docs"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
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
  { url: u("/pdf-tools"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },

  // ─── Social Media Tools ──────────────────────────────────────────────
  { url: u("/social-media-tools/instagram-dp"), lastModified: new Date("2026-03-07"), changeFrequency: "weekly" as const, priority: 1.0 },
  { url: u("/social-media-tools/instagram-dp/private-account"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/social-media-tools/instagram-dp/hd-1080p"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/social-media-tools/instagram-dp/pc-viewer"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/social-media-tools/instagram-dp/zoom-profile-picture"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/social-media-tools/instagram-dp/anonymous-viewer"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/social-media-tools/channel-checker"), lastModified: new Date("2026-03-23"), changeFrequency: "daily" as const, priority: 1.0 },
  { url: u("/social-media-tools/channel-checker/handle-availability-2026"), lastModified: new Date("2026-03-05"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/social-media-tools/channel-checker/channel-name-checker"), lastModified: new Date("2026-03-05"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/social-media-tools/channel-checker/check-if-taken"), lastModified: new Date("2026-03-05"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/social-media-tools/youtube-channel-name-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "daily" as const, priority: 0.9 },
  { url: u("/social-media-tools/youtube-tags"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/social-media-tools/youtube-thumbnail"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/social-media-tools/hashtag-counter"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/social-media-tools/link-in-bio"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/social-media-tools/tiktok-engagement-calculator"), lastModified: new Date("2026-03-16"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/social-media-tools/influencer-rate-calculator"), lastModified: new Date("2026-03-16"), changeFrequency: "monthly" as const, priority: 0.9 },

  // ─── Calculators ─────────────────────────────────────────────────────
  { url: u("/calculator/age-calculator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/calculator/bmi-calculator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/calculator/percentage-calculator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/calculator/gpa-calculator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/calculator/scientific-calculator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/calculator/date-difference"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/calculator/love-calculator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/calculator/ip-subnet-calculator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/calculator/cortisol-peak-calculator"), lastModified: new Date("2026-03-16"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/calculator/biological-age-calculator"), lastModified: new Date("2026-03-16"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/calculator/pregnancy-calculator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/calculator/pregnancy-conception-calculator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/calculator/bmr-calculator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/calculator/calorie-calculator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/calculator/tdee-macro-calculator"), lastModified: new Date("2026-03-24"), changeFrequency: "monthly" as const, priority: 0.8 },

  // ─── Finance Tools ───────────────────────────────────────────────────
  { url: u("/finance-tools/auto-loan-calculator"), lastModified: new Date("2026-03-22"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/loan-calculator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/quarterly-tax-estimator"), lastModified: new Date("2026-02-27"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/sales-tax-calculator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/bill-splitter"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/discount-calculator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/invoice-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/paypal-fee"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/tip-calculator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/savings-tracker"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/home-affordability-calculator"), lastModified: new Date("2026-03-18"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/saas-churn-calculator"), lastModified: new Date("2026-03-16"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/saas-payback-calculator"), lastModified: new Date("2026-03-16"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/freelance-rate-calculator"), lastModified: new Date("2026-03-16"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/remote-work-savings"), lastModified: new Date("2026-03-16"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/zakat-calculator"), lastModified: new Date("2026-03-16"), changeFrequency: "yearly" as const, priority: 0.8 },
  { url: u("/ad-tools/roas-calculator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },

  // ─── AI Tools ────────────────────────────────────────────────────────
  { url: u("/ai-tools/qr-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/ai-tools/caption-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/ai-tools/lyrics-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/ai-tools/pet-names"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/ai-tools/ai-text-detector"), lastModified: new Date("2026-03-10"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/ai-tools/ai-code-detector"), lastModified: new Date("2026-03-10"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/ai-tools/ai-readability-analyzer"), lastModified: new Date("2026-03-10"), changeFrequency: "weekly" as const, priority: 0.9 },

  // ─── Converters ──────────────────────────────────────────────────────
  { url: u("/converters/currency"), lastModified: new Date("2026-03-23"), changeFrequency: "weekly" as const, priority: 0.8 },
  { url: u("/converters/file-size"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/converters/length"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/converters/temperature"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/converters/text-case"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/converters/timezone"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/converters/list-converter"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/converters/base64-file"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/converters/yaml-json"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/converters/json-yaml"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },

  // ─── Web Tools ───────────────────────────────────────────────────────
  { url: u("/web-tools/url-encoder"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/web-tools/html-escape"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/web-tools/url-parser"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/web-tools/device-info"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/web-tools/auth-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/web-tools/outlook-safelink-decoder"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },

  // ─── Crypto Tools ────────────────────────────────────────────────────
  { url: u("/crypto-tools/encrypt-decrypt"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/bip39-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/hmac-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/rsa-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/password-strength-analyzer"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/uuid-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/bcrypt"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/token-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/hash-text"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/otp-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },

  // ─── Dev Tools ───────────────────────────────────────────────────────
  { url: u("/dev-tools/jwt-decoder"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/regex-tester"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/json-diff"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/json-to-csv"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/html-beautifier"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/base64-encoder"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/mime-types"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/keycode-info"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/slugify-string"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/user-agent-parser"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/http-status-codes"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/hex-to-rgb"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/html-to-markdown"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/markdown-previewer"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/llm-training-cost"), lastModified: new Date("2026-03-16"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/cloudflare-workers-cost"), lastModified: new Date("2026-03-16"), changeFrequency: "monthly" as const, priority: 0.7 },

  // ─── SEO Tools ───────────────────────────────────────────────────────
  { url: u("/seo-tools/meta-tags"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/seo-tools/lorem-ipsum"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/seo-tools/blog-titles"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/seo-tools/keyword-density"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },

  // ─── Image Tools ─────────────────────────────────────────────────────
  { url: u("/image-tools/image-compressor"), lastModified: new Date("2026-03-23"), changeFrequency: "weekly" as const, priority: 0.5 },
  { url: u("/image-tools/image-to-text"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.5 },
  { url: u("/image-tools/ai-image-detector"), lastModified: new Date("2026-03-09"), changeFrequency: "weekly" as const, priority: 0.5 },

  // ─── PDF Tools ───────────────────────────────────────────────────────
  { url: u("/pdf-tools/pdf-sign"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/pdf-tools/pdf-word-converter"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/pdf-tools/pdf-splitter-merger"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/pdf-tools/pdf-unlocker"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/pdf-tools/pdf-compressor"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/pdf-tools/pdf-to-image"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/pdf-tools/pdf-signature-checker"), lastModified: new Date("2026-03-23"), changeFrequency: "weekly" as const, priority: 0.9 },

  // ─── Fun Tools ───────────────────────────────────────────────────────
  { url: u("/fun-tools/anniversary"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.5 },
  { url: u("/fun-tools/birthday-countdown"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.5 },
  { url: u("/fun-tools/future-age"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.5 },
]

export const toolPages = sitemapPages.filter(p => !p.url.endsWith(".store") && ![ "/products", "/api-docs", "/about", "/contact", "/faq", "/all-tools", "/privacy-policy", "/terms", "/cookie-preferences", "/dmca" ].some(path => p.url.endsWith(path)))
export const mainPages = sitemapPages.filter(p => !toolPages.includes(p))

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapPages.map((page) => ({
    url: page.url,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
