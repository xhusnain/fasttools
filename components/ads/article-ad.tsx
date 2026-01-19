"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

declare global {
    interface Window {
        adsbygoogle: any[]
    }
}

export function ArticleAd() {
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

    // Don't render anything if not in production (optional: show placeholder)
    if (process.env.NODE_ENV !== "production") {
        return (
            <div className="flex justify-center my-8 overflow-hidden w-full max-w-[728px] h-[280px] mx-auto bg-muted/20 border border-dashed border-muted-foreground/20 rounded-lg items-center justify-center text-muted-foreground text-xs">
                In-Article Advertisement Placeholder
            </div>
        )
    }

    return (
        <div className="flex justify-center my-8 overflow-hidden w-full mx-auto">
            <ins className="adsbygoogle"
                 style={{ display: "block", textAlign: "center", width: "100%" }}
                 data-ad-layout="in-article"
                 data-ad-format="fluid"
                 data-ad-client="ca-pub-6296569221534302"
                 data-ad-slot="4570471171"></ins>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6296569221534302"
                crossOrigin="anonymous"></script>
        </div>
    )
}
