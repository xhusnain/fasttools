import type { Metadata, Viewport } from "next"

const BASE_URL = "https://www.fasttools.store"
const SITE_NAME = "FastTools"


export const DEFAULT_IMAGES = {
    OG_IMAGE_PNG: "https://www.fasttools.store/opengraph-image.png",
    OG_IMAGE_SVG: "https://www.fasttools.store/og-image.svg",
    OG_IMAGE_ALT_TEXT: "FastTools - 1000+ Free Online Tools",
    LOGO_PNG: "https://www.fasttools.store/logo.png",
    LOGO_SVG: "https://www.fasttools.store/logo.svg",
    // Fallback for missing logo3.png to logo.png based on available files
    LOGO3_PNG: "https://www.fasttools.store/logo.png",
    BANNER: "https://www.fasttools.store/banner.png",
    PLACEHOLDER: "https://www.fasttools.store/placeholder.jpg",
    PLACEHOLDER_SVG: "https://www.fasttools.store/placeholder.svg",
    PLACEHOLDER_USER: "https://www.fasttools.store/placeholder-user.jpg",
} as const

export const globalViewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    viewportFit: "cover",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#110f0f" },
    ],
    colorScheme: "dark light",
}

export interface BreadcrumbItem {
    label: string
    href: string
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
    includeSchema?: boolean
    schemaOptions?: Omit<SoftwareAppSchemaOptions, 'title' | 'path'>
    faqs?: Array<{
        question: string
        answer: string
    }>
    howToSteps?: string[]
    toolName?: string
    breadcrumbs?: BreadcrumbItem[]
}




function shouldIncludeSchema(path: string): boolean {
    const toolKeywords = [
        "tools",
        "calculator",
        "generator",
        "converter",
        "downloader",
        "checker",
        "counter",
        "editor",
        "maker",
        "splitter",
        "merger",
        "compressor",
    ]
    const normalizedPath = path.toLowerCase()
    return toolKeywords.some(keyword => normalizedPath.includes(keyword))
}

export function createMetadata(options: MetadataOptions): Metadata & { softwareSchema?: ReturnType<typeof createSoftwareAppSchema> } {
    const { title, description, path, ogImageAlt, noIndex, ogTitle, ogDescription, twitterTitle, twitterDescription, twitterCreator, schemaOptions, faqs, howToSteps, toolName, breadcrumbs } = options

    // Smart default: Only include schema if path looks like a tool, unless explicitly overridden
    const includeSchema = options.includeSchema ?? shouldIncludeSchema(path)

    const cleanPath = path.startsWith("/") ? path : `/${path}`
    const titleWithBranding = title === "FastTools" || title.startsWith("FastTools -") ? title : `${title} | FastTools`
    const fullTitle = addYearToTitle(titleWithBranding, cleanPath)
    const canonicalUrl = getCanonicalUrl(cleanPath)



    const finalOgTitle = ogTitle || fullTitle
    const finalOgDescription = ogDescription || description


    const openGraphConfig: any = {
        title: finalOgTitle,
        description: finalOgDescription,
        url: canonicalUrl,
        siteName: SITE_NAME,
        type: "website" as const,
        locale: "en_US" as const,
        images: [
            {
                url: DEFAULT_IMAGES.OG_IMAGE_PNG,
                width: 1200,
                height: 630,
                alt: ogImageAlt || DEFAULT_IMAGES.OG_IMAGE_ALT_TEXT,
            },
        ],
    }



    let softwareSchema: ReturnType<typeof createSoftwareAppSchema> | undefined

    if (includeSchema) {
        softwareSchema = createSoftwareAppSchema({
            title,
            description,
            path: cleanPath,
            ...schemaOptions
        })
    }

    const schemas: any[] = []

    if (softwareSchema) {
        schemas.push(softwareSchema)
    }

    if (faqs && faqs.length > 0) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                },
            })),
        })
    }

    if (howToSteps && howToSteps.length > 0) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: `How to use ${toolName || title}`,
            step: howToSteps.map((step, index) => ({
                "@type": "HowToStep",
                position: index + 1,
                text: step,
            })),
        })
    }

    if (breadcrumbs && breadcrumbs.length > 0) {
        schemas.push(createBreadcrumbSchema(breadcrumbs, cleanPath))
    }

    const metadata: Metadata = {
        title: fullTitle,
        description,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: openGraphConfig,
        twitter: {
            card: "summary_large_image",
            title: twitterTitle || finalOgTitle,
            description: twitterDescription || finalOgDescription,
            creator: twitterCreator || "@ZamanIsmail7",
            images: [DEFAULT_IMAGES.OG_IMAGE_PNG],
        },
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            }
        }),
        // Manifest is handled by app/manifest.ts but we can link it here if needed, 
        // though Next.js 13+ with manifest.ts handles the <link rel="manifest"> automatically.
        ...(schemas.length > 0 && {
            other: {
                "application/ld+json": JSON.stringify(schemas.length === 1 ? schemas[0] : schemas)
            }
        }),
    }

    if (includeSchema && softwareSchema) {
        return {
            ...metadata,
            softwareSchema
        }
    }

    return metadata
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



