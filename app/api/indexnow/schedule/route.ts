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
 * The endpoint is protected with a hardcoded secret token
 */
export async function POST(request: NextRequest) {
  try {
    // Authentication: Check for secret token in headers
    const authHeader = request.headers.get('authorization')
    const expectedToken = 'cf40da0a93bd49748db36add6b8d12bc'
    
    if (authHeader !== `Bearer ${expectedToken}`) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    // Log the time for monitoring
    const now = new Date()
    const hour = now.getHours()
    const minute = now.getMinutes()
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
      authentication: 'Required: Use Bearer token in Authorization header',
      cronExample: '0 0 * * * curl -X POST https://www.fasttools.store/api/indexnow/schedule -H "Authorization: Bearer cf40da0a93bd49748db36add6b8d12bc"',
    },
  })
}

