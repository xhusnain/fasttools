
import { getAuthHeaders } from "@/lib/api-auth";
import { env } from "@/config/env";

const BASE_URL = `${env.pythonApiUrl}/api/v1/youtube`;

export interface VideoFormat {
    format_id: string;
    format_note?: string;
    ext: string;
    filesize?: number;
    filesize_approx?: number;
    width?: number;
    height?: number;
    vcodec?: string;
    acodec?: string;
    url: string;
}

export interface VideoInfo {
    title: string;
    thumbnail: string;
    duration?: number;
    url?: string;
    formats?: VideoFormat[];
    uploader?: string;
    description?: string;
    view_count?: number;
    id?: string;
}

export interface PlaylistEntry {
    id: string;
    title: string;
    thumbnail: string;
    duration?: number;
    uploader?: string;
    thumbnails?: { url: string }[];
    url?: string;
}

export interface PlaylistInfo {
    id: string;
    title: string;
    thumbnail: string;
    view_count?: number;
    uploader?: string;
    description?: string;
    entries: PlaylistEntry[];
}

export class YouTubeService {
    static async getInfo(url: string, type: 'video' | 'playlist' = 'video'): Promise<VideoInfo | PlaylistInfo> {
        const headers = await getAuthHeaders();
        const response = await fetch(`${BASE_URL}/info`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body: JSON.stringify({ url, type })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || "Failed to fetch information");
        }

        return await response.json();
    }

    static getStreamUrl(originalUrl: string, filename: string, formatId?: string, type: 'video' | 'audio' = 'video'): string {
        let url = `${BASE_URL}/stream?url=${encodeURIComponent(originalUrl)}&filename=${encodeURIComponent(filename)}&type=${type}`;
        if (formatId) {
            url += `&format_id=${encodeURIComponent(formatId)}`;
        }
        return url;
    }

    static async getDirectDownloadUrl(url: string, formatId?: string): Promise<string> {
        const headers = await getAuthHeaders();
        const response = await fetch(`${BASE_URL}/video`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body: JSON.stringify({ url, format_id: formatId })
        });

        if (!response.ok) {
            throw new Error('Failed to get download URL');
        }

        const data = await response.json();
        return data.url;
    }
}
