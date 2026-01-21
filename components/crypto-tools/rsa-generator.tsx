"use client"

import React, { useState } from "react"
import { CopyButton } from "@/components/common/copy-button"
import { GLabel } from "@/ui/glabel"
import { GTextarea } from "@/ui/gtextarea"
import {
    GSelect,
    GSelectContent,
    GSelectItem,
    GSelectTrigger,
    GSelectValue,
} from "@/ui/gselect"
import { GCard, GCardContent, GCardHeader, GCardTitle, GCardDescription } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { Lock, Key, RefreshCw, Download, ShieldCheck, Loader2 } from "lucide-react"

export function RsaGeneratorTool() {
    const [keySize, setKeySize] = useState("2048")
    const [publicKey, setPublicKey] = useState("")
    const [privateKey, setPrivateKey] = useState("")
    const [isGenerating, setIsGenerating] = useState(false)

    const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
        let binary = ""
        const bytes = new Uint8Array(buffer)
        const len = bytes.byteLength
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i])
        }
        return window.btoa(binary)
    }

    const formatPem = (keyType: "PUBLIC" | "PRIVATE", keyData: string) => {
        const pemHeader = `-----BEGIN ${keyType === "PRIVATE" ? "RSA PRIVATE" : "PUBLIC"} KEY-----`
        const pemFooter = `-----END ${keyType === "PRIVATE" ? "RSA PRIVATE" : "PUBLIC"} KEY-----`
        const pemContents = keyData.match(/.{1,64}/g)?.join("\n")
        return `${pemHeader}\n${pemContents}\n${pemFooter}`
    }

    const generateKeys = async () => {
        setIsGenerating(true)
        setPublicKey("")
        setPrivateKey("")

        // Small delay to allow UI to show loading state
        setTimeout(async () => {
            try {
                const keyPair = await window.crypto.subtle.generateKey(
                    {
                        name: "RSASSA-PKCS1-v1_5",
                        modulusLength: parseInt(keySize),
                        publicExponent: new Uint8Array([1, 0, 1]),
                        hash: "SHA-256",
                    },
                    true,
                    ["sign", "verify"]
                )

                const publicKeyBuffer = await window.crypto.subtle.exportKey(
                    "spki",
                    keyPair.publicKey
                )
                const privateKeyBuffer = await window.crypto.subtle.exportKey(
                    "pkcs8",
                    keyPair.privateKey
                )

                const publicKeyBase64 = arrayBufferToBase64(publicKeyBuffer)
                const privateKeyBase64 = arrayBufferToBase64(privateKeyBuffer)

                setPublicKey(formatPem("PUBLIC", publicKeyBase64))
                setPrivateKey(formatPem("PRIVATE", privateKeyBase64))
            } catch (error) {
                console.error("Error generating keys:", error)
            } finally {
                setIsGenerating(false)
            }
        }, 100)
    }

    const downloadKey = (filename: string, content: string) => {
        const element = document.createElement("a");
        const file = new Blob([content], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = filename;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    return (
        <div className="space-y-8">
            <GCard className="border-primary/20 shadow-lg bg-card/50 backdrop-blur-sm">
                <GCardHeader className="bg-muted/30 pb-4 border-b border-border/50">
                    <div className="flex justify-between items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <Key className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <GCardTitle className="text-xl">RSA Key Pair Generator</GCardTitle>
                                <GCardDescription>Generate secure RSA Public and Private keys locally.</GCardDescription>
                            </div>
                        </div>

                        <div className="flex gap-2 items-center">
                            <GSelect value={keySize} onValueChange={setKeySize}>
                                <GSelectTrigger className="w-[140px] bg-background border-primary/20">
                                    <GSelectValue placeholder="Key Size" />
                                </GSelectTrigger>
                                <GSelectContent>
                                    <GSelectItem value="1024">1024 bit (Weak)</GSelectItem>
                                    <GSelectItem value="2048">2048 bit (Standard)</GSelectItem>
                                    <GSelectItem value="4096">4096 bit (Strong)</GSelectItem>
                                </GSelectContent>
                            </GSelect>

                            <GButton
                                onClick={generateKeys}
                                disabled={isGenerating}
                                className="min-w-[140px]"
                            >
                                {isGenerating ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Generating...
                                    </>
                                ) : (
                                    <>
                                        <RefreshCw className="mr-2 h-4 w-4" />
                                        Generate Keys
                                    </>
                                )}
                            </GButton>
                        </div>
                    </div>
                </GCardHeader>

                <GCardContent className="pt-8 space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Public Key Section */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <GLabel className="flex items-center gap-2 text-green-500 font-semibold">
                                    <Lock className="h-4 w-4" />
                                    Public Key (Shareable)
                                </GLabel>
                                <div className="flex gap-2">
                                    <GButton
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => downloadKey('public.pem', publicKey)}
                                        disabled={!publicKey}
                                        title="Download public.pem"
                                    >
                                        <Download className="h-4 w-4" />
                                    </GButton>
                                    {publicKey && <CopyButton text={publicKey} id="copy-public" />}
                                </div>
                            </div>
                            <GTextarea
                                readOnly
                                value={publicKey}
                                placeholder="Public key will appear here..."
                                className="font-mono text-xs h-[320px] bg-muted/30 resize-none border-green-500/20 focus-visible:ring-green-500/20"
                            />
                        </div>

                        {/* Private Key Section */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <GLabel className="flex items-center gap-2 text-red-500 font-semibold">
                                    <Key className="h-4 w-4" />
                                    Private Key (Keep Secret)
                                </GLabel>
                                <div className="flex gap-2">
                                    <GButton
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => downloadKey('private.pem', privateKey)}
                                        disabled={!privateKey}
                                        title="Download private.pem"
                                    >
                                        <Download className="h-4 w-4" />
                                    </GButton>
                                    {privateKey && <CopyButton text={privateKey} id="copy-private" />}
                                </div>
                            </div>
                            <GTextarea
                                readOnly
                                value={privateKey}
                                placeholder="Private key will appear here..."
                                className="font-mono text-xs h-[320px] bg-muted/30 resize-none border-red-500/20 focus-visible:ring-red-500/20"
                            />
                        </div>
                    </div>
                </GCardContent>
            </GCard>

            <div className="grid md:grid-cols-3 gap-6">
                <GCard className="bg-card/50">
                    <GCardHeader className="pb-2">
                        <GCardTitle className="text-lg flex items-center gap-2">
                            <ShieldCheck className="h-5 w-5 text-green-500" />
                            Client-Side Security
                        </GCardTitle>
                    </GCardHeader>
                    <GCardContent>
                        <p className="text-sm text-muted-foreground">
                            Keys are generated using the native Web Crypto API in your browser. They never leave your device.
                        </p>
                    </GCardContent>
                </GCard>
                <GCard className="bg-card/50">
                    <GCardHeader className="pb-2">
                        <GCardTitle className="text-lg flex items-center gap-2">
                            <Lock className="h-5 w-5 text-blue-500" />
                            OpenSSL Compatible
                        </GCardTitle>
                    </GCardHeader>
                    <GCardContent>
                        <p className="text-sm text-muted-foreground">
                            Generated keys use standard PEM format (PKCS#1 / PKCS#8) compatible with OpenSSL, SSH, and most servers.
                        </p>
                    </GCardContent>
                </GCard>
                <GCard className="bg-card/50">
                    <GCardHeader className="pb-2">
                        <GCardTitle className="text-lg flex items-center gap-2">
                            <RefreshCw className="h-5 w-5 text-purple-500" />
                            Industry Standard
                        </GCardTitle>
                    </GCardHeader>
                    <GCardContent>
                        <p className="text-sm text-muted-foreground">
                            Use 2048-bit for standard security or 4096-bit for long-term data protection.
                        </p>
                    </GCardContent>
                </GCard>
            </div>
        </div>
    )
}
