"use client"

import { useMemo, useRef, useState } from "react"
import { marked } from "marked"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GTextarea } from "@/ui/gtextarea"
import { GInput } from "@/ui/ginput"
import { GCard } from "@/ui/gcard"
import { GCheckbox } from "@/ui/gcheckbox"
import { FileDown, MessageSquare, Printer } from "lucide-react"

interface ChatMessage {
  role: "user" | "assistant"
  content: string
}

const USER_MARKERS = /^(you said|you|user|me|human|prompt)$/i
const ASSISTANT_MARKERS = /^(chatgpt said|chatgpt|assistant|ai|claude|gemini|copilot|grok|bot|response|answer)$/i
const MARKER_LINE = /^\s*(?:\*\*|#+\s*)?([A-Za-z][A-Za-z ]{1,14}?)(?:\*\*)?\s*:\s*(.*)$/

function roleForMarker(marker: string): ChatMessage["role"] | null {
  const normalized = marker.trim().toLowerCase()
  if (USER_MARKERS.test(normalized)) return "user"
  if (ASSISTANT_MARKERS.test(normalized)) return "assistant"
  return null
}

export function parseConversation(text: string): ChatMessage[] {
  const messages: ChatMessage[] = []
  let current: ChatMessage | null = null
  let inCodeBlock = false

  for (const line of text.split(/\r?\n/)) {
    if (/^\s*```/.test(line)) inCodeBlock = !inCodeBlock
    const markerMatch = inCodeBlock ? null : line.match(MARKER_LINE)
    const role = markerMatch ? roleForMarker(markerMatch[1]) : null

    if (role) {
      current = { role, content: markerMatch![2] ? markerMatch![2] + "\n" : "" }
      messages.push(current)
      continue
    }
    if (current) {
      current.content += line + "\n"
    } else if (line.trim()) {
      current = { role: "user", content: line + "\n" }
      messages.push(current)
    }
  }

  return messages.map((message) => ({ ...message, content: message.content.trim() })).filter((message) => message.content)
}

function escapeHtml(text: string) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}

interface RenderOptions {
  title: string
  includeDate: boolean
  bubbles: boolean
  fontSize: "small" | "normal" | "large"
  assistantName: string
}

export function buildPrintHtml(messages: ChatMessage[], hasMarkers: boolean, options: RenderOptions) {
  const fontPx = options.fontSize === "small" ? 12 : options.fontSize === "large" ? 16 : 14
  const renderMarkdown = (markdown: string) => marked.parse(markdown, { gfm: true, breaks: true, async: false }) as string
  const dateLine = options.includeDate
    ? `<div class="meta">${new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}</div>`
    : ""

  const body = hasMarkers
    ? messages
        .map((message) => {
          const label = message.role === "user" ? "You" : options.assistantName || "Assistant"
          return `<section class="msg ${message.role}${options.bubbles ? " bubble" : ""}"><div class="label">${escapeHtml(label)}</div><div class="content">${renderMarkdown(message.content)}</div></section>`
        })
        .join("")
    : `<section class="msg document"><div class="content">${renderMarkdown(messages.map((message) => message.content).join("\n\n"))}</div></section>`

  return `<!doctype html><html><head><meta charset="utf-8"><title>${escapeHtml(options.title || "Conversation")}</title><style>
    @page { margin: 18mm; }
    body { font-family: -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-size: ${fontPx}px; line-height: 1.55; color: #1a1a1a; margin: 0; padding: 24px; max-width: 800px; }
    h1.title { font-size: 1.6em; margin: 0 0 4px; }
    .meta { color: #6b7280; font-size: .9em; margin-bottom: 20px; }
    .msg { margin: 0 0 14px; page-break-inside: avoid; }
    .msg .label { font-size: .78em; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: #6b7280; margin-bottom: 4px; }
    .msg.bubble .content { padding: 10px 14px; border-radius: 12px; }
    .msg.user.bubble .content { background: #eef2ff; }
    .msg.assistant.bubble .content { background: #f4f4f5; }
    .msg.user.bubble { margin-left: 12%; } .msg.assistant.bubble { margin-right: 12%; }
    .content p { margin: 0 0 .7em; } .content p:last-child { margin-bottom: 0; }
    .content pre { background: #1f2937; color: #f9fafb; padding: 12px; border-radius: 8px; overflow: auto; font-size: .9em; white-space: pre-wrap; word-break: break-word; }
    .content code { font-family: Menlo, Consolas, monospace; font-size: .92em; }
    .content :not(pre) > code { background: rgba(0,0,0,.06); padding: 1px 5px; border-radius: 4px; }
    .content table { border-collapse: collapse; width: 100%; margin: 8px 0; } .content th, .content td { border: 1px solid #d4d4d8; padding: 5px 8px; text-align: left; } .content th { background: #f4f4f5; }
    .content blockquote { border-left: 3px solid #d4d4d8; margin: 0; padding-left: 12px; color: #52525b; }
    .content img { max-width: 100%; } .content a { color: #2563eb; }
    .footer { margin-top: 28px; padding-top: 10px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: .75em; }
  </style></head><body>
    <h1 class="title">${escapeHtml(options.title || "Conversation")}</h1>${dateLine}${body}
    <div class="footer">Exported with fasttools.store</div>
  </body></html>`
}

export function ChatToPdf() {
  const [text, setText] = useState("")
  const [title, setTitle] = useState("")
  const [assistantName, setAssistantName] = useState("ChatGPT")
  const [includeDate, setIncludeDate] = useState(true)
  const [bubbles, setBubbles] = useState(true)
  const [fontSize, setFontSize] = useState<RenderOptions["fontSize"]>("normal")
  const [showPreview, setShowPreview] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const parsed = useMemo(() => parseConversation(text), [text])
  const hasMarkers = useMemo(() => {
    const roles = new Set(parsed.map((message) => message.role))
    return parsed.length > 1 && roles.size > 1
  }, [parsed])

  const html = useMemo(
    () => (text.trim() ? buildPrintHtml(parsed, hasMarkers, { title, includeDate, bubbles, fontSize, assistantName }) : ""),
    [text, parsed, hasMarkers, title, includeDate, bubbles, fontSize, assistantName]
  )

  const printToPdf = () => {
    setShowPreview(true)
    requestAnimationFrame(() => {
      setTimeout(() => iframeRef.current?.contentWindow?.print(), 150)
    })
  }

  const downloadHtml = () => {
    const blob = new Blob([html], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement("a")
    anchor.href = url
    anchor.download = `${(title || "conversation").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "conversation"}.html`
    document.body.appendChild(anchor)
    anchor.click()
    anchor.remove()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  const userCount = parsed.filter((message) => message.role === "user").length
  const assistantCount = parsed.length - userCount

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <GLabel htmlFor="chat-input" className="text-base font-semibold">
          Paste Your Conversation
        </GLabel>
        <GTextarea
          id="chat-input"
          placeholder={"Open the chat, select all (Ctrl/Cmd + A), copy, and paste here.\n\nYou said:\nHow do I center a div?\n\nChatGPT said:\nUse flexbox: ..."}
          value={text}
          onChange={(event) => setText(event.target.value)}
          className="min-h-[240px] text-sm border-2 border-primary/30 focus:border-primary"
        />
        {text.trim() && (
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            {hasMarkers
              ? `Detected ${userCount} of your messages and ${assistantCount} replies — will format as a chat.`
              : "No speaker labels detected — will format as a single document (Markdown is rendered)."}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <GLabel htmlFor="pdf-title" className="text-sm font-semibold">Document title</GLabel>
          <GInput id="pdf-title" placeholder="e.g. Trip planning with ChatGPT" value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div className="space-y-2">
          <GLabel htmlFor="assistant-name" className="text-sm font-semibold">Assistant label</GLabel>
          <GInput id="assistant-name" placeholder="ChatGPT" value={assistantName} onChange={(event) => setAssistantName(event.target.value)} />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 items-center">
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <GCheckbox checked={bubbles} onCheckedChange={(value) => setBubbles(value === true)} />
          Chat bubbles
        </label>
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <GCheckbox checked={includeDate} onCheckedChange={(value) => setIncludeDate(value === true)} />
          Include date
        </label>
        <div className="flex items-center gap-2 text-sm">
          <span>Text size:</span>
          {(["small", "normal", "large"] as const).map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setFontSize(size)}
              aria-pressed={fontSize === size}
              className={`px-3 py-1 rounded-md border text-sm capitalize ${
                fontSize === size ? "border-primary bg-primary text-primary-foreground" : "border-border hover:bg-accent"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <GButton onClick={printToPdf} disabled={!text.trim()} className="h-12 text-base font-semibold" size="lg">
          <Printer className="mr-2 h-5 w-5" />
          Save as PDF
        </GButton>
        <GButton onClick={downloadHtml} variant="outline" disabled={!text.trim()} className="h-12 text-base font-semibold" size="lg">
          <FileDown className="mr-2 h-5 w-5" />
          Download as HTML
        </GButton>
      </div>
      <p className="text-sm text-muted-foreground -mt-4">
        &ldquo;Save as PDF&rdquo; opens your browser&rsquo;s print dialog — choose <strong>Save as PDF</strong> as the destination. Nothing is uploaded; the PDF is made on your device.
      </p>

      {text.trim() && (
        <GCard className="p-2">
          <div className="flex items-center justify-between px-2 py-1">
            <GLabel className="text-sm font-semibold">Preview</GLabel>
            <GButton variant="ghost" size="sm" onClick={() => setShowPreview((value) => !value)}>
              {showPreview ? "Hide" : "Show"}
            </GButton>
          </div>
          <iframe
            ref={iframeRef}
            title="PDF preview"
            sandbox="allow-same-origin allow-modals"
            srcDoc={html}
            className={`w-full rounded-md bg-white border-0 transition-all ${showPreview ? "h-[560px]" : "h-0"}`}
          />
        </GCard>
      )}
    </div>
  )
}
