import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    // Call our IndexNow API endpoint
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.fasttools.store'
    const response = await fetch(`${baseUrl}/api/microsoft-indexnow`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const result = await response.json()

    return NextResponse.json({
      message: 'IndexNow test completed',
      result: result,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error testing IndexNow API',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
