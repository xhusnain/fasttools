import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { notFound } from "next/navigation"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"
import { GTable } from "@/ui/gtable"
import { stateTaxRates, stateSlug } from "@/lib/sales-tax-rates"

const SalesTaxCalculator = dynamic(
  () => import("@/components/finance/sales-tax-calculator"),
  { loading: () => <ToolLoader /> }
)

// The state pages are generated from the SAME rate table the calculator uses
// (lib/sales-tax-rates.ts), so page content and tool output always agree.
// Rates verified July 2026 — see the data file's header note.

const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" })

const PURCHASE_AMOUNTS = [10, 50, 100, 500, 1000]

type Props = {
  params: Promise<{ state: string }>
}

const bySlug = Object.fromEntries(stateTaxRates.map((s) => [stateSlug(s.state), s]))

export async function generateStaticParams() {
  return stateTaxRates.map((s) => ({ state: stateSlug(s.state) }))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { state } = await props.params
  const data = bySlug[state]
  if (!data) return {}

  const title = `${data.state} Sales Tax Calculator — ${data.stateRate}% State Rate`
  const description =
    data.stateRate === 0 && data.maxRate === 0
      ? `${data.state} has no sales tax — 0% statewide with no local additions. Calculate totals and compare with other states.`
      : `${data.state} sales tax: ${data.stateRate}% state rate, up to ${data.maxRate}% combined with local taxes. Calculate exact tax on any purchase amount, forward or reverse.`

  return {
    title,
    description,
    alternates: { canonical: `/finance-tools/sales-tax-calculator/${state}` },
  }
}

