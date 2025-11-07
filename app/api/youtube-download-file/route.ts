import { NextRequest, NextResponse } from 'next/server'
import { downloadVideo } from 'ytsave'
import { promises as fs } from 'fs'
import path from 'path'
import os from 'os'

export async function POST(request: NextRequest) {
  try {
    const { url, format = 'mp4', videoId, title } = await request.json()

    if (!url) {
      return NextResponse.json(
        { success: false, message: 'URL is required' },
        { status: 400 }
      )
    }

    // Validate format
    if (format !== 'mp4' && format !== 'mp3') {
      return NextResponse.json(
        { success: false, message: 'Format must be mp4 or mp3' },
        { status: 400 }
      )
    }

    // Set PATH to include local yt-dlp binary
    const projectRoot = process.cwd()
    const binPath = path.join(projectRoot, 'bin')
    const currentPath = process.env.PATH || ''
    process.env.PATH = `${binPath}:${currentPath}`

    // Create temp directory
    const tempDir = path.join(os.tmpdir(), 'youtube-downloads')
    await fs.mkdir(tempDir, { recursive: true })

    try {
      // Download video using ytsave
      await downloadVideo(url, {
        format: format as 'mp4' | 'mp3',
        output: tempDir
      })

      // Find the downloaded file
      const files = await fs.readdir(tempDir)
      const downloadedFile = files.find(file => 
        file.includes(videoId || '') || 
        (format === 'mp4' && file.endsWith('.mp4')) ||
        (format === 'mp3' && file.endsWith('.mp3'))
      )

      if (!downloadedFile) {
        throw new Error('Downloaded file not found')
      }

      const filePath = path.join(tempDir, downloadedFile)
      const fileBuffer = await fs.readFile(filePath)
      
      // Sanitize filename
      const sanitizedTitle = (title || 'youtube-video')
        .replace(/[^\x00-\x7F]/g, '')
        .replace(/[<>:"/\\|?*]/g, '')
        .replace(/\s+/g, '_')
        .substring(0, 100) || 'youtube-video'
      
      const extension = format === 'mp4' ? 'mp4' : 'mp3'
      const filename = `${sanitizedTitle}.${extension}`

      // Clean up temp file
      await fs.unlink(filePath).catch(() => {})

      // Return file with proper headers
      return new NextResponse(fileBuffer, {
        status: 200,
        headers: {
          'Content-Type': format === 'mp4' ? 'video/mp4' : 'audio/mpeg',
          'Content-Disposition': `attachment; filename="${filename}"`,
          'Content-Length': fileBuffer.length.toString(),
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      })
    } catch (downloadError: any) {
      console.error('ytsave download error:', downloadError)
      
      // Clean up temp directory on error
      try {
        const files = await fs.readdir(tempDir)
        for (const file of files) {
          await fs.unlink(path.join(tempDir, file)).catch(() => {})
        }
      } catch {}

      return NextResponse.json(
        { 
          success: false, 
          message: downloadError?.message || 'Failed to download video. Please ensure yt-dlp and ffmpeg are installed on the server.' 
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('YouTube download file API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    )
  }
}

