"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Copy, Check } from "lucide-react"

export function JWTDecoder() {
  const [token, setToken] = useState("")
  const [decoded, setDecoded] = useState<{ header: any; payload: any; signature: string } | null>(null)
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)

  const decodeJWT = () => {
    setError("")
    setDecoded(null)

    if (!token.trim()) {
      setError("Please enter a JWT token")
      return
    }

    try {
      const parts = token.split(".")
      if (parts.length !== 3) {
        throw new Error("Invalid JWT format")
      }

      const header = JSON.parse(atob(parts[0]))
      const payload = JSON.parse(atob(parts[1]))
      const signature = parts[2]

      setDecoded({ header, payload, signature })
    } catch (err) {
      setError("Invalid JWT token. Please check your input.")
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">JWT Token</label>
        <Textarea
          placeholder="Paste your JWT token here..."
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="min-h-32 font-mono text-sm"
        />
      </div>

      <Button onClick={decodeJWT} className="w-full">
        Decode JWT
      </Button>

      {error && (
        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      {decoded && (
        <div className="space-y-4">
          <Card className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Header</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(JSON.stringify(decoded.header, null, 2))}
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
            <pre className="p-3 bg-muted rounded-md overflow-x-auto text-xs font-mono">
              {JSON.stringify(decoded.header, null, 2)}
            </pre>
          </Card>

          <Card className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Payload</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(JSON.stringify(decoded.payload, null, 2))}
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
            <pre className="p-3 bg-muted rounded-md overflow-x-auto text-xs font-mono">
              {JSON.stringify(decoded.payload, null, 2)}
            </pre>
          </Card>

          <Card className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Signature</h3>
              <Button variant="ghost" size="sm" onClick={() => copyToClipboard(decoded.signature)}>
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
            <pre className="p-3 bg-muted rounded-md overflow-x-auto text-xs font-mono break-all">
              {decoded.signature}
            </pre>
          </Card>
        </div>
      )}
    </div>
  )
}
