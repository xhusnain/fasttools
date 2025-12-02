import { HttpClient } from "../api/http-client";

type SocialMediaPlatform =
  | 'instagram' | 'tiktok' | 'facebook' | 'twitter' | 'youtube'
  | 'capcut' | 'pinterest' | 'spotify' | 'soundcloud' | 'threads'
  | 'douyin' | 'xiaohongshu' | 'snackvideo' | 'cocofun' | 'gdrive';

interface DownloadRequest {
  platform: SocialMediaPlatform;
  url: string;
}

interface DownloadResult {
  url: string;
  title?: string;
  thumbnail?: string;
  [key: string]: any;
}

interface DownloadResponse {
  status: boolean;
  result: DownloadResult;
}

export const DownloaderRepository = {
  download: async (platform: SocialMediaPlatform, url: string): Promise<DownloadResponse> => {
    const requestBody: DownloadRequest = { platform, url };

    const response = await HttpClient.post<DownloadResponse>("/download", requestBody);

    return response.data;
  },
};

