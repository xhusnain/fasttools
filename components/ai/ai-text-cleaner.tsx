"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GTextarea } from "@/ui/gtextarea"
import { GCard } from "@/ui/gcard"
import { GCheckbox } from "@/ui/gcheckbox"
import { CheckCircle, Copy, Eraser, Sparkles } from "lucide-react"

const EM_DASH_MODES = [
  { value: "comma", label: "Replace with comma", example: "fast — simple → fast, simple" },
  { value: "hyphen", label: "Replace with hyphen", example: "fast — simple → fast - simple" },
  { value: "remove", label: "Remove entirely", example: "fast — simple → fast simple" },
] as const

type EmDashMode = (typeof EM_DASH_MODES)[number]["value"]

interface CleanOptions {
  emDashes: boolean
  smartQuotes: boolean
  markdown: boolean
  invisibleChars: boolean
  ellipsis: boolean
}

interface CleanStats {
  emDashes: number
  smartQuotes: number
  markdown: number
  invisibleChars: number
  ellipsis: number
}

const INVISIBLE_CHARS = /[\u200B\u200C\u200D\u2060\uFEFF\u00AD]/g
const SPACE_LIKE_CHARS = /[\u00A0\u202F\u2009\u2007]/g

function cleanText(input: string, options: CleanOptions, emDashMode: EmDashMode): { output: string; stats: CleanStats } {
  let output = input
  const stats: CleanStats = { emDashes: 0, smartQuotes: 0, markdown: 0, invisibleChars: 0, ellipsis: 0 }

  if (options.invisibleChars) {
    stats.invisibleChars = (output.match(INVISIBLE_CHARS) || []).length + (output.match(SPACE_LIKE_CHARS) || []).length
    output = output.replace(INVISIBLE_CHARS, "").replace(SPACE_LIKE_CHARS, " ")
  }

  if (options.emDashes) {
    stats.emDashes = (output.match(/—|–/g) || []).length
    if (emDashMode === "comma") {
      output = output.replace(/\s*—\s*/g, ", ").replace(/\s*–\s*/g, ", ")
    } else if (emDashMode === "hyphen") {
      output = output.replace(/\s*—\s*/g, " - ").replace(/\s*–\s*/g, " - ")
    } else {
      output = output.replace(/\s*[—–]\s*/g, " ")
    }
  }

  if (options.smartQuotes) {
    stats.smartQuotes = (output.match(/[‘’“”]/g) || []).length
    output = output.replace(/[‘’]/g, "'").replace(/[“”]/g, '"')
  }

  if (options.ellipsis) {
    stats.ellipsis = (output.match(/…/g) || []).length
    output = output.replace(/…/g, "...")
  }

  if (options.markdown) {
    const markdownMatches =
      (output.match(/\*\*[^*]+\*\*/g) || []).length +
      (output.match(/(^|\s)\*[^*\n]+\*/g) || []).length +
      (output.match(/^#{1,6}\s/gm) || []).length +
      (output.match(/`[^`\n]+`/g) || []).length
    stats.markdown = markdownMatches
    output = output
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/__([^_]+)__/g, "$1")
      .replace(/(^|\s)\*([^*\n]+)\*/g, "$1$2")
      .replace(/(^|\s)_([^_\n]+)_/g, "$1$2")
      .replace(/^#{1,6}\s+/gm, "")
      .replace(/`([^`\n]+)`/g, "$1")
  }

  return { output, stats }
}

interface AiTextCleanerProps {
  focusEmDashes?: boolean
}

export function AiTextCleaner({ focusEmDashes = false }: AiTextCleanerProps) {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [stats, setStats] = useState<CleanStats | null>(null)
  const [copied, setCopied] = useState(false)
  const [emDashMode, setEmDashMode] = useState<EmDashMode>("comma")
  const [options, setOptions] = useState<CleanOptions>({
    emDashes: true,
    smartQuotes: !focusEmDashes,
    markdown: !focusEmDashes,
    invisibleChars: true,
    ellipsis: !focusEmDashes,
  })

  const runClean = () => {
    const result = cleanText(input, options, emDashMode)
    setOutput(result.output)
    setStats(result.stats)
    setCopied(false)
  }

  const copyOutput = async () => {
    try {
      await navigator.clipboard.writeText(output)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (copyError) {
      console.error("Failed to copy:", copyError)
    }
  }

  const toggleOption = (key: keyof CleanOptions) =>
    setOptions((prev) => ({ ...prev, [key]: !prev[key] }))

  const totalFound = stats
    ? stats.emDashes + stats.smartQuotes + stats.markdown + stats.invisibleChars + stats.ellipsis
    : 0

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <GLabel htmlFor="cleaner-input" className="text-base font-semibold">
          Paste Your Text
        </GLabel>
        <GTextarea
          id="cleaner-input"
          placeholder="Paste text from ChatGPT, Claude, Gemini, or any AI assistant..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className="min-h-[160px] text-base border-2 border-primary/30 focus:border-primary"
        />
      </div>

      <div className="space-y-4">
        <GLabel className="text-base font-semibold">What to Clean</GLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <label className="flex items-center gap-3 p-3 rounded-lg border border-border cursor-pointer hover:bg-accent/50">
            <GCheckbox checked={options.emDashes} onCheckedChange={() => toggleOption("emDashes")} />
            <div>
              <span className="font-medium text-sm">Em &amp; en dashes (— –)</span>
              <p className="text-xs text-muted-foreground">The most recognizable AI-writing tell</p>
            </div>
          </label>
          <label className="flex items-center gap-3 p-3 rounded-lg border border-border cursor-pointer hover:bg-accent/50">
            <GCheckbox checked={options.smartQuotes} onCheckedChange={() => toggleOption("smartQuotes")} />
            <div>
              <span className="font-medium text-sm">Smart quotes (&ldquo; &rdquo; &lsquo; &rsquo;)</span>
              <p className="text-xs text-muted-foreground">Convert to plain straight quotes</p>
            </div>
          </label>
          <label className="flex items-center gap-3 p-3 rounded-lg border border-border cursor-pointer hover:bg-accent/50">
            <GCheckbox checked={options.markdown} onCheckedChange={() => toggleOption("markdown")} />
            <div>
              <span className="font-medium text-sm">Markdown leftovers (** ## `)</span>
              <p className="text-xs text-muted-foreground">Bold markers, heading hashes, backticks</p>
            </div>
          </label>
          <label className="flex items-center gap-3 p-3 rounded-lg border border-border cursor-pointer hover:bg-accent/50">
            <GCheckbox checked={options.invisibleChars} onCheckedChange={() => toggleOption("invisibleChars")} />
            <div>
              <span className="font-medium text-sm">Invisible characters</span>
              <p className="text-xs text-muted-foreground">Zero-width spaces, non-breaking spaces, soft hyphens</p>
            </div>
          </label>
          <label className="flex items-center gap-3 p-3 rounded-lg border border-border cursor-pointer hover:bg-accent/50">
            <GCheckbox checked={options.ellipsis} onCheckedChange={() => toggleOption("ellipsis")} />
            <div>
              <span className="font-medium text-sm">Ellipsis character (&hellip;)</span>
              <p className="text-xs text-muted-foreground">Convert to three plain periods</p>
            </div>
          </label>
        </div>
      </div>

      {options.emDashes && (
        <div className="space-y-3">
          <GLabel className="text-base font-semibold">Em Dash Handling</GLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {EM_DASH_MODES.map((mode) => (
              <button
                key={mode.value}
                type="button"
                onClick={() => setEmDashMode(mode.value)}
                aria-pressed={emDashMode === mode.value}
                className={`p-3 rounded-lg border text-left transition-all ${
                  emDashMode === mode.value
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:border-primary/30 hover:bg-accent"
                }`}
              >
                <span className="font-medium text-sm block mb-1">{mode.label}</span>
                <span className={`text-xs ${emDashMode === mode.value ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {mode.example}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      <GButton onClick={runClean} disabled={!input.trim()} className="w-full h-12 text-base font-semibold" size="lg">
        <Eraser className="mr-2 h-5 w-5" />
        Clean Text
      </GButton>

      {stats && (
        <div className="space-y-4 animate-fade-in">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              {totalFound === 0 ? "Nothing to clean — text was already plain" : `${totalFound} artifact${totalFound === 1 ? "" : "s"} cleaned`}
            </span>
            {stats.emDashes > 0 && <span className="px-3 py-1.5 rounded-full bg-muted text-sm">{stats.emDashes} dashes</span>}
            {stats.smartQuotes > 0 && <span className="px-3 py-1.5 rounded-full bg-muted text-sm">{stats.smartQuotes} smart quotes</span>}
            {stats.markdown > 0 && <span className="px-3 py-1.5 rounded-full bg-muted text-sm">{stats.markdown} markdown marks</span>}
            {stats.invisibleChars > 0 && <span className="px-3 py-1.5 rounded-full bg-muted text-sm">{stats.invisibleChars} invisible chars</span>}
            {stats.ellipsis > 0 && <span className="px-3 py-1.5 rounded-full bg-muted text-sm">{stats.ellipsis} ellipses</span>}
          </div>

          <GCard className="p-4">
            <div className="flex items-center justify-between mb-3">
              <GLabel className="text-base font-semibold">Cleaned Text</GLabel>
              <GButton variant="outline" size="sm" onClick={copyOutput} aria-label="Copy cleaned text">
                {copied ? <CheckCircle className="h-4 w-4 text-heading-accent" /> : <Copy className="h-4 w-4" />}
                <span className="ml-2">{copied ? "Copied" : "Copy"}</span>
              </GButton>
            </div>
            <GTextarea value={output} readOnly className="min-h-[160px] text-base" />
          </GCard>
        </div>
      )}
    </div>
  )
}
