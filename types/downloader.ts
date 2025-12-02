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
export interface DownloadResult {
  url: string;
  title?: string;
  thumbnail?: string;
  [key: string]: any;
}
export interface DownloadResponse {
  status: boolean;
  result: DownloadResult;
}
