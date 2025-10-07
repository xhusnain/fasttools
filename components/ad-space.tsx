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

  // Load Google AdSense script
  useEffect(() => {
    const loadAdSenseScript = () => {
      if (typeof window !== "undefined" && !scriptLoaded) {
        const script = document.createElement("script")
        script.async = true
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`
        script.crossOrigin = "anonymous"
        script.onload = () => setScriptLoaded(true)
        document.head.appendChild(script)
      }
    }

    loadAdSenseScript()
  }, [scriptLoaded])

  // Initialize ad when script is loaded
  useEffect(() => {
    if (scriptLoaded && adRef.current && typeof window !== "undefined") {
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
      } catch (error) {
        console.error("Error initializing ad:", error)
      }
    }
  }, [scriptLoaded, adShape])

  return (
    <div
      ref={adRef}
      className={`${className}`}
      aria-label="Advertisement"
    />
  )
}
