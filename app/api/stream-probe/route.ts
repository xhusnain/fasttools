
import { NextRequest, NextResponse } from 'next/server';
import { spawn } from 'child_process';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

interface StreamProbeResult {
    url: string;
    video_codec: string | null;
    audio_codec: string | null;
    is_interlaced: boolean;
    resolution: string | null;
    needs_transcode: boolean;
    browser_compatible: boolean;
    error?: string;
}

// Codecs that browsers can decode natively via MSE
const BROWSER_COMPATIBLE_VIDEO_CODECS = ['h264', 'avc1', 'vp8', 'vp9', 'av1'];
const BROWSER_COMPATIBLE_AUDIO_CODECS = ['aac', 'mp3', 'opus', 'vorbis', 'flac'];

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const url = searchParams.get('url');

    if (!url) {
        return NextResponse.json({ error: 'Missing URL parameter' }, { status: 400 });
    }

    console.log(`[StreamProbe] Probing: ${url.substring(0, 80)}...`);

    try {
        const probeResult = await probeStream(url);
        return NextResponse.json(probeResult, {
            status: 200,
            headers: {
                'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
            },
        });
    } catch (error) {
        console.error('[StreamProbe] Error:', error);
        return NextResponse.json({
            url,
            video_codec: null,
            audio_codec: null,
            is_interlaced: false,
            resolution: null,
            needs_transcode: true,
            browser_compatible: false,
            error: error instanceof Error ? error.message : 'Unknown error',
        } satisfies StreamProbeResult, { status: 200 });
    }
}

function probeStream(url: string): Promise<StreamProbeResult> {
    return new Promise((resolve, reject) => {
        const ffprobe = spawn('ffprobe', [
            '-v', 'error',
            '-user_agent', 'VLC/3.0.18 LibVLC/3.0.18',
            '-select_streams', 'v:0',
            '-show_entries', 'stream=codec_name,profile,width,height,field_order',
            '-of', 'json',
            url,
        ], {
            timeout: 15000, // 15 second timeout
        });

        let stdout = '';
        let stderr = '';

        ffprobe.stdout.on('data', (data: Buffer) => {
            stdout += data.toString();
        });

        ffprobe.stderr.on('data', (data: Buffer) => {
            stderr += data.toString();
        });

        ffprobe.on('close', async (code) => {
            if (code !== 0 && !stdout) {
                reject(new Error(`FFprobe exited with code ${code}: ${stderr}`));
                return;
            }

            try {
                const videoInfo = parseVideoInfo(stdout);
                const audioInfo = await probeAudioStream(url);

                const videoCodec = videoInfo.codec_name?.toLowerCase() || null;
                const audioCodec = audioInfo?.toLowerCase() || null;

                const isInterlaced = !!(videoInfo.field_order &&
                    !['progressive', 'unknown'].includes(videoInfo.field_order.toLowerCase()));

                const videoBrowserCompatible = videoCodec ?
                    BROWSER_COMPATIBLE_VIDEO_CODECS.some(c => videoCodec.includes(c)) : false;

                const audioBrowserCompatible = audioCodec ?
                    BROWSER_COMPATIBLE_AUDIO_CODECS.some(c => audioCodec.includes(c)) : true;

                const browserCompatible = videoBrowserCompatible && audioBrowserCompatible && !isInterlaced;
                const needsTranscode = !browserCompatible;

                const resolution = videoInfo.width && videoInfo.height
                    ? `${videoInfo.width}x${videoInfo.height}`
                    : null;

                console.log(`[StreamProbe] ${url.substring(0, 50)}... => ` +
                    `video:${videoCodec}, audio:${audioCodec}, interlaced:${isInterlaced}, ` +
                    `needs_transcode:${needsTranscode}`);

                resolve({
                    url,
                    video_codec: videoCodec,
                    audio_codec: audioCodec,
                    is_interlaced: isInterlaced,
                    resolution,
                    needs_transcode: needsTranscode,
                    browser_compatible: browserCompatible,
                });
            } catch (parseError) {
                reject(parseError);
            }
        });

        ffprobe.on('error', (err) => {
            reject(err);
        });
    });
}

function probeAudioStream(url: string): Promise<string | null> {
    return new Promise((resolve) => {
        const ffprobe = spawn('ffprobe', [
            '-v', 'error',
            '-user_agent', 'VLC/3.0.18 LibVLC/3.0.18',
            '-select_streams', 'a:0',
            '-show_entries', 'stream=codec_name',
            '-of', 'json',
            url,
        ], {
            timeout: 10000,
        });

        let stdout = '';

        ffprobe.stdout.on('data', (data: Buffer) => {
            stdout += data.toString();
        });

        ffprobe.on('close', () => {
            try {
                const parsed = JSON.parse(stdout);
                resolve(parsed.streams?.[0]?.codec_name || null);
            } catch {
                resolve(null);
            }
        });

        ffprobe.on('error', () => {
            resolve(null);
        });
    });
}

interface VideoStreamInfo {
    codec_name?: string;
    profile?: string;
    width?: number;
    height?: number;
    field_order?: string;
}

function parseVideoInfo(jsonStr: string): VideoStreamInfo {
    try {
        const parsed = JSON.parse(jsonStr);
        return parsed.streams?.[0] || {};
    } catch {
        return {};
    }
}
