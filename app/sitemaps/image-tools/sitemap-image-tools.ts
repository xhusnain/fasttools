import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fasttools.store"
  
  // Content freshness strategy
  const getFreshnessDate = (daysAgo: number) => {
    const date = new Date()
    date.setDate(date.getDate() - daysAgo)
    return date
  }

  // Image Tools (10 URLs)
  const imageToolPages = [
    {
      url: "https://fasttools.store/image-tools",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://fasttools.store/image-tools/image-to-text",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://fasttools.store/image-tools/background-blur",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://fasttools.store/image-tools/image-cropper",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://fasttools.store/image-tools/pdf-tools",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://fasttools.store/image-tools/pdf-unlocker",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://fasttools.store/image-tools/screenshot-to-text",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://fasttools.store/social-media-tools/youtube-thumbnail",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://fasttools.store/ai-tools/qr-generator",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: "https://fasttools.store/dev-tools/color-palette",
      lastModified: getFreshnessDate(1),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
  ]

  return imageToolPages
}
