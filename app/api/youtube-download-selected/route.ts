import { NextRequest, NextResponse } from 'next/server'
import { downloadVideo } from 'ytsave'
import { promises as fs } from 'fs'
import path from 'path'
import os from 'os'
import archiver from 'archiver'

export const maxDuration = 600
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { videos, format = 'mp4' } = await request.json()

    if (!videos || !Array.isArray(videos) || videos.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Please select at least one video to download' },
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
    const tempDir = path.join(os.tmpdir(), `youtube-selected-${Date.now()}`)
    await fs.mkdir(tempDir, { recursive: true })

    try {
      const downloadedFiles: string[] = []
      const errors: string[] = []

      // Download each video one by one
      for (let i = 0; i < videos.length; i++) {
        const video = videos[i]
        try {
          console.log(`Downloading video ${i + 1}/${videos.length}: ${video.url || video}`)
          
          const videoUrl = typeof video === 'string' ? video : video.url
          
          await downloadVideo(videoUrl, {
            format: format as 'mp4' | 'mp3',
            output: tempDir
          })

          // Find the downloaded file
          const files = await fs.readdir(tempDir)
          const newFiles = files.filter(file => 
            !downloadedFiles.includes(file) && (
              (format === 'mp4' && (file.endsWith('.mp4') || file.endsWith('.webm') || file.endsWith('.mkv'))) ||
              (format === 'mp3' && (file.endsWith('.mp3') || file.endsWith('.m4a') || file.endsWith('.opus')))
            )
          )

          if (newFiles.length > 0) {
            downloadedFiles.push(...newFiles)
          }
        } catch (videoError: any) {
          console.error(`Error downloading video ${i + 1}:`, videoError)
          errors.push(`Video ${i + 1}: ${videoError.message || 'Download failed'}`)
        }
      }

      if (downloadedFiles.length === 0) {
        throw new Error('No files were successfully downloaded. ' + (errors.length > 0 ? errors.join('; ') : ''))
      }

      // If only one file, return it directly
      if (downloadedFiles.length === 1) {
        const filePath = path.join(tempDir, downloadedFiles[0])
        const fileBuffer = await fs.readFile(filePath)
        
        const extension = format === 'mp4' ? 'mp4' : 'mp3'
        const filename = `youtube-video.${extension}`

        await fs.unlink(filePath).catch(() => {})
        await fs.rmdir(tempDir).catch(() => {})

        return new NextResponse(fileBuffer, {
          status: 200,
          headers: {
            'Content-Type': format === 'mp4' ? 'video/mp4' : 'audio/mpeg',
            'Content-Disposition': `attachment; filename="${filename}"`,
            'Content-Length': fileBuffer.length.toString(),
            'Cache-Control': 'no-cache, no-store, must-revalidate',
          },
        })
      }

      // Multiple files - create ZIP
      const zipFilename = `youtube-videos-${Date.now()}.zip`
      
      const chunks: Buffer[] = []
      const archive = archiver('zip', { zlib: { level: 9 } })

      // Add files to zip
      for (const file of downloadedFiles) {
        const filePath = path.join(tempDir, file)
        archive.file(filePath, { name: file })
      }

      // Wait for archive to finish and collect all chunks
      return new Promise<NextResponse>((resolve, reject) => {
        archive.on('data', (chunk: Buffer) => {
          chunks.push(chunk)
        })

        archive.on('end', async () => {
          try {
            const zipBuffer = Buffer.concat(chunks)
            
            // Clean up temp files
            for (const file of downloadedFiles) {
              await fs.unlink(path.join(tempDir, file)).catch(() => {})
            }
            await fs.rmdir(tempDir).catch(() => {})

            resolve(new NextResponse(zipBuffer, {
              status: 200,
              headers: {
                'Content-Type': 'application/zip',
                'Content-Disposition': `attachment; filename="${zipFilename}"`,
                'Content-Length': zipBuffer.length.toString(),
                'Cache-Control': 'no-cache, no-store, must-revalidate',
              },
            }))
          } catch (error) {
            reject(error)
          }
        })

        archive.on('error', (err) => {
          reject(err)
        })

        archive.finalize()
      })
    } catch (downloadError: any) {
      console.error('Download error:', downloadError)
      
      // Clean up temp directory on error
      try {
        const files = await fs.readdir(tempDir)
        for (const file of files) {
          await fs.unlink(path.join(tempDir, file)).catch(() => {})
        }
        await fs.rmdir(tempDir).catch(() => {})
      } catch {}

      return NextResponse.json(
        { 
          success: false, 
          message: downloadError?.message || 'Failed to download videos.' 
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Download selected API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    )
  }
}

