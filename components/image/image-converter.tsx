"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useDropzone } from "react-dropzone"
import { GButton } from "@/ui/gbutton"
import { GCard } from "@/ui/gcard"
import { GSlider } from "@/ui/gslider"
import { GLabel } from "@/ui/glabel"
import {
  GSelect,
  GSelectContent,
  GSelectItem,
  GSelectTrigger,
  GSelectValue,
} from "@/ui/gselect"
import { Archive, Download, FileImage, RefreshCw, Trash2, Upload } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  convertImage,
  outputFilename,
  targetExtension,
  type TargetFormat,
} from "@/lib/image-convert"
// @ts-ignore - no bundled types

interface ConvertedFile {
  id: string
  original: File
  /** HEIC originals can't be previewed by the browser, only their output. */
  previewable: boolean
  originalUrl: string
  converted: Blob | null
  convertedUrl: string | null
  status: "pending" | "converting" | "completed" | "error"
}

const FORMAT_LABELS: Record<TargetFormat, string> = {
  "image/jpeg": "JPG",
  "image/png": "PNG",
  "image/webp": "WebP",
}

const HEIC_RE = /\.(heic|heif)$/i

function isPreviewable(file: File): boolean {
  // The browser can render anything except HEIC/HEIF in an <img> tag.
  return !(file.type.includes("heic") || file.type.includes("heif") || HEIC_RE.test(file.name))
}

export interface ImageConverterProps {
  /** Output format the page presets (e.g. /heic-to-jpg presets JPG). */
  defaultTarget: TargetFormat
  /** Output formats the user may switch between. */
  targetOptions?: TargetFormat[]
  /** react-dropzone accept map for the inputs this page advertises. */
  accept: Record<string, string[]>
  /** Short input label shown in the dropzone, e.g. "HEIC" or "PNG". */
  sourceLabel: string
}

