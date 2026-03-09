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
  metaTitle: "Keyword Density Checker — Analyze Word Frequency & Phrase Density Free (2026)",
  metaDescription:
    "Check keyword density percentage for 1-word, 2-word, and 3-word phrases. Detect keyword stuffing, optimize on-page SEO, and analyze content keyword frequency with n-gram analysis — free online tool.",
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
    alternateName: ["Keyword Frequency Checker", "Keyword Stuffing Checker"],
    featureList: [
      "Unigram, bigram, trigram analysis",
      "Density percentage calculations",
      "Overuse pattern visibility",
      "Text and URL analysis",
      "No signup",
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
        <p>
          Keyword density is calculated as (number of times a keyword appears / total word count) x 100, expressed as a percentage. For example, if &quot;email marketing&quot; appears 15 times in a 1,000-word article, its density is 1.5%. In modern SEO, keyword density serves as a diagnostic indicator rather than a precise ranking factor — Google&apos;s algorithms use sophisticated natural language processing (NLP) and semantic understanding that goes far beyond simple term frequency. However, keyword density analysis remains valuable because excessively high density (above 3%) can trigger Google&apos;s keyword stuffing penalties, very low density (below 0.5%) may signal weak topical relevance, and density patterns reveal whether content naturally covers a topic or artificially repeats phrases.
        </p>
        <p>
          N-gram analysis (examining 2-word and 3-word phrase frequencies) is particularly powerful for detecting over-optimization patterns that single-word analysis misses. Repeated bigrams like &quot;best software&quot; appearing 20 times or trigrams like &quot;best project management&quot; appearing 15 times are strong signals of unnatural writing that search engines can detect. The most effective content strategy uses your primary keyword at 1-2% density, includes semantic variations and synonyms naturally, covers related subtopics and entities that Google expects to see on the page (topical authority), and reads naturally to human audiences. Use this checker alongside your content writing workflow to balance SEO optimization with reader experience quality.
        </p>
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
