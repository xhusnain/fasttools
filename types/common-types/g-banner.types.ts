import * as React from "react"

export type GBannerVariant = "small" | "medium" | "large"

export interface GBannerProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: GBannerVariant | null
    title: string
    description?: string
    action?: React.ReactNode
    animated?: boolean
    animationDirection?: "ltr" | "rtl"
    onClose?: () => void
    showCloseButton?: boolean
}
