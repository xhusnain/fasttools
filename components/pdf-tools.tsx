"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, Download, FileText, Scissors, Merge, X } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"
import { PDFDocument } from "pdf-lib"

export function PDFTools() {
  const [files, setFiles] = useState<File[]>([])
  const [loading, setLoading] = useState(false)
  const [mode, setMode] = useState<"split" | "merge">("merge")

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = Array.from(e.target.files || [])
    setFiles(uploadedFiles)
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const mergePDFs = async () => {
    setLoading(true)
    try {
      const mergedPdf = await PDFDocument.create()

      for (const file of files) {
        const arrayBuffer = await file.arrayBuffer()
        const pdf = await PDFDocument.load(arrayBuffer)
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices())
        copiedPages.forEach((page) => mergedPdf.addPage(page))
      }

      const mergedPdfBytes = await mergedPdf.save()
      const blob = new Blob([mergedPdfBytes], { type: "application/pdf" })
      const url = URL.createObjectURL(blob)

      const link = document.createElement("a")
      link.href = url
      link.download = "merged-document.pdf"
      link.click()

      URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error merging PDFs:", error)
      alert("Error merging PDFs. Please ensure all files are valid PDF documents.")
    } finally {
      setLoading(false)
    }
  }

  const splitPDF = async () => {
    setLoading(true)
    try {
      const file = files[0]
      const arrayBuffer = await file.arrayBuffer()
      const pdf = await PDFDocument.load(arrayBuffer)
      const pageCount = pdf.getPageCount()

      for (let i = 0; i < pageCount; i++) {
        const newPdf = await PDFDocument.create()
        const [copiedPage] = await newPdf.copyPages(pdf, [i])
        newPdf.addPage(copiedPage)

        const pdfBytes = await newPdf.save()
        const blob = new Blob([pdfBytes], { type: "application/pdf" })
        const url = URL.createObjectURL(blob)

        const link = document.createElement("a")
        link.href = url
        link.download = `page-${i + 1}.pdf`
        link.click()

        URL.revokeObjectURL(url)
      }

      alert(`Successfully split PDF into ${pageCount} pages!`)
    } catch (error) {
      console.error("Error splitting PDF:", error)
      alert("Error splitting PDF. Please ensure the file is a valid PDF document.")
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
    <div className="space-y-6">
      <div className="flex gap-3">
        <Button
          variant={mode === "merge" ? "default" : "outline"}
          onClick={() => {
            setMode("merge")
            setFiles([])
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
          }}
          className="flex-1 h-11 text-sm font-medium"
        >
          <Scissors className="h-4 w-4 mr-2" />
          Split PDF
        </Button>
      </div>

      <Card className="p-6 border-border shadow-sm hover:shadow-md transition-shadow">
        <div className="space-y-4">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="pdf-upload"
              className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-border rounded-lg cursor-pointer bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-10 h-10 mb-3 text-muted-foreground" />
                <p className="mb-2 text-sm text-muted-foreground">
                  <span className="font-semibold">Click to upload</span> PDF files
                </p>
                <p className="text-xs text-muted-foreground">
                  {mode === "merge" ? "Upload multiple PDFs to merge" : "Upload a PDF to split"}
                </p>
              </div>
              <input
                id="pdf-upload"
                type="file"
                className="hidden"
                accept=".pdf"
                multiple={mode === "merge"}
                onChange={handleFileUpload}
              />
            </label>
          </div>

          {files.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">Uploaded Files:</h3>
              <div className="space-y-2">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg border border-border">
                    <FileText className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground flex-1 truncate">{file.name}</span>
                    <span className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                      className="h-7 w-7 p-0 hover:bg-destructive/10"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <Button onClick={processPDF} disabled={loading} className="w-full h-10 text-sm font-medium shadow-sm">
                {loading ? (
                  <>
                    <LoadingSpinner />
                    <span className="ml-2">Processing...</span>
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4 mr-2" />
                    {mode === "merge" ? "Merge PDFs" : "Split PDF"}
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </Card>

      <Card className="p-4 bg-muted/20 border-border">
        <h3 className="text-sm font-semibold mb-2 text-foreground">Features:</h3>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside leading-relaxed">
          <li>Merge multiple PDF files into one document</li>
          <li>Split large PDFs into separate pages</li>
          <li>Fast processing with no quality loss</li>
          <li>Secure - all processing happens in your browser</li>
        </ul>
      </Card>
    </div>
  )
}
