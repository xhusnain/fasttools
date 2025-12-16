import { NextResponse } from 'next/server'
import { getAllSitemapPages } from '@/lib/sitemap-config'

export async function GET() {
    // XML escape function
    const escapeXml = (str: string): string => {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;')
    }

    try {
        const allPages = getAllSitemapPages()

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
    } catch (error) {
        console.error('Sitemap Error:', error)
        return NextResponse.json({ error: String(error), stack: error instanceof Error ? error.stack : undefined }, { status: 500 })
    }
}
