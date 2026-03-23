import { MetadataRoute } from 'next'
import { baseUrl } from '@/app/sitemap'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: ['/', '/llms.txt', '/humans.txt', '/ai.txt'],
                disallow: ['/api/', '/_next/', '/private/', '/temp/'],
            },

        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
