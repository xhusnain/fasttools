"use client"

import { useState, useMemo, useCallback, useRef, useEffect } from "react"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import {
  getExtensionsForMimeType,
  getMimeTypesForExtension,
  MIME_TYPES_ENTRIES,
} from "@/lib/mime-types"
import { GTable } from "@/ui/gtable"
import { cn } from "@/lib/utils"

export function MimeTypes() {
  const [mimeInput, setMimeInput] = useState("")
  const [extInput, setExtInput] = useState("")
  const [mimeResult, setMimeResult] = useState<string[]>([])
  const [extResult, setExtResult] = useState<string[]>([])
  const [showMimeDropdown, setShowMimeDropdown] = useState(false)
  const [showExtDropdown, setShowExtDropdown] = useState(false)
  const mimeRef = useRef<HTMLDivElement>(null)
  const extRef = useRef<HTMLDivElement>(null)

  const mimeSuggestions = useMemo(() => {
    const q = mimeInput.trim().toLowerCase()
    if (!q) return MIME_TYPES_ENTRIES.slice(0, 50)
    return MIME_TYPES_ENTRIES.filter(
      (e) =>
        e.mimeType.toLowerCase().includes(q) ||
        e.extensions.some((x) => x.toLowerCase().includes(q))
    ).slice(0, 80)
  }, [mimeInput])

  const extSuggestions = useMemo(() => {
    const q = extInput.trim().toLowerCase()
    if (!q) return []
    const exts = new Set<string>()
    MIME_TYPES_ENTRIES.forEach((e) =>
      e.extensions.forEach((x) => {
        if (x.toLowerCase().includes(q) || q.includes(x.replace(".", "")))
          exts.add(x)
      })
    )
    return Array.from(exts).sort().slice(0, 80)
  }, [extInput])

  const handleMimeSelect = useCallback((mime: string) => {
    setMimeInput(mime)
    setMimeResult(getExtensionsForMimeType(mime))
    setShowMimeDropdown(false)
  }, [])

  const handleExtSelect = useCallback((ext: string) => {
    const normalized = ext.startsWith(".") ? ext : `.${ext}`
    setExtInput(normalized)
    setExtResult(getMimeTypesForExtension(normalized))
    setShowExtDropdown(false)
  }, [])

  const handleMimeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value
      setMimeInput(v)
      setShowMimeDropdown(true)
      if (v.trim()) {
        setMimeResult(getExtensionsForMimeType(v))
      } else {
        setMimeResult([])
      }
    },
    []
  )

  const handleExtChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value
      setExtInput(v)
      setShowExtDropdown(true)
      if (v.trim()) {
        const ext = v.startsWith(".") ? v : `.${v}`
        setExtResult(getMimeTypesForExtension(ext))
      } else {
        setExtResult([])
      }
    },
    []
  )

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (
        mimeRef.current &&
        !mimeRef.current.contains(e.target as Node) &&
        extRef.current &&
        !extRef.current.contains(e.target as Node)
      ) {
        setShowMimeDropdown(false)
        setShowExtDropdown(false)
      }
    }
    document.addEventListener("click", close)
    return () => document.removeEventListener("click", close)
  }, [])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mime type to extension */}
        <div ref={mimeRef} className="space-y-3">
          <div>
            <GLabel className="text-base font-medium">Mime type to extension</GLabel>
            <p className="text-sm text-muted-foreground mt-0.5">
              Know which file extensions are associated to a mime-type
            </p>
          </div>
          <div className="relative">
            <GInput
              placeholder="Select your mimetype here... (ex: application/pdf)"
              value={mimeInput}
              onChange={handleMimeChange}
              onFocus={() => setShowMimeDropdown(true)}
              className="w-full"
            />
            {showMimeDropdown && mimeSuggestions.length > 0 && (
              <div
                className={cn(
                  "absolute top-full left-0 right-0 mt-1 z-50 rounded-lg border bg-card shadow-lg",
                  "max-h-60 overflow-y-auto"
                )}
              >
                {mimeSuggestions.map((entry) => (
                  <button
                    key={entry.mimeType}
                    type="button"
                    className="w-full px-3 py-2 text-left text-sm hover:bg-muted/50 flex justify-between items-center"
                    onClick={() => handleMimeSelect(entry.mimeType)}
                  >
                    <span className="truncate">{entry.mimeType}</span>
                    <span className="text-muted-foreground shrink-0 ml-2">
                      {entry.extensions.slice(0, 3).join(", ")}
                    </span>
                  </button>
                ))}
              </div>
            )}
            {mimeResult.length > 0 && (
              <p className="text-sm text-muted-foreground mt-2">
                Extensions: {mimeResult.join(", ")}
              </p>
            )}
          </div>
        </div>

        {/* File extension to mime type */}
        <div ref={extRef} className="space-y-3">
          <div>
            <GLabel className="text-base font-medium">File extension to mime type</GLabel>
            <p className="text-sm text-muted-foreground mt-0.5">
              Know which mime type is associated to a file extension
            </p>
          </div>
          <div className="relative">
            <GInput
              placeholder="Select your extension here... (ex: .pdf)"
              value={extInput}
              onChange={handleExtChange}
              onFocus={() => setShowExtDropdown(true)}
              className="w-full"
            />
            {showExtDropdown && extSuggestions.length > 0 && (
              <div
                className={cn(
                  "absolute top-full left-0 right-0 mt-1 z-50 rounded-lg border bg-card shadow-lg",
                  "max-h-60 overflow-y-auto"
                )}
              >
                {extSuggestions.map((ext) => (
                  <button
                    key={ext}
                    type="button"
                    className="w-full px-3 py-2 text-left text-sm hover:bg-muted/50"
                    onClick={() => handleExtSelect(ext)}
                  >
                    {ext}
                  </button>
                ))}
              </div>
            )}
            {extResult.length > 0 && (
              <p className="text-sm text-muted-foreground mt-2">
                MIME types: {extResult.join(", ")}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Full table */}
      <div className="rounded-xl border overflow-hidden">
        <div className="max-h-[400px] overflow-y-auto">
          <GTable>
            <thead className="bg-muted/50 sticky top-0 z-10">
              <tr>
                <th className="p-3 text-left text-xs font-semibold text-primary">
                  Mime types
                </th>
                <th className="p-3 text-left text-xs font-semibold text-primary">
                  Extensions
                </th>
              </tr>
            </thead>
            <tbody>
              {MIME_TYPES_ENTRIES.map((entry) => (
                <tr
                  key={entry.mimeType}
                  className="border-t border-border/50 hover:bg-muted/30"
                >
                  <td className="p-3 text-sm font-mono">{entry.mimeType}</td>
                  <td className="p-3 text-sm font-mono">
                    {entry.extensions.join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </GTable>
        </div>
      </div>
    </div>
  )
}
