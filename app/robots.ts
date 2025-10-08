import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Slurp", // Yahoo
          "DuckDuckBot",
          "Baiduspider",
          "YandexBot",
          "Sogou",
          "Exabot",
          "facebot", // Facebook
          "ia_archiver", // Alexa
        ],
        allow: [
          "/",
          "/ai-tools/",
          "/converters/",
          "/tools/",
          "/seo-tools/",
          "/image-tools/",
          "/finance-tools/",
          "/dev-tools/",
          "/social-media-tools/",
          "/date-time-tools/",
          "/fun-tools/",
          "/about",
          "/contact",
          "/faq",
          "/privacy-policy",
          "/terms",
          "/css/",
          "/js/",
          "/images/"
        ],
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/temp/",
          "/_next/",
          "/admin/announcements/"
        ],
      },
      {
        // Allow all other bots
        userAgent: "*",
        allow: [
          "/",
          "/ai-tools/",
          "/converters/",
          "/tools/",
          "/seo-tools/",
          "/image-tools/",
          "/finance-tools/",
          "/dev-tools/",
          "/social-media-tools/",
          "/date-time-tools/",
          "/fun-tools/",
          "/about",
          "/contact",
          "/faq",
          "/privacy-policy",
          "/terms",
          "/css/",
          "/js/",
          "/images/"
        ],
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/temp/",
          "/_next/",
          "/admin/announcements/"
        ],
      },
    ],
    sitemap: [
      "https://fasttools.store/sitemap.xml",
      "https://fasttools.store/image-sitemap.xml"
    ],
    host: "https://fasttools.store"
  }
}
