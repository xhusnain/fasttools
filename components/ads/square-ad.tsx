"use client"

import { useEffect, useRef } from "react"
import { env } from "@/config/env"
import { usePathname } from "next/navigation"

declare global {
    interface Window {
        adsbygoogle: any[]
    }
}

export function SquareAd() {
    const adRef = useRef<HTMLModElement>(null)
    const pathname = usePathname()

    useEffect(() => {
        // Only run in production
        if (process.env.NODE_ENV !== "production") return

        try {
            if (window.adsbygoogle) {
                ; (window.adsbygoogle = window.adsbygoogle || []).push({})
            }
        } catch (err) {
            console.error("AdSense error:", err)
        }
    }, [pathname])

    // Don't render anything if not in production
    if (process.env.NODE_ENV !== "production") return null

    return (
        // Use a fixed 300x250 container (Medium Rectangle - Google Recommended) ensures Mobile CLS stability
        <div className="flex justify-center my-6 overflow-hidden w-[300px] h-[250px] mx-auto">
            {/* Fallback/Dev Placeholder */}
            <div className={`bg-muted text-muted-foreground text-xs p-2 text-center w-full h-full flex items-center justify-center ${process.env.NODE_ENV === 'production' ? 'hidden' : 'flex'}`}>
                Advertisement (300x250)
            </div>

            <ins
                className="adsbygoogle"
                style={{ display: "inline-block", width: "300px", height: "250px" }}
                data-ad-client="ca-pub-6296569221534302"
                data-ad-slot="4114475250"
            ></ins>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6296569221534302"
                crossOrigin="anonymous"></script>
        </div>

    )
}
