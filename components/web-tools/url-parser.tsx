"use client"

import { useState } from "react"
import { GTextarea } from "@/ui/gtextarea"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { RotateCcw, Copy, Check } from "lucide-react"
import { parseUrl, type ParsedUrl } from "@/lib/url-parser"

const SAMPLE_URL =
  "https://example.com:443/search?q=url+parser&lang=en&page=1#results"

function ParsedRow({
  label,
  value,
}: {
  label: string
  value: string | undefined
}) {
  if (value == null || value === "") return null
  return (
    <tr className="border-b border-border last:border-0">
      <td className="py-2 pr-4 font-medium text-muted-foreground text-sm whitespace-nowrap">
        {label}
      </td>
      <td className="py-2 font-mono text-sm break-all">{value}</td>
    </tr>
  )
}

function UrlParserResult({ parsed }: { parsed: ParsedUrl }) {
  if (!parsed.raw) return null

  if (!parsed.valid) {
    return (
      <div className="rounded-lg border border-destructive/50 bg-destructive/5 p-4 text-sm text-destructive">
        Invalid URL: {parsed.error}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <table className="w-full text-left">
          <tbody>
            <ParsedRow label="Scheme" value={parsed.scheme} />
            <ParsedRow label="Host" value={parsed.host} />
            <ParsedRow label="Hostname" value={parsed.hostname} />
            <ParsedRow label="Port" value={parsed.port} />
            <ParsedRow label="Pathname" value={parsed.pathname} />
            <ParsedRow label="Search" value={parsed.search} />
            <ParsedRow label="Hash" value={parsed.hash} />
            <ParsedRow label="Origin" value={parsed.origin} />
            {parsed.username && (
              <ParsedRow label="Username" value={parsed.username} />
            )}
            {parsed.password && (
              <ParsedRow label="Password" value={parsed.password} />
            )}
          </tbody>
        </table>
      </div>

      {parsed.queryParams.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">
            Query String (decoded)
          </h4>
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-muted/50">
                  <th className="py-2 px-3 text-left text-xs font-medium text-muted-foreground">
                    Key
                  </th>
                  <th className="py-2 px-3 text-left text-xs font-medium text-muted-foreground">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {parsed.queryParams.map(({ key, value }, i) => (
                  <tr
                    key={i}
                    className="border-t border-border last:border-0 hover:bg-muted/30"
                  >
                    <td className="py-2 px-3 font-mono text-sm">{key}</td>
                    <td className="py-2 px-3 font-mono text-sm break-all">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export function UrlParser() {
  const [input, setInput] = useState(SAMPLE_URL)
  const [copied, setCopied] = useState(false)
  const parsed = parseUrl(input)

  const handleClear = () => setInput("")
  const handleSample = () => setInput(SAMPLE_URL)
  const handleCopyUrl = async () => {
    if (parsed.valid && parsed.raw) {
      await navigator.clipboard.writeText(parsed.raw)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Parse URL into components
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Break down a URL into scheme, host, path, query string, and hash.
            url query string parser with decoded parameters.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <GButton variant="outline" size="sm" onClick={handleSample}>
            Sample URL
          </GButton>
          <GButton variant="outline" size="sm" onClick={handleClear}>
            <RotateCcw className="h-3.5 w-3.5 mr-1" />
            Clear
          </GButton>
          {parsed.valid && (
            <GButton variant="outline" size="sm" onClick={handleCopyUrl}>
              {copied ? (
                <Check className="h-3.5 w-3.5 mr-1 text-green-600" />
              ) : (
                <Copy className="h-3.5 w-3.5 mr-1" />
              )}
              {copied ? "Copied" : "Copy"}
            </GButton>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <GLabel className="text-xs text-muted-foreground">URL to parse</GLabel>
          <GTextarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste a URL: https://example.com/path?key=value#hash"
            className="mt-1 min-h-[100px] font-mono text-sm"
          />
        </div>

        <UrlParserResult parsed={parsed} />
      </div>
    </div>
  )
}
