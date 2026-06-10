import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const TextToSpeech = dynamic(
  () => import("@/components/ai/text-to-speech").then((mod) => mod.TextToSpeech),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Text to Speech",
  description:
    "Free AI text-to-speech with natural human-like voices. Powered by Kokoro 82M neural TTS running in your browser. 28 AI voices with American & British accents. Download audio as WAV. Browser voices fallback with 50+ languages. No signup needed.",
  metaTitle: "AI Text to Speech — Natural Voices, WAV Download",
  metaDescription:
    "Free AI text-to-speech with 28 human-like voices. Powered by Kokoro neural TTS in your browser. Download as WAV, adjustable speed, no signup.",
  path: "/ai-tools/text-to-speech",

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "Free AI text-to-speech tool powered by Kokoro 82M neural TTS model running directly in the browser via ONNX WebAssembly. 28 natural human-like English AI voices — 11 American female, 9 American male, 4 British female, 4 British male. Download generated audio as WAV files. Browser voices fallback with 50+ additional languages via Web Speech API. Speed control (0.5x-2x), volume control (0-100%), play/pause/stop. Up to 5,000 characters per session. 100% client-side processing.",
    featureList: [
      "28 AI voices powered by Kokoro 82M neural TTS model",
      "Human-like natural speech quality via deep learning",
      "11 American female + 9 American male + 4 British female + 4 British male voices",
      "American and British accents with distinct named characters",
      "Download generated audio as WAV file",
      "100% browser-based AI inference via ONNX WebAssembly",
      "Browser voices fallback with 50+ additional languages",
      "Adjustable speech speed from 0.5x to 2x",
      "Volume control from 0% to 100%",
      "Play, pause, resume, and stop controls",
      "~92MB AI model downloads once and is cached",
      "Up to 5,000 characters per session",
      "No server processing — audio generated locally in your browser",
    ],
    softwareRequirements: "Modern web browser with WebAssembly support (Chrome, Edge, Safari, Firefox)",
    alternateName: [
      "TTS Generator",
      "Voice Generator",
      "Text Reader",
      "AI Voice Reader",
      "Audio Generator from Text",
      "Natural Voice TTS",
      "Kokoro TTS Online",
      "Neural Text to Speech",
      "Free Voice Over Generator",
      "ElevenLabs Alternative",
      "Murf.ai Alternative",
      "Speechify Alternative",
      "Natural Reader Alternative",
      "AI Narrator Tool",
      "Audiobook Voice Generator",
    ],
  },

  header: {
    title: "Free AI Text to Speech Online",
    description:
      "Convert text to human-like speech with 28 AI voices — American & British accents, male & female. Powered by Kokoro neural TTS in your browser. Download audio as WAV.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "AI Tools", href: "/ai-tools" },
    { label: "Text to Speech", href: "/ai-tools/text-to-speech" },
  ],

  content: {
    definition:
      "An AI text-to-speech (TTS) tool converts written text into natural, human-like spoken audio using a neural network (Kokoro 82M) that runs directly in your browser via WebAssembly — producing speech that sounds like a real person rather than a robotic synthesizer.",

    quickAnswer:
      "Select the AI Voices tab, choose from 28 natural English voices (American & British accents), paste your text (up to 5,000 characters), and click Speak. The AI model generates human-like audio in your browser. Click Download to save as WAV. Switch to Browser Voices for 50+ additional languages via Web Speech API. No signup needed.",

    keyTakeaways: [
      "28 AI voices powered by Kokoro 82M neural TTS — sounds natural and human-like, not robotic",
      "American & British English accents: 11 American female, 9 American male, 4 British female, 4 British male voices",
      "Download generated speech as WAV audio files — perfect for presentations, videos, and podcasts",
      "100% browser-based AI: the 82M parameter model runs locally via ONNX WebAssembly — your text never leaves your device",
      "Browser Voices fallback with 50+ languages for quick previews using the Web Speech API",
      "No signup, no ads, no daily limits — completely free with up to 5,000 characters per session",
    ],

    overview:
      "This tool converts text to natural, human-like speech using Kokoro 82M, an open-source neural TTS model that runs directly in your browser. Unlike traditional browser TTS (Web Speech API) which sounds robotic, Kokoro uses deep learning to generate speech that closely mimics a real human voice — with natural pacing, intonation, and pronunciation. Choose from 28 AI voices with American and British English accents — 11 American female, 9 American male, 4 British female, and 4 British male voices, each with a distinct character and vocal quality. The ~92MB model downloads once and is cached for instant future use. You can download the generated audio as a WAV file for use in videos, presentations, or podcasts. For other languages, switch to the Browser Voices tab for 50+ languages via the Web Speech API.",

    howToSteps: [
      "Select the 'AI Voices (Kokoro)' tab for natural human-like speech, or 'Browser Voices' for quick playback with 50+ languages. The AI model (~92MB) loads automatically on first use and is cached.",
      "Choose a language to filter voices, then pick a specific voice. AI voices include named speakers like Heart, Bella, Adam, Alice — each with distinct characteristics.",
      "Type or paste your text into the input area (up to 5,000 characters). Adjust Speed (0.5x-2x) and Volume (0-100%) using the sliders.",
      "Click 'Speak' to generate and play the audio. For AI voices, the model generates the full audio before playback. Use Pause/Stop to control playback.",
      "Click 'Download' to save the AI-generated audio as a WAV file. Use 'Reset to Defaults' to restore speed and volume to normal settings.",
    ],

    features: [
      "Kokoro 82M Neural TTS: An 82-million parameter AI model that generates human-like speech with natural pacing, emotion, and pronunciation — far beyond robotic browser voices.",
      "28 AI Voices: Named characters including Heart, Bella, Nicole, Nova, Adam, Michael, Alice, Emma, Daniel, George — each with distinct vocal qualities and personality.",
      "8 Languages: English (11 American female + 10 American male + 4 British female + 4 British male voices), Spanish, French, Hindi, Italian, Japanese, Portuguese, and Chinese with native-sounding pronunciation.",
      "WAV Audio Download: Save generated speech as a high-quality WAV file for use in YouTube videos, presentations, podcasts, audiobooks, or any project.",
      "Browser-Based AI: The neural network runs entirely in your browser via ONNX WebAssembly. No server calls, no API keys, no cloud processing — 100% private.",
      "One-Time Model Download: The ~92MB model downloads once and is cached in your browser. Future visits load instantly from cache.",
      "Speed Control: Adjust playback from 0.5x (slow, ideal for language learning) to 2x (fast listening). Default is 1x (~150 words per minute).",
      "Volume Control: Set volume from 0% to 100% independently of your system volume.",
      "Browser Voices Fallback: Switch to the Browser Voices tab for instant playback using your browser's built-in voices across 50+ languages — no model download needed.",
      "Play/Pause/Stop: Full playback controls for both AI and browser voices. Pause mid-speech and resume where you left off.",
      "Voice Info Panel: See each voice's name, gender, accent, and engine type (AI neural vs browser built-in).",
      "Privacy First: Your text is processed locally. AI voices generate audio on your device. Browser offline voices also stay local. Nothing is sent to our servers.",
    ],

    useCases: [
      "Content Creation: Generate natural voiceovers for YouTube videos, TikTok, Instagram Reels, and podcasts without recording yourself. Download as WAV.",
      "Proofreading: Listen to your writing read aloud by an AI voice to catch errors, awkward phrasing, and flow issues invisible when reading silently.",
      "Accessibility: High-quality alternative to screen readers for people with visual impairments, dyslexia, or reading difficulties.",
      "Language Learning: Use Browser Voices to listen to text in 50+ languages for pronunciation practice. Slow to 0.5x for clear listening. AI voices perfect for English accent training (American vs British).",
      "Presentations: Preview how your speech script sounds before delivering it. Download the audio to use as a backup or accessibility aid.",
      "Education: Convert study notes, textbook passages, and lecture summaries to audio for auditory learning reinforcement.",
      "E-Learning: Create narration for online courses, tutorials, and training materials without hiring a voice actor.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How Kokoro AI Text-to-Speech Works</h3>
          <p>
            This tool is powered by Kokoro 82M, an open-source neural text-to-speech model with
            82 million parameters. When you click Speak, the model runs directly in your browser
            via ONNX Runtime (WebAssembly) — no server calls, no API keys, no cloud processing.
            The AI analyzes your text for context, punctuation, and phrasing, then generates a
            waveform that sounds like a real human speaking. This is fundamentally different from
            traditional TTS (like the Web Speech API) which concatenates pre-recorded phoneme
            snippets. Neural TTS produces natural intonation, rhythm, and emotion that sounds
            indistinguishable from a real person in many cases.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">AI Voices vs Browser Voices</h3>
          <p>
            This tool offers two engines. <strong>AI Voices (Kokoro)</strong> use a deep learning
            model to generate human-like speech with natural pacing and emotion — ideal for
            content creation, voiceovers, and any use case where quality matters. The trade-off
            is a one-time ~92MB model download (cached after first use) and slightly longer
            generation time. <strong>Browser Voices</strong> use the Web Speech API built into
            your browser — they&apos;re instant with no download but sound more robotic. Browser
            voices support 50+ languages, making them useful for languages not yet covered by
            Kokoro. Use AI voices for quality, browser voices for speed and language coverage.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Downloading and Using the Audio</h3>
          <p>
            When using AI voices, the generated audio can be downloaded as a WAV file by clicking
            the Download button. WAV is a lossless, uncompressed format supported by every video
            editor, audio editor, and media player. Use the downloaded audio for YouTube videos,
            podcasts, presentations, e-learning courses, audiobooks, or social media content.
            The audio is generated locally in your browser, so there are no licensing restrictions
            — you own the output. Browser voices do not support audio download due to Web Speech
            API limitations.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy and Security</h3>
          <p>
            When using AI voices, the entire text-to-speech pipeline runs in your browser. Your
            text is processed by the Kokoro model locally via WebAssembly — it is never sent to
            our servers or any third party. The generated audio exists only in your browser&apos;s
            memory until you download it. When using browser voices with offline/built-in voices,
            the same privacy applies. Cloud-based browser voices (some Google voices on Chrome)
            may send text to the browser vendor&apos;s speech service. We never see, store, or
            process your text regardless of which engine you choose.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For the most natural-sounding AI speech, use the 'Heart' or 'Bella' voices (American female) — they have the richest intonation. For British accents, try 'Alice' or 'Daniel'. Keep text under 500 words per generation for fastest results. If the AI model takes too long to load on a slow connection, switch to Browser Voices for instant playback, then return to AI voices once the model is cached.",

    faqs: [
      {
        question: "What is AI text-to-speech?",
        answer:
          "AI text-to-speech uses a neural network (deep learning model) to generate human-like speech from written text. Unlike traditional TTS that concatenates pre-recorded sound fragments, AI TTS generates entirely new audio waveforms that capture natural pacing, intonation, and emotion. This tool uses Kokoro 82M, an 82-million parameter model that runs directly in your browser.",
      },
      {
        question: "Is this text-to-speech tool free?",
        answer:
          "Yes, completely free with no limits. There is no signup, no account creation, no ads, and no daily usage caps. Both AI voices and browser voices are free. You can convert up to 5,000 characters per session with unlimited sessions.",
      },
      {
        question: "What AI model powers the voices?",
        answer:
          "The AI voices are powered by Kokoro 82M, an open-source neural TTS model with 82 million parameters, developed by hexgrad and distributed by Hugging Face. It runs in your browser via ONNX Runtime (WebAssembly). The model uses a quantized (q8) format at approximately 92MB, which downloads once and is cached for future visits.",
      },
      {
        question: "What languages are supported?",
        answer:
          "AI voices (Kokoro) currently support English with American and British accents — 28 voices total. Browser voices (fallback) support 50+ languages depending on your browser and OS, including Spanish, French, German, Chinese, Japanese, Korean, Arabic, Hindi, Portuguese, Russian, and many more.",
      },
      {
        question: "Can I download the generated audio?",
        answer:
          "Yes! When using AI voices (Kokoro), click the 'Download' button after generating speech to save the audio as a WAV file. You can use this audio in videos, presentations, podcasts, or any project. Browser voices do not support download due to Web Speech API limitations.",
      },
      {
        question: "Why does the AI model need to download first?",
        answer:
          "The Kokoro AI model is approximately 92MB and needs to download to your browser on first use. This is because the neural network runs entirely on your device (no server processing). After the first download, the model is cached in your browser and loads instantly on future visits — no re-download needed.",
      },
      {
        question: "Is my text private and secure?",
        answer:
          "Yes. When using AI voices, your text is processed entirely in your browser via WebAssembly. It is never sent to our servers or any third party. The generated audio exists only in your browser's memory. When using browser voices, offline voices are also fully private. Some cloud-based browser voices (on Chrome) may send text to Google's speech service.",
      },
      {
        question: "What is the difference between AI voices and browser voices?",
        answer:
          "AI voices (Kokoro) use an 82M parameter neural network to generate human-like speech with natural intonation and emotion — they sound like a real person. Browser voices use the Web Speech API built into your browser — they work instantly with no download but sound more robotic. AI voices currently support English (28 voices, American & British accents); browser voices support 50+ languages.",
      },
      {
        question: "How do I get the best voice quality?",
        answer:
          "Use the AI Voices tab with Kokoro for the best quality. Recommended voices: 'Heart' or 'Bella' (American female) and 'Alice' or 'Daniel' (British) for the most natural sound. Keep text segments under 500 words for fastest generation. Set speed to 1.0x for the most natural pacing.",
      },
      {
        question: "Can I use the audio commercially?",
        answer:
          "Yes. The Kokoro model is released under the Apache-2.0 license, which permits commercial use. The audio you generate is yours to use in YouTube videos, podcasts, ads, e-learning courses, or any commercial project. There are no royalty fees or attribution requirements for the generated audio.",
      },
      {
        question: "Does this work on mobile?",
        answer:
          "Yes, both engines work on mobile browsers. AI voices (Kokoro via WebAssembly) work on modern mobile browsers, though generation may be slower on older devices. Browser voices work on all mobile browsers — iOS Safari uses Apple voices, Android Chrome uses Google voices. Some mobile browsers may require tapping the Speak button due to autoplay restrictions.",
      },
      {
        question: "How is this different from ElevenLabs, Speechify, or TTSMaker?",
        answer:
          "Most competitors process your text on their servers and charge for premium voices. This tool runs the AI model entirely in your browser — your text never leaves your device, there are no usage limits, no subscription fees, and the audio is downloadable as WAV for free. The trade-off is that browser-based AI has fewer voices (54 vs hundreds) and requires a one-time ~92MB model download.",
      },
      {
        question: "Can I use this for language learning?",
        answer:
          "Yes. For English learners, AI voices offer natural American and British pronunciation at adjustable speeds — slow to 0.5x to hear every word clearly. For other languages, switch to the Browser Voices tab which supports 50+ languages including Spanish, French, German, Chinese, Japanese, Korean, Hindi, and more.",
      },
      {
        question: "What audio format is the download?",
        answer:
          "AI-generated audio is downloaded as a WAV file (uncompressed, lossless audio). WAV is universally supported by video editors (Premiere Pro, Final Cut, DaVinci Resolve), audio editors (Audacity, GarageBand), and all media players. You can convert WAV to MP3 or other formats using any free audio converter.",
      },
    ],

    relatedTools: [
      { name: "AI Text Summarizer", href: "/ai-tools/text-summarizer" },
      { name: "AI Paraphraser", href: "/ai-tools/ai-paraphraser" },
      { name: "AI Readability Analyzer", href: "/ai-tools/ai-readability-analyzer" },
      { name: "AI Caption Generator", href: "/ai-tools/caption-generator" },
      { name: "AI Lyrics Generator", href: "/ai-tools/lyrics-generator" },
      { name: "Image to Text (OCR)", href: "/image-tools/image-to-text" },
      { name: "Word Counter", href: "/seo-tools/word-counter" },
      { name: "All AI Tools", href: "/ai-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function TextToSpeechPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<TextToSpeech />)} />
}
