import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const hostname = request.headers.get('host') || ''
  const protocol = request.headers.get('x-forwarded-proto') || 'http'

  if (hostname.includes('localhost') || hostname.includes('127.0.0.1')) {
    return NextResponse.next()
  }

  if (protocol === 'http' || !hostname.startsWith('www.')) {
    const redirectURL = new URL(url)
    redirectURL.protocol = 'https:'
    redirectURL.hostname = 'www.fasttools.store'
    return NextResponse.redirect(redirectURL, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
