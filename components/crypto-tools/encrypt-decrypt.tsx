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
import { Lock, Unlock, ShieldCheck, KeyRound, AlertTriangle, Eye, EyeOff } from "lucide-react"
import CryptoJS from "crypto-js"

type Algorithm = "AES" | "TripleDES" | "Rabbit" | "RC4"

export function EncryptDecryptTool() {
    // Encrypt State
    const [encryptInput, setEncryptInput] = useState("")
    const [encryptKey, setEncryptKey] = useState("")
    const [encryptAlgo, setEncryptAlgo] = useState<Algorithm>("AES")
    const [encryptOutput, setEncryptOutput] = useState("")
    const [showEncryptKey, setShowEncryptKey] = useState(false)

    // Decrypt State
    const [decryptInput, setDecryptInput] = useState("")
    const [decryptKey, setDecryptKey] = useState("")
    const [decryptAlgo, setDecryptAlgo] = useState<Algorithm>("AES")
    const [decryptOutput, setDecryptOutput] = useState("")
    const [decryptError, setDecryptError] = useState("")
    const [showDecryptKey, setShowDecryptKey] = useState(false)

    // Encrypt Effect
    useEffect(() => {
        if (!encryptInput || !encryptKey) {
            setEncryptOutput("")
            return
        }

        try {
            let encrypted = ""
            switch (encryptAlgo) {
                case "AES":
                    encrypted = CryptoJS.AES.encrypt(encryptInput, encryptKey).toString()
                    break
                case "TripleDES":
                    encrypted = CryptoJS.TripleDES.encrypt(encryptInput, encryptKey).toString()
                    break
                case "Rabbit":
                    encrypted = CryptoJS.Rabbit.encrypt(encryptInput, encryptKey).toString()
                    break
                case "RC4":
                    encrypted = CryptoJS.RC4.encrypt(encryptInput, encryptKey).toString()
                    break
            }
            setEncryptOutput(encrypted)
        } catch (error) {
            console.error("Encryption error:", error)
            setEncryptOutput("Error encrypting text")
        }
    }, [encryptInput, encryptKey, encryptAlgo])

    // Decrypt Effect
    useEffect(() => {
        if (!decryptInput || !decryptKey) {
            setDecryptOutput("")
            setDecryptError("")
            return
        }

        try {
            let decryptedBytes
            switch (decryptAlgo) {
                case "AES":
                    decryptedBytes = CryptoJS.AES.decrypt(decryptInput, decryptKey)
                    break
                case "TripleDES":
                    decryptedBytes = CryptoJS.TripleDES.decrypt(decryptInput, decryptKey)
                    break
                case "Rabbit":
                    decryptedBytes = CryptoJS.Rabbit.decrypt(decryptInput, decryptKey)
                    break
                case "RC4":
                    decryptedBytes = CryptoJS.RC4.decrypt(decryptInput, decryptKey)
                    break
            }

            if (!decryptedBytes) {
                throw new Error("Decryption failed")
            }

            const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8)

            if (decryptedText) {
                setDecryptOutput(decryptedText)
                setDecryptError("")
            } else {
                // If the key is wrong or algo is wrong, result might be empty string or malformed
                if (decryptInput.length > 0) {
                    setDecryptOutput("")
                    setDecryptError("Could not decrypt. Wrong key or algorithm?")
                }
            }
        } catch (error) {
            // Suppress "Malformed UTF-8 data" error as it is expected when key is wrong
            const errorMessage = error instanceof Error ? error.message : String(error)
            if (errorMessage.includes("Malformed UTF-8 data")) {
                setDecryptOutput("")
                setDecryptError("Invalid input or wrong key")
            } else {
                console.error("Decryption error:", error)
                setDecryptOutput("")
                setDecryptError("Error decrypting text")
            }
        }
    }, [decryptInput, decryptKey, decryptAlgo])

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Encryption Card */}
                <GCard className="border-primary/20 shadow-lg">
                    <GCardHeader className="bg-muted/30 pb-4">
                        <GCardTitle className="flex items-center gap-2 text-xl">
                            <Lock className="h-5 w-5 text-primary" />
                            Encrypt
                        </GCardTitle>
                        <GCardDescription>
                            Turn your plain text into secure cipher text
                        </GCardDescription>
                    </GCardHeader>
                    <GCardContent className="space-y-4 pt-6">
                        <div className="space-y-2">
                            <GLabel>Your text to encrypt</GLabel>
                            <GTextarea
                                placeholder="Enter text to encrypt..."
                                className="min-h-[120px] font-mono text-sm"
                                value={encryptInput}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setEncryptInput(e.target.value)}
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <GLabel>Secret Key</GLabel>
                                <div className="relative">
                                    <KeyRound className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <GInput
                                        type={showEncryptKey ? "text" : "password"}
                                        placeholder="Secret Key"
                                        className="pl-9 pr-9"
                                        value={encryptKey}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEncryptKey(e.target.value)}
                                        autoComplete="off"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowEncryptKey(!showEncryptKey)}
                                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none"
                                        aria-label={showEncryptKey ? "Hide secret key" : "Show secret key"}
                                    >
                                        {showEncryptKey ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <GLabel>Algorithm</GLabel>
                                <GSelect value={encryptAlgo} onValueChange={(v: string) => setEncryptAlgo(v as Algorithm)}>
                                    <GSelectTrigger>
                                        <GSelectValue />
                                    </GSelectTrigger>
                                    <GSelectContent>
                                        <GSelectItem value="AES">AES (Recommended)</GSelectItem>
                                        <GSelectItem value="TripleDES">TripleDES</GSelectItem>
                                        <GSelectItem value="Rabbit">Rabbit</GSelectItem>
                                        <GSelectItem value="RC4">RC4</GSelectItem>
                                    </GSelectContent>
                                </GSelect>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <GLabel>Encrypted Output</GLabel>
                                {encryptOutput && <CopyButton text={encryptOutput} id="copy-encrypted" />}
                            </div>
                            <GTextarea
                                readOnly
                                value={encryptOutput}
                                placeholder="Encrypted text will appear here..."
                                className="min-h-[120px] font-mono text-sm bg-muted/50"
                            />
                        </div>
                    </GCardContent>
                </GCard>

                {/* Decryption Card */}
                <GCard className="border-primary/20 shadow-lg">
                    <GCardHeader className="bg-muted/30 pb-4">
                        <GCardTitle className="flex items-center gap-2 text-xl">
                            <Unlock className="h-5 w-5 text-green-600" />
                            Decrypt
                        </GCardTitle>
                        <GCardDescription>
                            Unlock cipher text back to plain text
                        </GCardDescription>
                    </GCardHeader>
                    <GCardContent className="space-y-4 pt-6">
                        <div className="space-y-2">
                            <GLabel>Your encrypted text</GLabel>
                            <GTextarea
                                placeholder="Paste encrypted text here..."
                                className="min-h-[120px] font-mono text-sm"
                                value={decryptInput}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDecryptInput(e.target.value)}
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <GLabel>Secret Key</GLabel>
                                <div className="relative">
                                    <KeyRound className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <GInput
                                        type={showDecryptKey ? "text" : "password"}
                                        placeholder="Secret Key"
                                        className="pl-9 pr-9"
                                        value={decryptKey}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDecryptKey(e.target.value)}
                                        autoComplete="off"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowDecryptKey(!showDecryptKey)}
                                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none"
                                        aria-label={showDecryptKey ? "Hide secret key" : "Show secret key"}
                                    >
                                        {showDecryptKey ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <GLabel>Algorithm</GLabel>
                                <GSelect value={decryptAlgo} onValueChange={(v: string) => setDecryptAlgo(v as Algorithm)}>
                                    <GSelectTrigger>
                                        <GSelectValue />
                                    </GSelectTrigger>
                                    <GSelectContent>
                                        <GSelectItem value="AES">AES</GSelectItem>
                                        <GSelectItem value="TripleDES">TripleDES</GSelectItem>
                                        <GSelectItem value="Rabbit">Rabbit</GSelectItem>
                                        <GSelectItem value="RC4">RC4</GSelectItem>
                                    </GSelectContent>
                                </GSelect>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <GLabel>Decrypted Output</GLabel>
                                {decryptOutput && <CopyButton text={decryptOutput} id="copy-decrypted" />}
                            </div>
                            <GTextarea
                                readOnly
                                value={decryptOutput}
                                placeholder="Decrypted text will appear here..."
                                className={`min-h-[120px] font-mono text-sm bg-muted/50 ${decryptError ? "border-red-500/50" : ""}`}
                            />
                            {decryptError && (
                                <p className="text-xs text-red-500 flex items-center gap-1">
                                    <AlertTriangle className="h-3 w-3" />
                                    {decryptError}
                                </p>
                            )}
                        </div>
                    </GCardContent>
                </GCard>
            </div>

            <GCard>
                <GCardHeader>
                    <GCardTitle className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-primary" />
                        About Algorithms
                    </GCardTitle>
                </GCardHeader>
                <GCardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="p-4 bg-muted/30 rounded-lg border">
                        <h4 className="font-semibold mb-2">AES</h4>
                        <p className="text-sm text-muted-foreground">Advanced Encryption Standard. The most secure and widely used algorithm globally. Recommended for all use cases.</p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg border">
                        <h4 className="font-semibold mb-2">TripleDES</h4>
                        <p className="text-sm text-muted-foreground">Applies the Data Encryption Standard (DES) algorithm three times. Slower but provides good legacy compatibility.</p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg border">
                        <h4 className="font-semibold mb-2">Rabbit</h4>
                        <p className="text-sm text-muted-foreground">A high-speed stream cipher. exceptional performance. Good for high-performance requirements.</p>
                    </div>
                    <div className="p-4 bg-muted/30 rounded-lg border">
                        <h4 className="font-semibold mb-2">RC4</h4>
                        <p className="text-sm text-muted-foreground">A stream cipher. Not recommended for new secure applications due to vulnerabilities, but useful for legacy compatibility.</p>
                    </div>
                </GCardContent>
            </GCard>
        </div>
    )
}
