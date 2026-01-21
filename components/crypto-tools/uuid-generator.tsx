"use client"

import * as React from "react"
import { Copy, RefreshCw, Check } from "lucide-react"
import { toast } from "sonner"
import {
    v1 as uuidv1,
    v3 as uuidv3,
    v4 as uuidv4,
    v5 as uuidv5,
    v6 as uuidv6,
    v7 as uuidv7,
    NIL as uuidNIL
} from "uuid"

import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { GTextarea } from "@/ui/gtextarea"
import { GLabel } from "@/ui/glabel"

type UuidVersion = "NIL" | "v1" | "v3" | "v4" | "v5" | "v6" | "v7"

// Namespaces for v3 and v5
const NAMESPACES = {
    DNS: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    URL: "6ba7b811-9dad-11d1-80b4-00c04fd430c8",
    OID: "6ba7b812-9dad-11d1-80b4-00c04fd430c8",
    X500: "6ba7b814-9dad-11d1-80b4-00c04fd430c8",
}

export function UuidGenerator() {
    const [version, setVersion] = React.useState<UuidVersion>("v4")
    const [quantity, setQuantity] = React.useState(1)
    const [customNamespace, setCustomNamespace] = React.useState("")
    const [selectedNamespacePreset, setSelectedNamespacePreset] = React.useState<keyof typeof NAMESPACES | "custom">("DNS")
    const [name, setName] = React.useState("example.com")
    const [generatedUuids, setGeneratedUuids] = React.useState("")
    const [uppercase, setUppercase] = React.useState(false)
    const [hyphens, setHyphens] = React.useState(true) // Default true to keep dashes

    const generateUuids = React.useCallback(() => {
        try {
            const uuids: string[] = []

            // Setup arguments for v3/v5
            let ns = customNamespace
            if (selectedNamespacePreset !== "custom") {
                ns = NAMESPACES[selectedNamespacePreset]
            }

            // Check validation for v3/v5
            if ((version === "v3" || version === "v5") && !ns) {
                // If generic namespace content is invalid, standard uuid might throw
            }

            for (let i = 0; i < quantity; i++) {
                let uuid = ""
                switch (version) {
                    case "NIL":
                        uuid = uuidNIL
                        break
                    case "v1":
                        uuid = uuidv1()
                        break
                    case "v3":
                        if (ns && name) uuid = uuidv3(name, ns)
                        break
                    case "v4":
                        uuid = uuidv4()
                        break
                    case "v5":
                        if (ns && name) uuid = uuidv5(name, ns)
                        break
                    case "v6":
                        uuid = uuidv6()
                        break
                    case "v7":
                        uuid = uuidv7()
                        break
                }

                if (uuid) {
                    if (uppercase) uuid = uuid.toUpperCase()
                    if (!hyphens) uuid = uuid.replace(/-/g, "")
                    uuids.push(uuid)
                }
            }
            setGeneratedUuids(uuids.join("\n"))
        } catch (error) {
            console.error("UUID Generation Error:", error)
            setGeneratedUuids("Error generating UUIDs. Please check inputs.")
        }
    }, [version, quantity, customNamespace, selectedNamespacePreset, name, uppercase, hyphens])

    // Initial gen and auto-regen
    React.useEffect(() => {
        generateUuids()
    }, [generateUuids])

    const handleCopy = () => {
        if (!generatedUuids) return
        void navigator.clipboard.writeText(generatedUuids)
        toast.success("Copied to clipboard")
    }

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Version Selection */}
                <div className="space-y-2">
                    <GLabel>UUID Version</GLabel>
                    <GSelect value={version} onValueChange={(v) => setVersion(v as UuidVersion)}>
                        <GSelectTrigger>
                            <GSelectValue placeholder="Select Version" />
                        </GSelectTrigger>
                        <GSelectContent>
                            <GSelectItem value="v4">v4 (Random) - Recommended</GSelectItem>
                            <GSelectItem value="v1">v1 (Timestamp)</GSelectItem>
                            <GSelectItem value="v6">v6 (Reordered Time)</GSelectItem>
                            <GSelectItem value="v7">v7 (Unix Epoch)</GSelectItem>
                            <GSelectItem value="v3">v3 (MD5 Namespace)</GSelectItem>
                            <GSelectItem value="v5">v5 (SHA-1 Namespace)</GSelectItem>
                            <GSelectItem value="NIL">NIL (Empty)</GSelectItem>
                        </GSelectContent>
                    </GSelect>
                </div>

                {/* Quantity */}
                <div className="space-y-2">
                    <GLabel>Quantity (1-50)</GLabel>
                    <GInput
                        type="number"
                        min={1}
                        max={50}
                        value={quantity}
                        onChange={(e) => setQuantity(Math.min(50, Math.max(1, parseInt(e.target.value) || 1)))}
                    />
                </div>

                {/* Options */}
                <div className="space-y-2 flex items-center gap-4 pt-8">
                    <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
                        <input
                            type="checkbox"
                            checked={uppercase}
                            onChange={(e) => setUppercase(e.target.checked)}
                            className="rounded border-gray-300"
                        />
                        Uppercase
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
                        <input
                            type="checkbox"
                            checked={hyphens}
                            onChange={(e) => setHyphens(e.target.checked)}
                            className="rounded border-gray-300"
                        />
                        Hyphens
                    </label>
                </div>

            </div>

            {/* Conditional Inputs for v3/v5 */}
            {(version === "v3" || version === "v5") && (
                <div className="p-4 bg-muted/50 rounded-lg space-y-4 border border-border">
                    <div className="space-y-2">
                        <GLabel>Namespace Preset</GLabel>
                        <GSelect
                            value={selectedNamespacePreset}
                            onValueChange={(v) => setSelectedNamespacePreset(v as any)}
                        >
                            <GSelectTrigger>
                                <GSelectValue />
                            </GSelectTrigger>
                            <GSelectContent>
                                <GSelectItem value="DNS">DNS</GSelectItem>
                                <GSelectItem value="URL">URL</GSelectItem>
                                <GSelectItem value="OID">OID</GSelectItem>
                                <GSelectItem value="X500">X.500</GSelectItem>
                                <GSelectItem value="custom">Custom</GSelectItem>
                            </GSelectContent>
                        </GSelect>
                    </div>

                    {selectedNamespacePreset === "custom" && (
                        <div className="space-y-2">
                            <GLabel>Custom Namespace UUID</GLabel>
                            <GInput
                                value={customNamespace}
                                onChange={(e) => setCustomNamespace(e.target.value)}
                                placeholder="e.g. 6ba7b810-9dad-11d1-80b4-00c04fd430c8"
                            />
                        </div>
                    )}

                    <div className="space-y-2">
                        <GLabel>Name</GLabel>
                        <GInput
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. example.com"
                        />
                    </div>
                </div>
            )}

            {/* Output */}
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <GLabel>Generated UUIDs</GLabel>
                    <div className="flex gap-2">
                        <GButton variant="outline" size="sm" onClick={generateUuids} className="h-8">
                            <RefreshCw className="w-3 h-3 mr-2" />
                            Regenerate
                        </GButton>
                        <GButton size="sm" onClick={handleCopy} className="h-8">
                            <Copy className="w-3 h-3 mr-2" />
                            Copy
                        </GButton>
                    </div>
                </div>
                <GTextarea
                    value={generatedUuids}
                    readOnly
                    rows={Math.min(10, Math.max(3, quantity))}
                    className="font-mono text-sm bg-muted/30"
                />
            </div>
        </div>
    )
}
