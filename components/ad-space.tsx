"use client"

import { useEffect, useRef, useState } from "react"

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
  const initializedRef = useRef(false)

  // Determine ad shape based on className or auto-detection
  useEffect(() => {
    if (shape === "auto") {
      // Auto-detect shape based on className dimensions
      const isHorizontal = className.includes("h-24") || className.includes("h-20") || className.includes("h-36")
      const isVertical = className.includes("h-96") || className.includes("h-64") || className.includes("h-[600px]") || className.includes("h-[400px]") || className.includes("h-[500px]")
      const isSquare = className.includes("h-[600px]") && className.includes("w-full")
      
      if (isHorizontal) {
        setAdShape("horizontal")
      } else if (isVertical) {
        setAdShape("vertical")
      } else if (isSquare) {
        setAdShape("square")
      } else {
        // Default to horizontal for header/footer, vertical for sidebar
        setAdShape(slot === "sidebar" ? "vertical" : "horizontal")
      }
    } else {
      setAdShape(shape)
    }
  }, [shape, className, slot])

  // Load Google AdSense script (once per app)
  useEffect(() => {
    if (typeof window === "undefined") return
    // Skip initializing ads in development to avoid TagError noise
    if (process.env.NODE_ENV !== "production") return

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
      ;(window as any).__adsenseScriptAppended = true
    }
  }, [])

  // Initialize ad when script is loaded (avoid duplicate init)
  useEffect(() => {
    if (
      process.env.NODE_ENV !== "production" ||
      !scriptLoaded ||
      !adRef.current ||
      typeof window === "undefined" ||
      initializedRef.current
    ) {
      return
    }

    try {
      // If an ad element already exists inside, skip
      if (adRef.current.querySelector("ins.adsbygoogle")) {
        initializedRef.current = true
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
        initializedRef.current = true
      } catch (error) {
        // Silently ignore TagError in case of policy/placement restrictions
        // to avoid breaking the UI
        console.warn("Ad init warning:", error)
      }
    } catch {}
  }, [scriptLoaded, adShape])

  return (
    <div
      ref={adRef}
      className={`${className}`}
      aria-label="Advertisement"
    />
  )
}
