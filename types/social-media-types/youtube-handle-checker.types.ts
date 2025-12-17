/**
 * YouTube Handle Checker Types
 * Types for the Handle & URL availability checker component
 */

export interface HandleCheckResult {
    handle: string
    available: boolean
    channelUrl?: string
    error?: string
}

export interface HandleVariation {
    handle: string
    type: 'prefix' | 'suffix' | 'underscore' | 'abbreviation'
    available: boolean | null // null means not yet checked
    checking?: boolean
}

export interface HandleCheckerState {
    input: string
    isChecking: boolean
    result: HandleCheckResult | null
    variations: HandleVariation[]
    error: string | null
}
