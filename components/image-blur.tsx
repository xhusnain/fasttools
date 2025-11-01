"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Upload, Download, RotateCcw, FileText, Zap, Image as ImageIcon } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"
import { useImageBlurStore } from "@/lib/store-image-blur"

export function ImageBlur() {
  const {
    originalImage,
    imageUrl,
    status,
    result,
    isProcessing,
    blurIntensity,
    setImage,
    setBlurIntensity,
    startProcessing,
    reset,
    refineStrength,
    setRefineStrength,
  } = useImageBlurStore();

  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);
  const [debounceId, setDebounceId] = useState<number | null>(null);

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

    const link = document.createElement('a')
    link.href = result.resultUrl
    link.download = 'image-blurred.jpg'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const resetAll = () => {
    reset()
    setImageLoaded(false)
    setImageDimensions(null)
    
    // Reset the file input
    const fileInput = document.getElementById("image-upload-blur") as HTMLInputElement
    if (fileInput) {
      fileInput.value = ""
    }
  }

  return (
    <div className="w-full">
      <Card className="shadow-lg w-full max-w-none border-slate-200 dark:border-slate-700">
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Original Image</h3>
                {imageUrl && (
                  <Button
                    onClick={resetAll}
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Reset
                  </Button>
                )}
              </div>

              <div
                className="relative w-full h-[300px] sm:h-[360px] md:h-[420px] lg:h-[500px] border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl overflow-hidden bg-white dark:bg-slate-800"
              >
                {!imageUrl && (
                  <label
                    htmlFor="image-upload-blur"
                    className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    <div className="text-center px-6">
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-20"></div>
                        <div className="relative w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-xl">
                          <Upload className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <p className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                        Upload an image to blur background
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Supports JPEG, PNG, and WebP
                      </p>
                    </div>
                    <input
                      id="image-upload-blur"
                      type="file"
                      
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}

                {imageUrl && (
                  <div className="w-full h-full flex items-center justify-center p-4 bg-white dark:bg-slate-800">
                    <img
                      src={imageUrl}
                      alt="Original"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Output Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Blurred Result</h3>
                {result && !isProcessing && (
                  <Button
                    onClick={downloadImage}
                    className="gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                )}
              </div>

              <div
                className="relative w-full h-[300px] sm:h-[360px] md:h-[420px] lg:h-[500px] border-2 border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-800"
              >
                {!imageUrl && !isProcessing && (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center px-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                      <div className="relative mb-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-lg opacity-20"></div>
                        <div className="relative w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-xl">
                          <ImageIcon className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        Upload an image to see the result
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">
                        AI will blur only the background
                      </p>
                    </div>
                  </div>
                )}

                {isProcessing && (
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                      <div className="flex flex-col items-center space-y-4">
                        <LoadingSpinner />
                        <div className="text-center space-y-2">
                          <p className="text-base font-semibold text-slate-900 dark:text-slate-100">{status.message}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Show uploaded image (before AI processing) */}
                {imageUrl && !result && !isProcessing && (
                  <div className="w-full h-full flex items-center justify-center p-4 bg-white dark:bg-slate-800 relative">
                    <img
                      src={imageUrl}
                      alt="Original"
                      className="max-w-full max-h-full object-contain"
                    />
                    <div className="absolute top-4 left-4 bg-slate-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                      Original
                    </div>
                  </div>
                )}

                {/* AI-processed result (selective background blur) */}
                {result && !isProcessing && (
                  <div className="w-full h-full flex items-center justify-center p-4 bg-white dark:bg-slate-800 relative">
                    <img
                      src={result.resultUrl}
                      alt="Background blurred"
                      className="max-w-full max-h-full object-contain drop-shadow-2xl"
                    />
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                      AI Processed
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Controls - auto reprocess */}
          {imageUrl && (
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Blur Intensity: <span className="text-blue-600 dark:text-blue-400 font-semibold">{blurIntensity}px</span>
                </label>
                <span className="text-xs text-slate-500 dark:text-slate-400 italic">Auto-applies</span>
              </div>
              <Slider
                value={[blurIntensity]}
                onValueChange={(value) => {
                  setBlurIntensity(value[0])
                  if (debounceId) window.clearTimeout(debounceId)
                  const id = window.setTimeout(() => startProcessing(), 350)
                  setDebounceId(id)
                }}
                min={1}
                max={50}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Minimal (1px)</span>
                <span>Medium (25px)</span>
                <span>Maximum (50px)</span>
              </div>

              <div className="flex items-center justify-between pt-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Cutout strength: <span className="text-blue-600 dark:text-blue-400 font-semibold">{refineStrength}</span>
                </label>
              </div>
              <Slider
                value={[refineStrength === "light" ? 0 : refineStrength === "medium" ? 1 : 2]}
                onValueChange={(v) => {
                  const s = v[0] === 0 ? "light" : v[0] === 1 ? "medium" : "strong";
                  setRefineStrength?.(s)
                  if (debounceId) window.clearTimeout(debounceId)
                  const id = window.setTimeout(() => startProcessing(), 350)
                  setDebounceId(id)
                }}
                min={0}
                max={2}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Light</span>
                <span>Medium</span>
                <span>Strong</span>
              </div>
            </div>
          )}

          {/* No button - auto processing */}

          {/* Error State */}
          {status.stage === "error" && (
            <div className="mt-6 p-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-3 bg-red-100 dark:bg-red-900/40 rounded-full">
                  <svg className="h-8 w-8 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-red-900 dark:text-red-200 mb-2">Oops! Something went wrong</h3>
                  <p className="text-sm text-red-800 dark:text-red-300 mb-4 max-w-md">{status.message}</p>
                  <Button 
                    onClick={resetAll} 
                    variant="outline"
                    className="gap-2 border-red-300 text-red-700 hover:bg-red-100 dark:border-red-700 dark:text-red-300 dark:hover:bg-red-900/30"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Try Again
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Processing Info */}
          {result && !isProcessing && (
            <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Processing Time:</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">
                  {(result.processingTime / 1000).toFixed(2)}s
                </span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-slate-600 dark:text-slate-400">Blur Intensity:</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100">{blurIntensity}px</span>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

