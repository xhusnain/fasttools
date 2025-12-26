"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GTextarea } from "@/ui/gtextarea"
import { GLabel } from "@/ui/glabel"
import { Copy, Check, Sparkles, RotateCcw, ArrowLeftRight } from "lucide-react"
import { calculateSimilarity, getTextStats } from "@/lib/simhash"

const SAMPLE_TEXT_A = `The quick brown fox jumps over the lazy dog. This is a sample text to demonstrate the text similarity checker. It uses SimHash algorithm to calculate fingerprints and compare documents.`

const SAMPLE_TEXT_B = `The quick brown fox leaps over the lazy dog. This is a sample text to show the text similarity tool. It uses SimHash algorithm to compute fingerprints and compare texts.`

export function TextSimilarityChecker() {
    const [textA, setTextA] = useState("")
    const [textB, setTextB] = useState("")
    const [result, setResult] = useState<{
        similarity: number
        fingerprint1: string
        fingerprint2: string
        hammingDistance: number
    } | null>(null)
    const [copied, setCopied] = useState<"a" | "b" | null>(null)

    const loadSampleTexts = () => {
        setTextA(SAMPLE_TEXT_A)
        setTextB(SAMPLE_TEXT_B)
        setResult(null)
    }

    const clearAll = () => {
        setTextA("")
        setTextB("")
        setResult(null)
    }

    const swapTexts = () => {
        const temp = textA
        setTextA(textB)
        setTextB(temp)
        setResult(null)
    }

    const compare = () => {
        if (!textA.trim() || !textB.trim()) return
        const comparisonResult = calculateSimilarity(textA, textB)
        setResult(comparisonResult)
    }

    const copyFingerprint = (which: "a" | "b") => {
        if (!result) return
        const fp = which === "a" ? result.fingerprint1 : result.fingerprint2
        navigator.clipboard.writeText(fp)
        setCopied(which)
        setTimeout(() => setCopied(null), 2000)
    }

    const statsA = textA ? getTextStats(textA) : null
    const statsB = textB ? getTextStats(textB) : null

    const getSimilarityColor = (similarity: number) => {
        if (similarity >= 80) return "text-green-600 dark:text-green-400"
        if (similarity >= 50) return "text-yellow-600 dark:text-yellow-400"
        return "text-red-600 dark:text-red-400"
    }

    const getSimilarityBg = (similarity: number) => {
        if (similarity >= 80) return "bg-green-500"
        if (similarity >= 50) return "bg-yellow-500"
        return "bg-red-500"
    }

    const getSimilarityLabel = (similarity: number) => {
        if (similarity >= 90) return "Nearly Identical"
        if (similarity >= 80) return "Very Similar"
        if (similarity >= 60) return "Similar"
        if (similarity >= 40) return "Somewhat Similar"
        if (similarity >= 20) return "Different"
        return "Very Different"
    }

    return (
        <div className="space-y-6">
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2">
                <GButton variant="outline" size="sm" onClick={loadSampleTexts} className="gap-1.5">
                    <Sparkles className="h-3.5 w-3.5" />
                    Try Sample
                </GButton>
                <GButton variant="outline" size="sm" onClick={swapTexts} disabled={!textA && !textB} className="gap-1.5">
                    <ArrowLeftRight className="h-3.5 w-3.5" />
                    Swap
                </GButton>
                <GButton variant="outline" size="sm" onClick={clearAll} disabled={!textA && !textB} className="gap-1.5">
                    <RotateCcw className="h-3.5 w-3.5" />
                    Clear
                </GButton>
            </div>

            {/* Text Input A */}
            <div className="space-y-2">
                <GLabel htmlFor="text-a" className="text-sm font-medium">
                    Text A
                </GLabel>
                <GTextarea
                    id="text-a"
                    placeholder="Enter the first text to compare..."
                    value={textA}
                    onChange={(e) => {
                        setTextA(e.target.value)
                        setResult(null)
                    }}
                    className="min-h-32 font-mono text-sm border-2 border-blue-300 focus:border-primary"
                />
                {statsA && (
                    <div className="flex gap-4 text-xs text-muted-foreground">
                        <span>{statsA.words} words</span>
                        <span>{statsA.characters} chars</span>
                        <span>{statsA.features} features</span>
                    </div>
                )}
            </div>

            {/* Text Input B */}
            <div className="space-y-2">
                <GLabel htmlFor="text-b" className="text-sm font-medium">
                    Text B
                </GLabel>
                <GTextarea
                    id="text-b"
                    placeholder="Enter the second text to compare..."
                    value={textB}
                    onChange={(e) => {
                        setTextB(e.target.value)
                        setResult(null)
                    }}
                    className="min-h-32 font-mono text-sm border-2 border-purple-300 focus:border-purple-500"
                />
                {statsB && (
                    <div className="flex gap-4 text-xs text-muted-foreground">
                        <span>{statsB.words} words</span>
                        <span>{statsB.characters} chars</span>
                        <span>{statsB.features} features</span>
                    </div>
                )}
            </div>

            {/* Compare Button */}
            <GButton onClick={compare} className="w-full" disabled={!textA.trim() || !textB.trim()}>
                Compare Texts
            </GButton>

            {/* Results */}
            {result && (
                <div className="space-y-4">
                    {/* Similarity Score */}
                    <div className="p-6 rounded-lg bg-muted/30 border border-border text-center">
                        <div className="text-sm text-muted-foreground mb-2">Similarity Score</div>
                        <div className={`text-5xl font-bold ${getSimilarityColor(result.similarity)}`}>
                            {result.similarity}%
                        </div>
                        <div className={`text-sm mt-2 ${getSimilarityColor(result.similarity)}`}>
                            {getSimilarityLabel(result.similarity)}
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-4 h-3 bg-muted rounded-full overflow-hidden">
                            <div
                                className={`h-full transition-all duration-500 ${getSimilarityBg(result.similarity)}`}
                                style={{ width: `${result.similarity}%` }}
                            />
                        </div>
                    </div>

                    {/* Technical Details */}
                    <div className="p-4 rounded-lg bg-muted/30 border border-border space-y-4">
                        <h3 className="text-sm font-semibold text-foreground">Technical Details</h3>

                        <div className="grid gap-4">
                            {/* Hamming Distance */}
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-muted-foreground">Hamming Distance</span>
                                <span className="font-mono text-sm font-medium">
                                    {result.hammingDistance} / 64 bits
                                </span>
                            </div>

                            {/* Fingerprint A */}
                            <div className="space-y-1">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">Fingerprint A</span>
                                    <GButton
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => copyFingerprint("a")}
                                        className="h-7 px-2"
                                    >
                                        {copied === "a" ? (
                                            <Check className="h-3.5 w-3.5" />
                                        ) : (
                                            <Copy className="h-3.5 w-3.5" />
                                        )}
                                    </GButton>
                                </div>
                                <code className="block p-2 bg-background rounded text-xs font-mono break-all border">
                                    0x{result.fingerprint1}
                                </code>
                            </div>

                            {/* Fingerprint B */}
                            <div className="space-y-1">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">Fingerprint B</span>
                                    <GButton
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => copyFingerprint("b")}
                                        className="h-7 px-2"
                                    >
                                        {copied === "b" ? (
                                            <Check className="h-3.5 w-3.5" />
                                        ) : (
                                            <Copy className="h-3.5 w-3.5" />
                                        )}
                                    </GButton>
                                </div>
                                <code className="block p-2 bg-background rounded text-xs font-mono break-all border">
                                    0x{result.fingerprint2}
                                </code>
                            </div>
                        </div>
                    </div>

                    {/* Explanation */}
                    <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900">
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                            <strong>How it works:</strong> SimHash generates 64-bit fingerprints where similar
                            documents produce similar fingerprints. The Hamming distance counts differing bits.
                            Fewer differing bits means higher similarity.
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}
