import { NextRequest, NextResponse } from 'next/server'
import { submitSitemapsToIndexNow } from '@/lib/indexnow'

/**
 * IndexNow API Route
 * 
 * POST /api/indexnow - Submit sitemap URLs to IndexNow
 * 
 * This endpoint can be called:
 * - After build (via postbuild script)
 * - Scheduled at midnight (via external cron service or internal scheduler)
 * - Manually via API call
 */
export async function POST(request: NextRequest) {
  try {
    // Optional: Add authentication/authorization here
    // For example, check for a secret token in headers
    const authHeader = request.headers.get('authorization')
    const expectedToken = process.env.INDEXNOW_SECRET_TOKEN
    
    if (expectedToken && authHeader !== `Bearer ${expectedToken}`) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    console.log('🚀 IndexNow API route called')
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
    console.error('❌ Error in IndexNow API route:', error)
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

/**
 * GET /api/indexnow - Health check endpoint
 */
export async function GET() {
  return NextResponse.json({
    message: 'IndexNow API is active',
    endpoints: {
      submit: 'POST /api/indexnow - Submit sitemap URLs to IndexNow',
    },
  })
}

