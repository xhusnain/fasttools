"use client"

import { useState, useCallback } from "react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GCard } from "@/ui/gcard"
import { Search, CheckCircle, XCircle, Lightbulb, Copy, ExternalLink, AlertCircle, RefreshCw } from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"
import type { HandleCheckResult, HandleVariation } from "@/types/social-media-types/youtube-handle-checker.types"

interface YoutubeHandleCheckerProps {
    className?: string
}

export function YoutubeHandleChecker({ className }: YoutubeHandleCheckerProps) {
    const [input, setInput] = useState("")
    const [isChecking, setIsChecking] = useState(false)
    const [result, setResult] = useState<HandleCheckResult | null>(null)
    const [variations, setVariations] = useState<HandleVariation[]>([])
    const [error, setError] = useState<string | null>(null)

    // Generate smart handle variations
    const generateVariations = useCallback((handle: string): HandleVariation[] => {
        const cleanHandle = handle.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        const variations: HandleVariation[] = []

        // Prefix variations
        const prefixes = ['The', 'Official', 'Real', 'Its']
        prefixes.forEach(prefix => {
            variations.push({
                handle: `${prefix}${cleanHandle}`,
                type: 'prefix',
                available: null
            })
        })

        // Suffix variations
        const suffixes = ['TV', 'HQ', 'Official', 'Channel', 'YT']
        suffixes.forEach(suffix => {
            variations.push({
                handle: `${cleanHandle}${suffix}`,
                type: 'suffix',
                available: null
            })
        })

        // Underscore variations
        if (cleanHandle.length > 4) {
            const mid = Math.floor(cleanHandle.length / 2)
            variations.push({
                handle: `${cleanHandle.slice(0, mid)}_${cleanHandle.slice(mid)}`,
                type: 'underscore',
                available: null
            })
        }

        // Abbreviation (if name is long enough)
        if (cleanHandle.length > 6) {
            const abbrev = cleanHandle.slice(0, 3) + cleanHandle.slice(-2)
            variations.push({
                handle: abbrev.toUpperCase(),
                type: 'abbreviation',
                available: null
            })
        }

        return variations.slice(0, 8) // Limit to 8 variations
    }, [])

    // Check a single handle's availability
    const checkHandle = useCallback(async (handle: string): Promise<HandleCheckResult> => {
        try {
            const response = await fetch('/api/youtube/channel-check', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ channelNames: [handle] }),
            })

            if (!response.ok) {
                throw new Error('Failed to check handle')
            }

            const data = await response.json()
            const channelResult = data.results[0]

            return {
                handle,
                available: channelResult.available,
                channelUrl: channelResult.channelUrl,
                error: channelResult.error
            }
        } catch (err) {
            return {
                handle,
                available: false,
                error: err instanceof Error ? err.message : 'Unknown error'
            }
        }
    }, [])

    // Main check function
    const handleCheck = async () => {
        const cleanInput = input.trim().replace('@', '')
        if (!cleanInput) return

        setIsChecking(true)
        setError(null)
        setResult(null)
        setVariations([])

        try {
            // Check the main handle
            const mainResult = await checkHandle(cleanInput)
            setResult(mainResult)

            // If not available, generate and show variations
            if (!mainResult.available && !mainResult.error) {
                const newVariations = generateVariations(cleanInput)
                setVariations(newVariations)

                // Check variations in background (first 4 only for speed)
                const variationsToCheck = newVariations.slice(0, 4)
                for (let i = 0; i < variationsToCheck.length; i++) {
                    const variation = variationsToCheck[i]

                    // Mark as checking
                    setVariations(prev => prev.map((v, idx) =>
                        idx === i ? { ...v, checking: true } : v
                    ))

                    // Add small delay between checks
                    if (i > 0) {
                        await new Promise(resolve => setTimeout(resolve, 1000))
                    }

                    const varResult = await checkHandle(variation.handle)

                    // Update variation with result
                    setVariations(prev => prev.map((v, idx) =>
                        idx === i ? { ...v, available: varResult.available, checking: false } : v
                    ))
                }
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred')
        } finally {
            setIsChecking(false)
        }
    }

    // Check a specific variation on demand
    const checkVariation = async (index: number) => {
        const variation = variations[index]
        if (variation.available !== null || variation.checking) return

        setVariations(prev => prev.map((v, idx) =>
            idx === index ? { ...v, checking: true } : v
        ))

        const result = await checkHandle(variation.handle)

        setVariations(prev => prev.map((v, idx) =>
            idx === index ? { ...v, available: result.available, checking: false } : v
        ))
    }

    const copyToClipboard = useCallback(async (text: string) => {
        try {
            await navigator.clipboard.writeText(text)
        } catch (err) {
            console.error('Failed to copy:', err)
        }
    }, [])

    return (
        <div className={`space-y-6 ${className || ''}`}>
            <GCard className="p-6 bg-card border-border shadow-sm">
                <div className="space-y-4">
                    <div>
                        <GLabel htmlFor="handle-input" className="text-sm font-medium text-foreground mb-2 block">
                            YouTube Handle or URL
                        </GLabel>
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">@</span>
                                <GInput
                                    id="handle-input"
                                    placeholder="YourChannelName"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
                                    className="pl-8"
                                />
                            </div>
                            <GButton
                                onClick={handleCheck}
                                disabled={!input.trim() || isChecking}
                                isLoading={isChecking}
                            >
                                {isChecking ? 'Checking...' : (
                                    <>
                                        <Search className="mr-2 h-4 w-4" />
                                        Check
                                    </>
                                )}
                            </GButton>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                            Enter a YouTube handle (without @) or custom URL to check availability
                        </p>
                    </div>
                </div>
            </GCard>

            {error && (
                <GCard className="p-4 bg-card border-red-500 shadow-sm">
                    <div className="flex items-center gap-3">
                        <AlertCircle className="h-5 w-5 text-red-500" />
                        <p className="text-sm text-foreground">{error}</p>
                    </div>
                </GCard>
            )}

            {result && (
                <GCard className={`p-6 bg-card border-border shadow-sm ${result.available ? 'border-green-500' : 'border-orange-500'}`}>
                    <div className="flex items-center gap-4">
                        {result.available ? (
                            <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                                <CheckCircle className="h-6 w-6 text-green-500" />
                            </div>
                        ) : (
                            <div className="h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                                <XCircle className="h-6 w-6 text-orange-500" />
                            </div>
                        )}
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground">@{result.handle}</h3>
                            <p className={`text-sm ${result.available ? 'text-green-600' : 'text-orange-600'}`}>
                                {result.available ? '✓ This handle appears to be available!' : '✗ This handle is already taken'}
                            </p>
                        </div>
                        {result.channelUrl && (
                            <GButton
                                variant="outline"
                                size="sm"
                                onClick={() => window.open(result.channelUrl, '_blank')}
                            >
                                <ExternalLink className="h-4 w-4 mr-1" />
                                View Channel
                            </GButton>
                        )}
                    </div>
                </GCard>
            )}

            {variations.length > 0 && !result?.available && (
                <GCard className="p-6 bg-card border-border shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                        <Lightbulb className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold text-foreground">Suggested Alternatives</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {variations.map((variation, index) => (
                            <div
                                key={index}
                                className={`flex items-center justify-between p-3 rounded-lg border transition-all ${variation.available === true
                                        ? 'border-green-500 bg-green-500/5'
                                        : variation.available === false
                                            ? 'border-red-500/30 bg-red-500/5'
                                            : 'border-border hover:border-primary/50'
                                    }`}
                            >
                                <div className="flex items-center gap-2">
                                    {variation.checking ? (
                                        <LoadingSpinner className="h-4 w-4" />
                                    ) : variation.available === true ? (
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                    ) : variation.available === false ? (
                                        <XCircle className="h-4 w-4 text-red-400" />
                                    ) : (
                                        <div className="h-4 w-4 rounded-full border-2 border-muted-foreground/30" />
                                    )}
                                    <span className="text-sm font-medium">@{variation.handle}</span>
                                    <span className="text-xs text-muted-foreground capitalize">({variation.type})</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    {variation.available === null && !variation.checking && (
                                        <GButton
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => checkVariation(index)}
                                            className="h-7 w-7 p-0"
                                        >
                                            <RefreshCw className="h-3 w-3" />
                                        </GButton>
                                    )}
                                    <GButton
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => copyToClipboard(variation.handle)}
                                        className="h-7 w-7 p-0"
                                    >
                                        <Copy className="h-3 w-3" />
                                    </GButton>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-xs text-muted-foreground text-center mt-4">
                        Click the refresh icon to check availability, or copy icon to copy the handle
                    </p>
                </GCard>
            )}

            <GCard className="p-6 bg-muted/30 border-border">
                <h3 className="text-base font-semibold text-foreground mb-3">Tips for YouTube Handles</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Handles must be unique across all of YouTube</li>
                    <li>• Use 3-30 characters with letters, numbers, underscores, or hyphens</li>
                    <li>• Cannot contain spaces or special characters</li>
                    <li>• Must not impersonate other channels or brands</li>
                </ul>
            </GCard>
        </div>
    )
}
