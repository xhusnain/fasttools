"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Upload, Download, Lock, Unlock } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

export function PDFUnlocker() {
  const [file, setFile] = useState<File | null>(null)
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [unlocked, setUnlocked] = useState(false)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0]
    if (uploadedFile) {
      setFile(uploadedFile)
      setUnlocked(false)
    }
  }

  const unlockPDF = () => {
    setLoading(true)
    // Simulate PDF unlocking
    setTimeout(() => {
      setLoading(false)
      setUnlocked(true)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 border-border shadow-sm hover:shadow-md transition-shadow">
        <div className="space-y-4">
          {!file ? (
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="pdf-unlock-upload"
                className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-border rounded-lg cursor-pointer bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-10 h-10 mb-3 text-muted-foreground" />
                  <p className="mb-2 text-sm text-muted-foreground">
                    <span className="font-semibold">Click to upload</span> password-protected PDF
                  </p>
                  <p className="text-xs text-muted-foreground">PDF files only (MAX. 50MB)</p>
                </div>
                <input
                  id="pdf-unlock-upload"
                  type="file"
                  className="hidden"
                  accept=".pdf"
                  onChange={handleFileUpload}
                />
              </label>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-2 p-4 bg-muted/30 rounded-lg border border-border">
                <Lock className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
                {unlocked && <Unlock className="h-5 w-5 text-green-600" />}
              </div>

              {!unlocked && (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">PDF Password (if required)</label>
                    <Input
                      type="password"
                      placeholder="Enter password..."
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-10"
                    />
                  </div>

                  <Button onClick={unlockPDF} disabled={loading} className="w-full h-10 text-sm font-medium shadow-sm">
                    {loading ? (
                      <>
                        <LoadingSpinner />
                        <span className="ml-2">Unlocking...</span>
                      </>
                    ) : (
                      <>
                        <Unlock className="h-4 w-4 mr-2" />
                        Unlock PDF
                      </>
                    )}
                  </Button>
                </>
              )}

              {unlocked && (
                <Button className="w-full h-10 text-sm font-medium shadow-sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download Unlocked PDF
                </Button>
              )}
            </div>
          )}
        </div>
      </Card>

      <Card className="p-4 bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800">
        <h3 className="text-sm font-semibold mb-2 text-yellow-900 dark:text-yellow-200">Legal Notice:</h3>
        <p className="text-sm text-yellow-800 dark:text-yellow-300 leading-relaxed">
          Only unlock PDFs that you own or have permission to access. Unauthorized access to password-protected
          documents may be illegal in your jurisdiction.
        </p>
      </Card>

      <Card className="p-4 bg-muted/20 border-border">
        <h3 className="text-sm font-semibold mb-2 text-foreground">How It Works:</h3>
        <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside leading-relaxed">
          <li>Upload your password-protected PDF file</li>
          <li>Enter the password if you know it (optional)</li>
          <li>Click "Unlock PDF" to remove restrictions</li>
          <li>Download the unlocked PDF file</li>
        </ol>
      </Card>
    </div>
  )
}
