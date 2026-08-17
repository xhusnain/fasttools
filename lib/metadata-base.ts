import type { Metadata, Viewport } from "next"
import { noindexPaths } from "./noindex"

const BASE_URL = "https://fasttools.store"
const SITE_NAME = "FastTools"

// Dead/low-value pages to keep out of the index. Enforced here as a <meta robots>
// tag (instead of via middleware) so content pages stay statically cacheable.
const noindexSet = new Set(noindexPaths.map((p) => p.toLowerCase()))


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
    keywords?: string | string[]
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
    const normalizedFullPath = (path.startsWith("/") ? path : `/${path}`).toLowerCase()
    // Blog posts are articles, not tools — a slug containing a tool keyword
    // (e.g. /blog/...-seo-tools) must not get tool schema or the "Free " prefix.
    if (normalizedFullPath.startsWith("/blog")) return false
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
/**
 * Truncate a meta description at a word boundary, never mid-word and never
 * with an appended ellipsis — "credit car..." style snippets read as
 * machine-generated in SERPs and depress CTR.
 */
function truncateDescription(raw: string | undefined): string | undefined {
    if (!raw || raw.length <= 160) return raw
    const cut = raw.slice(0, 157)
    const lastSpace = cut.lastIndexOf(" ")
    return (lastSpace > 100 ? cut.slice(0, lastSpace) : cut).replace(/[\s,;:.]+$/, "")
}

export function buildSchemas(options: MetadataOptions): any[] {
    const { title, description: rawDescription, path, breadcrumbs } = options
    const description = truncateDescription(rawDescription)
    const includeSchema = options.includeSchema ?? shouldIncludeSchema(path)
    const cleanPath = path.startsWith("/") ? path : `/${path}`

    let processedTitle = title
        .replace(/\|\s*FastTools/gi, "")
        .replace(/FastTools\s*[-–—|]?\s*/gi, "")
        .trim()
    if (shouldIncludeSchema(path) && !/\bfree\b/i.test(processedTitle)) {
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

    // FAQPage and HowTo JSON-LD are intentionally NOT emitted, even though
    // pages still pass faqs/howToSteps (they drive visible page content):
    // FAQ rich results are restricted to government/health authority sites
    // (Aug 2023) and HowTo rich results were removed entirely (Sep 2023).
    // Emitting them earns nothing and replicates an identical schema stack
    // across every tool page — a scaled-content footprint.

    if (breadcrumbs && breadcrumbs.length > 0) {
        schemas.push(createBreadcrumbSchema(breadcrumbs, cleanPath))
    }

    if (options.video) {
        schemas.push(createVideoObjectSchema(options.video, fullTitle, description ?? ""))
    }

    if (options.itemList) {
        schemas.push(createItemListSchema(options.itemList))
    }

    // DefinedTerm/DefinedTermSet dropped for the same reason: no rich-result
    // value, identical on every page, pure schema bloat.

    return schemas
}

export function createMetadata(options: MetadataOptions): Metadata {
    const { title, description: rawDescription, path, ogImageAlt, ogImage, noIndex, ogTitle, ogDescription, twitterTitle, twitterDescription, twitterCreator } = options
    const description = truncateDescription(rawDescription)
    const keywords = normalizeMetadataKeywords(options.keywords)

    const cleanPath = path.startsWith("/") ? path : `/${path}`
    let processedTitle = title
        .replace(/\|\s*FastTools/gi, "")
        .replace(/FastTools\s*[-–—|]?\s*/gi, "")
        .trim()
    if (shouldIncludeSchema(path) && !/\bfree\b/i.test(processedTitle)) {
        processedTitle = `Free ${processedTitle}`
    }

    const fullTitle = processedTitle
    const canonicalUrl = getCanonicalUrl(cleanPath)
    const effectiveNoIndex = noIndex || noindexSet.has(cleanPath.toLowerCase())

    const finalOgTitle = ogTitle || fullTitle
    const finalOgDescription = ogDescription || description || "Every tool you need, completely free. No signup required."

    const openGraphConfig: any = {
        title: finalOgTitle,
        description: finalOgDescription,
        url: canonicalUrl,
        siteName: SITE_NAME,
        type: "website" as const,
        locale: "en_US" as const,
    }
    if (ogImage) {
        if (typeof ogImage === 'string') {
            const imageUrl = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`
            openGraphConfig.images = [{
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: ogImageAlt || title,
            }]
        } else {
            const imageUrl = ogImage.url.startsWith('http') ? ogImage.url : `${BASE_URL}${ogImage.url.startsWith('/') ? ogImage.url : `/${ogImage.url}`}`
            openGraphConfig.images = [{
                url: imageUrl,
                width: ogImage.width || 1200,
                height: ogImage.height || 630,
                alt: ogImage.alt || ogImageAlt || title,
            }]
        }
    } else {
        // Explicit default: live tool pages were shipping with NO og:image at
        // all (the root app/opengraph-image.tsx was only applied to "/"), so
        // every share/discover surface got a bare link. Point at the root OG
        // image route deterministically.
        openGraphConfig.images = [{
            url: `${BASE_URL}/opengraph-image`,
            width: 1200,
            height: 630,
            alt: ogImageAlt || fullTitle,
        }]
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
        robots: effectiveNoIndex ? {
            index: false,
            follow: false,
        } : {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large" as const,
            "max-video-preview": -1,
        },
        ...(keywords && { keywords }),
        ...(options.icons && { icons: options.icons }),
    }
}

function normalizeMetadataKeywords(keywords: string | string[] | undefined): string | string[] | undefined {
    if (Array.isArray(keywords)) {
        const filtered = keywords
            .map((keyword) => keyword.trim())
            .filter(Boolean)

        return filtered.length > 0 ? filtered : undefined
    }

    return typeof keywords === "string" && keywords.trim() ? keywords.trim() : undefined
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
    alternateName?: string | string[]
    featureList?: string[]
    version?: string
    softwareVersion?: string
    softwareRequirements?: string
    screenshot?: string
    /** Real content-change date (YYYY-MM-DD). Emitted only when provided. */
    dateModified?: string
    /** Real publication date (YYYY-MM-DD). Emitted only when provided. */
    datePublished?: string
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
        alternateName,
        featureList,
        version = "2.0",
        softwareRequirements,
        screenshot,
        dateModified,
        datePublished
    } = options

    const appName = name || (title ? extractToolName(title) : "")
    const appUrl = path ? getCanonicalUrl(path) : BASE_URL

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
        // No aggregateRating here, ever: FastTools has no review system, and
        // self-asserted ratings violate Google's structured-data spam policy
        // (manual-action risk).
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
        // datePublished/dateModified are emitted ONLY when a real date is
        // passed in. The previous behavior — fabricated datePublished
        // "2024-01-01" plus dateModified stamped with new Date() at render
        // time — told Google every page was "modified today" on every crawl
        // while the sitemap said otherwise: a machine-detectable fake
        // freshness signal on all ~100 tool pages.
        ...(datePublished ? { "datePublished": datePublished } : {}),
        ...(dateModified ? { "dateModified": dateModified } : {}),
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
