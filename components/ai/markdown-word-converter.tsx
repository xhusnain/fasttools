"use client"

import { useRef, useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GTextarea } from "@/ui/gtextarea"
import { GCard } from "@/ui/gcard"
import { GAlert, GAlertDescription } from "@/ui/galert"
import { AlertCircle, CheckCircle, Copy, Download, Eye, FileText, Upload } from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"
import type { ConversionStats } from "@/lib/markdown-docx"

const SAMPLE_MARKDOWN = `# Project Update

Paste **Markdown** from ChatGPT, Claude, Notion, or GitHub here.

## What converts
- Headings, paragraphs, and *inline* formatting
- Bullet and numbered lists (nested too)
- Tables, code blocks, quotes, and links

| Feature | Status |
|---------|--------|
| Tables  | Yes    |
| Links   | Yes    |
`

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement("a")
  anchor.href = url
  anchor.download = filename
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

function filenameFromMarkdown(markdown: string, extension: string) {
  const heading = markdown.match(/^#\s+(.+)$/m)?.[1]
  const base = (heading || "document").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60) || "document"
  return `${base}.${extension}`
}

export function MarkdownToWord() {
  const [markdown, setMarkdown] = useState("")
  const [previewHtml, setPreviewHtml] = useState<string | null>(null)
  const [stats, setStats] = useState<ConversionStats | null>(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const loadFile = async (file: File | undefined) => {
    if (!file) return
    setMarkdown(await file.text())
    setPreviewHtml(null)
    setStats(null)
  }

  const showPreview = async () => {
    setError(null)
    try {
      const { markdownToPreviewHtml } = await import("@/lib/markdown-docx")
      setPreviewHtml(markdownToPreviewHtml(markdown))
    } catch (previewError) {
      console.error(previewError)
      setError("Could not render the preview. Check the Markdown and try again.")
    }
  }

  const convert = async () => {
    if (!markdown.trim()) return
    setBusy(true)
    setError(null)
    try {
      const { markdownToDocxBlob } = await import("@/lib/markdown-docx")
      const result = await markdownToDocxBlob(markdown)
      setStats(result.stats)
      downloadBlob(result.blob, filenameFromMarkdown(markdown, "docx"))
    } catch (conversionError) {
      console.error("Markdown to Word failed:", conversionError)
      setError("Conversion failed. The Markdown may contain something unsupported — try simplifying it.")
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <GLabel htmlFor="markdown-input" className="text-base font-semibold">
            Your Markdown
          </GLabel>
          <div className="flex gap-2">
            <GButton variant="outline" size="sm" onClick={() => setMarkdown(SAMPLE_MARKDOWN)} disabled={busy}>
              Load sample
            </GButton>
            <GButton variant="outline" size="sm" onClick={() => fileInputRef.current?.click()} disabled={busy}>
              <Upload className="h-4 w-4 mr-1.5" />
              Upload .md
            </GButton>
            <input
              ref={fileInputRef}
              type="file"
              accept=".md,.markdown,.txt,text/markdown,text/plain"
              className="hidden"
              onChange={(event) => loadFile(event.target.files?.[0])}
            />
          </div>
        </div>
        <GTextarea
          id="markdown-input"
          placeholder="Paste Markdown here — from ChatGPT, Claude, Notion, Obsidian, GitHub, anywhere..."
          value={markdown}
          onChange={(event) => setMarkdown(event.target.value)}
          className="min-h-[260px] text-sm font-mono border-2 border-primary/30 focus:border-primary"
          disabled={busy}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <GButton onClick={convert} disabled={busy || !markdown.trim()} className="h-12 text-base font-semibold" size="lg">
          {busy ? (
            <>
              <LoadingSpinner className="mr-2" />
              Building .docx...
            </>
          ) : (
            <>
              <Download className="mr-2 h-5 w-5" />
              Download Word (.docx)
            </>
          )}
        </GButton>
        <GButton onClick={showPreview} variant="outline" disabled={busy || !markdown.trim()} className="h-12 text-base font-semibold" size="lg">
          <Eye className="mr-2 h-5 w-5" />
          Preview Formatting
        </GButton>
      </div>

      {error && (
        <GAlert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <GAlertDescription>{error}</GAlertDescription>
        </GAlert>
      )}

      {stats && (
        <div className="flex flex-wrap gap-2 animate-fade-in">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <CheckCircle className="h-4 w-4" />
            Word file downloaded
          </span>
          {stats.headings > 0 && <span className="px-3 py-1.5 rounded-full bg-muted text-sm">{stats.headings} headings</span>}
          {stats.paragraphs > 0 && <span className="px-3 py-1.5 rounded-full bg-muted text-sm">{stats.paragraphs} paragraphs</span>}
          {stats.lists > 0 && <span className="px-3 py-1.5 rounded-full bg-muted text-sm">{stats.lists} lists</span>}
          {stats.tables > 0 && <span className="px-3 py-1.5 rounded-full bg-muted text-sm">{stats.tables} tables</span>}
          {stats.codeBlocks > 0 && <span className="px-3 py-1.5 rounded-full bg-muted text-sm">{stats.codeBlocks} code blocks</span>}
        </div>
      )}

      {previewHtml && (
        <GCard className="p-2 animate-fade-in">
          <iframe
            title="Document preview"
            sandbox="allow-same-origin"
            srcDoc={previewHtml}
            className="w-full h-[480px] rounded-md bg-white border-0"
          />
        </GCard>
      )}

      <p className="text-sm text-muted-foreground">
        Everything runs in your browser — your text never leaves your device. Images referenced by URL are noted as
        placeholders rather than embedded.
      </p>
    </div>
  )
}

export function WordToMarkdown() {
  const [markdown, setMarkdown] = useState("")
  const [filename, setFilename] = useState("")
  const [warnings, setWarnings] = useState(0)
  const [busy, setBusy] = useState(false)
  const [copied, setCopied] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const convertFile = async (file: File | undefined) => {
    if (!file) return
    if (!/\.docx$/i.test(file.name)) {
      setError("Please choose a .docx file. Older .doc files need to be re-saved as .docx in Word first.")
      return
    }
    setBusy(true)
    setError(null)
    setMarkdown("")
    try {
      const { docxToMarkdown } = await import("@/lib/markdown-docx")
      const result = await docxToMarkdown(await file.arrayBuffer())
      setMarkdown(result.markdown)
      setWarnings(result.warnings)
      setFilename(file.name.replace(/\.docx$/i, ""))
    } catch (conversionError) {
      console.error("Word to Markdown failed:", conversionError)
      setError("Couldn't read that file. Make sure it's a valid .docx document.")
    } finally {
      setBusy(false)
    }
  }

  const copyMarkdown = async () => {
    try {
      await navigator.clipboard.writeText(markdown)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (copyError) {
      console.error("Failed to copy:", copyError)
    }
  }

  const wordCount = markdown.trim() ? markdown.trim().split(/\s+/).length : 0

  return (
    <div className="space-y-8">
      <div
        onDragOver={(event) => {
          event.preventDefault()
          setDragging(true)
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(event) => {
          event.preventDefault()
          setDragging(false)
          convertFile(event.dataTransfer.files?.[0])
        }}
        className={`rounded-xl border-2 border-dashed p-10 text-center transition-colors ${
          dragging ? "border-primary bg-primary/5" : "border-primary/30 hover:border-primary/50"
        }`}
      >
        <FileText className="h-10 w-10 mx-auto text-primary mb-3" />
        <p className="font-semibold mb-1">Drop a .docx file here</p>
        <p className="text-sm text-muted-foreground mb-4">or</p>
        <GButton onClick={() => fileInputRef.current?.click()} disabled={busy} size="lg">
          {busy ? (
            <>
              <LoadingSpinner className="mr-2" />
              Converting...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-5 w-5" />
              Choose Word File
            </>
          )}
        </GButton>
        <input
          ref={fileInputRef}
          type="file"
          accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="hidden"
          onChange={(event) => convertFile(event.target.files?.[0])}
        />
      </div>

      {error && (
        <GAlert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <GAlertDescription>{error}</GAlertDescription>
        </GAlert>
      )}

      {markdown && (
        <div className="space-y-4 animate-fade-in">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <CheckCircle className="h-4 w-4" />
                Converted
              </span>
              <span className="px-3 py-1.5 rounded-full bg-muted text-sm">{wordCount.toLocaleString()} words</span>
              <span className="px-3 py-1.5 rounded-full bg-muted text-sm">{markdown.length.toLocaleString()} characters</span>
              {warnings > 0 && (
                <span className="px-3 py-1.5 rounded-full bg-muted text-sm">{warnings} element{warnings === 1 ? "" : "s"} had no Markdown equivalent</span>
              )}
            </div>
            <div className="flex gap-2">
              <GButton variant="outline" size="sm" onClick={copyMarkdown}>
                {copied ? <CheckCircle className="h-4 w-4 text-heading-accent" /> : <Copy className="h-4 w-4" />}
                <span className="ml-2">{copied ? "Copied" : "Copy"}</span>
              </GButton>
              <GButton
                size="sm"
                onClick={() => downloadBlob(new Blob([markdown], { type: "text/markdown" }), `${filename || "document"}.md`)}
              >
                <Download className="h-4 w-4 mr-2" />
                Download .md
              </GButton>
            </div>
          </div>
          <GTextarea value={markdown} readOnly className="min-h-[360px] text-sm font-mono" />
        </div>
      )}

      <p className="text-sm text-muted-foreground">
        Conversion happens entirely in your browser — the document is never uploaded. Headings, lists, tables, bold,
        italic, and links carry over; embedded images and complex layouts don&rsquo;t survive the trip to plain Markdown.
      </p>
    </div>
  )
}
