"use client"

import { useState, useMemo } from "react"
import { GTextarea } from "@/ui/gtextarea"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { xmlToJson, jsonToXml } from "@/lib/xml-json-converter"
import { RotateCcw } from "lucide-react"

const SAMPLE_XML = `<a x="1.234" y="It's">
  <b>hello</b>
  <c>world</c>
</a>`

const SAMPLE_JSON = `{
  "a": {
    "_attributes": {
      "x": "1.234",
      "y": "It's"
    },
    "b": "hello",
    "c": "world"
  }
}`

export function XmlJsonConverter() {
  const [xmlInput, setXmlInput] = useState("")
  const [jsonInput, setJsonInput] = useState("")

  const jsonResult = useMemo(() => xmlToJson(xmlInput), [xmlInput])
  const xmlResult = useMemo(() => jsonToXml(jsonInput), [jsonInput])

  const handleClear = () => {
    setXmlInput("")
    setJsonInput("")
  }

  const handleXmlSample = () => {
    setXmlInput(SAMPLE_XML)
    setJsonInput("")
  }

  const handleJsonSample = () => {
    setJsonInput(SAMPLE_JSON)
    setXmlInput("")
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            XML to JSON
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Convert XML to JSON.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <GButton variant="outline" size="sm" onClick={handleXmlSample}>
            XML sample
          </GButton>
          <GButton variant="outline" size="sm" onClick={handleJsonSample}>
            JSON sample
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
            Your XML content
          </h3>
          <div>
            <GTextarea
              value={xmlInput}
              onChange={(e) => setXmlInput(e.target.value)}
              placeholder="Paste your XML here..."
              className="min-h-[200px] font-mono text-sm"
            />
            {jsonResult.error && (
              <p className="mt-1 text-xs text-red-500">{jsonResult.error}</p>
            )}
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              Converted JSON
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

        <div className="space-y-4 rounded-xl border border-border bg-card p-4">
          <h3 className="text-sm font-semibold text-foreground">
            Your JSON content
          </h3>
          <div>
            <GTextarea
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              placeholder="Paste your JSON here..."
              className="min-h-[200px] font-mono text-sm"
            />
            {xmlResult.error && (
              <p className="mt-1 text-xs text-red-500">{xmlResult.error}</p>
            )}
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              Converted XML
            </GLabel>
            <GTextarea
              value={xmlResult.result}
              readOnly
              placeholder="XML output will appear here"
              className="mt-1 min-h-[200px] font-mono text-sm bg-muted/30"
            />
          </div>
          {xmlResult.result && (
            <GButton
              variant="default"
              size="sm"
              onClick={async () => {
                await navigator.clipboard.writeText(xmlResult.result)
              }}
            >
              Copy XML to clipboard
            </GButton>
          )}
        </div>
      </div>
    </div>
  )
}
