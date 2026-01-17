"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GTextarea } from "@/ui/gtextarea"

import { Copy, Check } from "lucide-react"
import { convertHtmlToMarkdown } from "@/lib/markdown-utils"

export function HTMLToMarkdown() {
  const [html, setHtml] = useState("")
  const [markdown, setMarkdown] = useState("")
  const [copied, setCopied] = useState(false)

  const convertToMarkdown = () => {
    const md = convertHtmlToMarkdown(html)
    setMarkdown(md)
  }

  const copyToClipboard = () => {
    void navigator.clipboard.writeText(markdown)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">HTML Input</label>
        <GTextarea
          placeholder="Paste your HTML here..."
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          className="min-h-48 font-mono text-sm"
        />
      </div>

      <GButton onClick={convertToMarkdown} className="w-full" disabled={!html.trim()}>
        Convert to Markdown
      </GButton>

      {markdown && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-foreground">Markdown Output</label>
            <GButton variant="ghost" size="sm" onClick={copyToClipboard}>
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
            </GButton>
          </div>
          <GTextarea value={markdown} readOnly className="min-h-48 font-mono text-sm" />
        </div>
      )}
    </div>
  )
}
