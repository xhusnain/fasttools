export type TiktokDownloaderProps = {
    compact?: boolean
}

export type TiktokMediaResult = {
    noWatermarkUrl: string
    watermarkUrl?: string
    musicUrl?: string
    coverUrl?: string
    title?: string
    downloading?: boolean
    downloadStarted?: boolean
    [key: string]: any
}

export type DownloadingStates = {
    video?: boolean
    audio?: boolean
    image?: boolean
    [key: string]: boolean | undefined
}

export type CountdownStates = {
    video?: number
    audio?: number
    image?: number
    [key: string]: number | undefined
}
