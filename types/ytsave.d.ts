declare module 'ytsave' {
  export interface DownloadOptions {
    format: 'mp4' | 'mp3'
    output: string
  }

  export function downloadVideo(url: string, options: DownloadOptions): Promise<void>
  export function downloadPlaylist(url: string, options: DownloadOptions): Promise<void>
}

