import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const protocol = request.headers.get('x-forwarded-proto') || 'https'

  // Skip redirects for localhost, 127.0.0.1, and Vercel preview URLs
  if (
      hostname.includes('localhost') ||
      hostname.includes('127.0.0.1') ||
      hostname.endsWith('.vercel.app')
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
