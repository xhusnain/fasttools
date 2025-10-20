import { NextRequest, NextResponse } from 'next/server'

const FRANKFURTER_API_BASE = 'https://api.frankfurter.dev/v1'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const startDate = searchParams.get('start_date')
    const endDate = searchParams.get('end_date')
    const base = searchParams.get('base') || 'EUR'
    const symbols = searchParams.get('symbols')
    
    // Validate date parameters
    if (!startDate || !endDate) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required parameters',
          message: 'start_date and end_date parameters are required'
        },
        { status: 400 }
      )
    }
    
    // Validate date format (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/
    if (!dateRegex.test(startDate) || !dateRegex.test(endDate)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid date format',
          message: 'Dates must be in YYYY-MM-DD format'
        },
        { status: 400 }
      )
    }
    
    // Check if start date is not after end date
    const start = new Date(startDate)
    const end = new Date(endDate)
    if (start > end) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid date range',
          message: 'start_date cannot be after end_date'
        },
        { status: 400 }
      )
    }
    
    // Check if end date is not in the future
    const today = new Date()
    if (end > today) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid date range',
          message: 'end_date cannot be in the future'
        },
        { status: 400 }
      )
    }
    
    // Check if date range is not too large (max 1 year)
    const diffTime = Math.abs(end.getTime() - start.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    if (diffDays > 365) {
      return NextResponse.json(
        {
          success: false,
          error: 'Date range too large',
          message: 'Date range cannot exceed 365 days'
        },
        { status: 400 }
      )
    }
    
    // Build the API URL
    let apiUrl = `${FRANKFURTER_API_BASE}/${startDate}..${endDate}?base=${base}`
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
            message: `No exchange rate data available for the specified date range`
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
        startDate: data.start_date,
        endDate: data.end_date,
        rates: data.rates
      },
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('Error fetching time series rates:', error)
    return NextResponse.json({ success: false, error: 'Service Unavailable', message: 'Server error. Please wait a minute and try again.' }, { status: 503 })
  }
}
