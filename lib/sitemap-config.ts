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
        images: [
            {
                url: "https://www.fasttools.store/logo.png",
                title: "FastTools Professional Logo PNG - Free Online Tools Collection",
                caption: "FastTools professional logo with modern FT symbol and blue gradient design for comprehensive free online tools collection"
            },
            {
                url: "https://www.fasttools.store/logo.svg",
                title: "FastTools Professional Logo SVG - Vector Format",
                caption: "FastTools logo in scalable vector format for high-quality rendering at any size, perfect for professional use"
            },
            {
                url: "https://www.fasttools.store/logo.ico",
                title: "FastTools Logo ICO - Windows Favicon",
                caption: "FastTools logo in ICO format for Windows systems and legacy browser compatibility"
            },
            {
                url: "https://www.fasttools.store/banner.png",
                title: "FastTools Social Media Image - Complete Digital Toolkit",
                caption: "FastTools professional social media sharing image showcasing comprehensive free online tools collection for productivity and business"
            },
            {
                url: "https://www.fasttools.store/og-image.png",
                title: "FastTools Open Graph Image PNG",
                caption: "FastTools Open Graph image for social media sharing and SEO optimization in PNG format"
            },
            {
                url: "https://www.fasttools.store/og-image.svg",
                title: "FastTools Open Graph Image SVG",
                caption: "FastTools Open Graph vector image for social media sharing with excellent quality at any resolution"
            },
            {
                url: "https://www.fasttools.store/apple-touch-icon.png",
                title: "FastTools Apple Touch Icon",
                caption: "FastTools iOS app icon for home screen and mobile devices"
            },
            {
                url: "https://www.fasttools.store/icon-192.png",
                title: "FastTools PWA Icon 192x192",
                caption: "FastTools Progressive Web App icon for mobile and desktop installation"
            },
            {
                url: "https://www.fasttools.store/icon-512.png",
                title: "FastTools PWA Icon 512x512",
                caption: "FastTools Progressive Web App icon for high-resolution displays and app stores"
            },
            {
                url: "https://www.fasttools.store/web-app-manifest-192x192.png",
                title: "FastTools Maskable Icon 192x192 - PWA Manifest",
                caption: "FastTools maskable icon for PWA manifest, optimized for adaptive icons on Android and iOS"
            },
            {
                url: "https://www.fasttools.store/web-app-manifest-512x512.png",
                title: "FastTools Maskable Icon 512x512 - PWA Manifest",
                caption: "FastTools high-resolution maskable icon for PWA manifest and app stores"
            },
            {
                url: "https://www.fasttools.store/favicon-96x96.png",
                title: "FastTools Favicon 96x96",
                caption: "FastTools favicon in 96x96 pixel format for browser tabs and bookmarks"
            },
            {
                url: "https://www.fasttools.store/favicon.svg",
                title: "FastTools Favicon SVG - Scalable Vector",
                caption: "FastTools favicon in SVG format for modern browsers with crisp rendering at any resolution"
            },
            {
                url: "https://www.fasttools.store/favicon.ico",
                title: "FastTools Favicon ICO - Browser Icon",
                caption: "FastTools favicon in ICO format for maximum browser compatibility"
            },
            {
                url: "https://www.fasttools.store/placeholder.jpg",
                title: "FastTools Placeholder Image JPG",
                caption: "FastTools placeholder image for loading states and content previews"
            },
            {
                url: "https://www.fasttools.store/placeholder.svg",
                title: "FastTools Placeholder SVG",
                caption: "FastTools scalable placeholder image for dynamic content loading"
            },
            {
                url: "https://www.fasttools.store/placeholder-user.jpg",
                title: "FastTools User Avatar Placeholder",
                caption: "FastTools default user avatar placeholder for profile images and user accounts"
            }
        ]
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
        url: "https://www.fasttools.store/downloaders",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
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
        url: "https://www.fasttools.store/blog/archive",
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
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
        lastModified: new Date('2025-11-25'),
        changeFrequency: "weekly" as const,
        priority: 0.97,
        images: [
            {
                url: "https://www.fasttools.store/banner.png",
                title: "AI Tools - Artificial Intelligence Content Generation",
                caption: "FastTools AI Tools collection for automated content creation and artificial intelligence utilities"
            },
            {
                url: "https://www.fasttools.store/logo.png",
                title: "FastTools AI Tools Logo",
                caption: "FastTools professional logo for AI automation tools and content generation"
            }
        ]
    },
    {
        url: "https://www.fasttools.store/converters",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
        images: [
            {
                url: "https://www.fasttools.store/banner.png",
                title: "Converter Tools - Unit and Format Converters",
                caption: "FastTools Converter collection for currency, length, temperature, and file format conversions"
            }
        ]
    },
    {
        url: "https://www.fasttools.store/finance-tools",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.85,
    },
    {
        url: "https://www.fasttools.store/social-media-tools",
        lastModified: new Date('2025-12-14'),
        changeFrequency: "daily" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/dev-tools",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.75,
        images: [
            {
                url: "https://www.fasttools.store/dev-image-2.jpg",
                title: "Free Developer Tools Online - Chrome DevTools, Safari, React Developer Tools",
                caption: "Professional developer tools collection featuring Chrome DevTools, Safari developer tools, React developer tools, JWT decoder, regex tester, and essential coding utilities for web development"
            },
            {
                url: "https://www.fasttools.store/banner.png",
                title: "Developer Tools - Programming and Web Development",
                caption: "FastTools Developer Tools collection for programmers and web developers"
            }
        ]
    },
    {
        url: "https://www.fasttools.store/calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
        images: [
            {
                url: "https://www.fasttools.store/banner.png",
                title: "Calculator Tools - Free Online Calculators",
                caption: "FastTools Calculator collection for financial, scientific, and utility calculations"
            },
            {
                url: "https://www.fasttools.store/images/calculator-hero.png",
                title: "Calculator Hero Image",
                caption: "Calculator tools hero image"
            },
            {
                url: "https://www.fasttools.store/images/calculation-accuracy.png",
                title: "Calculation Accuracy",
                caption: "Calculation accuracy illustration"
            }
        ]
    },
    {
        url: "https://www.fasttools.store/image-tools",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        images: [
            {
                url: "https://www.fasttools.store/banner.png",
                title: "Image Tools Collection - Professional Photo Editing and Processing",
                caption: "FastTools comprehensive image tools collection for background removal, photo editing, and image processing"
            },
            {
                url: "https://www.fasttools.store/logo.png",
                title: "FastTools Image Tools Logo",
                caption: "Professional logo for FastTools image editing and processing toolkit"
            }
        ]
    },
    {
        url: "https://www.fasttools.store/seo-tools",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/fun-tools",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    },
    {
        url: "https://www.fasttools.store/pdf-tools",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.98,
    },
    {
        url: "https://www.fasttools.store/blog/category/developer",
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.85,
    },
    {
        url: "https://www.fasttools.store/festivals",
        lastModified: new Date('2025-12-19'),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/guides",
        lastModified: new Date('2025-12-22'),
        changeFrequency: "weekly" as const,
        priority: 0.95,
    },
]

