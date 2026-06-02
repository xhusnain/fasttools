"use client"

import { useCallback, useEffect, useRef, useState, type ButtonHTMLAttributes } from "react"
import { useDropzone } from "react-dropzone"
import {
  ArrowDown,
  ArrowUp,
  Download,
  FileText,
  Image as ImageIcon,
  Loader2,
  Plus,
  RefreshCw,
  Settings,
  Trash2,
  Upload,
} from "lucide-react"
import { GButton } from "@/ui/gbutton"
import { GCard } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GProgress } from "@/ui/gprogress"
import { useToast } from "@/ui/gtoast"
import { cn } from "@/lib/utils"

type PageSize = "fit" | "a4" | "letter" | "legal"
type PageOrientation = "auto" | "portrait" | "landscape"
type MarginPreset = "none" | "small" | "medium" | "large"
type FitMode = "contain" | "cover" | "stretch"
type PdfImageFormat = "jpeg" | "png"
type QualityLevel = "compact" | "balanced" | "high"

interface UploadedImage {
  id: string
  file: File
  url: string
  width: number
  height: number
}

interface PdfResult {
  blob: Blob
  url: string
  fileName: string
  pageCount: number
}

const MAX_IMAGES = 75
const MAX_FILE_SIZE = 25 * 1024 * 1024

const pageSizeLabels: Record<PageSize, string> = {
  fit: "Fit to image",
  a4: "A4",
  letter: "US Letter",
  legal: "US Legal",
}

const fixedPageSizes: Record<Exclude<PageSize, "fit">, { width: number; height: number }> = {
  a4: { width: 595.28, height: 841.89 },
  letter: { width: 612, height: 792 },
  legal: { width: 612, height: 1008 },
}

const marginValues: Record<MarginPreset, number> = {
  none: 0,
  small: 18,
  medium: 36,
  large: 54,
}

const qualityValues: Record<QualityLevel, number> = {
  compact: 0.72,
  balanced: 0.86,
  high: 0.94,
}

const formatBytes = (bytes: number) => {
  if (bytes === 0) return "0 B"
  const units = ["B", "KB", "MB", "GB"]
  const unitIndex = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1)
  return `${(bytes / 1024 ** unitIndex).toFixed(unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`
}

const stripExtension = (name: string) => name.replace(/\.[^/.]+$/, "")

const sanitizeFileName = (name: string) => {
  const cleaned = name
    .trim()
    .replace(/\.pdf$/i, "")
    .replace(/[^a-z0-9-_ ]/gi, "")
    .replace(/\s+/g, "-")
    .toLowerCase()

  return cleaned || "images-to-pdf"
}

