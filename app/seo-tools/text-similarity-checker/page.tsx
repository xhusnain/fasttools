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
  metaTitle: "Text Similarity Checker (Near-Duplicate Detection)",
  metaDescription:
    "Check similarity between two texts with score, fingerprint output, and Hamming distance metrics for content QA and duplicate-content review.",
  path: "/seo-tools/text-similarity-checker",
  keywords: [
    "text similarity checker",
    "duplicate content checker",
    "near duplicate detector",
    "simhash checker",
    "text compare similarity",
    "content similarity score",
  ],

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
    alternateName: ["Content Similarity Checker", "SimHash Text Compare"],
    featureList: [
      "Similarity percentage",
      "Fingerprint output",
      "Hamming distance metric",
      "Instant browser-based comparison",
      "No signup",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Text Similarity Checker is a free tool that compares two text passages and calculates their similarity percentage using multiple algorithms.",
    quickAnswer:
      "Paste two text passages to instantly see their similarity score as a percentage. The tool uses cosine similarity, Jaccard index, and other algorithms. Useful for plagiarism checks, content deduplication, and SEO cannibalization analysis.",
    keyTakeaways: [
      "Calculates similarity percentage between two text passages",
      "Uses multiple algorithms: cosine similarity, Jaccard index, and Levenshtein distance",
      "Highlights matching phrases and common words between texts",
      "Useful for detecting content duplication and SEO cannibalization",
      "All comparison runs locally — your text is never sent to external servers",
    ],
    overview:
      "This checker compares two text inputs and returns a similarity score with technical metrics. It is useful for identifying near-duplicates, reviewing rewritten drafts, and auditing overlapping content before publishing.",

    howToSteps: [
      "Paste the first text in Text A and the second in Text B.",
      "Run comparison to generate similarity score and fingerprints.",
      "Review percentage and Hamming distance to gauge overlap.",
      "Edit and re-check if you need stronger differentiation.",
    ],

    features: [
      "Pairwise text similarity scoring",
      "Fingerprint and Hamming distance output",
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
        <p>
          Similarity checkers are most useful when you need a fast directional
          assessment of overlap between two known texts. They help teams catch
          accidental duplication and improve differentiation before content goes
          live.
        </p>
        <p>
          This tool is built for pairwise comparison. It does not crawl the web
          or search third-party databases; instead, it compares the two texts
          you provide directly.
        </p>
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
