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

export function createMetadata(options: MetadataOptions): Metadata {
    const { title, description, path, ogImageAlt, ogImage, noIndex, ogTitle, ogDescription, twitterTitle, twitterDescription, twitterCreator, schemaOptions, faqs, howToSteps, toolName, breadcrumbs } = options
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

    if (options.video) {
        schemas.push(createVideoObjectSchema(options.video, fullTitle, description))
    }

    if (options.itemList) {
        schemas.push(createItemListSchema(options.itemList))
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
            creator: twitterCreator || "@ZamanIsmail7",
        },
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            }
        }),
        ...(options.icons && { icons: options.icons }),
        ...(schemas.length > 0 && {
            other: {
                "application/ld+json": JSON.stringify(schemas.length === 1 ? schemas[0] : schemas)
            }
        }),
    }
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
    softwareRequirements?: string
    screenshot?: string
    aggregateRating?: {
        ratingValue: string
        ratingCount: string
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
        ratingValue = "4.8",
        ratingCount = "50000",
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
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": aggregateRating?.ratingValue || ratingValue,
            "ratingCount": aggregateRating?.ratingCount || ratingCount
        },
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
        "interactionStatistic": {
            "@type": "InteractionCounter",
            "interactionType": { "@type": "WatchAction" },
            "userInteractionCount": 5000
        },
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

export interface ArticleSchemaOptions {
    title: string
    description: string
    image?: string
    authorName?: string
    datePublished?: string
    dateModified?: string
    slug: string
    wordCount?: number
}

export function createArticleSchema(options: ArticleSchemaOptions) {
    const {
        title,
        description,
        image,
        authorName = "FastTools Team",
        datePublished,
        dateModified,
        slug,
        wordCount
    } = options

    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: description,
        image: image ? `${BASE_URL}${image.startsWith('/') ? image : `/${image}`}` : undefined,
        author: {
            '@type': 'Person',
            name: authorName,
        },
        publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            sameAs: [
                'https://www.facebook.com/profile.php?id=61575993339664',
                'https://www.instagram.com/fasttools/',
                'https://www.linkedin.com/company/fasttools-official',
                'https://x.com/fasttools',
            ],
        },
        datePublished: datePublished,
        dateModified: dateModified || datePublished,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${BASE_URL}/blog/${slug}`,
        },
        wordCount: wordCount,
    }
}