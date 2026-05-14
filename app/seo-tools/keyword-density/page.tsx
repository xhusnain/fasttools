import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const KeywordDensityChecker = dynamic(
  () => import("@/components/dev-tools/keyword-density-checker").then((mod) => mod.KeywordDensityChecker),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Keyword Density Checker",
  description:
    "Analyze keyword frequency and phrase distribution to review on-page relevance and reduce over-optimization risk.",
  metaTitle: "Keyword Density Checker — N-gram, Phrase Frequency & Stuffing Detector",
  metaDescription:
    "Free keyword density tool. Analyze unigrams, bigrams, trigrams (1/2/3-word phrases). Detect keyword stuffing (>3% danger zone), verify primary keyword 1-2% target, compare to ranking competitors. URL or paste-text input. Free, no signup.",
  path: "/seo-tools/keyword-density",

  header: {
    title: "Keyword Density Checker",
    description:
      "Analyze keyword frequency and density percentages for single words (unigrams), two-word phrases (bigrams), and three-word phrases (trigrams) in your content. Detect keyword stuffing patterns, verify target keyword usage is within the recommended 1-2% density range, and optimize on-page SEO balance before publishing.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "SEO Tools", href: "/seo-tools" },
    { label: "Keyword Density Checker", href: "/seo-tools/keyword-density" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Analyze keyword density and phrase frequency in content and URLs.",
    alternateName: [
      "Keyword Frequency Checker",
      "Keyword Stuffing Detector",
      "N-gram Analyzer",
      "Phrase Frequency Counter",
      "Content Keyword Analyzer",
      "On-Page SEO Density Tool",
      "Article Keyword Analyzer",
      "Topic Cluster Analyzer",
      "Bigram Trigram Counter",
      "TF-IDF Keyword Tool",
      "SEMrush Keyword Density Alternative",
      "Surfer SEO Keyword Alternative",
      "Yoast Density Alternative",
      "Word Cloud Generator",
      "Content Optimization Tool",
    ],
    featureList: [
      "Unigram (1-word), bigram (2-word), trigram (3-word) phrase frequency analysis",
      "Density percentage per term — instant on-page SEO health check",
      "Keyword stuffing warning when density exceeds 3% (Google penalty zone)",
      "Target keyword tracker: set your primary keyword, see if you're in the 1-2% sweet spot",
      "Stop-word filtering: removes 'the', 'a', 'of' etc. so you see meaningful terms",
      "Word cloud visualization showing topical emphasis at a glance",
      "URL fetch + analyze: paste any URL to analyze published content directly",
      "Plain text input mode for drafts before publishing",
      "Export results as CSV for tracking across content audits",
      "100% client-side analysis — content never sent to a server",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Keyword Density Checker is a free tool that analyzes text to calculate how frequently specific keywords and phrases appear as a percentage of total word count.",
    quickAnswer:
      "Paste your content to see keyword frequency and density percentages for single words, two-word phrases, and three-word phrases. Aim for 1-2% density for target keywords. Identifies over-optimized and under-used terms.",
    keyTakeaways: [
      "Calculates keyword density as a percentage of total word count",
      "Analyzes 1-word, 2-word, and 3-word phrase frequencies",
      "Recommended keyword density: 1-2% for primary keywords",
      "Over 3% density may trigger search engine keyword stuffing penalties",
      "Useful for on-page SEO optimization and content auditing",
    ],
    overview:
      "This free keyword density checker analyzes your content to calculate how frequently specific keywords and phrases appear as a percentage of total word count — the core metric for on-page SEO optimization and keyword stuffing detection. Paste any article, blog post, landing page copy, or product description to see density percentages for single words (unigrams), two-word phrases (bigrams), and three-word phrases (trigrams) ranked by frequency. The recommended keyword density for primary target keywords is 1-2%, with secondary keywords at 0.5-1%. Densities exceeding 3% may trigger Google's keyword stuffing filters and hurt rankings rather than help them. Use the n-gram analysis to identify repetitive phrase patterns, discover under-used related terms, compare your content's topical emphasis against top-ranking competitor pages, and refine copy for natural readability while maintaining strong topical relevance signals. Essential for content writers, SEO specialists, copywriters, and editorial teams performing pre-publish quality checks and content refresh audits.",

    howToSteps: [
      "Paste your article text, blog post content, landing page copy, or product description into the analysis input — or provide a URL for live page analysis.",
      "Run the keyword density analysis to generate frequency tables for 1-word terms, 2-word phrases (bigrams), and 3-word phrases (trigrams).",
      "Review the highest-density terms and check that your primary keyword falls within the recommended 1-2% range — flag any terms exceeding 3% for potential keyword stuffing.",
      "Identify repetitive phrase patterns in the bigram and trigram tables that may signal over-optimization or unnatural writing.",
      "Revise overstuffed sections by replacing repeated keywords with synonyms, related terms, and supporting subtopic language, then rerun the analysis to verify improvements.",
    ],

    features: [
      "N-gram analysis for unigrams (1-word), bigrams (2-word), and trigrams (3-word) with frequency counts and density percentages",
      "Keyword density percentage calculation as (keyword count / total words) x 100 — the standard SEO metric formula",
      "Handles large content: articles up to 10,000+ words, long-form guides, and complete landing page copy",
      "Keyword stuffing detection with visual flagging of terms exceeding recommended density thresholds",
      "Iterative re-check workflow — edit content and reanalyze instantly without reloading the page",
      "Stop word filtering to focus analysis on meaningful content keywords rather than common function words",
    ],

    useCases: [
      "Pre-publish on-page SEO review — verify target keyword density is within 1-2% and no unintentional keyword stuffing exists before publishing",
      "Content refresh audits — analyze older articles for keyword density imbalances, outdated emphasis, and opportunities to add related terms",
      "Competitor content analysis — paste top-ranking competitor page text to understand their keyword emphasis, phrase patterns, and topical coverage",
      "SEO copywriting optimization — ensure landing page copy, product descriptions, and category pages maintain natural keyword usage without over-optimization",
      "Content cannibalization detection — compare keyword density profiles across similar pages to identify overlapping keyword targeting",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Keyword Density: The Math + The Reality</h3>
          <p>
            Keyword density is calculated as <code>(keyword occurrences / total words) × 100</code>, expressed as a percentage. If &quot;email marketing&quot; appears 15 times in a 1,000-word article, density is 1.5%. <strong>In 2026 SEO, density is a diagnostic indicator, not a ranking factor.</strong> Google&apos;s algorithms use sophisticated natural language processing (NLP) — BERT, MUM, and successor models — that understand semantic meaning far beyond term frequency. But density analysis still matters because:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Excessive density (&gt;3%) triggers keyword stuffing detection</strong> and can hurt rankings</li>
            <li><strong>Very low density (&lt;0.5%) may signal weak topical relevance</strong> — Google may not understand what your page is &quot;about&quot;</li>
            <li><strong>Patterns reveal AI-generated content</strong> — natural writing has variable repetition; AI tends toward consistent patterns</li>
            <li><strong>Competitor analysis</strong> — see how your density compares to top-ranking pages</li>
            <li><strong>Topical coverage gaps</strong> — n-gram analysis surfaces missing subtopics</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Optimal Keyword Density by Use Case</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Content type</th>
                <th className="text-left py-2 px-2 text-foreground">Primary keyword density</th>
                <th className="text-left py-2 px-2 text-foreground">Secondary keywords</th>
                <th className="text-left py-2 px-2 text-foreground">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="py-2 px-2"><strong>Blog post (informational)</strong></td><td className="py-2 px-2">0.5-1.5%</td><td className="py-2 px-2">0.2-0.5%</td><td className="py-2 px-2">Focus on E-E-A-T and topical depth</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">Long-form guide (3,000+ words)</td><td className="py-2 px-2">0.5-1%</td><td className="py-2 px-2">0.1-0.3%</td><td className="py-2 px-2">Lower density natural at length</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><strong>Product page</strong></td><td className="py-2 px-2">1-2%</td><td className="py-2 px-2">0.5-1%</td><td className="py-2 px-2">Be explicit about product name</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">Service page (local)</td><td className="py-2 px-2">1-2%</td><td className="py-2 px-2">0.5%</td><td className="py-2 px-2">Include location keywords too</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">Landing page (PPC)</td><td className="py-2 px-2">2-3%</td><td className="py-2 px-2">0.5%</td><td className="py-2 px-2">Higher density tolerable; match ad copy</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">Category / collection page</td><td className="py-2 px-2">0.5-1%</td><td className="py-2 px-2">N/A</td><td className="py-2 px-2">Mostly navigational; less keyword density</td></tr>
              <tr><td className="py-2 px-2 text-red-500"><strong>&gt;3% anywhere</strong></td><td className="py-2 px-2">N/A</td><td className="py-2 px-2">N/A</td><td className="py-2 px-2 text-red-500">Likely stuffing — rewrite for natural flow</td></tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">N-Gram Analysis: What 2- and 3-Word Phrases Reveal</h3>
          <p>
            Single-word frequency misses patterns. N-gram analysis (bigrams, trigrams) reveals:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Stuffing patterns:</strong> &quot;best software&quot; appearing 20 times in a 1,000-word post signals unnatural emphasis</li>
            <li><strong>Variation gaps:</strong> if your trigrams cluster around 2-3 phrases, content lacks variety</li>
            <li><strong>Long-tail opportunities:</strong> low-frequency trigrams pointing to user questions you didn&apos;t fully address</li>
            <li><strong>AI-generated tells:</strong> ChatGPT/Claude tend to repeat phrases like &quot;in conclusion,&quot; &quot;it&apos;s important to,&quot; &quot;when it comes to&quot; — high trigram density of these = AI signature</li>
            <li><strong>Topic clusters:</strong> bigrams cluster around themes; ideal content has multiple cluster centers</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Modern SEO: TF-IDF, BM25, and Semantic Coverage</h3>
          <p>
            Pure density is 1990s SEO. Modern search engines use more sophisticated approaches:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>TF-IDF (Term Frequency-Inverse Document Frequency):</strong> measures how unusual a term is in your document vs. the broader web. Low-IDF terms (like &quot;the&quot;) are filtered out; high-IDF terms (specific jargon) signal expertise.</li>
            <li><strong>BM25:</strong> Elasticsearch&apos;s default ranking function. Like TF-IDF but with diminishing returns on repetition — appearing 100 times isn&apos;t much more valuable than 10 times.</li>
            <li><strong>Semantic vectors (BERT, MUM):</strong> Google compares your content&apos;s semantic embedding to query embeddings. Synonyms and related concepts count, not just exact keyword matches.</li>
            <li><strong>Topical authority:</strong> covering related subtopics, entities, and questions signals expertise. A page about &quot;email marketing&quot; that mentions deliverability, list segmentation, A/B testing, GDPR, etc., ranks higher than one obsessing only on the exact phrase.</li>
            <li><strong>E-E-A-T signals:</strong> Experience, Expertise, Authoritativeness, Trust. Density matters far less than depth.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Practical Content Workflow</h3>
          <ol className="list-decimal pl-6 space-y-1">
            <li><strong>Write naturally first.</strong> Don&apos;t check density mid-draft — write for the reader.</li>
            <li><strong>Audit with this tool.</strong> Check density of your primary keyword and top-ranking competitors&apos; densities.</li>
            <li><strong>If too high (&gt;3%):</strong> replace duplicates with synonyms, pronouns, or related phrases. Add subtopic sections to dilute.</li>
            <li><strong>If too low (&lt;0.5%):</strong> review the H1, intro paragraph, and conclusion — these high-weight sections should mention the primary keyword.</li>
            <li><strong>Check n-grams:</strong> any 2-word or 3-word phrases appearing &gt;15-20 times? Replace 30-50% of them with variations.</li>
            <li><strong>Add LSI (Latent Semantic Indexing) keywords:</strong> related terms Google expects. For &quot;email marketing,&quot; add deliverability, segmentation, automation, conversion rates, etc.</li>
            <li><strong>Compare to ranking competitors:</strong> if competitors cover topics you missed, add those sections.</li>
          </ol>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Stop Words and Why They&apos;re Filtered</h3>
          <p>
            Words like &quot;the,&quot; &quot;a,&quot; &quot;an,&quot; &quot;of,&quot; &quot;in,&quot; &quot;to,&quot; &quot;and,&quot; &quot;is&quot; appear in every text — they have no topical meaning. Search engines and SEO tools filter these as <strong>stop words</strong> before counting density. If your tool says &quot;the&quot; is your top word, it&apos;s not configured to filter stops. This tool uses the standard English stop word list (~150 words) by default; you can paste any text knowing meaningful terms will surface to the top.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Use density output to spot repetitive phrases, then replace duplicates with clearer variants and supporting subtopics.",

    faqs: [
      {
        question: "What is keyword density?",
        answer:
          "Keyword density is the ratio of term frequency to total words in a document. It helps identify whether a term is underused or repeated too heavily.",
      },
      {
        question: "Is there a perfect keyword density percentage?",
        answer:
          "No universal number exists. Treat density as a diagnostic indicator and prioritize readability, intent match, and topic coverage.",
      },
      {
        question: "Why check 2-word and 3-word phrases?",
        answer:
          "Because repetitive phrase patterns are a common source of keyword stuffing and low-quality signals in modern content audits.",
      },
      {
        question: "Can I use this for competitor analysis?",
        answer:
          "Yes. Compare phrase emphasis and topic language in top-ranking pages to identify missed subtopics or overuse in your own drafts.",
      },
      {
        question: "Is this tool free?",
        answer: "Yes. It is free and available without signup.",
      },
    ],

    additionalContent: [
      {
        heading: "How to Use Density Data Correctly",
        content:
          "Combine density checks with intent coverage and structure quality. A balanced article usually includes variations, examples, and related entities rather than repeating one phrase.",
      },
      {
        heading: "When to Re-check Content",
        content:
          "Run another scan after major edits, title changes, or section rewrites to ensure the final draft still has strong topical balance.",
      },
    ],

    relatedTools: [
      { name: "Text Similarity Checker", href: "/seo-tools/text-similarity-checker" },
      { name: "Blog Title Generator", href: "/seo-tools/blog-titles" },
      { name: "Open Graph Meta Tag Generator", href: "/seo-tools/meta-tags" },
      { name: "All SEO Tools", href: "/seo-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function KeywordDensityCheckerPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<KeywordDensityChecker />)} />
}
