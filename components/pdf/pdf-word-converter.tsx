"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { useToast } from "@/ui/gtoast"
import { GCard } from "@/ui/gcard"

import { Upload, X, Download, FileText, Loader2, RefreshCw } from "lucide-react"
import * as pdfjsLib from "pdfjs-dist"
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from "docx"
import { PDFDocument, StandardFonts, rgb } from "pdf-lib"

if (typeof window !== "undefined") {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs`
}

type ConversionMode = "pdf-to-word" | "word-to-pdf"

function getFileExtension(fileName: string): string {
  const lower = fileName.toLowerCase()
  if (lower.endsWith(".docx")) return ".docx"
  if (lower.endsWith(".doc")) return ".doc"
  if (lower.endsWith(".pdf")) return ".pdf"
  return ""
}

function isValidUploadForMode(file: File, mode: ConversionMode): boolean {
  const ext = getFileExtension(file.name)

  if (mode === "pdf-to-word") {
    return file.type === "application/pdf" || ext === ".pdf"
  }

  return file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
    file.type === "application/msword" ||
    ext === ".docx" ||
    ext === ".doc"
}

function wrapTextByWidth(text: string, maxWidth: number, font: any, fontSize: number): string[] {
  const words = text.split(/\s+/).filter(Boolean)
  if (words.length === 0) return [""]

  const lines: string[] = []
  let currentLine = ""

  for (const word of words) {
    const candidate = currentLine ? `${currentLine} ${word}` : word
    const width = font.widthOfTextAtSize(candidate, fontSize)

    if (width <= maxWidth) {
      currentLine = candidate
      continue
    }

    if (currentLine) lines.push(currentLine)
    currentLine = word
  }

  if (currentLine) lines.push(currentLine)
  return lines
}

async function extractDocxParagraphs(arrayBuffer: ArrayBuffer): Promise<string[]> {
  const JSZip = (await import("jszip")).default
  const zip = await JSZip.loadAsync(arrayBuffer)
  const documentXml = zip.file("word/document.xml")

  if (!documentXml) {
    throw new Error("Invalid DOCX file structure")
  }

  const xml = await documentXml.async("string")
  const parser = new DOMParser()
  const xmlDoc = parser.parseFromString(xml, "application/xml")
  const parseError = xmlDoc.getElementsByTagName("parsererror")

  if (parseError.length > 0) {
    throw new Error("Failed to parse DOCX content")
  }

  const paragraphs = Array.from(xmlDoc.getElementsByTagName("w:p"))
  const output: string[] = []

  for (const paragraph of paragraphs) {
    const textNodes = Array.from(paragraph.getElementsByTagName("w:t"))
    const text = textNodes.map((node) => node.textContent || "").join("").trim()

    if (text) {
      output.push(text)
    }
  }

  return output
}

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

  const handleFileUpload = (selectedFile: File | null) => {
    if (!selectedFile) return

    if (!isValidUploadForMode(selectedFile, mode)) {
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
    setMode((prev) => (prev === "pdf-to-word" ? "word-to-pdf" : "pdf-to-word"))
    setFile(null)
    setConverted(false)
    setConvertedFileBytes(null)
    setProgress(0)
  }

  const convertPDFToWord = async (pdfFile: File) => {
    const arrayBuffer = await pdfFile.arrayBuffer()

    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer })
    const pdfDoc = await loadingTask.promise
    const numPages = pdfDoc.numPages

    const paragraphs: Paragraph[] = []
    const fileName = pdfFile.name.replace(".pdf", "")

    paragraphs.push(
      new Paragraph({
        text: fileName,
        heading: HeadingLevel.HEADING_1,
      })
    )

    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
      setProgress(Math.round((pageNum / numPages) * 50))

      const page = await pdfDoc.getPage(pageNum)
      const textContent = await page.getTextContent()

      paragraphs.push(
        new Paragraph({
          text: `Page ${pageNum}`,
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 },
        })
      )

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

    setProgress(75)
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: paragraphs,
        },
      ],
    })

    setProgress(90)
    const blob = await Packer.toBlob(doc)
    const bytes = new Uint8Array(await blob.arrayBuffer())

    return {
      bytes,
      fileName: pdfFile.name.replace(".pdf", ".docx"),
    }
  }

  const convertWordToPDF = async (wordFile: File) => {
    const fileExt = getFileExtension(wordFile.name)

    if (fileExt === ".doc") {
      throw new Error("Legacy .doc files are not supported in browser mode. Please use .docx")
    }

    if (fileExt !== ".docx") {
      throw new Error("Please upload a .docx file for Word to PDF conversion")
    }

    const arrayBuffer = await wordFile.arrayBuffer()
    setProgress(20)

    const paragraphs = await extractDocxParagraphs(arrayBuffer)
    setProgress(45)

    const pdfDoc = await PDFDocument.create()
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

    const pageWidth = 612
    const pageHeight = 792
    const margin = 50
    const fontSize = 12
    const lineHeight = 17
    const maxWidth = pageWidth - margin * 2

    let page = pdfDoc.addPage([pageWidth, pageHeight])
    let cursorY = pageHeight - margin

    const docTitle = wordFile.name.replace(/\.docx$/i, "")
    page.drawText(`Converted from: ${docTitle}`, {
      x: margin,
      y: cursorY,
      size: 13,
      font,
      color: rgb(0, 0, 0),
    })
    cursorY -= lineHeight * 2

    const textParagraphs = paragraphs.length > 0
      ? paragraphs
      : ["No readable text blocks were extracted from this DOCX file."]

    for (const paragraph of textParagraphs) {
      const wrappedLines = wrapTextByWidth(paragraph, maxWidth, font, fontSize)

      for (const line of wrappedLines) {
        if (cursorY <= margin) {
          page = pdfDoc.addPage([pageWidth, pageHeight])
          cursorY = pageHeight - margin
        }

        page.drawText(line, {
          x: margin,
          y: cursorY,
          size: fontSize,
          font,
          color: rgb(0, 0, 0),
        })
        cursorY -= lineHeight
      }

      cursorY -= 8
    }

    setProgress(80)
    const pdfBytes = await pdfDoc.save()
    setProgress(92)

    return {
      bytes: pdfBytes,
      fileName: wordFile.name.replace(/\.docx$/i, ".pdf"),
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

    const blob = new Blob([convertedFileBytes as BlobPart], {
      type: mode === "pdf-to-word"
        ? "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        : "application/pdf",
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
        <div className="flex items-center justify-center gap-4">
          <GButton
            variant={mode === "pdf-to-word" ? "default" : "outline"}
            onClick={() => {
              setMode("pdf-to-word")
              setFile(null)
            }}
            className="min-w-[140px]"
          >
            <FileText className="mr-2 h-4 w-4" />
            PDF to Word
          </GButton>
          <button
            onClick={switchMode}
            className="p-2 rounded-full hover:bg-accent/10 transition-colors"
            title="Switch conversion mode"
          >
            <RefreshCw className="h-5 w-5 text-accent" />
          </button>
          <GButton
            variant={mode === "word-to-pdf" ? "default" : "outline"}
            onClick={() => {
              setMode("word-to-pdf")
              setFile(null)
            }}
            className="min-w-[140px]"
          >
            <FileText className="mr-2 h-4 w-4" />
            Word to PDF
          </GButton>
        </div>

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
                Supported formats: {mode === "pdf-to-word" ? "PDF" : "DOCX (DOC limited)"}
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
                <GButton
                  variant="ghost"
                  size="icon"
                  onClick={removeFile}
                  disabled={loading}
                  className="flex-shrink-0 hover:bg-destructive/10 hover:text-destructive"
                >
                  <X className="h-4 w-4" />
                </GButton>
              </div>

              {!converted && (
                <GButton
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
                </GButton>
              )}

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

              {converted && convertedFileBytes && (
                <GButton
                  onClick={downloadConvertedFile}
                  className="w-full h-12 text-base font-semibold bg-green-600 hover:bg-green-700"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download {convertedFileName}
                </GButton>
              )}
            </div>
          )}
        </div>

        <GCard className="p-4 bg-muted border-border">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center mt-0.5">
              <span className="text-primary-foreground text-xs font-bold">i</span>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground mb-1">
                {mode === "pdf-to-word" ? "PDF to Word Conversion" : "Word to PDF Conversion"}
              </h4>
              <p className="text-sm text-foreground leading-relaxed">
                {mode === "pdf-to-word"
                  ? "Extracts text from your PDF and creates an editable DOCX with page markers. Best for text-oriented editing workflows."
                  : "Converts DOCX text content into readable PDF output in browser. Complex layout, images, and advanced formatting may need manual review."
                }
              </p>
            </div>
          </div>
        </GCard>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <FileText className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground text-sm mb-1">Text-Focused Workflow</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Optimized for fast conversion where text is the primary requirement.
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
                Convert PDF text to DOCX or DOCX text to PDF from one interface.
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
                No signup required and no enforced conversion quota.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold text-xs">🔒</span>
            </div>
            <div>
              <h4 className="font-semibold text-card-foreground text-sm mb-1">Browser Based</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Conversion is handled through the web interface without extra desktop setup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
