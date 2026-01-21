"use client"

import React, { useState, useEffect, useMemo } from "react"
import { zxcvbn, zxcvbnOptions, ZxcvbnResult } from '@zxcvbn-ts/core'
import * as zxcvbnCommon from '@zxcvbn-ts/language-common'
import * as zxcvbnEn from '@zxcvbn-ts/language-en'
import { GCard, GCardContent, GCardHeader, GCardTitle, GCardDescription } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GProgress } from "@/ui/gprogress"
import { Eye, EyeOff, Shield, RefreshCw, Lock, AlertTriangle, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

// Initialize zxcvbn options once
const options = {
    translations: zxcvbnEn.translations,
    graphs: zxcvbnCommon.adjacencyGraphs,
    dictionary: {
        ...zxcvbnCommon.dictionary,
        ...zxcvbnEn.dictionary,
    },
}
zxcvbnOptions.setOptions(options)

export function PasswordAnalyzerTool() {
    const [password, setPassword] = useState("")
    const [isVisible, setIsVisible] = useState(false)
    const [result, setResult] = useState<ZxcvbnResult | null>(null)

    useEffect(() => {
        if (!password) {
            setResult(null)
            return
        }
        // Debounce calculation for very long passwords
        const timeoutId = setTimeout(() => {
            // zxcvbn works synchronously, wrapping in timeout to not block UI on type
            const res = zxcvbn(password)
            setResult(res)
        }, 50)
        return () => clearTimeout(timeoutId)
    }, [password])

    const strengthColor = useMemo(() => {
        if (!result) return "bg-muted"
        switch (result.score) {
            case 0: return "bg-red-500"
            case 1: return "bg-orange-500"
            case 2: return "bg-yellow-500"
            case 3: return "bg-blue-500"
            case 4: return "bg-green-500"
            default: return "bg-muted"
        }
    }, [result])

    const strengthText = useMemo(() => {
        if (!result) return "Enter Password"
        switch (result.score) {
            case 0: return "Very Weak"
            case 1: return "Weak"
            case 2: return "Fair"
            case 3: return "Good"
            case 4: return "Strong"
            default: return "Unknown"
        }
    }, [result])

    const formatCrackTime = (seconds: number | string) => {
        // zxcvbn returns seconds as number or string display
        // We will use the display strings provided by the library result object usually
        // But the library provides `offline_slow_hashing_1e4_per_second` etc.
        // Let's use the `crack_times_display` from the result if available (standard zxcvbn)
        // @zxcvbn-ts might differ slightly in structure, let's check
        // It returns an object: crack_times_display: { online_no_throttling_10_per_second: "...", ... }
        return seconds
    }

    return (
        <div className="space-y-8">
            <GCard className="border-primary/20 shadow-lg bg-card/50 backdrop-blur-sm">
                <GCardHeader className="bg-muted/30 pb-4 border-b border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <Shield className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <GCardTitle className="text-xl">Password Strength Analyzer</GCardTitle>
                            <GCardDescription>Analyze entropy, crack time, and security score locally.</GCardDescription>
                        </div>
                    </div>
                </GCardHeader>

                <GCardContent className="pt-8 space-y-8">
                    {/* Input Section */}
                    <div className="space-y-4">
                        <div className="relative">
                            <GInput
                                type={isVisible ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Type a password to analyze..."
                                className="pr-12 text-lg h-14 bg-background/50 border-primary/20 focus:border-primary/50 transition-all font-mono"
                            />
                            <button
                                onClick={() => setIsVisible(!isVisible)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {isVisible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                        </div>

                        {/* Strength Meter */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm font-medium">
                                <span>Strength: <span className={cn("font-bold", result?.score === 4 ? "text-green-500" : result?.score === 0 ? "text-red-500" : "")}>{strengthText}</span></span>
                                <span>Score: {result ? result.score : 0}/4</span>
                            </div>
                            <GProgress
                                value={(result ? (result.score + 1) * 20 : 0)}
                                className="h-2"
                                indicatorClassName={strengthColor}
                            />
                        </div>
                    </div>

                    {/* Results Grid */}
                    {result && (
                        <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {/* Crack Time Estimates */}
                            <GCard className="bg-muted/20 border-border/50">
                                <GCardHeader className="pb-2">
                                    <GCardTitle className="text-sm font-medium flex items-center gap-2 text-muted-foreground uppercase tracking-wider">
                                        <RefreshCw className="h-4 w-4" /> Estimated Crack Time
                                    </GCardTitle>
                                </GCardHeader>
                                <GCardContent className="space-y-4">
                                    <div>
                                        <div className="text-xs text-muted-foreground mb-1">Online (Throttled)</div>
                                        <div className="text-lg font-bold text-blue-500">{String(result.crackTimesDisplay.onlineThrottling100PerHour)}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground mb-1">Offline (Slow Hash)</div>
                                        <div className="text-lg font-bold text-yellow-500">{String(result.crackTimesDisplay.offlineSlowHashing1e4PerSecond)}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground mb-1">Offline (Fast Hash)</div>
                                        <div className="text-lg font-bold text-red-500">{String(result.crackTimesDisplay.offlineFastHashing1e10PerSecond)}</div>
                                    </div>
                                </GCardContent>
                            </GCard>

                            {/* Technical Details */}
                            <GCard className="bg-muted/20 border-border/50">
                                <GCardHeader className="pb-2">
                                    <GCardTitle className="text-sm font-medium flex items-center gap-2 text-muted-foreground uppercase tracking-wider">
                                        <Lock className="h-4 w-4" /> Entropy & Patterns
                                    </GCardTitle>
                                </GCardHeader>
                                <GCardContent className="space-y-4">
                                    <div>
                                        <div className="text-xs text-muted-foreground mb-1">Guesses Required (Log10)</div>
                                        <div className="text-lg font-mono font-bold">~10^{Math.floor(Math.log10(result.guesses))}</div>
                                    </div>

                                    {result.feedback.warning && (
                                        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                                            <div className="flex items-center gap-2 text-red-500 font-bold text-xs mb-1">
                                                <AlertTriangle className="h-3 w-3" /> Warning
                                            </div>
                                            <div className="text-sm text-red-400">{result.feedback.warning}</div>
                                        </div>
                                    )}

                                    {result.feedback.suggestions.length > 0 && (
                                        <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                                            <div className="flex items-center gap-2 text-blue-500 font-bold text-xs mb-1">
                                                <CheckCircle2 className="h-3 w-3" /> Suggestions
                                            </div>
                                            <ul className="list-disc list-inside text-sm text-blue-400">
                                                {result.feedback.suggestions.map((s, i) => (
                                                    <li key={i}>{s}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </GCardContent>
                            </GCard>
                        </div>
                    )}
                </GCardContent>
            </GCard>
        </div>
    )
}
