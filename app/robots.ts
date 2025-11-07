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
        ],
        sitemap: [
            "https://www.fasttools.store/sitemap.xml",
            "https://www.fasttools.store/image-sitemap.xml",
        ],
    }
}
