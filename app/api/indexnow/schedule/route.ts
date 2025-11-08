import { NextRequest, NextResponse } from 'next/server'
import { submitSitemapsToIndexNow } from '@/lib/indexnow'

export async function POST(request: NextRequest) {
  try {
    const now = new Date()
    const result = await submitSitemapsToIndexNow()
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        message: result.message || 'URLs submitted successfully',
        submittedUrls: result.submittedUrls,
        timestamp: now.toISOString(),
      })
    } else {
      return NextResponse.json(
        {
          success: false,
          message: result.message || 'Failed to submit URLs',
          submittedUrls: result.submittedUrls || 0,
          timestamp: now.toISOString(),
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error in IndexNow scheduled submission:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    
    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'IndexNow Scheduled Submission API is active',
    endpoint: 'POST /api/indexnow/schedule - Submit sitemap URLs to IndexNow',
    usage: {
      description: 'This endpoint should be called daily at midnight (00:00)',
      cronExample: '0 0 * * * curl -X POST https://www.fasttools.store/api/indexnow/schedule',
    },
  })
}
