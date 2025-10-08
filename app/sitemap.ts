import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fasttools.store"
  const currentDate = new Date()

  // Image data for enhanced SEO
  const getImageData = (path: string) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
    images: [
      {
        url: `${baseUrl}/logo.svg`,
        title: "FastTools Professional Logo",
        caption: "FastTools professional logo with modern FT symbol and blue gradient design"
      },
      {
        url: `${baseUrl}/og-image.svg`,
        title: "FastTools Social Media Image", 
        caption: "FastTools professional social media sharing image with tools showcase"
      }
    ]
  })

  // Enhanced image sitemap data
  const getEnhancedImageData = (path: string, toolName: string) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
    images: [
      {
        url: `${baseUrl}/logo.svg`,
        title: `FastTools ${toolName} Tool`,
        caption: `FastTools professional logo for ${toolName} tool`
      },
      {
        url: `${baseUrl}/og-image.svg`,
        title: `FastTools ${toolName} Tool Preview`,
        caption: `FastTools ${toolName} tool interface and functionality preview`
      }
    ]
  })

  // Main pages with enhanced metadata and images
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1,
      images: [
        {
          url: `${baseUrl}/logo.svg`,
          title: "FastTools Professional Logo - Free Online Tools",
          caption: "FastTools professional logo with modern FT symbol and blue gradient design for free online tools collection"
        },
        {
          url: `${baseUrl}/og-image.svg`,
          title: "FastTools Social Media Image - Complete Digital Toolkit",
          caption: "FastTools professional social media sharing image showcasing comprehensive free online tools collection"
        },
        {
          url: `${baseUrl}/favicon.svg`,
          title: "FastTools Favicon - Online Tools",
          caption: "FastTools favicon for browser tabs and bookmarks representing free online tools"
        }
      ]
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.4,
    },
  ]

  // Tool category pages
  const categoryPages = [
    {
      url: `${baseUrl}/tools`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-tools`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/converters`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/date-time-tools`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/dev-tools`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/finance-tools`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fun-tools`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/image-tools`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/seo-tools`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/social-media-tools`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ]

  // Individual tool pages - ALL TOOLS FROM EVERY CATEGORY
  const toolPages = [
    // Main Calculator Tools
    {
      url: `${baseUrl}/tools/age-calculator`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      images: [
        {
          url: `${baseUrl}/og-image.svg`,
          title: "Age Calculator Tool",
          caption: "FastTools Age Calculator - Calculate your exact age in years, months, days, hours, and minutes"
        }
      ]
    },
    {
      url: `${baseUrl}/tools/bmi-calculator`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/loan-calculator`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/tax-calculator`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/percentage-calculator`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/date-difference`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/time-duration`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/compound-interest`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },

    // AI Tools
    {
      url: `${baseUrl}/ai-tools/caption-generator`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-tools/hashtag-suggester`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-tools/lyrics-generator`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-tools/meme-generator`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-tools/pet-names`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-tools/qr-generator`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },

    // Converters
    {
      url: `${baseUrl}/converters/currency`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/converters/file-size`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/converters/length`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/converters/temperature`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/converters/text-case`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/converters/timezone`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },

    // Date & Time Tools
    {
      url: `${baseUrl}/date-time-tools/age-in-hours`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/date-time-tools/date-to-day`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/date-time-tools/workday-calculator`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/date-time-tools/year-end-countdown`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/date-time-tools/zodiac-sign`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },

    // Dev Tools
    {
      url: `${baseUrl}/dev-tools/color-palette`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/dev-tools/hex-to-rgb`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/dev-tools/html-beautifier`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/dev-tools/html-to-markdown`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/dev-tools/json-to-csv`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/dev-tools/jwt-decoder`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/dev-tools/markdown-previewer`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/dev-tools/regex-tester`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },

    // Finance Tools
    {
      url: `${baseUrl}/finance-tools/invoice-generator`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/finance-tools/paypal-fee`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/finance-tools/discount-calculator`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/finance-tools/tip-calculator`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/finance-tools/savings-tracker`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/finance-tools/retirement-planner`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/finance-tools/bill-splitter`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/finance-tools/credit-card-payoff`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },

    // Fun Tools
    {
      url: `${baseUrl}/fun-tools/future-age`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fun-tools/love-calculator`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fun-tools/hashtag-counter`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fun-tools/birthday-countdown`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fun-tools/anniversary`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },

    // Image Tools
    {
      url: `${baseUrl}/image-tools/image-to-text`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/image-tools/background-blur`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/image-tools/image-cropper`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/image-tools/pdf-tools`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/image-tools/pdf-unlocker`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/image-tools/screenshot-to-text`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },

    // SEO Tools
    {
      url: `${baseUrl}/seo-tools/meta-tags`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/seo-tools/lorem-ipsum`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/seo-tools/hashtags`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/seo-tools/blog-titles`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/seo-tools/keyword-density`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },

    // Social Media Tools
    {
      url: `${baseUrl}/social-media-tools/youtube-thumbnail`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/social-media-tools/instagram-dp`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/social-media-tools/tiktok-downloader`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/social-media-tools/youtube-tags`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/social-media-tools/link-in-bio`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/social-media-tools/channel-checker`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ]

  return [...mainPages, ...categoryPages, ...toolPages]
}