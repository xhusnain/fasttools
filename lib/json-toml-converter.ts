/**
 * JSON to TOML and TOML to JSON conversion
 */

import * as TOML from "@iarna/toml"

export function jsonToToml(
  jsonStr: string
): { result: string; error: string | null } {
  if (!jsonStr || !jsonStr.trim()) return { result: "", error: null }
  try {
    const parsed = JSON.parse(jsonStr) as Parameters<typeof TOML.stringify>[0]
    const tomlOut = TOML.stringify(parsed)
    return { result: tomlOut, error: null }
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Invalid JSON"
    return { result: "", error: msg }
  }
}

export function tomlToJson(
  tomlStr: string
): { result: string; error: string | null } {
  if (!tomlStr || !tomlStr.trim()) return { result: "", error: null }
  try {
    const parsed = TOML.parse(tomlStr) as object
    const jsonOut = JSON.stringify(parsed, null, 2)
    return { result: jsonOut, error: null }
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Invalid TOML"
    return { result: "", error: msg }
  }
}
