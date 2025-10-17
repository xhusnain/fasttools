import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.fasttools.store"
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

  // TOPICAL AUTHORITY CLUSTERS - Enhanced SEO Strategy Implementation
  // Based on comprehensive SEO strategy for multi-niche ranking success
  
  // PRIMARY CLUSTERS (5 Main Categories) with optimized priorities
  const categoryPages = [
    // Cluster 1: AI & Automation Tools (Highest Priority - Trending Niche)
    {
      url: "https://www.fasttools.store/ai-tools",
      lastModified: getFreshnessDate(2), // Updated every 2 days for AI freshness
      changeFrequency: "daily" as const,
      priority: 0.95, // Highest priority for trending AI niche
    },
    
    // Cluster 2: Conversion & Utility Tools (High Priority - Core Business)
    {
      url: "https://www.fasttools.store/converters",
      lastModified: getFreshnessDate(3), // Updated every 3 days
      changeFrequency: "daily" as const,
      priority: 0.9, // High priority for core conversion tools
    },
    
    // Cluster 3: Business & Finance Tools (High Priority - Monetization)
    {
      url: "https://www.fasttools.store/finance-tools",
      lastModified: getFreshnessDate(4), // Updated every 4 days
      changeFrequency: "weekly" as const,
      priority: 0.85, // High priority for business tools
    },
    
    // Cluster 4: Content Creation Tools (Medium-High Priority)
    {
      url: "https://www.fasttools.store/social-media-tools",
      lastModified: getFreshnessDate(5), // Updated every 5 days
      changeFrequency: "weekly" as const,
      priority: 0.8, // Medium-high priority for content creation
    },
    
    // Cluster 5: Developer & Technical Tools (Medium Priority)
    {
      url: "https://www.fasttools.store/dev-tools",
      lastModified: getFreshnessDate(7), // Updated weekly
      changeFrequency: "weekly" as const,
      priority: 0.75, // Medium priority for developer tools
    },
    
    // Supporting Categories (Lower Priority but Important for Coverage)
    {
      url: "https://www.fasttools.store/tools",
      lastModified: getFreshnessDate(1), // Updated daily for main hub
      changeFrequency: "daily" as const,
      priority: 0.9, // High priority for main tools page
    },
    {
      url: "https://www.fasttools.store/image-tools",
      lastModified: getFreshnessDate(6), // Updated every 6 days
      changeFrequency: "weekly" as const,
      priority: 0.7, // Medium priority for image tools
    },
    {
      url: "https://www.fasttools.store/seo-tools",
      lastModified: getFreshnessDate(8), // Updated every 8 days
      changeFrequency: "weekly" as const,
      priority: 0.7, // Medium priority for SEO tools
    },
    {
      url: "https://www.fasttools.store/date-time-tools",
      lastModified: getFreshnessDate(10), // Updated every 10 days
      changeFrequency: "weekly" as const,
      priority: 0.65, // Lower priority for date/time tools
    },
    {
      url: "https://www.fasttools.store/fun-tools",
      lastModified: getFreshnessDate(14), // Updated every 2 weeks
      changeFrequency: "monthly" as const,
      priority: 0.6, // Lower priority for fun tools
    },
    {
      url: "https://www.fasttools.store/learn",
      lastModified: getFreshnessDate(1), // Updated daily for new content
      changeFrequency: "daily" as const,
      priority: 0.8, // High priority for learning section
    },
  ]

  // INDIVIDUAL TOOL PAGES - Enhanced with Cluster-Specific SEO Strategy
  // Organized by topical authority clusters for maximum ranking potential
  const toolPages = [
    
    // ===== CLUSTER 1: AI & AUTOMATION TOOLS (Highest Priority) =====
    // AI Tools Cluster - Trending niche with highest priority
    {
      url: "https://www.fasttools.store/ai-tools/caption-generator",
      lastModified: getFreshnessDate(1), // Updated daily for AI freshness
      changeFrequency: "daily" as const,
      priority: 0.9, // High priority for AI tools
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

    // ===== CLUSTER 2: CONVERSION & UTILITY TOOLS (High Priority) =====
    // Conversion Tools Cluster - Core business tools
    {
      url: "https://www.fasttools.store/converters/currency",
      lastModified: getFreshnessDate(1), // Updated daily for live rates
      changeFrequency: "daily" as const,
      priority: 0.9, // High priority for currency converter
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
      lastModified: getFreshnessDate(1), // Updated daily for new tool
      changeFrequency: "daily" as const,
      priority: 0.9, // High priority for comprehensive conversion tool
    },

    // ===== CLUSTER 3: BUSINESS & FINANCE TOOLS (High Priority) =====
    // Business Tools Cluster - Monetization focus
    {
      url: "https://www.fasttools.store/finance-tools/invoice-generator",
      lastModified: getFreshnessDate(3),
      changeFrequency: "weekly" as const,
      priority: 0.85, // High priority for business tools
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

    // ===== CLUSTER 4: CONTENT CREATION TOOLS (Medium-High Priority) =====
    // Content Creation Cluster - Social media and content tools
    {
      url: "https://www.fasttools.store/social-media-tools/youtube-thumbnail",
      lastModified: getFreshnessDate(4),
      changeFrequency: "weekly" as const,
      priority: 0.8, // Medium-high priority for content creation
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

    // ===== CLUSTER 5: DEVELOPER & TECHNICAL TOOLS (Medium Priority) =====
    // Developer Tools Cluster - Technical audience
    {
      url: "https://www.fasttools.store/dev-tools/color-palette",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.75, // Medium priority for developer tools
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
      lastModified: getFreshnessDate(1), // Updated daily for new tool
      changeFrequency: "daily" as const,
      priority: 0.85, // High priority for network tool
    },

    // ===== SUPPORTING TOOLS (Lower Priority but Important for Coverage) =====
    // Main Calculator Tools - Supporting tools for comprehensive coverage
    {
      url: "https://www.fasttools.store/tools/age-calculator",
      lastModified: getFreshnessDate(7),
      changeFrequency: "weekly" as const,
      priority: 0.8, // Medium-high priority for popular calculator
    },
    {
      url: "https://www.fasttools.store/tools/bmi-calculator",
      lastModified: getFreshnessDate(7),
      changeFrequency: "weekly" as const,
      priority: 0.8, // Medium-high priority for health calculator
    },
    {
      url: "https://www.fasttools.store/tools/loan-calculator",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.85, // High priority for financial calculator
    },
    {
      url: "https://www.fasttools.store/tools/tax-calculator",
      lastModified: getFreshnessDate(5),
      changeFrequency: "weekly" as const,
      priority: 0.85, // High priority for tax season
    },
    {
      url: "https://www.fasttools.store/tools/percentage-calculator",
      lastModified: getFreshnessDate(8),
      changeFrequency: "weekly" as const,
      priority: 0.75, // Medium priority for basic calculator
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
      priority: 0.8, // Medium-high priority for investment tool
    },
    {
      url: "https://www.fasttools.store/tools/gpa-calculator",
      lastModified: getFreshnessDate(1), // Updated daily for new tool
      changeFrequency: "daily" as const,
      priority: 0.85, // High priority for educational tool
    },
    {
      url: "https://www.fasttools.store/tools/concrete-calculator",
      lastModified: getFreshnessDate(1), // Updated daily for new tool
      changeFrequency: "daily" as const,
      priority: 0.85, // High priority for construction tool
    },
    {
      url: "https://www.fasttools.store/tools/scientific-calculator",
      lastModified: getFreshnessDate(1), // Updated daily for new tool
      changeFrequency: "daily" as const,
      priority: 0.9, // High priority for scientific calculator
    },
    {
      url: "https://www.fasttools.store/tools/triangle-calculator",
      lastModified: getFreshnessDate(1), // Updated daily for new tool
      changeFrequency: "daily" as const,
      priority: 0.9, // High priority for triangle calculator
    },
    {
      url: "https://www.fasttools.store/tools/fraction-calculator",
      lastModified: getFreshnessDate(1), // Updated daily for new tool
      changeFrequency: "daily" as const,
      priority: 0.9, // High priority for fraction calculator
    },
    {
      url: "https://www.fasttools.store/tools/standard-deviation-calculator",
      lastModified: getFreshnessDate(1), // Updated daily for new tool
      changeFrequency: "daily" as const,
      priority: 0.9, // High priority for statistics calculator
    },
    {
      url: "https://www.fasttools.store/tools/pregnancy-conception-calculator",
      lastModified: getFreshnessDate(1), // Updated daily for new tool
      changeFrequency: "daily" as const,
      priority: 0.95, // Highest priority for pregnancy calculator
    },
    {
      url: "https://www.fasttools.store/tools/pregnancy-calculator",
      lastModified: getFreshnessDate(1), // Updated daily for new tool
      changeFrequency: "daily" as const,
      priority: 0.95, // Highest priority for pregnancy calculator
    },
    {
      url: "https://www.fasttools.store/tools/pace-calculator",
      lastModified: getFreshnessDate(1), // Updated daily for new tool
      changeFrequency: "daily" as const,
      priority: 0.95, // Highest priority for pace calculator
    },
    {
      url: "https://www.fasttools.store/tools/bmr-calculator",
      lastModified: getFreshnessDate(1), // Updated daily for new tool
      changeFrequency: "daily" as const,
      priority: 0.95, // Highest priority for BMR calculator
    },
    {
      url: "https://www.fasttools.store/tools/body-fat-calculator",
      lastModified: getFreshnessDate(1), // Updated daily for new tool
      changeFrequency: "daily" as const,
      priority: 0.95, // Highest priority for body fat calculator
    },
    {
      url: "https://www.fasttools.store/tools/calorie-calculator",
      lastModified: getFreshnessDate(1), // Updated daily for new tool
      changeFrequency: "daily" as const,
      priority: 0.95, // Highest priority for calorie calculator
    },
    {
      url: "https://www.fasttools.store/tools/sales-tax-calculator",
      lastModified: getFreshnessDate(1), // Updated daily for new tool
      changeFrequency: "daily" as const,
      priority: 0.95, // Highest priority for sales tax calculator
    },
    {
      url: "https://www.fasttools.store/tools/interest-rate-calculator",
      lastModified: getFreshnessDate(1), // Updated daily for new tool
      changeFrequency: "daily" as const,
      priority: 0.95, // Highest priority for interest rate calculator
    },
    {
      url: "https://www.fasttools.store/tools/salary-calculator",
      lastModified: getFreshnessDate(1), // Updated daily for new tool
      changeFrequency: "daily" as const,
      priority: 0.95, // Highest priority for salary calculator
    },
    {
      url: "https://www.fasttools.store/tools/finance-calculator",
      lastModified: getFreshnessDate(1), // Updated daily for new tool
      changeFrequency: "daily" as const,
      priority: 0.95, // Highest priority for finance calculator
    },
    {
      url: "https://www.fasttools.store/tools/inflation-calculator",
      lastModified: getFreshnessDate(1), // Updated daily for new tool
      changeFrequency: "daily" as const,
      priority: 0.95, // Highest priority for inflation calculator
    },
    {
      url: "https://www.fasttools.store/tools/investment-calculator",
      lastModified: getFreshnessDate(1), // Updated daily for new tool
      changeFrequency: "daily" as const,
      priority: 0.95, // Highest priority for investment calculator
    },
    {
      url: "https://www.fasttools.store/tools/amortization-calculator",
      lastModified: getFreshnessDate(1), // Updated daily for new tool
      changeFrequency: "daily" as const,
      priority: 0.95, // Highest priority for amortization calculator
    },
    {
      url: "https://www.fasttools.store/tools/retirement-calculator",
      lastModified: getFreshnessDate(1), // Updated daily for new tool
      changeFrequency: "daily" as const,
      priority: 0.95, // Highest priority for retirement calculator
    },
    {
      url: "https://www.fasttools.store/tools/payment-calculator",
      lastModified: getFreshnessDate(1), // Updated daily for new tool
      changeFrequency: "daily" as const,
      priority: 0.95, // Highest priority for payment calculator
    },
    {
      url: "https://www.fasttools.store/tools/mortgage-calculator",
      lastModified: getFreshnessDate(1), // Updated daily for new tool
      changeFrequency: "daily" as const,
      priority: 0.95, // Highest priority for mortgage calculator
    },

    // ===== SUPPORTING CATEGORIES (Lower Priority but Important for Coverage) =====
    // Date & Time Tools - Supporting tools for comprehensive coverage
    {
      url: "https://www.fasttools.store/date-time-tools/age-in-hours",
      lastModified: getFreshnessDate(10),
      changeFrequency: "weekly" as const,
      priority: 0.7, // Lower priority for date/time tools
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
      priority: 0.75, // Slightly higher for business use
    },
    {
      url: "https://www.fasttools.store/date-time-tools/year-end-countdown",
      lastModified: getFreshnessDate(12),
      changeFrequency: "monthly" as const,
      priority: 0.6, // Lower priority for seasonal tool
    },
    {
      url: "https://www.fasttools.store/date-time-tools/zodiac-sign",
      lastModified: getFreshnessDate(11),
      changeFrequency: "monthly" as const,
      priority: 0.65, // Medium-low priority for fun tool
    },

    // Image Tools - Supporting tools for comprehensive coverage
    {
      url: "https://www.fasttools.store/image-tools/image-to-text",
      lastModified: getFreshnessDate(6),
      changeFrequency: "weekly" as const,
      priority: 0.8, // Medium-high priority for AI-powered tool
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
      priority: 0.8, // Medium-high priority for business tool
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

    // SEO Tools - Supporting tools for comprehensive coverage
    {
      url: "https://www.fasttools.store/seo-tools/meta-tags",
      lastModified: getFreshnessDate(8),
      changeFrequency: "weekly" as const,
      priority: 0.8, // Medium-high priority for SEO tool
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

    // Fun Tools - Lower priority but important for user engagement
    {
      url: "https://www.fasttools.store/fun-tools/future-age",
      lastModified: getFreshnessDate(14),
      changeFrequency: "monthly" as const,
      priority: 0.6, // Lower priority for fun tools
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
      priority: 0.65, // Slightly higher for social media relevance
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

      // ===== COMPREHENSIVE GUIDES (High Priority for Link Building) =====
      // These comprehensive guides are designed to attract natural backlinks
      {
        url: "https://www.fasttools.store/guides/qr-code-generator-guide",
        lastModified: getFreshnessDate(1), // Updated daily for freshness
        changeFrequency: "daily" as const,
        priority: 0.95, // Highest priority for comprehensive guides
      },
      {
        url: "https://www.fasttools.store/guides/currency-converter-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/seo-tools-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/developer-tools-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      // ===== AI TOOL GUIDES (High Priority for Link Building) =====
      // AI tool guides designed to attract natural backlinks
      {
        url: "https://www.fasttools.store/guides/ai-meme-generator-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/ai-qr-art-generator-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/ai-song-lyrics-generator-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/ai-caption-generator-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/ai-pet-name-generator-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/ai-hashtag-suggester-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },

      // ===== DATE & TIME TOOL GUIDES (High Priority for Link Building) =====
      // Date & time tool guides designed to attract natural backlinks
      {
        url: "https://www.fasttools.store/guides/age-in-hours-calculator-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/year-end-countdown-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/workday-calculator-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/zodiac-sign-finder-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/date-to-day-finder-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },

      // ===== DEV TOOL GUIDES (High Priority for Link Building) =====
      // Dev tool guides designed to attract natural backlinks
      {
        url: "https://www.fasttools.store/guides/jwt-decoder-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/regex-tester-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/json-to-csv-converter-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/html-beautifier-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/color-palette-generator-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/hex-to-rgb-converter-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/markdown-previewer-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/html-to-markdown-converter-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },

      // ===== FINANCE TOOL GUIDES (High Priority for Link Building) =====
      // Finance tool guides designed to attract natural backlinks
      {
        url: "https://www.fasttools.store/guides/invoice-generator-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/paypal-fee-calculator-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/discount-calculator-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/tip-calculator-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },

      // ===== FUN TOOL GUIDES (High Priority for Link Building) =====
      // Fun tool guides designed to attract natural backlinks
      {
        url: "https://www.fasttools.store/guides/love-calculator-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/future-age-predictor-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },

      // ===== IMAGE TOOL GUIDES (High Priority for Link Building) =====
      // Image tool guides designed to attract natural backlinks
      {
        url: "https://www.fasttools.store/guides/image-to-text-ocr-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/background-blur-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },

      // ===== SEO TOOL GUIDES (High Priority for Link Building) =====
      // SEO tool guides designed to attract natural backlinks
      {
        url: "https://www.fasttools.store/guides/meta-tags-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/lorem-ipsum-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },

      // ===== SOCIAL MEDIA TOOL GUIDES (High Priority for Link Building) =====
      // Social media tool guides designed to attract natural backlinks
      {
        url: "https://www.fasttools.store/guides/youtube-thumbnail-downloader-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/instagram-dp-viewer-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },

      // ===== TOOLS GUIDES (High Priority for Link Building) =====
      // Tools guides designed to attract natural backlinks
      {
        url: "https://www.fasttools.store/guides/age-calculator-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/bmi-calculator-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/gpa-calculator-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/concrete-calculator-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/compound-interest-calculator-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/date-difference-calculator-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/time-duration-calculator-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/percentage-calculator-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/tax-calculator-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/emi-calculator-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/ip-subnet-calculator-guide",
        lastModified: getFreshnessDate(1), // Updated daily for new guide
        changeFrequency: "daily" as const,
        priority: 0.95, // High priority for comprehensive guide
      },
      {
        url: "https://www.fasttools.store/guides/scientific-calculator-guide",
        lastModified: getFreshnessDate(1), // Updated daily for new guide
        changeFrequency: "daily" as const,
        priority: 0.95, // High priority for comprehensive guide
      },
      {
        url: "https://www.fasttools.store/guides/triangle-calculator-guide",
        lastModified: getFreshnessDate(1), // Updated daily for new guide
        changeFrequency: "daily" as const,
        priority: 0.95, // High priority for comprehensive guide
      },
      {
        url: "https://www.fasttools.store/guides/fraction-calculator-guide",
        lastModified: getFreshnessDate(1), // Updated daily for new guide
        changeFrequency: "daily" as const,
        priority: 0.95, // High priority for comprehensive guide
      },
      {
        url: "https://www.fasttools.store/guides/pregnancy-conception-calculator-guide",
        lastModified: getFreshnessDate(1), // Updated daily for new guide
        changeFrequency: "daily" as const,
        priority: 0.98, // Highest priority for pregnancy guide
      },
      {
        url: "https://www.fasttools.store/guides/pregnancy-calculator-guide",
        lastModified: getFreshnessDate(1), // Updated daily for new guide
        changeFrequency: "daily" as const,
        priority: 0.98, // Highest priority for pregnancy guide
      },
      {
        url: "https://www.fasttools.store/guides/pace-calculator-guide",
        lastModified: getFreshnessDate(1), // Updated daily for new guide
        changeFrequency: "daily" as const,
        priority: 0.98, // Highest priority for pace calculator guide
      },
      {
        url: "https://www.fasttools.store/guides/bmr-calculator-guide",
        lastModified: getFreshnessDate(1), // Updated daily for new guide
        changeFrequency: "daily" as const,
        priority: 0.98, // Highest priority for BMR calculator guide
      },
      {
        url: "https://www.fasttools.store/guides/body-fat-calculator-guide",
        lastModified: getFreshnessDate(1), // Updated daily for new guide
        changeFrequency: "daily" as const,
        priority: 0.98, // Highest priority for body fat calculator guide
      },
      {
        url: "https://www.fasttools.store/guides/calorie-calculator-guide",
        lastModified: getFreshnessDate(1), // Updated daily for new guide
        changeFrequency: "daily" as const,
        priority: 0.98, // Highest priority for calorie calculator guide
      },
      {
        url: "https://www.fasttools.store/guides/sales-tax-calculator-guide",
        lastModified: getFreshnessDate(1), // Updated daily for new guide
        changeFrequency: "daily" as const,
        priority: 0.98, // Highest priority for sales tax calculator guide
      },
      {
        url: "https://www.fasttools.store/guides/interest-rate-calculator-guide",
        lastModified: getFreshnessDate(1), // Updated daily for new guide
        changeFrequency: "daily" as const,
        priority: 0.98, // Highest priority for interest rate calculator guide
      },
      {
        url: "https://www.fasttools.store/guides/salary-calculator-guide",
        lastModified: getFreshnessDate(1), // Updated daily for new guide
        changeFrequency: "daily" as const,
        priority: 0.98, // Highest priority for salary calculator guide
      },
      {
        url: "https://www.fasttools.store/guides/finance-calculator-guide",
        lastModified: getFreshnessDate(1), // Updated daily for new guide
        changeFrequency: "daily" as const,
        priority: 0.98, // Highest priority for finance calculator guide
      },
      {
        url: "https://www.fasttools.store/guides/inflation-calculator-guide",
        lastModified: getFreshnessDate(1), // Updated daily for new guide
        changeFrequency: "daily" as const,
        priority: 0.98, // Highest priority for inflation calculator guide
      },
      {
        url: "https://www.fasttools.store/guides/investment-calculator-guide",
        lastModified: getFreshnessDate(1), // Updated daily for new guide
        changeFrequency: "daily" as const,
        priority: 0.98, // Highest priority for investment calculator guide
      },
      {
        url: "https://www.fasttools.store/guides/amortization-calculator-guide",
        lastModified: getFreshnessDate(1), // Updated daily for new guide
        changeFrequency: "daily" as const,
        priority: 0.98, // Highest priority for amortization calculator guide
      },
      {
        url: "https://www.fasttools.store/guides/retirement-calculator-guide",
        lastModified: getFreshnessDate(1), // Updated daily for new guide
        changeFrequency: "daily" as const,
        priority: 0.98, // Highest priority for retirement calculator guide
      },
    {
      url: "https://www.fasttools.store/guides/payment-calculator-guide",
      lastModified: getFreshnessDate(1), // Updated daily for new guide
      changeFrequency: "daily" as const,
      priority: 0.98, // Highest priority for payment calculator guide
    },
      {
        url: "https://www.fasttools.store/guides/mortgage-calculator-guide",
        lastModified: getFreshnessDate(1), // Updated daily for new guide
        changeFrequency: "daily" as const,
        priority: 0.98, // Highest priority for mortgage calculator guide
      },
      {
        url: "https://www.fasttools.store/guides/length-converter-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/temperature-converter-guide",
        lastModified: getFreshnessDate(1),
        changeFrequency: "daily" as const,
        priority: 0.95,
      },
      {
        url: "https://www.fasttools.store/guides/standard-deviation-guide",
        lastModified: getFreshnessDate(1), // Updated daily for new guide
        changeFrequency: "daily" as const,
        priority: 0.95, // High priority for comprehensive guide
      },

  ]

  return [...mainPages, ...categoryPages, ...toolPages]
}