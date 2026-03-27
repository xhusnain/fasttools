"use client"

import { useCallback, useRef, useState } from "react"
import { useDropzone } from "react-dropzone"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import { GSlider } from "@/ui/gslider"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { GTabs, GTabsContent, GTabsList, GTabsTrigger } from "@/ui/gtabs"
import { cn } from "@/lib/utils"
import {
  Upload,
  Download,
  Lock,
  Unlock,
  RotateCcw,
  Image as ImageIcon,
  Smartphone,
  Monitor,
  FileImage,
  Maximize2,
  Info,
  X,
} from "lucide-react"

// ── Social Media Presets ──────────────────────────────────────────
interface Preset {
  label: string
  width: number
  height: number
}

interface PresetGroup {
  platform: string
  icon: string
  presets: Preset[]
}

const SOCIAL_PRESETS: PresetGroup[] = [
  {
    platform: "Instagram",
    icon: "instagram",
    presets: [
      { label: "Square Post", width: 1080, height: 1080 },
      { label: "Portrait Post", width: 1080, height: 1350 },
      { label: "Landscape Post", width: 1080, height: 566 },
      { label: "Story / Reel", width: 1080, height: 1920 },
      { label: "Profile Picture", width: 320, height: 320 },
    ],
  },
  {
    platform: "Facebook",
    icon: "facebook",
    presets: [
      { label: "Feed Post", width: 1080, height: 1080 },
      { label: "Cover Photo", width: 851, height: 315 },
      { label: "Profile Picture", width: 320, height: 320 },
      { label: "Event Cover", width: 1920, height: 1005 },
      { label: "Story", width: 1080, height: 1920 },
    ],
  },
  {
    platform: "Twitter / X",
    icon: "twitter",
    presets: [
      { label: "Post Image", width: 1600, height: 900 },
      { label: "Header", width: 1500, height: 500 },
      { label: "Profile Picture", width: 400, height: 400 },
    ],
  },
  {
    platform: "LinkedIn",
    icon: "linkedin",
    presets: [
      { label: "Post Image", width: 1200, height: 627 },
      { label: "Personal Banner", width: 1584, height: 396 },
      { label: "Company Banner", width: 1128, height: 191 },
      { label: "Profile Picture", width: 400, height: 400 },
    ],
  },
  {
    platform: "YouTube",
    icon: "youtube",
    presets: [
      { label: "Thumbnail", width: 1280, height: 720 },
      { label: "Channel Banner", width: 2560, height: 1440 },
      { label: "Profile Picture", width: 800, height: 800 },
    ],
  },
  {
    platform: "TikTok",
    icon: "tiktok",
    presets: [
      { label: "Video / Post", width: 1080, height: 1920 },
      { label: "Profile Picture", width: 200, height: 200 },
    ],
  },
  {
    platform: "Pinterest",
    icon: "pinterest",
    presets: [
      { label: "Standard Pin", width: 1000, height: 1500 },
      { label: "Board Cover", width: 600, height: 600 },
    ],
  },
  {
    platform: "WhatsApp",
    icon: "whatsapp",
    presets: [
      { label: "Profile Picture (DP)", width: 500, height: 500 },
      { label: "Status", width: 750, height: 1334 },
    ],
  },
  {
    platform: "Common Sizes",
    icon: "common",
    presets: [
      { label: "Full HD", width: 1920, height: 1080 },
      { label: "HD", width: 1280, height: 720 },
      { label: "4K UHD", width: 3840, height: 2160 },
      { label: "Passport Photo (US)", width: 600, height: 600 },
      { label: "A4 Print (300 DPI)", width: 2480, height: 3508 },
      { label: "Favicon", width: 32, height: 32 },
      { label: "App Icon (iOS)", width: 1024, height: 1024 },
    ],
  },
]

// ── Types ─────────────────────────────────────────────────────────
type OutputFormat = "jpeg" | "png" | "webp"

interface ResizeResult {
  blob: Blob
  url: string
  width: number
  height: number
  fileSize: number
}

// ── Helpers ───────────────────────────────────────────────────────
function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B"
  const k = 1024
  const sizes = ["B", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i]
}

