import { NextRequest, NextResponse } from 'next/server'
import { spawn } from 'child_process'
import { promises as fs, createReadStream } from 'fs'
import path from 'path'
import os from 'os'
import archiver from 'archiver'
import { Readable } from 'stream'

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
  const downloadId = `playlist_${Date.now()}_${Math.random().toString(36).substring(7)}`

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
    const ytDlpPath = path.join(projectRoot, 'bin', 'yt-dlp')

    try {
      await fs.access(ytDlpPath)
    } catch {
      return NextResponse.json(
        { success: false, message: 'yt-dlp not found in bin directory.' },
        { status: 500 }
      )
    }

    tempDir = path.join(os.tmpdir(), `yt-playlist-${downloadId}`)
    await fs.mkdir(tempDir, { recursive: true })

    const getPlaylistVideos = () => {
      return new Promise<any[]>((resolve, reject) => {
        const proc = spawn(ytDlpPath, [
          '--flat-playlist',
          '--dump-single-json',
          '--no-warnings',
          url
        ])

        let stdout = ''
        let stderr = ''

        proc.stdout.on('data', (data) => stdout += data.toString())
        proc.stderr.on('data', (data) => stderr += data.toString())

        proc.on('close', (code) => {
          if (code !== 0) {
            reject(new Error(`Failed to fetch playlist: ${stderr}`))
          } else {
            try {
              const data = JSON.parse(stdout)
              resolve(data.entries || [])
            } catch (e) {
              reject(new Error('Failed to parse playlist metadata'))
            }
          }
        })
      })
    }

    const videos = await getPlaylistVideos()

    if (videos.length === 0) {
      throw new Error('No videos found in playlist')
    }

    const videosToDownload = videos.slice(0, 50)

    const downloadVideo = async (video: any, index: number) => {
      const videoUrl = video.url || `https://www.youtube.com/watch?v=${video.id}`
      const outputPattern = path.join(tempDir, `video_${index + 1}`)

      let command: string
      if (format === 'mp3') {
        command = `"${ytDlpPath}" -x --audio-format mp3 --audio-quality 0 -o "${outputPattern}.%(ext)s" --newline --no-check-certificate --no-playlist "${videoUrl}"`
      } else {
        command = `"${ytDlpPath}" -f "best[ext=mp4]/best[height<=720]/best" -o "${outputPattern}.%(ext)s" --newline --no-check-certificate --no-playlist "${videoUrl}"`
      }

      const commandParts = command.match(/"([^"]+)"|([^\s"]+)/g)?.map((part: string) =>
        part.replace(/^"|"$/g, '')
      ) || []

      return new Promise<string>((resolve, reject) => {
        const proc = spawn(commandParts[0], commandParts.slice(1), {
          cwd: tempDir,
          shell: false,
          env: { ...process.env, PATH: process.env.PATH || '/usr/bin' }
        })

        proc.on('close', async (code) => {
          if (code !== 0) reject(new Error(`Process exited with code ${code}`))
          else {
            const files = await fs.readdir(tempDir)
            const found = files.find(f => f.startsWith(`video_${index + 1}.`))
            if (found) resolve(found)
            else reject(new Error('File not found after download'))
          }
        })

        proc.on('error', reject)
      })
    }

    const results = await Promise.allSettled(videosToDownload.map((v, i) => downloadVideo(v, i)))

    const downloadedFiles = results
      .filter(r => r.status === 'fulfilled')
      .map(r => (r as PromiseFulfilledResult<string>).value)

    if (downloadedFiles.length === 0) {
      throw new Error('No videos downloaded successfully')
    }

    const zipFilename = `playlist-${Date.now()}.zip`
    const archive = archiver('zip', { zlib: { level: 9 } })

    for (const file of downloadedFiles) {
      archive.file(path.join(tempDir, file), { name: file })
    }

    archive.finalize()

    archive.on('end', () => {
      fs.rm(tempDir, { recursive: true, force: true }).catch(() => { })
    })

    return new NextResponse(nodeStreamToWebStream(archive), {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${zipFilename}"`,
      }
    })

  } catch (error: any) {
    if (tempDir) {
      await fs.rm(tempDir, { recursive: true, force: true }).catch(() => { })
    }

    return NextResponse.json(
      { success: false, message: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}

