import { NextRequest, NextResponse } from 'next/server'

const NASA_API_KEY = process.env.NASA_API_KEY || 'DEMO_KEY'
const NASA_APOD_URL = 'https://api.nasa.gov/planetary/apod'

export async function GET(request: NextRequest) {
  try {
    // Get random count for variety (NASA API supports this)
    const randomCount = Math.floor(Math.random() * 10) + 1
    
    // Fetch random APOD image
    const response = await fetch(`${NASA_APOD_URL}?api_key=${NASA_API_KEY}&count=1`, {
      cache: 'no-store' // Don't cache to get fresh images
    })

    if (!response.ok) {
      console.error(`NASA API response not OK: ${response.status}`)
      throw new Error(`Failed to fetch NASA image: ${response.status}`)
    }

    const data = await response.json()
    console.log('NASA API data:', JSON.stringify(data).substring(0, 200))
    
    // Get the first image from the array (or the single object if count=1)
    const image = Array.isArray(data) ? data[0] : data

    // Only return image data, not video data
    if (image.media_type !== 'image') {
      console.log('Media type is not image, fetching again')
      // Fetch again to get an image
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
    
    // Return a default space image if API fails
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
