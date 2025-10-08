import type { MetadataRoute } from "next"

export default function imageSitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fasttools.store"
  const currentDate = new Date()

  // Main images for the site
  const mainImages = [
    {
      url: `${baseUrl}/logo.svg`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 1,
      images: [
        `${baseUrl}/logo.svg`
      ]
    },
    {
      url: `${baseUrl}/og-image.svg`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
      images: [
        `${baseUrl}/og-image.svg`
      ]
    },
    {
      url: `${baseUrl}/favicon.svg`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [
        `${baseUrl}/favicon.svg`
      ]
    },
    {
      url: `${baseUrl}/apple-touch-icon.svg`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [
        `${baseUrl}/apple-touch-icon.svg`
      ]
    },
    {
      url: `${baseUrl}/icon-192.svg`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [
        `${baseUrl}/icon-192.svg`
      ]
    },
    {
      url: `${baseUrl}/icon-512.svg`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [
        `${baseUrl}/icon-512.svg`
      ]
    }
  ]

  return mainImages
}
