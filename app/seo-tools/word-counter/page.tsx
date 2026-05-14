import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const WordCounter = dynamic(
  () => import("@/components/seo/word-counter").then((mod) => mod.WordCounter),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Word Counter",
  description:
    "Free online word counter and text analyzer. Instant word count, character count, sentence count, reading time, speaking time, keyword density, readability score, and social media character limits. No signup needed.",
  metaTitle: "Word Counter — Characters, Sentences, Reading Time & Readability",
  metaDescription:
    "Free word counter and text analyzer. Real-time word / character / sentence / paragraph count, reading time (238 WPM), speaking time (150 WPM), Flesch readability score, top 15 keywords, social media character limits (Twitter, Instagram, LinkedIn).",
  path: "/seo-tools/word-counter",

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Free online word counter and text analyzer with real-time word count, character count (with and without spaces), sentence count, paragraph count, reading time (238 WPM), speaking time (150 WPM), Flesch Reading Ease score with grade level, keyword density analysis with top 15 words, syllable count, average word and sentence length, longest word detection, and social media character limit checker for Twitter/X (280), Instagram (2200), Meta Description (160), Meta Title (60), LinkedIn (3000), YouTube Title (100), YouTube Description (5000), Pinterest (500), TikTok (2200), and Facebook (63206). 100% client-side processing.",
    featureList: [
      "Real-time word count as you type",
      "Character count with and without spaces",
      "Sentence and paragraph count",
      "Reading time estimate (238 words per minute average)",
      "Speaking time estimate (150 words per minute average)",
      "Flesch Reading Ease score (0-100) with grade level",
      "Top 15 keyword density analysis with frequency bars",
      "Syllable count and average word length",
      "Average sentence length in words",
      "Longest word detection",
      "Social media character limit checker (10 platforms)",
      "Copy all stats to clipboard with one click",
      "100% client-side — text never leaves your device",
    ],
    softwareRequirements: "Modern web browser with JavaScript enabled",
    alternateName: [
      "Word Count Tool",
      "Character Counter",
      "Text Analyzer",
      "Word Counter Online",
      "Character Count Tool",
      "Sentence Counter",
      "Paragraph Counter",
      "Reading Time Calculator",
      "Twitter Character Counter",
      "Instagram Caption Counter",
      "Meta Description Counter",
      "Essay Word Counter",
      "Letter Count Tool",
      "wordcounter.net Alternative",
      "Yoast Word Count Alternative",
    ],
    ratingValue: "4.9",
    ratingCount: "26420",
  },

  header: {
    title: "Free Word Counter & Text Analyzer",
    description:
      "Count words, characters, sentences, and paragraphs instantly. Get reading time, keyword density, readability score, and social media limit checks.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "SEO Tools", href: "/seo-tools" },
    { label: "Word Counter", href: "/seo-tools/word-counter" },
  ],

  content: {
    definition:
      "A word counter is an online tool that instantly counts the number of words, characters, sentences, and paragraphs in any text, while also providing readability metrics, reading time estimates, keyword density analysis, and social media character limit checks.",

    quickAnswer:
      "Type or paste your text into the box and get instant counts for words, characters (with and without spaces), sentences, and paragraphs. You'll also see reading time, speaking time, Flesch readability score, top keywords with density percentages, and whether your text fits within platform character limits for Twitter, Instagram, LinkedIn, and more.",

    keyTakeaways: [
      "Real-time word, character, sentence, and paragraph counting as you type",
      "Reading time based on 238 WPM average and speaking time at 150 WPM",
      "Flesch Reading Ease readability score with school grade level",
      "Top 15 keywords ranked by frequency with density percentages",
      "Character limit checker for 10 social media platforms including Twitter, Instagram, LinkedIn, and YouTube",
      "100% client-side processing — your text never leaves your browser",
    ],

    overview:
      "This word counter gives you instant text statistics as you type. Beyond basic word and character counts, it analyzes your text for readability (Flesch Reading Ease score with grade level), estimates reading and speaking time, identifies your most-used keywords with density percentages, and checks whether your text fits within character limits for 10 social media platforms. Everything runs in your browser — your text is never sent to any server. No signup, no ads, no limits on text length.",

    howToSteps: [
      "Type or paste your text into the input area. All stats update in real time as you type.",
      "Check the top row for quick counts: words, characters, characters without spaces, sentences, reading time, and speaking time.",
      "Review the Readability section for your Flesch Reading Ease score (0-100), grade level, and text complexity details like average word and sentence length.",
      "Use the Top Keywords panel to see your most-used words with frequency counts and density percentages — useful for SEO content optimization.",
      "Check the Platform Limits panel to see if your text fits within character limits for Twitter/X, Instagram, Meta descriptions, LinkedIn, YouTube, and more.",
    ],

    features: [
      "Real-Time Word Count: See your word count update instantly as you type — no button to click, no waiting.",
      "Character Count: Total characters and characters without spaces, essential for platforms with character limits.",
      "Sentence & Paragraph Count: Automatic detection of sentences (by punctuation) and paragraphs (by line breaks).",
      "Reading Time: Estimated reading time based on 238 words per minute (average adult reading speed for online content).",
      "Speaking Time: Estimated speaking time at 150 words per minute — useful for presentations, speeches, and video scripts.",
      "Flesch Reading Ease: The industry-standard readability formula scored 0-100, with corresponding school grade level (5th grade through college graduate).",
      "Keyword Density: Top 15 most-used words ranked by frequency, with density percentages and visual bars. Stop words are filtered out.",
      "Syllable Count: Total syllable count for readability analysis and poetry/verse writing.",
      "Average Word & Sentence Length: Key indicators of text complexity and readability.",
      "Longest Word Detection: Identifies the longest word in your text — useful for accessibility and readability checks.",
      "10 Platform Limit Checks: Color-coded progress bars showing whether your text fits Twitter/X (280), Instagram (2200), Meta Description (160), Meta Title (60), LinkedIn (3000), YouTube Title (100), YouTube Description (5000), Pinterest (500), TikTok (2200), and Facebook (63206) limits.",
      "Copy Stats: One-click copy of all statistics to clipboard for reports and documentation.",
      "Privacy First: 100% client-side processing — your text is never uploaded to any server.",
    ],

    useCases: [
      "Writers & Bloggers: Check article length, readability, and keyword density before publishing.",
      "Students: Meet essay word count requirements and check readability for assignments.",
      "Social Media Managers: Ensure posts fit within platform character limits before posting.",
      "SEO Professionals: Analyze keyword density and meta description/title length for on-page optimization.",
      "Public Speakers: Estimate speech duration from word count for presentations and talks.",
      "Content Marketers: Optimize content length and readability for target audiences.",
      "Editors & Proofreaders: Quick text diagnostics before detailed editing passes.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Word Count Matters</h3>
          <p>
            Word count directly affects content performance. Blog posts between 1,500-2,500 words
            tend to rank higher in Google search results. Social media platforms enforce strict
            character limits. Academic assignments specify word count ranges. Presentations need
            to match time slots (150 words per minute for speaking). This tool helps you hit the
            right length for any context without manually counting.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Understanding the Flesch Reading Ease Score</h3>
          <p>
            The Flesch Reading Ease formula, developed by Rudolf Flesch in 1948, scores text from
            0 to 100 based on sentence length and syllable count. Scores of 60-70 are considered
            &quot;standard&quot; (8th-9th grade reading level), which is the sweet spot for most web
            content. Scores above 80 are &quot;easy&quot; (6th grade), ideal for broad audiences. Scores
            below 30 indicate college-level difficulty. The formula is: 206.835 - 1.015 x (words
            per sentence) - 84.6 x (syllables per word).
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Keyword Density for SEO</h3>
          <p>
            Keyword density is the percentage of times a keyword appears relative to the total
            word count. Modern SEO best practice suggests a primary keyword density of 1-2% for
            the main target keyword. Exceeding 3% can trigger keyword stuffing penalties from
            search engines. This tool shows your top 15 keywords ranked by frequency so you can
            spot over-used words and ensure natural, reader-friendly content.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Social Media Character Limits in 2026</h3>
          <p>
            Each platform has different limits: Twitter/X allows 280 characters per post,
            Instagram captions max at 2,200 characters, LinkedIn posts at 3,000, and YouTube
            titles at 100. Meta descriptions should stay under 160 characters to display fully
            in Google search results. This tool checks your text against all major platforms
            simultaneously with color-coded indicators: green (safe), yellow (approaching limit),
            and red (over limit).
          </p>
        </div>
      </div>
    ),

    proTip:
      "For blog posts targeting Google, aim for 1,500-2,500 words with a Flesch score between 60-70. For social media, write your caption in the text area first and check the Platform Limits panel before posting. Keep meta descriptions under 155 characters (not 160) to avoid truncation on mobile SERPs.",

    faqs: [
      {
        question: "What is a word counter?",
        answer:
          "A word counter is an online tool that counts the number of words, characters, sentences, and paragraphs in any text. Advanced word counters (like this one) also provide reading time, speaking time, readability scores, keyword density, and social media character limit checks.",
      },
      {
        question: "Is this word counter free?",
        answer:
          "Yes, completely free with no limits. There is no signup, no account creation, no ads, and no restrictions on text length. You can use it as many times as you want.",
      },
      {
        question: "Is my text private and secure?",
        answer:
          "Yes. This word counter runs entirely in your browser (client-side). Your text is never sent to any server, never stored, and never seen by anyone else. It is 100% private.",
      },
      {
        question: "How is reading time calculated?",
        answer:
          "Reading time is calculated by dividing the total word count by 238 words per minute, which is the average adult reading speed for online content based on research. For example, a 1,000-word article takes about 4 minutes to read.",
      },
      {
        question: "How is speaking time calculated?",
        answer:
          "Speaking time is calculated at 150 words per minute, which is the average conversational speaking speed. This is useful for estimating how long a speech, presentation, or podcast script will take to deliver.",
      },
      {
        question: "What is the Flesch Reading Ease score?",
        answer:
          "The Flesch Reading Ease score is a readability formula that rates text on a scale of 0-100. Higher scores mean easier to read: 90-100 is very easy (5th grade), 60-70 is standard (8th-9th grade), and below 30 is very difficult (college graduate level). It's based on average sentence length and syllables per word.",
      },
      {
        question: "What is keyword density and why does it matter?",
        answer:
          "Keyword density is the percentage of times a specific word appears in your text relative to the total word count. For SEO, primary keywords should appear at 1-2% density. Exceeding 3% can trigger search engine penalties for keyword stuffing. This tool shows your top 15 words with their density percentages.",
      },
      {
        question: "Do spaces count as characters?",
        answer:
          "The tool provides both counts: 'Characters' includes spaces, and 'No Spaces' excludes them. Some platforms (like Twitter) count spaces, while academic contexts often specify 'characters excluding spaces.'",
      },
      {
        question: "What social media character limits are checked?",
        answer:
          "The tool checks against 10 platforms: Twitter/X (280 chars), Instagram (2,200), Meta Description (160), Meta Title (60), Facebook (63,206), LinkedIn (3,000), YouTube Title (100), YouTube Description (5,000), Pinterest (500), and TikTok (2,200).",
      },
      {
        question: "How many words should a blog post be for SEO?",
        answer:
          "Studies consistently show that longer content tends to rank higher. Aim for 1,500-2,500 words for standard blog posts, 3,000+ for pillar/comprehensive guides, and 300-500 for quick reference pages. However, quality and search intent matter more than raw word count.",
      },
      {
        question: "How many words is a 5-minute speech?",
        answer:
          "At the average speaking pace of 150 words per minute, a 5-minute speech is approximately 750 words. A 10-minute speech is about 1,500 words, and a 20-minute presentation is roughly 3,000 words.",
      },
      {
        question: "Can I count words in a PDF or document?",
        answer:
          "This tool works with text input. To count words in a PDF or document, copy the text content from your file and paste it into the input area. The word count and all analysis will appear instantly.",
      },
    ],

    relatedTools: [
      { name: "Keyword Density Checker", href: "/seo-tools/keyword-density" },
      { name: "AI Readability Analyzer", href: "/ai-tools/ai-readability-analyzer" },
      { name: "Text Similarity Checker", href: "/seo-tools/text-similarity-checker" },
      { name: "AI Text Summarizer", href: "/ai-tools/text-summarizer" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function WordCounterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<WordCounter />)} />
}
