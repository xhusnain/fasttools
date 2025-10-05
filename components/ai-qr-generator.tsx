"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Download, QrCode } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"
import QRCode from "qrcode"

export function AiQrGenerator() {
  const [url, setUrl] = useState("")
  const [color, setColor] = useState("#2563eb")
  const [qrImage, setQrImage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const generateQR = async () => {
    if (!url.trim()) return

    setLoading(true)
    try {
      const qrDataUrl = await QRCode.toDataURL(url, {
        width: 400,
        margin: 2,
        color: {
          dark: color,
          light: "#ffffff",
        },
      })
      setQrImage(qrDataUrl)
    } catch (error) {
      console.error("Error generating QR code:", error)
    } finally {
      setLoading(false)
    }
  }

  const downloadQR = () => {
    if (qrImage) {
      const link = document.createElement("a")
      link.download = "qr-code.png"
      link.href = qrImage
      link.click()
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="url">URL or Text</Label>
          <Input
            id="url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="h-11"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="color">QR Code Color</Label>
          <div className="flex gap-2">
            <Input
              id="color"
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="h-11 w-20"
            />
            <Input value={color} onChange={(e) => setColor(e.target.value)} className="h-11 flex-1" />
          </div>
        </div>

        <Button onClick={generateQR} disabled={loading || !url.trim()} className="w-full h-11 text-base">
          {loading ? (
            <>
              <LoadingSpinner className="mr-2" />
              Generating QR Code...
            </>
          ) : (
            <>
              <QrCode className="mr-2 h-5 w-5" />
              Generate QR Code
            </>
          )}
        </Button>
      </div>

      {qrImage && (
        <Card className="p-6 space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Generated QR Code</h3>
            <Button variant="outline" size="sm" onClick={downloadQR}>
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>

          <div className="flex justify-center bg-muted/30 p-8 rounded-lg">
            <img src={qrImage || "/placeholder.svg"} alt="QR Code" className="max-w-full h-auto" />
          </div>

          <p className="text-sm text-muted-foreground text-center">Scan this QR code to access: {url}</p>
        </Card>
      )}
    </div>
  )
}
