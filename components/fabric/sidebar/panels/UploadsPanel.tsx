"use client"

import React, { useState, useRef } from 'react'
import { Upload, X, Image as ImageIcon } from "lucide-react"
import { getFabric } from '@/lib/fabric'

interface UploadsPanelProps {
  canvas: any
}

interface UploadedImage {
  id: string
  url: string
  name: string
  file: File
}

export function UploadsPanel({ canvas }: UploadsPanelProps) {
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = async (file: File) => {
    if (!file || !file.type.startsWith('image/')) {
      console.error('Invalid file type')
      return
    }

    try {
      // Create image URL for preview
      const imageUrl = URL.createObjectURL(file)
      
      // Add to recent uploads
      const newImage: UploadedImage = {
        id: Date.now().toString(),
        url: imageUrl,
        name: file.name,
        file: file
      }
      
      setUploadedImages(prev => [newImage, ...prev])
      
      // Add to canvas
      await addImageToCanvas(newImage)
      
    } catch (error) {
      console.error('Failed to process image:', error)
    }
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFileUpload(file)
    }
    // Reset input value to allow re-uploading the same file
    e.target.value = ''
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const files = Array.from(e.dataTransfer.files)
    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        handleFileUpload(file)
      }
    })
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const removeImage = (imageId: string) => {
    setUploadedImages(prev => {
      const imageToRemove = prev.find(img => img.id === imageId)
      if (imageToRemove) {
        // Revoke local URL
        URL.revokeObjectURL(imageToRemove.url)
        
        // Remove from Fabric canvas
        if (canvas) {
          const objects = canvas.getObjects()
          const objectToRemove = objects.find((o: any) => o?.getSrc?.() === imageToRemove.url)
          if (objectToRemove) {
            canvas.remove(objectToRemove)
            canvas.renderAll()
          }
        }
      }
      return prev.filter(img => img.id !== imageId)
    })
  }

  const addImageToCanvas = async (image: UploadedImage) => {
    if (!canvas) return

    try {
      const fabric = await getFabric()
      const imgElement = new Image()
      
      imgElement.onload = () => {
        const fabricImg = new fabric.Image(imgElement, {
          selectable: true,
          hasControls: true,
          hasBorders: true
        })

        const canvasWidth = canvas.getWidth()
        const canvasHeight = canvas.getHeight()
        const scale = Math.min(
          (canvasWidth * 0.7) / fabricImg.width!,
          (canvasHeight * 0.7) / fabricImg.height!,
          1
        )

        fabricImg.set({
          scaleX: scale,
          scaleY: scale,
          left: canvasWidth / 2,
          top: canvasHeight / 2,
          originX: 'center',
          originY: 'center'
        })

        canvas.add(fabricImg)
        canvas.setActiveObject(fabricImg)
        canvas.renderAll()
      }

      imgElement.onerror = () => {
        console.error('Failed to load image')
      }

      imgElement.src = image.url
    } catch (error) {
      console.error('Failed to add image to canvas:', error)
    }
  }

  return (
    <div className="p-5 space-y-6">
      <div>
        <h3 className="font-semibold text-slate-800 mb-4 text-sm">Upload Images</h3>
        
        {/* Drag & Drop Area */}
        <div
          className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors duration-200 ${
            isDragging 
              ? 'border-purple-500 bg-purple-50' 
              : 'border-slate-300 hover:border-slate-400'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <Upload className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
          <p className="text-sm text-muted-foreground mb-4">Drag & drop images here</p>
          <p className="text-xs text-muted-foreground mb-4">Supports: JPG, PNG, GIF, WebP, SVG, BMP, TIFF, AVIF, HEIC, RAW & more</p>
          
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            className="hidden"
          />
          
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center gap-2 mx-auto shadow-sm"
          >
            <ImageIcon className="w-4 h-4" />
            Choose Files
          </button>
        </div>
      </div>

      {/* Recent Uploads */}
      <div>
        <h3 className="font-semibold text-slate-800 mb-4 text-sm">Recent Uploads</h3>
        
        {uploadedImages.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-4">No recent uploads</p>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {uploadedImages.map((image) => (
              <div
                key={image.id}
                className="relative group"
              >
                <div 
                  className="w-full h-20 rounded-lg border border-slate-200 shadow-sm overflow-hidden bg-slate-50 cursor-pointer hover:border-purple-400 transition-colors"
                  onClick={() => addImageToCanvas(image)}
                >
                  <img
                    src={image.url}
                    alt={image.name}
                    className="w-full h-full object-cover"
                    style={{ display: 'block' }}
                    onError={(e) => {
                      const target = e.currentTarget
                      target.style.display = 'none'
                      const fallback = target.parentElement?.querySelector('.fallback-icon')
                      if (fallback) {
                        (fallback as HTMLElement).style.display = 'flex'
                      }
                    }}
                  />
                  {/* Fallback icon if image fails to load */}
                  <div className="fallback-icon w-full h-full hidden items-center justify-center">
                    <ImageIcon className="w-8 h-8 text-muted-foreground" />
                  </div>
                </div>
                
                {/* Remove button - always visible on top right */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    removeImage(image.id)
                  }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 hover:bg-destructive transition-all duration-200 shadow-lg z-10"
                  title="Remove image"
                >
                  <X className="w-3 h-3" />
                </button>
                
                {/* Image name */}
                <p className="text-xs text-muted-foreground mt-1.5 truncate" title={image.name}>
                  {image.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}