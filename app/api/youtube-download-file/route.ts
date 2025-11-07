import { NextRequest, NextResponse } from 'next/server'
import { exec } from 'child_process'
import { promises as fs } from 'fs'
import path from 'path'
import os from 'os'
import { promisify } from 'util'

const execAsync = promisify(exec)

export const maxDuration = 300
export const dynamic = 'force-dynamic'

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

    // Get yt-dlp binary path
    const projectRoot = process.cwd()
    const binPath = path.join(projectRoot, 'bin')
    const ytDlpPath = path.join(binPath, 'yt-dlp')

    // Check if yt-dlp exists
    try {
      await fs.access(ytDlpPath)
    } catch {
      return NextResponse.json(
        { 
          success: false, 
          message: 'yt-dlp not found. Please ensure yt-dlp is installed in the bin directory.' 
        },
        { status: 500 }
      )
    }

    // Create temp directory
    const tempDir = path.join(os.tmpdir(), `youtube-downloads-${Date.now()}`)
    await fs.mkdir(tempDir, { recursive: true })

    try {
      // Sanitize filename for output
      const sanitizedTitle = (title || 'youtube-video')
        .replace(/[^\x00-\x7F]/g, '')
        .replace(/[<>:"/\\|?*]/g, '')
        .replace(/\s+/g, '_')
        .substring(0, 100) || 'youtube-video'
      
      const extension = format === 'mp4' ? 'mp4' : 'mp3'
      const outputFilename = `${sanitizedTitle}.${extension}`
      const outputPath = path.join(tempDir, outputFilename)

      // Build yt-dlp command
      let command: string
      if (format === 'mp3') {
        // For MP3, extract audio and convert to MP3
        command = `"${ytDlpPath}" -x --audio-format mp3 --audio-quality 0 -o "${outputPath}" --no-warnings --no-check-certificate "${url}"`
      } else {
        // For MP4, get best video+audio format
        command = `"${ytDlpPath}" -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best" -o "${outputPath}" --merge-output-format mp4 --no-warnings --no-check-certificate "${url}"`
      }

      // Execute yt-dlp
      console.log('Executing yt-dlp command:', command)
      const { stdout, stderr } = await execAsync(command, {
        maxBuffer: 50 * 1024 * 1024, // 50MB buffer
        timeout: 300000 // 5 minute timeout
      })

      if (stderr && !stderr.includes('WARNING') && !stderr.includes('DeprecationWarning')) {
        console.error('yt-dlp stderr:', stderr)
      }

      // Find the downloaded file (yt-dlp might rename it)
      const files = await fs.readdir(tempDir)
      let downloadedFile = files.find(file => 
        file === outputFilename ||
        file.includes(sanitizedTitle) ||
        (format === 'mp4' && (file.endsWith('.mp4') || file.endsWith('.webm') || file.endsWith('.mkv'))) ||
        (format === 'mp3' && (file.endsWith('.mp3') || file.endsWith('.m4a') || file.endsWith('.opus')))
      )

      // If not found, try to find any video/audio file
      if (!downloadedFile) {
        downloadedFile = files.find(file => 
          (format === 'mp4' && (file.endsWith('.mp4') || file.endsWith('.webm') || file.endsWith('.mkv'))) ||
          (format === 'mp3' && (file.endsWith('.mp3') || file.endsWith('.m4a') || file.endsWith('.opus')))
        )
      }

      if (!downloadedFile) {
        throw new Error('Downloaded file not found. yt-dlp may have failed to download the video.')
      }

      const filePath = path.join(tempDir, downloadedFile)
      
      // Check if file exists and has content
      const stats = await fs.stat(filePath)
      if (stats.size === 0) {
        throw new Error('Downloaded file is empty')
      }

      const fileBuffer = await fs.readFile(filePath)
      const finalFilename = `${sanitizedTitle}.${extension}`

      // Clean up temp file
      await fs.unlink(filePath).catch(() => {})
      await fs.rmdir(tempDir).catch(() => {})

      // Return file with proper headers
      return new NextResponse(fileBuffer, {
        status: 200,
        headers: {
          'Content-Type': format === 'mp4' ? 'video/mp4' : 'audio/mpeg',
          'Content-Disposition': `attachment; filename="${finalFilename}"`,
          'Content-Length': fileBuffer.length.toString(),
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      })
    } catch (downloadError: any) {
      console.error('yt-dlp download error:', downloadError)
      
      // Clean up temp directory on error
      try {
        const files = await fs.readdir(tempDir)
        for (const file of files) {
          await fs.unlink(path.join(tempDir, file)).catch(() => {})
        }
        await fs.rmdir(tempDir).catch(() => {})
      } catch {}

      let errorMessage = 'Failed to download video.'
      
      if (downloadError.message?.includes('yt-dlp not found') || downloadError.message?.includes('ENOENT')) {
        errorMessage = 'yt-dlp not found on PATH. Please install yt-dlp and ensure it\'s available in your PATH. On Windows you can: `pip install yt-dlp` (if Python/pip installed), or install via scoop/choco/winget, or download the executable from `https://github.com/yt-dlp/yt-dlp/releases` and add it to PATH.'
      } else if (downloadError.code === 'ETIMEDOUT' || downloadError.signal === 'SIGTERM') {
        errorMessage = 'Download timed out. The video may be too large or the server may be slow.'
      } else if (downloadError.message) {
        errorMessage = downloadError.message
      }

      return NextResponse.json(
        { 
          success: false, 
          message: errorMessage
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

