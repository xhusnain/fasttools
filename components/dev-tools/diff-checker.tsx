"use client"

import { useState, useMemo, useCallback } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GTextarea } from "@/ui/gtextarea"
import { GTabs, GTabsList, GTabsTrigger, GTabsContent } from "@/ui/gtabs"
import { GBadge } from "@/ui/gbadge"
import { cn } from "@/lib/utils"
import {
  ArrowLeftRight,
  Copy,
  Check,
  Download,
  RotateCcw,
  FileText,
  Plus,
  Minus,
  Equal,
  Settings,
} from "lucide-react"

// === Myers-like LCS diff algorithm ===
type DiffOp = "equal" | "add" | "remove"

interface LineDiff {
  op: DiffOp
  leftLine?: string
  rightLine?: string
  leftNumber?: number
  rightNumber?: number
}

interface CharDiff {
  op: DiffOp
  text: string
}

function lcs(a: string[], b: string[]): number[][] {
  const m = a.length
  const n = b.length
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp
}

function diffLines(a: string[], b: string[]): LineDiff[] {
  const dp = lcs(a, b)
  const result: LineDiff[] = []
  let i = a.length
  let j = b.length

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && a[i - 1] === b[j - 1]) {
      result.unshift({ op: "equal", leftLine: a[i - 1], rightLine: b[j - 1], leftNumber: i, rightNumber: j })
      i--; j--
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      result.unshift({ op: "add", rightLine: b[j - 1], rightNumber: j })
      j--
    } else if (i > 0) {
      result.unshift({ op: "remove", leftLine: a[i - 1], leftNumber: i })
      i--
    }
  }
  return result
}

// Character-level diff using LCS on characters
function diffChars(a: string, b: string): CharDiff[] {
  const charsA = Array.from(a)
  const charsB = Array.from(b)
  const dp = lcs(charsA, charsB)
  const result: CharDiff[] = []
  let i = charsA.length
  let j = charsB.length

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && charsA[i - 1] === charsB[j - 1]) {
      result.unshift({ op: "equal", text: charsA[i - 1] })
      i--; j--
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      result.unshift({ op: "add", text: charsB[j - 1] })
      j--
    } else if (i > 0) {
      result.unshift({ op: "remove", text: charsA[i - 1] })
      i--
    }
  }

  // Merge consecutive same-op characters
  const merged: CharDiff[] = []
  for (const c of result) {
    const last = merged[merged.length - 1]
    if (last && last.op === c.op) last.text += c.text
    else merged.push({ ...c })
  }
  return merged
}

// Normalize text based on options
function normalizeText(text: string, ignoreWhitespace: boolean, ignoreCase: boolean): string {
  let result = text
  if (ignoreCase) result = result.toLowerCase()
  if (ignoreWhitespace) result = result.replace(/\s+/g, " ").trim()
  return result
}

