import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { redirects } from './lib/redirects'
import { env } from './lib/env'

const goneUrls = new Set([
    // Guide pages that were removed
    '/guides/instagram-dp-viewer-guide',
    '/guides/ai-qr-art-generator-guide',
    '/guides/sales-tax-calculator-guide',
    '/guides/markdown-previewer-guide',
    '/guides/emi-calculator-guide',
    '/guides/gpa-calculator-guide',
    '/guides/jwt-decoder-guide',
    '/guides/pace-calculator-guide',
    '/guides/mortgage-calculator-guide',
    '/guides/ai-pet-name-generator-guide',
    '/guides/background-blur-guide',
    '/guides/amortization-calculator-guide',
    '/guides/salary-calculator-guide',
    '/guides/ai-song-lyrics-generator-guide',
    '/guides/year-end-countdown-guide',
    '/guides/html-beautifier-guide',
    '/guides/tip-calculator-guide',
    '/guides/json-to-csv-converter-guide',
    '/guides/regex-tester-guide',
    '/guides/future-age-predictor-guide',
    '/guides/temperature-converter-guide',
    '/guides/lorem-ipsum-guide',
    '/guides/qr-code-generator-guide',
    '/guides/date-difference-calculator-guide',
    '/guides/zodiac-sign-finder-guide',
    '/guides/standard-deviation-guide',
    '/guides/scientific-calculator-guide',
    '/guides/image-to-text-ocr-guide',
    '/guides/developer-tools-guide',
    '/guides/bmr-calculator-guide',
    '/guides/paypal-fee-calculator-guide',
    '/guides/inflation-calculator-guide',
    '/guides/meta-tags-guide',
    '/guides/investment-calculator-guide',
    '/guides/compound-interest-calculator-guide',
    '/guides/retirement-calculator-guide',
    '/guides/html-to-markdown-converter-guide',
    '/guides/love-calculator-guide',
    '/guides/ip-subnet-calculator-guide',
    '/guides/percentage-calculator-guide',
    '/guides/bmi-calculator-guide',
    '/guides/finance-calculator-guide',
    '/guides/ai-meme-generator-guide',
    '/guides/interest-rate-calculator-guide',
    '/guides/pregnancy-calculator-guide',
    '/guides/age-in-hours-calculator-guide',
    '/guides/color-palette-generator-guide',
    '/guides/hex-to-rgb-converter-guide',
    '/guides/body-fat-calculator-guide',
    '/guides/calorie-calculator-guide',
    '/guides/ai-caption-generator-guide',
    '/guides/concrete-calculator-guide',
    '/guides/youtube-thumbnail-downloader-guide',
    '/guides/date-to-day-finder-guide',
    '/guides/conversion-calculator-guide',

    // Tool pages that were removed or renamed
    '/tools/body-fat-calculator',
    '/tools/mortgage-calculator',
    '/tools/bmr-calculator',
    '/tools/interest-rate-calculator',
    '/tools/scientific-calculator',

    // AI Tools that were removed
    '/ai-tools/meme-generator',
    '/ai-tools/hashtag-suggester',
    '/tools/calorie-calculator',
    '/tools/gpa-calculator',
    '/tools/sales-tax-calculator',
    '/tools/investment-calculator',
    '/tools/payment-calculator',
    '/tools/conversion-calculator',
    '/tools/standard-deviation-calculator',
    '/tools/finance-calculator',
    '/tools/triangle-calculator',

    // Other removed pages
    '/resources',
    '/announcements',

    // Image tools removed
    '/image-tools/photo-editor',
    '/social-media-tools/youtube-downloader',
    '/seo-tools/hashtags'
])

function isGoneUrl(pathname: string): boolean {
    return goneUrls.has(pathname)
}

function isAllowedOrigin(origin: string | null): boolean {
    if (!origin) return false

    try {
        const hostname = new URL(origin).hostname.toLowerCase()

        if (env.isDevelopment) {
            return hostname === 'localhost' ||
                hostname === '127.0.0.1' ||
                hostname.startsWith('localhost:') ||
                hostname.startsWith('127.0.0.1:')
        }

        if (env.isProduction) {
            return hostname === 'fasttools.store' ||
                hostname === 'www.fasttools.store' ||
                hostname.endsWith('.fasttools.store')
        }

        return false
    } catch {
        return false
    }
}

function handleCORS(request: NextRequest): NextResponse | null {
    const origin = request.headers.get('origin')
    const allowedOrigin = isAllowedOrigin(origin) ? origin : null

    if (request.method === 'OPTIONS') {
        if (!allowedOrigin) {
            return new NextResponse(null, { status: 403 })
        }
        return new NextResponse(null, {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': allowedOrigin,
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-API-Key',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Max-Age': '86400',
            },
        })
    }

    const response = NextResponse.next()
    if (allowedOrigin) {
        response.headers.set('Access-Control-Allow-Origin', allowedOrigin)
        response.headers.set('Access-Control-Allow-Credentials', 'true')
    }
    return response
}



export default function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    if (isGoneUrl(pathname)) {
        const url = request.nextUrl.clone()
        url.pathname = '/404'
        const response = NextResponse.rewrite(url, { status: 410 })
        response.headers.set('x-gone', 'true')
        return response
    }

    if (redirects.has(pathname)) {
        const targetUrl = redirects.get(pathname)!
        const url = new URL(targetUrl, request.url)
        return NextResponse.redirect(url, 301)
    }



    if (pathname.startsWith('/api/')) {
        const corsResponse = handleCORS(request)
        if (corsResponse) return corsResponse
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
