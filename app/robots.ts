import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/api/",
                    "/private",
                    "/temp",
                    "/_next",
                ],
            },
        ],
        sitemap: [
            "https://www.fasttools.store/sitemap.xml",
            "https://www.fasttools.store/image-sitemap.xml",
        ],
    }
}
