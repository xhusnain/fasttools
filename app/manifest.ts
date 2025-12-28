import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "FastTools - Free Online Tools",
        short_name: "FastTools",
        description: "1000+ free online tools including AI generators, converters, calculators, SEO tools, and productivity utilities.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#110f0f",
        orientation: "portrait-primary",
        scope: "/",
        lang: "en",
        dir: "ltr",
        categories: [
            "productivity",
            "utilities",
            "business",
            "education"
        ],
        icons: [],
        shortcuts: [
            {
                name: "AI Tools",
                short_name: "AI",
                description: "AI-powered content generation tools",
                url: "/ai-tools"
            },
            {
                name: "Image Tools",
                short_name: "Images",
                description: "Image editing and processing tools",
                url: "/image-tools"
            },
            {
                name: "Social Media Tools",
                short_name: "Social",
                description: "Social media management and analysis tools",
                url: "/social-media-tools"
            },
            {
                name: "Downloaders",
                short_name: "Download",
                description: "Video and content downloaders",
                url: "/downloaders"
            }
        ],
        related_applications: [],
        prefer_related_applications: false
    }
}
