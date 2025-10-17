import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.fasttools.store"
  const currentDate = new Date()
  
  const getFreshnessDate = (daysAgo: number) => {
    const date = new Date()
    date.setDate(date.getDate() - daysAgo)
    return date
  }

  const mainPages = [
    {
      url: baseUrl,
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 1,
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
      lastModified: getFreshnessDate(2),
      changeFrequency: "daily" as const,
      priority: 0.95,
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
      url: "https://www.fasttools.store/tools",
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
      lastModified: getFreshnessDate(8),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://www.fasttools.store/date-time-tools",
      lastModified: getFreshnessDate(10),
      changeFrequency: "weekly" as const,
      priority: 0.65,
    },
    {
      url: "https://www.fasttools.store/fun-tools",
      lastModified: getFreshnessDate(14),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ]

  const toolPages = [
    
    {
      url: "https://www.fasttools.store/ai-tools/caption-generator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.fasttools.store/ai-tools/hashtag-suggester",
      lastModified: getFreshnessDate(2),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.fasttools.store/ai-tools/lyrics-generator",
      lastModified: getFreshnessDate(2),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.fasttools.store/ai-tools/meme-generator",
      lastModified: getFreshnessDate(2),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.fasttools.store/ai-tools/pet-names",
      lastModified: getFreshnessDate(3),
      changeFrequency: "daily" as const,
      priority: 0.85,
    },
    {
      url: "https://www.fasttools.store/ai-tools/qr-generator",
      lastModified: getFreshnessDate(3),
      changeFrequency: "daily" as const,
      priority: 0.85,
    },

    {
      url: "https://www.fasttools.store/converters/currency",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.fasttools.store/converters/file-size",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/converters/length",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/converters/temperature",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/converters/text-case",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/converters/timezone",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/tools/conversion-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },

    {
      url: "https://www.fasttools.store/finance-tools/invoice-generator",
      lastModified: getFreshnessDate(3),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: "https://www.fasttools.store/finance-tools/paypal-fee",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/finance-tools/discount-calculator",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/finance-tools/tip-calculator",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/finance-tools/savings-tracker",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/finance-tools/retirement-planner",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/finance-tools/bill-splitter",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/finance-tools/credit-card-payoff",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },

    {
      url: "https://www.fasttools.store/social-media-tools/youtube-thumbnail",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/social-media-tools/instagram-dp",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/social-media-tools/tiktok-downloader",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/social-media-tools/youtube-tags",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/social-media-tools/link-in-bio",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/social-media-tools/channel-checker",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/social-media-tools/youtube-downloader",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },

    {
      url: "https://www.fasttools.store/dev-tools/color-palette",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://www.fasttools.store/dev-tools/hex-to-rgb",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://www.fasttools.store/dev-tools/html-beautifier",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://www.fasttools.store/dev-tools/html-to-markdown",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://www.fasttools.store/dev-tools/json-to-csv",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://www.fasttools.store/dev-tools/jwt-decoder",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://www.fasttools.store/dev-tools/markdown-previewer",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://www.fasttools.store/dev-tools/regex-tester",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://www.fasttools.store/tools/ip-subnet-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.85,
    },

    {
      url: "https://www.fasttools.store/tools/age-calculator",
      lastModified: getFreshnessDate(7),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/tools/bmi-calculator",
      lastModified: getFreshnessDate(7),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/tools/loan-calculator",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: "https://www.fasttools.store/tools/tax-calculator",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: "https://www.fasttools.store/tools/percentage-calculator",
      lastModified: getFreshnessDate(8),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://www.fasttools.store/tools/date-difference",
      lastModified: getFreshnessDate(8),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://www.fasttools.store/tools/time-duration",
      lastModified: getFreshnessDate(8),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://www.fasttools.store/tools/compound-interest",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/tools/gpa-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.85,
    },
    {
      url: "https://www.fasttools.store/tools/concrete-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.85,
    },
    {
      url: "https://www.fasttools.store/tools/scientific-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.fasttools.store/tools/triangle-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.fasttools.store/tools/fraction-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.fasttools.store/tools/standard-deviation-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://www.fasttools.store/tools/pregnancy-conception-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/tools/pregnancy-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/tools/pace-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/tools/bmr-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/tools/body-fat-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/tools/calorie-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/tools/sales-tax-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/tools/interest-rate-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/tools/salary-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/tools/finance-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/tools/inflation-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/tools/investment-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/tools/amortization-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/tools/retirement-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/tools/payment-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/tools/mortgage-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },

    {
      url: "https://www.fasttools.store/date-time-tools/age-in-hours",
      lastModified: getFreshnessDate(10),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://www.fasttools.store/date-time-tools/date-to-day",
      lastModified: getFreshnessDate(10),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://www.fasttools.store/date-time-tools/workday-calculator",
      lastModified: getFreshnessDate(9),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://www.fasttools.store/date-time-tools/year-end-countdown",
      lastModified: getFreshnessDate(12),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: "https://www.fasttools.store/date-time-tools/zodiac-sign",
      lastModified: getFreshnessDate(11),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    },

    {
      url: "https://www.fasttools.store/image-tools/image-to-text",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/image-tools/background-blur",
      lastModified: getFreshnessDate(7),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://www.fasttools.store/image-tools/image-cropper",
      lastModified: getFreshnessDate(7),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://www.fasttools.store/image-tools/pdf-tools",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/image-tools/pdf-unlocker",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/image-tools/screenshot-to-text",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },

    {
      url: "https://www.fasttools.store/seo-tools/meta-tags",
      lastModified: getFreshnessDate(8),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/seo-tools/lorem-ipsum",
      lastModified: getFreshnessDate(9),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://www.fasttools.store/seo-tools/hashtags",
      lastModified: getFreshnessDate(8),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/seo-tools/blog-titles",
      lastModified: getFreshnessDate(8),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://www.fasttools.store/seo-tools/keyword-density",
      lastModified: getFreshnessDate(8),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },

    {
      url: "https://www.fasttools.store/fun-tools/future-age",
      lastModified: getFreshnessDate(14),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: "https://www.fasttools.store/fun-tools/love-calculator",
      lastModified: getFreshnessDate(14),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: "https://www.fasttools.store/fun-tools/hashtag-counter",
      lastModified: getFreshnessDate(12),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    },
    {
      url: "https://www.fasttools.store/fun-tools/birthday-countdown",
      lastModified: getFreshnessDate(14),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: "https://www.fasttools.store/fun-tools/anniversary",
      lastModified: getFreshnessDate(14),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },


  ]

  return [...mainPages, ...categoryPages, ...toolPages]
}