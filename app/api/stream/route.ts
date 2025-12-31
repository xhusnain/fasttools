
import { NextRequest, NextResponse } from 'next/server';
import { spawn, ChildProcess } from 'child_process';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const activeProcesses = new Map<string, ChildProcess>();

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const url = searchParams.get('url');

    if (!url) {
        return new NextResponse('Missing URL parameter', { status: 400 });
    }

    const processId = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    console.log(`[Stream ${processId}] Starting FFmpeg transcode for:`, url.substring(0, 80));

    try {
        // Use FFmpeg to transcode to browser-compatible H.264/AAC
        // Optimized for LIVE streaming with fast startup
        const ffmpeg = spawn('ffmpeg', [
            '-hide_banner',
            '-loglevel', 'warning',
            // Input options for live IPTV streams
            '-reconnect', '1',
            '-reconnect_streamed', '1',
            '-reconnect_delay_max', '5',
            '-user_agent', 'VLC/3.0.18 LibVLC/3.0.18',
            '-fflags', '+genpts+discardcorrupt+nobuffer',
            '-flags', 'low_delay',
            '-analyzeduration', '1000000',    // 1 second analysis (faster start)
            '-probesize', '1000000',          // 1MB probe (faster start)
            '-i', url,
            // Video: Fast H.264 encoding for real-time
            '-c:v', 'libx264',
            '-preset', 'ultrafast',
            '-tune', 'zerolatency',
            '-vf', 'scale=-2:480,yadif=0',    // Scale to 480p + simple de-interlace (much faster)
            '-profile:v', 'baseline',          // Simplest profile for fastest encoding
            '-level', '3.1',
            '-pix_fmt', 'yuv420p',
            '-b:v', '1000k',                   // Lower bitrate for faster encoding
            '-maxrate', '1200k',
            '-bufsize', '2000k',
            '-g', '30',                        // Keyframe every 1 second at 30fps
            '-keyint_min', '15',
            // Audio: Quick AAC
            '-c:a', 'aac',
            '-b:a', '96k',                     // Lower audio bitrate
            '-ac', '2',
            '-ar', '44100',
            // Output: Fragmented MP4 for streaming
            '-f', 'mp4',
            '-movflags', 'frag_keyframe+empty_moov+default_base_moof',
            '-frag_duration', '500000',        // 0.5 second fragments (faster start)
            'pipe:1',
        ], {
            stdio: ['pipe', 'pipe', 'pipe'],
        });

        activeProcesses.set(processId, ffmpeg);

        let dataReceived = false;
        const stream = new ReadableStream({
            start(controller) {
                let bytesSent = 0;

                ffmpeg.stdout.on('data', (chunk: Buffer) => {
                    dataReceived = true;
                    try {
                        controller.enqueue(new Uint8Array(chunk));
                        bytesSent += chunk.length;
                    } catch {
                        // Controller might be closed
                    }
                });

                ffmpeg.stdout.on('end', () => {
                    console.log(`[Stream ${processId}] Finished. Sent ${(bytesSent / 1024 / 1024).toFixed(2)} MB`);
                    try {
                        controller.close();
                    } catch {
                        // Already closed
                    }
                    activeProcesses.delete(processId);
                });

                ffmpeg.stderr.on('data', (data: Buffer) => {
                    const msg = data.toString().trim();
                    if (msg) {
                        console.error(`[FFmpeg ${processId}]`, msg);
                    }
                });

                ffmpeg.on('error', (err) => {
                    console.error(`[FFmpeg ${processId}] Error:`, err.message);
                    try {
                        if (!dataReceived) {
                            controller.error(err);
                        } else {
                            controller.close();
                        }
                    } catch {
                        // Ignore
                    }
                    activeProcesses.delete(processId);
                });

                ffmpeg.on('close', (code) => {
                    if (code !== 0 && code !== null) {
                        console.log(`[FFmpeg ${processId}] Exited with code:`, code);
                    }
                    try {
                        controller.close();
                    } catch {
                        // Already closed
                    }
                    activeProcesses.delete(processId);
                });
            },
            cancel() {
                console.log(`[Stream ${processId}] Client disconnected`);
                ffmpeg.kill('SIGTERM');
                activeProcesses.delete(processId);
            },
        });

        const headers = new Headers();
        headers.set('Content-Type', 'video/mp4');
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Cache-Control', 'no-cache, no-store');
        headers.set('Connection', 'keep-alive');

        return new NextResponse(stream, {
            status: 200,
            headers,
        });

    } catch (error) {
        console.error(`[Stream] Error:`, error);
        return new NextResponse(`FFmpeg Error: ${error}`, { status: 500 });
    }
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

// Cleanup on module unload
if (typeof process !== 'undefined') {
    const cleanup = () => {
        activeProcesses.forEach((proc, id) => {
            console.log(`[Cleanup] Killing FFmpeg process ${id}`);
            proc.kill('SIGTERM');
        });
    };
    process.on('SIGTERM', cleanup);
    process.on('SIGINT', cleanup);
}
