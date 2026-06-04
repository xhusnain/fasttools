import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const AiLyricsGenerator = dynamic(
  () =>
    import("@/components/social-media/ai-lyrics-generator").then(
      (mod) => mod.AiLyricsGenerator
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "AI Lyrics Generator",
  description:
    "Generate draft song lyrics from a theme, genre, mood, length, and language.",
  metaTitle: "AI Lyrics Generator — Write Original Song Lyrics by Genre, Mood & Style",
  metaDescription:
    "Free AI lyrics generator. Write original song lyrics in any genre (pop, rap, rock, country, R&B, indie, EDM, jazz). Choose mood, rhyme scheme, verse structure, language. Generate verses, chorus, bridge, pre-chorus. Copy / download instantly.",
  path: "/ai-tools/lyrics-generator",

  header: {
    title: "AI Lyrics Generator",
    description:
      "Generate original song lyrics from any theme, genre, or mood in seconds. Create verses, chorus, bridge, and pre-chorus structures with AI-powered rhyme schemes, syllable patterns, and multilingual support — then copy or download your draft instantly.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "AI Tools", href: "/ai-tools" },
    { label: "AI Lyrics Generator", href: "/ai-tools/lyrics-generator" },
  ],

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "Generate draft lyrics from a theme with optional style, mood, and language settings.",
    alternateName: [
      "Song Lyrics Generator",
      "AI Songwriter",
      "Lyric Writer",
      "Song Idea Generator",
      "Rap Lyrics Generator",
      "Pop Lyrics Writer",
      "Country Song Generator",
      "Rock Lyrics Maker",
      "Hip Hop Lyrics AI",
      "Indie Song Lyric Tool",
      "EDM Lyrics Generator",
      "Songwriting Assistant",
      "Lyric Draft Tool",
      "Suno-style Lyric Helper",
      "Songkick Songwriting Tool",
    ],
    featureList: [
      "Generate full song structure: verse 1, pre-chorus, chorus, verse 2, bridge, outro",
      "10+ genre presets: pop, rap, hip-hop, rock, country, R&B, EDM, jazz, indie, folk",
      "Mood control: happy, sad, motivational, romantic, aggressive, melancholic, hopeful",
      "Rhyme scheme options: AABB, ABAB, ABCB, free verse",
      "Syllable pattern guidance for natural cadence",
      "Multilingual: English, Spanish, French, German, Portuguese, Italian, Japanese (where AI model permits)",
      "Theme-first prompting: enter a topic / story / image and the AI builds lyrics around it",
      "Verse count and length controls (short, standard, extended)",
      "Optional explicit / family-friendly filter",
      "Copy any section or the whole song to clipboard",
      "Download as .txt for DAW import",
      "Regenerate as many variations as you want — no limit",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "An AI Lyrics Generator is a free tool that creates original song lyrics based on your theme, genre, mood, and style preferences using artificial intelligence.",
    quickAnswer:
      "Enter a theme or topic, select a music genre and mood, and get AI-generated lyrics instantly. Customize verse count, rhyme scheme, and structure. Edit the output to match your creative vision.",
    keyTakeaways: [
      "Generates original lyrics based on theme, genre, and mood",
      "Supports multiple genres: pop, rap, rock, country, R&B, and more",
      "Customizable structure: verses, chorus, bridge, and pre-chorus",
      "Adjustable rhyme schemes and syllable patterns",
      "Use as a creative starting point — refine and personalize the output",
    ],
    overview:
      "This AI lyrics generator transforms any song idea into a structured lyric draft with verses, chorus, bridge, and pre-chorus sections. Choose from genres like pop, rap, hip-hop, rock, country, R&B, EDM, jazz, and indie — then fine-tune the mood (happy, sad, motivational, romantic, aggressive) and language to match your creative vision. The tool uses AI songwriting models to produce rhyming lyrics with natural cadence, making it ideal for singer-songwriters, music producers, content creators, and anyone who needs original lyrics fast. Generate unlimited drafts, compare versions, and export your favorite as a text file for studio sessions or collaboration.",

    howToSteps: [
      "Enter your song theme, story, or emotion — describe the scene, narrative, or feeling you want the lyrics to convey.",
      "Select genre (pop, rap, rock, country, R&B, EDM), mood (happy, melancholic, energetic), and target language for multilingual lyrics.",
      "Generate AI lyrics and review verse structure, rhyme scheme, syllable flow, and emotional tone across each section.",
      "Copy the full draft to clipboard or download as a .txt file, then refine phrasing, melody fit, and vocal cadence for your final recording.",
    ],

    features: [
      "AI-powered lyric generation from any theme, topic, or narrative prompt",
      "Genre selection: pop, rap, hip-hop, rock, country, R&B, EDM, jazz, folk, indie, and more",
      "Mood controls: happy, sad, romantic, aggressive, motivational, chill, nostalgic",
      "Customizable song structure with verse, chorus, bridge, pre-chorus, and outro sections",
      "Multilingual lyrics generation — write songs in English, Spanish, French, Hindi, and 20+ languages",
      "Adjustable rhyme scheme and syllable targeting for natural vocal cadence",
      "One-click copy to clipboard and download as text file for studio collaboration",
      "Unlimited regeneration to compare multiple lyric versions side by side",
    ],

    useCases: [
      "Singer-songwriters brainstorming verse ideas and hook concepts before recording sessions",
      "Music producers generating placeholder lyrics for beat demos and instrumental tracks",
      "Content creators writing original song lyrics for YouTube covers, TikTok videos, and social media content",
      "Rappers and hip-hop artists drafting bars, punchlines, and freestyle starting points",
      "Advertising teams creating jingle lyrics and branded song copy for marketing campaigns",
      "Multilingual artists writing concept drafts in multiple languages for international releases",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          AI lyrics generation uses large language models (LLMs) trained on vast
          corpora of text to produce coherent, rhyming song lyrics from natural
          language prompts. The technology understands genre conventions — rap
          lyrics favor internal rhyme, wordplay, and rhythmic density, while pop
          lyrics lean toward melodic phrasing and repetitive hooks. By specifying
          genre, mood, and theme, you guide the AI to generate lyrics that match
          the stylistic norms of your target music style.
        </p>
        <p>
          Modern AI songwriting tools use transformer-based architectures similar
          to GPT and Claude to predict word sequences that satisfy both semantic
          meaning and phonetic patterns. The result is a first draft that captures
          rhyme, meter, and emotional tone — giving songwriters, producers, and
          content creators a creative starting point that can be refined for melody
          fit, vocal delivery, and personal artistic voice. Always treat AI-generated
          lyrics as raw material to edit, not a finished product.
        </p>
      </div>
    ),

    proTip:
      "Write your theme prompt as a mini-story with specific imagery, character perspective, and emotional arc — for example, 'a breakup letter from someone who still loves their ex, set in a rainy city at night' produces dramatically better lyrics than just typing 'breakup song'.",

    faqs: [
      {
        question: "What genres does the AI lyrics generator support?",
        answer:
          "The generator supports all major music genres including pop, rap, hip-hop, rock, country, R&B, EDM, jazz, folk, indie, metal, reggae, and blues. Each genre selection adjusts the AI's vocabulary, pacing, rhyme density, and structural conventions to match that style's lyrical norms.",
      },
      {
        question: "Can I generate song lyrics in languages other than English?",
        answer:
          "Yes. The AI lyrics generator supports multilingual lyric creation in over 20 languages including Spanish, French, Portuguese, German, Italian, Hindi, Japanese, Korean, and Arabic. Select your target language before generating to ensure vocabulary, grammar, and cultural phrasing align with native songwriting conventions.",
      },
      {
        question: "Are AI-generated lyrics ready to record and publish?",
        answer:
          "AI lyrics should be treated as high-quality first drafts, not finished songs. Edit for originality, melody fit, vocal cadence, and emotional authenticity before recording. Professional songwriters use AI as a creative accelerator — generating ideas 10x faster — then refine the output with personal artistic voice and performance nuance.",
      },
      {
        question: "How do I write better prompts for AI lyric generation?",
        answer:
          "Use specific, descriptive prompts with concrete imagery and narrative context. Instead of 'love song,' try 'a slow ballad about reconnecting with a childhood friend at a small-town diner after 10 years apart.' Include emotional tone (bittersweet, triumphant, heartbroken), character perspective (first-person confession), and setting details for dramatically better results.",
      },
      {
        question: "Can I generate rap lyrics and freestyle bars with this tool?",
        answer:
          "Yes. Select the rap or hip-hop genre to generate lyrics with internal rhyme, multisyllabic rhyme schemes, wordplay, punchlines, and rhythmic flow patterns. The AI understands bar structure, couplet formatting, and the difference between boom-bap and trap lyrical styles. Use it for freestyle practice, battle prep, or song demo creation.",
      },
      {
        question: "How is this different from other AI songwriting tools?",
        answer:
          "This lyrics generator combines genre-aware AI with granular controls for mood, language, verse structure, and rhyme scheme — all in a free, no-signup browser tool. You get instant copy/download export, unlimited regeneration for comparing versions, and the ability to iterate rapidly without switching between apps or paying for subscriptions.",
      },
      {
        question: "Can I use AI-generated lyrics commercially?",
        answer:
          "The generated text is original output created by AI from your prompt. You can use it as a starting point for commercial songs, but always edit substantially to add originality and personal creative expression. Check applicable copyright guidance in your jurisdiction, as AI-generated content laws vary by country and are still evolving.",
      },
    ],

    additionalContent: [
      {
        heading: "Improving Draft Quality",
        content:
          "If an output feels generic, regenerate with a narrower theme and include concrete nouns, time context, and emotional stakes.",
      },
      {
        heading: "Workflow Tip for Teams",
        content:
          "Use this tool for ideation, then pass selected lines into your songwriting or editorial workflow for final arrangement and rights review.",
      },
    ],

    relatedTools: [
      { name: "AI Caption Generator", href: "/ai-tools/caption-generator" },
      { name: "AI Pet Name Generator", href: "/ai-tools/pet-names" },
      { name: "AI Paraphraser", href: "/ai-tools/ai-paraphraser" },
      { name: "Text to Speech", href: "/ai-tools/text-to-speech" },
      { name: "Blog Title Generator", href: "/seo-tools/blog-titles" },
      { name: "YouTube Channel Name Generator", href: "/social-media-tools/youtube-channel-name-generator" },
      { name: "Token to Word Converter", href: "/ai-tools/token-to-word-converter" },
      { name: "All AI Tools", href: "/ai-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function LyricsGeneratorPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
          <AiLyricsGenerator />
        </div>
      )}
    />
  )
}
