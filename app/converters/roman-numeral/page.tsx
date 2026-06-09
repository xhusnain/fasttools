import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const RomanNumeralConverter = dynamic(
  () =>
    import("@/components/converters/roman-numeral-converter").then(
      (mod) => mod.RomanNumeralConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Roman Numeral Converter",
  description:
    "Convert numbers to Roman numerals and Roman numerals to numbers instantly. Includes date-to-Roman conversion for birthdays, anniversaries, and tattoo designs. Supports values 1 to 3,999 with full subtractive notation.",
  metaTitle: "Roman Numeral Converter — Numbers, Dates & Years",
  metaDescription:
    "Free Roman numeral converter. Convert numbers 1-3999 to Roman numerals, decode Roman numerals to numbers, and transform dates to Roman format. Perfect for tattoos, design, education, and historical references.",
  path: "/converters/roman-numeral",

  header: {
    title: "Roman Numeral Converter",
    description:
      "Convert any number (1-3,999) to Roman numerals and decode Roman numerals back to Arabic numbers instantly. Includes date-to-Roman numeral conversion for birthdays, anniversaries, wedding dates, and tattoo designs with full subtractive notation support (IV, IX, XL, XC, CD, CM).",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Converters", href: "/converters" },
    { label: "Roman Numeral Converter", href: "/converters/roman-numeral" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Two-way Roman numeral converter for numbers 1-3999, Roman numeral decoding, and date-to-Roman conversion for birthdays, anniversaries, and design projects.",
    alternateName: ["Number to Roman Numeral Converter", "Roman Numeral to Number Converter", "Date to Roman Numeral Converter", "Roman Numeral Calculator"],
    featureList: [
      "Number to Roman numeral conversion (1-3999)",
      "Roman numeral to Arabic number decoding",
      "Date to Roman numeral formatting (month, day, year)",
      "Subtractive notation support (IV, IX, XL, XC, CD, CM)",
      "Input validation for Roman numeral syntax",
      "Quick reference examples and conversion table",
      "Copy-ready output for design and print use",
      "No signup required",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "A Roman Numeral Converter is a free online tool that converts Arabic numbers (1-3,999) to Roman numerals and decodes Roman numeral strings back to standard numbers. It also transforms calendar dates — birthdays, anniversaries, wedding dates — into Roman numeral format using the seven base symbols: I (1), V (5), X (10), L (50), C (100), D (500), and M (1000).",
    quickAnswer:
      "Enter any number from 1 to 3,999 to see its Roman numeral equivalent instantly, or type a Roman numeral string (like MCMXCIV) to decode it to 1994. The date conversion mode transforms full dates into Roman numeral format — perfect for tattoo designs, wedding invitations, anniversary gifts, and historical references. All six subtractive combinations are supported: IV (4), IX (9), XL (40), XC (90), CD (400), and CM (900).",
    keyTakeaways: [
      "Converts any number from 1 to 3,999 into standard Roman numeral notation and decodes Roman numerals back to Arabic numbers",
      "Seven base symbols form all Roman numerals: I (1), V (5), X (10), L (50), C (100), D (500), M (1000)",
      "Full subtractive notation: IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900",
      "Date-to-Roman conversion mode for formatting birthdays, anniversaries, wedding dates, and historical years",
      "Used in clock faces, Super Bowl numbering, movie sequels, book chapters, outlines, and tattoo designs",
    ],
    overview:
      "This Roman numeral converter handles bidirectional conversion between Arabic numbers and Roman numerals for values 1 through 3,999. Enter a number like to get MMXXVI, or type MCMLXXXIV to decode it to 1984. The date conversion mode lets you format complete dates — including month, day, and year — in Roman numeral notation, which is popular for tattoo designs, wedding invitations, graduation announcements, memorial engravings, and decorative typography. The converter validates Roman numeral input to catch invalid patterns like IIII (which should be IV) or out-of-order symbols, ensuring your results follow standard Roman numeral rules used in classical and modern contexts. Whether you are a student learning Roman numerals, a designer creating typographic elements, or someone planning a tattoo with a meaningful date, this tool provides instant, accurate conversions.",

    howToSteps: [
      "Enter any Arabic number from 1 to 3,999 in the number input field to instantly see its Roman numeral equivalent (e.g., becomes MMXXVI).",
      "Type or paste a Roman numeral string (e.g., MCMXCIV) in the Roman numeral input field to decode it to its Arabic number (1994).",
      "Use the date conversion mode to transform a birthday, anniversary, or wedding date into Roman numeral format with separate month, day, and year values.",
      "Copy the Roman numeral output with one click for use in tattoo designs, invitations, engravings, documents, or educational materials.",
    ],

    features: [
      "Bidirectional number-to-Roman and Roman-to-number conversion for values 1 through 3,999",
      "Date-to-Roman numeral formatter for birthdays, anniversaries, wedding dates, and historical years",
      "Input validation that flags invalid Roman numeral patterns and out-of-order symbols",
      "Full subtractive notation support (IV, IX, XL, XC, CD, CM) following standard Roman numeral rules",
      "Quick reference examples showing common conversions and the complete Roman numeral value table",
      "One-click copy to clipboard for design, print, and documentation workflows",
      "Instant browser-based conversion with no server processing or signup required",
    ],

    useCases: [
      "Converting birth years, wedding dates, and anniversary dates to Roman numerals for tattoo designs and body art",
      "Formatting dates in Roman numerals for wedding invitations, graduation announcements, and formal stationery",
      "Educational practice for students learning Roman numeral notation, subtractive rules, and number systems",
      "Creating Roman numeral typography for branding, logo design, clock faces, and decorative print layouts",
      "Verifying Roman numeral values on buildings, monuments, copyright notices, and Super Bowl numbering",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Roman numerals originated in ancient Rome and use combinations of seven Latin letters to represent values: I (1), V (5), X (10), L (50), C (100), D (500), and M (1000). Numbers are formed by combining these symbols additively (XVII = 17) and subtractively (IV = 4, IX = 9). The subtractive principle places a smaller value before a larger one to indicate subtraction, creating six standard combinations: IV (4), IX (9), XL (40), XC (90), CD (400), and CM (900).
        </p>
        <p>
          Standard Roman numeral notation represents values from 1 (I) to 3,999 (MMMCMXCIX). The system has no symbol for zero and traditionally does not exceed 3,999 without extended notation (vinculum). Modern usage of Roman numerals includes clock and watch faces, Super Bowl numbering (e.g., Super Bowl LVIII), movie sequel titles, book chapters and outlines, copyright year notices on film and television, monarch and pope numbering (Queen Elizabeth II, Pope John XXIII), and architectural date inscriptions on buildings and monuments.
        </p>
        <p>
          One of the most popular modern uses of Roman numerals is in tattoo designs, where people convert meaningful dates — birthdays, wedding anniversaries, memorial dates, and significant life events — into Roman numeral format. This converter makes it easy to verify the correct Roman numeral representation before committing to a permanent design. The date conversion mode separates month, day, and year into individual Roman numeral components for flexible formatting in any tattoo layout or design composition.
        </p>
      </div>
    ),

    proTip:
      "When converting dates for tattoos or engravings, double-check each component (month, day, year) individually. A common mistake is writing 4 as IIII instead of IV — while IIII appears on some clock faces (known as the 'watchmaker's four'), standard Roman numeral notation uses IV. For years, is MMXXVI, not MMXXIIIIII.",

    faqs: [
      {
        question: "How do I convert a birthday or date to Roman numerals for a tattoo?",
        answer:
          "Use the date conversion mode to enter your date. The converter transforms the month, day, and year into separate Roman numeral values. For example, July 4, 1776 becomes VII . IV . MDCCLXXVI. You can choose different separator styles (dots, dashes, slashes) for your tattoo design layout. Always verify the output before getting a permanent tattoo.",
      },
      {
        question: "What is the Roman numeral for and other recent years?",
        answer:
          "in Roman numerals is MMXXVI. Other common years: 2024 = MMXXIV, 2025 = MMXXV, 2000 = MM, 1999 = MCMXCIX, 1990 = MCMXC, 1984 = MCMLXXXIV, 1776 = MDCCLXXVI. Enter any year from 1 to 3999 in the converter for an instant result.",
      },
      {
        question: "How does Roman numeral subtractive notation work (IV, IX, XL, XC)?",
        answer:
          "Subtractive notation places a smaller-value symbol before a larger one to indicate subtraction. There are six standard subtractive combinations: IV (4), IX (9), XL (40), XC (90), CD (400), and CM (900). For example, 1994 is written as MCMXCIV: M (1000) + CM (900) + XC (90) + IV (4). This avoids longer additive forms like MDCCCCLXXXXIIII.",
      },
      {
        question: "Can I decode Roman numerals like MCMXCIV back to a regular number?",
        answer:
          "Yes. Enter any valid Roman numeral string in the Roman numeral input field. The converter validates the input, checks for proper symbol ordering and subtractive patterns, and displays the Arabic number equivalent. MCMXCIV decodes to 1994, MMXXVI decodes to 2026, and CDXLIV decodes to 444.",
      },
      {
        question: "What is the largest number that can be written in standard Roman numerals?",
        answer:
          "The largest number in standard Roman numeral notation is 3,999, written as MMMCMXCIX. Since M (1000) is the largest base symbol, you can have at most three M's (3000). Beyond 3,999, extended Roman numeral systems use a vinculum (overline) to multiply by 1,000, but this converter focuses on the standard 1-3,999 range used in the vast majority of practical applications.",
      },
      {
        question: "Why do some clocks show IIII instead of IV for the number 4?",
        answer:
          "The use of IIII instead of IV on clock faces is called the 'watchmaker's four' or 'clockmaker's convention.' Historical theories include visual symmetry with VIII on the opposite side, avoiding confusion with IV (the first two letters of IVPITER/Jupiter in Latin), and easier readability at a glance. Standard Roman numeral notation uses IV for 4, which is what this converter produces.",
      },
      {
        question: "Is this Roman numeral converter free to use?",
        answer:
          "Yes. The converter is completely free with no signup, no account creation, and no usage limits. All conversions run instantly in your browser with no data sent to any server. Use it as many times as needed for tattoo planning, educational work, design projects, or historical reference.",
      },
    ],

    relatedTools: [
      { name: "Integer Base Converter", href: "/converters/integer-base" },
      { name: "Text Case Converter", href: "/converters/text-case" },
      { name: "List Converter", href: "/converters/list-converter" },
      { name: "Text to ASCII Binary", href: "/converters/ascii-binary" },
      { name: "Text to Unicode", href: "/converters/unicode" },
      { name: "Morse Code Translator", href: "/converters/morse-code" },
      { name: "Text to NATO Alphabet", href: "/converters/nato-phonetic" },
      { name: "All Converters", href: "/converters" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function RomanNumeralConverterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<RomanNumeralConverter />)} />
}
