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
const TOOL_META_DESC = "Free bill splitter for restaurants, groups, and shared expenses. Split evenly, by items, or by custom share. Auto-adds tip and tax. Generates a per-person total showing exactly who owes what. Perfect for dining, travel, roommates, and group trips."

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: TOOL_META_DESC,
  path: "/finance-tools/bill-splitter",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: TOOL_NAME, href: "/finance-tools/bill-splitter" }
  ],
  schemaOptions: {
    name: "Bill Splitter with Tip & Tax Math",
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
      "Itemized split — each person pays only for what they ordered",
      "Custom share weights for uneven splits",
      "Auto tip calculation (15/18/20/25% or custom)",
      "Auto tax inclusion / exclusion toggle",
      "Per-person total breakdown",
      "Round-up for clean per-person totals",
      "Currency-agnostic — works in USD, EUR, GBP, etc.",
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
      "A bill splitter divides a shared bill among people, including tax, tip, itemized shares, custom shares, and per-person totals.",
    quickAnswer:
      "Enter the bill amount, number of people, tax, and tip to split a restaurant or shared expense fairly. Use equal split for simple groups or itemized/custom split when people ordered different things.",
    keyTakeaways: [
      "Equal split divides the full bill, tax, and tip by the number of people",
      "Itemized split is fairer when people ordered different items",
      "Tip and tax should be included before calculating each person's final share",
      "Round-up mode makes cash or mobile-payment settlement easier",
      "Use the shareable breakdown so everyone can see exactly who owes what",
    ],
    overview: "Split any shared bill in seconds — evenly, by the items each person ordered, or by custom weights. The calculator adds tip and tax before dividing, so nobody gets shortchanged, and produces a per-person breakdown you can paste into the group chat. Works for restaurant checks, rent and utilities, group trips, and any purchase where one card got charged and the rest of the group owes their share.",

    howToSteps: [
      "Enter Bill Details: Input the total bill amount, including any service charges or additional fees.",
      "Select Split Method: Choose between equal split, itemized split, or percentage-based split depending on your group's preference.",
      "Add Participants: Enter the number of people sharing the bill or add their names for personalized breakdowns.",
      "Include Tip & Tax: Add tip percentage and tax rate to ensure the final calculation covers all costs.",
      "Review & Share: View the detailed breakdown per person and share the results via text or email."
    ],

    features: [
      "Three split methods: divide evenly, assign items to each person, or set custom share weights for uneven splits.",
      "Tip handling: quick buttons for 15/18/20/25% or a custom rate, applied to the bill before the per-person division.",
      "Tax support: enter a tax rate or dollar amount and it is distributed along with each person's share.",
      "Per-person breakdown showing base amount, tip portion, tax portion, and final total for every participant.",
      "Round-up option for clean amounts that are easy to settle in cash, Venmo, or other payment apps.",
      "Copyable results you can paste into a group chat so everyone sees the same numbers."
    ],

    useCases: [
      "Restaurant dinners where some people ordered more than others — itemized mode keeps it fair.",
      "Roommates dividing rent, utilities, and grocery runs by equal or custom shares.",
      "Group trips: divide lodging evenly, but meals only among the people who attended.",
      "Bar tabs and celebrations, including the divide-among-everyone-but-the-guest-of-honor convention.",
      "Office lunches and team events where one person paid up front and needs to collect.",
      "Any group purchase where a single card was charged and everyone else owes their part."
    ],

    aboutTool: (
      <div className="space-y-6">
        <div className="p-4 rounded-lg bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
            <Calculator className="h-4 w-4 text-primary" />
            How the Split Is Calculated
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            An equal split is simple math: (subtotal + tax + tip) ÷ number of people. Where groups get into trouble is dividing before adding tip and tax — a $120 dinner for four is not $30 each once you add 8.5% tax and a 20% tip; it&apos;s about $38.75. This calculator always applies tip and tax to the full bill first, then divides, so the per-person figure is what each person actually owes.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Itemized mode works differently: each person&apos;s ordered items form their personal subtotal, and tax and tip are then allocated in proportion to that subtotal — not per head. If your items came to $40 of a $100 check, you cover 40% of the tax and tip too. That proportional allocation is what makes an itemized division genuinely fair when one person had the steak and another had a side salad. Custom-weight mode generalizes the same idea: assign each person a percentage or weight (say 2 shares for a couple, 1 for a single guest) and every component of the bill follows those weights.
          </p>
        </div>

        <div className="p-4 rounded-lg bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
            <Receipt className="h-4 w-4 text-primary" />
            Tip, Tax, and Rounding Edge Cases
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            In the US, the convention is to tip on the pre-tax subtotal, though many people simply tip on the total — the difference on a typical dinner is well under a dollar per person, so consistency matters more than the method. Watch for a service charge or &quot;large party gratuity&quot; (often 18% for groups of 6+) already printed on the check: if it&apos;s there, set tip to zero or you&apos;ll double-tip. Tax-inclusive menus, common outside the US, mean you should skip the tax field entirely.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Division rarely comes out to whole cents. $100 among three people is $33.33 each, leaving a stray penny — standard practice is for the person who paid the check to absorb (or pocket) the remainder. The round-up option instead nudges each share to a clean figure like $34, which makes cash settlement painless and gives the payer a small buffer. Two other edge cases worth agreeing on before the check arrives: someone who left early or skipped the wine can be handled with itemized or custom weights, and if the group is treating a guest of honor, divide the whole bill by everyone except them.
          </p>
        </div>
      </div>
    ),

    faqs: [
      {
        question: "How do I split a bill fairly when people ordered different things?",
        answer: "Use itemized mode: assign each dish or drink to the person who ordered it, and the calculator allocates tax and tip in proportion to each person's subtotal rather than per head. Someone who ordered $15 of a $100 check pays 15% of the tax and tip too — which is what makes the result fair without any awkward negotiation."
      },
      {
        question: "Should the tip be calculated before or after tax?",
        answer: "US convention is to tip on the pre-tax subtotal, but tipping on the post-tax total is also common and the difference is small — usually under a dollar per person. Pick one approach and apply it consistently. Also check the receipt for an automatic service charge or large-party gratuity; if one is already included, set the tip to zero to avoid double-tipping."
      },
      {
        question: "Can I split a bill unequally?",
        answer: "Yes. Use custom shares to assign each person a specific amount, percentage, or weight — useful when a couple counts as two shares, when someone only had a drink, or when one person agreed to cover more. Every part of the bill, including tip and tax, follows the weights you set."
      },
      {
        question: "What happens to leftover cents when the split isn't even?",
        answer: "Splitting $100 three ways gives $33.33 each with a penny left over. By default the person who paid absorbs the remainder; with round-up mode enabled, each share is rounded to a cleaner amount instead, so settlement in cash or a payment app is simpler and the payer gets a small buffer rather than a shortfall."
      },
      {
        question: "How do I handle shared appetizers alongside individual mains?",
        answer: "Mixed bills are common: divide shared items (appetizers, pitchers, dessert for the table) evenly among everyone who partook, and assign individual items to the person who ordered them. In itemized mode you can mark items as shared so the calculator does both allocations in one pass and combines them into each person's total."
      },
      {
        question: "How many people can I split a bill between?",
        answer: "Any group size works, from two people to large events with 20 or more. For big groups, the per-person breakdown matters more than the math — share the copyable results so every participant can see their own line rather than trusting a number shouted across the table."
      },
      {
        question: "Does it work with currencies other than dollars?",
        answer: "Yes — the math is currency-agnostic. Enter amounts in EUR, GBP, INR, or anything else and the proportions work identically. Keep in mind that tipping norms differ: many European countries include service in the price, and Japan generally has no tipping at all, so adjust the tip field to local custom."
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
        description: "Split bills evenly, by items, or by custom share. Auto-adds tip and tax. Shows per-person total and who-owes-whom summary. Perfect for restaurants, roommates, travel groups, and shared expenses.",
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
