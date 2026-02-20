"use client"

import type React from "react"

import { useMemo, useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard } from "@/ui/gcard"

import { Upload, Copy, Check, FileText, RotateCcw, Languages, Play } from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"

const OCR_LANGUAGES = [
  { code: "eng", label: "English" },
  { code: "spa", label: "Spanish" },
  { code: "fra", label: "French" },
  { code: "deu", label: "German" },
  { code: "ita", label: "Italian" },
  { code: "por", label: "Portuguese" },
  { code: "nld", label: "Dutch" },
  { code: "hin", label: "Hindi" },
]

const MAX_FILE_SIZE = 10 * 1024 * 1024

export function ImageToText() {
  const [image, setImage] = useState<string | null>(null)
  const [extractedText, setExtractedText] = useState("")
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [progress, setProgress] = useState(0)
  const [ocrLanguage, setOcrLanguage] = useState("eng")
  const [lastProcessedLanguage, setLastProcessedLanguage] = useState("eng")
  const [uploadError, setUploadError] = useState("")

  const activeLanguageLabel = useMemo(
    () => OCR_LANGUAGES.find((lang) => lang.code === lastProcessedLanguage)?.label || "English",
    [lastProcessedLanguage]
  )

  const runOcr = async (imageUrl: string, languageCode: string) => {
    setLoading(true)
    setExtractedText("")
    setProgress(0)
    setUploadError("")

    try {
      const Tesseract = (await import("tesseract.js")).default
      const result = await Tesseract.recognize(imageUrl, languageCode, {
        logger: (m) => {
          if (m.status === "recognizing text") {
            setProgress(Math.round(m.progress * 100))
          }
        },
      })
      setExtractedText(result.data.text || "No text found in the image.")
      setLastProcessedLanguage(languageCode)
    } catch (error) {
      console.error("OCR Error:", error)
      setExtractedText("Error extracting text. Try a clearer image or select a different OCR language.")
    } finally {
      setLoading(false)
      setProgress(0)
    }
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith("image/")) {
      setUploadError("Please upload a valid image file.")
      return
    }

    if (file.size > MAX_FILE_SIZE) {
      setUploadError("Image is too large. Maximum file size is 10MB.")
      return
    }

    const reader = new FileReader()
    reader.onload = async (event) => {
      const imageUrl = event.target?.result as string
      setImage(imageUrl)
      await runOcr(imageUrl, ocrLanguage)
    }
    reader.readAsDataURL(file)
  }

  const copyToClipboard = () => {
    void navigator.clipboard.writeText(extractedText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const resetAll = () => {
    setImage(null)
    setExtractedText("")
    setLoading(false)
    setProgress(0)
    setCopied(false)
    setUploadError("")

    const fileInput = document.getElementById("image-upload") as HTMLInputElement
    if (fileInput) {
      fileInput.value = ""
    }
  }

  const rerunWithSelectedLanguage = () => {
    if (!image || loading) return
    void runOcr(image, ocrLanguage)
  }

  return (
    <div className="space-y-6">
      <GCard className="p-6 border-border shadow-sm hover:shadow-md transition-shadow">
        <div className="space-y-5">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="ocr-language" className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Languages className="h-4 w-4" />
                OCR Language
              </label>
              <select
                id="ocr-language"
                value={ocrLanguage}
                onChange={(event) => setOcrLanguage(event.target.value)}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
              >
                {OCR_LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label}
                  </option>
                ))}
              </select>
              <p className="text-xs text-muted-foreground">Choose your OCR language before upload, or run OCR again after changing it.</p>
            </div>

            {image && (
              <div className="flex items-end">
                <GButton variant="outline" onClick={rerunWithSelectedLanguage} disabled={loading} className="w-full bg-transparent">
                  <Play className="h-4 w-4 mr-2" />
                  Run OCR with Selected Language
                </GButton>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="image-upload"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-border rounded-lg cursor-pointer bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                {image ? (
                  <img src={image} alt="Uploaded preview for OCR" className="max-h-60 rounded-lg" />
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-10 h-10 mb-3 text-muted-foreground" />
                    <p className="mb-2 text-sm text-muted-foreground">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">Image files up to 10MB</p>
                  </div>
                )}
                <input id="image-upload" type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
              </label>
            </div>

            {uploadError && <p className="text-sm text-red-500 text-center">{uploadError}</p>}

            {image && (
              <div className="flex justify-center">
                <GButton size="sm" variant="outline" onClick={resetAll} className="h-8 text-xs bg-transparent">
                  <RotateCcw className="h-3 w-3 mr-1" />
                  Reset & Upload New Image
                </GButton>
              </div>
            )}
          </div>

          {loading && (
            <div className="flex flex-col items-center justify-center py-8 space-y-3">
              <LoadingSpinner />
              <span className="text-sm text-muted-foreground">Extracting text from image...</span>
              {progress > 0 && (
                <div className="w-full max-w-xs">
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} />
                  </div>
                  <p className="text-xs text-center text-muted-foreground mt-1">{progress}%</p>
                </div>
              )}
            </div>
          )}

          {extractedText && !loading && (
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Extracted Text
                </h3>
                <span className="text-xs text-muted-foreground">Language used: {activeLanguageLabel}</span>
              </div>

              <div className="flex items-center gap-2">
                <GButton size="sm" variant="outline" onClick={copyToClipboard} className="h-8 text-xs bg-transparent">
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 mr-1" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </>
                  )}
                </GButton>
                <GButton size="sm" variant="outline" onClick={resetAll} className="h-8 text-xs bg-transparent">
                  <RotateCcw className="h-3 w-3 mr-1" />
                  Reset
                </GButton>
              </div>

              <div className="p-4 bg-muted/30 rounded-lg border border-border max-h-96 overflow-y-auto">
                <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">{extractedText}</p>
              </div>
            </div>
          )}
        </div>
      </GCard>

      <GCard className="p-4 bg-muted/20 border-border">
        <h3 className="text-sm font-semibold mb-2 text-foreground">How to Use:</h3>
        <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside leading-relaxed">
          <li>Select the OCR language.</li>
          <li>Upload an image containing readable text.</li>
          <li>Wait for OCR processing to complete.</li>
          <li>Copy the extracted text or run OCR again with another language.</li>
        </ol>
      </GCard>
    </div>
  )
}
