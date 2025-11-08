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

    const facebookPattern = /^(https?:\/\/)?(www\.)?(facebook\.com|fb\.com|m\.facebook\.com)\/.+/i
    if (!facebookPattern.test(url)) {
      return NextResponse.json(
        { success: false, message: 'Invalid Facebook URL' },
        { status: 400 }
      )
    }

    const finalUrl = url.trim()

    try {

      let data = null

      try {
        data = await fbdown(finalUrl)
      } catch (firstError: any) {

        const shareMatch = finalUrl.match(/facebook\.com\/share\/v\/([^\/\?]+)/i)
        if (shareMatch) {
          const watchUrl = `https://www.facebook.com/watch/?v=${shareMatch[1]}`
          try {
            data = await fbdown(watchUrl)
          } catch (secondError: any) {
            throw firstError
          }
        } else {
          throw firstError
        }
      }

      if (!data) {
        return NextResponse.json(
          { success: false, message: 'No video found for this Facebook URL. The video may be private or the URL format is not supported.' },
          { status: 404 }
        )
      }

      if (typeof data === 'object' && data.error) {
        return NextResponse.json(
          { success: false, message: data.error || 'Failed to download video' },
          { status: 404 }
        )
      }

      if (typeof data === 'object' && data.status === 'error') {
        return NextResponse.json(
          { success: false, message: data.message || 'Failed to download video' },
          { status: 404 }
        )
      }

      let videoUrl: string | null = null
      let title: string | undefined = undefined
      let thumbnail: string | undefined = undefined

      if (typeof data === 'string') {

        videoUrl = data
      } else if (typeof data === 'object') {

        videoUrl = data.HD || data.Normal_video || data.hd || data.normal_video ||
                   data.url || data.video || data.videoUrl || data.download || data.sd || null
        title = data.title || data.caption || data.description
        thumbnail = data.thumbnail || data.cover || data.preview || data.image

        if (!videoUrl) {
          const findVideoUrl = (obj: any, depth: number = 0): string | null => {
            if (!obj || depth > 5) return null

            if (typeof obj === 'string') {

              if ((obj.includes('.mp4') || obj.includes('video') || obj.includes('fbcdn') || obj.includes('fbexternal')) &&
                  (obj.startsWith('http://') || obj.startsWith('https://'))) {
                return obj
              }
            }

            if (typeof obj === 'object') {
              for (const key in obj) {
                const value = obj[key]
                const keyLower = key.toLowerCase()

                if (keyLower.includes('video') || keyLower.includes('url') || keyLower.includes('download') ||
                    keyLower.includes('stream') || keyLower.includes('hd') || keyLower.includes('sd') || keyLower.includes('link')) {
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
        return NextResponse.json(
          {
            success: false,
            message: 'No video URL found in the response. The video may be private, restricted, or the URL format may not be supported. Please ensure the video is public and try again.'
          },
          { status: 404 }
        )
      }

      const result: any = {
        success: true,
        videoUrl: videoUrl,
        title: title,
        thumbnail: thumbnail
      }

      if (typeof data === 'object' && data.HD) {
        result.hdUrl = data.HD
      }
      if (typeof data === 'object' && data.Normal_video) {
        result.normalUrl = data.Normal_video
      }

      return NextResponse.json(result)

    } catch (error: any) {

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

