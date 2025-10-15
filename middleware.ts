import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const host = request.headers.get('host') || ''
  const protocol = request.headers.get('x-forwarded-proto') || 'http'
  
  // Handle www to non-www redirect (priority 1 - most important)
  if (host.startsWith('www.')) {
    const newUrl = new URL(request.url)
    newUrl.hostname = newUrl.hostname.replace('www.', '')
    newUrl.protocol = 'https:'
    return NextResponse.redirect(newUrl, 301)
  }
  
  // Handle HTTP to HTTPS redirect (priority 2)
  if (protocol !== 'https') {
    const newUrl = new URL(request.url)
    newUrl.protocol = 'https:'
    return NextResponse.redirect(newUrl, 301)
  }
  
  // Handle trailing slash redirects (priority 3)
  // Redirect URLs with trailing slashes to URLs without trailing slashes
  // Exception: root path and paths that should have trailing slashes
  if (pathname !== '/' && pathname.endsWith('/')) {
    const newUrl = new URL(pathname.slice(0, -1), request.url)
    return NextResponse.redirect(newUrl, 301)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt
     * - sitemap.xml
     * - manifest.json
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json).*)',
  ],
}
