import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

/**
 * Proxy route to force download of media files instead of playing them in browser
 * This route fetches the file and returns it with Content-Disposition: attachment header
 */
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const url = searchParams.get('url');
    const filename = searchParams.get('filename') || 'download';
    const headersParam = searchParams.get('headers'); // JSON string of httpHeaders from API

    if (!url) {
        return new NextResponse('Missing URL parameter', { status: 400 });
    }

    try {
        // Decode the URL
        const decodedUrl = decodeURIComponent(url);
        
        // Prepare headers for the fetch request
        const headers: Record<string, string> = {};
        
        // If httpHeaders are provided from API response, use them (most reliable)
        if (headersParam) {
            try {
                const apiHeaders = JSON.parse(decodeURIComponent(headersParam));
                Object.assign(headers, apiHeaders);
            } catch (e) {
                console.warn('[DownloadProxy] Failed to parse headers param:', e);
            }
        }
        
        // Fallback: Add headers based on URL if not provided by API
        if (Object.keys(headers).length === 0) {
            // Add Referer header for video URLs (required by some CDNs like Google Video)
            if (decodedUrl.includes('googlevideo.com') || decodedUrl.includes('youtube.com') || decodedUrl.includes('ytimg.com')) {
                headers['Referer'] = request.headers.get('origin') || request.headers.get('referer') || 'https://www.fasttools.store';
            }
            
            // Add Referer and User-Agent headers for TikTok URLs (required by TikTok CDN)
            if (decodedUrl.includes('tiktok.com') || decodedUrl.includes('tiktokcdn.com') || decodedUrl.includes('webapp-prime.tiktok.com')) {
                headers['Referer'] = 'https://www.tiktok.com/';
                headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
            }
            
            // Add Referer header for Instagram URLs
            if (decodedUrl.includes('instagram.com') || decodedUrl.includes('cdninstagram.com')) {
                headers['Referer'] = 'https://www.instagram.com/';
                headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
            }
            
            // Add Referer header for Facebook URLs
            if (decodedUrl.includes('facebook.com') || decodedUrl.includes('fb.com') || decodedUrl.includes('fbcdn.net')) {
                headers['Referer'] = 'https://www.facebook.com/';
                headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
            }
            
            // Add Referer header for Twitter/X URLs
            if (decodedUrl.includes('twitter.com') || decodedUrl.includes('x.com') || decodedUrl.includes('twimg.com')) {
                headers['Referer'] = 'https://twitter.com/';
                headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
            }
        }

        // Fetch the file with streaming to handle large files efficiently
        // No timeout - let the stream handle it naturally
        const response = await fetch(decodedUrl, {
            headers,
            redirect: 'follow',
            // For TikTok, we might need to handle redirects differently
            ...(decodedUrl.includes('tiktok.com') && {
                // TikTok URLs might need specific fetch options
                cache: 'no-store',
            }),
        });

        if (!response.ok) {
            // Log more details for debugging
            const errorText = await response.text().catch(() => '');
            console.error(`[DownloadProxy] Failed to fetch: ${response.status} ${response.statusText}`, {
                url: decodedUrl.substring(0, 100) + '...',
                headers: Object.keys(headers),
                errorText: errorText.substring(0, 200),
            });
            return new NextResponse(
                `Failed to fetch file: ${response.status} ${response.statusText}${errorText ? ` - ${errorText.substring(0, 100)}` : ''}`, 
                { status: response.status }
            );
        }

        // Check if response body is readable stream
        if (!response.body) {
            return new NextResponse('No response body', { status: 500 });
        }

        // Create response with proper headers to force download
        const downloadHeaders = new Headers();
        
        // Set Content-Disposition header to force download
        downloadHeaders.set('Content-Disposition', `attachment; filename="${encodeURIComponent(filename)}"`);
        
        // Determine content type - force download for media files
        const originalContentType = response.headers.get('content-type') || '';
        const fileExtension = filename.split('.').pop()?.toLowerCase() || '';
        
        // For audio/video files, use application/octet-stream to force download instead of play
        const mediaExtensions = ['mp3', 'm4a', 'aac', 'ogg', 'wav', 'flac', 'mp4', 'webm', 'mkv', 'avi', 'mov', 'wmv'];
        const isMediaFile = mediaExtensions.includes(fileExtension) || 
                           originalContentType.startsWith('audio/') || 
                           originalContentType.startsWith('video/');
        
        if (isMediaFile) {
            // Force download by using application/octet-stream for media files
            downloadHeaders.set('Content-Type', 'application/octet-stream');
        } else if (originalContentType) {
            // Preserve original content type for other files
            downloadHeaders.set('Content-Type', originalContentType);
        } else {
            // Default to application/octet-stream
            downloadHeaders.set('Content-Type', 'application/octet-stream');
        }
        
        // Set content length if available
        const contentLength = response.headers.get('content-length');
        if (contentLength) {
            downloadHeaders.set('Content-Length', contentLength);
        }
        
        // CORS headers
        downloadHeaders.set('Access-Control-Allow-Origin', '*');
        downloadHeaders.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
        downloadHeaders.set('Access-Control-Allow-Headers', 'Content-Type');

        // Stream the response instead of buffering - this prevents timeouts for large files
        return new NextResponse(response.body, {
            status: 200,
            headers: downloadHeaders,
        });

    } catch (error) {
        console.error('[DownloadProxy] Error:', error);
        return new NextResponse(
            `Error downloading file: ${error instanceof Error ? error.message : 'Unknown error'}`,
            { status: 500 }
        );
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
