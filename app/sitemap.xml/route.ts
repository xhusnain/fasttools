import { NextResponse } from 'next/server'
import { mainPages, categoryPages, toolPages } from '@/lib/sitemap-config'
import { getAllPosts } from '@/components/blog/blog'

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

    const blogPosts = getAllPosts()
    const blogPages = blogPosts.map((post) => ({
        url: `https://www.fasttools.store/blog/${post.slug}`,
        lastModified: new Date(post.lastModified || post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        images: post.image ? [{
            url: post.image.startsWith('http') ? post.image : `https://www.fasttools.store${post.image}`,
            title: post.title,
            caption: post.description
        }] : []
    }))

    const allPages = [...mainPages, ...categoryPages, ...toolPages, ...blogPages]

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
