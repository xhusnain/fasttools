import { NextResponse } from 'next/server'
import { getAllSitemapPages } from '@/lib/sitemap-config'
import { routing } from '@/i18n/routing'

export async function GET() {
    const escapeXml = (str: string): string => {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;')
    }

    const getPathWithoutLocale = (url: string): string => {
        const urlObj = new URL(url)
        let path = urlObj.pathname
        const localePattern = new RegExp(`^/(${routing.locales.join('|')})(/|$)`)
        path = path.replace(localePattern, '/')
        return path || '/'
    }

    try {
        const allPages = getAllSitemapPages()
        const baseUrl = 'https://www.fasttools.store'
        const locales = routing.locales
        const pagesByPath = new Map<string, typeof allPages>()
        
        allPages.forEach(page => {
            const pathWithoutLocale = getPathWithoutLocale(page.url)
            if (!pagesByPath.has(pathWithoutLocale)) {
                pagesByPath.set(pathWithoutLocale, [])
            }
            pagesByPath.get(pathWithoutLocale)!.push(page)
        })

        const sitemapEntries: string[] = []

        pagesByPath.forEach((pages, pathWithoutLocale) => {
            const basePage = pages[0]
            
            locales.forEach(locale => {
                const localeUrl = locale === routing.defaultLocale 
                    ? `${baseUrl}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
                    : `${baseUrl}/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`

                const images = basePage.images
                const imageXml = images ? images.map((image: any) => `
    <image:image>
      <image:loc>${escapeXml(image.url)}</image:loc>
      <image:title>${escapeXml(image.title || '')}</image:title>
      <image:caption>${escapeXml(image.caption || '')}</image:caption>
    </image:image>`).join('') : ''
                
                sitemapEntries.push(`  <url>
    <loc>${escapeXml(localeUrl)}</loc>
    <lastmod>${basePage.lastModified instanceof Date ? basePage.lastModified.toISOString() : new Date(basePage.lastModified).toISOString()}</lastmod>
    <changefreq>${basePage.changeFrequency}</changefreq>
    <priority>${basePage.priority}</priority>${imageXml}
  </url>`)
            })
        })

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sitemapEntries.join('\n')}
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
