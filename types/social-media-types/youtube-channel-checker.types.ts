export interface ChannelCheckResult {
    channelName: string
    available: boolean
    channelId?: string
    channelUrl?: string
    subscriberCount?: number
    videoCount?: number
    error?: string
}
