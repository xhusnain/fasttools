/**
 * XML to JSON and JSON to XML conversion
 */

function xmlNodeToObject(node: Element): Record<string, unknown> | string {
  const hasChildren = node.children.length > 0
  const hasText = node.textContent && node.textContent.trim().length > 0
  const attrs: Record<string, string> = {}
  for (let i = 0; i < node.attributes.length; i++) {
    const a = node.attributes[i]
    attrs[a.name] = a.value
  }

  if (!hasChildren && !hasText && Object.keys(attrs).length === 0) {
    return ""
  }

  if (!hasChildren && !hasText && Object.keys(attrs).length > 0) {
    return { _attributes: attrs }
  }

  const obj: Record<string, unknown> = {}

  if (Object.keys(attrs).length > 0) {
    obj._attributes = attrs
  }

  if (hasChildren) {
    const children = Array.from(node.children)
    const childCounts: Record<string, number> = {}

    children.forEach((child) => {
      const key = child.tagName
      childCounts[key] = (childCounts[key] || 0) + 1
    })

    children.forEach((child) => {
      const key = child.tagName
      const value = xmlNodeToObject(child)

      if (childCounts[key]! > 1) {
        if (!obj[key]) {
          obj[key] = []
        }
        ;(obj[key] as unknown[]).push(value)
      } else {
        obj[key] = value
      }
    })
  } else if (hasText) {
    obj._text = node.textContent!.trim()
  }

  if (Object.keys(obj).length === 1 && obj._text !== undefined) {
    return obj._text as string
  }
  if (Object.keys(obj).length === 1 && obj._attributes !== undefined) {
    return obj
  }

  return obj
}

export function xmlToJson(
  xmlStr: string
): { result: string; error: string | null } {
  if (!xmlStr || !xmlStr.trim()) return { result: "", error: null }
  try {
    const parser = new DOMParser()
    const doc = parser.parseFromString(xmlStr, "text/xml")
    const parseError = doc.querySelector("parsererror")
    if (parseError) {
      return { result: "", error: parseError.textContent || "Invalid XML" }
    }
    const root = doc.documentElement
    const tagName = root.tagName
    const inner = xmlNodeToObject(root)
    const obj =
      typeof inner === "string"
        ? { [tagName]: inner }
        : { [tagName]: inner }
    const output = JSON.stringify(obj, null, 2)
    return { result: output, error: null }
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Invalid XML"
    return { result: "", error: msg }
  }
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

function objectToXml(
  obj: unknown,
  rootTag = "root",
  indent = 0
): string {
  const spaces = "  ".repeat(indent)

  if (obj === null || obj === undefined) {
    return ""
  }

  if (typeof obj !== "object") {
    return `${spaces}<${rootTag}>${escapeXml(String(obj))}</${rootTag}>\n`
  }

  if (Array.isArray(obj)) {
    return obj
      .map((item) => objectToXml(item, rootTag, indent))
      .join("")
  }

  const record = obj as Record<string, unknown>
  const attrs = record._attributes as Record<string, string> | undefined
  const text = record._text as string | undefined
  const rest = { ...record }
  delete rest._attributes
  delete rest._text

  const attrStr =
    attrs && Object.keys(attrs).length > 0
      ? " " +
        Object.entries(attrs)
          .map(([k, v]) => `${k}="${escapeXml(String(v))}"`)
          .join(" ")
      : ""

  const children = Object.entries(rest).filter(
    ([_, v]) => v !== undefined && v !== null
  )

  if (children.length === 0 && text === undefined) {
    return `${spaces}<${rootTag}${attrStr}/>\n`
  }

  if (children.length === 0 && text !== undefined) {
    return `${spaces}<${rootTag}${attrStr}>${escapeXml(text)}</${rootTag}>\n`
  }

  let inner = ""
  children.forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => {
        inner += objectToXml(item, key, indent + 1)
      })
    } else {
      inner += objectToXml(value, key, indent + 1)
    }
  })

  return `${spaces}<${rootTag}${attrStr}>\n${inner}${spaces}</${rootTag}>\n`
}

export function jsonToXml(
  jsonStr: string
): { result: string; error: string | null } {
  if (!jsonStr || !jsonStr.trim()) return { result: "", error: null }
  try {
    const obj = JSON.parse(jsonStr) as unknown
    const xml =
      '<?xml version="1.0" encoding="UTF-8"?>\n' +
      objectToXml(obj, "root", 0)
    return { result: xml.trim(), error: null }
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Invalid JSON"
    return { result: "", error: msg }
  }
}
