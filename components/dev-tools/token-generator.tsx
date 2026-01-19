"use client"

import * as React from "react"
import { Copy, RefreshCw, Sliders, Check, Settings2, Shield, Key, Hash, Lock } from "lucide-react"
import { toast } from "sonner"

import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GTextarea } from "@/ui/gtextarea"
import { GSwitch } from "@/ui/gswitch"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { cn } from "@/lib/utils"

type PresetType = "custom" | "apiKey" | "password" | "pin" | "hex128" | "hex256" | "serial" | "docker"

export function TokenGenerator() {
    // Core Settings
    const [preset, setPreset] = React.useState<PresetType>("apiKey")
    const [length, setLength] = React.useState(32)
    const [count, setCount] = React.useState(1)

    // Character Sets
    const [useUppercase, setUseUppercase] = React.useState(true)
    const [useLowercase, setUseLowercase] = React.useState(true)
    const [useNumbers, setUseNumbers] = React.useState(true)
    const [useSymbols, setUseSymbols] = React.useState(false)
    const [excludeAmbiguous, setExcludeAmbiguous] = React.useState(false)
    const [isHex, setIsHex] = React.useState(false)

    // Formatting
    const [separator, setSeparator] = React.useState<string>("none")
    const [groupSize, setGroupSize] = React.useState(0)
    const [prefix, setPrefix] = React.useState("")
    const [suffix, setSuffix] = React.useState("")

    const [generatedTokens, setGeneratedTokens] = React.useState("")

    // Apply Presets
    const applyPreset = (newPreset: PresetType) => {
        setPreset(newPreset)
        switch (newPreset) {
            case "apiKey":
                setLength(32)
                setUseUppercase(true)
                setUseLowercase(true)
                setUseNumbers(true)
                setUseSymbols(false)
                setExcludeAmbiguous(false)
                setIsHex(false)
                setSeparator("none")
                setGroupSize(0)
                break
            case "password":
                setLength(16)
                setUseUppercase(true)
                setUseLowercase(true)
                setUseNumbers(true)
                setUseSymbols(true)
                setExcludeAmbiguous(true)
                setIsHex(false)
                setSeparator("none")
                setGroupSize(0)
                break
            case "pin":
                setLength(6)
                setUseUppercase(false)
                setUseLowercase(false)
                setUseNumbers(true)
                setUseSymbols(false)
                setIsHex(false)
                setSeparator("none")
                setGroupSize(0)
                break
            case "hex128":
                setLength(32)
                setUseUppercase(false)
                setUseLowercase(true) // Hex is usually lowercase a-f
                setUseNumbers(true)
                setUseSymbols(false)
                setIsHex(true)
                setSeparator("none")
                setGroupSize(0)
                break
            case "hex256":
                setLength(64)
                setUseUppercase(false)
                setUseLowercase(true)
                setUseNumbers(true)
                setUseSymbols(false)
                setIsHex(true)
                setSeparator("none")
                setGroupSize(0)
                break
            case "serial":
                setLength(20)
                setUseUppercase(true)
                setUseLowercase(false)
                setUseNumbers(true)
                setUseSymbols(false)
                setIsHex(false)
                setSeparator("-")
                setGroupSize(5)
                break
            case "docker":
                setLength(12)
                setUseUppercase(false)
                setUseLowercase(true)
                setUseNumbers(true)
                setUseSymbols(false)
                setIsHex(true)
                setSeparator("none")
                setGroupSize(0)
                break
        }
    }

    // Handle manual changes (switch to custom)
    const handleSettingChange = (setter: any, value: any) => {
        setter(value)
        if (preset !== "custom") setPreset("custom")
    }

    const generateTokens = React.useCallback(() => {
        try {
            if (!useUppercase && !useLowercase && !useNumbers && !useSymbols && !isHex) {
                setGeneratedTokens("Please select at least one character set.")
                return
            }

            let chars = ""
            if (isHex) {
                if (useLowercase) chars += "abcdef"
                if (useUppercase) chars += "ABCDEF"
                if (useNumbers) chars += "0123456789"
                // Fallback if nothing selected in Hex mode to avoid crash/empty
                if (chars === "") {
                    // Default to standard hex if user unchecks everything
                    chars = "abcdef0123456789"
                }

            } else {
                if (useUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                if (useLowercase) chars += "abcdefghijklmnopqrstuvwxyz"
                if (useNumbers) chars += "0123456789"
                if (useSymbols) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-="

                if (excludeAmbiguous) {
                    const ambiguous = "il1Lo0O"
                    chars = chars.split("").filter(c => !ambiguous.includes(c)).join("")
                }
            }

            if (chars.length === 0) {
                setGeneratedTokens("No characters available with current filters.")
                return
            }

            const tokens = []
            for (let i = 0; i < count; i++) {
                let token = ""
                for (let j = 0; j < length; j++) {
                    token += chars.charAt(Math.floor(Math.random() * chars.length))
                }

                // Apply Formatting (Grouping)
                if (groupSize > 0 && separator !== "none") {
                    const groups = []
                    for (let k = 0; k < token.length; k += groupSize) {
                        groups.push(token.substring(k, k + groupSize))
                    }
                    token = groups.join(separator)
                }

                // Apply Prefix/Suffix
                token = `${prefix}${token}${suffix}`

                tokens.push(token)
            }

            setGeneratedTokens(tokens.join("\n"))
        } catch (error) {
            console.error("Token Generation Error:", error)
            setGeneratedTokens("Error generating tokens.")
        }
    }, [length, count, useUppercase, useLowercase, useNumbers, useSymbols, excludeAmbiguous, isHex, groupSize, separator, prefix, suffix])

    // Initial load
    React.useEffect(() => {
        // Don't run on mount to let user see default state, or do?
        // Let's run it so box isn't empty
        generateTokens()
    }, []) // Run once on mount? Or dependence? 
    // Better to include generateTokens in dependency but use a ref to track if it's the very first render if we wanted to avoid strict mode double render, 
    // but for this it's fine. Actually, putting it in useEffect with [generateTokens] causes loop if generateTokens isn't stable.
    // generateTokens is memoized with useCallback, so it should be stable.

    React.useEffect(() => {
        generateTokens()
    }, [generateTokens])


    const handleCopy = () => {
        if (!generatedTokens) return
        void navigator.clipboard.writeText(generatedTokens)
        toast.success("Copied to clipboard")
    }

    return (
        <div className="space-y-6">

            {/* Preset Selector Bar */}
            <div className="flex flex-wrap gap-2 p-1 bg-muted/40 rounded-lg border">
                <PresetButton active={preset === "apiKey"} onClick={() => applyPreset("apiKey")} icon={Key} label="API Key" />
                <PresetButton active={preset === "password"} onClick={() => applyPreset("password")} icon={Shield} label="Password" />
                <PresetButton active={preset === "pin"} onClick={() => applyPreset("pin")} icon={Lock} label="PIN" />
                <PresetButton active={preset === "hex256"} onClick={() => applyPreset("hex256")} icon={Hash} label="256-bit Hex" />
                <PresetButton active={preset === "hex128"} onClick={() => applyPreset("hex128")} icon={Hash} label="128-bit Hex" />
                <PresetButton active={preset === "serial"} onClick={() => applyPreset("serial")} icon={Settings2} label="Serial No." />
                <PresetButton active={preset === "custom"} onClick={() => setPreset("custom")} icon={Sliders} label="Custom" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Settings Panel */}
                <div className="lg:col-span-1 space-y-6 bg-card border rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-2 pb-2 border-b">
                        <Sliders className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-lg">Configuration</h3>
                    </div>

                    <div className="space-y-5">
                        {/* Length & Count */}
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <GLabel>Length</GLabel>
                                    <span className="text-xs font-mono bg-primary/10 text-primary px-2 py-0.5 rounded">{length}</span>
                                </div>
                                <input
                                    type="range"
                                    min="4"
                                    max="128"
                                    value={length}
                                    onChange={(e) => handleSettingChange(setLength, parseInt(e.target.value))}
                                    className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <GLabel>Quantity</GLabel>
                                    <span className="text-xs font-mono bg-primary/10 text-primary px-2 py-0.5 rounded">{count}</span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="50"
                                    value={count}
                                    onChange={(e) => setCount(parseInt(e.target.value))} // Count doesn't change preset
                                    className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                            </div>
                        </div>

                        {/* Charsets */}
                        <div className="space-y-3 pt-2">
                            <div className="flex items-center justify-between">
                                <GLabel className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Characters</GLabel>
                            </div>

                            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                                <div className="flex items-center justify-between gap-2">
                                    <GLabel className="cursor-pointer text-sm" onClick={() => handleSettingChange(setUseUppercase, !useUppercase)}>Uppercase</GLabel>
                                    <GSwitch checked={useUppercase} onCheckedChange={(v) => handleSettingChange(setUseUppercase, v)} disabled={isHex} />
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                    <GLabel className="cursor-pointer text-sm" onClick={() => handleSettingChange(setUseLowercase, !useLowercase)}>Lowercase</GLabel>
                                    <GSwitch checked={useLowercase} onCheckedChange={(v) => handleSettingChange(setUseLowercase, v)} />
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                    <GLabel className="cursor-pointer text-sm" onClick={() => handleSettingChange(setUseNumbers, !useNumbers)}>Numbers</GLabel>
                                    <GSwitch checked={useNumbers} onCheckedChange={(v) => handleSettingChange(setUseNumbers, v)} />
                                </div>
                                <div className="flex items-center justify-between gap-2">
                                    <GLabel className="cursor-pointer text-sm" onClick={() => handleSettingChange(setUseSymbols, !useSymbols)}>Symbols</GLabel>
                                    <GSwitch checked={useSymbols} onCheckedChange={(v) => handleSettingChange(setUseSymbols, v)} disabled={isHex} />
                                </div>

                                <div className="flex items-center justify-between gap-2">
                                    <GLabel className="cursor-pointer text-sm" onClick={() => handleSettingChange(setIsHex, !isHex)}>Hex Only</GLabel>
                                    <GSwitch checked={isHex} onCheckedChange={(v) => handleSettingChange(setIsHex, v)} />
                                </div>

                                <div className="flex items-center justify-between gap-2">
                                    <GLabel className="cursor-pointer text-sm" onClick={() => handleSettingChange(setExcludeAmbiguous, !excludeAmbiguous)}>No Ambiguous</GLabel>
                                    <GSwitch checked={excludeAmbiguous} onCheckedChange={(v) => handleSettingChange(setExcludeAmbiguous, v)} disabled={isHex} />
                                </div>
                            </div>
                        </div>

                        {/* Advanced Formatting */}
                        <div className="space-y-3 pt-4 border-t">
                            <GLabel className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Formatting</GLabel>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <GLabel className="text-xs">Group Size</GLabel>
                                    <GInput
                                        type="number"
                                        min="0"
                                        max="32"
                                        value={groupSize}
                                        onChange={(e) => handleSettingChange(setGroupSize, parseInt(e.target.value) || 0)}
                                        className="h-8 text-sm"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <GLabel className="text-xs">Separator</GLabel>
                                    <GSelect value={separator} onValueChange={(v) => handleSettingChange(setSeparator, v)}>
                                        <GSelectTrigger className="h-8 text-sm">
                                            <GSelectValue />
                                        </GSelectTrigger>
                                        <GSelectContent>
                                            <GSelectItem value="none">None</GSelectItem>
                                            <GSelectItem value="-">Dash (-)</GSelectItem>
                                            <GSelectItem value=".">Dot (.)</GSelectItem>
                                            <GSelectItem value="_">Underscore (_)</GSelectItem>
                                            <GSelectItem value=":">Colon (:)</GSelectItem>
                                            <GSelectItem value=" ">Space</GSelectItem>
                                        </GSelectContent>
                                    </GSelect>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <GLabel className="text-xs">Prefix</GLabel>
                                    <GInput
                                        placeholder="e.g. sk_"
                                        value={prefix}
                                        onChange={(e) => handleSettingChange(setPrefix, e.target.value)}
                                        className="h-8 text-sm font-mono"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <GLabel className="text-xs">Suffix</GLabel>
                                    <GInput
                                        placeholder="e.g. _test"
                                        value={suffix}
                                        onChange={(e) => handleSettingChange(setSuffix, e.target.value)}
                                        className="h-8 text-sm font-mono"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Output Panel */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="bg-card border rounded-xl p-5 shadow-sm h-full flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2">
                                <h3 className="font-semibold text-lg">Generated Tokens</h3>
                                <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-medium">
                                    {count} {count === 1 ? 'token' : 'tokens'}
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <GButton variant="outline" size="sm" onClick={generateTokens}>
                                    <RefreshCw className="w-4 h-4 mr-2" />
                                    Regenerate
                                </GButton>
                                <GButton size="sm" onClick={handleCopy}>
                                    <Copy className="w-4 h-4 mr-2" />
                                    Copy
                                </GButton>
                            </div>
                        </div>

                        <GTextarea
                            value={generatedTokens}
                            readOnly
                            className="flex-1 min-h-[300px] font-mono text-sm bg-muted/30 p-4 resize-none focus-visible:ring-0 focus-visible:ring-offset-0 leading-relaxed"
                        />

                        <div className="mt-4 text-xs text-muted-foreground flex items-center gap-1">
                            <Check className="w-3 h-3 text-green-500" />
                            <span>Securely generated on your device.</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

function PresetButton({ active, onClick, icon: Icon, label }: { active: boolean, onClick: () => void, icon: any, label: string }) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all",
                active
                    ? "bg-background shadow-sm text-primary ring-1 ring-border"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
            )}
        >
            <Icon className="w-3.5 h-3.5" />
            {label}
        </button>
    )
}
