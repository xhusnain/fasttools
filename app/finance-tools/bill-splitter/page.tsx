import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const BillSplitter = dynamic(() => import("@/components/finance/bill-splitter").then(mod => mod.BillSplitter), {
  loading: () => <ToolLoader />
})
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, Receipt } from "lucide-react"
import type { Metadata } from "next"

const TOOL_TITLE = "Bill Splitter — Split Restaurant & Group Bills Fairly"
const TOOL_NAME = "Bill Splitter"
const TOOL_META_DESC = "Free bill splitter for restaurants, groups, and shared expenses. Enter the total, number of people, and tip percentage for an instant even split. Copy the per-person breakdown to share with your group. Perfect for dining, travel, roommates, and group trips."

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: TOOL_META_DESC,
  path: "/finance-tools/bill-splitter",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: TOOL_NAME, href: "/finance-tools/bill-splitter" }
  ],
  schemaOptions: {
    name: "Bill Splitter with Tip Calculator",
    alternateName: [
      "Split Bill Calculator",
      "Group Expense Calculator",
      "Restaurant Bill Splitter",
      "Shared Expense Calculator",
      "Per-Person Bill Calculator",
    ],
    applicationCategory: "FinanceApplication",
    featureList: [
      "Even split across any number of people",
      "Quick-select tip percentages (10/15/18/20%) or a custom rate",
      "Per-person total including tip",
      "Copyable results for sharing with your group",
      "100% client-side — no signup, no data uploaded",
      "Free, no usage limits",
    ],
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function BillSplitterPage() {
  const toolContent = {
    toolName: TOOL_NAME,
    definition:
      "A bill splitter divides a shared bill evenly among a group of people and adds a tip, showing exactly what each person owes.",
    quickAnswer:
      "Enter the bill amount, number of people, and tip percentage to see an even per-person split, including each person's share of the tip.",
    keyTakeaways: [
      "This calculator splits the bill and tip evenly across the number of people you enter",
      "Tip is calculated on the bill total you enter, then divided equally among the group",
      "Use a quick tip button (10/15/18/20%) or type a custom percentage",
      "Copy the breakdown so everyone in the group sees the same per-person total",
      "For itemized or unequal splits, calculate each person's share separately — this tool only supports an even split",
    ],
    overview: "Split any shared bill evenly in seconds. Enter the total and the number of people, pick a tip percentage, and the calculator shows what each person owes — then copy the breakdown to paste into the group chat. Works for restaurant checks, rent and utilities, group trips, and any purchase where one card got charged and the rest of the group owes an equal share.",

    howToSteps: [
      "Enter the Bill Total: Input the total amount from the receipt, including any charges already on it.",
      "Enter Number of People: Input how many people are splitting the bill.",
      "Set the Tip: Pick a quick tip percentage (10/15/18/20%) or enter a custom rate.",
      "Split the Bill: See the tip amount, the total with tip, and the even per-person share.",
      "Copy & Share: Use the Copy Results button to paste the breakdown into a group chat."
    ],

    features: [
      "Even Split Calculation: Divide the total bill and tip evenly across any number of people.",
      "Tip Calculator: Quick-select buttons for 10/15/18/20% tip, or enter a custom percentage.",
      "Per-Person Breakdown: Shows the bill portion, tip portion, and total each person owes.",
      "Copyable Results: Copy the full breakdown with one click to share in a group chat."
    ],

    useCases: [
      "Restaurant dinners split evenly among the whole table, tip included.",
      "Roommates dividing rent, utilities, or a shared grocery run.",
      "Group trips: split lodging or any shared cost evenly among everyone chipping in.",
      "Bar tabs and celebrations split evenly among attendees.",
      "Office lunches and team events where one person paid and needs to collect from the rest.",
      "Any group purchase where a single card was charged and everyone owes an equal share."
    ],

    aboutTool: (
      <div className="space-y-6">
        <div className="p-4 rounded-lg bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
            <Calculator className="h-4 w-4 text-primary" />
            How the Split Is Calculated
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            An equal split is simple math: (bill + tip) ÷ number of people. Where people get tripped up is dividing before adding the tip — a $120 dinner for four is not $30 each once you add a 20% tip; it&apos;s $36 each. This calculator always adds the tip to the bill first, then divides evenly, so the per-person figure includes everyone&apos;s share of the tip.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This tool only supports an even split. If your group ordered very different amounts and wants to divide the bill by what each person actually had, total up each person&apos;s items separately and add their share of tip and tax by hand, or use a calculator built for itemized splitting.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
            <Receipt className="h-4 w-4 text-primary" />
            Tip and Rounding Edge Cases
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            This calculator applies the tip percentage you enter to the bill total you enter — so if the total you type in already includes tax, the tip is effectively calculated on the post-tax amount, which matches how many people tip anyway. Watch for a service charge or &quot;large party gratuity&quot; (often 18% for groups of 6+) already printed on the check: if it&apos;s there, set the tip to zero or you&apos;ll double-tip.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Division rarely comes out to whole cents. $100 among three people is $33.33 each, leaving a stray penny — standard practice is for the person who paid the check to absorb (or pocket) the remainder. If someone left early, skipped a round, or the group is treating a guest of honor, adjust the number of people accordingly, or work out that person&apos;s share separately before splitting the rest evenly.
          </p>
        </div>
      </div>
    ),

    faqs: [
      {
        question: "Can this tool split a bill by what each person ordered (itemized)?",
        answer: "No — this calculator only supports an even split, dividing the bill and tip equally across everyone you enter. If people ordered very different amounts and you want to charge each person only for what they had, total each person's items separately and split the tip and tax across those totals by hand, or use a calculator built for itemized splitting."
      },
      {
        question: "Should the tip be calculated before or after tax?",
        answer: "US convention is to tip on the pre-tax subtotal, but tipping on the post-tax total is also common and the difference is small — usually under a dollar per person. This calculator applies the tip percentage to whatever total you enter, so enter the pre-tax subtotal or the full receipt total depending on which you want to tip on. Also check the receipt for an automatic service charge or large-party gratuity; if one is already included, set the tip to zero to avoid double-tipping."
      },
      {
        question: "Can I split a bill unequally?",
        answer: "Not with this calculator — it only supports an even split across the number of people you enter. To split unequally, work out each person's share separately before using this tool, or use a calculator built for custom or itemized splits."
      },
      {
        question: "What happens to leftover cents when the split isn't even?",
        answer: "Splitting $100 three ways gives $33.33 each with a penny left over. This calculator shows the exact per-person amount; in practice, the person who paid the check usually absorbs (or pockets) the leftover penny, or the group rounds up to a clean figure when settling in cash or a payment app."
      },
      {
        question: "How do I handle shared appetizers alongside individual mains?",
        answer: "This calculator only does an even split, so it won't separate shared appetizers from individual mains automatically. A simple workaround is to total the shared items and divide that portion evenly among however many people you enter, then handle individual mains as a separate calculation."
      },
      {
        question: "How many people can I split a bill between?",
        answer: "Any group size works, from two people to large events with 20 or more. For big groups, the per-person breakdown matters more than the math — share the copyable results so every participant can see their own line rather than trusting a number shouted across the table."
      },
      {
        question: "Does it work with currencies other than dollars?",
        answer: "Yes — the math is currency-agnostic. Enter amounts in EUR, GBP, INR, or anything else and the split works identically. Keep in mind that tipping norms differ: many European countries include service in the price, and Japan generally has no tipping at all, so adjust the tip field to local custom."
      },
      {
        question: "Can I save or share the results?",
        answer: "You can copy the full breakdown with one click and paste it into a group text, WhatsApp, or email. Nothing is stored on a server — the calculation runs entirely in your browser — so sharing the copied summary is how everyone gets the same numbers."
      },
      {
        question: "Is this tool free?",
        answer: "Yes — free with no signup, no usage limits, and no ads gating the results. All calculations run locally in your browser, so there are no server costs to pass on."
      }
    ],

    relatedTools: [
      { name: "PayPal Fee Calculator", href: "/finance-tools/paypal-fee" },
      { name: "Influencer Rate Calculator", href: "/social-media-tools/influencer-rate-calculator" },
      { name: "All Finance Tools", href: "/finance-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Bill Splitter — Split Restaurant & Group Bills Fairly",
        description: "Enter the bill total, number of people, and tip percentage for an instant even split, plus a copyable per-person breakdown. Perfect for restaurants, roommates, travel groups, and shared expenses.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: TOOL_NAME, href: "/finance-tools/bill-splitter" }
      ]}
      toolComponent={
        <div className="p-4 rounded-lg bg-card border border-border shadow">
          <BillSplitter />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: TOOL_META_DESC,
        path: "/finance-tools/bill-splitter"
      }}
    />
  )
}
