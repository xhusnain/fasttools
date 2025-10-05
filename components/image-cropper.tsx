"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, Download, RotateCcw, Square, Circle } from "lucide-react"

export function ImageCropper() {
  const [image, setImage] = useState<string | null>(null)
  const [cropShape, setCropShape] = useState<"square" | "circle">("square")
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const imageUrl = event.target?.result as string
      setImage(imageUrl)
    }
    reader.readAsDataURL(file)
  }

  const cropImage = () => {
    const canvas = canvasRef.current
    const img = imageRef.current
    if (!canvas || !img) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const size = Math.min(img.width, img.height)
    canvas.width = size
    canvas.height = size

    if (cropShape === "circle") {
      ctx.beginPath()
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
      ctx.closePath()
      ctx.clip()
    }

    const offsetX = (img.width - size) / 2
    const offsetY = (img.height - size) / 2
    ctx.drawImage(img, offsetX, offsetY, size, size, 0, 0, size, size)
  }

  const downloadImage = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const link = document.createElement("a")
    link.download = `cropped-${cropShape}-image.png`
    link.href = canvas.toDataURL()
    link.click()
  }

  const reset = () => {
    setImage(null)
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 border-border shadow-sm hover:shadow-md transition-shadow">
        <div className="space-y-4">
          {!image ? (
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="crop-image-upload"
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
                  id="crop-image-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          ) : (
            <>
              <div className="flex gap-3 mb-4">
                <Button
                  variant={cropShape === "square" ? "default" : "outline"}
                  onClick={() => setCropShape("square")}
                  className="flex-1 h-10 text-sm font-medium"
                >
                  <Square className="h-4 w-4 mr-2" />
                  Square
                </Button>
                <Button
                  variant={cropShape === "circle" ? "default" : "outline"}
                  onClick={() => setCropShape("circle")}
                  className="flex-1 h-10 text-sm font-medium"
                >
                  <Circle className="h-4 w-4 mr-2" />
                  Circle
                </Button>
              </div>

              <div className="flex justify-center">
                <img
                  ref={imageRef}
                  src={image || "/placeholder.svg"}
                  alt="Original"
                  className="max-w-full h-auto rounded-lg border border-border hidden"
                  onLoad={cropImage}
                />
                <canvas ref={canvasRef} className="max-w-full h-auto rounded-lg border border-border" />
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={cropImage}
                  variant="outline"
                  className="flex-1 h-10 text-sm font-medium bg-transparent"
                >
                  Apply Crop
                </Button>
                <Button onClick={downloadImage} className="flex-1 h-10 text-sm font-medium shadow-sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button onClick={reset} variant="outline" className="h-10 text-sm font-medium bg-transparent">
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
            </>
          )}
        </div>
      </Card>

      <Card className="p-4 bg-muted/20 border-border">
        <h3 className="text-sm font-semibold mb-2 text-foreground">Perfect For:</h3>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside leading-relaxed">
          <li>Profile pictures and avatars (circular crop)</li>
          <li>Social media posts (square crop)</li>
          <li>Logo creation and branding</li>
          <li>Quick image editing without complex software</li>
        </ul>
      </Card>
    </div>
  )
}
