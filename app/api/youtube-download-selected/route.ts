import { NextRequest, NextResponse } from 'next/server'
import { exec, spawn } from 'child_process'
import { promises as fs } from 'fs'
import path from 'path'
import os from 'os'
import archiver from 'archiver'
import { promisify } from 'util'
import { setProgress, clearProgress } from '../youtube-download-progress/route'

const execAsync = promisify(exec)

export const maxDuration = 600
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { videos, format = 'mp4', videoTitles, downloadId: providedDownloadId } = await request.json()

    const downloadId = providedDownloadId || `playlist_${Date.now()}_${Math.random().toString(36).substring(7)}`

    if (videos && Array.isArray(videos) && videos.length > 0) {
      setProgress(downloadId, 0, 'starting', {
        totalVideos: videos.length,
        currentVideoIndex: 0,
        currentVideoTitle: '',
        videoProgress: 0
      })
    }

    if (!videos || !Array.isArray(videos) || videos.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Please select at least one video to download' },
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
    const ytDlpPath = path.join(binPath, 'yt-dlp')

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

    const tempDir = path.join(os.tmpdir(), `youtube-selected-${Date.now()}`)
    await fs.mkdir(tempDir, { recursive: true })

    try {
      const downloadedFiles: string[] = []
      const errors: string[] = []
      const totalVideos = videos.length

      for (let i = 0; i < videos.length; i++) {
        const video = videos[i]
        const videoUrl = typeof video === 'string' ? video : video.url
        const videoTitle = videoTitles?.[i] || `Video ${i + 1}`

        try {

          setProgress(downloadId, Math.floor((i / totalVideos) * 90), 'downloading', {
            currentVideoIndex: i + 1,
            currentVideoTitle: videoTitle,
            totalVideos,
            videoProgress: 0
          })

          const outputFilename = `video_${i + 1}.${format === 'mp4' ? 'mp4' : 'mp3'}`
          const outputPattern = path.join(tempDir, `video_${i + 1}`)

          let command: string
          if (format === 'mp3') {
            command = `"${ytDlpPath}" -x --audio-format mp3 --audio-quality 0 -o "${outputPattern}.%(ext)s" --newline --progress --no-check-certificate --no-playlist "${videoUrl}"`
          } else {
            command = `"${ytDlpPath}" -f "best[ext=mp4]/best[height<=720]/best" -o "${outputPattern}.%(ext)s" --newline --progress --no-check-certificate --no-playlist "${videoUrl}"`
          }

          const commandParts = command.match(/"([^"]+)"|([^\s"]+)/g)?.map((part: string) =>
            part.replace(/^"|"$/g, '')
          ) || []

          const ytDlpProcess = spawn(commandParts[0], commandParts.slice(1), {
            cwd: tempDir,
            shell: false,
            env: {
              ...process.env,
              PATH: process.env.PATH || '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin',
            }
          })

          let stdout = ''
          let stderr = ''

          ytDlpProcess.stdout.on('data', (data: Buffer) => {
            const output = data.toString()
            stdout += output

            const progressMatch = output.match(/\[download\]\s+(\d+\.?\d*)%/)
            if (progressMatch) {
              const videoProgressPercent = parseFloat(progressMatch[1])

              const overallProgress = Math.floor(
                (i / totalVideos) * 90 + (videoProgressPercent / 100) * (90 / totalVideos)
              )

              setProgress(downloadId, overallProgress, 'downloading', {
                currentVideoIndex: i + 1,
                currentVideoTitle: videoTitle,
                totalVideos,
                videoProgress: Math.round(videoProgressPercent)
              })

            }
          })

          ytDlpProcess.stderr.on('data', (data: Buffer) => {
            stderr += data.toString()
          })

          await new Promise<void>((resolve, reject) => {
            if (!ytDlpProcess) {
              reject(new Error('yt-dlp process is null'))
              return
            }

            ytDlpProcess.on('close', (code: number) => {
              if (code !== 0) {
                reject(new Error(`yt-dlp exited with code ${code}`))
              } else {
                resolve()
              }
            })

            ytDlpProcess.on('error', (error: Error) => {
              reject(error)
            })
          })

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

          setProgress(downloadId, Math.floor(((i + 1) / totalVideos) * 90), 'downloading', {
            currentVideoIndex: i + 1,
            currentVideoTitle: videoTitle,
            totalVideos,
            videoProgress: 100
          })
        } catch (videoError: any) {
          console.error(`Error downloading video ${i + 1}:`, videoError)
          errors.push(`Video ${i + 1} (${videoTitle}): ${videoError.message || 'Download failed'}`)

          setProgress(downloadId, Math.floor(((i + 1) / totalVideos) * 90), 'downloading', {
            currentVideoIndex: i + 1,
            currentVideoTitle: videoTitle,
            totalVideos,
            videoProgress: 0
          })
        }
      }

      setProgress(downloadId, 95, 'processing', {
        currentVideoIndex: totalVideos,
        totalVideos
      })

      if (downloadedFiles.length === 0) {
        throw new Error('No files were successfully downloaded. ' + (errors.length > 0 ? errors.join('; ') : ''))
      }

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

      const zipFilename = `youtube-videos-${Date.now()}.zip`

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

            setProgress(downloadId, 100, 'complete', {
              currentVideoIndex: totalVideos,
              totalVideos
            })

            for (const file of downloadedFiles) {
              await fs.unlink(path.join(tempDir, file)).catch(() => {})
            }
            await fs.rmdir(tempDir).catch(() => {})

            const response = new NextResponse(zipBuffer, {
              status: 200,
              headers: {
                'Content-Type': 'application/zip',
                'Content-Disposition': `attachment; filename="${zipFilename}"`,
                'Content-Length': zipBuffer.length.toString(),
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'X-Download-ID': downloadId,
              },
            })

            setTimeout(() => clearProgress(downloadId), 5000)

            resolve(response)
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

      try {
        const files = await fs.readdir(tempDir)
        for (const file of files) {
          await fs.unlink(path.join(tempDir, file)).catch(() => {})
        }
        await fs.rmdir(tempDir).catch(() => {})
      } catch {}

      setProgress(downloadId, 0, 'error')
      clearProgress(downloadId)

      return NextResponse.json(
        {
          success: false,
          message: downloadError?.message || 'Failed to download videos.'
        },
        { status: 500 }
      )
    }
  } catch (error: any) {
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

