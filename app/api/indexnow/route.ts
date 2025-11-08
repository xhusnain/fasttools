import { NextRequest, NextResponse } from 'next/server'
import { submitSitemapsToIndexNow } from '@/lib/indexnow'

export async function POST(request: NextRequest) {
  try {
    const result = await submitSitemapsToIndexNow()
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        message: result.message || 'URLs submitted successfully',
        submittedUrls: result.submittedUrls,
      })
    } else {
      return NextResponse.json(
        {
          success: false,
          message: result.message || 'Failed to submit URLs',
          submittedUrls: result.submittedUrls || 0,
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error in IndexNow API route:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    
    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'IndexNow API is active',
    endpoints: {
      submit: 'POST /api/indexnow - Submit sitemap URLs to IndexNow',
    },
  })
}
