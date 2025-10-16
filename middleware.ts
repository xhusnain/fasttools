import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''

  // ✅ Skip middleware when running locally
  if (hostname.includes('localhost') || hostname.includes('127.0.0.1')) {
    return NextResponse.next()
  }

  // Force www subdomain for fasttools domains
  if (hostname === 'fasttools.store' || hostname === 'fasttools.com' || hostname === 'fasttools.tech') {
    url.hostname = 'www.fasttools.store'
    return NextResponse.redirect(url, 308)
  }

  // Force HTTPS
  if (url.protocol === 'http:') {
    url.protocol = 'https:'
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
