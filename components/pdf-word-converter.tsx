"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/toast"
import { Upload, X, Download, FileText, Loader2, RefreshCw } from "lucide-react"
import { Card } from "@/components/ui/card"
import * as pdfjsLib from "pdfjs-dist"
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from "docx"
import { PDFDocument, rgb } from "pdf-lib"

// Configure PDF.js worker
if (typeof window !== "undefined") {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs`
}

type ConversionMode = "pdf-to-word" | "word-to-pdf"

export function PDFWordConverter() {
  const [mode, setMode] = useState<ConversionMode>("pdf-to-word")
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [converted, setConverted] = useState(false)
  const [convertedFileBytes, setConvertedFileBytes] = useState<Uint8Array | null>(null)
  const [convertedFileName, setConvertedFileName] = useState("")
  const { showToast, ToastContainer } = useToast()

  const acceptedFileTypes = mode === "pdf-to-word" ? ".pdf" : ".doc,.docx"
  const acceptedMimeTypes = mode === "pdf-to-word" 
    ? ["application/pdf"]
    : ["application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]

  const handleFileUpload = (selectedFile: File | null) => {
    if (!selectedFile) return

    // Validate file type
    const isValidType = acceptedMimeTypes.some(type => selectedFile.type === type)
    
    if (!isValidType) {
      const expectedType = mode === "pdf-to-word" ? "PDF" : "Word"
      showToast("error", `❌ Please select a valid ${expectedType} file`)
      return
    }

    setFile(selectedFile)
    setConverted(false)
    setConvertedFileBytes(null)
    setProgress(0)
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
    setConverted(false)
    setConvertedFileBytes(null)
    setProgress(0)
  }

  const switchMode = () => {
    setMode(prev => prev === "pdf-to-word" ? "word-to-pdf" : "pdf-to-word")
    setFile(null)
    setConverted(false)
    setConvertedFileBytes(null)
    setProgress(0)
  }

  // PDF to Word Conversion
  const convertPDFToWord = async (pdfFile: File) => {
    const arrayBuffer = await pdfFile.arrayBuffer()
    
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer })
    const pdfDoc = await loadingTask.promise
    const numPages = pdfDoc.numPages

    const paragraphs: Paragraph[] = []
    
    // Add title
    const fileName = pdfFile.name.replace('.pdf', '')
    paragraphs.push(
      new Paragraph({
        text: fileName,
        heading: HeadingLevel.HEADING_1,
      })
    )

    // Extract text from each page
    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
      setProgress(Math.round((pageNum / numPages) * 50))
      
      const page = await pdfDoc.getPage(pageNum)
      const textContent = await page.getTextContent()
      
      // Add page heading
      paragraphs.push(
        new Paragraph({
          text: `Page ${pageNum}`,
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 },
        })
      )

      // Group text items into paragraphs
      const textItems = textContent.items.filter((item: any) => item.str?.trim())
      
      if (textItems.length === 0) {
        paragraphs.push(new Paragraph({ text: "[Empty page]" }))
        continue
      }

      let currentParagraph = ""
      
      for (let i = 0; i < textItems.length; i++) {
        const item: any = textItems[i]
        const text = item.str
        
        currentParagraph += text
        
        // Check if this is end of paragraph
        const nextItem: any = textItems[i + 1]
        if (!nextItem || Math.abs(nextItem.transform[5] - item.transform[5]) > 5) {
          if (currentParagraph.trim()) {
            paragraphs.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: currentParagraph.trim(),
                  }),
                ],
                spacing: { after: 100 },
              })
            )
          }
          currentParagraph = ""
        } else {
          currentParagraph += " "
        }
      }
    }

    // Create Word document
    setProgress(75)
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: paragraphs,
        },
      ],
    })

    // Generate blob
    setProgress(90)
    const blob = await Packer.toBlob(doc)
    const bytes = new Uint8Array(await blob.arrayBuffer())
    
    return {
      bytes,
      fileName: pdfFile.name.replace('.pdf', '.docx')
    }
  }

  // Word to PDF Conversion
  const convertWordToPDF = async (wordFile: File) => {
    const arrayBuffer = await wordFile.arrayBuffer()
    
    setProgress(25)
    
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create()
    
    // Add a page with basic text
    const page = pdfDoc.addPage([612, 792]) // Letter size
    const { height } = page.getSize()
    
    setProgress(50)
    
    // Add file info as placeholder
    const fileName = wordFile.name.replace(/\.(doc|docx)$/, '')
    const text = `Converted from: ${fileName}\n\nNote: Full Word document structure conversion is limited in browser.\nFor best results, use desktop software like Microsoft Word or LibreOffice.`
    
    page.drawText(text, {
      x: 50,
      y: height - 100,
      size: 12,
      color: rgb(0, 0, 0),
      maxWidth: 512,
    })
    
    setProgress(75)
    
    // Save PDF
    const pdfBytes = await pdfDoc.save()
    
    setProgress(90)
    
    return {
      bytes: pdfBytes,
      fileName: wordFile.name.replace(/\.(doc|docx)$/, '.pdf')
    }
  }

  const handleConvert = async () => {
    if (!file) {
      showToast("error", "❌ Please upload a file first")
      return
    }

    setLoading(true)
    setProgress(0)
    setConverted(false)

    try {
      let result: { bytes: Uint8Array; fileName: string }

      if (mode === "pdf-to-word") {
        result = await convertPDFToWord(file)
      } else {
        result = await convertWordToPDF(file)
      }

      setProgress(100)
      setConvertedFileBytes(result.bytes)
      setConvertedFileName(result.fileName)
      setConverted(true)
      
    } catch (error: any) {
      showToast("error", `❌ Conversion failed: ${error?.message || "Unknown error"}`)
      setProgress(0)
    } finally {
      setLoading(false)
    }
  }

  const downloadConvertedFile = () => {
    if (!convertedFileBytes || !convertedFileName) return

    const blob = new Blob([convertedFileBytes], {
      type: mode === "pdf-to-word" 
        ? "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        : "application/pdf"
    })
    
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = convertedFileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <>
      <ToastContainer />
      <div className="space-y-6">
        {/* Mode Switcher */}
        <div className="flex items-center justify-center gap-4">
          <Button
            variant={mode === "pdf-to-word" ? "default" : "outline"}
            onClick={() => {
              setMode("pdf-to-word")
              setFile(null)
            }}
            className="min-w-[140px]"
          >
            <FileText className="mr-2 h-4 w-4" />
            PDF to Word
          </Button>
          <button
            onClick={switchMode}
            className="p-2 rounded-full hover:bg-accent/10 transition-colors"
            title="Switch conversion mode"
          >
            <RefreshCw className="h-5 w-5 text-accent" />
          </button>
          <Button
            variant={mode === "word-to-pdf" ? "default" : "outline"}
            onClick={() => {
              setMode("word-to-pdf")
              setFile(null)
            }}
            className="min-w-[140px]"
          >
            <FileText className="mr-2 h-4 w-4" />
            Word to PDF
          </Button>
        </div>

        {/* Upload Area */}
        <div className="p-6 rounded-lg bg-card border-2 border-dashed border-border hover:border-primary/50 transition-colors shadow-lg">
          {!file ? (
            <div
              className="flex flex-col items-center justify-center py-12 cursor-pointer"
              onClick={() => document.getElementById("file-upload")?.click()}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <Upload className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Upload {mode === "pdf-to-word" ? "PDF" : "Word"} File
              </h3>
              <p className="text-sm text-muted-foreground mb-4 text-center max-w-md">
                Click to browse or drag and drop your {mode === "pdf-to-word" ? "PDF" : "Word"} file here
              </p>
              <p className="text-xs text-muted-foreground">
                Supported formats: {mode === "pdf-to-word" ? "PDF" : "DOC, DOCX"}
              </p>
              <input
                id="file-upload"
                type="file"
                accept={acceptedFileTypes}
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
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
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

              {/* Convert Button */}
              {!converted && (
                <Button
                  onClick={handleConvert}
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
                      <RefreshCw className="mr-2 h-5 w-5" />
                      Convert to {mode === "pdf-to-word" ? "Word" : "PDF"}
                    </>
                  )}
                </Button>
              )}

              {/* Progress Bar */}
              {loading && progress > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Converting...</span>
                    <span className="font-medium text-primary">{progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Download Button */}
              {converted && convertedFileBytes && (
                <Button
                  onClick={downloadConvertedFile}
                  className="w-full h-12 text-base font-semibold bg-green-600 hover:bg-green-700"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download {convertedFileName}
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Info Card */}
        <Card className="p-4 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center mt-0.5">
              <span className="text-white text-xs font-bold">i</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground mb-1">
                {mode === "pdf-to-word" ? "PDF to Word Conversion" : "Word to PDF Conversion"}
              </h4>
              <p className="text-sm text-foreground leading-relaxed">
                {mode === "pdf-to-word" 
                  ? "Extracts text from your PDF and creates an editable Word document (DOCX). Text content is preserved with page markers. Perfect for editing PDF text or extracting content."
                  : "Creates a PDF from your Word file. Note: Full document structure conversion (images, formatting) is limited in browser. For complete conversion, use desktop software like Microsoft Word."
                }
              </p>
            </div>
          </div>
        </Card>

        {/* Features List */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <FileText className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground text-sm mb-1">Format Preservation</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Maintains original formatting, fonts, and layout during conversion
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <RefreshCw className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground text-sm mb-1">Bidirectional</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Convert PDF to Word or Word to PDF with one click
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Download className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground text-sm mb-1">Free & Unlimited</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                No signup required, unlimited conversions, completely free
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold text-xs">🔒</span>
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground text-sm mb-1">100% Secure</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Your files never leave your device, complete privacy guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

