"use client"

import { useState, useCallback } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { GTabs, GTabsList, GTabsTrigger, GTabsContent } from "@/ui/gtabs"
import { GBadge } from "@/ui/gbadge"
import {
  Plus,
  Copy,
  Check,
  Download,
  Trash2,
  Search,
  BookOpen,
  Globe,
  Newspaper,
  Youtube,
  FileText,
  Mic,
  Loader2,
  Sparkles,
  BookMarked,
  AlertCircle,
} from "lucide-react"

// === Types ===
type CiteStyle = "apa" | "mla" | "chicago" | "harvard"
type SourceType = "book" | "journal" | "website" | "newspaper" | "youtube" | "podcast"

interface Author {
  first: string
  last: string
}

interface SourceData {
  type: SourceType
  authors: Author[]
  title: string
  year?: string
  publisher?: string
  place?: string
  journal?: string
  volume?: string
  issue?: string
  pages?: string
  doi?: string
  url?: string
  accessed?: string
  siteName?: string
  videoId?: string
  channel?: string
  publishDate?: string
  newspaper?: string
  showName?: string
  host?: string
  episode?: string
  isbn?: string
}

interface Citation {
  id: string
  style: CiteStyle
  data: SourceData
  formatted: string
}

const SOURCE_TYPES: { value: SourceType; label: string; icon: typeof BookOpen }[] = [
  { value: "book", label: "Book", icon: BookOpen },
  { value: "journal", label: "Journal Article", icon: FileText },
  { value: "website", label: "Website", icon: Globe },
  { value: "newspaper", label: "Newspaper", icon: Newspaper },
  { value: "youtube", label: "YouTube Video", icon: Youtube },
  { value: "podcast", label: "Podcast", icon: Mic },
]

const STYLES: { value: CiteStyle; label: string; description: string }[] = [
  { value: "apa", label: "APA 7th", description: "American Psychological Association" },
  { value: "mla", label: "MLA 9th", description: "Modern Language Association" },
  { value: "chicago", label: "Chicago 17th", description: "Chicago Manual of Style" },
  { value: "harvard", label: "Harvard", description: "Harvard Referencing Style" },
]

// === Author formatters ===
function formatAuthorsAPA(authors: Author[]): string {
  if (authors.length === 0) return ""
  const fmt = (a: Author) => {
    const initials = a.first.split(/\s+/).filter(Boolean).map(n => n[0]?.toUpperCase() + ".").join(" ")
    return `${a.last}, ${initials}`
  }
  if (authors.length === 1) return fmt(authors[0])
  if (authors.length === 2) return `${fmt(authors[0])}, & ${fmt(authors[1])}`
  if (authors.length <= 20) {
    return authors.slice(0, -1).map(fmt).join(", ") + ", & " + fmt(authors[authors.length - 1])
  }
  return authors.slice(0, 19).map(fmt).join(", ") + ", ... " + fmt(authors[authors.length - 1])
}

function formatAuthorsMLA(authors: Author[]): string {
  if (authors.length === 0) return ""
  const first = authors[0]
  const firstFmt = `${first.last}, ${first.first}`
  if (authors.length === 1) return firstFmt
  if (authors.length === 2) return `${firstFmt}, and ${authors[1].first} ${authors[1].last}`
  return `${firstFmt}, et al`
}

function formatAuthorsChicago(authors: Author[]): string {
  if (authors.length === 0) return ""
  const first = authors[0]
  const firstFmt = `${first.last}, ${first.first}`
  if (authors.length === 1) return firstFmt
  if (authors.length <= 3) {
    const rest = authors.slice(1).map(a => `${a.first} ${a.last}`).join(", and ")
    return `${firstFmt}, and ${rest}`
  }
  return `${firstFmt} et al.`
}

function formatAuthorsHarvard(authors: Author[]): string {
  if (authors.length === 0) return ""
  const fmt = (a: Author) => {
    const initials = a.first.split(/\s+/).filter(Boolean).map(n => n[0]?.toUpperCase() + ".").join("")
    return `${a.last}, ${initials}`
  }
  if (authors.length === 1) return fmt(authors[0])
  if (authors.length === 2) return `${fmt(authors[0])} and ${fmt(authors[1])}`
  if (authors.length <= 3) {
    return authors.slice(0, -1).map(fmt).join(", ") + " and " + fmt(authors[authors.length - 1])
  }
  return `${fmt(authors[0])} et al.`
}

