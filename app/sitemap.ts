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
      lastModified: getFreshnessDate(8),
      changeFrequency: "weekly" as const,
      priority: 0.75,
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
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
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
    {
      url: "https://www.fasttools.store/ai-tools/caption-generator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://www.fasttools.store/social-media-tools/tiktok-downloader",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },






  ]

  return [...mainPages, ...categoryPages, ...toolPages]
}