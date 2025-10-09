import type { MetadataRoute } from "next"

export default function imageSitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fasttools.store"
  const currentDate = new Date()

  // Main images for the site
  const mainImages = [
    {
      url: "https://fasttools.store/logo.svg",
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 1,
      images: [
        {
          url: "https://fasttools.store/logo.svg",
          title: "FastTools Professional Logo",
          caption: "FastTools professional logo with modern FT symbol and blue gradient design"
        }
      ]
    },
    {
      url: "https://fasttools.store/og-image.svg",
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
      images: [
        {
          url: "https://fasttools.store/og-image.svg",
          title: "FastTools Social Media Image",
          caption: "FastTools professional social media sharing image with tools showcase"
        }
      ]
    },
    {
      url: "https://fasttools.store/favicon.svg",
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [
        {
          url: "https://fasttools.store/favicon.svg",
          title: "FastTools Favicon",
          caption: "FastTools favicon for browser tabs and bookmarks"
        }
      ]
    },
    {
      url: "https://fasttools.store/apple-touch-icon.svg",
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [
        {
          url: "https://fasttools.store/apple-touch-icon.svg",
          title: "FastTools Apple Touch Icon",
          caption: "FastTools icon for Apple devices and iOS home screen"
        }
      ]
    },
    {
      url: "https://fasttools.store/icon-192.svg",
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [
        {
          url: "https://fasttools.store/icon-192.svg",
          title: "FastTools Icon 192x192",
          caption: "FastTools 192x192 icon for web app manifest"
        }
      ]
    },
    {
      url: "https://fasttools.store/icon-512.svg",
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [
        {
          url: "https://fasttools.store/icon-512.svg",
          title: "FastTools Icon 512x512",
          caption: "FastTools 512x512 icon for web app manifest"
        }
      ]
    }
  ]

  return mainImages
}