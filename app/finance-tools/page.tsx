import { GToolCard } from "@/ui/gtool-card"
import {
  DollarSign,
  Users,
} from "lucide-react"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { Metadata } from "next"
import { createMetadata } from "@/lib/metadata-base"

const financeTools = [
  {
    title: "PayPal Fee Calculator",
    description:
      "Calculate PayPal processing fees and the amount you receive after transaction costs.",
    icon: DollarSign,
    href: "/finance-tools/paypal-fee",
  },
  {
    title: "Bill Splitter",
    description:
      "Split shared expenses for friends, trips, or group events with clear totals.",
    icon: Users,
    href: "/finance-tools/bill-splitter",
  },
]

export const metadata: Metadata = createMetadata({
  title:
    "Finance Tools — PayPal Fee Calculator & Bill Splitter",
  description:
    "Free finance tools: calculate PayPal fees including Goods & Services, and split bills fairly with tips. Fast, accurate, no signup required.",
  path: "/finance-tools",
  includeSchema: false,
  breadcrumbs: [{ label: "Finance Tools", href: "/finance-tools" }],
  itemList: {
    name: "Finance Tools",
    description: "Free online finance calculators and business finance tools.",
    items: financeTools.map((tool) => ({
      name: tool.title,
      description: tool.description,
      url: tool.href,
    })),
  },
})

export default function FinanceToolsPage() {
  const toolContent = {
    toolName: "Finance Tools",
    overview:
      "This category covers everyday money tasks: working out what PayPal actually deducts from a payment, and splitting shared bills fairly among a group. Use these calculators to see exact fee and split breakdowns before money changes hands.",
    howToSteps: [
      "Choose the tool that matches your task (PayPal fees or bill splitting).",
      "Enter your values such as payment amount, number of people, or tip.",
      "Review totals and per-person or after-fee breakdowns.",
      "Adjust inputs to compare scenarios before you send or request money.",
    ],
    features: [
      "Focused fee and bill-splitting calculators",
      "Fast browser-based calculations",
      "Exact PayPal fee and net-amount breakdowns",
      "Fair per-person splits with tip handling",
      "No signup required",
      "Mobile-friendly workflows",
    ],
    aboutTool: `
      ### Built for Real Money Moments
      Whether you're invoicing a client through PayPal or settling a group dinner, these tools turn rough guesses into clear, exact numbers.

      ### Useful for Personal and Business Use
      Freelancers and sellers can price payments so fees don't eat their margin, while friends and roommates can split shared costs without awkward math.

      ### Better Comparison Before You Commit
      Test different amounts, fee types, and group sizes quickly so everyone knows exactly what they owe or will receive.
    `,
    faqs: [
      {
        question: "Which finance calculator should I start with?",
        answer:
          "Start with the tool that matches your immediate task: the PayPal Fee Calculator when sending or receiving payments, and the Bill Splitter when dividing shared expenses among a group.",
      },
      {
        question: "Are these finance calculations accurate?",
        answer:
          "The tools use current published fee rates and standard arithmetic, so they are suitable for planning and comparison. For regulated decisions, confirm numbers with your payment provider or accountant.",
      },
      {
        question: "Can I compare multiple scenarios?",
        answer:
          "Yes. A practical workflow is to run baseline inputs first, then adjust one variable at a time (amount, fee type, group size, or tip) and compare the impact.",
      },
      {
        question: "Do these tools work for business workflows?",
        answer:
          "Yes. The PayPal Fee Calculator helps freelancers and sellers price payments so the net amount covers their costs, and the Bill Splitter works for team lunches and shared office expenses.",
      },
      {
        question: "Are the finance tools free?",
        answer:
          "Yes. The calculators in this category are free to use with no account required.",
      },
    ],
    relatedTools: [
      { name: "Online Calculators", href: "/calculator" },
      { name: "Influencer Rate Calculator", href: "/social-media-tools/influencer-rate-calculator" },
      { name: "TikTok Engagement Calculator", href: "/social-media-tools/tiktok-engagement-calculator" },
    ],
    useCases: [
      "Work out the net amount you'll receive from a PayPal payment",
      "Gross up an invoice so fees don't cut into your price",
      "Split restaurant bills, trips, and rent fairly",
      "Add tips and divide totals across any group size",
      "Settle shared expenses with clear per-person amounts",
    ],
  }

  return (
    <ToolPageLayout
      header={{
        title: "Finance Tools & Calculators",
        description:
          "Free calculators for PayPal fees and fair bill splitting.",
        titleSize: "large",
        descriptionSize: "medium",
        centered: true,
        color: "blue",
      }}
      breadcrumbs={[{ label: "Finance Tools", href: "/finance-tools" }]}
      toolComponent={
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {financeTools.map((tool) => (
            <GToolCard
              key={`finance-tools-${tool.href}`}
              title={tool.title}
              description={tool.description}
              href={tool.href}
              icon={tool.icon}
            />
          ))}
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title:
          "Finance Tools — PayPal Fee Calculator & Bill Splitter",
        description:
          "Free finance tools: calculate PayPal fees including Goods & Services, and split bills fairly with tips. Fast, accurate, no signup required.",
        path: "/finance-tools",
      }}
    />
  )
}
