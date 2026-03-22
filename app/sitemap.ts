import type { MetadataRoute } from "next"
import { getAllSitemapPages } from "@/lib/sitemap-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = getAllSitemapPages()

  return pages.map((page) => ({
    url: page.url,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