// Guides are now generated dynamically
export const guidePages: any[] = []

export const toolPages = [
    {
        url: "https://www.fasttools.store/festivals/christmas-font-converter",
        lastModified: new Date('2025-12-19'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/festivals/turkey-defrost-calculator",
        lastModified: new Date('2025-12-19'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/calculator/conversion-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/calculator/ip-subnet-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.85,
    },
    {
        url: "https://www.fasttools.store/calculator/age-calculator",
        lastModified: new Date('2025-12-17'),
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
        lastModified: new Date('2025-12-18'),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    },
    {
        url: "https://www.fasttools.store/finance-tools/loan-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.85,
    },
    {
        url: "https://www.fasttools.store/finance-tools/tax-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.85,
    },
    {
        url: "https://www.fasttools.store/calculator/percentage-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.75,
    },
    {
        url: "https://www.fasttools.store/calculator/date-difference",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/calculator/time-duration",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.75,
    },
    {
        url: "https://www.fasttools.store/finance-tools/compound-interest",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    },
    {
        url: "https://www.fasttools.store/calculator/gpa-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.85,
    },
    {
        url: "https://www.fasttools.store/calculator/concrete-calculator",
        lastModified: new Date('2025-12-23'),
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
        lastModified: new Date('2025-11-25'),
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
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/calculator/fraction-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/calculator/standard-deviation-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/calculator/pregnancy-conception-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/calculator/pregnancy-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/calculator/pace-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/calculator/bmr-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/calculator/body-fat-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/calculator/calorie-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/sales-tax-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/interest-rate-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/salary-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/finance-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/inflation-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/investment-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/amortization-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/retirement-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/payment-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/mortgage-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/calculator/love-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/ai-tools/qr-generator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.98,
    },
    {
        url: "https://www.fasttools.store/ai-tools/caption-generator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.96,
    },
    {
        url: "https://www.fasttools.store/ai-tools/lyrics-generator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/ai-tools/pet-names",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.94,
    },
    {
        url: "https://www.fasttools.store/social-media-tools/tiktok-downloader",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/social-media-tools/instagram-downloader",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/social-media-tools/facebook-downloader",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/social-media-tools/x-video-downloader",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/social-media-tools/youtube-tags",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/social-media-tools/youtube-thumbnail",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/social-media-tools/channel-checker",
        lastModified: new Date('2025-12-17'),
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
        url: "https://www.fasttools.store/social-media-tools/youtube-channel-name-generator",
        lastModified: new Date('2025-12-14'),
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
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/social-media-tools/instagram-dp",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/social-media-tools/link-in-bio",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/converters/currency-api",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/converters/currency",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/converters/file-size",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/converters/length",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/converters/temperature",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/converters/text-case",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/converters/timezone",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/seo-tools/meta-tags",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/seo-tools/lorem-ipsum",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/seo-tools/blog-titles",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/seo-tools/keyword-density",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/fun-tools/anniversary",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    },
    {
        url: "https://www.fasttools.store/fun-tools/birthday-countdown",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    },
    {
        url: "https://www.fasttools.store/fun-tools/future-age",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    },
    {
        url: "https://www.fasttools.store/finance-tools/bill-splitter",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/credit-card-payoff",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/discount-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/invoice-generator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/finance-tools/paypal-fee",
        lastModified: new Date('2025-12-23'),
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
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/savings-tracker",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/finance-tools/tip-calculator",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/dev-tools/jwt-decoder",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/dev-tools/regex-tester",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/dev-tools/json-to-csv",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/dev-tools/html-beautifier",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/dev-tools/color-palette",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    {
        url: "https://www.fasttools.store/dev-tools/hex-to-rgb",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/dev-tools/html-to-markdown",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/dev-tools/markdown-previewer",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
    },
    {
        url: "https://www.fasttools.store/image-tools/image-background-remover",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
        images: [
            {
                url: "https://www.fasttools.store/before_human.jpg",
                title: "Human Photo Before Background Removal - Professional Portrait Photography",
                caption: "Professional portrait photo before AI-powered background removal showing original image with background"
            },
            {
                url: "https://www.fasttools.store/after_Human.png",
                title: "Human Photo After Background Removal - Transparent PNG Portrait",
                caption: "Professional portrait with perfectly removed background showcasing AI precision and transparent PNG output"
            },
            {
                url: "https://www.fasttools.store/before_dog.jpg",
                title: "Pet Dog Photo Before Background Removal - Animal Photography",
                caption: "Pet dog photo before background removal showing original image with natural background for pet photography"
            },
            {
                url: "https://www.fasttools.store/after_dog.png",
                title: "Pet Dog Photo After Background Removal - Transparent Pet Image",
                caption: "Pet dog photo with perfectly removed background showcasing advanced edge detection for fur and complex details"
            },
            {
                url: "https://www.fasttools.store/object_before.jpg",
                title: "Product Object Photo Before Background Removal - E-commerce Photography",
                caption: "Product object photo before background removal showing original image for e-commerce and commercial photography"
            },
            {
                url: "https://www.fasttools.store/object_after.png",
                title: "Product Object Photo After Background Removal - Clean Product Image",
                caption: "Product object with clean removed background perfect for e-commerce listings and marketing materials"
            }
        ]
    },
    {
        url: "https://www.fasttools.store/image-tools/image-to-text",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.9,
        images: [
            {
                url: "https://www.fasttools.store/banner.png",
                title: "Image to Text - OCR Text Extraction Tool",
                caption: "AI-powered OCR tool to extract text from images, scanned documents, and photos instantly"
            },
            {
                url: "https://www.fasttools.store/logo.png",
                title: "FastTools Image to Text Converter Logo",
                caption: "Professional logo for FastTools OCR and text extraction tool"
            }
        ]
    },
    {
        url: "https://www.fasttools.store/pdf-tools/pdf-sign",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.98,
    },
    {
        url: "https://www.fasttools.store/pdf-tools/pdf-word-converter",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.97,
    },
    {
        url: "https://www.fasttools.store/pdf-tools/pdf-splitter-merger",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.97,
        images: [
            {
                url: "https://www.fasttools.store/banner.png",
                title: "PDF Splitter and Merger - Free PDF Editing and Processing",
                caption: "FastTools PDF Splitter and Merger collection for merging and splitting PDF files"
            },
            {
                url: "https://www.fasttools.store/logo.png",
                title: "FastTools PDF Splitter and Merger Logo",
                caption: "Professional logo for FastTools PDF splitting and merging toolkit"
            }
        ]
    },
    {
        url: "https://www.fasttools.store/pdf-tools/pdf-unlocker",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.96,
        images: [
            {
                url: "https://www.fasttools.store/banner.png",
                title: "PDF Unlocker - Remove PDF Password Protection",
                caption: "Free online PDF unlocker to remove password protection and unlock secured PDF files instantly"
            },
            {
                url: "https://www.fasttools.store/logo.png",
                title: "FastTools PDF Unlocker Logo",
                caption: "Professional logo for FastTools PDF password removal tool"
            }
        ]
    },
    {
        url: "https://www.fasttools.store/pdf-tools/pdf-compressor",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.96,
    },
    {
        url: "https://www.fasttools.store/pdf-tools/pdf-to-image",
        lastModified: new Date('2025-11-25'),
        changeFrequency: "monthly" as const,
        priority: 0.95,
    },
    // Tutorial Pages (Video Watch Pages for Google Video Indexing)
    {
        url: "https://www.fasttools.store/tutorials/youtube-channel-name-guide",
        lastModified: new Date('2025-12-17'),
        changeFrequency: "monthly" as const,
        priority: 0.85,
    },
]

import { getAllPosts } from "@/components/blog/blog"
import { getAllGuides } from "@/components/guide/guide"

export const generateGuideSitemap = () => {
    const guides = getAllGuides()
    return guides.map((guide) => ({
        url: `${baseUrl}/guides/${guide.slug}`,
        lastModified: new Date(guide.lastModified || guide.date),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
        images: guide.image
            ? [{
                url: guide.image.startsWith('http') ? guide.image : `${baseUrl}${guide.image}`,
                title: guide.title,
                caption: guide.description || ''
            }]
            : [],
    }))
}

export const generateBlogSitemap = () => {
    const posts = getAllPosts()
    return posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.lastModified || post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        images: post.image
            ? [{
                url: post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`,
                title: post.title,
                caption: post.description || ''
            }]
            : [],
    }))
}

export const generateCategorySitemap = () => {
    const posts = getAllPosts()
    const categories = Array.from(new Set(posts.map(post => post.category).filter(Boolean)))

    return categories.map(category => ({
        url: `${baseUrl}/blog/category/${category!.toLowerCase().replace(/\s+/g, '-')}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
        images: []
    }))
}

export const getAllSitemapPages = () => {
    // 1. Get all static pages from config
    const staticPages = [...mainPages, ...categoryPages, ...toolPages, ...guidePages]
    const existingUrls = new Set(staticPages.map(p => p.url))

    // 2. Archive Page
    const archiveUrl = 'https://www.fasttools.store/blog/archive'
    const dynamicPages: SitemapPage[] = []

    if (!existingUrls.has(archiveUrl)) {
        dynamicPages.push({
            url: archiveUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
            images: []
        })
    }

    // 3. Blog Posts
    const blogPages = generateBlogSitemap()

    // 4. Guides
    const guidePagesGenerated = generateGuideSitemap()

    // 4. Dynamic Categories
    const dynamicCategoryPages = generateCategorySitemap()
    dynamicCategoryPages.forEach(page => {
        if (!existingUrls.has(page.url)) {
            dynamicPages.push(page)
        }
    })

    // Return flattened, de-duplicated list
    return [...staticPages, ...blogPages, ...guidePagesGenerated, ...dynamicPages]
}
