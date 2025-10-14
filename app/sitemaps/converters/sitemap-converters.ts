import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fasttools.store"
  
  // Content freshness strategy
  const getFreshnessDate = (daysAgo: number) => {
    const date = new Date()
    date.setDate(date.getDate() - daysAgo)
    return date
  }

  // Converter Tools (10 URLs)
  const converterPages = [
    {
      url: "https://fasttools.store/converters",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://fasttools.store/converters/currency",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://fasttools.store/converters/file-size",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://fasttools.store/converters/length",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://fasttools.store/converters/temperature",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://fasttools.store/converters/text-case",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://fasttools.store/converters/timezone",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://fasttools.store/converters/conversion-calculator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://fasttools.store/dev-tools/hex-to-rgb",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.85,
    },
    {
      url: "https://fasttools.store/dev-tools/html-to-markdown",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.85,
    },
  ]

  return converterPages
}
