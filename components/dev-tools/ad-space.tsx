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
  const adRef = useRef<HTMLDivElement>(null)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [adFailed, setAdFailed] = useState(false)
  const [adInitialized, setAdInitialized] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const existing = document.querySelector(
      `script[src^="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]`
    ) as HTMLScriptElement | null

    if (existing) {
      setScriptLoaded(true)
      return
    }

    if (!(window as any).__adsenseScriptAppended) {
      const script = document.createElement("script")
      script.async = true
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`
      script.crossOrigin = "anonymous"
      script.onload = () => setScriptLoaded(true)
      document.head.appendChild(script)
        ; (window as any).__adsenseScriptAppended = true
    }
  }, [])

  useEffect(() => {
    if (
      !scriptLoaded ||
      !adRef.current ||
      typeof window === "undefined" ||
      adInitialized
    ) {
      return
    }

    try {
      if (adRef.current.querySelector("ins.adsbygoogle")) {
        setAdInitialized(true)
        return
      }

      try {
        adRef.current.innerHTML = ""

        const adElement = document.createElement("ins")
        adElement.className = "adsbygoogle"
        adElement.style.display = "block"
        adElement.setAttribute("data-ad-client", AD_CLIENT)
        adElement.setAttribute("data-ad-slot", AD_SLOTS[format])
        adElement.setAttribute("data-ad-format", "auto")
        adElement.setAttribute("data-full-width-responsive", "true")

        adRef.current.appendChild(adElement)

        if (window.adsbygoogle) {
          window.adsbygoogle.push({})
        }
        setAdInitialized(true)

        setTimeout(() => {
          if (adRef.current && !adRef.current.querySelector("iframe")) {
            setAdFailed(true)
          }
        }, 3000)
      } catch (error) {
        console.warn("Ad init warning:", error)
        setAdFailed(true)
      }
    } catch { }
  }, [scriptLoaded, format, adInitialized])

  if (process.env.NODE_ENV !== "production") {
    return (
      <div
        ref={adRef}
        className={`${className} min-h-0 bg-card border border-border rounded-lg overflow-hidden flex items-center justify-center`}
        aria-label="Advertisement (Development Mode)"
        style={{ minHeight: format === 'horizontal' ? '96px' : '250px' }}
      >
        <div className="text-muted-foreground text-sm font-medium text-center px-2">
          <div>Ad Space</div>
          <div className="text-xs opacity-75 mt-1">Format: {format}</div>
        </div>
      </div>
    )
  }

  if (adFailed) {
    return null
  }

  return (
    <div
      ref={adRef}
      className={`${className} min-h-0 rounded-lg overflow-hidden`}
      aria-label="Advertisement"
      style={{ minHeight: '0px' }}
    />
  )
}
