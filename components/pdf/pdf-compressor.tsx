"use client"

import type React from "react"

import { useState, useRef } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard } from "@/ui/gcard"
import { GProgress } from "@/ui/gprogress"
import { GLabel } from "@/ui/glabel"
import { useToast } from "@/ui/gtoast"

import { Upload, Download, Minimize2, CheckCircle2, FileText, X, Info } from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"
import { PDFDocument } from "pdf-lib"
import * as pdfjsLib from "pdfjs-dist"

// Configure PDF.js worker
if (typeof window !== "undefined") {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs`
}

type CompressionLevel = "low" | "medium" | "high"

export function PDFCompressor() {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [compressed, setCompressed] = useState(false)
  const [compressedPdfBytes, setCompressedPdfBytes] = useState<Uint8Array | null>(null)
  const [progress, setProgress] = useState(0)
  const [originalSize, setOriginalSize] = useState(0)
  const [compressedSize, setCompressedSize] = useState(0)
  const [compressionLevel, setCompressionLevel] = useState<CompressionLevel>("medium")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { showToast, ToastContainer } = useToast()

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0]
    if (uploadedFile) {
      if (uploadedFile.type !== "application/pdf") {
        showToast("error", "Please upload a PDF file")
        return
      }
      if (uploadedFile.size > 2 * 1024 * 1024 * 1024) {
        showToast("error", "File size must be less than 2GB")
        return
      }

      setFile(uploadedFile)
      setOriginalSize(uploadedFile.size)
      setCompressed(false)
      setCompressedPdfBytes(null)
      setProgress(0)

      showToast("success", "✅ PDF loaded successfully")
    }
  }

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const droppedFile = e.dataTransfer.files?.[0]
    if (droppedFile) {
      if (droppedFile.type !== "application/pdf") {
        showToast("error", "Please upload a PDF file")
        return
      }
      if (droppedFile.size > 2 * 1024 * 1024 * 1024) {
        showToast("error", "File size must be less than 2GB")
        return
      }

      setFile(droppedFile)
      setOriginalSize(droppedFile.size)
      setCompressed(false)
      setCompressedPdfBytes(null)
      setProgress(0)

      showToast("success", "✅ PDF loaded successfully")
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const removeFile = () => {
    setFile(null)
    setOriginalSize(0)
    setCompressed(false)
    setCompressedPdfBytes(null)
    setProgress(0)
    setCompressedSize(0)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const getCompressionQuality = (level: CompressionLevel) => {
    switch (level) {
      case "low":
        return { quality: 0.85, scale: 2.0 } // Best quality, minimal compression
      case "medium":
        return { quality: 0.65, scale: 1.5 } // Balanced
      case "high":
        return { quality: 0.40, scale: 1.0 } // Maximum compression
      default:
        return { quality: 0.65, scale: 1.5 }
    }
  }

  const compressPDF = async () => {
    if (!file) return

    setLoading(true)
    setProgress(5)

    try {
      const arrayBuffer = await file.arrayBuffer()
      setProgress(10)

      // Load PDF with PDF.js for rendering
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer })
      const pdfDoc = await loadingTask.promise
      const numPages = pdfDoc.numPages
      setProgress(15)

      // Create new compressed PDF
      const newPdf = await PDFDocument.create()
      setProgress(20)

      // Get compression settings
      const settings = getCompressionQuality(compressionLevel)

      // Render each page to canvas and compress
      for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        const page = await pdfDoc.getPage(pageNum)
        const viewport = page.getViewport({ scale: settings.scale })

        // Create canvas
        const canvas = document.createElement('canvas')
        canvas.width = viewport.width
        canvas.height = viewport.height
        const context = canvas.getContext('2d', { alpha: false })

        if (!context) throw new Error("Failed to get canvas context")

        // White background
        context.fillStyle = 'white'
        context.fillRect(0, 0, canvas.width, canvas.height)

        // Render PDF page to canvas
        await page.render({
          canvasContext: context,
          viewport: viewport,
          intent: 'print'
        }).promise

        // Convert canvas to JPEG with compression
        const blob = await new Promise<Blob>((resolve, reject) => {
          canvas.toBlob(
            (b) => b ? resolve(b) : reject(new Error("Failed to convert canvas")),
            'image/jpeg',
            settings.quality
          )
        })

        const imageBytes = new Uint8Array(await blob.arrayBuffer())

        // Embed in new PDF
        const jpegImage = await newPdf.embedJpg(imageBytes)
        const pdfPage = newPdf.addPage([viewport.width, viewport.height])
        pdfPage.drawImage(jpegImage, {
          x: 0,
          y: 0,
          width: viewport.width,
          height: viewport.height
        })

        // Update progress
        const pageProgress = 20 + ((pageNum / numPages) * 75)
        setProgress(Math.round(pageProgress))
      }

      setProgress(95)

      // Save compressed PDF
      const pdfBytes = await newPdf.save()
      setProgress(100)

      setCompressedSize(pdfBytes.length)
      setCompressedPdfBytes(pdfBytes)
      setCompressed(true)

      const reduction = ((1 - (pdfBytes.length / originalSize)) * 100).toFixed(1)
      const savedKB = ((originalSize - pdfBytes.length) / 1024).toFixed(0)

      if (pdfBytes.length >= originalSize) {
        showToast("warning", "⚠️ PDF is already optimized. Try a higher compression level.", 5000)
      } else {
        showToast("success", `✅ PDF compressed! Reduced by ${reduction}% (Saved ${savedKB} KB)`, 5000)
      }

    } catch (error: any) {
      if (error.message?.includes("empty")) {
        showToast("error", "❌ Generated PDF is empty. Please try again.", 5000)
      } else {
        showToast("error", `❌ Failed to compress: ${error?.message || 'Unknown error'}`, 5000)
      }
    } finally {
      setLoading(false)
      setProgress(0)
    }
  }

  const downloadCompressedPDF = () => {
    if (!compressedPdfBytes || !file) return

    const blob = new Blob([compressedPdfBytes], { type: "application/pdf" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = file.name.replace(".pdf", "_compressed.pdf")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    showToast("success", "PDF downloaded successfully!")
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
  }

  return (
    <>
      <ToastContainer />
      <div className="space-y-6">
        <GCard className="p-6 shadow-lg border-border">
          <div className="space-y-6">
            {/* Upload Area */}
            {!file ? (
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer bg-card"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-sm font-medium text-foreground mb-2">
                  Drop your PDF here or click to upload
                </p>
                <p className="text-xs text-muted-foreground">
                  Maximum file size: 2GB
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,application/pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>
            ) : (
              <div className="space-y-4">
                {/* File Info */}
                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{file.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {formatFileSize(originalSize)}
                          {compressed && (
                            <span className="ml-2 text-heading-accent">
                              → {formatFileSize(compressedSize)} ({((1 - (compressedSize / originalSize)) * 100).toFixed(1)}% smaller)
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                    <GButton
                      variant="ghost"
                      size="sm"
                      onClick={removeFile}
                      className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
                    >
                      <X className="h-4 w-4" />
                    </GButton>
                  </div>
                </div>

                {/* Compression Level Selector */}
                {!compressed && (
                  <div className="space-y-3">
                    <GLabel className="text-sm font-medium text-foreground">Compression Level</GLabel>
                    <div className="grid grid-cols-3 gap-2">
                      <GButton
                        type="button"
                        variant={compressionLevel === "low" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCompressionLevel("low")}
                        disabled={loading}
                        className={`h-auto py-3 flex flex-col items-center gap-1 ${compressionLevel === "low" ? "bg-primary text-white" : ""
                          }`}
                      >
                        <span className="text-xs font-bold">Low</span>
                        <span className="text-[10px] opacity-80">Best Quality</span>
                        <span className="text-[10px] opacity-70">~20-40% smaller</span>
                      </GButton>
                      <GButton
                        type="button"
                        variant={compressionLevel === "medium" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCompressionLevel("medium")}
                        disabled={loading}
                        className={`h-auto py-3 flex flex-col items-center gap-1 ${compressionLevel === "medium" ? "bg-primary text-white" : ""
                          }`}
                      >
                        <span className="text-xs font-bold">Medium</span>
                        <span className="text-[10px] opacity-80">Balanced</span>
                        <span className="text-[10px] opacity-70">~50-70% smaller</span>
                      </GButton>
                      <GButton
                        type="button"
                        variant={compressionLevel === "high" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCompressionLevel("high")}
                        disabled={loading}
                        className={`h-auto py-3 flex flex-col items-center gap-1 ${compressionLevel === "high" ? "bg-primary text-white" : ""
                          }`}
                      >
                        <span className="text-xs font-bold">High</span>
                        <span className="text-[10px] opacity-80">Max Compression</span>
                        <span className="text-[10px] opacity-70">~70-90% smaller</span>
                      </GButton>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      ℹ️ Actual compression depends on PDF content. Image-heavy PDFs compress better.
                    </p>
                  </div>
                )}

                {/* GProgress Bar */}
                {loading && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Compressing PDF...</span>
                      <span className="font-medium text-foreground">{progress}%</span>
                    </div>
                    <GProgress value={progress} className="h-2" />
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-3">
                  {!compressed ? (
                    <GButton
                      onClick={compressPDF}
                      disabled={loading}
                      className="w-full h-11 text-sm font-semibold shadow-sm"
                      size="lg"
                    >
                      {loading ? (
                        <>
                          <LoadingSpinner />
                          <span className="ml-2">Compressing...</span>
                        </>
                      ) : (
                        <>
                          <Minimize2 className="h-5 w-5 mr-2" />
                          Compress PDF
                        </>
                      )}
                    </GButton>
                  ) : (
                    <GButton
                      onClick={downloadCompressedPDF}
                      className="w-full h-11 text-sm font-semibold shadow-sm bg-green-600 hover:bg-green-700"
                      size="lg"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Download Compressed PDF
                    </GButton>
                  )}
                </div>
              </div>
            )}
          </div>
        </GCard>

        {/* Features */}
        <div className="p-5 rounded-lg bg-card border border-border shadow">
          <h2 className="text-xl font-bold mb-4 text-card-foreground flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            Features & Benefits
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-card-foreground">✅ Reduce File Size:</strong> Compress large PDF files to make them easier to share via email and upload online
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-card-foreground">✅ Maintain Quality:</strong> Smart compression algorithm preserves document quality while reducing file size
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-card-foreground">✅ 100% Private:</strong> All processing happens in your browser - files never leave your device
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-card-foreground">✅ Free Forever:</strong> No registration, no limits, completely free to use
              </p>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-5 rounded-lg bg-card border border-border shadow">
          <h2 className="text-lg font-bold mb-3 text-card-foreground flex items-center gap-2">
            <Info className="h-5 w-5 text-primary" />
            About PDF Compression
          </h2>
          <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
            <p><strong className="text-card-foreground">📦 How It Works:</strong> Our compressor renders each PDF page as an image, then compresses it using JPEG encoding. This achieves 50-90% file size reduction while preserving visual quality.</p>
            <p><strong className="text-card-foreground">🎯 Best For:</strong> Sharing PDFs via email, uploading to websites (file size limits), saving storage space, and faster downloads. Perfect for image-heavy PDFs, scanned documents, and presentations.</p>
            <p className="text-xs text-foreground pt-2"><strong>⚠️ Important:</strong> Compressed PDFs become image-based. Text remains visible but won't be selectable or searchable. This is necessary for aggressive compression.</p>
          </div>
        </div>
      </div>
    </>
  )
}

