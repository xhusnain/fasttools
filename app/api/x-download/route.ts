import { NextRequest, NextResponse } from 'next/server'
import { twitter } from 'ab-downloader'

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json(
        { success: false, message: 'URL is required' },
        { status: 400 }
      )
    }

    // Validate X/Twitter URL
    const twitterPattern = /^(https?:\/\/)?(www\.)?(twitter\.com|x\.com)\/.+/i
    if (!twitterPattern.test(url)) {
      return NextResponse.json(
        { success: false, message: 'Invalid X/Twitter URL' },
        { status: 400 }
      )
    }

    // Normalize URL - convert x.com to twitter.com for better compatibility
    let normalizedUrl = url.trim()
    normalizedUrl = normalizedUrl.replace(/x\.com/i, 'twitter.com')

    try {
      // Use ab-downloader's twitter function
      const data = await twitter(normalizedUrl)

      console.log('ab-downloader twitter response:', JSON.stringify(data, null, 2))

      if (!data) {
        return NextResponse.json(
          { success: false, message: 'No media found for this X/Twitter URL. The post may not contain media or the URL format is not supported.' },
          { status: 404 }
        )
      }

      // Check if the response contains an error message
      if (typeof data === 'object' && data.error) {
        return NextResponse.json(
          { success: false, message: data.error || 'Failed to download media' },
          { status: 404 }
        )
      }

      // Check if response indicates failure
      if (typeof data === 'object' && data.status === 'error') {
        return NextResponse.json(
          { success: false, message: data.message || 'Failed to download media' },
          { status: 404 }
        )
      }

      // Handle the response - Twitter/X can return videos or images
      let videoUrl: string | null = null
      let imageUrl: string | null = null
      let images: string[] = []
      let title: string | undefined = undefined
      let thumbnail: string | undefined = undefined
      let type: 'video' | 'image' | 'mixed' = 'video'

      if (typeof data === 'string') {
        // If it's a string, check if it's a video or image URL
        if (data.includes('.mp4') || data.includes('video')) {
          videoUrl = data
        } else {
          imageUrl = data
          type = 'image'
        }
      } else if (typeof data === 'object') {
        // Handle ab-downloader's specific format where url is an array with hd/sd objects
        if (data.url && Array.isArray(data.url)) {
          // Check if array has any non-empty objects
          const hasValidItems = data.url.some(item => 
            item && typeof item === 'object' && Object.keys(item).length > 0
          )
          
          if (hasValidItems) {
            // Extract video URLs from the url array - prefer HD over SD
            let hdUrl: string | null = null
            let sdUrl: string | null = null
            
            for (const item of data.url) {
              if (typeof item === 'object' && item !== null && Object.keys(item).length > 0) {
                // Check for HD URL
                if (item.hd && typeof item.hd === 'string' && item.hd.startsWith('http')) {
                  hdUrl = item.hd
                }
                // Check for SD URL
                if (item.sd && typeof item.sd === 'string' && item.sd.startsWith('http')) {
                  sdUrl = item.sd
                }
                // Also check for direct URL properties
                if (item.url && typeof item.url === 'string' && item.url.startsWith('http')) {
                  if (item.url.includes('.mp4') || item.url.includes('video')) {
                    if (!hdUrl && !sdUrl) {
                      videoUrl = item.url
                    }
                  } else {
                    if (!imageUrl) imageUrl = item.url
                  }
                }
                // Check for image properties
                if (item.image && typeof item.image === 'string' && item.image.startsWith('http')) {
                  if (!imageUrl) imageUrl = item.image
                }
                if (item.photo && typeof item.photo === 'string' && item.photo.startsWith('http')) {
                  if (!imageUrl) imageUrl = item.photo
                }
              } else if (typeof item === 'string' && item.startsWith('http')) {
                // Direct URL string in array
                if (item.includes('.mp4') || item.includes('video')) {
                  if (!videoUrl) videoUrl = item
                } else {
                  if (!imageUrl) imageUrl = item
                }
              }
            }
            
            // Prefer HD over SD
            if (hdUrl) {
              videoUrl = hdUrl
            } else if (sdUrl) {
              videoUrl = sdUrl
            }
          }
        }
        
        // Fallback to direct properties if not found in url array
        if (!videoUrl) {
          videoUrl = data.video || data.videoUrl || data.download || 
                     data.hd || data.hdUrl || data.media || data.stream || null
        }
        
        if (!imageUrl) {
          imageUrl = data.image || data.imageUrl || data.photo || data.thumbnail || 
                     data.cover || data.preview || null
        }

        // Handle multiple images - ensure all are strings
        if (data.images && Array.isArray(data.images)) {
          images = data.images
            .map((img: any) => {
              if (typeof img === 'string') return img
              if (typeof img === 'object' && img.url) return img.url
              if (typeof img === 'object' && img.media_url) return img.media_url
              if (typeof img === 'object' && img.url_https) return img.url_https
              return null
            })
            .filter((url: any): url is string => typeof url === 'string' && url.startsWith('http'))
        } else if (data.media && Array.isArray(data.media)) {
          images = data.media
            .filter((item: any) => item.type === 'photo' || item.type === 'image')
            .map((item: any) => {
              if (typeof item === 'string') return item
              return item.url || item.media_url || item.url_https
            })
            .filter((url: any): url is string => typeof url === 'string' && url.startsWith('http'))
        }

        title = data.title || data.caption || data.text || data.description
        thumbnail = data.thumbnail || data.cover || data.preview || data.image

        // Determine type
        if (videoUrl && images.length > 0) {
          type = 'mixed'
        } else if (images.length > 0 || imageUrl) {
          type = 'image'
        } else if (videoUrl) {
          type = 'video'
        }

        // If still no media URL, search recursively through the object
        if (!videoUrl && !imageUrl && images.length === 0) {
          const findMediaUrl = (obj: any, depth: number = 0): string | null => {
            if (!obj || depth > 5) return null
            
            if (typeof obj === 'string') {
              // Check if it looks like a media URL
              if ((obj.includes('.mp4') || obj.includes('video') || obj.includes('image') || 
                   obj.includes('twimg') || obj.includes('pbs.twimg')) && 
                  (obj.startsWith('http://') || obj.startsWith('https://'))) {
                return obj
              }
            }
            
            if (typeof obj === 'object') {
              for (const key in obj) {
                const value = obj[key]
                const keyLower = key.toLowerCase()
                
                // Check property names that might contain media URLs
                if (keyLower.includes('video') || keyLower.includes('image') || keyLower.includes('url') || 
                    keyLower.includes('download') || keyLower.includes('stream') || keyLower.includes('media') ||
                    keyLower.includes('hd') || keyLower.includes('sd') || keyLower.includes('link')) {
                  if (typeof value === 'string' && 
                      (value.includes('.mp4') || value.includes('video') || value.includes('image') ||
                       value.includes('twimg') || value.includes('pbs.twimg')) &&
                      (value.startsWith('http://') || value.startsWith('https://'))) {
                    return value
                  }
                }
                
                const found = findMediaUrl(value, depth + 1)
                if (found) return found
              }
            }
            
            return null
          }
          const foundUrl = findMediaUrl(data)
          if (foundUrl) {
            if (foundUrl.includes('.mp4') || foundUrl.includes('video')) {
              videoUrl = foundUrl
            } else {
              imageUrl = foundUrl
              type = 'image'
            }
          }
        }
      }

      if (!videoUrl && !imageUrl && images.length === 0) {
        // Check if ab-downloader returned empty objects (common for image posts)
        const hasEmptyUrlArray = data.url && Array.isArray(data.url) && 
          data.url.length > 0 && 
          data.url.every(item => !item || typeof item !== 'object' || Object.keys(item).length === 0)
        
        const errorMessage = hasEmptyUrlArray
          ? 'This X/Twitter post does not appear to contain a video. This tool only supports video downloads. Please use a post that contains a video, or ensure the post is public and contains video content.'
          : 'No video URL found in the response. The post may not contain a video, may be private, or the URL format may not be supported. Please ensure the post contains a video and is public.'
        
        return NextResponse.json(
          { 
            success: false, 
            message: errorMessage
          },
          { status: 404 }
        )
      }

      // Ensure all URLs are strings (not objects)
      const ensureString = (value: any): string | undefined => {
        if (!value) return undefined
        if (typeof value === 'string') return value
        if (typeof value === 'object' && value.url) return value.url
        if (typeof value === 'object' && value.media_url) return value.media_url
        return undefined
      }

      // Return the result - ensure all values are strings
      const result: any = {
        success: true,
        type: type,
        videoUrl: ensureString(videoUrl) || (typeof videoUrl === 'string' ? videoUrl : undefined),
        imageUrl: ensureString(imageUrl) || (typeof imageUrl === 'string' ? imageUrl : undefined),
        images: images.length > 0 ? images : undefined,
        title: typeof title === 'string' ? title : undefined,
        thumbnail: ensureString(thumbnail) || ensureString(imageUrl) || (images.length > 0 && typeof images[0] === 'string' ? images[0] : undefined)
      }

      console.log('API returning result:', JSON.stringify(result, null, 2))

      return NextResponse.json(result)

    } catch (error: any) {
      // Provide more specific error messages
      const errorMessage = error?.message || 'Failed to download X/Twitter media'
      
      return NextResponse.json(
        { 
          success: false, 
          message: errorMessage.includes('private') 
            ? 'This X/Twitter post appears to be private or restricted. Please ensure the post is public.'
            : errorMessage.includes('not found') || errorMessage.includes('404')
            ? 'X/Twitter post not found. Please check the URL and ensure the post exists and is public.'
            : `Failed to download X/Twitter media: ${errorMessage}` 
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

