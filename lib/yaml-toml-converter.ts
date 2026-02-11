/**
 * YAML to TOML and TOML to YAML conversion
 */

import yaml from "js-yaml"
import * as TOML from "@iarna/toml"

export function yamlToToml(yamlStr: string): { result: string; error: string | null } {
  if (!yamlStr || !yamlStr.trim()) return { result: "", error: null }
  try {
    const parsed = yaml.load(yamlStr) as Parameters<typeof TOML.stringify>[0]
    const tomlOut = TOML.stringify(parsed)
    return { result: tomlOut, error: null }
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Invalid YAML"
    return { result: "", error: msg }
  }
}

export function tomlToYaml(tomlStr: string): { result: string; error: string | null } {
  if (!tomlStr || !tomlStr.trim()) return { result: "", error: null }
  try {
    const parsed = TOML.parse(tomlStr) as object
    const yamlOut = yaml.dump(parsed, { indent: 2, lineWidth: -1 })
    return { result: yamlOut, error: null }
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Invalid TOML"
    return { result: "", error: msg }
  }
}
