"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard } from "@/ui/gcard"

import { Upload, Download, RotateCcw, FileText, Zap, Image as ImageIcon, Palette } from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"
import { useBgRemoverStore } from "@/lib/store-bg-remover"

export function ImageBackgroundRemover() {
  const {
    originalImage,
    imageUrl,
    status,
    result,
    isProcessing,
    setImage,
    startProcessing,
    reset,
    refineStrength,
    setRefineStrength,
  } = useBgRemoverStore();

  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);
  const [bgMode, setBgMode] = useState<"transparent" | "color" | "image">("transparent")
  const [bgColor, setBgColor] = useState<string>("#ffffff")
  const [bgImageUrl, setBgImageUrl] = useState<string | null>(null)
  const [debounceId, setDebounceId] = useState<number | null>(null);
  const [isBgMenuOpen, setIsBgMenuOpen] = useState(false)
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(false)
  const colorMenuRef = useRef<HTMLDivElement | null>(null)

  // Close background mode menu on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest?.('#bg-mode-select')) {
        setIsBgMenuOpen(false)
      }
      if (!colorMenuRef.current?.contains(target)) {
        setIsColorMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Accept any file; will fail gracefully if not an image when loading

    const reader = new FileReader()
    reader.onload = async (event) => {
      const imageUrl = event.target?.result as string

      // Create HTMLImageElement
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.onload = () => {
        setImage(img, imageUrl)
        setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight })
        setImageLoaded(true)
        // Auto-process on first load
        setTimeout(() => startProcessing(), 50)
      }
      img.onerror = () => {
        alert("⚠️ Failed to load image.\n\nPlease try uploading a different image.")
      }
      img.src = imageUrl
    }
    reader.readAsDataURL(file)
  }

  const downloadImage = () => {
    if (!result?.resultUrl) return

    // If transparent, download as-is
    if (bgMode === "transparent") {
      const link = document.createElement('a')
      link.href = result.resultUrl
      link.download = 'background-removed.png'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      return
    }

    // Compose with color or custom image using canvas
    const subjectImg = new Image()
    subjectImg.crossOrigin = "anonymous"
    subjectImg.onload = () => {
      const w = subjectImg.naturalWidth
      const h = subjectImg.naturalHeight
      const canvas = document.createElement('canvas')
      canvas.width = w
      canvas.height = h
      const ctx = canvas.getContext('2d')!

      if (bgMode === "color") {
        ctx.fillStyle = bgColor
        ctx.fillRect(0, 0, w, h)
        ctx.drawImage(subjectImg, 0, 0)
        canvas.toBlob((blob) => {
          if (!blob) return
          const url = URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.download = 'background-colored.png'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          setTimeout(() => URL.revokeObjectURL(url), 0)
        }, 'image/png')
      } else if (bgMode === "image" && bgImageUrl) {
        const bg = new Image()
        bg.crossOrigin = "anonymous"
        bg.onload = () => {
          // Cover strategy
          const ratio = Math.max(w / bg.naturalWidth, h / bg.naturalHeight)
          const bw = Math.ceil(bg.naturalWidth * ratio)
          const bh = Math.ceil(bg.naturalHeight * ratio)
          const bx = Math.floor((w - bw) / 2)
          const by = Math.floor((h - bh) / 2)
          ctx.drawImage(bg, bx, by, bw, bh)
          ctx.drawImage(subjectImg, 0, 0)
          canvas.toBlob((blob) => {
            if (!blob) return
            const url = URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = 'background-custom.png'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            setTimeout(() => URL.revokeObjectURL(url), 0)
          }, 'image/png')
        }
        bg.src = bgImageUrl
      }
    }
    subjectImg.src = result.resultUrl
  }

  const resetAll = () => {
    reset()
    setImageLoaded(false)
    setImageDimensions(null)

    // Reset the file input
    const fileInput = document.getElementById("image-upload-bg") as HTMLInputElement
    if (fileInput) {
      fileInput.value = ""
    }
  }

  return (
    <div className="w-full">
      <GCard className="shadow-lg w-full max-w-none border-slate-200 dark:border-border">
        <div className="p-4 sm:p-6">
          {/* Side-by-Side Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {/* Left Side - Original Image */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-800 dark:text-foreground">Original Image</h2>
                {imageDimensions && (
                  <span className="text-xs text-muted-foreground dark:text-muted-foreground bg-slate-100 dark:bg-secondary px-3 py-1 rounded-full">
                    {imageDimensions.width} × {imageDimensions.height}
                  </span>
                )}
              </div>

              <div className="relative">
                <label
                  htmlFor="image-upload-bg"
                  className="block w-full h-[220px] sm:h-[340px] md:h-[420px] lg:h-[500px] border-2 border-slate-200 dark:border-border rounded-xl cursor-pointer bg-white hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 overflow-hidden"
                >
                  {imageUrl ? (
                    <div className="w-full h-full flex items-center justify-center p-4 bg-white">
                      <img
                        src={imageUrl}
                        alt="Original"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full px-6">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-30"></div>
                        <div className="relative p-6 sm:p-8 bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 rounded-full shadow-2xl">
                          <Upload className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                        </div>
                      </div>
                      <p className="text-lg sm:text-xl font-bold text-slate-900 mb-2 text-center">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs sm:text-sm font-medium text-slate-700 mb-4 text-center">
                        PNG, JPG, JPEG, WebP (MAX. 10MB)
                      </p>
                      <div className="flex gap-2 flex-wrap justify-center">
                        <span className="px-3 py-1 sm:px-4 sm:py-1.5 bg-secondary text-secondary-foreground rounded-full text-[11px] sm:text-xs font-medium shadow-sm">
                          Product Photos
                        </span>
                        <span className="px-3 py-1 sm:px-4 sm:py-1.5 bg-secondary text-secondary-foreground rounded-full text-[11px] sm:text-xs font-medium shadow-sm">
                          Portraits
                        </span>
                        <span className="px-3 py-1 sm:px-4 sm:py-1.5 bg-secondary text-secondary-foreground rounded-full text-[11px] sm:text-xs font-medium shadow-sm">
                          Logos
                        </span>
                      </div>
                    </div>
                  )}
                  <input id="image-upload-bg" type="file" className="hidden" onChange={handleImageUpload} />
                </label>
              </div>

              {imageUrl && !isProcessing && !result && (
                <div className="flex justify-center">
                  <GButton size="sm" variant="outline" onClick={resetAll} className="gap-2">
                    <RotateCcw className="h-4 w-4" />
                    Upload Different Image
                  </GButton>
                </div>
              )}
            </div>

            {/* Right Side - Result */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-800 dark:text-foreground">Result</h2>
                {result && !isProcessing && (
                  <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold text-heading-accent">Complete</span>
                  </div>
                )}
              </div>

              <div
                className="relative w-full h-[220px] sm:h-[340px] md:h-[420px] lg:h-[500px] border-2 border-slate-200 dark:border-border rounded-xl overflow-hidden"
                style={bgMode === 'color' ? { backgroundColor: bgColor } : bgMode === 'image' && bgImageUrl ? { backgroundImage: `url(${bgImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {
                  background: '#ffffff',
                  backgroundImage: 'repeating-conic-gradient(#d1d5db 0% 25%, #ffffff 0% 50%)',
                  backgroundSize: '20px 20px',
                  backgroundPosition: '0 0, 10px 10px',
                }}
              >
                {!imageUrl && !isProcessing && (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center px-6 bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-lg opacity-20"></div>
                        <div className="relative w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-xl">
                          <FileText className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-slate-900">
                        Upload an image to see the result
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Checkered pattern shows transparency
                      </p>
                    </div>
                  </div>
                )}

                {isProcessing && (
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                      <div className="flex flex-col items-center space-y-4">
                        <LoadingSpinner />
                        <div className="text-center space-y-2">
                          <p className="text-base font-semibold text-slate-900">{status.message}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {result && !isProcessing && (
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <img
                      src={result.resultUrl}
                      alt="Background removed"
                      className="max-w-full max-h-full object-contain drop-shadow-2xl"
                    />
                  </div>
                )}
              </div>

              {result && !isProcessing && (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <GButton
                      onClick={downloadImage}
                      className="w-full gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-6 text-base"
                    >
                      <Download className="h-5 w-5" />
                      Download PNG
                    </GButton>
                    <div className="flex items-center justify-center gap-3 flex-wrap md:flex-nowrap relative">
                      <div id="bg-mode-select" className="relative inline-flex w-auto">
                        <button
                          type="button"
                          onClick={() => setIsBgMenuOpen((o) => !o)}
                          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setIsBgMenuOpen((o) => !o) } }}
                          className="inline-flex items-center justify-center rounded-full border border-accent/60 bg-gradient-to-br from-primary/15 via-accent/15 to-transparent dark:from-primary/20 dark:via-accent/20 dark:to-transparent text-slate-800 dark:text-slate-100 shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-accent/40 h-12 w-12"
                          aria-haspopup="listbox"
                          aria-expanded={isBgMenuOpen}
                        >
                          <Palette className="h-5 w-5 text-primary dark:text-accent" />
                          <span className="sr-only">
                            {bgMode === 'transparent' ? 'Transparent' : bgMode === 'color' ? 'Color' : 'Custom Image'}
                          </span>
                          {/* Chevron hidden to keep circular shape */}
                        </button>
                        {isBgMenuOpen && (
                          <ul
                            role="listbox"
                            className="absolute z-20 mt-2 left-1/2 -translate-x-1/2 md:left-auto md:right-0 w-60 max-w-[calc(100vw-3rem)] rounded-xl border border-slate-200 dark:border-border bg-white dark:bg-secondary shadow-xl overflow-hidden"
                          >
                            {[
                              { v: 'transparent', l: 'Transparent' },
                              { v: 'color', l: 'Color' },
                              { v: 'image', l: 'Custom Image' },
                            ].map((o) => (
                              <li
                                key={o.v}
                                role="option"
                                aria-selected={bgMode === (o.v as any)}
                                className={`px-3 py-2 text-sm cursor-pointer hover:bg-slate-100 dark:hover:bg-border ${bgMode === (o.v as any) ? 'bg-slate-50 dark:bg-border/60' : ''}`}
                                onClick={() => { setBgMode(o.v as any); setIsBgMenuOpen(false) }}
                              >
                                {o.l}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      {bgMode === 'color' && (
                        <div ref={colorMenuRef} className="relative">
                          <button
                            type="button"
                            aria-label="Background color"
                            onClick={() => setIsColorMenuOpen((o) => !o)}
                            className="h-12 w-12 rounded-full border-2 border-accent/60 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-accent/40"
                            style={{ backgroundColor: bgColor }}
                          />
                          {isColorMenuOpen && (
                            <div className="absolute z-30 mt-2 left-1/2 -translate-x-1/2 md:left-auto md:right-0 w-64 max-w-[calc(100vw-3rem)] rounded-xl border border-slate-200 dark:border-border bg-white dark:bg-secondary p-3 shadow-xl">
                              <div className="grid grid-cols-8 gap-2 mb-3">
                                {['#ffffff', '#f3f4f6', '#000000', '#ef4444', '#3b82f6', '#10b981', '#a855f7', '#f59e0b', '#14b8a6', '#e11d48', '#7c3aed', '#475569'].map(c => (
                                  <button key={c} title={c} onClick={() => { setBgColor(c); setIsColorMenuOpen(false) }} className="h-6 w-6 rounded-full border border-slate-300 dark:border-border" style={{ backgroundColor: c }} />
                                ))}
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-muted-foreground">Hex</span>
                                <input
                                  type="text"
                                  value={bgColor}
                                  onChange={(e) => setBgColor(e.target.value)}
                                  className="flex-1 text-xs rounded-md border border-slate-300 dark:border-border bg-transparent px-2 py-1 outline-none"
                                  placeholder="#ffffff"
                                />
                                <button onClick={() => setIsColorMenuOpen(false)} className="text-xs px-2 py-1 rounded-md bg-accent text-white">OK</button>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                      {bgMode === 'image' && (
                        <label className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-border cursor-pointer w-full md:w-auto justify-center bg-white dark:bg-secondary text-slate-800 dark:text-slate-100 shadow-sm hover:shadow-md transition-shadow">
                          <ImageIcon className="h-4 w-4" />
                          <span className="text-sm">Choose image</span>
                          <input
                            type="file"
                            className="hidden"
                            onChange={(e) => {
                              const f = e.target.files?.[0]
                              if (!f) return
                              const reader = new FileReader()
                              reader.onload = (ev) => setBgImageUrl(ev.target?.result as string)
                              reader.readAsDataURL(f)
                            }}
                          />
                        </label>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground dark:text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium">AI-Powered Background Removal</span>
                    </div>
                    <span>Processing time: {result.processingTime.toFixed(0)}ms</span>
                  </div>

                  <GButton
                    size="sm"
                    variant="outline"
                    onClick={resetAll}
                    className="w-full gap-2"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Process New Image
                  </GButton>
                </div>
              )}
            </div>
          </div>

          {/* Strength Slider removed – defaulting to medium */}

          {/* Error State */}
          {status.stage === "error" && (
            <div className="mt-6 p-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 bg-red-100 dark:bg-red-900/40 rounded-full">
                  <svg className="h-8 w-8 text-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Oops! Something went wrong</h3>
                  <p className="text-sm text-foreground mb-4 max-w-md">{status.message}</p>
                  <GButton
                    onClick={resetAll}
                    variant="outline"
                    className="gap-2 border-red-300 text-foreground hover:bg-red-100 dark:border-destructive dark:text-foreground dark:hover:bg-red-900/30"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Try Again
                  </GButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </GCard>
    </div>
  )
}

