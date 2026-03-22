export const baseUrl = "https://www.fasttools.store"

export interface SitemapImage {
    url: string
    title: string
    caption: string
}

export interface SitemapPage {
    url: string
    lastModified: Date
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
    priority: number
    images?: SitemapImage[]
}

export const mainPages = [
    {
        url: baseUrl,
        lastModified: new Date('2025-11-25'),
        changeFrequency: "weekly" as const,
        priority: 1,
    },
    {
        url: "https://www.fasttools.store/products",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/api-docs",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/about",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    },
    {
        url: "https://www.fasttools.store/contact",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    },
    {
        url: "https://www.fasttools.store/faq",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/all-tools",
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.85,
    },
    {
        url: "https://www.fasttools.store/privacy-policy",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "yearly" as const,
        priority: 0.4,
    },
    {
        url: "https://www.fasttools.store/terms",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "yearly" as const,
        priority: 0.4,
    },
    {
        url: "https://www.fasttools.store/cookie-preferences",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "yearly" as const,
        priority: 0.3,
    },
    {
        url: "https://www.fasttools.store/dmca",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "yearly" as const,
        priority: 0.3,
    },
]

export const categoryPages = [
    {
        url: "https://www.fasttools.store/ai-tools",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "weekly" as const,
        priority: 0.97,
    },
    {
        url: "https://www.fasttools.store/converters",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "weekly" as const,
        priority: 0.92,
    },
    {
        url: "https://www.fasttools.store/finance-tools",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.85,
    },
    {
        url: "https://www.fasttools.store/social-media-tools",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "daily" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/dev-tools",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.75,
    },
    {
        url: "https://www.fasttools.store/web-tools",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/web-tools/url-encoder",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/web-tools/html-escape",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/web-tools/url-parser",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/web-tools/device-info",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/web-tools/auth-generator",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/web-tools/outlook-safelink-decoder",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/crypto-tools",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "weekly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/crypto-tools/encrypt-decrypt",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/crypto-tools/bip39-generator",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/crypto-tools/hmac-generator",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/crypto-tools/rsa-generator",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/crypto-tools/password-strength-analyzer",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/image-tools",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    },
    {
        url: "https://www.fasttools.store/seo-tools",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/image-tools/image-compressor",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "weekly" as const,
        priority: 0.95,
        images: [
            {
                url: "https://www.fasttools.store/image-compressor-hero.png",
                title: "Free Image Compressor - 50KB/1MB Compression",
                caption: "Batch compress JPG, PNG, and WebP images online without losing quality. Support 50KB, 100KB, 1MB targets."
            }
        ]
    },
    {
        url: "https://www.fasttools.store/fun-tools",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    },
    {
        url: "https://www.fasttools.store/pdf-tools",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.98,
    },
]




