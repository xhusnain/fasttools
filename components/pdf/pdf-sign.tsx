"use client"

import { useState, useRef, useEffect } from "react"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import { GCard } from "@/ui/gcard"
import { GProgress } from "@/ui/gprogress"
import { useToast } from "@/ui/gtoast"

import { Upload, FileText, Download, Loader2, X, Pencil, Type, Image as ImageIcon, Check, ChevronLeft, ChevronRight } from "lucide-react"
import { PDFDocument } from "pdf-lib"
import * as pdfjsLib from "pdfjs-dist"

// Configure PDF.js worker
if (typeof window !== "undefined") {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs`
}

type SignatureMode = "draw" | "type" | "upload"

interface Signature {
  id: string
  dataUrl: string
  x: number
  y: number
  width: number
  height: number
  page: number
  isDragging?: boolean
}

export function PDFSign() {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [signatureMode, setSignatureMode] = useState<SignatureMode>("draw")
  const [typedText, setTypedText] = useState("")
  const [signatureDataUrl, setSignatureDataUrl] = useState<string | null>(null)
  const [signatures, setSignatures] = useState<Signature[]>([])
  const [pdfPages, setPdfPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [pdfArrayBuffer, setPdfArrayBuffer] = useState<ArrayBuffer | null>(null)
  const [draggedSignature, setDraggedSignature] = useState<string | null>(null)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  const fileInputRef = useRef<HTMLInputElement>(null)
  const pdfCanvasRef = useRef<HTMLCanvasElement>(null)
  const drawingCanvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 })

  const { showToast, ToastContainer } = useToast()

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (!selectedFile) return

    // Validate file type
    if (selectedFile.type !== "application/pdf") {
      showToast("error", "❌ Please upload a valid PDF file")
      return
    }

    // Validate file size (max 100MB)
    const maxSize = 100 * 1024 * 1024
    if (selectedFile.size > maxSize) {
      showToast("error", "❌ File size exceeds 100MB limit")
      return
    }

    try {
      // Load PDF to get page count
      const arrayBuffer = await selectedFile.arrayBuffer()
      const pdfDoc = await PDFDocument.load(arrayBuffer)
      const pageCount = pdfDoc.getPageCount()

      setFile(selectedFile)
      setPdfPages(pageCount)
      setCurrentPage(1)
      setSignatures([])
      setPdfArrayBuffer(arrayBuffer)
    } catch (error) {
      console.error("Error loading PDF:", error)
      showToast("error", "❌ Failed to load PDF file")
    }
  }

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const droppedFile = event.dataTransfer.files[0]
    if (!droppedFile) return

    // Validate file type
    if (droppedFile.type !== "application/pdf") {
      showToast("error", "❌ Please upload a valid PDF file")
      return
    }

    // Validate file size
    const maxSize = 100 * 1024 * 1024
    if (droppedFile.size > maxSize) {
      showToast("error", "❌ File size exceeds 100MB limit")
      return
    }

    try {
      const arrayBuffer = await droppedFile.arrayBuffer()
      const pdfDoc = await PDFDocument.load(arrayBuffer)
      const pageCount = pdfDoc.getPageCount()

      setFile(droppedFile)
      setPdfPages(pageCount)
      setCurrentPage(1)
      setSignatures([])
      setPdfArrayBuffer(arrayBuffer)
    } catch (error) {
      console.error("Error loading PDF:", error)
      showToast("error", "❌ Failed to load PDF file")
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const removeFile = () => {
    setFile(null)
    setPdfPages(0)
    setCurrentPage(1)
    setSignatures([])
    setPdfArrayBuffer(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  // Render PDF page
  useEffect(() => {
    if (!pdfArrayBuffer || !pdfCanvasRef.current) return

    const renderPage = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument({ data: pdfArrayBuffer })
        const pdfDoc = await loadingTask.promise
        const page = await pdfDoc.getPage(currentPage)

        const canvas = pdfCanvasRef.current
        if (!canvas) return

        const viewport = page.getViewport({ scale: 1.5 })
        const context = canvas.getContext("2d")
        if (!context) return

        canvas.height = viewport.height
        canvas.width = viewport.width

        await page.render({
          canvasContext: context,
          viewport: viewport,
        }).promise
      } catch (error) {
        console.error("Error rendering PDF page:", error)
      }
    }

    renderPage()
  }, [pdfArrayBuffer, currentPage])

  // Drawing canvas functions
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!drawingCanvasRef.current) return
    setIsDrawing(true)
    const rect = drawingCanvasRef.current.getBoundingClientRect()
    const x = "touches" in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left
    const y = "touches" in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top
    setLastPos({ x, y })
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !drawingCanvasRef.current) return
    const canvas = drawingCanvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    const x = "touches" in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left
    const y = "touches" in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top

    ctx.beginPath()
    ctx.moveTo(lastPos.x, lastPos.y)
    ctx.lineTo(x, y)
    ctx.strokeStyle = "#000000"
    ctx.lineWidth = 2
    ctx.lineCap = "round"
    ctx.stroke()

    setLastPos({ x, y })
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  const clearDrawing = () => {
    if (!drawingCanvasRef.current) return
    const canvas = drawingCanvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  const saveDrawnSignature = () => {
    if (!drawingCanvasRef.current) return
    const dataUrl = drawingCanvasRef.current.toDataURL("image/png")
    setSignatureDataUrl(dataUrl)
    showToast("success", "✅ Signature saved! Click on PDF to place it")
  }

  const generateTypedSignature = () => {
    if (!typedText.trim()) {
      showToast("error", "❌ Please enter your name")
      return
    }

    const canvas = document.createElement("canvas")
    canvas.width = 400
    canvas.height = 100
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.font = "48px 'Dancing Script', cursive"
    ctx.fillStyle = "#000000"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(typedText, canvas.width / 2, canvas.height / 2)

    const dataUrl = canvas.toDataURL("image/png")
    setSignatureDataUrl(dataUrl)
    showToast("success", "✅ Signature created! Click on PDF to place it")
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0]
    if (!imageFile) return

    if (!imageFile.type.startsWith("image/")) {
      showToast("error", "❌ Please upload a valid image file")
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      setSignatureDataUrl(reader.result as string)
      showToast("success", "✅ Signature uploaded! Click on PDF to place it")
    }
    reader.readAsDataURL(imageFile)
  }

  // Handle clicking on PDF canvas to place signature
  const handlePDFCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!signatureDataUrl) {
      showToast("error", "❌ Please create a signature first")
      return
    }

    const canvas = pdfCanvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newSignature: Signature = {
      id: Date.now().toString(),
      dataUrl: signatureDataUrl,
      x: x,
      y: y,
      width: 150,
      height: 50,
      page: currentPage,
    }

    setSignatures([...signatures, newSignature])
    showToast("success", "✅ Signature placed! Click and drag to reposition")
  }

  // Handle signature dragging
  const handleSignatureMouseDown = (e: React.MouseEvent, sigId: string) => {
    e.stopPropagation()
    const sig = signatures.find((s) => s.id === sigId)
    if (!sig || !pdfCanvasRef.current) return

    const canvas = pdfCanvasRef.current
    const rect = canvas.getBoundingClientRect()
    const offsetX = e.clientX - rect.left - sig.x
    const offsetY = e.clientY - rect.top - sig.y

    setDraggedSignature(sigId)
    setDragOffset({ x: offsetX, y: offsetY })
  }

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!draggedSignature || !pdfCanvasRef.current) return

    const canvas = pdfCanvasRef.current
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left - dragOffset.x
    const y = e.clientY - rect.top - dragOffset.y

    setSignatures((prev) =>
      prev.map((sig) =>
        sig.id === draggedSignature ? { ...sig, x, y } : sig
      )
    )
  }

  const handleCanvasMouseUp = () => {
    setDraggedSignature(null)
  }

  const removeSignature = (id: string) => {
    setSignatures(signatures.filter((sig) => sig.id !== id))
  }

  const downloadSignedPDF = async () => {
    if (!file) {
      showToast("error", "❌ Please upload a PDF file first")
      return
    }

    if (signatures.length === 0) {
      showToast("error", "❌ Please add at least one signature")
      return
    }

    setLoading(true)
    setProgress(10)

    try {
      const arrayBuffer = await file.arrayBuffer()
      const pdfDoc = await PDFDocument.load(arrayBuffer)
      setProgress(30)

      // Group signatures by page
      const signaturesByPage = signatures.reduce((acc, sig) => {
        if (!acc[sig.page]) acc[sig.page] = []
        acc[sig.page].push(sig)
        return acc
      }, {} as Record<number, Signature[]>)

      setProgress(50)

      // Add signatures to each page
      const scale = 1.5 // Canvas rendering scale
      for (const [pageNumStr, pageSigs] of Object.entries(signaturesByPage)) {
        const pageNum = parseInt(pageNumStr) - 1
        const page = pdfDoc.getPages()[pageNum]
        const { height: pageHeight } = page.getSize()

        for (const sig of pageSigs) {
          // Fetch signature image
          const imageBytes = await fetch(sig.dataUrl).then((res) => res.arrayBuffer())
          const image = await pdfDoc.embedPng(imageBytes)

          // Convert canvas coordinates to PDF coordinates
          // Canvas coordinates are at scale 1.5, PDF is at scale 1.0
          const pdfX = sig.x / scale
          const pdfY = sig.y / scale
          const pdfWidth = sig.width / scale
          const pdfHeight = sig.height / scale

          // Draw signature on page (PDF coordinates start from bottom-left)
          page.drawImage(image, {
            x: pdfX,
            y: pageHeight - pdfY - pdfHeight,
            width: pdfWidth,
            height: pdfHeight,
          })
        }
      }

      setProgress(80)

      const pdfBytes = await pdfDoc.save()
      setProgress(90)

      // Download
      const blob = new Blob([pdfBytes as BlobPart], { type: "application/pdf" })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `signed_${file.name}`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      setProgress(100)
      showToast("success", `✅ Signed PDF downloaded successfully!`)

      // Reset after successful download
      setTimeout(() => {
        setProgress(0)
      }, 1000)
    } catch (error) {
      console.error("Error signing PDF:", error)
      showToast("error", "❌ Failed to sign PDF. Please try again.")
      setProgress(0)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <ToastContainer />
      <GCard className="p-6 border-2 border-dashed border-border hover:border-primary/50 transition-colors">
        <div className="space-y-6">
          {/* File Upload Area */}
          {!file ? (
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-sm text-muted-foreground mb-2">
                Drag and drop your PDF here, or click to browse
              </p>
              <p className="text-xs text-muted-foreground">
                Maximum file size: 100MB
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
          ) : (
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium text-sm">{file.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {(file.size / 1024 / 1024).toFixed(2)} MB • {pdfPages} pages
                  </p>
                </div>
              </div>
              <GButton
                variant="ghost"
                size="sm"
                onClick={removeFile}
                disabled={loading}
              >
                <X className="h-4 w-4" />
              </GButton>
            </div>
          )}

          {/* Signature Creation */}
          {file && (
            <>
              <div className="space-y-4">
                <GLabel className="text-sm font-medium">Create Your Signature</GLabel>

                {/* Mode Selector */}
                <div className="flex gap-2">
                  <GButton
                    type="button"
                    variant={signatureMode === "draw" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSignatureMode("draw")}
                    className="flex-1"
                  >
                    <Pencil className="h-4 w-4 mr-2" />
                    Draw
                  </GButton>
                  <GButton
                    type="button"
                    variant={signatureMode === "type" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSignatureMode("type")}
                    className="flex-1"
                  >
                    <Type className="h-4 w-4 mr-2" />
                    Type
                  </GButton>
                  <GButton
                    type="button"
                    variant={signatureMode === "upload" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSignatureMode("upload")}
                    className="flex-1"
                  >
                    <ImageIcon className="h-4 w-4 mr-2" />
                    Upload
                  </GButton>
                </div>

                {/* Draw Mode */}
                {signatureMode === "draw" && (
                  <div className="space-y-3">
                    <div className="border-2 border-border rounded-lg overflow-hidden bg-white">
                      <canvas
                        ref={drawingCanvasRef}
                        width={500}
                        height={150}
                        onMouseDown={startDrawing}
                        onMouseMove={draw}
                        onMouseUp={stopDrawing}
                        onMouseLeave={stopDrawing}
                        onTouchStart={startDrawing}
                        onTouchMove={draw}
                        onTouchEnd={stopDrawing}
                        className="w-full cursor-crosshair"
                        style={{ touchAction: "none" }}
                      />
                    </div>
                    <div className="flex gap-2">
                      <GButton
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={clearDrawing}
                        className="flex-1"
                      >
                        Clear
                      </GButton>
                      <GButton
                        type="button"
                        size="sm"
                        onClick={saveDrawnSignature}
                        className="flex-1"
                      >
                        <Check className="h-4 w-4 mr-2" />
                        Save Signature
                      </GButton>
                    </div>
                  </div>
                )}

                {/* Type Mode */}
                {signatureMode === "type" && (
                  <div className="space-y-3">
                    <GInput
                      type="text"
                      placeholder="Enter your name"
                      value={typedText}
                      onChange={(e) => setTypedText(e.target.value)}
                      className="text-center text-lg"
                      style={{ fontFamily: "'Dancing Script', cursive" }}
                    />
                    <GButton
                      type="button"
                      size="sm"
                      onClick={generateTypedSignature}
                      className="w-full"
                    >
                      <Check className="h-4 w-4 mr-2" />
                      Create Signature
                    </GButton>
                  </div>
                )}

                {/* Upload Mode */}
                {signatureMode === "upload" && (
                  <div className="space-y-3">
                    <div
                      className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors"
                      onClick={() => document.getElementById("signature-image-upload")?.click()}
                    >
                      <ImageIcon className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Click to upload signature image
                      </p>
                      <input
                        id="signature-image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </div>
                  </div>
                )}

                {/* Signature Preview */}
                {signatureDataUrl && (
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm font-medium mb-2">Signature Preview:</p>
                    <div className="bg-white p-4 rounded border-2 border-border inline-block">
                      <img src={signatureDataUrl} alt="Signature" className="h-16" />
                    </div>
                  </div>
                )}
              </div>

              {/* PDF Preview with Signatures */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <GLabel className="text-sm font-medium">PDF Preview - Click to Place Signature</GLabel>
                  <div className="flex items-center gap-2">
                    <GButton
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </GButton>
                    <span className="text-sm text-muted-foreground">
                      Page {currentPage} of {pdfPages}
                    </span>
                    <GButton
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(Math.min(pdfPages, currentPage + 1))}
                      disabled={currentPage === pdfPages}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </GButton>
                  </div>
                </div>

                <div
                  className="relative border-2 border-border rounded-lg overflow-auto max-h-[600px] bg-gray-100"
                  onMouseMove={handleCanvasMouseMove}
                  onMouseUp={handleCanvasMouseUp}
                  onMouseLeave={handleCanvasMouseUp}
                >
                  <canvas
                    ref={pdfCanvasRef}
                    onClick={handlePDFCanvasClick}
                    className="w-full cursor-crosshair"
                    style={{ display: "block" }}
                  />
                  {/* Signature Overlays */}
                  {signatures
                    .filter((sig) => sig.page === currentPage)
                    .map((sig) => (
                      <div
                        key={sig.id}
                        onMouseDown={(e) => handleSignatureMouseDown(e, sig.id)}
                        style={{
                          position: "absolute",
                          left: sig.x,
                          top: sig.y,
                          width: sig.width,
                          height: sig.height,
                          cursor: "move",
                          border: "2px solid #3b82f6",
                          borderRadius: "4px",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={sig.dataUrl}
                          alt="Signature"
                          className="w-full h-full object-contain bg-white"
                          draggable={false}
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            removeSignature(sig.id)
                          }}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-destructive"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                </div>

                {signatureDataUrl && (
                  <p className="text-xs text-muted-foreground text-center">
                    💡 Click anywhere on the PDF to place your signature. Drag to reposition.
                  </p>
                )}
              </div>

              {/* Added Signatures */}
              {signatures.length > 0 && (
                <div className="space-y-3">
                  <GLabel className="text-sm font-medium">Added Signatures ({signatures.length})</GLabel>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {signatures.map((sig) => (
                      <div
                        key={sig.id}
                        className="flex items-center justify-between p-3 bg-muted rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <img src={sig.dataUrl} alt="Signature" className="h-8" />
                          <span className="text-sm">Page {sig.page}</span>
                        </div>
                        <GButton
                          variant="ghost"
                          size="sm"
                          onClick={() => removeSignature(sig.id)}
                        >
                          <X className="h-4 w-4" />
                        </GButton>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* GProgress Bar */}
              {loading && progress > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Signing PDF...</span>
                    <span className="text-primary font-medium">{progress}%</span>
                  </div>
                  <GProgress value={progress} className="h-2" />
                </div>
              )}

              {/* Download GButton */}
              <GButton
                onClick={downloadSignedPDF}
                disabled={loading || signatures.length === 0}
                className="w-full h-12"
                size="lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Signing PDF...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-5 w-5" />
                    Download Signed PDF
                  </>
                )}
              </GButton>
            </>
          )}

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-border">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-2">
                <Check className="h-5 w-5 text-heading-accent" />
              </div>
              <p className="text-xs font-medium">Free Forever</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-2">
                <Check className="h-5 w-5 text-foreground" />
              </div>
              <p className="text-xs font-medium">No Upload</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-2">
                <Check className="h-5 w-5 text-foreground" />
              </div>
              <p className="text-xs font-medium">100% Secure</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                <Check className="h-5 w-5 text-foreground" />
              </div>
              <p className="text-xs font-medium">No Signup</p>
            </div>
          </div>
        </div>
      </GCard>
    </>
  )
}

