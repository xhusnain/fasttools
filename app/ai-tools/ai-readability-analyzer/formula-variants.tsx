// Formula-specific landing pages for the Readability Analyzer.
//
// The analyzer already computes Flesch-Kincaid, Gunning Fog, and SMOG (see
// components/ai/ai-readability-analyzer.tsx) — these pages give each formula
// its own exact-phrase slug with the actual math, origin, and interpretation
// table. Zero-code reuse: same tool, formula-specific answer content.

import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"
import { GTable } from "@/ui/gtable"

const AIReadabilityAnalyzer = dynamic(
  () =>
    import("@/components/ai/ai-readability-analyzer").then(
      (mod) => mod.AIReadabilityAnalyzer
    ),
  { loading: () => <ToolLoader /> }
)

interface FormulaVariant {
  slug: string
  name: string
  metaTitle: string
  metaDescription: string
  headerDescription: string
  definition: string
  quickAnswer: string
  overview: string
  keywords: string[]
  keyTakeaways: string[]
  formulaBlock: string
  interpretation: { columns: [string, string]; rows: Array<[string, string]> }
  aboutSections: Array<{ heading: string; body: string }>
  proTip: string
  faqs: Array<{ question: string; answer: string }>
}

export const formulaVariants: Record<string, FormulaVariant> = {
  "flesch-kincaid-calculator": {
    slug: "flesch-kincaid-calculator",
    name: "Flesch-Kincaid Grade Level",
    metaTitle: "Flesch-Kincaid Calculator — Grade Level & Reading Ease",
    metaDescription:
      "Calculate Flesch-Kincaid Grade Level and Flesch Reading Ease for any text: paste it in, get the score, the formula, and what the number means. Free, runs in your browser.",
    headerDescription:
      "Paste your text to get its Flesch-Kincaid Grade Level and Flesch Reading Ease score — with the formula, the interpretation table, and the other major indexes computed alongside.",
    definition:
      "The Flesch-Kincaid Grade Level converts a text's average sentence length and average syllables per word into a US school grade: FKGL = 0.39 × (words ÷ sentences) + 11.8 × (syllables ÷ words) − 15.59. A score of 8 means an eighth-grader can read it.",
    quickAnswer:
      "Paste your text above to get its Flesch-Kincaid Grade Level — 0.39 × (average words per sentence) + 11.8 × (average syllables per word) − 15.59, expressed as a US school grade. Aim for grade 7–9 for general audiences; most popular web writing sits there. The analyzer also computes Flesch Reading Ease, Gunning Fog, and SMOG on the same pass.",
    overview:
      "Flesch-Kincaid is the readability score everyone has met, knowingly or not — it's built into Microsoft Word, mandated in US military documentation (the formula was recalibrated for the Navy in 1975), and referenced in insurance-policy readability laws in several US states. It has two variants that get conflated: the Grade Level (this page's headline number — a US school grade, lower = easier) and Reading Ease (0–100 scale, higher = easier). This analyzer computes both locally in your browser, alongside the other major indexes, and the sections below cover the formulas, the interpretation ranges, and the known failure modes.",
    keywords: [
      "flesch kincaid calculator",
      "flesch kincaid grade level calculator",
      "flesch reading ease calculator",
      "readability grade level checker",
      "flesch score checker",
    ],
    keyTakeaways: [
      "FKGL = 0.39 × (words/sentences) + 11.8 × (syllables/words) − 15.59 → a US school grade",
      "Reading Ease = 206.835 − 1.015 × (words/sentences) − 84.6 × (syllables/words) → 0–100, higher = easier",
      "Grade 7–9 is the sweet spot for general audiences; grade 12+ loses most readers",
      "The two levers are sentence length and word length — nothing else moves the score",
      "Built into MS Word; required in US Navy documentation and some state insurance law",
    ],
    formulaBlock: `Grade Level  = 0.39 × (total words ÷ total sentences)
             + 11.8 × (total syllables ÷ total words)
             − 15.59

Reading Ease = 206.835
             − 1.015 × (total words ÷ total sentences)
             − 84.6  × (total syllables ÷ total words)`,
    interpretation: {
      columns: ["Grade Level score", "Meaning"],
      rows: [
        ["≤ 5", "Very easy — children's books, simple instructions"],
        ["6–7", "Easy — mass-market fiction, most social media"],
        ["8–9", "Plain English — the target for web copy and journalism"],
        ["10–12", "Fairly difficult — quality newspapers, business docs"],
        ["13–16", "Difficult — academic writing, legal summaries"],
        ["17+", "Very difficult — dense academic and legal text"],
      ],
    },
    aboutSections: [
      {
        heading: "Grade Level vs Reading Ease — Which Flesch Is Which",
        body: "Rudolf Flesch published Reading Ease in 1948: a 0–100 scale where Wall Street Journal prose lands around 50 and comics near 90. In 1975, J. Peter Kincaid recalibrated it for the US Navy into a grade-level output — the Flesch-Kincaid Grade Level — because 'grade 9' is more actionable for training manuals than '54 out of 100'. Both use the same two inputs (sentence length, syllables per word) with different weights, so they nearly always agree directionally. Report Grade Level to editors and Ease to anyone comparing against Word's stats, and don't mix the scales: an 8 is a good grade level and a terrible ease score.",
      },
      {
        heading: "What the Score Misses",
        body: "Flesch-Kincaid counts syllables and sentence lengths — it cannot see logic, jargon familiarity, or structure. 'Myocardial infarction occurred' scores easier than it reads (few words, and syllable counting underrates medical opacity), while a crisp bulleted list can score 'hard' because each bullet parses as a long sentence without terminal punctuation. Treat the score as a smoke detector, not a judge: a grade-14 draft aimed at general readers almost certainly needs shorter sentences and plainer words, but a grade-8 score doesn't prove the text is clear. The analyzer's sentence-level highlights show you WHERE the length problems are, which is the actionable part.",
      },
    ],
    proTip:
      "To drop a grade level fast, hunt sentences over 25 words and split them — sentence length has the bigger practical lever since cutting syllables usually means changing vocabulary, while splitting sentences just means adding periods.",
    faqs: [
      {
        question: "What is a good Flesch-Kincaid score?",
        answer:
          "For general audiences: Grade Level 7–9, or Reading Ease 60–70. News wire copy targets about grade 8. Technical audiences tolerate 10–12. If you're writing for the public and scoring 13+, shorten sentences first — it's the fastest fix.",
      },
      {
        question: "Is this the same score Microsoft Word shows?",
        answer:
          "Same formulas (Word reports both Flesch Reading Ease and Flesch-Kincaid Grade Level). Small differences can appear because syllable counting and sentence detection are heuristic — different tools split hyphenated words, abbreviations, and bullet lists slightly differently. Scores typically agree within about half a grade.",
      },
      {
        question: "What grade level should website content be?",
        answer:
          "Most guidance converges on grade 7–9 for general web content — that's where major news sites and top-performing marketing copy sit. US government plain-language guidelines push public-facing material toward grade 8 or below; health communication often targets grade 6.",
      },
      {
        question: "Does a lower grade level mean dumbed-down writing?",
        answer:
          "No — it means shorter sentences and more common words, which expert readers also read faster. Hemingway novels score around grade 4–6. The skill isn't simplifying ideas; it's not making the reader do syntactic work that adds nothing.",
      },
    ],
  },

  "gunning-fog-index-calculator": {
    slug: "gunning-fog-index-calculator",
    name: "Gunning Fog Index",
    metaTitle: "Gunning Fog Index Calculator — Score Any Text Instantly",
    metaDescription:
      "Calculate the Gunning Fog Index: 0.4 × (avg sentence length + % complex words). Paste your text for the score, the formula, and the fix list. Free, in-browser.",
    headerDescription:
      "Paste your text to get its Gunning Fog Index — the years of schooling needed to follow it on first reading — plus the complex-word percentage driving it.",
    definition:
      "The Gunning Fog Index estimates the years of formal education a reader needs to understand a text on first reading: Fog = 0.4 × [(words ÷ sentences) + 100 × (complex words ÷ words)], where complex words have three or more syllables.",
    quickAnswer:
      "Paste your text above for its Gunning Fog Index: 0.4 × (average sentence length + percentage of complex words), where 'complex' means three or more syllables. A Fog score of 12 needs a US high-school senior; universal-audience writing targets 8 or below. The analyzer computes it alongside Flesch-Kincaid and SMOG in one pass.",
    overview:
      "Robert Gunning was a newspaper consultant who, in 1952, gave editors a number for what they already knew: long sentences stuffed with long words lose readers — 'fog'. His index is the bluntest of the classic formulas and the one most sensitive to polysyllabic jargon, because complex words are half of the entire score. That makes it the right lens for business, legal, and marketing copy, where three-syllable habit words ('utilize', 'implement', 'functionality') do most of the damage. The analyzer counts them for you; the sections below explain the counting rules and how to actually lower the score.",
    keywords: [
      "gunning fog index calculator",
      "fog index calculator",
      "gunning fog score",
      "fog readability test",
      "complex words checker",
    ],
    keyTakeaways: [
      "Fog = 0.4 × [(words ÷ sentences) + 100 × (complex words ÷ words)]",
      "Complex = 3+ syllables, excluding proper nouns, familiar compounds, and -es/-ed inflections",
      "Fog 8 ≈ universal readability; 12 ≈ high-school senior; 17+ ≈ graduate text",
      "The index doubles down on jargon: complex-word percentage is half the score",
      "Newspaper origin — Gunning sold 'fog cutting' to publishers starting in 1952",
    ],
    formulaBlock: `Fog Index = 0.4 × [ (total words ÷ total sentences)
                  + 100 × (complex words ÷ total words) ]

complex word = 3+ syllables,
  excluding: proper nouns, familiar compound words,
             and words reaching 3 syllables only via -es / -ed`,
    interpretation: {
      columns: ["Fog score", "Reading level required"],
      rows: [
        ["6", "Sixth grade — universally readable"],
        ["8", "Eighth grade — the target for mass-audience copy"],
        ["10–12", "High school — business writing ceiling"],
        ["13–16", "College — trade and professional press"],
        ["17+", "Graduate — academic papers, dense legal prose"],
      ],
    },
    aboutSections: [
      {
        heading: "The Counting Rules People Get Wrong",
        body: "The formula is trivial; the complex-word definition isn't. Gunning excluded three categories from the 3+-syllable count: proper nouns ('Barcelona' doesn't fog a sentence), familiar compounds built from short words ('bookkeeper'), and words that only reach three syllables through -es or -ed endings ('created' counts two morphemes of substance, not three of difficulty). Automated tools — this one included — apply these exclusions heuristically, so hand counts and tool counts can differ by a point on short samples. On texts of a few hundred words the differences wash out.",
      },
      {
        heading: "Fog vs Flesch-Kincaid: When the Scores Disagree",
        body: "Both indexes use sentence length, but they measure word difficulty differently — Flesch-Kincaid averages syllables over ALL words, while Fog counts only the share of 3+-syllable words. So text with uniformly medium words (many two-syllable words) reads as harder on Flesch-Kincaid, while text that's mostly plain but studded with polysyllabic jargon spikes on Fog. That's diagnostic: if your Fog is high but FK moderate, you have a jargon problem, not a sentence-length problem — replace the long words. If both are high, split sentences first.",
      },
    ],
    proTip:
      "Do a 'utilize sweep': search your draft for utilize→use, implement→do/build, functionality→features, approximately→about, additional→more. Five swaps in a 300-word passage can move the Fog index two points because the complex-word share is half the formula.",
    faqs: [
      {
        question: "What is a good Gunning Fog score?",
        answer:
          "8 or below for mass-audience material (Gunning's own 'universal readability' bar), 10–12 acceptable for business and professional writing. Above 12 you're excluding readers who didn't finish high school — and slowing everyone else.",
      },
      {
        question: "What counts as a complex word in the Fog index?",
        answer:
          "A word of three or more syllables — excluding proper nouns, familiar compound words, and words pushed to three syllables only by -es or -ed endings. 'Population' counts; 'Pittsburgh' and 'stopped' don't.",
      },
      {
        question: "Why is my Fog score much higher than my Flesch-Kincaid grade?",
        answer:
          "Jargon. Fog weighs the percentage of 3+-syllable words at half the total score, so a plain-sentenced text sprinkled with polysyllabic terminology spikes Fog specifically. The fix is vocabulary substitution, not sentence splitting.",
      },
      {
        question: "Who uses the Gunning Fog index?",
        answer:
          "Its home turf is journalism and corporate communication — it was built for newspaper publishers and remains common in PR, legal-plain-language, and financial-disclosure review, where polysyllabic boilerplate is the characteristic disease.",
      },
    ],
  },

  "smog-index-calculator": {
    slug: "smog-index-calculator",
    name: "SMOG Index",
    metaTitle: "SMOG Index Calculator — The Health-Literacy Readability Test",
    metaDescription:
      "Calculate the SMOG index: 1.043 × √(polysyllables × 30 ÷ sentences) + 3.129. The standard for health materials. Paste text, get the grade — free, in-browser.",
    headerDescription:
      "Paste your text to get its SMOG grade — the readability formula healthcare uses, built to predict full comprehension rather than partial understanding.",
    definition:
      "The SMOG index (Simple Measure of Gobbledygook, McLaughlin 1969) estimates the US grade level needed for full comprehension of a text: SMOG = 1.0430 × √(polysyllable count × 30 ÷ sentence count) + 3.1291, counting words of three or more syllables.",
    quickAnswer:
      "Paste your text above for its SMOG grade: 1.043 × √(polysyllabic words × 30 ÷ sentences) + 3.129. SMOG predicts the grade needed for FULL comprehension — which is why it reads 1–2 grades harder than Flesch-Kincaid on the same text, and why healthcare uses it: for medication instructions, 'mostly understood' isn't good enough.",
    overview:
      "G. Harry McLaughlin named his 1969 formula as a joke on the gobbledygook it measures, but SMOG became the serious standard in one field: health communication. The reason is its validation target — where other formulas were calibrated against partial-comprehension tests, SMOG was calibrated against 100% comprehension, so its grades run deliberately conservative. Patient-education guidelines (including CDC recommendations) commonly require SMOG scoring, usually with a grade 6–8 ceiling. The analyzer computes it exactly, alongside the other indexes, and the sections below cover the 30-sentence validity rule and why SMOG disagrees with Flesch-Kincaid by design.",
    keywords: [
      "smog index calculator",
      "smog readability calculator",
      "smog grade calculator",
      "health literacy readability test",
      "smog formula",
    ],
    keyTakeaways: [
      "SMOG = 1.0430 × √(polysyllables × 30 ÷ sentences) + 3.1291",
      "Calibrated for FULL comprehension — scores run 1–2 grades above Flesch-Kincaid by design",
      "The standard in healthcare; patient materials typically target SMOG grade 6–8",
      "Statistically valid on 30+ sentences — short samples inflate the error bars",
      "Only counts polysyllabic words (3+ syllables) — sentence length enters via the ratio",
    ],
    formulaBlock: `SMOG grade = 1.0430 × √( polysyllable count × 30 ÷ sentence count )
             + 3.1291

polysyllable = any word of 3+ syllables
validity: designed for samples of ≥ 30 sentences
(McLaughlin's manual method: 10 sentences from the start,
 middle, and end of the document)`,
    interpretation: {
      columns: ["SMOG grade", "Suitable for"],
      rows: [
        ["≤ 6", "Universal health materials — the patient-education gold standard"],
        ["7–8", "General public — the usual ceiling for consumer health content"],
        ["9–12", "High-school reading — general web content, not patient-facing"],
        ["13–16", "College — professional and technical documentation"],
        ["17+", "Graduate — journal-level prose"],
      ],
    },
    aboutSections: [
      {
        heading: "Why Healthcare Standardized on SMOG",
        body: "The difference is the pass bar. Formulas like Flesch-Kincaid and Fog were validated against ~50–75% comprehension criteria — fine for estimating whether readers 'get the gist'. McLaughlin validated SMOG against complete comprehension, on the argument that for some texts the gist isn't enough. Health communication is exactly that case: a patient who mostly understands a dosage instruction is a safety incident waiting to happen. Studies of patient-education materials consistently find them written 2–4 grades above recommended levels, which is why CDC and health-literacy guidelines specify SMOG for assessment — it refuses to flatter borderline material.",
      },
      {
        heading: "The 30-Sentence Rule",
        body: "The ×30 inside the formula isn't magic — it normalizes the polysyllable count to a 30-sentence sample, because that's what McLaughlin validated on (he counted 10 consecutive sentences from the beginning, middle, and end of a document). Run SMOG on a 5-sentence paragraph and the arithmetic still produces a number, but the confidence interval balloons — one jargon word in a short sample swings the grade visibly. Use SMOG on full documents or multi-paragraph samples; for single paragraphs, treat the score as a rough signal and lean on the analyzer's per-sentence highlighting instead.",
      },
    ],
    proTip:
      "Writing patient-facing material? Score with SMOG, not Flesch-Kincaid — an FK grade 8 piece is typically SMOG 9–10, and health-literacy guidance means the SMOG number. Getting it to SMOG 8 usually comes down to replacing every 3+-syllable word that has a shorter everyday synonym.",
    faqs: [
      {
        question: "Why is my SMOG score higher than my Flesch-Kincaid grade?",
        answer:
          "By design. SMOG was calibrated against 100% comprehension, versus partial-comprehension criteria for other formulas — so it consistently reads 1–2 grades higher on identical text. Neither is wrong; they answer different questions ('can readers follow it?' vs 'will readers fully understand it?').",
      },
      {
        question: "What SMOG grade should patient materials target?",
        answer:
          "Grade 6–8 is the widely cited range for consumer health content, with 6 as the gold standard for universal materials. Most published patient-education content scores well above this, which is exactly the problem SMOG scoring is meant to catch.",
      },
      {
        question: "Is SMOG accurate on short texts?",
        answer:
          "The formula is designed for 30+ sentence samples; on shorter texts the score still computes but with wide error bars — a single polysyllabic word can move a short sample noticeably. For paragraphs, treat it as directional and confirm on the full document.",
      },
      {
        question: "What does SMOG stand for?",
        answer:
          "Simple Measure of Gobbledygook — McLaughlin's deliberate nod to fog-index tradition and to the smog of unreadable prose it measures. The whimsical name predates its adoption as healthcare's most conservative readability standard.",
      },
    ],
  },
}

