import { NextRequest, NextResponse } from 'next/server'
import { exec } from 'child_process'
import { promises as fs } from 'fs'
import { promisify } from 'util'

const execAsync = promisify(exec)

export const maxDuration = 60
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

    if (format !== 'mp4' && format !== 'mp3') {
      return NextResponse.json(
        { success: false, message: 'Format must be mp4 or mp3' },
        { status: 400 }
      )
    }

    const projectRoot = process.cwd()

    const possiblePaths = [
      '/app/bin/yt-dlp',
      path.join(projectRoot, 'bin', 'yt-dlp'),
      path.join('/app', 'bin', 'yt-dlp'),
      path.join(projectRoot, '..', 'bin', 'yt-dlp'),
      path.join(projectRoot, '../..', 'bin', 'yt-dlp'),
      path.resolve(projectRoot, 'bin', 'yt-dlp'),
      path.resolve('/app', 'bin', 'yt-dlp'),
    ]

    let ytDlpPath: string | null = null

    for (const possiblePath of possiblePaths) {
      try {
        await fs.access(possiblePath)
        const stats = await fs.stat(possiblePath)
        if (stats.isFile()) {
          ytDlpPath = possiblePath
          break
        }
      } catch (err: any) {}
    }

    if (!ytDlpPath) {
      console.error('❌ yt-dlp not found in any of the checked locations')
      return NextResponse.json(
        {
          success: false,
          message: 'yt-dlp binary not found. Please check server configuration.'
        },
        { status: 500 }
      )
    }

    try {
      await execAsync(`"${ytDlpPath}" --version`, { timeout: 5000 })
    } catch (versionError: any) {
      console.error('❌ yt-dlp version check failed:', versionError.message)
      return NextResponse.json(
        {
          success: false,
          message: `yt-dlp found but not executable. Error: ${versionError.message}`
        },
        { status: 500 }
      )
    }

    try {

      let formatSelector: string
      if (format === 'mp3') {

        formatSelector = 'bestaudio/best'
      } else {

        formatSelector = '18/22/best[ext=mp4]/bestvideo+bestaudio/best[height<=720]/best'
      }

      const command = `"${ytDlpPath}" -g -f "${formatSelector}" --no-check-certificate --no-playlist "${url}"`

      const { stdout, stderr } = await execAsync(command, {
        timeout: 30000,
        maxBuffer: 10 * 1024 * 1024
      })

      if (stderr && !stderr.includes('WARNING')) {
        console.error('yt-dlp stderr:', stderr)
      }

      const urls = stdout.trim().split('\n').filter(line => line.trim().startsWith('http'))

      if (urls.length === 0) {
        console.error('❌ No URLs returned from yt-dlp')
        console.error('yt-dlp stdout:', stdout)
        console.error('yt-dlp stderr:', stderr)
        return NextResponse.json(
          {
            success: false,
            message: 'Failed to extract download URL. The video may be unavailable or restricted.'
          },
          { status: 500 }
        )
      }

      let directUrl = urls[0]

      if (directUrl.includes('manifest.googlevideo.com') || directUrl.includes('.m3u8')) {

        try {
          const worstCommand = `"${ytDlpPath}" -g -f "worst[ext=mp4]/worst" --no-check-certificate --no-playlist "${url}"`
          const worstOutput = await execAsync(worstCommand, { timeout: 30000 })
          const worstUrls = worstOutput.stdout.trim().split('\n').filter(line =>
            line.trim().startsWith('http') &&
            !line.includes('manifest.googlevideo.com') &&
            !line.includes('.m3u8')
          )

          if (worstUrls.length > 0) {
            directUrl = worstUrls[0]
          }
        } catch (worstError) {}

        if (directUrl.includes('manifest.googlevideo.com') || directUrl.includes('.m3u8')) {
          try {

            const formatListCommand = `"${ytDlpPath}" -F --no-check-certificate --no-playlist "${url}"`
            const formatListOutput = await execAsync(formatListCommand, { timeout: 30000 })

            const formatLines = formatListOutput.stdout.split('\n')
            const candidateFormats: { id: string, quality: string }[] = []

            for (const line of formatLines) {

              if (line.includes('video') && (line.includes('mp4') || line.includes('webm'))) {

                if (line.includes('HLS') || line.includes('m3u8')) continue

                const formatMatch = line.match(/^(\d+)\s+(\w+)\s+(\d+x\d+|\d+p)/)
                if (formatMatch) {
                  candidateFormats.push({ id: formatMatch[1], quality: formatMatch[3] })
                }
              }
            }

            if (candidateFormats.length > 0) {
              for (const fmt of candidateFormats) {
                try {
                  const fmtCommand = `"${ytDlpPath}" -g -f "${fmt.id}" --no-check-certificate --no-playlist "${url}"`
                  const fmtOutput = await execAsync(fmtCommand, { timeout: 30000 })
                  const fmtUrls = fmtOutput.stdout.trim().split('\n').filter(line =>
                    line.trim().startsWith('http') &&
                    !line.includes('manifest.googlevideo.com') &&
                    !line.includes('.m3u8')
                  )

                  if (fmtUrls.length > 0) {
                    directUrl = fmtUrls[0]
                    break
                  }
                } catch (fmtError) {
                  continue
                }
              }
            }
          } catch (formatListError) {}
        }

        if (directUrl.includes('manifest.googlevideo.com') || directUrl.includes('.m3u8')) {
          return NextResponse.json({
            success: false,
            message: 'This video is only available in HLS format which cannot be downloaded directly. Please try a different video or use a different quality setting.',
            isHLS: true
          }, { status: 400 })
        }
      }

      let videoTitle = title || 'youtube-video'
      let videoAuthor = 'Unknown'

      try {

        const infoCommand = `"${ytDlpPath}" --get-title --get-id --no-check-certificate --no-playlist "${url}"`
        const infoOutput = await execAsync(infoCommand, { timeout: 10000 })
        const infoLines = infoOutput.stdout.trim().split('\n')
        if (infoLines[0]) {
          videoTitle = infoLines[0].trim()
        }
      } catch (infoError) {}

      const sanitizedTitle = videoTitle
        .replace(/[^\x00-\x7F]/g, '')
        .replace(/[<>:"/\\|?*]/g, '') // Remove invalid filename chars
.replace(/\s+/g, '_')
        .substring(0, 100) || 'youtube-video'

      let extension = format === 'mp4' ? 'mp4' : 'mp3'

      if (format === 'mp3' && directUrl.includes('.m4a')) {
        extension = 'm4a'
      } else if (format === 'mp3' && directUrl.includes('.webm')) {
        extension = 'webm'
      } else if (format === 'mp3' && directUrl.includes('.opus')) {
        extension = 'opus'
      }

      return NextResponse.json({
        success: true,
        downloadUrl: directUrl,
        filename: `${sanitizedTitle}.${extension}`,
        title: videoTitle,
        format: format,
        videoId: videoId || null,

        additionalUrls: urls.length > 1 ? urls.slice(1) : []
      })

    } catch (execError: any) {
      console.error('yt-dlp execution error:', execError)
      console.error('Error message:', execError.message)
      console.error('Error code:', execError.code)
      console.error('Error stdout:', execError.stdout)
      console.error('Error stderr:', execError.stderr)

      let errorMessage = 'Failed to extract download URL.'

      if (execError.stderr) {
        if (execError.stderr.includes('Private video')) {
          errorMessage = 'This video is private and cannot be downloaded.'
        } else if (execError.stderr.includes('Video unavailable')) {
          errorMessage = 'Video is unavailable or has been removed.'
        } else if (execError.stderr.includes('ERROR')) {
          const errorMatch = execError.stderr.match(/ERROR:\s*(.+)/)
          if (errorMatch) {
            errorMessage = `Error: ${errorMatch[1].substring(0, 200)}`
          }
        }
      }

      return NextResponse.json(
        {
          success: false,
          message: errorMessage
        },
        { status: 500 }
      )
    }
  } catch (error: any) {
    console.error('❌ YouTube download URL API error:', error)
    console.error('Error stack:', error?.stack)
    console.error('Error message:', error?.message)

    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error. Please try again later.'
      },
      { status: 500 }
    )
  }
}
