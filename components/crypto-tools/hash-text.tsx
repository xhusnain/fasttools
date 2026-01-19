"use client"

import { useState, useEffect } from "react"
import CryptoJS from "crypto-js"
import { Copy, RefreshCw, Settings2 } from "lucide-react"
import { GButton } from "@/ui/gbutton"
import { GTextarea } from "@/ui/gtextarea"
import { GCard, GCardContent, GCardHeader, GCardTitle, GCardDescription } from "@/ui/gcard"
import { GLabel } from "@/ui/glabel"
import { GSwitch } from "@/ui/gswitch"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { toast } from "sonner"

export function HashText() {
    const [input, setInput] = useState("")
    const [isUpperCase, setIsUpperCase] = useState(false)
    const [encoding, setEncoding] = useState<"Hex" | "Base64">("Hex")
    const [hashes, setHashes] = useState<Record<string, string>>({})

    const algorithms = [
        { id: "MD5", name: "MD5", fn: CryptoJS.MD5 },
        { id: "SHA1", name: "SHA1", fn: CryptoJS.SHA1 },
        { id: "SHA256", name: "SHA256", fn: CryptoJS.SHA256 },
        { id: "SHA512", name: "SHA512", fn: CryptoJS.SHA512 },
        { id: "SHA224", name: "SHA224", fn: CryptoJS.SHA224 },
        { id: "SHA384", name: "SHA384", fn: CryptoJS.SHA384 },
        { id: "SHA3", name: "SHA3 (Keccak)", fn: CryptoJS.SHA3 },
        { id: "RIPEMD160", name: "RIPEMD160", fn: CryptoJS.RIPEMD160 },
    ]

    useEffect(() => {
        if (!input) {
            setHashes({})
            return
        }

        const newHashes: Record<string, string> = {}

        algorithms.forEach(algo => {
            try {
                const hash = algo.fn(input)
                let result = encoding === "Base64"
                    ? hash.toString(CryptoJS.enc.Base64)
                    : hash.toString(CryptoJS.enc.Hex)

                if (encoding === "Hex" && isUpperCase) {
                    result = result.toUpperCase()
                }

                newHashes[algo.id] = result
            } catch (e) {
                newHashes[algo.id] = "Error generating hash"
            }
        })

        setHashes(newHashes)
    }, [input, isUpperCase, encoding])

    const copyToClipboard = (text: string, label: string) => {
        if (!text) return
        navigator.clipboard.writeText(text)
        toast.success(`Copied ${label} hash to clipboard`)
    }

    return (
        <div className="space-y-8">
            <GCard className="border-border/50 shadow-sm">
                <GCardHeader>
                    <GCardTitle className="text-xl flex items-center gap-2">
                        <Settings2 className="w-5 h-5 text-primary" />
                        Input & Configuration
                    </GCardTitle>
                    <GCardDescription>
                        Enter the text you want to hash and configure the output format.
                    </GCardDescription>
                </GCardHeader>
                <GCardContent className="space-y-6">
                    <div className="space-y-2">
                        <GLabel htmlFor="input-text">Your Text to Hash</GLabel>
                        <GTextarea
                            id="input-text"
                            placeholder="Type or paste your text here..."
                            className="min-h-[120px] font-mono text-sm resize-y"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 p-4 bg-muted/30 rounded-lg border border-border/50">
                        <div className="flex items-center space-x-2">
                            <GLabel htmlFor="encoding-select" className="font-medium">Output Encoding:</GLabel>
                            <GSelect value={encoding} onValueChange={(v: "Hex" | "Base64") => setEncoding(v)}>
                                <GSelectTrigger id="encoding-select" className="w-[140px] h-9">
                                    <GSelectValue />
                                </GSelectTrigger>
                                <GSelectContent>
                                    <GSelectItem value="Hex">Hexadecimal</GSelectItem>
                                    <GSelectItem value="Base64">Base64</GSelectItem>
                                </GSelectContent>
                            </GSelect>
                        </div>

                        {encoding === "Hex" && (
                            <div className="flex items-center space-x-2">
                                <GSwitch
                                    id="uppercase-mode"
                                    checked={isUpperCase}
                                    onCheckedChange={setIsUpperCase}
                                />
                                <GLabel htmlFor="uppercase-mode" className="cursor-pointer font-medium">Uppercase Output</GLabel>
                            </div>
                        )}

                        <div className="flex-1 flex justify-end">
                            <GButton
                                variant="outline"
                                size="sm"
                                onClick={() => setInput("")}
                                disabled={!input}
                                className="h-9"
                            >
                                <RefreshCw className="mr-2 h-3.5 w-3.5" />
                                Clear
                            </GButton>
                        </div>
                    </div>
                </GCardContent>
            </GCard>

            <div className="grid gap-4">
                {algorithms.map((algo) => (
                    <GCard key={algo.id} className="overflow-hidden border-border/50 transition-colors hover:border-primary/20">
                        <div className="flex flex-col md:flex-row">
                            <div className="bg-muted/30 p-3 md:w-48 flex items-center justify-between md:justify-start gap-2 border-b md:border-b-0 md:border-r border-border/50">
                                <span className="font-semibold text-sm">{algo.name}</span>
                                {encoding === "Hex" && (
                                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">
                                        {(hashes[algo.id]?.length || 0)} chars
                                    </span>
                                )}
                            </div>
                            <div className="flex-1 p-3 flex items-center gap-3 min-w-0 bg-card">
                                <code className="flex-1 font-mono text-sm truncate text-muted-foreground select-all">
                                    {hashes[algo.id] || <span className="text-muted-foreground/30 italic">Waiting for input...</span>}
                                </code>
                                <GButton
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 hover:bg-primary/10 hover:text-primary shrink-0"
                                    onClick={() => copyToClipboard(hashes[algo.id], algo.name)}
                                    disabled={!hashes[algo.id]}
                                    title="Copy to clipboard"
                                >
                                    <Copy className="h-4 w-4" />
                                </GButton>
                            </div>
                        </div>
                    </GCard>
                ))}
            </div>
        </div>
    )
}
