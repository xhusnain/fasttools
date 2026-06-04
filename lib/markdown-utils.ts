const legacyHtmlToMarkdown = (html: string): string => {
  return html
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, "# $1\n\n")
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, "## $1\n\n")
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, "### $1\n\n")
    .replace(/<h4[^>]*>(.*?)<\/h4>/gi, "#### $1\n\n")
    .replace(/<h5[^>]*>(.*?)<\/h5>/gi, "##### $1\n\n")
    .replace(/<h6[^>]*>(.*?)<\/h6>/gi, "###### $1\n\n")
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, "**$1**")
    .replace(/<b[^>]*>(.*?)<\/b>/gi, "**$1**")
    .replace(/<em[^>]*>(.*?)<\/em>/gi, "*$1*")
    .replace(/<i[^>]*>(.*?)<\/i>/gi, "*$1*")
    .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, "[$2]($1)")
    .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/gi, "![$2]($1)")
    .replace(/<li[^>]*>(.*?)<\/li>/gi, "- $1\n")
    .replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gi, "> $1\n\n")
    .replace(/<code[^>]*>(.*?)<\/code>/gi, "`$1`")
    .replace(/<pre[^>]*><code[^>]*>(.*?)<\/code><\/pre>/gi, "```\n$1\n```\n")
    .replace(/<pre[^>]*>(.*?)<\/pre>/gi, "```\n$1\n```\n")
    .replace(/<p[^>]*>(.*?)<\/p>/gi, "$1\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<hr\s*\/?>/gi, "\n---\n\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim()
}

const renderChildren = (node: Node, listDepth = 0): string => {
  return Array.from(node.childNodes).map((child) => renderNode(child, listDepth)).join("")
}

const cleanInline = (value: string): string => {
  return value.replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n")
}

const tableToMarkdown = (table: HTMLTableElement): string => {
  const rows = Array.from(table.querySelectorAll("tr")).map((row) =>
    Array.from(row.children)
      .filter((cell) => cell.tagName.toLowerCase() === "th" || cell.tagName.toLowerCase() === "td")
      .map((cell) => cleanInline(renderChildren(cell).trim()).replace(/\|/g, "\\|"))
  )

  if (!rows.length) return ""

  const header = rows[0]
  const body = rows.slice(1)
  const separator = header.map(() => "---")
  return [
    `| ${header.join(" | ")} |`,
    `| ${separator.join(" | ")} |`,
    ...body.map((row) => `| ${row.join(" | ")} |`),
  ].join("\n") + "\n\n"
}

const renderList = (element: HTMLElement, ordered: boolean, listDepth: number): string => {
  const items = Array.from(element.children).filter((child) => child.tagName.toLowerCase() === "li")
  return items
    .map((item, index) => {
      const marker = ordered ? `${index + 1}.` : "-"
      const indent = "  ".repeat(listDepth)
      const rendered = renderChildren(item, listDepth + 1).trim()
      return `${indent}${marker} ${rendered.replace(/\n/g, `\n${indent}  `)}`
    })
    .join("\n") + "\n\n"
}

const renderNode = (node: Node, listDepth = 0): string => {
  if (node.nodeType === Node.TEXT_NODE) return node.textContent ?? ""
  if (node.nodeType !== Node.ELEMENT_NODE) return ""

  const element = node as HTMLElement
  const tag = element.tagName.toLowerCase()
  const text = () => cleanInline(renderChildren(element, listDepth).trim())

  if (/^h[1-6]$/.test(tag)) {
    const level = Number(tag[1])
    return `${"#".repeat(level)} ${text()}\n\n`
  }

  switch (tag) {
    case "p":
      return `${text()}\n\n`
    case "strong":
    case "b":
      return `**${text()}**`
    case "em":
    case "i":
      return `*${text()}*`
    case "s":
    case "del":
    case "strike":
      return `~~${text()}~~`
    case "a": {
      const href = element.getAttribute("href") || ""
      return href ? `[${text()}](${href})` : text()
    }
    case "img": {
      const src = element.getAttribute("src") || ""
      const alt = element.getAttribute("alt") || ""
      return src ? `![${alt}](${src})` : ""
    }
    case "ul":
      return renderList(element, false, listDepth)
    case "ol":
      return renderList(element, true, listDepth)
    case "blockquote":
      return text().split("\n").map((line) => `> ${line}`).join("\n") + "\n\n"
    case "pre":
      return `\`\`\`\n${element.textContent?.trim() || ""}\n\`\`\`\n\n`
    case "code":
      return element.parentElement?.tagName.toLowerCase() === "pre" ? "" : `\`${element.textContent || ""}\``
    case "br":
      return "\n"
    case "hr":
      return "\n---\n\n"
    case "table":
      return tableToMarkdown(element as HTMLTableElement)
    case "script":
    case "style":
    case "noscript":
      return ""
    default:
      return renderChildren(element, listDepth)
  }
}

/**
 * Converts common article/document HTML into Markdown.
 * Complex custom layouts may still need manual cleanup after conversion.
 */
export const convertHtmlToMarkdown = (html: string): string => {
  if (typeof DOMParser === "undefined" || typeof Node === "undefined") {
    return legacyHtmlToMarkdown(html)
  }

  const parser = new DOMParser()
  const document = parser.parseFromString(`<main>${html}</main>`, "text/html")
  const root = document.body.firstElementChild || document.body
  return cleanInline(renderChildren(root).trim())
}
