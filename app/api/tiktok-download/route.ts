import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json(
        { success: false, message: 'URL is required' },
        { status: 400 }
      )
    }

    // Validate TikTok URL
    const tiktokPattern = /^(https?:\/\/)?(www\.)?(m\.)?(vm\.|vt\.)?tiktok\.com\/.+/i
    if (!tiktokPattern.test(url)) {
      return NextResponse.json(
        { success: false, message: 'Invalid TikTok URL' },
        { status: 400 }
      )
    }

    // Try multiple APIs in parallel for better performance
    const apis = [
      {
        name: 'tikwm',
        url: `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`,
        parser: (data: any) => {
          if (data && data.code === 0 && data.data) {
            return {
              videoUrl: data.data.play,
              watermarkUrl: data.data.wmplay,
              musicUrl: data.data.music,
              coverUrl: data.data.cover,
              title: data.data.title,
              images: data.data.images || [],
              imageUrl: data.data.image || data.data.cover,
              isImage: data.data.is_image || false,
              type: data.data.type || 'video'
            }
          }
          return null
        }
      },
      {
        name: 'tikdown',
        url: `https://tikdown.org/api/ajaxSearch?url=${encodeURIComponent(url)}`,
        parser: (data: any) => {
          if (data && data.status === 'success' && data.data) {
            return {
              videoUrl: data.data.video_no_watermark || data.data.video_watermark,
              watermarkUrl: data.data.video_watermark,
              musicUrl: data.data.music,
              coverUrl: data.data.cover,
              title: data.data.title,
              images: data.data.images || [],
              imageUrl: data.data.image || data.data.cover,
              isImage: data.data.is_image || false,
              type: data.data.type || 'video'
            }
          }
          return null
        }
      },
      {
        name: 'ssstik',
        url: `https://ssstik.io/abc?url=${encodeURIComponent(url)}`,
        parser: (data: any) => {
          if (data && data.status === 'success' && data.data) {
            return {
              videoUrl: data.data.video_no_watermark || data.data.video_watermark,
              watermarkUrl: data.data.video_watermark,
              musicUrl: data.data.music,
              coverUrl: data.data.cover,
              title: data.data.title,
              images: data.data.images || [],
              imageUrl: data.data.image || data.data.cover,
              isImage: data.data.is_image || false,
              type: data.data.type || 'video'
            }
          }
          return null
        }
      }
    ]

    // Create promises for all APIs to run in parallel
    const apiPromises = apis.map(async (api) => {
      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 8000) // 8 second timeout per API

        const response = await fetch(api.url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Referer': 'https://www.tiktok.com/',
            'Origin': 'https://www.tiktok.com'
          },
          signal: controller.signal
        })

        clearTimeout(timeoutId)

        if (!response.ok) {
          throw new Error(`API ${api.name} failed with status ${response.status}`)
        }

        const data = await response.json()
        const result = api.parser(data)

        if (result && (result.videoUrl || result.watermarkUrl || result.imageUrl)) {
          return { success: true, result, api: api.name }
        }
        
        throw new Error(`API ${api.name} returned no valid data`)
      } catch (error) {
        return { 
          success: false, 
          error: `API ${api.name} error: ${error instanceof Error ? error.message : 'Unknown error'}`,
          api: api.name 
        }
      }
    })

    // Wait for the first successful result or all to fail
    const results = await Promise.allSettled(apiPromises)
    
    // Find the first successful result
    for (const result of results) {
      if (result.status === 'fulfilled' && result.value.success) {
        return NextResponse.json({
          success: true,
          ...result.value.result
        })
      }
    }

    // If all APIs failed, collect error messages
    const errors = results
      .filter(r => r.status === 'fulfilled' && !r.value.success)
      .map(r => r.status === 'fulfilled' ? r.value.error : 'Unknown error')
      .join('; ')

    // If all APIs failed, try a simple fetch approach
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      })

      if (response.ok) {
        const html = await response.text()
        
        // Try to extract video URL from HTML (basic approach)
        const videoMatch = html.match(/"playAddr":"([^"]+)"/)
        const titleMatch = html.match(/"desc":"([^"]+)"/)
        
        if (videoMatch) {
          return NextResponse.json({
            success: true,
            videoUrl: videoMatch[1].replace(/\\u0026/g, '&'),
            title: titleMatch ? titleMatch[1] : 'TikTok Video'
          })
        }
      }
    } catch (error) {
        `Direct fetch error: ${error instanceof Error ? error.message : 'Unknown error'}`
    }

    return NextResponse.json(
      { 
        success: false, 
        message: `All download services are currently unavailable. Errors: ${errors}. Please try again later or check if the TikTok video is public and accessible.` 
      },
      { status: 503 }
    )

  } catch (error) {
    console.error('TikTok download API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    )
  }
}
