import { marked, type Token, type Tokens } from "marked"

interface RunStyle {
  bold?: boolean
  italics?: boolean
  strike?: boolean
  code?: boolean
}

export interface ConversionStats {
  headings: number
  paragraphs: number
  lists: number
  tables: number
  codeBlocks: number
}

const CODE_FONT = "Consolas"
const CODE_SHADE = "F2F2F2"
const INDENT_STEP = 720

function decodeEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
}

export async function markdownToDocxBlob(markdown: string): Promise<{ blob: Blob; stats: ConversionStats }> {
  const docx = await import("docx")
  const {
    Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell,
    WidthType, ExternalHyperlink, BorderStyle, ShadingType, AlignmentType, LevelFormat,
  } = docx

  type Block = InstanceType<typeof Paragraph> | InstanceType<typeof Table>
  type Run = InstanceType<typeof TextRun> | InstanceType<typeof ExternalHyperlink>

  const stats: ConversionStats = { headings: 0, paragraphs: 0, lists: 0, tables: 0, codeBlocks: 0 }
  const numberingReferences: string[] = []
  const headingLevels = [
    HeadingLevel.HEADING_1, HeadingLevel.HEADING_2, HeadingLevel.HEADING_3,
    HeadingLevel.HEADING_4, HeadingLevel.HEADING_5, HeadingLevel.HEADING_6,
  ]

  const makeRun = (text: string, style: RunStyle) =>
    new TextRun({
      text: decodeEntities(text),
      bold: style.bold,
      italics: style.italics,
      strike: style.strike,
      font: style.code ? CODE_FONT : undefined,
      shading: style.code ? { type: ShadingType.CLEAR, fill: CODE_SHADE } : undefined,
    })

  const inlineRuns = (tokens: Token[] | undefined, style: RunStyle = {}): Run[] => {
    const runs: Run[] = []
    for (const token of tokens ?? []) {
      switch (token.type) {
        case "text": {
          const textToken = token as Tokens.Text
          if (textToken.tokens?.length) runs.push(...inlineRuns(textToken.tokens, style))
          else runs.push(makeRun(textToken.text, style))
          break
        }
        case "escape":
          runs.push(makeRun((token as Tokens.Escape).text, style))
          break
        case "strong":
          runs.push(...inlineRuns((token as Tokens.Strong).tokens, { ...style, bold: true }))
          break
        case "em":
          runs.push(...inlineRuns((token as Tokens.Em).tokens, { ...style, italics: true }))
          break
        case "del":
          runs.push(...inlineRuns((token as Tokens.Del).tokens, { ...style, strike: true }))
          break
        case "codespan":
          runs.push(makeRun((token as Tokens.Codespan).text, { ...style, code: true }))
          break
        case "link": {
          const link = token as Tokens.Link
          const children = inlineRuns(link.tokens, style).filter((run) => run instanceof TextRun) as InstanceType<typeof TextRun>[]
          runs.push(new ExternalHyperlink({ link: link.href, children: children.length ? children : [new TextRun({ text: link.href, style: "Hyperlink" })] }))
          break
        }
        case "image":
          runs.push(makeRun(`[image: ${(token as Tokens.Image).text || (token as Tokens.Image).href}]`, { ...style, italics: true }))
          break
        case "br":
          runs.push(new TextRun({ break: 1 }))
          break
        case "html":
          runs.push(makeRun((token as Tokens.HTML).text.replace(/<[^>]+>/g, ""), style))
          break
        default:
          if ("text" in token && typeof (token as { text?: unknown }).text === "string") {
            runs.push(makeRun((token as { text: string }).text, style))
          }
      }
    }
    return runs
  }

  const codeBlock = (code: string, indentLevel: number): Block[] => {
    stats.codeBlocks++
    const lines = code.split("\n")
    return lines.map((line, index) =>
      new Paragraph({
        children: [new TextRun({ text: line || " ", font: CODE_FONT, size: 18 })],
        shading: { type: ShadingType.CLEAR, fill: CODE_SHADE },
        indent: indentLevel ? { left: indentLevel * INDENT_STEP } : undefined,
        spacing: { before: index === 0 ? 120 : 0, after: index === lines.length - 1 ? 160 : 0, line: 276 },
      })
    )
  }

  const listBlocks = (list: Tokens.List, level: number, indentLevel: number): Block[] => {
    stats.lists++
    const blocks: Block[] = []
    let reference: string | undefined
    if (list.ordered) {
      reference = `numbered-${numberingReferences.length + 1}`
      numberingReferences.push(reference)
    }
    for (const item of list.items) {
      const textToken = item.tokens.find((token) => token.type === "text" || token.type === "paragraph") as Tokens.Text | Tokens.Paragraph | undefined
      const children = inlineRuns(textToken?.tokens ?? [], {})
      if (item.task) children.unshift(new TextRun({ text: item.checked ? "☑ " : "☐ " }))
      blocks.push(
        new Paragraph({
          children,
          numbering: reference ? { reference, level } : undefined,
          bullet: reference ? undefined : { level },
          indent: indentLevel ? { left: indentLevel * INDENT_STEP + (level + 1) * INDENT_STEP / 2 } : undefined,
          spacing: { after: 60 },
        })
      )
      for (const nested of item.tokens) {
        if (nested.type === "list") blocks.push(...listBlocks(nested as Tokens.List, Math.min(level + 1, 8), indentLevel))
        else if (nested.type === "code") blocks.push(...codeBlock((nested as Tokens.Code).text, indentLevel + 1))
      }
    }
    return blocks
  }

  const tableBlock = (table: Tokens.Table): Block => {
    stats.tables++
    const cell = (tokens: Token[], bold: boolean) =>
      new TableCell({
        children: [new Paragraph({ children: inlineRuns(tokens, { bold }) })],
        shading: bold ? { type: ShadingType.CLEAR, fill: "E7E6E6" } : undefined,
      })
    return new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({ tableHeader: true, children: table.header.map((headerCell) => cell(headerCell.tokens, true)) }),
        ...table.rows.map((row) => new TableRow({ children: row.map((rowCell) => cell(rowCell.tokens, false)) })),
      ],
    })
  }

  const blockTokens = (tokens: Token[], indentLevel: number, quote: boolean): Block[] => {
    const blocks: Block[] = []
    for (const token of tokens) {
      switch (token.type) {
        case "heading": {
          stats.headings++
          const heading = token as Tokens.Heading
          blocks.push(new Paragraph({ heading: headingLevels[Math.min(heading.depth, 6) - 1], children: inlineRuns(heading.tokens), spacing: { before: 240, after: 120 } }))
          break
        }
        case "paragraph":
          stats.paragraphs++
          blocks.push(
            new Paragraph({
              children: inlineRuns((token as Tokens.Paragraph).tokens, quote ? { italics: true } : {}),
              indent: indentLevel ? { left: indentLevel * INDENT_STEP } : undefined,
              border: quote ? { left: { style: BorderStyle.SINGLE, size: 12, color: "BFBFBF", space: 8 } } : undefined,
              spacing: { after: 160 },
            })
          )
          break
        case "list":
          blocks.push(...listBlocks(token as Tokens.List, 0, indentLevel))
          break
        case "code":
          blocks.push(...codeBlock((token as Tokens.Code).text, indentLevel))
          break
        case "blockquote":
          blocks.push(...blockTokens((token as Tokens.Blockquote).tokens, indentLevel + 1, true))
          break
        case "table":
          blocks.push(tableBlock(token as Tokens.Table))
          blocks.push(new Paragraph({ spacing: { after: 120 } }))
          break
        case "hr":
          blocks.push(new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "999999", space: 1 } }, spacing: { before: 120, after: 200 } }))
          break
        case "html": {
          const text = (token as Tokens.HTML).text.replace(/<[^>]+>/g, "").trim()
          if (text) blocks.push(new Paragraph({ children: [makeRun(text, {})], spacing: { after: 160 } }))
          break
        }
        case "space":
          break
        default:
          if ("text" in token && typeof (token as { text?: unknown }).text === "string") {
            blocks.push(new Paragraph({ children: [makeRun((token as { text: string }).text, {})] }))
          }
      }
    }
    return blocks
  }

  const children = blockTokens(marked.lexer(markdown, { gfm: true }), 0, false)

  const numberedLevels = Array.from({ length: 9 }, (_, level) => ({
    level,
    format: LevelFormat.DECIMAL,
    text: `%${level + 1}.`,
    alignment: AlignmentType.START,
    style: { paragraph: { indent: { left: (level + 1) * INDENT_STEP, hanging: 360 } } },
  }))

  const document = new Document({
    creator: "FastTools Markdown to Word",
    styles: {
      default: { document: { run: { font: "Calibri", size: 22 } } },
      paragraphStyles: [{ id: "Hyperlink", name: "Hyperlink", basedOn: "Normal", run: { color: "0563C1", underline: {} } }],
    },
    numbering: { config: numberingReferences.map((reference) => ({ reference, levels: numberedLevels })) },
    sections: [{ children: children.length ? children : [new Paragraph({ text: "" })] }],
  })

  const blob = await Packer.toBlob(document)
  return { blob, stats }
}

