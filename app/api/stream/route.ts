
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
        // Use FFmpeg to transcode and output as fragmented MP4
        // This format is directly playable in modern browsers
        const ffmpeg = spawn('ffmpeg', [
            '-hide_banner',
            '-loglevel', 'error',
            '-user_agent', 'VLC/3.0.18 LibVLC/3.0.18',
            '-fflags', '+genpts+discardcorrupt',  // Generate PTS and ignore corrupt frames
            '-i', url,
            '-c:v', 'copy',               // Copy video (no re-encode)
            '-c:a', 'aac',                // Transcode audio to AAC
            '-b:a', '128k',               // Audio bitrate
            '-ac', '2',                   // Stereo
            '-ar', '44100',               // Sample rate
            // Output as fragmented MP4 (works with MSE in browsers)
            '-f', 'mp4',
            '-movflags', 'frag_keyframe+empty_moov+default_base_moof+faststart',
            '-frag_duration', '1000000',  // 1 second fragments
            'pipe:1',                      // Output to stdout
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
