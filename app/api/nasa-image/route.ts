import { NextRequest, NextResponse } from 'next/server'

const NASA_API_KEY = process.env.NASA_API_KEY
const NASA_APOD_URL = 'https://api.nasa.gov/planetary/apod'

// @ts-ignore
export async function GET(request: NextRequest) {
  try {

    const response = await fetch(`${NASA_APOD_URL}?api_key=${NASA_API_KEY}&count=1`, {
      cache: 'no-store'
    })

    if (!response.ok) {
      console.error(`NASA API response not OK: ${response.status}`)
      throw new Error(`Failed to fetch NASA image: ${response.status}`)
    }

    const data = await response.json()
    console.log('NASA API data:', JSON.stringify(data).substring(0, 200))
    
    const image = Array.isArray(data) ? data[0] : data

    if (image.media_type !== 'image') {
      console.log('Media type is not image, fetching again')
      return await GET(request)
    }

    return NextResponse.json({
      success: true,
      image: {
        url: image.url,
        title: image.title,
        explanation: image.explanation,
        date: image.date
      }
    })
  } catch (error) {
    console.error('NASA API Error:', error)
    
    return NextResponse.json({
      success: false,
      image: {
        url: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1920',
        title: 'Beautiful Space',
        explanation: 'A stunning view of space',
        date: new Date().toISOString().split('T')[0]
      }
    })
  }
}
