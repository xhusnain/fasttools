"use client"

import { useState, useMemo } from "react"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import {
  ALL_STATUS_CODES,
  HTTP_METHODS,
  searchStatusCodes,
  type StatusCodeEntry,
  type Protocol,
} from "@/data/http-status-codes"
import { Search, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const PROTOCOLS: { value: Protocol | "ALL"; label: string }[] = [
  { value: "ALL", label: "All" },
  { value: "HTTP", label: "HTTP" },
  { value: "SMTP", label: "SMTP" },
  { value: "FTP", label: "FTP" },
]

const CATEGORIES = [
  "1xx",
  "2xx",
  "3xx",
  "4xx",
  "5xx",
]

function StatusRow({ entry }: { entry: StatusCodeEntry }) {
  const [expanded, setExpanded] = useState(false)
  const is1xx = entry.category.startsWith("1")
  const is2xx = entry.category.startsWith("2")
  const is3xx = entry.category.startsWith("3")
  const is4xx = entry.category.startsWith("4")
  const is5xx = entry.category.startsWith("5")
  const badgeColor = is1xx
    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
    : is2xx
      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      : is3xx
        ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
        : is4xx
          ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
          : is5xx
            ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
            : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"

  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted/30",
        expanded && "ring-1 ring-primary/20"
      )}
    >
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left flex items-start gap-3"
      >
        <div className="flex-shrink-0 w-14 text-center">
          <span
            className={cn(
              "inline-block px-2 py-0.5 rounded text-sm font-semibold",
              badgeColor
            )}
          >
            {entry.code}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-medium text-foreground">{entry.name}</span>
            <span className="text-xs text-muted-foreground px-1.5 py-0.5 rounded bg-muted">
              {entry.protocol}
            </span>
            <span className="text-xs text-muted-foreground">{entry.category}</span>
          </div>
          <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">
            {entry.description}
          </p>
        </div>
        <ChevronDown
          className={cn(
            "flex-shrink-0 h-5 w-5 text-muted-foreground transition-transform",
            expanded && "rotate-180"
          )}
        />
      </button>
      {expanded && (
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">When / Where / Why:</span>{" "}
            {entry.whenWhereWhy}
          </p>
        </div>
      )}
    </div>
  )
}

export function HttpStatusCodes() {
  const [search, setSearch] = useState("")
  const [protocol, setProtocol] = useState<Protocol | "ALL">("HTTP")
  const [category, setCategory] = useState<string>("ALL")

  const filtered = useMemo(() => {
    let list = protocol === "ALL" ? ALL_STATUS_CODES : searchStatusCodes("", protocol)
    if (category !== "ALL") {
      list = list.filter((e) => e.category === category)
    }
    if (search.trim()) {
      list = searchStatusCodes(search, protocol === "ALL" ? undefined : protocol)
      if (category !== "ALL") {
        list = list.filter((e) => e.category === category)
      }
    }
    return list
  }, [search, protocol, category])

  return (
    <div className="space-y-6">
      {/* Search & filters */}
      <div className="space-y-4">
        <div className="space-y-2">
          <GLabel className="text-base font-medium">Search status codes</GLabel>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <GInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by code, name, description... (e.g. 404, 200, timeout)"
              className="pl-10"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Protocol:</span>
            <div className="flex gap-1">
              {PROTOCOLS.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => setProtocol(p.value)}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                    protocol === p.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80 text-muted-foreground"
                  )}
                >
                  {p.value === "ALL" ? "All" : p.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Category:</span>
              <div className="flex gap-1 flex-wrap">
                <button
                  type="button"
                  onClick={() => setCategory("ALL")}
                  className={cn(
                    "px-2.5 py-1 rounded text-sm font-medium transition-colors",
                    category === "ALL"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80 text-muted-foreground"
                  )}
                >
                  All
                </button>
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCategory(c)}
                    className={cn(
                      "px-2.5 py-1 rounded text-sm font-medium transition-colors",
                      category === c
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80 text-muted-foreground"
                    )}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground">
        {filtered.length} status code{filtered.length !== 1 ? "s" : ""} found
      </p>

      {/* Status codes list */}
      <div className="grid gap-3">
        {filtered.length === 0 ? (
          <div className="rounded-lg border border-dashed border-border p-8 text-center text-muted-foreground">
            No status codes match your search. Try different filters.
          </div>
        ) : (
          filtered.map((entry) => (
            <StatusRow key={`${entry.protocol}-${entry.code}`} entry={entry} />
          ))
        )}
      </div>

      {/* HTTP Methods reference */}
      <div className="mt-10 space-y-4">
        <h3 className="text-lg font-semibold text-foreground">HTTP Methods</h3>
        <p className="text-sm text-muted-foreground">
          HTTP stands for Hypertext Transfer Protocol. Common methods:
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-3 text-left font-medium">Method</th>
                <th className="px-4 py-3 text-left font-medium">Description</th>
                <th className="px-4 py-3 text-left font-medium">Safe</th>
                <th className="px-4 py-3 text-left font-medium">Idempotent</th>
              </tr>
            </thead>
            <tbody>
              {HTTP_METHODS.map((m) => (
                <tr key={m.method} className="border-t border-border">
                  <td className="px-4 py-3 font-mono font-medium">{m.method}</td>
                  <td className="px-4 py-3 text-muted-foreground">{m.description}</td>
                  <td className="px-4 py-3">{m.safe ? "Yes" : "No"}</td>
                  <td className="px-4 py-3">{m.idempotent ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
