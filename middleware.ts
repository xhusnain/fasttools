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

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}