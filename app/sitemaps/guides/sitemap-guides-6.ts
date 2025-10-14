import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fasttools.store"
  
  // Content freshness strategy
  const getFreshnessDate = (daysAgo: number) => {
    const date = new Date()
    date.setDate(date.getDate() - daysAgo)
    return date
  }

  // Guide Pages - Part 6 (10 URLs)
  const guidePages = [
    {
      url: "https://fasttools.store/guides/pregnancy-conception-calculator-guide",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.98,
    },
    {
      url: "https://fasttools.store/guides/pregnancy-calculator-guide",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.98,
    },
    {
      url: "https://fasttools.store/guides/pace-calculator-guide",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.98,
    },
    {
      url: "https://fasttools.store/guides/bmr-calculator-guide",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.98,
    },
    {
      url: "https://fasttools.store/guides/body-fat-calculator-guide",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.98,
    },
    {
      url: "https://fasttools.store/guides/calorie-calculator-guide",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.98,
    },
    {
      url: "https://fasttools.store/guides/sales-tax-calculator-guide",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.98,
    },
    {
      url: "https://fasttools.store/guides/interest-rate-calculator-guide",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.98,
    },
    {
      url: "https://fasttools.store/guides/salary-calculator-guide",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.98,
    },
    {
      url: "https://fasttools.store/guides/finance-calculator-guide",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.98,
    },
  ]

  return guidePages
}
