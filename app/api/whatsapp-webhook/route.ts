import { NextRequest, NextResponse } from 'next/server'
import { whatsappNotification } from '../../../lib/whatsapp-notification'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { phone, text } = body

    // Validate required fields
    if (!phone || !text) {
      return NextResponse.json({
        success: false,
        message: 'Phone number and text are required'
      }, { status: 400 })
    }

    // Format phone number (remove any non-digits and add country code if needed)
    let formattedPhone = phone.replace(/\D/g, '')
    
    // Add country code if not present (assuming Pakistan +92)
    if (!formattedPhone.startsWith('92') && !formattedPhone.startsWith('+92')) {
      if (formattedPhone.startsWith('0')) {
        formattedPhone = '92' + formattedPhone.substring(1)
      } else {
        formattedPhone = '92' + formattedPhone
      }
    }

    // Send via WhatsApp Business API
    const result = await whatsappNotification.sendNotification({
      phoneNumber: formattedPhone,
      message: text
    })

    if (result.success) {
      console.log('WhatsApp webhook success:', result)
      
      return NextResponse.json({
        success: true,
        message: 'WhatsApp notification sent successfully',
        phone: formattedPhone,
        messageId: result.messageId
      })
    } else {
      console.error('WhatsApp webhook error:', result.error)
      
      return NextResponse.json({
        success: false,
        message: 'Failed to send WhatsApp notification',
        error: result.error
      }, { status: 400 })
    }

  } catch (error) {
    console.error('WhatsApp webhook error:', error)
    return NextResponse.json({
      success: false,
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'WhatsApp Webhook API is ready',
    endpoints: {
      'POST /api/whatsapp-webhook': 'Send WhatsApp notification via Business API',
      'GET /api/whatsapp-webhook': 'Check API status'
    },
    requiredFields: ['phone', 'text'],
    apiType: 'WhatsApp Business API (Official)',
    timestamp: new Date().toISOString()
  })
}
