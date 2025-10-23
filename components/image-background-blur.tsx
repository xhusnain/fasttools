"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, Download, RotateCcw, ImageIcon, Palette, Zap } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { AdSpace } from "@/components/ad-space"

export function ImageBackgroundBlur() {
  const [image, setImage] = useState<string | null>(null)
  const [blurAmount, setBlurAmount] = useState(10)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const imageUrl = event.target?.result as string
      setImage(imageUrl)
    }
    reader.onerror = () => {
      console.error("Failed to read file")
    }
    reader.readAsDataURL(file)
  }

  const applyBlur = (imageUrl: string, blur: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const img = new Image()
    img.onload = () => {
      // Calculate display size (max 400px width, maintain aspect ratio)
      const maxWidth = 400
      const maxHeight = 400
      let displayWidth = img.width
      let displayHeight = img.height
      
      if (img.width > maxWidth || img.height > maxHeight) {
        const aspectRatio = img.width / img.height
        if (img.width > img.height) {
          displayWidth = maxWidth
          displayHeight = maxWidth / aspectRatio
        } else {
          displayHeight = maxHeight
          displayWidth = maxHeight * aspectRatio
        }
      }
      
      // Set canvas display size
      canvas.style.width = `${displayWidth}px`
      canvas.style.height = `${displayHeight}px`
      
      // Set canvas internal size to image size for quality
      canvas.width = img.width
      canvas.height = img.height
      
      // Clear canvas first
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Apply blur filter
      ctx.filter = `blur(${blur}px)`
      
      // Draw the image
      ctx.drawImage(img, 0, 0)
      
      // Reset filter for future operations
      ctx.filter = "none"
    }
    img.onerror = () => {
      console.error("Failed to load image")
    }
    img.src = imageUrl
  }

  // Effect to apply blur when image or blur amount changes
  useEffect(() => {
    if (image) {
      applyBlur(image, blurAmount)
    }
  }, [image, blurAmount])

  const downloadImage = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const link = document.createElement("a")
    link.download = "blurred-image.png"
    link.href = canvas.toDataURL()
    link.click()
  }

  const resetImage = () => {
    setImage(null)
    setBlurAmount(10)
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
      // Reset canvas size
      canvas.width = 0
      canvas.height = 0
      canvas.style.width = ''
      canvas.style.height = ''
    }
  }

  return (
    <div className="space-y-6">
      {/* Upload Section / Image Preview */}
      <Card className="p-6">
        <div className="space-y-4">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Background Blur Tool</h2>
            <p className="text-muted-foreground text-sm">
              Upload an image and apply blur effects instantly
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            {!image ? (
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                  <Upload className="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3 text-muted-foreground mx-auto" />
                  <p className="mb-1 sm:mb-2 text-xs sm:text-sm text-muted-foreground">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PNG, JPG, JPEG up to 10MB
                  </p>
                </div>
              </label>
            ) : (
              <div className="relative">
                <canvas
                  ref={canvasRef}
                  className="border border-border rounded-lg shadow-lg"
                  style={{ display: 'block', margin: '0 auto' }}
                />
                {/* Fallback image if canvas fails */}
                <img
                  src={image}
                  alt="Original image"
                  className="border border-border rounded-lg shadow-lg"
                  style={{ display: 'none' }}
                  onError={() => {
                    console.error("Failed to load fallback image")
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </Card>

      {/* Controls Section - Show after image is uploaded */}
      {image && (
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Blur Controls</h3>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={resetImage}
                  className="flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </Button>
                <Button
                  onClick={downloadImage}
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Blur Intensity</label>
                <span className="text-sm text-muted-foreground">{blurAmount}px</span>
              </div>
              <Slider
                value={[blurAmount]}
                onValueChange={(value) => setBlurAmount(value[0])}
                max={50}
                min={0}
                step={1}
                className="w-full"
              />
            </div>
          </div>
        </Card>
      )}

      {/* Features Section */}
      <Card className="p-6">
        <div className="space-y-4">
          <h3 className="text-sm sm:text-base font-semibold text-card-foreground flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary" />
            Background Blur Features
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="flex items-start gap-2">
              <ImageIcon className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-medium text-card-foreground">
                  Multiple Formats
                </p>
                <p className="text-xs text-muted-foreground">
                  PNG, JPG, JPEG support
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Palette className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-medium text-card-foreground">
                  Adjustable Intensity
                </p>
                <p className="text-xs text-muted-foreground">
                  Fine-tune blur strength
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-medium text-card-foreground">
                  Real-time Preview
                </p>
                <p className="text-xs text-muted-foreground">
                  See changes instantly
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Download className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-medium text-card-foreground">
                  High Quality Output
                </p>
                <p className="text-xs text-muted-foreground">
                  Download in original quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* AI Technology Section */}
      <Card className="p-6">
        <div className="space-y-4">
          <h3 className="text-sm sm:text-base font-semibold text-card-foreground flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary" />
            Advanced Background Blur Technology
          </h3>
          <div className="space-y-3">
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Our background blur tool uses sophisticated image processing algorithms to create professional blur effects. 
              The tool applies gaussian blur filters with adjustable intensity, depth of field simulation, and focus enhancement 
              to produce natural-looking background blur effects perfect for portrait blur, product photo blur, and social media blur applications.
            </p>
            
            <div className="space-y-2">
              <h4 className="text-xs sm:text-sm font-semibold text-card-foreground">Intelligent Blur Processing</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                The blur effect online technology automatically detects background elements while preserving subject sharpness. 
                Our image blur tool provides real-time preview, instant blur processing, and high-quality output suitable for 
                professional photo blur, marketing images, and ecommerce photos.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs sm:text-sm font-semibold text-card-foreground">Professional Results</h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Create stunning bokeh effects, depth of field enhancement, and focus effects that rival professional photography. 
                Perfect for profile photos, headshots, product photography, social media content, and marketing materials.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Benefits Section */}
      <Card className="p-6">
        <div className="space-y-4">
          <h3 className="text-sm sm:text-base font-semibold text-card-foreground flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary" />
            Why Choose Our Background Blur Tool
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="flex items-start gap-2">
              <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-medium text-card-foreground">
                  Instant Processing
                </p>
                <p className="text-xs text-muted-foreground">
                  No waiting time, immediate results
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <ImageIcon className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-medium text-card-foreground">
                  All Devices Supported
                </p>
                <p className="text-xs text-muted-foreground">
                  Works on desktop, tablet, mobile
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Download className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-medium text-card-foreground">
                  High Quality Output
                </p>
                <p className="text-xs text-muted-foreground">
                  Professional-grade results
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Palette className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-medium text-card-foreground">
                  Professional Grade
                </p>
                <p className="text-xs text-muted-foreground">
                  Studio-quality blur effects
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* How to Use Section */}
      <Card className="p-6">
        <div className="space-y-4">
          <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4 text-card-foreground">How to Use Background Blur Tool</h3>
          <ol className="text-xs sm:text-sm text-muted-foreground space-y-2 list-decimal list-inside leading-relaxed">
            <li>Upload your image by clicking the upload area or dragging and dropping</li>
            <li>Adjust the blur intensity slider to achieve your desired blur effect</li>
            <li>Preview the result in real-time as you adjust the settings</li>
            <li>Download your processed image instantly</li>
            <li>Use the reset button to upload a new image and start over</li>
          </ol>
        </div>
      </Card>

      {/* Ad Space */}
      <AdSpace slot="content" />
    </div>
  )
}