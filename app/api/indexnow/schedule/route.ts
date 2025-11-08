import { NextRequest, NextResponse } from 'next/server'
import { submitSitemapsToIndexNow } from '@/lib/indexnow'

/**
 * IndexNow Scheduled Submission Route
 * 
 * POST /api/indexnow/schedule - Submit sitemap URLs to IndexNow (for scheduled runs)
 * 
 * This endpoint is designed to be called by:
 * - External cron services (e.g., cron-job.org, EasyCron)
 * - Internal schedulers
 * - Vercel Cron (if using Vercel)
 * 
 * The endpoint can be protected with a secret token in the environment variable INDEXNOW_SECRET_TOKEN
 */
export async function POST(request: NextRequest) {
  try {
    // Optional: Add authentication/authorization here
    const authHeader = request.headers.get('authorization')
    const expectedToken = process.env.INDEXNOW_SECRET_TOKEN
    
    if (expectedToken && authHeader !== `Bearer ${expectedToken}`) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    // Optional: Verify it's being called at the right time (midnight check)
    // This is optional since external cron services handle timing
    const now = new Date()
    const hour = now.getHours()
    const minute = now.getMinutes()
    
    // Log the time for monitoring
    console.log(`⏰ IndexNow scheduled submission triggered at ${now.toISOString()}`)
    console.log(`📍 Local time: ${hour}:${minute}`)
    
    // Submit to IndexNow
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
    console.error('❌ Error in IndexNow scheduled submission:', error)
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

/**
 * GET /api/indexnow/schedule - Health check and info endpoint
 */
export async function GET() {
  return NextResponse.json({
    message: 'IndexNow Scheduled Submission API is active',
    endpoint: 'POST /api/indexnow/schedule - Submit sitemap URLs to IndexNow',
    usage: {
      description: 'This endpoint should be called daily at midnight (00:00)',
      authentication: 'Optional: Set INDEXNOW_SECRET_TOKEN environment variable and use Bearer token',
      cronExample: '0 0 * * * curl -X POST https://www.fasttools.store/api/indexnow/schedule -H "Authorization: Bearer YOUR_SECRET_TOKEN"',
    },
  })
}