export function getWebsiteSchema(searchUrl?: string) {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        alternateName: ["FastTools", "Fast Tools", "fasttools"],
        url: `${BASE_URL}/`,
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: searchUrl || `${BASE_URL}/?q={search_term_string}`
            },
            "query-input": "required name=search_term_string",
        },
    }
}

export function createBreadcrumbSchema(breadcrumbs: BreadcrumbItem[], currentPath: string) {
    const items = [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: BASE_URL
        },
        ...breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 2,
            name: crumb.label,
            item: crumb.href.startsWith('http') ? crumb.href : `${BASE_URL}${crumb.href.startsWith('/') ? crumb.href : `/${crumb.href}`}`
        }))
    ]

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `${getCanonicalUrl(currentPath)}#breadcrumb`,
        itemListElement: items
    }
}

export function extractToolName(title: string): string {
    // Remove common suffixes like "- Free ...", "| FastTools", year patterns, etc.
    return title
        .replace(/\s*-\s*Free.*$/i, '')
        .replace(/\s*\|\s*FastTools.*$/i, '')
        .replace(/\s*\(\d{4}\).*$/i, '')
        .replace(/\s*-\s*\d{4}.*$/i, '')
        .trim()
}

export interface SoftwareAppSchemaOptions {
    name?: string
    title?: string
    description?: string
    path?: string
    applicationCategory?: string
    operatingSystem?: string
    price?: string
    currency?: string
    ratingValue?: string
    ratingCount?: string
    alternateName?: string
    featureList?: string[]
    version?: string
}

export function createSoftwareAppSchema(options: SoftwareAppSchemaOptions) {
    const {
        name,
        title,
        description,
        path,
        applicationCategory = "NetworkApplication",
        operatingSystem = "Web Browser",
        price = "0",
        currency = "USD",
        ratingValue = "4.8",
        ratingCount = "50000",
        alternateName,
        featureList,
        version = "2.0"
    } = options

    // Use provided name, or extract from title, or use empty string
    const appName = name || (title ? extractToolName(title) : "")
    const appUrl = path ? getCanonicalUrl(path) : BASE_URL
    const currentDate = new Date().toISOString().split('T')[0]

    const schema: any = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": appName,
        "applicationCategory": applicationCategory,
        "operatingSystem": operatingSystem,
        "url": appUrl,
        "inLanguage": "en",
        "isAccessibleForFree": true,
        "offers": {
            "@type": "Offer",
            "price": price,
            "priceCurrency": currency,
            "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": ratingValue,
            "ratingCount": ratingCount
        },
        "author": {
            "@type": "Organization",
            "name": SITE_NAME,
            "url": BASE_URL
        },
        "publisher": {
            "@type": "Organization",
            "name": SITE_NAME,
            "url": BASE_URL,
            "logo": {
                "@type": "ImageObject",
                "url": DEFAULT_IMAGES.LOGO_SVG,
                "width": 320,
                "height": 80
            }
        },
        "datePublished": "2024-01-01",
        "dateModified": currentDate,
        "version": version,
        "softwareVersion": version,
        "downloadUrl": appUrl,
        "screenshot": DEFAULT_IMAGES.OG_IMAGE_SVG,
        "isPartOf": {
            "@type": "WebSite",
            "name": SITE_NAME,
            "url": BASE_URL
        }
    }

    // Add optional fields if provided
    if (description) {
        schema.description = description
    }

    if (alternateName) {
        schema.alternateName = alternateName
    }

    if (featureList && featureList.length > 0) {
        schema.featureList = featureList
    }

    return schema
}