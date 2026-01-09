"use client"

import { useState, useEffect } from "react"
import { X, Sparkles, ArrowRight, Download, Youtube, Instagram, Video, ListVideo } from "lucide-react"

const POPUP_STORAGE_KEY = "welcome_popup_dismissed_at_v2"
const POPUP_HIDE_DURATION_MS = 12 * 60 * 60 * 1000 // 12 hours in milliseconds

export function WelcomePopup() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Check if popup was dismissed within the last 12 hours
        const dismissedAt = localStorage.getItem(POPUP_STORAGE_KEY)

        if (dismissedAt) {
            const dismissedTime = parseInt(dismissedAt, 10)
            const now = Date.now()

            // If less than 12 hours have passed, don't show the popup
            if (now - dismissedTime < POPUP_HIDE_DURATION_MS) {
                return
            }
        }

        // Small delay to show popup after page loads for better UX
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    const handleClose = () => {
        // Store the current timestamp in localStorage
        localStorage.setItem(POPUP_STORAGE_KEY, Date.now().toString())
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <>
            {/* Backdrop overlay */}
            <div
                className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm animate-fade-in"
                onClick={handleClose}
                aria-hidden="true"
            />

            {/* Popup container */}
            <div
                className="fixed left-1/2 top-1/2 z-[9999] -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md animate-scale-in"
                role="dialog"
                aria-modal="true"
                aria-labelledby="welcome-popup-title"
            >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card via-card to-card border border-border shadow-2xl">
                    {/* Decorative gradient background */}
                    <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-cyan-500/30 to-pink-500/30 blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-gradient-to-tr from-red-500/20 to-purple-500/20 blur-3xl" />

                    {/* Close button */}
                    <button
                        onClick={handleClose}
                        className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-muted/80 text-muted-foreground transition-all hover:bg-destructive hover:text-destructive-foreground hover:scale-110"
                        aria-label="Close popup"
                    >
                        <X className="h-4 w-4" />
                    </button>

                    {/* Content */}
                    <div className="relative z-[1] p-6 pt-8 text-center">
                        {/* Animated badge */}
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 px-4 py-2 text-sm font-semibold">
                            <Sparkles className="h-4 w-4 text-pink-500 animate-pulse" />
                            <span className="bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">
                                New Tools Available!
                            </span>
                        </div>

                        {/* Title */}
                        <h2
                            id="welcome-popup-title"
                            className="mb-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
                        >
                            🎬 Free Media{" "}
                            <span className="bg-gradient-to-r from-red-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
                                Downloaders!
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mb-6 text-muted-foreground leading-relaxed">
                            <strong>New Tools Added!</strong> Check out our latest social media downloaders and tools.
                        </p>

                        {/* Features list */}
                        <div className="mb-6 flex flex-col gap-2 text-left">
                            <div className="flex items-center gap-3 rounded-lg bg-muted/50 px-4 py-2.5">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500/20">
                                    <Instagram className="h-4 w-4 text-pink-500" />
                                </div>
                                <span className="text-sm text-foreground">Instagram Reels, Stories & posts</span>
                            </div>
                            <div className="flex items-center gap-3 rounded-lg bg-muted/50 px-4 py-2.5">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20">
                                    <Video className="h-4 w-4 text-cyan-500" />
                                </div>
                                <span className="text-sm text-foreground">TikTok videos without watermark</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <a
                            href="/downloaders"
                            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-pink-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.02]"
                            onClick={handleClose}
                        >
                            Explore Downloaders
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </a>

                        {/* Skip text */}
                        <button
                            onClick={handleClose}
                            className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Maybe later
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