// === Citation formatters ===
function formatCitation(data: SourceData, style: CiteStyle): string {
  const authorFn = {
    apa: formatAuthorsAPA,
    mla: formatAuthorsMLA,
    chicago: formatAuthorsChicago,
    harvard: formatAuthorsHarvard,
  }[style]

  const authors = authorFn(data.authors)
  const year = data.year || "n.d."

  switch (data.type) {
    case "book": {
      const title = data.title
      const place = data.place ? `${data.place}: ` : ""
      const publisher = data.publisher || ""

      if (style === "apa") {
        return `${authors} (${year}). ${italicize(title)}. ${publisher}.`.replace(/\s+\./g, ".")
      }
      if (style === "mla") {
        return `${authors}. ${italicize(title)}. ${publisher}, ${year}.`.replace(/\s+\./g, ".")
      }
      if (style === "chicago") {
        return `${authors}. ${italicize(title)}. ${place}${publisher}, ${year}.`.replace(/\s+\./g, ".")
      }
      // harvard
      return `${authors} (${year}) ${italicize(title)}. ${place}${publisher}.`.replace(/\s+\./g, ".")
    }

    case "journal": {
      const journal = data.journal || ""
      const volume = data.volume || ""
      const issue = data.issue ? `(${data.issue})` : ""
      const pages = data.pages ? `, ${data.pages}` : ""
      const doi = data.doi ? ` https://doi.org/${data.doi.replace(/^https?:\/\/doi\.org\//, "")}` : ""

      if (style === "apa") {
        return `${authors} (${year}). ${data.title}. ${italicize(journal)}, ${italicize(volume)}${issue}${pages}.${doi}`
      }
      if (style === "mla") {
        const volIssue = volume ? `vol. ${volume}` : ""
        const no = data.issue ? `, no. ${data.issue}` : ""
        return `${authors}. "${data.title}." ${italicize(journal)}, ${volIssue}${no}, ${year}${pages}.${doi}`
      }
      if (style === "chicago") {
        return `${authors}. "${data.title}." ${italicize(journal)} ${volume}${issue} (${year})${pages}.${doi}`
      }
      // harvard
      return `${authors} (${year}) '${data.title}', ${italicize(journal)}, ${volume}${issue}${pages}.${doi}`
    }

    case "website": {
      const siteName = data.siteName || ""
      const url = data.url || ""
      const accessed = data.accessed ? ` Retrieved ${data.accessed}, from ${url}` : url ? ` ${url}` : ""

      if (style === "apa") {
        return `${authors} (${year}). ${italicize(data.title)}. ${siteName}.${accessed}`
      }
      if (style === "mla") {
        const accessedMLA = data.accessed ? ` Accessed ${data.accessed}.` : ""
        return `${authors}. "${data.title}." ${italicize(siteName)}, ${year}, ${url}.${accessedMLA}`
      }
      if (style === "chicago") {
        const accessedChi = data.accessed ? `, accessed ${data.accessed}` : ""
        return `${authors}. "${data.title}." ${italicize(siteName)}. ${year}${accessedChi}. ${url}.`
      }
      // harvard
      const accessedHar = data.accessed ? ` (Accessed: ${data.accessed})` : ""
      return `${authors} (${year}) ${italicize(data.title)}, ${siteName}. Available at: ${url}${accessedHar}.`
    }

    case "newspaper": {
      const newspaper = data.newspaper || ""
      const pages = data.pages ? `, ${data.pages}` : ""
      const url = data.url ? ` ${data.url}` : ""
      const date = data.publishDate || year

      if (style === "apa") {
        return `${authors} (${date}). ${data.title}. ${italicize(newspaper)}${pages}.${url}`
      }
      if (style === "mla") {
        return `${authors}. "${data.title}." ${italicize(newspaper)}, ${date}${pages}.${url}`
      }
      if (style === "chicago") {
        return `${authors}. "${data.title}." ${italicize(newspaper)}, ${date}${pages}.${url}`
      }
      return `${authors} (${date}) '${data.title}', ${italicize(newspaper)}${pages}.${url}`
    }

    case "youtube": {
      const channel = data.channel || authors || "Unknown"
      const url = data.url || (data.videoId ? `https://www.youtube.com/watch?v=${data.videoId}` : "")
      const date = data.publishDate || year

      if (style === "apa") {
        return `${channel}. (${date}). ${italicize(data.title)} [Video]. YouTube. ${url}`
      }
      if (style === "mla") {
        return `${authors || channel}. "${data.title}." YouTube, uploaded by ${channel}, ${date}, ${url}.`
      }
      if (style === "chicago") {
        return `${channel}. "${data.title}." YouTube video. ${date}. ${url}.`
      }
      return `${channel} (${date}) ${italicize(data.title)} [Video]. YouTube. Available at: ${url}.`
    }

    case "podcast": {
      const show = data.showName || ""
      const host = data.host || authors
      const episode = data.episode ? `(No. ${data.episode}) ` : ""
      const url = data.url || ""
      const date = data.publishDate || year

      if (style === "apa") {
        return `${host} (Host). (${date}). ${data.title} ${episode}[Audio podcast episode]. In ${italicize(show)}.${url ? " " + url : ""}`
      }
      if (style === "mla") {
        return `"${data.title}." ${italicize(show)}, hosted by ${host}, ${date}${url ? ", " + url : ""}.`
      }
      if (style === "chicago") {
        return `${host}. "${data.title}." ${italicize(show)}. Podcast audio. ${date}.${url ? " " + url : ""}`
      }
      return `${host} (${date}) '${data.title}', ${italicize(show)} [Podcast].${url ? " Available at: " + url : ""}`
    }
  }
}

