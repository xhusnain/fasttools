import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fasttools.store"
  const currentDate = new Date()
  
  // Content freshness strategy - different update frequencies for different content types
  const getFreshnessDate = (daysAgo: number) => {
    const date = new Date()
    date.setDate(date.getDate() - daysAgo)
    return date
  }

  // Main pages with enhanced metadata and images
  const mainPages = [
    {
      url: baseUrl,
      lastModified: getFreshnessDate(1), // Updated daily for freshness signals
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

  // TOPICAL AUTHORITY CLUSTERS - Enhanced SEO Strategy Implementation
  // Based on comprehensive SEO strategy for multi-niche ranking success
  
  // PRIMARY CLUSTERS (5 Main Categories) with optimized priorities
  const categoryPages = [
    // Cluster 1: AI & Automation Tools (Highest Priority - Trending Niche)
    {
      url: "https://fasttools.store/ai-tools",
      lastModified: getFreshnessDate(2), // Updated every 2 days for AI freshness
      changeFrequency: "daily" as const,
      priority: 0.95, // Highest priority for trending AI niche
    },
    
    // Cluster 2: Conversion & Utility Tools (High Priority - Core Business)
    {
      url: "https://fasttools.store/converters",
      lastModified: getFreshnessDate(3), // Updated every 3 days
      changeFrequency: "daily" as const,
      priority: 0.9, // High priority for core conversion tools
    },
    
    // Cluster 3: Business & Finance Tools (High Priority - Monetization)
    {
      url: "https://fasttools.store/finance-tools",
      lastModified: getFreshnessDate(4), // Updated every 4 days
      changeFrequency: "weekly" as const,
      priority: 0.85, // High priority for business tools
    },
    
    // Cluster 4: Content Creation Tools (Medium-High Priority)
    {
      url: "https://fasttools.store/social-media-tools",
      lastModified: getFreshnessDate(5), // Updated every 5 days
      changeFrequency: "weekly" as const,
      priority: 0.8, // Medium-high priority for content creation
    },
    
    // Cluster 5: Developer & Technical Tools (Medium Priority)
    {
      url: "https://fasttools.store/dev-tools",
      lastModified: getFreshnessDate(7), // Updated weekly
      changeFrequency: "weekly" as const,
      priority: 0.75, // Medium priority for developer tools
    },
    
    // Supporting Categories (Lower Priority but Important for Coverage)
    {
      url: "https://fasttools.store/tools",
      lastModified: getFreshnessDate(1), // Updated daily for main hub
      changeFrequency: "daily" as const,
      priority: 0.9, // High priority for main tools page
    },
    {
      url: "https://fasttools.store/image-tools",
      lastModified: getFreshnessDate(6), // Updated every 6 days
      changeFrequency: "weekly" as const,
      priority: 0.7, // Medium priority for image tools
    },
    {
      url: "https://fasttools.store/seo-tools",
      lastModified: getFreshnessDate(8), // Updated every 8 days
      changeFrequency: "weekly" as const,
      priority: 0.7, // Medium priority for SEO tools
    },
    {
      url: "https://fasttools.store/date-time-tools",
      lastModified: getFreshnessDate(10), // Updated every 10 days
      changeFrequency: "weekly" as const,
      priority: 0.65, // Lower priority for date/time tools
    },
    {
      url: "https://fasttools.store/fun-tools",
      lastModified: getFreshnessDate(14), // Updated every 2 weeks
      changeFrequency: "monthly" as const,
      priority: 0.6, // Lower priority for fun tools
    },
  ]

  // INDIVIDUAL TOOL PAGES - Enhanced with Cluster-Specific SEO Strategy
  // Organized by topical authority clusters for maximum ranking potential
  const toolPages = [
    
    // ===== CLUSTER 1: AI & AUTOMATION TOOLS (Highest Priority) =====
    // AI Tools Cluster - Trending niche with highest priority
    {
      url: "https://fasttools.store/ai-tools/caption-generator",
      lastModified: getFreshnessDate(1), // Updated daily for AI freshness
      changeFrequency: "daily" as const,
      priority: 0.9, // High priority for AI tools
    },
    {
      url: "https://fasttools.store/ai-tools/hashtag-suggester",
      lastModified: getFreshnessDate(2),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://fasttools.store/ai-tools/lyrics-generator",
      lastModified: getFreshnessDate(2),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://fasttools.store/ai-tools/meme-generator",
      lastModified: getFreshnessDate(2),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://fasttools.store/ai-tools/pet-names",
      lastModified: getFreshnessDate(3),
      changeFrequency: "daily" as const,
      priority: 0.85,
    },
    {
      url: "https://fasttools.store/ai-tools/qr-generator",
      lastModified: getFreshnessDate(3),
      changeFrequency: "daily" as const,
      priority: 0.85,
    },

    // ===== CLUSTER 2: CONVERSION & UTILITY TOOLS (High Priority) =====
    // Conversion Tools Cluster - Core business tools
    {
      url: "https://fasttools.store/converters/currency",
      lastModified: getFreshnessDate(1), // Updated daily for live rates
      changeFrequency: "daily" as const,
      priority: 0.9, // High priority for currency converter
    },
    {
      url: "https://fasttools.store/converters/file-size",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/converters/length",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/converters/temperature",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/converters/text-case",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/converters/timezone",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },

    // ===== CLUSTER 3: BUSINESS & FINANCE TOOLS (High Priority) =====
    // Business Tools Cluster - Monetization focus
    {
      url: "https://fasttools.store/finance-tools/invoice-generator",
      lastModified: getFreshnessDate(3),
      changeFrequency: "weekly" as const,
      priority: 0.85, // High priority for business tools
    },
    {
      url: "https://fasttools.store/finance-tools/paypal-fee",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/finance-tools/discount-calculator",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/finance-tools/tip-calculator",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/finance-tools/savings-tracker",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/finance-tools/retirement-planner",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/finance-tools/bill-splitter",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/finance-tools/credit-card-payoff",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },

    // ===== CLUSTER 4: CONTENT CREATION TOOLS (Medium-High Priority) =====
    // Content Creation Cluster - Social media and content tools
    {
      url: "https://fasttools.store/social-media-tools/youtube-thumbnail",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.8, // Medium-high priority for content creation
    },
    {
      url: "https://fasttools.store/social-media-tools/instagram-dp",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/social-media-tools/tiktok-downloader",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/social-media-tools/youtube-tags",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/social-media-tools/link-in-bio",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/social-media-tools/channel-checker",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },

    // ===== CLUSTER 5: DEVELOPER & TECHNICAL TOOLS (Medium Priority) =====
    // Developer Tools Cluster - Technical audience
    {
      url: "https://fasttools.store/dev-tools/color-palette",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.75, // Medium priority for developer tools
    },
    {
      url: "https://fasttools.store/dev-tools/hex-to-rgb",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://fasttools.store/dev-tools/html-beautifier",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://fasttools.store/dev-tools/html-to-markdown",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://fasttools.store/dev-tools/json-to-csv",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://fasttools.store/dev-tools/jwt-decoder",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://fasttools.store/dev-tools/markdown-previewer",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://fasttools.store/dev-tools/regex-tester",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },

    // ===== SUPPORTING TOOLS (Lower Priority but Important for Coverage) =====
    // Main Calculator Tools - Supporting tools for comprehensive coverage
    {
      url: "https://fasttools.store/tools/age-calculator",
      lastModified: getFreshnessDate(7),
      changeFrequency: "weekly" as const,
      priority: 0.8, // Medium-high priority for popular calculator
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
      lastModified: getFreshnessDate(7),
      changeFrequency: "weekly" as const,
      priority: 0.8, // Medium-high priority for health calculator
    },
    {
      url: "https://fasttools.store/tools/loan-calculator",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.85, // High priority for financial calculator
    },
    {
      url: "https://fasttools.store/tools/tax-calculator",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.85, // High priority for tax season
    },
    {
      url: "https://fasttools.store/tools/percentage-calculator",
      lastModified: getFreshnessDate(8),
      changeFrequency: "weekly" as const,
      priority: 0.75, // Medium priority for basic calculator
    },
    {
      url: "https://fasttools.store/tools/date-difference",
      lastModified: getFreshnessDate(8),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://fasttools.store/tools/time-duration",
      lastModified: getFreshnessDate(8),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://fasttools.store/tools/compound-interest",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.8, // Medium-high priority for investment tool
    },

    // ===== SUPPORTING CATEGORIES (Lower Priority but Important for Coverage) =====
    // Date & Time Tools - Supporting tools for comprehensive coverage
    {
      url: "https://fasttools.store/date-time-tools/age-in-hours",
      lastModified: getFreshnessDate(10),
      changeFrequency: "weekly" as const,
      priority: 0.7, // Lower priority for date/time tools
    },
    {
      url: "https://fasttools.store/date-time-tools/date-to-day",
      lastModified: getFreshnessDate(10),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/date-time-tools/workday-calculator",
      lastModified: getFreshnessDate(9),
      changeFrequency: "weekly" as const,
      priority: 0.75, // Slightly higher for business use
    },
    {
      url: "https://fasttools.store/date-time-tools/year-end-countdown",
      lastModified: getFreshnessDate(12),
      changeFrequency: "monthly" as const,
      priority: 0.6, // Lower priority for seasonal tool
    },
    {
      url: "https://fasttools.store/date-time-tools/zodiac-sign",
      lastModified: getFreshnessDate(11),
      changeFrequency: "monthly" as const,
      priority: 0.65, // Medium-low priority for fun tool
    },

    // Image Tools - Supporting tools for comprehensive coverage
    {
      url: "https://fasttools.store/image-tools/image-to-text",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.8, // Medium-high priority for AI-powered tool
    },
    {
      url: "https://fasttools.store/image-tools/background-blur",
      lastModified: getFreshnessDate(7),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://fasttools.store/image-tools/image-cropper",
      lastModified: getFreshnessDate(7),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: "https://fasttools.store/image-tools/pdf-tools",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.8, // Medium-high priority for business tool
    },
    {
      url: "https://fasttools.store/image-tools/pdf-unlocker",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/image-tools/screenshot-to-text",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },

    // SEO Tools - Supporting tools for comprehensive coverage
    {
      url: "https://fasttools.store/seo-tools/meta-tags",
      lastModified: getFreshnessDate(8),
      changeFrequency: "weekly" as const,
      priority: 0.8, // Medium-high priority for SEO tool
    },
    {
      url: "https://fasttools.store/seo-tools/lorem-ipsum",
      lastModified: getFreshnessDate(9),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: "https://fasttools.store/seo-tools/hashtags",
      lastModified: getFreshnessDate(8),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/seo-tools/blog-titles",
      lastModified: getFreshnessDate(8),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://fasttools.store/seo-tools/keyword-density",
      lastModified: getFreshnessDate(8),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },

    // Fun Tools - Lower priority but important for user engagement
    {
      url: "https://fasttools.store/fun-tools/future-age",
      lastModified: getFreshnessDate(14),
      changeFrequency: "monthly" as const,
      priority: 0.6, // Lower priority for fun tools
    },
    {
      url: "https://fasttools.store/fun-tools/love-calculator",
      lastModified: getFreshnessDate(14),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: "https://fasttools.store/fun-tools/hashtag-counter",
      lastModified: getFreshnessDate(12),
      changeFrequency: "monthly" as const,
      priority: 0.65, // Slightly higher for social media relevance
    },
    {
      url: "https://fasttools.store/fun-tools/birthday-countdown",
      lastModified: getFreshnessDate(14),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: "https://fasttools.store/fun-tools/anniversary",
      lastModified: getFreshnessDate(14),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },

  ]

  return [...mainPages, ...categoryPages, ...toolPages]
}