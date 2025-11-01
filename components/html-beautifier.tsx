"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Copy, Check, Download, Sparkles, AlertCircle, CheckCircle2 } from "lucide-react"

const SAMPLE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sample Page</title>
<style>body{font-family:Arial,sans-serif;margin:20px;}.container{max-width:800px;margin:0 auto;}</style>
</head>
<body>
<div class="container">
<h1>Welcome to HTML Beautifier</h1>
<p>This is a sample HTML document that demonstrates beautification.</p>
<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>
<button onclick="alert('Hello!')">Click Me</button>
</div>
</body>
</html>`

export function HTMLBeautifier() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [mode, setMode] = useState<"beautify" | "minify">("beautify")
  const [copied, setCopied] = useState(false)
  const [indentSize, setIndentSize] = useState(2)
  const [removeComments, setRemoveComments] = useState(false)
  const [isValid, setIsValid] = useState<boolean | null>(null)

  const beautifyHTML = (html: string) => {
    let processedHTML = html
    
    // Remove comments if option is enabled
    if (removeComments) {
      processedHTML = processedHTML.replace(/<!--[\s\S]*?-->/g, "")
    }

    let formatted = ""
    let indent = 0
    const tab = " ".repeat(indentSize)

    processedHTML.split(/>\s*</).forEach((node) => {
      if (node.match(/^\/\w/)) indent--
      formatted += tab.repeat(indent) + "<" + node + ">\n"
      if (node.match(/^<?\w[^>]*[^/]$/) && !node.startsWith("input")) indent++
    })

    return formatted.substring(1, formatted.length - 2)
  }

  const minifyHTML = (html: string) => {
    let processedHTML = html
    
    // Remove comments if option is enabled
    if (removeComments) {
      processedHTML = processedHTML.replace(/<!--[\s\S]*?-->/g, "")
    }
    
    return processedHTML.replace(/\s+/g, " ").replace(/>\s+</g, "><").trim()
  }

  const validateHTML = (html: string) => {
    try {
      // Basic validation checks
      const openTags = html.match(/<\w+[^>]*>/g) || []
      const closeTags = html.match(/<\/\w+>/g) || []
      const selfClosing = html.match(/<\w+[^>]*\/>/g) || []
      
      // Extract tag names
      const openTagNames = openTags.map(tag => tag.match(/<(\w+)/)?.[1]).filter(Boolean)
      const closeTagNames = closeTags.map(tag => tag.match(/<\/(\w+)>/)?.[1]).filter(Boolean)
      
      // Check if opening and closing tags roughly match (excluding self-closing)
      const hasDoctype = html.toLowerCase().includes('<!doctype')
      const hasBasicStructure = html.includes('<html') || html.includes('<div') || html.includes('<span')
      
      if (!hasBasicStructure) {
        return false
      }
      
      return true
    } catch (error) {
      return false
    }
  }

  const loadSampleHTML = () => {
    setInput(SAMPLE_HTML)
    setOutput("")
    setIsValid(null)
  }

  const downloadHTML = () => {
    if (!output) return
    
    const blob = new Blob([output], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = mode === "beautify" ? "beautified.html" : "minified.html"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const getStats = (text: string) => {
    const lines = text.split("\n").length
    const chars = text.length
    const charsNoSpaces = text.replace(/\s/g, "").length
    return { lines, chars, charsNoSpaces }
  }

  const processHTML = () => {
    if (!input.trim()) return

    // Validate HTML
    const valid = validateHTML(input)
    setIsValid(valid)

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

  const inputStats = input ? getStats(input) : null
  const outputStats = output ? getStats(output) : null

  return (
    <div className="space-y-6">
      {/* Mode Selection */}
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

      {/* Format Options */}
      <div className="p-4 rounded-lg bg-muted/30 border border-border space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Format Options</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="indent" className="text-sm">Indent Size</Label>
            <select
              id="indent"
              value={indentSize}
              onChange={(e) => setIndentSize(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-md border border-border bg-background text-sm"
            >
              <option value={2}>2 spaces</option>
              <option value={4}>4 spaces</option>
              <option value={8}>8 spaces (tab)</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="comments" className="text-sm">HTML Comments</Label>
            <select
              id="comments"
              value={removeComments ? "remove" : "keep"}
              onChange={(e) => setRemoveComments(e.target.value === "remove")}
              className="w-full px-3 py-2 rounded-md border border-border bg-background text-sm"
            >
              <option value="keep">Keep comments</option>
              <option value="remove">Remove comments</option>
            </select>
          </div>
        </div>
      </div>

      {/* HTML Input */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-foreground">HTML Input</label>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={loadSampleHTML}
            className="gap-1.5 text-xs"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Try Sample HTML
          </Button>
        </div>
        <Textarea
          placeholder="Paste your HTML here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="min-h-48 font-mono text-sm border-2 border-orange-300 focus:border-orange-500"
        />
        {inputStats && (
          <div className="flex gap-4 text-xs text-muted-foreground">
            <span>{inputStats.lines} lines</span>
            <span>{inputStats.chars} characters</span>
            <span>{inputStats.charsNoSpaces} (no spaces)</span>
          </div>
        )}
      </div>

      {/* Process Button */}
      <Button onClick={processHTML} className="w-full" disabled={!input.trim()}>
        {mode === "beautify" ? "Beautify HTML" : "Minify HTML"}
      </Button>

      {/* Validation Status */}
      {isValid !== null && (
        <div className={`flex items-center gap-2 p-3 rounded-lg border ${
          isValid 
            ? "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900" 
            : "bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-900"
        }`}>
          {isValid ? (
            <>
              <CheckCircle2 className="h-4 w-4 text-heading-accent flex-shrink-0" />
              <span className="text-sm text-heading-accent">HTML structure looks good!</span>
            </>
          ) : (
            <>
              <AlertCircle className="h-4 w-4 text-foreground flex-shrink-0" />
              <span className="text-sm text-foreground">HTML may have issues, but formatting will proceed</span>
            </>
          )}
        </div>
      )}

      {/* Output Section */}
      {output && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-foreground">Output</label>
            <div className="flex gap-2">
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
              <Button variant="ghost" size="sm" onClick={downloadHTML}>
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
          <Textarea value={output} readOnly className="min-h-48 font-mono text-sm border-2 border-green-300 focus:border-green-500" />
          {outputStats && (
            <div className="flex gap-4 text-xs text-muted-foreground">
              <span>{outputStats.lines} lines</span>
              <span>{outputStats.chars} characters</span>
              <span>{outputStats.charsNoSpaces} (no spaces)</span>
              {inputStats && (
                <span className={inputStats.chars > outputStats.chars ? "text-heading-accent font-medium" : "text-foreground font-medium"}>
                  {inputStats.chars > outputStats.chars ? "↓" : "↑"} {Math.abs(((outputStats.chars - inputStats.chars) / inputStats.chars) * 100).toFixed(1)}%
                </span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
