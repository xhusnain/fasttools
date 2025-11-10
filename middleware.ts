import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isGoneUrl } from './lib/gone'
import { env } from './lib/env'

/**
 * Check if origin is allowed for CORS
 */
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

/**
 * Handle CORS for API routes
 */
function handleCORS(request: NextRequest): NextResponse | null {
  const origin = request.headers.get('origin')
  const allowedOrigin = isAllowedOrigin(origin) ? origin : null

  // Handle preflight OPTIONS requests
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

  // Add CORS headers to API responses
  const response = NextResponse.next()
  if (allowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', allowedOrigin)
    response.headers.set('Access-Control-Allow-Credentials', 'true')
  }
  return response
}

/**
 * Handle URL redirects (HTTP to HTTPS, non-www to www)
 */
function handleRedirects(request: NextRequest): NextResponse | null {
  if (!env.isProduction) return null

  const hostname = request.headers.get('host')?.toLowerCase() || ''
  const protocol = request.headers.get('x-forwarded-proto') || 
                   (request.url.startsWith('http://') ? 'http' : 'https')
  
  // Only process fasttools.store domain
  const normalizedHost = hostname.replace(/^www\./, '')
  if (normalizedHost !== 'fasttools.store') return null

  // Check if redirect is needed
  const needsRedirect = protocol !== 'https' || !hostname.startsWith('www.')
  
  if (needsRedirect) {
    const url = new URL(request.nextUrl.pathname + request.nextUrl.search, 'https://www.fasttools.store')
    return NextResponse.redirect(url.toString(), 301)
  }

  return null
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Handle 410 Gone URLs
  if (isGoneUrl(pathname)) {
    return new NextResponse(null, { 
      status: 410, 
      statusText: 'Gone',
      headers: { 'Content-Type': 'text/html' }
    })
  }

  // Handle API routes CORS
  if (pathname.startsWith('/api/')) {
    const corsResponse = handleCORS(request)
    if (corsResponse) return corsResponse
  }

  // Handle redirects (HTTP to HTTPS, non-www to www)
  const redirectResponse = handleRedirects(request)
  if (redirectResponse) return redirectResponse

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
