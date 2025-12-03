"use client"

import { useState, useEffect } from "react"
import { GButton } from "@/components/globalcomponents/gbutton"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Copy,
  Check,
  Download,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  ArrowLeftRight
} from "lucide-react"
import { Card } from "@/components/ui/card"
import jsPDF from "jspdf"
import html2canvas from "html2canvas"

type Format = "html" | "markdown" | "json" | "yaml" | "xml" | "csv" | "toml" | "pdf"

interface FormatOption {
  value: Format
  label: string
  description: string
  fileExtension: string
}

const formats: FormatOption[] = [
  { value: "html", label: "HTML", description: "HyperText Markup Language", fileExtension: "html" },
  { value: "markdown", label: "Markdown", description: "Lightweight Markup Language", fileExtension: "md" },
  { value: "json", label: "JSON", description: "JavaScript Object Notation", fileExtension: "json" },
  { value: "yaml", label: "YAML", description: "YAML Ain't Markup Language", fileExtension: "yaml" },
  { value: "xml", label: "XML", description: "eXtensible Markup Language", fileExtension: "xml" },
  { value: "csv", label: "CSV", description: "Comma-Separated Values", fileExtension: "csv" },
  { value: "toml", label: "TOML", description: "Tom's Obvious Minimal Language", fileExtension: "toml" },
  { value: "pdf", label: "PDF", description: "Portable Document Format", fileExtension: "pdf" },
]

