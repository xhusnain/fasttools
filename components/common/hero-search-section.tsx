"use client"

import { useState } from "react"
import Link from "next/link"
import { SearchBar } from "@/components/common/search-bar"
import { cn } from "@/lib/utils"

export function HeroSearchSection() {
    const [isSearchActive, setIsSearchActive] = useState(false)

    return (
        <>
            {/* Central Search Bar */}
            <div className={`w-full max-w-2xl mx-auto mb-10 px-2 sm:px-0 relative ${isSearchActive ? 'z-50' : 'z-20'}`}>
                <SearchBar
                    className="w-full shadow-2xl shadow-primary/10"
                    inputClassName="h-14 sm:h-16 pl-14 text-lg bg-background/80 backdrop-blur-xl border-primary/20 focus:border-primary/50 transition-all rounded-2xl"
                    placeholder="What tool are you looking for today?"
                    autoFocus={false}
                    onSearchStateChange={setIsSearchActive}
                />
            </div>

            {/* Quick Access Tags - Hidden when searching */}
            <div
                className={cn(
                    "flex flex-wrap justify-center gap-2 sm:gap-3 transition-all duration-300",
                    isSearchActive ? "opacity-0 invisible h-0 overflow-hidden" : "opacity-100 visible"
                )}
            >
                <span className="text-sm font-medium text-muted-foreground mr-2 py-1.5">Popular:</span>
                {[
                    { name: 'ROAS Calculator', path: '/ad-tools/roas-calculator' },
                    { name: 'Image Background Remover', path: '/image-tools/image-background-remover' },
                    { name: 'TikTok Downloader', path: '/social-media-tools/tiktok-downloader' },
                    { name: 'Instagram Downloader', path: '/social-media-tools/instagram-downloader' },
                    { name: 'YouTube Channel Name Checker', path: '/social-media-tools/channel-checker' }
                ].map((tool) => (
                    <Link
                        key={tool.name}
                        href={tool.path}
                        className="px-3 py-1.5 rounded-lg bg-muted/50 hover:bg-muted border border-border/50 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        {tool.name}
                    </Link>
                ))}
            </div>
        </>
    )
}
