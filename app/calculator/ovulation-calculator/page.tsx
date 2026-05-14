import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const OvulationCalculator = dynamic(
  () => import("@/components/health/ovulation-calculator"),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Ovulation Calculator",
  description:
    "Calculate your ovulation date, fertile window, and best days to conceive based on your last period and cycle length. Free, private, instant results.",
  metaTitle: "Ovulation Calculator - Find Your Fertile Days Free (2026)",
  metaDescription:
    "Free ovulation calculator. Find your fertile window, ovulation date, best days to conceive, and estimated due date. 6-cycle forecast with visual calendar. No signup.",
  path: "/calculator/ovulation-calculator",

  schemaOptions: {
    applicationCategory: "HealthApplication",
    description:
      "Free online ovulation calculator that predicts fertile window, ovulation date, peak fertility days, pregnancy test timing, and estimated due date for 6 cycles based on last menstrual period and cycle length.",
    featureList: [
      "Ovulation date prediction based on cycle length and luteal phase",
      "6-day fertile window calculation (5 days before ovulation + ovulation day)",
      "Peak fertility days highlighting (highest conception probability)",
      "6-cycle forecast with period, fertile window, and ovulation dates",
      "Estimated due date if conception occurs each cycle",
      "Pregnancy test date recommendation (14 DPO)",
      "Visual color-coded fertility calendar",
      "Customizable cycle length (21-35 days) and luteal phase (10-17 days)",
      "Client-side processing — cycle data never leaves your device",
      "Based on ACOG, WHO, and NHS guidelines",
    ],
    softwareRequirements: "Modern web browser with JavaScript enabled",
  },

  header: {
    title: "Ovulation Calculator — Find Your Fertile Days",
    description:
      "Calculate your ovulation date, fertile window, and best days to conceive. 6-cycle forecast with visual calendar. Based on ACOG & WHO guidelines.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "Ovulation Calculator", href: "/calculator/ovulation-calculator" },
  ],

  content: {
    definition:
      "An Ovulation Calculator is a free tool that estimates when you ovulate each month based on your last menstrual period (LMP) and average cycle length, identifying your 6-day fertile window — the best time to conceive — along with peak fertility days, pregnancy test timing, and estimated due dates.",

    quickAnswer:
      "Enter the first day of your last period and your average cycle length. The calculator predicts your ovulation date (typically 14 days before your next period), your 6-day fertile window, peak fertility days, when to take a pregnancy test, and your estimated due date if conception occurs — for the next 6 cycles.",

    keyTakeaways: [
      "Ovulation occurs about 14 days before your next period starts, not 14 days after",
      "Your fertile window is 6 days: the 5 days before ovulation plus ovulation day",
      "The 2 days before ovulation and ovulation day have the highest conception probability (25-30% per cycle)",
      "Sperm can survive up to 5 days; the egg lives only 12-24 hours after release",
      "Wait 14 days after ovulation (14 DPO) for the most accurate pregnancy test results",
    ],

    overview:
      "This ovulation calculator helps you identify your most fertile days each month. Enter the first day of your last menstrual period and your average cycle length, and the tool calculates your ovulation date, fertile window, peak days, pregnancy test date, and estimated due date for the next 6 cycles. A visual color-coded calendar shows your period days, fertile window, and ovulation day at a glance. All calculations run in your browser — your cycle data is never stored on any server.",

    howToSteps: [
      "Enter the first day of your last menstrual period (LMP). This is day 1 of your cycle.",
      "Select your average cycle length (21-35 days). If unsure, count from the first day of one period to the first day of the next. The average is 28 days.",
      "Optionally adjust your luteal phase length (10-17 days, default 14) and period length for more precise results.",
      "Click 'Calculate' to see your ovulation date, fertile window, 6-cycle forecast, and visual fertility calendar.",
    ],

    features: [
      "Ovulation date prediction using cycle length minus luteal phase formula",
      "6-day fertile window identification (5 days before ovulation + ovulation day)",
      "Peak fertility day highlighting — the 2-3 days with highest conception rates",
      "Visual color-coded monthly calendar: red = period, green = fertile, pink = ovulation",
      "6-cycle forecast table with period start, fertile window, ovulation, test date, and due date",
      "Pregnancy test date recommendation (14 days post-ovulation)",
      "Estimated due date calculation (266 days from ovulation)",
      "Customizable cycle length (21-35 days), luteal phase (10-17 days), and period length (2-8 days)",
      "Month-by-month calendar navigation",
      "100% private: all calculations run locally in your browser",
    ],

    useCases: [
      "Identify your most fertile days each month when trying to conceive",
      "Track ovulation patterns across multiple cycles to understand your cycle",
      "Plan intercourse timing around peak fertility days for maximum conception chances",
      "Know when to take a pregnancy test for the most accurate results",
      "Calculate estimated due dates if pregnancy occurs in any upcoming cycle",
      "Understand your menstrual cycle phases: period, follicular, ovulation, and luteal",
      "Share cycle forecasts with your partner to coordinate conception planning",
      "Track cycle regularity by comparing predicted vs actual period dates",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How Ovulation Timing Works</h3>
          <p>
            Ovulation occurs when a mature egg is released from the ovary, triggered by a surge in
            luteinizing hormone (LH). This typically happens about 14 days before your next period — not
            14 days after your period starts. On a 28-day cycle, ovulation is around day 14; on a 30-day
            cycle, it shifts to around day 16; on a 26-day cycle, it happens around day 12. The luteal
            phase (ovulation to next period) is relatively consistent at 12–16 days, while the follicular
            phase (period to ovulation) varies more between individuals and cycles.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">The Fertile Window Explained</h3>
          <p>
            Your fertile window spans approximately 6 days each cycle: the 5 days before ovulation and
            ovulation day itself. This window exists because sperm can survive in the female reproductive
            tract for up to 5 days, while the egg survives only 12–24 hours after release. The highest
            conception probability occurs in the 2 days before ovulation and on ovulation day, with
            studies showing a 25–30% chance of pregnancy per cycle when intercourse is timed to these
            peak days. According to ACOG, having intercourse every 1–2 days during the fertile window
            optimizes conception chances.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Signs of Ovulation</h3>
          <p>
            Common signs include a change in cervical mucus (clear, stretchy, egg-white consistency),
            a slight rise in basal body temperature (0.5–1&deg;F), mild pelvic pain or cramping on one
            side (mittelschmerz), increased libido, light spotting, and breast tenderness. Ovulation
            predictor kits (OPKs) detect the LH surge that occurs 24–36 hours before ovulation for
            more precise timing.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Calculator Accuracy & Limitations</h3>
          <p>
            This calculator is most accurate for individuals with regular cycles (within 1–2 days of
            the predicted date). For irregular cycles, accuracy decreases — consider tracking basal
            body temperature or using ovulation predictor kits alongside this calculator. Stress,
            illness, travel, and hormonal changes can shift ovulation timing. This tool should not be
            used as a method of contraception. Always consult a healthcare provider for personalized
            fertility guidance.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For the most accurate results, track your cycle length over 3–6 months before relying on calculator predictions. If your cycles vary by more than 7 days, consider supplementing with ovulation predictor kits (OPKs) or basal body temperature tracking.",

    faqs: [
      {
        question: "When do I ovulate?",
        answer:
          "Ovulation typically occurs about 14 days before your next period starts. For a 28-day cycle, this means around day 14. For a 30-day cycle, ovulation usually happens around day 16. The exact day varies based on your individual cycle length and regularity.",
      },
      {
        question: "How many days after my period do I ovulate?",
        answer:
          "Most women ovulate 10 to 16 days after the first day of their last period. For a typical 28-day cycle, ovulation occurs around day 14 — roughly 7 to 10 days after your period ends. Shorter cycles may mean earlier ovulation, sometimes as soon as day 8.",
      },
      {
        question: "What is the fertile window?",
        answer:
          "The fertile window is the approximately 6-day period each cycle when pregnancy is possible. It includes the 5 days before ovulation and the day of ovulation itself. The highest chance of conception occurs on the 2 days before ovulation and ovulation day, with a 25–30% probability per cycle.",
      },
      {
        question: "Can I get pregnant outside my fertile window?",
        answer:
          "Pregnancy is extremely unlikely outside the fertile window. Sperm can survive up to 5 days in the reproductive tract, and the egg lives only 12–24 hours after ovulation. Outside the approximately 6-day fertile window, conception is very rare.",
      },
      {
        question: "How long does ovulation last?",
        answer:
          "Ovulation itself — the release of an egg from the ovary — lasts only 12 to 24 hours. However, your fertile window spans about 6 days because sperm can survive up to 5 days waiting for the egg to be released.",
      },
      {
        question: "When should I take a pregnancy test after ovulation?",
        answer:
          "For the most accurate results, wait until the first day of your missed period — typically 14 days after ovulation (14 DPO). Some early detection tests can show results as early as 10 DPO, though accuracy improves the longer you wait. Testing too early increases the chance of a false negative.",
      },
      {
        question: "Does cycle length affect when I ovulate?",
        answer:
          "Yes, cycle length directly affects ovulation timing. Ovulation generally occurs about 14 days before your next period. With a 28-day cycle, ovulation is around day 14; with a 35-day cycle, it shifts to around day 21; with a 24-day cycle, ovulation may occur as early as day 10.",
      },
      {
        question: "How accurate are ovulation calculators?",
        answer:
          "Ovulation calculators are most accurate for women with regular cycles (within 1–2 days). For irregular cycles, accuracy decreases. According to ACOG, calendar-based methods alone are not reliable enough for contraception. For higher precision, combine calculator predictions with ovulation predictor kits (OPKs) or basal body temperature tracking.",
      },
      {
        question: "Can stress affect ovulation?",
        answer:
          "Yes, stress can significantly affect ovulation. Physical or emotional stress triggers elevated cortisol levels, which can suppress hormones needed for ovulation. This can delay ovulation, cause anovulation (skipped ovulation), or lead to irregular cycles.",
      },
      {
        question: "What are the signs of ovulation?",
        answer:
          "Common ovulation signs include: a change in cervical mucus (clear, stretchy, egg-white consistency), a slight rise in basal body temperature (0.5–1°F), mild pelvic pain on one side (mittelschmerz), increased libido, light spotting, and breast tenderness. Ovulation predictor kits can detect the LH surge 24–36 hours before ovulation.",
      },
    ],

    relatedTools: [
      { name: "Pregnancy Due Date Calculator", href: "/calculator/pregnancy-calculator" },
      { name: "Conception Date Calculator", href: "/calculator/pregnancy-conception-calculator" },
      { name: "BMI Calculator", href: "/calculator/bmi-calculator" },
      { name: "BMR Calculator", href: "/calculator/bmr-calculator" },
      { name: "Calorie Calculator", href: "/calculator/calorie-calculator" },
      { name: "Age Calculator", href: "/calculator/age-calculator" },
      { name: "Anniversary Calculator", href: "/fun-tools/anniversary" },
      { name: "Date Difference Calculator", href: "/calculator/date-difference" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function OvulationCalculatorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<OvulationCalculator />)} />
}
