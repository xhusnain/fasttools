// Keyword-cluster variant pages for the AI Prompt Generator.
// One underlying tool, one intent-specific landing page per generation model,
// each with genuinely unique copy about prompting that specific model.

import type { PromptTargetKey } from "@/components/ai/ai-prompt-generator"

export interface PromptVariantConfig {
  slug: string
  defaultTarget: PromptTargetKey
  toolName: string
  metaTitle: string
  metaDescription: string
  headerTitle: string
  headerDescription: string
  overviewText: string
  definition: string
  quickAnswer: string
  keywords: string[]
  keyTakeaways: string[]
  howToSteps: string[]
  featureOverrides: string[]
  useCases: string[]
  aboutSections: Array<{ heading: string; body: string }>
  proTip: string
  faqOverrides: Array<{ question: string; answer: string }>
}

export const promptVariants: Record<string, PromptVariantConfig> = {
  sora: {
    slug: "sora",
    defaultTarget: "sora",
    toolName: "Sora Prompt Generator",
    metaTitle: "Sora Prompt Generator — Free Sora 2 Video Prompts",
    metaDescription:
      "Free Sora prompt generator. Type a rough idea and get 3 detailed Sora 2 video prompts with shot design, camera movement, lighting, and audio cues. No signup.",
    headerTitle: "Sora Prompt Generator",
    headerDescription:
      "Turn a one-line idea into detailed Sora 2 prompts with real shot design: camera movement, lighting, physics detail, and audio cues.",
    overviewText:
      "This Sora prompt generator turns a plain idea like \"a fox in a snowy forest\" into the kind of prompt Sora 2 actually rewards: one coherent shot with a camera that moves like a cinematographer chose it, lighting described in film language, physical detail that grounds the realism, and — because Sora 2 generates synchronized sound — ambient audio or a line of dialogue where it helps. You get three takes on your idea, each a different creative treatment, ready to paste.",
    definition:
      "A Sora prompt generator expands a rough concept into the detailed, film-language prompt format OpenAI's Sora 2 video model responds best to: subject, action, setting, shot design, camera movement, lighting, and audio.",
    quickAnswer:
      "Describe your idea in plain words and generate. You'll get 3 ready-to-paste Sora 2 prompts, each 60–120 words with cinematography, lighting, and audio detail — different moods of the same concept so you can pick a direction fast.",
    keywords: [
      "sora prompt generator",
      "sora 2 prompts",
      "sora video prompt",
      "openai sora prompt ideas",
      "sora 2 prompt examples",
    ],
    keyTakeaways: [
      "Writes complete Sora 2 prompts: subject, action, setting, camera, lighting, audio",
      "Three creative treatments per idea, so you can choose a direction before burning generations",
      "Uses film vocabulary (dolly-in, handheld tracking, golden-hour backlight) that video models respond to",
      "Includes sound and dialogue cues — Sora 2 generates audio, and most prompts waste that",
      "Free, no signup; you only spend your own Sora generations on prompts worth running",
    ],
    howToSteps: [
      "Type your idea in plain language — a sentence is enough.",
      "Keep Sora 2 selected as the target model.",
      "Generate and compare the three prompt treatments.",
      "Copy the one closest to your vision and paste it into Sora.",
    ],
    featureOverrides: [
      "Shot-level detail: framing, angle, and camera movement in every prompt",
      "Concrete lighting and palette descriptions instead of vague mood words",
      "Audio and dialogue cues that use Sora 2's synchronized sound",
      "Physics-grounding detail for realistic motion",
      "Three distinct treatments per generation",
      "One-click copy for each prompt",
    ],
    useCases: [
      "Draft video concepts before spending limited Sora generations",
      "Learn the prompt structure that separates cinematic results from slideshow-looking clips",
      "Produce b-roll and social video ideas in consistent visual styles",
      "Explore three moods of one concept before committing",
    ],
    aboutSections: [
      {
        heading: "What Sora 2 Prompts Need That Image Prompts Don't",
        body: "Video prompting adds two dimensions image prompting never had: time and sound. A strong Sora 2 prompt reads like a shot description from a screenplay — who is doing what, where, in what light — plus how the camera behaves across the clip and what you hear. Keyword-soup prompts that work in image tools produce flat, drifting video. The generator writes flowing prose with one clear action beat, because a single well-described moment renders better than three crammed ones.",
      },
      {
        heading: "The Camera Is Half the Prompt",
        body: "The fastest way to make AI video look intentional is to direct the camera explicitly: a slow dolly-in reads as drama, handheld tracking as documentary, a static tripod as observational calm. When a prompt doesn't specify camera behavior, the model improvises — and improvised camera work is where clips wobble into the uncanny. Every prompt this tool writes commits to one camera idea and keeps it consistent with the mood of the shot.",
      },
      {
        heading: "Don't Waste the Audio Track",
        body: "Sora 2 generates synchronized audio — ambience, effects, even short dialogue — but only does something interesting with it when the prompt asks. A line like \"wind hissing over the dunes, a distant bell\" or one quoted sentence of dialogue gives the model an audio target and noticeably lifts realism. The generator folds a sound cue into prompts where it fits, which is a detail most prompt lists still ignore.",
      },
    ],
    proTip:
      "Generate three treatments, run only your favorite, then regenerate variations of that winner by editing the idea text — it's cheaper than iterating inside Sora one render at a time.",
    faqOverrides: [
      {
        question: "How long should a Sora 2 prompt be?",
        answer:
          "Around 60–120 words of flowing description works well: enough to specify shot, subject, light, and sound without contradicting yourself. Longer isn't better — past a point the model starts dropping details, and it's better to decide what matters.",
      },
      {
        question: "Can I ask for dialogue in a Sora prompt?",
        answer:
          "Yes — put the spoken line in quotes and identify the speaker. Keep it to a sentence or two; Sora 2 clips are short, and a single natural line lands better than a paragraph of speech.",
      },
      {
        question: "Why do my Sora videos look like moving slideshows?",
        answer:
          "Usually because the prompt described a scene but not an action or a camera. Add one clear motion beat ('she turns toward the window') and one camera behavior ('slow push-in') — those two fixes transform static-feeling output.",
      },
    ],
  },

  veo: {
    slug: "veo",
    defaultTarget: "veo",
    toolName: "Veo Prompt Generator",
    metaTitle: "Veo Prompt Generator — Free Veo 3 Video Prompts With Audio",
    metaDescription:
      "Free Veo prompt generator. Turn a rough idea into 3 detailed Veo 3 prompts with scene, camera, ambient audio, and dialogue cues — the structure Google's video model rewards.",
    headerTitle: "Veo Prompt Generator",
    headerDescription:
      "Turn a one-line idea into structured Veo 3 prompts — subject, action, scene, camera style, and the audio cues Veo's native sound generation needs.",
    overviewText:
      "This Veo prompt generator writes prompts in the structure Google's Veo 3 model responds to best: subject, action, scene, camera style, and audio. Veo 3's signature feature is native synchronized audio — ambient sound, effects, and spoken dialogue — so every generated prompt includes a sound design cue, and dialogue arrives in quotes the way Veo expects it. Type your idea, get three distinct treatments scoped to Veo's ~8-second clips, and paste the best one into Flow or Gemini.",
    definition:
      "A Veo prompt generator expands a rough concept into the structured format Google's Veo 3 video model works best with: subject + action + scene + camera style + audio cues, scoped to a single short clip.",
    quickAnswer:
      "Describe the clip you want and generate. You get 3 ready-to-paste Veo 3 prompts, each with explicit camera direction and an audio cue — ambience, effects, or quoted dialogue — scoped to fit one 8-second beat.",
    keywords: [
      "veo prompt generator",
      "veo 3 prompts",
      "google veo prompt",
      "veo 3 prompt examples",
      "veo video prompt ideas",
    ],
    keyTakeaways: [
      "Prompts follow Veo's effective structure: subject, action, scene, camera, audio",
      "Audio cues in every prompt — Veo 3 generates synchronized sound and dialogue",
      "Dialogue is written in quotes, the format Veo parses most reliably",
      "Action is scoped to one beat, matching Veo's ~8-second clip length",
      "Three treatments per idea, free and without signup",
    ],
    howToSteps: [
      "Type your idea in plain language.",
      "Keep Veo 3 selected as the target model.",
      "Generate and compare the three structured prompts.",
      "Copy your favorite into Flow, Gemini, or the Veo API.",
    ],
    featureOverrides: [
      "Structured subject–action–scene–camera–audio prompts",
      "Ambient sound and effects cues in every prompt",
      "Quoted dialogue formatting Veo parses reliably",
      "Single-beat action scoped to short clips",
      "Explicit camera direction (aerial, POV, static, tracking)",
      "Three distinct treatments per generation",
    ],
    useCases: [
      "Storyboard short ads and social clips before spending Veo credits",
      "Write dialogue-driven clips that use Veo 3's lip-synced speech",
      "Produce consistent b-roll prompts for a video series",
      "Compare three visual treatments of one script line",
    ],
    aboutSections: [
      {
        heading: "The Structure Veo Actually Rewards",
        body: "Google's own prompting guidance for Veo centers on a repeatable recipe: name the subject, give it one action, set the scene, choose a camera style, and describe the sound. Prompts that follow the recipe generate noticeably more coherent clips than free-form descriptions, because each slot resolves an ambiguity the model would otherwise guess at. This generator fills all five slots every time, so your idea arrives in the shape the model was tuned to read.",
      },
      {
        heading: "Audio Is Veo 3's Differentiator — Prompt For It",
        body: "Veo 3 generates a synchronized soundtrack: room tone, effects timed to the action, and spoken dialogue with matching lip movement. Prompts that ignore audio get generic ambience; prompts that specify it — \"rain on a tin roof, a kettle beginning to whistle\" or a quoted line of speech — get scenes that feel produced. The generator writes an audio cue into every prompt and formats dialogue in quotes, which is the pattern that triggers Veo's speech generation most reliably.",
      },
      {
        heading: "Think in Eight-Second Beats",
        body: "A Veo generation is a short clip, and the most common prompting mistake is scripting thirty seconds of story into it. One beat — one action with a beginning and an end, one camera move, one audio moment — is what fits. For longer pieces, generate consecutive beats as separate prompts that share style words and setting, then cut them together; the generator's consistent structure makes those style words easy to carry across prompts.",
      },
    ],
    proTip:
      "Reuse the exact style and setting phrases across a series of Veo prompts — shared vocabulary between clips is the cheapest way to make separate generations cut together like one production.",
    faqOverrides: [
      {
        question: "How is prompting Veo different from prompting Sora?",
        answer:
          "The fundamentals overlap, but Veo responds especially well to the explicit subject–action–scene–camera–audio structure and to dialogue in quotes, while Sora favors flowing cinematic prose. This tool writes the right shape for whichever target you pick.",
      },
      {
        question: "How do I get characters to speak in Veo 3?",
        answer:
          "Identify the speaker and put the line in quotes — e.g. the barista smiles and says: \"First one's on the house.\" Keep it to a sentence or two per clip so the speech fits the clip length naturally.",
      },
      {
        question: "Where can I use these prompts?",
        answer:
          "Anywhere Veo runs: Flow (Google's AI filmmaking tool), the Gemini app, or the Veo API via AI Studio and Vertex AI. The prompt text is identical across them.",
      },
    ],
  },

  midjourney: {
    slug: "midjourney",
    defaultTarget: "midjourney",
    toolName: "Midjourney Prompt Generator",
    metaTitle: "Midjourney Prompt Generator — Free Detailed MJ Prompts",
    metaDescription:
      "Free Midjourney prompt generator. Turn a rough idea into 3 detailed Midjourney prompts with subject, style, lighting, composition, and --ar/--stylize parameters included.",
    headerTitle: "Midjourney Prompt Generator",
    headerDescription:
      "Turn a rough idea into detailed Midjourney prompts — concrete visual language, lighting, composition, and sensible --parameters included.",
    overviewText:
      "This Midjourney prompt generator converts a plain idea into the comma-separated, visually concrete phrasing Midjourney rewards: subject first, then medium, style, lighting, composition, and palette, finished with sensible parameters like --ar and --stylize. It deliberately avoids the junk words — \"beautiful, 4k, masterpiece, trending\" — that add nothing, and describes what is actually in frame instead. Three prompt variations per idea, each a different aesthetic direction.",
    definition:
      "A Midjourney prompt generator expands a rough concept into Midjourney's preferred format: concrete comma-separated visual phrases covering subject, medium, style, lighting, and composition, plus rendering parameters like --ar and --stylize.",
    quickAnswer:
      "Type your idea and generate. You get 3 detailed Midjourney prompts, each taking a different aesthetic direction and ending with appropriate parameters — copy one into Discord or the web editor and run it.",
    keywords: [
      "midjourney prompt generator",
      "midjourney prompts",
      "midjourney prompt ideas",
      "midjourney v7 prompts",
      "ai image prompt generator",
    ],
    keyTakeaways: [
      "Writes concrete visual phrases — subject, medium, lighting, composition — not vague quality words",
      "Appends sensible --ar and --stylize parameters matched to the concept",
      "Names a medium or aesthetic (35mm photo, gouache, isometric render) to anchor the style",
      "Three different aesthetic directions per idea",
      "Free, no signup — spend your Midjourney fast hours on prompts worth rendering",
    ],
    howToSteps: [
      "Describe your idea in plain words.",
      "Keep Midjourney selected as the target model.",
      "Generate and compare the three aesthetic directions.",
      "Copy a prompt into Midjourney and iterate from the best grid.",
    ],
    featureOverrides: [
      "Comma-separated visual phrasing Midjourney parses well",
      "Concrete lighting descriptions (rim light, overcast softbox, harsh noon)",
      "Medium and aesthetic anchors for consistent style",
      "Composition and framing language in every prompt",
      "Parameters included: aspect ratio and stylize values that fit the concept",
      "No junk quality words that waste prompt attention",
    ],
    useCases: [
      "Generate logo, poster, and thumbnail concepts with intentional art direction",
      "Explore three visual styles of one idea before rendering variations",
      "Learn what concrete prompt language does versus 'beautiful, 8k, masterpiece'",
      "Build a reusable style vocabulary for a consistent brand feed",
    ],
    aboutSections: [
      {
        heading: "Why Concrete Beats 'Beautiful'",
        body: "Midjourney renders what you name, not what you rate. Words like beautiful, stunning, 4k, and masterpiece are so common in its training data that they carry almost no signal — while \"weathered copper lighthouse, horizontal rain, overcast noon light, long exposure\" pins down subject, material, weather, light, and technique in ten words. The generator spends your prompt budget on nameable things: objects, materials, light sources, camera framing, and palette.",
      },
      {
        heading: "Parameters Are Part of the Prompt",
        body: "The flags after the double dashes change the render as much as the words before them. --ar sets aspect ratio (16:9 for thumbnails and scenes, 2:3 for posters and portraits, 1:1 for avatars), and --stylize controls how much of Midjourney's own aesthetic opinion gets applied — low values follow your description literally, high values look prettier but drift. The generator picks values that fit each concept, and they're plain text you can edit before running.",
      },
      {
        heading: "Iterate From the Grid, Not From Scratch",
        body: "A Midjourney prompt's first job is producing one image in the 2×2 grid worth developing — vary, upscale, or remix — rather than a perfect single render. That's why three differently-styled prompts beat one 'ultimate' prompt: you learn which direction has legs in a single round, then push that direction with variations. Treat the generator as the wide first pass and Midjourney's own tools as the zoom.",
      },
    ],
    proTip:
      "If the render ignores part of your prompt, don't repeat the words — move them earlier. Midjourney weights the front of the prompt hardest, so lead with whatever must not be lost.",
    faqOverrides: [
      {
        question: "Do these prompts work with Midjourney v7?",
        answer:
          "Yes — they're written in the descriptive style current versions reward and end with standard parameters that v6 and v7 both accept. You can add version-specific flags like --v 7 yourself if you pin versions explicitly.",
      },
      {
        question: "What does --stylize actually do?",
        answer:
          "It controls how strongly Midjourney applies its house aesthetic. Low values (~50) follow your wording literally and look plainer; the default 100–200 range balances; high values (500+) get more artistic and take more liberties with your description.",
      },
      {
        question: "Can I use these prompts in other image tools?",
        answer:
          "The descriptive body transfers well to most image models — just delete the --parameters, which are Midjourney-specific syntax. For Gemini's image model, use the Nano Banana variant of this tool instead; it writes conversational prompts that suit it better.",
      },
    ],
  },

  "nano-banana": {
    slug: "nano-banana",
    defaultTarget: "nano-banana",
    toolName: "Nano Banana Prompt Generator",
    metaTitle: "Nano Banana Prompt Generator — Gemini Image Prompts Free",
    metaDescription:
      "Free Nano Banana prompt generator. Turn a rough idea into 3 detailed prompts for Gemini's image model — descriptive scenes, precise edit instructions, and character consistency.",
    headerTitle: "Nano Banana Prompt Generator",
    headerDescription:
      "Write prompts the way Gemini's image model likes them — full descriptive sentences, precise edit instructions, and character-consistency phrasing.",
    overviewText:
      "This Nano Banana prompt generator writes prompts for Gemini's image model in the style it responds to best: conversational, specific, full-sentence descriptions — the opposite of Midjourney-style keyword strings. Nano Banana became the default way millions of people edit photos, and its strengths are particular: it follows natural-language instructions precisely, keeps characters consistent across edits, and renders text inside images unusually well. The generator leans into all three, and for edit ideas it states both what should change and what must stay the same — the detail that separates clean edits from mangled ones.",
    definition:
      "A Nano Banana prompt generator expands a rough idea into the conversational, fully-described prompt format Gemini's image generation and editing model responds to best, including explicit keep-unchanged instructions for edits.",
    quickAnswer:
      "Describe what you want made or edited and generate. You get 3 ready-to-paste prompts written as specific natural-language instructions — scene descriptions for generation, change-this-keep-that phrasing for edits.",
    keywords: [
      "nano banana prompt generator",
      "nano banana prompts",
      "gemini image prompt",
      "nano banana prompt ideas",
      "gemini photo editing prompts",
    ],
    keyTakeaways: [
      "Writes full-sentence conversational prompts — the format Gemini's image model parses best",
      "Edit prompts state what changes AND what must stay the same",
      "Uses character-consistency phrasing ('the same person...') the model excels at",
      "Text to render inside images goes in quotes — Nano Banana handles typography well",
      "Three treatments per idea, free, no signup",
    ],
    howToSteps: [
      "Describe what you want to create or how you want a photo edited.",
      "Keep Nano Banana selected as the target model.",
      "Generate and compare the three instruction styles.",
      "Paste your favorite into the Gemini app alongside your photo (for edits).",
    ],
    featureOverrides: [
      "Natural-language instruction style tuned to Gemini's image model",
      "Change-vs-preserve phrasing for photo edits",
      "Character and identity consistency wording",
      "Quoted in-image text for reliable typography",
      "Photography vocabulary: pose, environment, lens feel, lighting",
      "Three distinct treatments per generation",
    ],
    useCases: [
      "Write photo-edit instructions that don't distort faces or backgrounds",
      "Generate consistent character images across a series of prompts",
      "Create product shots and posters with clean rendered text",
      "Turn portrait ideas into detailed scene descriptions",
    ],
    aboutSections: [
      {
        heading: "Why Keyword Prompts Underperform Here",
        body: "Gemini's image model was built for language-first interaction: it reads full sentences with syntax and referents, not weighted keyword lists. \"A 35mm portrait of an elderly fisherman mending a net at dawn, warm side light, shallow depth of field\" outperforms the same content chopped into comma fragments because the model uses the sentence structure to bind attributes to the right objects. The generator writes prose on purpose — it's the native format.",
      },
      {
        heading: "The Edit Prompt Formula: Change X, Preserve Y",
        body: "The most common editing failure is under-specification: ask to \"make the jacket red\" and the model may also repaint lighting, skin tone, or the background, because nothing told it those were off-limits. Effective Nano Banana edit prompts name the change and then pin everything else: \"change the jacket to deep red; keep the face, pose, lighting, and background exactly as they are.\" Every edit-style prompt this tool writes carries that second clause.",
      },
      {
        heading: "Consistency and Typography, Its Two Superpowers",
        body: "Two things set Nano Banana apart from most image models. First, identity consistency: it can carry the same person or character through outfit changes, new scenes, and different poses when the prompt refers to \"the same person\" explicitly. Second, text rendering: it produces legible, correctly-spelled signage and titles far more reliably than diffusion models — put the exact wording in quotes. The generator uses both patterns whenever your idea calls for them.",
      },
    ],
    proTip:
      "For edits, upload the photo and the prompt together, and list what must not change before you describe the change itself — the preserve-list does more work than the edit instruction.",
    faqOverrides: [
      {
        question: "What is Nano Banana exactly?",
        answer:
          "It's the community name (now used by Google too) for Gemini's image generation and editing model. You use it inside the Gemini app or via the API — there's no separate product to install.",
      },
      {
        question: "Do these prompts work for editing my own photos?",
        answer:
          "Yes — that's the model's headline use. Upload your photo in Gemini, paste the edit prompt with it, and the change-this-keep-that phrasing keeps faces, backgrounds, and lighting intact while the requested change lands.",
      },
      {
        question: "Can it put readable text into images?",
        answer:
          "Unusually well, yes. Put the exact wording in quotes — 'a chalkboard sign reading \"Fresh Coffee — 3rd St\"' — and keep it short; a few words render more reliably than a sentence.",
      },
    ],
  },
}
