"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Download, Copy, Check } from "lucide-react"

export function JSONToCSV() {
  const [json, setJson] = useState("")
  const [csv, setCsv] = useState("")
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)

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

      // Get headers from first object
      const headers = Object.keys(array[0])
      const csvHeaders = headers.join(",")

      // Convert rows
      const csvRows = array.map((row) => {
        return headers
          .map((header) => {
            const value = row[header]
            // Escape quotes and wrap in quotes if contains comma
            const stringValue = String(value ?? "")
            return stringValue.includes(",") ? `"${stringValue.replace(/"/g, '""')}"` : stringValue
          })
          .join(",")
      })

      const csvContent = [csvHeaders, ...csvRows].join("\n")
      setCsv(csvContent)
    } catch (err) {
      setError("Invalid JSON format. Please check your input.")
    }
  }

  const downloadCSV = () => {
    const blob = new Blob([csv], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "data.csv"
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(csv)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">JSON Input</label>
        <Textarea
          placeholder='[{"name": "John", "age": 30}, {"name": "Jane", "age": 25}]'
          value={json}
          onChange={(e) => setJson(e.target.value)}
          className="min-h-48 font-mono text-sm"
        />
      </div>

      <Button onClick={convertToCSV} className="w-full">
        Convert to CSV
      </Button>

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
              <Button variant="outline" size="sm" onClick={copyToClipboard}>
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
              </Button>
              <Button variant="outline" size="sm" onClick={downloadCSV}>
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
          <Textarea value={csv} readOnly className="min-h-48 font-mono text-sm" />
        </div>
      )}
    </div>
  )
}
