"use client"

import { useEffect, useRef } from "react"

declare global {
    interface Window {
        adsbygoogle: any[]
    }
}

export function ArticleAd() {
    const initialized = useRef(false)

    useEffect(() => {
        // Only run in production
        if (process.env.NODE_ENV !== "production") return

        // Prevent double initialization if React Strict Mode is on or if it re-renders
        if (!initialized.current) {
            try {
                if (window.adsbygoogle) {
                    (window.adsbygoogle = window.adsbygoogle || []).push({})
                    initialized.current = true
                }
            } catch (err) {
                console.error("AdSense error:", err)
            }
        }
    }, [])

    if (process.env.NODE_ENV !== "production") {
        return (
            <div className="flex flex-col items-center justify-center my-12 overflow-hidden w-full max-w-4xl mx-auto bg-white/[0.03] border border-dashed border-white/10 rounded-2xl p-12 transition-all hover:bg-white/[0.05]">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/40 mb-4 text-center">In-Article Advertisement</span>
                <div className="text-muted-foreground/60 text-sm font-light">Ad Unit: Article Ad (Fluid)</div>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center my-12 overflow-hidden w-full max-w-4xl mx-auto bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-10">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/40 mb-6 font-medium">Advertisement</span>
            <div className="w-full">
                <ins className="adsbygoogle"
                    style={{ display: "block", textAlign: "center", width: "100%", minHeight: "280px" }}
                    data-ad-layout="in-article"
                    data-ad-format="fluid"
                    data-ad-client="ca-pub-6296569221534302"
                    data-ad-slot="4570471171"></ins>
            </div>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6296569221534302"
                crossOrigin="anonymous"></script>
        </div>
    )
}
