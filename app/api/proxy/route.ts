
import { NextRequest, NextResponse } from 'next/server';
import http from 'http';
import https from 'https';

// Use Node's native http/https modules to bypass undici's strict Content-Length validation
function fetchWithNativeHttp(url: string, headers: Record<string, string>): Promise<{
    statusCode: number;
    headers: http.IncomingHttpHeaders;
    body: Buffer;
}> {
    return new Promise((resolve, reject) => {
        const parsedUrl = new URL(url);
        const client = parsedUrl.protocol === 'https:' ? https : http;

        const options = {
            hostname: parsedUrl.hostname,
            port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
            path: parsedUrl.pathname + parsedUrl.search,
            method: 'GET',
            headers: headers,
            timeout: 30000,
        };

        const req = client.request(options, (res) => {
            // Handle redirects
            if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                fetchWithNativeHttp(new URL(res.headers.location, url).href, headers)
                    .then(resolve)
                    .catch(reject);
                return;
            }

            const chunks: Buffer[] = [];

            res.on('data', (chunk: Buffer) => {
                chunks.push(chunk);
            });

            res.on('end', () => {
                resolve({
                    statusCode: res.statusCode || 200,
                    headers: res.headers,
                    body: Buffer.concat(chunks),
                });
            });

            res.on('error', (err) => {
                // On error, return whatever we have so far instead of failing completely
                console.warn('[Proxy] Stream error, returning partial data:', err.message);
                resolve({
                    statusCode: res.statusCode || 200,
                    headers: res.headers,
                    body: Buffer.concat(chunks),
                });
            });
        });

        req.on('error', reject);
        req.on('timeout', () => {
            req.destroy();
            reject(new Error('Request timeout'));
        });

        req.end();
    });
}

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const url = searchParams.get('url');

    if (!url) {
        return new NextResponse('Missing URL parameter', { status: 400 });
    }

    try {
        const reqHeaders: Record<string, string> = {
            'User-Agent': 'VLC/3.0.18 LibVLC/3.0.18',
            'Accept': '*/*',
            'Connection': 'keep-alive',
        };

        // Forward cookies
        const cookieHeader = request.headers.get('cookie');
        if (cookieHeader) {
            reqHeaders['Cookie'] = cookieHeader;
        }

        // Set referer to stream's domain
        try {
            const streamUrl = new URL(url);
            reqHeaders['Referer'] = `${streamUrl.protocol}//${streamUrl.host}/`;
        } catch {
            // Ignore
        }

        console.log(`[Proxy] Fetching: ${url.substring(0, 80)}...`);

        const response = await fetchWithNativeHttp(url, reqHeaders);

        console.log(`[Proxy] Status: ${response.statusCode}, Size: ${response.body.length} bytes`);

        if (response.statusCode !== 200) {
            return new NextResponse(`Failed: ${response.statusCode}`, { status: response.statusCode });
        }

        const headers = new Headers();
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
        headers.set('Cache-Control', 'no-cache');

        // Forward Set-Cookie
        const setCookie = response.headers['set-cookie'];
        if (setCookie) {
            headers.set('Set-Cookie', Array.isArray(setCookie) ? setCookie.join(', ') : setCookie);
        }

        const contentType = response.headers['content-type'] || '';
        const isPlaylist = url.includes('.m3u8') || contentType.includes('mpegurl');

        if (isPlaylist) {
            const text = response.body.toString('utf-8');
            const baseUrl = new URL(url);

            console.log(`[Proxy] Playlist: ${text.length} chars`);

            if (text.trim().startsWith('<')) {
                console.error('[Proxy] ERROR: HTML instead of playlist');
                return new NextResponse('Upstream error', { status: 502 });
            }

            const rewritten = text.split('\n').map(line => {
                const trimmed = line.trim();
                if (!trimmed) return line;

                if (trimmed.startsWith('#')) {
                    return line.replace(/URI="([^"]+)"/g, (match, uri) => {
                        try {
                            return `URI="${new URL(uri, baseUrl).href}"`;
                        } catch {
                            return match;
                        }
                    });
                } else {
                    try {
                        return new URL(trimmed, baseUrl).href;
                    } catch {
                        return line;
                    }
                }
            }).join('\n');

            headers.set('Content-Type', 'application/vnd.apple.mpegurl');
            return new NextResponse(rewritten, { status: 200, headers });

        } else {
            // Binary segment
            if (url.includes('.ts')) {
                headers.set('Content-Type', 'video/mp2t');
            } else if (url.includes('.aac')) {
                headers.set('Content-Type', 'audio/aac');
            } else {
                headers.set('Content-Type', contentType || 'application/octet-stream');
            }

            // Convert Buffer to Uint8Array for NextResponse compatibility
            return new NextResponse(new Uint8Array(response.body), { status: 200, headers });
        }

    } catch (error) {
        console.error('[Proxy] Exception:', error);
        return new NextResponse(null, { status: 204 });
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
