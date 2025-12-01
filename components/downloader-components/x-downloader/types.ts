export type XDownloaderProps = {
    compact?: boolean
}

export type XMediaResult = {
    type?: 'video' | 'image' | 'mixed'
    videoUrl?: string
    imageUrl?: string
    images?: string[]
    thumbnail?: string
    title?: string
    downloading?: boolean
    downloadStarted?: boolean
}

export type DownloadingStates = {
    video?: boolean
    image?: boolean
    [key: string]: boolean | undefined
}