export function ImageConverter({
  defaultTarget,
  targetOptions = ["image/jpeg", "image/png", "image/webp"],
  accept,
  sourceLabel,
}: ImageConverterProps) {
  const [files, setFiles] = useState<ConvertedFile[]>([])
  const [target, setTarget] = useState<TargetFormat>(defaultTarget)
  const [quality, setQuality] = useState(0.92)
  const [isBusy, setIsBusy] = useState(false)

  // Keep the latest settings in refs so the drop handler and re-convert effect
  // always read current values without re-subscribing.
  const targetRef = useRef(target)
  const qualityRef = useRef(quality)
  targetRef.current = target
  qualityRef.current = quality

  const isLossy = target === "image/jpeg" || target === "image/webp"

  const onDrop = useCallback((accepted: File[]) => {
    const next: ConvertedFile[] = accepted.map((file) => ({
      id: Math.random().toString(36).slice(2),
      original: file,
      previewable: isPreviewable(file),
      originalUrl: URL.createObjectURL(file),
      converted: null,
      convertedUrl: null,
      status: "pending",
    }))
    setFiles((prev) => [...prev, ...next])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxFiles: 100,
  })

  const convert = useCallback(async (batch: ConvertedFile[]) => {
    if (batch.length === 0) return
    setIsBusy(true)
    setFiles((prev) =>
      prev.map((f) =>
        batch.find((b) => b.id === f.id) ? { ...f, status: "converting" } : f
      )
    )

    for (const item of batch) {
      try {
        const { blob } = await convertImage(item.original, targetRef.current, qualityRef.current)
        const url = URL.createObjectURL(blob)
        setFiles((prev) =>
          prev.map((f) => {
            if (f.id !== item.id) return f
            if (f.convertedUrl) URL.revokeObjectURL(f.convertedUrl)
            return { ...f, converted: blob, convertedUrl: url, status: "completed" }
          })
        )
      } catch {
        setFiles((prev) =>
          prev.map((f) => (f.id === item.id ? { ...f, status: "error" } : f))
        )
      }
    }
    setIsBusy(false)
  }, [])

  // Auto-convert freshly dropped files.
  useEffect(() => {
    const pending = files.filter((f) => f.status === "pending")
    if (pending.length > 0) convert(pending)
  }, [files, convert])

  // Re-convert everything when the target format or quality changes (debounced).
  useEffect(() => {
    const timer = setTimeout(() => {
      const done = files.filter((f) => f.status === "completed" || f.status === "error")
      if (done.length > 0) convert(done)
    }, 400)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, quality])

  const removeFile = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setFiles((prev) => {
      const target = prev.find((f) => f.id === id)
      if (target) {
        URL.revokeObjectURL(target.originalUrl)
        if (target.convertedUrl) URL.revokeObjectURL(target.convertedUrl)
      }
      return prev.filter((f) => f.id !== id)
    })
  }

  const downloadSingle = (item: ConvertedFile) => {
    if (!item.converted || !item.convertedUrl) return
    const link = document.createElement("a")
    link.href = item.convertedUrl
    link.download = outputFilename(item.original.name, target)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const downloadAllZip = async () => {
    // JSZip is only needed for the optional "download all" action — lazy-load it.
    const JSZip = (await import("jszip")).default
    const zip = new JSZip()
    let count = 0
    files.forEach((item) => {
      if (item.converted) {
        zip.file(outputFilename(item.original.name, target), item.converted)
        count++
      }
    })
    if (count === 0) return
    const content = await zip.generateAsync({ type: "blob" })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(content)
    link.download = `converted-${targetExtension(target)}.zip`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const formatSize = (bytes: number) => {
    if (bytes === 0) return "0 B"
    const k = 1024
    const sizes = ["B", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const completedCount = files.filter((f) => f.status === "completed").length

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Settings */}
        <div className="lg:col-span-1 space-y-6">
          <GCard className="p-6 sticky top-4">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Settings</h2>
                {files.length > 0 && (
                  <span className="text-sm text-muted-foreground">{files.length} images</span>
                )}
              </div>

              <div className="space-y-3">
                <GLabel>Convert to</GLabel>
                <GSelect value={target} onValueChange={(v) => setTarget(v as TargetFormat)}>
                  <GSelectTrigger className="w-full">
                    <GSelectValue />
                  </GSelectTrigger>
                  <GSelectContent>
                    {targetOptions.map((opt) => (
                      <GSelectItem key={opt} value={opt}>
                        {FORMAT_LABELS[opt]}
                      </GSelectItem>
                    ))}
                  </GSelectContent>
                </GSelect>
              </div>

              {isLossy && (
                <div className="space-y-4">
                  <GLabel>Quality ({Math.round(quality * 100)}%)</GLabel>
                  <GSlider
                    value={[quality]}
                    min={0.1}
                    max={1}
                    step={0.01}
                    onValueChange={([val]: number[]) => setQuality(val)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Lower quality means a smaller file. PNG is lossless and ignores this setting.
                  </p>
                </div>
              )}

              <div className="pt-4 space-y-3">
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <GButton variant="outline" className="w-full">
                    <Upload className="w-4 h-4 mr-2" />
                    Add Images
                  </GButton>
                </div>
                {completedCount > 0 && (
                  <GButton
                    className="w-full"
                    onClick={downloadAllZip}
                    disabled={isBusy}
                  >
                    <Archive className="w-4 h-4 mr-2" />
                    Download All (ZIP)
                  </GButton>
                )}
              </div>
            </div>
          </GCard>
        </div>

        {/* Files */}
        <div className="lg:col-span-2 space-y-6">
          {files.length === 0 ? (
            <div
              {...getRootProps()}
              className={cn(
                "border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-colors h-[400px] flex flex-col items-center justify-center",
                isDragActive
                  ? "border-primary bg-muted/50"
                  : "border-border hover:border-primary/50 hover:bg-muted/50"
              )}
            >
              <input {...getInputProps()} />
              <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                <Upload className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold">
                {sourceLabel} to {FORMAT_LABELS[defaultTarget]} Converter
              </h3>
              <p className="text-muted-foreground mt-2 max-w-sm mx-auto">
                Drag &amp; drop up to 100 {sourceLabel} images here. Conversion runs entirely in your
                browser — files are never uploaded.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {files.map((file) => (
                <GCard key={file.id} className="p-4 overflow-hidden">
                  <div className="flex items-center gap-4">
                    {/* Thumbnail: show the converted result, the previewable original, or a placeholder */}
                    <div className="w-20 h-20 bg-muted/50 rounded-lg flex-shrink-0 overflow-hidden relative border flex items-center justify-center">
                      {file.convertedUrl || file.previewable ? (
                        <img
                          src={file.convertedUrl || file.originalUrl}
                          alt="preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <FileImage className="w-8 h-8 text-muted-foreground" />
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium truncate" title={file.original.name}>
                          {file.original.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {formatSize(file.original.size)}
                        </p>
                      </div>

                      <div className="flex items-center justify-between md:justify-end gap-4">
                        {file.status === "converting" && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <RefreshCw className="w-4 h-4 animate-spin" />
                            <span className="text-sm">Converting...</span>
                          </div>
                        )}
                        {file.status === "error" && (
                          <span className="text-sm text-red-500">Could not convert</span>
                        )}
                        {file.status === "completed" && file.converted && (
                          <div className="text-right">
                            <p className="font-bold text-green-600">
                              {formatSize(file.converted.size)}
                            </p>
                            <span className="text-xs px-1.5 py-0.5 rounded-full font-medium bg-green-100 text-green-600">
                              {FORMAT_LABELS[target]}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <GButton
                        size="icon"
                        variant="ghost"
                        onClick={() => downloadSingle(file)}
                        disabled={!file.converted}
                      >
                        <Download className="w-4 h-4 text-primary" />
                      </GButton>
                      <GButton
                        size="icon"
                        variant="ghost"
                        className="text-muted-foreground hover:text-red-500"
                        onClick={(e) => removeFile(file.id, e)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </GButton>
                    </div>
                  </div>
                </GCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
