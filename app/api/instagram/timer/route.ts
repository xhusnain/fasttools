import { NextRequest, NextResponse } from 'next/server'
import { 
  getRandomUserAgent,
  getCachedData,
  setCachedData,
  startTimer,
  checkTimer,
  endTimer,
  getTimerStatus
} from '@/lib/instagram-security'

// Validate username
const validateUsername = (username: string): boolean => {
  const usernameRegex = /^[a-zA-Z0-9._]{1,30}$/
  return usernameRegex.test(username) && username.length >= 1 && username.length <= 30
}

// Start timer endpoint
export async function POST(request: NextRequest) {
  try {
    const { username } = await request.json()
    
    if (!username) {
      return NextResponse.json(
        { error: 'Username is required' },
        { status: 400 }
      )
    }

    if (!validateUsername(username)) {
      return NextResponse.json(
        { error: 'Invalid username format' },
        { status: 400 }
      )
    }

    const requestId = `instagram_${username}_${Date.now()}`
    const timerResult = startTimer(requestId)

    if (!timerResult.success) {
      return NextResponse.json({
        success: false,
        error: timerResult.message,
        remainingTime: timerResult.remainingTime,
        requestId: null
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Timer started successfully',
      requestId: requestId,
      duration: 30,
      remainingTime: timerResult.remainingTime
    })

  } catch (error) {
    console.error('Timer start error:', error)
    return NextResponse.json(
      { error: 'Failed to start timer' },
      { status: 500 }
    )
  }
}

// Check timer status endpoint
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const requestId = searchParams.get('requestId')

    if (!requestId) {
      return NextResponse.json(
        { error: 'Request ID is required' },
        { status: 400 }
      )
    }

    const timerStatus = getTimerStatus(requestId)

    return NextResponse.json({
      success: true,
      isActive: timerStatus.isActive,
      remainingTime: timerStatus.remainingTime,
      progress: timerStatus.progress,
      canProceed: !timerStatus.isActive
    })

  } catch (error) {
    console.error('Timer check error:', error)
    return NextResponse.json(
      { error: 'Failed to check timer status' },
      { status: 500 }
    )
  }
}

// End timer endpoint
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const requestId = searchParams.get('requestId')

    if (!requestId) {
      return NextResponse.json(
        { error: 'Request ID is required' },
        { status: 400 }
      )
    }

    endTimer(requestId)

    return NextResponse.json({
      success: true,
      message: 'Timer ended successfully'
    })

  } catch (error) {
    console.error('Timer end error:', error)
    return NextResponse.json(
      { error: 'Failed to end timer' },
      { status: 500 }
    )
  }
}
