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
          <h3 className="text-lg font-semibold text-foreground mb-2">Social Media Character Limits</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Platform</th>
                <th className="text-left py-2 px-2 text-foreground">Limit</th>
                <th className="text-left py-2 px-2 text-foreground">Optimal</th>
                <th className="text-left py-2 px-2 text-foreground">Display cutoff</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Twitter / X (post)</td>
                <td className="py-2 px-2">280</td>
                <td className="py-2 px-2">71-100</td>
                <td className="py-2 px-2">100 chars (full visible without expand)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Instagram caption</td>
                <td className="py-2 px-2">2,200</td>
                <td className="py-2 px-2">125-150</td>
                <td className="py-2 px-2">125 chars (mobile truncation)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">LinkedIn post</td>
                <td className="py-2 px-2">3,000</td>
                <td className="py-2 px-2">200-500</td>
                <td className="py-2 px-2">140 chars (&quot;...see more&quot;)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Facebook post</td>
                <td className="py-2 px-2">63,206</td>
                <td className="py-2 px-2">40-80</td>
                <td className="py-2 px-2">477 chars (mobile)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">TikTok caption</td>
                <td className="py-2 px-2">2,200</td>
                <td className="py-2 px-2">100-150</td>
                <td className="py-2 px-2">~150 chars before truncation</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">YouTube title</td>
                <td className="py-2 px-2">100</td>
                <td className="py-2 px-2">60-70</td>
                <td className="py-2 px-2">~70 chars on mobile feed</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">YouTube description</td>
                <td className="py-2 px-2">5,000</td>
                <td className="py-2 px-2">First 157 chars critical</td>
                <td className="py-2 px-2">157 chars (above-fold)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Pinterest pin description</td>
                <td className="py-2 px-2">500</td>
                <td className="py-2 px-2">200-300</td>
                <td className="py-2 px-2">75 chars (truncated)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Meta description (Google SERP)</strong></td>
                <td className="py-2 px-2"><strong>160</strong></td>
                <td className="py-2 px-2"><strong>150-155</strong></td>
                <td className="py-2 px-2"><strong>120 (mobile) / 158 (desktop)</strong></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Meta title (Google SERP)</strong></td>
                <td className="py-2 px-2"><strong>60</strong></td>
                <td className="py-2 px-2"><strong>50-58</strong></td>
                <td className="py-2 px-2"><strong>~580 pixels (varies)</strong></td>
              </tr>
              <tr>
                <td className="py-2 px-2">Threads (Meta)</td>
                <td className="py-2 px-2">500</td>
                <td className="py-2 px-2">100-200</td>
                <td className="py-2 px-2">~150 before truncation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Content Length Sweet Spots</h3>
          <p>Different content types have different optimal lengths backed by research:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Blog post (Google ranking):</strong> 1,500–2,500 words. HubSpot/Backlinko studies show this range correlates with higher rankings.</li>
            <li><strong>Newsletter:</strong> 200-300 words (5-min read max). Higher engagement than longer formats.</li>
            <li><strong>Email subject line:</strong> 30-60 characters. Mobile cutoff is ~35 chars.</li>
            <li><strong>Email body (cold outreach):</strong> 50-125 words. Response rates plateau beyond.</li>
            <li><strong>Tweet:</strong> 71-100 characters has highest engagement (under 280 limit).</li>
            <li><strong>Instagram caption:</strong> 125-150 characters first paragraph (before &quot;more&quot; cutoff).</li>
            <li><strong>YouTube video script:</strong> 150 words/min — so 10 min = 1,500 words.</li>
            <li><strong>Podcast script:</strong> 130-150 words/min (slightly slower for clarity).</li>
            <li><strong>Presentation:</strong> 100-130 words/min (need pauses for slides + audience).</li>
            <li><strong>Job application cover letter:</strong> 250-400 words. Single page max.</li>
            <li><strong>Resume bullet:</strong> ~10-20 words each. Concise impact statements.</li>
            <li><strong>Conference talk:</strong> 5,500 words = ~45-min keynote at 120 words/min.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Word Count vs Character Count</h3>
          <p>
            <strong>Word count</strong> is what writers, editors, and academic assignments use. <strong>Character count</strong> is what platforms enforce. The conversion isn&apos;t exact because words have different lengths, but a useful rule: 1 word ≈ 5 characters (including spaces). So a 50-word tweet ≈ 250 characters, fitting comfortably under Twitter&apos;s 280 limit. Some platforms (TikTok, Twitter) count emojis as 2 characters each, so emoji-heavy captions hit limits faster than letter-only captions.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Reading Speed Variations</h3>
          <p>
            The default 238 WPM reading speed is an average for adult web content. Actual speeds vary significantly:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>5th grader:</strong> ~100 WPM</li>
            <li><strong>8th grader:</strong> ~150 WPM</li>
            <li><strong>Average adult (web reading):</strong> 200-250 WPM</li>
            <li><strong>Adult (paperback novel):</strong> 250-300 WPM</li>
            <li><strong>College student / academic reader:</strong> 300 WPM</li>
            <li><strong>Speed reader (Tim Ferriss method):</strong> 450-600 WPM</li>
            <li><strong>Skimming vs deep reading:</strong> 600+ WPM for skim, 150-200 for retention</li>
          </ul>
          <p className="mt-3">
            For audiobook / podcast / video script timing, use 150 WPM (the standard conversational rate). For dense academic content, target 200 WPM. For casual web content, 250 WPM is realistic.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Word Counter vs Microsoft Word, Google Docs, Online Counters</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>vs Microsoft Word Count:</strong> Word is offline but slower for quick check. This tool: instant, browser-only, more metrics (readability, density, platform limits).</li>
            <li><strong>vs Google Docs:</strong> Docs requires opening a document. This tool: paste-and-go, no doc needed.</li>
            <li><strong>vs wordcounter.net:</strong> Similar core feature; this tool adds readability scoring + 10 platform-specific limits + keyword density in one view.</li>
            <li><strong>vs Hemingway Editor:</strong> Hemingway focuses on style; this tool focuses on metrics. Use together for full content audit.</li>
            <li><strong>vs Yoast SEO (WordPress plugin):</strong> Yoast checks SEO inside WordPress; this tool works anywhere with any text.</li>
          </ul>
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
      { name: "Text Similarity Checker", href: "/seo-tools/text-similarity-checker" },
      { name: "Blog Title Generator", href: "/seo-tools/blog-titles" },
      { name: "AI Readability Analyzer", href: "/ai-tools/ai-readability-analyzer" },
      { name: "AI Text Summarizer", href: "/ai-tools/text-summarizer" },
      { name: "AI Paraphraser", href: "/ai-tools/ai-paraphraser" },
      { name: "AI Text Detector", href: "/ai-tools/ai-text-detector" },
      { name: "All SEO Tools", href: "/seo-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function WordCounterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<WordCounter />)} />
}
