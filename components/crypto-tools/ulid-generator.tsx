"use client"

import * as React from "react"
import { Copy, RefreshCw, Hash } from "lucide-react"
import { toast } from "sonner"
import { ulid } from "ulid"

import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { GTextarea } from "@/ui/gtextarea"
import { GLabel } from "@/ui/glabel"

type OutputFormat = "raw" | "json"

export function ULIDGenerator() {
    const [quantity, setQuantity] = React.useState(1)
    const [format, setFormat] = React.useState<OutputFormat>("raw")
    const [generatedUlids, setGeneratedUlids] = React.useState("")

    const generateUlids = React.useCallback(() => {
        try {
            const ids: string[] = []
            for (let i = 0; i < quantity; i++) {
                ids.push(ulid())
            }

            if (format === "json") {
                setGeneratedUlids(JSON.stringify(ids, null, 2))
            } else {
                setGeneratedUlids(ids.join("\n"))
            }
        } catch (error) {
            console.error("ULID Generation Error:", error)
            setGeneratedUlids("Error generating ULIDs.")
        }
    }, [quantity, format])

    // Initial gen and auto-regen
    React.useEffect(() => {
        generateUlids()
    }, [generateUlids])

    const handleCopy = () => {
        if (!generatedUlids) return
        void navigator.clipboard.writeText(generatedUlids)
        toast.success("Copied to clipboard")
    }

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Quantity */}
                <div className="space-y-2">
                    <GLabel className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">Quantity (1-100)</GLabel>
                    <GInput
                        type="number"
                        min={1}
                        max={100}
                        value={quantity}
                        onChange={(e) => setQuantity(Math.min(100, Math.max(1, parseInt(e.target.value) || 1)))}
                        className="bg-card/50 border-primary/20 focus:border-primary/50 transition-colors"
                    />
                </div>

                {/* Format selection */}
                <div className="space-y-2">
                    <GLabel className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">Output Format</GLabel>
                    <GSelect value={format} onValueChange={(v) => setFormat(v as OutputFormat)}>
                        <GSelectTrigger className="bg-card/50 border-primary/20 focus:border-primary/50 transition-colors">
                            <GSelectValue placeholder="Select Format" />
                        </GSelectTrigger>
                        <GSelectContent>
                            <GSelectItem value="raw">Raw (One per line)</GSelectItem>
                            <GSelectItem value="json">JSON Array</GSelectItem>
                        </GSelectContent>
                    </GSelect>
                </div>
            </div>

            {/* Output */}
            <div className="space-y-3 pt-4">
                <div className="flex justify-between items-end px-1">
                    <div className="flex items-center gap-2 text-primary">
                        <Hash className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">Generated ULIDs</span>
                    </div>
                    <div className="flex gap-2">
                        <GButton variant="outline" size="sm" onClick={generateUlids} className="h-8 border-primary/20 hover:bg-primary/5">
                            <RefreshCw className="w-3.2 h-3.2 mr-2" />
                            Refresh
                        </GButton>
                        <GButton size="sm" onClick={handleCopy} className="h-8 shadow-lg shadow-primary/20">
                            <Copy className="w-3.2 h-3.2 mr-2" />
                            Copy All
                        </GButton>
                    </div>
                </div>
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                    <GTextarea
                        value={generatedUlids}
                        readOnly
                        rows={Math.min(12, Math.max(5, quantity))}
                        className="relative font-mono text-sm bg-card/40 backdrop-blur-sm border-primary/20 rounded-xl p-4 leading-relaxed"
                    />
                </div>
            </div>

            {/* Value Proposition Tip */}
            <div className="p-4 rounded-xl border border-primary/10 bg-primary/5 flex gap-3 items-start">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <RefreshCw className="w-4 h-4" />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-foreground/80 mb-1">Why ULID?</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        ULIDs are 128-bit compatible with UUIDs but are lexicographically sortable. They offer millisecond precision timestamps and 80 bits of randomness per millisecond.
                    </p>
                </div>
            </div>
        </div>
    )
}
