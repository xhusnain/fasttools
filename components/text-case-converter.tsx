"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Check, Type, Download, RotateCcw, Settings, Zap } from "lucide-react"

export function TextCaseConverter() {
  const [text, setText] = useState("")
  const [copied, setCopied] = useState(false)
  const [cleanup, setCleanup] = useState(true)
  const [preserveFormatting, setPreserveFormatting] = useState(false)

  const cleanText = (input: string) => {
    if (!cleanup) return input
    return input
      .replace(/\s+/g, " ") // Replace multiple spaces with single space
      .replace(/\n\s*\n/g, "\n") // Replace multiple newlines with single newline
      .trim()
  }

  const convertCase = (type: "upper" | "lower" | "title" | "sentence" | "camel" | "snake" | "kebab" | "pascal" | "dot" | "swap") => {
    if (!text) return ""
    
    const processedText = cleanText(text)

    switch (type) {
      case "upper":
        return processedText.toUpperCase()
      case "lower":
        return processedText.toLowerCase()
      case "title":
        return processedText
          .toLowerCase()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      case "sentence":
        return processedText.charAt(0).toUpperCase() + processedText.slice(1).toLowerCase()
      case "camel":
        return processedText.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
      case "snake":
        return processedText.toLowerCase().replace(/\s+/g, "_")
      case "kebab":
        return processedText.toLowerCase().replace(/\s+/g, "-")
      case "pascal":
        return processedText
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
          .replace(/^[a-z]/, (chr) => chr.toUpperCase())
      case "dot":
        return processedText.toLowerCase().replace(/\s+/g, ".")
      case "swap":
        return processedText
          .split("")
          .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
          .join("")
      default:
        return processedText
    }
  }

  const copyToClipboard = async (convertedText: string) => {
    await navigator.clipboard.writeText(convertedText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadAll = () => {
    const cases = [
      { type: "upper" as const, label: "UPPERCASE" },
      { type: "lower" as const, label: "lowercase" },
      { type: "title" as const, label: "Title Case" },
      { type: "sentence" as const, label: "Sentence case" },
      { type: "camel" as const, label: "camelCase" },
      { type: "snake" as const, label: "snake_case" },
      { type: "kebab" as const, label: "kebab-case" },
      { type: "pascal" as const, label: "PascalCase" },
      { type: "dot" as const, label: "dot.case" },
      { type: "swap" as const, label: "Swap Case" }
    ]
    
    const content = cases.map(caseItem => 
      `${caseItem.label}:\n${convertCase(caseItem.type)}\n`
    ).join("\n")
    
    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "text-case-conversions.txt"
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <Card className="border border-border shadow bg-card">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2 text-card-foreground">
            <Type className="h-5 w-5 text-primary" />
            Input Text
          </CardTitle>
          <CardDescription className="text-muted-foreground">Enter or paste your text below</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Type or paste your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="min-h-[150px] text-sm bg-background border-border text-foreground placeholder:text-muted-foreground"
          />
          <div className="flex items-center justify-between mt-2">
            <p className="text-xs text-muted-foreground">
              Characters: {text.length} | Words: {text.trim() ? text.trim().split(/\s+/).length : 0}
            </p>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => setText("")}
                size="sm"
                variant="outline"
                className="h-8 text-xs border-border text-foreground hover:bg-accent/10"
              >
                <RotateCcw className="h-3 w-3 mr-1" />
                Clear
              </Button>
              <Button
                onClick={downloadAll}
                disabled={!text}
                size="sm"
                className="h-8 text-xs bg-primary hover:bg-primary/90 text-white"
              >
                <Download className="h-3 w-3 mr-1" />
                Download All
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Options */}
      <Card className="border border-border shadow bg-card">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2 text-card-foreground">
            <Settings className="h-5 w-5 text-primary" />
            Advanced Options
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-muted-foreground text-sm">
              <input
                type="checkbox"
                checked={cleanup}
                onChange={(e) => setCleanup(e.target.checked)}
                className="rounded border-border bg-card"
              />
              Clean up extra spaces
            </label>
            <label className="flex items-center gap-2 text-muted-foreground text-sm">
              <input
                type="checkbox"
                checked={preserveFormatting}
                onChange={(e) => setPreserveFormatting(e.target.checked)}
                className="rounded border-border bg-card"
              />
              Preserve formatting
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Conversion Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4">
        {[
          { type: "upper" as const, label: "UPPERCASE", desc: "ALL CAPS", color: "red" },
          { type: "lower" as const, label: "lowercase", desc: "all lowercase", color: "green" },
          { type: "title" as const, label: "Title Case", desc: "First Letter Capital", color: "blue" },
          { type: "sentence" as const, label: "Sentence case", desc: "First word capital", color: "purple" },
          { type: "camel" as const, label: "camelCase", desc: "camelCaseFormat", color: "yellow" },
          { type: "snake" as const, label: "snake_case", desc: "snake_case_format", color: "orange" },
          { type: "kebab" as const, label: "kebab-case", desc: "kebab-case-format", color: "pink" },
          { type: "pascal" as const, label: "PascalCase", desc: "PascalCaseFormat", color: "cyan" },
          { type: "dot" as const, label: "dot.case", desc: "dot.case.format", color: "indigo" },
          { type: "swap" as const, label: "Swap Case", desc: "sWAP cASE", color: "teal" },
        ].map((item) => {
          const converted = convertCase(item.type)
          return (
            <Card key={item.type} className="border border-border shadow bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
              <CardHeader>
                <CardTitle className="text-base text-card-foreground">{item.label}</CardTitle>
                <CardDescription className="text-xs text-muted-foreground">{item.desc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="min-h-[80px] p-3 bg-card rounded-md text-sm break-words text-card-foreground border border-border">
                  {converted || <span className="text-muted-foreground">Result will appear here</span>}
                </div>
                <Button
                  onClick={() => copyToClipboard(converted)}
                  disabled={!text}
                  size="sm"
                  className="w-full h-8 text-xs font-semibold shadow hover:shadow-md transition-all duration-300 bg-primary hover:bg-primary/90 text-white"
                >
                  {copied ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
