import { NextResponse } from 'next/server'
import { getAllSitemapPages } from '@/lib/sitemap-config'
import { routing } from '@/i18n/routing'

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

    // Helper to extract path without locale
    const getPathWithoutLocale = (url: string): string => {
        const urlObj = new URL(url)
        let path = urlObj.pathname
        
        // Remove locale prefix if present
        const localePattern = new RegExp(`^/(${routing.locales.join('|')})(/|$)`)
        path = path.replace(localePattern, '/')
        
        // Ensure we have at least a slash
        return path || '/'
    }

    try {
        const allPages = getAllSitemapPages()
        const baseUrl = 'https://www.fasttools.store'
        const locales = routing.locales

        // Group pages by their path (without locale)
        const pagesByPath = new Map<string, typeof allPages>()
        
        allPages.forEach(page => {
            const pathWithoutLocale = getPathWithoutLocale(page.url)
            if (!pagesByPath.has(pathWithoutLocale)) {
                pagesByPath.set(pathWithoutLocale, [])
            }
            pagesByPath.get(pathWithoutLocale)!.push(page)
        })

        // Generate locale-specific URLs with alternates
        const sitemapEntries: string[] = []

        pagesByPath.forEach((pages, pathWithoutLocale) => {
            // Get the base page data (use first one as template)
            const basePage = pages[0]
            
            // Generate URLs for each locale
            locales.forEach(locale => {
                // English doesn't get a prefix with 'as-needed'
                const localeUrl = locale === routing.defaultLocale 
                    ? `${baseUrl}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
                    : `${baseUrl}/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
                const localeCode = locale === 'pt-BR' ? 'pt-BR' : locale === 'zh-CN' ? 'zh-CN' : locale
                
                // Generate alternate links for all locales
                const alternateLinks = locales.map(l => {
                    const altLocaleCode = l === 'pt-BR' ? 'pt-BR' : l === 'zh-CN' ? 'zh-CN' : l
                    // English doesn't get a prefix
                    const altUrl = l === routing.defaultLocale
                        ? `${baseUrl}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
                        : `${baseUrl}/${l}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
                    return `    <xhtml:link rel="alternate" hreflang="${altLocaleCode}" href="${escapeXml(altUrl)}" />`
                })

                // Add x-default pointing to default locale (without prefix)
                const defaultUrl = `${baseUrl}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
                alternateLinks.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(defaultUrl)}" />`)
                
                const alternates = alternateLinks.join('\n')

                // @ts-ignore - Check if images exists on the object
                const images = basePage.images
                
                sitemapEntries.push(`  <url>
    <loc>${escapeXml(localeUrl)}</loc>
    <lastmod>${basePage.lastModified instanceof Date ? basePage.lastModified.toISOString() : new Date(basePage.lastModified).toISOString()}</lastmod>
    <changefreq>${basePage.changeFrequency}</changefreq>
    <priority>${basePage.priority}</priority>
${alternates}${images ? images.map((image: any) => `
    <image:image>
      <image:loc>${escapeXml(image.url)}</image:loc>
      <image:title>${escapeXml(image.title || '')}</image:title>
      <image:caption>${escapeXml(image.caption || '')}</image:caption>
    </image:image>`).join('') : ''}
  </url>`)
            })
        })

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
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
