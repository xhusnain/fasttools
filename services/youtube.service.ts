import { HttpClient } from "@/services/api/http-client";
import { env } from "@/config/env";

const BASE_URL = `/api/backend/youtube`;

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
    static getProxyUrl(endpoint: string): string {
        const pythonApiUrl = env.pythonApiUrl || "http://localhost:8000";
        const targetUrl = `${pythonApiUrl}/api/youtube${endpoint}`;
        return `/api/proxy?url=${encodeURIComponent(targetUrl)}`;
    }

    static async getInfo(url: string, type: 'video' | 'playlist' = 'video'): Promise<VideoInfo | PlaylistInfo> {
        try {
            const proxyUrl = this.getProxyUrl('/info');
            const response = await HttpClient.post<VideoInfo | PlaylistInfo>(proxyUrl, { url, type }, { baseURL: '' });
            return response.data;
        } catch (error: any) {
            throw new Error(error.message || "Failed to fetch information");
        }
    }

    static getStreamUrl(originalUrl: string, filename: string, formatId?: string, type: 'video' | 'audio' = 'video'): string {
        const pythonApiUrl = env.pythonApiUrl || "http://localhost:8000";
        let targetUrl = `${pythonApiUrl}/api/youtube/stream?url=${encodeURIComponent(originalUrl)}&filename=${encodeURIComponent(filename)}&type=${type}`;
        if (formatId) {
            targetUrl += `&format_id=${encodeURIComponent(formatId)}`;
        }
        return `/api/proxy?url=${encodeURIComponent(targetUrl)}`;
    }

    static async getDirectDownloadUrl(url: string, formatId?: string): Promise<string> {
        try {
            const proxyUrl = this.getProxyUrl('/video');
            const response = await HttpClient.post<{ url: string }>(proxyUrl, { url, format_id: formatId }, { baseURL: '' });
            return response.data.url;
        } catch (error) {
            throw new Error('Failed to get download URL');
        }
    }
}
