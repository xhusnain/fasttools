import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''

  // ✅ Skip middleware when running locally
  if (hostname.includes('localhost') || hostname.includes('127.0.0.1')) {
    return NextResponse.next()
  }

  // ✅ Combine HTTPS + WWW redirect in one step
  if (!hostname.startsWith('www.') || url.protocol === 'http:') {
    url.protocol = 'https:'
    url.hostname = 'www.fasttools.store'
    return NextResponse.redirect(url, 301) // 301 is reliable for bots & SEO
  }

  // ✅ Add cache headers for better performance
  const response = NextResponse.next()
  
  // Cache headers for static assets
  if (url.pathname.startsWith('/_next/static/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  } else if (url.pathname.match(/\.(ico|png|jpg|jpeg|gif|svg|webp|woff|woff2|ttf|eot)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  } else if (url.pathname.match(/\.(css|js)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  } else if (url.pathname === '/manifest.json' || url.pathname === '/robots.txt' || url.pathname === '/sitemap.xml') {
    response.headers.set('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800')
  } else if (url.pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'public, max-age=300, stale-while-revalidate=60')
  } else {
    // Default cache for HTML pages
    response.headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400')
  }

  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  // Content Security Policy moved to HTTP header (meta tags are ignored by modern browsers for CSP)
  response.headers.set('Content-Security-Policy', [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://analytics.google.com https://vercel.live https://*.clarity.ms",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://analytics.google.com https://vercel.live https://*.clarity.ms",
    "frame-ancestors 'none'",
    "object-src 'none'",
    'base-uri \"self\"'
  ].join('; '))
  
  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}