export type InstagramDownloaderProps = {
    compact?: boolean
}

export type InstagramMediaResult = {
    videoUrl?: string
    imageUrl?: string
    thumbnail?: string
    title?: string
    downloading?: boolean
    downloadStarted?: boolean
    media?: any[]
    videos?: string[]
    images?: string[]
    isMultiple?: boolean
    type?: string
}

export type DownloadingStates = {
    video?: boolean
    image?: boolean
    [key: string]: boolean | undefined
}

export type CountdownStates = {
    video?: number
    image?: number
    [key: string]: number | undefined
}
