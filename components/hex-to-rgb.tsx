"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

export function HexToRGB() {
  const [hex, setHex] = useState("#2563eb")
  const [rgb, setRgb] = useState("")
  const [copied, setCopied] = useState(false)

  const hexToRgb = (hexValue: string) => {
    const cleanHex = hexValue.replace("#", "")
    if (cleanHex.length !== 6) return null

    const r = Number.parseInt(cleanHex.substring(0, 2), 16)
    const g = Number.parseInt(cleanHex.substring(2, 4), 16)
    const b = Number.parseInt(cleanHex.substring(4, 6), 16)

    return `rgb(${r}, ${g}, ${b})`
  }

  const handleHexChange = (value: string) => {
    setHex(value)
    const rgbValue = hexToRgb(value)
    if (rgbValue) {
      setRgb(rgbValue)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(rgb)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Hex Color</label>
        <Input
          type="text"
          placeholder="#2563eb"
          value={hex}
          onChange={(e) => handleHexChange(e.target.value)}
          className="font-mono"
        />
      </div>

      {rgb && (
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-24 w-24 rounded-lg border-2 border-border" style={{ backgroundColor: hex }} />
            <div className="flex-1 space-y-2">
              <div>
                <p className="text-sm text-muted-foreground">RGB Value</p>
                <p className="font-mono text-lg font-medium">{rgb}</p>
              </div>
              <Button variant="outline" size="sm" onClick={copyToClipboard}>
                {copied ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy RGB
                  </>
                )}
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
