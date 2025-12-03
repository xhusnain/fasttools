export type QRType = "url" | "wifi" | "vcard" | "email" | "sms" | "whatsapp" | "phone" | "location" | "text" | "bulk"
export type ErrorCorrectionLevel = "L" | "M" | "Q" | "H"
export type DownloadFormat = "png" | "svg" | "jpg"

export interface QROptions {
    width: number
    margin: number
    errorCorrectionLevel: ErrorCorrectionLevel
    color: {
        dark: string
        light: string
    }
    type?: string
    rendererOpts?: {
        quality?: number
    }
}
