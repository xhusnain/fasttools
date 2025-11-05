declare module 'ab-downloader' {
  export interface FacebookDownloadResponse {
    developer?: string
    contactme?: string
    Normal_video?: string
    HD?: string
    normal_video?: string
    hd?: string
    sd?: string
    url?: string
    video?: string
    videoUrl?: string
    download?: string
    downloadUrl?: string
    media?: string
    src?: string
    link?: string
    stream?: string
    title?: string
    caption?: string
    description?: string
    thumbnail?: string
    cover?: string
    preview?: string
    image?: string
    poster?: string
    error?: string
    status?: string
    message?: string
    [key: string]: any // Allow additional properties
  }

  export interface InstagramDownloadResponse {
    url?: string
    video?: string
    videoUrl?: string
    image?: string
    imageUrl?: string
    media?: any[]
    videos?: string[]
    images?: string[]
    thumbnail?: string
    title?: string
    caption?: string
    description?: string
    type?: string
    isMultiple?: boolean
  }

  export interface TikTokDownloadResponse {
    videoUrl?: string
    watermarkUrl?: string
    musicUrl?: string
    coverUrl?: string
    title?: string
    imageUrl?: string
    images?: string[]
    isImage?: boolean
    type?: string
  }

  export type DownloadResponse = 
    | FacebookDownloadResponse 
    | InstagramDownloadResponse 
    | TikTokDownloadResponse 
    | string 
    | any[]

  export function fbdown(url: string): Promise<FacebookDownloadResponse | string | null>
  export function igdl(url: string): Promise<InstagramDownloadResponse | any[] | any | string | null>
  export function ttdl(url: string): Promise<TikTokDownloadResponse | string | null>
  export function twitter(url: string): Promise<any>
  export function youtube(url: string): Promise<any>
  export function mediafire(url: string): Promise<any>
  export function capcut(url: string): Promise<any>
  export function gdrive(url: string): Promise<any>
  export function pinterest(url: string): Promise<any>
  export function aio(url: string): Promise<any>
}

