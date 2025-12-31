import { NextRequest, NextResponse } from 'next/server';

// Simple proxy for HLS streams - no transcoding, very low CPU
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const url = searchParams.get('url');

    if (!url) {
        return new NextResponse('Missing URL parameter', { status: 400 });
    }

    const reqHeaders: Record<string, string> = {
        'User-Agent': 'VLC/3.0.18 LibVLC/3.0.18',
        'Accept': '*/*',
    };

    try {
        const response = await fetch(url, { headers: reqHeaders });

        if (!response.ok) {
            return new NextResponse(null, { status: response.status });
        }

        const contentType = response.headers.get('content-type') || 'application/octet-stream';
        const text = await response.text();

        // If it's a playlist, rewrite URLs to go through proxy
        if (url.includes('.m3u8') || url.includes('.m3u')) {
            const baseUrl = new URL(url);
            const rewritten = text.split('\n').map(line => {
                const trimmed = line.trim();
                if (!trimmed || trimmed.startsWith('#')) {
                    // Handle URI in tags
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
                    'Cache-Control': 'no-cache',
                },
            });
        }

        // For segments, stream directly
        return new NextResponse(text, {
            headers: {
                'Content-Type': contentType,
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'no-cache',
            },
        });

    } catch {
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
