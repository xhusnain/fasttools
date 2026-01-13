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
        <div className="w-full flex justify-center my-6 overflow-hidden">
            <div className="bg-muted text-muted-foreground text-xs p-2 text-center w-full max-w-[336px] min-h-[280px] hidden">
                Advertisement
            </div>
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-6296569221534302"
                data-ad-slot="4114475250"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6296569221534302"
                crossOrigin="anonymous"></script>
        </div>
    )
}
