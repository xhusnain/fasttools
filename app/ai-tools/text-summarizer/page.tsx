import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const AISummarizer = dynamic(
  () => import("@/components/ai/ai-summarizer").then((mod) => mod.AISummarizer),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "AI Text Summarizer",
  description:
    "Free AI text summarizer. Summarize articles, essays, research papers, and any long text into concise paragraphs, bullet points, key takeaways, or a one-sentence TL;DR. Adjustable summary length. No signup needed.",
  metaTitle: "Free AI Text Summarizer - Summarize Any Text Instantly (2026)",
  metaDescription:
    "Summarize articles, essays, and reports instantly with our free AI text summarizer. Get bullet points, paragraphs, or key takeaways. Adjustable length. No signup required.",
  path: "/ai-tools/text-summarizer",

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Free AI-powered text summarizer that condenses articles, essays, research papers, reports, and any long text into concise summaries. 4 summary modes: flowing paragraph, bullet points list, numbered key takeaways, and one-sentence TL;DR. Adjustable summary length slider (10-70%). Shows word count, reading time, and reduction percentage. Copy to clipboard, download as .txt, and re-summarize output. Powered by Meta Llama 3.1 via Cloudflare AI. Up to 10,000 characters per request.",
    featureList: [
      "4 summary modes: Paragraph, Bullet Points, Key Takeaways, TL;DR (one sentence)",
      "Adjustable summary length slider (10% to 70% of original)",
      "Up to 10,000 characters per summarization (approximately 1,500 words)",
      "Real-time word count and character count for input and output",
      "Reading time estimation for original and summarized text",
      "Reduction percentage badge showing how much shorter the summary is",
      "One-click copy to clipboard",
      "Download summary as .txt file",
      "Re-summarize: use output as new input for iterative condensing",
      "Powered by Meta Llama 3.1 8B via Cloudflare AI",
      "No signup, no account, no ads required",
      "Mobile-responsive design with touch-friendly controls",
    ],
    softwareRequirements: "Modern web browser with JavaScript enabled",
  },

  header: {
    title: "Free AI Text Summarizer",
    description:
      "Summarize any article, essay, or report instantly. Choose paragraph, bullet points, key takeaways, or TL;DR mode with adjustable length.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "AI Tools", href: "/ai-tools" },
    { label: "Text Summarizer", href: "/ai-tools/text-summarizer" },
  ],

  content: {
    definition:
      "A text summarizer is an AI-powered tool that automatically condenses long articles, essays, reports, and documents into shorter summaries while preserving the key information, main arguments, and essential meaning of the original text.",

    quickAnswer:
      "Paste your text (up to 10,000 characters), choose a summary mode (paragraph, bullet points, key takeaways, or TL;DR), adjust the length slider, and click Summarize. Your AI-generated summary appears instantly with word count, reading time, and a copy button. No signup needed.",

    keyTakeaways: [
      "4 summary modes: flowing paragraph, bullet point list, numbered key takeaways, and one-sentence TL;DR",
      "Adjustable summary length from 10% to 70% of the original text",
      "Supports up to 10,000 characters (~1,500 words) per summarization",
      "Shows word count, reading time, and reduction percentage for both input and output",
      "Download summaries as .txt files or copy to clipboard with one click",
      "Powered by Meta Llama 3.1 AI model for accurate, context-aware summarization",
    ],

    overview:
      "This AI text summarizer uses Meta Llama 3.1 (via Cloudflare AI) to condense long text into concise, accurate summaries. Paste any article, essay, research paper, report, or document up to 10,000 characters, choose from 4 summary modes (paragraph, bullet points, key takeaways, or one-sentence TL;DR), adjust the length slider, and get your summary in seconds. The tool shows word counts, reading times, and reduction percentages for both input and output. You can copy the summary, download it as a text file, or use it as input for iterative re-summarization. No account, no signup, no ads.",

    howToSteps: [
      "Paste your article, essay, or any long text into the input box (up to 10,000 characters).",
      "Choose a summary mode: Paragraph (flowing prose), Bullet Points (key items listed), Key Takeaways (numbered insights), or TL;DR (one sentence).",
      "Adjust the summary length slider to control how detailed or concise you want the output (10% to 70% of original length).",
      "Click 'Summarize' and wait a few seconds for the AI to generate your summary.",
      "Copy the summary to clipboard, download as .txt, or click 'Re-summarize' to condense it further.",
    ],

    features: [
      "Paragraph Mode: Get a flowing, coherent summary paragraph that captures the main ideas in natural prose.",
      "Bullet Points Mode: Extract the most important points as a clean, scannable bullet-point list.",
      "Key Takeaways Mode: Pull out the top numbered insights and actionable information from the text.",
      "TL;DR Mode: Condense the entire text into a single, powerful sentence that captures the core message.",
      "Adjustable Length: Slide between 10% (ultra-concise) and 70% (detailed) to control summary depth.",
      "Word & Reading Time Stats: See word count and estimated reading time for both original and summary text.",
      "Reduction Badge: Instantly see what percentage shorter your summary is compared to the original.",
      "Copy & Download: One-click copy to clipboard or download your summary as a .txt file.",
      "Re-summarize: Feed the summary back as input to condense it even further through iterative summarization.",
      "10,000 Character Limit: Process approximately 1,500 words per request — enough for most articles and essays.",
      "No Signup Required: Use immediately without creating an account, providing an email, or watching ads.",
      "AI-Powered Accuracy: Powered by Meta Llama 3.1 8B, ensuring context-aware summarization that understands nuance.",
    ],

    useCases: [
      "Students: Summarize textbook chapters, research papers, and lecture notes for efficient studying and exam prep.",
      "Researchers: Quickly extract key findings from academic papers to decide if the full paper is worth reading.",
      "Journalists: Condense press releases, reports, and interviews into concise story leads.",
      "Professionals: Summarize long emails, meeting notes, and reports for quick executive briefings.",
      "Content Creators: Extract key points from articles to create social media posts, newsletters, or video scripts.",
      "Job Seekers: Summarize job descriptions to quickly identify key requirements and responsibilities.",
      "Readers: Get the gist of long blog posts, news articles, and opinion pieces before committing to full reads.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How AI Text Summarization Works</h3>
          <p>
            This tool uses Meta Llama 3.1 8B, a large language model that understands the context,
            structure, and meaning of text. Unlike simple extractive summarizers that just pull out
            sentences, this AI performs abstractive summarization — it reads the entire text,
            understands the key concepts, and generates a new, coherent summary in its own words.
            This produces more natural, readable summaries that capture nuance and implicit
            meaning that extractive methods miss.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Extractive vs. Abstractive Summarization</h3>
          <p>
            <strong>Extractive summarization</strong> selects and copies the most important
            sentences from the original text verbatim. It&apos;s simple but can feel disjointed since
            sentences may lack context when removed from surrounding text.{" "}
            <strong>Abstractive summarization</strong> (what this tool uses) generates entirely
            new sentences that capture the same meaning. It produces more fluid, natural summaries
            but requires a sophisticated AI model that truly understands language. Most modern
            AI summarizers, including this one, use abstractive methods powered by transformer
            models.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Tips for Better Summaries</h3>
          <p>
            <strong>1.</strong> For academic papers, use Key Takeaways mode to extract findings
            and conclusions. <strong>2.</strong> For news articles, TL;DR gives you the headline
            in one sentence. <strong>3.</strong> For meeting notes, Bullet Points mode creates
            scannable action items. <strong>4.</strong> If a summary is still too long, use the
            Re-summarize button to feed it back and condense further. <strong>5.</strong> Set the
            length slider to 15-20% for executive summaries, or 50-70% for detailed study notes.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How to Summarize Without Plagiarizing</h3>
          <p>
            AI-generated summaries are abstractive — they rephrase ideas in new words rather than
            copying sentences verbatim. However, if you&apos;re using summaries in academic work,
            you should still cite the original source. The summary captures the ideas, but the
            ideas belong to the original author. Use summaries as study aids, reading
            comprehension tools, or starting points for your own analysis — not as a substitute
            for original writing.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For the most accurate summaries, paste clean text without headers, footers, or navigation elements. If summarizing a web article, copy just the article body. For very long documents, summarize in sections — the AI performs better on focused, coherent text blocks than on mixed content.",

    faqs: [
      {
        question: "What is an AI text summarizer?",
        answer:
          "An AI text summarizer is a tool that uses artificial intelligence (specifically large language models) to automatically condense long text into shorter summaries while preserving the key information and main ideas. This tool uses Meta Llama 3.1 8B to generate abstractive summaries — meaning it creates new sentences that capture the meaning, rather than just extracting existing sentences.",
      },
      {
        question: "Is this text summarizer free?",
        answer:
          "Yes, completely free. There is no signup required, no account creation, no premium tier, and no ads. You can summarize unlimited texts up to 10,000 characters each.",
      },
      {
        question: "How many words can I summarize at once?",
        answer:
          "You can summarize up to 10,000 characters per request, which is approximately 1,500 words. This is enough for most articles, essays, and reports. For longer documents, you can summarize section by section.",
      },
      {
        question: "What are the different summary modes?",
        answer:
          "There are 4 modes: Paragraph (flowing prose summary), Bullet Points (key items as a list), Key Takeaways (numbered insights and findings), and TL;DR (the entire text condensed into one sentence). Each mode is optimized for different use cases.",
      },
      {
        question: "How do I adjust the summary length?",
        answer:
          "Use the length slider below the mode selector. Slide from 10% (ultra-concise) to 70% (detailed). The percentage represents the approximate target length relative to the original text. TL;DR mode always generates one sentence regardless of the slider.",
      },
      {
        question: "Is my text stored or saved?",
        answer:
          "Your text is sent to Cloudflare AI for processing and is not permanently stored. Cloudflare does not train on user inputs. However, the text is temporarily processed on a server (unlike our client-side tools). Do not submit highly confidential or sensitive information.",
      },
      {
        question: "Can I summarize in languages other than English?",
        answer:
          "The AI model supports multiple languages, but it performs best with English text. You can try other languages — the model will attempt to summarize and respond in the same language as the input. Quality may vary for less common languages.",
      },
      {
        question: "What is the difference between summarizing and paraphrasing?",
        answer:
          "Summarizing condenses text to a shorter version, keeping only the most important information. Paraphrasing rewrites text in different words while maintaining the same length and level of detail. This tool summarizes (makes text shorter). For paraphrasing, use our AI Paraphraser tool.",
      },
      {
        question: "Can I use summaries in academic work?",
        answer:
          "AI summaries can be used as study aids and comprehension tools, but you should always cite the original source in academic work. The summary captures ideas that belong to the original author. Use summaries to understand material faster, then write your own analysis and interpretation.",
      },
      {
        question: "What AI model powers this summarizer?",
        answer:
          "This tool uses Meta Llama 3.1 8B Instruct, running on Cloudflare Workers AI infrastructure. Llama 3.1 is a state-of-the-art open-source large language model that excels at text comprehension and generation tasks, including summarization.",
      },
      {
        question: "How accurate are the summaries?",
        answer:
          "AI-generated summaries are highly accurate for most content types including news articles, essays, reports, and academic papers. The model understands context and nuance well. However, for highly technical or specialized content (legal documents, medical literature), always verify key details against the original text.",
      },
      {
        question: "Can I re-summarize the output to make it even shorter?",
        answer:
          "Yes. Click the 'Re-summarize' button to feed the summary back as input, then click Summarize again. This iterative approach lets you progressively condense text to your desired length. Useful for creating executive summaries from already-summarized content.",
      },
    ],

    relatedTools: [
      { name: "AI Paraphraser", href: "/ai-tools/ai-paraphraser" },
      { name: "Caption Generator", href: "/ai-tools/caption-generator" },
      { name: "Text Similarity Checker", href: "/seo-tools/text-similarity-checker" },
      { name: "Lorem Ipsum Generator", href: "/seo-tools/lorem-ipsum" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function TextSummarizerPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<AISummarizer />)} />
}
