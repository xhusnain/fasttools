import { NextRequest, NextResponse } from 'next/server'
import { downloadPlaylist } from 'ytsave'
import { promises as fs } from 'fs'
import path from 'path'
import os from 'os'
import archiver from 'archiver'

export const maxDuration = 600
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { url, format = 'mp4' } = await request.json()

    if (!url) {
      return NextResponse.json(
        { success: false, message: 'URL is required' },
        { status: 400 }
      )
    }

    const isPlaylistPage = url.includes('playlist?list=') && !url.includes('watch?v=')
    if (!isPlaylistPage) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid YouTube playlist URL' },
        { status: 400 }
      )
    }

    if (format !== 'mp4' && format !== 'mp3') {
      return NextResponse.json(
        { success: false, message: 'Format must be mp4 or mp3' },
        { status: 400 }
      )
    }

    const projectRoot = process.cwd()
    const binPath = path.join(projectRoot, 'bin')
    const currentPath = process.env.PATH || ''
    process.env.PATH = `${binPath}:${currentPath}`

    const tempDir = path.join(os.tmpdir(), `youtube-playlist-${Date.now()}`)
    await fs.mkdir(tempDir, { recursive: true })

    try {

      const downloadPromise = downloadPlaylist(url, {
        format: format as 'mp4' | 'mp3',
        output: tempDir
      })

      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Playlist download timed out after 10 minutes. The playlist may be too large.')), 600000)
      })

      await Promise.race([downloadPromise, timeoutPromise])

      const files = await fs.readdir(tempDir)

      let downloadedFiles = files.filter(file =>
        (format === 'mp4' && (file.endsWith('.mp4') || file.endsWith('.webm') || file.endsWith('.mkv'))) ||
        (format === 'mp3' && (file.endsWith('.mp3') || file.endsWith('.m4a') || file.endsWith('.opus')))
      )

      if (downloadedFiles.length === 0) {
        downloadedFiles = files.filter(file => {
          const ext = path.extname(file).toLowerCase()
          return ['.mp4', '.mp3', '.webm', '.mkv', '.m4a', '.opus', '.avi', '.mov'].includes(ext)
        })
      }

      if (downloadedFiles.length === 0) {

        const fileStats = await Promise.all(
          files.map(async (file) => {
            const filePath = path.join(tempDir, file)
            try {
              const stats = await fs.stat(filePath)
              return stats.isFile() ? file : null
            } catch {
              return null
            }
          })
        )
        downloadedFiles = fileStats.filter((file): file is string => file !== null && file.length > 0)
      }

      if (downloadedFiles.length === 0) {

        const allFiles = await fs.readdir(tempDir)
        if (allFiles.length > 0) {
          throw new Error(`Download completed but no ${format} files found. Found files: ${allFiles.join(', ')}`)
        }
        throw new Error('No files downloaded from playlist. The playlist may be empty, private, or the download failed.')
      }

      if (downloadedFiles.length === 1) {
        const filePath = path.join(tempDir, downloadedFiles[0])
        const fileBuffer = await fs.readFile(filePath)

        const extension = format === 'mp4' ? 'mp4' : 'mp3'
        const filename = `playlist-video.${extension}`

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

      const zipFilename = `youtube-playlist-${Date.now()}.zip`

      const chunks: Buffer[] = []
      const archive = archiver('zip', { zlib: { level: 9 } })

      for (const file of downloadedFiles) {
        const filePath = path.join(tempDir, file)
        archive.file(filePath, { name: file })
      }

      return new Promise<NextResponse>((resolve, reject) => {
        archive.on('data', (chunk: Buffer) => {
          chunks.push(chunk)
        })

        archive.on('end', async () => {
          try {
            const zipBuffer = Buffer.concat(chunks)

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
      console.error('ytsave playlist download error:', downloadError)
      console.error('Error stack:', downloadError?.stack)

      try {
        const existingFiles = await fs.readdir(tempDir)
      } catch {}

      try {
        const files = await fs.readdir(tempDir)
        for (const file of files) {
          await fs.unlink(path.join(tempDir, file)).catch(() => {})
        }
        await fs.rmdir(tempDir).catch(() => {})
      } catch (cleanupError) {
        console.error('Cleanup error:', cleanupError)
      }

      let errorMessage = downloadError?.message || 'Failed to download playlist.'

      if (errorMessage.includes('timeout')) {
        errorMessage = 'Playlist download timed out. The playlist may be too large. Try downloading individual videos instead.'
      } else if (errorMessage.includes('No files downloaded')) {
        errorMessage = 'No files were downloaded. The playlist may be empty, private, or contain unavailable videos.'
      } else if (errorMessage.includes('yt-dlp')) {
        errorMessage = 'Download tool error. Please try again or contact support if the issue persists.'
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
    console.error('YouTube playlist API error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error. Please try again later.'
      },
      { status: 500 }
    )
  }
}

