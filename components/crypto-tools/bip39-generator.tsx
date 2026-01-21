"use client"

import React, { useState, useEffect } from "react"
import { CopyButton } from "@/components/common/copy-button"
import { GLabel } from "@/ui/glabel"
import { GTextarea } from "@/ui/gtextarea"
import { GInput } from "@/ui/ginput"
import {
    GSelect,
    GSelectContent,
    GSelectItem,
    GSelectTrigger,
    GSelectValue,
} from "@/ui/gselect"
import { GCard, GCardContent, GCardHeader, GCardTitle, GCardDescription } from "@/ui/gcard"
import { Lock, RefreshCw, Layers, ShieldCheck, Key, Eye, EyeOff, ClipboardCheck, AlertTriangle } from "lucide-react"
import * as bip39 from "@scure/bip39"
import { wordlist as english } from "@scure/bip39/wordlists/english.js"
import { wordlist as spanish } from "@scure/bip39/wordlists/spanish.js"
import { wordlist as french } from "@scure/bip39/wordlists/french.js"
import { wordlist as italian } from "@scure/bip39/wordlists/italian.js"
import { wordlist as japanese } from "@scure/bip39/wordlists/japanese.js"
import { wordlist as korean } from "@scure/bip39/wordlists/korean.js"
import { wordlist as simplifiedChinese } from "@scure/bip39/wordlists/simplified-chinese.js"

// Map languages to wordlists
const wordlists: Record<string, string[]> = {
    english,
    spanish,
    french,
    italian,
    japanese,
    korean,
    simplifiedChinese,
}

type Strength = "128" | "256" // 12 words vs 24 words

