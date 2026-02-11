/**
 * YAML to JSON and JSON to YAML conversion
 */

import yaml from "js-yaml"

export function yamlToJson(yamlStr: string): { result: string; error: string | null } {
  if (!yamlStr || !yamlStr.trim()) return { result: "", error: null }
  try {
    const parsed = yaml.load(yamlStr)
    const json = JSON.stringify(parsed, null, 2)
    return { result: json, error: null }
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Invalid YAML"
    return { result: "", error: msg }
  }
}

export function jsonToYaml(jsonStr: string): { result: string; error: string | null } {
  if (!jsonStr || !jsonStr.trim()) return { result: "", error: null }
  try {
    const parsed = JSON.parse(jsonStr)
    const yamlOut = yaml.dump(parsed, { indent: 2, lineWidth: -1 })
    return { result: yamlOut, error: null }
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Invalid JSON"
    return { result: "", error: msg }
  }
}
