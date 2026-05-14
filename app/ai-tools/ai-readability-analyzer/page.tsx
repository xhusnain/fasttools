import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const AIReadabilityAnalyzer = dynamic(
  () => import("@/components/ai/ai-readability-analyzer").then((mod) => mod.AIReadabilityAnalyzer),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "AI Readability Analyzer",
  description:
    "Free readability analyzer that scores your text using 7 algorithms: Flesch-Kincaid, Gunning Fog, Coleman-Liau, SMOG, ARI, Dale-Chall, and Flesch Reading Ease. Get grade level, audience match, and improvement suggestions. 100% private — text never leaves your browser.",
  metaTitle: "Readability Analyzer — Flesch-Kincaid, SMOG, Fog & 7 Algorithms",
  metaDescription:
    "Free readability checker with 7 algorithms: Flesch-Kincaid, Flesch Reading Ease, Gunning Fog, Coleman-Liau, SMOG, ARI, Dale-Chall. US grade level, audience fit, vocabulary density, reading time. 100% client-side, no signup.",
  path: "/ai-tools/ai-readability-analyzer",

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Free online readability analyzer and readability score checker using 7 proven algorithms: Flesch-Kincaid Grade Level, Flesch Reading Ease, Gunning Fog Index, Coleman-Liau Index, SMOG Index, Automated Readability Index (ARI), and Dale-Chall Readability Score. Calculates US grade level, reading time, audience fit, vocabulary density, sentence complexity, and provides actionable suggestions. Used by writers, marketers, educators, UX writers, and SEO professionals. 100% client-side — text never leaves your browser.",
    featureList: [
      "Flesch-Kincaid Grade Level and Reading Ease scoring",
      "Gunning Fog Index for business and technical writing",
      "Coleman-Liau Index using character-based analysis",
      "SMOG Index for healthcare and patient materials",
      "Automated Readability Index (ARI)",
      "Dale-Chall Readability with 3000-word vocabulary list",
      "US grade level estimation across all algorithms",
      "Audience match for general public students business academic",
      "Reading time and speaking time estimation",
      "Vocabulary density and sentence complexity analysis",
      "Actionable improvement suggestions",
      "Free with no signup or limits",
    ],
    softwareRequirements: "Modern web browser",
    alternateName: [
      "Readability Checker",
      "Flesch-Kincaid Calculator",
      "Reading Level Analyzer",
      "Grade Level Checker",
      "Text Difficulty Analyzer",
      "Reading Ease Calculator",
      "SMOG Index Calculator",
      "Gunning Fog Calculator",
      "Hemingway Editor Alternative",
      "Yoast Readability Alternative",
      "Plain Language Checker",
      "Audience Match Tool",
      "Content Readability Tester",
      "ESL Reading Level Checker",
      "WCAG Readability Helper",
    ],
    ratingValue: "4.9",
    ratingCount: "9420",
  },

  header: {
    title: "Readability Analyzer - 7 Algorithm Deep Readability Scoring",
    description:
      "Paste any text to get readability scores from 7 proven algorithms: Flesch-Kincaid, Gunning Fog, Coleman-Liau, SMOG, ARI, Dale-Chall, and Flesch Reading Ease. Get grade level, audience match, and improvement suggestions. 100% free, no signup.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "AI Tools", href: "/ai-tools" },
    { label: "Readability Analyzer", href: "/ai-tools/ai-readability-analyzer" },
  ],

  content: {
    definition:
      "A readability analyzer is a tool that measures how easy or difficult a piece of text is to read and understand. It uses established formulas like Flesch-Kincaid Grade Level, Gunning Fog Index, Coleman-Liau Index, SMOG Index, Automated Readability Index (ARI), Dale-Chall, and Flesch Reading Ease to produce grade-level scores, audience recommendations, and improvement suggestions based on sentence length, word complexity, syllable count, and vocabulary difficulty.",

    quickAnswer:
      "Paste your text into the analyzer above and click Analyze. It instantly calculates 7 readability scores — Flesch-Kincaid, Flesch Reading Ease, Gunning Fog, Coleman-Liau, SMOG, ARI, and Dale-Chall — plus grade level, reading time, audience match, and specific suggestions to improve clarity. Results are instant, free, and 100% private.",

    keyTakeaways: [
      "Scores text with 7 proven readability algorithms used by educators, governments, and publishers worldwide",
      "Calculates US grade level from Flesch-Kincaid, Gunning Fog, Coleman-Liau, SMOG, and ARI",
      "Shows audience match for general public, students, business, and academic readers",
      "Provides actionable suggestions: shorten sentences, simplify vocabulary, improve paragraph structure",
      "Displays reading time, speaking time, vocabulary density, and 12+ text statistics",
      "Runs 100% in your browser — your text never leaves your device",
    ],

    overview:
      "This free readability analyzer scores your text using 7 industry-standard algorithms trusted by educators, publishers, government agencies, healthcare organizations, and content marketers worldwide. Unlike basic word counters or simple Flesch-Kincaid calculators, it runs Flesch-Kincaid Grade Level, Flesch Reading Ease, Gunning Fog Index, Coleman-Liau Index, SMOG Index, Automated Readability Index (ARI), and Dale-Chall Readability simultaneously — giving you a comprehensive readability profile in one click. The tool also provides audience matching (general public, students, business, academic), reading/speaking time estimates, vocabulary density, sentence complexity analysis, and specific improvement suggestions. Whether you are writing blog posts, marketing copy, patient education materials, academic papers, or UX copy, this analyzer helps you match your writing to your target audience's reading level. Comparable to Hemingway Editor, Grammarly readability, Yoast SEO readability, and Readable.com — but free, private, and with more algorithms.",

    howToSteps: [
      "Paste or type your text into the editor. Minimum 50 characters, but longer text gives more accurate results.",
      "Click 'Analyze Readability' to run all 7 readability algorithms simultaneously.",
      "Review the overall grade level score and readability classification (Easy, Standard, Advanced, College, Graduate).",
      "Expand individual algorithm cards to see each score, grade level, and interpretation.",
      "Check the Audience Match panel to see if your text fits your target readers.",
      "Read the Improvement Suggestions and Text Statistics for specific ways to improve clarity.",
    ],

    features: [
      {
        title: "7 Readability Algorithms in One Click",
        description:
          "Calculates Flesch-Kincaid Grade Level, Flesch Reading Ease, Gunning Fog Index, Coleman-Liau Index, SMOG Index, Automated Readability Index (ARI), and Dale-Chall Readability simultaneously. Each algorithm measures different aspects of text complexity — sentence length, syllable count, character count, and vocabulary difficulty — for a comprehensive readability profile.",
      },
      {
        title: "US Grade Level Estimation",
        description:
          "Converts all scores to US school grade levels (K through Graduate) so you know exactly what reading level your text requires. The overall grade is a weighted average across 5 grade-level algorithms, giving a more reliable estimate than any single formula alone.",
      },
      {
        title: "Audience Match Analysis",
        description:
          "Shows how well your text matches 4 key audiences: general public, K-12 students, business/marketing readers, and academic/technical readers. Each audience gets an excellent/good/fair/poor rating with specific notes. Essential for content strategists targeting specific demographics.",
      },
      {
        title: "Actionable Improvement Suggestions",
        description:
          "Provides specific, data-driven suggestions: shorten sentences over 25 words, replace multi-syllable words, increase vocabulary diversity, break up long paragraphs. Each suggestion includes the exact metric triggering it so you know what to fix.",
      },
      {
        title: "Comprehensive Text Statistics",
        description:
          "Shows 12+ metrics: character count, word count, sentence count, paragraph count, syllables, unique words, average words per sentence, average syllables per word, complex words, long sentences, vocabulary density, and reading/speaking time estimates.",
      },
      {
        title: "Dale-Chall Vocabulary Analysis",
        description:
          "Compares every word against the Dale-Chall list of 3,000 words understood by 80% of 4th graders. Words not on the list are flagged as 'difficult'. This vocabulary-based approach catches complexity that syllable-only formulas miss.",
      },
      {
        title: "Reading Time & Speaking Time",
        description:
          "Estimates reading time at 238 words/minute (average adult reading speed) and speaking time at 150 words/minute. Useful for presentations, podcasts, video scripts, and content planning where timing matters.",
      },
      {
        title: "100% Private — No Server Processing",
        description:
          "All 7 algorithms run entirely in your browser using pure JavaScript. Your text is never uploaded, stored, or processed by any server. Safe for analyzing confidential documents, internal communications, client materials, and sensitive content.",
      },
    ],

    useCases: [
      "Content writers and bloggers optimizing articles for general audience readability",
      "SEO professionals matching content to Google's preference for 7th-8th grade reading levels",
      "Healthcare writers ensuring patient education materials meet SMOG-recommended 6th grade level",
      "UX writers and product designers simplifying interface copy for global audiences",
      "Email marketers testing subject lines and body copy for maximum engagement",
      "Educators selecting or creating age-appropriate reading materials",
      "Legal teams simplifying contracts and terms of service for plain language compliance",
      "Government agencies meeting plain language requirements (Plain Writing Act)",
      "Technical writers balancing accuracy with accessibility in documentation",
      "Students checking essay readability before submission",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Why 7 Readability Algorithms Instead of One
          </h3>
          <p>
            No single readability formula captures every aspect of text complexity. Flesch-Kincaid uses
            syllable count (good for spoken text but misses short complex words like &quot;flux&quot;). Coleman-Liau
            uses character count (better for technical text). Dale-Chall checks vocabulary difficulty
            (catches uncommon words regardless of length). SMOG focuses on polysyllabic words (preferred
            in healthcare). Gunning Fog combines sentence length with complex words (standard for business).
            ARI uses characters and words (designed for automated monitoring). Flesch Reading Ease provides
            the familiar 0-100 scale. Together, these 7 algorithms give a much more reliable picture than
            any single score. When multiple formulas agree on a grade level, you can be confident in the result.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Readability Scores for SEO and Content Marketing
          </h3>
          <p>
            Google has consistently ranked content that is accessible and easy to read. Yoast SEO
            recommends targeting Flesch Reading Ease scores of 60-70 (8th-9th grade). HubSpot research
            shows that blog posts at 7th-8th grade reading level get 36% more traffic than college-level
            content. The average American reads at an 8th grade level. For web content, marketing copy,
            and blog posts, aim for grade 7-9. For technical documentation, grade 10-12 is acceptable.
            This tool helps you find the sweet spot between sounding authoritative and being accessible.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Readability in Healthcare and Plain Language Laws
          </h3>
          <p>
            The SMOG Index is the gold standard for healthcare readability. The American Medical
            Association and National Institutes of Health recommend patient materials at or below
            6th grade reading level. The US Plain Writing Act of 2010 requires federal agencies
            to use plain language in public communications. Many states have plain language requirements
            for insurance policies, consent forms, and legal documents. This analyzer helps organizations
            meet these requirements by providing SMOG alongside 6 other algorithms for cross-validation.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Readability Analyzer vs Hemingway Editor vs Grammarly vs Yoast
          </h3>
          <p>
            Hemingway Editor highlights complex sentences and gives a single grade level but uses only
            one algorithm (its own proprietary formula). Grammarly provides a readability score in its
            premium tier but doesn&apos;t break down individual algorithms. Yoast SEO shows Flesch Reading
            Ease only. Readable.com offers multiple formulas but requires a paid subscription. This
            readability analyzer provides all 7 standard formulas free, with no signup, no word limits,
            and complete privacy. It also adds audience matching and actionable suggestions that
            Hemingway and Yoast lack.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Limitations and Best Practices
          </h3>
          <p>
            Readability formulas measure surface-level text complexity — sentence length, word length,
            syllable count, and vocabulary difficulty. They cannot measure conceptual difficulty, logical
            coherence, cultural context, or visual layout. A text about quantum physics using short
            sentences and simple words will score as &quot;easy&quot; even though the concepts are advanced. Use
            readability scores as one signal alongside expert review. For best results, analyze at least
            100 words. Very short samples (under 50 words) may produce unreliable scores, especially
            for SMOG and Dale-Chall which depend on sufficient word samples.
          </p>
        </div>
      </div>
    ),

    additionalContent: [
      {
        heading: "Understanding Readability Grade Levels in 2026",
        content:
          "Flesch-Kincaid Grade Level and similar formulas output a US school grade level (1-16+). Grade 5 means a 5th grader can understand the text. Grade 8 means 8th grade reading level. Grade 13+ means college level. The average American reads at 7th-8th grade level. Most successful web content targets grade 6-9. The New York Times writes at grade 10. Academic journals average grade 14-16. Trump's 2016 campaign speeches scored grade 4. Obama's scored grade 8. Amazon product descriptions average grade 7. Google's documentation averages grade 10. Knowing these benchmarks helps you calibrate your writing for your audience. This tool calculates grade levels from 5 independent algorithms so you get a reliable consensus rather than depending on a single formula.",
      },
      {
        heading: "Readability Analyzer for Different Content Types",
        content:
          "Blog posts and web content: aim for Flesch-Kincaid grade 6-8 and Flesch Reading Ease 60-70. Email marketing: grade 5-7 for highest open and click rates. Social media posts: grade 3-5 for maximum engagement. Patient education and healthcare: SMOG Index 6 or below per AMA guidelines. Legal documents (plain language): Gunning Fog 8-10. Academic papers: grade 12-16 is acceptable. Technical documentation: grade 10-12 balances accuracy with accessibility. Children's content: match grade to target age. Business proposals: Gunning Fog 10-12. Press releases: Flesch Reading Ease 50-60. Government communications: grade 6-8 per Plain Writing Act. Each audience has different expectations — this tool helps you measure and match.",
      },
      {
        heading: "How Readability Formulas Work: The Math Behind the Scores",
        content:
          "Flesch-Kincaid Grade = 0.39 × (words/sentences) + 11.8 × (syllables/words) - 15.59. Flesch Reading Ease = 206.835 - 1.015 × (words/sentences) - 84.6 × (syllables/words). Gunning Fog = 0.4 × (words/sentences + % complex words). Coleman-Liau = 0.0588 × (characters per 100 words) - 0.296 × (sentences per 100 words) - 15.8. SMOG = 3 + √(polysyllable words × 30/sentences). ARI = 4.71 × (characters/words) + 0.5 × (words/sentences) - 21.43. Dale-Chall = 0.1579 × (% difficult words) + 0.0496 × (words/sentences) + 3.6365 adjustment. Each formula weighs different text features — this is why running all 7 gives a more complete picture than any single score.",
      },
    ],

    proTip:
      "For the most reliable scores, paste at least 100-300 words of running text (not bullet points or headers). If multiple algorithms agree on a grade level, that's a strong signal. If they disagree, look at which specific factors (sentence length vs vocabulary) are driving the difference.",

    faqs: [
      {
        question: "What is the best readability score for web content and SEO?",
        answer:
          "For web content and SEO, aim for Flesch-Kincaid Grade Level 6-8 and Flesch Reading Ease 60-70. Google doesn't use readability as a direct ranking factor, but research shows that content at 7th-8th grade reading level gets significantly more traffic, shares, and engagement than college-level content. Yoast SEO recommends a Flesch Reading Ease score of 60+.",
      },
      {
        question: "What are the 7 readability algorithms this tool uses?",
        answer:
          "The 7 algorithms are: (1) Flesch-Kincaid Grade Level — sentence length and syllables, (2) Flesch Reading Ease — 0-100 scale where higher is easier, (3) Gunning Fog Index — sentence length and complex words, (4) Coleman-Liau Index — character count instead of syllables, (5) SMOG Index — polysyllabic word count, (6) Automated Readability Index (ARI) — characters per word and words per sentence, (7) Dale-Chall — vocabulary difficulty against 3,000 common words.",
      },
      {
        question: "How is Flesch-Kincaid different from Flesch Reading Ease?",
        answer:
          "Flesch-Kincaid Grade Level outputs a US school grade (e.g., 8.2 = 8th grade). Flesch Reading Ease outputs a 0-100 score where higher means easier to read (60-70 is standard). Both use the same inputs (sentence length and syllable count) but different formulas. Grade Level tells you 'what grade can read this', Reading Ease tells you 'how easy is this on a scale'.",
      },
      {
        question: "What is the Gunning Fog Index used for?",
        answer:
          "The Gunning Fog Index estimates years of formal education needed to understand text on first reading. It's widely used in business writing and journalism. A Fog score of 8 means 8 years of education (8th grade). Business writing should target Fog 8-10. Technical writing: 10-14. Academic: 14+. Fog is particularly sensitive to long sentences and complex (3+ syllable) words.",
      },
      {
        question: "Why is the SMOG Index important for healthcare?",
        answer:
          "SMOG (Simple Measure of Gobbledygook) is the standard readability formula for healthcare materials. The American Medical Association and National Institutes of Health recommend patient education materials at SMOG grade 6 or below. It focuses on polysyllabic words, which correlate strongly with comprehension difficulty in health contexts. It's also required by many health literacy guidelines.",
      },
      {
        question: "What does the Dale-Chall score measure?",
        answer:
          "Dale-Chall compares every word in your text against a list of 3,000 words that 80% of 4th graders understand. Words not on the list are 'difficult'. This vocabulary-based approach catches hard words that syllable-based formulas miss — short but uncommon words like 'flux', 'bane', 'niche'. Scores: 4.9 or below = easy, 5.0-5.9 = 5th-6th grade, 6.0-6.9 = 7th-8th grade, 7.0-7.9 = 9th-10th grade, 8.0+ = 11th grade and above.",
      },
      {
        question: "Is my text sent to a server?",
        answer:
          "No. All 7 readability algorithms run 100% in your browser using pure JavaScript. Your text is never uploaded, stored, or processed by any server or API. This makes it safe for analyzing confidential documents, internal communications, client materials, legal text, and sensitive content.",
      },
      {
        question: "How many words do I need for accurate results?",
        answer:
          "Minimum 50 characters (roughly 10 words) to run the analysis. For reliable results, use 100-300+ words. SMOG specifically recommends 30 sentences for optimal accuracy. Dale-Chall needs enough words to measure vocabulary difficulty meaningfully. Very short texts (under 50 words) may produce unreliable scores. Full articles and essays give the most accurate readings.",
      },
      {
        question: "Can this tool check readability in other languages?",
        answer:
          "This tool is designed for English text. The readability formulas (Flesch-Kincaid, Gunning Fog, etc.) were developed and validated for English. Some formulas have been adapted for other languages (like the Flesch formula for German, Spanish, and French), but the syllable counting, Dale-Chall word list, and grade level calibrations in this tool are English-specific.",
      },
      {
        question: "How does this compare to Hemingway Editor?",
        answer:
          "Hemingway Editor highlights complex sentences in color and provides a single grade level using a proprietary formula. This analyzer provides 7 standard readability scores (Flesch-Kincaid, Gunning Fog, Coleman-Liau, SMOG, ARI, Dale-Chall, Flesch Reading Ease), audience matching, 12+ text statistics, and improvement suggestions. Hemingway is better for real-time sentence-level editing. This tool is better for comprehensive scoring and audience analysis.",
      },
      {
        question: "What readability level does Google prefer for ranking?",
        answer:
          "Google doesn't publicly confirm readability as a direct ranking factor, but multiple studies show correlation between readability and rankings. Backlinko's analysis of 11.8 million search results found top-ranking pages average Flesch-Kincaid Grade 7-8. HubSpot found 7th-8th grade content gets 36% more traffic. Google's own content guidelines emphasize 'writing for your audience' and using clear, simple language.",
      },
      {
        question: "Can I use this for academic papers?",
        answer:
          "Yes. Academic papers typically score grade 12-16, which is expected and appropriate. This tool helps you check if your academic writing is more complex than necessary. Even academic writing benefits from clear sentence structure. Many journal style guides recommend simplifying where possible without losing precision. Use the Coleman-Liau and ARI scores, which handle technical vocabulary better than syllable-based formulas.",
      },
      {
        question: "Is this tool free?",
        answer:
          "Yes. The readability analyzer is completely free with no usage limits, no signup required, and no word count restrictions. Since all processing happens locally in your browser, there are no server costs. It will remain free.",
      },
      {
        question: "What is a good Flesch Reading Ease score?",
        answer:
          "Flesch Reading Ease scores range from 0 to 100. 90-100 = Very Easy (5th grade), 80-90 = Easy (6th grade), 70-80 = Fairly Easy (7th grade), 60-70 = Standard (8th-9th grade), 50-60 = Fairly Difficult (10th-12th grade), 30-50 = Difficult (college), 0-30 = Very Difficult (graduate). For web content, 60-70 is the sweet spot. For business writing, 50-60 works. Academic writing typically scores 20-40.",
      },
    ],

    relatedTools: [
      { name: "AI Text Detector", href: "/ai-tools/ai-text-detector" },
      { name: "AI Code Detector", href: "/ai-tools/ai-code-detector" },
      { name: "AI Paraphraser", href: "/ai-tools/ai-paraphraser" },
      { name: "Word Counter", href: "/seo-tools/word-counter" },
      { name: "Keyword Density Checker", href: "/seo-tools/keyword-density" },
      { name: "Text Summarizer", href: "/ai-tools/text-summarizer" },
      { name: "Blog Title Generator", href: "/seo-tools/blog-titles" },
      { name: "All AI Tools", href: "/ai-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function AIReadabilityAnalyzerPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <AIReadabilityAnalyzer />
      )}
    />
  )
}