export function Bip39GeneratorTool() {
    const [strength, setStrength] = useState<Strength>("128") // 128 bits = 12 words
    const [language, setLanguage] = useState("english")
    const [mnemonic, setMnemonic] = useState("")
    const [entropy, setEntropy] = useState("")
    const [passphrase, setPassphrase] = useState("") // Optional passphrase
    const [showPassphrase, setShowPassphrase] = useState(false)
    const [isValid, setIsValid] = useState(true)
    const [error, setError] = useState("")

    // Generate new mnemonic
    const generateMnemonic = () => {
        try {
            const currentWordlist = wordlists[language]
            const newMnemonic = bip39.generateMnemonic(currentWordlist, Number(strength))
            setMnemonic(newMnemonic)
            setIsValid(true)
            setError("")

            // Derive entropy (reversible for generated mnemonics)
            const ent = bip39.mnemonicToEntropy(newMnemonic, currentWordlist)
            setEntropy(Buffer.from(ent).toString('hex'))
        } catch (err) {
            console.error("Generation error:", err)
            setError("Failed to generate mnemonic")
        }
    }

    // Effect to regenerate when strength or language changes (optional, maybe user wants manual control? Let's auto-generate on load and strength change)
    useEffect(() => {
        generateMnemonic()
    }, [strength, language])

    // Handle manual mnemonic input
    const handleMnemonicChange = (value: string) => {
        setMnemonic(value)
        try {
            const currentWordlist = wordlists[language]
            if (bip39.validateMnemonic(value, currentWordlist)) {
                setIsValid(true)
                setError("")
                const ent = bip39.mnemonicToEntropy(value, currentWordlist)
                setEntropy(Buffer.from(ent).toString('hex'))
            } else {
                setIsValid(false)
                setError("Invalid Mnemonic or Checksum")
                setEntropy("")
            }
        } catch (e) {
            setIsValid(false)
            setError("Invalid Mnemonic")
            setEntropy("")
        }
    }

    return (
        <div className="space-y-8">
            <GCard className="border-primary/20 shadow-lg">
                <GCardHeader className="bg-muted/30 pb-4">
                    <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4">
                        <div>
                            <GCardTitle className="flex items-center gap-2 text-xl">
                                <Key className="h-5 w-5 text-primary" />
                                Generate Mnemonic
                            </GCardTitle>
                            <GCardDescription>
                                Create secure BIP39 seed phrases from random entropy
                            </GCardDescription>
                        </div>
                        <div className="flex gap-2">
                            <GSelect value={language} onValueChange={setLanguage}>
                                <GSelectTrigger className="w-[140px]">
                                    <GSelectValue placeholder="Language" />
                                </GSelectTrigger>
                                <GSelectContent>
                                    <GSelectItem value="english">English</GSelectItem>
                                    <GSelectItem value="spanish">Spanish</GSelectItem>
                                    <GSelectItem value="french">French</GSelectItem>
                                    <GSelectItem value="italian">Italian</GSelectItem>
                                    <GSelectItem value="japanese">Japanese</GSelectItem>
                                    <GSelectItem value="korean">Korean</GSelectItem>
                                    <GSelectItem value="simplifiedChinese">Chinese (Simplified)</GSelectItem>
                                </GSelectContent>
                            </GSelect>
                            <GSelect value={strength} onValueChange={(v) => setStrength(v as Strength)}>
                                <GSelectTrigger className="w-[140px]">
                                    <GSelectValue placeholder="Length" />
                                </GSelectTrigger>
                                <GSelectContent>
                                    <GSelectItem value="128">12 Words</GSelectItem>
                                    <GSelectItem value="256">24 Words</GSelectItem>
                                </GSelectContent>
                            </GSelect>
                        </div>
                    </div>
                </GCardHeader>
                <GCardContent className="space-y-6 pt-6">
                    {/* Mnemonic Display */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <GLabel className="text-base font-semibold">Mnemonic Phrase</GLabel>
                            <div className="flex gap-2">
                                <button
                                    onClick={generateMnemonic}
                                    className="text-xs flex items-center gap-1 text-primary hover:underline hover:text-primary/80"
                                >
                                    <RefreshCw className="h-3 w-3" /> Regenerate
                                </button>
                                {mnemonic && <CopyButton text={mnemonic} id="copy-mnemonic" />}
                            </div>
                        </div>
                        <GTextarea
                            value={mnemonic}
                            onChange={(e) => handleMnemonicChange(e.target.value)}
                            placeholder="Your mnemonic phrase will appear here..."
                            className={`min-h-[100px] font-mono text-lg leading-relaxed resize-none ${!isValid ? 'border-red-500 focus-visible:ring-red-500' : 'border-primary/50 focus-visible:ring-primary'}`}
                        />
                        {!isValid && (
                            <p className="text-sm text-red-500 flex items-center gap-1">
                                <AlertTriangle className="h-4 w-4" />
                                {error}
                            </p>
                        )}
                        <p className="text-xs text-muted-foreground">
                            You can edit this field to verify an existing phrase. Checksum validation is automatic.
                        </p>
                    </div>

                    {/* Entropy Display */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <GLabel>Raw Entropy (Hex)</GLabel>
                            {entropy && <CopyButton text={entropy} id="copy-entropy" />}
                        </div>
                        <div className="relative">
                            <Layers className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <GInput
                                readOnly
                                value={entropy}
                                className="pl-9 font-mono text-xs bg-muted/50"
                                placeholder="Entropy..."
                            />
                        </div>
                    </div>

                    {/* Optional Passphrase */}
                    <div className="space-y-2 pt-4 border-t border-border/50">
                        <GLabel className="flex items-center gap-2">
                            Optional Passphrase (BIP39 Extension)
                            <span className="text-xs font-normal text-muted-foreground">(Adds an extra layer of security)</span>
                        </GLabel>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <GInput
                                type={showPassphrase ? "text" : "password"}
                                value={passphrase}
                                onChange={(e) => setPassphrase(e.target.value)}
                                placeholder="Passphrase (optional)"
                                className="pl-9 pr-9"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassphrase(!showPassphrase)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none"
                            >
                                {showPassphrase ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                        </div>
                    </div>
                </GCardContent>
            </GCard>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-6">
                <GCard className="border-green-500/20 bg-green-500/5">
                    <GCardHeader>
                        <GCardTitle className="text-lg flex items-center gap-2">
                            <ShieldCheck className="h-5 w-5 text-green-500" />
                            100% Client-Side
                        </GCardTitle>
                    </GCardHeader>
                    <GCardContent>
                        <p className="text-sm text-muted-foreground">
                            Everything is generated locally in your browser. No data is sent to any server. Your privacy is guaranteed.
                        </p>
                    </GCardContent>
                </GCard>
                <GCard>
                    <GCardHeader>
                        <GCardTitle className="text-lg flex items-center gap-2">
                            <ClipboardCheck className="h-5 w-5 text-blue-500" />
                            Wait! Before Using
                        </GCardTitle>
                    </GCardHeader>
                    <GCardContent>
                        <p className="text-sm text-muted-foreground">
                            For maximum security, download this page and run it offline. Never share your seed phrase with anyone.
                        </p>
                    </GCardContent>
                </GCard>
                <GCard>
                    <GCardHeader>
                        <GCardTitle className="text-lg flex items-center gap-2">
                            <Layers className="h-5 w-5 text-purple-500" />
                            Multi-Language
                        </GCardTitle>
                    </GCardHeader>
                    <GCardContent>
                        <p className="text-sm text-muted-foreground">
                            Supports 8 languages including English, Spanish, Japanese, and Chinese. Fully compliant with BIP39 standards.
                        </p>
                    </GCardContent>
                </GCard>
            </div>
        </div>
    )
}
