import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const AiLyricsGenerator = dynamic(
  () =>
    import("@/components/social-media/ai-lyrics-generator").then(
      (mod) => mod.AiLyricsGenerator
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Song Idea Generator",
  description:
    "Generate song ideas from a theme, genre, and mood — get a titled concept with draft verses and a hook you can build on. Free, no signup.",
  metaTitle: "Song Idea Generator — Themes, Hooks & Draft Verses Free",
  metaDescription:
    "Stuck on what to write about? Enter a theme, pick a genre and mood, and get a song idea with draft lyrics — verses, hook, structure — to react to and rewrite. Free, no signup.",
  path: "/ai-tools/song-idea-generator",

  header: {
    title: "Song Idea Generator",
    description:
      "Feed it a theme, genre, and mood — get back a song concept with draft verses and a hook. Not a finished song: a starting point that kills the blank page.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "pink",
  },

  breadcrumbs: [
    { label: "AI Tools", href: "/ai-tools" },
    { label: "AI Lyrics Generator", href: "/ai-tools/lyrics-generator" },
    { label: "Song Idea Generator", href: "/ai-tools/song-idea-generator" },
  ],

  schemaOptions: {
    applicationCategory: "EntertainmentApplication",
    description:
      "Song idea generator producing themed song concepts with draft lyrics — verse/hook structure from a theme, genre, and mood input.",
    alternateName: [
      "Song Concept Generator",
      "Songwriting Idea Generator",
      "Song Topic Generator",
      "Songwriting Prompt Generator",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A song idea generator turns a theme, genre, and mood into a concrete song concept — a working title, draft verses, and a hook — giving a songwriter raw material to react to instead of a blank page.",
    quickAnswer:
      "Enter a theme (a feeling, a situation, a phrase you can't shake), choose a genre and mood, and generate — you'll get a draft song concept with verses and a hook. Treat it as clay: keep the two lines that spark, rewrite everything else, and you're past the blank page in a minute.",
    keyTakeaways: [
      "Input = theme + genre + mood; output = titled concept with draft verses and a hook",
      "The point is reaction, not adoption — drafts kill blank-page paralysis",
      "Regenerate with a sharper theme to steer it ('leaving home at 18' beats 'nostalgia')",
      "Genre and mood settings change rhyme density, imagery, and structure",
      "Free, no signup — generate until something snags",
    ],
    overview:
      "Every songwriter knows the two hardest moments: the blank page, and the third verse. A song idea generator attacks the first one. Give it a theme — 'the apartment after the breakup', 'driving at night', 'my brother's wedding' — plus a genre and mood, and it returns a draft concept: title, verses, hook. The draft's job is not to be good; it's to be concrete enough to disagree with. You'll read it and think 'no — the hook should come from the door, not the window,' and that reaction IS the songwriting. Specific themes produce dramatically better raw material than abstractions, so bring a scene, not a topic.",

    howToSteps: [
      "Enter a theme — the more specific the scene or feeling, the better the draft ('last day of summer job' > 'nostalgia').",
      "Pick a genre and mood; both meaningfully change the language and structure you get back.",
      "Generate, and read the draft looking for the one line or image worth keeping.",
      "Regenerate with a refined theme, or take the keeper line and write outward from it.",
    ],

    aboutTool: (
      <div className="space-y-10">
        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">How to Get Ideas Worth Keeping</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            The single biggest quality lever is theme specificity. 'Love' produces greeting-card
            lines; 'she kept the dog and I kept the truck' produces a country song. Good theme
            inputs name a scene (where, when), a tension (what's unresolved), or a concrete object
            that carries the feeling. Second lever: mismatch genre and mood on purpose — 'upbeat'
            plus a sad theme, or a breakup theme in a party genre, forces the kind of tension real
            songs are made of. Third: generate three or four drafts and harvest across them; the
            usable hook is often in draft two while the verse image is in draft four.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">From Idea to Song: A Working Process</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            A draft-to-song path that works: (1) circle the one line, image, or title you'd defend —
            discard the rest without guilt. (2) Say the keeper line out loud until it suggests a
            rhythm; melody usually hides in speech cadence. (3) Rewrite the hook in your own voice —
            the generator's hook tells you WHERE the hook goes and what it's about, not what it
            should say. (4) Build verses as camera shots of your actual scene, using the draft's
            structure as scaffolding. Writers who use generators well treat them like a co-writer's
            bad first pass: the value is that somebody went first.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Who This Is For</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Songwriters breaking a dry spell; producers who need topline concepts to sing over a
            beat; content creators who need a themed original hook for a video without licensing
            headaches; teachers running songwriting exercises (generate a draft, have students
            critique and rewrite it — the critique is the lesson); and anyone writing a personalized
            song for a birthday, wedding, or anniversary who knows the stories but not where to
            start.
          </p>
        </article>
      </div>
    ),

    proTip:
      "Keep a 'spark file': every time a generated draft contains one good line, save that line and delete the rest. Ten sessions later you have a page of hooks that are half yours — and any one of them starts a real song faster than any full draft.",

    faqs: [
      {
        question: "How do I get song ideas when I'm completely stuck?",
        answer:
          "Feed the generator a specific scene from your own life — not an emotion, a scene ('the drive home after the diagnosis', 'first apartment, no furniture'). Generate a few drafts, keep only the lines that make you feel something, and write outward from those. Specificity in, usable material out.",
      },
      {
        question: "Can I use the generated ideas in songs I publish or sell?",
        answer:
          "Yes — the output is generated for you to use, and by the time a real song exists you'll have rewritten nearly all of it anyway. The craft and the copyright-worthy expression end up being yours. Avoid publishing raw unedited output as-is; it's a draft, not a finished work.",
      },
      {
        question: "What makes a good theme input?",
        answer:
          "A scene, a tension, or an object — something concrete. 'Missing someone' is weak; 'her coffee mug is still in my cupboard' writes half the song for you. If your theme could caption a stock photo, sharpen it until it could only caption YOUR photo.",
      },
      {
        question: "Does the genre setting actually change the output?",
        answer:
          "Yes — genre shifts vocabulary, imagery density, and structure (country drafts lean narrative and object-driven; pop drafts front-load the hook; rap drafts pack more internal rhyme). Try the same theme across two genres and keep whichever surprises you.",
      },
      {
        question: "Is this the same as the AI Lyrics Generator?",
        answer:
          "Same engine, different job: the lyrics generator is for drafting fuller lyrics when you already know the song you're writing. This page is tuned for the step before that — finding the idea. Start here when you have nothing; go there when you have a concept and need verses.",
      },
    ],

    relatedTools: [
      { name: "AI Lyrics Generator (full drafts)", href: "/ai-tools/lyrics-generator" },
      { name: "Text to Speech (hear it read)", href: "/ai-tools/text-to-speech" },
      { name: "Caption Generator", href: "/ai-tools/caption-generator" },
      { name: "Blog Title Generator", href: "/seo-tools/blog-title-generator" },
      { name: "All AI Tools", href: "/ai-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function SongIdeaGeneratorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<AiLyricsGenerator />)} />
}
