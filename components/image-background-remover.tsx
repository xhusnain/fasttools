"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, Download, RotateCcw, FileText, Zap } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"
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
  } = useBgRemoverStore();

  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      alert('Please upload a valid image file (JPEG, PNG, or WebP).')
      return
    }

    // Validate file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB.')
      return
    }

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
      }
      img.onerror = () => {
        alert("Failed to load image")
      }
      img.src = imageUrl
    }
    reader.readAsDataURL(file)
  }

  const downloadImage = () => {
    if (!result?.resultUrl) return

    const link = document.createElement('a')
    link.href = result.resultUrl
    link.download = 'background-removed.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
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
      <Card className="shadow-lg w-full max-w-none border-slate-200 dark:border-slate-700">
        <div className="p-4 sm:p-6">
          {/* Side-by-Side Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {/* Left Side - Original Image */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-800 dark:text-slate-200">Original Image</h2>
                {imageDimensions && (
                  <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                    {imageDimensions.width} × {imageDimensions.height}
                  </span>
                )}
              </div>
              
              <div className="relative">
                <label
                  htmlFor="image-upload-bg"
                  className="block w-full h-[500px] border-2 border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer bg-white hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 overflow-hidden"
                >
                  {imageUrl ? (
                    <div className="w-full h-full flex items-center justify-center p-4 bg-white">
                      <img 
                        src={imageUrl || "/placeholder.svg"} 
                        alt="Original" 
                        className="max-w-full max-h-full object-contain" 
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full px-6">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-30"></div>
                        <div className="relative p-8 bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 rounded-full shadow-2xl">
                          <Upload className="w-16 h-16 text-white" />
                        </div>
                      </div>
                      <p className="text-xl font-bold text-slate-900 mb-2">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm font-medium text-slate-700 mb-4">
                        PNG, JPG, JPEG, WebP (MAX. 10MB)
                      </p>
                      <div className="flex gap-2 flex-wrap justify-center">
                        <span className="px-4 py-1.5 bg-slate-800 text-white rounded-full text-xs font-medium shadow-sm">
                          Product Photos
                        </span>
                        <span className="px-4 py-1.5 bg-slate-800 text-white rounded-full text-xs font-medium shadow-sm">
                          Portraits
                        </span>
                        <span className="px-4 py-1.5 bg-slate-800 text-white rounded-full text-xs font-medium shadow-sm">
                          Logos
                        </span>
                      </div>
                    </div>
                  )}
                  <input id="image-upload-bg" type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                </label>
              </div>

              {imageUrl && !isProcessing && !result && (
                <div className="flex justify-center">
                  <Button size="sm" variant="outline" onClick={resetAll} className="gap-2">
                    <RotateCcw className="h-4 w-4" />
                    Upload Different Image
                  </Button>
                </div>
              )}
            </div>

            {/* Right Side - Result */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-800 dark:text-slate-200">Result</h2>
                {result && !isProcessing && (
                  <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold text-green-700 dark:text-green-400">Complete</span>
                  </div>
                )}
              </div>

              <div 
                className="relative w-full h-[500px] border-2 border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden"
                style={{
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
                      <p className="text-xs text-slate-600 mt-2">
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
                          <p className="text-sm font-medium text-slate-700">This usually takes a few seconds</p>
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
                  <Button 
                    onClick={downloadImage} 
                    className="w-full gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-6 text-base"
                  >
                    <Download className="h-5 w-5" />
                    Download PNG
                  </Button>
                  
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium">AI-Powered Background Removal</span>
                    </div>
                    <span>Processing time: {result.processingTime.toFixed(0)}ms</span>
                  </div>

                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={resetAll} 
                    className="w-full gap-2"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Process New Image
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Processing Button */}
          {imageUrl && !isProcessing && !result && (
            <div className="mt-6 text-center">
              <Button 
                onClick={startProcessing} 
                className="gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold px-8 py-6 text-base"
              >
                <Zap className="h-5 w-5" />
                Remove Background
              </Button>
            </div>
          )}

          {/* Error State */}
          {status.stage === "error" && (
            <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 p-1">
                  <svg className="h-5 w-5 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-800 dark:text-red-200">{status.message}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

