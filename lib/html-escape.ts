/**
 * HTML escape and unescape - convert special characters to/from HTML entities
 */

const ENTITY_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
}

const REVERSE_ENTITY_MAP: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&apos;": "'",
}

export function escapeHtml(str: string): string {
  if (!str) return ""
  return str.replace(/[&<>"']/g, (char) => ENTITY_MAP[char] ?? char)
}

export function unescapeHtml(str: string): string {
  if (!str) return ""
  return str
    .replace(/&(?:amp|lt|gt|quot|apos);/gi, (entity) => {
      const key = entity.toLowerCase()
      return REVERSE_ENTITY_MAP[key] ?? entity
    })
    .replace(/&#(\d+);/g, (_, num) => String.fromCharCode(parseInt(num, 10)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) =>
      String.fromCharCode(parseInt(hex, 16))
    )
}