export function getFormulaVariantMetadata(slug: string): Metadata {
  const v = formulaVariants[slug]
  if (!v) return {}
  return {
    title: v.metaTitle,
    description: v.metaDescription,
    keywords: v.keywords,
    alternates: { canonical: `/ai-tools/${slug}` },
  }
}

export function renderFormulaVariantPage(slug: string) {
  const v = formulaVariants[slug]

  const siblingLinks = Object.values(formulaVariants)
    .filter((item) => item.slug !== slug)
    .map((item) => ({ name: `${item.name} Calculator`, href: `/ai-tools/${item.slug}` }))

  const toolConfig = createToolConfig({
    toolName: `${v.name} Calculator`,
    description: v.metaDescription,
    metaTitle: v.metaTitle,
    metaDescription: v.metaDescription,
    path: `/ai-tools/${slug}`,

    schemaOptions: {
      applicationCategory: "UtilitiesApplication",
      description: v.definition,
      alternateName: v.keywords,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },

    header: {
      title: `${v.name} Calculator`,
      description: v.headerDescription,
      titleSize: "medium",
      descriptionSize: "small",
      color: "purple",
    },

    breadcrumbs: [
      { label: "AI Tools", href: "/ai-tools" },
      { label: "Readability Analyzer", href: "/ai-tools/ai-readability-analyzer" },
      { label: v.name, href: `/ai-tools/${slug}` },
    ],

    content: {
      definition: v.definition,
      quickAnswer: v.quickAnswer,
      keyTakeaways: v.keyTakeaways,
      overview: v.overview,

      howToSteps: [
        "Paste your text into the analyzer above (a few hundred words gives stable scores).",
        `Read the ${v.name} result — the other major indexes are computed on the same pass for comparison.`,
        "Use the interpretation table below to translate the number into an audience.",
        "Revise using the per-sentence highlights, then re-paste to confirm the score moved.",
      ],

      aboutTool: (
        <div className="space-y-10">
          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">The {v.name} Formula</h2>
            <div className="p-4 rounded-lg bg-muted/40 border border-border font-mono text-sm leading-relaxed whitespace-pre overflow-x-auto">
              {v.formulaBlock}
            </div>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Interpreting the Score</h2>
            <div className="overflow-x-auto">
              <GTable>
                <thead className="bg-muted text-foreground font-semibold">
                  <tr>
                    <th className="p-3 text-left">{v.interpretation.columns[0]}</th>
                    <th className="p-3 text-left">{v.interpretation.columns[1]}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-sm">
                  {v.interpretation.rows.map((row) => (
                    <tr key={row[0]}>
                      <td className="p-3 font-semibold">{row[0]}</td>
                      <td className="p-3">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </GTable>
            </div>
          </article>

          {v.aboutSections.map((section) => (
            <article key={section.heading} className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">{section.heading}</h2>
              <p className="text-base text-muted-foreground leading-relaxed">{section.body}</p>
            </article>
          ))}
        </div>
      ),

      proTip: v.proTip,

      faqs: [
        ...v.faqs,
        {
          question: "Is my text uploaded anywhere?",
          answer:
            "No — the analysis runs entirely in your browser. Nothing you paste is sent to a server, stored, or logged, which makes the tool safe for unpublished drafts and confidential documents.",
        },
      ],

      relatedTools: [
        { name: "Readability Analyzer (all indexes)", href: "/ai-tools/ai-readability-analyzer" },
        ...siblingLinks,
        { name: "Word Counter", href: "/seo-tools/word-counter" },
        { name: "Text Summarizer", href: "/ai-tools/text-summarizer" },
        { name: "All AI Tools", href: "/ai-tools" },
      ],
    },
  })

  return <ToolPageLayout {...toolConfig.getLayoutProps(<AIReadabilityAnalyzer />)} />
}
