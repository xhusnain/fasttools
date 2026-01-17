"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GTextarea } from "@/ui/gtextarea"
import { Download, Copy, Check, Sparkles } from "lucide-react"

const SAMPLE_SQL = `INSERT INTO users (id, name, email, age, active) VALUES 
(1, 'John Doe', 'john@example.com', 30, true),
(2, 'Jane Smith', 'jane@example.com', 25, false),
(3, "Bob O'Connor", 'bob@example.com', NULL, true);`

export function SQLToJSON() {
    const [sql, setSql] = useState("")
    const [json, setJson] = useState("")
    const [error, setError] = useState("")
    const [copied, setCopied] = useState(false)

    const loadSampleData = () => {
        setSql(SAMPLE_SQL)
        setError("")
        setJson("")
    }

    const parseValue = (val: string): any => {
        val = val.trim()
        if (val.toUpperCase() === "NULL") return null
        if (val.toUpperCase() === "TRUE") return true
        if (val.toUpperCase() === "FALSE") return false
        if (!isNaN(Number(val))) return Number(val)
        if ((val.startsWith("'") && val.endsWith("'")) || (val.startsWith('"') && val.endsWith('"'))) {
            return val.slice(1, -1).replace(/\\'/g, "'").replace(/\\"/g, '"')
        }
        return val
    }

    const convertToJSON = () => {
        setError("")
        setJson("")

        if (!sql.trim()) {
            setError("Please enter SQL data")
            return
        }

        try {
            // Basic regex to find INSERT INTO pattern
            // Matches: INSERT INTO table (col1, col2) VALUES (val1, val2), (val3, val4);
            const insertRegex = /INSERT\s+INTO\s+(\w+)\s*\(([^)]+)\)\s*VALUES\s*([\s\S]+?);/gi
            let match
            const results = []
            let matchFound = false

            while ((match = insertRegex.exec(sql)) !== null) {
                matchFound = true
                const tableName = match[1]
                const columns = match[2].split(",").map((c) => c.trim().replace(/['"`]/g, ""))
                const valuesPart = match[3]

                // Split by ), ( to get rows, handling the first ( and last )
                // This is a naive split and might break on complex nested parens in strings, but good for V1
                // A robust parser would need a state machine
                const rows = valuesPart.split(/\)\s*,\s*\(/)

                for (let row of rows) {
                    // clean up leading/trailing parens for first/last elements
                    row = row.replace(/^\s*\(/, "").replace(/\)\s*$/, "")

                    // Split by comma, respecting quotes
                    const values: any[] = []
                    let currentVal = ""
                    let inQuote = false
                    let quoteChar = ""

                    for (let i = 0; i < row.length; i++) {
                        const char = row[i]
                        if ((char === "'" || char === '"') && (i === 0 || row[i - 1] !== '\\')) {
                            if (!inQuote) {
                                inQuote = true
                                quoteChar = char
                            } else if (char === quoteChar) {
                                inQuote = false
                            }
                        }

                        if (char === "," && !inQuote) {
                            values.push(parseValue(currentVal))
                            currentVal = ""
                        } else {
                            currentVal += char
                        }
                    }
                    values.push(parseValue(currentVal))

                    const rowObj: Record<string, any> = {}
                    columns.forEach((col, index) => {
                        if (index < values.length) {
                            rowObj[col] = values[index]
                        }
                    })
                    results.push(rowObj)
                }
            }

            if (!matchFound) {
                // If no full INSERT INTO syntax, try to check if it's just values or something else
                // For now, return error
                setError("Could not find valid 'INSERT INTO table (...) VALUES ...' statement.")
                return
            }

            setJson(JSON.stringify(results, null, 2))

        } catch (err) {
            console.error(err)
            setError("Failed to parse SQL. Please check syntax.")
        }
    }

    const downloadJSON = () => {
        const blob = new Blob([json], { type: "application/json" })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = "data.json"
        a.click()
        window.URL.revokeObjectURL(url)
    }

    const copyToClipboard = () => {
        void navigator.clipboard.writeText(json)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-foreground">SQL Input (INSERT statements)</label>
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
                    placeholder="INSERT INTO users (id, name) VALUES (1, 'John');"
                    value={sql}
                    onChange={(e) => setSql(e.target.value)}
                    className="min-h-48 font-mono text-sm border-2 border-blue-300 focus:border-primary"
                />
            </div>

            <GButton onClick={convertToJSON} className="w-full">
                Convert to JSON
            </GButton>

            {error && (
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <p className="text-sm text-destructive">{error}</p>
                </div>
            )}

            {json && (
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-foreground">JSON Output</label>
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
                            <GButton variant="outline" size="sm" onClick={downloadJSON}>
                                <Download className="h-4 w-4 mr-2" />
                                Download
                            </GButton>
                        </div>
                    </div>
                    <GTextarea value={json} readOnly className="min-h-48 font-mono text-sm border-2 border-green-300 focus:border-green-500" />
                </div>
            )}
        </div>
    )
}
