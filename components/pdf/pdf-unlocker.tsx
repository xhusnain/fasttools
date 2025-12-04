"use client"

import type React from "react"

import { useState, useRef } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GProgress } from "@/ui/gprogress"
import { useToast } from "@/ui/gtoast"

import { Upload, Download, Unlock, CheckCircle2, AlertCircle, FileText, X, Shield } from "lucide-react"

import { PDFDocument } from "pdf-lib"
import * as pdfjsLib from "pdfjs-dist"

// Configure PDF.js worker
if (typeof window !== "undefined") {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs`
}

export function PDFUnlocker() {
  const [file, setFile] = useState<File | null>(null)
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [unlocked, setUnlocked] = useState(false)
  const [unlockedPdfBytes, setUnlockedPdfBytes] = useState<Uint8Array | null>(null)
  const [progress, setProgress] = useState(0)
  const [encryptionType, setEncryptionType] = useState<"none" | "owner" | "user">("none")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { showToast, ToastContainer } = useToast()

  /**
   * Detect PDF encryption type using PDF.js
   * - none: No encryption
   * - owner: Restrictions only (can unlock without password)
   * - user: Password protected (need password from user)
   */
  const detectEncryptionType = async (pdfFile: File): Promise<"none" | "owner" | "user"> => {
    try {
      const arrayBuffer = await pdfFile.arrayBuffer()

      try {
        // Try loading without password
        const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer })
        const pdfDoc = await loadingTask.promise

        if (pdfDoc.numPages > 0) {
          // Check if encrypted
          const data = await pdfDoc.getData()
          const isEncrypted = String.fromCharCode.apply(null, Array.from(data.slice(0, 1000))).includes('/Encrypt')

          return isEncrypted ? "owner" : "none"
        }

        return "none"

      } catch (error: any) {
        // Password exception means user password required
        if (error.name === 'PasswordException' || error.message?.includes('password')) {
          return "user"
        }
        return "user"
      }
    } catch (error) {
      console.error("Error detecting encryption:", error)
      return "user"
    }
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0]
    if (uploadedFile) {
      if (uploadedFile.type !== "application/pdf") {
        showToast("error", "Please upload a PDF file")
        return
      }
      if (uploadedFile.size > 50 * 1024 * 1024) {
        showToast("error", "File size must be less than 50MB")
        return
      }

      setFile(uploadedFile)
      setUnlocked(false)
      setUnlockedPdfBytes(null)
      setPassword("")
      setProgress(0)

      const encType = await detectEncryptionType(uploadedFile)
      setEncryptionType(encType)

      if (encType === "none") {
        showToast("success", "✅ PDF loaded - no protection found")
      } else if (encType === "owner") {
        showToast("success", "✅ Restrictions detected - can unlock without password!")
      } else {
        showToast("warning", "🔒 Password-protected PDF. Enter password to unlock.")
      }
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
      if (droppedFile.size > 50 * 1024 * 1024) {
        showToast("error", "File size must be less than 50MB")
        return
      }

      setFile(droppedFile)
      setUnlocked(false)
      setUnlockedPdfBytes(null)
      setPassword("")
      setProgress(0)

      const encType = await detectEncryptionType(droppedFile)
      setEncryptionType(encType)

      if (encType === "none") {
        showToast("success", "✅ PDF loaded - no protection found")
      } else if (encType === "owner") {
        showToast("success", "✅ Restrictions detected - can unlock without password!")
      } else {
        showToast("warning", "🔒 Password-protected PDF. Enter password to unlock.")
      }
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const removeFile = () => {
    setFile(null)
    setPassword("")
    setUnlocked(false)
    setUnlockedPdfBytes(null)
    setProgress(0)
    setEncryptionType("none")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  /**
   * Render PDF pages to images and create new unlocked PDF
   * This preserves all visual content while removing encryption
   */
  const renderPDFToImages = async (arrayBuffer: ArrayBuffer, userPassword?: string): Promise<Uint8Array> => {
    setProgress(5)

    // Load PDF with password (if provided)
    let pdfDoc
    try {
      const loadingTask = pdfjsLib.getDocument({
        data: arrayBuffer,
        password: userPassword || ""
      })
      pdfDoc = await loadingTask.promise
    } catch (error: any) {
      if (error.name === 'PasswordException' || error.message?.toLowerCase().includes('password')) {
        throw new Error("INCORRECT_PASSWORD")
      }
      throw error
    }

    const numPages = pdfDoc.numPages
    setProgress(10)

    // Create new PDF
    const newPdf = await PDFDocument.create()
    setProgress(15)

    // Render each page to image
    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
      const page = await pdfDoc.getPage(pageNum)
      const viewport = page.getViewport({ scale: 2.0 })

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

      // Convert canvas to JPEG
      const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob(
          (b) => b ? resolve(b) : reject(new Error("Failed to convert canvas")),
          'image/jpeg',
          0.95
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
      const pageProgress = 15 + ((pageNum / numPages) * 75)
      setProgress(Math.round(pageProgress))
    }

    setProgress(95)

    // Save new PDF
    const pdfBytes = await newPdf.save()
    setProgress(100)

    return pdfBytes
  }

  /**
   * Main unlock function
   */
  const unlockPDF = async () => {
    if (!file) return

    // Check if password required
    if (encryptionType === "user" && (!password || password.trim() === "")) {
      showToast("error", "Password is required to unlock this PDF")
      return
    }

    if (encryptionType === "none") {
      showToast("error", "This PDF has no protection to remove")
      return
    }

    setLoading(true)
    setProgress(10)

    try {
      const arrayBuffer = await file.arrayBuffer()

      // Render PDF to images (works for both owner and user passwords)
      const pdfBytes = await renderPDFToImages(
        arrayBuffer,
        encryptionType === "user" ? password : undefined
      )

      if (!pdfBytes || pdfBytes.length < 1000) {
        throw new Error("Generated PDF is empty")
      }

      setUnlockedPdfBytes(pdfBytes)
      setUnlocked(true)

      const fileSizeKB = (pdfBytes.length / 1024).toFixed(0)

      if (encryptionType === "owner") {
        showToast("success", `✅ Restrictions removed! (${fileSizeKB} KB)`)
      } else {
        showToast("success", `✅ Password removed! (${fileSizeKB} KB)`)
      }

    } catch (error: any) {
      if (error.message === "INCORRECT_PASSWORD") {
        showToast("error", "🔒 Wrong password! Please enter the correct password and try again.", 5000)
      } else if (error.message?.toLowerCase().includes("password")) {
        showToast("error", "🔒 Wrong password! Please enter the correct password and try again.", 5000)
      } else if (error.message?.includes("empty")) {
        showToast("error", "❌ Generated PDF is empty. Please try again.", 5000)
      } else {
        // Only log unexpected errors to console
        console.error("Error unlocking PDF:", error)
        showToast("error", `❌ Failed to unlock: ${error?.message || 'Unknown error'}`, 5000)
      }

      // Clear password field on error
      if (error.message === "INCORRECT_PASSWORD" || error.message?.toLowerCase().includes("password")) {
        setPassword("")
      }
    } finally {
      setLoading(false)
      setProgress(0)
    }
  }

  const downloadUnlockedPDF = () => {
    if (!unlockedPdfBytes || !file) return

    const blob = new Blob([unlockedPdfBytes], { type: "application/pdf" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = file.name.replace(".pdf", "_unlocked.pdf")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    showToast("success", "PDF downloaded successfully!")
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
                  Maximum file size: 50MB
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
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                          {unlocked && " • Unlocked"}
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

                  {/* Encryption Type Badge */}
                  {!unlocked && (
                    <div className="flex items-center gap-2 mt-3">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium ${encryptionType === "none"
                        ? "bg-green-100 text-heading-accent dark:bg-green-900/30 dark:text-heading-accent"
                        : encryptionType === "owner"
                          ? "bg-blue-100 text-foreground dark:bg-blue-900/30 dark:text-foreground"
                          : "bg-yellow-100 text-foreground dark:bg-yellow-900/30 dark:text-foreground"
                        }`}>
                        {encryptionType === "none" && "✓ No Protection"}
                        {encryptionType === "owner" && "🔓 Has Restrictions (Can Unlock!)"}
                        {encryptionType === "user" && "🔒 Password Protected (Can Unlock!)"}
                      </div>
                    </div>
                  )}
                </div>

                {/* Info for Owner Password PDFs */}
                {!unlocked && encryptionType === "owner" && (
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-foreground">
                      <strong>✅ Good news!</strong> This PDF only has restrictions (can't print, can't copy, can't edit).
                      We can remove these restrictions <strong>without any password</strong>!
                    </p>
                  </div>
                )}

                {/* Info for User Password PDFs */}
                {!unlocked && encryptionType === "user" && (
                  <div className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                    <p className="text-sm text-foreground">
                      <strong>🔒 Password Protected:</strong> This PDF's content is encrypted. Enter the password below and we'll render all pages to images, creating a completely unlocked PDF with all content preserved!
                    </p>
                  </div>
                )}

                {/* Password GInput */}
                {!unlocked && encryptionType === "user" && (
                  <div className="space-y-2">
                    <GLabel htmlFor="pdf-password" className="text-sm font-medium">
                      PDF Password <span className="text-foreground">*</span>
                    </GLabel>
                    <GInput
                      id="pdf-password"
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-11 border-2 border-primary focus:border-orange-600 focus:ring-orange-500"
                      disabled={loading}
                    />
                    <p className="text-xs text-muted-foreground">
                      We'll decrypt and render all pages to preserve content
                    </p>
                  </div>
                )}

                {/* GProgress Bar */}
                {loading && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {encryptionType === "user" ? "Rendering pages to images..." : "Removing restrictions..."}
                      </span>
                      <span className="font-medium text-foreground">{progress}%</span>
                    </div>
                    <GProgress value={progress} className="h-2" />
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-3">
                  {!unlocked ? (
                    <GButton
                      onClick={unlockPDF}
                      disabled={loading || encryptionType === "none"}
                      isLoading={loading}
                      className="w-full h-11 text-sm font-semibold shadow-sm"
                      size="lg"
                    >
                      {loading ? (
                        <span className="ml-2">
                          {encryptionType === "user" ? "Unlocking..." : "Removing restrictions..."}
                        </span>
                      ) : (
                        <>
                          <Unlock className="h-5 w-5 mr-2" />
                          {encryptionType === "owner"
                            ? "Remove Restrictions"
                            : encryptionType === "user"
                              ? "Unlock PDF with Password"
                              : "No Protection to Remove"}
                        </>
                      )}
                    </GButton>
                  ) : (
                    <GButton
                      onClick={downloadUnlockedPDF}
                      className="w-full h-11 text-sm font-semibold shadow-sm bg-green-600 hover:bg-green-700"
                      size="lg"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Download Unlocked PDF
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
            What This Tool Can Do
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-card-foreground">✅ Remove Restrictions:</strong> Remove printing, copying, and editing restrictions without needing any password
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-card-foreground">✅ Remove Passwords:</strong> Unlock password-protected PDFs by providing the password and rendering all pages to preserve content
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

        {/* How It Works */}
        <div className="p-5 rounded-lg bg-card border border-border shadow">
          <h2 className="text-xl font-bold mb-4 text-card-foreground flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            How It Works
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-card-foreground">🔓 For Restrictions:</strong> We render each page as a high-quality image and create a new PDF. Fast and preserves all content!
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-card-foreground">🔒 For Password Protection:</strong> We decrypt using your password, render each page to a high-quality image, then create a brand new PDF. The result is completely unlocked!
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-card-foreground">📝 Note:</strong> Password-protected PDFs become image-based after unlocking. Text remains visible but won't be selectable. This is necessary to remove encryption.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="p-5 rounded-lg bg-card border border-border shadow">
          <h2 className="text-xl font-bold mb-4 text-card-foreground flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-primary" />
            Legal Notice
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Only unlock PDFs that you own or have explicit permission to access. This tool is designed for legitimate use - removing passwords from your own documents for convenience, or accessing documents you have been given permission to view. Unauthorized access to password-protected documents may violate copyright laws.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
