"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/components/ui/toast"
import { Upload, X, Download, Image as ImageIcon, FileText, Loader2, FolderArchive } from "lucide-react"
import * as pdfjsLib from "pdfjs-dist"
import JSZip from "jszip"

if (typeof window !== "undefined") {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs`
}

type ImageFormat = "png" | "jpeg" | "webp"
type QualityLevel = "low" | "medium" | "high"
type ConversionMode = "all" | "specific"

interface ConvertedImage {
  id: string
  blob: Blob
  url: string
  pageNumber: number
  width: number
  height: number
}

export function PDFToImage() {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [format, setFormat] = useState<ImageFormat>("jpeg")
  const [quality, setQuality] = useState<QualityLevel>("high")
  const [mode, setMode] = useState<ConversionMode>("all")
  const [pageNumbers, setPageNumbers] = useState("")
  const [convertedImages, setConvertedImages] = useState<ConvertedImage[]>([])
  const [totalPages, setTotalPages] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { showToast, ToastContainer } = useToast()

  const handleFileUpload = async (selectedFile: File | null) => {
    if (!selectedFile) return

    if (selectedFile.type !== "application/pdf") {
      showToast("error", "❌ Please select a valid PDF file")
      return
    }

    const maxSize = 2 * 1024 * 1024 * 1024
    if (selectedFile.size > maxSize) {
      showToast("error", "❌ File size exceeds 2GB limit")
      return
    }

    try {

      const arrayBuffer = await selectedFile.arrayBuffer()
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer })
      const pdfDoc = await loadingTask.promise
      const pageCount = pdfDoc.numPages

      setFile(selectedFile)
      setTotalPages(pageCount)
      setConvertedImages([])
    } catch (error) {
      console.error("Error loading PDF:", error)
      showToast("error", "❌ Failed to load PDF file")
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) {
      handleFileUpload(droppedFile)
    }
  }

  const removeFile = () => {
    setFile(null)
    setTotalPages(0)
    setConvertedImages([])
    setProgress(0)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const getQualitySettings = (qualityLevel: QualityLevel) => {
    switch (qualityLevel) {
      case "low":
        return { quality: 0.5, scale: 1.0 }
      case "medium":
        return { quality: 0.75, scale: 1.5 }
      case "high":
        return { quality: 0.95, scale: 2.0 }
      default:
        return { quality: 0.95, scale: 2.0 }
    }
  }

  const getMimeType = (format: ImageFormat): string => {
    switch (format) {
      case "png":
        return "image/png"
      case "jpeg":
        return "image/jpeg"
      case "webp":
        return "image/webp"
      default:
        return "image/jpeg"
    }
  }

  const getFileExtension = (format: ImageFormat): string => {
    return format === "jpeg" ? "jpg" : format
  }

  const parsePageNumbers = (input: string, totalPages: number): number[] => {
    const pages: number[] = []
    const parts = input.split(",").map((p) => p.trim())

    for (const part of parts) {
      if (part.includes("-")) {
        const [start, end] = part.split("-").map((n) => parseInt(n.trim(), 10))
        if (!isNaN(start) && !isNaN(end) && start <= end && start >= 1 && end <= totalPages) {
          for (let i = start; i <= end; i++) {
            if (!pages.includes(i)) {
              pages.push(i)
            }
          }
        }
      } else {
        const pageNum = parseInt(part, 10)
        if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages && !pages.includes(pageNum)) {
          pages.push(pageNum)
        }
      }
    }

    return pages.sort((a, b) => a - b)
  }

  const convertToImages = async () => {
    if (!file) {
      showToast("error", "❌ Please upload a PDF file first")
      return
    }

    if (mode === "specific" && !pageNumbers.trim()) {
      showToast("error", "❌ Please enter page numbers to convert")
      return
    }

    setLoading(true)
    setProgress(0)
    setConvertedImages([])

    try {
      const arrayBuffer = await file.arrayBuffer()
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer })
      const pdfDoc = await loadingTask.promise

      let pagesToConvert: number[] = []
      if (mode === "all") {
        pagesToConvert = Array.from({ length: pdfDoc.numPages }, (_, i) => i + 1)
      } else {
        pagesToConvert = parsePageNumbers(pageNumbers, pdfDoc.numPages)
        if (pagesToConvert.length === 0) {
          throw new Error("No valid page numbers found")
        }
      }

      const { quality: imageQuality, scale } = getQualitySettings(quality)
      const mimeType = getMimeType(format)
      const images: ConvertedImage[] = []

      for (let i = 0; i < pagesToConvert.length; i++) {
        const pageNum = pagesToConvert[i]
        const page = await pdfDoc.getPage(pageNum)

        const viewport = page.getViewport({ scale })
        const canvas = document.createElement("canvas")
        const context = canvas.getContext("2d")

        if (!context) {
          throw new Error("Failed to get canvas context")
        }

        canvas.width = viewport.width
        canvas.height = viewport.height

        await page.render({
          canvasContext: context,
          viewport: viewport,
          intent: "print",
        }).promise

        const blob = await new Promise<Blob>((resolve, reject) => {
          canvas.toBlob(
            (blob) => {
              if (blob) {
                resolve(blob)
              } else {
                reject(new Error("Failed to create image blob"))
              }
            },
            mimeType,
            imageQuality
          )
        })

        images.push({
          id: `page-${pageNum}`,
          blob,
          url: URL.createObjectURL(blob),
          pageNumber: pageNum,
          width: viewport.width,
          height: viewport.height,
        })

        setProgress(Math.round(((i + 1) / pagesToConvert.length) * 100))

        await new Promise((resolve) => setTimeout(resolve, 50))
      }

      setConvertedImages(images)
      const ext = getFileExtension(format).toUpperCase()
      showToast(
        "success",
        `✅ Converted ${images.length} page${images.length > 1 ? "s" : ""} to ${ext}!`
      )
    } catch (error: any) {
      console.error("Error converting PDF:", error)
      if (error.message === "No valid page numbers found") {
        showToast("error", "❌ No valid page numbers found. Example: 1,3,5-7", 5000)
      } else {
        showToast("error", `❌ Failed to convert: ${error?.message || "Unknown error"}`, 5000)
      }
    } finally {
      setLoading(false)
      setProgress(0)
    }
  }

  const downloadImage = (image: ConvertedImage) => {
    const ext = getFileExtension(format)
    const fileName = file
      ? `${file.name.replace(".pdf", "")}_page_${image.pageNumber}.${ext}`
      : `page_${image.pageNumber}.${ext}`

    const link = document.createElement("a")
    link.href = image.url
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const downloadAllAsZip = async () => {
    if (convertedImages.length === 0) return

    try {
      const zip = new JSZip()
      const ext = getFileExtension(format)
      const baseName = file ? file.name.replace(".pdf", "") : "pdf"

      for (const image of convertedImages) {
        const fileName = `${baseName}_page_${image.pageNumber}.${ext}`
        zip.file(fileName, image.blob)
      }

      const zipBlob = await zip.generateAsync({ type: "blob" })
      const url = URL.createObjectURL(zipBlob)
      const link = document.createElement("a")
      link.href = url
      link.download = `${baseName}_images.zip`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error creating ZIP:", error)
      showToast("error", "❌ Failed to create ZIP file")
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="space-y-6">
        <div className="p-6 rounded-lg bg-card border-2 border-dashed border-border hover:border-primary/50 transition-colors shadow-lg">
          {!file ? (
            <div
              className="flex flex-col items-center justify-center py-12 cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <Upload className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Upload PDF File
              </h3>
              <p className="text-sm text-muted-foreground mb-4 text-center max-w-md">
                Click to browse or drag and drop your PDF file here
              </p>
              <p className="text-xs text-muted-foreground">
                Maximum file size: 2GB
              </p>
              <Input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                onChange={(e) => handleFileUpload(e.target.files?.[0] || null)}
                className="hidden"
              />
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20 border border-border">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <FileText className="h-10 w-10 text-primary flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-card-foreground truncate">{file.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {(file.size / (1024 * 1024)).toFixed(2)} MB • {totalPages} page
                      {totalPages > 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={removeFile}
                  disabled={loading}
                  className="flex-shrink-0 hover:bg-destructive/10 hover:text-destructive"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-foreground">Conversion Mode</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    type="button"
                    variant={mode === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setMode("all")}
                    disabled={loading}
                    className={mode === "all" ? "bg-primary text-white" : ""}
                  >
                    All Pages ({totalPages})
                  </Button>
                  <Button
                    type="button"
                    variant={mode === "specific" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setMode("specific")}
                    disabled={loading}
                    className={mode === "specific" ? "bg-primary text-white" : ""}
                  >
                    Specific Pages
                  </Button>
                </div>
              </div>

              {}
              {mode === "specific" && (
                <div className="space-y-2">
                  <Label htmlFor="page-numbers" className="text-sm font-medium text-foreground">
                    Page Numbers
                  </Label>
                  <Input
                    id="page-numbers"
                    type="text"
                    placeholder="e.g., 1,3,5-7,10"
                    value={pageNumbers}
                    onChange={(e) => setPageNumbers(e.target.value)}
                    disabled={loading}
                    className="h-11"
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter page numbers separated by commas. Use hyphen for ranges (e.g., 1,3,5-7)
                  </p>
                </div>
              )}

              {}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-foreground">Image Format</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    type="button"
                    variant={format === "jpeg" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFormat("jpeg")}
                    disabled={loading}
                    className={`h-auto py-3 flex flex-col items-center gap-1 ${
                      format === "jpeg" ? "bg-primary text-white" : ""
                    }`}
                  >
                    <span className="text-xs font-bold">JPG</span>
                    <span className="text-[10px] opacity-80">Smaller Size</span>
                  </Button>
                  <Button
                    type="button"
                    variant={format === "png" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFormat("png")}
                    disabled={loading}
                    className={`h-auto py-3 flex flex-col items-center gap-1 ${
                      format === "png" ? "bg-primary text-white" : ""
                    }`}
                  >
                    <span className="text-xs font-bold">PNG</span>
                    <span className="text-[10px] opacity-80">Lossless</span>
                  </Button>
                  <Button
                    type="button"
                    variant={format === "webp" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFormat("webp")}
                    disabled={loading}
                    className={`h-auto py-3 flex flex-col items-center gap-1 ${
                      format === "webp" ? "bg-primary text-white" : ""
                    }`}
                  >
                    <span className="text-xs font-bold">WEBP</span>
                    <span className="text-[10px] opacity-80">Modern</span>
                  </Button>
                </div>
              </div>

              {}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-foreground">Quality Level</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    type="button"
                    variant={quality === "low" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setQuality("low")}
                    disabled={loading}
                    className={`h-auto py-3 flex flex-col items-center gap-1 ${
                      quality === "low" ? "bg-primary text-white" : ""
                    }`}
                  >
                    <span className="text-xs font-bold">Low</span>
                    <span className="text-[10px] opacity-80">Fastest</span>
                  </Button>
                  <Button
                    type="button"
                    variant={quality === "medium" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setQuality("medium")}
                    disabled={loading}
                    className={`h-auto py-3 flex flex-col items-center gap-1 ${
                      quality === "medium" ? "bg-primary text-white" : ""
                    }`}
                  >
                    <span className="text-xs font-bold">Medium</span>
                    <span className="text-[10px] opacity-80">Balanced</span>
                  </Button>
                  <Button
                    type="button"
                    variant={quality === "high" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setQuality("high")}
                    disabled={loading}
                    className={`h-auto py-3 flex flex-col items-center gap-1 ${
                      quality === "high" ? "bg-primary text-white" : ""
                    }`}
                  >
                    <span className="text-xs font-bold">High</span>
                    <span className="text-[10px] opacity-80">Best Quality</span>
                  </Button>
                </div>
              </div>

              {}
              {loading && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Converting...</span>
                    <span className="font-medium text-primary">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
              )}

              {}
              {!convertedImages.length && (
                <Button
                  onClick={convertToImages}
                  disabled={loading}
                  className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Converting...
                    </>
                  ) : (
                    <>
                      <ImageIcon className="mr-2 h-5 w-5" />
                      Convert to Images
                    </>
                  )}
                </Button>
              )}
            </div>
          )}
        </div>

        {}
        {convertedImages.length > 0 && (
          <div className="p-6 rounded-lg bg-card border border-border shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-card-foreground">
                Converted Images ({convertedImages.length})
              </h3>
              <Button
                onClick={downloadAllAsZip}
                size="sm"
                className="bg-accent hover:bg-accent/90 text-white"
              >
                <FolderArchive className="mr-2 h-4 w-4" />
                Download All as ZIP
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {convertedImages.map((image) => (
                <div
                  key={image.id}
                  className="rounded-lg border border-border bg-muted/20 overflow-hidden hover:border-primary transition-colors"
                >
                  <div className="aspect-[3/4] relative bg-white">
                    <img
                      src={image.url}
                      alt={`Page ${image.pageNumber}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-card-foreground">
                        Page {image.pageNumber}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {Math.round(image.blob.size / 1024)} KB
                      </span>
                    </div>
                    <Button
                      onClick={() => downloadImage(image)}
                      size="sm"
                      className="w-full"
                      variant="outline"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={() => {
                setConvertedImages([])
                removeFile()
              }}
              variant="outline"
              className="w-full"
            >
              Convert Another PDF
            </Button>
          </div>
        )}
      </div>
    </>
  )
}

