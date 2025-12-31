import { NextRequest, NextResponse } from 'next/server';
import http from 'http';
import https from 'https';

// Aggressive segment cache with very short TTL
const segmentCache = new Map<string, { data: Buffer; timestamp: number }>();
const pendingFetches = new Map<string, Promise<Buffer | null>>();
const CACHE_TTL = 8000; // 8 seconds

function cleanCache() {
    const now = Date.now();
    for (const [key, value] of segmentCache.entries()) {
        if (now - value.timestamp > CACHE_TTL) {
            segmentCache.delete(key);
        }
    }
}

// Fast fetch with short timeout
function fetchWithTimeout(url: string, headers: Record<string, string>, timeout = 5000): Promise<{
    statusCode: number;
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
            timeout: timeout,
        };

        const req = client.request(options, (res) => {
            // Handle redirects
            if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                fetchWithTimeout(new URL(res.headers.location, url).href, headers, timeout)
                    .then(resolve)
                    .catch(reject);
                return;
            }

            const chunks: Buffer[] = [];
            res.on('data', (chunk) => chunks.push(chunk));
            res.on('end', () => {
                resolve({
                    statusCode: res.statusCode || 200,
                    body: Buffer.concat(chunks),
                });
            });
            res.on('error', () => {
                resolve({
                    statusCode: res.statusCode || 502,
                    body: Buffer.concat(chunks),
                });
            });
        });

        req.on('error', (err) => reject(err));
        req.on('timeout', () => {
            req.destroy();
            reject(new Error('Timeout'));
        });

        req.end();
    });
}

// Immediately fetch and cache a segment
async function fetchAndCacheSegment(url: string, headers: Record<string, string>): Promise<Buffer | null> {
    // Check if already cached
    const cached = segmentCache.get(url);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
        return cached.data;
    }

    // Check if already being fetched
    const pending = pendingFetches.get(url);
    if (pending) {
        return pending;
    }

    // Start fetch
    const fetchPromise = (async () => {
        try {
            const response = await fetchWithTimeout(url, headers, 3000);
            if (response.statusCode === 200 && response.body.length > 1000) {
                segmentCache.set(url, { data: response.body, timestamp: Date.now() });
                return response.body;
            }
            return null;
        } catch {
            return null;
        } finally {
            pendingFetches.delete(url);
        }
    })();

    pendingFetches.set(url, fetchPromise);
    return fetchPromise;
}

// Parse m3u8 and extract segment URLs
function parseM3u8ForSegments(content: string, baseUrl: URL): string[] {
    const segments: string[] = [];
    const lines = content.split('\n');

    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;

        try {
            if (trimmed.startsWith('http')) {
                segments.push(trimmed);
            } else {
                segments.push(new URL(trimmed, baseUrl).href);
            }
        } catch {
            // Ignore invalid URLs
        }
    }

    return segments;
}

export async function GET(request: NextRequest) {
    cleanCache();

    const searchParams = request.nextUrl.searchParams;
    const url = searchParams.get('url');

    if (!url) {
        return new NextResponse('Missing URL parameter', { status: 400 });
    }

    const reqHeaders: Record<string, string> = {
        'User-Agent': 'VLC/3.0.18 LibVLC/3.0.18',
        'Accept': '*/*',
        'Connection': 'keep-alive',
    };

    try {
        const streamUrl = new URL(url);
        reqHeaders['Referer'] = `${streamUrl.protocol}//${streamUrl.host}/`;
    } catch {
        // Ignore
    }

    const isPlaylist = url.includes('.m3u8') || url.includes('.m3u');
    const isSegment = url.includes('.ts') || url.includes('.aac') || url.includes('.mp4');
    const isProblematicServer = url.includes('66.102.120.18');

    try {
        if (isPlaylist) {
            const response = await fetchWithTimeout(url, reqHeaders, 5000);

            if (response.statusCode !== 200) {
                return new NextResponse(`Failed: ${response.statusCode}`, { status: response.statusCode });
            }

            const text = response.body.toString('utf-8');
            const baseUrl = new URL(url);

            if (text.trim().startsWith('<')) {
                return new NextResponse('Upstream error', { status: 502 });
            }

            // Check if this is a media playlist (has .ts files) 
            const isMediaPlaylist = text.includes('.ts') || text.includes('#EXTINF');

            // For problematic servers with media playlists, immediately start fetching segments
            if (isProblematicServer && isMediaPlaylist) {
                const segmentUrls = parseM3u8ForSegments(text, baseUrl);

                // Fetch ALL segments immediately in parallel (fire and forget)
                // This ensures segments are cached before they expire
                const fetchPromises = segmentUrls.map(segUrl =>
                    fetchAndCacheSegment(segUrl, reqHeaders)
                );

                // Wait for at least some segments to start loading (50ms)
                await Promise.race([
                    Promise.all(fetchPromises.slice(-3)), // Wait for last 3
                    new Promise(resolve => setTimeout(resolve, 100))
                ]);
            }

            // Rewrite URLs
            const rewritten = text.split('\n').map(line => {
                const trimmed = line.trim();
                if (!trimmed) return line;

                if (trimmed.startsWith('#')) {
                    return line.replace(/URI="([^"]+)"/g, (match, uri) => {
                        try {
                            const absoluteUrl = new URL(uri, baseUrl).href;
                            return `URI="/api/proxy?url=${encodeURIComponent(absoluteUrl)}"`;
                        } catch {
                            return match;
                        }
                    });
                } else if (trimmed.startsWith('http')) {
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
                status: 200,
                headers: {
                    'Content-Type': 'application/vnd.apple.mpegurl',
                    'Access-Control-Allow-Origin': '*',
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                },
            });
        }

        if (isSegment) {
            // For problematic servers, try cache first, then fetch if needed
            if (isProblematicServer) {
                // Check cache
                let data = segmentCache.get(url)?.data;

                if (!data) {
                    // Try to fetch immediately
                    data = (await fetchAndCacheSegment(url, reqHeaders)) || undefined;
                }

                if (data && data.length > 1000) {
                    return new NextResponse(new Uint8Array(data), {
                        status: 200,
                        headers: {
                            'Content-Type': 'video/mp2t',
                            'Access-Control-Allow-Origin': '*',
                            'Cache-Control': 'no-cache',
                            'Content-Length': data.length.toString(),
                        },
                    });
                }

                // Segment expired or failed - return 404 to let player skip
                return new NextResponse(null, {
                    status: 404,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    }
                });
            }

            // Normal streaming for other servers
            const response = await fetchWithTimeout(url, reqHeaders, 15000);

            if (response.statusCode !== 200) {
                return new NextResponse(null, { status: response.statusCode });
            }

            const contentType = url.includes('.ts') ? 'video/mp2t' :
                url.includes('.aac') ? 'audio/aac' :
                    'application/octet-stream';

            return new NextResponse(new Uint8Array(response.body), {
                status: 200,
                headers: {
                    'Content-Type': contentType,
                    'Access-Control-Allow-Origin': '*',
                    'Cache-Control': 'no-cache',
                    'Content-Length': response.body.length.toString(),
                },
            });
        }

        // Fallback
        const response = await fetchWithTimeout(url, reqHeaders, 10000);

        return new NextResponse(new Uint8Array(response.body), {
            status: response.statusCode,
            headers: {
                'Content-Type': 'application/octet-stream',
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'no-cache',
            },
        });

    } catch (error) {
        console.error('[Proxy] Error:', error);
        return new NextResponse(null, { status: 502 });
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