const createId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID()
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`
}

const loadImageFile = (file: File): Promise<UploadedImage> =>
  new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const image = new Image()

    image.onload = () => {
      resolve({
        id: createId(),
        file,
        url,
        width: image.naturalWidth || image.width,
        height: image.naturalHeight || image.height,
      })
    }

    image.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error(`Could not read ${file.name}`))
    }

    image.src = url
  })

const getPageDimensions = (
  image: UploadedImage,
  pageSize: PageSize,
  orientation: PageOrientation
) => {
  const imageIsLandscape = image.width > image.height
  const resolvedOrientation =
    orientation === "auto" ? (imageIsLandscape ? "landscape" : "portrait") : orientation

  if (pageSize === "fit") {
    const widthPt = Math.max(96, image.width * 0.75)
    const heightPt = Math.max(96, image.height * 0.75)

    if (resolvedOrientation === "landscape") {
      return { width: Math.max(widthPt, heightPt), height: Math.min(widthPt, heightPt), orientation: "landscape" as const }
    }

    return { width: Math.min(widthPt, heightPt), height: Math.max(widthPt, heightPt), orientation: "portrait" as const }
  }

  const base = fixedPageSizes[pageSize]
  if (resolvedOrientation === "landscape") {
    return { width: Math.max(base.width, base.height), height: Math.min(base.width, base.height), orientation: "landscape" as const }
  }

  return { width: Math.min(base.width, base.height), height: Math.max(base.width, base.height), orientation: "portrait" as const }
}

const getPlacement = (
  pageWidth: number,
  pageHeight: number,
  imageWidth: number,
  imageHeight: number,
  margin: number,
  fitMode: FitMode
) => {
  const boxWidth = Math.max(1, pageWidth - margin * 2)
  const boxHeight = Math.max(1, pageHeight - margin * 2)

  if (fitMode === "stretch") {
    return { x: margin, y: margin, width: boxWidth, height: boxHeight }
  }

  const widthScale = boxWidth / imageWidth
  const heightScale = boxHeight / imageHeight
  const scale = fitMode === "cover" ? Math.max(widthScale, heightScale) : Math.min(widthScale, heightScale)
  const width = imageWidth * scale
  const height = imageHeight * scale

  return {
    x: margin + (boxWidth - width) / 2,
    y: margin + (boxHeight - height) / 2,
    width,
    height,
  }
}

const imageToDataUrl = (
  imageFile: UploadedImage,
  outputFormat: PdfImageFormat,
  quality: number
): Promise<string> =>
  new Promise((resolve, reject) => {
    const image = new Image()

    image.onload = () => {
      const canvas = document.createElement("canvas")
      canvas.width = imageFile.width
      canvas.height = imageFile.height

      const context = canvas.getContext("2d")
      if (!context) {
        reject(new Error("Canvas is not available in this browser"))
        return
      }

      context.fillStyle = "#ffffff"
      context.fillRect(0, 0, canvas.width, canvas.height)
      context.drawImage(image, 0, 0)

      const mimeType = outputFormat === "png" ? "image/png" : "image/jpeg"
      resolve(canvas.toDataURL(mimeType, outputFormat === "jpeg" ? quality : undefined))
    }

    image.onerror = () => reject(new Error(`Could not process ${imageFile.file.name}`))
    image.src = imageFile.url
  })

export function ImageToPDF() {
  const [images, setImages] = useState<UploadedImage[]>([])
  const [pageSize, setPageSize] = useState<PageSize>("a4")
  const [orientation, setOrientation] = useState<PageOrientation>("auto")
  const [marginPreset, setMarginPreset] = useState<MarginPreset>("small")
  const [fitMode, setFitMode] = useState<FitMode>("contain")
  const [outputFormat, setOutputFormat] = useState<PdfImageFormat>("jpeg")
  const [quality, setQuality] = useState<QualityLevel>("balanced")
  const [outputName, setOutputName] = useState("images-to-pdf")
  const [result, setResult] = useState<PdfResult | null>(null)
  const [isConverting, setIsConverting] = useState(false)
  const [progress, setProgress] = useState(0)
  const imagesRef = useRef<UploadedImage[]>([])
  const resultRef = useRef<PdfResult | null>(null)
  const { showToast, ToastContainer } = useToast()

  useEffect(() => {
    imagesRef.current = images
  }, [images])

  useEffect(() => {
    resultRef.current = result
  }, [result])

  useEffect(() => {
    return () => {
      imagesRef.current.forEach((image) => URL.revokeObjectURL(image.url))
      if (resultRef.current) URL.revokeObjectURL(resultRef.current.url)
    }
  }, [])

  const clearResult = useCallback(() => {
    setResult((current) => {
      if (current) URL.revokeObjectURL(current.url)
      return null
    })
  }, [])

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (!acceptedFiles.length) return

      clearResult()

      const slotsLeft = MAX_IMAGES - imagesRef.current.length
      if (slotsLeft <= 0) {
        showToast("warning", `You can add up to ${MAX_IMAGES} images per PDF.`)
        return
      }

      const filesToLoad = acceptedFiles.slice(0, slotsLeft)
      if (acceptedFiles.length > slotsLeft) {
        showToast("warning", `Added ${slotsLeft} images. The ${MAX_IMAGES}-image limit was reached.`)
      }

      try {
        const loadedImages = await Promise.all(filesToLoad.map(loadImageFile))
        if (imagesRef.current.length === 0 && loadedImages[0]) {
          setOutputName(sanitizeFileName(stripExtension(loadedImages[0].file.name)))
        }
        setImages((current) => [...current, ...loadedImages])
      } catch (error) {
        showToast("error", error instanceof Error ? error.message : "One or more images could not be loaded.")
      }
    },
    [clearResult, showToast]
  )

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    onDropRejected: (fileRejections) => {
      const firstRejection = fileRejections[0]
      const firstError = firstRejection?.errors[0]
      if (!firstRejection || !firstError) return

      if (firstError.code === "file-too-large") {
        showToast("error", `Each image must be ${formatBytes(MAX_FILE_SIZE)} or smaller.`)
        return
      }

      showToast("error", "Use JPG, PNG, or WebP images only.")
    },
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "image/webp": [".webp"],
    },
    maxSize: MAX_FILE_SIZE,
    noClick: images.length > 0,
    noKeyboard: images.length > 0,
  })

  const removeImage = (id: string) => {
    clearResult()
    setImages((current) => {
      const target = current.find((image) => image.id === id)
      if (target) URL.revokeObjectURL(target.url)
      return current.filter((image) => image.id !== id)
    })
  }

  const moveImage = (id: string, direction: "up" | "down") => {
    clearResult()
    setImages((current) => {
      const index = current.findIndex((image) => image.id === id)
      if (index === -1) return current

      const targetIndex = direction === "up" ? index - 1 : index + 1
      if (targetIndex < 0 || targetIndex >= current.length) return current

      const next = [...current]
      const [item] = next.splice(index, 1)
      next.splice(targetIndex, 0, item)
      return next
    })
  }

  const resetTool = () => {
    images.forEach((image) => URL.revokeObjectURL(image.url))
    clearResult()
    setImages([])
    setProgress(0)
    setOutputName("images-to-pdf")
  }

  const convertToPdf = async () => {
    if (!images.length) {
      showToast("error", "Upload at least one image first.")
      return
    }

    setIsConverting(true)
    setProgress(0)
    clearResult()

    try {
      const { jsPDF } = await import("jspdf")
      let pdf: any = null
      const jpegQuality = qualityValues[quality]
      const margin = marginValues[marginPreset]

      for (let index = 0; index < images.length; index += 1) {
        const image = images[index]
        const page = getPageDimensions(image, pageSize, orientation)
        const dataUrl = await imageToDataUrl(image, outputFormat, jpegQuality)
        const placement = getPlacement(page.width, page.height, image.width, image.height, margin, fitMode)

        if (!pdf) {
          pdf = new jsPDF({
            orientation: page.orientation,
            unit: "pt",
            format: [page.width, page.height],
            compress: true,
          })
        } else {
          pdf.addPage([page.width, page.height], page.orientation)
        }

        pdf.setFillColor(255, 255, 255)
        pdf.rect(0, 0, page.width, page.height, "F")
        pdf.addImage(
          dataUrl,
          outputFormat === "png" ? "PNG" : "JPEG",
          placement.x,
          placement.y,
          placement.width,
          placement.height,
          undefined,
          quality === "compact" ? "FAST" : "MEDIUM"
        )

        setProgress(Math.round(((index + 1) / images.length) * 100))
        await new Promise((resolve) => setTimeout(resolve, 10))
      }

      if (!pdf) return

      const blob = pdf.output("blob") as Blob
      const fileName = `${sanitizeFileName(outputName)}.pdf`
      const url = URL.createObjectURL(blob)
      setResult({ blob, url, fileName, pageCount: images.length })
      showToast("success", `Created ${fileName}`)
    } catch (error) {
      console.error("Image to PDF conversion failed:", error)
      showToast("error", error instanceof Error ? error.message : "Failed to create PDF.")
    } finally {
      setIsConverting(false)
      setProgress(0)
    }
  }

  const downloadPdf = () => {
    if (!result) return

    const link = document.createElement("a")
    link.href = result.url
    link.download = result.fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const totalSize = images.reduce((sum, image) => sum + image.file.size, 0)

  return (
    <>
      <ToastContainer />
      <div className="mx-auto w-full max-w-6xl space-y-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
          <GCard className="overflow-hidden p-0">
            <div
              {...getRootProps()}
              className={cn(
                "min-h-[280px] border-2 border-dashed border-border bg-white p-6 transition-colors",
                isDragActive && "border-primary bg-primary/5",
                images.length === 0 && "cursor-pointer hover:border-primary/60 hover:bg-primary/5"
              )}
            >
              <input {...getInputProps()} />

              {images.length === 0 ? (
                <div className="flex min-h-[230px] flex-col items-center justify-center text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                    <Upload className="h-8 w-8" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">Upload images</h2>
                  <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                    Drag and drop JPG, PNG, or WebP images here, or click to browse. Add up to {MAX_IMAGES} images and combine them into one PDF.
                  </p>
                  <GButton type="button" className="mt-5" leftIcon={<Plus className="h-4 w-4" />}>
                    Select Images
                  </GButton>
                  <p className="mt-3 text-xs text-muted-foreground">Maximum per image: {formatBytes(MAX_FILE_SIZE)}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex flex-col gap-3 border-b border-border pb-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-foreground">Image order</h2>
                      <p className="text-sm text-muted-foreground">
                        {images.length} image{images.length === 1 ? "" : "s"} selected - {formatBytes(totalSize)} total
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <GButton type="button" variant="outline" size="sm" onClick={open} disabled={isConverting}>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Images
                      </GButton>
                      <GButton type="button" variant="outline" size="sm" onClick={resetTool} disabled={isConverting}>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Reset
                      </GButton>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {images.map((image, index) => (
                      <div
                        key={image.id}
                        className="grid grid-cols-[76px_minmax(0,1fr)_auto] items-center gap-3 rounded-lg border border-border bg-muted/20 p-3"
                      >
                        <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-md border border-border bg-white">
                          <img src={image.url} alt="" className="h-full w-full object-contain" />
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-foreground">{image.file.name}</p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            Page {index + 1} - {image.width}x{image.height}px - {formatBytes(image.file.size)}
                          </p>
                        </div>
                        <div className="flex flex-col gap-1">
                          <GButton
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => moveImage(image.id, "up")}
                            disabled={isConverting || index === 0}
                            aria-label="Move image up"
                          >
                            <ArrowUp className="h-4 w-4" />
                          </GButton>
                          <GButton
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => moveImage(image.id, "down")}
                            disabled={isConverting || index === images.length - 1}
                            aria-label="Move image down"
                          >
                            <ArrowDown className="h-4 w-4" />
                          </GButton>
                          <GButton
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive"
                            onClick={() => removeImage(image.id)}
                            disabled={isConverting}
                            aria-label="Remove image"
                          >
                            <Trash2 className="h-4 w-4" />
                          </GButton>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </GCard>

          <GCard className="p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Settings className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">PDF settings</h2>
                <p className="text-sm text-muted-foreground">Control page size, margins, and quality.</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <GLabel htmlFor="pdf-file-name">File name</GLabel>
                <GInput
                  id="pdf-file-name"
                  value={outputName}
                  onChange={(event) => {
                    clearResult()
                    setOutputName(event.target.value)
                  }}
                  disabled={isConverting}
                  className="h-10 border-border bg-white focus:border-primary"
                  rightIcon={<FileText className="h-4 w-4" />}
                />
              </div>

              <div className="space-y-2">
                <GLabel>Page size</GLabel>
                <div className="grid grid-cols-2 gap-2">
                  {(Object.keys(pageSizeLabels) as PageSize[]).map((option) => (
                    <OptionButton
                      key={option}
                      active={pageSize === option}
                      onClick={() => {
                        clearResult()
                        setPageSize(option)
                      }}
                      disabled={isConverting}
                    >
                      {pageSizeLabels[option]}
                    </OptionButton>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <GLabel>Orientation</GLabel>
                <div className="grid grid-cols-3 gap-2">
                  {(["auto", "portrait", "landscape"] as PageOrientation[]).map((option) => (
                    <OptionButton
                      key={option}
                      active={orientation === option}
                      onClick={() => {
                        clearResult()
                        setOrientation(option)
                      }}
                      disabled={isConverting}
                    >
                      {option === "auto" ? "Auto" : option === "portrait" ? "Portrait" : "Landscape"}
                    </OptionButton>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <GLabel>Margin</GLabel>
                <div className="grid grid-cols-4 gap-2">
                  {(["none", "small", "medium", "large"] as MarginPreset[]).map((option) => (
                    <OptionButton
                      key={option}
                      active={marginPreset === option}
                      onClick={() => {
                        clearResult()
                        setMarginPreset(option)
                      }}
                      disabled={isConverting}
                    >
                      {option[0].toUpperCase() + option.slice(1)}
                    </OptionButton>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <GLabel>Image fit</GLabel>
                <div className="grid grid-cols-3 gap-2">
                  {(["contain", "cover", "stretch"] as FitMode[]).map((option) => (
                    <OptionButton
                      key={option}
                      active={fitMode === option}
                      onClick={() => {
                        clearResult()
                        setFitMode(option)
                      }}
                      disabled={isConverting}
                    >
                      {option[0].toUpperCase() + option.slice(1)}
                    </OptionButton>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="space-y-2">
                  <GLabel>PDF image type</GLabel>
                  <div className="grid grid-cols-2 gap-2">
                    {(["jpeg", "png"] as PdfImageFormat[]).map((option) => (
                      <OptionButton
                        key={option}
                        active={outputFormat === option}
                        onClick={() => {
                          clearResult()
                          setOutputFormat(option)
                        }}
                        disabled={isConverting}
                      >
                        {option === "jpeg" ? "JPG" : "PNG"}
                      </OptionButton>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <GLabel>Quality</GLabel>
                  <div className="grid grid-cols-3 gap-2">
                    {(["compact", "balanced", "high"] as QualityLevel[]).map((option) => (
                      <OptionButton
                        key={option}
                        active={quality === option}
                        onClick={() => {
                          clearResult()
                          setQuality(option)
                        }}
                        disabled={isConverting || outputFormat === "png"}
                      >
                        {option[0].toUpperCase() + option.slice(1)}
                      </OptionButton>
                    ))}
                  </div>
                </div>
              </div>

              {isConverting && (
                <div className="space-y-2 rounded-lg border border-primary/20 bg-primary/5 p-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-primary">Creating PDF</span>
                    <span className="text-primary">{progress}%</span>
                  </div>
                  <GProgress value={progress} className="h-2" />
                </div>
              )}

              <GButton
                type="button"
                className="h-11 w-full"
                onClick={convertToPdf}
                disabled={isConverting || images.length === 0}
              >
                {isConverting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating PDF
                  </>
                ) : (
                  <>
                    <ImageIcon className="mr-2 h-4 w-4" />
                    Convert Images to PDF
                  </>
                )}
              </GButton>
            </div>
          </GCard>
        </div>

        {result && (
          <GCard className="border-primary/20 bg-primary/5 p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-foreground">PDF ready</h2>
                <p className="text-sm text-muted-foreground">
                  {result.fileName} - {result.pageCount} page{result.pageCount === 1 ? "" : "s"} - {formatBytes(result.blob.size)}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <GButton type="button" onClick={downloadPdf}>
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </GButton>
                <GButton type="button" variant="outline" onClick={resetTool}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Start Over
                </GButton>
              </div>
            </div>
          </GCard>
        )}
      </div>
    </>
  )
}

function OptionButton({
  active,
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { active: boolean }) {
  return (
    <button
      type="button"
      className={cn(
        "min-h-10 rounded-md border px-3 py-2 text-center text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 disabled:cursor-not-allowed disabled:opacity-50",
        active
          ? "border-primary bg-primary text-primary-foreground shadow-sm"
          : "border-border bg-white text-foreground hover:border-primary/50 hover:bg-primary/5",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
