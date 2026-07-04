import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"
import { GTable } from "@/ui/gtable"

const TextToSpeech = dynamic(
  () => import("@/components/ai/text-to-speech").then((mod) => mod.TextToSpeech),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Kokoro TTS Online",
  description:
    "Run Kokoro-82M text-to-speech in your browser — 28 natural voices, unlimited use, no API key, no signup. The model downloads once and runs locally via WebAssembly/WebGPU.",
  metaTitle: "Kokoro TTS Online — Free In-Browser Kokoro-82M Voices",
  metaDescription:
    "Use Kokoro TTS online with no install and no API key: the Kokoro-82M ONNX model runs in your browser with 28 natural voices. Unlimited, private — your text never leaves your device.",
  path: "/ai-tools/kokoro-tts-online",

  header: {
    title: "Kokoro TTS Online",
    description:
      "Run the Kokoro-82M neural text-to-speech model directly in your browser — 28 voices, unlimited generations, no API key, and your text never leaves your device.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "purple",
  },

  breadcrumbs: [
    { label: "AI Tools", href: "/ai-tools" },
    { label: "Text to Speech", href: "/ai-tools/text-to-speech" },
    { label: "Kokoro TTS Online", href: "/ai-tools/kokoro-tts-online" },
  ],

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "In-browser Kokoro-82M text-to-speech: 28 verified voices from the onnx-community ONNX build, running locally via transformers.js. No API key, no usage limits, no server round-trips.",
    alternateName: [
      "Kokoro TTS",
      "Kokoro 82M online",
      "Kokoro text to speech free",
      "Kokoro AI voice generator",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "Kokoro TTS online means running the open-weight Kokoro-82M neural text-to-speech model in a web browser — the ONNX build executes locally via WebAssembly/WebGPU, so speech generates on your device with no API, no key, and no per-character billing.",
    quickAnswer:
      "Type your text above, pick one of the 28 Kokoro voices, and generate — the Kokoro-82M model downloads to your browser once (~80 MB) and then synthesizes speech locally, unlimited and free. No API key, no character caps, and nothing you type is sent to a server.",
    keyTakeaways: [
      "Real Kokoro-82M — the open-weight model, not a lookalike — via the onnx-community ONNX build",
      "28 verified voices across American/British English accents, male and female",
      "Runs locally in your browser: one-time model download, then unlimited offline-capable generation",
      "No API key, no signup, no character limits, no watermarked audio",
      "Private by architecture — scripts and drafts never leave your device",
    ],
    overview:
      "Kokoro-82M punches far above its size: an 82-million-parameter TTS model that topped human-preference leaderboards against systems hundreds of times larger, with open weights under a permissive license. Most 'Kokoro online' sites wrap it behind their own servers — with queues, character caps, and your text in their logs. This page runs the model IN the browser instead, via the ONNX build and transformers.js: the first generation downloads the model (about 80 MB, cached after that), and everything else happens on your hardware. That architecture is what makes 'unlimited and free' honest — there's no server bill to recoup — and what makes it private: voiceover scripts, unpublished drafts, and internal docs never leave your machine.",

    howToSteps: [
      "Paste or type your text in the generator above.",
      "Pick a voice — 28 Kokoro voices across US/UK accents (the af_/am_/bf_/bm_ prefixes are female/male American/British).",
      "Generate — the first run downloads the model (~80 MB) and takes longest; later runs are much faster.",
      "Play the result or download the audio for your video, app, or project.",
    ],

    aboutTool: (
      <div className="space-y-10">
        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Why Kokoro-82M Matters</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Kokoro-82M's claim to fame is efficiency: at 82M parameters it delivers voice quality
            that blind-preference testing ranked above much larger commercial systems, while being
            small enough to run on consumer hardware — which is exactly what enables this page. The
            weights are open (Apache-licensed), the community maintains an ONNX export
            (onnx-community/Kokoro-82M-v1.0-ONNX — the build this tool loads), and transformers.js
            executes it with WebGPU acceleration where available, WebAssembly elsewhere. The
            practical consequence: TTS that used to mean an API contract now means a browser tab.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">In-Browser Kokoro vs Hosted TTS APIs</h2>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left"></th>
                  <th className="p-3 text-left">Kokoro in-browser (this page)</th>
                  <th className="p-3 text-left">Hosted TTS APIs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">Cost</td><td className="p-3">Free, unlimited</td><td className="p-3">Per character/second, monthly caps</td></tr>
                <tr><td className="p-3 font-semibold">Privacy</td><td className="p-3">Text stays on your device</td><td className="p-3">Text processed (often logged) server-side</td></tr>
                <tr><td className="p-3 font-semibold">Setup</td><td className="p-3">None — open the page</td><td className="p-3">Account, API key, billing</td></tr>
                <tr><td className="p-3 font-semibold">First-use latency</td><td className="p-3">Model download (~80 MB, once)</td><td className="p-3">None</td></tr>
                <tr><td className="p-3 font-semibold">Speed after warm-up</td><td className="p-3">Depends on your hardware (WebGPU helps)</td><td className="p-3">Consistently fast</td></tr>
                <tr><td className="p-3 font-semibold">Voice variety</td><td className="p-3">28 Kokoro voices, English accents</td><td className="p-3">Hundreds of voices, many languages</td></tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            The honest trade: hosted APIs win on language coverage and cold-start speed; local
            Kokoro wins on cost, privacy, and having no meter running. For English voiceover,
            prototyping, and accessibility work, the local model is usually all you need.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Performance Expectations</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            First generation includes the one-time model download and initialization — expect a
            wait, especially on slow connections. After that the model is cached by your browser and
            generation speed depends on your hardware: machines with WebGPU (recent Chrome/Edge on a
            discrete or modern integrated GPU) synthesize a sentence in roughly real time or faster;
            WebAssembly fallback on older hardware is slower but works. Long texts synthesize in
            chunks. If you close the tab, the cached model survives — the next visit skips the
            download.
          </p>
        </article>
      </div>
    ),

    proTip:
      "Generating a long voiceover? Feed it paragraph by paragraph rather than one giant block — you'll catch pronunciation issues early, and re-generating one paragraph beats re-rendering the whole script when you edit a sentence.",

    faqs: [
      {
        question: "Is this the real Kokoro model or an imitation?",
        answer:
          "The real one: the tool loads onnx-community/Kokoro-82M-v1.0-ONNX, the community ONNX export of the open-weight Kokoro-82M model, and runs it with transformers.js in your browser. The 28 voices are Kokoro's own voice embeddings.",
      },
      {
        question: "Why is Kokoro TTS free here — what's the catch?",
        answer:
          "Architecture, not generosity: the model executes on YOUR hardware, so there's no server GPU bill to pass on. The trade-offs are the one-time ~80 MB download and generation speed that depends on your device. No account, no caps, no watermark.",
      },
      {
        question: "Can I use the generated audio commercially?",
        answer:
          "Kokoro-82M's weights are released under the Apache 2.0 license, which permits commercial use of the model and its output. As always, you're responsible for the content of the speech itself (no impersonation or deceptive use).",
      },
      {
        question: "Does it work offline?",
        answer:
          "After the first generation caches the model, synthesis itself runs locally — reload while offline and generation still works in most browsers as long as the cache persists. The initial model download requires a connection.",
      },
      {
        question: "Why was my first generation slow?",
        answer:
          "The first run downloads the ~80 MB ONNX model and initializes the runtime. Subsequent generations skip both steps. Speed after warm-up depends on hardware — WebGPU-capable browsers are dramatically faster than the WebAssembly fallback.",
      },
      {
        question: "What languages does Kokoro support?",
        answer:
          "This build focuses on English, with American and British accent voices (the af/am/bf/bm voice prefixes). For other languages, a hosted multi-language TTS service is currently the better tool — that's the honest limit of the 82M model's voice set here.",
      },
    ],

    relatedTools: [
      { name: "Text to Speech (main tool)", href: "/ai-tools/text-to-speech" },
      { name: "AI Lyrics Generator", href: "/ai-tools/lyrics-generator" },
      { name: "Text Summarizer", href: "/ai-tools/text-summarizer" },
      { name: "AI Readability Analyzer", href: "/ai-tools/ai-readability-analyzer" },
      { name: "All AI Tools", href: "/ai-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function KokoroTtsOnlinePage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<TextToSpeech />)} />
}
