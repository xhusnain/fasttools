/**
 * URL Parser - Parse URLs into components (scheme, host, path, query, etc.)
 * Works like url parser js, url parser python, url query string parser.
 */

export interface ParsedUrl {
  valid: boolean
  raw: string
  scheme?: string
  host?: string
  hostname?: string
  port?: string
  pathname?: string
  search?: string
  hash?: string
  username?: string
  password?: string
  origin?: string
  queryParams: Array<{ key: string; value: string }>
  error?: string
}

/**
 * Parse a URL into its components. Works like URL.parse() in Node.js
 * or urlparse in Python. url parser decode for query string values.
 */
export function parseUrl(input: string): ParsedUrl {
  const trimmed = (input || "").trim()
  const result: ParsedUrl = {
    valid: false,
    raw: trimmed,
    queryParams: [],
  }

  if (!trimmed) {
    return result
  }

  try {
    // Try with base for relative URLs (e.g. /path?foo=bar)
    const base = trimmed.startsWith("/") || trimmed.startsWith("?")
      ? "https://example.com"
      : undefined
    const url = new URL(trimmed, base)

    result.valid = true
    result.scheme = url.protocol.replace(/:$/, "")
    result.host = url.host
    result.hostname = url.hostname
    result.port = url.port || undefined
    result.pathname = url.pathname
    result.search = url.search || undefined
    result.hash = url.hash || undefined
    result.username = url.username || undefined
    result.password = url.password ? "••••••" : undefined
    result.origin = url.origin

    // url query string parser: extract all query params (decoded)
    url.searchParams.forEach((value, key) => {
      result.queryParams.push({ key, value })
    })
  } catch (e) {
    result.error = e instanceof Error ? e.message : "Invalid URL"
  }

  return result
}
