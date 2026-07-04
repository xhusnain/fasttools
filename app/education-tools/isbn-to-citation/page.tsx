import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"
import { GTable } from "@/ui/gtable"

const CitationGenerator = dynamic(
  () =>
    import("@/components/education-tools/citation-generator").then(
      (mod) => mod.CitationGenerator
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "ISBN to Citation Converter",
  description:
    "Paste an ISBN and get a formatted citation in APA, MLA, Chicago, or Harvard — book data auto-filled from Open Library. Free, no signup.",
  metaTitle: "ISBN to Citation — Auto-Cite Any Book in APA, MLA, Chicago",
  metaDescription:
    "Turn an ISBN into a citation: paste the number, the book's title, authors, publisher, and year auto-fill from Open Library, and you get APA 7, MLA 9, Chicago, or Harvard format instantly.",
  path: "/education-tools/isbn-to-citation",

  header: {
    title: "ISBN to Citation Converter",
    description:
      "Paste any ISBN-10 or ISBN-13 — the book's details auto-fill from Open Library and you get a correctly formatted citation in APA, MLA, Chicago, or Harvard.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Education Tools", href: "/education-tools" },
    { label: "Citation Generator", href: "/education-tools/citation-generator" },
    { label: "ISBN to Citation", href: "/education-tools/isbn-to-citation" },
  ],

  schemaOptions: {
    applicationCategory: "EducationalApplication",
    description:
      "ISBN-to-citation converter with Open Library auto-fill: paste an ISBN-10 or ISBN-13 and generate APA 7th, MLA 9th, Chicago, or Harvard citations for any book.",
    alternateName: [
      "ISBN Citation Generator",
      "Cite a Book by ISBN",
      "ISBN to APA Citation",
      "ISBN to MLA Citation",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "An ISBN-to-citation converter looks up a book's bibliographic record from its ISBN (via Open Library) and formats it as a citation — APA 7th, MLA 9th, Chicago, or Harvard — without manual data entry.",
    quickAnswer:
      "Switch the auto-fill above to ISBN, paste the number from the book's copyright page or back cover (ISBN-10 or ISBN-13, hyphens optional), and the title, authors, publisher, and year fill themselves from Open Library. Pick your style — APA 7, MLA 9, Chicago, or Harvard — and copy the formatted citation.",
    keyTakeaways: [
      "One paste: ISBN → full book record → formatted citation in your chosen style",
      "Accepts ISBN-10 and ISBN-13, with or without hyphens",
      "Data from Open Library's records — always eyeball edition and year before submitting",
      "Cite the edition you actually used: each edition has its own ISBN and page numbers",
      "Builds a full bibliography — add multiple books and copy the list",
    ],
    overview:
      "Typing bibliographic details by hand is where citation errors are born — a transposed year, a publisher's imprint confused with the publisher, an editor listed as an author. The ISBN short-circuits it: that number uniquely identifies the exact edition of the book, and Open Library's records carry the fields a citation needs. Paste the ISBN, review what auto-fills (records are community-maintained — trust but verify), choose APA, MLA, Chicago, or Harvard, and copy. The sections below cover where to find the right ISBN, why edition matters more than students expect, and the fields auto-fill sometimes gets wrong.",

    howToSteps: [
      "Find the ISBN on the book's copyright page (best) or back-cover barcode.",
      "Switch the tool's auto-fill to ISBN mode, paste the number, and fetch.",
      "Verify the filled fields — especially year and edition — against the physical book.",
      "Pick your citation style and copy the result (or add it to the bibliography and keep going).",
    ],

    aboutTool: (
      <div className="space-y-10">
        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Which ISBN to Use (It Matters)</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            A book doesn&apos;t have one ISBN — every edition and format does: hardcover, paperback,
            and ebook of the same title carry different numbers, and a 3rd edition is a different
            ISBN (and different page numbering) from the 4th. Cite the edition you actually read,
            because your page-number references only make sense against it. The copyright page is
            the authoritative source; the back-cover barcode usually matches but on re-issues can
            differ. If you only have an ISBN-10 from an older book, it works here too — ISBN-13 is
            just the same identifier with a 978 prefix and a recalculated check digit.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">The Same Book in Each Style</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            What the four styles do with identical ISBN data:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Style</th>
                  <th className="p-3 text-left">Format shape</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">APA 7th</td><td className="p-3">Author, A. A. (Year). <em>Title in sentence case</em>. Publisher.</td></tr>
                <tr><td className="p-3 font-semibold">MLA 9th</td><td className="p-3">Author, First. <em>Title in Title Case</em>. Publisher, Year.</td></tr>
                <tr><td className="p-3 font-semibold">Chicago</td><td className="p-3">Author, First. Year. <em>Title in Title Case</em>. Place: Publisher.</td></tr>
                <tr><td className="p-3 font-semibold">Harvard</td><td className="p-3">Author, A. (Year) <em>Title in sentence case</em>. Publisher.</td></tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            Note the traps the formatter handles for you: APA and Harvard sentence-case the title
            while MLA and Chicago title-case it, author initials vs full first names differ by
            style, and the year moves position in all four.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">What Auto-Fill Can Get Wrong</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Open Library records are excellent but community-maintained, so check three fields
            before submitting: the <strong>year</strong> (records sometimes carry the original
            publication year rather than your edition&apos;s), the <strong>publisher</strong>
            (imprints vs parent companies — cite what the copyright page says), and{" "}
            <strong>contributor roles</strong> (edited volumes can list editors in the author field;
            APA and MLA cite editors differently). The tool lets you edit every field after
            auto-fill — thirty seconds of checking against the copyright page is what turns a
            convenient citation into a correct one.
          </p>
        </article>
      </div>
    ),

    proTip:
      "Citing several chapters from the same edited volume? Auto-fill the book once by ISBN, then duplicate and adjust per chapter — chapter citations need the chapter author AND the book editors, and reusing the verified book record keeps the shared fields consistent across every entry.",

    faqs: [
      {
        question: "How do I cite a book if I only have the ISBN?",
        answer:
          "Paste it into the tool above with auto-fill set to ISBN: the title, authors, publisher, and year load from Open Library's record for that exact edition, and the citation formats in APA, MLA, Chicago, or Harvard. Verify the year and edition against the book itself before submitting.",
      },
      {
        question: "Does it take ISBN-10 and ISBN-13?",
        answer:
          "Both, with or without hyphens. They're the same identifier in two encodings — ISBN-13 adds the 978 (or 979) prefix. Books published after 2007 show ISBN-13; older books may only show ISBN-10.",
      },
      {
        question: "Does the citation itself include the ISBN?",
        answer:
          "No — none of the major styles (APA, MLA, Chicago, Harvard) include ISBNs in citations. The ISBN is the lookup key that fetches accurate data; the formatted citation contains the standard elements: author, year, title, publisher (and place, for Chicago).",
      },
      {
        question: "The ISBN wasn't found — what now?",
        answer:
          "Very new titles, some regional publishers, and certain ebook ISBNs are missing from Open Library. Enter the fields manually in the same tool (they're all editable) — the copyright page has everything a citation needs. Double-check the ISBN for typos first; one digit off means a different or nonexistent book.",
      },
      {
        question: "Which edition's ISBN should I cite for an ebook?",
        answer:
          "Cite the version you read. If you read the Kindle/EPUB edition, use its ISBN if it has one; where the ebook lacks its own ISBN, most styles accept citing the print edition with a format note. Page-number references are the real issue — APA lets you cite chapter/section markers when fixed pages don't exist.",
      },
    ],

    relatedTools: [
      { name: "Citation Generator (all source types)", href: "/education-tools/citation-generator" },
      { name: "Word Counter", href: "/seo-tools/word-counter" },
      { name: "AI Readability Analyzer", href: "/ai-tools/ai-readability-analyzer" },
      { name: "Text Similarity Checker", href: "/seo-tools/text-similarity-checker" },
      { name: "All Education Tools", href: "/education-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function IsbnToCitationPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(<CitationGenerator defaultAutoFillType="isbn" />)}
    />
  )
}
