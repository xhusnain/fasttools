"use client"

import { useState } from "react"
import { ScientificCalculator } from "@/components/scientific-calculator"
import { AdSpace } from "@/components/ad-space"
import { Clock } from "lucide-react"

interface ScientificCalculatorWrapperProps {
    children: React.ReactNode
}

export function ScientificCalculatorWrapper({ children }: ScientificCalculatorWrapperProps) {
    const [history, setHistory] = useState<string[]>([])
    const [currentDisplay, setCurrentDisplay] = useState("0")

    const clearHistory = () => {
        setHistory([])
    }

    const copyResult = () => {
        navigator.clipboard.writeText(currentDisplay)
    }

    return (
        <div className="grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] gap-2 md:gap-3 lg:gap-4">
            <div className="space-y-6">
                <ScientificCalculator
                    history={history}
                    setHistory={setHistory}
                    clearHistory={clearHistory}
                    copyResult={copyResult}
                    currentDisplay={currentDisplay}
                    setCurrentDisplay={setCurrentDisplay}
                />

                {children}
            </div>

            <div className="space-y-6 hidden lg:block">
                <div className="sticky top-32 space-y-6">
                    <div>
                        <div className="text-center mb-2">
                            <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                        </div>
                        <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
                    </div>

                    <div className="bg-card border border-border rounded-2xl p-4 shadow-xl">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 bg-gradient-to-r from-primary to-primary/90 rounded-lg flex items-center justify-center">
                                <Clock className="h-3 w-3 text-primary-foreground" />
                            </div>
                            <span className="text-sm font-semibold text-heading-accent">History</span>
                        </div>
                        <div className="space-y-2 max-h-60 overflow-y-auto">
                            {history.length > 0 ? (
                                history.slice(0, 6).map((entry, index) => (
                                    <div key={index} className="text-xs text-muted-foreground font-mono break-words p-2 bg-muted rounded border border-border">
                                        {entry}
                                    </div>
                                ))
                            ) : (
                                <div className="text-sm text-muted-foreground text-center py-4">
                                    No calculations yet
                                </div>
                            )}
                        </div>
                        {history.length > 0 && (
                            <div className="flex gap-2 mt-3">
                                <button
                                    onClick={clearHistory}
                                    className="flex items-center gap-1 px-3 py-1 text-xs bg-secondary text-foreground rounded hover:bg-secondary/80 transition-colors border border-border"
                                >
                                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                    Clear
                                </button>
                                <button
                                    onClick={copyResult}
                                    className="flex items-center gap-1 px-3 py-1 text-xs bg-secondary text-foreground rounded hover:bg-secondary/80 transition-colors border border-border"
                                >
                                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    Copy
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
