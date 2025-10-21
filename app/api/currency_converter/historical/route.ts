import { NextRequest, NextResponse } from 'next/server'

const FRANKFURTER_API_BASE = 'https://api.frankfurter.dev/v1'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date')
    const base = searchParams.get('base') || 'EUR'
    const symbols = searchParams.get('symbols')
    
    // Validate date parameter
    if (!date) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required parameter',
          message: 'date parameter is required'
        },
        { status: 400 }
      )
    }
    
    // Validate date format (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/
    if (!dateRegex.test(date)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid date format',
          message: 'Date must be in YYYY-MM-DD format'
        },
        { status: 400 }
      )
    }
    
    // Check if date is not in the future
    const requestedDate = new Date(date)
    const today = new Date()
    if (requestedDate > today) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid date',
          message: 'Date cannot be in the future'
        },
        { status: 400 }
      )
    }
    
    // Build the API URL
    let apiUrl = `${FRANKFURTER_API_BASE}/${date}?base=${base}`
    if (symbols) {
      apiUrl += `&symbols=${symbols}`
    }
    
    const response = await fetch(apiUrl)
    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          {
            success: false,
            error: 'No data available',
            message: `No exchange rate data available for ${date}`
          },
          { status: 404 }
        )
      }
      return NextResponse.json({ success: false, error: 'Service Unavailable', message: 'Server error. Please wait a minute and try again.' }, { status: 503 })
    }
    const data = await response.json().catch(() => null)
    if (!data) {
      return NextResponse.json({ success: false, error: 'Service Unavailable', message: 'Server error. Please wait a minute and try again.' }, { status: 503 })
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
    console.error('Error fetching historical rates:', error)
    return NextResponse.json({ success: false, error: 'Service Unavailable', message: 'Server error. Please wait a minute and try again.' }, { status: 503 })
  }
}
