// List of channels or providers that require server-side transcoding
// These typically have fast-expiring URLs or incompatible codecs
// Format: Partial URL strings or channel names to match

export const TRANSCODED_CHANNELS = [
    // Providers / Servers
    '66.102.120.18',      // Star Sports, Sony Sports server
    'pishow.tv',          // Sometimes unstable, keep an eye on it

    // Specific Channels (by ID or Name parts)
    'sony_sports',
    'star_sports',
    'ten_sports',
    'willow_cricket',
    'astro_cricket',
];

export function requiresTranscoding(url: string, channelName?: string): boolean {
    const lowerUrl = url.toLowerCase();
    const lowerName = channelName?.toLowerCase() || '';

    return TRANSCODED_CHANNELS.some(pattern =>
        lowerUrl.includes(pattern) || lowerName.includes(pattern)
    );
}
