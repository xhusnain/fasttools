import type { MetadataRoute } from "next"
import { noindexPaths } from "@/lib/noindex"
import { getBlogSitemapPages } from "@/lib/blog"

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
  { url: u("/api-docs"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/about"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.5 },
  { url: u("/contact"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.5 },
  { url: u("/faq"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.6 },
  { url: u("/blog"), lastModified: new Date("2026-06-02"), changeFrequency: "weekly" as const, priority: 0.7 },
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
  { url: u("/security-tools"), lastModified: new Date("2026-04-17"), changeFrequency: "weekly" as const, priority: 0.9 },

  // ─── Social Media Tools ──────────────────────────────────────────────
  { url: u("/social-media-tools/instagram-dp"), lastModified: new Date("2026-06-05"), changeFrequency: "weekly" as const, priority: 1.0 },
  // instagram-profile-picture-viewer intentionally excluded: it canonicals to /instagram-dp (cannibalization fix)
  { url: u("/social-media-tools/instagram-dp/private-account"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/social-media-tools/instagram-dp/hd-1080p"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/social-media-tools/instagram-dp/pc-viewer"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/social-media-tools/instagram-dp/zoom-profile-picture"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/social-media-tools/instagram-dp/anonymous-viewer"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/social-media-tools/channel-checker"), lastModified: new Date("2026-03-23"), changeFrequency: "daily" as const, priority: 1.0 },
  { url: u("/social-media-tools/channel-checker/handle-availability-2026"), lastModified: new Date("2026-03-05"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/social-media-tools/channel-checker/channel-name-checker"), lastModified: new Date("2026-03-05"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/social-media-tools/channel-checker/check-if-taken"), lastModified: new Date("2026-03-05"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/social-media-tools/channel-checker/youtube-username-checker"), lastModified: new Date("2026-06-03"), changeFrequency: "weekly" as const, priority: 0.9 },
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
  { url: u("/calculator/ovulation-calculator"), lastModified: new Date("2026-03-27"), changeFrequency: "monthly" as const, priority: 0.8 },

  // ─── Finance Tools ───────────────────────────────────────────────────
  { url: u("/finance-tools/auto-loan-calculator"), lastModified: new Date("2026-03-22"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/loan-calculator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/quarterly-tax-estimator"), lastModified: new Date("2026-02-27"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/sales-tax-calculator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/bill-splitter"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/discount-calculator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/invoice-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/paypal-fee"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/paypal-goods-and-services-fee-calculator"), lastModified: new Date("2026-06-03"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/tip-calculator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/savings-tracker"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/home-affordability-calculator"), lastModified: new Date("2026-03-18"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/rent-vs-buy-calculator"), lastModified: new Date("2026-03-24"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/debt-payoff-calculator"), lastModified: new Date("2026-03-24"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/net-worth-calculator"), lastModified: new Date("2026-03-25"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/saas-churn-calculator"), lastModified: new Date("2026-03-16"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/saas-payback-calculator"), lastModified: new Date("2026-03-16"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/freelance-rate-calculator"), lastModified: new Date("2026-03-16"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/remote-work-savings"), lastModified: new Date("2026-03-16"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/zakat-calculator"), lastModified: new Date("2026-03-16"), changeFrequency: "yearly" as const, priority: 0.8 },
  { url: u("/finance-tools/startup-runway-calculator"), lastModified: new Date("2026-03-27"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/tax-bracket-calculator"), lastModified: new Date("2026-03-27"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/ad-tools/roas-calculator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.8 },

  // ─── AI Tools ────────────────────────────────────────────────────────
  { url: u("/ai-tools/qr-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/ai-tools/caption-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/ai-tools/lyrics-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/ai-tools/pet-names"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/ai-tools/ai-text-detector"), lastModified: new Date("2026-03-10"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/ai-tools/ai-code-detector"), lastModified: new Date("2026-03-10"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/ai-tools/ai-readability-analyzer"), lastModified: new Date("2026-03-10"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/ai-tools/ai-paraphraser"), lastModified: new Date("2026-03-27"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/ai-tools/text-summarizer"), lastModified: new Date("2026-04-03"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/ai-tools/text-to-speech"), lastModified: new Date("2026-04-08"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/ai-tools/ai-api-cost-calculator"), lastModified: new Date("2026-05-14"), changeFrequency: "weekly" as const, priority: 1.0 },

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
  { url: u("/web-tools/dns-ssl-checker"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/web-tools/whois-lookup"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },

  // ─── Crypto Tools ────────────────────────────────────────────────────
  { url: u("/crypto-tools/encrypt-decrypt"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/bip39-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/hmac-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/rsa-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/password-strength-analyzer"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/password-generator"), lastModified: new Date("2026-04-10"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/crypto-tools/uuid-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/bcrypt"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/token-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/hash-text"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/otp-generator"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/crypto-tools/totp-qr-code-generator"), lastModified: new Date("2026-06-03"), changeFrequency: "monthly" as const, priority: 0.75 },

  // ─── Dev Tools ───────────────────────────────────────────────────────
  { url: u("/dev-tools/jwt-decoder"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/regex-tester"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/json-diff"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/json-to-csv"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/html-beautifier"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/base64-encoder"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/mime-types"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/keycode-info"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/slugify-string"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/user-agent-parser"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/http-status-codes"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/hex-to-rgb"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/color-palette"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/dev-tools/css-gradient-generator"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/dev-tools/diff-checker"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.9 },

  // ─── Education Tools ────────────────────────────────────────────────
  { url: u("/education-tools"), lastModified: new Date("2026-04-10"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/education-tools/citation-generator"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/dev-tools/html-to-markdown"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/markdown-previewer"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/llm-training-cost"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/cloudflare-workers-cost"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/cron-expression-generator"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/timestamp-converter"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },

  // ─── SEO Tools ───────────────────────────────────────────────────────
  { url: u("/seo-tools/meta-tags"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/seo-tools/lorem-ipsum"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/seo-tools/blog-titles"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/seo-tools/keyword-density"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/seo-tools/schema-markup-generator"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/seo-tools/word-counter"), lastModified: new Date("2026-04-08"), changeFrequency: "monthly" as const, priority: 0.9 },

  // ─── Image Tools ─────────────────────────────────────────────────────
  { url: u("/image-tools/image-compressor"), lastModified: new Date("2026-06-04"), changeFrequency: "weekly" as const, priority: 0.5 },
  { url: u("/image-tools/image-resizer"), lastModified: new Date("2026-06-04"), changeFrequency: "weekly" as const, priority: 0.5 },
  { url: u("/image-tools/image-to-text"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.5 },
  { url: u("/image-tools/ai-image-detector"), lastModified: new Date("2026-03-09"), changeFrequency: "weekly" as const, priority: 0.5 },
  { url: u("/image-tools/background-remover"), lastModified: new Date("2026-04-01"), changeFrequency: "weekly" as const, priority: 0.8 },
  { url: u("/image-tools/image-cropper"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.9 },

  // ─── Security Tools ──────────────────────────────────────────────────
  { url: u("/security-tools/image-steganography"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.9 },

  // ─── PDF Tools ───────────────────────────────────────────────────────
  { url: u("/pdf-tools/image-to-pdf"), lastModified: new Date("2026-06-04"), changeFrequency: "weekly" as const, priority: 0.9 },
  { url: u("/pdf-tools/pdf-sign"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/pdf-tools/pdf-word-converter"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/pdf-tools/pdf-splitter-merger"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/pdf-tools/pdf-unlocker"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/pdf-tools/pdf-compressor"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/pdf-tools/pdf-to-image"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/pdf-tools/pdf-signature-checker"), lastModified: new Date("2026-03-23"), changeFrequency: "weekly" as const, priority: 0.9 },

  // ─── Fun Tools ───────────────────────────────────────────────────────
  { url: u("/fun-tools/anniversary"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/fun-tools/monthsary-calculator"), lastModified: new Date("2026-06-03"), changeFrequency: "monthly" as const, priority: 0.75 },
  { url: u("/fun-tools/birthday-countdown"), lastModified: new Date("2026-03-23"), changeFrequency: "monthly" as const, priority: 0.5 },
  { url: u("/fun-tools/future-age"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/fun-tools/pomodoro-timer"), lastModified: new Date("2026-03-27"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/fun-tools/countdown-timer"), lastModified: new Date("2026-04-21"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/fun-tools/wheel-spinner"), lastModified: new Date("2026-04-21"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/fun-tools/meme-generator"), lastModified: new Date("2026-04-03"), changeFrequency: "weekly" as const, priority: 0.8 },

  // ─── Previously missing — added 2026-05-14 ────────────────────────────
  // AI Tools
  { url: u("/ai-tools/token-to-word-converter"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.7 },

  // Calculators (high-impression GSC queries: concrete calculator 279 imp, body fat, fraction, triangle, time duration, conversion)
  { url: u("/calculator/body-fat-calculator"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/calculator/concrete-calculator"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/calculator/conversion-calculator"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/calculator/fraction-calculator"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/calculator/pace-calculator"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/calculator/standard-deviation-calculator"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/calculator/time-duration"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/calculator/triangle-calculator"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.7 },

  // Converters (utility tools — low individual volume but high cumulative)
  { url: u("/converters/ascii-binary"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.6 },
  { url: u("/converters/integer-base"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.6 },
  { url: u("/converters/json-toml"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.6 },
  { url: u("/converters/json-xml"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.6 },
  { url: u("/converters/morse-code"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/converters/nato-phonetic"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.6 },
  { url: u("/converters/roman-numeral"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/converters/toml-json"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.6 },
  { url: u("/converters/toml-yaml"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.6 },
  { url: u("/converters/unicode"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.6 },
  { url: u("/converters/xml-json"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.6 },
  { url: u("/converters/yaml-toml"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.6 },

  // Crypto Tools
  { url: u("/crypto-tools/ulid-generator"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.6 },

  // Dev Tools
  { url: u("/dev-tools/html-wysiwyg-editor"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/dev-tools/sql-to-json"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },

  // Finance Tools (large untapped category — multiple high-volume queries)
  { url: u("/finance-tools/amortization-calculator"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/compound-interest"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/credit-card-payoff"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/finance-calculator"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/finance-tools/inflation-calculator"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/interest-rate-calculator"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/investment-calculator"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/mortgage-calculator"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.9 },
  { url: u("/finance-tools/payment-calculator"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/finance-tools/retirement-calculator"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/retirement-planner"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.7 },
  { url: u("/finance-tools/salary-calculator"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.8 },
  { url: u("/finance-tools/tax-calculator"), lastModified: new Date("2026-05-14"), changeFrequency: "monthly" as const, priority: 0.8 },

  // SEO Tools
  { url: u("/seo-tools/text-similarity-checker"), lastModified: new Date("2026-06-04"), changeFrequency: "monthly" as const, priority: 0.7 },

  // ─── Blog Content ────────────────────────────────────────────────────
  ...getBlogSitemapPages(),
]

// Indexable pages only — noindex pages are removed so they never leak into the
// sitemap, internal /all-tools listings, or IndexNow pings.
export const indexablePages = sitemapPages.filter((p) => !noindexUrlSet.has(p.url))

const mainPagePaths = new Set([
  "/products",
  "/api-docs",
  "/about",
  "/contact",
  "/faq",
  "/blog",
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
