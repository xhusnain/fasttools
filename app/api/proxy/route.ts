import { NextRequest, NextResponse } from 'next/server';
import http from 'http';
import https from 'https';

// Simple proxy for HLS streams - mimics VLC media player behavior
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const url = searchParams.get('url');

    if (!url) {
        return new NextResponse('Missing URL parameter', { status: 400 });
    }

    try {
        const parsedUrl = new URL(url);
        const isHttps = parsedUrl.protocol === 'https:';

        // Use native http/https modules for better compatibility with IPTV servers
        // Some servers block fetch() but allow native http requests
        const data = await new Promise<{ buffer: Buffer; contentType: string; statusCode: number }>((resolve, reject) => {
            const options = {
                hostname: parsedUrl.hostname,
                port: parsedUrl.port || (isHttps ? 443 : 80),
                path: parsedUrl.pathname + parsedUrl.search,
                method: 'GET',
                timeout: 30000, // 30 second timeout
                headers: {
                    'User-Agent': 'VLC/3.0.18 LibVLC/3.0.18',
                    'Accept': '*/*',
                    'Accept-Language': 'en-US,en;q=0.9',
                    'Accept-Encoding': 'identity',
                    'Connection': 'keep-alive',
                    'Icy-MetaData': '1',
                    'Referer': parsedUrl.origin + '/',
                },
            };

            const httpModule = isHttps ? https : http;

            const req = httpModule.request(options, (res) => {
                const chunks: Buffer[] = [];

                res.on('data', (chunk: Buffer) => {
                    chunks.push(chunk);
                });

                res.on('end', () => {
                    const buffer = Buffer.concat(chunks);
                    resolve({
                        buffer,
                        contentType: res.headers['content-type'] || 'application/octet-stream',
                        statusCode: res.statusCode || 200,
                    });
                });

                res.on('error', reject);
            });

            req.on('error', (err) => {
                console.log(`[Proxy] Request error for ${url.substring(0, 60)}...`, err.message);
                reject(err);
            });

            req.on('timeout', () => {
                req.destroy();
                reject(new Error('Request timeout'));
            });

            req.end();
        });

        if (data.statusCode >= 400) {
            console.log(`[Proxy] Failed to fetch ${url.substring(0, 60)}... Status: ${data.statusCode}`);
            return new NextResponse(`Upstream error: ${data.statusCode}`, { status: data.statusCode });
        }

        const isPlaylist = url.includes('.m3u8') || url.includes('.m3u') ||
            data.contentType.includes('mpegurl') || data.contentType.includes('x-mpegurl');

        // If it's a playlist, rewrite URLs to go through proxy
        if (isPlaylist) {
            const text = data.buffer.toString('utf-8');

            // Check if playlist is empty or invalid
            if (!text || text.trim().length === 0) {
                console.log(`[Proxy] Empty playlist received for ${url.substring(0, 60)}...`);
                return new NextResponse('Empty playlist', { status: 404 });
            }

            const baseUrl = new URL(url);
            const rewritten = text.split('\n').map(line => {
                const trimmed = line.trim();
                if (!trimmed || trimmed.startsWith('#')) {
                    // Handle URI in tags (for encryption keys, etc.)
                    return line.replace(/URI="([^"]+)"/g, (match, uri) => {
                        try {
                            const absoluteUrl = new URL(uri, baseUrl).href;
                            return `URI="/api/proxy?url=${encodeURIComponent(absoluteUrl)}"`;
                        } catch {
                            return match;
                        }
                    });
                }
                // Rewrite segment URLs
                if (trimmed.startsWith('http')) {
                    return `/api/proxy?url=${encodeURIComponent(trimmed)}`;
                } else if (!trimmed.startsWith('#')) {
                    try {
                        const absoluteUrl = new URL(trimmed, baseUrl).href;
                        return `/api/proxy?url=${encodeURIComponent(absoluteUrl)}`;
                    } catch {
                        return line;
                    }
                }
                return line;
            }).join('\n');

            return new NextResponse(rewritten, {
                headers: {
                    'Content-Type': 'application/vnd.apple.mpegurl',
                    'Access-Control-Allow-Origin': '*',
                    'Cache-Control': 'no-cache, no-store',
                },
            });
        }

        // For binary segments, return the raw buffer
        return new NextResponse(data.buffer, {
            headers: {
                'Content-Type': data.contentType,
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'no-cache, no-store',
            },
        });

    } catch (error: any) {
        console.error(`[Proxy] Error fetching ${url.substring(0, 60)}...`, error.message);
        return new NextResponse(`Proxy error: ${error.message}`, { status: 502 });
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
