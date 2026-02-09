import { NextRequest, NextResponse } from 'next/server';

/**
 * IPTV Proxy Route
 * Bypasses CORS and Mixed Content restrictions for IPTV manifests (.m3u8) and segments (.ts)
 * Now includes basic manifest rewriting for relative paths
 */

export async function GET(request: NextRequest) {
    const url = request.nextUrl.searchParams.get('url');

    if (!url) {
        return NextResponse.json({ error: 'Missing URL parameter' }, { status: 400 });
    }

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout

        const response = await fetch(url, {
            signal: controller.signal,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': '*/*',
            },
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            return NextResponse.json(
                { error: `IPTV source returned ${response.status}: ${response.statusText}` },
                { status: response.status }
            );
        }

        const contentType = response.headers.get('content-type') || '';
        const isManifest = contentType.includes('mpegurl') || url.endsWith('.m3u8');

        if (isManifest) {
            let text = await response.text();

            // Basic base URL resolution for relative paths in manifest
            const baseUrl = new URL(url);
            const protocol = baseUrl.protocol;
            const host = baseUrl.host;
            const pathParts = baseUrl.pathname.split('/');
            pathParts.pop();
            const basePath = pathParts.join('/');

            const absoluteBase = `${protocol}//${host}${basePath}/`;

            // Simple regex to find lines that don't start with # and are not absolute URLs
            // and prefix them with the baseline or wrap them in proxy calls.
            const lines = text.split('\n');
            const rewrittenLines = lines.map(line => {
                const trimmed = line.trim();
                if (trimmed && !trimmed.startsWith('#') && !trimmed.startsWith('http')) {
                    // It's a relative path. Convert to absolute first.
                    const absoluteUrl = trimmed.startsWith('/')
                        ? `${protocol}//${host}${trimmed}`
                        : `${absoluteBase}${trimmed}`;

                    // Now wrap it in the proxy again to ensure segments also go through proxy
                    return `${request.nextUrl.origin}/api/iptv/proxy?url=${encodeURIComponent(absoluteUrl)}`;
                }
                // Handle absolute HTTP URLs - also wrap them to avoid Mixed Content
                if (trimmed.startsWith('http://')) {
                    return `${request.nextUrl.origin}/api/iptv/proxy?url=${encodeURIComponent(trimmed)}`;
                }
                return line;
            });

            const rewrittenManifest = rewrittenLines.join('\n');

            return new NextResponse(rewrittenManifest, {
                status: 200,
                headers: {
                    'Content-Type': 'application/vnd.apple.mpegurl',
                    'Access-Control-Allow-Origin': '*',
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                },
            });
        }

        // For non-manifest files (.ts segments), just pass through the bytes
        const data = await response.arrayBuffer();
        return new NextResponse(data, {
            status: 200,
            headers: {
                'Content-Type': contentType || 'video/MP2T',
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'public, max-age=3600', // Cache segments longer
            },
        });

    } catch (error: any) {
        console.error('IPTV proxy error:', error);
        if (error.name === 'AbortError') {
            return NextResponse.json({ error: 'Request timed out' }, { status: 504 });
        }
        return NextResponse.json({ error: 'Failed to fetch IPTV source' }, { status: 500 });
    }
}

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}
