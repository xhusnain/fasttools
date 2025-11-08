import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Simple test endpoint to verify API is working
    return NextResponse.json({
      success: true,
      message: 'Instagram API endpoint is working',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Test endpoint error:', error)
    return NextResponse.json(
      { error: 'Test endpoint failed' },
      { status: 500 }
    )
  }
}
