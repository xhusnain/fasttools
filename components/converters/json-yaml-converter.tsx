"use client"

import { useState, useMemo } from "react"
import { GTextarea } from "@/ui/gtextarea"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { jsonToYaml, yamlToJson } from "@/lib/yaml-json-converter"
import { RotateCcw } from "lucide-react"

const SAMPLE_JSON = `{
  "name": "John",
  "age": 30,
  "hobbies": ["reading", "coding"],
  "address": {
    "city": "New York",
    "country": "USA"
  }
}`

const SAMPLE_YAML = `name: John
age: 30
hobbies:
  - reading
  - coding
address:
  city: New York
  country: USA`

export function JsonYamlConverter() {
  const [jsonInput, setJsonInput] = useState("")
  const [yamlInput, setYamlInput] = useState("")

  const yamlResult = useMemo(() => jsonToYaml(jsonInput), [jsonInput])
  const jsonResult = useMemo(() => yamlToJson(yamlInput), [yamlInput])

  const handleClear = () => {
    setJsonInput("")
    setYamlInput("")
  }

  const handleJsonSample = () => {
    setJsonInput(SAMPLE_JSON)
    setYamlInput("")
  }

  const handleYamlSample = () => {
    setYamlInput(SAMPLE_YAML)
    setJsonInput("")
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            JSON to YAML converter
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Simply convert JSON to YAML with this online live converter.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <GButton variant="outline" size="sm" onClick={handleJsonSample}>
            JSON sample
          </GButton>
          <GButton variant="outline" size="sm" onClick={handleYamlSample}>
            YAML sample
          </GButton>
          <GButton variant="outline" size="sm" onClick={handleClear}>
            <RotateCcw className="h-3.5 w-3.5 mr-1" />
            Clear
          </GButton>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4 rounded-xl border border-border bg-card p-4">
          <h3 className="text-sm font-semibold text-foreground">
            Your JSON
          </h3>
          <div>
            <GTextarea
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              placeholder="Paste your JSON here..."
              className="min-h-[200px] font-mono text-sm"
            />
            {yamlResult.error && (
              <p className="mt-1 text-xs text-red-500">{yamlResult.error}</p>
            )}
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              YAML from your JSON
            </GLabel>
            <GTextarea
              value={yamlResult.result}
              readOnly
              placeholder="YAML output will appear here"
              className="mt-1 min-h-[200px] font-mono text-sm bg-muted/30"
            />
          </div>
          {yamlResult.result && (
            <GButton
              variant="default"
              size="sm"
              onClick={async () => {
                await navigator.clipboard.writeText(yamlResult.result)
              }}
            >
              Copy YAML to clipboard
            </GButton>
          )}
        </div>

        <div className="space-y-4 rounded-xl border border-border bg-card p-4">
          <h3 className="text-sm font-semibold text-foreground">
            Your YAML
          </h3>
          <div>
            <GTextarea
              value={yamlInput}
              onChange={(e) => setYamlInput(e.target.value)}
              placeholder="Paste your YAML here..."
              className="min-h-[200px] font-mono text-sm"
            />
            {jsonResult.error && (
              <p className="mt-1 text-xs text-red-500">{jsonResult.error}</p>
            )}
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              JSON from your YAML
            </GLabel>
            <GTextarea
              value={jsonResult.result}
              readOnly
              placeholder="JSON output will appear here"
              className="mt-1 min-h-[200px] font-mono text-sm bg-muted/30"
            />
          </div>
          {jsonResult.result && (
            <GButton
              variant="default"
              size="sm"
              onClick={async () => {
                await navigator.clipboard.writeText(jsonResult.result)
              }}
            >
              Copy JSON to clipboard
            </GButton>
          )}
        </div>
      </div>
    </div>
  )
}
