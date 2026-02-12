"use client"

import { useState, useCallback, useMemo } from "react"
import { GTextarea } from "@/ui/gtextarea"
import { GLabel } from "@/ui/glabel"
import { GButton } from "@/ui/gbutton"
import { computeJsonDiff, formatValue, type DiffEntry } from "@/lib/json-diff"
import { Copy, Check, Trash2 } from "lucide-react"

const SAMPLE_A = `{
  "name": "John",
  "age": 30,
  "city": "New York"
}`

const SAMPLE_B = `{
  "name": "John",
  "age": 31,
  "country": "USA"
}`

function DiffItem({ entry }: { entry: DiffEntry }) {
  const [copied, setCopied] = useState(false)
  const copyPath = () => {
    navigator.clipboard.writeText(entry.path)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const isAdded = entry.type === "added"
  const isRemoved = entry.type === "removed"
  const isModified = entry.type === "modified"

  return (
    <div
      className={`
        flex items-start gap-2 rounded-md px-3 py-2 text-sm font-mono
        ${isAdded ? "bg-green-500/10 border border-green-500/30" : ""}
        ${isRemoved ? "bg-red-500/10 border border-red-500/30" : ""}
        ${isModified ? "bg-amber-500/10 border border-amber-500/30" : ""}
      `}
    >
      <span
        className={`
          flex-shrink-0 w-16 text-xs font-semibold
          ${isAdded ? "text-green-600 dark:text-green-400" : ""}
          ${isRemoved ? "text-red-600 dark:text-red-400" : ""}
          ${isModified ? "text-amber-600 dark:text-amber-400" : ""}
        `}
      >
        {entry.type}
      </span>
      <div className="flex-1 min-w-0">
        <button
          type="button"
          onClick={copyPath}
          className="text-foreground hover:underline text-left break-all"
        >
          {entry.path || "(root)"}
        </button>
        <div className="mt-1 text-muted-foreground">
          {isAdded && <span>+ {formatValue(entry.newValue)}</span>}
          {isRemoved && <span>− {formatValue(entry.oldValue)}</span>}
          {isModified && (
            <span>
              {formatValue(entry.oldValue)} → {formatValue(entry.newValue)}
            </span>
          )}
        </div>
      </div>
      <button
        type="button"
        onClick={copyPath}
        className="flex-shrink-0 p-1 rounded hover:bg-muted text-muted-foreground"
        title="Copy path"
      >
        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  )
}

export function JsonDiff() {
  const [jsonA, setJsonA] = useState("")
  const [jsonB, setJsonB] = useState("")

  const { entries, errorA, errorB } = useMemo(
    () => computeJsonDiff(jsonA, jsonB),
    [jsonA, jsonB]
  )

  const loadSample = useCallback(() => {
    setJsonA(SAMPLE_A)
    setJsonB(SAMPLE_B)
  }, [])

  const clear = useCallback(() => {
    setJsonA("")
    setJsonB("")
  }, [])

  const hasError = !!errorA || !!errorB
  const hasInput = jsonA.trim() || jsonB.trim()

  return (
    <div className="space-y-6">
      {/* Input areas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-2">
          <GLabel className="text-base font-medium">Your first JSON</GLabel>
          <GTextarea
            value={jsonA}
            onChange={(e) => setJsonA(e.target.value)}
            placeholder="Paste your first JSON here..."
            className="min-h-[200px] font-mono text-sm resize-y"
          />
          {errorA && (
            <p className="text-sm text-red-600 dark:text-red-400">{errorA}</p>
          )}
        </div>
        <div className="space-y-2">
          <GLabel className="text-base font-medium">Your JSON to compare</GLabel>
          <GTextarea
            value={jsonB}
            onChange={(e) => setJsonB(e.target.value)}
            placeholder="Paste your JSON to compare here..."
            className="min-h-[200px] font-mono text-sm resize-y"
          />
          {errorB && (
            <p className="text-sm text-red-600 dark:text-red-400">{errorB}</p>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2">
        <GButton variant="secondary" size="sm" onClick={loadSample}>
          Load sample
        </GButton>
        <GButton variant="outline" size="sm" onClick={clear}>
          <Trash2 className="h-4 w-4 mr-1" />
          Clear
        </GButton>
      </div>

      {/* Diff results */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold">Differences</h3>
          {hasInput && !hasError && (
            <span className="text-sm text-muted-foreground">
              {entries.length} difference{entries.length !== 1 ? "s" : ""} found
            </span>
          )}
        </div>

        {hasError && (
          <p className="text-sm text-muted-foreground">
            Fix JSON syntax errors above to see the diff.
          </p>
        )}

        {!hasInput && (
          <p className="text-sm text-muted-foreground">
            Paste JSON in both fields to compare. Differences update automatically.
          </p>
        )}

        {hasInput && !hasError && entries.length === 0 && (
          <p className="text-sm text-green-600 dark:text-green-400">
            No differences — both JSON objects are identical.
          </p>
        )}

        {hasInput && !hasError && entries.length > 0 && (
          <div className="space-y-2">
            {entries.map((entry, i) => (
              <DiffItem key={`${entry.path}-${entry.type}-${i}`} entry={entry} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
