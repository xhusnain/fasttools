export type FacebookDownloaderProps = {
    compact?: boolean
}

export type FacebookVideoResult = {
    videoUrl?: string
    hdUrl?: string
    normalUrl?: string
    thumbnail?: string
    title?: string
    downloading?: boolean
    downloadStarted?: boolean
}

export type DownloadingStates = {
    video?: boolean
    [key: string]: boolean | undefined
}

export type CountdownStates = {
    video?: number
    [key: string]: number | undefined
}
