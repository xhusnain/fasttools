"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, Download, RotateCcw } from "lucide-react"
import { Slider } from "@/components/ui/slider"

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
      applyBlur(imageUrl, blurAmount)
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
      canvas.width = img.width
      canvas.height = img.height
      ctx.filter = `blur(${blur}px)`
      ctx.drawImage(img, 0, 0)
    }
    img.src = imageUrl
  }

  const handleBlurChange = (value: number[]) => {
    const newBlur = value[0]
    setBlurAmount(newBlur)
    if (image) {
      applyBlur(image, newBlur)
    }
  }

  const downloadImage = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const link = document.createElement("a")
    link.download = "blurred-image.png"
    link.href = canvas.toDataURL()
    link.click()
  }

  const reset = () => {
    setImage(null)
    setBlurAmount(10)
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 border-border shadow-sm hover:shadow-md transition-shadow">
        <div className="space-y-4">
          {!image ? (
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="blur-image-upload"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-border rounded-lg cursor-pointer bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-10 h-10 mb-3 text-muted-foreground" />
                  <p className="mb-2 text-sm text-muted-foreground">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">PNG, JPG, JPEG (MAX. 10MB)</p>
                </div>
                <input
                  id="blur-image-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          ) : (
            <>
              <div className="flex justify-center">
                <canvas ref={canvasRef} className="max-w-full h-auto rounded-lg border border-border" />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">Blur Amount: {blurAmount}px</label>
                <Slider
                  value={[blurAmount]}
                  onValueChange={handleBlurChange}
                  min={0}
                  max={50}
                  step={1}
                  className="w-full"
                />
              </div>

              <div className="flex gap-3">
                <Button onClick={downloadImage} className="flex-1 h-10 text-sm font-medium shadow-sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button onClick={reset} variant="outline" className="h-10 text-sm font-medium bg-transparent">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset
                </Button>
              </div>
            </>
          )}
        </div>
      </Card>

      <Card className="p-4 bg-muted/20 border-border">
        <h3 className="text-sm font-semibold mb-2 text-foreground">Features:</h3>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside leading-relaxed">
          <li>Upload any image (PNG, JPG, JPEG)</li>
          <li>Adjust blur intensity from 0 to 50 pixels</li>
          <li>Real-time preview of blur effect</li>
          <li>Download the blurred image instantly</li>
        </ul>
      </Card>
    </div>
  )
}
