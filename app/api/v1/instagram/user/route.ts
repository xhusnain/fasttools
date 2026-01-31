import { NextRequest, NextResponse } from 'next/server'
import { generateToken } from '@/lib/m2m-auth'

export const runtime = 'nodejs'
export const maxDuration = 30

const URL_PATTERNS = [
  /instagram\.com\/([a-zA-Z0-9._]+)/,
  /instagram\.com\/p\/([a-zA-Z0-9._]+)/,
  /^https?:\/\/(www\.)?instagram\.com\/([a-zA-Z0-9._]+)/,
]

function extractUsername(input: string): string | null {
  let username = input.trim()

  if (username.includes('instagram.com')) {
    for (const pattern of URL_PATTERNS) {
      const match = username.match(pattern)
      if (match) {
        username = (match[1] || match[2] || match[0]).split('?')[0].split('/').pop() || username
        break
      }
    }
  }

  username = username.replace('@', '').toLowerCase()
  return username || null
}

export async function GET(request: NextRequest) {
  try {
    const url = request.nextUrl.searchParams.get('url')

    if (!url) {
      return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 })
    }

    const username = extractUsername(url)
    if (!username) {
      return NextResponse.json({ error: 'Invalid username or URL' }, { status: 400 })
    }

    const token = await generateToken()
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'
    const apiUrl = `${backendUrl}/api/v1/instagram/user?url=${encodeURIComponent(username)}`

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      signal: AbortSignal.timeout(25000),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Failed to fetch profile info' }))
      return NextResponse.json(
        { error: errorData.error || 'Failed to fetch profile info' },
        { status: response.status }
      )
    }

    const data = await response.json()
    const responseData = (!data.platform || !data.data)
      ? { platform: 'Instagram', data }
      : data

    return NextResponse.json(responseData, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    })
  } catch (error: any) {
    console.error('Instagram Profile API Error:', error)

    if (error.name === 'AbortError' || error.name === 'TimeoutError') {
      return NextResponse.json({ error: 'Request timeout. Please try again.' }, { status: 408 })
    }

    return NextResponse.json({ error: 'Failed to fetch profile info' }, { status: 500 })
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
