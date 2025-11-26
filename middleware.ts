import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isGoneUrl } from './lib/gone'
import { redirects } from './lib/redirects'
import { env } from './lib/env'

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

function handleRedirects(request: NextRequest): NextResponse | null {
    if (!env.isProduction) return null

    const host = request.headers.get('host')?.toLowerCase() || ''
    const protocol = request.headers.get('x-forwarded-proto') ||
        (request.url.startsWith('http://') ? 'http' : 'https')

    const TARGET_HOST = 'www.fasttools.store'

    const isNakedDomain = host === 'fasttools.store'
    const isHttp = protocol === 'http'
    const isCorrectDomain = host === TARGET_HOST

    if (isNakedDomain || (isCorrectDomain && isHttp)) {
        const url = new URL(request.nextUrl.pathname + request.nextUrl.search, `https://${TARGET_HOST}`)
        return NextResponse.redirect(url, 301)
    }

    return null
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    if (isGoneUrl(pathname)) {
        return new NextResponse(null, {
            status: 410,
            statusText: 'Gone',
            headers: { 'Content-Type': 'text/html' }
        })
    }

    // Check for 301 redirects
    if (redirects.has(pathname)) {
        const targetUrl = redirects.get(pathname)!
        const url = new URL(targetUrl, request.url)
        return NextResponse.redirect(url, 301)
    }

    const redirectResponse = handleRedirects(request)
    if (redirectResponse) return redirectResponse

    if (pathname.startsWith('/api/')) {
        const corsResponse = handleCORS(request)
        if (corsResponse) return corsResponse
    }

    return NextResponse.next()
}

export const config = {
    // Updated matcher to exclude all common image formats and icons
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}