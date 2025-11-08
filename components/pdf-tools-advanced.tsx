"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  Upload,
  Download,
  FileText,
  Scissors,
  Merge,
  X,
  GripVertical,
  AlertCircle,
  CheckCircle2,
  FileStack,
  ArrowUpDown
} from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"
import { useToast } from "@/components/ui/toast"
import { PDFDocument } from "pdf-lib"

interface FileWithId {
  id: string
  file: File
  pageCount?: number
}

type SplitMode = "all" | "range" | "extract"

export function PDFToolsAdvanced() {
  const [files, setFiles] = useState<FileWithId[]>([])
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [mode, setMode] = useState<"split" | "merge">("merge")
  const [splitMode, setSplitMode] = useState<SplitMode>("all")
  const [pageRange, setPageRange] = useState({ start: 1, end: 1 })
  const [extractPages, setExtractPages] = useState("")
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { showToast, ToastContainer } = useToast()

  const validatePDFFile = async (file: File): Promise<boolean> => {
    if (file.type !== "application/pdf") {
      showToast("error", "Only PDF files allowed")
      return false
    }

    const maxSize = 100 * 1024 * 1024
    if (file.size > maxSize) {
      showToast("error", "File too large (max 100MB)")
      return false
    }

    try {
      const arrayBuffer = await file.arrayBuffer()
      await PDFDocument.load(arrayBuffer)
      return true
    } catch (error) {
      showToast("error", `Invalid PDF: ${file.name}`)
      return false
    }
  }

  const getPageCount = async (file: File): Promise<number> => {
    try {
      const arrayBuffer = await file.arrayBuffer()
      const pdf = await PDFDocument.load(arrayBuffer)
      return pdf.getPageCount()
    } catch (error) {
      return 0
    }
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = Array.from(e.target.files || [])

    if (mode === "split" && uploadedFiles.length > 1) {
      showToast("warning", "Only one PDF for splitting")
      return
    }

    setLoading(true)
    setProgress(0)

    const validFiles: FileWithId[] = []

    for (let i = 0; i < uploadedFiles.length; i++) {
      const file = uploadedFiles[i]
      setProgress(((i + 1) / uploadedFiles.length) * 50)

      const isValid = await validatePDFFile(file)
      if (isValid) {
        const pageCount = await getPageCount(file)
        validFiles.push({
          id: `${Date.now()}-${i}`,
          file,
          pageCount
        })
      }
    }

    if (mode === "merge") {
      setFiles(prevFiles => [...prevFiles, ...validFiles])
    } else {
      setFiles(validFiles.slice(0, 1))
    }

    setProgress(0)
    setLoading(false)

    if (validFiles.length > 0) {
      const totalFiles = mode === "merge" ? files.length + validFiles.length : validFiles.length
      showToast("success", mode === "merge"
        ? `${validFiles.length} PDF added (${totalFiles} total)`
        : `PDF loaded (${validFiles[0].pageCount} pages)`)

      if (mode === "split" && validFiles[0].pageCount) {
        setPageRange({ start: 1, end: validFiles[0].pageCount })
      }
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const droppedFiles = Array.from(e.dataTransfer.files).filter(
      (file) => file.type === "application/pdf"
    )

    if (droppedFiles.length === 0) {
      showToast("error", "Only PDF files allowed")
      return
    }

    if (mode === "split" && droppedFiles.length > 1) {
      showToast("warning", "Only one PDF for splitting")
      return
    }

    setLoading(true)
    setProgress(0)

    const validFiles: FileWithId[] = []

    for (let i = 0; i < droppedFiles.length; i++) {
      const file = droppedFiles[i]
      setProgress(((i + 1) / droppedFiles.length) * 50)

      const isValid = await validatePDFFile(file)
      if (isValid) {
        const pageCount = await getPageCount(file)
        validFiles.push({
          id: `${Date.now()}-${i}`,
          file,
          pageCount
        })
      }
    }

    if (mode === "merge") {
      setFiles(prevFiles => [...prevFiles, ...validFiles])
    } else {
      setFiles(validFiles.slice(0, 1))
    }

    setProgress(0)
    setLoading(false)

    if (validFiles.length > 0) {
      const totalFiles = mode === "merge" ? files.length + validFiles.length : validFiles.length
      showToast("success", mode === "merge"
        ? `${validFiles.length} PDF added (${totalFiles} total)`
        : `PDF loaded (${validFiles[0].pageCount} pages)`)

      if (mode === "split" && validFiles[0].pageCount) {
        setPageRange({ start: 1, end: validFiles[0].pageCount })
      }
    }
  }

  const removeFile = (id: string) => {
    setFiles(files.filter((f) => f.id !== id))
  }

  const handleDragStart = (index: number) => {
    setDraggedIndex(index)
  }

  const handleDragEnter = (index: number) => {
    if (draggedIndex === null || draggedIndex === index) return

    const newFiles = [...files]
    const draggedFile = newFiles[draggedIndex]
    newFiles.splice(draggedIndex, 1)
    newFiles.splice(index, 0, draggedFile)

    setFiles(newFiles)
    setDraggedIndex(index)
  }

  const handleDragEnd = () => {
    setDraggedIndex(null)
  }

  const mergePDFs = async () => {
    if (files.length < 2) {
      showToast("error", "Need at least 2 PDFs to merge")
      return
    }

    setLoading(true)
    setProgress(0)

    try {
      const mergedPdf = await PDFDocument.create()

      for (let i = 0; i < files.length; i++) {
        const file = files[i].file
        setProgress(((i + 1) / files.length) * 90)

        const arrayBuffer = await file.arrayBuffer()
        const pdf = await PDFDocument.load(arrayBuffer)
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices())
        copiedPages.forEach((page) => mergedPdf.addPage(page))
      }

      setProgress(95)
      const mergedPdfBytes = await mergedPdf.save()
      const blob = new Blob([new Uint8Array(mergedPdfBytes)], { type: "application/pdf" })
      const url = URL.createObjectURL(blob)

      const link = document.createElement("a")
      link.href = url
      link.download = `merged-${Date.now()}.pdf`
      link.click()

      URL.revokeObjectURL(url)
      setProgress(100)

      showToast("success", `Merged ${files.length} PDFs successfully!`)

      setTimeout(() => {
        setFiles([])
        setProgress(0)
      }, 1000)
    } catch (error) {
      console.error("Error merging PDFs:", error)
      showToast("error", "Merge failed. Try again")
    } finally {
      setLoading(false)
    }
  }

  const splitPDFAll = async () => {
    const fileWithId = files[0]
    const arrayBuffer = await fileWithId.file.arrayBuffer()
    const pdf = await PDFDocument.load(arrayBuffer)
    const pageCount = pdf.getPageCount()

    for (let i = 0; i < pageCount; i++) {
      setProgress(((i + 1) / pageCount) * 90)

      const newPdf = await PDFDocument.create()
      const [copiedPage] = await newPdf.copyPages(pdf, [i])
      newPdf.addPage(copiedPage)

      const pdfBytes = await newPdf.save()
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" })
      const url = URL.createObjectURL(blob)

      const link = document.createElement("a")
      link.href = url
      link.download = `page-${i + 1}-of-${pageCount}.pdf`
      link.click()

      URL.revokeObjectURL(url)

      await new Promise(resolve => setTimeout(resolve, 100))
    }

    setProgress(100)
    showToast("success", `Split into ${pageCount} pages!`)
  }

  const splitPDFRange = async () => {
    const { start, end } = pageRange
    const fileWithId = files[0]

    if (start < 1 || end > (fileWithId.pageCount || 0) || start > end) {
      showToast("error", `Invalid range (1-${fileWithId.pageCount})`)
      return
    }

    const arrayBuffer = await fileWithId.file.arrayBuffer()
    const pdf = await PDFDocument.load(arrayBuffer)

    const newPdf = await PDFDocument.create()
    const pageIndices = Array.from({ length: end - start + 1 }, (_, i) => start - 1 + i)

    setProgress(50)
    const copiedPages = await newPdf.copyPages(pdf, pageIndices)
    copiedPages.forEach((page) => newPdf.addPage(page))

    setProgress(90)
    const pdfBytes = await newPdf.save()
    const blob = new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = `pages-${start}-to-${end}.pdf`
    link.click()

    URL.revokeObjectURL(url)
    setProgress(100)

    showToast("success", `Extracted pages ${start}-${end}!`)
  }

  const splitPDFExtract = async () => {
    const fileWithId = files[0]
    const pageNumbers = extractPages
      .split(",")
      .map((p) => p.trim())
      .filter((p) => p.length > 0)
      .map((p) => parseInt(p))
      .filter((p) => !isNaN(p) && p >= 1 && p <= (fileWithId.pageCount || 0))

    if (pageNumbers.length === 0) {
      showToast("error", "Enter valid page numbers")
      return
    }

    const arrayBuffer = await fileWithId.file.arrayBuffer()
    const pdf = await PDFDocument.load(arrayBuffer)

    const newPdf = await PDFDocument.create()
    const pageIndices = pageNumbers.map(p => p - 1)

    setProgress(50)
    const copiedPages = await newPdf.copyPages(pdf, pageIndices)
    copiedPages.forEach((page) => newPdf.addPage(page))

    setProgress(90)
    const pdfBytes = await newPdf.save()
    const blob = new Blob([new Uint8Array(pdfBytes)], { type: "application/pdf" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = url
    link.download = `extracted-pages.pdf`
    link.click()

    URL.revokeObjectURL(url)
    setProgress(100)

    showToast("success", `Extracted ${pageNumbers.length} pages!`)
  }

  const splitPDF = async () => {
    if (files.length === 0) {
      showToast("error", "Upload a PDF to split")
      return
    }

    setLoading(true)
    setProgress(0)

    try {
      if (splitMode === "all") {
        await splitPDFAll()
      } else if (splitMode === "range") {
        await splitPDFRange()
      } else if (splitMode === "extract") {
        await splitPDFExtract()
      }

      setTimeout(() => {
        setFiles([])
        setProgress(0)
        setExtractPages("")
      }, 1000)
    } catch (error) {
      console.error("Error splitting PDF:", error)
      showToast("error", "Split failed. Try again")
    } finally {
      setLoading(false)
    }
  }

  const processPDF = () => {
    if (mode === "merge") {
      mergePDFs()
    } else {
      splitPDF()
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="space-y-6">
        {}
        <div className="flex gap-3">
          <Button
            variant={mode === "merge" ? "default" : "outline"}
            onClick={() => {
              setMode("merge")
              setFiles([])
              setProgress(0)
            }}
            className="flex-1 h-11 text-sm font-medium"
          >
            <Merge className="h-4 w-4 mr-2" />
            Merge PDFs
          </Button>
          <Button
            variant={mode === "split" ? "default" : "outline"}
            onClick={() => {
              setMode("split")
              setFiles([])
              setProgress(0)
              setSplitMode("all")
            }}
            className="flex-1 h-11 text-sm font-medium"
          >
            <Scissors className="h-4 w-4 mr-2" />
            Split PDF
          </Button>
        </div>

        {}
        {mode === "split" && (
          <Card className="p-4 border-border bg-muted/20">
            <Label className="text-sm font-semibold mb-3 block">Split Options:</Label>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={splitMode === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSplitMode("all")}
                className="text-xs"
              >
                <FileStack className="h-3 w-3 mr-1" />
                All Pages
              </Button>
              <Button
                variant={splitMode === "range" ? "default" : "outline"}
                size="sm"
                onClick={() => setSplitMode("range")}
                className="text-xs"
              >
                <ArrowUpDown className="h-3 w-3 mr-1" />
                Page Range
              </Button>
              <Button
                variant={splitMode === "extract" ? "default" : "outline"}
                size="sm"
                onClick={() => setSplitMode("extract")}
                className="text-xs"
              >
                <Scissors className="h-3 w-3 mr-1" />
                Extract Pages
              </Button>
            </div>

            {}
            {splitMode === "range" && files.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-xs mb-1 block">From Page</Label>
                  <Input
                    type="number"
                    min={1}
                    max={files[0]?.pageCount || 1}
                    value={pageRange.start}
                    onChange={(e) => setPageRange({ ...pageRange, start: parseInt(e.target.value) || 1 })}
                    className="h-9 text-sm"
                  />
                </div>
                <div>
                  <Label className="text-xs mb-1 block">To Page</Label>
                  <Input
                    type="number"
                    min={pageRange.start}
                    max={files[0]?.pageCount || 1}
                    value={pageRange.end}
                    onChange={(e) => setPageRange({ ...pageRange, end: parseInt(e.target.value) || 1 })}
                    className="h-9 text-sm"
                  />
                </div>
              </div>
            )}

            {}
            {splitMode === "extract" && files.length > 0 && (
              <div className="mt-4">
                <Label className="text-xs mb-1 block">Page Numbers (comma-separated)</Label>
                <Input
                  type="text"
                  placeholder="e.g., 1, 3, 5, 7-9"
                  value={extractPages}
                  onChange={(e) => setExtractPages(e.target.value)}
                  className="h-9 text-sm"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Enter page numbers separated by commas (e.g., 1, 3, 5)
                </p>
              </div>
            )}
          </Card>
        )}

        {}
        <Card className="p-6 border-border shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-4">
            <div
              className="flex items-center justify-center w-full"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <label
                htmlFor="pdf-upload"
                className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-border rounded-lg cursor-pointer bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-10 h-10 mb-3 text-muted-foreground" />
                  <p className="mb-2 text-sm text-muted-foreground">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {mode === "merge"
                      ? "Upload multiple PDFs to merge (max 100MB each)"
                      : "Upload one PDF to split (max 100MB)"}
                  </p>
                </div>
                <input
                  ref={fileInputRef}
                  id="pdf-upload"
                  type="file"
                  className="hidden"
                  accept=".pdf,application/pdf"
                  multiple={mode === "merge"}
                  onChange={handleFileUpload}
                />
              </label>
            </div>

            {}
            {loading && progress > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Processing...</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}

            {}
            {files.length > 0 && !loading && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-foreground">
                    Uploaded Files ({files.length}):
                  </h3>
                  {mode === "merge" && files.length > 1 && (
                    <p className="text-xs text-muted-foreground">
                      <GripVertical className="h-3 w-3 inline mr-1" />
                      Drag to reorder
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  {files.map((fileWithId, index) => (
                    <div
                      key={fileWithId.id}
                      draggable={mode === "merge"}
                      onDragStart={() => handleDragStart(index)}
                      onDragEnter={() => handleDragEnter(index)}
                      onDragEnd={handleDragEnd}
                      className={`flex items-center gap-2 p-3 bg-muted/30 rounded-lg border border-border transition-all ${
                        mode === "merge" ? "cursor-move hover:bg-muted/50" : ""
                      } ${draggedIndex === index ? "opacity-50" : ""}`}
                    >
                      {mode === "merge" && (
                        <GripVertical className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      )}
                      <FileText className="h-4 w-4 text-primary flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground truncate">{fileWithId.file.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {(fileWithId.file.size / 1024 / 1024).toFixed(2)} MB
                          {fileWithId.pageCount && ` • ${fileWithId.pageCount} page${fileWithId.pageCount !== 1 ? 's' : ''}`}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(fileWithId.id)}
                        className="h-7 w-7 p-0 hover:bg-destructive/10 flex-shrink-0"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                {}
                <Button
                  onClick={processPDF}
                  disabled={loading || files.length === 0}
                  className="w-full h-10 text-sm font-medium shadow-sm"
                >
                  {loading ? (
                    <>
                      <LoadingSpinner />
                      <span className="ml-2">Processing...</span>
                    </>
                  ) : (
                    <>
                      <Download className="h-4 w-4 mr-2" />
                      {mode === "merge"
                        ? `Merge ${files.length} PDF${files.length !== 1 ? 's' : ''}`
                        : splitMode === "all"
                          ? `Split into ${files[0]?.pageCount || 0} Pages`
                          : splitMode === "range"
                            ? "Extract Page Range"
                            : "Extract Pages"}
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </Card>

        {}
        <div className="p-5 rounded-lg bg-card border border-border shadow">
          <h2 className="text-xl font-bold mb-4 text-card-foreground flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            Features & Security
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-card-foreground">Unlimited Merging:</strong> Merge unlimited PDF files into one document with no restrictions on file count or total size
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-card-foreground">Advanced Splitting:</strong> Split PDFs by all pages, page range, or extract specific pages with precision control
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-card-foreground">Drag & Drop Reordering:</strong> Intuitive drag and drop interface to reorder files before merging for perfect document organization
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-card-foreground">Fast & Lossless:</strong> Lightning-fast processing with zero quality loss - all formatting, images, and content preserved perfectly
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-card-foreground">100% Secure & Private:</strong> All processing happens locally in your browser - no file uploads to servers, complete privacy guaranteed
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-card-foreground">Large File Support:</strong> Supports PDF files up to 100MB with efficient memory management and progress tracking
              </p>
            </div>
          </div>
        </div>

        {}
        <div className="p-5 rounded-lg bg-card border border-border shadow">
          <h2 className="text-xl font-bold mb-4 text-card-foreground flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-accent" />
            How to Use
          </h2>
          {mode === "merge" ? (
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">1</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-card-foreground">Upload Files:</strong> Click the upload area or drag and drop multiple PDF files directly into the browser
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">2</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-card-foreground">Arrange Order:</strong> Drag files up or down to reorder them - the merged PDF will follow this exact sequence
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">3</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-card-foreground">Merge PDFs:</strong> Click the "Merge PDFs" button to combine all files into a single document
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-heading-accent">✓</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-card-foreground">Download:</strong> Your merged PDF will download automatically with all content perfectly preserved
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">1</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-card-foreground">Select Split Mode:</strong> Choose your splitting option - All Pages, Page Range, or Extract Specific Pages
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">2</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-card-foreground">Upload PDF:</strong> Click to browse or drag and drop your PDF file into the upload area
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">3</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-card-foreground">Configure:</strong> {splitMode === "range"
                    ? "Enter the start and end page numbers for the range you want to extract (e.g., pages 1-10)"
                    : splitMode === "extract"
                      ? "Type the specific page numbers you want to extract, separated by commas (e.g., 1, 3, 5, 7)"
                      : "All pages will be automatically split into separate PDF files - no configuration needed"}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">4</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-card-foreground">Process:</strong> Click the split button and watch the progress bar as your PDF is processed
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-heading-accent">✓</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-card-foreground">Download:</strong> Your split/extracted PDF files will download automatically - each file ready to use
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

