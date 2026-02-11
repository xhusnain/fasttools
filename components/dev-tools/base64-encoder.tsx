"use client"

import { useState, useMemo } from "react"
import { GTextarea } from "@/ui/gtextarea"
import { GButton } from "@/ui/gbutton"
import { GSwitch } from "@/ui/gswitch"
import { GLabel } from "@/ui/glabel"
import { CopyButton } from "@/components/common/copy-button"
import {
  encodeToBase64,
  decodeFromBase64,
  decodeFromBase64ToBytes,
  bytesToHex,
  encodeFileToBase64,
  normalizeBase64ForDataUri,
  getExtensionAndMime,
} from "@/lib/base64-encoder"
import { FileUp, RotateCcw, Sparkles, Download, ImageIcon } from "lucide-react"

const SAMPLE_STRING = "Hello, World! Encode me to Base64."
const SAMPLE_BASE64 = "SGVsbG8sIFdvcmxkISBFbmNvZGUgbWUgdG8gQmFzZTY0Lg=="

export function Base64Encoder() {
  const [encodeInput, setEncodeInput] = useState("")
  const [encodeOutput, setEncodeOutput] = useState("")
  const [encodeUrlSafe, setEncodeUrlSafe] = useState(false)

  const [decodeInput, setDecodeInput] = useState("")
  const [decodeOutput, setDecodeOutput] = useState("")
  const [decodedBytes, setDecodedBytes] = useState<Uint8Array | null>(null)
  const [decodeAsHex, setDecodeAsHex] = useState(false)
  const [decodeUrlSafe, setDecodeUrlSafe] = useState(false)
  const [decodeError, setDecodeError] = useState<string | null>(null)

  const handleEncodeChange = (value: string) => {
    setEncodeInput(value)
    if (value) {
      try {
        setEncodeOutput(encodeToBase64(value, encodeUrlSafe))
      } catch {
        setEncodeOutput("")
      }
    } else {
      setEncodeOutput("")
    }
  }

  const handleDecodeChange = (value: string) => {
    setDecodeInput(value)
    if (value.trim()) {
      try {
        const bytes = decodeFromBase64ToBytes(value, decodeUrlSafe)
        setDecodedBytes(bytes)
        if (decodeAsHex) {
          setDecodeOutput(bytesToHex(bytes))
        } else {
          setDecodeOutput(new TextDecoder("utf-8", { fatal: false }).decode(bytes))
        }
        setDecodeError(null)
      } catch {
        setDecodeOutput("")
        setDecodedBytes(null)
        setDecodeError("Invalid Base64 string")
      }
    } else {
      setDecodeOutput("")
      setDecodedBytes(null)
      setDecodeError(null)
    }
  }

  const handleEncodeUrlSafeChange = (checked: boolean) => {
    setEncodeUrlSafe(checked)
    if (encodeInput) {
      try {
        setEncodeOutput(encodeToBase64(encodeInput, checked))
      } catch {
        setEncodeOutput("")
      }
    }
  }

  const handleDecodeUrlSafeChange = (checked: boolean) => {
    setDecodeUrlSafe(checked)
    if (decodeInput.trim()) {
      try {
        const bytes = decodeFromBase64ToBytes(decodeInput, checked)
        setDecodedBytes(bytes)
        if (decodeAsHex) {
          setDecodeOutput(bytesToHex(bytes))
        } else {
          setDecodeOutput(new TextDecoder("utf-8", { fatal: false }).decode(bytes))
        }
        setDecodeError(null)
      } catch {
        setDecodeOutput("")
        setDecodedBytes(null)
        setDecodeError("Invalid Base64 string")
      }
    }
  }

  const handleDecodeAsHexChange = (checked: boolean) => {
    setDecodeAsHex(checked)
    if (decodeInput.trim()) {
      try {
        const bytes = decodeFromBase64ToBytes(decodeInput, decodeUrlSafe)
        setDecodedBytes(bytes)
        if (checked) {
          setDecodeOutput(bytesToHex(bytes))
        } else {
          setDecodeOutput(new TextDecoder("utf-8", { fatal: false }).decode(bytes))
        }
        setDecodeError(null)
      } catch {
        setDecodeOutput("")
        setDecodedBytes(null)
        setDecodeError("Invalid Base64 string")
      }
    }
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    try {
      const base64 = await encodeFileToBase64(file)
      setEncodeInput("")
      setEncodeOutput(base64)
    } catch {
      setEncodeOutput("")
    }
    e.target.value = ""
  }

  const loadEncodeSample = () => {
    setEncodeInput(SAMPLE_STRING)
    setEncodeOutput(encodeToBase64(SAMPLE_STRING, encodeUrlSafe))
  }

  const loadDecodeSample = () => {
    setDecodeInput(SAMPLE_BASE64)
    const bytes = decodeFromBase64ToBytes(SAMPLE_BASE64, decodeUrlSafe)
    setDecodedBytes(bytes)
    if (decodeAsHex) {
      setDecodeOutput(bytesToHex(bytes))
    } else {
      setDecodeOutput(decodeFromBase64(SAMPLE_BASE64, decodeUrlSafe))
    }
    setDecodeError(null)
  }

  const imagePreviewUri = useMemo(() => {
    if (!decodeInput.trim() || decodeAsHex || decodeError) return null
    try {
      const normalized = normalizeBase64ForDataUri(decodeInput, decodeUrlSafe)
      if (decodedBytes && decodedBytes.length >= 4) {
        const { mime } = getExtensionAndMime(decodedBytes)
        if (mime.startsWith("image/")) {
          return `data:${mime};base64,${normalized}`
        }
      }
    } catch {
      /* ignore */
    }
    return null
  }, [decodeInput, decodeUrlSafe, decodeAsHex, decodeError, decodedBytes])

  const handleDownload = () => {
    if (!decodedBytes || decodedBytes.length === 0) return
    const { ext } = getExtensionAndMime(decodedBytes)
    const blob = new Blob([new Uint8Array(decodedBytes)])
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `decoded.${ext}`
    a.click()
    URL.revokeObjectURL(url)
  }

  const reset = () => {
    setEncodeInput("")
    setEncodeOutput("")
    setDecodeInput("")
    setDecodeOutput("")
    setDecodedBytes(null)
    setDecodeError(null)
    setDecodeAsHex(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">
          Base64 Encoder Decoder
        </h2>
        <GButton
          variant="outline"
          size="sm"
          onClick={reset}
          className="text-muted-foreground hover:text-foreground"
        >
          <RotateCcw className="h-3.5 w-3 mr-1.5" />
          Reset
        </GButton>
      </div>
      <p className="text-sm text-muted-foreground">
        Encode and decode Base64. Convert string to Base64, Base64 to image (with preview), PDF, hex, or file. URL-safe mode for JWT.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-3 rounded-xl border border-border bg-card p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground">
              String to Base64
            </h3>
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer">
                <GSwitch
                  checked={encodeUrlSafe}
                  onCheckedChange={handleEncodeUrlSafeChange}
                />
                Encode URL safe
              </label>
              <label className="cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                  accept="*/*"
                />
                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-border bg-muted/50 hover:bg-muted text-xs text-muted-foreground hover:text-foreground transition-colors">
                  <FileUp className="h-3.5 w-3.5" />
                  File
                </span>
              </label>
            </div>
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">String to encode</GLabel>
            <GTextarea
              value={encodeInput}
              onChange={(e) => handleEncodeChange(e.target.value)}
              placeholder="Put your string here..."
              className="mt-1 min-h-[100px] font-mono text-sm"
            />
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">Base64 of string</GLabel>
            <GTextarea
              value={encodeOutput}
              readOnly
              placeholder="The base64 encoding of your string will be here"
              className="mt-1 min-h-[100px] font-mono text-sm bg-muted/30"
            />
          </div>
          <div className="flex items-center justify-between">
            <GButton variant="ghost" size="sm" onClick={loadEncodeSample}>
              <Sparkles className="h-3.5 w-3 mr-1.5" />
              Sample
            </GButton>
            {encodeOutput && (
              <CopyButton
                text={encodeOutput}
                id="copy-base64-encode"
              />
            )}
          </div>
          {encodeInput && (
            <p className="text-xs text-muted-foreground">
              {encodeInput.length} chars → {encodeOutput.length} Base64 chars
            </p>
          )}
        </div>

        <div className="space-y-3 rounded-xl border border-border bg-card p-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="text-sm font-semibold text-foreground">
              Base64 Decode Online
            </h3>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer">
                <GSwitch
                  checked={decodeAsHex}
                  onCheckedChange={handleDecodeAsHexChange}
                />
                Decode to hex
              </label>
              <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer">
                <GSwitch
                  checked={decodeUrlSafe}
                  onCheckedChange={handleDecodeUrlSafeChange}
                />
                Decode URL safe
              </label>
            </div>
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">Base64 string to decode</GLabel>
            <GTextarea
              value={decodeInput}
              onChange={(e) => handleDecodeChange(e.target.value)}
              placeholder="Your base64 string..."
              className="mt-1 min-h-[100px] font-mono text-sm"
            />
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              {decodeAsHex ? "Decoded hex" : "Decoded string"}
            </GLabel>
            <GTextarea
              value={decodeOutput}
              readOnly
              placeholder={decodeAsHex ? "Hex output will appear here" : "The decoded string will be here"}
              className={`mt-1 min-h-[100px] font-mono text-sm bg-muted/30 ${decodeError ? "border-red-500" : ""}`}
            />
            {decodeError && (
              <p className="mt-1 text-xs text-red-500">{decodeError}</p>
            )}
          </div>
          {imagePreviewUri && (
            <div className="space-y-2">
              <GLabel className="text-xs text-muted-foreground flex items-center gap-1.5">
                <ImageIcon className="h-3.5 w-3.5" />
                Image Preview
              </GLabel>
              <div className="rounded-lg border border-border overflow-hidden bg-muted/30 max-w-[200px] max-h-[150px]">
                <img
                  src={imagePreviewUri}
                  alt="Decoded preview"
                  className="w-full h-auto object-contain max-h-[140px]"
                />
              </div>
            </div>
          )}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <GButton variant="ghost" size="sm" onClick={loadDecodeSample}>
                <Sparkles className="h-3.5 w-3 mr-1.5" />
                Sample
              </GButton>
              {decodedBytes && decodedBytes.length > 0 && (
                <GButton variant="outline" size="sm" onClick={handleDownload}>
                  <Download className="h-3.5 w-3 mr-1.5" />
                  Download
                </GButton>
              )}
            </div>
            {decodeOutput && (
              <CopyButton
                text={decodeOutput}
                id="copy-base64-decode"
              />
            )}
          </div>
          {decodeOutput && !decodeError && (
            <p className="text-xs text-muted-foreground">
              {decodeInput.replace(/\s/g, "").length} Base64 chars → {decodeOutput.length} chars
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
