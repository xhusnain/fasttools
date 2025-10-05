"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function RegexTester() {
  const [pattern, setPattern] = useState("")
  const [flags, setFlags] = useState("g")
  const [testString, setTestString] = useState("")
  const [matches, setMatches] = useState<string[]>([])
  const [error, setError] = useState("")

  const testRegex = (newPattern: string, newFlags: string, newTestString: string) => {
    setError("")
    setMatches([])

    if (!newPattern) return

    try {
      const regex = new RegExp(newPattern, newFlags)
      const foundMatches = newTestString.match(regex)
      if (foundMatches) {
        setMatches(foundMatches)
      }
    } catch (err) {
      setError("Invalid regular expression")
    }
  }

  const handlePatternChange = (value: string) => {
    setPattern(value)
    testRegex(value, flags, testString)
  }

  const handleFlagsChange = (value: string) => {
    setFlags(value)
    testRegex(pattern, value, testString)
  }

  const handleTestStringChange = (value: string) => {
    setTestString(value)
    testRegex(pattern, flags, value)
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Regular Expression Pattern</label>
          <Input
            placeholder="e.g., \d{3}-\d{3}-\d{4}"
            value={pattern}
            onChange={(e) => handlePatternChange(e.target.value)}
            className="font-mono"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Flags</label>
          <Input
            placeholder="e.g., g, gi, gim"
            value={flags}
            onChange={(e) => handleFlagsChange(e.target.value)}
            className="font-mono"
          />
          <p className="text-xs text-muted-foreground">g = global, i = case insensitive, m = multiline</p>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Test String</label>
        <Textarea
          placeholder="Enter text to test against your regex..."
          value={testString}
          onChange={(e) => handleTestStringChange(e.target.value)}
          className="min-h-32"
        />
      </div>

      {error && (
        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      {matches.length > 0 && (
        <Card className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground">Matches Found</h3>
            <Badge variant="secondary">{matches.length} match(es)</Badge>
          </div>
          <div className="space-y-2">
            {matches.map((match, index) => (
              <div key={index} className="p-2 bg-muted rounded-md font-mono text-sm">
                {match}
              </div>
            ))}
          </div>
        </Card>
      )}

      {pattern && testString && matches.length === 0 && !error && (
        <div className="p-4 bg-muted/50 border border-border rounded-lg">
          <p className="text-sm text-muted-foreground">No matches found</p>
        </div>
      )}
    </div>
  )
}
