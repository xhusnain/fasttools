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
    // Reset the file input
    const fileInput = document.getElementById("image-upload-bg") as HTMLInputElement
    if (fileInput) {
      fileInput.value = ""
    }
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 border-border shadow-sm hover:shadow-md transition-shadow w-full max-w-none">
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="image-upload-bg"
                className="flex flex-col items-center justify-center w-full h-80 border-2 border-dashed border-border rounded-lg cursor-pointer bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                {image ? (
                  <img src={image || "/placeholder.svg"} alt="Uploaded" className="max-h-72 rounded-lg" />
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-10 h-10 mb-3 text-muted-foreground" />
                    <p className="mb-2 text-sm text-muted-foreground">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">PNG, JPG, JPEG, WebP (MAX. 10MB)</p>
                  </div>
                )}
                <input id="image-upload-bg" type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
              </label>
            </div>

            {image && (
              <div className="flex justify-center">
                <Button size="sm" variant="outline" onClick={resetAll} className="h-8 text-xs bg-transparent">
                  <RotateCcw className="h-3 w-3 mr-1" />
                  Reset & Upload New Image
                </Button>
              </div>
            )}
          </div>

          {loading && (
            <div className="flex flex-col items-center justify-center py-8 space-y-3">
              <LoadingSpinner />
              <span className="text-sm text-muted-foreground">Removing background from image...</span>
            </div>
          )}

          {error && (
            <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <p className="text-sm text-destructive">{error}</p>
            </div>
          )}

          {processedImage && !loading && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Background Removed
                </h3>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" onClick={downloadImage} className="h-8 text-xs bg-transparent">
                    <Download className="h-3 w-3 mr-1" />
                    Download PNG
                  </Button>
                  <Button size="sm" variant="outline" onClick={resetAll} className="h-8 text-xs bg-transparent">
                    <RotateCcw className="h-3 w-3 mr-1" />
                    Reset
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <img src={processedImage} alt="Background removed" className="max-h-[500px] w-auto rounded-lg border border-border" />
              </div>
            </div>
          )}
        </div>
      </Card>

    </div>
  )
}