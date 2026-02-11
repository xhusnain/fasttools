"use client"

import { useState, useMemo, useCallback } from "react"
import { GTextarea } from "@/ui/gtextarea"
import { GInput } from "@/ui/ginput"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { CopyButton } from "@/components/common/copy-button"
import {
  decodeFromBase64ToBytes,
  encodeFileToBase64,
  normalizeBase64ForDataUri,
  getExtensionAndMime,
} from "@/lib/base64-encoder"
import { FileUp, Download, ImageIcon, Upload } from "lucide-react"

const EXTENSION_OPTIONS = [
  "png",
  "jpg",
  "jpeg",
  "gif",
  "webp",
  "pdf",
  "svg",
  "xml",
  "xlsx",
  "xls",
  "docx",
  "doc",
  "zip",
  "bin",
]

export function Base64FileConverter() {
  const [decodeInput, setDecodeInput] = useState("")
  const [fileName, setFileName] = useState("file")
  const [extension, setExtension] = useState("png")
  const [decodeError, setDecodeError] = useState<string | null>(null)
  const [decodedBytes, setDecodedBytes] = useState<Uint8Array | null>(null)
  const [showPreview, setShowPreview] = useState(false)

  const [encodeOutput, setEncodeOutput] = useState("")
  const [encodeFileName, setEncodeFileName] = useState("")
  const [isDragging, setIsDragging] = useState(false)

  const handleDecodeChange = (value: string) => {
    setDecodeInput(value)
    if (value.trim()) {
      try {
        const bytes = decodeFromBase64ToBytes(value, false)
        setDecodedBytes(bytes)
        const detected = getExtensionAndMime(bytes)
        if (detected.ext !== "bin") setExtension(detected.ext)
        setDecodeError(null)
      } catch {
        setDecodedBytes(null)
        setDecodeError("Invalid Base64 string")
      }
    } else {
      setDecodedBytes(null)
      setDecodeError(null)
    }
  }

  const imagePreviewUri = useMemo(() => {
    if (!decodeInput.trim() || !decodedBytes || !showPreview || decodeError) return null
    try {
      const normalized = normalizeBase64ForDataUri(decodeInput, false)
      const { mime } = getExtensionAndMime(decodedBytes)
      if (mime.startsWith("image/")) {
        return `data:${mime};base64,${normalized}`
      }
    } catch {
      /* ignore */
    }
    return null
  }, [decodeInput, decodedBytes, showPreview, decodeError])

  const handleDownload = useCallback(() => {
    if (!decodedBytes || decodedBytes.length === 0) return
    const ext = EXTENSION_OPTIONS.includes(extension) ? extension : "bin"
    const blob = new Blob([new Uint8Array(decodedBytes)])
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${fileName || "file"}.${ext}`
    a.click()
    URL.revokeObjectURL(url)
  }, [decodedBytes, fileName, extension])

  const processFile = useCallback(async (file: File) => {
    try {
      const base64 = await encodeFileToBase64(file)
      setEncodeOutput(base64)
      setEncodeFileName(file.name)
    } catch {
      setEncodeOutput("")
    }
  }, [])

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) processFile(file)
      e.target.value = ""
    },
    [processFile]
  )

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
      const file = e.dataTransfer.files?.[0]
      if (file) processFile(file)
    },
    [processFile]
  )

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-foreground">
          Base64 File Converter
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Convert a string, file, or image into its base64 representation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4 rounded-xl border border-border bg-card p-4">
          <h3 className="text-sm font-semibold text-foreground">
            Base64 to File
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <GLabel className="text-xs text-muted-foreground">File Name</GLabel>
              <GInput
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                placeholder="file"
                className="mt-1 font-mono"
              />
            </div>
            <div>
              <GLabel className="text-xs text-muted-foreground">Extension</GLabel>
              <select
                value={extension}
                onChange={(e) => setExtension(e.target.value)}
                className="mt-1 h-9 w-full px-3 rounded-md border border-input bg-background text-foreground text-sm font-mono"
              >
                {EXTENSION_OPTIONS.map((ext) => (
                  <option key={ext} value={ext}>
                    {ext}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              Base64 String
            </GLabel>
            <GTextarea
              value={decodeInput}
              onChange={(e) => handleDecodeChange(e.target.value)}
              placeholder="Put your base64 file string here..."
              className={`mt-1 min-h-[120px] font-mono text-sm ${decodeError ? "border-red-500" : ""}`}
            />
            {decodeError && (
              <p className="mt-1 text-xs text-red-500">{decodeError}</p>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {decodedBytes && decodedBytes.length > 0 && (
              <>
                <GButton
                  variant="outline"
                  size="sm"
                  onClick={() => setShowPreview((s) => !s)}
                >
                  <ImageIcon className="h-3.5 w-3 mr-1.5" />
                  {showPreview ? "Hide" : "Preview"} image
                </GButton>
                <GButton variant="default" size="sm" onClick={handleDownload}>
                  <Download className="h-3.5 w-3 mr-1.5" />
                  Download file
                </GButton>
              </>
            )}
          </div>
          {imagePreviewUri && (
            <div className="space-y-2">
              <GLabel className="text-xs text-muted-foreground">
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
        </div>

        <div className="space-y-4 rounded-xl border border-border bg-card p-4">
          <h3 className="text-sm font-semibold text-foreground">
            File to Base64
          </h3>
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              isDragging
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            }`}
          >
            <input
              type="file"
              id="file-upload"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileSelect}
              accept="*/*"
            />
            <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
            <p className="text-sm text-muted-foreground mb-2">
              Drag and drop a file here, or click to select a file
            </p>
            <GButton
              variant="outline"
              size="sm"
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              <FileUp className="h-3.5 w-3 mr-1.5" />
              Browse files
            </GButton>
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              File in Base64
            </GLabel>
            <GTextarea
              value={encodeOutput}
              readOnly
              placeholder="File in base64 will be here"
              className="mt-1 min-h-[120px] font-mono text-sm bg-muted/30"
            />
          </div>
          {encodeOutput && (
            <div className="flex items-center justify-between">
              {encodeFileName && (
                <p className="text-xs text-muted-foreground truncate">
                  {encodeFileName}
                </p>
              )}
              <CopyButton text={encodeOutput} id="copy-base64-file" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
