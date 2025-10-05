"use client"

import { useEffect, useRef } from "react"

interface AdSpaceProps {
  slot: "header" | "sidebar" | "content"
  className?: string
}

export function AdSpace({ slot, className = "" }: AdSpaceProps) {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // AdSense script will be loaded here
    // This is a placeholder for Google AdSense integration
    console.log(`[v0] Ad space initialized for slot: ${slot}`)
  }, [slot])

  return (
    <div
      ref={adRef}
      className={`bg-muted/30 border border-dashed border-border rounded-lg flex items-center justify-center ${className}`}
      aria-label="Advertisement"
    >
      <div className="text-center p-4">
        <p className="text-xs text-muted-foreground">Advertisement</p>
        <p className="text-xs text-muted-foreground mt-1">{slot} ad slot</p>
      </div>
    </div>
  )
}
