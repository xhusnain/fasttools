import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { createMetadata } from "@/lib/metadata-base"
import {
  Activity, Heart, Brain, Dumbbell, Moon, Apple, Clock,
  CheckCircle, AlertTriangle, Lightbulb, TrendingDown, Shield, Users
} from "lucide-react"

const BiologicalAgeCalculator = dynamic(
  () => import("@/components/calculators/biological-age-calculator").then(mod => mod.BiologicalAgeCalculator),
  { loading: () => <ToolLoader /> }
)

const TOOL_TITLE = "Biological Age Calculator — Free Body Age Test Online"
const TOOL_NAME = "Biological Age Calculator"

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: "How old is your body really? Free biological age test based on heart rate, sleep, exercise, diet, stress & BMI. Get your real age score with personalised recommendations.",
  path: "/calculator/biological-age-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: TOOL_NAME, href: "/calculator/biological-age-calculator" }
  ],
  schemaOptions: {
    name: "Biological Age Calculator | Real Body Age Test & Longevity Estimator",
    alternateName: "Real Age Calculator, Body Age Calculator, Biological Age Test, How Old Is My Body Calculator, Longevity Calculator",
    applicationCategory: "HealthApplication",
    featureList: [
      "Estimate biological age from 9 lifestyle factors",
      "Resting heart rate, BMI, sleep, exercise, stress, diet, smoking, alcohol, social health",
      "Age rating from Exceptional to Concerning",
      "Category-by-category score breakdown with age impact",
      "Top strengths and risk areas identification",
      "Personalised recommendations with priority and year impact",
      "Longevity estimate vs national average",
      "Overall health score percentile",
      "Copy results to clipboard",
      "Free to use with no signup required"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Calculator",
}

export default function BiologicalAgeCalculatorPage() {
  const toolContent = {
    toolName: "Biological Age Calculator — Discover Your True Body Age",
    overview: "Estimate your biological age based on 9 evidence-based factors: resting heart rate, BMI, sleep quality, exercise, stress, diet, smoking, alcohol, and social connection. Get a personalised breakdown showing which factors are aging you faster — and specific recommendations to reverse them.",

    definition: "Biological age is a measure of how well your body is functioning compared to the average person of your chronological age. Unlike chronological age (years since birth), biological age reflects your actual cellular health, organ function, and disease risk — influenced by lifestyle, genetics, and environment.",

    quickAnswer: "A 40-year-old with a resting heart rate of 58, BMI of 22, excellent sleep, daily exercise, low stress, and no smoking might have a biological age of 32-34. The same 40-year-old who smokes, sleeps poorly, and is sedentary might have a biological age of 48-52. This calculator estimates your biological age from 9 key lifestyle factors.",

    keyTakeaways: [
      "Biological age can differ from chronological age by 10-15+ years depending on lifestyle factors",
      "Resting heart rate is the single strongest predictor of cardiovascular biological age — elite athletes have RHR of 40-55 bpm",
      "Smoking is the largest single accelerator of biological aging, adding 4-10 years to biological age",
      "Social isolation has the same mortality impact as smoking 15 cigarettes per day (Holt-Lunstad meta-analysis)",
      "Sleep quality matters more than sleep quantity — 7 hours of deep sleep beats 9 hours of fragmented sleep"
    ],

    howToSteps: [
      "Enter your chronological age, resting heart rate (measure in the morning before getting up), and BMI.",
      "Rate your sleep hours and quality, exercise frequency, stress level, and diet quality.",
      "Select your smoking status, alcohol intake, and social connection level.",
      "Click Calculate to see your biological age, category scores, strengths, risks, and personalised recommendations."
    ],

    features: [
      "9-Factor Analysis: Cardiovascular, body composition, sleep, exercise, stress, nutrition, smoking, alcohol, and social health.",
      "Biological Age Estimate: Single number that tells you how old your body really is compared to your birth age.",
      "Category Breakdown: Score each factor 0-10 with visual bars showing strengths and weaknesses.",
      "Age Impact Per Factor: See exactly how many years each factor is adding or subtracting.",
      "Personalised Recommendations: Prioritised actions with estimated age reduction (e.g., 'Quit smoking: -4 to -8 years').",
      "Health Score Percentile: Overall percentage score compared to optimal health.",
      "Longevity Estimate: Estimated life expectancy compared to the national average.",
      "Shareable Results: Copy your biological age results to share or save."
    ],

    useCases: [
      "Health Check-In: Get a quick snapshot of your overall health status without blood tests.",
      "Motivation: Seeing a biological age 5+ years younger than your real age is powerful motivation to keep going.",
      "Wake-Up Call: A biological age significantly older than your real age highlights which habits need urgent attention.",
      "Goal Setting: Use the category breakdown to set specific, measurable health goals.",
      "Progress Tracking: Retake the calculator quarterly to track improvements from lifestyle changes.",
      "Biohacking Baseline: Establish your starting point before implementing longevity protocols.",
      "Health Education: Understand which factors have the biggest impact on aging."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Activity className="h-6 w-6 text-primary" />
            What is Biological Age?
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              Your <strong>chronological age</strong> counts years since birth. Your <strong>biological age</strong> measures how well your body is actually functioning — it reflects cellular health, organ performance, and disease risk based on lifestyle, genetics, and environment.
            </p>
            <p>
              Two 50-year-olds can have vastly different biological ages: one with a biological age of 38 (active, lean, good sleep, no smoking) and another at 62 (sedentary, overweight, chronic stress, heavy drinker). Clinical biological age is measured through epigenetic clocks (DNA methylation), telomere length, and blood biomarkers. This calculator estimates biological age from the lifestyle factors most strongly correlated with these clinical measures.
            </p>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Heart className="h-6 w-6 text-primary" />
            The 9 Factors That Determine Biological Age
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted text-muted-foreground font-semibold">
                <tr>
                  <th className="p-3">Factor</th>
                  <th className="p-3">Optimal</th>
                  <th className="p-3">Age Impact</th>
                  <th className="p-3">Why It Matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 font-medium">Resting Heart Rate</td>
                  <td className="p-3 text-green-500">50-60 bpm</td>
                  <td className="p-3">-3 to +4 years</td>
                  <td className="p-3 text-muted-foreground">Strongest cardiovascular biomarker. Lower RHR = more efficient heart.</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Exercise</td>
                  <td className="p-3 text-green-500">5-6×/week</td>
                  <td className="p-3">-3 to +3.5 years</td>
                  <td className="p-3 text-muted-foreground">150+ min cardio + strength training preserves muscle, bone, and brain.</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Sleep</td>
                  <td className="p-3 text-green-500">7-8.5 hrs, excellent quality</td>
                  <td className="p-3">-2 to +3 years</td>
                  <td className="p-3 text-muted-foreground">Deep sleep drives cellular repair, memory consolidation, immune function.</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Smoking</td>
                  <td className="p-3 text-green-500">Never</td>
                  <td className="p-3">-1 to +8 years</td>
                  <td className="p-3 text-muted-foreground">Accelerates every aging pathway: telomere shortening, inflammation, oxidative stress.</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Social Connection</td>
                  <td className="p-3 text-green-500">Strong</td>
                  <td className="p-3">-2 to +3.5 years</td>
                  <td className="p-3 text-muted-foreground">Isolation equals smoking 15 cigs/day in mortality impact. Community extends life.</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Stress</td>
                  <td className="p-3 text-green-500">Minimal</td>
                  <td className="p-3">-1.5 to +3 years</td>
                  <td className="p-3 text-muted-foreground">Chronic cortisol elevation shortens telomeres, increases inflammation.</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Diet</td>
                  <td className="p-3 text-green-500">Mediterranean-style</td>
                  <td className="p-3">-2 to +3 years</td>
                  <td className="p-3 text-muted-foreground">Anti-inflammatory foods, fibre, omega-3s directly affect epigenetic age.</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Alcohol</td>
                  <td className="p-3 text-green-500">None or light</td>
                  <td className="p-3">-0.5 to +4 years</td>
                  <td className="p-3 text-muted-foreground">Even moderate drinking increases biological age markers in recent studies.</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">BMI</td>
                  <td className="p-3 text-green-500">18.5-24.9</td>
                  <td className="p-3">-1 to +3 years</td>
                  <td className="p-3 text-muted-foreground">Excess body fat drives chronic inflammation, the root of accelerated aging.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Lightbulb className="h-6 w-6 text-primary" />
            The Highest-Impact Changes for Biological Age
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <Dumbbell className="h-5 w-5" />
                Exercise (Biggest Lever)
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>150+ min/week zone 2 cardio (walking, cycling, swimming)</li>
                <li>2-3× strength training per week (preserves muscle mass)</li>
                <li>Daily movement (10,000+ steps) matters as much as formal exercise</li>
                <li>Sedentary → active is the single biggest biological age reducer</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <Moon className="h-5 w-5" />
                Sleep Optimisation
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Consistent wake time (±30 min) including weekends</li>
                <li>Cool room (65-68°F / 18-20°C) for deep sleep</li>
                <li>No screens 1 hour before bed (or use blue light blockers)</li>
                <li>Target 7-8.5 hours with high sleep efficiency (&gt;85%)</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <Apple className="h-5 w-5" />
                Anti-Aging Nutrition
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>30+ different plants per week (fibre and polyphenols)</li>
                <li>Omega-3 rich foods (fatty fish 2-3×/week, walnuts, flax)</li>
                <li>Minimise ultra-processed food (&lt;20% of calories)</li>
                <li>Protein at every meal (0.7-1g per lb bodyweight for muscle)</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                <Users className="h-5 w-5" />
                Social & Mental Health
              </h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-2">
                <li>Maintain 3-5 close relationships (quality over quantity)</li>
                <li>10+ min daily meditation reduces cortisol 20-30%</li>
                <li>Purpose and meaning in life extends lifespan 7+ years</li>
                <li>Community involvement (Blue Zone longevity factor)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <Brain className="h-6 w-6 text-primary" />
            Clinical Biological Age Testing
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              This calculator estimates biological age from lifestyle factors. For clinical-grade measurement, these tests measure biological age directly:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg border border-border">
                <h3 className="font-semibold text-heading-accent mb-2">Epigenetic Clocks</h3>
                <p className="text-sm text-muted-foreground">DNA methylation patterns (Horvath, GrimAge, PhenoAge). Most accurate method. Cost: $200-500. Tests: TruDiagnostic, Elysium Index.</p>
              </div>
              <div className="p-4 rounded-lg border border-border">
                <h3 className="font-semibold text-heading-accent mb-2">Telomere Length</h3>
                <p className="text-sm text-muted-foreground">Chromosome end-caps that shorten with age. Shorter = older biological age. Cost: $100-300. Less accurate than epigenetic clocks.</p>
              </div>
              <div className="p-4 rounded-lg border border-border">
                <h3 className="font-semibold text-heading-accent mb-2">Blood Biomarkers</h3>
                <p className="text-sm text-muted-foreground">CRP, HbA1c, lipid panel, liver function, kidney markers. Cost: $50-200. Available through any doctor or services like InsideTracker.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    ),

    proTip: "The most underrated biological age factor is social connection. Research shows that strong social ties reduce all-cause mortality by 50% — more than exercise, diet, or quitting smoking alone. If you're optimising everything else but feel isolated, prioritise community. Join a gym, a club, or simply schedule weekly calls with people you care about.",

    faqs: [
      {
        question: "What is biological age?",
        answer: "Biological age measures how well your body is functioning compared to average for your chronological age. Unlike chronological age (years since birth), biological age reflects cellular health, organ function, and disease risk. It's influenced by lifestyle, genetics, and environment. A 50-year-old with excellent habits might have a biological age of 38, while one with poor habits might function like a 62-year-old."
      },
      {
        question: "How accurate is this biological age calculator?",
        answer: "This calculator provides a lifestyle-based estimate, not a clinical measurement. It uses the 9 factors most strongly correlated with biological age in research literature. For clinical-grade measurement, epigenetic clocks (DNA methylation tests like GrimAge) are the gold standard. This tool is best used for identifying which lifestyle factors are most impacting your aging and tracking improvements over time."
      },
      {
        question: "What is the most important factor for biological age?",
        answer: "Exercise is the single most impactful modifiable factor. Moving from sedentary to active (150+ min/week cardio + strength training) can reduce biological age by 3-5 years. Resting heart rate is the strongest biomarker — it directly reflects cardiovascular fitness. However, smoking cessation has the largest single-factor impact: quitting smoking can reduce biological age by 4-8 years over several years."
      },
      {
        question: "Can I reverse my biological age?",
        answer: "Yes. Research shows biological age is partially reversible through lifestyle changes. The TRIIM trial showed 2.5 years of epigenetic age reversal in 1 year through exercise, sleep, diet, and supplementation. The Dunedin Pace of Aging study found that lifestyle interventions can slow the pace of aging by 10-20%. Key reversible factors: exercise, sleep quality, stress management, diet, and smoking cessation."
      },
      {
        question: "What is a good resting heart rate?",
        answer: "A normal resting heart rate is 60-100 bpm. For biological age: 50-60 bpm is excellent (athlete-level fitness), 60-70 bpm is good, 70-80 bpm is average, and above 80 bpm indicates poor cardiovascular fitness. Elite endurance athletes can have RHR of 40-50 bpm. You can lower your RHR by 5-15 bpm through consistent zone 2 cardio (3-5 sessions/week for 3-6 months)."
      },
      {
        question: "How does sleep affect biological age?",
        answer: "Sleep quality strongly affects biological age. During deep sleep, your body repairs DNA, clears brain waste (glymphatic system), consolidates memory, and releases growth hormone. Chronic poor sleep (less than 6 hours or fragmented) accelerates telomere shortening, increases inflammation markers, and raises epigenetic age by 2-3 years. Quality matters more than quantity: 7 hours of uninterrupted deep sleep beats 9 hours of fragmented sleep."
      },
      {
        question: "Does stress really age you?",
        answer: "Yes, significantly. Chronic psychological stress shortens telomeres (the caps on chromosomes that protect DNA), increases chronic inflammation (inflammaging), elevates cortisol which suppresses immune function, and accelerates epigenetic aging. A landmark study by Elizabeth Blackburn found that caregivers under chronic stress had telomeres equivalent to being 10 years older. Meditation, exercise, and strong social connections are the most effective stress-mitigating interventions."
      },
      {
        question: "How does social isolation affect aging?",
        answer: "Social isolation is as damaging as smoking 15 cigarettes per day (Holt-Lunstad et al., 2010 meta-analysis). Lonely individuals have 26% higher mortality risk, higher inflammation markers, weaker immune response, and faster cognitive decline. The Blue Zones (regions with the most centenarians) all share one factor: strong community bonds. This is why our calculator includes social connection as a core biological age factor."
      },
      {
        question: "What diet is best for slowing aging?",
        answer: "The Mediterranean diet has the strongest evidence for longevity and biological age reduction. Key principles: high vegetable intake (30+ different plants/week), omega-3 rich foods (fatty fish, walnuts, flaxseed), minimal ultra-processed food, adequate protein (0.7-1g/lb for muscle preservation), polyphenol-rich foods (berries, dark chocolate, green tea), and moderate caloric intake. Recent research also supports time-restricted eating (12-16 hour eating windows)."
      },
      {
        question: "Can quitting smoking reverse biological age?",
        answer: "Partially, yes. Smoking accelerates biological age by 4-10 years through DNA damage, telomere shortening, chronic inflammation, and cardiovascular damage. After quitting: within 1 year, cardiovascular risk drops 50%. Within 5-10 years, many biomarkers return to near-normal. Epigenetic studies show that some (but not all) smoking-related DNA methylation changes reverse within 5-10 years of cessation. The earlier you quit, the more reversible the damage."
      },
      {
        question: "How often should I retake this calculator?",
        answer: "Every 3-6 months is ideal. This gives enough time for lifestyle changes to produce measurable improvements (especially resting heart rate and BMI, which change gradually). Track your scores over time to see which categories are improving. For clinical biological age testing (epigenetic clocks), once per year is sufficient since those markers change slowly."
      },
      {
        question: "What is the difference between biological age and metabolic age?",
        answer: "Biological age is a comprehensive measure of overall body function based on multiple systems (cardiovascular, cellular, cognitive). Metabolic age specifically compares your basal metabolic rate (BMR) to the average BMR for different ages — if your metabolism matches a typical 28-year-old, your metabolic age is 28. Biological age is a broader, more predictive measure. Metabolic age is primarily driven by muscle mass and body composition."
      },
      {
        question: "Does alcohol really affect biological age?",
        answer: "Yes. Recent large-scale studies (including the 2022 UK Biobank analysis of 36,000+ brain scans) show that even moderate alcohol consumption (7-14 drinks/week) accelerates brain aging and increases biological age markers. Heavy drinking (14+/week) is strongly associated with liver aging, cardiovascular aging, and telomere shortening. The old idea that 'moderate drinking is healthy' has been largely debunked by newer research controlling for confounding factors."
      },
      {
        question: "What are epigenetic clocks?",
        answer: "Epigenetic clocks are algorithms that estimate biological age by measuring DNA methylation patterns at specific sites on the genome. As you age, certain DNA locations gain or lose methyl groups in predictable patterns. The most validated clocks include: Horvath's clock (2013, multi-tissue), GrimAge (strongest mortality predictor), PhenoAge (phenotypic age), and DunedinPACE (pace of aging). Tests like TruDiagnostic and Elysium Index offer consumer epigenetic age testing for $200-500."
      },
      {
        question: "How does exercise lower biological age?",
        answer: "Exercise reduces biological age through multiple mechanisms: (1) Improves cardiovascular efficiency (lower RHR, better blood pressure); (2) Preserves telomere length (active people have telomeres equivalent to 10 years younger); (3) Reduces chronic inflammation (lower CRP, IL-6); (4) Improves insulin sensitivity; (5) Increases BDNF (brain-derived neurotrophic factor) for cognitive health; (6) Preserves muscle mass (sarcopenia prevention); (7) Enhances mitochondrial function. Both cardio and strength training are essential."
      },
      {
        question: "What is the Blue Zones' secret to longevity?",
        answer: "Blue Zones are regions with the highest concentration of centenarians. The 5 zones (Okinawa Japan, Sardinia Italy, Nicoya Costa Rica, Ikaria Greece, Loma Linda California) share 9 common factors called the 'Power 9': (1) Natural movement (not gym workouts); (2) Purpose; (3) Stress reduction routines; (4) 80% rule (stop eating when 80% full); (5) Plant-heavy diet; (6) Moderate wine; (7) Community/faith; (8) Loved ones first; (9) Right tribe (social circles that support healthy habits)."
      }
    ],

    relatedTools: [
      { name: "BMI Calculator", href: "/calculator/bmi-calculator" },
      { name: "Cortisol Peak Time Calculator", href: "/calculator/cortisol-peak-calculator" },
      { name: "Calorie Calculator", href: "/calculator/calorie-calculator" },
      { name: "BMR Calculator", href: "/calculator/bmr-calculator" },
      { name: "Body Fat Calculator", href: "/calculator/body-fat-calculator" },
      { name: "Age Calculator", href: "/calculator/age-calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Free Biological Age Calculator — How Old Is Your Body?",
        description: "Estimate your true body age based on lifestyle, fitness, sleep, stress, diet & habits. Get personalised recommendations to slow aging.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "green"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: TOOL_NAME, href: "/calculator/biological-age-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <BiologicalAgeCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: "How old is your body really? Free biological age test based on heart rate, sleep, exercise, diet, stress & BMI. Get your real age score with personalised recommendations.",
        path: "/calculator/biological-age-calculator"
      }}
    />
  )
}
