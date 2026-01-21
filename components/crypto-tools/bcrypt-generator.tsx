"use client"

import { useState, useEffect, useMemo } from "react"
import bcrypt from "bcryptjs"
import { Lock, Shield, Copy, RefreshCw, CheckCircle2, XCircle, Info, Gauge, Zap } from "lucide-react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GCard, GCardContent, GCardHeader, GCardTitle, GCardDescription } from "@/ui/gcard"
import { GLabel } from "@/ui/glabel"
import { GSlider } from "@/ui/gslider"
import { GBadge } from "@/ui/gbadge"
import { GProgress } from "@/ui/gprogress"
import { toast } from "sonner"

export function BcryptGenerator() {
    // Hashing State
    const [input, setInput] = useState("")
    const [saltRounds, setSaltRounds] = useState(10)
    const [hashedValue, setHashedValue] = useState("")
    const [isGenerating, setIsGenerating] = useState(false)
    const [hashingTime, setHashingTime] = useState<number | null>(null)

    // Comparison State
    const [compareString, setCompareString] = useState("")
    const [compareHash, setCompareHash] = useState("")
    const [matchResult, setMatchResult] = useState<boolean | null>(null)

    // Generate Hash
    const generateHash = async () => {
        if (!input) {
            setHashedValue("")
            setHashingTime(null)
            return
        }

        setIsGenerating(true)
        const start = performance.now()

        try {
            // Using a timeout to prevent UI blocking for high salt rounds
            setTimeout(() => {
                const salt = bcrypt.genSaltSync(saltRounds)
                const hash = bcrypt.hashSync(input, salt)
                const end = performance.now()

                setHashedValue(hash)
                setHashingTime(end - start)
                setIsGenerating(false)
            }, 0)
        } catch (error) {
            toast.error("Error generating Bcrypt hash")
            setIsGenerating(false)
        }
    }

    // Effect for auto-generation (debounced or on demand? Let's do it on button click for bcrypt as it's slow)
    useEffect(() => {
        if (input && saltRounds <= 12) {
            generateHash()
        }
    }, [input, saltRounds])

    // Compare Hash
    useEffect(() => {
        if (!compareString || !compareHash) {
            setMatchResult(null)
            return
        }

        try {
            const matches = bcrypt.compareSync(compareString, compareHash)
            setMatchResult(matches)
        } catch (error) {
            setMatchResult(false)
        }
    }, [compareString, compareHash])

    const copyToClipboard = (text: string) => {
        if (!text) return
        navigator.clipboard.writeText(text)
        toast.success("Hash copied to clipboard")
    }

    const getStrength = (rounds: number) => {
        if (rounds < 8) return { label: "Weak", color: "text-red-500", progress: 25 }
        if (rounds < 11) return { label: "Standard", color: "text-blue-500", progress: 50 }
        if (rounds < 13) return { label: "Strong", color: "text-green-500", progress: 75 }
        return { label: "Paranoid", color: "text-purple-500", progress: 100 }
    }

    const strength = useMemo(() => getStrength(saltRounds), [saltRounds])

    return (
        <div className="grid gap-8 lg:grid-cols-2">
            {/* Hash Generation Card */}
            <div className="space-y-6">
                <GCard className="border-border/50 shadow-xl bg-card/50 backdrop-blur-sm overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Lock size={120} />
                    </div>
                    <GCardHeader>
                        <GCardTitle className="text-2xl flex items-center gap-2">
                            <Zap className="w-6 h-6 text-yellow-500" />
                            Bcrypt Hashing
                        </GCardTitle>
                        <GCardDescription>
                            Generate secure Blowfish-based hashes with custom work factors.
                        </GCardDescription>
                    </GCardHeader>
                    <GCardContent className="space-y-6 relative">
                        <div className="space-y-2">
                            <GLabel htmlFor="bcrypt-input">Text to Hash</GLabel>
                            <GInput
                                id="bcrypt-input"
                                placeholder="Enter sensitive string..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="bg-background/50 border-primary/20 focus:border-primary transition-all font-mono"
                            />
                        </div>

                        <div className="space-y-4 p-4 bg-muted/30 rounded-xl border border-border/50">
                            <div className="flex justify-between items-center mb-2">
                                <GLabel className="flex items-center gap-2 font-semibold">
                                    <Gauge className="w-4 h-4 text-primary" />
                                    Salt Rounds (Cost Factor): {saltRounds}
                                </GLabel>
                                <GBadge variant="outline" className={`${strength.color} border-current`}>
                                    {strength.label}
                                </GBadge>
                            </div>
                            <GSlider
                                value={[saltRounds]}
                                onValueChange={(val) => setSaltRounds(val[0])}
                                min={4}
                                max={20}
                                step={1}
                                className="py-4"
                            />
                            <div className="space-y-1">
                                <div className="flex justify-between text-[10px] text-muted-foreground uppercase tracking-wider">
                                    <span>Faster / Less Secure</span>
                                    <span>Slower / More Secure</span>
                                </div>
                                <GProgress value={strength.progress} className="h-1.5" />
                            </div>
                            <p className="text-xs text-muted-foreground flex items-start gap-1.5 leading-tight italic">
                                <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-primary" />
                                Higher rounds exponentially increase the time needed to crack the hash but also increases generation time. 10-12 is recommended for modern web apps.
                            </p>
                        </div>

                        <GButton
                            className="w-full h-12 text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all border-none"
                            onClick={generateHash}
                            disabled={isGenerating || !input}
                        >
                            {isGenerating ? (
                                <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                            ) : (
                                <Lock className="mr-2 h-5 w-5" />
                            )}
                            {isGenerating ? "Computing..." : "Generate Secure Hash"}
                        </GButton>

                        {hashedValue && (
                            <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-500">
                                <div className="flex justify-between items-end">
                                    <GLabel className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Resulting Hash</GLabel>
                                    {hashingTime !== null && (
                                        <span className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-full font-mono">
                                            Time: {hashingTime.toFixed(2)}ms
                                        </span>
                                    )}
                                </div>
                                <div className="relative group">
                                    <div className="block w-full p-4 pr-12 rounded-lg bg-muted/80 border border-primary/30 font-mono text-sm break-all text-primary select-all min-h-[50px]">
                                        {hashedValue}
                                    </div>
                                    <GButton
                                        size="icon"
                                        variant="ghost"
                                        className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 hover:bg-primary/20"
                                        onClick={() => copyToClipboard(hashedValue)}
                                    >
                                        <Copy className="h-4 w-4" />
                                    </GButton>
                                </div>
                            </div>
                        )}
                    </GCardContent>
                </GCard>
            </div>

            {/* Verification Card */}
            <div className="space-y-6">
                <GCard className="border-border/50 shadow-xl bg-card/50 backdrop-blur-sm overflow-hidden h-full">
                    <GCardHeader>
                        <GCardTitle className="text-2xl flex items-center gap-2">
                            <Shield className="w-6 h-6 text-green-500" />
                            Hash Verifier
                        </GCardTitle>
                        <GCardDescription>
                            Compare a plain-text string against an existing Bcrypt hash to verify accuracy.
                        </GCardDescription>
                    </GCardHeader>
                    <GCardContent className="space-y-6">
                        <div className="space-y-2">
                            <GLabel htmlFor="compare-string">Plain Text String</GLabel>
                            <GInput
                                id="compare-string"
                                placeholder="Enter string to compare..."
                                value={compareString}
                                onChange={(e) => setCompareString(e.target.value)}
                                className="bg-background/50"
                            />
                        </div>

                        <div className="space-y-2">
                            <GLabel htmlFor="compare-hash">Bcrypt Hash</GLabel>
                            <GInput
                                id="compare-hash"
                                placeholder="$2a$10$..."
                                value={compareHash}
                                onChange={(e) => setCompareHash(e.target.value)}
                                className="bg-background/50 font-mono"
                            />
                        </div>

                        <div className="pt-4">
                            {matchResult !== null ? (
                                <div className={`flex flex-col items-center justify-center p-8 rounded-2xl border-2 transition-all duration-500 ${matchResult
                                        ? "bg-green-500/10 border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.1)]"
                                        : "bg-red-500/10 border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.1)]"
                                    }`}>
                                    {matchResult ? (
                                        <CheckCircle2 className="w-16 h-16 text-green-500 mb-4 animate-in zoom-in duration-300" />
                                    ) : (
                                        <XCircle className="w-16 h-16 text-red-500 mb-4 animate-in zoom-in duration-300" />
                                    )}
                                    <h3 className={`text-2xl font-black uppercase tracking-tighter ${matchResult ? "text-green-500" : "text-red-500"}`}>
                                        {matchResult ? "Match Verified" : "No Match Found"}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-2 text-center max-w-[200px]">
                                        {matchResult
                                            ? "The provided string correctly matches the cryptographic hash."
                                            : "The string and hash do not match. Double-check for typos."}
                                    </p>
                                </div>
                            ) : (
                                <div className="border-2 border-dashed border-border/50 rounded-2xl p-8 flex flex-col items-center justify-center grayscale opacity-50">
                                    <Shield className="w-16 h-16 text-muted-foreground mb-4" />
                                    <p className="text-sm font-medium text-muted-foreground">Waiting for input to verify...</p>
                                </div>
                            )}
                        </div>

                        <div className="p-4 bg-muted/30 rounded-xl border border-border/50 space-y-2">
                            <h4 className="text-xs font-bold uppercase text-primary flex items-center gap-1.5">
                                <Info className="w-3.5 h-3.5" />
                                Developer Note
                            </h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Bcrypt verification is safe to perform client-side as the hash contains the salt needed for comparison. No data is sent to the server.
                            </p>
                        </div>
                    </GCardContent>
                </GCard>
            </div>
        </div>
    )
}
