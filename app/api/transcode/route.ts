import { NextRequest, NextResponse } from 'next/server';
import { spawn, ChildProcess } from 'child_process';

// Store active transcoding sessions
const sessions = new Map<string, {
    process: ChildProcess;
    lastAccess: number;
    clients: number;
}>();

// Cleanup old sessions every 30 seconds
setInterval(() => {
    const now = Date.now();
    for (const [sessionId, session] of sessions.entries()) {
        // Kill sessions idle for more than 60 seconds
        if (now - session.lastAccess > 60000 && session.clients === 0) {
            console.log(`[Transcode] Killing idle session: ${sessionId}`);
            session.process.kill('SIGTERM');
            sessions.delete(sessionId);
        }
    }
}, 30000);

function createSessionId(url: string): string {
    // Create a deterministic session ID from URL
    let hash = 0;
    for (let i = 0; i < url.length; i++) {
        const char = url.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return `session_${Math.abs(hash)}`;
}

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const url = searchParams.get('url');

    if (!url) {
        return new NextResponse('Missing URL parameter', { status: 400 });
    }

    console.log(`[Transcode] Request for: ${url}`);

    const sessionId = createSessionId(url);
    let session = sessions.get(sessionId);

    // If session exists, update access time
    if (session) {
        session.lastAccess = Date.now();
        session.clients++;
    }

    // Start FFmpeg transcoding
    // Output: fragmented MP4 (fMP4) which is compatible with MSE
    const ffmpegArgs = [
        '-hide_banner',
        '-loglevel', 'warning',
        // Input
        '-user_agent', 'VLC/3.0.18 LibVLC/3.0.18',
        '-i', url,
        // Video: copy if H.264, otherwise transcode
        '-c:v', 'libx264',
        '-preset', 'ultrafast',
        '-tune', 'zerolatency',
        '-profile:v', 'baseline',
        '-level', '3.1',
        '-b:v', '2M',
        '-maxrate', '2.5M',
        '-bufsize', '5M',
        // Audio: transcode to AAC
        '-c:a', 'aac',
        '-b:a', '128k',
        '-ar', '44100',
        '-ac', '2',
        // Output format: HLS for browser
        '-f', 'hls',
        '-hls_time', '2',
        '-hls_list_size', '5',
        '-hls_flags', 'delete_segments+append_list+omit_endlist',
        '-hls_segment_type', 'mpegts',
        '-hls_segment_filename', `/tmp/hls_${sessionId}_%03d.ts`,
        `/tmp/hls_${sessionId}.m3u8`,
    ];

    // High quality streaming - transcode to browser-compatible format
    const ffmpegArgsStream = [
        '-hide_banner',
        '-loglevel', 'error',
        // Input - use VLC user agent
        '-user_agent', 'VLC/3.0.18 LibVLC/3.0.18',
        '-reconnect', '1',
        '-reconnect_streamed', '1',
        '-reconnect_delay_max', '5',
        '-i', url,
        // Video: HIGH QUALITY H.264 transcoding
        '-c:v', 'libx264',
        '-preset', 'veryfast',  // Better quality than ultrafast
        '-tune', 'zerolatency',
        '-profile:v', 'high',   // High profile for better quality
        '-crf', '18',           // Near-lossless quality (lower = better, 18-23 is good)
        '-maxrate', '6M',       // High bitrate limit
        '-bufsize', '12M',
        '-pix_fmt', 'yuv420p',  // Browser compatible pixel format
        // Audio: high quality AAC
        '-c:a', 'aac',
        '-b:a', '192k',
        '-ar', '48000',
        '-ac', '2',
        // Output: MPEG-TS to stdout
        '-f', 'mpegts',
        '-',
    ];

    const ffmpeg = spawn('ffmpeg', ffmpegArgsStream);

    // Handle FFmpeg errors
    ffmpeg.stderr.on('data', (data) => {
        console.error(`[FFmpeg] ${data.toString()}`);
    });

    ffmpeg.on('error', (err) => {
        console.error(`[FFmpeg] Process error:`, err);
    });

    ffmpeg.on('exit', (code) => {
        console.log(`[FFmpeg] Process exited with code ${code}`);
    });

    // Stream FFmpeg output to client
    const readableStream = new ReadableStream({
        start(controller) {
            ffmpeg.stdout.on('data', (chunk) => {
                try {
                    controller.enqueue(new Uint8Array(chunk));
                } catch (e) {
                    // Client disconnected
                    ffmpeg.kill('SIGTERM');
                }
            });

            ffmpeg.stdout.on('end', () => {
                try {
                    controller.close();
                } catch (e) {
                    // Already closed
                }
            });

            ffmpeg.stdout.on('error', () => {
                try {
                    controller.close();
                } catch (e) {
                    // Already closed
                }
            });
        },
        cancel() {
            console.log('[Transcode] Client disconnected, killing FFmpeg');
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
