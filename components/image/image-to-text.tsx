"use client"

import type React from "react"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard } from "@/ui/gcard"

import { Upload, Copy, Check, FileText, RotateCcw } from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"
import Tesseract from "tesseract.js"

export function ImageToText() {
  const [image, setImage] = useState<string | null>(null)
  const [extractedText, setExtractedText] = useState("")
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = async (event) => {
      const imageUrl = event.target?.result as string
      setImage(imageUrl)
      setLoading(true)
      setExtractedText("")
      setProgress(0)

      try {
        const result = await Tesseract.recognize(imageUrl, "eng", {
          logger: (m) => {
            if (m.status === "recognizing text") {
              setProgress(Math.round(m.progress * 100))
            }
          },
        })
        setExtractedText(result.data.text || "No text found in the image.")
      } catch (error) {
        console.error("OCR Error:", error)
        setExtractedText("Error extracting text. Please try again with a clearer image.")
      } finally {
        setLoading(false)
        setProgress(0)
      }
    }
    reader.readAsDataURL(file)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(extractedText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const resetAll = () => {
    setImage(null)
    setExtractedText("")
    setLoading(false)
    setProgress(0)
    setCopied(false)
    // Reset the file input
    const fileInput = document.getElementById("image-upload") as HTMLInputElement
    if (fileInput) {
      fileInput.value = ""
    }
  }

  return (
    <div className="space-y-6">
      <GCard className="p-6 border-border shadow-sm hover:shadow-md transition-shadow">
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="image-upload"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-border rounded-lg cursor-pointer bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                {image ? (
                  <img src={image || "/placeholder.svg"} alt="Uploaded" className="max-h-60 rounded-lg" />
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-10 h-10 mb-3 text-muted-foreground" />
                    <p className="mb-2 text-sm text-muted-foreground">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">PNG, JPG, JPEG (MAX. 10MB)</p>
                  </div>
                )}
                <input id="image-upload" type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
              </label>
            </div>

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
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Extracted Text
                </h3>
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
          <li>Upload an image containing text (screenshot, document, photo)</li>
          <li>Wait for the OCR processing to complete</li>
          <li>Copy the extracted text to your clipboard</li>
          <li>Use the text in your documents or applications</li>
        </ol>
      </GCard>
    </div>
  )
}
