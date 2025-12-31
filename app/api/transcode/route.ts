import { NextRequest, NextResponse } from 'next/server';
import { spawn } from 'child_process';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const url = searchParams.get('url');

    if (!url) {
        return new NextResponse('Missing URL parameter', { status: 400 });
    }

    console.log(`[Transcode] Starting FFmpeg for: ${url}`);

    // High quality FFmpeg transcoding
    const ffmpegArgs = [
        '-hide_banner',
        '-loglevel', 'error',
        // Input
        '-user_agent', 'VLC/3.0.18 LibVLC/3.0.18',
        '-reconnect', '1',
        '-reconnect_streamed', '1',
        '-reconnect_delay_max', '5',
        '-i', url,
        // Video: High quality H.264
        '-c:v', 'libx264',
        '-preset', 'veryfast',
        '-tune', 'zerolatency',
        '-profile:v', 'high',
        '-crf', '18',
        '-maxrate', '6M',
        '-bufsize', '12M',
        '-pix_fmt', 'yuv420p',
        // Audio: AAC
        '-c:a', 'aac',
        '-b:a', '192k',
        '-ar', '48000',
        '-ac', '2',
        // Output: MPEG-TS to stdout
        '-f', 'mpegts',
        '-',
    ];

    const ffmpeg = spawn('ffmpeg', ffmpegArgs);

    ffmpeg.stderr.on('data', (data) => {
        console.error(`[FFmpeg] ${data.toString()}`);
    });

    ffmpeg.on('error', (err) => {
        console.error(`[FFmpeg] Process error:`, err);
    });

    ffmpeg.on('exit', (code) => {
        console.log(`[FFmpeg] Exited with code ${code}`);
    });

    // Stream FFmpeg output to client
    const readableStream = new ReadableStream({
        start(controller) {
            ffmpeg.stdout.on('data', (chunk) => {
                try {
                    controller.enqueue(new Uint8Array(chunk));
                } catch {
                    ffmpeg.kill('SIGTERM');
                }
            });

            ffmpeg.stdout.on('end', () => {
                try {
                    controller.close();
                } catch {
                    // Already closed
                }
            });

            ffmpeg.stdout.on('error', () => {
                try {
                    controller.close();
                } catch {
                    // Already closed
                }
            });
        },
        cancel() {
            console.log('[Transcode] Client disconnected');
            ffmpeg.kill('SIGTERM');
        },
    });

    return new NextResponse(readableStream, {
        status: 200,
        headers: {
            'Content-Type': 'video/mp2t',
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Transfer-Encoding': 'chunked',
        },
    });
}

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': '*',
        },
    });
}
