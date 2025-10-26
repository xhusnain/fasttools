"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, Download, RotateCcw, FileText } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

export function ImageBackgroundRemover() {
  const [image, setImage] = useState<string | null>(null)
  const [processedImage, setProcessedImage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null)

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      setError('Please upload a valid image file (JPEG, PNG, or WebP).')
      return
    }

    // Validate file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB.')
      return
    }

    const reader = new FileReader()
    reader.onload = async (event) => {
      const imageUrl = event.target?.result as string
      
      // Get image dimensions
      const img = new Image()
      img.onload = () => {
        setImageDimensions({ width: img.width, height: img.height })
      }
      img.src = imageUrl
      
      setImage(imageUrl)
      setProcessedImage(null)
      setError(null)
      setLoading(true)

      try {
        const formData = new FormData()
        formData.append('image', file)

        const response = await fetch('/api/bg-remove', {
          method: 'POST',
          body: formData,
        })

        const data = await response.json()

        if (data.success) {
          setProcessedImage(data.imageUrl || data.image)
        } else {
          setError(data.message || 'Failed to remove background. Please try again.')
        }
      } catch (err) {
        console.error('Background removal error:', err)
        setError('An error occurred while processing the image. Please try again.')
      } finally {
        setLoading(false)
      }
    }
    reader.readAsDataURL(file)
  }

  const downloadImage = () => {
    if (!processedImage) return

    const link = document.createElement('a')
    link.href = processedImage
    link.download = 'background-removed.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const resetAll = () => {
    setImage(null)
    setProcessedImage(null)
    setLoading(false)
    setError(null)
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
        <div className="p-6">
          {/* Side-by-Side Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                  className="block w-full min-h-[450px] lg:min-h-[550px] xl:min-h-[600px] border-2 border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer bg-white dark:bg-slate-900 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 overflow-hidden"
                >
                  {image ? (
                    <div className="w-full h-full flex items-center justify-center p-4">
                      <img 
                        src={image || "/placeholder.svg"} 
                        alt="Original" 
                        className="max-w-full max-h-[530px] lg:max-h-[630px] xl:max-h-[680px] object-contain rounded-lg" 
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full min-h-[450px] lg:min-h-[550px] xl:min-h-[600px] px-6">
                      <div className="p-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6">
                        <Upload className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                        PNG, JPG, JPEG, WebP (MAX. 10MB)
                      </p>
                      <div className="flex gap-2 flex-wrap justify-center">
                        <span className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs text-slate-600 dark:text-slate-400">
                          Product Photos
                        </span>
                        <span className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs text-slate-600 dark:text-slate-400">
                          Portraits
                        </span>
                        <span className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs text-slate-600 dark:text-slate-400">
                          Logos
                        </span>
                      </div>
                    </div>
                  )}
                  <input id="image-upload-bg" type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                </label>
              </div>

              {image && !loading && !processedImage && (
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
                {processedImage && !loading && (
                  <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-3 py-1.5 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold text-green-700 dark:text-green-400">Complete</span>
                  </div>
                )}
              </div>

              <div className="relative w-full min-h-[450px] lg:min-h-[550px] xl:min-h-[600px] border-2 border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-900">
                {!image && !loading && (
                  <div className="flex items-center justify-center h-full min-h-[450px] lg:min-h-[550px] xl:min-h-[600px]">
                    <div className="text-center px-6">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <FileText className="w-12 h-12 text-slate-400" />
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Upload an image to see the result
                      </p>
                    </div>
                  </div>
                )}

                {loading && (
                  <div className="flex flex-col items-center justify-center h-full min-h-[450px] lg:min-h-[550px] xl:min-h-[600px] space-y-4">
                    <LoadingSpinner />
                    <div className="text-center space-y-2">
                      <p className="text-base font-semibold text-slate-700 dark:text-slate-300">Removing background...</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">This usually takes a few seconds</p>
                    </div>
                  </div>
                )}

                {processedImage && !loading && (
                  <div 
                    className="w-full h-full min-h-[450px] lg:min-h-[550px] xl:min-h-[600px] flex items-center justify-center p-4"
                    style={{
                      backgroundImage: 'repeating-conic-gradient(#e5e7eb 0% 25%, #ffffff 0% 50%) 50% / 20px 20px',
                    }}
                  >
                    <img 
                      src={processedImage} 
                      alt="Background removed" 
                      className="max-w-full max-h-[530px] lg:max-h-[630px] xl:max-h-[680px] object-contain"
                    />
                  </div>
                )}
              </div>

              {processedImage && !loading && (
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
                    <span>Processing time: 10875ms</span>
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

          {/* Error State */}
          {error && (
            <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 p-1">
                  <svg className="h-5 w-5 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-800 dark:text-red-200">{error}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}