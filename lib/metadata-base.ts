import type { Metadata, Viewport } from "next"

const BASE_URL = "https://www.fasttools.store"
const SITE_NAME = "FastTools"


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
    ogImage?: string | {
        url: string
        width?: number
        height?: number
        alt?: string
    }
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
    /** One-sentence definition for DefinedTerm schema (AEO optimization). */
    definition?: string
    breadcrumbs?: BreadcrumbItem[]
    icons?: Metadata['icons']
    video?: {
        id: string
        title?: string
        description?: string
        uploadDate?: string
        duration?: string
    }
    itemList?: {
        name: string
        description: string
        items: Array<{
            name: string
            description?: string
            url: string
            image?: string
        }>
    }
}




function shouldIncludeSchema(path: string): boolean {
    const toolKeywords = [
        "tools",
        "calculator",
        "generator",
        "converter",
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

/**
 * Build JSON-LD schema array from metadata options.
 * These must be rendered as <script type="application/ld+json"> tags in page components,
 * NOT via Next.js metadata.other (which renders as <meta> tags and is invisible to Google).
 */
export function buildSchemas(options: MetadataOptions): any[] {
    const { title, description: rawDescription, path, faqs, howToSteps, toolName, breadcrumbs } = options
    const description = rawDescription ? (rawDescription.length > 160 ? rawDescription.slice(0, 157) + "..." : rawDescription) : rawDescription
    const includeSchema = options.includeSchema ?? shouldIncludeSchema(path)
    const cleanPath = path.startsWith("/") ? path : `/${path}`

    let processedTitle = title
        .replace(/\|\s*FastTools/gi, "")
        .replace(/FastTools\s*[-–—|]?\s*/gi, "")
        .trim()
    if (shouldIncludeSchema(path) && !processedTitle.toLowerCase().startsWith("free")) {
        processedTitle = `Free ${processedTitle}`
    }
    const fullTitle = processedTitle

    const schemas: any[] = []

    if (includeSchema) {
        schemas.push(createSoftwareAppSchema({
            title,
            description,
            path: cleanPath,
            ...options.schemaOptions
        }))
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

    if (options.video) {
        schemas.push(createVideoObjectSchema(options.video, fullTitle, description))
    }

    if (options.itemList) {
        schemas.push(createItemListSchema(options.itemList))
    }

    if (options.definition && toolName) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            "name": toolName,
            "description": options.definition,
            "inDefinedTermSet": {
                "@type": "DefinedTermSet",
                "name": "Online Tools",
                "url": BASE_URL
            }
        })
    }

    return schemas
}

