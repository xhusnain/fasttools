/**
 * BreadcrumbJsonLd - Renders a standalone BreadcrumbList JSON-LD script tag.
 * 
 * Use this component on pages that don't use ToolPageLayout to ensure
 * proper BreadcrumbList structured data for Google Search Console.
 */

const BASE_URL = "https://fasttools.store"

export interface BreadcrumbItem {
    label: string
    href: string
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: BASE_URL
            },
            ...items.map((crumb, index) => ({
                "@type": "ListItem",
                position: index + 2,
                name: crumb.label,
                item: crumb.href.startsWith("http")
                    ? crumb.href
                    : `${BASE_URL}${crumb.href.startsWith("/") ? crumb.href : `/${crumb.href}`}`
            }))
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
