"use client"

import { useEffect, useRef, useState } from "react"

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

interface AdSpaceProps {
  className?: string
  format?: "horizontal" | "vertical" | "square"
}

const AD_SLOTS = {
  horizontal: "4493038763",
  vertical: "5211934507",
  square: "4114475250"
} as const

const AD_CLIENT = "ca-pub-6296569221534302"

export function AdSpace({ className = "", format = "square" }: AdSpaceProps) {
  const adRef = useRef<HTMLModElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined" || (window as any).__adsenseScriptAppended) return
    const script = document.createElement("script")
    script.async = true
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`
    script.crossOrigin = "anonymous"
    document.head.appendChild(script)
      ; (window as any).__adsenseScriptAppended = true
  }, [])

  useEffect(() => {
    if (!adRef.current || shouldLoad) return

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting && entry.intersectionRatio > 0) {
        setShouldLoad(true)
        observer.disconnect()
      }
    })

    observer.observe(adRef.current)
    return () => observer.disconnect()
  }, [shouldLoad])

  useEffect(() => {
    if (shouldLoad && window.adsbygoogle) {
      try {
        window.adsbygoogle.push({})
      } catch (e) {
        console.error("AdSense error:", e)
      }
    }
  }, [shouldLoad])

  if (process.env.NODE_ENV !== "production") {
    return (
      <div
        className={`${className} min-h-0 bg-card border border-border rounded-lg overflow-hidden flex items-center justify-center`}
        style={{ minHeight: format === 'horizontal' ? '96px' : '250px' }}
      >
        <div className="text-muted-foreground text-sm font-medium text-center px-2">
          <div>Ad Space ({format})</div>
          <div className="text-xs opacity-50 mt-1">{shouldLoad ? 'Active' : 'Waiting via IntersectionObserver'}</div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${className} min-h-0 rounded-lg overflow-hidden`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={AD_SLOTS[format]}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
