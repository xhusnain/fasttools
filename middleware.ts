import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isGoneUrl } from './lib/gone'
import { env } from './lib/env'

/**
 * Determines if an origin is allowed based on the environment
 * - Development: allows localhost and 127.0.0.1
 * - Production: allows fasttools.store domain only
 */
function getAllowedOrigin(request: NextRequest): string | null {
  const origin = request.headers.get('origin')
  
  if (!origin) {
    return null
  }

  try {
    const originUrl = new URL(origin)
    const originHost = originUrl.hostname.toLowerCase()

    // Development mode: allow localhost
    if (env.isDevelopment) {
      if (
        originHost === 'localhost' ||
        originHost === '127.0.0.1' ||
        originHost.startsWith('localhost:') ||
        originHost.startsWith('127.0.0.1:')
      ) {
        return origin
      }
    }

    // Production mode: allow fasttools.store domain
    if (env.isProduction) {
      if (
        originHost === 'fasttools.store' ||
        originHost === 'www.fasttools.store' ||
        originHost.endsWith('.fasttools.store')
      ) {
        return origin
      }
    }

    // Origin not allowed
    return null
  } catch {
    // Invalid origin URL
    return null
  }
}

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const protocol = request.headers.get('x-forwarded-proto') || 'https'
  const pathname = request.nextUrl.pathname

  // Handle CORS for API routes
  if (pathname.startsWith('/api/')) {
    const allowedOrigin = getAllowedOrigin(request)
    
    // Handle preflight OPTIONS requests
    if (request.method === 'OPTIONS') {
      if (!allowedOrigin) {
        // Reject preflight request if origin is not allowed
        return new NextResponse(null, {
          status: 403,
          statusText: 'Forbidden - Origin not allowed',
        })
      }

      return new NextResponse(null, {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': allowedOrigin,
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-API-Key',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Max-Age': '86400', // 24 hours
        },
      })
    }
    
    // For actual API requests, add CORS headers to the response
    const response = NextResponse.next()
    
    if (allowedOrigin) {
      response.headers.set('Access-Control-Allow-Origin', allowedOrigin)
      response.headers.set('Access-Control-Allow-Credentials', 'true')
    }
    
    return response
  }

  // Check if URL is permanently deleted (410 Gone)
  if (isGoneUrl(pathname)) {
    return new NextResponse(null, {
      status: 410,
      statusText: 'Gone',
      headers: {
        'Content-Type': 'text/html',
      },
    })
  }

  // Skip redirects for localhost and 127.0.0.1
  if (
      hostname.includes('localhost') ||
      hostname.includes('127.0.0.1')
  ) {
    return NextResponse.next()
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
