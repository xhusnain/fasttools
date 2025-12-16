import { NextResponse } from 'next/server'
import { mainPages, categoryPages, toolPages, generateBlogSitemap } from '@/lib/sitemap-config'
import { getAllPosts } from '@/components/blog/blog'

export async function GET() {
    const escapeXml = (str: string): string => {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;')
    }

    const blogPosts = getAllPosts()
    const blogPages = generateBlogSitemap(blogPosts)


    // Combine configured pages
    const configuredPages = [...mainPages, ...categoryPages, ...toolPages]
    const existingUrls = new Set(configuredPages.map(p => p.url))

    // Add Archive Page if not not already in config
    const archiveUrl = 'https://www.fasttools.store/blog/archive'
    const dynamicPages = []

    if (!existingUrls.has(archiveUrl)) {
        dynamicPages.push({
            url: archiveUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
            images: []
        })
    }

    // Add Dynamic Category Pages (filtering duplicates)
    const categories = Array.from(new Set(blogPosts.map(post => post.category).filter(Boolean)))
    categories.forEach(category => {
        const catUrl = `https://www.fasttools.store/blog/category/${category!.toLowerCase().replace(/\s+/g, '-')}`
        if (!existingUrls.has(catUrl)) {
            dynamicPages.push({
                url: catUrl,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.8,
                images: []
            })
        }
    })

    const allPages = [...configuredPages, ...blogPages, ...dynamicPages]

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allPages.map(page => {
        // @ts-ignore - Check if images exists on the object
        const images = page.images
        return `  <url>
    <loc>${escapeXml(page.url)}</loc>
    <lastmod>${page.lastModified instanceof Date ? page.lastModified.toISOString() : new Date(page.lastModified).toISOString()}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>${images ? images.map((image: any) => `
    <image:image>
      <image:loc>${escapeXml(image.url)}</image:loc>
      <image:title>${escapeXml(image.title || '')}</image:title>
      <image:caption>${escapeXml(image.caption || '')}</image:caption>
    </image:image>`).join('') : ''}
  </url>`
    }).join('\n')}
</urlset>`

    return new NextResponse(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    })
}
