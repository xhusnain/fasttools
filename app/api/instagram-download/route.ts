import { NextRequest, NextResponse } from 'next/server'
import { igdl } from 'ab-downloader'

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json(
        { success: false, message: 'URL is required' },
        { status: 400 }
      )
    }

    // Validate Instagram URL
    const instagramPattern = /^(https?:\/\/)?(www\.)?(instagram\.com|instagr\.am)\/.+/i
    if (!instagramPattern.test(url)) {
      return NextResponse.json(
        { success: false, message: 'Invalid Instagram URL' },
        { status: 400 }
      )
    }

    try {
      // Use ab-downloader's igdl function
      const data = await igdl(url)

      if (!data) {
        return NextResponse.json(
          { success: false, message: 'No content found for this Instagram URL' },
          { status: 404 }
        )
      }

      // Parse the response from ab-downloader
      // The response structure may vary, so we'll handle different formats
      let result: any = {
        success: true,
      }

      // Helper function to extract image/video URLs from various formats
      const extractUrl = (item: any, preferVideo: boolean = false): string | null => {
        if (!item) return null
        if (typeof item === 'string') return item
        
        // If we prefer video, check video properties first
        if (preferVideo) {
          return item.video || item.videoUrl || item.url || item.download || item.downloadUrl || 
                 item.media || item.image || item.imageUrl || item.src || item.link || null
        }
        
        // Otherwise check all properties
        return item.url || item.video || item.videoUrl || item.image || item.imageUrl || item.media || 
               item.download || item.downloadUrl || item.src || item.link || null
      }

      // Helper function to determine if item is video
      const isVideo = (item: any, url?: string | null): boolean => {
        if (!item && !url) return false
        
        // Check item properties first
        if (item) {
          if (item.type === 'video' || item.type === 'reel' || item.video || item.videoUrl || item.isVideo) return true
          if (item.url && (item.url.includes('.mp4') || item.url.includes('video') || item.url.includes('reel'))) return true
        }
        
        // Check URL if provided
        if (url) {
          if (url.includes('.mp4') || url.includes('/video/') || url.includes('reel') || url.includes('video')) return true
        }
        
        return false
      }

      // Check if URL contains 'reel' which indicates it's a video
      const urlContainsReel = url.toLowerCase().includes('/reel/')
      const urlContainsVideo = url.toLowerCase().includes('/p/') === false && (url.toLowerCase().includes('/reel/') || url.toLowerCase().includes('/tv/'))
      
      // If it's definitely a video URL, prioritize video detection
      const isDefinitelyVideo = urlContainsReel || urlContainsVideo
      
      // Handle different response formats from ab-downloader
      if (Array.isArray(data)) {
        // If it's an array, it's multiple media items (carousel post)
        result.media = data
        result.isMultiple = true
        
        // Extract all images and videos separately
        const allImages: string[] = []
        const allVideos: string[] = []
        
        data.forEach((item: any) => {
          const url = extractUrl(item)
          if (url) {
            // If URL is definitely a video, prioritize video
            if (isDefinitelyVideo || isVideo(item, url)) {
              allVideos.push(url)
            } else {
              allImages.push(url)
            }
          }
        })
        
        result.images = allImages.length > 0 ? allImages : undefined
        result.videos = allVideos.length > 0 ? allVideos : undefined
        
        // Extract first item for preview/thumbnail
        const firstItem = data[0]
        if (firstItem) {
          const firstUrl = extractUrl(firstItem)
          const isFirstVideo = isDefinitelyVideo || isVideo(firstItem, firstUrl)
          
          if (isFirstVideo) {
            result.videoUrl = firstUrl
            result.type = 'video'
            // For videos, try to get thumbnail from various sources
            result.thumbnail = firstItem.thumbnail || firstItem.cover || firstItem.preview || firstItem.image || firstItem.poster || undefined
          } else {
            result.imageUrl = firstUrl
            result.type = 'image'
            result.thumbnail = firstItem.thumbnail || firstItem.cover || firstItem.preview || firstItem.image || firstUrl
          }
          result.title = firstItem.title || firstItem.caption || firstItem.description
        }
        
        // If we have images but no videos, set isMultiple to true
        if (result.images && result.images.length > 1) {
          result.isMultiple = true
        }
      } else if (typeof data === 'object') {
        // Check if it's a carousel post with multiple items
        if (data.media && Array.isArray(data.media) && data.media.length > 1) {
          // Carousel post with multiple media items
          result.media = data.media
          result.isMultiple = true
          
          // Extract all images and videos separately
          const allImages: string[] = []
          const allVideos: string[] = []
          
          data.media.forEach((item: any) => {
            const url = extractUrl(item)
            if (url) {
              if (isVideo(item, url)) {
                allVideos.push(url)
              } else {
                allImages.push(url)
              }
            }
          })
          
          result.images = allImages.length > 0 ? allImages : undefined
          result.videos = allVideos.length > 0 ? allVideos : undefined
          
          // Set first item for preview
          const firstItem = data.media[0]
          if (firstItem) {
            const firstUrl = extractUrl(firstItem)
            const isFirstVideo = isVideo(firstItem, firstUrl)
            
            if (isFirstVideo) {
              result.videoUrl = firstUrl
              result.type = 'video'
            } else {
              result.imageUrl = firstUrl
              result.type = 'image'
            }
          }
        } else if (data.media && Array.isArray(data.media) && data.media.length === 1) {
          // Single item in media array
          const item = data.media[0]
          const url = extractUrl(item)
          const isItemVideo = isDefinitelyVideo || isVideo(item, url)
          
          if (isItemVideo) {
            result.videoUrl = url
            result.type = 'video'
            result.thumbnail = data.thumbnail || data.cover || data.preview || data.image || item.thumbnail || item.cover || undefined
          } else {
            result.imageUrl = url
            result.type = 'image'
            result.thumbnail = data.thumbnail || data.cover || data.preview || data.image || url
          }
        } else {
          // Single media item (not in array)
          // If URL is definitely a video, prioritize finding video URL
          if (isDefinitelyVideo) {
            // Try to extract video URL with video preference
            const videoUrl = extractUrl(data, true) || data.video || data.videoUrl || data.url || data.download || data.downloadUrl
            result.videoUrl = videoUrl
            result.type = 'video'
            result.thumbnail = data.thumbnail || data.cover || data.preview || data.image || data.poster || undefined
          } else {
            // Check if it's a video based on properties
            let videoUrl = data.video || data.videoUrl
            let imageUrl = data.image || data.imageUrl
            const url = extractUrl(data)
            const isItemVideo = isVideo(data, url) || !!videoUrl
            
            if (isItemVideo || videoUrl) {
              result.videoUrl = videoUrl || url
              result.type = 'video'
              result.thumbnail = data.thumbnail || data.cover || data.preview || data.image || data.poster || undefined
            } else {
              result.imageUrl = imageUrl || url
              result.type = 'image'
              result.thumbnail = data.thumbnail || data.cover || data.preview || data.image || url
            }
          }
        }
        
        // Set common fields - only if not already set above
        if (!result.thumbnail) {
          result.thumbnail = data.thumbnail || data.cover || data.preview || data.image || (result.type === 'video' ? undefined : (result.imageUrl || result.videoUrl))
        }
        if (!result.title) {
          result.title = data.title || data.caption || data.description
        }
        if (!result.type) {
          result.type = data.type || (isDefinitelyVideo ? 'video' : (urlContainsReel ? 'video' : (result.videoUrl ? 'video' : 'image')))
        }
      } else if (typeof data === 'string') {
        // If it's a string, it might be a direct URL
        result.imageUrl = data
        result.videoUrl = data
      }

      // Ensure images array is properly set if we have multiple images
      // But don't include videos in the images array
      if (result.images && Array.isArray(result.images) && result.images.length > 0) {
        // Filter out any videos that might have been incorrectly added
        result.images = result.images.filter((imgUrl: string) => {
          if (!imgUrl) return false
          const lowerUrl = imgUrl.toLowerCase()
          return !lowerUrl.includes('.mp4') && !lowerUrl.includes('/video/') && !lowerUrl.includes('reel')
        })
        
        if (result.images.length > 0) {
          result.isMultiple = result.images.length > 1
          // Don't show single image URL if we have images array
          if (result.images.length > 1) {
            result.imageUrl = undefined
          } else if (result.images.length === 1) {
            result.imageUrl = result.images[0]
          }
        } else {
          // If all were filtered out (they were videos), clear images
          result.images = undefined
        }
      }
      
      // Ensure videos array doesn't contain images
      if (result.videos && Array.isArray(result.videos) && result.videos.length > 0) {
        result.videos = result.videos.filter((videoUrl: string) => {
          if (!videoUrl) return false
          const lowerUrl = videoUrl.toLowerCase()
          return lowerUrl.includes('.mp4') || lowerUrl.includes('/video/') || lowerUrl.includes('reel') || lowerUrl.includes('video')
        })
        
        if (result.videos.length === 0) {
          result.videos = undefined
        }
      }
      
      // If we have a video, make sure it's not in images
      if (result.videoUrl || result.type === 'video' || isDefinitelyVideo) {
        result.imageUrl = undefined
        result.type = 'video'
        if (result.images && Array.isArray(result.images)) {
          result.images = undefined
        }
        // If videoUrl is not set but we know it's a video, try to extract it from the data
        if (!result.videoUrl && isDefinitelyVideo) {
          // Try to find video URL in various places with video preference
          const videoUrl = extractUrl(data, true) || data.video || data.videoUrl || data.url || data.download || data.downloadUrl
          if (videoUrl) {
            result.videoUrl = videoUrl
          }
        }
      }

      return NextResponse.json(result)

    } catch (error: any) {
      // Provide more specific error messages
      const errorMessage = error?.message || 'Failed to download Instagram content'
      
      return NextResponse.json(
        { 
          success: false, 
          message: errorMessage.includes('private') 
            ? 'This Instagram post appears to be private or restricted. Please ensure the post is public.'
            : errorMessage.includes('not found') || errorMessage.includes('404')
            ? 'Instagram post not found. Please check the URL and ensure the post exists and is public.'
            : `Failed to download Instagram content: ${errorMessage}` 
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

