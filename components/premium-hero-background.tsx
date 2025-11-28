"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function PremiumHeroBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none bg-background transition-colors duration-500">
      {/* Minimal Dark Base - Deep Void */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-slate-900/20 via-background to-background" />

      {/* Subtle Grid - Barely Visible */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Minimal Hexagon Structure */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-100">
        <div className="relative w-full h-full animate-float">
          {/* Hexagon SVG */}
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="minimalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.05" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>

            {/* Outer Ring - Thin & Crisp */}
            <path
              d="M100 20 L170 60 L170 140 L100 180 L30 140 L30 60 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary/20"
            />

            {/* Inner Hexagon - Subtle Fill */}
            <path
              d="M100 40 L150 70 L150 130 L100 160 L50 130 L50 70 Z"
              fill="url(#minimalGradient)"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary/10"
            />

            {/* Center Accent */}
            <circle cx="100" cy="100" r="2" className="fill-primary/40 animate-pulse-slow" />
          </svg>
        </div>
      </div>

      {/* Very Subtle Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[25%] left-[25%] w-0.5 h-0.5 bg-foreground/10 rounded-full animate-float" />
        <div className="absolute bottom-[35%] right-[25%] w-0.5 h-0.5 bg-foreground/10 rounded-full animate-float-delayed" />
      </div>
    </div>
  )
}
