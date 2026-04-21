"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useDropzone } from "react-dropzone"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { cn } from "@/lib/utils"
import {
  Upload,
  Download,
  RotateCcw,
  FlipHorizontal,
  FlipVertical,
  Crop,
  X,
  Image as ImageIcon,
  Lock,
  Unlock,
} from "lucide-react"

// ── Types ──────────────────────────────────────────────────────────────────────

type OutputFormat = "jpeg" | "png" | "webp"
type HandleType = "tl" | "tc" | "tr" | "ml" | "mr" | "bl" | "bc" | "br" | "move" | null

interface CropBox { x: number; y: number; w: number; h: number }

interface DragState {
  handle: HandleType
  startMx: number
  startMy: number
  startCrop: CropBox
}

// ── Aspect ratio presets ───────────────────────────────────────────────────────

const ASPECT_PRESETS = [
  { label: "Free", ratio: null },
  { label: "1:1", ratio: 1 },
  { label: "4:3", ratio: 4 / 3 },
  { label: "16:9", ratio: 16 / 9 },
  { label: "3:2", ratio: 3 / 2 },
  { label: "2:3", ratio: 2 / 3 },
  { label: "9:16", ratio: 9 / 16 },
  { label: "21:9", ratio: 21 / 9 },
  { label: "5:4", ratio: 5 / 4 },
]

// ── Helpers ────────────────────────────────────────────────────────────────────

function formatBytes(b: number) {
  if (b === 0) return "0 B"
  const u = ["B", "KB", "MB"]
  const i = Math.floor(Math.log(b) / Math.log(1024))
  return (b / Math.pow(1024, i)).toFixed(1) + " " + u[i]
}

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v))
}

function applyAspect(crop: CropBox, ratio: number | null, imgW: number, imgH: number): CropBox {
  if (!ratio) return crop
  let { x, y, w, h } = crop
  h = w / ratio
  if (y + h > imgH) { h = imgH - y; w = h * ratio }
  if (x + w > imgW) { w = imgW - x; h = w / ratio }
  return { x, y, w: Math.max(10, w), h: Math.max(10, h) }
}

// ── Component ──────────────────────────────────────────────────────────────────

