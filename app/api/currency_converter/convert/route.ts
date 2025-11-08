import { NextRequest, NextResponse } from 'next/server'
import { validateApiKey, createUnauthorizedResponse, createUpstreamFailureResponse } from '@/lib/api-middleware'

const FRANKFURTER_API_BASE = 'https://api.frankfurter.dev/v1'

export async function POST(request: NextRequest) {
  try {

    const keyValidation = validateApiKey(request)
    if (!keyValidation.isValid) {
      return createUnauthorizedResponse(keyValidation.error || 'Invalid API key')
    }

    const body = await request.json()
    const { from, to, amount } = body

    if (!from || !to || !amount) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required parameters',
          message: 'from, to, and amount are required'
        },
        { status: 400 }
      )
    }

    if (isNaN(Number(amount)) || Number(amount) <= 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid amount',
          message: 'Amount must be a positive number'
        },
        { status: 400 }
      )
    }

    if (from === to) {
      return NextResponse.json({
        success: true,
        data: {
          from,
          to,
          amount: Number(amount),
          convertedAmount: Number(amount),
          rate: 1,
          date: new Date().toISOString().split('T')[0]
        },
        timestamp: new Date().toISOString()
      })
    }

    const response = await fetch(`${FRANKFURTER_API_BASE}/latest?base=${from}&symbols=${to}`)
    if (!response.ok) {
      return createUpstreamFailureResponse()
    }
    const data = await response.json().catch(() => null)
    if (!data) {
      return createUpstreamFailureResponse()
    }
    const rate = data.rates[to]

    if (!rate) {
      return NextResponse.json(
        {
          success: false,
          error: 'Currency not supported',
          message: `Currency ${to} is not supported by the API`
        },
        { status: 400 }
      )
    }

    const convertedAmount = Number(amount) * rate

    return NextResponse.json({
      success: true,
      data: {
        from,
        to,
        amount: Number(amount),
        convertedAmount: Number(convertedAmount.toFixed(2)),
        rate: Number(rate.toFixed(6)),
        date: data.date
      },
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error converting currency:', error)

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to convert currency',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {

    const keyValidation = validateApiKey(request)
    if (!keyValidation.isValid) {
      return createUnauthorizedResponse(keyValidation.error || 'Invalid API key')
    }

    const { searchParams } = new URL(request.url)
    const from = searchParams.get('from')
    const to = searchParams.get('to')
    const amount = searchParams.get('amount')

    if (!from || !to || !amount) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required parameters',
          message: 'from, to, and amount query parameters are required'
        },
        { status: 400 }
      )
    }

    if (isNaN(Number(amount)) || Number(amount) <= 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid amount',
          message: 'Amount must be a positive number'
        },
        { status: 400 }
      )
    }

    if (from === to) {
      return NextResponse.json({
        success: true,
        data: {
          from,
          to,
          amount: Number(amount),
          convertedAmount: Number(amount),
          rate: 1,
          date: new Date().toISOString().split('T')[0]
        },
        timestamp: new Date().toISOString()
      })
    }

    const response = await fetch(`${FRANKFURTER_API_BASE}/latest?base=${from}&symbols=${to}`)
    if (!response.ok) {
      return createUpstreamFailureResponse()
    }
    const data = await response.json().catch(() => null)
    if (!data) {
      return createUpstreamFailureResponse()
    }
    const rate = data.rates[to]

    if (!rate) {
      return NextResponse.json(
        {
          success: false,
          error: 'Currency not supported',
          message: `Currency ${to} is not supported by the API`
        },
        { status: 400 }
      )
    }

    const convertedAmount = Number(amount) * rate

    return NextResponse.json({
      success: true,
      data: {
        from,
        to,
        amount: Number(amount),
        convertedAmount: Number(convertedAmount.toFixed(2)),
        rate: Number(rate.toFixed(6)),
        date: data.date
      },
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error converting currency:', error)
    return createUpstreamFailureResponse()
  }
}