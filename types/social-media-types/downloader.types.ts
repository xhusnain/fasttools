export type SocialMediaPlatform =
  | 'youtube'
  | 'tiktok'
  | 'instagram'
  | 'facebook'
  | 'twitter'
  | 'capcut'
  | 'pinterest'
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
  offset?: number;
  limit?: number;
  nextPageToken?: string;
}

export interface VideoItem {
  url: string;
  quality: string;
  extension: string;
  size?: number;
  formattedSize?: string;
  hasAudio?: boolean;
  thumbnail?: string;
  httpHeaders?: Record<string, string>;
}

export interface AudioItem {
  url: string;
  quality: string;
  extension: string;
  size?: number;
  formattedSize?: string;
  thumbnail?: string;
  httpHeaders?: Record<string, string>;
}

export interface PlaylistEntry {
  id: string;
  title: string;
  videos?: VideoItem[];
  audios?: AudioItem[];
  thumbnail?: string;
  duration?: number | null;
  uploader?: string;
}

export interface DownloadResult {
  platform: string;
  id: string;
  title: string;
  description?: string;
  thumbnail: string;
  duration?: number | null;
  uploadDate?: string;
  viewCount?: number | null;
  uploader?: string;
  uploaderUrl?: string;
  videos: VideoItem[];
  audios: AudioItem[];
  isPlaylist?: boolean;
  playlistEntryCount?: number;
  entries?: DownloadResult[];
  hasMore?: boolean;
  nextPageToken?: string;
  limit?: number;
  offset?: number;
}

export interface DownloadResponse extends DownloadResult {}