export default async function StateSalesTaxPage(props: Props) {
  const { state } = await props.params
  const data = bySlug[state]

  if (!data) {
    notFound()
  }

  const noTax = data.stateRate === 0 && data.maxRate === 0
  const zeroStateWithLocal = data.stateRate === 0 && data.maxRate > 0

  // Rank by state base rate (1 = highest)
  const rank =
    stateTaxRates.filter((s) => s.stateRate > data.stateRate).length + 1

  const rows = PURCHASE_AMOUNTS.map((amount) => ({
    amount,
    stateTax: (amount * data.stateRate) / 100,
    maxTax: (amount * data.maxRate) / 100,
  }))

  const quickAnswer = noTax
    ? `${data.state} has no sales tax: the state rate is 0% and there are no local sales taxes, so a $100 purchase costs exactly $100. ${data.state} is one of the few US states with no statewide or local sales tax.`
    : zeroStateWithLocal
      ? `${data.state} has no statewide sales tax (0%), but local jurisdictions can levy their own — up to ${data.maxRate}% combined. A $100 purchase costs between $100 and ${usd(100 + data.maxRate)} depending on locality. Enter your amount and locality rate above for the exact figure.`
      : `${data.state} sales tax is ${data.stateRate}% at the state level; with local additions the combined rate reaches up to ${data.maxRate}%. On a $100 purchase that's ${usd((100 * data.stateRate) / 100)} in state tax alone and up to ${usd((100 * data.maxRate) / 100)} combined. Use the calculator above for any amount — forward or reverse.`

  const toolConfig = createToolConfig({
    toolName: `${data.state} Sales Tax Calculator`,
    description: quickAnswer,
    metaTitle: `${data.state} Sales Tax Calculator — ${data.stateRate}% State Rate`,
    metaDescription: quickAnswer,
    path: `/finance-tools/sales-tax-calculator/${state}`,

    schemaOptions: {
      applicationCategory: "FinanceApplication",
      description: quickAnswer,
      alternateName: [
        `${data.state} sales tax rate`,
        `sales tax in ${data.state}`,
        `${data.state} tax calculator`,
      ],
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },

    header: {
      title: `${data.state} Sales Tax Calculator`,
      description: noTax
        ? `${data.state} charges no sales tax. Use the calculator to compare what a purchase would cost in other states.`
        : `Calculate ${data.state} sales tax on any amount — ${data.stateRate}% state rate, up to ${data.maxRate}% with local taxes. Forward, reverse, and rate-finding modes.`,
      titleSize: "medium",
      descriptionSize: "small",
      color: "green",
    },

    breadcrumbs: [
      { label: "Finance Tools", href: "/finance-tools" },
      { label: "Sales Tax Calculator", href: "/finance-tools/sales-tax-calculator" },
      { label: data.state, href: `/finance-tools/sales-tax-calculator/${state}` },
    ],

    content: {
      definition: noTax
        ? `${data.state} is one of the US states with no sales tax — neither the state nor its local jurisdictions levy one, so the sticker price is the checkout price.`
        : `The ${data.state} sales tax is a consumption tax of ${data.stateRate}% levied by the state on retail purchases${data.localTax > 0 ? `, with local jurisdictions adding up to roughly ${data.localTax}% more (maximum combined ${data.maxRate}%)` : ", with no local additions"}.`,
      quickAnswer,
      keyTakeaways: noTax
        ? [
            `${data.state} has 0% sales tax — no state rate, no local additions`,
            "The sticker price is the final price at checkout",
            "Businesses selling INTO other states may still owe those states' taxes (economic nexus)",
            "Compare any purchase against other states with the calculator above",
          ]
        : [
            `${data.state} state rate: ${data.stateRate}%`,
            data.localTax > 0
              ? `Local additions up to ~${data.localTax}% → maximum combined ${data.maxRate}%`
              : `No local sales taxes — ${data.maxRate}% is the rate statewide`,
            `Ranks #${rank} of 51 for state base rate`,
            "Your exact rate depends on the delivery/purchase locality — use the max column for worst-case budgeting",
            "Rates change by legislation — verify with the state DOR before filing",
          ],
      overview: noTax
        ? `${data.state} is famous for it: no state sales tax, and no local sales taxes either. What you see on the tag is what you pay. This page exists because "sales tax in ${data.state}" is still a real question — for movers, cross-border shoppers, and online sellers wondering about their obligations. The short version for shoppers: there's nothing to calculate. For businesses it's subtler: selling into OTHER states can still create economic-nexus obligations there, and the calculator above handles any state's math when you need it.`
        : `This page calculates ${data.state} sales tax with the same rate table the main calculator uses: ${data.stateRate}% state base rate${data.localTax > 0 ? `, plus local rates that can add up to roughly ${data.localTax}% depending on the city and county — a maximum combined rate of ${data.maxRate}%` : `, with no local additions anywhere in the state`}. The table below precomputes common purchase amounts at both the state-only and maximum combined rates; the calculator handles any amount, including reverse calculations ("price included tax — how much was the tax?").`,

      aboutTool: (
        <div className="space-y-10">
          {!noTax && (
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                {data.state} Sales Tax on Common Amounts
              </h2>
              <div className="overflow-x-auto">
                <GTable>
                  <thead className="bg-muted text-foreground font-semibold">
                    <tr>
                      <th className="p-3 text-left">Purchase</th>
                      <th className="p-3 text-left">State tax ({data.stateRate}%)</th>
                      <th className="p-3 text-left">Max combined ({data.maxRate}%)</th>
                      <th className="p-3 text-left">Total (max)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-sm">
                    {rows.map((row) => (
                      <tr key={row.amount}>
                        <td className="p-3 font-semibold">{usd(row.amount)}</td>
                        <td className="p-3">{usd(row.stateTax)}</td>
                        <td className="p-3">{usd(row.maxTax)}</td>
                        <td className="p-3">{usd(row.amount + row.maxTax)}</td>
                      </tr>
                    ))}
                  </tbody>
                </GTable>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Rates from this site&apos;s shared state table, last verified July 2026. Local rates
                vary by city and county — confirm your locality&apos;s current rate with the{" "}
                {data.state} Department of Revenue before relying on it for filing.
              </p>
            </article>
          )}

          <article className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              How {data.state} Compares
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {noTax
                ? `${data.state} sits in the small no-sales-tax club alongside ${stateTaxRates
                    .filter((s) => s.stateRate === 0 && s.maxRate === 0 && s.state !== data.state)
                    .map((s) => s.state)
                    .join(", ")}. At the other end, combined rates in the highest-tax states exceed 11–13%. For big-ticket purchases, that difference is real money — which is why electronics and jewelry retailers cluster just inside no-tax state borders.`
                : `${data.state}'s ${data.stateRate}% base rate ranks #${rank} of the 50 states plus DC. ${
                    data.localTax > 0
                      ? `The spread matters here: depending on locality, the same purchase carries anywhere from ${data.stateRate}% to ${data.maxRate}% — always check the local rate for large purchases.`
                      : `With no local additions, ${data.state} is one of the simpler states: one rate everywhere.`
                  } Five states charge no state sales tax at all: ${stateTaxRates
                    .filter((s) => s.stateRate === 0)
                    .map((s) => s.state)
                    .join(", ")}.`}
            </p>
          </article>
        </div>
      ),

      proTip: noTax
        ? `Moving or shopping across state lines? Your home state may charge "use tax" on major purchases brought back from ${data.state} — the no-tax advantage legally applies to goods consumed there, not to dodging your own state's tax on a car or boat.`
        : `For big purchases in ${data.state}, the local component is the variable that matters — the state's ${data.stateRate}% is fixed, but choosing a pickup or delivery location in a low-local-rate jurisdiction can legitimately change the combined rate you pay.`,

      faqs: [
        {
          question: `What is the sales tax rate in ${data.state}?`,
          answer: noTax
            ? `0%. ${data.state} levies no state sales tax and permits no local sales taxes.`
            : `${data.stateRate}% at the state level. ${
                data.localTax > 0
                  ? `Cities and counties add local rates up to roughly ${data.localTax}%, so the combined rate ranges from ${data.stateRate}% to ${data.maxRate}% depending on where the sale happens.`
                  : `There are no local sales taxes, so ${data.maxRate}% applies statewide.`
              }`,
        },
        {
          question: `How much is sales tax on $100 in ${data.state}?`,
          answer: noTax
            ? `$0 — a $100 purchase costs exactly $100 in ${data.state}.`
            : `${usd((100 * data.stateRate) / 100)} at the state rate, and up to ${usd((100 * data.maxRate) / 100)} at the maximum combined rate — so a $100 purchase totals between ${usd(100 + (100 * data.stateRate) / 100)} and ${usd(100 + (100 * data.maxRate) / 100)}.`,
        },
        {
          question: "How do I calculate the pre-tax price from a total?",
          answer:
            "Use the calculator's reverse mode: enter the after-tax total and the rate, and it returns the base price and the tax portion — useful for expense reports and invoices that only show the final amount.",
        },
        {
          question: "Are these rates guaranteed current?",
          answer: `They're from this site's shared rate table (last verified July 2026) — the same data the calculator uses. Legislatures and localities change rates, so for filing or compliance purposes always confirm with the ${data.state} Department of Revenue.`,
        },
      ],

      relatedTools: [
        { name: "Sales Tax Calculator (all states)", href: "/finance-tools/sales-tax-calculator" },
        { name: "Tax Calculator", href: "/finance-tools/tax-calculator" },
        { name: "Quarterly Tax Calculator", href: "/finance-tools/quarterly-tax-calculator" },
        { name: "Discount Calculator", href: "/finance-tools/discount-calculator" },
        { name: "All Finance Tools", href: "/finance-tools" },
      ],
    },
  })

  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(<SalesTaxCalculator defaultState={data.state} />)}
    />
  )
}
