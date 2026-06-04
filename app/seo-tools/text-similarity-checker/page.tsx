import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const TextSimilarityChecker = dynamic(
  () => import("@/components/seo-tools/text-similarity-checker").then((mod) => mod.TextSimilarityChecker),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Text Similarity Checker",
  description:
    "Compare two texts with fingerprint-based similarity scoring to identify near-duplicate content and revision overlap.",
  metaTitle: "Text Similarity Checker — SimHash Near-Duplicate Text Compare",
  metaDescription:
    "Free text similarity checker. Compare two pasted texts with SimHash-style fingerprints, a similarity score, Hamming distance, word counts, and character counts.",
  path: "/seo-tools/text-similarity-checker",

  header: {
    title: "Text Similarity Checker",
    description:
      "Compare two documents and measure how closely their content overlaps.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "SEO Tools", href: "/seo-tools" },
    { label: "Text Similarity Checker", href: "/seo-tools/text-similarity-checker" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Compare two text inputs and return similarity metrics using fingerprint analysis.",
    alternateName: [
      "Content Similarity Checker",
      "Two Text Compare Tool",
      "Near-Duplicate Finder",
      "SimHash Comparison Tool",
      "Content Cannibalization Detector",
      "SEO Duplicate Content Checker",
      "Two-Document Compare",
      "Text Match Percentage Tool",
      "Revision Similarity Checker",
    ],
    featureList: [
      "SimHash-style similarity score from 0-100%",
      "64-bit fingerprint generation for each pasted text",
      "Hamming distance between fingerprints (lower = more similar)",
      "Word, character, sentence, and feature counts for each text",
      "Sample text loader, swap button, and clear button",
      "Copy fingerprints to clipboard",
      "Useful for revision, duplicate-content, and cannibalization QA",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Text Similarity Checker compares two pasted texts and estimates how similar they are using fingerprint-based near-duplicate detection.",
    quickAnswer:
      "Paste two text passages and click Compare Texts. The tool returns a SimHash-style similarity percentage, Hamming distance, fingerprints, and basic text stats for each input.",
    keyTakeaways: [
      "Calculates similarity percentage between two text passages",
      "Uses SimHash-style fingerprints built from words and word pairs",
      "Lower Hamming distance usually means stronger text overlap",
      "Useful for revision checks, near-duplicate QA, and SEO cannibalization review",
      "This compares two known texts; it does not search the web or academic databases",
    ],
    overview:
      "This checker compares two pasted text inputs and returns a similarity score with technical fingerprint metrics. It is useful for identifying near-duplicates, reviewing rewritten drafts, checking whether two landing pages are too close, and auditing overlapping content before publishing. It is not a full plagiarism search engine: you provide both texts being compared.",

    howToSteps: [
      "Paste the first text in Text A and the second in Text B.",
      "Run comparison to generate similarity score and fingerprints.",
      "Review percentage and Hamming distance to gauge overlap.",
      "Edit and re-check if you need stronger differentiation.",
    ],

    features: [
      "Pairwise text similarity scoring",
      "64-bit fingerprint and Hamming distance output",
      "Word, character, sentence, and feature counts",
      "Sample, swap, clear, and copy-fingerprint controls",
      "Fast client-side comparison",
      "Useful for revision and duplication QA",
      "No account required",
    ],

    useCases: [
      "Detecting near-duplicate pages in SEO workflows",
      "Comparing article revisions during editorial QA",
      "Checking overlap between landing pages targeting similar terms",
      "Reviewing adapted content before republishing",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How Text Similarity Detection Works</h3>
          <p>
            Detecting how similar two pieces of text are sounds simple but has surprising depth. This tool uses a SimHash-style approach: it normalizes text, extracts word and word-pair features, converts those features into 64-bit fingerprints, and compares the fingerprints with Hamming distance. Similar texts tend to produce similar fingerprints, so the result is useful for near-duplicate and revision checks.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What This Tool Calculates</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Metric</th>
                <th className="text-left py-2 px-2 text-foreground">What it measures</th>
                <th className="text-left py-2 px-2 text-foreground">Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Similarity score</strong></td>
                <td className="py-2 px-2">Percentage derived from 64-bit fingerprint overlap</td>
                <td className="py-2 px-2">Quick near-duplicate assessment</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Hamming distance</strong></td>
                <td className="py-2 px-2">Number of different bit positions between fingerprints</td>
                <td className="py-2 px-2">Technical comparison where lower means more similar</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Fingerprint</strong></td>
                <td className="py-2 px-2">A compact hexadecimal representation of the text features</td>
                <td className="py-2 px-2">Comparing and recording duplicate checks</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Text stats</strong></td>
                <td className="py-2 px-2">Words, characters, sentences, and extracted features</td>
                <td className="py-2 px-2">Checking whether two inputs are comparable in length</td>
              </tr>
              <tr>
                <td className="py-2 px-2">Sample and swap controls</td>
                <td className="py-2 px-2">Load examples, swap inputs, or clear the comparison</td>
                <td className="py-2 px-2">Fast editorial QA workflow</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Similarity Score Interpretation</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>0-20%:</strong> Different topics. Low overlap is normal for unrelated content.</li>
            <li><strong>20-40%:</strong> Same domain, different angles. Common between articles on the same topic.</li>
            <li><strong>40-60%:</strong> Substantial overlap. Investigate — could be intentional (revisions, translations) or accidental (cannibalization).</li>
            <li><strong>60-80%:</strong> High duplication. If this isn&apos;t intentional, consolidate into one piece.</li>
            <li><strong>80-95%:</strong> Near-duplicate. Likely a revision or republication. Set canonical tags appropriately.</li>
            <li><strong>95-100%:</strong> Essentially identical. Check for copy-paste mistakes or scraped content.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">SEO Content Cannibalization</h3>
          <p>
            <strong>Cannibalization</strong> happens when two of your own pages target the same query and compete for rankings. Both rank lower than one combined page would. Symptoms:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Two URLs from your site appearing for the same query in Search Console</li>
            <li>Rankings fluctuating between the two URLs for the same query</li>
            <li>Neither URL ranking on page 1, when individually they should</li>
            <li>Click-through rates split between the two URLs</li>
          </ul>
          <p className="mt-3">
            <strong>Fix:</strong> compare the two pages with this tool. If similarity is high, review the overlapping sections manually and decide whether to consolidate, rewrite one page for a different intent, or adjust internal links and canonicals. If similarity is low but both pages target the same query, the issue may be keyword targeting rather than duplicated wording.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Known-Source Plagiarism Check</h3>
          <ol className="list-decimal pl-6 space-y-1">
            <li><strong>Provide both texts:</strong> paste the submitted text and the suspected source text.</li>
            <li><strong>Check the similarity score:</strong> high similarity suggests a close relationship between the two inputs.</li>
            <li><strong>Review manually:</strong> this page does not highlight passages, so inspect the sections that look suspicious.</li>
            <li><strong>Use a full plagiarism service if needed:</strong> this tool does not search external web, academic, or private databases.</li>
            <li><strong>Document the result:</strong> copy fingerprints or notes if you need an editorial QA record.</li>
          </ol>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">When Similarity Is OK / Expected</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Templates:</strong> product pages, location pages often share boilerplate; differentiate the unique parts</li>
            <li><strong>Legal pages:</strong> Terms of Service, Privacy Policy across sites often borrow from common templates</li>
            <li><strong>Translations:</strong> the same content in different languages will have high cross-language similarity</li>
            <li><strong>Standardized sections:</strong> author bios, footers, &quot;about us&quot; copy</li>
            <li><strong>Revisions:</strong> v1 → v2 of same article will have high similarity by design</li>
            <li><strong>Quotation / attribution:</strong> citing other sources naturally creates overlap</li>
          </ul>
          <p className="mt-3">
            High similarity isn&apos;t automatically a problem — context matters. Use the score plus a manual review to make decisions.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy</h3>
          <p>
            All comparison runs in your browser. Neither text is sent to any server. Safe for proprietary content, confidential documents, or student work where privacy is important.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Use this score together with manual review. High overlap can be valid for templates, legal text, and standardized sections.",

    faqs: [
      {
        question: "What does the similarity score mean?",
        answer:
          "It represents how closely the two provided texts match according to fingerprint-based comparison. Higher percentages indicate stronger overlap.",
      },
      {
        question: "What is Hamming distance in this context?",
        answer:
          "Hamming distance is the number of differing bit positions between fingerprints. Lower distance usually means higher textual similarity.",
      },
      {
        question: "Can this replace full plagiarism detection services?",
        answer:
          "No. This tool compares two known texts only. Full plagiarism systems additionally search external web and academic sources.",
      },
      {
        question: "When should SEO teams use it?",
        answer:
          "Use it before publishing related pages to reduce unintentional duplication and potential keyword cannibalization.",
      },
      {
        question: "Is this tool free?",
        answer: "Yes. It is free to use without signup.",
      },
    ],

    additionalContent: [
      {
        heading: "Editorial Workflow Tip",
        content:
          "When updating an existing article, compare old and new drafts to ensure meaningful change rather than superficial edits.",
      },
      {
        heading: "SEO Audit Use",
        content:
          "For clusters targeting related terms, compare page introductions and key sections to avoid repeating near-identical phrasing across URLs.",
      },
    ],

    relatedTools: [
      { name: "Keyword Density Checker", href: "/seo-tools/keyword-density" },
      { name: "Open Graph Meta Tag Generator", href: "/seo-tools/meta-tags" },
      { name: "URL Parser", href: "/web-tools/url-parser" },
      { name: "All SEO Tools", href: "/seo-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function TextSimilarityCheckerPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<TextSimilarityChecker />)} />
}
