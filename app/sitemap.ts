import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.fasttools.store"
  const currentDate = new Date()

  const getFreshnessDate = (daysAgo: number) => {
    const date = new Date()
    date.setDate(date.getDate() - daysAgo)
    return date
  }
  console.log("Sitemap started")

  const mainPages = [
    {
      url: baseUrl,
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: "https://www.fasttools.store/products",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/api-docs",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.fasttools.store/downloaders",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/about",
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: "https://www.fasttools.store/contact",
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: "https://www.fasttools.store/faq",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/privacy-policy",
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    },
    {
      url: "https://www.fasttools.store/terms",
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    },
    {
      url: "https://www.fasttools.store/cookie-preferences",
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
  ]

  const categoryPages = [
    {
      url: "https://www.fasttools.store/ai-tools",
      lastModified: getFreshnessDate(0), // Updated today - all tools SEO optimized
      changeFrequency: "daily" as const,
      priority: 0.97, // High priority - 4 premium AI tools all FREE
    },

    {
      url: "https://www.fasttools.store/converters",
      lastModified: getFreshnessDate(3),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },

    {
      url: "https://www.fasttools.store/finance-tools",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },

    {
      url: "https://www.fasttools.store/social-media-tools",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },

    {
      url: "https://www.fasttools.store/dev-tools",
      lastModified: getFreshnessDate(7),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },

    {
      url: "https://www.fasttools.store/calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.fasttools.store/image-tools",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://www.fasttools.store/seo-tools",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/fun-tools",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/pdf-tools",
      lastModified: getFreshnessDate(0), // Updated today - all tools SEO optimized
      changeFrequency: "daily" as const,
      priority: 0.98, // High priority - comprehensive PDF tools suite
    },
  ]

  const toolPages = [


    {
      url: "https://www.fasttools.store/calculator/conversion-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },



    {
      url: "https://www.fasttools.store/calculator/ip-subnet-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.85,
    },

    {
      url: "https://www.fasttools.store/calculator/age-calculator",
      lastModified: getFreshnessDate(7),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/calculator/bmi-calculator",
      lastModified: getFreshnessDate(7),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/calculator/loan-calculator",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: "https://www.fasttools.store/calculator/tax-calculator",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: "https://www.fasttools.store/calculator/percentage-calculator",
      lastModified: getFreshnessDate(8),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://www.fasttools.store/calculator/date-difference",
      lastModified: getFreshnessDate(0),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.fasttools.store/calculator/time-duration",
      lastModified: getFreshnessDate(8),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://www.fasttools.store/calculator/compound-interest",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/calculator/gpa-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.85,
    },
    {
      url: "https://www.fasttools.store/calculator/concrete-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.85,
    },
    {
      url: "https://www.fasttools.store/calculator/scientific-calculator",
      lastModified: getFreshnessDate(0),
      changeFrequency: "daily" as const,
      priority: 0.95,
      images: [
        "https://www.fasttools.store/images/calculator/functions.png",
        "https://www.fasttools.store/images/calculator/comparison.png",
        "https://www.fasttools.store/images/calculator/advanced.png",
      ],
    },
    {
      url: "https://www.fasttools.store/calculator/triangle-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.fasttools.store/calculator/fraction-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.fasttools.store/calculator/standard-deviation-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.fasttools.store/calculator/pregnancy-conception-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/calculator/pregnancy-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/calculator/pace-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/calculator/bmr-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/calculator/body-fat-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/calculator/calorie-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/calculator/sales-tax-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/calculator/interest-rate-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/calculator/salary-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/calculator/finance-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/calculator/inflation-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/calculator/investment-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/calculator/amortization-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/calculator/retirement-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/calculator/payment-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/calculator/mortgage-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/calculator/love-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    // AI Tools - All Premium Features FREE
    {
      url: "https://www.fasttools.store/ai-tools/qr-generator",
      lastModified: getFreshnessDate(0), // Updated today with premium features
      changeFrequency: "daily" as const,
      priority: 0.98, // High priority - all premium features FREE
    },
    {
      url: "https://www.fasttools.store/ai-tools/caption-generator",
      lastModified: getFreshnessDate(0), // Recently SEO optimized
      changeFrequency: "daily" as const,
      priority: 0.96,
    },
    {
      url: "https://www.fasttools.store/ai-tools/lyrics-generator",
      lastModified: getFreshnessDate(0), // Recently SEO optimized with 40+ languages
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/ai-tools/pet-names",
      lastModified: getFreshnessDate(0), // Updated today with 100 AI-generated names + SEO
      changeFrequency: "daily" as const,
      priority: 0.94, // High priority - 100 free categorized names
    },
    // Social Media Tools
    {
      url: "https://www.fasttools.store/social-media-tools/tiktok-downloader",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/social-media-tools/instagram-downloader",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/social-media-tools/facebook-downloader",
      lastModified: getFreshnessDate(0), // Updated today with comprehensive SEO optimization
      changeFrequency: "daily" as const,
      priority: 0.95, // High priority - popular video downloader tool
    },
    {
      url: "https://www.fasttools.store/social-media-tools/x-video-downloader",
      lastModified: getFreshnessDate(0),
      changeFrequency: "daily" as const,
      priority: 0.95, // High priority - popular X/Twitter video downloader tool
    },
    {
      url: "https://www.fasttools.store/social-media-tools/youtube-tags",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/social-media-tools/youtube-thumbnail",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/social-media-tools/youtube-downloader",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95, // High priority - popular YouTube video downloader tool
    },
    {
      url: "https://www.fasttools.store/social-media-tools/channel-checker",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/social-media-tools/hashtag-counter",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/social-media-tools/instagram-dp",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/social-media-tools/link-in-bio",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },

    // API Documentation Pages
    {
      url: "https://www.fasttools.store/converters/currency-api",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },

    // Converter Tools
    {
      url: "https://www.fasttools.store/converters/currency",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.fasttools.store/converters/file-size",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.fasttools.store/converters/length",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.fasttools.store/converters/temperature",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.fasttools.store/converters/text-case",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.fasttools.store/converters/timezone",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },

    // SEO Tools
    {
      url: "https://www.fasttools.store/seo-tools/meta-tags",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/seo-tools/lorem-ipsum",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.fasttools.store/seo-tools/hashtags",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/seo-tools/blog-titles",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/seo-tools/keyword-density",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },

    // Fun Tools
    {
      url: "https://www.fasttools.store/fun-tools/anniversary",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/fun-tools/birthday-countdown",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/fun-tools/future-age",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },

    // Finance Tools
    {
      url: "https://www.fasttools.store/finance-tools/bill-splitter",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/finance-tools/credit-card-payoff",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/finance-tools/discount-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/finance-tools/invoice-generator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.fasttools.store/finance-tools/paypal-fee",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/finance-tools/retirement-planner",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/finance-tools/savings-tracker",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/finance-tools/tip-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },

    // Developer Tools
    {
      url: "https://www.fasttools.store/dev-tools/jwt-decoder",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/dev-tools/regex-tester",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/dev-tools/json-to-csv",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.fasttools.store/dev-tools/html-beautifier",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/dev-tools/color-palette",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/dev-tools/hex-to-rgb",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.fasttools.store/dev-tools/html-to-markdown",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.fasttools.store/dev-tools/markdown-previewer",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },

    // Image Tools
    {
      url: "https://www.fasttools.store/image-tools/image-background-remover",
      lastModified: getFreshnessDate(1),
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/image-tools/image-blur",
      lastModified: getFreshnessDate(1),
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/image-tools/image-to-text",
      lastModified: getFreshnessDate(2),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },

    // PDF Tools
    {
      url: "https://www.fasttools.store/pdf-tools/pdf-sign",
      lastModified: getFreshnessDate(0), // Updated today - production ready
      changeFrequency: "daily" as const,
      priority: 0.98, // High priority - popular for HR, freelancers, legal
    },
    {
      url: "https://www.fasttools.store/pdf-tools/pdf-word-converter",
      lastModified: getFreshnessDate(0), // Updated today - production ready
      changeFrequency: "daily" as const,
      priority: 0.97, // High priority - bidirectional converter
    },
    {
      url: "https://www.fasttools.store/pdf-tools/pdf-splitter-merger",
      lastModified: getFreshnessDate(0), // Updated today - production ready
      changeFrequency: "daily" as const,
      priority: 0.97, // High priority - essential PDF tool
    },
    {
      url: "https://www.fasttools.store/pdf-tools/pdf-unlocker",
      lastModified: getFreshnessDate(0), // Updated today - production ready
      changeFrequency: "daily" as const,
      priority: 0.96, // High priority - password removal tool
    },
    {
      url: "https://www.fasttools.store/pdf-tools/pdf-compressor",
      lastModified: getFreshnessDate(0), // Updated today - production ready
      changeFrequency: "daily" as const,
      priority: 0.96, // High priority - file size optimization
    },
    {
      url: "https://www.fasttools.store/pdf-tools/pdf-to-image",
      lastModified: getFreshnessDate(0), // Updated today - production ready
      changeFrequency: "daily" as const,
      priority: 0.95, // High priority - format conversion
    },

  ]

  return [...mainPages, ...categoryPages, ...toolPages]
}