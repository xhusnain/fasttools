import { NextRequest, NextResponse } from 'next/server'
import sitemap from '@/app/sitemap'

const INDEXNOW_ENDPOINT = 'https://www.bing.com/indexnow'

const INDEXNOW_KEY = 'a8b9c2d4e5f6g7h8i9j0k1l2m3n4o5p6'

const BATCH_SIZE = 10000

const STATUS_MESSAGES: Record<number, string> = {
    200: 'URLs submitted successfully',
    202: 'URLs received. IndexNow key validation pending.',
    400: 'Bad request - Invalid format',
    403: 'Forbidden - Key not valid',
    422: 'Unprocessable Entity - URLs do not belong to host or key mismatch',
    429: 'Too Many Requests - Potential spam',
}

async function submitToIndexNow(
    urls: string[],
    key: string,
    host: string
): Promise<{ success: boolean; endpoint: string; status: number; message: string }> {
    const batches: string[][] = []
    for (let i = 0; i < urls.length; i += BATCH_SIZE) {
        batches.push(urls.slice(i, i + BATCH_SIZE))
    }

    let lastResult: { success: boolean; endpoint: string; status: number; message: string } | null = null

    for (let i = 0; i < batches.length; i++) {
        const batch = batches[i]
        try {
            const payload = {
                host,
                key,
                keyLocation: `https://${host}/${key}.txt`,
                urlList: batch,
            }

            const response = await fetch(INDEXNOW_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                body: JSON.stringify(payload),
            })

            const status = response.status
            const message = STATUS_MESSAGES[status] || `Unexpected status: ${status}`
            const success = status === 200 || status === 202

            lastResult = {
                success,
                endpoint: INDEXNOW_ENDPOINT,
                status,
                message,
            }

            if (i < batches.length - 1) {
                await new Promise((resolve) => setTimeout(resolve, 1000))
            }
        } catch (error) {
            return {
                success: false,
                endpoint: INDEXNOW_ENDPOINT,
                status: 0,
                message: error instanceof Error ? error.message : 'Unknown error',
            }
        }
    }

    return lastResult || {
        success: false,
        endpoint: INDEXNOW_ENDPOINT,
        status: 0,
        message: 'No batches processed',
    }
}

export async function POST(_request: NextRequest) {
    try {
        const keyRegex = /^[a-zA-Z0-9-]{8,128}$/
        if (!keyRegex.test(INDEXNOW_KEY)) {
            return NextResponse.json(
                { error: 'Invalid IndexNow key format' },
                { status: 400 }
            )
        }

        const sitemapData = sitemap()
        const urls = sitemapData.map((entry) => entry.url)

        if (urls.length === 0) {
            return NextResponse.json(
                { error: 'No URLs found in sitemap' },
                { status: 404 }
            )
        }

        const host = new URL(urls[0]).hostname
        const result = await submitToIndexNow(urls, INDEXNOW_KEY, host)

        return NextResponse.json({
            success: result.success,
            totalUrls: urls.length,
            endpoint: result.endpoint,
            status: result.status,
            message: result.message,
        })
    } catch (error) {
        return NextResponse.json(
            {
                error: 'Failed to submit URLs to IndexNow',
                message: error instanceof Error ? error.message : 'Unknown error',
            },
            { status: 500 }
        )
    }
}

