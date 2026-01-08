import { NextRequest, NextResponse } from 'next/server'
import { execFile } from 'child_process'
import path from 'path'
import { promisify } from 'util'
import { getAntiBotArgs } from "@/lib/youtube-helper";

const execFileAsync = promisify(execFile)

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

        const baseArgs = getAntiBotArgs();

        // Construct args array (NOT joined string)
        let args = [
            type === 'playlist' ? '--dump-single-json' : '--dump-json',
            ...baseArgs,
            url
        ]

        if (type === 'playlist') {
            args.push('--flat-playlist')
        } else {
            args.push('--no-playlist')
        }

        try {
            // Try yt-dlp local first (Method A)
            // execFile takes the command, then args array. No shell involved.
            const { stdout } = await execFileAsync(ytDlpPath, args, {
                maxBuffer: 10 * 1024 * 1024,
                timeout: 30000
            })

            const data = JSON.parse(stdout)
            return NextResponse.json(data)

        } catch (ytDlpError: any) {
            console.warn('Local yt-dlp failed, trying fallback (Method B - Invidious/External)...', ytDlpError.message)

            // Fallback (Method B) - Invidious API (Community Proxy)
            // Much better than OEmbed as it gives formats and full metadata
            if (type !== 'playlist') {
                const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
                const videoId = videoIdMatch ? videoIdMatch[1] : null;

                if (videoId) {
                    try {
                        // Try a specific stable instance
                        const invidiousApiUrl = `https://inv.tux.pizza/api/v1/videos/${videoId}`;
                        const res = await fetch(invidiousApiUrl);
                        if (res.ok) {
                            const invData = await res.json();
                            // Map Invidious response to yt-dlp format (roughly)
                            const mappedData = {
                                id: invData.videoId,
                                title: invData.title,
                                thumbnail: invData.videoThumbnails?.[0]?.url || null,
                                uploader: invData.author,
                                duration: invData.lengthSeconds,
                                formats: invData.formatStreams?.map((f: any) => ({
                                    format_id: f.itag,
                                    url: f.url,
                                    ext: f.container,
                                    height: f.resolution === '720p' ? 720 : (f.resolution === '1080p' ? 1080 : 360), // approximate
                                    // Invidious URLs are proxy URLs, so they work!
                                })) || []
                            };
                            return NextResponse.json(mappedData);
                        }
                    } catch (invErr) {
                        console.error('Invidious fallback failed:', invErr);
                    }
                }

                // Final Fallback: OEmbed (Basic info only)
                const fallbackData: any = await fetchExternalInfo(url)
                if (fallbackData) {
                    if (videoId) fallbackData.id = videoId;
                    if (!fallbackData.formats) {
                        fallbackData.formats = [{ format_id: 'best', height: 720, ext: 'mp4' }];
                    }
                    return NextResponse.json(fallbackData)
                }
            }

            return NextResponse.json(
                { success: false, error: 'Failed to fetch video information. Server blocked by YouTube.' },
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
