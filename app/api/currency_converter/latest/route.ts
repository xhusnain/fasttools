import { NextRequest, NextResponse } from 'next/server'
import { validateApiKey, createUnauthorizedResponse, createUpstreamFailureResponse } from '@/lib/api-middleware'

const FRANKFURTER_API_BASE = 'https://api.frankfurter.dev/v1'

export async function GET(request: NextRequest) {
  try {

    const keyValidation = validateApiKey(request)
    if (!keyValidation.isValid) {
      return createUnauthorizedResponse(keyValidation.error || 'Invalid API key')
    }

    const { searchParams } = new URL(request.url)
    const base = searchParams.get('base') || 'EUR'
    const symbols = searchParams.get('symbols')

    let apiUrl = `${FRANKFURTER_API_BASE}/latest?base=${base}`
    if (symbols) {
      apiUrl += `&symbols=${symbols}`
    }

    const response = await fetch(apiUrl)
    if (!response.ok) {
      return createUpstreamFailureResponse()
    }
    const data = await response.json().catch(() => null)
    if (!data) {
      return createUpstreamFailureResponse()
    }

    return NextResponse.json({
      success: true,
      data: {
        base: data.base,
        date: data.date,
        rates: data.rates
      },
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error fetching latest rates:', error)
    return createUpstreamFailureResponse()
  }
}