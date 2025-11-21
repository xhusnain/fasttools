import type { Metadata, Viewport } from "next"

const BASE_URL = "https://www.fasttools.store"
const SITE_NAME = "FastTools"
const AUTHORS = [{ name: "FastTools Team", url: "https://www.fasttools.store" }]

const VERIFICATION = {
    google: "l2XEjZ8SEN_FD96ft9mIUW8cPiLW4mDbX6wZabF-xv0",
    yandex: "242a8cf232328714",
    me: ["support@fasttools.store"],
    other: {
        "msvalidate.01": "DE0A07DC9E742C4C8E795D7C99EF238B",
        "p:domain_verify": "603c992f6d70753cf89c1a0141990c73",
        "facebook-domain-verification": "m4jw5d6c1jsteghq2xo00wflvif79x",
        "google-adsense-account": "ca-pub-6296569221534302",
    },
}

export const DEFAULT_IMAGES = {
    OG_IMAGE_PNG: "https://www.fasttools.store/og-image.png",
    OG_IMAGE_SVG: "https://www.fasttools.store/og-image.svg",
    OG_IMAGE_ALT_TEXT: "FastTools - Free AI & Digital Tools Suite",
    LOGO_PNG: "https://www.fasttools.store/logo.png",
    LOGO_SVG: "https://www.fasttools.store/logo.svg",
    LOGO3_PNG: "https://www.fasttools.store/logo3.png",
    BANNER: "https://www.fasttools.store/banner.png",
    PLACEHOLDER: "https://www.fasttools.store/placeholder.jpg",
    PLACEHOLDER_SVG: "https://www.fasttools.store/placeholder.svg",
    PLACEHOLDER_USER: "https://www.fasttools.store/placeholder-user.jpg",
    DOG_BLUR_BEFORE: "https://www.fasttools.store/dog-blur-before.png",
    DOG_BLUR_AFTER: "https://www.fasttools.store/dog-blur-after.png",
    HUMAN_BLUR_BEFORE: "https://www.fasttools.store/human-blur-before.png",
    HUMAN_BLUR_AFTER: "https://www.fasttools.store/human-blur-after.png",
    OBJECT_BLUR_BEFORE: "https://www.fasttools.store/object-blur-before.png",
    OBJECT_BLUR_AFTER: "https://www.fasttools.store/object-blur-after.png",
    AFTER_DOG: "https://www.fasttools.store/after_dog.png",
    AFTER_HUMAN: "https://www.fasttools.store/after_Human.png",
    OBJECT_AFTER: "https://www.fasttools.store/object_after.png",
    OBJECT_BEFORE: "https://www.fasttools.store/object_before.jpg",
    BEFORE_DOG: "https://www.fasttools.store/before_dog.jpg",
    BEFORE_HUMAN: "https://www.fasttools.store/before_human.jpg",
    DEV_IMAGE: "https://www.fasttools.store/dev-image-2.jpg",
} as const

export const globalViewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    viewportFit: "cover",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#3D348B" },
        { media: "(prefers-color-scheme: dark)", color: "#3D348B" },
    ],
    colorScheme: "dark light",
}

export interface MetadataOptions {
    title: string
    description: string
    path: string
    ogImageAlt?: string
    noIndex?: boolean
    ogTitle?: string
    ogDescription?: string
    twitterTitle?: string
    twitterDescription?: string
    twitterCreator?: string
}