export const toolPages = [
    {
        url: "https://www.fasttools.store/calculator/conversion-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/calculator/ip-subnet-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.85,
    },
    {
        url: "https://www.fasttools.store/calculator/age-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "daily" as const,
        priority: 0.9,
        images: [
            {
                url: "https://www.fasttools.store/images/age_calculator_hero_1765980011245.png",
                title: "FastTools Age Calculator - Accurate & Free",
                caption: "Calculate your exact age in seconds with our precise and free online age calculator tool"
            },
            {
                url: "https://www.fasttools.store/images/age_calculator_steps_1765976489023.png",
                title: "How to Use Age Calculator",
                caption: "Simple 3-step process to calculate your age: Enter birth date, choose target date, get instant results"
            },
            {
                url: "https://www.fasttools.store/images/chronological_vs_biological_age_1765976611179.png",
                title: "Chronological vs Biological Age Comparison",
                caption: "Understanding the difference between chronological calendar age and biological health age"
            },
            {
                url: "https://www.fasttools.store/images/calculation-accuracy.png",
                title: "ISO 8601 Age Calculation Accuracy",
                caption: "Visual breakdown of how ISO 8601 standards ensure precise age calculation across leap years and months"
            }
        ]
    },
    {
        url: "https://www.fasttools.store/calculator/bmi-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    },
    {
        url: "https://www.fasttools.store/finance-tools/loan-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.85,
    },
    {
        url: "https://www.fasttools.store/finance-tools/auto-loan-calculator",
        lastModified: new Date('2026-03-22'),
        changeFrequency: "weekly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/tax-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.85,
    },
    {
        url: "https://www.fasttools.store/finance-tools/quarterly-tax-estimator",
        lastModified: new Date('2026-02-27'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/calculator/percentage-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.75,
    },
    {
        url: "https://www.fasttools.store/calculator/date-difference",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/calculator/time-duration",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.75,
    },
    {
        url: "https://www.fasttools.store/finance-tools/compound-interest",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    },
    {
        url: "https://www.fasttools.store/calculator/gpa-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.85,
    },
    {
        url: "https://www.fasttools.store/calculator/concrete-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "weekly" as const,
        priority: 0.95,
        images: [
            {
                url: "https://www.fasttools.store/images/calculators/concrete-calculator-hero.png",
                title: "Concrete Calculator Interface - Cubic Yards & Bags",
                caption: "Professional concrete calculator interface for estimating cubic yards, bags, and costs"
            },
            {
                url: "https://www.fasttools.store/images/calculators/concrete-pouring-guide.png",
                title: "Concrete Pouring Guide - Layers & Process",
                caption: "Visual guide showing the proper layers for a concrete slab pour including subbase, barrier, and rebar"
            }
        ]
    },
    {
        url: "https://www.fasttools.store/calculator/scientific-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
        images: [
            {
                url: "https://www.fasttools.store/images/scientific-calculator-functions.png",
                title: "Scientific Calculator Functions",
                caption: "Scientific calculator functions overview"
            }
        ]
    },
    {
        url: "https://www.fasttools.store/calculator/triangle-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/calculator/fraction-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/calculator/standard-deviation-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/calculator/pregnancy-conception-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/calculator/pregnancy-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/calculator/pace-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/calculator/bmr-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/calculator/body-fat-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/calculator/calorie-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/sales-tax-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/interest-rate-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/salary-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/finance-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/inflation-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/investment-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/amortization-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/retirement-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/payment-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/mortgage-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/calculator/love-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/calculator/cortisol-peak-calculator",
        lastModified: new Date('2026-03-16'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/calculator/biological-age-calculator",
        lastModified: new Date('2026-03-16'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/ai-tools/qr-generator",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.98,
    },
    {
        url: "https://www.fasttools.store/ai-tools/caption-generator",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.96,
    },
    {
        url: "https://www.fasttools.store/ai-tools/lyrics-generator",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/ai-tools/pet-names",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.94,
    },
    {
        url: "https://www.fasttools.store/ai-tools/token-to-word-converter",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "weekly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/social-media-tools/youtube-tags",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/social-media-tools/youtube-thumbnail",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/social-media-tools/channel-checker",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "daily" as const,
        priority: 1.0,
        images: [
            {
                url: "https://www.fasttools.store/youtube_channel_checker_hero_1764246981481.png",
                title: "YouTube Channel Checker Hero",
                caption: "YouTube Channel Checker tool overview"
            },
            {
                url: "https://www.fasttools.store/youtube_branding_guide_1764247018385.png",
                title: "YouTube Branding Guide",
                caption: "Guide to YouTube branding"
            },
            {
                url: "https://www.fasttools.store/youtube_handles_vs_urls_infographic_1764248999897.png",
                title: "YouTube Handles vs URLs",
                caption: "Infographic comparing YouTube handles and URLs"
            },
            {
                url: "https://www.fasttools.store/youtube_gaming_branding_ideas_1764248964347.png",
                title: "YouTube Gaming Branding Ideas",
                caption: "Branding ideas for gaming channels"
            }
        ]
    },
    {
        url: "https://www.fasttools.store/social-media-tools/channel-checker/handle-availability-2026",
        lastModified: new Date('2026-03-05'),
        changeFrequency: "weekly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/social-media-tools/channel-checker/channel-name-checker",
        lastModified: new Date('2026-03-05'),
        changeFrequency: "weekly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/social-media-tools/channel-checker/check-if-taken",
        lastModified: new Date('2026-03-05'),
        changeFrequency: "weekly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/social-media-tools/youtube-channel-name-generator",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "daily" as const,
        priority: 1.0,
        images: [
            {
                url: "https://www.fasttools.store/images/youtube-naming-tips.png",
                title: "YouTube Channel Naming Tips",
                caption: "4 Tips for YouTube Channel Names: Short, Unique, Easy to Spell, Future Proof"
            },
            {
                url: "https://www.fasttools.store/images/youtube-name-brainstorming.png",
                title: "YouTube Name Brainstorming",
                caption: "Brainstorming YouTube Channel Name Ideas"
            }
        ]
    },
    {
        url: "https://www.fasttools.store/ad-tools/roas-calculator",
        lastModified: new Date('2025-12-15'),
        changeFrequency: "daily" as const,
        priority: 0.95,
        images: [
            {
                url: "https://www.fasttools.store/images/tools/roas-dashboard.png",
                title: "FastTools ROAS Calculator Dashboard",
                caption: "Dashboard showing ROAS metrics and revenue trend"
            },
            {
                url: "https://www.fasttools.store/images/tools/roas-growth.png",
                title: "FastTools Business Growth Illustration",
                caption: "Illustration of business growth through optimized ROAS"
            }
        ]
    },
    {
        url: "https://www.fasttools.store/social-media-tools/hashtag-counter",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/social-media-tools/link-in-bio",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/social-media-tools/instagram-dp",
        lastModified: new Date('2026-03-07'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/social-media-tools/tiktok-engagement-calculator",
        lastModified: new Date('2026-03-16'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/social-media-tools/influencer-rate-calculator",
        lastModified: new Date('2026-03-16'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/converters/currency",
        lastModified: new Date('2026-03-23'),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/converters/currency",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "weekly" as const,
        priority: 0.93,
    },
    {
        url: "https://www.fasttools.store/converters/file-size",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/converters/length",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/converters/temperature",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/converters/text-case",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "weekly" as const,
        priority: 0.92,
    },
    {
        url: "https://www.fasttools.store/converters/integer-base",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/converters/roman-numeral",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/converters/base64-file",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/converters/nato-phonetic",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/converters/morse-code",
        lastModified: new Date('2026-02-26'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/converters/ascii-binary",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/converters/unicode",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/converters/yaml-json",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/converters/json-yaml",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/converters/json-toml",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "weekly" as const,
        priority: 0.89,
    },
    {
        url: "https://www.fasttools.store/converters/list-converter",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/converters/toml-json",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "weekly" as const,
        priority: 0.89,
    },
    {
        url: "https://www.fasttools.store/converters/toml-yaml",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "weekly" as const,
        priority: 0.89,
    },
    {
        url: "https://www.fasttools.store/converters/xml-json",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/converters/json-xml",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/converters/yaml-toml",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "weekly" as const,
        priority: 0.89,
    },
    {
        url: "https://www.fasttools.store/converters/timezone",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/seo-tools/meta-tags",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/seo-tools/lorem-ipsum",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/seo-tools/blog-titles",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/seo-tools/keyword-density",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/seo-tools/text-similarity-checker",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
        images: [
            {
                url: "https://www.fasttools.store/images/simhash-process-diagram.png",
                title: "SimHash Algorithm Process - 4-Step Diagram",
                caption: "Visual diagram showing the SimHash algorithm process: text input, feature extraction, hash aggregation, and 64-bit fingerprint generation for text similarity detection"
            },
            {
                url: "https://www.fasttools.store/images/text-similarity-comparison.png",
                title: "Text Similarity Comparison Visual",
                caption: "Split-screen comparison showing original and compared documents with 87% similarity score, Hamming distance metrics, and hexadecimal fingerprints"
            }
        ]
    },
    {
        url: "https://www.fasttools.store/fun-tools/anniversary",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    },
    {
        url: "https://www.fasttools.store/fun-tools/birthday-countdown",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    },
    {
        url: "https://www.fasttools.store/fun-tools/future-age",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    },
    {
        url: "https://www.fasttools.store/finance-tools/bill-splitter",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/credit-card-payoff",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/discount-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/invoice-generator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/finance-tools/paypal-fee",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
        images: [
            {
                url: "https://www.fasttools.store/images/finance/paypal-calculator-hero.png",
                title: "PayPal Fee Calculator - FastTools",
                caption: "FastTools PayPal Fee Calculator hero image"
            },
            {
                url: "https://www.fasttools.store/images/finance/paypal-fee-breakdown.png",
                title: "PayPal Fee Breakdown Infographic",
                caption: "Visual breakdown of PayPal fees and costs"
            }
        ]
    },
    {
        url: "https://www.fasttools.store/finance-tools/retirement-planner",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/savings-tracker",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/tip-calculator",
        lastModified: new Date('2026-02-21'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/saas-churn-calculator",
        lastModified: new Date('2026-03-16'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/freelance-rate-calculator",
        lastModified: new Date('2026-03-16'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/saas-payback-calculator",
        lastModified: new Date('2026-03-16'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/remote-work-savings",
        lastModified: new Date('2026-03-16'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/zakat-calculator",
        lastModified: new Date('2026-03-16'),
        changeFrequency: "yearly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/home-affordability-calculator",
        lastModified: new Date('2026-03-18'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/dev-tools/jwt-decoder",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/dev-tools/regex-tester",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/dev-tools/json-diff",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/dev-tools/json-to-csv",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/dev-tools/sql-to-json",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
        images: [
            {
                url: "https://www.fasttools.store/images/dev-tools/sql-to-json-hero.png",
                title: "SQL to JSON Converter Hero - FastTools",
                caption: "Illustration of SQL data transforming into JSON format"
            },
            {
                url: "https://www.fasttools.store/images/dev-tools/sql-to-json-example.png",
                title: "SQL to JSON Converter Example UI",
                caption: "Example of SQL INSERT statements converted to JSON array"
            }
        ]
    },
    {
        url: "https://www.fasttools.store/dev-tools/llm-training-cost",
        lastModified: new Date('2026-03-16'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/dev-tools/cloudflare-workers-cost",
        lastModified: new Date('2026-03-16'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/dev-tools/html-beautifier",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/dev-tools/base64-encoder",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/dev-tools/mime-types",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/dev-tools/keycode-info",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/dev-tools/slugify-string",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/dev-tools/html-wysiwyg-editor",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/dev-tools/user-agent-parser",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/dev-tools/http-status-codes",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/dev-tools/color-palette",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/dev-tools/hex-to-rgb",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/dev-tools/html-to-markdown",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/dev-tools/markdown-previewer",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/image-tools/image-to-text",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/image-tools/ai-image-detector",
        lastModified: new Date('2026-03-09'),
        changeFrequency: "weekly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/ai-tools/ai-text-detector",
        lastModified: new Date('2026-03-10'),
        changeFrequency: "weekly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/ai-tools/ai-code-detector",
        lastModified: new Date('2026-03-10'),
        changeFrequency: "weekly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/ai-tools/ai-readability-analyzer",
        lastModified: new Date('2026-03-10'),
        changeFrequency: "weekly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/pdf-tools/pdf-sign",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.98,
    },
    {
        url: "https://www.fasttools.store/pdf-tools/pdf-word-converter",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.97,
    },
    {
        url: "https://www.fasttools.store/pdf-tools/pdf-splitter-merger",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.97,
    },
    {
        url: "https://www.fasttools.store/pdf-tools/pdf-unlocker",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.96,
    },
    {
        url: "https://www.fasttools.store/pdf-tools/pdf-compressor",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.96,
    },
    {
        url: "https://www.fasttools.store/pdf-tools/pdf-to-image",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/pdf-tools/pdf-signature-checker",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "weekly" as const,
        priority: 0.98,
        images: [
            {
                url: "https://www.fasttools.store/images/pdf_signature_check_hero.png",
                title: "PDF Signature Checker - Verify Digital Signatures",
                caption: "Online tool to verify PDF digital signatures, integrity, and signer identity. Client-side secure verification."
            }
        ]
    },
    {
        url: "https://www.fasttools.store/crypto-tools/uuid-generator",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "weekly" as const,
        priority: 0.95,
        images: [
            {
                url: "https://www.fasttools.store/images/tools/uuid-generator.png",
                title: "UUID Generator Concept - Unique Identifier Generation Process",
                caption: "A high-quality, modern, isometric 3D illustration representing a UUID Concept. Data flow, digital unique keys, hex strings 128-bit."
            }
        ]
    },
    {
        url: "https://www.fasttools.store/crypto-tools/ulid-generator",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "weekly" as const,
        priority: 0.98,
    },
    {
        url: "https://www.fasttools.store/crypto-tools/bcrypt",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "weekly" as const,
        priority: 0.95,
        images: [
            {
                url: "https://www.fasttools.store/images/bcrypt-hero.png",
                title: "Bcrypt Hash Generator & Verifier - Secure Password Hashing",
                caption: "Generate and verify industry-standard Bcrypt hashes. Adaptive work factors and real-time verification."
            }
        ]
    },
    {
        url: "https://www.fasttools.store/crypto-tools/token-generator",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "weekly" as const,
        priority: 0.95,
        images: [
            {
                url: "https://www.fasttools.store/images/token-generator-hero.png",
                title: "Secure Token Generator - API Keys & Secrets",
                caption: "Generate secure random tokens, API keys, and passwords instantly. Customizable length and character sets."
            }
        ]
    },
    {
        url: "https://www.fasttools.store/crypto-tools/hash-text",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "weekly" as const,
        priority: 0.95,
        images: [
            {
                url: "https://www.fasttools.store/images/hash-text-hero.png",
                title: "Hash Text Generator - MD5, SHA-256, SHA-512",
                caption: "Generate cryptographic hashes instantly. Support for MD5, SHA-1, SHA-2, SHA-3, and RIPEMD160. Secure client-side processing."
            }
        ]
    },
    {
        url: "https://www.fasttools.store/crypto-tools/otp-generator",
        lastModified: new Date('2026-02-20'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
]

export const getAllSitemapPages = () => {
    return [...mainPages, ...categoryPages, ...toolPages]
}
