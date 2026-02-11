/**
 * List converter: process column-based data with trim, dedupe, sort, etc.
 */

export type SortOption =
  | "none"
  | "alpha-asc"
  | "alpha-desc"
  | "numeric"
  | "reverse"

export interface ListConverterOptions {
  trim: boolean
  removeDuplicates: boolean
  toLowercase: boolean
  keepLineBreaks: boolean
  sort: SortOption
  separator: string
  itemPrefix: string
  itemSuffix: string
  listPrefix: string
  listSuffix: string
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function parseItems(input: string, separator: string): string[] {
  if (!input.trim()) return []
  const sep = separator || ","
  const regex = new RegExp(`[\\n${escapeRegex(sep)}]+`)
  return input.split(regex).filter(Boolean)
}

export function processList(
  input: string,
  options: ListConverterOptions
): string {
  let items = parseItems(input, options.separator)

  if (items.length === 0) return ""

  if (options.trim) {
    items = items.map((s) => s.trim()).filter(Boolean)
  }

  if (options.removeDuplicates) {
    items = [...new Set(items)]
  }

  if (options.toLowercase) {
    items = items.map((s) => s.toLowerCase())
  }

  if (options.sort !== "none") {
    if (options.sort === "alpha-asc") {
      items.sort((a, b) => a.localeCompare(b))
    } else if (options.sort === "alpha-desc") {
      items.sort((a, b) => b.localeCompare(a))
    } else if (options.sort === "numeric") {
      items.sort((a, b) => {
        const na = Number(a)
        const nb = Number(b)
        if (!Number.isNaN(na) && !Number.isNaN(nb)) return na - nb
        return String(a).localeCompare(String(b))
      })
    } else if (options.sort === "reverse") {
      items.reverse()
    }
  }

  const sep = options.keepLineBreaks ? "\n" : options.separator || ","
  let transformed = items.map(
    (item) => `${options.itemPrefix}${item}${options.itemSuffix}`
  )
  const joined = transformed.join(sep)
  return `${options.listPrefix}${joined}${options.listSuffix}`
}
