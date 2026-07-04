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
                    className="w-full shadow-lg shadow-primary/10"
                    inputClassName="h-14 sm:h-16 pl-14 text-lg bg-white/90 backdrop-blur-xl border-primary/20 focus:border-primary/50 transition-all rounded-lg"
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
                    { name: 'Instagram DP Viewer', path: '/social-media-tools/instagram-dp' },
                    { name: 'Channel Name Checker', path: '/social-media-tools/channel-checker' },
                    { name: 'Anniversary Calculator', path: '/fun-tools/anniversary-calculator' },
                    { name: 'Hashtag Counter', path: '/social-media-tools/hashtag-counter' },
                    { name: 'AI QR Generator', path: '/ai-tools/qr-generator' },
                    { name: 'Image to PDF', path: '/pdf-tools/image-to-pdf' },
                    { name: 'PDF Compressor', path: '/pdf-tools/pdf-compressor' },
                    { name: 'Currency Converter', path: '/converters/currency' },
                    { name: 'Age Calculator', path: '/calculator/age-calculator' },
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
