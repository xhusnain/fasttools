import { NextRequest, NextResponse } from 'next/server'
import { isValidApiKey } from '@/lib/api-keys'

export function validateApiKey(request: NextRequest): { isValid: boolean; keyId?: string; error?: string } {
  const apiKey = request.headers.get('x-api-key') || request.nextUrl.searchParams.get('api_key')

  if (!apiKey) {
    return { isValid: true }
  }

  if (isValidApiKey(apiKey)) {
    return { isValid: true, keyId: apiKey }
  }

  return { isValid: false, error: 'Invalid API key' }
}

export function createUnauthorizedResponse(error: string): NextResponse {
  return NextResponse.json(
    {
      success: false,
      error: 'Unauthorized',
      message: error
    },
    { status: 401 }
  )
}

export function createUpstreamFailureResponse(): NextResponse {
  return NextResponse.json(
    {
      success: false,
      error: 'Service Unavailable',
      message: 'FastTools is temporarily unavailable. Please wait a minute and try again.'
    },
    { status: 503 }
  )
}