export function createMetadata(options: MetadataOptions): Metadata {
    const { title, description, path, ogImageAlt, noIndex, ogTitle, ogDescription, twitterTitle, twitterDescription, twitterCreator } = options
    const cleanPath = path.startsWith("/") ? path : `/${path}`
    const titleWithBranding = title === "FastTools" ? title : `${title} | FastTools`
    const fullTitle = addYearToTitle(titleWithBranding, cleanPath)
    const canonicalUrl = getCanonicalUrl(cleanPath)
    const defaultOgImage = getDefaultOgImage("png")
    const isCompany = isCompanyPage(cleanPath)
    const isFaqPage = cleanPath === "/faq"

    const finalOgTitle = ogTitle || fullTitle
    const finalOgDescription = ogDescription || description
    const finalTwitterTitle = twitterTitle || fullTitle
    const finalTwitterDescription = twitterDescription || description
    const finalTwitterCreator = twitterCreator || "@ZamanIsmail7"

    const openGraphConfig = isCompany && !isFaqPage
        ? {
            type: "website" as const,
            locale: "en_US" as const,
            url: canonicalUrl,
            siteName: SITE_NAME,
            images: [
                {
                    url: defaultOgImage,
                    width: 1200,
                    height: 630,
                    alt: DEFAULT_IMAGES.OG_IMAGE_ALT_TEXT,
                },
            ],
        }
        : {
            title: finalOgTitle,
            description: finalOgDescription,
            url: canonicalUrl,
            siteName: SITE_NAME,
            images: [
                {
                    url: defaultOgImage,
                    width: 1200,
                    height: 630,
                    alt: ogImageAlt || DEFAULT_IMAGES.OG_IMAGE_ALT_TEXT,
                },
            ],
            locale: "en_US",
            type: "website",
        }

    return {
        metadataBase: new URL(BASE_URL),
        title: {
            default: "FastTools",
            template: "%s | FastTools",
            absolute: fullTitle,
        },
        description,
        applicationName: SITE_NAME,
        authors: AUTHORS,
        creator: "FastTools Team",
        publisher: "FastTools",
        verification: VERIFICATION,
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        manifest: "/manifest.json",
        icons: {
            icon: [
                { url: "/favicon.ico", sizes: "any" },
                { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
                { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
            ],
            apple: [
                { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
            ],
            shortcut: "/favicon.ico",
        },
        robots: {
            index: !noIndex,
            follow: !noIndex,
            googleBot: {
                index: !noIndex,
                follow: !noIndex,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        openGraph: openGraphConfig,
        twitter: {
            card: "summary_large_image",
            title: finalTwitterTitle,
            description: finalTwitterDescription,
            images: [defaultOgImage],
            creator: finalTwitterCreator,
        },
        alternates: {
            canonical: canonicalUrl,
        },
        other: {
            "mobile-web-app-capable": "yes",
            "apple-mobile-web-app-capable": "yes",
            "apple-mobile-web-app-status-bar-style": "black-translucent",
            "apple-mobile-web-app-title": "fasttools",
            "application-name": "fasttools",
            "msapplication-TileColor": "#3D348B",
            "msapplication-navbutton-color": "#3D348B",
            "msapplication-config": "/browserconfig.xml",
            "msapplication-tap-highlight": "no",
            ...VERIFICATION.other,
        },
    }
}

export function getCurrentYear(): number {
    return new Date().getFullYear()
}

function isCompanyPage(path: string): boolean {
    const companyPages = [
        "/about",
        "/contact",
        "/privacy-policy",
        "/terms",
        "/faq",
        "/products",
        "/cookie-preferences",
        "/api-docs",
        "/",
    ]
    const normalizedPath = path.startsWith("/") ? path : `/${path}`
    return companyPages.includes(normalizedPath) || normalizedPath === "/"
}

function addYearToTitle(title: string, path: string): string {
    if (isCompanyPage(path)) {
        return title
    }
    const year = getCurrentYear()
    if (title.includes(`(${year})`) || title.includes(`- ${year}`) || title.includes(` ${year}`)) {
        return title
    }
    return `${title} (${year})`
}

export function getCanonicalUrl(path: string): string {
    const safePath = path.startsWith("/") ? path : `/${path}`
    return `${BASE_URL}${safePath}`
}

export function getImageUrl(imagePath: string): string {
    const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath
    return `${BASE_URL}/${cleanPath}`
}

export function getDefaultOgImage(format: "png" | "svg" = "png"): string {
    return format === "svg" ? DEFAULT_IMAGES.OG_IMAGE_SVG : DEFAULT_IMAGES.OG_IMAGE_PNG
}