export function createMetadata(options: MetadataOptions): Metadata {
    const { title, description: rawDescription, path, ogImageAlt, ogImage, noIndex, ogTitle, ogDescription, twitterTitle, twitterDescription, twitterCreator } = options
    const description = rawDescription ? (rawDescription.length > 160 ? rawDescription.slice(0, 157) + "..." : rawDescription) : rawDescription

    const cleanPath = path.startsWith("/") ? path : `/${path}`
    let processedTitle = title
        .replace(/\|\s*FastTools/gi, "")
        .replace(/FastTools\s*[-–—|]?\s*/gi, "")
        .trim()
    if (shouldIncludeSchema(path) && !processedTitle.toLowerCase().startsWith("free")) {
        processedTitle = `Free ${processedTitle}`
    }

    const fullTitle = processedTitle
    const canonicalUrl = getCanonicalUrl(cleanPath)

    const finalOgTitle = ogTitle || fullTitle
    const finalOgDescription = ogDescription || description || "Every tool you need, completely free. No signup required."
    let ogImageConfig: any
    if (ogImage) {
        if (typeof ogImage === 'string') {
            const imageUrl = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`
            ogImageConfig = {
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: ogImageAlt || title,
            }
        } else {
            const imageUrl = ogImage.url.startsWith('http') ? ogImage.url : `${BASE_URL}${ogImage.url.startsWith('/') ? ogImage.url : `/${ogImage.url}`}`
            ogImageConfig = {
                url: imageUrl,
                width: ogImage.width || 1200,
                height: ogImage.height || 630,
                alt: ogImage.alt || ogImageAlt || title,
            }
        }
    } else {
        ogImageConfig = {
            url: `${BASE_URL}/android-chrome-512x512.png`,
            width: 512,
            height: 512,
            alt: ogImageAlt || "FastTools - Free Online Tools",
        }
    }

    const openGraphConfig: any = {
        title: finalOgTitle,
        description: finalOgDescription,
        url: canonicalUrl,
        siteName: SITE_NAME,
        type: "website" as const,
        locale: "en_US" as const,
        images: [ogImageConfig],
    }

    return {
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
            creator: twitterCreator || "@FastTools",
        },
        robots: noIndex ? {
            index: false,
            follow: false,
        } : {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large" as const,
            "max-video-preview": -1,
        },
        ...(options.icons && { icons: options.icons }),
    }
}



export function getCanonicalUrl(path: string): string {
    const safePath = path.startsWith("/") ? path : `/${path}`
    return `${BASE_URL}${safePath}`
}



export function getWebsiteSchema(searchUrl?: string) {
    const websiteSchema: any = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        alternateName: ["FastTools", "Fast Tools", "fasttools"],
        url: `${BASE_URL}/`,
    }

    if (searchUrl) {
        websiteSchema.potentialAction = {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: searchUrl
            },
            "query-input": "required name=search_term_string",
        }
    }

    return websiteSchema
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
    alternateName?: string | string[]
    featureList?: string[]
    version?: string
    softwareVersion?: string
    softwareRequirements?: string
    screenshot?: string
    aggregateRating?: {
        ratingValue: string
        ratingCount?: string
        bestRating?: string
        worstRating?: string
        reviewCount?: string
        "@type"?: string
    }
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
        ratingValue,
        ratingCount,
        alternateName,
        featureList,
        version = "2.0",
        softwareRequirements,
        screenshot,
        aggregateRating
    } = options

    const appName = name || (title ? extractToolName(title) : "")
    const appUrl = path ? getCanonicalUrl(path) : BASE_URL
    const currentDate = new Date().toISOString().split('T')[0]

    const schema: any = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
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
        ...(aggregateRating && {
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": aggregateRating.ratingValue,
                ...(aggregateRating.ratingCount && { "ratingCount": aggregateRating.ratingCount }),
                ...(aggregateRating.bestRating && { "bestRating": aggregateRating.bestRating }),
                ...(aggregateRating.worstRating && { "worstRating": aggregateRating.worstRating }),
                ...(aggregateRating.reviewCount && { "reviewCount": aggregateRating.reviewCount }),
            }
        }),
        "author": {
            "@type": "Organization",
            "name": SITE_NAME,
            "url": BASE_URL
        },
        "publisher": {
            "@type": "Organization",
            "name": SITE_NAME,
            "url": BASE_URL
        },
        "datePublished": "2024-01-01",
        "dateModified": currentDate,
        "version": version,
        "softwareVersion": version,
        "downloadUrl": appUrl,
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

    if (softwareRequirements) {
        schema.softwareRequirements = softwareRequirements
    }

    if (screenshot) {
        schema.screenshot = screenshot
    }

    return schema
}

export function createVideoObjectSchema(video: { id: string, title?: string, description?: string, uploadDate?: string, duration?: string }, toolTitle: string, toolDescription: string) {
    const videoTitle = video.title || toolTitle
    const videoDescription = video.description || toolDescription

    return {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": videoTitle,
        "description": videoDescription,
        "thumbnailUrl": [
            `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`,
            `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
            `https://i.ytimg.com/vi/${video.id}/default.jpg`
        ],
        "uploadDate": video.uploadDate || "2024-01-01T08:00:00+08:00",
        "duration": video.duration,
        "contentUrl": `https://www.youtube.com/watch?v=${video.id}`,
        "embedUrl": `https://www.youtube.com/embed/${video.id}`,
        "publisher": {
            "@type": "Organization",
            "name": SITE_NAME,
            "logo": {
                "@type": "ImageObject",
                "url": `${BASE_URL}/logo.png`,
                "width": 60,
                "height": 60
            }
        }
    }
}

export function createItemListSchema(options: { name: string, description: string, items: Array<{ name: string, description?: string, url: string, image?: string }> }) {
    const { name, description, items } = options

    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": name,
        "description": description,
        "numberOfItems": items.length,
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "description": item.description,
            "url": item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url.startsWith('/') ? item.url : `/${item.url}`}`,
            "image": item.image ? (item.image.startsWith('http') ? item.image : `${BASE_URL}${item.image.startsWith('/') ? item.image : `/${item.image}`}`) : undefined
        }))
    }
}

