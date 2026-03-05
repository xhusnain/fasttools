import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const MorseCodeConverter = dynamic(
  () =>
    import("@/components/converters/morse-code-converter").then(
      (mod) => mod.MorseCodeConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Morse Code Translator",
  description:
    "Free online Morse code translator to convert text to Morse code and decode Morse code to text with audio playback. Supports all letters, numbers, and punctuation.",
  metaTitle:
    "Morse Code Translator - Text to Morse Code Converter (With Audio)",
  metaDescription:
    "Free Morse code translator to convert text to dots and dashes and decode Morse code to English. Audio playback, full alphabet chart, and instant results.",
  path: "/converters/morse-code",
  keywords: [
    "morse code translator",
    "morse code converter",
    "text to morse code",
    "morse code to text",
    "morse code decoder",
    "morse code encoder",
    "morse code alphabet",
    "morse code generator",
    "english to morse code",
    "morse to english",
    "morse code translator with audio",
    "morse code translator with sound",
    "online morse code translator",
    "free morse code translator",
    "morse code chart",
    "SOS morse code",
    "i love you in morse code",
    "hello in morse code",
    "morse code letters",
    "morse code numbers",
    "international morse code",
    "dots and dashes",
    "morse code audio decoder",
    "morse code reference",
    "convert text to morse code online",
    "morse code to text decoder",
    "morse code translator copy paste",
    "morse code audio player",
    "morse code for beginners",
    "learn morse code",
  ],

  header: {
    title: "Morse Code Translator",
    description:
      "Translate text to Morse code dots and dashes, or decode Morse code back to English — with instant audio playback.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Morse Code Translator", href: "/converters/morse-code" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Free online Morse code translator and converter. Encode text to Morse code dots and dashes, decode Morse code to English text, play audio, and copy results. Supports A-Z letters, 0-9 numbers, and punctuation. Used by amateur radio operators, students, educators, escape room designers, and jewelry makers.",
    alternateName: [
      "Morse Code Translator",
      "Morse Code Converter",
      "Text to Morse Code Translator",
      "Morse Code Decoder",
      "Morse Code Encoder",
      "Morse Code Generator",
      "Morse to English Translator",
      "English to Morse Code",
      "Dot Dash Converter",
    ],
    featureList: [
      "Text to Morse code conversion",
      "Morse code to text decoding",
      "A-Z letters, 0-9 numbers, and punctuation support",
      "Audio playback with standard Morse timing",
      "Interactive Morse code alphabet chart",
      "One-click copy to clipboard",
      "Real-time instant conversion",
      "Browser-based — no data sent to servers",
      "Mobile responsive design",
      "No signup or installation required",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "A Morse Code Translator is a free tool that converts plain text into Morse code dots and dashes and decodes Morse code back into readable text.",
    quickAnswer:
      "Type or paste text to instantly see the Morse code equivalent, or enter dots and dashes to decode back to text. Play audio to hear the pattern. Supports all letters, numbers, and common punctuation.",
    keyTakeaways: [
      "Converts text to Morse code and Morse code to text in real time",
      "Audio playback lets you hear the dot-dash pattern at adjustable speed",
      "Supports A–Z, 0–9, and common punctuation marks",
      "Morse code uses only two signals: short (dit) and long (dah)",
      "International Morse Code is standardized by the ITU since 1865",
    ],
    overview:
      "Morse code is a method of encoding text as sequences of dots (short signals, called \"dits\") and dashes (long signals, called \"dahs\"). Invented by Samuel Morse and Alfred Vail in the 1830s for use with the electrical telegraph, it became the foundation of long-distance communication for over a century. This free Morse code translator lets you convert any text into International Morse Code instantly and decode Morse code back to readable English. You can also play the Morse code as audio to hear the dot-and-dash pattern at the standard 600 Hz tone frequency.",

    howToSteps: [
      "Type or paste your text into the encoder to generate Morse code output (dots and dashes) in real time.",
      "To decode Morse code, paste it into the decoder panel — use spaces between letters and a forward slash (/) between words.",
      "Click \"Play Audio\" to hear the Morse code pattern with proper dit-dah timing ratios.",
      "Use the interactive reference chart to look up any letter, number, or punctuation mark.",
      "Copy the converted result to your clipboard with one click.",
    ],

    features: [
      {
        title: "Text to Morse Code Encoding",
        description:
          "Convert any English text into International Morse Code dots and dashes instantly. Supports all 26 letters (A–Z), digits (0–9), and common punctuation.",
      },
      {
        title: "Morse Code to Text Decoding",
        description:
          "Paste Morse code to decode it back to readable English. The decoder handles standard spacing: spaces between letters, slash (/) between words.",
      },
      {
        title: "Audio Playback with Standard Timing",
        description:
          "Hear your Morse code at the standard 600 Hz tone using correct ITU timing ratios — a dit is 1 unit, a dah is 3 units, letter gaps are 3 units, and word gaps are 7 units.",
      },
      {
        title: "Interactive Alphabet Reference Chart",
        description:
          "Browse the full Morse code alphabet, numbers, and punctuation in a clickable grid. Tap any character to add it to your input.",
      },
      {
        title: "Instant Copy to Clipboard",
        description:
          "Copy your encoded Morse code or decoded text with a single click. No manual selection needed.",
      },
      {
        title: "Private and Browser-Based",
        description:
          "All conversion happens locally in your browser. No data is sent to any server, and no account or signup is required.",
      },
    ],

    useCases: [
      {
        title: "Amateur Radio (Ham Radio)",
        description:
          "Practice encoding and decoding CW (continuous wave) messages. The FCC removed Morse code from US ham radio licensing in 2007, but many operators still use it on HF bands.",
      },
      {
        title: "Education and Classroom Activities",
        description:
          "Teach students about communication history, encoding systems, and signal processing. Morse code exercises are popular in STEM, Scouts, and homeschool curricula.",
      },
      {
        title: "Puzzles, Escape Rooms, and Geocaching",
        description:
          "Create or solve Morse code puzzles for escape rooms, treasure hunts, and geocaching challenges.",
      },
      {
        title: "Morse Code Jewelry and Gifts",
        description:
          "Encode names, dates, or messages like \"I love you\" into Morse code for bracelets, necklaces, rings, and personalized gifts.",
      },
      {
        title: "Emergency and Survival Communication",
        description:
          "Morse code can be transmitted using a flashlight, mirror, or tapping — useful in off-grid or emergency scenarios. SOS (... --- ...) has been the international distress signal since 1906.",
      },
      {
        title: "Accessibility and Assistive Technology",
        description:
          "Google added Morse code input to Gboard in 2018, allowing people with motor impairments to type using dots and dashes on Android and iOS devices.",
      },
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Morse code is a character encoding system that represents each letter,
          number, and punctuation mark as a unique sequence of short signals
          (dots, or &quot;dits&quot;) and long signals (dashes, or
          &quot;dahs&quot;). Invented by Samuel F.B. Morse and Alfred Vail in
          the 1830s, it was first demonstrated publicly on January 6, 1838, and
          the first official telegraph message — &quot;What hath God
          wrought&quot; — was sent from Washington, D.C. to Baltimore on May 24,
          1844.
        </p>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            International vs. American Morse Code
          </h3>
          <p>
            The original American Morse Code used variable-length dashes and
            internal spaces within characters. The International Morse Code,
            standardized by the International Telecommunication Union (ITU),
            simplified this to just two signal lengths: dots and dashes. Today,
            &quot;Morse code&quot; almost always refers to the International
            standard.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            How Morse Code Timing Works
          </h3>
          <p>
            Standard Morse code timing follows precise ratios. A dot (dit) is 1
            time unit. A dash (dah) is 3 time units. The gap between symbols
            within a letter is 1 unit. The gap between letters is 3 units. The
            gap between words is 7 units. Speed is measured in words per minute
            (WPM), using the word &quot;PARIS&quot; as the standard reference —
            it contains exactly 50 time units.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Common Morse Code Examples
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">
                    Text
                  </th>
                  <th className="text-left py-2 font-semibold text-foreground">
                    Morse Code
                  </th>
                </tr>
              </thead>
              <tbody className="font-mono">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">SOS</td>
                  <td className="py-2">... --- ...</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">HELLO</td>
                  <td className="py-2">.... . .-.. .-.. ---</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">I LOVE YOU</td>
                  <td className="py-2">
                    .. / .-.. --- ...- . / -.-- --- ..-
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">HELP</td>
                  <td className="py-2">.... . .-.. .--.</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">THANK YOU</td>
                  <td className="py-2">
                    - .... .- -. -.- / -.-- --- ..-
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">YES</td>
                  <td className="py-2">-.-- . ...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Is Morse Code Still Used Today?
          </h3>
          <p>
            Yes. While commercial telegraph services ended decades ago, Morse
            code remains actively used in amateur (ham) radio, aviation
            navigation aids (VOR/NDB beacons still transmit identifiers in Morse
            code), military communication, and accessibility technology. Google
            Gboard supports Morse code input on Android and iOS for users with
            motor impairments. The International Telecommunication Union (ITU)
            continues to recognize Morse code as an official encoding standard.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Learning Morse Code
          </h3>
          <p>
            Two popular methods for learning Morse code are the Koch Method and
            Farnsworth Timing. The Koch Method starts with two characters at full
            speed, adding new characters only after reaching 90% accuracy. The
            Farnsworth Method sends individual characters at full speed but adds
            extra spacing between them, gradually reducing the gaps as
            proficiency improves. Both approaches are more effective than trying
            to memorize a visual chart.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Listen to the audio playback rather than reading dots and dashes visually. Experienced operators recognize Morse code by sound pattern (rhythm), not by counting dots and dashes. This is how the Koch and Farnsworth training methods work — they train your ear, not your eyes.",

    faqs: [
      {
        question: "What is Morse code?",
        answer:
          "Morse code is a character encoding method that represents letters, numbers, and punctuation as sequences of short signals (dots or \"dits\") and long signals (dashes or \"dahs\"). It was invented by Samuel Morse and Alfred Vail in the 1830s for telegraph communication. The International Morse Code standard, maintained by the ITU, is used worldwide today.",
      },
      {
        question: "How do I convert text to Morse code?",
        answer:
          "Type or paste your text into the encoder panel on this page. The tool converts each character to its Morse code equivalent in real time. Letters are separated by spaces and words are separated by a forward slash (/). For example, \"HELLO\" becomes \".... . .-.. .-.. ---\".",
      },
      {
        question: "How do I decode Morse code to text?",
        answer:
          "Paste your Morse code into the decoder panel. Use a single space between letters and a forward slash (/) or \" / \" between words. The tool instantly converts the dots and dashes back to readable English text.",
      },
      {
        question: "What is SOS in Morse code?",
        answer:
          "SOS in Morse code is \"... --- ...\" — three dots, three dashes, three dots. It has been the international distress signal since 1906. SOS was chosen because its Morse pattern is simple, distinctive, and hard to misinterpret, not because it stands for any particular phrase.",
      },
      {
        question: "What is \"I love you\" in Morse code?",
        answer:
          "\"I love you\" in Morse code is: \".. / .-.. --- ...- . / -.-- --- ..-\". This encoding is popular for Morse code jewelry, bracelets, necklaces, and personalized gifts.",
      },
      {
        question: "What characters does the Morse code translator support?",
        answer:
          "This translator supports all 26 English letters (A–Z), all 10 digits (0–9), and common punctuation marks including period (.), comma (,), question mark (?), exclamation mark (!), slash (/), parentheses, colon, semicolon, equals sign, plus, minus, underscore, quotation marks, dollar sign, and at sign (@).",
      },
      {
        question: "How does Morse code audio playback work?",
        answer:
          "The audio playback uses the Web Audio API to generate a 600 Hz sine wave tone. Dots (dits) play for 1 time unit and dashes (dahs) play for 3 time units. Gaps between symbols are 1 unit, between letters are 3 units, and between words are 7 units — following the standard ITU timing ratios.",
      },
      {
        question: "Is Morse code still used today?",
        answer:
          "Yes. Morse code is actively used in amateur (ham) radio, aviation navigation aids (VOR and NDB beacons transmit identifiers in Morse code), military signaling, emergency communication, and accessibility technology. Google added Morse code input to Gboard in 2018 for users with motor impairments. The FCC removed the Morse code requirement from US ham radio licensing in 2007, but many operators still use CW (continuous wave) on HF bands.",
      },
      {
        question:
          "What is the difference between International and American Morse code?",
        answer:
          "American Morse Code (the original system) used variable-length dashes and internal spaces within some characters. International Morse Code, standardized by the ITU, simplified this to just two signal lengths: a dot (1 unit) and a dash (3 units). Today, \"Morse code\" almost always refers to the International standard.",
      },
      {
        question: "How do I learn Morse code?",
        answer:
          "Two proven methods are the Koch Method and Farnsworth Timing. The Koch Method teaches two characters at full speed, adding new characters after reaching 90% accuracy. The Farnsworth Method sends individual characters at full speed with extra spacing between them. Both train your ear to recognize sound patterns rather than memorizing visual charts. Start with the audio playback on this page to hear how each character sounds.",
      },
      {
        question: "How is Morse code speed measured?",
        answer:
          "Morse code speed is measured in words per minute (WPM). The standard reference word is \"PARIS\", which contains exactly 50 time units. So at 20 WPM, each time unit lasts 60 milliseconds. Amateur radio operators typically communicate at 5–40 WPM.",
      },
      {
        question: "Can I use Morse code on my phone?",
        answer:
          "Yes. Google Gboard supports Morse code input on both Android and iOS. You can type using two buttons (dot and dash) as an accessibility input method. This online Morse code translator also works on mobile browsers for encoding and decoding.",
      },
      {
        question: "What does \"Hello\" look like in Morse code?",
        answer:
          "\"Hello\" in Morse code is: \".... . .-.. .-.. ---\". H is four dots, E is one dot, L is dot-dash-dot-dot, and O is three dashes.",
      },
      {
        question: "Is this Morse code translator free?",
        answer:
          "Yes. This Morse code translator is completely free, works in your browser with no installation, and requires no signup or account. All processing happens locally — no data is sent to any server.",
      },
    ],

    relatedTools: [
      { name: "NATO Phonetic Converter", href: "/converters/nato-phonetic" },
      { name: "ASCII Binary Converter", href: "/converters/ascii-binary" },
      { name: "Unicode Converter", href: "/converters/unicode" },
      { name: "Text Case Converter", href: "/converters/text-case" },
      { name: "Roman Numeral Converter", href: "/converters/roman-numeral" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function MorseCodeConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="rounded-lg border border-border bg-card p-3 shadow sm:p-4 md:p-5">
          <MorseCodeConverter />
        </div>
      )}
    />
  )
}
