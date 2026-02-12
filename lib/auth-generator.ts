/**
 * Auth Generator - Generate HTTP authorization headers.
 * Supports Basic Auth (encode/decode), Bearer token, API Key.
 */

/**
 * Basic Auth encode: username:password → Authorization: Basic <base64>
 */
export function basicAuthEncode(username: string, password: string): string {
  const credentials = `${username}:${password}`
  const encoded = typeof btoa !== "undefined"
    ? btoa(credentials)
    : Buffer.from(credentials, "utf-8").toString("base64")
  return `Authorization: Basic ${encoded}`
}

/**
 * Basic Auth decode: Authorization: Basic <base64> or raw base64 → username:password
 */
export function basicAuthDecode(input: string): { username: string; password: string } | null {
  const trimmed = (input || "").trim()
  if (!trimmed) return null

  let base64 = trimmed
  const basicMatch = trimmed.match(/^Authorization:\s*Basic\s+(.+)$/i)
  if (basicMatch) base64 = basicMatch[1].trim()

  try {
    const decoded = typeof atob !== "undefined"
      ? atob(base64)
      : Buffer.from(base64, "base64").toString("utf-8")
    const colonIdx = decoded.indexOf(":")
    if (colonIdx === -1) return { username: decoded, password: "" }
    return {
      username: decoded.slice(0, colonIdx),
      password: decoded.slice(colonIdx + 1),
    }
  } catch {
    return null
  }
}

/**
 * Bearer token header
 */
export function bearerTokenHeader(token: string): string {
  return `Authorization: Bearer ${(token || "").trim()}`
}

/**
 * API Key header (X-API-Key or custom)
 */
export function apiKeyHeader(
  key: string,
  headerName: string = "X-API-Key"
): string {
  const name = (headerName || "X-API-Key").trim() || "X-API-Key"
  return `${name}: ${(key || "").trim()}`
}
