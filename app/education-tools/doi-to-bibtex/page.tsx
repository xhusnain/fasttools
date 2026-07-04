import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const CitationGenerator = dynamic(
  () =>
    import("@/components/education-tools/citation-generator").then(
      (mod) => mod.CitationGenerator
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "DOI to BibTeX Converter",
  description:
    "Paste a DOI and get a ready-to-use BibTeX entry — metadata fetched from Crossref, fields escaped, cite key generated. Free, no signup.",
  metaTitle: "DOI to BibTeX — Convert Any DOI to a BibTeX Entry Free",
  metaDescription:
    "Turn a DOI into a BibTeX entry in one paste: title, authors, journal, volume, pages, and year auto-fill from Crossref and format as @article — special characters escaped, cite key included.",
  path: "/education-tools/doi-to-bibtex",

  header: {
    title: "DOI to BibTeX Converter",
    description:
      "Paste any DOI — the paper's metadata loads from Crossref and formats as a BibTeX entry you can drop straight into your .bib file. APA, MLA, Chicago, and Harvard available on the same data.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Education Tools", href: "/education-tools" },
    { label: "Citation Generator", href: "/education-tools/citation-generator" },
    { label: "DOI to BibTeX", href: "/education-tools/doi-to-bibtex" },
  ],

  schemaOptions: {
    applicationCategory: "EducationalApplication",
    description:
      "DOI-to-BibTeX converter with Crossref auto-fill: paste a DOI, get a formatted @article BibTeX entry with escaped fields and a generated cite key.",
    alternateName: [
      "DOI to BibTeX Converter",
      "BibTeX from DOI",
      "DOI Citation to BibTeX",
      "Get BibTeX for a Paper",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A DOI-to-BibTeX converter resolves a paper's DOI against Crossref's metadata registry and formats the record as a BibTeX entry — the @article/@book blocks that LaTeX bibliography tools (BibTeX, BibLaTeX, natbib) consume.",
    quickAnswer:
      "Paste the DOI above (with or without the https://doi.org/ prefix) — the paper's title, authors, journal, volume, issue, pages, and year load from Crossref, and the BibTeX style outputs a ready @article entry with a generated cite key and escaped special characters. Copy it into your .bib file and \\cite away.",
    keyTakeaways: [
      "One paste: DOI → Crossref metadata → formatted BibTeX entry",
      "Cite key auto-generated (firstauthor + year) — rename to your convention if needed",
      "LaTeX-breaking characters (&, %, _, #) escaped automatically in field values",
      "Same data also formats as APA 7, MLA 9, Chicago, or Harvard — switch styles freely",
      "Always sanity-check title casing: BibTeX lowercases titles unless you add protective braces",
    ],
    overview:
      "Every LaTeX user knows the ritual: find the paper, hunt for the 'export citation' button, pick BibTeX, clean up the mess. This page collapses it to one paste. The DOI uniquely identifies the paper; Crossref (the registry most journals deposit to) holds its authoritative metadata; and the formatter turns that record into an entry your bibliography tool accepts — authors joined with 'and' as BibTeX requires, special characters escaped, a sane cite key generated. The sections below cover the two cleanups worth doing before you commit the entry to your .bib file, and when to trust the publisher's own export instead.",

    howToSteps: [
      "Copy the DOI from the paper (it's on the first page of virtually every modern article, or in the URL).",
      "Paste it into the auto-fill above — the https://doi.org/ prefix is stripped automatically.",
      "Select the BibTeX style and copy the generated entry.",
      "Paste into your .bib file, adjust the cite key to your convention, and check title-case braces.",
    ],

    aboutTool: (
      <div className="space-y-10">
        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">What a Good BibTeX Entry Looks Like</h2>
          <div className="p-4 rounded-lg bg-muted/40 border border-border font-mono text-sm leading-relaxed whitespace-pre overflow-x-auto">
{`@article{vaswani2017,
  title = {Attention Is All You Need},
  author = {Vaswani, Ashish and Shazeer, Noam and Parmar, Niki},
  journal = {Advances in Neural Information Processing Systems},
  volume = {30},
  year = {2017},
  doi = {10.48550/arXiv.1706.03762},
}`}
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            The parts that matter: authors separated by <code>and</code> (never commas between
            authors — commas belong inside each &quot;Last, First&quot;), a cite key you&apos;ll
            actually remember at \cite-time, and the DOI included so readers and reference managers
            can resolve the paper.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Two Cleanups Before You Commit the Entry</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>Title casing.</strong> Classic BibTeX styles lowercase everything in the title
            except the first word — so &quot;Attention Is All You Need&quot; renders as
            &quot;Attention is all you need,&quot; and &quot;DNA&quot; becomes &quot;dna.&quot; Wrap
            anything that must keep its capitals in braces: <code>{"{DNA}"}</code>,{" "}
            <code>{"{T}ransformer"}</code>, or brace the whole title if the venue&apos;s style
            preserves title case. <strong>Cite keys.</strong> The generated key is
            firstauthor+year; if your .bib already uses a convention (author:year,
            authorYEARkeyword), rename on paste — duplicate keys are the most common BibTeX compile
            error, and key discipline is what prevents them.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">DOI Converter vs Publisher Export vs Google Scholar</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Publisher &quot;export BibTeX&quot; buttons are authoritative but wildly inconsistent —
            some emit abstract dumps, tracking URLs, and month fields you&apos;ll delete anyway.
            Google Scholar&apos;s BibTeX is convenient but notorious for wrong venues, missing DOIs,
            and preprint/published-version confusion. A DOI-based export sits in the sweet spot:
            Crossref metadata is what the publisher deposited (correct venue, volume, pages), and
            the output is minimal — the fields your bibliography style actually uses. The honest
            caveat: very new papers, some conference proceedings, and preprints registered outside
            Crossref (early arXiv) may not resolve; for those, the same tool accepts manual entry.
          </p>
        </article>
      </div>
    ),

    proTip:
      "Keep the DOI field in every entry even if your bibliography style doesn't print it — reference managers, plagiarism checkers, and future-you all use it to resolve the exact paper, and BibLaTeX styles increasingly render DOIs as links automatically.",

    faqs: [
      {
        question: "How do I get a BibTeX entry from a DOI?",
        answer:
          "Paste the DOI into the tool above with auto-fill set to DOI — the metadata loads from Crossref and the BibTeX style formats it as an @article (or @book) entry with escaped fields and a generated cite key. Copy it straight into your .bib file.",
      },
      {
        question: "What DOI formats does it accept?",
        answer:
          "All the common ones: the bare DOI (10.1038/nature12373), the full URL (https://doi.org/10.1038/nature12373), and the older dx.doi.org form — prefixes are stripped automatically before the Crossref lookup.",
      },
      {
        question: "Why does my title lose its capital letters in the compiled bibliography?",
        answer:
          "That's BibTeX's classic style behavior, not a data problem: titles are down-cased except the first word. Protect acronyms and proper nouns with braces in the title field — {DNA}, {B}ayesian — or brace the entire title to preserve its casing.",
      },
      {
        question: "The DOI wasn't found — why?",
        answer:
          "Crossref covers most journal articles, but some conference proceedings, very recent papers (metadata not yet deposited), and preprints registered with other agencies (like DataCite for some arXiv content) won't resolve. Enter the fields manually in the same tool — every field is editable.",
      },
      {
        question: "Does this work for books too?",
        answer:
          "Yes — books with DOIs resolve the same way, and books without one can be auto-filled by ISBN instead (see the ISBN to Citation page) and then output in BibTeX as an @book entry.",
      },
    ],

    relatedTools: [
      { name: "Citation Generator (all styles)", href: "/education-tools/citation-generator" },
      { name: "ISBN to Citation Converter", href: "/education-tools/isbn-to-citation" },
      { name: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
      { name: "Diff Checker", href: "/dev-tools/diff-checker" },
      { name: "All Education Tools", href: "/education-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function DoiToBibtexPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <CitationGenerator defaultAutoFillType="doi" defaultStyle="bibtex" />
      )}
    />
  )
}
