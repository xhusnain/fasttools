import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const CitationGenerator = dynamic(
  () => import("@/components/education-tools/citation-generator").then((mod) => mod.CitationGenerator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Citation Generator",
  description:
    "Free citation generator for APA 7th, MLA 9th, Chicago 17th, and Harvard styles. Auto-fill from DOI (CrossRef) and ISBN (OpenLibrary). Cite books, journal articles, websites, newspapers, YouTube videos, and podcasts. Build bibliographies and export as text or BibTeX. No signup, no ads, no paywall.",
  metaTitle: "Free Citation Generator Online - APA, MLA, Chicago, Harvard (2026)",
  metaDescription:
    "Free citation generator. Cite in APA 7th, MLA 9th, Chicago, and Harvard styles. Auto-fill from DOI/ISBN. Build bibliographies. Export as text or BibTeX. No signup, no ads.",
  path: "/education-tools/citation-generator",

  schemaOptions: {
    applicationCategory: "EducationalApplication",
    description:
      "Free online citation generator supporting the latest editions of 4 major academic styles: APA 7th (2019), MLA 9th (2021), Chicago 17th, and Harvard. Handles 6 source types: books, journal articles, websites, newspapers, YouTube videos, and podcasts. Auto-fills citation metadata from DOI (via CrossRef API) and ISBN (via OpenLibrary API) — no API key required. Features include unlimited authors with proper formatting rules per style, live citation preview, bibliography builder with add/remove/reorder, copy individual citations or entire bibliography to clipboard, and export as plain text or BibTeX (.bib) file. 100% client-side except for DOI/ISBN lookups which use free public APIs. No signup, no ads, no paywall — every style and every feature is free.",
    featureList: [
      "4 citation styles: APA 7th, MLA 9th, Chicago 17th, Harvard",
      "6 source types: book, journal article, website, newspaper, YouTube video, podcast",
      "Auto-fill from DOI via CrossRef API (free, no auth)",
      "Auto-fill from ISBN via OpenLibrary API (free, no auth)",
      "Unlimited authors with correct formatting per style (et al., & signs, etc.)",
      "Live citation preview with proper italics",
      "Build a full bibliography with multiple sources",
      "Copy individual citations or entire bibliography",
      "Export bibliography as plain text (.txt) or BibTeX (.bib) format",
      "Correct per-style author rules: APA uses up to 20 authors, MLA uses 'et al.' after 2, etc.",
      "100% free — no style paywalls (unlike EasyBib, Citation Machine, BibMe which charge for APA/Chicago)",
      "No signup, no ads, no daily limits",
    ],
    softwareRequirements: "Modern web browser with JavaScript enabled",
  },

  header: {
    title: "Free Citation Generator",
    description:
      "Cite in APA 7th, MLA 9th, Chicago, and Harvard styles. Auto-fill from DOI or ISBN. Build bibliographies. Export as text or BibTeX.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Education Tools", href: "/education-tools" },
    { label: "Citation Generator", href: "/education-tools/citation-generator" },
  ],

  content: {
    definition:
      "A citation generator is an online tool that formats source references into standardized academic styles (APA, MLA, Chicago, Harvard) for research papers, essays, and bibliographies — ensuring every author, title, date, and publisher is presented according to the rules of the chosen style.",

    quickAnswer:
      "Pick a citation style (APA, MLA, Chicago, or Harvard), choose a source type (book, journal, website, etc.), and fill in the details. For fastest results, paste a DOI or ISBN into the Auto-Fill box — the tool fetches everything from CrossRef or OpenLibrary automatically. Click 'Add to Bibliography' to build your full reference list, then copy it or download as a .txt or .bib file.",

    keyTakeaways: [
      "4 styles supported: APA 7th (2019), MLA 9th (2021), Chicago 17th, Harvard — all free, no paywalls",
      "6 source types: book, journal article, website, newspaper, YouTube video, podcast",
      "Auto-fill from DOI (CrossRef) or ISBN (OpenLibrary) — free, no API keys needed",
      "Per-style author formatting: APA uses up to 20 authors before 'et al.', MLA uses 'et al.' after 2 authors, Chicago lists up to 3, Harvard up to 3",
      "Build full bibliographies and export as plain text (.txt) or BibTeX (.bib) for LaTeX / Overleaf",
      "100% free with no signup, no ads, no feature paywalls — every style is free",
    ],

    overview:
      "This citation generator formats references in the four most-used academic styles: APA 7th edition, MLA 9th edition, Chicago 17th edition, and Harvard. Unlike EasyBib, Citation Machine, and BibMe — which paywall APA and Chicago behind paid tiers — every style and every feature here is completely free. Fill in source details manually or paste a DOI to auto-fill from CrossRef (for journal articles), or an ISBN to auto-fill from OpenLibrary (for books). Both APIs are free and require no registration. The tool supports 6 source types: books, journal articles, websites, newspapers, YouTube videos, and podcasts. As you type, the citation preview updates live with correct italics, punctuation, and author formatting rules specific to your chosen style. Click 'Add to Bibliography' to compile a reference list, then copy it to clipboard or download as a plain text file or BibTeX (.bib) for use in LaTeX / Overleaf.",

    howToSteps: [
      "Pick a citation style (APA 7th, MLA 9th, Chicago 17th, or Harvard) and source type (book, journal, website, newspaper, YouTube video, or podcast).",
      "Either fill in the source details manually, or use the Auto-Fill box: paste a DOI for journal articles (fetches from CrossRef) or an ISBN for books (fetches from OpenLibrary). All metadata fills in automatically.",
      "Review and edit any fields. Add additional authors with the 'Add Author' button — the tool will format them correctly per your chosen style (et al., & signs, serial commas).",
      "Check the live citation preview. Click 'Copy' to grab a single citation, or 'Add to Bibliography' to build a full reference list.",
      "When your bibliography is complete, click 'Copy All' to copy the entire list, or download as plain text (.txt) or BibTeX (.bib) for use in LaTeX / Overleaf.",
    ],

    features: [
      "APA 7th Edition: The current American Psychological Association style (published 2019). Full support for up to 20 authors before 'et al.' — matches the official 2019 revision.",
      "MLA 9th Edition: The current Modern Language Association style (published 2021). Proper 'Works Cited' formatting with container elements.",
      "Chicago 17th Edition: Full Chicago Manual of Style support. Author-date style with proper italicization and punctuation.",
      "Harvard Referencing: The most common UK / Commonwealth style, with correct 'Available at' URL formatting and '(Accessed:)' dates.",
      "Auto-Fill from DOI: Paste any DOI (e.g., 10.1038/nature12373) and the tool fetches title, authors, journal, volume, issue, pages, and year from CrossRef — the same API used by Zotero and Mendeley.",
      "Auto-Fill from ISBN: Paste any 10- or 13-digit ISBN and the tool fetches book title, authors, publisher, and year from OpenLibrary.",
      "6 Source Types: Books, journal articles, websites, newspapers, YouTube videos, and podcasts — covering most academic citation needs.",
      "Unlimited Authors: Add as many authors as needed. The tool applies each style's specific rules: APA lists up to 20 before 'et al.', MLA uses 'et al.' after 2, Chicago lists up to 3, Harvard lists up to 3.",
      "Live Preview: The formatted citation updates as you type, with proper italics (for book/journal/website titles), correct punctuation, and style-specific author formatting.",
      "Bibliography Builder: Add multiple citations to build a complete reference list. Remove individual entries or copy the whole list.",
      "Export Formats: Plain text (.txt) for pasting into Word or Google Docs, or BibTeX (.bib) for use in LaTeX / Overleaf.",
      "No Paywalls: Unlike EasyBib, Citation Machine, and BibMe which charge for APA and Chicago, every style and every feature here is completely free.",
    ],

    useCases: [
      "Academic Essays: Cite sources in your term papers, research papers, and dissertations in any of the 4 most-used styles.",
      "Theses & Dissertations: Build complete bibliographies with hundreds of sources. Export to BibTeX for LaTeX typesetting.",
      "Journal Submissions: Format citations to match the target journal's required style (APA for psychology/social sciences, Chicago for history/arts, etc.).",
      "High School Research Projects: Learn proper citation practices with live previews that show correct formatting as you fill in fields.",
      "Blog Posts & Articles: Cite sources professionally in non-academic writing to build credibility.",
      "Literature Reviews: Auto-fill from DOIs to quickly build a review of dozens of papers without retyping metadata.",
      "Podcast Show Notes: Cite podcast episodes and academic sources you referenced in your episode.",
      "YouTube Video Descriptions: Cite research papers, books, and articles you reference in educational YouTube videos.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">The Four Most-Used Citation Styles</h3>
          <p>
            <strong>APA (American Psychological Association)</strong> is used primarily in
            psychology, education, and social sciences. The current edition is the 7th (2019),
            which allows up to 20 authors before using &quot;et al.&quot; and removed the publisher
            location requirement. <strong>MLA (Modern Language Association)</strong> is used in
            literature, language studies, and humanities. The current edition is the 9th (2021),
            which reinforces the &quot;container&quot; system and supports inclusive language.{" "}
            <strong>Chicago</strong> is used in history, arts, and some humanities — the current
            edition is the 17th, offering both author-date and notes-bibliography systems.{" "}
            <strong>Harvard</strong> is the most common UK / Commonwealth style, though there is
            no single authority — the de facto standard is Cite Them Right.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How Auto-Fill Works</h3>
          <p>
            When you paste a DOI, the tool calls the <strong>CrossRef API</strong>{" "}
            (api.crossref.org) — the same service used by Zotero, Mendeley, and virtually every
            academic reference manager. CrossRef holds metadata for over 140 million scholarly
            records. When you paste an ISBN, the tool calls <strong>OpenLibrary</strong>{" "}
            (openlibrary.org), a free public library project by the Internet Archive with data
            for millions of books. Both APIs are free and require no registration. The metadata
            is fetched directly in your browser — we don&apos;t proxy or log your queries.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Citation Format Matters</h3>
          <p>
            Different disciplines use different citation styles for good reasons. APA emphasizes
            the <em>year</em> of publication (critical in fast-moving sciences where recency
            matters). MLA emphasizes the <em>author</em> (important in literature where authorial
            voice matters). Chicago uses footnotes for detailed bibliographic notes without
            interrupting the main text. Harvard&apos;s in-text author-year system is compact and
            widely used internationally. Using the wrong style — or mixing styles — is one of the
            most common reasons academic papers get returned for revision. Always check your
            instructor&apos;s or journal&apos;s required style before starting.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Exporting to LaTeX / Overleaf</h3>
          <p>
            The BibTeX export option generates a <code>.bib</code> file that can be imported
            directly into LaTeX documents or Overleaf projects. Each citation gets a unique key
            based on first author&apos;s last name and year (e.g., <code>smith2024</code>).
            Reference them in your LaTeX source with <code>\cite&#123;smith2024&#125;</code>.
            This is the standard workflow for academic papers in mathematics, computer science,
            physics, and engineering.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For journal articles, always try the DOI auto-fill first — it pulls correctly-capitalized author names, full journal titles, and volume/issue/page info directly from CrossRef. This is far more accurate than typing everything manually. For books, ISBN auto-fill via OpenLibrary is fastest, but double-check the publisher field since OpenLibrary occasionally has generic entries. Always verify the auto-filled data against the source before submitting — APIs can have gaps or outdated info.",

    faqs: [
      {
        question: "What is a citation generator?",
        answer:
          "A citation generator is an online tool that formats source references into standardized academic styles (APA, MLA, Chicago, Harvard) for research papers, essays, and bibliographies. You enter the source details (author, title, year, etc.) and the tool generates a correctly-formatted citation according to the chosen style's rules.",
      },
      {
        question: "Is this citation generator free?",
        answer:
          "Yes, completely free with no paywalls. Unlike EasyBib, Citation Machine, and BibMe — which charge for APA and Chicago citations — every style (APA, MLA, Chicago, Harvard) and every feature here is free. No signup, no ads, no daily limits.",
      },
      {
        question: "Which citation styles are supported?",
        answer:
          "APA 7th edition (2019, current), MLA 9th edition (2021, current), Chicago 17th edition, and Harvard. These are the four most-used academic styles covering ~95% of citation needs in English-language academia.",
      },
      {
        question: "How do I use DOI auto-fill?",
        answer:
          "In the Auto-Fill box, select 'DOI' and paste the DOI (e.g., 10.1038/nature12373). Click the search button and the tool fetches title, authors, journal, volume, issue, pages, and year from the CrossRef API — the same data source used by Zotero and Mendeley. You can still edit any field before finalizing the citation.",
      },
      {
        question: "How do I use ISBN auto-fill?",
        answer:
          "In the Auto-Fill box, select 'ISBN' and paste any 10- or 13-digit ISBN (with or without hyphens). Click the search button and the tool fetches book title, authors, publisher, and year from OpenLibrary (openlibrary.org). Always verify the returned data — OpenLibrary occasionally has gaps for older or niche books.",
      },
      {
        question: "Can I cite YouTube videos and podcasts?",
        answer:
          "Yes. Select 'YouTube Video' or 'Podcast' as the source type. The tool supports the official APA 7th, MLA 9th, Chicago 17th, and Harvard rules for multimedia sources — including channel name (for YouTube) and host/show name (for podcasts).",
      },
      {
        question: "How do I cite a source with many authors?",
        answer:
          "Click 'Add Author' as many times as needed. The tool applies each style's specific rules: APA 7th allows up to 20 authors before using 'et al.', MLA 9th uses 'et al.' after 2 authors, Chicago 17th lists up to 3 before 'et al.', and Harvard lists up to 3 before 'et al.'",
      },
      {
        question: "Can I build a bibliography with multiple sources?",
        answer:
          "Yes. Click 'Add to Bibliography' after each citation to build a reference list. The bibliography section shows all added citations with style badges. You can remove individual entries, copy the full bibliography to clipboard, or download it as plain text (.txt) or BibTeX (.bib) for LaTeX / Overleaf.",
      },
      {
        question: "What is BibTeX and when should I use it?",
        answer:
          "BibTeX (.bib) is a file format for bibliographies used with LaTeX, the academic typesetting system common in math, physics, computer science, and engineering. If you're writing your paper in LaTeX or Overleaf, export as BibTeX and reference citations in your source with \\cite{key}. For Word / Google Docs, use plain text export instead.",
      },
      {
        question: "Is APA 7th or APA 6th correct?",
        answer:
          "APA 7th edition (published October 2019) is the current standard. This tool generates APA 7th. If your instructor or journal specifically requires APA 6th (unusual as of 2026), you'll need to adjust things manually — key 6th-to-7th changes include author count (6 → 20), publisher location (required → removed), and DOI format (doi: → https://doi.org/...).",
      },
      {
        question: "Is my data private?",
        answer:
          "Yes. All citation formatting happens locally in your browser. The only external calls are to CrossRef (for DOI lookups) and OpenLibrary (for ISBN lookups) — made directly from your browser, not proxied through our servers. We don't log, store, or see your citations or searches.",
      },
      {
        question: "Can I use this for my PhD thesis or journal submission?",
        answer:
          "Yes. The tool follows the official APA 7th, MLA 9th, Chicago 17th, and Harvard rules. Always verify the final output against your institution's specific style guide — some universities have local variations (e.g., 'Harvard UTS' vs 'Harvard UKOU'). Export as BibTeX if you're writing in LaTeX.",
      },
      {
        question: "How do I cite a website with no author?",
        answer:
          "Leave the author field empty — the tool will handle it correctly per each style: APA uses the site name as the author position, MLA starts with the article title in quotes, Chicago uses the organization, and Harvard uses the site name. For news articles, the newspaper name often substitutes.",
      },
    ],

    relatedTools: [
      { name: "Word Counter", href: "/seo-tools/word-counter" },
      { name: "AI Text Summarizer", href: "/ai-tools/text-summarizer" },
      { name: "AI Paraphraser", href: "/ai-tools/ai-paraphraser" },
      { name: "Text Similarity Checker", href: "/seo-tools/text-similarity-checker" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function CitationGeneratorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<CitationGenerator />)} />
}
