"use client"

import Link from "next/link"

interface ClickFortifyAdProps {
    className?: string
}

export function ClickFortifyAd({ className }: ClickFortifyAdProps) {
    return (
        <div className={`w-[280px] p-4 text-left font-sans rounded-xl bg-background/50 border border-border/50 ${className}`}>
            {/* Ad Label & URL */}
            <div className="flex items-baseline gap-2 mb-1.5">
                <span className="text-[11px] font-bold text-foreground">Ad</span>
                <span className="text-[11px] text-muted-foreground">www.clickfortify.com</span>
            </div>

            {/* Headline */}
            <Link
                href="https://www.clickfortify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
            >
                <h3 className="text-[18px] font-medium text-blue-400 hover:underline leading-snug mb-1">
                    Protect Your PPC from Fraud
                </h3>
            </Link>

            {/* Description */}
            <p className="text-[13px] text-muted-foreground leading-relaxed">
                Shield your Google Ads campaigns. ClickFortify blocks bots and competitor clicks. Get Protected today.
            </p>
        </div>
    )
}
