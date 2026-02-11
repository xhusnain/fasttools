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
  toolName: "Text to NATO Alphabet",
  description:
    "Free text to NATO alphabet converter online. NATO alphabet decoder, NATO translator to English. Military alphabet translator. Text to NATO generator. NATO alphabet numbers A-Z. No signup.",
  metaTitle: "Text to NATO Alphabet Converter Online - NATO Decoder & Military Translator Free",
  metaDescription:
    "Free text to NATO alphabet converter online. NATO alphabet decoder, NATO translator to English. Military alphabet translator. Text to NATO generator. NATO alphabet numbers. No signup.",
  path: "/converters/nato-phonetic",
  keywords: [
    "text to nato alphabet converter online",
    "text to nato alphabet online",
    "text to nato alphabet converter",
    "text to nato alphabet generator",
    "nato alphabet decoder",
    "nato translator to english",
    "military alphabet translator",
    "nato phonetic alphabet",
    "nato alphabet numbers",
    "nato alphabet converter",
    "alpha bravo charlie",
    "phonetic alphabet converter",
    "text to nato alphabet",
    "nato to text",
  ],

  header: {
    title: "Text to NATO Alphabet",
    description:
      "Transform text into the NATO phonetic alphabet for oral transmission.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Text to NATO Alphabet", href: "/converters/nato-phonetic" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Free text to NATO alphabet converter online. NATO alphabet decoder, NATO translator to English. Military alphabet translator. NATO alphabet numbers A-Z.",
    alternateName: [
      "Text to NATO Alphabet Converter Online",
      "NATO Alphabet Decoder",
      "NATO Translator to English",
      "Military Alphabet Translator",
      "NATO Phonetic Alphabet Converter",
      "Text to NATO Generator",
      "Alpha Bravo Charlie Converter",
    ],
    featureList: [
      "Text to NATO alphabet converter online",
      "NATO alphabet decoder (NATO to text)",
      "NATO translator to English",
      "Military alphabet translator",
      "NATO alphabet numbers 0-9",
      "NATO code A to Z reference",
      "Quick reference table",
      "100% client-side, no signup",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    overview:
      "Free text to NATO alphabet converter online. Convert text to NATO phonetic alphabet (Alpha, Bravo, Charlie...) and use as a NATO alphabet decoder to translate NATO words back to English. Works as a military alphabet translator and NATO translator to English. Includes NATO alphabet numbers (0-9) and NATO code A to Z. Transform letters and numbers for radio, phone, or noisy environments. No signup required.",

    howToSteps: [
      "Text to NATO: Type or paste your text. The NATO phonetic equivalent appears instantly (e.g. ABC → Alpha Bravo Charlie).",
      "NATO to text: Paste NATO words like Foxtrot Sierra Tango. The decoded text appears below.",
      "Use the reference table to look up any letter or number.",
      "Click Copy to copy the NATO string or decoded text.",
    ],

    features: [
      "Text to NATO: Instant conversion of letters and numbers",
      "NATO to text: Reverse decode from phonetic words",
      "Reference table: Click letters to add them to input",
      "Supports A-Z and 0-9",
      "Copy to clipboard with one click",
      "100% client-side, no data sent to servers",
    ],

    useCases: [
      "Radio communication: Spell call signs and codes clearly (e.g. Alpha Bravo Charlie).",
      "Phone support: Spell names and emails over the phone without confusion.",
      "Military and aviation: Use standardized NATO/ICAO phonetic alphabet.",
      "Learning: Memorize the NATO phonetic alphabet.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          The NATO phonetic alphabet (also ICAO spelling alphabet) assigns a word to each letter and digit so they can be spoken and understood clearly over radio or phone. For example, B and D sound similar—Bravo and Delta remove ambiguity. This tool converts any text to NATO format and back.
        </p>
      </div>
    ),

    proTip:
      "For names or emails, type them in the Text to NATO section. The output (e.g. Juliet Oscar Hector November) can be read aloud over the phone for accurate spelling.",

    faqs: [
      {
        question: "How to write in NATO phonetic alphabet?",
        answer:
          "Use this text to NATO alphabet converter: type your text and the tool outputs the NATO equivalent. For example, 'ABC' becomes 'Alpha Bravo Charlie'. Each letter A-Z and digit 0-9 has a standard NATO word. Copy the result to read aloud over radio or phone.",
      },
      {
        question: "Is Z Zulu or Zebra?",
        answer:
          "In the NATO phonetic alphabet, Z is Zulu—not Zebra. The official NATO/ICAO spelling alphabet uses Zulu for Z. Zebra is used in some informal or older alphabets, but NATO standard is Zulu.",
      },
      {
        question: "Is M mama or Mike?",
        answer:
          "In the NATO phonetic alphabet, M is Mike—not Mama. The NATO/ICAO standard uses Mike for M. Mama is from older or informal alphabets.",
      },
      {
        question: "What is the NATO code A to Z?",
        answer:
          "NATO code A to Z: Alpha, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliet, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu. Numbers 0-9: Zero, One, Two, Three, Four, Five, Six, Seven, Eight, Nine.",
      },
      {
        question: "What is a NATO alphabet decoder?",
        answer:
          "A NATO alphabet decoder converts NATO phonetic words (e.g. Foxtrot Sierra Tango) back to letters (FST). Use the NATO to Text section above: paste NATO words and get the decoded text instantly.",
      },
      {
        question: "What is a NATO translator to English?",
        answer:
          "A NATO translator to English decodes NATO phonetic alphabet words into plain letters. Paste words like Alpha Bravo Charlie in the NATO to Text section to get ABC. This tool works as both text-to-NATO and NATO-to-text (English letters).",
      },
      {
        question: "What is the military alphabet translator?",
        answer:
          "The military alphabet translator (NATO phonetic alphabet) converts text to standardized words for clear radio/phone communication. Use this tool to translate text to military alphabet (e.g. ABC → Alpha Bravo Charlie) or decode military alphabet back to text.",
      },
      {
        question: "What are NATO alphabet numbers?",
        answer:
          "NATO alphabet numbers: 0=Zero, 1=One, 2=Two, 3=Three, 4=Four, 5=Five, 6=Six, 7=Seven, 8=Eight, 9=Nine. This tool converts numbers to NATO words and back.",
      },
      {
        question: "How to use text to NATO alphabet converter online?",
        answer:
          "Type or paste your text in the Text to NATO section. The converter outputs the NATO phonetic equivalent instantly (e.g. 'hello' → Hotel Echo Lima Lima Oscar). Copy the NATO string. For reverse conversion, paste NATO words in the NATO to Text section.",
      },
    ],

    additionalContent: [
      {
        heading: "NATO Alphabet Decoder",
        content:
          "Use the NATO to Text section as a NATO alphabet decoder. Paste NATO phonetic words (e.g. Foxtrot Sierra Tango) and get the decoded letters (FST) instantly. Works as a free NATO translator to English.",
      },
      {
        heading: "Military Alphabet Translator",
        content:
          "This tool is a military alphabet translator. It converts text to the NATO phonetic alphabet (Alpha, Bravo, Charlie...) used by military, aviation, and emergency services. Also decodes military alphabet back to plain text.",
      },
      {
        heading: "NATO Code A to Z",
        content:
          "NATO code A to Z: Alpha, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliet, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu. Numbers: Zero, One, Two, Three, Four, Five, Six, Seven, Eight, Nine.",
      },
      {
        heading: "Text to NATO Alphabet Generator",
        content:
          "This text to NATO alphabet generator converts any text into NATO phonetic words. Type letters, numbers, or words—the generator outputs the standardized NATO format for clear oral transmission over radio, phone, or in noisy environments.",
      },
    ],

    relatedTools: [
      { name: "Text Case Converter", href: "/converters/text-case" },
      { name: "Roman Numeral Converter", href: "/converters/roman-numeral" },
      { name: "Integer Base Converter", href: "/converters/integer-base" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function NatoPhoneticConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <NatoPhoneticConverter />
        </div>
      )}
    />
  )
}
