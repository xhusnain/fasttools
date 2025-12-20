"use client"

import { useEffect, useState, useMemo } from "react"

interface Snowflake {
    id: number
    x: number
    delay: number
    duration: number
    size: number
    opacity: number
    drift: number
    type: string
}

const snowflakeChars = ["❄", "❅", "❆", "✻", "✼", "❉", "✿", "•"]

/**
 * WinterSnowfall - App-wide snowfall animation for the winter/Christmas season
 * Features:
 * - Various snowflake types (❄ ❅ ❆)
 * - Realistic physics with drift
 * - Different sizes and speeds
 * - Optimized performance with CSS animations
 */
export function WinterSnowfall() {
    const [mounted, setMounted] = useState(false)

    // Only render on client to avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    // Generate snowflakes with consistent properties
    const snowflakes = useMemo<Snowflake[]>(() => {
        if (typeof window === 'undefined') return []

        return Array.from({ length: 60 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            delay: Math.random() * 15,
            duration: 8 + Math.random() * 12,
            size: 8 + Math.random() * 16,
            opacity: 0.2 + Math.random() * 0.6,
            drift: -30 + Math.random() * 60, // Horizontal drift
            type: snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)]
        }))
    }, [])

    if (!mounted) return null

    return (
        <>
            {/* Snowflake container - fixed position, covers viewport */}
            <div
                className="fixed inset-0 pointer-events-none overflow-hidden z-[9999]"
                aria-hidden="true"
                role="presentation"
            >
                {snowflakes.map((flake) => (
                    <span
                        key={flake.id}
                        className="snowflake absolute"
                        style={{
                            left: `${flake.x}%`,
                            top: '-20px',
                            fontSize: `${flake.size}px`,
                            opacity: flake.opacity,
                            color: 'white',
                            textShadow: '0 0 3px rgba(255,255,255,0.5)',
                            animation: `snowfall-${flake.id % 4} ${flake.duration}s linear ${flake.delay}s infinite`,
                            filter: flake.size > 16 ? 'blur(0.5px)' : 'none'
                        }}
                    >
                        {flake.type}
                    </span>
                ))}
            </div>

            {/* CSS Animations - Multiple variations for realistic effect */}
            <style jsx global>{`
        @keyframes snowfall-0 {
          0% {
            transform: translateY(-20px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          5% { opacity: 0.6; }
          50% { 
            transform: translateY(50vh) translateX(30px) rotate(180deg);
          }
          95% { opacity: 0.4; }
          100% {
            transform: translateY(105vh) translateX(10px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes snowfall-1 {
          0% {
            transform: translateY(-20px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          5% { opacity: 0.5; }
          50% { 
            transform: translateY(50vh) translateX(-25px) rotate(-180deg);
          }
          95% { opacity: 0.3; }
          100% {
            transform: translateY(105vh) translateX(-40px) rotate(-360deg);
            opacity: 0;
          }
        }

        @keyframes snowfall-2 {
          0% {
            transform: translateY(-20px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          5% { opacity: 0.7; }
          25% { 
            transform: translateY(25vh) translateX(15px) rotate(90deg);
          }
          50% { 
            transform: translateY(50vh) translateX(-10px) rotate(180deg);
          }
          75% { 
            transform: translateY(75vh) translateX(20px) rotate(270deg);
          }
          95% { opacity: 0.5; }
          100% {
            transform: translateY(105vh) translateX(5px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes snowfall-3 {
          0% {
            transform: translateY(-20px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          5% { opacity: 0.4; }
          33% { 
            transform: translateY(33vh) translateX(-20px) rotate(120deg);
          }
          66% { 
            transform: translateY(66vh) translateX(25px) rotate(240deg);
          }
          95% { opacity: 0.2; }
          100% {
            transform: translateY(105vh) translateX(-15px) rotate(360deg);
            opacity: 0;
          }
        }

        /* Respect reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .snowflake {
            animation: none !important;
            display: none;
          }
        }
      `}</style>
        </>
    )
}

export default WinterSnowfall
