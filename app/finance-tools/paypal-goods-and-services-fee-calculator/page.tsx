import dynamic from "next/dynamic"
import type { Metadata } from "next"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GTable } from "@/ui/gtable"

const PayPalFeeCalculator = dynamic(
  () => import("@/components/finance/paypal-fee-calculator").then((mod) => mod.PayPalFeeCalculator),
  { loading: () => <ToolLoader /> }
)

// US Send/Receive Money for Goods and Services rate as listed on PayPal's
// merchant fee page (verify there before changing): 2.99% + fixed currency fee.
const GS_RATE = 0.0299
const GS_FIXED = 0.49

const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" })

const feeRows = [10, 50, 100, 250, 500, 1000, 5000].map((amount) => {
  const fee = Math.round((amount * GS_RATE + GS_FIXED) * 100) / 100
  return { amount, fee, net: Math.round((amount - fee) * 100) / 100 }
})

const grossUpRows = [50, 100, 250, 500, 1000].map((net) => {
  const gross = Math.round(((net + GS_FIXED) / (1 - GS_RATE)) * 100) / 100
  const fee = Math.round((gross * GS_RATE + GS_FIXED) * 100) / 100
  return { net, gross, fee }
})

const toolConfig = createToolConfig({
  toolName: "PayPal Goods and Services Fee Calculator",
  description:
    "Calculate PayPal Goods and Services fees, seller net amount, and gross-up amount for G&S payments.",
  metaTitle: "PayPal Goods and Services Fee Calculator — What You Keep",
  metaDescription:
    "PayPal Goods and Services fees: 2.99% + $0.49 fixed fee in the US — on $100 the seller keeps $96.52. Calculate any amount, gross-up invoices, and compare G&S vs Friends & Family.",
  path: "/finance-tools/paypal-goods-and-services-fee-calculator",

  header: {
    title: "PayPal Goods and Services Fee Calculator",
    description:
      "Calculate the PayPal G&S fee for sellers, see how much you keep after fees, and find the gross amount to request when you need to receive a specific net amount.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: "PayPal Fee Calculator", href: "/finance-tools/paypal-fee-calculator" },
    { label: "PayPal G&S Fee Calculator", href: "/finance-tools/paypal-goods-and-services-fee-calculator" },
  ],

  schemaOptions: {
    applicationCategory: "FinanceApplication",
    description:
      "PayPal Goods and Services fee calculator for seller fees, net amount, gross-up invoice amount, fixed fee, and cross-border surcharge.",
    alternateName: [
      "PayPal G&S Fee Calculator",
      "Goods and Services Fee Calculator",
      "PayPal Seller Fee Calculator",
      "PayPal Gross Up Calculator",
    ],
    featureList: [
      "PayPal Goods and Services fee calculation",
      "Seller net amount after fees",
      "Gross-up amount to receive a target net",
      "Domestic and international fee support",
      "Currency fixed-fee support",
      "No PayPal login required",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A PayPal Goods and Services Fee Calculator is a free tool that estimates seller fees, net received amount, and gross-up amount for PayPal G&S payments.",
    quickAnswer:
      "The US PayPal Goods and Services fee is 2.99% + $0.49: on a $100 payment the fee is $3.48 and the seller keeps $96.52. Enter any amount in the calculator for the fee and net, or work backwards — to receive a clean $100, request $103.59. Checkout, card, Venmo, and international flows can use different rates.",
    keyTakeaways: [
      "US G&S rate: 2.99% + $0.49 fixed — on $100 the seller keeps $96.52",
      "The fixed fee makes small payments expensive: a $10 G&S payment loses 7.9% to fees",
      "Gross-up to receive a target net: to keep $100, request $103.59",
      "The seller pays the G&S fee; the buyer pays the listed price only",
      "Friends & Family is NOT a legitimate way to dodge fees on sales — no protection, ToS risk",
      "Always verify final pricing against PayPal's official country-specific fee page",
    ],
    overview:
      "PayPal Goods and Services payments include buyer and seller protection, and the seller pays a processing fee for it — in the US, 2.99% plus a $0.49 fixed fee for standard G&S transfers. This focused calculator shows freelancers, marketplace sellers, creators, and small businesses exactly what PayPal deducts, with reference tables for common amounts, gross-up math for invoices where the net matters, and an honest comparison with Friends & Family. Use it for domestic G&S payments, international transactions, and reverse calculations so your payout lands where you priced it.",

    howToSteps: [
      "Enter the amount the buyer will send, or the net amount you want to receive.",
      "Choose a commercial or Goods and Services transaction type in the calculator.",
      "Select sender and receiver countries to account for domestic or cross-border fees.",
      "Review the fee, net amount, and gross-up amount.",
      "Confirm final rates on PayPal's official fee page before pricing invoices or products.",
    ],

    features: [
      "G&S seller fee calculation",
      "Net amount after PayPal fees",
      "Gross-up amount for invoices and quotes",
      "International and currency conversion fee context",
      "Works for freelancers, creators, and marketplace sellers",
      "Free, no signup, no PayPal login",
    ],

    useCases: [
      "Calculating how much a seller keeps after a PayPal G&S payment",
      "Quoting a freelance invoice where PayPal fees affect margin",
      "Estimating marketplace sale profit after payment processing",
      "Comparing domestic vs international G&S fees",
      "Explaining G&S costs before buyer-protection payments",
    ],

    aboutTool: (
      <div className="space-y-8 text-muted-foreground">
        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">PayPal G&S Fees on Common Amounts</h2>
          <p>
            At the US standard rate ({(GS_RATE * 100).toFixed(2)}% + {usd(GS_FIXED)}), here is what
            the fee and your net payout look like across typical payment sizes:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Buyer pays</th>
                  <th className="p-3 text-left">PayPal fee</th>
                  <th className="p-3 text-left">You keep</th>
                  <th className="p-3 text-left">Effective rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                {feeRows.map((row) => (
                  <tr key={row.amount}>
                    <td className="p-3 font-semibold">{usd(row.amount)}</td>
                    <td className="p-3">{usd(row.fee)}</td>
                    <td className="p-3">{usd(row.net)}</td>
                    <td className="p-3 text-muted-foreground">
                      {((row.fee / row.amount) * 100).toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </GTable>
          </div>
          <p className="text-sm">
            Notice the effective rate: the {usd(GS_FIXED)} fixed fee barely matters at $1,000 but
            pushes a $10 payment&apos;s real cost to nearly 8%. If you sell low-ticket items, batching
            payments or setting a minimum order size protects your margin.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            Gross-Up: What to Request to Receive a Target Amount
          </h2>
          <p>
            Invoicing and want a clean net figure after fees? The formula is{" "}
            <code>gross = (net + fixed fee) ÷ (1 − rate)</code>. Ready-computed:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">You want to keep</th>
                  <th className="p-3 text-left">Request (invoice amount)</th>
                  <th className="p-3 text-left">PayPal fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                {grossUpRows.map((row) => (
                  <tr key={row.net}>
                    <td className="p-3 font-semibold">{usd(row.net)}</td>
                    <td className="p-3">{usd(row.gross)}</td>
                    <td className="p-3">{usd(row.fee)}</td>
                  </tr>
                ))}
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            Goods and Services vs Friends and Family
          </h2>
          <p>
            The two PayPal payment types exist for different purposes, and the differences go far
            beyond the fee:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left"></th>
                  <th className="p-3 text-left">Goods &amp; Services</th>
                  <th className="p-3 text-left">Friends &amp; Family</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-semibold">Intended for</td>
                  <td className="p-3">Sales, services, invoices, commercial payments</td>
                  <td className="p-3">Personal transfers — gifts, splitting dinner, rent share</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Who pays a fee</td>
                  <td className="p-3">Seller: 2.99% + $0.49 (US standard G&S)</td>
                  <td className="p-3">Free from balance/bank (domestic); card-funded incurs a personal fee</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Buyer protection</td>
                  <td className="p-3">Yes — item not received / not as described disputes</td>
                  <td className="p-3">None — money sent is money gone</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Seller protection</td>
                  <td className="p-3">Yes, for eligible transactions</td>
                  <td className="p-3">None</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Using it for sales</td>
                  <td className="p-3">Correct use</td>
                  <td className="p-3">Against PayPal&apos;s terms — risk of account limitation</td>
                </tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">
            Should You Use Friends &amp; Family to Avoid the Fee?
          </h2>
          <p>
            No — not for anything that is actually a sale. Sellers who ask buyers to &quot;send as
            F&amp;F to save the fee&quot; are trading ~3% for real risks: the buyer loses all
            purchase protection (a common scam setup, which is why experienced buyers refuse),
            PayPal&apos;s terms prohibit personal payments for commercial transactions and can
            limit or freeze accounts that pattern-match to it, and business accounts can&apos;t
            receive F&amp;F at all. If the fee genuinely doesn&apos;t fit your margin, raise the
            price using the gross-up table above — it&apos;s transparent and keeps both sides
            protected.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Why G&amp;S Fees Can Differ</h2>
          <p>
            PayPal has multiple commercial transaction types. A standard G&amp;S transfer is 2.99% +
            fixed fee, but PayPal Checkout, card and guest-checkout payments, Venmo commercial
            flows, QR payments, invoicing, international payments, and currency conversion each
            carry their own rates (often 3.49% + fixed for checkout flows, plus ~1.5% cross-border
            and a conversion spread where applicable). That is why the{" "}
            <a href="/finance-tools/paypal-fee-calculator" className="text-primary hover:underline">
              full PayPal fee calculator
            </a>{" "}
            separates transaction type, payment method, country, and currency — use it when the
            buyer pays by card, from abroad, or through checkout rather than a direct G&amp;S
            transfer.
          </p>
        </article>
      </div>
    ),

    proTip:
      "Price with the gross-up formula, not by guessing: (target net + $0.49) ÷ 0.9701 gives the exact invoice amount at the standard US G&S rate. And remember the fixed fee punishes small payments — on anything under $20, consider bundling.",

    faqs: [
      {
        question: "How much is the PayPal Goods and Services fee on $100?",
        answer:
          "$3.48 at the US standard G&S rate (2.99% + $0.49), leaving the seller $96.52. On $500 the fee is $15.44 (you keep $484.56); on $1,000 it's $30.39 (you keep $969.61).",
      },
      {
        question: "Who pays the PayPal Goods and Services fee?",
        answer:
          "The seller. The buyer pays exactly the listed price; PayPal deducts the fee before the money lands in the seller's balance. If you need a specific net amount, gross-up the invoice — the table on this page shows the exact amounts to request.",
      },
      {
        question: "What's the difference between Goods and Services and Friends and Family?",
        answer:
          "G&S is for commercial payments: the seller pays 2.99% + $0.49 (US) and both sides get protection — buyers can dispute items not received or not as described. Friends & Family is for personal transfers: free from a balance or bank account, but zero protection, and using it for sales violates PayPal's terms and risks account limitation.",
      },
      {
        question: "How do I calculate PayPal G&S fees manually?",
        answer:
          "Multiply the payment amount by 2.99% and add the $0.49 fixed fee (US standard rate). For example, a $250 payment: $250 × 0.0299 = $7.48, plus $0.49 = $7.97 fee, so you keep $242.03. The calculator above does this for any amount, including international surcharges.",
      },
      {
        question: "Can I make the buyer pay the G&S fee?",
        answer:
          "You can price your product or invoice to cover your costs (the gross-up approach), but PayPal's rules and some local laws restrict adding a separate named surcharge for the payment method. Building the fee into the price is the safe, standard practice.",
      },
      {
        question: "Does international G&S cost more?",
        answer:
          "Usually yes. Cross-border payments typically add around 1.5% on top of the commercial rate, and if currency conversion is involved PayPal applies a conversion spread as well. Use the main calculator's country and currency options for those cases.",
      },
      {
        question: "Is there a way to lower PayPal G&S fees?",
        answer:
          "Legitimately: bundle small payments to dilute the $0.49 fixed fee, bill in your customer's currency to avoid conversion spread, check whether PayPal's micropayments rate (5% + $0.09, US) fits your catalog — it beats the standard rate below about $20 per sale, and negotiate merchant rates at high volume. Asking buyers for Friends & Family is not a legitimate option — it removes protection and risks your account.",
      },
    ],

    relatedTools: [
      { name: "PayPal Fee Calculator (all payment types)", href: "/finance-tools/paypal-fee-calculator" },
      { name: "Invoice Generator", href: "/finance-tools/invoice-generator" },
      { name: "Freelance Rate Calculator", href: "/finance-tools/freelance-rate-calculator" },
      { name: "Quarterly Tax Calculator", href: "/finance-tools/quarterly-tax-calculator" },
      { name: "Sales Tax Calculator", href: "/finance-tools/sales-tax-calculator" },
      { name: "Bill Splitter", href: "/finance-tools/bill-splitter" },
      { name: "Currency Converter", href: "/converters/currency" },
      { name: "All Finance Tools", href: "/finance-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function PayPalGoodsAndServicesFeeCalculatorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<PayPalFeeCalculator />)} />
}
