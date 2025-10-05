"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Copy, Check } from "lucide-react"

export function HTMLBeautifier() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [mode, setMode] = useState<"beautify" | "minify">("beautify")
  const [copied, setCopied] = useState(false)

  const beautifyHTML = (html: string) => {
    let formatted = ""
    let indent = 0
    const tab = "  "

    html.split(/>\s*</).forEach((node) => {
      if (node.match(/^\/\w/)) indent--
      formatted += tab.repeat(indent) + "<" + node + ">\n"
      if (node.match(/^<?\w[^>]*[^/]$/) && !node.startsWith("input")) indent++
    })

    return formatted.substring(1, formatted.length - 2)
  }

  const minifyHTML = (html: string) => {
    return html.replace(/\s+/g, " ").replace(/>\s+</g, "><").trim()
  }

  const processHTML = () => {
    if (!input.trim()) return

    if (mode === "beautify") {
      setOutput(beautifyHTML(input))
    } else {
      setOutput(minifyHTML(input))
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <Button
          variant={mode === "beautify" ? "default" : "outline"}
          onClick={() => setMode("beautify")}
          className="flex-1"
        >
          Beautify
        </Button>
        <Button
          variant={mode === "minify" ? "default" : "outline"}
          onClick={() => setMode("minify")}
          className="flex-1"
        >
          Minify
        </Button>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">HTML Input</label>
        <Textarea
          placeholder="Paste your HTML here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="min-h-48 font-mono text-sm"
        />
      </div>

      <Button onClick={processHTML} className="w-full" disabled={!input.trim()}>
        {mode === "beautify" ? "Beautify HTML" : "Minify HTML"}
      </Button>

      {output && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-foreground">Output</label>
            <Button variant="ghost" size="sm" onClick={copyToClipboard}>
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </>
              )}
            </Button>
          </div>
          <Textarea value={output} readOnly className="min-h-48 font-mono text-sm" />
        </div>
      )}
    </div>
  )
}