// ── Component ─────────────────────────────────────────────────────
export function ImageResizer() {
  // Source image state
  const [sourceFile, setSourceFile] = useState<File | null>(null)
  const [sourceUrl, setSourceUrl] = useState<string | null>(null)
  const [sourceWidth, setSourceWidth] = useState(0)
  const [sourceHeight, setSourceHeight] = useState(0)

  // Resize settings
  const [targetWidth, setTargetWidth] = useState(0)
  const [targetHeight, setTargetHeight] = useState(0)
  const [lockAspect, setLockAspect] = useState(true)
  const [quality, setQuality] = useState(90)
  const [outputFormat, setOutputFormat] = useState<OutputFormat>("jpeg")
  const [resizeMode, setResizeMode] = useState<"pixels" | "percentage">("pixels")
  const [percentage, setPercentage] = useState(100)

  // Result
  const [result, setResult] = useState<ResizeResult | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [activePreset, setActivePreset] = useState<string | null>(null)

  const imgRef = useRef<HTMLImageElement | null>(null)
  const aspectRatio = useRef(1)

  // ── Load image ────────────────────────────────────────────────
  const loadImage = useCallback((file: File) => {
    setSourceFile(file)
    setResult(null)
    setActivePreset(null)

    const url = URL.createObjectURL(file)
    setSourceUrl(url)

    const img = new Image()
    img.onload = () => {
      imgRef.current = img
      setSourceWidth(img.naturalWidth)
      setSourceHeight(img.naturalHeight)
      setTargetWidth(img.naturalWidth)
      setTargetHeight(img.naturalHeight)
      aspectRatio.current = img.naturalWidth / img.naturalHeight
      setPercentage(100)

      // Auto-detect best output format
      const ext = file.name.split(".").pop()?.toLowerCase()
      if (ext === "png") setOutputFormat("png")
      else if (ext === "webp") setOutputFormat("webp")
      else setOutputFormat("jpeg")
    }
    img.src = url
  }, [])

  const onDrop = useCallback(
    (accepted: File[]) => {
      if (accepted.length > 0) loadImage(accepted[0])
    },
    [loadImage]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/webp": [],
      "image/gif": [],
      "image/bmp": [],
      "image/tiff": [],
    },
    maxFiles: 1,
    multiple: false,
  })

  // ── Dimension handlers ────────────────────────────────────────
  const handleWidthChange = (w: number) => {
    setTargetWidth(w)
    setActivePreset(null)
    if (lockAspect && aspectRatio.current > 0) {
      setTargetHeight(Math.round(w / aspectRatio.current))
    }
  }

  const handleHeightChange = (h: number) => {
    setTargetHeight(h)
    setActivePreset(null)
    if (lockAspect && aspectRatio.current > 0) {
      setTargetWidth(Math.round(h * aspectRatio.current))
    }
  }

  const handlePercentageChange = (pct: number) => {
    setPercentage(pct)
    setActivePreset(null)
    setTargetWidth(Math.round(sourceWidth * (pct / 100)))
    setTargetHeight(Math.round(sourceHeight * (pct / 100)))
  }

  const applyPreset = (preset: Preset, key: string) => {
    setTargetWidth(preset.width)
    setTargetHeight(preset.height)
    setLockAspect(false)
    setActivePreset(key)
    setResizeMode("pixels")
  }

  const resetDimensions = () => {
    setTargetWidth(sourceWidth)
    setTargetHeight(sourceHeight)
    setPercentage(100)
    setActivePreset(null)
    setLockAspect(true)
    setQuality(90)
  }

  // ── Resize ────────────────────────────────────────────────────
  const handleResize = async () => {
    if (!imgRef.current) return
    setIsProcessing(true)

    try {
      const canvas = document.createElement("canvas")
      canvas.width = targetWidth
      canvas.height = targetHeight
      const ctx = canvas.getContext("2d")!

      // Enable high-quality image smoothing
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = "high"

      // For PNG transparency support
      if (outputFormat === "png") {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      } else {
        ctx.fillStyle = "#ffffff"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      ctx.drawImage(imgRef.current, 0, 0, targetWidth, targetHeight)

      const mimeType = `image/${outputFormat}`
      const q = outputFormat === "png" ? undefined : quality / 100

      const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob(
          (b) => (b ? resolve(b) : reject(new Error("Failed to create blob"))),
          mimeType,
          q
        )
      })

      const url = URL.createObjectURL(blob)
      setResult({
        blob,
        url,
        width: targetWidth,
        height: targetHeight,
        fileSize: blob.size,
      })
    } catch (err) {
      console.error("Resize failed:", err)
    } finally {
      setIsProcessing(false)
    }
  }

  // ── Download ──────────────────────────────────────────────────
  const handleDownload = () => {
    if (!result || !sourceFile) return
    const ext = outputFormat === "jpeg" ? "jpg" : outputFormat
    const baseName = sourceFile.name.replace(/\.[^.]+$/, "")
    const fileName = `${baseName}-${result.width}x${result.height}.${ext}`

    const link = document.createElement("a")
    link.href = result.url
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // ── Clear ─────────────────────────────────────────────────────
  const handleClear = () => {
    if (sourceUrl) URL.revokeObjectURL(sourceUrl)
    if (result?.url) URL.revokeObjectURL(result.url)
    setSourceFile(null)
    setSourceUrl(null)
    setSourceWidth(0)
    setSourceHeight(0)
    setTargetWidth(0)
    setTargetHeight(0)
    setResult(null)
    setActivePreset(null)
    imgRef.current = null
  }

  // ── Render ────────────────────────────────────────────────────
  return (
    <div className="space-y-6">
      {/* Upload Area */}
      {!sourceFile && (
        <GCard>
          <GCardContent className="p-0">
            <div
              {...getRootProps()}
              className={cn(
                "flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed p-12 cursor-pointer transition-colors",
                isDragActive
                  ? "border-primary bg-primary/5"
                  : "border-muted-foreground/25 hover:border-primary/50"
              )}
            >
              <input {...getInputProps()} />
              <div className="rounded-full bg-primary/10 p-4">
                <Upload className="h-8 w-8 text-primary" />
              </div>
              <div className="text-center">
                <p className="text-lg font-medium">
                  {isDragActive ? "Drop your image here" : "Drop an image or click to upload"}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Supports JPG, PNG, WebP, GIF, BMP, TIFF
                </p>
              </div>
            </div>
          </GCardContent>
        </GCard>
      )}

      {/* Main Editor */}
      {sourceFile && sourceUrl && (
        <>
          {/* Preview + Info Bar */}
          <GCard>
            <GCardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <GCardTitle className="flex items-center gap-2">
                    <ImageIcon className="h-5 w-5" />
                    {sourceFile.name}
                  </GCardTitle>
                  <GCardDescription>
                    Original: {sourceWidth} x {sourceHeight} px &middot; {formatBytes(sourceFile.size)}
                  </GCardDescription>
                </div>
                <GButton variant="outline" size="sm" onClick={handleClear}>
                  <X className="h-4 w-4 mr-1" /> Clear
                </GButton>
              </div>
            </GCardHeader>
            <GCardContent>
              <div className="rounded-lg bg-muted/50 p-3 flex items-center justify-center overflow-hidden max-h-[300px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={result?.url || sourceUrl}
                  alt="Preview"
                  className="max-h-[280px] max-w-full object-contain rounded"
                />
              </div>
              {result && (
                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
                  <span className="flex items-center gap-1.5 text-green-600 dark:text-green-400 font-medium">
                    <Maximize2 className="h-4 w-4" />
                    {result.width} x {result.height} px
                  </span>
                  <span className="text-muted-foreground">
                    {formatBytes(result.fileSize)}
                    {sourceFile.size > 0 && (
                      <span className={result.fileSize < sourceFile.size ? "text-green-600 dark:text-green-400 ml-1" : "text-orange-500 ml-1"}>
                        ({result.fileSize < sourceFile.size ? "-" : "+"}
                        {Math.abs(Math.round((1 - result.fileSize / sourceFile.size) * 100))}%)
                      </span>
                    )}
                  </span>
                  <GButton size="sm" onClick={handleDownload}>
                    <Download className="h-4 w-4 mr-1" /> Download
                  </GButton>
                </div>
              )}
            </GCardContent>
          </GCard>

          {/* Resize Controls */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Dimensions */}
            <div className="lg:col-span-2 space-y-6">
              <GCard>
                <GCardHeader className="pb-3">
                  <GCardTitle className="text-base">Resize Settings</GCardTitle>
                </GCardHeader>
                <GCardContent className="space-y-5">
                  {/* Mode Tabs */}
                  <GTabs value={resizeMode} onValueChange={(v) => setResizeMode(v as "pixels" | "percentage")}>
                    <GTabsList className="grid w-full grid-cols-2">
                      <GTabsTrigger value="pixels" className="flex items-center gap-1.5">
                        <Monitor className="h-4 w-4" /> Pixels
                      </GTabsTrigger>
                      <GTabsTrigger value="percentage" className="flex items-center gap-1.5">
                        <Maximize2 className="h-4 w-4" /> Percentage
                      </GTabsTrigger>
                    </GTabsList>

                    <GTabsContent value="pixels" className="mt-4 space-y-4">
                      <div className="flex items-end gap-3">
                        <div className="flex-1">
                          <GLabel>Width (px)</GLabel>
                          <GInput
                            type="number"
                            min={1}
                            max={10000}
                            value={targetWidth || ""}
                            onChange={(e) => handleWidthChange(parseInt(e.target.value) || 0)}
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => setLockAspect(!lockAspect)}
                          className={cn(
                            "mb-1 p-2 rounded-md transition-colors",
                            lockAspect
                              ? "bg-primary/10 text-primary"
                              : "bg-muted text-muted-foreground"
                          )}
                          title={lockAspect ? "Unlock aspect ratio" : "Lock aspect ratio"}
                        >
                          {lockAspect ? <Lock className="h-5 w-5" /> : <Unlock className="h-5 w-5" />}
                        </button>
                        <div className="flex-1">
                          <GLabel>Height (px)</GLabel>
                          <GInput
                            type="number"
                            min={1}
                            max={10000}
                            value={targetHeight || ""}
                            onChange={(e) => handleHeightChange(parseInt(e.target.value) || 0)}
                          />
                        </div>
                      </div>
                    </GTabsContent>

                    <GTabsContent value="percentage" className="mt-4 space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <GLabel>Scale: {percentage}%</GLabel>
                          <span className="text-sm text-muted-foreground">
                            {targetWidth} x {targetHeight} px
                          </span>
                        </div>
                        <GSlider
                          value={[percentage]}
                          onValueChange={([v]) => handlePercentageChange(v)}
                          min={1}
                          max={400}
                          step={1}
                        />
                        <div className="flex gap-2 mt-3">
                          {[25, 50, 75, 100, 150, 200].map((p) => (
                            <GButton
                              key={p}
                              variant={percentage === p ? "default" : "outline"}
                              size="sm"
                              className="text-xs"
                              onClick={() => handlePercentageChange(p)}
                            >
                              {p}%
                            </GButton>
                          ))}
                        </div>
                      </div>
                    </GTabsContent>
                  </GTabs>

                  {/* Quality + Format Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <GLabel>Quality: {quality}%</GLabel>
                        {outputFormat === "png" && (
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Info className="h-3 w-3" /> PNG is always lossless
                          </span>
                        )}
                      </div>
                      <GSlider
                        value={[quality]}
                        onValueChange={([v]) => setQuality(v)}
                        min={10}
                        max={100}
                        step={1}
                        disabled={outputFormat === "png"}
                      />
                    </div>
                    <div>
                      <GLabel>Output Format</GLabel>
                      <GSelect value={outputFormat} onValueChange={(v) => setOutputFormat(v as OutputFormat)}>
                        <GSelectTrigger>
                          <GSelectValue />
                        </GSelectTrigger>
                        <GSelectContent>
                          <GSelectItem value="jpeg">JPG (smallest file size)</GSelectItem>
                          <GSelectItem value="png">PNG (lossless, transparency)</GSelectItem>
                          <GSelectItem value="webp">WebP (modern, best balance)</GSelectItem>
                        </GSelectContent>
                      </GSelect>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    <GButton onClick={handleResize} disabled={isProcessing || targetWidth < 1 || targetHeight < 1}>
                      {isProcessing ? (
                        <>
                          <RotateCcw className="h-4 w-4 mr-1 animate-spin" /> Processing...
                        </>
                      ) : (
                        <>
                          <FileImage className="h-4 w-4 mr-1" /> Resize Image
                        </>
                      )}
                    </GButton>
                    <GButton variant="outline" onClick={resetDimensions}>
                      <RotateCcw className="h-4 w-4 mr-1" /> Reset
                    </GButton>
                    {result && (
                      <GButton variant="outline" onClick={handleDownload}>
                        <Download className="h-4 w-4 mr-1" /> Download
                      </GButton>
                    )}
                  </div>
                </GCardContent>
              </GCard>
            </div>

            {/* Right: Presets */}
            <div>
              <GCard>
                <GCardHeader className="pb-3">
                  <GCardTitle className="text-base flex items-center gap-2">
                    <Smartphone className="h-4 w-4" /> Social Media Presets
                  </GCardTitle>
                  <GCardDescription>One-click resize for any platform</GCardDescription>
                </GCardHeader>
                <GCardContent className="space-y-4 max-h-[520px] overflow-y-auto">
                  {SOCIAL_PRESETS.map((group) => (
                    <div key={group.platform}>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        {group.platform}
                      </p>
                      <div className="space-y-1">
                        {group.presets.map((preset) => {
                          const key = `${group.platform}-${preset.label}`
                          return (
                            <button
                              key={key}
                              onClick={() => applyPreset(preset, key)}
                              className={cn(
                                "w-full text-left text-sm px-3 py-2 rounded-md transition-colors flex items-center justify-between",
                                activePreset === key
                                  ? "bg-primary text-primary-foreground"
                                  : "hover:bg-muted"
                              )}
                            >
                              <span>{preset.label}</span>
                              <span className={cn(
                                "text-xs tabular-nums",
                                activePreset === key ? "text-primary-foreground/70" : "text-muted-foreground"
                              )}>
                                {preset.width}x{preset.height}
                              </span>
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </GCardContent>
              </GCard>
            </div>
          </div>

          {/* Privacy Note */}
          <div className="flex items-start gap-2 text-sm text-muted-foreground bg-muted/50 rounded-lg p-4">
            <Lock className="h-4 w-4 mt-0.5 shrink-0" />
            <p>
              <strong>100% Private:</strong> Your images are processed entirely in your browser using the Canvas API.
              No files are uploaded to any server. Your images never leave your device.
            </p>
          </div>
        </>
      )}
    </div>
  )
}
