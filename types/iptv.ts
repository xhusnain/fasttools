// IPTV Type Definitions

export interface Country {
    code: string; // ISO country code (e.g., "us", "uk", "in")
    name: string; // Full country name
    flag: string; // Flag emoji or URL
    channelCount: number;
    languages?: string[];
}

export interface Channel {
    id: string;
    name: string;
    logo?: string;
    streamUrl: string;
    country: string; // Country code
    language?: string;
    categories: string[]; // e.g., ["News", "Sports"]
    tvgId?: string;
    groupTitle?: string;
    isNsfw?: boolean;
}

export interface M3UEntry {
    duration: number;
    title: string;
    attributes: Record<string, string>;
    url: string;
}

export interface M3UPlaylist {
    entries: M3UEntry[];
    metadata?: Record<string, any>;
}

export interface CountryChannels {
    country: Country;
    channels: Channel[];
}

export interface IPTVStats {
    totalCountries: number;
    totalChannels: number;
    categoryCounts: Record<string, number>;
    languageCounts: Record<string, number>;
}
