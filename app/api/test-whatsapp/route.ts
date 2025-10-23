import { NextRequest, NextResponse } from 'next/server'
import { whatsappNotification } from '../../../lib/whatsapp-notification'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { phoneNumber, message } = body

    if (!phoneNumber) {
      return NextResponse.json({
        success: false,
        message: 'Phone number is required'
      }, { status: 400 })
    }

    const testMessage = message || whatsappNotification.formatIndexNowSuccessMessage({
      submittedUrls: 150,
      timestamp: new Date().toISOString(),
      triggeredBy: 'test'
    })

    const result = await whatsappNotification.sendNotification({
      phoneNumber: phoneNumber,
      message: testMessage
    })

    return NextResponse.json({
      success: result.success,
      message: 'WhatsApp test completed',
      result: result,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error testing WhatsApp notification',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'WhatsApp Test API is ready',
    usage: 'POST with { "phoneNumber": "your_phone_number", "message": "optional_message" }',
    example: {
      phoneNumber: '923001234567',
      message: 'Test message from FastTools IndexNow!'
    },
    timestamp: new Date().toISOString()
  })
}
