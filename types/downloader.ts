export type SocialMediaPlatform =
  | 'instagram'
  | 'tiktok'
  | 'facebook'
  | 'twitter'
  | 'youtube'
  | 'capcut'
  | 'pinterest'
  | 'spotify'
  | 'soundcloud'
  | 'threads'
  | 'douyin'
  | 'xiaohongshu'
  | 'snackvideo'
  | 'cocofun'
  | 'gdrive';
export interface DownloadRequest {
  platform: SocialMediaPlatform;
  url: string;
}
export interface MediaItem {
  url: string;
  thumbnail?: string;
  type?: 'video' | 'image';
}
export interface DownloadResult {
  url?: string;
  title?: string;
  thumbnail?: string;
  video?: string[];
  audio?: string[];
  music?: string;
  [key: string]: any;
}
export interface DownloadResponse {
  status: boolean;
  result?: DownloadResult | MediaItem[];
  // Support direct response format (for TikTok)
  title?: string;
  title_audio?: string;
  thumbnail?: string;
  video?: string[];
  audio?: string[];
  developer?: string;
}