export function DiffChecker() {
  const [leftText, setLeftText] = useState("")
  const [rightText, setRightText] = useState("")
  const [viewMode, setViewMode] = useState<"side-by-side" | "inline" | "unified">("side-by-side")
  const [ignoreWhitespace, setIgnoreWhitespace] = useState(false)
  const [ignoreCase, setIgnoreCase] = useState(false)
  const [showCharDiff, setShowCharDiff] = useState(true)
  const [copied, setCopied] = useState(false)

  const diff = useMemo(() => {
    if (!leftText && !rightText) return []
    const leftLines = leftText.split("\n")
    const rightLines = rightText.split("\n")

    if (ignoreWhitespace || ignoreCase) {
      const normLeft = leftLines.map(l => normalizeText(l, ignoreWhitespace, ignoreCase))
      const normRight = rightLines.map(l => normalizeText(l, ignoreWhitespace, ignoreCase))
      const rawDiff = diffLines(normLeft, normRight)
      // Map back to original lines
      return rawDiff.map(d => ({
        ...d,
        leftLine: d.leftNumber ? leftLines[d.leftNumber - 1] : undefined,
        rightLine: d.rightNumber ? rightLines[d.rightNumber - 1] : undefined,
      }))
    }

    return diffLines(leftLines, rightLines)
  }, [leftText, rightText, ignoreWhitespace, ignoreCase])

  const stats = useMemo(() => {
    const added = diff.filter(d => d.op === "add").length
    const removed = diff.filter(d => d.op === "remove").length
    const unchanged = diff.filter(d => d.op === "equal").length
    return { added, removed, unchanged, total: diff.length }
  }, [diff])

  const handleSwap = useCallback(() => {
    setLeftText(rightText)
    setRightText(leftText)
  }, [leftText, rightText])

  const handleClear = useCallback(() => {
    setLeftText("")
    setRightText("")
  }, [])

  const exportDiff = useCallback(() => {
    const lines: string[] = []
    lines.push(`--- Original`)
    lines.push(`+++ Modified`)
    for (const d of diff) {
      if (d.op === "equal") lines.push(`  ${d.leftLine}`)
      else if (d.op === "remove") lines.push(`- ${d.leftLine}`)
      else if (d.op === "add") lines.push(`+ ${d.rightLine}`)
    }
    return lines.join("\n")
  }, [diff])

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(exportDiff())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [exportDiff])

  const handleDownload = useCallback(() => {
    const blob = new Blob([exportDiff()], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `diff-${Date.now()}.diff`
    a.click()
    URL.revokeObjectURL(url)
  }, [exportDiff])

  return (
    <div className="space-y-6">
      {/* Controls */}
      <GCard>
        <GCardHeader className="pb-3">
          <GCardTitle className="text-base flex items-center gap-2">
            <Settings className="h-4 w-4" /> Options
          </GCardTitle>
        </GCardHeader>
        <GCardContent>
          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={ignoreWhitespace}
                onChange={(e) => setIgnoreWhitespace(e.target.checked)}
                className="h-4 w-4 rounded border-border"
              />
              Ignore whitespace
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={ignoreCase}
                onChange={(e) => setIgnoreCase(e.target.checked)}
                className="h-4 w-4 rounded border-border"
              />
              Ignore case
            </label>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={showCharDiff}
                onChange={(e) => setShowCharDiff(e.target.checked)}
                className="h-4 w-4 rounded border-border"
              />
              Character-level highlighting
            </label>

            <div className="flex-1" />

            <GButton variant="outline" size="sm" onClick={handleSwap} disabled={!leftText && !rightText}>
              <ArrowLeftRight className="h-4 w-4 mr-1.5" /> Swap
            </GButton>
            <GButton variant="outline" size="sm" onClick={handleClear} disabled={!leftText && !rightText}>
              <RotateCcw className="h-4 w-4 mr-1.5" /> Clear
            </GButton>
          </div>
        </GCardContent>
      </GCard>

      {/* Input Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <GCard>
          <GCardHeader className="pb-3">
            <GCardTitle className="text-sm flex items-center gap-2">
              <FileText className="h-4 w-4" /> Original Text
              <GBadge variant="outline" className="ml-auto text-[10px]">
                {leftText.split("\n").length} lines
              </GBadge>
            </GCardTitle>
          </GCardHeader>
          <GCardContent>
            <GTextarea
              value={leftText}
              onChange={(e) => setLeftText(e.target.value)}
              placeholder="Paste the original text here..."
              rows={10}
              className="resize-y font-mono text-sm"
            />
          </GCardContent>
        </GCard>

        <GCard>
          <GCardHeader className="pb-3">
            <GCardTitle className="text-sm flex items-center gap-2">
              <FileText className="h-4 w-4" /> Modified Text
              <GBadge variant="outline" className="ml-auto text-[10px]">
                {rightText.split("\n").length} lines
              </GBadge>
            </GCardTitle>
          </GCardHeader>
          <GCardContent>
            <GTextarea
              value={rightText}
              onChange={(e) => setRightText(e.target.value)}
              placeholder="Paste the modified text here..."
              rows={10}
              className="resize-y font-mono text-sm"
            />
          </GCardContent>
        </GCard>
      </div>

      {/* Diff Results */}
      {(leftText || rightText) && (
        <GCard>
          <GCardHeader className="pb-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <GCardTitle className="text-base flex items-center gap-2">
                <Equal className="h-4 w-4" /> Diff Results
              </GCardTitle>
              <div className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1 text-green-500">
                  <Plus className="h-3 w-3" /> {stats.added} added
                </span>
                <span className="flex items-center gap-1 text-red-500">
                  <Minus className="h-3 w-3" /> {stats.removed} removed
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Equal className="h-3 w-3" /> {stats.unchanged} unchanged
                </span>
              </div>
            </div>
          </GCardHeader>
          <GCardContent className="space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              <GTabs value={viewMode} onValueChange={(v) => setViewMode(v as typeof viewMode)}>
                <GTabsList>
                  <GTabsTrigger value="side-by-side">Side by Side</GTabsTrigger>
                  <GTabsTrigger value="inline">Inline</GTabsTrigger>
                  <GTabsTrigger value="unified">Unified</GTabsTrigger>
                </GTabsList>
              </GTabs>

              <div className="flex-1" />

              <GButton variant="outline" size="sm" onClick={handleCopy}>
                {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                {copied ? "Copied" : "Copy Diff"}
              </GButton>
              <GButton variant="outline" size="sm" onClick={handleDownload}>
                <Download className="h-4 w-4 mr-1" /> Download
              </GButton>
            </div>

            <div className="rounded-lg border border-border overflow-hidden">
              {viewMode === "side-by-side" && <SideBySideView diff={diff} showCharDiff={showCharDiff} />}
              {viewMode === "inline" && <InlineView diff={diff} showCharDiff={showCharDiff} />}
              {viewMode === "unified" && <UnifiedView diff={diff} />}
            </div>

            {stats.added === 0 && stats.removed === 0 && leftText && rightText && (
              <div className="rounded-lg bg-green-500/10 border border-green-500/30 text-green-500 text-sm p-3 flex items-center gap-2">
                <Check className="h-4 w-4" /> The texts are identical.
              </div>
            )}
          </GCardContent>
        </GCard>
      )}
    </div>
  )
}

// === View Components ===

function SideBySideView({ diff, showCharDiff }: { diff: LineDiff[]; showCharDiff: boolean }) {
  // Pair up for side-by-side display
  type Row = { left?: LineDiff; right?: LineDiff }
  const rows: Row[] = []
  let i = 0
  while (i < diff.length) {
    const d = diff[i]
    if (d.op === "equal") {
      rows.push({ left: d, right: d })
      i++
    } else if (d.op === "remove") {
      // Check if next is add → pair them (changed line)
      const next = diff[i + 1]
      if (next && next.op === "add") {
        rows.push({ left: d, right: next })
        i += 2
      } else {
        rows.push({ left: d })
        i++
      }
    } else {
      rows.push({ right: d })
      i++
    }
  }

  return (
    <div className="grid grid-cols-2 font-mono text-xs overflow-auto max-h-[600px]">
      <div className="border-r border-border">
        <div className="sticky top-0 bg-muted/80 backdrop-blur px-3 py-1.5 text-[11px] font-semibold text-muted-foreground border-b border-border">
          Original
        </div>
        {rows.map((row, idx) => (
          <DiffLineSide key={idx} line={row.left} otherLine={row.right} side="left" showCharDiff={showCharDiff} />
        ))}
      </div>
      <div>
        <div className="sticky top-0 bg-muted/80 backdrop-blur px-3 py-1.5 text-[11px] font-semibold text-muted-foreground border-b border-border">
          Modified
        </div>
        {rows.map((row, idx) => (
          <DiffLineSide key={idx} line={row.right} otherLine={row.left} side="right" showCharDiff={showCharDiff} />
        ))}
      </div>
    </div>
  )
}

function DiffLineSide({
  line,
  otherLine,
  side,
  showCharDiff,
}: {
  line?: LineDiff
  otherLine?: LineDiff
  side: "left" | "right"
  showCharDiff: boolean
}) {
  if (!line) {
    return <div className="px-3 py-0.5 bg-muted/30 min-h-[22px]">&nbsp;</div>
  }

  let bgClass = ""
  let textContent: React.ReactNode = side === "left" ? line.leftLine : line.rightLine
  const lineNum = side === "left" ? line.leftNumber : line.rightNumber

  if (line.op === "equal") {
    bgClass = ""
  } else if (line.op === "remove" && side === "left") {
    bgClass = "bg-red-500/10"
    // Character diff if paired with add
    if (showCharDiff && otherLine && otherLine.op === "add" && line.leftLine != null && otherLine.rightLine != null) {
      textContent = <CharDiffSpan text={line.leftLine} other={otherLine.rightLine} showOp="remove" />
    }
  } else if (line.op === "add" && side === "right") {
    bgClass = "bg-green-500/10"
    if (showCharDiff && otherLine && otherLine.op === "remove" && line.rightLine != null && otherLine.leftLine != null) {
      textContent = <CharDiffSpan text={line.rightLine} other={otherLine.leftLine} showOp="add" />
    }
  } else {
    // Empty placeholder
    return <div className="px-3 py-0.5 bg-muted/30 min-h-[22px]">&nbsp;</div>
  }

  return (
    <div className={cn("flex gap-2 px-2 py-0.5 min-h-[22px]", bgClass)}>
      <span className="inline-block w-10 text-right text-muted-foreground select-none shrink-0">
        {lineNum ?? ""}
      </span>
      <span className="flex-1 whitespace-pre-wrap break-all">{textContent || <>&nbsp;</>}</span>
    </div>
  )
}

function CharDiffSpan({ text, other, showOp }: { text: string; other: string; showOp: "add" | "remove" }) {
  const chars = diffChars(other, text) // other is "from", text is "to"
  const displayOp = showOp === "remove" ? "remove" : "add"
  return (
    <>
      {chars.map((c, i) => {
        if (c.op === "equal") return <span key={i}>{c.text}</span>
        if (c.op === displayOp) {
          const cls = displayOp === "add" ? "bg-green-500/40 text-green-100" : "bg-red-500/40 text-red-100"
          return <span key={i} className={cls}>{c.text}</span>
        }
        return null // skip opposite op chars
      })}
    </>
  )
}

function InlineView({ diff, showCharDiff }: { diff: LineDiff[]; showCharDiff: boolean }) {
  return (
    <div className="font-mono text-xs overflow-auto max-h-[600px]">
      {diff.map((d, idx) => {
        if (d.op === "equal") {
          return (
            <div key={idx} className="flex gap-2 px-2 py-0.5 min-h-[22px]">
              <span className="inline-block w-8 text-right text-muted-foreground select-none shrink-0">{d.leftNumber}</span>
              <span className="inline-block w-4 text-muted-foreground select-none shrink-0">&nbsp;</span>
              <span className="flex-1 whitespace-pre-wrap break-all">{d.leftLine || <>&nbsp;</>}</span>
            </div>
          )
        }
        if (d.op === "remove") {
          // Find paired add for char diff
          const next = diff[idx + 1]
          const paired = next && next.op === "add" ? next : null
          return (
            <div key={idx} className="flex gap-2 px-2 py-0.5 bg-red-500/10 min-h-[22px]">
              <span className="inline-block w-8 text-right text-muted-foreground select-none shrink-0">{d.leftNumber}</span>
              <span className="inline-block w-4 text-red-500 select-none shrink-0">-</span>
              <span className="flex-1 whitespace-pre-wrap break-all">
                {showCharDiff && paired && d.leftLine != null && paired.rightLine != null ? (
                  <CharDiffSpan text={d.leftLine} other={paired.rightLine} showOp="remove" />
                ) : (
                  d.leftLine || <>&nbsp;</>
                )}
              </span>
            </div>
          )
        }
        // add
        const prev = diff[idx - 1]
        const paired = prev && prev.op === "remove" ? prev : null
        return (
          <div key={idx} className="flex gap-2 px-2 py-0.5 bg-green-500/10 min-h-[22px]">
            <span className="inline-block w-8 text-right text-muted-foreground select-none shrink-0">{d.rightNumber}</span>
            <span className="inline-block w-4 text-green-500 select-none shrink-0">+</span>
            <span className="flex-1 whitespace-pre-wrap break-all">
              {showCharDiff && paired && d.rightLine != null && paired.leftLine != null ? (
                <CharDiffSpan text={d.rightLine} other={paired.leftLine} showOp="add" />
              ) : (
                d.rightLine || <>&nbsp;</>
              )}
            </span>
          </div>
        )
      })}
    </div>
  )
}

function UnifiedView({ diff }: { diff: LineDiff[] }) {
  return (
    <pre className="font-mono text-xs overflow-auto max-h-[600px] p-3 bg-muted/20">
      <div className="text-muted-foreground">--- Original</div>
      <div className="text-muted-foreground">+++ Modified</div>
      {diff.map((d, idx) => {
        if (d.op === "equal") return <div key={idx}>  {d.leftLine}</div>
        if (d.op === "remove") return <div key={idx} className="text-red-500 bg-red-500/5">- {d.leftLine}</div>
        return <div key={idx} className="text-green-500 bg-green-500/5">+ {d.rightLine}</div>
      })}
    </pre>
  )
}
