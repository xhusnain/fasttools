import { MetadataRoute } from 'next'
import { baseUrl } from '@/app/sitemap'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: ['/', '/llms.txt', '/humans.txt', '/ai.txt'],
                // /_next/ must stay crawlable: Google needs the JS/CSS chunks to
                // render pages; blocking them degrades indexing quality.
                disallow: ['/api/', '/private/', '/temp/'],
            },

        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
