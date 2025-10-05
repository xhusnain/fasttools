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
        allow: "/",
        disallow: ["/api/"],
      },
      {
        // Allow all other bots
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://toolifyhub.com/sitemap.xml",
  }
}
