"use client"

import { cn } from "@/lib/utils"

export function HeroBoxes() {
    // Static colors to avoid hydration mismatch and reduce main thread work (INP fix)
    const boxColors = [
        "border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]",
        "border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.3)]",
        "border-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.3)]",
    ]

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
            <div
                className={cn(
                    "absolute top-[10%] left-[5%] transform rotate-12 w-24 h-24 rounded-xl border-2 bg-transparent transition-colors duration-1000",
                    boxColors[0]
                )}
            />
            <div
                className={cn(
                    "absolute top-[20%] right-[10%] transform -rotate-12 w-16 h-16 rounded-lg border-2 bg-transparent transition-colors duration-1000",
                    boxColors[1]
                )}
            />
            <div
                className={cn(
                    "absolute bottom-[15%] left-[15%] transform rotate-6 w-20 h-20 rounded-xl border-2 bg-transparent transition-colors duration-1000",
                    boxColors[2]
                )}
            />
        </div>
    )
}
