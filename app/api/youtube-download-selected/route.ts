import { NextRequest, NextResponse } from 'next/server'
import { spawn } from 'child_process'
import { promises as fs, createReadStream } from 'fs'
import path from 'path'
import os from 'os'
import archiver from 'archiver'
import { progressHelpers } from '../youtube-download-progress/route'
import { Readable } from 'stream'

const { setProgress, clearProgress } = progressHelpers

export const maxDuration = 300
export const dynamic = 'force-dynamic'

function nodeStreamToWebStream(nodeStream: Readable): ReadableStream {
  return new ReadableStream({
    start(controller) {
      nodeStream.on('data', (chunk) => controller.enqueue(chunk))
      nodeStream.on('end', () => controller.close())
      nodeStream.on('error', (err) => controller.error(err))
    },
    cancel() {
      nodeStream.destroy()
    },
  })
}

export async function POST(request: NextRequest) {
  let tempDir = ''
  let downloadId = ''

  try {
    const { videos, format = 'mp4', videoTitles, downloadId: providedDownloadId } = await request.json()

    downloadId = providedDownloadId || `playlist_${Date.now()}_${Math.random().toString(36).substring(7)}`

    if (!videos || !Array.isArray(videos) || videos.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Please select at least one video to download' },
        { status: 400 }
      )
    }

    setProgress(downloadId, 0, 'starting', {
      totalVideos: videos.length,
      currentVideoIndex: 0,
      currentVideoTitle: '',
      videoProgress: 0
    })

    if (format !== 'mp4' && format !== 'mp3') {
      return NextResponse.json(
        { success: false, message: 'Format must be mp4 or mp3' },
        { status: 400 }
      )
    }

    const projectRoot = process.cwd()
    const ytDlpPath = path.join(projectRoot, 'bin', 'yt-dlp')

    try {
      await fs.access(ytDlpPath)
    } catch {
      return NextResponse.json(
        { success: false, message: 'yt-dlp not found in bin directory.' },
        { status: 500 }
      )
    }

    tempDir = path.join(os.tmpdir(), `yt-dl-${downloadId}`)
    await fs.mkdir(tempDir, { recursive: true })

    const progressMap = new Map<number, number>()
    const updateOverallProgress = () => {
      let totalProgress = 0
      for (const p of progressMap.values()) {
        totalProgress += p
      }
      const overall = Math.floor((totalProgress / (videos.length * 100)) * 95)
      setProgress(downloadId, overall, 'downloading', {
        totalVideos: videos.length,
        currentVideoIndex: progressMap.size,
        videoProgress: Math.floor(totalProgress / videos.length)
      })
    }

    const downloadVideo = async (video: any, index: number) => {
      const videoUrl = typeof video === 'string' ? video : video.url
      const videoTitle = videoTitles?.[index] || `Video ${index + 1}`
      const outputPattern = path.join(tempDir, `video_${index + 1}`)

      // Create a temporary cookies file if env var exists
      let cookiesFilePath: string | null = null
      if (process.env.YOUTUBE_COOKIES) {
        const cookiesContent = process.env.YOUTUBE_COOKIES
        const cookiesFileName = `cookies-${Date.now()}-${Math.random().toString(36).substring(7)}.txt`
        cookiesFilePath = path.join(os.tmpdir(), cookiesFileName)
        await fs.writeFile(cookiesFilePath, cookiesContent)
      }

      let command: string
      if (format === 'mp3') {
        command = `"${ytDlpPath}" -x --audio-format mp3 --audio-quality 0 -o "${outputPattern}.%(ext)s" --newline --progress --no-check-certificate --no-playlist`
      } else {
        command = `"${ytDlpPath}" -f "best[ext=mp4]/best[height<=720]/best" -o "${outputPattern}.%(ext)s" --newline --progress --no-check-certificate --no-playlist`
      }

      if (cookiesFilePath) {
        command += ` --cookies "${cookiesFilePath}"`
      }

      command += ` "${videoUrl}"`

      const commandParts = command.match(/"([^"]+)"|([^\s"]+)/g)?.map((part: string) =>
        part.replace(/^"|"$/g, '')
      ) || []

      return new Promise<string>((resolve, reject) => {
        const proc = spawn(commandParts[0], commandParts.slice(1), {
          cwd: tempDir,
          shell: false,
          env: { ...process.env, PATH: process.env.PATH || '/usr/bin' }
        })

        proc.stdout.on('data', (data) => {
          const output = data.toString()
          const match = output.match(/\[download\]\s+(\d+\.?\d*)%/)
          if (match) {
            const p = parseFloat(match[1])
            progressMap.set(index, p)
            updateOverallProgress()
          }
        })

        proc.on('close', async (code) => {
          // Clean up cookies file
          if (cookiesFilePath) {
            try {
              await fs.unlink(cookiesFilePath)
            } catch (e) {
              // Ignore cleanup error
            }
          }

          if (code !== 0) reject(new Error(`Process exited with code ${code}`))
          else {
            const files = await fs.readdir(tempDir)
            const found = files.find(f => f.startsWith(`video_${index + 1}.`))
            if (found) resolve(found)
            else reject(new Error('File not found after download'))
          }
        })

        proc.on('error', async (err) => {
          // Clean up cookies file
          if (cookiesFilePath) {
            try {
              await fs.unlink(cookiesFilePath)
            } catch (e) {
              // Ignore cleanup error
            }
          }
          reject(err)
        })
      })
    }

    const downloadPromises = videos.map((v: any, i: number) => downloadVideo(v, i))
    const results = await Promise.all(downloadPromises)
    const downloadedFiles = results.filter(Boolean)

    if (downloadedFiles.length === 0) {
      throw new Error('No files downloaded successfully')
    }

    if (downloadedFiles.length === 1) {
      const filename = downloadedFiles[0]
      const filePath = path.join(tempDir, filename)
      const stats = await fs.stat(filePath)
      const stream = createReadStream(filePath)

      stream.on('close', () => {
        fs.rm(tempDir, { recursive: true, force: true }).catch(() => { })
        clearProgress(downloadId)
      })

      return new NextResponse(nodeStreamToWebStream(stream), {
        headers: {
          'Content-Type': format === 'mp4' ? 'video/mp4' : 'audio/mpeg',
          'Content-Disposition': `attachment; filename="${filename}"`,
          'Content-Length': stats.size.toString(),
        }
      })
    }

    const zipFilename = `youtube-videos-${Date.now()}.zip`
    const archive = archiver('zip', { zlib: { level: 9 } })

    for (const file of downloadedFiles) {
      archive.file(path.join(tempDir, file), { name: file })
    }

    archive.finalize()

    archive.on('end', () => {
      fs.rm(tempDir, { recursive: true, force: true }).catch(() => { })
      clearProgress(downloadId)
    })

    setProgress(downloadId, 100, 'complete')

    return new NextResponse(nodeStreamToWebStream(archive), {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${zipFilename}"`,
        'X-Download-ID': downloadId,
      }
    })

  } catch (error: any) {
    if (tempDir) {
      await fs.rm(tempDir, { recursive: true, force: true }).catch(() => { })
    }
    if (downloadId) {
      setProgress(downloadId, 0, 'error')
      clearProgress(downloadId)
    }

    return NextResponse.json(
      { success: false, message: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