export function ImageCropper() {
  const [sourceFile, setSourceFile] = useState<File | null>(null)
  const [sourceUrl, setSourceUrl] = useState<string | null>(null)
  const [imgNaturalW, setImgNaturalW] = useState(0)
  const [imgNaturalH, setImgNaturalH] = useState(0)

  // Crop box in image-pixel coordinates
  const [crop, setCrop] = useState<CropBox>({ x: 0, y: 0, w: 0, h: 0 })

  // Aspect ratio
  const [aspectPreset, setAspectPreset] = useState<string>("Free")
  const [lockedRatio, setLockedRatio] = useState<number | null>(null)

  // Custom size override
  const [customW, setCustomW] = useState("")
  const [customH, setCustomH] = useState("")

  // Rotation / flip
  const [rotation, setRotation] = useState<0 | 90 | 180 | 270>(0)
  const [flipH, setFlipH] = useState(false)
  const [flipV, setFlipV] = useState(false)

  // Output
  const [outputFormat, setOutputFormat] = useState<OutputFormat>("jpeg")
  const [quality, setQuality] = useState(92)
  const [resultUrl, setResultUrl] = useState<string | null>(null)
  const [resultSize, setResultSize] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)

  // The displayed image element (used to get rendered size)
  const imgRef = useRef<HTMLImageElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const naturalImgRef = useRef<HTMLImageElement | null>(null)

  // Drag state (not in React state to avoid re-renders mid-drag)
  const drag = useRef<DragState | null>(null)

  // ── Load image ──────────────────────────────────────────────────────────────

  const loadFile = useCallback((file: File) => {
    setSourceFile(file)
    setResultUrl(null)
    const url = URL.createObjectURL(file)
    setSourceUrl(url)
    const img = new Image()
    img.onload = () => {
      naturalImgRef.current = img
      setImgNaturalW(img.naturalWidth)
      setImgNaturalH(img.naturalHeight)
      const initialCrop: CropBox = { x: 0, y: 0, w: img.naturalWidth, h: img.naturalHeight }
      setCrop(initialCrop)
      setCustomW(String(img.naturalWidth))
      setCustomH(String(img.naturalHeight))
      setAspectPreset("Free")
      setLockedRatio(null)
      setRotation(0)
      setFlipH(false)
      setFlipV(false)
      const ext = file.name.split(".").pop()?.toLowerCase()
      setOutputFormat(ext === "png" ? "png" : ext === "webp" ? "webp" : "jpeg")
    }
    img.src = url
  }, [])

  const onDrop = useCallback((accepted: File[]) => {
    if (accepted[0]) loadFile(accepted[0])
  }, [loadFile])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/jpeg": [], "image/png": [], "image/webp": [], "image/gif": [], "image/bmp": [] },
    maxFiles: 1,
    maxSize: 20 * 1024 * 1024,
  })

  // ── Scale helpers: map between image coords and screen coords ───────────────

  const getScale = useCallback((): { scaleX: number; scaleY: number } => {
    const el = imgRef.current
    if (!el) return { scaleX: 1, scaleY: 1 }
    return {
      scaleX: imgNaturalW / el.clientWidth,
      scaleY: imgNaturalH / el.clientHeight,
    }
  }, [imgNaturalW, imgNaturalH])

  // Screen coords of crop box edges
  const getCropScreen = useCallback((): { left: number; top: number; right: number; bottom: number; w: number; h: number } | null => {
    const el = imgRef.current
    if (!el || imgNaturalW === 0) return null
    const { scaleX, scaleY } = getScale()
    const left = crop.x / scaleX
    const top = crop.y / scaleY
    const right = (crop.x + crop.w) / scaleX
    const bottom = (crop.y + crop.h) / scaleY
    return { left, top, right, bottom, w: right - left, h: bottom - top }
  }, [crop, getScale, imgNaturalW])

  // ── Drag handlers ───────────────────────────────────────────────────────────

  const onMouseDown = useCallback((e: React.MouseEvent, handle: HandleType) => {
    e.preventDefault()
    e.stopPropagation()
    drag.current = {
      handle,
      startMx: e.clientX,
      startMy: e.clientY,
      startCrop: { ...crop },
    }
  }, [crop])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!drag.current) return
      const { handle, startMx, startMy, startCrop } = drag.current
      const { scaleX, scaleY } = getScale()
      const dx = (e.clientX - startMx) * scaleX
      const dy = (e.clientY - startMy) * scaleY
      const { x, y, w, h } = startCrop
      const MIN = 20

      let nx = x, ny = y, nw = w, nh = h

      if (handle === "move") {
        nx = clamp(x + dx, 0, imgNaturalW - w)
        ny = clamp(y + dy, 0, imgNaturalH - h)
      } else {
        // Compute new box based on which edge/corner is dragged
        if (handle === "tl" || handle === "tc" || handle === "tr") {
          const newY = clamp(y + dy, 0, y + h - MIN)
          nh = h - (newY - y)
          ny = newY
        }
        if (handle === "bl" || handle === "bc" || handle === "br") {
          nh = clamp(h + dy, MIN, imgNaturalH - y)
        }
        if (handle === "tl" || handle === "ml" || handle === "bl") {
          const newX = clamp(x + dx, 0, x + w - MIN)
          nw = w - (newX - x)
          nx = newX
        }
        if (handle === "tr" || handle === "mr" || handle === "br") {
          nw = clamp(w + dx, MIN, imgNaturalW - x)
        }
      }

      // Apply aspect lock
      if (lockedRatio && handle !== "move") {
        if (["tl", "tr", "bl", "br"].includes(handle!)) {
          // adjust height to maintain ratio
          nh = nw / lockedRatio
          if (ny + nh > imgNaturalH) { nh = imgNaturalH - ny; nw = nh * lockedRatio }
        } else if (["tc", "bc"].includes(handle!)) {
          nw = nh * lockedRatio
        } else {
          nh = nw / lockedRatio
        }
      }

      setCrop({ x: nx, y: ny, w: nw, h: nh })
      setCustomW(String(Math.round(nw)))
      setCustomH(String(Math.round(nh)))
    }
    const onUp = () => { drag.current = null }
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup", onUp)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseup", onUp)
    }
  }, [getScale, imgNaturalW, imgNaturalH, lockedRatio])

  // ── Aspect preset change ────────────────────────────────────────────────────

  const handleAspectChange = useCallback((label: string) => {
    setAspectPreset(label)
    const preset = ASPECT_PRESETS.find(p => p.label === label)
    const ratio = preset?.ratio ?? null
    setLockedRatio(ratio)
    setCrop(prev => {
      const next = applyAspect(prev, ratio, imgNaturalW, imgNaturalH)
      setCustomW(String(Math.round(next.w)))
      setCustomH(String(Math.round(next.h)))
      return next
    })
  }, [imgNaturalW, imgNaturalH])

  // ── Custom size input ────────────────────────────────────────────────────────

  const applyCustomSize = useCallback(() => {
    const w = parseInt(customW)
    const h = parseInt(customH)
    if (!w || !h || w < 1 || h < 1) return
    const cw = clamp(w, 1, imgNaturalW)
    const ch = clamp(h, 1, imgNaturalH)
    setCrop(prev => ({ x: clamp(prev.x, 0, imgNaturalW - cw), y: clamp(prev.y, 0, imgNaturalH - ch), w: cw, h: ch }))
  }, [customW, customH, imgNaturalW, imgNaturalH])

  // ── Reset crop ──────────────────────────────────────────────────────────────

  const resetCrop = useCallback(() => {
    const full: CropBox = { x: 0, y: 0, w: imgNaturalW, h: imgNaturalH }
    setCrop(full)
    setCustomW(String(imgNaturalW))
    setCustomH(String(imgNaturalH))
    setAspectPreset("Free")
    setLockedRatio(null)
  }, [imgNaturalW, imgNaturalH])

  // ── Rotate ──────────────────────────────────────────────────────────────────

  const rotate = useCallback(() => {
    setRotation(prev => ((prev + 90) % 360) as 0 | 90 | 180 | 270)
  }, [])

  // ── Apply crop ──────────────────────────────────────────────────────────────

  const applyCrop = useCallback(() => {
    const img = naturalImgRef.current
    if (!img) return
    setIsProcessing(true)

    const isRotated = rotation === 90 || rotation === 270
    const srcW = isRotated ? img.naturalHeight : img.naturalWidth
    const srcH = isRotated ? img.naturalWidth : img.naturalHeight

    // Map crop from the "displayed" coordinate space (which may include rotation) to original image
    let sx = crop.x, sy = crop.y, sw = crop.w, sh = crop.h

    const canvas = document.createElement("canvas")
    canvas.width = Math.round(sw)
    canvas.height = Math.round(sh)
    const ctx = canvas.getContext("2d")!

    // Draw the full rotated/flipped image at offset so the crop area lands at 0,0
    ctx.save()
    ctx.translate(-sx, -sy)
    if (rotation !== 0 || flipH || flipV) {
      ctx.translate(imgNaturalW / 2 + sx, imgNaturalH / 2 + sy)
      ctx.rotate((rotation * Math.PI) / 180)
      if (flipH) ctx.scale(-1, 1)
      if (flipV) ctx.scale(1, -1)
      ctx.drawImage(img, -img.naturalWidth / 2, -img.naturalHeight / 2)
    } else {
      ctx.drawImage(img, 0, 0)
    }
    ctx.restore()

    const mime = outputFormat === "jpeg" ? "image/jpeg" : outputFormat === "webp" ? "image/webp" : "image/png"
    const q = outputFormat === "png" ? undefined : quality / 100

    canvas.toBlob(blob => {
      if (!blob) return
      const url = URL.createObjectURL(blob)
      setResultUrl(url)
      setResultSize(blob.size)
      setIsProcessing(false)
    }, mime, q)
  }, [crop, rotation, flipH, flipV, imgNaturalW, imgNaturalH, outputFormat, quality])

  // ── Download ────────────────────────────────────────────────────────────────

  const download = useCallback(() => {
    if (!resultUrl || !sourceFile) return
    const a = document.createElement("a")
    a.href = resultUrl
    const base = sourceFile.name.replace(/\.[^/.]+$/, "")
    a.download = `${base}-cropped.${outputFormat === "jpeg" ? "jpg" : outputFormat}`
    a.click()
  }, [resultUrl, sourceFile, outputFormat])

  // ── Render ──────────────────────────────────────────────────────────────────

  const cropScreen = getCropScreen()

  if (!sourceUrl) {
    return (
      <div
        {...getRootProps()}
        className={cn(
          "flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed p-12 text-center transition-colors cursor-pointer",
          isDragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-muted/30"
        )}
      >
        <input {...getInputProps()} />
        <div className="rounded-full bg-primary/10 p-4">
          <Crop className="h-8 w-8 text-primary" />
        </div>
        <div>
          <p className="font-semibold text-foreground">Drop an image here or click to upload</p>
          <p className="text-sm text-muted-foreground mt-1">JPG, PNG, WebP, GIF, BMP — up to 20 MB</p>
        </div>
        <GButton variant="outline" size="sm" leftIcon={<Upload className="h-4 w-4" />}>
          Choose Image
        </GButton>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ImageIcon className="h-4 w-4" />
          <span className="font-medium text-foreground truncate max-w-[200px]">{sourceFile?.name}</span>
          <span>{imgNaturalW} × {imgNaturalH}px</span>
          <span>{formatBytes(sourceFile?.size ?? 0)}</span>
        </div>
        <GButton
          size="sm" variant="outline"
          onClick={() => { setSourceUrl(null); setSourceFile(null); setResultUrl(null) }}
          leftIcon={<X className="h-4 w-4" />}
        >
          Change Image
        </GButton>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        {/* Canvas area */}
        <div className="xl:col-span-2 space-y-3">
          <GCard>
            <GCardHeader className="border-b pb-3">
              <GCardTitle className="text-sm">Crop Selection — drag handles to adjust</GCardTitle>
            </GCardHeader>
            <GCardContent className="pt-4">
              <div
                ref={containerRef}
                className="relative inline-block select-none overflow-hidden rounded-md border bg-muted/20 max-w-full"
                style={{ touchAction: "none" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  ref={imgRef}
                  src={sourceUrl}
                  alt="Source"
                  className="block max-w-full max-h-[500px] object-contain"
                  style={{
                    transform: `rotate(${rotation}deg) scaleX(${flipH ? -1 : 1}) scaleY(${flipV ? -1 : 1})`,
                    transformOrigin: "center",
                  }}
                  draggable={false}
                />

                {/* Dark overlay (4 rectangles around crop box) */}
                {cropScreen && (
                  <>
                    {/* Top overlay */}
                    <div className="absolute inset-x-0 top-0 bg-black/40 pointer-events-none" style={{ height: cropScreen.top }} />
                    {/* Bottom overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-black/40 pointer-events-none" style={{ height: `calc(100% - ${cropScreen.bottom}px)` }} />
                    {/* Left overlay */}
                    <div className="absolute left-0 bg-black/40 pointer-events-none" style={{ top: cropScreen.top, height: cropScreen.h, width: cropScreen.left }} />
                    {/* Right overlay */}
                    <div className="absolute right-0 bg-black/40 pointer-events-none" style={{ top: cropScreen.top, height: cropScreen.h, width: `calc(100% - ${cropScreen.right}px)` }} />

                    {/* Crop box */}
                    <div
                      className="absolute border-2 border-white cursor-move"
                      style={{ left: cropScreen.left, top: cropScreen.top, width: cropScreen.w, height: cropScreen.h }}
                      onMouseDown={e => onMouseDown(e, "move")}
                    >
                      {/* Rule-of-thirds grid lines */}
                      <div className="absolute inset-0 pointer-events-none">
                        {[33.33, 66.66].map(p => (
                          <div key={`v${p}`} className="absolute top-0 bottom-0 border-l border-white/30" style={{ left: `${p}%` }} />
                        ))}
                        {[33.33, 66.66].map(p => (
                          <div key={`h${p}`} className="absolute left-0 right-0 border-t border-white/30" style={{ top: `${p}%` }} />
                        ))}
                      </div>

                      {/* Handles */}
                      {(["tl","tc","tr","ml","mr","bl","bc","br"] as HandleType[]).map(h => {
                        const isCorner = ["tl","tr","bl","br"].includes(h!)
                        const top = h!.startsWith("t") ? -5 : h!.includes("m") ? "50%" : undefined
                        const bottom = h!.startsWith("b") ? -5 : undefined
                        const left = h!.endsWith("l") ? -5 : h!.includes("c") ? "50%" : undefined
                        const right = h!.endsWith("r") ? -5 : undefined
                        const transform = (h!.includes("c") || h!.includes("m")) ? "translate(-50%,-50%)" : undefined
                        const cursor =
                          h === "tl" || h === "br" ? "nwse-resize" :
                          h === "tr" || h === "bl" ? "nesw-resize" :
                          h === "tc" || h === "bc" ? "ns-resize" : "ew-resize"

                        return (
                          <div
                            key={h}
                            className={cn("absolute bg-white border border-gray-300 shadow", isCorner ? "h-3 w-3 rounded-sm" : "h-2.5 w-2.5 rounded-full")}
                            style={{ top, bottom, left, right, transform, cursor, zIndex: 10 }}
                            onMouseDown={e => onMouseDown(e, h)}
                          />
                        )
                      })}
                    </div>
                  </>
                )}
              </div>
            </GCardContent>
          </GCard>

          {/* Result preview */}
          {resultUrl && (
            <GCard>
              <GCardHeader className="border-b pb-3">
                <div className="flex items-center justify-between">
                  <GCardTitle className="text-sm">Cropped Result</GCardTitle>
                  <span className="text-xs text-muted-foreground">{Math.round(crop.w)} × {Math.round(crop.h)}px · {formatBytes(resultSize)}</span>
                </div>
              </GCardHeader>
              <GCardContent className="pt-4 flex flex-col items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={resultUrl} alt="Cropped" className="max-w-full max-h-64 rounded-md border object-contain" />
                <GButton onClick={download} leftIcon={<Download className="h-4 w-4" />}>
                  Download {outputFormat.toUpperCase()}
                </GButton>
              </GCardContent>
            </GCard>
          )}
        </div>

        {/* Controls sidebar */}
        <div className="space-y-4">
          {/* Aspect ratio */}
          <GCard>
            <GCardHeader className="border-b pb-3">
              <GCardTitle className="text-sm">Aspect Ratio</GCardTitle>
            </GCardHeader>
            <GCardContent className="pt-3">
              <div className="flex flex-wrap gap-1.5">
                {ASPECT_PRESETS.map(p => (
                  <GButton
                    key={p.label}
                    size="xs"
                    variant={aspectPreset === p.label ? "default" : "outline"}
                    onClick={() => handleAspectChange(p.label)}
                  >
                    {p.label}
                  </GButton>
                ))}
              </div>
            </GCardContent>
          </GCard>

          {/* Crop size */}
          <GCard>
            <GCardHeader className="border-b pb-3">
              <GCardTitle className="text-sm">Crop Size (px)</GCardTitle>
            </GCardHeader>
            <GCardContent className="pt-3 space-y-3">
              <div className="flex items-center gap-2">
                <div className="flex-1 space-y-1">
                  <label className="text-xs text-muted-foreground">Width</label>
                  <GInput value={customW} onChange={e => setCustomW(e.target.value)} type="number" min="1" className="font-mono text-sm" />
                </div>
                <span className="text-muted-foreground mt-5">×</span>
                <div className="flex-1 space-y-1">
                  <label className="text-xs text-muted-foreground">Height</label>
                  <GInput value={customH} onChange={e => setCustomH(e.target.value)} type="number" min="1" className="font-mono text-sm" />
                </div>
              </div>
              <GButton size="sm" variant="outline" className="w-full" onClick={applyCustomSize}>
                Apply Size
              </GButton>
              <p className="text-xs text-muted-foreground">
                Crop area: {Math.round(crop.x)}, {Math.round(crop.y)} → {Math.round(crop.x + crop.w)}, {Math.round(crop.y + crop.h)}
              </p>
            </GCardContent>
          </GCard>

          {/* Transform */}
          <GCard>
            <GCardHeader className="border-b pb-3">
              <GCardTitle className="text-sm">Transform</GCardTitle>
            </GCardHeader>
            <GCardContent className="pt-3 flex flex-wrap gap-2">
              <GButton size="sm" variant="outline" onClick={rotate} leftIcon={<RotateCcw className="h-3.5 w-3.5" />}>
                Rotate 90°
              </GButton>
              <GButton size="sm" variant={flipH ? "default" : "outline"} onClick={() => setFlipH(v => !v)} leftIcon={<FlipHorizontal className="h-3.5 w-3.5" />}>
                Flip H
              </GButton>
              <GButton size="sm" variant={flipV ? "default" : "outline"} onClick={() => setFlipV(v => !v)} leftIcon={<FlipVertical className="h-3.5 w-3.5" />}>
                Flip V
              </GButton>
              <GButton size="sm" variant="outline" onClick={resetCrop} leftIcon={<RotateCcw className="h-3.5 w-3.5" />}>
                Reset
              </GButton>
            </GCardContent>
          </GCard>

          {/* Output settings */}
          <GCard>
            <GCardHeader className="border-b pb-3">
              <GCardTitle className="text-sm">Output Settings</GCardTitle>
            </GCardHeader>
            <GCardContent className="pt-3 space-y-3">
              <div className="space-y-1">
                <label className="text-xs text-muted-foreground">Format</label>
                <GSelect value={outputFormat} onValueChange={v => setOutputFormat(v as OutputFormat)}>
                  <GSelectTrigger><GSelectValue /></GSelectTrigger>
                  <GSelectContent>
                    <GSelectItem value="jpeg">JPEG</GSelectItem>
                    <GSelectItem value="png">PNG (lossless)</GSelectItem>
                    <GSelectItem value="webp">WebP</GSelectItem>
                  </GSelectContent>
                </GSelect>
              </div>
              {outputFormat !== "png" && (
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Quality</span>
                    <span>{quality}%</span>
                  </div>
                  <input
                    type="range" min="10" max="100" value={quality}
                    onChange={e => setQuality(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>
              )}
            </GCardContent>
          </GCard>

          {/* Apply */}
          <GButton
            className="w-full"
            size="lg"
            onClick={applyCrop}
            isLoading={isProcessing}
            disabled={isProcessing || !sourceUrl}
            leftIcon={<Crop className="h-4 w-4" />}
          >
            {isProcessing ? "Cropping…" : "Crop Image"}
          </GButton>
        </div>
      </div>
    </div>
  )
}
