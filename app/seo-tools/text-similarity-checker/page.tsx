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
  metaTitle: "Text Similarity Checker — Near-Duplicate & Plagiarism Detector",
  metaDescription:
    "Free text similarity checker. Compare two texts with cosine similarity, Jaccard index, SimHash fingerprints, and Hamming distance. For plagiarism detection, content cannibalization audit, duplicate content QA. 100% client-side.",
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
      "Plagiarism Detector",
      "Near-Duplicate Finder",
      "SimHash Comparison Tool",
      "Cosine Similarity Calculator",
      "Jaccard Similarity Tool",
      "Levenshtein Distance Tool",
      "Article Plagiarism Checker",
      "Content Cannibalization Detector",
      "SEO Duplicate Content Checker",
      "Two-Document Compare",
      "Text Match Percentage Tool",
      "Quetext Alternative",
      "Plagscan Alternative",
      "Copyscape Alternative",
    ],
    featureList: [
      "Cosine similarity score (0-100%) — most common similarity metric",
      "Jaccard index for set-based comparison",
      "SimHash fingerprint generation for fast near-duplicate detection",
      "Hamming distance between fingerprints (lower = more similar)",
      "Side-by-side diff view highlighting matching passages",
      "Configurable n-gram size (1-5 words) for granularity",
      "Stop-word filtering to focus on meaningful overlap",
      "Useful for SEO content cannibalization (compare two of your own URLs)",
      "Useful for plagiarism checks (compare submitted text vs source)",
      "100% client-side comparison — text never leaves your browser",
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
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How Text Similarity Detection Works</h3>
          <p>
            Detecting how similar two pieces of text are sounds simple but has surprising depth. The naive approach — counting exact word matches — misses paraphrasing, synonyms, and reordering. Real similarity algorithms use mathematical techniques that measure semantic overlap, structural similarity, or both. This tool uses a combination of approaches to give you a defensible similarity score for SEO, content QA, and plagiarism detection workflows.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Similarity Algorithms Explained</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Algorithm</th>
                <th className="text-left py-2 px-2 text-foreground">What it measures</th>
                <th className="text-left py-2 px-2 text-foreground">Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Cosine similarity</strong></td>
                <td className="py-2 px-2">Angle between word-frequency vectors</td>
                <td className="py-2 px-2">Topical similarity, ignoring length</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Jaccard index</strong></td>
                <td className="py-2 px-2">|intersection| / |union| of word sets</td>
                <td className="py-2 px-2">Set-based overlap (vocabulary overlap)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Levenshtein</strong></td>
                <td className="py-2 px-2">Edit distance (insertions / deletions / substitutions)</td>
                <td className="py-2 px-2">Detecting typos, near-identical strings</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>SimHash</strong></td>
                <td className="py-2 px-2">Locality-sensitive hash; Hamming distance</td>
                <td className="py-2 px-2">Near-duplicate detection at scale</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">N-gram overlap (shingling)</td>
                <td className="py-2 px-2">Overlap of consecutive word sequences</td>
                <td className="py-2 px-2">Plagiarism detection (catches verbatim copying)</td>
              </tr>
              <tr>
                <td className="py-2 px-2">Semantic embeddings (BERT etc.)</td>
                <td className="py-2 px-2">Neural network vector distance</td>
                <td className="py-2 px-2">Detecting paraphrasing / synonyms</td>
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
            <strong>Fix:</strong> compare the two pages with this tool. If similarity &gt;50%, consolidate by (1) merging the better-performing content into one page, (2) 301-redirecting the lesser page to the merged page, (3) updating internal links. If similarity is genuinely low but they target the same query, differentiate the content (one informational, one transactional).
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Plagiarism Detection Workflow</h3>
          <ol className="list-decimal pl-6 space-y-1">
            <li><strong>Suspect a copy:</strong> see content elsewhere that mirrors yours, or suspect a student / freelancer submitted plagiarized work</li>
            <li><strong>Paste both texts into this tool</strong></li>
            <li><strong>Check the similarity score</strong> — &gt;60% with similar n-gram patterns strongly suggests copying</li>
            <li><strong>Look at the side-by-side diff</strong> to identify which sections overlap</li>
            <li><strong>For SEO:</strong> use Google&apos;s DMCA process to request removal of copied content from search results</li>
            <li><strong>For academic:</strong> compare to suspected sources; use Turnitin / similar for institutional records</li>
            <li><strong>For freelance:</strong> reject the work, request originality</li>
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
