import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/api",
                    "/admin",
                    "/private",
                    "/temp",
                    "/_next",
                    "/admin/announcements",
                ],
            },
            {
                userAgent: "GPTBot",
                allow: "/",
                disallow: [
                    "/api",
                    "/admin",
                    "/private",
                    "/temp",
                    "/_next",
                    "/admin/announcements",
                ],
            },
            {
                userAgent: "ChatGPT-User",
                allow: "/",
                disallow: [
                    "/api",
                    "/admin",
                    "/private",
                    "/temp",
                    "/_next",
                    "/admin/announcements",
                ],
            },
            {
                userAgent: "CCBot",
                allow: "/",
                disallow: [
                    "/api",
                    "/admin",
                    "/private",
                    "/temp",
                    "/_next",
                    "/admin/announcements",
                ],
            },
            {
                userAgent: "anthropic-ai",
                allow: "/",
                disallow: [
                    "/api",
                    "/admin",
                    "/private",
                    "/temp",
                    "/_next",
                    "/admin/announcements",
                ],
            },
            {
                userAgent: "Claude-Web",
                allow: "/",
                disallow: [
                    "/api",
                    "/admin",
                    "/private",
                    "/temp",
                    "/_next",
                    "/admin/announcements",
                ],
            },
            {
                userAgent: "PerplexityBot",
                allow: "/",
                disallow: [
                    "/api",
                    "/admin",
                    "/private",
                    "/temp",
                    "/_next",
                    "/admin/announcements",
                ],
            },
            {
                userAgent: "Applebot-Extended",
                allow: "/",
                disallow: [
                    "/api",
                    "/admin",
                    "/private",
                    "/temp",
                    "/_next",
                    "/admin/announcements",
                ],
            },
        ],
        sitemap: [
            "https://www.fasttools.store/sitemap.xml",
            "https://www.fasttools.store/image-sitemap.xml",
        ],
    }
}
