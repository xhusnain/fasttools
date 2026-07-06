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
    "Free citation generator for APA 7th, MLA 9th, Chicago author-date, and Harvard styles. Auto-fill from DOI or ISBN, cite common source types, and export bibliographies.",
  metaTitle: "Citation Generator — APA, MLA, Chicago & Harvard References",
  metaDescription:
    "Free citation generator for APA 7th, MLA 9th, Chicago author-date, and Harvard. Cite books, journals, websites, newspapers, YouTube, and podcasts. DOI/ISBN auto-fill.",
  path: "/education-tools/citation-generator",

  schemaOptions: {
    applicationCategory: "EducationalApplication",
    description:
      "Free online citation generator for APA 7th, MLA 9th, Chicago author-date, and Harvard references. Handles books, journal articles, websites, newspapers, YouTube videos, and podcasts. Auto-fills citation metadata from DOI via CrossRef and ISBN via OpenLibrary. Includes live citation preview, bibliography builder, clipboard copy, and plain text or BibTeX export.",
    featureList: [
      "4 citation styles: APA 7th, MLA 9th, Chicago author-date, Harvard",
      "6 source types: book, journal article, website, newspaper, YouTube video, podcast",
      "Auto-fill from DOI via CrossRef",
      "Auto-fill from ISBN via OpenLibrary",
      "Multiple authors with style-specific formatting",
      "Live citation preview with proper italics",
      "Build a full bibliography with multiple sources",
      "Copy individual citations or entire bibliography",
      "Export bibliography as plain text (.txt) or BibTeX (.bib) format",
      "Style-specific author rules for APA, MLA, Chicago, and Harvard",
      "No signup required",
    ],
    softwareRequirements: "Modern web browser with JavaScript enabled",
    alternateName: [
      "APA Citation Generator",
      "MLA Citation Generator",
      "Chicago Citation Generator",
      "Harvard Reference Generator",
      "Bibliography Maker",
      "Reference Generator",
      "BibTeX Generator",
      "DOI Citation Tool",
      "ISBN Citation Tool",
      "Free Citation Tool",
    ],
  },

  header: {
    title: "Free Citation Generator",
    description:
      "Cite in APA 7th, MLA 9th, Chicago author-date, and Harvard styles. Auto-fill from DOI or ISBN, build bibliographies, and export as text or BibTeX.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Education Tools", href: "/education-tools" },
    { label: "Citation Generator", href: "/education-tools/citation-generator" },
  ],

  content: {
    definition:
      "A citation generator formats source details into academic references for research papers, essays, bibliographies, and works cited pages.",

    quickAnswer:
      "Pick APA, MLA, Chicago, or Harvard, choose a source type, and fill in the details. You can also paste a DOI or ISBN to auto-fill metadata, then add the citation to a bibliography and export it as text or BibTeX.",

    keyTakeaways: [
      "4 styles supported: APA 7th, MLA 9th, Chicago author-date, and Harvard",
      "6 source types: book, journal article, website, newspaper, YouTube video, podcast",
      "Auto-fill from DOI through CrossRef or ISBN through OpenLibrary",
      "Per-style author formatting: APA uses up to 20 authors before 'et al.', MLA uses 'et al.' after 2 authors, Chicago lists up to 3, Harvard up to 3",
      "Build full bibliographies and export as plain text (.txt) or BibTeX (.bib) for LaTeX / Overleaf",
      "Always verify generated citations against your instructor, journal, or institutional style guide",
    ],

    overview:
      "This citation generator formats references in APA 7th, MLA 9th, Chicago author-date, and Harvard styles. Fill in source details manually or paste a DOI to auto-fill journal metadata from CrossRef, or an ISBN to auto-fill book metadata from OpenLibrary. The tool supports books, journal articles, websites, newspapers, YouTube videos, and podcasts. As you type, the citation preview updates with italics, punctuation, and author formatting rules for the selected style. Add citations to a bibliography, copy the full list, or download plain text or BibTeX for LaTeX and Overleaf.",

    howToSteps: [
      "Pick a citation style (APA 7th, MLA 9th, Chicago, or Harvard) and source type (book, journal, website, newspaper, YouTube video, or podcast).",
      "Either fill in the source details manually, or use the Auto-Fill box: paste a DOI for journal articles (fetches from CrossRef) or an ISBN for books (fetches from OpenLibrary). All metadata fills in automatically.",
      "Review and edit any fields. Add additional authors with the 'Add Author' button — the tool will format them correctly per your chosen style (et al., & signs, serial commas).",
      "Check the live citation preview. Click 'Copy' to grab a single citation, or 'Add to Bibliography' to build a full reference list.",
      "When your bibliography is complete, click 'Copy All' to copy the entire list, or download as plain text (.txt) or BibTeX (.bib) for use in LaTeX / Overleaf.",
    ],

    features: [
      "APA 7th Edition: The current American Psychological Association style (published 2019). Full support for up to 20 authors before 'et al.' — matches the official 2019 revision.",
      "MLA 9th Edition: The current Modern Language Association style (published 2021). Proper 'Works Cited' formatting with container elements.",
      "Chicago author-date style: Formats references with author, year, title, source, and publication details.",
      "Harvard Referencing: Generates author-year references with 'Available at' URL formatting and '(Accessed:)' dates for web sources.",
      "Auto-Fill from DOI: Paste any DOI (e.g., 10.1038/nature12373) and the tool fetches title, authors, journal, volume, issue, pages, and year from CrossRef.",
      "Auto-Fill from ISBN: Paste any 10- or 13-digit ISBN and the tool fetches book title, authors, publisher, and year from OpenLibrary.",
      "6 Source Types: Books, journal articles, websites, newspapers, YouTube videos, and podcasts — covering most academic citation needs.",
      "Multiple Authors: Add as many authors as needed. The tool applies each style's specific rules: APA lists up to 20 before 'et al.', MLA uses 'et al.' after 2, Chicago lists up to 3, Harvard lists up to 3.",
      "Live Preview: The formatted citation updates as you type, with proper italics (for book/journal/website titles), correct punctuation, and style-specific author formatting.",
      "Bibliography Builder: Add multiple citations to build a complete reference list. Remove individual entries or copy the whole list.",
      "Export Formats: Plain text (.txt) for pasting into Word or Google Docs, or BibTeX (.bib) for use in LaTeX / Overleaf.",
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
            psychology, education, and social sciences. APA 7th is widely required; it allows
            up to 20 authors before using &quot;et al.&quot; and removed the publisher location
            requirement. <strong>MLA (Modern Language Association)</strong> is used in
            literature, language studies, and humanities. MLA 9th uses a flexible source
            container system. <strong>Chicago</strong> is used in history, arts, and some
            humanities; this tool focuses on Chicago-style author-date references rather than
            footnote notes-bibliography formatting. <strong>Harvard</strong> is common in the UK
            and Commonwealth, but requirements vary by institution, so always check your local
            guide.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How Auto-Fill Works</h3>
          <p>
            When you paste a DOI, the tool calls the <strong>CrossRef API</strong>{" "}
            (api.crossref.org) for scholarly metadata such as title, authors, journal, volume,
            issue, pages, and year. When you paste an ISBN, the tool calls <strong>OpenLibrary</strong>{" "}
            (openlibrary.org), a free public library project by the Internet Archive with data
            for books. The metadata is fetched directly in your browser. Always review the
            returned fields because public metadata can be incomplete, duplicated, or formatted
            differently from your institution&apos;s requirements.
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
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Limits to Review Before Submission</h3>
          <p>
            Citation generators save time, but they do not replace a final style check. Confirm
            capitalization, missing authors, date precision, DOI format, access dates, edition
            numbers, and whether your assignment requires Chicago notes-bibliography rather than
            author-date. If your university uses a local Harvard variant, adjust the final output
            to that guide.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For journal articles, try DOI auto-fill first — it can pull author names, journal titles, and volume/issue/page info from CrossRef. For books, ISBN auto-fill via OpenLibrary is fastest, but double-check the publisher and year because public metadata can have gaps or outdated entries.",

    faqs: [
      {
        question: "What is a citation generator?",
        answer:
          "A citation generator is an online tool that formats source references into academic styles such as APA, MLA, Chicago, and Harvard. You enter source details like author, title, year, and publisher, then review the generated citation against your required style guide.",
      },
      {
        question: "Is this citation generator free?",
        answer:
          "Yes. You can generate citations and bibliographies without signup.",
      },
      {
        question: "Which citation styles are supported?",
        answer:
          "APA 7th, MLA 9th, Chicago author-date, and Harvard. If your class requires Chicago notes-bibliography or a specific local Harvard variant, review and adjust the final output.",
      },
      {
        question: "How do I use DOI auto-fill?",
        answer:
          "In the Auto-Fill box, select 'DOI' and paste the DOI (e.g., 10.1038/nature12373). Click the search button and the tool fetches title, authors, journal, volume, issue, pages, and year from CrossRef. You can still edit any field before finalizing the citation.",
      },
      {
        question: "How do I use ISBN auto-fill?",
        answer:
          "In the Auto-Fill box, select 'ISBN' and paste any 10- or 13-digit ISBN (with or without hyphens). Click the search button and the tool fetches book title, authors, publisher, and year from OpenLibrary (openlibrary.org). Always verify the returned data — OpenLibrary occasionally has gaps for older or niche books.",
      },
      {
        question: "Can I cite YouTube videos and podcasts?",
        answer:
          "Yes. Select 'YouTube Video' or 'Podcast' as the source type. The tool formats multimedia references with fields such as channel name, video URL, host, show name, episode number, and publish date.",
      },
      {
        question: "How do I cite a source with many authors?",
        answer:
          "Click 'Add Author' as many times as needed. The tool applies style-specific rules: APA 7th allows up to 20 authors before using 'et al.', MLA 9th uses 'et al.' after 2 authors, Chicago author-date lists up to 3 before 'et al.', and Harvard lists up to 3 before 'et al.'",
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
          "You can use it to build draft references and bibliographies, including BibTeX export for LaTeX. Always verify final citations against your institution's or journal's style guide before submission.",
      },
      {
        question: "How do I cite a website with no author?",
        answer:
          "Leave the author field empty — the tool will handle it correctly per each style: APA uses the site name as the author position, MLA starts with the article title in quotes, Chicago uses the organization, and Harvard uses the site name. For news articles, the newspaper name often substitutes.",
      },
    ],

    relatedTools: [
      { name: "Word Counter", href: "/seo-tools/word-counter" },
      { name: "Text Similarity Checker", href: "/seo-tools/text-similarity-checker" },
      { name: "Keyword Density Checker", href: "/seo-tools/keyword-density" },
      { name: "AI Paraphraser", href: "/ai-tools/ai-paraphraser" },
      { name: "AI Readability Analyzer", href: "/ai-tools/ai-readability-analyzer" },
      { name: "AI Text Summarizer", href: "/ai-tools/text-summarizer" },
      { name: "GPA Calculator", href: "/calculator/gpa-calculator" },
      { name: "All Education Tools", href: "/education-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function CitationGeneratorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<CitationGenerator />)} />
}
