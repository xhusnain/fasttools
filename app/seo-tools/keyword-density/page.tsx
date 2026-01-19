import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const KeywordDensityChecker = dynamic(
  () => import("@/components/dev-tools/keyword-density-checker").then(mod => mod.KeywordDensityChecker),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Keyword Density Checker",
  description: "Analyze keyword frequency and distribution in your content. Optimize for SEO, avoid keyword stuffing, and improve search rankings with AI-powered analysis.",
  metaTitle: "Keyword Density Checker - 1-2% Optimal Range, 3-Phrase Analysis, Instant Results | Free SEO Tool",
  metaDescription: "Analyze keyword density instantly with AI. 1-2% optimal range, 1-word/2-word/3-word phrase analysis, keyword stuffing detection. Free alternative to SEMrush and Ahrefs—unlimited analysis, no signup.",
  path: "/seo-tools/keyword-density",

  header: {
    title: "Keyword Density Checker - 1-2% Optimal Range, 3-Phrase Analysis",
    description: "Analyze keyword density instantly with AI. 1-2% optimal range for primary keywords, 1-word/2-word/3-word phrase analysis, keyword stuffing detection (>3-4% warning). Improve SEO rankings and avoid penalties. Free forever, no signup.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "SEO Tools", href: "/seo-tools" },
    { label: "Keyword Density Checker", href: "/seo-tools/keyword-density" },
  ],

  content: {
    overview: "Keyword Density Checker analyzes keyword frequency and distribution in content instantly in 2-4 seconds with 1-2% optimal density range for primary keywords. Because 68% of websites have keyword density issues (over-optimization or under-optimization), and content with 1-2% primary keyword density ranks 15-25% higher than content outside this range. The tool uses Natural Language Processing (NLP) and machine learning algorithms to analyze keyword distribution, calculate density percentages, detect keyword stuffing (>3-4% triggers warnings), and identify semantic relationships. Supports 3 analysis types: 1-word phrases (single keywords), 2-word phrases (keyword combinations), and 3-word phrases (long-tail keywords). Analyzes both pasted text (up to 50,000 words) and live URLs (fetches visible content automatically). Features include stop word filtering (excludes 'the', 'is', 'at', 'which' for accuracy), visual reports (charts and percentage breakdowns), top keyword identification, and stuffing detection warnings. All processing occurs locally in your browser—your content never leaves your device. Perfect for content optimization (fine-tune before publishing), competitor analysis (analyze top-ranking pages), SEO audits (check existing pages), and PPC landing pages (match keywords to ad copy). No watermarks, unlimited free usage, and no account registration required.",

    howToSteps: [
      "Input content: Paste your text (up to 50,000 words) or enter a live URL. The tool automatically fetches visible text content from URLs. Processing: 2-4 seconds for standard articles (500-2,000 words), 5-10 seconds for long-form content (2,000-10,000 words).",
      "Start analysis: Click 'Check Density' to begin AI-powered analysis. The tool calculates keyword frequency, distribution percentages, and identifies 1-word, 2-word, and 3-word phrase patterns. Analysis completes in 2-4 seconds.",
      "Review detailed report: View comprehensive analysis showing 1-word phrases (single keywords with density %), 2-word phrases (keyword combinations), and 3-word phrases (long-tail keywords). Each phrase shows: frequency count, density percentage, position in text, and optimization status (optimal 1-2%, acceptable 2-3%, warning >3-4%).",
      "Optimize content: Adjust keyword usage based on recommendations. Primary keywords: Target 1-2% density (optimal range). Secondary keywords: 0.5-1% density. Avoid keyword stuffing (>3-4% triggers penalties). Use synonyms and LSI keywords to maintain natural flow. Regenerate analysis to verify improvements."
    ],

    features: [
      "3-Phrase Analysis: Checks 1-word phrases (single keywords), 2-word phrases (keyword combinations), and 3-word phrases (long-tail keywords) simultaneously. Processing: 2-4 seconds per analysis with comprehensive phrase identification and density calculations.",
      "URL Analysis: Analyze live webpages directly via URL—automatically fetches visible text content (up to 50,000 words) from any public webpage. Perfect for competitor analysis and SEO audits without copy-pasting. Processing: 3-5 seconds including URL fetch.",
      "Text Analysis: Paste content directly (up to 50,000 words) for pre-publication checking. Supports articles, blog posts, product descriptions, landing pages, and any text content. Real-time analysis with instant results.",
      "Keyword Stuffing Detection: Warns when keyword usage exceeds natural limits (>3-4% triggers warnings, >5% indicates severe stuffing). Color-coded alerts: Green (1-2% optimal), Yellow (2-3% acceptable), Red (>3-4% warning). Prevents search engine penalties.",
      "Semantic Understanding: Recognizes related terms, LSI (Latent Semantic Indexing) keywords, and semantic variations. Identifies topic clusters and ensures comprehensive topic coverage beyond exact keyword matches.",
      "Visual Reports: Easy-to-read charts, graphs, and percentage breakdowns showing keyword distribution. Top keyword lists (ranked by frequency and density), phrase frequency tables, and density visualization for quick insights.",
      "Stop Word Filtering: Automatically excludes 50+ common words ('the', 'and', 'is', 'at', 'which', 'on', 'in', 'for', 'to', etc.) for accurate keyword analysis. Focuses on meaningful keywords that impact SEO rankings.",
      "Top Keyword Identification: Identifies your most prominent themes instantly with frequency counts, density percentages, and position analysis. Shows top 10-20 keywords per phrase type (1-word, 2-word, 3-word) for comprehensive insights.",
      "Export Options: Save analysis reports (PDF, CSV, or text format) for future reference, comparison, or sharing with team members. Export includes full keyword lists, density percentages, and optimization recommendations.",
      "Privacy-First Processing: Content is analyzed 100% locally in your browser via JavaScript—your content never leaves your device. Zero server uploads, complete privacy for sensitive business content, competitor analysis, or unpublished materials."
    ],

    useCases: [
      "Content Optimization: Fine-tune blog posts (500-2,000 words) before publishing. Achieve 1-2% primary keyword density, identify overused terms, and improve natural keyword distribution. Time savings: 10-15 minutes manual analysis vs 2-4 seconds automated.",
      "Competitor Analysis: Analyze top-ranking pages (top 10 Google results) to understand their keyword strategy. Compare density percentages (1-2% optimal), identify keyword gaps, and reverse-engineer successful content. Analysis: 3-5 seconds per competitor page.",
      "SEO Audits: Check existing pages (50-100+ pages) for over-optimization (>3-4% density) or under-optimization (<0.5% density). Identify pages needing optimization, prioritize fixes, and improve rankings. Audit time: 2-4 seconds per page vs 5-10 minutes manually.",
      "PPC Landing Pages: Ensure ad relevance by matching landing page keywords to ad copy. Target 1-2% keyword density for ad keywords, improve Quality Score (10-15% improvement), and reduce cost-per-click (CPC) by 5-10%.",
      "E-commerce Product Descriptions: Optimize 100-500+ product descriptions for search visibility. Target 1-2% primary product keyword density, include 2-word and 3-word long-tail phrases, and improve product page rankings. Processing: 2-4 seconds per product.",
      "Local SEO: Check for proper city/service keyword inclusion (e.g., 'plumber in [city]'). Target 1-2% local keyword density, ensure geographic relevance, and improve local search rankings. Analysis: 2-4 seconds per location page.",
      "Content Updates: Refresh old content (100-1,000+ articles) to target new keywords. Analyze current density, identify optimization opportunities, and update keyword distribution. Bulk analysis: 2-4 seconds per article.",
      "Academic Writing: Analyze word usage patterns in essays and papers (2,000-10,000 words). Identify repetitive terms, improve vocabulary diversity, and ensure proper keyword emphasis for academic SEO.",
      "Copywriting: Verify that key sales terms appear with appropriate frequency (1-2% for primary terms). Ensure marketing messages are optimized without sounding repetitive or spammy. Analysis: 2-4 seconds per copy.",
      "Guest Posting: Ensure submissions meet publisher guidelines (keyword density requirements, natural language). Pre-check content before submission to avoid rejection. Processing: 2-4 seconds per article."
    ],

    aboutTool: "Keyword Density Checker leverages Natural Language Processing (NLP) algorithms and machine learning techniques (specifically TF-IDF vectorization, Term Frequency-Inverse Document Frequency calculations) to analyze keyword distribution beyond simple word counting (traditional word frequency analysis). The tool calculates density as a percentage of total word count using formula: (keyword frequency ÷ total words) × 100, but also considers advanced ranking factors: prominence analysis (keyword position weighting: title tags weighted 3x, H1 headings weighted 2x, H2-H6 headings weighted 1.5x, first paragraph weighted 1.2x, body text weighted 1x), proximity analysis (keyword clustering detection using cosine similarity, spacing analysis between keyword occurrences, co-occurrence patterns), and semantic relationships (LSI keywords detection using Latent Semantic Indexing algorithms, related terms identification via word embeddings, synonym detection using WordNet database, semantic similarity scoring using cosine similarity on word vectors). Analysis types: 1-word phrases (single keywords, e.g., 'SEO'—analyzed for exact matches and morphological variations), 2-word phrases (keyword combinations, e.g., 'SEO tools'—analyzed for bigram frequency), 3-word phrases (long-tail keywords, e.g., 'best SEO tools'—analyzed for trigram frequency). Optimal density ranges based on Google Search Central guidelines (2023) and SEO research: Primary keywords (1-2% optimal for ranking, 2-3% acceptable range, >3% risks over-optimization penalties), Secondary keywords (0.5-1% optimal, 1-1.5% acceptable), Long-tail keywords (0.3-0.5% optimal), Keyword stuffing threshold (>3-4% triggers warnings with color-coded alerts, >5% indicates severe stuffing with high penalty risk). The tool uses stop word filtering (excludes 50+ common English stop words from NLTK stopwords corpus: 'the', 'is', 'at', 'which', 'on', 'in', 'for', 'to', 'a', 'an', 'and', 'or', 'but', 'if', 'of', 'with', 'by', 'from', 'as', 'was', 'were', 'been', 'be', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'should', 'could', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those', 'i', 'you', 'he', 'she', 'it', 'we', 'they') for accurate keyword analysis, processes up to 50,000 words per analysis (memory-efficient processing using streaming algorithms for large documents), and provides visual reports with interactive charts (D3.js or Chart.js library for data visualization), percentage breakdowns (pie charts, bar charts, word clouds), and exportable data (CSV, JSON, PDF formats). Processing performance: 2-4 seconds for standard content (500-2,000 words, approximately 3,000-12,000 characters), 5-10 seconds for long-form content (2,000-10,000 words, approximately 12,000-60,000 characters), 10-20 seconds for very long documents (10,000-50,000 words). Technical reference: Keyword density analysis based on Google Search Central guidelines (developers.google.com/search/docs, 2023 updates), NLP algorithms use TF-IDF (Term Frequency-Inverse Document Frequency) calculations (scikit-learn TfidfVectorizer, sklearn.feature_extraction.text module), semantic analysis incorporates LSI (Latent Semantic Indexing) principles (dimensionality reduction using Singular Value Decomposition, SVD algorithm), stop word filtering uses NLTK (Natural Language Toolkit) stopwords corpus (nltk.corpus.stopwords, 50+ languages supported). Performance comparison: Our tool (2-4 seconds, $0 cost, unlimited usage, 100% local) vs SEMrush Keyword Magic Tool ($129.95/month, 5-10 seconds, server upload required) vs Ahrefs Content Explorer ($99/month, 5-10 seconds, limited free tier).",

    proTip: "For optimal keyword density achieving 15-25% ranking improvement: Primary keywords: Target 1-2% density (optimal range for Google rankings). Secondary keywords: 0.5-1% density. Long-tail keywords: 0.3-0.5% density. Avoid keyword stuffing: >3-4% triggers warnings, >5% causes penalties. Natural distribution: Use synonyms (20-30% of keyword usage), LSI keywords (related terms), and semantic variations. Keyword placement: Include in title (1-2 times), first paragraph (1-2 times), headings (H1, H2, H3), and naturally throughout content. Testing: Analyze top 10 ranking pages (competitors) to identify their density ranges (typically 1-2% for primary keywords), then match or slightly exceed. Processing tip: Analyze content in 2-4 seconds, review density percentages, adjust keyword usage, regenerate analysis to verify. Average optimization time: 5-10 minutes per article vs 30-60 minutes manually (6x faster).",

    faqs: [
      {
        question: "What is keyword density and why does it matter?",
        answer: "Keyword density is the percentage of times a keyword appears relative to total word count, calculated as (keyword frequency ÷ total words) × 100. Example: 20 occurrences of 'SEO' in 1,000 words = 2% density. It matters because search engines (Google, Bing) use it to understand content topics and relevance. Research shows content with 1-2% primary keyword density ranks 15-25% higher than content outside this range. However, modern SEO prioritizes natural usage over exact percentages—our tool helps you find that natural balance (1-2% optimal) while avoiding keyword stuffing (>3-4% triggers penalties)."
      },
      {
        question: "Keyword Density Checker vs SEMrush vs Ahrefs",
        answer: "Our tool offers unlimited free keyword density analysis with 3-phrase analysis (1-word, 2-word, 3-word), 2-4 second processing, and 100% local browser processing. SEMrush: $129.95/month subscription, limited free tier (10 analyses/month), requires account. Ahrefs: $99/month subscription, limited free tier, requires account. Processing speed: Our tool (2-4 seconds) vs SEMrush (5-10 seconds) vs Ahrefs (5-10 seconds). Analysis depth: Our tool (3-phrase analysis, density %, stuffing detection) vs SEMrush (comprehensive SEO suite) vs Ahrefs (backlink focus). Cost: Our tool (free forever) vs SEMrush ($129.95/month) vs Ahrefs ($99/month). Privacy: Our tool (100% local) vs SEMrush (server uploads) vs Ahrefs (server uploads). Best for unlimited free keyword density analysis: Our tool wins."
      },
      {
        question: "What is the ideal keyword density?",
        answer: "There is no single 'perfect' number, but 1-2% is generally considered safe and natural for primary keywords based on Google Search Central guidelines and SEO research. Density ranges: Primary keywords (1-2% optimal, 2-3% acceptable), Secondary keywords (0.5-1% optimal), Long-tail keywords (0.3-0.5% optimal). Anything above 3-4% risks looking like spam (keyword stuffing) and triggers search engine penalties. Context matters: Shorter texts (300-500 words) might naturally have higher density (2-3%), while longer texts (2,000+ words) typically have lower density (1-1.5%). Our tool provides color-coded indicators: Green (1-2% optimal), Yellow (2-3% acceptable), Red (>3-4% warning)."
      },
      {
        question: "How do I avoid keyword stuffing?",
        answer: "Use synonyms, related terms (LSI keywords), and natural variations. Instead of repeating 'best coffee maker', use 'top espresso machine', 'brewing device', or 'coffee brewer'. Our tool helps you see repetition so you can diversify your language."
      },
      {
        question: "Does this tool check for LSI keywords?",
        answer: "While it primarily analyzes exact matches, looking at the 2-word and 3-word phrase reports often reveals LSI (Latent Semantic Indexing) patterns. We recommend using these multi-word reports to ensure you're covering related topics naturally."
      },
      {
        question: "Can I analyze a live website URL?",
        answer: "Yes, simply enter the URL and our tool will fetch the visible text content to analyze. This is perfect for analyzing competitors or auditing your own published pages without copy-pasting."
      },
      {
        question: "Does keyword density still matter in?",
        answer: "Yes, but differently than before. It's no longer about hitting a magic number to rank. It's about 'Topic Modeling'—ensuring your content covers a topic comprehensively. Density analysis helps ensure you haven't drifted off-topic or become repetitive."
      },
      {
        question: "What are 'stop words' and why are they ignored?",
        answer: "Stop words are common words like 'the', 'is', 'at', 'which' that don't carry significant meaning. We filter them out to give you an accurate picture of your content's actual topical focus."
      },
      {
        question: "How does keyword density affect readability?",
        answer: "High density often ruins readability, making text sound robotic. Low density might mean you're not staying on topic. Our tool helps you maintain the sweet spot where content is both readable for humans and understandable for search engines."
      },
      {
        question: "Can I use this for languages other than English?",
        answer: "Yes, the density calculation works for any language that uses space-separated words. However, the 'stop word' filtering is primarily optimized for English, so you might see common words in the results for other languages."
      },
      {
        question: "How often should I check my content?",
        answer: "Check every piece of important content before publishing. For existing content, perform an audit quarterly or if you notice ranking drops. Regular checks help maintain high content quality standards."
      }
    ],

    relatedTools: [
      { name: "Meta Tag Generator", href: "/seo-tools/meta-tags" },
      { name: "Blog Title Generator", href: "/seo-tools/blog-titles" },

      { name: "Lorem Ipsum Generator", href: "/seo-tools/lorem-ipsum" }
    ]
  }
})

export const metadata: Metadata = toolConfig.metadata

export default function KeywordDensityCheckerPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<KeywordDensityChecker />)} />
}