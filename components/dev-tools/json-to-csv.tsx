"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GTextarea } from "@/ui/gtextarea"

import { Download, Copy, Check, Sparkles } from "lucide-react"

const SAMPLE_JSON = `[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30,
    "city": "New York",
    "department": "Engineering"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "age": 28,
    "city": "San Francisco",
    "department": "Design"
  },
  {
    "id": 3,
    "name": "Bob Johnson",
    "email": "bob@example.com",
    "age": 35,
    "city": "Chicago",
    "department": "Marketing"
  },
  {
    "id": 4,
    "name": "Alice Brown",
    "email": "alice@example.com",
    "age": 32,
    "city": "Boston",
    "department": "Sales"
  }
]`

export function JSONToCSV() {
  const [json, setJson] = useState("")
  const [csv, setCsv] = useState("")
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)
  const [delimiter, setDelimiter] = useState<"," | ";" | "\t">(",")
  const [includeBom, setIncludeBom] = useState(false)

  const loadSampleData = () => {
    setJson(SAMPLE_JSON)
    setError("")
    setCsv("")
  }

  const flattenValue = (value: unknown, prefix: string, output: Record<string, string>) => {
    if (value === null || value === undefined) {
      output[prefix] = ""
      return
    }

    if (Array.isArray(value)) {
      output[prefix] = JSON.stringify(value)
      return
    }

    if (typeof value === "object") {
      const entries = Object.entries(value as Record<string, unknown>)
      if (entries.length === 0) {
        output[prefix] = "{}"
        return
      }
      for (const [key, childValue] of entries) {
        flattenValue(childValue, prefix ? `${prefix}.${key}` : key, output)
      }
      return
    }

    output[prefix] = String(value)
  }

  const escapeCsvValue = (value: string) => {
    const needsQuotes =
      value.includes(delimiter) || value.includes('"') || value.includes("\n") || value.includes("\r")
    return needsQuotes ? `"${value.replace(/"/g, '""')}"` : value
  }

  const convertToCSV = () => {
    setError("")
    setCsv("")

    if (!json.trim()) {
      setError("Please enter JSON data")
      return
    }

    try {
      const data = JSON.parse(json)
      const array = Array.isArray(data) ? data : [data]

      if (array.length === 0) {
        setError("JSON array is empty")
        return
      }

      const flattenedRows = array.map((row) => {
        const flattened: Record<string, string> = {}
        if (row !== null && typeof row === "object" && !Array.isArray(row)) {
          for (const [key, value] of Object.entries(row as Record<string, unknown>)) {
            flattenValue(value, key, flattened)
          }
        } else {
          flattenValue(row, "value", flattened)
        }
        return flattened
      })

      const headers = Array.from(
        flattenedRows.reduce((set, row) => {
          Object.keys(row).forEach((key) => set.add(key))
          return set
        }, new Set<string>())
      )

      const csvHeaders = headers.map(escapeCsvValue).join(delimiter)

      const csvRows = flattenedRows.map((row) => {
        return headers
          .map((header) => {
            const stringValue = row[header] ?? ""
            return escapeCsvValue(stringValue)
          })
          .join(delimiter)
      })

      const csvContent = [csvHeaders, ...csvRows].join("\n")
      setCsv(csvContent)
    } catch (err) {
      setError("Invalid JSON format. Please check your input.")
    }
  }

  const downloadCSV = () => {
    const blob = new Blob([includeBom ? `\uFEFF${csv}` : csv], { type: "text/csv;charset=utf-8" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "data.csv"
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const copyToClipboard = () => {
    void navigator.clipboard.writeText(csv)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-foreground">JSON Input</label>
          <GButton
            variant="outline"
            size="sm"
            onClick={loadSampleData}
            className="gap-1.5 text-xs"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Try Sample Data
          </GButton>
        </div>
        <GTextarea
          placeholder='[{"name": "John", "age": 30}, {"name": "Jane", "age": 25}]'
          value={json}
          onChange={(e) => setJson(e.target.value)}
          className="min-h-48 font-mono text-sm border-2 border-blue-300 focus:border-primary"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 rounded-lg border border-border bg-muted/20 p-3 text-sm">
        <label className="flex items-center gap-2">
          <span className="text-muted-foreground">Delimiter</span>
          <select
            value={delimiter}
            onChange={(e) => {
              setDelimiter(e.target.value as "," | ";" | "\t")
              setCsv("")
            }}
            className="rounded-md border border-border bg-background px-2 py-1 text-foreground"
          >
            <option value={","}>Comma (,)</option>
            <option value={";"}>Semicolon (;)</option>
            <option value={"\t"}>Tab</option>
          </select>
        </label>
        <label className="flex items-center gap-2 text-muted-foreground">
          <input
            type="checkbox"
            checked={includeBom}
            onChange={(e) => setIncludeBom(e.target.checked)}
            className="h-4 w-4 rounded border-border"
          />
          Add UTF-8 BOM on download
        </label>
      </div>

      <GButton onClick={convertToCSV} className="w-full">
        Convert to CSV
      </GButton>

      {error && (
        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      {csv && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-foreground">CSV Output</label>
            <div className="flex gap-2">
              <GButton variant="outline" size="sm" onClick={copyToClipboard}>
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
              <GButton variant="outline" size="sm" onClick={downloadCSV}>
                <Download className="h-4 w-4 mr-2" />
                Download
              </GButton>
            </div>
          </div>
          <GTextarea value={csv} readOnly className="min-h-48 font-mono text-sm border-2 border-green-300 focus:border-green-500" />
        </div>
      )}
    </div>
  )
}
