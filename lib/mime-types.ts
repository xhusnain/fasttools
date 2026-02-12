/**
 * MIME types lookup - uses mime-db (IANA-backed database)
 * Powers the MIME types tool for converting MIME types to extensions and vice versa.
 */

import mimeDb from "mime-db"

export interface MimeTypeEntry {
  mimeType: string
  extensions: string[]
}

function toExtensions(exts: string[] | undefined): string[] {
  if (!exts || exts.length === 0) return []
  return exts.map((e) => (e.startsWith(".") ? e : `.${e}`))
}

const entries: MimeTypeEntry[] = Object.entries(mimeDb)
  .filter(([, meta]) => meta?.extensions && meta.extensions.length > 0)
  .map(([mimeType, meta]) => ({
    mimeType,
    extensions: toExtensions(meta.extensions),
  }))
  .sort((a, b) => a.mimeType.localeCompare(b.mimeType))

// MIME type -> extensions
const mimeToExt = new Map<string, string[]>()
entries.forEach(({ mimeType, extensions }) => {
  mimeToExt.set(mimeType, extensions)
})

// Extension -> MIME types (some extensions map to multiple MIME types)
const extToMime = new Map<string, string[]>()
entries.forEach(({ mimeType, extensions }) => {
  extensions.forEach((ext) => {
    const norm = ext.toLowerCase()
    const existing = extToMime.get(norm) ?? []
    if (!existing.includes(mimeType)) existing.push(mimeType)
    extToMime.set(norm, existing)
  })
})

export { entries as MIME_TYPES_ENTRIES }

export function getExtensionsForMimeType(mimeType: string): string[] {
  const norm = mimeType.toLowerCase().trim()
  return mimeToExt.get(norm) ?? []
}

export function getMimeTypesForExtension(ext: string): string[] {
  const e = ext.trim().toLowerCase()
  const withDot = e.startsWith(".") ? e : `.${e}`
  return extToMime.get(withDot) ?? []
}

export function searchMimeTypes(query: string): MimeTypeEntry[] {
  const q = query.toLowerCase().trim()
  if (!q) return entries.slice(0, 100)
  return entries.filter(
    (e) =>
      e.mimeType.toLowerCase().includes(q) ||
      e.extensions.some((ex) => ex.toLowerCase().includes(q))
  )
}
