"use client"

import { useState, useMemo } from "react"
import { GTextarea } from "@/ui/gtextarea"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import { GSwitch } from "@/ui/gswitch"
import {
  GSelect,
  GSelectContent,
  GSelectItem,
  GSelectTrigger,
  GSelectValue,
} from "@/ui/gselect"
import { processList, type SortOption } from "@/lib/list-converter"
import { RotateCcw } from "lucide-react"

const SAMPLE_INPUT = `apple
banana
cherry
apple
date`

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "none", label: "Don't sort" },
  { value: "alpha-asc", label: "Sort alphabetically A-Z" },
  { value: "alpha-desc", label: "Sort alphabetically Z-A" },
  { value: "numeric", label: "Sort numerically" },
  { value: "reverse", label: "Reverse list" },
]

export function ListConverter() {
  const [input, setInput] = useState("")
  const [trim, setTrim] = useState(true)
  const [removeDuplicates, setRemoveDuplicates] = useState(true)
  const [toLowercase, setToLowercase] = useState(false)
  const [keepLineBreaks, setKeepLineBreaks] = useState(false)
  const [sort, setSort] = useState<SortOption>("alpha-asc")
  const [separator, setSeparator] = useState(",")
  const [itemPrefix, setItemPrefix] = useState("")
  const [itemSuffix, setItemSuffix] = useState("")
  const [listPrefix, setListPrefix] = useState("")
  const [listSuffix, setListSuffix] = useState("")

  const output = useMemo(
    () =>
      processList(input, {
        trim,
        removeDuplicates,
        toLowercase,
        keepLineBreaks,
        sort,
        separator: separator || ",",
        itemPrefix,
        itemSuffix,
        listPrefix,
        listSuffix,
      }),
    [
      input,
      trim,
      removeDuplicates,
      toLowercase,
      keepLineBreaks,
      sort,
      separator,
      itemPrefix,
      itemSuffix,
      listPrefix,
      listSuffix,
    ]
  )

  const handleClear = () => {
    setInput("")
  }

  const handleSample = () => {
    setInput(SAMPLE_INPUT)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            List converter
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Process column-based data and apply various changes (transpose, add
            prefix and suffix, reverse list, sort list, lowercase values,
            truncate values) to each row.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <GButton variant="outline" size="sm" onClick={handleSample}>
            Sample
          </GButton>
          <GButton variant="outline" size="sm" onClick={handleClear}>
            <RotateCcw className="h-3.5 w-3.5 mr-1" />
            Clear
          </GButton>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 rounded-xl border border-border bg-card p-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <GLabel className="text-xs">Trim list items</GLabel>
            <GSwitch checked={trim} onCheckedChange={setTrim} />
          </div>
          <div className="flex items-center justify-between gap-2">
            <GLabel className="text-xs shrink-0">Sort list</GLabel>
            <GSelect value={sort} onValueChange={(v) => setSort(v as SortOption)}>
              <GSelectTrigger className="h-8 text-xs flex-1">
                <GSelectValue />
              </GSelectTrigger>
              <GSelectContent>
                {SORT_OPTIONS.map((o) => (
                  <GSelectItem key={o.value} value={o.value}>
                    {o.label}
                  </GSelectItem>
                ))}
              </GSelectContent>
            </GSelect>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <GLabel className="text-xs">Remove duplicates</GLabel>
            <GSwitch
              checked={removeDuplicates}
              onCheckedChange={setRemoveDuplicates}
            />
          </div>
          <div className="flex items-center gap-2">
            <GLabel className="text-xs shrink-0">Separator</GLabel>
            <GInput
              value={separator}
              onChange={(e) => setSeparator(e.target.value)}
              placeholder=","
              className="h-8 text-xs"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <GLabel className="text-xs">Convert to lowercase</GLabel>
            <GSwitch
              checked={toLowercase}
              onCheckedChange={setToLowercase}
            />
          </div>
          <div className="space-y-1">
            <GLabel className="text-xs">Wrap item</GLabel>
            <div className="flex gap-2">
              <GInput
                value={itemPrefix}
                onChange={(e) => setItemPrefix(e.target.value)}
                placeholder="Prefix"
                className="h-8 text-xs"
              />
              <GInput
                value={itemSuffix}
                onChange={(e) => setItemSuffix(e.target.value)}
                placeholder="Suffix"
                className="h-8 text-xs"
              />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <GLabel className="text-xs">Keep line breaks</GLabel>
            <GSwitch
              checked={keepLineBreaks}
              onCheckedChange={setKeepLineBreaks}
            />
          </div>
          <div className="space-y-1">
            <GLabel className="text-xs">Wrap list</GLabel>
            <div className="flex gap-2">
              <GInput
                value={listPrefix}
                onChange={(e) => setListPrefix(e.target.value)}
                placeholder="Prefix"
                className="h-8 text-xs"
              />
              <GInput
                value={listSuffix}
                onChange={(e) => setListSuffix(e.target.value)}
                placeholder="Suffix"
                className="h-8 text-xs"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4 rounded-xl border border-border bg-card p-4">
          <h3 className="text-sm font-semibold text-foreground">
            Your input data
          </h3>
          <GTextarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your input data here..."
            className="min-h-[200px] font-mono text-sm"
          />
        </div>
        <div className="space-y-4 rounded-xl border border-border bg-card p-4">
          <h3 className="text-sm font-semibold text-foreground">
            Your transformed data
          </h3>
          <GTextarea
            value={output}
            readOnly
            placeholder="Transformed output will appear here"
            className="min-h-[200px] font-mono text-sm bg-muted/30"
          />
          {output && (
            <GButton
              variant="default"
              size="sm"
              onClick={async () => {
                await navigator.clipboard.writeText(output)
              }}
            >
              Copy to clipboard
            </GButton>
          )}
        </div>
      </div>
    </div>
  )
}
