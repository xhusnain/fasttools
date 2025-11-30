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



export default function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    if (isGoneUrl(pathname)) {
        return new NextResponse(
            `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Service Discontinued - FastTools</title>
                <style>
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                        background-color: #09090b;
                        color: #e4e4e7;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        height: 100vh;
                        margin: 0;
                        text-align: center;
                        padding: 20px;
                    }
                    .container {
                        max-width: 600px;
                        background: #18181b;
                        padding: 40px;
                        border-radius: 12px;
                        border: 1px solid #27272a;
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                    }
                    h1 {
                        font-size: 24px;
                        font-weight: 700;
                        margin-bottom: 16px;
                        color: #fff;
                    }
                    p {
                        font-size: 16px;
                        line-height: 1.6;
                        color: #a1a1aa;
                        margin-bottom: 24px;
                    }
                    .btn {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 6px;
                        font-size: 14px;
                        font-weight: 500;
                        height: 40px;
                        padding: 0 16px;
                        background-color: #fafafa;
                        color: #18181b;
                        text-decoration: none;
                        transition: background-color 0.2s;
                    }
                    .btn:hover {
                        background-color: #e4e4e7;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Service Discontinued</h1>
                    <p>The YouTube Video Downloader tool has been permanently removed from FastTools to comply with YouTube's Terms of Service and Google's policies.</p>
                    <p>We remain committed to providing high-quality, compliant tools for content creators. Please explore our other available tools.</p>
                    <a href="/" class="btn">Return Home</a>
                </div>
            </body>
            </html>`,
            {
                status: 410,
                statusText: 'Gone',
                headers: { 'Content-Type': 'text/html' }
            }
        )
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
