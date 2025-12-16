"use client"

import React, { useState, useRef } from "react"
import { Check, Copy, Terminal } from "lucide-react"
import { cn } from "@/lib/utils"

export const GCode = ({ children, className, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    const [isCopied, setIsCopied] = useState(false)
    const PreRef = useRef<HTMLPreElement>(null)

    // Extract language from className (usually "language-js", etc. provided by Prism)
    // If rehype-prism-plus is sending the class to the pre tag
    const language = className?.replace(/language-/, "") || "text"

    const copyToClipboard = async () => {
        if (!PreRef.current) return

        const code = PreRef.current.innerText
        try {
            await navigator.clipboard.writeText(code)
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 2000)
        } catch (err) {
            console.error("Failed to copy code", err)
        }
    }

    return (
        <div className="relative group my-8 rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl">
            {/* Mac-style Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/5">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F56]" /> {/* Red */}
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" /> {/* Yellow */}
                        <div className="w-3 h-3 rounded-full bg-[#27C93F]" /> {/* Green */}
                    </div>
                </div>

                {/* Language Badge or File Title */}
                <div className="absolute left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground/60 uppercase tracking-widest flex items-center gap-2">
                    <Terminal className="w-3 h-3" />
                    {language}
                </div>

                {/* Copy Button */}
                <button
                    onClick={copyToClipboard}
                    className={cn(
                        "flex items-center gap-1.5 text-xs font-medium transition-all duration-200 px-2 py-1 rounded-md",
                        isCopied
                            ? "text-emerald-400 bg-emerald-400/10"
                            : "text-muted-foreground hover:text-white hover:bg-white/10"
                    )}
                    aria-label="Copy code"
                >
                    {isCopied ? (
                        <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Copied</span>
                        </>
                    ) : (
                        <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                        </>
                    )}
                </button>
            </div>

            {/* Code Content */}
            <div className="relative overflow-x-auto">
                <pre
                    ref={PreRef}
                    className={cn(
                        "p-6 text-sm font-mono leading-relaxed bg-transparent overflow-visible",
                        className
                    )}
                    {...props}
                >
                    {children}
                </pre>
            </div>
        </div>
    )
}
