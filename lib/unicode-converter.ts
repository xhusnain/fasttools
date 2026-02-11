/**
 * Text to Unicode and Unicode to Text conversion
 */

export function textToUnicode(text: string, format: "U+" | "\\u" = "U+"): string {
  if (!text) return ""
  return text
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0)
      if (format === "U+") {
        return `U+${code.toString(16).toUpperCase().padStart(4, "0")}`
      }
      return `\\u${code.toString(16).padStart(4, "0")}`
    })
    .join(" ")
}

export function unicodeToText(unicode: string): { result: string; error: string | null } {
  if (!unicode || !unicode.trim()) return { result: "", error: null }

  const input = unicode.trim()
  const chars: string[] = []

  const uPlusRegex = /U\+([0-9A-Fa-f]{4,6})/g
  const uEscapeRegex = /\\u([0-9A-Fa-f]{4})/g
  const htmlDecimalRegex = /&#(\d+);/g
  const htmlHexRegex = /&#x([0-9A-Fa-f]+);/gi

  const allMatches: { index: number; code: number }[] = []

  let m
  while ((m = uPlusRegex.exec(input)) !== null) {
    const code = parseInt(m[1], 16)
    if (code >= 0 && code <= 0x10ffff) allMatches.push({ index: m.index, code })
  }
  while ((m = uEscapeRegex.exec(input)) !== null) {
    const code = parseInt(m[1], 16)
    if (code >= 0 && code <= 0x10ffff) allMatches.push({ index: m.index, code })
  }
  while ((m = htmlDecimalRegex.exec(input)) !== null) {
    const code = parseInt(m[1], 10)
    if (code >= 0 && code <= 0x10ffff) allMatches.push({ index: m.index, code })
  }
  while ((m = htmlHexRegex.exec(input)) !== null) {
    const code = parseInt(m[1], 16)
    if (code >= 0 && code <= 0x10ffff) allMatches.push({ index: m.index, code })
  }

  if (allMatches.length > 0) {
    allMatches.sort((a, b) => a.index - b.index)
    try {
      const result = allMatches.map(({ code }) => String.fromCodePoint(code)).join("")
      return { result, error: null }
    } catch {
      return { result: "", error: "Invalid Unicode code point" }
    }
  }

  const decimalParts = input.split(/\s+/).filter(Boolean)
  if (decimalParts.every((p) => /^\d+$/.test(p))) {
    const codes = decimalParts.map((p) => parseInt(p, 10))
    if (codes.every((c) => c >= 0 && c <= 0x10ffff)) {
      try {
        const result = codes.map((c) => String.fromCodePoint(c)).join("")
        return { result, error: null }
      } catch {
        return { result: "", error: "Invalid Unicode code point" }
      }
    }
  }

  return { result: "", error: "Enter valid Unicode (e.g. U+0048 U+0065, or 72 101 108)" }
}
