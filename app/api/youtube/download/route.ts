import { NextRequest, NextResponse } from 'next/server'
import { spawn } from 'child_process'
import path from 'path'
import {getAntiBotArgs} from "@/lib/youtube-helper";

export const dynamic = 'force-dynamic'
export const maxDuration = 300 // 5 minutes max duration for serverless functions (if applicable)

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const url = searchParams.get('url')
    const type = searchParams.get('type') || 'video' // video | audio
    const formatId = searchParams.get('formatId')
    const filename = searchParams.get('filename') || 'download'
    const downloadToken = searchParams.get('downloadToken')

    if (!url) {
        return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    // Determine binary path
    const binDir = path.join(process.cwd(), 'bin')
    const ytDlpPath = path.join(binDir, process.platform === 'win32' ? 'yt-dlp.exe' : 'yt-dlp')

    // Prepare response headers
    const headers = new Headers()
    const ext = type === 'audio' ? 'mp3' : 'mp4'
    const safeFilename = filename.replace(/[^a-zA-Z0-9_\-\.]/g, '_')

    headers.set('Content-Disposition', `attachment; filename="${safeFilename}.${ext}"`)
    headers.set('Content-Type', type === 'audio' ? 'audio/mpeg' : 'video/mp4')

    // Set the cookie if token provided (for frontend progress tracking)
    if (downloadToken) {
        headers.set('Set-Cookie', `download_started=${downloadToken}; Path=/; Max-Age=300`)
    }

    // Use Shared Anti-Bot Args (Cookies, Proxy, User-Agent)
    const baseArgs = getAntiBotArgs()

    // Create stream manually to pipe child process stdout
    // Next.js App Router (node runtime) allows returning a stream

    const args = [
        ...baseArgs,
        '--no-playlist', // CRITICAL: Only download the specific video, even if URL has &list=
        '--output', '-', // Output to stdout
    ]

    if (type === 'audio') {
        // Audio download
        args.push('-x') // Extract audio
        args.push('--audio-format', 'mp3')
        args.push('--audio-quality', '0') // Best quality

        // Fallback if ffmpeg not available, yt-dlp might fail with -x
        // But user said "restore as it is", and previous used ytsave which likely used these.
    } else {
        // Video download
        if (formatId) {
            args.push('-f', `${formatId}+bestaudio/best`) // Try to merge best audio if format is video-only
        } else {
            args.push('-f', 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best')
        }
        args.push('--recode-video', 'mp4') // Ensure mp4
    }

    args.push(url)

    // console.log('Spawning download:', ytDlpPath, args.join(' '))

    const ytDlpProcess = spawn(ytDlpPath, args)

    // Create a ReadableStream from the child process stdout
    const stream = new ReadableStream({
        start(controller) {
            ytDlpProcess.stdout.on('data', (chunk) => {
                controller.enqueue(chunk)
            })

            ytDlpProcess.stdout.on('end', () => {
                controller.close()
            })

            ytDlpProcess.stderr.on('data', (data) => {
                // Log stderr but don't close stream unless error
                console.error(`yt-dlp stderr: ${data}`)
            })

            ytDlpProcess.on('error', (err) => {
                console.error('yt-dlp process error:', err)
                controller.error(err)
            })

            ytDlpProcess.on('close', (code) => {
                if (code !== 0) {
                    console.error(`yt-dlp exited with code ${code}`)
                }
            })
        },
        cancel() {
            ytDlpProcess.kill()
        }
    })

    return new NextResponse(stream, { headers })
}
