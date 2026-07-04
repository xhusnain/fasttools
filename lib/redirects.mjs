export const permanentRedirects = [
  // ─────────────────────────────────────────────────────────────────────────
  // Legacy /tools/* calculators → /calculator/*  (mass restructure recovery)
  // Finance calculators moved on to /finance-tools/*, so those MUST be listed
  // BEFORE the /tools/:path* catch-all (Next.js uses first-match-wins ordering).
  // ─────────────────────────────────────────────────────────────────────────
  { source: "/tools/amortization-calculator", destination: "/finance-tools/loan-calculator", permanent: true },
  { source: "/tools/compound-interest", destination: "/finance-tools/compound-interest", permanent: true },
  { source: "/tools/finance-calculator", destination: "/finance-tools/finance-calculator", permanent: true },
  { source: "/tools/inflation-calculator", destination: "/finance-tools/inflation-calculator", permanent: true },
  { source: "/tools/interest-rate-calculator", destination: "/finance-tools/loan-calculator", permanent: true },
  { source: "/tools/investment-calculator", destination: "/finance-tools/compound-interest", permanent: true },
  { source: "/tools/loan-calculator", destination: "/finance-tools/loan-calculator", permanent: true },
  { source: "/tools/mortgage-calculator", destination: "/finance-tools/mortgage-calculator", permanent: true },
  { source: "/tools/payment-calculator", destination: "/finance-tools/loan-calculator", permanent: true },
  { source: "/tools/retirement-calculator", destination: "/finance-tools/retirement-calculator", permanent: true },
  { source: "/tools/salary-calculator", destination: "/finance-tools/salary-calculator", permanent: true },
  { source: "/tools/sales-tax-calculator", destination: "/finance-tools/sales-tax-calculator", permanent: true },
  { source: "/tools/tax-calculator", destination: "/finance-tools/tax-calculator", permanent: true },
  // Everything else that lived under /tools/* now lives under /calculator/*
  { source: "/tools", destination: "/calculator", permanent: true },
  { source: "/tools/:path*", destination: "/calculator/:path*", permanent: true },

  // ─── Legacy /converters & cross-category renames ─────────────────────────
  { source: "/converters/conversion-calculator", destination: "/calculator/conversion-calculator", permanent: true },
  { source: "/converters/currency-api", destination: "/converters/currency", permanent: true },
  { source: "/dev-tools/uuid-generator", destination: "/crypto-tools/uuid-generator", permanent: true },
  { source: "/image-tools/pdf-tools", destination: "/pdf-tools/pdf-splitter-merger", permanent: true },
  { source: "/image-tools/pdf-unlocker", destination: "/pdf-tools/pdf-unlocker", permanent: true },

  // ─── Removed /date-time-tools (date/time calcs folded into /calculator) ───
  { source: "/date-time-tools", destination: "/calculator", permanent: true },
  { source: "/date-time-tools/:path*", destination: "/calculator", permanent: true },

  // ─── Image tools renamed / removed ───────────────────────────────────────
  { source: "/image-tools/image-background-remover", destination: "/image-tools/background-remover", permanent: true },
  { source: "/image-tools/screenshot-to-text", destination: "/image-tools/image-to-text", permanent: true },
  { source: "/image-tools/background-blur", destination: "/image-tools", permanent: true },
  { source: "/image-tools/image-blur", destination: "/image-tools", permanent: true },
  { source: "/image-tools/photo-editor", destination: "/image-tools", permanent: true },

  // ─── AI / fun / seo tool moves & removals ────────────────────────────────
  { source: "/ai-tools/meme-generator", destination: "/fun-tools/meme-generator", permanent: true },
  { source: "/ai-tools/hashtag-suggester", destination: "/ai-tools", permanent: true },
  { source: "/fun-tools/love-calculator", destination: "/calculator/love-calculator", permanent: true },
  { source: "/fun-tools/hashtag-counter", destination: "/social-media-tools/hashtag-counter", permanent: true },
  { source: "/seo-tools/hashtags", destination: "/seo-tools", permanent: true },
  { source: "/dev-tools/antigravity-skill-builder", destination: "/dev-tools", permanent: true },

  // ─── Removed downloaders section → social-media-tools ─────────────────────
  { source: "/downloaders", destination: "/social-media-tools", permanent: true },
  { source: "/downloaders/:path*", destination: "/social-media-tools", permanent: true },
  { source: "/social-media-tools/instagram-downloader", destination: "/social-media-tools/instagram-dp", permanent: true },
  { source: "/social-media-tools/youtube-playlist-downloader", destination: "/social-media-tools/channel-checker", permanent: true },
  { source: "/social-media-tools/youtube-downloader", destination: "/social-media-tools", permanent: true },
  { source: "/social-media-tools/tiktok-downloader", destination: "/social-media-tools", permanent: true },
  { source: "/social-media-tools/capcut-downloader", destination: "/social-media-tools", permanent: true },
  { source: "/social-media-tools/douyin-downloader", destination: "/social-media-tools", permanent: true },
  { source: "/social-media-tools/facebook-downloader", destination: "/social-media-tools", permanent: true },
  { source: "/social-media-tools/pinterest-downloader", destination: "/social-media-tools", permanent: true },
  { source: "/social-media-tools/soundcloud-downloader", destination: "/social-media-tools", permanent: true },
  { source: "/social-media-tools/x-video-downloader", destination: "/social-media-tools", permanent: true },
  { source: "/social-media-tools/instagram-dp/private-downloader", destination: "/social-media-tools/instagram-dp/private-account", permanent: true },

  // ─── Removed content sections ────────────────────────────────────────────
  { source: "/guides", destination: "/", permanent: true },
  { source: "/guides/:slug*", destination: "/", permanent: true },
  { source: "/tutorials/:slug*", destination: "/", permanent: true },
  { source: "/blog/archive", destination: "/blog", permanent: true },
  { source: "/learn", destination: "/", permanent: true },
  { source: "/live-tv", destination: "/", permanent: true },
  { source: "/resources", destination: "/", permanent: true },

  // ─── Removed festivals section ───────────────────────────────────────────
  { source: "/festivals", destination: "/", permanent: true },
  { source: "/festivals/turkey-defrost-calculator", destination: "/calculator", permanent: true },
  { source: "/festivals/christmas-font-converter", destination: "/converters", permanent: true },

  // ─── 2026-07 SEO fixes: de-dated slug (year in slug decays every January) ─
  { source: "/social-media-tools/channel-checker/handle-availability-2026", destination: "/social-media-tools/channel-checker/handle-availability", permanent: true },

  // ─── 2026-07 republish: exact-searched-phrase slugs (Phase 2a) ────────────
  { source: "/finance-tools/paypal-fee", destination: "/finance-tools/paypal-fee-calculator", permanent: true },
  { source: "/fun-tools/future-age", destination: "/fun-tools/how-old-will-i-be", permanent: true },
  { source: "/fun-tools/anniversary", destination: "/fun-tools/anniversary-calculator", permanent: true },
  { source: "/converters/json-toml", destination: "/converters/json-to-toml", permanent: true },
  { source: "/converters/toml-json", destination: "/converters/toml-to-json", permanent: true },
  { source: "/converters/toml-yaml", destination: "/converters/toml-to-yaml", permanent: true },
  { source: "/converters/yaml-toml", destination: "/converters/yaml-to-toml", permanent: true },
  { source: "/converters/yaml-json", destination: "/converters/yaml-to-json", permanent: true },
  { source: "/converters/json-yaml", destination: "/converters/json-to-yaml", permanent: true },
  { source: "/converters/xml-json", destination: "/converters/xml-to-json", permanent: true },
  { source: "/dev-tools/color-palette", destination: "/dev-tools/color-palette-generator", permanent: true },
  { source: "/dev-tools/slugify-string", destination: "/dev-tools/url-slug-generator", permanent: true },
  { source: "/finance-tools/quarterly-tax-estimator", destination: "/finance-tools/quarterly-tax-calculator", permanent: true },
  { source: "/finance-tools/saas-payback-calculator", destination: "/finance-tools/cac-payback-calculator", permanent: true },
  { source: "/crypto-tools/password-strength-analyzer", destination: "/crypto-tools/password-strength-checker", permanent: true },
  { source: "/web-tools/auth-generator", destination: "/web-tools/basic-auth-header-generator", permanent: true },
  { source: "/seo-tools/blog-titles", destination: "/seo-tools/blog-title-generator", permanent: true },

  // ─── 2026-07 consolidation: duplicate tools merged into survivors (2b) ────
  { source: "/calculator/bmr-calculator", destination: "/calculator/tdee-macro-calculator", permanent: true },
  { source: "/calculator/calorie-calculator", destination: "/calculator/tdee-macro-calculator", permanent: true },
  { source: "/finance-tools/retirement-planner", destination: "/finance-tools/retirement-calculator", permanent: true },
  { source: "/finance-tools/tax-bracket-calculator", destination: "/finance-tools/tax-calculator", permanent: true },
  { source: "/finance-tools/payment-calculator", destination: "/finance-tools/loan-calculator", permanent: true },
  { source: "/finance-tools/amortization-calculator", destination: "/finance-tools/loan-calculator", permanent: true },
  { source: "/finance-tools/interest-rate-calculator", destination: "/finance-tools/loan-calculator", permanent: true },
  { source: "/finance-tools/investment-calculator", destination: "/finance-tools/compound-interest", permanent: true },
  { source: "/finance-tools/credit-card-payoff", destination: "/finance-tools/debt-payoff-calculator", permanent: true },
  { source: "/finance-tools/tip-calculator", destination: "/finance-tools/bill-splitter", permanent: true },
  { source: "/converters/json-xml", destination: "/converters/xml-to-json", permanent: true },
  { source: "/crypto-tools/totp-qr-code-generator", destination: "/crypto-tools/otp-generator", permanent: true },
]
