"use client"

import { useEffect, useRef, useState } from "react"
import { env } from "@/config/env"

// Google AdSense type declarations
declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

interface AdSpaceProps {
  slot: "header" | "sidebar" | "content" | "footer"
  className?: string
  shape?: "horizontal" | "vertical" | "square" | "auto"
}

// Ad slot configurations
const AD_SLOTS = {
  horizontal: "4493038763",
  vertical: "5211934507",
  square: "4114475250"
} as const

const AD_CLIENT = "ca-pub-6296569221534302"

export function AdSpace({ slot, className = "", shape = "auto" }: AdSpaceProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const [adShape, setAdShape] = useState<"horizontal" | "vertical" | "square">("horizontal")
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [adFailed, setAdFailed] = useState(false)
  const [adInitialized, setAdInitialized] = useState(false)

  // Determine ad shape based on className or auto-detection
  useEffect(() => {
    if (shape === "auto") {
      // Auto-detect shape based on className dimensions
      const isHorizontal = className.includes("h-24") || className.includes("h-20") || className.includes("h-36")
      const isVertical = className.includes("h-96") || className.includes("h-64") || className.includes("h-[600px]") || className.includes("h-[400px]") || className.includes("h-[500px]")
      const isSquare = className.includes("h-[600px]") && className.includes("w-full")
      const isMobileContent = className.includes("h-32") || className.includes("h-24")

      if (isHorizontal || isMobileContent) {
        setAdShape("horizontal")
      } else if (isVertical) {
        setAdShape("vertical")
      } else if (isSquare) {
        setAdShape("square")
      } else {
        // Default to horizontal for header/footer/content, vertical for sidebar
        setAdShape(slot === "sidebar" ? "vertical" : "horizontal")
      }
    } else {
      setAdShape(shape)
    }
  }, [shape, className, slot])

  // Load Google AdSense script (once per app)
  useEffect(() => {
    if (typeof window === "undefined") return

    // If script already exists, mark loaded
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

  // Initialize ad when script is loaded (avoid duplicate init)
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
      // If an ad element already exists inside, skip
      if (adRef.current.querySelector("ins.adsbygoogle")) {
        setAdInitialized(true)
        return
      }

      try {
        // Clear any existing ads
        adRef.current.innerHTML = ""

        // Create the ad element
        const adElement = document.createElement("ins")
        adElement.className = "adsbygoogle"
        adElement.style.display = "block"
        adElement.setAttribute("data-ad-client", AD_CLIENT)
        adElement.setAttribute("data-ad-slot", AD_SLOTS[adShape])
        adElement.setAttribute("data-ad-format", "auto")
        adElement.setAttribute("data-full-width-responsive", "true")

        adRef.current.appendChild(adElement)

        // Push the ad to Google AdSense
        if (window.adsbygoogle) {
          window.adsbygoogle.push({})
        }
        setAdInitialized(true)

        // Set a timeout to detect if ad fails to load
        setTimeout(() => {
          if (adRef.current && !adRef.current.querySelector("iframe")) {
            setAdFailed(true)
          }
        }, 3000)
      } catch (error) {
        // Silently ignore TagError in case of policy/placement restrictions
        // to avoid breaking the UI
        console.warn("Ad init warning:", error)
        setAdFailed(true)
      }
    } catch { }
  }, [scriptLoaded, adShape, adInitialized])

  // Temporary: Hide ads in production as requested
  if (env.isProduction) {
    return null
  }

  // In development, always show the ad space for layout testing
  if (process.env.NODE_ENV !== "production") {
    return (
      <div
        ref={adRef}
        className={`${className} min-h-0 bg-card border border-border rounded-lg overflow-hidden flex items-center justify-center`}
        aria-label="Advertisement (Development Mode)"
        style={{ minHeight: slot === 'header' ? '96px' : slot === 'content' ? '128px' : '320px' }}
      >
        <div className="text-muted-foreground text-sm font-medium text-center px-2">
          <div>Ad Space - {slot}</div>
          <div className="text-xs opacity-75 mt-1">Mobile: {className.includes('h-32') ? '32' : className.includes('h-24') ? '24' : 'Auto'}</div>
        </div>
      </div>
    )
  }

  // Hide the ad space if ad failed to load
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
