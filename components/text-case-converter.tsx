"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Check, Type } from "lucide-react"

export function TextCaseConverter() {
  const [text, setText] = useState("")
  const [copied, setCopied] = useState(false)

  const convertCase = (type: "upper" | "lower" | "title" | "sentence" | "camel" | "snake") => {
    if (!text) return ""

    switch (type) {
      case "upper":
        return text.toUpperCase()
      case "lower":
        return text.toLowerCase()
      case "title":
        return text
          .toLowerCase()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      case "sentence":
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
      case "camel":
        return text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
      case "snake":
        return text.toLowerCase().replace(/\s+/g, "_")
      default:
        return text
    }
  }

  const copyToClipboard = async (convertedText: string) => {
    await navigator.clipboard.writeText(convertedText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <Card className="border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Type className="h-5 w-5 text-primary" />
            Input Text
          </CardTitle>
          <CardDescription>Enter or paste your text below</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Type or paste your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="min-h-[150px] text-sm"
          />
          <p className="text-xs text-muted-foreground mt-2">
            Characters: {text.length} | Words: {text.trim() ? text.trim().split(/\s+/).length : 0}
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { type: "upper" as const, label: "UPPERCASE", desc: "ALL CAPS" },
          { type: "lower" as const, label: "lowercase", desc: "all lowercase" },
          { type: "title" as const, label: "Title Case", desc: "First Letter Capital" },
          { type: "sentence" as const, label: "Sentence case", desc: "First word capital" },
          { type: "camel" as const, label: "camelCase", desc: "camelCaseFormat" },
          { type: "snake" as const, label: "snake_case", desc: "snake_case_format" },
        ].map((item) => {
          const converted = convertCase(item.type)
          return (
            <Card key={item.type} className="border border-border shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-base">{item.label}</CardTitle>
                <CardDescription className="text-xs">{item.desc}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="min-h-[80px] p-3 bg-muted rounded-md text-sm break-words">
                  {converted || <span className="text-muted-foreground">Result will appear here</span>}
                </div>
                <Button
                  onClick={() => copyToClipboard(converted)}
                  disabled={!text}
                  size="sm"
                  variant="outline"
                  className="w-full h-9 text-sm"
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
