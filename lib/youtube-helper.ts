import fs from 'fs'
import path from 'path'

// List of modern, common User-Agents to rotate
const USER_AGENTS = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
]

export function getRandomUserAgent() {
    return USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)]
}

export function getAntiBotArgs() {
    const args: string[] = []

    // 1. User-Agent Rotation
    args.push('--user-agent', getRandomUserAgent())

    // 2. Cookie Support (Layer 1)
    // Check for cookies.txt in project root or custom path
    const cookiePath = path.join(process.cwd(), 'cookies.txt')
    if (fs.existsSync(cookiePath)) {
        // console.log('Using cookies.txt for authentication')
        args.push('--cookies', cookiePath)
    }

    // 3. Proxy Support (Layer 2)
    // Check environment variable
    if (process.env.YOUTUBE_PROXY) {
        // console.log('Using configured proxy')
        args.push('--proxy', process.env.YOUTUBE_PROXY)
    }

    // General Speed & Anti-Bot flags
    args.push('--no-warnings')
    args.push('--no-check-certificate')
    args.push('--prefer-free-formats')
    // args.push('--no-playlist') // Removed from shared: moved to individual routes to allow playlist info fetching

    // Spoof Client: Android client is faster and less blocked
    args.push('--extractor-args', 'youtube:player_client=android')

    // Invidious Instance Rotation (Community Proxy)
    // This routes the request through a public Invidious instance api, effectively acting as a proxy.
    const INVIDIOUS_INSTANCES = [
        'https://inv.tux.pizza',
        'https://yewtu.be',
        'https://vid.puffyan.us',
        'https://invidious.flokinet.to',
        'https://yt.artemislena.eu'
    ]
    const randomInstance = INVIDIOUS_INSTANCES[Math.floor(Math.random() * INVIDIOUS_INSTANCES.length)]

    // Inject the instance into the youtube extractor args
    // Syntax for yt-dlp to use alternative frontend for API calls
    // Note: We append to existing extractor-args if any
    const extractorArgsIndex = args.indexOf('--extractor-args')
    if (extractorArgsIndex !== -1) {
        args[extractorArgsIndex + 1] += `;youtube:base_url=${randomInstance}`
    } else {
        // 'base_url' or just passing the invidious URL to start with?
        // Actually, for youtube extractor to use invidious, it's often automatic if using invidious URL.
        // But for standard URL, we try to hint it.
        // Recent yt-dlp versions might not support 'base_url' arg for youtube extractor directly.
        // A better approach: Replace the URL itself in the main call?
        // No, that might break signature deciphering if the instance is outdated.

        // Alternative: Use 'force-ipv4'
        args.push('--force-ipv4')
    }

    return args
}

/**
 * Fallback Strategy: Get direct download link from external service
 * Used when local yt-dlp is blocked.
 */
export async function getExternalDownloadLink(url: string, format: 'mp3' | 'mp4') {
    // Strategy 1: loader.to
    try {
        // Loader.to uses a specific format string for quality
        // mp3 = mp3, mp4 = 1080 (for 1080p) or 720
        const formatCode = format === 'mp3' ? 'mp3' : '1080';
        const apiUrl = `https://loader.to/ajax/download.php?format=${formatCode}&url=${encodeURIComponent(url)}`;

        const res = await fetch(apiUrl);
        if (res.ok) {
            const data = await res.json();
            // If success, it might return an ID (needs polling) or url (direct)
            // Usually returns { success: true, id: "...", ... }
            // If it returns a 'download_url' immediately (rare for long videos), use it.
            // Often we can construct the download URL if we have the ID, but it requires polling.
            // THIS IS TRICKY for a simple redirect unless we implement a wait loop.
            // But loader.to API download.php often gives a generic response.

            // Let's try to interpret common responses.
        }
    } catch (e) {
        // ignore
    }

    // Strategy 2: Cobalt (Very popular, no-bs downloader)
    // https://github.com/imputnet/cobalt
    // Often has public instances. Let's try a common one or allow env var.
    const cobaltApi = process.env.COBALT_API_URL || 'https://api.cobalt.tools/api/json';
    try {
        const res = await fetch(cobaltApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                url: url,
                aFormat: format === 'mp3' ? 'mp3' : undefined,
                isAudioOnly: format === 'mp3'
            })
        });

        if (res.ok) {
            const data = await res.json();
            if (data.url) {
                return data.url;
            }
        }
    } catch (e) {
        // ignore
    }

    return null;
}

export async function fetchExternalInfo(url: string) {
    // 1. OEmbed (Official)
    try {
        const oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`
        const res = await fetch(oembedUrl)
        if (res.ok) {
            const data = await res.json()
            return {
                title: data.title,
                thumbnail: data.thumbnail_url,
                uploader: data.author_name,
                // Partial info is better than nothing
            }
        }
    } catch (e) { }

    // 2. Cobalt Info?
    // Cobalt mainly for downloads, but checking it validates the link.

    return null;
}
