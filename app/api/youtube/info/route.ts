import { NextRequest, NextResponse } from 'next/server'
import { exec } from 'child_process'
import path from 'path'
import { promisify } from 'util'

const execAsync = promisify(exec)

export const dynamic = 'force-dynamic'

// Helper to fetch from external services
async function fetchExternalInfo(url: string) {
    // 1. OEmbed (Official but basic)
    try {
        const oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`
        const res = await fetch(oembedUrl)
        if (res.ok) {
            const data = await res.json()
            return {
                id: null, // Will extract from URL if needed
                title: data.title,
                thumbnail: data.thumbnail_url,
                uploader: data.author_name,
                duration: null,
                formats: [] // External APIs usually don't give formats list easily without more work
            }
        }
    } catch (e) {
        console.error('OEmbed error:', e)
    }
    return null
}

export async function POST(request: NextRequest) {
    try {
        const { url, type } = await request.json()

        if (!url) {
            return NextResponse.json(
                { success: false, error: 'URL is required' },
                { status: 400 }
            )
        }

        // Determine binary path
        const binDir = path.join(process.cwd(), 'bin')
        const ytDlpPath = path.join(binDir, process.platform === 'win32' ? 'yt-dlp.exe' : 'yt-dlp')

        let args = [
            `"${ytDlpPath}"`,
            type === 'playlist' ? '--dump-single-json' : '--dump-json', // Use appropriate dump flag
            '--no-warnings',
            '--no-check-certificate',
            '--prefer-free-formats',
            `"${url}"`
        ]

        if (type === 'playlist') {
            args.push('--flat-playlist')
        }

        const command = args.join(' ')

        try {
            // Try yt-dlp local first (Method A)
            const { stdout } = await execAsync(command, {
                maxBuffer: 10 * 1024 * 1024,
                timeout: 30000
            })

            const data = JSON.parse(stdout)
            return NextResponse.json(data)

        } catch (ytDlpError: any) {
            console.warn('Local yt-dlp failed, trying fallback...', ytDlpError.message)

            // Fallback (Method B) - External APIs
            // Only suitable for SINGLE VIDEO info, not playlists usually
            if (type !== 'playlist') {
                const fallbackData = await fetchExternalInfo(url)
                if (fallbackData) {
                    // Extract ID from URL for the frontend
                    const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
                    if (videoIdMatch) fallbackData.id = videoIdMatch[1];

                    return NextResponse.json(fallbackData)
                }
            }

            // If we are here, both methods failed
            return NextResponse.json(
                { success: false, error: 'Failed to fetch video information. Server may be blocked by YouTube.' },
                { status: 500 }
            )
        }

    } catch (error: any) {
        console.error('YouTube Info API error:', error)
        return NextResponse.json(
            { success: false, error: error.message || 'Internal server error' },
            { status: 500 }
        )
    }
}
