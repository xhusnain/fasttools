/**
 * Semantic JSON diff - compares two JSON values and returns differences.
 * Used by JSON Diff tool. Handles objects, arrays, primitives.
 */

export type DiffType = "added" | "removed" | "modified"

export interface DiffEntry {
  path: string
  type: DiffType
  oldValue?: unknown
  newValue?: unknown
}

function formatValue(val: unknown): string {
  if (val === null) return "null"
  if (val === undefined) return "undefined"
  if (typeof val === "string") return JSON.stringify(val)
  if (typeof val === "number" || typeof val === "boolean") return String(val)
  if (Array.isArray(val)) return "[...]"
  if (typeof val === "object") return "{...}"
  return String(val)
}

function compareValues(a: unknown, b: unknown, path: string, entries: DiffEntry[]): void {
  if (a === b) return
  const aType = Array.isArray(a) ? "array" : typeof a
  const bType = Array.isArray(b) ? "array" : typeof b
  if (aType !== bType) {
    entries.push({ path, type: "modified", oldValue: a, newValue: b })
    return
  }
  if (aType === "object" && a !== null && b !== null) {
    diffObjects(a as Record<string, unknown>, b as Record<string, unknown>, path, entries)
    return
  }
  if (aType === "array") {
    diffArrays(a as unknown[], b as unknown[], path, entries)
    return
  }
  entries.push({ path, type: "modified", oldValue: a, newValue: b })
}

function diffObjects(
  a: Record<string, unknown>,
  b: Record<string, unknown>,
  basePath: string,
  entries: DiffEntry[]
): void {
  const aKeys = new Set(Object.keys(a))
  const bKeys = new Set(Object.keys(b))

  for (const k of bKeys) {
    const path = basePath ? `${basePath}.${k}` : k
    if (!aKeys.has(k)) {
      entries.push({ path, type: "added", newValue: b[k] })
    } else {
      const aVal = a[k]
      const bVal = b[k]
      if (aVal === bVal) continue
      const aObj = aVal !== null && typeof aVal === "object"
      const bObj = bVal !== null && typeof bVal === "object"
      const aArr = Array.isArray(aVal)
      const bArr = Array.isArray(bVal)
      if (aObj && bObj && !aArr && !bArr) {
        diffObjects(
          aVal as Record<string, unknown>,
          bVal as Record<string, unknown>,
          path,
          entries
        )
      } else if (aArr && bArr) {
        diffArrays(aVal as unknown[], bVal as unknown[], path, entries)
      } else {
        entries.push({ path, type: "modified", oldValue: aVal, newValue: bVal })
      }
    }
  }
  for (const k of aKeys) {
    if (!bKeys.has(k)) {
      const path = basePath ? `${basePath}.${k}` : k
      entries.push({ path, type: "removed", oldValue: a[k] })
    }
  }
}

function diffArrays(
  a: unknown[],
  b: unknown[],
  basePath: string,
  entries: DiffEntry[]
): void {
  const maxLen = Math.max(a.length, b.length)
  for (let i = 0; i < maxLen; i++) {
    const path = `${basePath}[${i}]`
    if (i >= a.length) {
      entries.push({ path, type: "added", newValue: b[i] })
    } else if (i >= b.length) {
      entries.push({ path, type: "removed", oldValue: a[i] })
    } else {
      const aVal = a[i]
      const bVal = b[i]
      if (aVal === bVal) continue
      const aObj = aVal !== null && typeof aVal === "object" && !Array.isArray(aVal)
      const bObj = bVal !== null && typeof bVal === "object" && !Array.isArray(bVal)
      const aArr = Array.isArray(aVal)
      const bArr = Array.isArray(bVal)
      if (aObj && bObj) {
        diffObjects(
          aVal as Record<string, unknown>,
          bVal as Record<string, unknown>,
          path,
          entries
        )
      } else if (aArr && bArr) {
        diffArrays(aVal as unknown[], bVal as unknown[], path, entries)
      } else {
        entries.push({ path, type: "modified", oldValue: aVal, newValue: bVal })
      }
    }
  }
}

export function computeJsonDiff(
  jsonA: string,
  jsonB: string
): { entries: DiffEntry[]; errorA?: string; errorB?: string } {
  let a: unknown
  let b: unknown
  let errorA: string | undefined
  let errorB: string | undefined

  try {
    a = JSON.parse(jsonA.trim() || "null")
  } catch (e) {
    errorA = e instanceof Error ? e.message : "Invalid JSON"
    a = null
  }
  try {
    b = JSON.parse(jsonB.trim() || "null")
  } catch (e) {
    errorB = e instanceof Error ? e.message : "Invalid JSON"
    b = null
  }

  if (errorA || errorB) {
    return { entries: [], errorA, errorB }
  }

  const entries: DiffEntry[] = []
  const basePath = ""
  const aObj = a !== null && typeof a === "object" && !Array.isArray(a)
  const bObj = b !== null && typeof b === "object" && !Array.isArray(b)
  const aArr = Array.isArray(a)
  const bArr = Array.isArray(b)

  if (aObj && bObj) {
    diffObjects(a as Record<string, unknown>, b as Record<string, unknown>, basePath, entries)
  } else if (aArr && bArr) {
    diffArrays(a as unknown[], b as unknown[], basePath, entries)
  } else {
    compareValues(a, b, "(root)", entries)
  }

  return { entries, errorA, errorB }
}

export { formatValue }
