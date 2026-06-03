import dynamic from "next/dynamic"
import type { Metadata } from "next"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const PayPalFeeCalculator = dynamic(
  () => import("@/components/finance/paypal-fee-calculator").then((mod) => mod.PayPalFeeCalculator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "PayPal Goods and Services Fee Calculator",
  description:
    "Calculate PayPal Goods and Services fees, seller net amount, and gross-up amount for G&S payments.",
  metaTitle: "PayPal Goods and Services Fee Calculator - G&S Fees",
  metaDescription:
    "Free PayPal Goods and Services fee calculator. Calculate PayPal G&S fees, seller net amount, buyer gross-up, fixed fee, and international surcharge.",
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
    { label: "PayPal Fee Calculator", href: "/finance-tools/paypal-fee" },
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
      "PayPal Buyer Protection Fee Calculator",
      "PayPal Gross Up Calculator",
      "PayPal Net Amount Calculator",
      "G&S Calculator PayPal",
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
      "Enter the payment amount and choose the commercial Goods and Services option. The calculator shows the PayPal fee, seller net amount, and the gross amount to request if you want to receive a specific net total.",
    keyTakeaways: [
      "Goods and Services payments usually charge the seller a percentage plus a fixed fee",
      "US PayPal merchant G&S rate is listed by PayPal as 2.99% plus the applicable fixed currency fee",
      "Some checkout, invoice, Venmo, Pay Later, international, and currency-conversion flows can use different rates",
      "Use gross-up when you need to receive a target net amount after fees",
      "Always verify final pricing against PayPal's official country-specific fee page",
    ],
    overview:
      "PayPal Goods and Services payments include buyer and seller protection features, but sellers pay processing fees. This focused G&S calculator helps freelancers, marketplace sellers, creators, and small businesses estimate what PayPal will deduct from a payment. Use it for domestic G&S payments, international transactions, fixed-fee currencies, and reverse calculations where you need to know what amount to request so your net payout lands correctly.",

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
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What Counts As PayPal Goods and Services?</h3>
          <p>
            Goods and Services is used when a payment is connected to a product, service, invoice, marketplace sale, or commercial transaction. It is different from Friends and Family, which is intended for personal transfers and does not provide the same buyer or seller protection.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why G&S Fees Can Differ</h3>
          <p>
            PayPal has multiple commercial transaction types. A simple G&S transfer, PayPal Checkout, Pay Later, card payment, QR payment, invoice, international payment, or currency conversion may each use a different rate. That is why the calculator separates transaction type, payment method, country, and currency.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Formula</h3>
          <p>
            Standard fee math is: fee = amount x percentage + fixed fee. Net amount = amount - fee. For gross-up, the calculator solves the reverse: gross amount = (desired net + fixed fee) / (1 - percentage).
          </p>
        </div>
      </div>
    ),

    proTip:
      "When pricing products or invoices, calculate fees before quoting the customer. A small fixed fee matters a lot on low-ticket payments, while percentage and currency conversion fees matter most on larger international payments.",

    faqs: [
      {
        question: "Who pays the PayPal Goods and Services fee?",
        answer:
          "For commercial Goods and Services payments, the seller or recipient usually pays the PayPal processing fee before the net amount reaches their balance.",
      },
      {
        question: "What is the PayPal G&S fee in the US?",
        answer:
          "PayPal's US merchant-fee page lists Send/Receive Money for Goods and Services at 2.99% plus the applicable fixed currency fee. Other commercial flows such as PayPal Checkout, cards, Pay Later, QR, international, or currency conversion can differ.",
      },
      {
        question: "How do I calculate PayPal G&S fees manually?",
        answer:
          "Multiply the payment amount by the percentage rate, then add the fixed fee for the currency. For example, with a 2.99% rate and $0.49 fixed fee, a $100 payment has a fee of $3.48 and a seller net of $96.52.",
      },
      {
        question: "Can I make the buyer pay the G&S fee?",
        answer:
          "You can price your product or invoice to cover your costs, but PayPal and local rules may restrict adding a separate payment surcharge. Check PayPal's terms and local laws before adding separate fee lines.",
      },
      {
        question: "Does international G&S cost more?",
        answer:
          "Usually yes. Cross-border payments and currency conversion can add extra fees on top of the domestic commercial transaction fee.",
      },
    ],

    relatedTools: [
      { name: "PayPal Fee Calculator", href: "/finance-tools/paypal-fee" },
      { name: "Invoice Generator", href: "/finance-tools/invoice-generator" },
      { name: "Freelance Rate Calculator", href: "/finance-tools/freelance-rate-calculator" },
      { name: "Currency Converter", href: "/converters/currency" },
      { name: "All Finance Tools", href: "/finance-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function PayPalGoodsAndServicesFeeCalculatorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<PayPalFeeCalculator />)} />
}