// Render italic as HTML for display (wrapped in markup)
function italicize(text: string): string {
  return `<i>${text}</i>`
}

function stripHTML(html: string): string {
  return html.replace(/<[^>]+>/g, "")
}

// === DOI/ISBN auto-fill ===
async function fetchFromDOI(doi: string): Promise<Partial<SourceData>> {
  const cleanDoi = doi.replace(/^https?:\/\/doi\.org\//, "").trim()
  const res = await fetch(`https://api.crossref.org/works/${encodeURIComponent(cleanDoi)}`)
  if (!res.ok) throw new Error("DOI not found")
  const json = await res.json()
  const msg = json.message
  const authors: Author[] = (msg.author || []).map((a: { given?: string; family?: string }) => ({
    first: a.given || "",
    last: a.family || "",
  }))
  return {
    type: "journal",
    title: msg.title?.[0] || "",
    authors,
    journal: msg["container-title"]?.[0] || "",
    year: String(msg.issued?.["date-parts"]?.[0]?.[0] || ""),
    volume: msg.volume || "",
    issue: msg.issue || "",
    pages: msg.page || "",
    doi: cleanDoi,
    publisher: msg.publisher || "",
  }
}

async function fetchFromISBN(isbn: string): Promise<Partial<SourceData>> {
  const cleanIsbn = isbn.replace(/[-\s]/g, "")
  const res = await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${cleanIsbn}&jscmd=data&format=json`)
  if (!res.ok) throw new Error("ISBN not found")
  const json = await res.json()
  const book = json[`ISBN:${cleanIsbn}`]
  if (!book) throw new Error("ISBN not found")

  const authors: Author[] = (book.authors || []).map((a: { name: string }) => {
    const parts = a.name.trim().split(/\s+/)
    const last = parts[parts.length - 1]
    const first = parts.slice(0, -1).join(" ")
    return { first, last }
  })

  return {
    type: "book",
    title: book.title || "",
    authors,
    publisher: book.publishers?.[0]?.name || "",
    place: book.publish_places?.[0]?.name || "",
    year: book.publish_date ? (book.publish_date.match(/\d{4}/)?.[0] || "") : "",
    isbn: cleanIsbn,
  }
}

// === Default data factory ===
function defaultData(type: SourceType): SourceData {
  return {
    type,
    authors: [{ first: "", last: "" }],
    title: "",
    year: "",
  }
}

function genId(): string {
  return Math.random().toString(36).slice(2, 9)
}

// === Component ===
export function CitationGenerator() {
  const [style, setStyle] = useState<CiteStyle>("apa")
  const [sourceType, setSourceType] = useState<SourceType>("book")
  const [data, setData] = useState<SourceData>(defaultData("book"))
  const [bibliography, setBibliography] = useState<Citation[]>([])
  const [autoFillInput, setAutoFillInput] = useState("")
  const [autoFillType, setAutoFillType] = useState<"doi" | "isbn">("doi")
  const [autoFillLoading, setAutoFillLoading] = useState(false)
  const [autoFillError, setAutoFillError] = useState("")
  const [copied, setCopied] = useState<string | null>(null)
  const [copiedBib, setCopiedBib] = useState(false)

  const updateType = useCallback((newType: SourceType) => {
    setSourceType(newType)
    setData({ ...defaultData(newType), authors: data.authors, title: data.title, year: data.year })
  }, [data.authors, data.title, data.year])

  const updateField = useCallback(<K extends keyof SourceData>(field: K, value: SourceData[K]) => {
    setData((prev) => ({ ...prev, [field]: value }))
  }, [])

  const updateAuthor = useCallback((index: number, field: keyof Author, value: string) => {
    setData((prev) => ({
      ...prev,
      authors: prev.authors.map((a, i) => i === index ? { ...a, [field]: value } : a)
    }))
  }, [])

  const addAuthor = useCallback(() => {
    setData((prev) => ({ ...prev, authors: [...prev.authors, { first: "", last: "" }] }))
  }, [])

  const removeAuthor = useCallback((index: number) => {
    setData((prev) => ({ ...prev, authors: prev.authors.filter((_, i) => i !== index) }))
  }, [])

  const handleAutoFill = useCallback(async () => {
    if (!autoFillInput.trim()) return
    setAutoFillLoading(true)
    setAutoFillError("")
    try {
      const fetched = autoFillType === "doi"
        ? await fetchFromDOI(autoFillInput)
        : await fetchFromISBN(autoFillInput)

      if (fetched.type) setSourceType(fetched.type)
      setData((prev) => ({ ...defaultData(fetched.type || prev.type), ...fetched, authors: fetched.authors || prev.authors }))
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Lookup failed"
      setAutoFillError(`${msg}. Check your ${autoFillType.toUpperCase()} and try again.`)
    } finally {
      setAutoFillLoading(false)
    }
  }, [autoFillInput, autoFillType])

  const currentCitation = formatCitation(data, style)

  const addToBibliography = useCallback(() => {
    if (!data.title.trim()) return
    const citation: Citation = {
      id: genId(),
      style,
      data: { ...data, authors: [...data.authors] },
      formatted: currentCitation,
    }
    setBibliography((prev) => [...prev, citation])
  }, [data, style, currentCitation])

  const removeFromBibliography = useCallback((id: string) => {
    setBibliography((prev) => prev.filter((c) => c.id !== id))
  }, [])

  const copyText = useCallback(async (text: string, key: string) => {
    await navigator.clipboard.writeText(stripHTML(text))
    setCopied(key)
    setTimeout(() => setCopied(null), 1500)
  }, [])

  const copyBibliography = useCallback(async () => {
    const text = bibliography.map(c => stripHTML(c.formatted)).join("\n\n")
    await navigator.clipboard.writeText(text)
    setCopiedBib(true)
    setTimeout(() => setCopiedBib(false), 2000)
  }, [bibliography])

  const downloadBibliography = useCallback((format: "txt" | "bibtex") => {
    let content = ""
    if (format === "txt") {
      content = bibliography.map(c => stripHTML(c.formatted)).join("\n\n")
    } else {
      // BibTeX
      content = bibliography.map((c, idx) => {
        const d = c.data
        const key = `${d.authors[0]?.last || "anon"}${d.year || idx}`.toLowerCase().replace(/\s+/g, "")
        const typeMap: Record<SourceType, string> = {
          book: "book",
          journal: "article",
          website: "misc",
          newspaper: "article",
          youtube: "misc",
          podcast: "misc",
        }
        const fields = [
          d.title && `title = {${d.title}}`,
          d.authors.length > 0 && `author = {${d.authors.map(a => `${a.first} ${a.last}`).join(" and ")}}`,
          d.year && `year = {${d.year}}`,
          d.publisher && `publisher = {${d.publisher}}`,
          d.journal && `journal = {${d.journal}}`,
          d.volume && `volume = {${d.volume}}`,
          d.issue && `number = {${d.issue}}`,
          d.pages && `pages = {${d.pages}}`,
          d.doi && `doi = {${d.doi}}`,
          d.url && `url = {${d.url}}`,
          d.isbn && `isbn = {${d.isbn}}`,
        ].filter(Boolean).join(",\n  ")
        return `@${typeMap[d.type]}{${key},\n  ${fields}\n}`
      }).join("\n\n")
    }
    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `bibliography.${format === "bibtex" ? "bib" : "txt"}`
    a.click()
    URL.revokeObjectURL(url)
  }, [bibliography])

  const sourceTypeInfo = SOURCE_TYPES.find(t => t.value === sourceType)!

  return (
    <div className="space-y-6">
      {/* Top Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Style + Source Type */}
        <GCard>
          <GCardHeader className="pb-3">
            <GCardTitle className="text-base flex items-center gap-2">
              <BookMarked className="h-4 w-4" /> Citation Style
            </GCardTitle>
          </GCardHeader>
          <GCardContent className="space-y-3">
            <GSelect value={style} onValueChange={(v) => setStyle(v as CiteStyle)}>
              <GSelectTrigger className="w-full">
                <GSelectValue />
              </GSelectTrigger>
              <GSelectContent>
                {STYLES.map((s) => (
                  <GSelectItem key={s.value} value={s.value}>
                    {s.label} — {s.description}
                  </GSelectItem>
                ))}
              </GSelectContent>
            </GSelect>
            <div className="grid grid-cols-3 gap-2">
              {SOURCE_TYPES.map((t) => {
                const Icon = t.icon
                return (
                  <button
                    key={t.value}
                    onClick={() => updateType(t.value)}
                    className={`flex flex-col items-center gap-1 p-2 rounded-lg border text-xs transition-colors ${
                      sourceType === t.value
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border hover:border-primary/50 text-muted-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {t.label}
                  </button>
                )
              })}
            </div>
          </GCardContent>
        </GCard>

        {/* Auto-fill */}
        <GCard>
          <GCardHeader className="pb-3">
            <GCardTitle className="text-base flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Auto-Fill
            </GCardTitle>
          </GCardHeader>
          <GCardContent className="space-y-2">
            <div className="flex gap-2">
              <GSelect value={autoFillType} onValueChange={(v) => setAutoFillType(v as "doi" | "isbn")}>
                <GSelectTrigger className="w-[90px]">
                  <GSelectValue />
                </GSelectTrigger>
                <GSelectContent>
                  <GSelectItem value="doi">DOI</GSelectItem>
                  <GSelectItem value="isbn">ISBN</GSelectItem>
                </GSelectContent>
              </GSelect>
              <GInput
                value={autoFillInput}
                onChange={(e) => setAutoFillInput(e.target.value)}
                placeholder={autoFillType === "doi" ? "10.1038/nature12373" : "978-0-14-103576-1"}
                onKeyDown={(e) => { if (e.key === "Enter") handleAutoFill() }}
              />
              <GButton onClick={handleAutoFill} disabled={autoFillLoading || !autoFillInput.trim()}>
                {autoFillLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Search className="h-4 w-4" />
                )}
              </GButton>
            </div>
            {autoFillError && (
              <div className="text-xs text-red-500 flex items-center gap-1.5">
                <AlertCircle className="h-3 w-3" />
                {autoFillError}
              </div>
            )}
            <p className="text-[11px] text-muted-foreground">
              DOI via CrossRef · ISBN via OpenLibrary · Free, no API key
            </p>
          </GCardContent>
        </GCard>
      </div>

      {/* Source Form */}
      <GCard>
        <GCardHeader className="pb-3">
          <GCardTitle className="text-base flex items-center gap-2">
            <sourceTypeInfo.icon className="h-4 w-4" /> {sourceTypeInfo.label} Details
          </GCardTitle>
        </GCardHeader>
        <GCardContent className="space-y-4">
          {/* Authors */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Authors</label>
              <GButton variant="outline" size="xs" onClick={addAuthor}>
                <Plus className="h-3 w-3 mr-1" /> Add Author
              </GButton>
            </div>
            {data.authors.map((author, i) => (
              <div key={i} className="flex gap-2">
                <GInput
                  value={author.first}
                  onChange={(e) => updateAuthor(i, "first", e.target.value)}
                  placeholder="First name (e.g., Jane M.)"
                />
                <GInput
                  value={author.last}
                  onChange={(e) => updateAuthor(i, "last", e.target.value)}
                  placeholder="Last name (e.g., Doe)"
                />
                {data.authors.length > 1 && (
                  <GButton variant="outline" size="sm" onClick={() => removeAuthor(i)}>
                    <Trash2 className="h-3.5 w-3.5" />
                  </GButton>
                )}
              </div>
            ))}
          </div>

          {/* Title + Year */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-2 space-y-1.5">
              <label className="text-sm font-medium">Title *</label>
              <GInput value={data.title} onChange={(e) => updateField("title", e.target.value)} placeholder="Source title" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Year</label>
              <GInput value={data.year || ""} onChange={(e) => updateField("year", e.target.value)} placeholder="2024" />
            </div>
          </div>

          {/* Type-specific fields */}
          {sourceType === "book" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Publisher</label>
                <GInput value={data.publisher || ""} onChange={(e) => updateField("publisher", e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Place of Publication</label>
                <GInput value={data.place || ""} onChange={(e) => updateField("place", e.target.value)} placeholder="New York, NY" />
              </div>
            </div>
          )}

          {sourceType === "journal" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-sm font-medium">Journal Name</label>
                <GInput value={data.journal || ""} onChange={(e) => updateField("journal", e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Volume</label>
                <GInput value={data.volume || ""} onChange={(e) => updateField("volume", e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Issue</label>
                <GInput value={data.issue || ""} onChange={(e) => updateField("issue", e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Pages</label>
                <GInput value={data.pages || ""} onChange={(e) => updateField("pages", e.target.value)} placeholder="123-145" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">DOI</label>
                <GInput value={data.doi || ""} onChange={(e) => updateField("doi", e.target.value)} placeholder="10.1038/..." />
              </div>
            </div>
          )}

          {sourceType === "website" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Site Name</label>
                <GInput value={data.siteName || ""} onChange={(e) => updateField("siteName", e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">URL</label>
                <GInput value={data.url || ""} onChange={(e) => updateField("url", e.target.value)} placeholder="https://..." />
              </div>
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-sm font-medium">Date Accessed</label>
                <GInput value={data.accessed || ""} onChange={(e) => updateField("accessed", e.target.value)} placeholder="April 10, 2026" />
              </div>
            </div>
          )}

          {sourceType === "newspaper" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Newspaper</label>
                <GInput value={data.newspaper || ""} onChange={(e) => updateField("newspaper", e.target.value)} placeholder="The New York Times" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Publish Date</label>
                <GInput value={data.publishDate || ""} onChange={(e) => updateField("publishDate", e.target.value)} placeholder="April 5, 2026" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Pages (optional)</label>
                <GInput value={data.pages || ""} onChange={(e) => updateField("pages", e.target.value)} placeholder="A1, A5" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">URL (optional)</label>
                <GInput value={data.url || ""} onChange={(e) => updateField("url", e.target.value)} />
              </div>
            </div>
          )}

          {sourceType === "youtube" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Channel Name</label>
                <GInput value={data.channel || ""} onChange={(e) => updateField("channel", e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Publish Date</label>
                <GInput value={data.publishDate || ""} onChange={(e) => updateField("publishDate", e.target.value)} placeholder="2024, March 15" />
              </div>
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-sm font-medium">Video URL</label>
                <GInput value={data.url || ""} onChange={(e) => updateField("url", e.target.value)} placeholder="https://youtube.com/watch?v=..." />
              </div>
            </div>
          )}

          {sourceType === "podcast" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Show Name</label>
                <GInput value={data.showName || ""} onChange={(e) => updateField("showName", e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Host</label>
                <GInput value={data.host || ""} onChange={(e) => updateField("host", e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Episode Number</label>
                <GInput value={data.episode || ""} onChange={(e) => updateField("episode", e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Publish Date</label>
                <GInput value={data.publishDate || ""} onChange={(e) => updateField("publishDate", e.target.value)} />
              </div>
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-sm font-medium">URL (optional)</label>
                <GInput value={data.url || ""} onChange={(e) => updateField("url", e.target.value)} />
              </div>
            </div>
          )}
        </GCardContent>
      </GCard>

      {/* Preview */}
      <GCard>
        <GCardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <GCardTitle className="text-base">Citation Preview</GCardTitle>
            <GBadge variant="default" className="uppercase">{style}</GBadge>
          </div>
        </GCardHeader>
        <GCardContent className="space-y-3">
          <div
            className="text-sm leading-relaxed bg-muted/30 rounded-lg p-4 font-serif"
            dangerouslySetInnerHTML={{ __html: data.title ? currentCitation : "<span class='text-muted-foreground italic font-sans'>Fill in the source details above to see your citation.</span>" }}
          />
          <div className="flex gap-2">
            <GButton onClick={addToBibliography} disabled={!data.title.trim()}>
              <Plus className="h-4 w-4 mr-1.5" /> Add to Bibliography
            </GButton>
            <GButton
              variant="outline"
              onClick={() => copyText(currentCitation, "preview")}
              disabled={!data.title.trim()}
            >
              {copied === "preview" ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
              {copied === "preview" ? "Copied" : "Copy"}
            </GButton>
          </div>
        </GCardContent>
      </GCard>

      {/* Bibliography */}
      {bibliography.length > 0 && (
        <GCard>
          <GCardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <GCardTitle className="text-base flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Bibliography
                <GBadge variant="outline">{bibliography.length}</GBadge>
              </GCardTitle>
              <div className="flex gap-2">
                <GButton variant="outline" size="sm" onClick={copyBibliography}>
                  {copiedBib ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                  {copiedBib ? "Copied" : "Copy All"}
                </GButton>
                <GTabs value="txt" onValueChange={(v) => downloadBibliography(v as "txt" | "bibtex")}>
                  <GTabsList>
                    <GTabsTrigger value="txt">
                      <Download className="h-3 w-3 mr-1" /> .txt
                    </GTabsTrigger>
                    <GTabsTrigger value="bibtex">
                      <Download className="h-3 w-3 mr-1" /> BibTeX
                    </GTabsTrigger>
                  </GTabsList>
                </GTabs>
              </div>
            </div>
          </GCardHeader>
          <GCardContent>
            <ol className="space-y-3 list-none">
              {bibliography.map((c) => (
                <li key={c.id} className="group flex items-start gap-2 text-sm font-serif border-b border-border pb-3 last:border-0">
                  <GBadge variant="outline" className="text-[10px] uppercase shrink-0 mt-0.5 font-sans">
                    {c.style}
                  </GBadge>
                  <span className="flex-1 leading-relaxed" dangerouslySetInnerHTML={{ __html: c.formatted }} />
                  <div className="flex gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => copyText(c.formatted, c.id)}
                      className="p-1 text-muted-foreground hover:text-foreground"
                      title="Copy"
                    >
                      {copied === c.id ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                    <button
                      onClick={() => removeFromBibliography(c.id)}
                      className="p-1 text-muted-foreground hover:text-red-500"
                      title="Remove"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </li>
              ))}
            </ol>
          </GCardContent>
        </GCard>
      )}
    </div>
  )
}
