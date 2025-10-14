import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fasttools.store"
  
  // Content freshness strategy
  const getFreshnessDate = (daysAgo: number) => {
    const date = new Date()
    date.setDate(date.getDate() - daysAgo)
    return date
  }

  // Guide Pages - Part 7 (10 URLs)
  const guidePages = [
    {
      url: "https://fasttools.store/guides/inflation-calculator-guide",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.98,
    },
    {
      url: "https://fasttools.store/guides/investment-calculator-guide",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.98,
    },
    {
      url: "https://fasttools.store/guides/amortization-calculator-guide",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.98,
    },
    {
      url: "https://fasttools.store/guides/retirement-calculator-guide",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.98,
    },
    {
      url: "https://fasttools.store/guides/payment-calculator-guide",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.98,
    },
    {
      url: "https://fasttools.store/guides/mortgage-calculator-guide",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.98,
    },
    {
      url: "https://fasttools.store/guides/standard-deviation-guide",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://fasttools.store/guides/date-time-tools/age-in-hours",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://fasttools.store/guides/date-time-tools/date-to-day",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://fasttools.store/guides/date-time-tools/workday-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
  ]

  return guidePages
}
