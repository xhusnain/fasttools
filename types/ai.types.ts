export interface AIResponse {
    text: string
    success: boolean
    error?: string
}

export interface AIRequest {
    prompt: string
    maxTokens?: number
    temperature?: number
}

export interface HashtagsRequest {
    text: string
    platform?: string
}

export interface LyricsRequest {
    theme: string
    genre?: string
    mood?: string
    duration?: number
    language?: string
}

export interface PetNameRequest {
    petType: string
    gender: string
    color?: string
    age: string
    personality?: string
    breed?: string
    size: string
    additionalInfo?: string
}

export interface CaptionsRequest {
    description: string
    platform: string
}

export interface ChannelNameRequest {
    topic: string
    keywords?: string
    tone?: string
    targetAudience?: string
}

