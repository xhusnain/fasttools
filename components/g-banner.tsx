"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { ArrowRight, X } from "lucide-react"

const bannerVariants = cva(
    "relative flex w-full items-center overflow-hidden transition-all",
    {
        variants: {
            variant: {
                small: "h-10 bg-black text-white text-sm font-medium justify-center",
                medium: "min-h-[60px] bg-gradient-to-r from-pink-100 via-purple-100 to-cyan-100 text-foreground px-4 py-3 sm:px-6",
                large: "min-h-[80px] bg-black text-white px-4 py-4 sm:px-6",
            },
        },
        defaultVariants: {
            variant: "small",
        },
    }
)

export interface GBannerProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bannerVariants> {
    title: string
    description?: string
    action?: React.ReactNode
    animated?: boolean
    animationDirection?: "ltr" | "rtl"
    onClose?: () => void
    showCloseButton?: boolean
}

export function GBanner({
    className,
    variant,
    title,
    description,
    action,
    animated = false,
    animationDirection = "rtl",
    onClose,
    showCloseButton = false,
    ...props
}: GBannerProps) {
    // Small Variant
    if (variant === "small") {
        return (
            <div className={cn(bannerVariants({ variant }), className)} {...props}>
                <div className="container flex items-center justify-center gap-2 px-4">
                    <span className="truncate">{title}</span>
                    {action && <div className="shrink-0">{action}</div>}
                </div>
                {showCloseButton && (
                    <button
                        onClick={onClose}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
                    >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close banner</span>
                    </button>
                )}
            </div>
        )
    }

    // Medium Variant
    if (variant === "medium") {
        return (
            <div className={cn(bannerVariants({ variant }), className)} {...props}>
                <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row items-center gap-2">
                        <span className="font-semibold">{title}</span>
                        {description && (
                            <>
                                <span className="hidden sm:inline text-muted-foreground">•</span>
                                <span className="text-muted-foreground">{description}</span>
                            </>
                        )}
                    </div>
                    {action && <div className="shrink-0 mt-2 sm:mt-0">{action}</div>}
                </div>
                {showCloseButton && (
                    <button
                        onClick={onClose}
                        className="absolute right-2 top-2 sm:top-1/2 sm:-translate-y-1/2 p-1 hover:bg-black/5 rounded-full transition-colors"
                    >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close banner</span>
                    </button>
                )}
            </div>
        )
    }

    // Large Variant (with Marquee support)
    if (variant === "large") {
        return (
            <div className={cn(bannerVariants({ variant }), className)} {...props}>
                {/* CSS for Marquee Animation */}
                <style jsx>{`
          @keyframes marquee-rtl {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          @keyframes marquee-ltr {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-marquee-rtl {
            animation: marquee-rtl 20s linear infinite;
          }
          .animate-marquee-ltr {
            animation: marquee-ltr 20s linear infinite;
          }
          .pause-on-hover:hover {
            animation-play-state: paused;
          }
        `}</style>

                <div className="container mx-auto flex items-center overflow-hidden">
                    {animated ? (
                        <div className="relative w-full overflow-hidden whitespace-nowrap">
                            <div
                                className={cn(
                                    "inline-block w-full",
                                    animationDirection === "rtl" ? "animate-marquee-rtl" : "animate-marquee-ltr",
                                    "pause-on-hover"
                                )}
                            >
                                <div className="inline-flex items-center gap-8 mx-4">
                                    {/* Repeat content to ensure continuous flow look (simplified) */}
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <span className="font-bold">{title}</span>
                                            {description && <span className="text-gray-300">• {description}</span>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4 text-center sm:text-left">
                            <div className="flex flex-col sm:flex-row items-center gap-2">
                                <span className="font-bold text-lg">{title}</span>
                                {description && (
                                    <>
                                        <span className="hidden sm:inline text-gray-400">•</span>
                                        <span className="text-gray-300">{description}</span>
                                    </>
                                )}
                            </div>
                            {action && <div className="shrink-0">{action}</div>}
                        </div>
                    )}
                </div>

                {showCloseButton && (
                    <button
                        onClick={onClose}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors z-10"
                    >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close banner</span>
                    </button>
                )}
            </div>
        )
    }

    return null
}
