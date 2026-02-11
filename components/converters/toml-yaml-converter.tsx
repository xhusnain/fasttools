"use client"

import { useState, useMemo } from "react"
import { GTextarea } from "@/ui/gtextarea"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { yamlToToml, tomlToYaml } from "@/lib/yaml-toml-converter"
import { RotateCcw } from "lucide-react"

const SAMPLE_YAML = `name: John
age: 30
hobbies:
  - reading
  - coding
address:
  city: New York
  country: USA`

const SAMPLE_TOML = `name = "John"
age = 30
hobbies = ["reading", "coding"]

[address]
city = "New York"
country = "USA"`

export function TomlYamlConverter() {
  const [tomlInput, setTomlInput] = useState("")
  const [yamlInput, setYamlInput] = useState("")

  const yamlResult = useMemo(() => tomlToYaml(tomlInput), [tomlInput])
  const tomlResult = useMemo(() => yamlToToml(yamlInput), [yamlInput])

  const handleClear = () => {
    setTomlInput("")
    setYamlInput("")
  }

  const handleTomlSample = () => {
    setTomlInput(SAMPLE_TOML)
    setYamlInput("")
  }

  const handleYamlSample = () => {
    setYamlInput(SAMPLE_YAML)
    setTomlInput("")
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            TOML to YAML
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Parse and convert TOML to YAML.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <GButton variant="outline" size="sm" onClick={handleTomlSample}>
            TOML sample
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
            Your TOML
          </h3>
          <div>
            <GTextarea
              value={tomlInput}
              onChange={(e) => setTomlInput(e.target.value)}
              placeholder="Paste your TOML here..."
              className="min-h-[200px] font-mono text-sm"
            />
            {yamlResult.error && (
              <p className="mt-1 text-xs text-red-500">{yamlResult.error}</p>
            )}
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              YAML from your TOML
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
            {tomlResult.error && (
              <p className="mt-1 text-xs text-red-500">{tomlResult.error}</p>
            )}
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              TOML from your YAML
            </GLabel>
            <GTextarea
              value={tomlResult.result}
              readOnly
              placeholder="TOML output will appear here"
              className="mt-1 min-h-[200px] font-mono text-sm bg-muted/30"
            />
          </div>
          {tomlResult.result && (
            <GButton
              variant="default"
              size="sm"
              onClick={async () => {
                await navigator.clipboard.writeText(tomlResult.result)
              }}
            >
              Copy TOML to clipboard
            </GButton>
          )}
        </div>
      </div>
    </div>
  )
}
