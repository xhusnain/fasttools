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
import { Lock, ShieldCheck, Key, Eye, EyeOff, FileText, Hash } from "lucide-react"
import CryptoJS from "crypto-js"

const algorithms = [
    { value: "MD5", label: "MD5" },
    { value: "SHA1", label: "SHA-1" },
    { value: "SHA224", label: "SHA-224" },
    { value: "SHA256", label: "SHA-256" },
    { value: "SHA384", label: "SHA-384" },
    { value: "SHA512", label: "SHA-512" },
    { value: "RIPEMD160", label: "RIPEMD-160" },
    { value: "HmacMD5", label: "HmacMD5" }, // Explicit Hmac variants if needed, but CryptoJS.Hmac* handles generic
]

export function HmacGeneratorTool() {
    const [input, setInput] = useState("")
    const [secret, setSecret] = useState("")
    const [algo, setAlgo] = useState("SHA256")
    const [encoding, setEncoding] = useState("Hex")
    const [output, setOutput] = useState("")
    const [showSecret, setShowSecret] = useState(false)

    useEffect(() => {
        if (!input && !secret) {
            setOutput("")
            return
        }

        try {
            let hash
            // CryptoJS supports Hmac functions like CryptoJS.HmacSHA256(message, key)
            switch (algo) {
                case "MD5":
                    hash = CryptoJS.HmacMD5(input, secret)
                    break
                case "SHA1":
                    hash = CryptoJS.HmacSHA1(input, secret)
                    break
                case "SHA224":
                    hash = CryptoJS.HmacSHA224(input, secret)
                    break
                case "SHA256":
                    hash = CryptoJS.HmacSHA256(input, secret)
                    break
                case "SHA384":
                    hash = CryptoJS.HmacSHA384(input, secret)
                    break
                case "SHA512":
                    hash = CryptoJS.HmacSHA512(input, secret)
                    break
                case "RIPEMD160":
                    hash = CryptoJS.HmacRIPEMD160(input, secret)
                    break
                default:
                    hash = CryptoJS.HmacSHA256(input, secret)
            }

            if (encoding === "Base64") {
                setOutput(hash.toString(CryptoJS.enc.Base64))
            } else {
                setOutput(hash.toString(CryptoJS.enc.Hex))
            }
        } catch (error) {
            console.error(error)
            setOutput("Error generating HMAC")
        }
    }, [input, secret, algo, encoding])

    return (
        <div className="space-y-8">
            <GCard className="border-primary/20 shadow-lg">
                <GCardHeader className="bg-muted/30 pb-4">
                    <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4">
                        <div>
                            <GCardTitle className="flex items-center gap-2 text-xl">
                                <ShieldCheck className="h-5 w-5 text-primary" />
                                HMAC Generator
                            </GCardTitle>
                            <GCardDescription>
                                Compute Hash-based Message Authentication Codes
                            </GCardDescription>
                        </div>
                        <div className="flex gap-2">
                            <GSelect value={algo} onValueChange={setAlgo}>
                                <GSelectTrigger className="w-[140px]">
                                    <GSelectValue placeholder="Algorithm" />
                                </GSelectTrigger>
                                <GSelectContent>
                                    <GSelectItem value="MD5">MD5</GSelectItem>
                                    <GSelectItem value="SHA1">SHA-1</GSelectItem>
                                    <GSelectItem value="SHA224">SHA-224</GSelectItem>
                                    <GSelectItem value="SHA256">SHA-256</GSelectItem>
                                    <GSelectItem value="SHA384">SHA-384</GSelectItem>
                                    <GSelectItem value="SHA512">SHA-512</GSelectItem>
                                    <GSelectItem value="RIPEMD160">RIPEMD-160</GSelectItem>
                                </GSelectContent>
                            </GSelect>
                            <GSelect value={encoding} onValueChange={setEncoding}>
                                <GSelectTrigger className="w-[140px]">
                                    <GSelectValue placeholder="Encoding" />
                                </GSelectTrigger>
                                <GSelectContent>
                                    <GSelectItem value="Hex">Hexadecimal</GSelectItem>
                                    <GSelectItem value="Base64">Base64</GSelectItem>
                                </GSelectContent>
                            </GSelect>
                        </div>
                    </div>
                </GCardHeader>
                <GCardContent className="space-y-6 pt-6">
                    {/* Input Text */}
                    <div className="space-y-2">
                        <GLabel className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            Plain Text Input
                        </GLabel>
                        <GTextarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Enter the text to hash..."
                            className="min-h-[100px] font-mono"
                        />
                    </div>

                    {/* Secret Key */}
                    <div className="space-y-2">
                        <GLabel className="flex items-center gap-2">
                            <Key className="h-4 w-4" />
                            Secret Key
                        </GLabel>
                        <div className="relative">
                            <GInput
                                type={showSecret ? "text" : "password"}
                                value={secret}
                                onChange={(e) => setSecret(e.target.value)}
                                placeholder="Enter your secret key..."
                                className="pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowSecret(!showSecret)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground focus:outline-none"
                            >
                                {showSecret ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                        </div>
                        <p className="text-xs text-muted-foreground">
                            The secret key is used to sign the message.
                        </p>
                    </div>


                    {/* Output */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <GLabel className="flex items-center gap-2 text-base font-semibold">
                                <Lock className="h-4 w-4 text-primary" />
                                HMAC Output
                            </GLabel>
                            {output && <CopyButton text={output} id="copy-hmac" />}
                        </div>
                        <div className="relative">
                            <Hash className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <GTextarea
                                readOnly
                                value={output}
                                className="pl-9 font-mono bg-muted/50 text-sm min-h-[80px] resize-none"
                                placeholder="HMAC output will appear here..."
                            />
                        </div>
                    </div>
                </GCardContent>
            </GCard>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-6">
                <GCard>
                    <GCardHeader>
                        <GCardTitle className="text-lg flex items-center gap-2">
                            <ShieldCheck className="h-5 w-5 text-green-500" />
                            Secure & Client-Side
                        </GCardTitle>
                    </GCardHeader>
                    <GCardContent>
                        <p className="text-sm text-muted-foreground">
                            All computations happen directly in your browser. Your message and secret key never leave your device.
                        </p>
                    </GCardContent>
                </GCard>
                <GCard>
                    <GCardHeader>
                        <GCardTitle className="text-lg flex items-center gap-2">
                            <Key className="h-5 w-5 text-blue-500" />
                            Versatile Hashing
                        </GCardTitle>
                    </GCardHeader>
                    <GCardContent>
                        <p className="text-sm text-muted-foreground">
                            Supports standard algorithms like SHA-256 (standard for JWTs) and legacy MD5 for compatibility.
                        </p>
                    </GCardContent>
                </GCard>
            </div>

        </div>
    )
}
