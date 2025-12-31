export const TRANSCODED_CHANNELS = [
    'pishow.tv',
    'sony_sports', 'sony sports',
    'star_sports', 'star sports',
    'ten_sports', 'ten sports',
    'willow_cricket', 'willow cricket',
    'astro_cricket', 'astro cricket',
];

export function requiresTranscoding(url: string, channelName?: string): boolean {
    const lowerUrl = url.toLowerCase();
    const lowerName = channelName?.toLowerCase() || '';

    return TRANSCODED_CHANNELS.some(pattern =>
        lowerUrl.includes(pattern) || lowerName.includes(pattern)
    );
}
