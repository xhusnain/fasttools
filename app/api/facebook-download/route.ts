import { NextRequest, NextResponse } from 'next/server'
import { fbdown } from 'ab-downloader'

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json(
        { success: false, message: 'URL is required' },
        { status: 400 }
      )
    }

    // Validate Facebook URL
    const facebookPattern = /^(https?:\/\/)?(www\.)?(facebook\.com|fb\.com|m\.facebook\.com)\/.+/i
    if (!facebookPattern.test(url)) {
      return NextResponse.json(
        { success: false, message: 'Invalid Facebook URL' },
        { status: 400 }
      )
    }

    // Use the exact URL the user provided - don't normalize it
    // The ab-downloader should handle different URL formats
    const finalUrl = url.trim()

    console.log('Original URL:', url)
    console.log('Using URL as-is:', finalUrl)

    try {
      // Use ab-downloader's fbdown function with the exact URL user provided
      // Try both the original URL and watch format if it's a share URL
      let data = null
      let error = null
      
      // First try the URL as-is
      try {
        data = await fbdown(finalUrl)
        console.log('Success with original URL')
      } catch (firstError: any) {
        console.log('Failed with original URL, trying watch format:', firstError?.message)
        error = firstError
        
        // If it's a share URL and first attempt failed, try converting to watch format
        const shareMatch = finalUrl.match(/facebook\.com\/share\/v\/([^\/\?]+)/i)
        if (shareMatch) {
          const watchUrl = `https://www.facebook.com/watch/?v=${shareMatch[1]}`
          console.log('Trying watch format:', watchUrl)
          try {
            data = await fbdown(watchUrl)
            console.log('Success with watch format')
          } catch (secondError: any) {
            console.log('Failed with watch format too:', secondError?.message)
            throw firstError // Throw original error
          }
        } else {
          throw firstError
        }
      }

      console.log('Facebook download response:', JSON.stringify(data, null, 2))

      if (!data) {
        return NextResponse.json(
          { success: false, message: 'No video found for this Facebook URL. The video may be private or the URL format is not supported.' },
          { status: 404 }
        )
      }

      // Check if the response contains an error message
      if (typeof data === 'object' && data.error) {
        return NextResponse.json(
          { success: false, message: data.error || 'Failed to download video' },
          { status: 404 }
        )
      }

      // Check if response indicates failure
      if (typeof data === 'object' && data.status === 'error') {
        return NextResponse.json(
          { success: false, message: data.message || 'Failed to download video' },
          { status: 404 }
        )
      }

      // For Facebook, fbdown should return the video URL directly or in a simple structure
      // Handle the response - it could be a string (direct URL) or an object
      let videoUrl: string | null = null
      let title: string | undefined = undefined
      let thumbnail: string | undefined = undefined

      if (typeof data === 'string') {
        // If it's a string, it's the direct video URL
        videoUrl = data
      } else if (typeof data === 'object') {
        // Facebook fbdown returns Normal_video and HD properties (as per ab-downloader)
        // Prefer HD, fallback to Normal_video
        videoUrl = data.HD || data.Normal_video || data.hd || data.normal_video || 
                   data.url || data.video || data.videoUrl || data.download || data.sd || null
        title = data.title || data.caption || data.description
        thumbnail = data.thumbnail || data.cover || data.preview || data.image
        
        // If still no video URL, search recursively through the object
        if (!videoUrl) {
          const findVideoUrl = (obj: any, depth: number = 0): string | null => {
            if (!obj || depth > 5) return null
            
            if (typeof obj === 'string') {
              // Check if it looks like a video URL
              if ((obj.includes('.mp4') || obj.includes('video') || obj.includes('fbcdn') || obj.includes('fbexternal')) && 
                  (obj.startsWith('http://') || obj.startsWith('https://'))) {
                return obj
              }
            }
            
            if (typeof obj === 'object') {
              for (const key in obj) {
                const value = obj[key]
                
                // Check property names that might contain video URLs
                if (key.toLowerCase().includes('video') || 
                    key.toLowerCase().includes('url') || 
                    key.toLowerCase().includes('download') ||
                    key.toLowerCase().includes('stream') ||
                    key.toLowerCase().includes('hd') ||
                    key.toLowerCase().includes('sd') ||
                    key.toLowerCase().includes('link')) {
                  
                  if (typeof value === 'string' && 
                      (value.includes('.mp4') || value.includes('video') || value.includes('fbcdn') || value.includes('fbexternal')) &&
                      (value.startsWith('http://') || value.startsWith('https://'))) {
                    return value
                  }
                }
                
                const found = findVideoUrl(value, depth + 1)
                if (found) return found
              }
            }
            
            return null
          }
          videoUrl = findVideoUrl(data)
        }
      }

      if (!videoUrl) {
        console.error('No video URL found. Response structure:', JSON.stringify(data, null, 2))
        console.error('Response type:', typeof data)
        console.error('Response keys:', typeof data === 'object' ? Object.keys(data) : 'N/A')
        
        // Try to extract any URL from the response as last resort
        if (typeof data === 'object') {
          for (const key in data) {
            if (typeof data[key] === 'string' && data[key].startsWith('http')) {
              console.log(`Found potential URL in key "${key}":`, data[key])
            }
          }
        }
        
        return NextResponse.json(
          { 
            success: false, 
            message: 'No video URL found in the response. The video may be private, restricted, or the URL format may not be supported. Please ensure the video is public and try again.' 
          },
          { status: 404 }
        )
      }

      // Return both HD and Normal video URLs if available
      const result: any = {
        success: true,
        videoUrl: videoUrl, // Default to HD if available, otherwise Normal_video
        title: title,
        thumbnail: thumbnail
      }

      // Include both URLs separately so frontend can choose
      if (typeof data === 'object' && data.HD) {
        result.hdUrl = data.HD
      }
      if (typeof data === 'object' && data.Normal_video) {
        result.normalUrl = data.Normal_video
      }

      return NextResponse.json(result)

    } catch (error: any) {
      // Provide more specific error messages
      console.error('Facebook download error:', error)
      const errorMessage = error?.message || 'Failed to download Facebook video'
      
      return NextResponse.json(
        { 
          success: false, 
          message: errorMessage.includes('private') 
            ? 'This Facebook video appears to be private or restricted. Please ensure the video is public.'
            : errorMessage.includes('not found') || errorMessage.includes('404')
            ? 'Facebook video not found. Please check the URL and ensure the video exists and is public.'
            : `Failed to download Facebook video: ${errorMessage}` 
        },
        { status: 500 }
      )
    }

  } catch (error: any) {
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    )
  }
}

