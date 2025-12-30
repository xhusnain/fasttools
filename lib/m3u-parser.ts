// M3U Playlist Parser Utility

import { M3UEntry, M3UPlaylist } from '@/types/iptv';

/**
 * Parse M3U/M3U8 playlist content into structured data
 * @param content - Raw M3U playlist content
 * @returns Parsed playlist with entries
 */
export function parseM3U(content: string): M3UPlaylist {
    const lines = content.split('\n').map(line => line.trim()).filter(Boolean);
    const entries: M3UEntry[] = [];

    let currentEntry: Partial<M3UEntry> | null = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        // Skip header
        if (line === '#EXTM3U') {
            continue;
        }

        // Parse EXTINF line
        if (line.startsWith('#EXTINF:')) {
            const match = line.match(/#EXTINF:(-?\d+)\s*(.*?),(.*)$/);
            if (match) {
                const [, duration, attributesStr, title] = match;
                const attributes = parseAttributes(attributesStr);

                currentEntry = {
                    duration: parseInt(duration, 10),
                    title: title.trim(),
                    attributes,
                };
            }
        }
        // Parse stream URL
        else if (!line.startsWith('#') && currentEntry) {
            currentEntry.url = line;
            entries.push(currentEntry as M3UEntry);
            currentEntry = null;
        }
    }

    return {
        entries,
        metadata: {},
    };
}

/**
 * Parse attributes from EXTINF line
 * Example: tvg-id="BBCNews.uk" tvg-logo="https://..." group-title="News"
 */
function parseAttributes(attributesStr: string): Record<string, string> {
    const attributes: Record<string, string> = {};
    const regex = /(\w+(?:-\w+)*)="([^"]*)"/g;
    let match;

    while ((match = regex.exec(attributesStr)) !== null) {
        const [, key, value] = match;
        attributes[key] = value;
    }

    return attributes;
}

/**
 * Extract country code from tvg-id or other metadata
 * Examples: 
 * - "BBCNews.uk" -> "uk"
 * - "123tv.de@SD" -> "de"
 * - "1AlmereTV.nl@SD" -> "nl"
 */
export function extractCountryCode(tvgId?: string, groupTitle?: string): string | null {
    // Method 1: Extract from tvg-id
    // Pattern matches: .XX or .XX@ where XX is a 2-letter country code
    if (tvgId) {
        // Try to match .cc@ or .cc at the end
        const match = tvgId.match(/\.([a-z]{2})(?:@|$)/i);
        if (match) return match[1].toLowerCase();
    }

    // Method 2: Extract from group-title if it looks like a country name or code
    if (groupTitle) {
        // Common country name mappings
        const countryMappings: Record<string, string> = {
            'united states': 'us',
            'usa': 'us',
            'united kingdom': 'uk',
            'uk': 'uk',
            'india': 'in',
            'canada': 'ca',
            'australia': 'au',
            'germany': 'de',
            'france': 'fr',
            'spain': 'es',
            'italy': 'it',
            'brazil': 'br',
            'mexico': 'mx',
            'argentina': 'ar',
            'japan': 'jp',
            'south korea': 'kr',
            'korea': 'kr',
            'china': 'cn',
            'russia': 'ru',
            'turkey': 'tr',
            'saudi arabia': 'sa',
            'uae': 'ae',
            'egypt': 'eg',
            'south africa': 'za',
            'nigeria': 'ng',
            'pakistan': 'pk',
            'indonesia': 'id',
            'thailand': 'th',
            'vietnam': 'vn',
            'philippines': 'ph',
            'poland': 'pl',
            'netherlands': 'nl',
            'belgium': 'be',
            'sweden': 'se',
            'norway': 'no',
            'denmark': 'dk',
            'finland': 'fi',
            'portugal': 'pt',
            'greece': 'gr',
            'czech republic': 'cz',
            'romania': 'ro',
            'hungary': 'hu',
            'austria': 'at',
            'switzerland': 'ch',
            'ireland': 'ie',
            'new zealand': 'nz',
            'singapore': 'sg',
            'malaysia': 'my',
            'chile': 'cl',
            'colombia': 'co',
            'peru': 'pe',
            'venezuela': 've',
            'ukraine': 'ua',
            'israel': 'il',
            'iran': 'ir',
            'iq': 'iq', // Added 'iq' for Iraq, as 'iraq' is already in the list
            'lebanon': 'lb',
            'morocco': 'ma',
            'algeria': 'dz',
            'tunisia': 'tn',
            'kenya': 'ke',
            'ethiopia': 'et',
            'ghana': 'gh',
        };

        const lowerGroup = groupTitle.toLowerCase().trim();

        // Check if group title matches a country name
        for (const [name, code] of Object.entries(countryMappings)) {
            if (lowerGroup === name || lowerGroup.includes(name)) {
                return code;
            }
        }

        // Check if it's already a 2-letter code
        if (/^[a-z]{2}$/i.test(lowerGroup)) {
            return lowerGroup.toLowerCase();
        }
    }

    return null;
}

/**
 * Validate if a stream URL is accessible
 * @param url - Stream URL to validate
 * @returns Promise<boolean>
 */
export async function validateStreamUrl(url: string): Promise<boolean> {
    try {
        const response = await fetch(url, { method: 'HEAD', signal: AbortSignal.timeout(5000) });
        return response.ok;
    } catch {
        return false;
    }
}
