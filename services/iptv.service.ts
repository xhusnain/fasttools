import { Channel, Country, CountryChannels, IPTVStats } from '@/types/iptv';
import { parseM3U, extractCountryCode } from '@/lib/m3u-parser';

const IPTV_ORG_BASE_URL = 'https://iptv-org.github.io/iptv';
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

// Global cache interface to persist across hot reloads in dev
declare global {
    var iptvCache: {
        data: Channel[];
        timestamp: number;
    } | undefined;
}

/**
 * Fetch and parse the main IPTV playlist
 */
async function fetchIPTVPlaylist(): Promise<Channel[]> {
    try {
        // We use next: { revalidate } to cache the raw fetch response if possible
        const response = await fetch(`${IPTV_ORG_BASE_URL}/index.m3u`, {
            next: { revalidate: 3600 }
        });

        if (!response.ok) throw new Error('Failed to fetch playlist');

        const content = await response.text();
        const playlist = parseM3U(content);

        const channels: Channel[] = playlist.entries.map((entry, index) => {
            const groupTitle = entry.attributes['group-title'];
            const countryCode = extractCountryCode(entry.attributes['tvg-id'], groupTitle) || 'international';
            const categories = groupTitle
                ? groupTitle.split(';').map(c => c.trim())
                : ['General'];

            return {
                id: `${countryCode}-${index}`,
                name: entry.title,
                logo: entry.attributes['tvg-logo'],
                streamUrl: entry.url,
                country: countryCode,
                language: entry.attributes['tvg-language'],
                categories,
                tvgId: entry.attributes['tvg-id'],
                groupTitle: entry.attributes['group-title'],
                isNsfw: categories.some(c => c.toLowerCase() === 'xxx'),
            };
        });

        return channels.filter(c => !c.isNsfw);
    } catch (error) {
        console.error('Error fetching IPTV playlist:', error);
        return [];
    }
}

/**
 * Get all channels with in-memory caching
 */
export async function getAllChannels(): Promise<Channel[]> {
    // Check global cache first
    if (global.iptvCache && Date.now() - global.iptvCache.timestamp < CACHE_DURATION) {
        return global.iptvCache.data;
    }

    const channels = await fetchIPTVPlaylist();

    // Set global cache
    global.iptvCache = {
        data: channels,
        timestamp: Date.now(),
    };

    return channels;
}

export async function getAllCountries(): Promise<Country[]> {
    const channels = await getAllChannels();
    return extractCountries(channels);
}

/**
 * Extract unique countries from channels
 */
function extractCountries(channels: Channel[]): Country[] {
    const countryMap = new Map<string, Country>();

    channels.forEach(channel => {
        const code = channel.country;
        if (!countryMap.has(code)) {
            countryMap.set(code, {
                code,
                name: getCountryName(code),
                flag: getCountryFlag(code),
                channelCount: 0,
                languages: [],
            });
        }

        const country = countryMap.get(code)!;
        country.channelCount++;

        if (channel.language && !country.languages?.includes(channel.language)) {
            country.languages = [...(country.languages || []), channel.language];
        }

        if (channel.categories) {
            channel.categories.forEach(cat => {
                if (!country.categories?.includes(cat)) {
                    country.categories = [...(country.categories || []), cat];
                }
            });
        }
    });

    return Array.from(countryMap.values())
        .filter(c => c.code !== 'unknown') // Keep international but filter unknown
        .sort((a, b) => b.channelCount - a.channelCount);
}

/**
 * Get channels for a specific country
 */
export async function getChannelsByCountry(countryCode: string): Promise<Channel[]> {
    const channels = await getAllChannels();
    return channels.filter(c => c.country.toLowerCase() === countryCode.toLowerCase());
}

/**
 * Get country details with channels
 */
export async function getCountryChannels(countryCode: string): Promise<CountryChannels | null> {
    if (!countryCode) return null;

    const countries = await getAllCountries();
    const country = countries.find(c => c.code.toLowerCase() === countryCode.toLowerCase());

    if (!country) return null;

    const channels = await getChannelsByCountry(countryCode);

    return {
        country,
        channels,
    };
}

/**
 * Get IPTV statistics
 */
export async function getIPTVStats(): Promise<IPTVStats> {
    const channels = await getAllChannels();
    const countries = await getAllCountries();

    const categoryCounts: Record<string, number> = {};
    const languageCounts: Record<string, number> = {};

    channels.forEach(channel => {
        channel.categories.forEach(cat => {
            categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
        });

        if (channel.language) {
            languageCounts[channel.language] = (languageCounts[channel.language] || 0) + 1;
        }
    });

    return {
        totalCountries: countries.length,
        totalChannels: channels.length,
        categoryCounts,
        languageCounts,
    };
}

/**
 * Get country name from code
 */
function getCountryName(code: string): string {
    const countryNames: Record<string, string> = {
        us: 'United States',
        uk: 'United Kingdom',
        in: 'India',
        ca: 'Canada',
        au: 'Australia',
        de: 'Germany',
        fr: 'France',
        es: 'Spain',
        it: 'Italy',
        br: 'Brazil',
        mx: 'Mexico',
        ar: 'Argentina',
        jp: 'Japan',
        kr: 'South Korea',
        cn: 'China',
        ru: 'Russia',
        tr: 'Turkey',
        sa: 'Saudi Arabia',
        ae: 'United Arab Emirates',
        eg: 'Egypt',
        za: 'South Africa',
        ng: 'Nigeria',
        international: 'International',
        // Add more as needed
    };

    return countryNames[code.toLowerCase()] || code.toUpperCase();
}

/**
 * Get country flag emoji
 */
function getCountryFlag(code: string): string {
    if (code === 'unknown' || code === 'international') return '🌍';

    const codePoints = code
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt(0));

    return String.fromCodePoint(...codePoints);
}

/**
 * Get all available languages
 */
export async function getAllLanguages(): Promise<string[]> {
    const stats = await getIPTVStats();
    return Object.keys(stats.languageCounts).sort();
}

/**
 * Get all available categories
 */
export async function getAllCategories(): Promise<string[]> {
    const stats = await getIPTVStats();
    return Object.keys(stats.categoryCounts).sort();
}
