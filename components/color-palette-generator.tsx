"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Copy, Check, RefreshCw } from "lucide-react"

export function ColorPaletteGenerator() {
  const [palette, setPalette] = useState<string[]>([])
  const [copied, setCopied] = useState<number | null>(null)

  const generateRandomColor = () => {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
    )
  }

  const generatePalette = () => {
    const newPalette = Array.from({ length: 5 }, () => generateRandomColor())
    setPalette(newPalette)
  }

  const copyToClipboard = (color: string, index: number) => {
    navigator.clipboard.writeText(color)
    setCopied(index)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="space-y-6">
      <Button onClick={generatePalette} className="w-full">
        <RefreshCw className="h-4 w-4 mr-2" />
        Generate Color Palette
      </Button>

      {palette.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {palette.map((color, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-32" style={{ backgroundColor: color }} />
              <div className="p-4 space-y-2">
                <p className="font-mono text-sm font-medium text-center">{color}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent"
                  onClick={() => copyToClipboard(color, index)}
                >
                  {copied === index ? (
                    <>
                      <Check className="h-3 w-3 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 mr-2" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {palette.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <p>Click the button above to generate a color palette</p>
        </div>
      )}
    </div>
  )
}
