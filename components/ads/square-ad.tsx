"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

declare global {
    interface Window {
        adsbygoogle: any[]
    }
}

export function SquareAd() {
    const initialized = useRef(false)
    const pathname = usePathname()

    useEffect(() => {
        if (process.env.NODE_ENV !== "production") return

        if (!initialized.current) {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({})
                initialized.current = true
            } catch (err) {
                console.error("AdSense error:", err)
            }
        }
    }, [pathname])

    if (process.env.NODE_ENV !== "production") return null

    return (
        <div className="my-6 overflow-hidden w-full mx-auto">
            <ins
                className="adsbygoogle"
                // Explicit width prevents AdSense's availableWidth=0 TagError
                // when the parent (flex container, hidden sidebar) hasn't
                // sized this slot at the moment adsbygoogle.push() runs.
                // minHeight reserves space so layout doesn't shift.
                style={{ display: "block", width: "100%", minHeight: "250px" }}
                data-ad-client="ca-pub-6296569221534302"
                data-ad-slot="4114475250"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
        </div>
    )
}

