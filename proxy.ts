import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { redirects } from './lib/redirects'
import { env } from '@/config'
import { isGoneUrl } from './lib/gone'
import createIntlMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

const intlMiddleware = createIntlMiddleware(routing)

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
    const host = request.headers.get('host')
    const pathname = request.nextUrl.pathname
    const corsResponse = handleCORS(request)
    
    if (request.method === 'OPTIONS' && corsResponse) {
        return corsResponse
    }
    
    if (env.isProduction) {
        const proto = request.headers.get('x-forwarded-proto')
        const isHttp = proto === 'http'
        const isNonWww = host === 'fasttools.store'

        if (isHttp || isNonWww) {
            return NextResponse.redirect(`https://www.fasttools.store${pathname}`, 301)
        }
    }
    
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
    
    const intlResponse = intlMiddleware(request)
    if (intlResponse) {
        if (corsResponse) {
            intlResponse.headers.set('Access-Control-Allow-Origin', corsResponse.headers.get('Access-Control-Allow-Origin') || '')
            intlResponse.headers.set('Access-Control-Allow-Credentials', corsResponse.headers.get('Access-Control-Allow-Credentials') || '')
        }
        return intlResponse
    }
    
    return corsResponse || NextResponse.next()
}

export const config = {
    matcher: [
        '/((?!api|_next|_vercel|.*\\..*).*)',
        '/',
        '/(de|es|en|pt-BR|ar|zh-CN)/:path*'
    ],
}
