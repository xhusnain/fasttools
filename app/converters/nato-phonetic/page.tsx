import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const NatoPhoneticConverter = dynamic(
  () =>
    import("@/components/converters/nato-phonetic-converter").then(
      (mod) => mod.NatoPhoneticConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "NATO Phonetic Converter",
  description:
    "Convert text to NATO phonetic alphabet words and decode NATO words back to plain text.",
  metaTitle: "NATO Phonetic Alphabet Converter — Text to Alpha Bravo Charlie Free",
  metaDescription:
    "Free NATO phonetic alphabet converter to translate text into Alpha Bravo Charlie format and decode NATO words back to plain text. Supports A-Z letters and 0-9 digits with interactive reference chart — used by military, aviation, and call centers.",
  path: "/converters/nato-phonetic",

  header: {
    title: "NATO Phonetic Alphabet Converter",
    description:
      "Convert any text into NATO phonetic alphabet words (Alpha, Bravo, Charlie, Delta) and decode NATO code words back to plain text. Supports all 26 letters and digits 0-9 with interactive reference grid, one-click copy, and browser-based privacy.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "NATO Phonetic Converter", href: "/converters/nato-phonetic" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Two-way NATO phonetic alphabet converter for text and code words.",
    alternateName: ["Military Alphabet Converter", "Text to NATO Converter"],
    featureList: [
      "Text to NATO conversion",
      "NATO to text decoding",
      "A-Z and 0-9 support",
      "Reference table",
      "No signup",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "A NATO Phonetic Converter is a free tool that converts text into NATO phonetic alphabet words (Alpha, Bravo, Charlie) and decodes NATO words back to plain text.",
    quickAnswer:
      "Type or paste text to instantly see the NATO phonetic spelling. Each letter maps to a standard word (A=Alpha, B=Bravo, C=Charlie). Copy the result for use in phone calls, radio communication, or support tickets.",
    keyTakeaways: [
      "26 standard code words: Alpha through Zulu for A–Z",
      "Adopted by NATO, ICAO, and the ITU for international communication",
      "Reduces miscommunication when spelling over phone or radio",
      "Numbers use standard pronunciation: 0=Zero, 9=Niner",
      "Used by military, aviation, emergency services, and customer support",
    ],
    overview:
      "This free NATO phonetic alphabet converter instantly translates any text into the standardized NATO/ICAO phonetic alphabet code words used by military, aviation, law enforcement, and customer service professionals worldwide. Type a name, serial number, email address, or any alphanumeric string and see it spelled out as Alpha, Bravo, Charlie, Delta, Echo, Foxtrot, and so on. The tool also decodes NATO phonetic words back to plain text. The NATO phonetic alphabet (officially the International Radiotelephony Spelling Alphabet) was adopted by NATO and ICAO in 1956 to eliminate miscommunication when spelling words over radio, telephone, or in noisy environments. Each code word was specifically chosen to be distinct and recognizable across all major languages and accents.",

    howToSteps: [
      "Type or paste any text (names, serial numbers, email addresses, confirmation codes) into the encoder to generate NATO phonetic alphabet output instantly.",
      "To decode NATO words back to text, paste code words like 'Alpha Bravo Charlie' into the decoder panel.",
      "Use the interactive NATO alphabet reference grid to look up individual letters (A=Alpha through Z=Zulu) and digits (0=Zero through 9=Niner).",
      "Copy the converted phonetic spelling with one click for use in phone calls, radio communication, support tickets, or documentation.",
      "Share the phonetic spelling over the phone to ensure accurate transmission of confirmation codes, spelling of names, and alphanumeric identifiers.",
    ],

    features: [
      "Instant text-to-NATO phonetic alphabet conversion with all 26 code words (Alpha through Zulu)",
      "Bidirectional NATO-to-text decoding — paste code words to get plain text back",
      "Full support for letters A-Z and digits 0-9 with standard NATO/ICAO pronunciations",
      "Interactive clickable NATO alphabet reference grid for quick character lookup",
      "One-click copy to clipboard for easy sharing over phone, email, or chat",
      "100% browser-based processing — no data sent to servers, no account required",
    ],

    useCases: [
      "Phone spelling — clearly communicate names, addresses, and confirmation codes over voice calls without miscommunication (B vs D vs P confusion)",
      "Customer support and call centers — spell order IDs, tracking numbers, and email addresses using standardized NATO words for accuracy",
      "Aviation and air traffic control — pilots and controllers use the NATO alphabet for callsigns, waypoints, and runway designations",
      "Military and law enforcement — standard radio communication protocol for spelling identifiers, coordinates, and tactical information",
      "IT and tech support — accurately communicate MAC addresses, serial numbers, license keys, and hexadecimal strings",
      "Emergency services and dispatch — 911 operators and first responders spell addresses and plate numbers using NATO phonetics",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            History of the NATO Phonetic Alphabet
          </h3>
          <p>
            The NATO phonetic alphabet, officially called the International Radiotelephony Spelling Alphabet, was developed by the International Civil Aviation Organization (ICAO) and adopted by NATO in 1956. It replaced earlier alphabets (Able Baker, Affirm) that were problematic for non-English speakers. Each code word was tested across 31 nations to ensure clarity and distinctiveness across different languages, accents, and radio conditions. The alphabet has remained unchanged since 1956, making it one of the longest-standing communication standards in use today.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            The Complete NATO Phonetic Alphabet
          </h3>
          <p>
            The 26 NATO code words are: Alpha, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliet, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu. Digits use standard pronunciation with modifications for clarity: Zero, One, Two, Three, Four (pronounced &quot;FOW-er&quot;), Five (pronounced &quot;FIFE&quot;), Six, Seven, Eight, Nine (pronounced &quot;NIN-er&quot;). The modified digit pronunciations reduce confusion in noisy radio environments.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Why NATO Phonetics Prevent Communication Errors
          </h3>
          <p>
            Letters like B, D, P, T, and V sound nearly identical over phone lines and radio channels. Similarly, M and N, or S and F, are easily confused in noisy environments. The NATO phonetic alphabet eliminates this ambiguity by replacing each letter with a multi-syllable word that sounds completely distinct from all others. This is why &quot;Bravo&quot; replaces &quot;B&quot; and &quot;Delta&quot; replaces &quot;D&quot; — they cannot be confused even with poor audio quality.
          </p>
        </div>
      </div>
    ),

    proTip:
      "When spelling confirmation codes or license keys over the phone, read the NATO phonetic output one word at a time with a slight pause between each. For alphanumeric codes, say 'number' before digits to distinguish them from letters — for example, 'Alpha Bravo number-three Charlie Delta'.",

    faqs: [
      {
        question: "What is the NATO phonetic alphabet and what does each letter stand for?",
        answer:
          "The NATO phonetic alphabet assigns a unique code word to each letter: A=Alpha, B=Bravo, C=Charlie, D=Delta, E=Echo, F=Foxtrot, G=Golf, H=Hotel, I=India, J=Juliet, K=Kilo, L=Lima, M=Mike, N=November, O=Oscar, P=Papa, Q=Quebec, R=Romeo, S=Sierra, T=Tango, U=Uniform, V=Victor, W=Whiskey, X=X-ray, Y=Yankee, Z=Zulu. It was adopted by NATO and ICAO in 1956 for clear radio and telephone communication.",
      },
      {
        question: "How do I convert text to NATO phonetic alphabet (Alpha Bravo Charlie format)?",
        answer:
          "Type or paste any text into the encoder on this page and the tool instantly converts each letter to its NATO phonetic code word. For example, 'HELLO' becomes 'Hotel Echo Lima Lima Oscar'. Numbers are also supported: 0=Zero, 1=One through 9=Niner. Copy the result with one click for use in calls or documentation.",
      },
      {
        question: "Can I decode NATO phonetic words back to regular text?",
        answer:
          "Yes. Paste NATO code words like 'Sierra Oscar Sierra' into the decoder panel and the tool instantly converts them back to plain text ('SOS'). The decoder recognizes all 26 standard NATO code words and the digit pronunciations.",
      },
      {
        question: "Why do call centers and customer support use the NATO phonetic alphabet?",
        answer:
          "Call centers use NATO phonetics because letters like B, D, P, T, and V sound nearly identical over phone lines. By saying 'Bravo' instead of 'B' and 'Delta' instead of 'D', agents eliminate confusion when spelling confirmation codes, email addresses, order IDs, and customer names. This reduces errors, callbacks, and average handle time.",
      },
      {
        question: "Is the NATO phonetic alphabet the same as the military alphabet?",
        answer:
          "Yes. The NATO phonetic alphabet is commonly called the 'military alphabet' in casual usage. It is officially named the International Radiotelephony Spelling Alphabet and is standardized by NATO, ICAO (aviation), ITU (telecommunications), and the IMO (maritime). All branches of the US and allied military forces use this alphabet.",
      },
      {
        question: "How are numbers pronounced in the NATO phonetic system?",
        answer:
          "NATO number pronunciations are designed for radio clarity: 0=Zero, 1=One (WUN), 2=Two (TOO), 3=Three (TREE), 4=Four (FOW-er), 5=Five (FIFE), 6=Six, 7=Seven, 8=Eight (AIT), 9=Nine (NIN-er). The modified pronunciations of 3, 4, 5, and 9 are specifically designed to prevent confusion in noisy communications environments.",
      },
      {
        question: "Is this NATO phonetic alphabet converter free to use?",
        answer:
          "Yes. This NATO phonetic converter is completely free with no signup, no account, and no usage limits. All conversion runs in your browser — no data is sent to any server. Use it as many times as you need for calls, documentation, or learning the NATO alphabet.",
      },
    ],

    relatedTools: [
      { name: "Text Case Converter", href: "/converters/text-case" },
      { name: "ASCII Binary Converter", href: "/converters/ascii-binary" },
      { name: "Unicode Converter", href: "/converters/unicode" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function NatoPhoneticConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="rounded-lg border border-border bg-card p-3 shadow sm:p-4 md:p-5">
          <NatoPhoneticConverter />
        </div>
      )}
    />
  )
}