export function markdownToPreviewHtml(markdown: string): string {
  const body = marked.parse(markdown, { gfm: true, breaks: true, async: false }) as string
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    body{font-family:Calibri,"Segoe UI",Arial,sans-serif;font-size:15px;line-height:1.5;color:#1f2328;margin:24px;max-width:760px}
    h1,h2,h3,h4{margin:1.2em 0 .5em;line-height:1.25} h1{font-size:1.7em} h2{font-size:1.4em} h3{font-size:1.15em}
    pre{background:#f2f2f2;padding:12px;border-radius:6px;overflow:auto;font-size:13px} code{font-family:Consolas,Menlo,monospace;background:#f2f2f2;padding:1px 4px;border-radius:3px}
    blockquote{border-left:4px solid #bfbfbf;margin:0;padding-left:12px;color:#555;font-style:italic}
    table{border-collapse:collapse;width:100%;margin:12px 0} th,td{border:1px solid #cfcfcf;padding:6px 8px;text-align:left} th{background:#e7e6e6}
    a{color:#0563c1} img{max-width:100%} hr{border:0;border-top:1px solid #999;margin:20px 0}
  </style></head><body>${body}</body></html>`
}

function flattenTableCells(html: string): string {
  if (typeof DOMParser === "undefined") return html
  const doc = new DOMParser().parseFromString(html, "text/html")
  doc.querySelectorAll("td, th").forEach((cell) => {
    const paragraphs = Array.from(cell.children).filter((child) => child.tagName === "P")
    if (!paragraphs.length) return
    cell.innerHTML = paragraphs.map((paragraph) => paragraph.innerHTML.trim()).filter(Boolean).join("<br>")
  })
  doc.querySelectorAll("table").forEach((table) => {
    const firstRow = table.querySelector("tr")
    if (!firstRow || table.querySelector("thead")) return
    const thead = doc.createElement("thead")
    firstRow.querySelectorAll("td").forEach((cell) => {
      const header = doc.createElement("th")
      header.innerHTML = cell.innerHTML
      cell.replaceWith(header)
    })
    thead.appendChild(firstRow)
    table.insertBefore(thead, table.firstChild)
  })
  return doc.body.innerHTML
}

function tidyMarkdown(markdown: string): string {
  return markdown
    .replace(/^(\s*)-\s{3}/gm, "$1- ")
    .replace(/^(\s*\d+\.)\s{2}/gm, "$1 ")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

export async function docxToMarkdown(arrayBuffer: ArrayBuffer): Promise<{ markdown: string; warnings: number }> {
  const mammothModule = await import("mammoth")
  const mammoth = ((mammothModule as unknown as { default?: unknown }).default ?? mammothModule) as typeof mammothModule
  const result = await mammoth.convertToHtml({ arrayBuffer })
  const TurndownService = (await import("turndown")).default
  const { gfm } = await import("turndown-plugin-gfm")
  const turndown = new TurndownService({ headingStyle: "atx", codeBlockStyle: "fenced", bulletListMarker: "-", emDelimiter: "*" })
  turndown.use(gfm)
  const markdown = tidyMarkdown(turndown.turndown(flattenTableCells(result.value)))
  return { markdown, warnings: result.messages.length }
}
