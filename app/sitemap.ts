import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fasttools.store"
  const currentDate = new Date()

  // Main pages with enhanced metadata and images
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1,
      images: [
        {
          url: "https://fasttools.store/logo.svg",
          title: "FastTools Professional Logo - Free Online Tools",
          caption: "FastTools professional logo with modern FT symbol and blue gradient design for free online tools collection"
        },
        {
          url: "https://fasttools.store/og-image.svg",
          title: "FastTools Social Media Image - Complete Digital Toolkit",
          caption: "FastTools professional social media sharing image showcasing comprehensive free online tools collection"
        },
        {
          url: "https://fasttools.store/favicon.svg",
          title: "FastTools Favicon - Online Tools",
          caption: "FastTools favicon for browser tabs and bookmarks representing free online tools"
        }
      ]
    },
    {
      url: "https://fasttools.store/about",
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/contact",
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: "https://fasttools.store/faq",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/privacy-policy",
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    },
    {
      url: "https://fasttools.store/terms",
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    },
  ]

  // Tool category pages
  const categoryPages = [
    {
      url: "https://fasttools.store/tools",
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://fasttools.store/ai-tools",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/converters",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/date-time-tools",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/dev-tools",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/finance-tools",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/fun-tools",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/image-tools",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/seo-tools",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/social-media-tools",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ]

  // Individual tool pages - ALL TOOLS FROM EVERY CATEGORY
  const toolPages = [
    // Main Calculator Tools
    {
      url: "https://fasttools.store/tools/age-calculator",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      images: [
        {
          url: "https://fasttools.store/og-image.svg",
          title: "Age Calculator Tool",
          caption: "FastTools Age Calculator - Calculate your exact age in years, months, days, hours, and minutes"
        }
      ]
    },
    {
      url: "https://fasttools.store/tools/bmi-calculator",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://fasttools.store/tools/loan-calculator",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://fasttools.store/tools/tax-calculator",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: "https://fasttools.store/tools/percentage-calculator",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/tools/date-difference",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/tools/time-duration",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/tools/compound-interest",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },

    // AI Tools
    {
      url: "https://fasttools.store/ai-tools/caption-generator",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/ai-tools/hashtag-suggester",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/ai-tools/lyrics-generator",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/ai-tools/meme-generator",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/ai-tools/pet-names",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/ai-tools/qr-generator",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },

    // Converters
    {
      url: "https://fasttools.store/converters/currency",
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/converters/file-size",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/converters/length",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/converters/temperature",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/converters/text-case",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/converters/timezone",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },

    // Date & Time Tools
    {
      url: "https://fasttools.store/date-time-tools/age-in-hours",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/date-time-tools/date-to-day",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/date-time-tools/workday-calculator",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/date-time-tools/year-end-countdown",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/date-time-tools/zodiac-sign",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },

    // Dev Tools
    {
      url: "https://fasttools.store/dev-tools/color-palette",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/dev-tools/hex-to-rgb",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/dev-tools/html-beautifier",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/dev-tools/html-to-markdown",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/dev-tools/json-to-csv",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/dev-tools/jwt-decoder",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/dev-tools/markdown-previewer",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/dev-tools/regex-tester",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },

    // Finance Tools
    {
      url: "https://fasttools.store/finance-tools/invoice-generator",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/finance-tools/paypal-fee",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/finance-tools/discount-calculator",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/finance-tools/tip-calculator",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/finance-tools/savings-tracker",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/finance-tools/retirement-planner",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/finance-tools/bill-splitter",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/finance-tools/credit-card-payoff",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },

    // Fun Tools
    {
      url: "https://fasttools.store/fun-tools/future-age",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/fun-tools/love-calculator",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/fun-tools/hashtag-counter",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/fun-tools/birthday-countdown",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/fun-tools/anniversary",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },

    // Image Tools
    {
      url: "https://fasttools.store/image-tools/image-to-text",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/image-tools/background-blur",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/image-tools/image-cropper",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/image-tools/pdf-tools",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/image-tools/pdf-unlocker",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/image-tools/screenshot-to-text",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },

    // SEO Tools
    {
      url: "https://fasttools.store/seo-tools/meta-tags",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/seo-tools/lorem-ipsum",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/seo-tools/hashtags",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/seo-tools/blog-titles",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/seo-tools/keyword-density",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },

    // Social Media Tools
    {
      url: "https://fasttools.store/social-media-tools/youtube-thumbnail",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/social-media-tools/instagram-dp",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/social-media-tools/tiktok-downloader",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/social-media-tools/youtube-tags",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/social-media-tools/link-in-bio",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/social-media-tools/channel-checker",
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ]

  return [...mainPages, ...categoryPages, ...toolPages]
}