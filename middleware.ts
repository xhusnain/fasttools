import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isGoneUrl } from './lib/gone'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const protocol = request.headers.get('x-forwarded-proto') || 'https'
  const pathname = request.nextUrl.pathname

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
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