export function FormatConverter() {
  const [sourceFormat, setSourceFormat] = useState<Format>("html")
  const [targetFormat, setTargetFormat] = useState<Format>("markdown")
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)
  const [isValid, setIsValid] = useState<boolean | null>(null)
  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null)
  const [isPdfGenerated, setIsPdfGenerated] = useState(false)
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false)

  // Auto-convert on input change with debounce
  useEffect(() => {
    if (!input.trim()) {
      setOutput("")
      setError("")
      setIsValid(null)
      setPdfBlob(null)
      setIsPdfGenerated(false)
      setIsGeneratingPdf(false)
      return
    }

    const timer = setTimeout(() => {
      handleConvert()
    }, 500)

    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, sourceFormat, targetFormat])

  // Sample data for each format
  const getSampleData = () => {
    const samples: Record<Format, string> = {
      html: `<html>
  <head>
    <title>Sample Page</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <p>This is a <strong>sample</strong> HTML document.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
    <a href="https://example.com">Visit Example</a>
  </body>
</html>`,
      markdown: `# Welcome

This is a **sample** Markdown document.

- Item 1
- Item 2

[Visit Example](https://example.com)`,
      json: `{
  "title": "Sample Data",
  "users": [
    {
      "name": "John Doe",
      "age": 30,
      "email": "john@example.com"
    },
    {
      "name": "Jane Smith",
      "age": 25,
      "email": "jane@example.com"
    }
  ],
  "active": true
}`,
      yaml: `title: Sample Data
users:
  - name: John Doe
    age: 30
    email: john@example.com
  - name: Jane Smith
    age: 25
    email: jane@example.com
active: true`,
      xml: `<?xml version="1.0" encoding="UTF-8"?>
<root>
  <title>Sample Data</title>
  <users>
    <user>
      <name>John Doe</name>
      <age>30</age>
      <email>john@example.com</email>
    </user>
    <user>
      <name>Jane Smith</name>
      <age>25</age>
      <email>jane@example.com</email>
    </user>
  </users>
  <active>true</active>
</root>`,
      csv: `name,age,email
John Doe,30,john@example.com
Jane Smith,25,jane@example.com`,
      toml: `title = "Sample Data"
active = true

[[users]]
name = "John Doe"
age = 30
email = "john@example.com"

[[users]]
name = "Jane Smith"
age = 25
email = "jane@example.com"`,
      pdf: `<h1>Sample PDF Document</h1>
<p>This is sample content that will be converted to PDF.</p>
<p>You can include <strong>formatted text</strong>, <em>italics</em>, and more!</p>
<ul>
  <li>Feature 1</li>
  <li>Feature 2</li>
  <li>Feature 3</li>
</ul>`
    }
    return samples[sourceFormat]
  }

  const loadSampleData = () => {
    setInput(getSampleData())
  }

  // Validation functions
  const validateInput = (format: Format, data: string): boolean => {
    try {
      switch (format) {
        case "json":
          JSON.parse(data)
          return true
        case "yaml":
          // Basic YAML validation
          if (!data.trim()) return false
          return true
        case "xml":
          const parser = new DOMParser()
          const doc = parser.parseFromString(data, "text/xml")
          return !doc.querySelector("parsererror")
        case "csv":
          return data.includes(",") || data.includes("\n")
        default:
          return true
      }
    } catch {
      return false
    }
  }

  // Conversion functions
  const htmlToMarkdown = (html: string): string => {
    return html
      // Headers
      .replace(/<h1[^>]*>(.*?)<\/h1>/gi, "# $1\n\n")
      .replace(/<h2[^>]*>(.*?)<\/h2>/gi, "## $1\n\n")
      .replace(/<h3[^>]*>(.*?)<\/h3>/gi, "### $1\n\n")
      .replace(/<h4[^>]*>(.*?)<\/h4>/gi, "#### $1\n\n")
      .replace(/<h5[^>]*>(.*?)<\/h5>/gi, "##### $1\n\n")
      .replace(/<h6[^>]*>(.*?)<\/h6>/gi, "###### $1\n\n")
      // Bold and Italic
      .replace(/<strong[^>]*>(.*?)<\/strong>/gi, "**$1**")
      .replace(/<b[^>]*>(.*?)<\/b>/gi, "**$1**")
      .replace(/<em[^>]*>(.*?)<\/em>/gi, "*$1*")
      .replace(/<i[^>]*>(.*?)<\/i>/gi, "*$1*")
      // Links
      .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, "[$2]($1)")
      // Images
      .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/gi, "![$2]($1)")
      // Lists
      .replace(/<ul[^>]*>/gi, "")
      .replace(/<\/ul>/gi, "\n")
      .replace(/<ol[^>]*>/gi, "")
      .replace(/<\/ol>/gi, "\n")
      .replace(/<li[^>]*>(.*?)<\/li>/gi, "- $1\n")
      // Blockquote
      .replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gi, "> $1\n\n")
      // Code
      .replace(/<code[^>]*>(.*?)<\/code>/gi, "`$1`")
      .replace(/<pre[^>]*><code[^>]*>(.*?)<\/code><\/pre>/gi, "```\n$1\n```\n")
      .replace(/<pre[^>]*>(.*?)<\/pre>/gi, "```\n$1\n```\n")
      // Paragraphs
      .replace(/<p[^>]*>(.*?)<\/p>/gi, "$1\n\n")
      // Line breaks
      .replace(/<br\s*\/?>/gi, "\n")
      // Horizontal rule
      .replace(/<hr\s*\/?>/gi, "\n---\n\n")
      // Remove remaining HTML tags
      .replace(/<[^>]*>/g, "")
      // Decode HTML entities
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .trim()
  }

  const markdownToHtml = (md: string): string => {
    return md
      // Headers
      .replace(/^######\s+(.*?)$/gm, "<h6>$1</h6>")
      .replace(/^#####\s+(.*?)$/gm, "<h5>$1</h5>")
      .replace(/^####\s+(.*?)$/gm, "<h4>$1</h4>")
      .replace(/^###\s+(.*?)$/gm, "<h3>$1</h3>")
      .replace(/^##\s+(.*?)$/gm, "<h2>$1</h2>")
      .replace(/^#\s+(.*?)$/gm, "<h1>$1</h1>")
      // Bold
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      // Italic
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      // Links
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
      // Images
      .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" />')
      // Lists
      .replace(/^\-\s+(.*?)$/gm, "<li>$1</li>")
      // Code
      .replace(/`(.*?)`/g, "<code>$1</code>")
      // Paragraphs
      .replace(/\n\n/g, "</p><p>")
      // Wrap in paragraph tags
      .replace(/^(.+)$/gm, (match) =>
        match.startsWith("<") ? match : `<p>${match}</p>`
      )
  }

  const jsonToYaml = (json: string): string => {
    const obj = JSON.parse(json)
    return objectToYaml(obj)
  }

  const objectToYaml = (obj: any, indent = 0): string => {
    const spaces = "  ".repeat(indent)
    let yaml = ""

    if (Array.isArray(obj)) {
      obj.forEach((item) => {
        if (typeof item === "object" && item !== null) {
          yaml += `${spaces}- ${objectToYaml(item, indent + 1).trim()}\n`
        } else {
          yaml += `${spaces}- ${item}\n`
        }
      })
    } else if (typeof obj === "object" && obj !== null) {
      Object.entries(obj).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          yaml += `${spaces}${key}:\n${objectToYaml(value, indent + 1)}`
        } else if (typeof value === "object" && value !== null) {
          yaml += `${spaces}${key}:\n${objectToYaml(value, indent + 1)}`
        } else {
          const formattedValue = typeof value === "string" ? `"${value}"` : value
          yaml += `${spaces}${key}: ${formattedValue}\n`
        }
      })
    }

    return yaml
  }

  const yamlToJson = (yaml: string): string => {
    const obj = parseYaml(yaml)
    return JSON.stringify(obj, null, 2)
  }

  const parseYaml = (yaml: string): any => {
    const lines = yaml.split("\n").filter(line => line.trim() && !line.trim().startsWith("#"))
    const result: any = {}
    const stack: any[] = [{ obj: result, indent: -1 }]

    lines.forEach((line) => {
      const indent = line.search(/\S/)
      const trimmed = line.trim()

      if (trimmed.startsWith("-")) {
        // Array item
        const value = trimmed.substring(1).trim()
        const parent = stack[stack.length - 1]
        if (!Array.isArray(parent.obj)) {
          const arr: any[] = []
          const key = parent.currentKey
          parent.obj[key] = arr
          parent.obj = arr
        }
        if (value.includes(":")) {
          const obj = {}
          parent.obj.push(obj)
          stack.push({ obj, indent, currentKey: null })
          const [k, v] = value.split(":").map(s => s.trim())
          // @ts-ignore
          obj[k] = parseValue(v)
        } else {
          parent.obj.push(parseValue(value))
        }
      } else if (trimmed.includes(":")) {
        const [key, value] = trimmed.split(":").map(s => s.trim())

        while (stack.length > 1 && stack[stack.length - 1].indent >= indent) {
          stack.pop()
        }

        const parent = stack[stack.length - 1]

        if (value) {
          parent.obj[key] = parseValue(value)
        } else {
          parent.obj[key] = {}
          stack.push({ obj: parent.obj[key], indent, currentKey: key })
        }
      }
    })

    return result
  }

  const parseValue = (value: string): any => {
    const trimmed = value.replace(/^["']|["']$/g, "")
    if (trimmed === "true") return true
    if (trimmed === "false") return false
    if (trimmed === "null") return null
    if (!isNaN(Number(trimmed)) && trimmed !== "") return Number(trimmed)
    return trimmed
  }

  const jsonToXml = (json: string): string => {
    const obj = JSON.parse(json)
    return `<?xml version="1.0" encoding="UTF-8"?>\n<root>\n${objectToXml(obj, 1)}</root>`
  }

  const objectToXml = (obj: any, indent = 0): string => {
    const spaces = "  ".repeat(indent)
    let xml = ""

    if (Array.isArray(obj)) {
      obj.forEach((item) => {
        xml += `${spaces}<item>\n${objectToXml(item, indent + 1)}${spaces}</item>\n`
      })
    } else if (typeof obj === "object" && obj !== null) {
      Object.entries(obj).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((item) => {
            xml += `${spaces}<${key}>\n${objectToXml(item, indent + 1)}${spaces}</${key}>\n`
          })
        } else if (typeof value === "object" && value !== null) {
          xml += `${spaces}<${key}>\n${objectToXml(value, indent + 1)}${spaces}</${key}>\n`
        } else {
          xml += `${spaces}<${key}>${value}</${key}>\n`
        }
      })
    } else {
      return `${spaces}${obj}\n`
    }

    return xml
  }

  const xmlToJson = (xml: string): string => {
    const parser = new DOMParser()
    const doc = parser.parseFromString(xml, "text/xml")
    const obj = xmlNodeToObject(doc.documentElement)
    return JSON.stringify(obj, null, 2)
  }

  const xmlNodeToObject = (node: Element): any => {
    if (node.children.length === 0) {
      return node.textContent
    }

    const obj: any = {}
    const children = Array.from(node.children)

    children.forEach((child) => {
      const key = child.tagName
      const value = xmlNodeToObject(child)

      if (obj[key]) {
        if (!Array.isArray(obj[key])) {
          obj[key] = [obj[key]]
        }
        obj[key].push(value)
      } else {
        obj[key] = value
      }
    })

    return obj
  }

  const jsonToCsv = (json: string): string => {
    const obj = JSON.parse(json)
    let data = obj

    // If it's an object with an array property, use that array
    if (!Array.isArray(obj)) {
      const arrays = Object.values(obj).filter(v => Array.isArray(v))
      if (arrays.length > 0) {
        data = arrays[0]
      } else {
        data = [obj]
      }
    }

    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("JSON must contain an array of objects")
    }

    // Get all unique keys
    const keys = Array.from(
      new Set(data.flatMap(item => Object.keys(item)))
    )

    // Create CSV header
    const header = keys.join(",")

    // Create CSV rows
    const rows = data.map(item =>
      keys.map(key => {
        const value = item[key]
        if (value === null || value === undefined) return ""
        const str = String(value)
        return str.includes(",") || str.includes('"') || str.includes("\n")
          ? `"${str.replace(/"/g, '""')}"`
          : str
      }).join(",")
    )

    return [header, ...rows].join("\n")
  }

  const csvToJson = (csv: string): string => {
    const lines = csv.trim().split("\n")
    if (lines.length < 2) {
      throw new Error("CSV must have at least a header and one data row")
    }

    const headers = lines[0].split(",").map(h => h.trim())
    const data = lines.slice(1).map(line => {
      const values = line.split(",").map(v => v.trim().replace(/^"|"$/g, ""))
      const obj: any = {}
      headers.forEach((header, index) => {
        const value = values[index]
        // Try to parse numbers
        obj[header] = isNaN(Number(value)) ? value : Number(value)
      })
      return obj
    })

    return JSON.stringify(data, null, 2)
  }

  const jsonToToml = (json: string): string => {
    const obj = JSON.parse(json)
    return objectToToml(obj)
  }

  const objectToToml = (obj: any, prefix = ""): string => {
    let toml = ""
    const arrays: any[] = []
    const tables: any[] = []

    Object.entries(obj).forEach(([key, value]) => {
      const fullKey = prefix ? `${prefix}.${key}` : key

      if (Array.isArray(value)) {
        if (value.length > 0 && typeof value[0] === "object") {
          arrays.push({ key: fullKey, value })
        } else {
          toml += `${key} = [${value.map(v =>
            typeof v === "string" ? `"${v}"` : v
          ).join(", ")}]\n`
        }
      } else if (typeof value === "object" && value !== null) {
        tables.push({ key: fullKey, value })
      } else {
        const formattedValue = typeof value === "string" ? `"${value}"` : value
        toml += `${key} = ${formattedValue}\n`
      }
    })

    // Add tables
    tables.forEach(({ key, value }) => {
      toml += `\n[${key}]\n${objectToToml(value)}`
    })

    // Add array of tables
    arrays.forEach(({ key, value }) => {
      value.forEach((item: any) => {
        toml += `\n[[${key}]]\n${objectToToml(item)}`
      })
    })

    return toml
  }

  const tomlToJson = (toml: string): string => {
    const obj: any = {}
    const lines = toml.split("\n").filter(line => line.trim() && !line.trim().startsWith("#"))
    let currentSection: any = obj
    let currentPath: string[] = []

    lines.forEach((line) => {
      const trimmed = line.trim()

      // Array of tables [[section]]
      if (trimmed.startsWith("[[") && trimmed.endsWith("]]")) {
        const path = trimmed.slice(2, -2).split(".")
        currentPath = path

        let target = obj
        for (let i = 0; i < path.length; i++) {
          const key = path[i]
          if (i === path.length - 1) {
            if (!target[key]) target[key] = []
            const newObj = {}
            target[key].push(newObj)
            currentSection = newObj
          } else {
            if (!target[key]) target[key] = {}
            target = target[key]
          }
        }
      }
      // Regular table [section]
      else if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
        const path = trimmed.slice(1, -1).split(".")
        currentPath = path

        let target = obj
        path.forEach((key) => {
          if (!target[key]) target[key] = {}
          target = target[key]
        })
        currentSection = target
      }
      // Key-value pair
      else if (trimmed.includes("=")) {
        const [key, ...valueParts] = trimmed.split("=")
        const value = valueParts.join("=").trim()
        currentSection[key.trim()] = parseTomlValue(value)
      }
    })

    return JSON.stringify(obj, null, 2)
  }

  const parseTomlValue = (value: string): any => {
    // Remove quotes
    if ((value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))) {
      return value.slice(1, -1)
    }

    // Array
    if (value.startsWith("[") && value.endsWith("]")) {
      return value.slice(1, -1).split(",").map(v => parseTomlValue(v.trim()))
    }

    // Boolean
    if (value === "true") return true
    if (value === "false") return false

    // Number
    if (!isNaN(Number(value))) return Number(value)

    return value
  }

  // PDF conversion function using iframe for complete isolation
  const convertToPdf = async (content: string, sourceFormat: Format): Promise<Blob> => {
    // Convert content to HTML first if needed
    let htmlContent = content

    if (sourceFormat === "markdown") {
      htmlContent = markdownToHtml(content)
    } else if (sourceFormat === "json") {
      htmlContent = `<pre style="font-family: monospace; background: #f5f5f5; padding: 15px; border-radius: 5px; overflow-wrap: break-word; white-space: pre-wrap;">${content}</pre>`
    } else if (sourceFormat === "yaml") {
      htmlContent = `<pre style="font-family: monospace; background: #f5f5f5; padding: 15px; border-radius: 5px; overflow-wrap: break-word; white-space: pre-wrap;">${content}</pre>`
    } else if (sourceFormat === "xml") {
      htmlContent = `<pre style="font-family: monospace; background: #f5f5f5; padding: 15px; border-radius: 5px; overflow-wrap: break-word; white-space: pre-wrap;">${content}</pre>`
    } else if (sourceFormat === "csv") {
      const lines = content.split("\n").filter(line => line.trim())
      if (lines.length > 0) {
        const headers = lines[0].split(",")
        const rows = lines.slice(1)
        htmlContent = `<table style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">
          <thead><tr style="background: #2563eb; color: white;">${headers.map(h => `<th style="border: 1px solid #ddd; padding: 12px; text-align: left;">${h.trim()}</th>`).join("")}</tr></thead>
          <tbody>${rows.map((row, idx) => `<tr style="background: ${idx % 2 === 0 ? '#f9f9f9' : 'white'};">${row.split(",").map(cell => `<td style="border: 1px solid #ddd; padding: 10px;">${cell.trim()}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>`
      }
    } else if (sourceFormat === "toml") {
      htmlContent = `<pre style="font-family: monospace; background: #f5f5f5; padding: 15px; border-radius: 5px; overflow-wrap: break-word; white-space: pre-wrap;">${content}</pre>`
    }

    // Create complete HTML document for iframe
    const fullHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: Arial, sans-serif;
            color: #000000;
            background-color: #ffffff;
            padding: 20px;
            line-height: 1.6;
            width: 800px;
          }
          h1 { font-size: 32px; margin: 20px 0 15px 0; color: #1a1a1a; font-weight: bold; }
          h2 { font-size: 28px; margin: 18px 0 12px 0; color: #2a2a2a; font-weight: bold; }
          h3 { font-size: 24px; margin: 16px 0 10px 0; color: #3a3a3a; font-weight: bold; }
          h4 { font-size: 20px; margin: 14px 0 8px 0; color: #4a4a4a; font-weight: bold; }
          h5 { font-size: 18px; margin: 12px 0 6px 0; color: #5a5a5a; font-weight: bold; }
          h6 { font-size: 16px; margin: 10px 0 5px 0; color: #6a6a6a; font-weight: bold; }
          p { margin: 10px 0; color: #333333; }
          ul, ol { margin: 10px 0; padding-left: 30px; }
          li { margin: 5px 0; color: #333333; }
          a { color: #2563eb; text-decoration: underline; }
          strong, b { font-weight: bold; color: #000000; }
          em, i { font-style: italic; }
          code { background: #f5f5f5; padding: 2px 6px; border-radius: 3px; font-family: monospace; color: #c7254e; }
          pre { background: #f5f5f5; padding: 15px; border-radius: 5px; overflow-wrap: break-word; white-space: pre-wrap; font-family: monospace; margin: 10px 0; }
          table { border-collapse: collapse; width: 100%; margin: 15px 0; }
          th { background: #2563eb; color: #ffffff; padding: 12px; text-align: left; border: 1px solid #ddd; font-weight: bold; }
          td { padding: 10px; border: 1px solid #ddd; color: #333333; }
          tr:nth-child(even) { background: #f9f9f9; }
          blockquote { border-left: 4px solid #2563eb; padding-left: 15px; margin: 15px 0; color: #666666; font-style: italic; }
        </style>
      </head>
      <body>
        ${htmlContent}
      </body>
      </html>
    `

    // Create completely hidden iframe
    const iframe = document.createElement("iframe")
    iframe.style.cssText = `
      position: absolute !important;
      top: -10000px !important;
      left: -10000px !important;
      width: 800px !important;
      height: 1000px !important;
      border: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
    `

    document.body.appendChild(iframe)

    // Wait for iframe to be ready
    await new Promise<void>((resolve) => {
      if (iframe.contentWindow) {
        iframe.onload = () => resolve()
        iframe.contentWindow.document.open()
        iframe.contentWindow.document.write(fullHtml)
        iframe.contentWindow.document.close()
      }
    })

    // Wait a bit for rendering
    await new Promise(resolve => setTimeout(resolve, 200))

    try {
      const iframeBody = iframe.contentWindow?.document.body
      if (!iframeBody) {
        throw new Error("Failed to access iframe content")
      }

      // Use html2canvas on the iframe body
      const canvas = await html2canvas(iframeBody, {
        scale: 2,
        backgroundColor: "#ffffff",
        logging: false,
        windowWidth: 800,
        windowHeight: iframeBody.scrollHeight,
      })

      // Create PDF with jsPDF
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      const imgWidth = 210 // A4 width in mm
      const pageHeight = 297 // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight
      let position = 0

      // Add first page
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      // Add additional pages if content is longer than one page
      while (heightLeft > 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      // Return the PDF as a Blob
      return pdf.output("blob")
    } finally {
      // Clean up - remove the iframe
      if (iframe.parentNode) {
        document.body.removeChild(iframe)
      }
    }
  }

  // Main conversion function
  const handleConvert = async () => {
    try {
      setError("")
      setPdfBlob(null)
      setIsPdfGenerated(false)

      if (!input.trim()) {
        setOutput("")
        setIsValid(null)
        return
      }

      // Validate input
      const valid = validateInput(sourceFormat, input)
      setIsValid(valid)

      if (!valid && sourceFormat !== "html" && sourceFormat !== "markdown" && sourceFormat !== "pdf") {
        throw new Error(`Invalid ${sourceFormat.toUpperCase()} format`)
      }

      // Handle PDF conversion
      if (targetFormat === "pdf") {
        setIsGeneratingPdf(true)
        setOutput("") // Clear output to show loading state

        // Wait for React to render the loading UI before manipulating DOM
        await new Promise(resolve => setTimeout(resolve, 50))

        try {
          const pdfBlobResult = await convertToPdf(input, sourceFormat)
          setPdfBlob(pdfBlobResult)
          setIsPdfGenerated(true)
          setOutput("PDF generated successfully! Click the download button to save it.")
        } catch (error) {
          setError(error instanceof Error ? error.message : "Failed to generate PDF")
          setOutput("")
        } finally {
          setIsGeneratingPdf(false)
        }
        return
      }

      let result = ""

      // Convert based on source and target formats
      if (sourceFormat === targetFormat) {
        result = input
      }
      // From HTML
      else if (sourceFormat === "html") {
        if (targetFormat === "markdown") {
          result = htmlToMarkdown(input)
        } else {
          // HTML -> JSON (extract text content)
          const parser = new DOMParser()
          const doc = parser.parseFromString(input, "text/html")
          const text = doc.body.textContent || ""

          if (targetFormat === "json") {
            result = JSON.stringify({ content: text }, null, 2)
          } else if (targetFormat === "yaml") {
            result = `content: "${text}"`
          } else if (targetFormat === "xml") {
            result = `<?xml version="1.0"?>\n<content>${text}</content>`
          } else if (targetFormat === "csv") {
            result = `content\n"${text}"`
          } else if (targetFormat === "toml") {
            result = `content = "${text}"`
          }
        }
      }
      // From Markdown
      else if (sourceFormat === "markdown") {
        if (targetFormat === "html") {
          result = markdownToHtml(input)
        } else {
          // Markdown -> others (via HTML first)
          const html = markdownToHtml(input)
          const parser = new DOMParser()
          const doc = parser.parseFromString(html, "text/html")
          const text = doc.body.textContent || ""

          if (targetFormat === "json") {
            result = JSON.stringify({ content: text }, null, 2)
          } else if (targetFormat === "yaml") {
            result = `content: "${text}"`
          } else if (targetFormat === "xml") {
            result = `<?xml version="1.0"?>\n<content>${text}</content>`
          } else if (targetFormat === "csv") {
            result = `content\n"${text}"`
          } else if (targetFormat === "toml") {
            result = `content = "${text}"`
          }
        }
      }
      // From JSON
      else if (sourceFormat === "json") {
        if (targetFormat === "yaml") result = jsonToYaml(input)
        else if (targetFormat === "xml") result = jsonToXml(input)
        else if (targetFormat === "csv") result = jsonToCsv(input)
        else if (targetFormat === "toml") result = jsonToToml(input)
        else if (targetFormat === "html") result = `<pre>${input}</pre>`
        else if (targetFormat === "markdown") result = `\`\`\`json\n${input}\n\`\`\``
      }
      // From YAML
      else if (sourceFormat === "yaml") {
        if (targetFormat === "json") result = yamlToJson(input)
        else if (targetFormat === "xml") result = jsonToXml(yamlToJson(input))
        else if (targetFormat === "csv") result = jsonToCsv(yamlToJson(input))
        else if (targetFormat === "toml") result = jsonToToml(yamlToJson(input))
        else if (targetFormat === "html") result = `<pre>${input}</pre>`
        else if (targetFormat === "markdown") result = `\`\`\`yaml\n${input}\n\`\`\``
      }
      // From XML
      else if (sourceFormat === "xml") {
        if (targetFormat === "json") result = xmlToJson(input)
        else if (targetFormat === "yaml") result = jsonToYaml(xmlToJson(input))
        else if (targetFormat === "csv") result = jsonToCsv(xmlToJson(input))
        else if (targetFormat === "toml") result = jsonToToml(xmlToJson(input))
        else if (targetFormat === "html") result = `<pre>${input}</pre>`
        else if (targetFormat === "markdown") result = `\`\`\`xml\n${input}\n\`\`\``
      }
      // From CSV
      else if (sourceFormat === "csv") {
        if (targetFormat === "json") result = csvToJson(input)
        else if (targetFormat === "yaml") result = jsonToYaml(csvToJson(input))
        else if (targetFormat === "xml") result = jsonToXml(csvToJson(input))
        else if (targetFormat === "toml") result = jsonToToml(csvToJson(input))
        else if (targetFormat === "html") result = `<pre>${input}</pre>`
        else if (targetFormat === "markdown") result = `\`\`\`csv\n${input}\n\`\`\``
      }
      // From TOML
      else if (sourceFormat === "toml") {
        if (targetFormat === "json") result = tomlToJson(input)
        else if (targetFormat === "yaml") result = jsonToYaml(tomlToJson(input))
        else if (targetFormat === "xml") result = jsonToXml(tomlToJson(input))
        else if (targetFormat === "csv") result = jsonToCsv(tomlToJson(input))
        else if (targetFormat === "html") result = `<pre>${input}</pre>`
        else if (targetFormat === "markdown") result = `\`\`\`toml\n${input}\n\`\`\``
      }

      setOutput(result)
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Conversion failed"
      setError(errorMsg)
      setOutput("")
      setIsValid(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadOutput = () => {
    const targetExt = formats.find(f => f.value === targetFormat)?.fileExtension || "txt"

    // Handle PDF download
    if (targetFormat === "pdf" && pdfBlob) {
      const url = URL.createObjectURL(pdfBlob)
      const a = document.createElement("a")
      a.href = url
      a.download = `converted.pdf`
      a.click()
      URL.revokeObjectURL(url)
      return
    }

    // Handle other formats
    const blob = new Blob([output], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `converted.${targetExt}`
    a.click()
    URL.revokeObjectURL(url)
  }

  const clearAll = () => {
    setInput("")
    setOutput("")
    setError("")
    setIsValid(null)
    setPdfBlob(null)
    setIsPdfGenerated(false)
    setIsGeneratingPdf(false)
  }

  const swapFormats = () => {
    // Don't swap if either format is PDF (PDF is only a target format)
    if (sourceFormat === "pdf" || targetFormat === "pdf") {
      setError("PDF can only be used as a target format for conversion")
      setTimeout(() => setError(""), 3000)
      return
    }

    const tempFormat = sourceFormat
    setSourceFormat(targetFormat)
    setTargetFormat(tempFormat)

    // Optionally swap input/output as well
    if (output && !isPdfGenerated) {
      setInput(output)
      setOutput(input)
    }
  }

  return (
    <div className="space-y-6 relative">
      {/* PDF Generation Overlay - Prevents any visual glitches */}
      {isGeneratingPdf && (
        <div
          className="absolute inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center"
          style={{ minHeight: '400px' }}
        >
          <div className="text-center space-y-4">
            <div className="relative">
              <div className="h-16 w-16 mx-auto border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            </div>
            <p className="text-lg font-semibold text-foreground">Generating PDF Document...</p>
            <p className="text-sm text-muted-foreground">
              Please wait while we create your PDF file
            </p>
          </div>
        </div>
      )}

      {/* Format Selectors */}
      <Card className="p-4 sm:p-6 bg-gradient-to-r from-primary/5 to-secondary-accent/5 border-primary/20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-end">
          {/* Source Format */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Convert From</Label>
            <select
              value={sourceFormat}
              onChange={(e) => setSourceFormat(e.target.value as Format)}
              className="w-full px-4 py-2.5 text-sm rounded-lg border-2 border-primary/30 bg-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
            >
              {formats.map((format) => (
                <option key={format.value} value={format.value} className="text-sm py-2">
                  {format.label} - {format.description}
                </option>
              ))}
            </select>
          </div>

          {/* Swap Button */}
          <div className="hidden md:flex items-center justify-center pb-2">
            <Button
              type="button"
              onClick={swapFormats}
              variant="outline"
              size="icon"
              className="rounded-full h-12 w-12 border-2 border-primary/30 bg-background hover:bg-primary/10 hover:border-primary transition-all group"
              title="Swap formats"
            >
              <ArrowLeftRight className="h-5 w-5 text-primary group-hover:rotate-180 transition-transform duration-300" />
            </Button>
          </div>

          {/* Target Format */}
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Convert To</Label>
            <select
              value={targetFormat}
              onChange={(e) => setTargetFormat(e.target.value as Format)}
              className="w-full px-4 py-2.5 text-sm rounded-lg border-2 border-green-500/30 bg-background focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all font-medium"
            >
              {formats.map((format) => (
                <option key={format.value} value={format.value} className="text-sm py-2">
                  {format.label} - {format.description}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile Swap Button */}
        <div className="md:hidden flex justify-center -mt-2">
          <Button
            type="button"
            onClick={swapFormats}
            variant="outline"
            size="sm"
            className="gap-2 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all group"
            title="Swap formats"
          >
            <ArrowLeftRight className="h-4 w-4 text-primary group-hover:rotate-180 transition-transform duration-300" />
            <span className="text-sm font-medium">Swap Formats</span>
          </Button>
        </div>
      </Card>

      {/* Input Section */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label className="text-base font-semibold">
            Input ({formats.find(f => f.value === sourceFormat)?.label})
          </Label>
          <Button
            variant="outline"
            size="sm"
            onClick={loadSampleData}
            className="gap-2"
          >
            <Sparkles className="h-4 w-4" />
            Try Sample
          </Button>
        </div>
        <Textarea
          placeholder={`Paste your ${formats.find(f => f.value === sourceFormat)?.label} here...`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="min-h-64 font-mono text-sm border-2 border-primary/30 focus:border-primary/60"
        />
        {input && isValid !== null && (
          <div className={`flex items-center gap-2 text-sm ${isValid ? "text-heading-accent" : "text-foreground"}`}>
            {isValid ? (
              <>
                <CheckCircle2 className="h-4 w-4" />
                <span>Valid {formats.find(f => f.value === sourceFormat)?.label} format</span>
              </>
            ) : (
              <>
                <AlertCircle className="h-4 w-4" />
                <span>Format validation warning - conversion will be attempted</span>
              </>
            )}
          </div>
        )}
      </div>

      {/* Error Display */}
      {error && (
        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-destructive">Conversion Error</p>
            <p className="text-sm text-destructive/80">{error}</p>
          </div>
        </div>
      )}

      {/* Output Section */}
      {output && !isGeneratingPdf && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-base font-semibold">
              Output ({formats.find(f => f.value === targetFormat)?.label})
            </Label>
            <div className="flex gap-2">
              {!isPdfGenerated && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyToClipboard}
                  className="gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy
                    </>
                  )}
                </Button>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={downloadOutput}
                className="gap-2"
              >
                <Download className="h-4 w-4" />
                Download
              </Button>
            </div>
          </div>
          {isPdfGenerated ? (
            <div className="min-h-64 flex items-center justify-center border-2 border-green-500/30 bg-green-50/5 rounded-md p-8">
              <div className="text-center space-y-4">
                <CheckCircle2 className="h-16 w-16 text-heading-accent mx-auto" />
                <p className="text-lg font-semibold text-heading-accent">{output}</p>
                <p className="text-sm text-muted-foreground">
                  Your PDF has been generated and is ready to download.
                </p>
              </div>
            </div>
          ) : (
            <Textarea
              value={output}
              readOnly
              className="min-h-64 font-mono text-sm border-2 border-green-500/30 bg-green-50/5"
            />
          )}
        </div>
      )}

      {/* Action Button */}
      {(input || output) && (
        <div className="flex justify-end">
          <Button
            onClick={clearAll}
            variant="outline"
            disabled={!input && !output}
          >
            Clear All
          </Button>
        </div>
      )}
    </div>
  )
}

