import { NextResponse } from 'next/server'
import type { MetadataRoute } from "next"

export async function GET() {
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

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${mainImages.map(item => `
  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified.toISOString()}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
    ${item.images.map(image => `
    <image:image>
      <image:loc>${image.url}</image:loc>
      <image:title>${image.title}</image:title>
      <image:caption>${image.caption}</image:caption>
    </image:image>`).join('')}
  </url>`).join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
