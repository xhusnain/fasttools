"use client"

import { useCallback, useRef, useState } from "react"
import { useDropzone } from "react-dropzone"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import { GProgress } from "@/ui/gprogress"
import { GTabs, GTabsContent, GTabsList, GTabsTrigger } from "@/ui/gtabs"
import { cn } from "@/lib/utils"
import {
  Upload,
  Download,
  RotateCcw,
  Image as ImageIcon,
  Scissors,
  Palette,
  ImagePlus,
  Loader2,
  ZoomIn,
  ZoomOut,
  Eye,
  X,
  Check,
} from "lucide-react"

type BackgroundMode = "transparent" | "color" | "image"

interface ProcessedResult {
  originalUrl: string
  resultUrl: string
  originalName: string
  originalSize: number
  resultSize: number
  width: number
  height: number
}

const PRESET_COLORS = [
  "#FFFFFF",
  "#000000",
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#F5F5DC",
  "#808080",
  "#FFA500",
  "#800080",
]

export function BackgroundRemover() {
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [processing, setProcessing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [progressMessage, setProgressMessage] = useState("")
  const [result, setResult] = useState<ProcessedResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [bgMode, setBgMode] = useState<BackgroundMode>("transparent")
  const [bgColor, setBgColor] = useState("#FFFFFF")
  const [bgImageUrl, setBgImageUrl] = useState<string | null>(null)
  const [compareMode, setCompareMode] = useState(false)
  const [zoom, setZoom] = useState(1)

  const bgImageInputRef = useRef<HTMLInputElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const f = acceptedFiles[0]
    if (!f) return
    setFile(f)
    setPreviewUrl(URL.createObjectURL(f))
    setResult(null)
    setError(null)
    setProgress(0)
    setProgressMessage("")
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpg", ".jpeg", ".png", ".webp", ".bmp"] },
    maxFiles: 1,
    maxSize: 25 * 1024 * 1024,
  })

  const handleBgImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    if (f) setBgImageUrl(URL.createObjectURL(f))
  }

  const removeBackground = async () => {
    if (!file) return

    setProcessing(true)
    setProgress(5)
    setProgressMessage("Loading AI model (first time may take ~30s)...")
    setError(null)

    try {
      // Configure ONNX runtime WASM path to use CDN (avoids bundling 12MB WASM in deployment)
      // @ts-ignore - onnxruntime-web@1.21.0 lacks type declarations
      const ort = await import("onnxruntime-web")
      ort.env.wasm.wasmPaths = "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.21.0/dist/"

      const { removeBackground: removeBg } = await import("@imgly/background-removal")

      setProgress(15)
      setProgressMessage("AI model loaded. Processing image...")

      const blob = await removeBg(file, {
        progress: (key: string, current: number, total: number) => {
          if (total > 0) {
            const pct = Math.round((current / total) * 100)
            if (key.includes("fetch")) {
              setProgress(Math.min(15 + pct * 0.3, 45))
              setProgressMessage("Downloading AI model...")
            } else if (key.includes("compute") || key.includes("inference")) {
              setProgress(Math.min(45 + pct * 0.5, 95))
              setProgressMessage("Removing background...")
            }
          }
        },
      })

      setProgress(95)
      setProgressMessage("Generating result...")

      const resultBlob = await applyBackground(blob)

      const resultUrl = URL.createObjectURL(resultBlob)

      const img = new Image()
      img.src = URL.createObjectURL(blob)
      await new Promise((resolve) => {
        img.onload = resolve
      })

      setResult({
        originalUrl: previewUrl!,
        resultUrl,
        originalName: file.name,
        originalSize: file.size,
        resultSize: resultBlob.size,
        width: img.width,
        height: img.height,
      })

      setProgress(100)
      setProgressMessage("Done!")
    } catch (err) {
      console.error("Background removal failed:", err)
      setError(
        err instanceof Error
          ? err.message
          : "Background removal failed. Please try a different image."
      )
    } finally {
      setProcessing(false)
    }
  }

  const applyBackground = async (transparentBlob: Blob): Promise<Blob> => {
    if (bgMode === "transparent") return transparentBlob

    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")!

    const fgImg = new Image()
    fgImg.src = URL.createObjectURL(transparentBlob)
    await new Promise((resolve) => {
      fgImg.onload = resolve
    })

    canvas.width = fgImg.width
    canvas.height = fgImg.height

    if (bgMode === "color") {
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    } else if (bgMode === "image" && bgImageUrl) {
      const bgImg = new Image()
      bgImg.src = bgImageUrl
      await new Promise((resolve) => {
        bgImg.onload = resolve
      })
      ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height)
    }

    ctx.drawImage(fgImg, 0, 0)

    return new Promise((resolve) => {
      canvas.toBlob((b) => resolve(b!), "image/png")
    })
  }

  const downloadResult = () => {
    if (!result) return
    const a = document.createElement("a")
    a.href = result.resultUrl
    const ext = bgMode === "transparent" ? "png" : "png"
    const baseName = result.originalName.replace(/\.[^.]+$/, "")
    a.download = `${baseName}-no-bg.${ext}`
    a.click()
  }

  const reset = () => {
    setFile(null)
    setPreviewUrl(null)
    setResult(null)
    setError(null)
    setProgress(0)
    setProgressMessage("")
    setZoom(1)
    setCompareMode(false)
  }

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      {!file && (
        <GCard>
          <GCardContent className="p-6">
            <div
              {...getRootProps()}
              className={cn(
                "border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-300",
                isDragActive
                  ? "border-primary bg-primary/5 scale-[1.01]"
                  : "border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/50"
              )}
            >
              <input {...getInputProps()} />
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Upload className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-semibold">
                    {isDragActive ? "Drop your image here" : "Upload an image"}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Drag & drop or click to browse. Supports JPG, PNG, WebP, BMP (max 25 MB)
                  </p>
                </div>
              </div>
            </div>
          </GCardContent>
        </GCard>
      )}

      {/* Processing Area */}
      {file && !result && (
        <div className="space-y-6">
          {/* Preview + Settings */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Image Preview */}
            <div className="lg:col-span-2">
              <GCard>
                <GCardHeader>
                  <GCardTitle className="flex items-center gap-2 text-base">
                    <ImageIcon className="w-4 h-4" />
                    Original Image
                  </GCardTitle>
                </GCardHeader>
                <GCardContent>
                  <div className="relative rounded-lg overflow-hidden bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZjBmMGYwIi8+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNmMGYwZjAiLz48L3N2Zz4=')]">
                    {previewUrl && (
                      <img
                        src={previewUrl}
                        alt="Original"
                        className="w-full max-h-[400px] object-contain"
                      />
                    )}
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                    <span>{file.name}</span>
                    <span>{formatSize(file.size)}</span>
                  </div>
                </GCardContent>
              </GCard>
            </div>

            {/* Background Settings */}
            <div>
              <GCard>
                <GCardHeader>
                  <GCardTitle className="flex items-center gap-2 text-base">
                    <Palette className="w-4 h-4" />
                    Background Options
                  </GCardTitle>
                </GCardHeader>
                <GCardContent className="space-y-4">
                  <GTabs
                    value={bgMode}
                    onValueChange={(v) => setBgMode(v as BackgroundMode)}
                  >
                    <GTabsList className="grid grid-cols-3 w-full">
                      <GTabsTrigger value="transparent" className="text-xs">
                        Transparent
                      </GTabsTrigger>
                      <GTabsTrigger value="color" className="text-xs">
                        Color
                      </GTabsTrigger>
                      <GTabsTrigger value="image" className="text-xs">
                        Image
                      </GTabsTrigger>
                    </GTabsList>

                    <GTabsContent value="transparent">
                      <p className="text-sm text-muted-foreground">
                        Output a PNG with a transparent background — perfect for overlays, logos, and
                        product images.
                      </p>
                    </GTabsContent>

                    <GTabsContent value="color" className="space-y-3">
                      <GLabel>Choose a background color</GLabel>
                      <div className="grid grid-cols-6 gap-2">
                        {PRESET_COLORS.map((c) => (
                          <button
                            key={c}
                            onClick={() => setBgColor(c)}
                            className={cn(
                              "w-8 h-8 rounded-md border-2 transition-all",
                              bgColor === c ? "border-primary scale-110" : "border-muted"
                            )}
                            style={{ backgroundColor: c }}
                            aria-label={`Select color ${c}`}
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <GLabel htmlFor="custom-color">Custom:</GLabel>
                        <input
                          id="custom-color"
                          type="color"
                          value={bgColor}
                          onChange={(e) => setBgColor(e.target.value)}
                          className="w-10 h-8 rounded cursor-pointer"
                        />
                        <GInput
                          value={bgColor}
                          onChange={(e) => setBgColor(e.target.value)}
                          className="flex-1 font-mono text-sm"
                          maxLength={7}
                        />
                      </div>
                    </GTabsContent>

                    <GTabsContent value="image" className="space-y-3">
                      <GLabel>Upload a background image</GLabel>
                      <input
                        ref={bgImageInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleBgImageUpload}
                        className="hidden"
                      />
                      <GButton
                        variant="outline"
                        className="w-full"
                        onClick={() => bgImageInputRef.current?.click()}
                      >
                        <ImagePlus className="w-4 h-4 mr-2" />
                        {bgImageUrl ? "Change Background" : "Choose Image"}
                      </GButton>
                      {bgImageUrl && (
                        <img
                          src={bgImageUrl}
                          alt="Background"
                          className="w-full h-24 object-cover rounded-md"
                        />
                      )}
                    </GTabsContent>
                  </GTabs>
                </GCardContent>
              </GCard>
            </div>
          </div>

          {/* Progress Bar */}
          {processing && (
            <GCard>
              <GCardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Loader2 className="w-5 h-5 animate-spin text-primary" />
                  <span className="text-sm font-medium">{progressMessage}</span>
                </div>
                <GProgress value={progress} className="h-3" />
                <p className="text-xs text-muted-foreground text-right">{progress}%</p>
              </GCardContent>
            </GCard>
          )}

          {/* Error */}
          {error && (
            <GCard className="border-destructive">
              <GCardContent className="p-4">
                <p className="text-sm text-destructive">{error}</p>
              </GCardContent>
            </GCard>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <GButton
              onClick={removeBackground}
              disabled={processing}
              size="lg"
              className="flex-1"
            >
              {processing ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Scissors className="w-4 h-4 mr-2" />
                  Remove Background
                </>
              )}
            </GButton>
            <GButton variant="outline" onClick={reset} disabled={processing}>
              <RotateCcw className="w-4 h-4" />
            </GButton>
          </div>
        </div>
      )}

      {/* Result Area */}
      {result && (
        <div className="space-y-6">
          {/* Compare Toggle + Zoom */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <GButton
                variant={compareMode ? "default" : "outline"}
                size="sm"
                onClick={() => setCompareMode(!compareMode)}
              >
                <Eye className="w-4 h-4 mr-2" />
                {compareMode ? "Hide Original" : "Compare"}
              </GButton>
            </div>
            <div className="flex items-center gap-2">
              <GButton
                variant="outline"
                size="icon"
                onClick={() => setZoom((z) => Math.max(0.25, z - 0.25))}
                disabled={zoom <= 0.25}
              >
                <ZoomOut className="w-4 h-4" />
              </GButton>
              <span className="text-sm font-mono w-12 text-center">{Math.round(zoom * 100)}%</span>
              <GButton
                variant="outline"
                size="icon"
                onClick={() => setZoom((z) => Math.min(3, z + 0.25))}
                disabled={zoom >= 3}
              >
                <ZoomIn className="w-4 h-4" />
              </GButton>
            </div>
          </div>

          {/* Result Images */}
          <div className={cn("grid gap-6", compareMode ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1")}>
            {compareMode && (
              <GCard>
                <GCardHeader>
                  <GCardTitle className="text-base">Original</GCardTitle>
                </GCardHeader>
                <GCardContent>
                  <div className="overflow-auto rounded-lg max-h-[500px]">
                    <img
                      src={result.originalUrl}
                      alt="Original"
                      className="mx-auto"
                      style={{ transform: `scale(${zoom})`, transformOrigin: "top center" }}
                    />
                  </div>
                </GCardContent>
              </GCard>
            )}

            <GCard>
              <GCardHeader>
                <GCardTitle className="flex items-center gap-2 text-base">
                  <Check className="w-4 h-4 text-emerald-500" />
                  Background Removed
                </GCardTitle>
              </GCardHeader>
              <GCardContent>
                {/* Checkerboard pattern for transparency */}
                <div
                  className="overflow-auto rounded-lg max-h-[500px]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZTBlMGUwIi8+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNlMGUwZTAiLz48cmVjdCB4PSIxMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZmZmIi8+PHJlY3QgeT0iMTAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==")`,
                    backgroundSize: "20px 20px",
                  }}
                >
                  <img
                    src={result.resultUrl}
                    alt="Background removed"
                    className="mx-auto"
                    style={{ transform: `scale(${zoom})`, transformOrigin: "top center" }}
                  />
                </div>
              </GCardContent>
            </GCard>
          </div>

          {/* Stats */}
          <GCard>
            <GCardContent className="p-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-xs text-muted-foreground">Original Size</p>
                  <p className="text-sm font-semibold">{formatSize(result.originalSize)}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Result Size</p>
                  <p className="text-sm font-semibold">{formatSize(result.resultSize)}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Dimensions</p>
                  <p className="text-sm font-semibold">
                    {result.width} x {result.height}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Background</p>
                  <p className="text-sm font-semibold capitalize">{bgMode}</p>
                </div>
              </div>
            </GCardContent>
          </GCard>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <GButton onClick={downloadResult} size="lg" className="flex-1">
              <Download className="w-4 h-4 mr-2" />
              Download Result
            </GButton>
            <GButton variant="outline" onClick={reset}>
              <RotateCcw className="w-4 h-4 mr-2" />
              New Image
            </GButton>
          </div>

          <canvas ref={canvasRef} className="hidden" />
        </div>
      )}
    </div>
  )
}
