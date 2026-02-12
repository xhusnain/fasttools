"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { Copy, Check, Bold, Italic, Strikethrough, List, ListOrdered, Quote, Undo2, Redo2 } from "lucide-react"
import { cn } from "@/lib/utils"

const INITIAL_HTML = "<h1>Hey!</h1><p>Welcome to this html wysiwyg editor</p>"

function ToolbarButton({
  onClick,
  active,
  children,
  title,
}: {
  onClick: () => void
  active?: boolean
  children: React.ReactNode
  title: string
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
      title={title}
      className={cn(
        "p-2 rounded hover:bg-muted/70 transition-colors",
        active && "bg-primary/20 text-primary"
      )}
    >
      {children}
    </button>
  )
}

export function HtmlWysiwygEditor() {
  const editorRef = useRef<HTMLDivElement>(null)
  const [html, setHtml] = useState(INITIAL_HTML)
  const [copied, setCopied] = useState(false)

  const syncHtml = useCallback(() => {
    if (editorRef.current) {
      setHtml(editorRef.current.innerHTML)
    }
  }, [])

  const exec = useCallback((cmd: string, value?: string) => {
    editorRef.current?.focus()
    document.execCommand(cmd, false, value)
    syncHtml()
  }, [syncHtml])

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = INITIAL_HTML
    }
  }, [])

  const handleCopy = useCallback(async () => {
    if (html) {
      await navigator.clipboard.writeText(html)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [html])

  const formattedHtml = html
    .replace(/></g, ">\n<")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .join("\n")

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* WYSIWYG Editor */}
      <div className="space-y-2">
        <div className="flex flex-wrap gap-1 p-2 rounded-t-lg border border-b-0 border-border bg-muted/30">
          <ToolbarButton onClick={() => exec("bold")} title="Bold">
            <Bold className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton onClick={() => exec("italic")} title="Italic">
            <Italic className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton onClick={() => exec("strikeThrough")} title="Strikethrough">
            <Strikethrough className="h-4 w-4" />
          </ToolbarButton>
          <span className="w-px bg-border mx-1" />
          <ToolbarButton onClick={() => exec("formatBlock", "h1")} title="Heading 1">
            <span className="text-xs font-bold">H1</span>
          </ToolbarButton>
          <ToolbarButton onClick={() => exec("formatBlock", "h2")} title="Heading 2">
            <span className="text-xs font-bold">H2</span>
          </ToolbarButton>
          <ToolbarButton onClick={() => exec("formatBlock", "h3")} title="Heading 3">
            <span className="text-xs font-bold">H3</span>
          </ToolbarButton>
          <ToolbarButton onClick={() => exec("formatBlock", "h4")} title="Heading 4">
            <span className="text-xs font-bold">H4</span>
          </ToolbarButton>
          <span className="w-px bg-border mx-1" />
          <ToolbarButton onClick={() => exec("insertUnorderedList")} title="Bullet list">
            <List className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton onClick={() => exec("insertOrderedList")} title="Numbered list">
            <ListOrdered className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton onClick={() => exec("formatBlock", "blockquote")} title="Blockquote">
            <Quote className="h-4 w-4" />
          </ToolbarButton>
          <span className="w-px bg-border mx-1" />
          <ToolbarButton onClick={() => exec("undo")} title="Undo">
            <Undo2 className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton onClick={() => exec("redo")} title="Redo">
            <Redo2 className="h-4 w-4" />
          </ToolbarButton>
        </div>
        <div
          ref={editorRef}
          contentEditable
          onInput={syncHtml}
          onBlur={syncHtml}
          className={cn(
            "min-h-[200px] p-4 rounded-b-lg border border-border",
            "bg-card text-foreground prose prose-sm dark:prose-invert max-w-none",
            "focus:outline-none focus:ring-2 focus:ring-primary/50",
            "[&_h1]:text-2xl [&_h2]:text-xl [&_h3]:text-lg [&_h4]:text-base",
            "[&_ul]:list-disc [&_ol]:list-decimal [&_ul]:pl-6 [&_ol]:pl-6",
            "[&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic"
          )}
          suppressContentEditableWarning
        />
      </div>

      {/* HTML Source */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">HTML Source</span>
          <button
            type="button"
            onClick={handleCopy}
            className="p-1.5 rounded hover:bg-muted/70 transition-colors"
            title="Copy HTML"
          >
            {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
        <pre className="min-h-[200px] p-4 rounded-lg border border-border bg-muted/20 text-sm font-mono overflow-auto whitespace-pre-wrap break-words">
          <code>{formattedHtml || "<!-- HTML will appear here -->"}</code>
        </pre>
      </div>
    </div>
  )
}
