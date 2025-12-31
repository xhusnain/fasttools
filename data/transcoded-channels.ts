export const TRANSCODED_CHANNELS = [
    'pishow.tv',
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
