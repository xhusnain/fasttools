import { NextRequest, NextResponse } from 'next/server'
import { getRandomApiKey } from '@/lib/api-keys'

export async function GET(request: NextRequest) {
  try {

    const apiKey = getRandomApiKey()

    return NextResponse.json({
      success: true,
      data: {
        apiKey,
        message: 'Your API key has been generated successfully!',
        usage: {
          header: 'X-API-Key: ' + apiKey,
          query: '?api_key=' + apiKey,
          example: 'https://www.fasttools.store/api/currency_converter/latest?api_key=' + apiKey
        },
        instructions: [
          'Use this key in the X-API-Key header or as api_key query parameter',
          'This key is valid for all FastTools Currency API endpoints',
          'Keep your API key secure and do not share it publicly',
          'You can generate a new key anytime by calling this endpoint'
        ]
      },
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error generating API key:', error)

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to generate API key',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email } = body

    const apiKey = getRandomApiKey()

    return NextResponse.json({
      success: true,
      data: {
        apiKey,
        name: name || 'Anonymous',
        email: email || 'Not provided',
        message: 'Your API key has been generated successfully!',
        usage: {
          header: 'X-API-Key: ' + apiKey,
          query: '?api_key=' + apiKey,
          example: 'https://www.fasttools.store/api/currency_converter/latest?api_key=' + apiKey
        },
        instructions: [
          'Use this key in the X-API-Key header or as api_key query parameter',
          'This key is valid for all FastTools Currency API endpoints',
          'Keep your API key secure and do not share it publicly',
          'You can generate a new key anytime by calling this endpoint'
        ]
      },
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error generating API key:', error)

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to generate API key',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}