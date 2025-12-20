import { PayPalFeeCalculator } from "@/components/finance/paypal-fee-calculator"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, DollarSign, Target, TrendingUp, BarChart3, Copy, HelpCircle, Lightbulb, Star } from "lucide-react"
import type { Metadata } from "next"
import { getCurrentYear } from "@/lib/utils"

const TOOL_TITLE = "PayPal Fee Calculator - Calculate Transaction Fees"
const TOOL_NAME = "PayPal Fee Calculator"

const baseMetadata = createMetadata({
  title: TOOL_TITLE,
  description: "Calculate PayPal fees instantly for domestic or international payments. Know exactly how much you'll receive or need to send. Free & supports all currencies.",
  path: "/finance-tools/paypal-fee",
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: TOOL_NAME, href: "/finance-tools/paypal-fee" }
  ],
  schemaOptions: {
    name: "PayPal Fee Calculator",
    alternateName: "PayPal Fees Calculator",
    applicationCategory: "FinanceApplication",
    featureList: [
      "PayPal fee calculation",
      "Transaction fee calculator",
      "Net amount calculation",
      "Gross amount calculation",
      "Country-specific fees",
      "Currency conversion fees",
      "Business vs personal fees",
      "Micropayment pricing",
      "Nonprofit discounts",
      "Fee comparison tools"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
  keywords: [
    "paypal fee calculator",
    `paypal fees ${getCurrentYear()}`,
    "calculate paypal fee",
    "paypal fee calculator online",
    "free paypal fee calculator",
    "paypal fee tool",
    "paypal fee estimator",
    "paypal personal fee calculator",
    "paypal business fee calculator",
    "paypal merchant fee calculator",
    "paypal commercial fee calculator",
    "paypal donation fee calculator",
    "paypal invoice fee calculator",
    "paypal goods and services fee calculator",
    "paypal friends and family fee calculator",
    "paypal sending fee calculator",
    "paypal receiving fee calculator",
    "paypal transaction fee calculator",
    "paypal payment fee calculator",
    "paypal transfer fee calculator",
    "paypal withdrawal fee calculator",
    "paypal international fee calculator",
    "paypal domestic fee calculator",
    "paypal cross border fee calculator",
    "paypal multi currency fee calculator",
    "paypal foreign exchange fee calculator",
    "paypal currency conversion fee calculator",
    "paypal exchange rate fee calculator"
  ]
}

export default function PayPalFeeCalculatorPage() {
  const toolContent = {
    toolName: TOOL_NAME,
    overview: `Calculate PayPal transaction fees, net amounts, and required charges instantly. Perfect for sellers, freelancers, and businesses to understand payment processing costs. Our PayPal fee calculator online supports PayPal fee transfer, PayPal fee send money, PayPal fees as seller, PayPal G&S fee, and international calculations.`,

    howToSteps: [
      "Enter Transaction Amount: Input the total amount you are sending or receiving.",
      "Select Fee Type: Choose between Domestic (standard) or International (cross-border) rates.",
      "Choose Payment Method: Select if the payment is via PayPal Balance, Bank Account, or Credit Card.",
      "Calculate Fees: Instantly see the fee amount, the amount you'll receive (Net), and how much to ask for (Gross).",
      "Reverse Calculation: Use the 'Gross Amount' feature to calculate how much to invoice to receive a specific amount."
    ],

    features: [
      "PayPal Transaction Fee Calculation: Calculate exact PayPal fees for personal, business, commercial, and donation transactions.",
      "PayPal Net Amount Calculator: Determine exactly how much you'll receive after PayPal deducts their percentage fees and fixed fees.",
      "PayPal Gross Amount Calculator: Calculate how much to charge customers to receive your desired net amount after PayPal fees.",
      "Multi-Currency Support: Support for USD, EUR, GBP, AUD, CAD, JPY, INR, BRL, MXN, SGD, HKD, and 20+ currencies."
    ],

    useCases: [
      "PayPal Domestic Fees: Standard PayPal fee structure for domestic transactions (Business: 2.9% + $0.49, Personal Credit Card: 2.9% + $0.30).",
      "PayPal International Fees: Cross-border PayPal fee calculations (+1.5% international fee, 3-4% currency conversion fee).",
      "PayPal Special Rates: Reduced PayPal fees for micropayments (5% + $0.05) and nonprofits (1.99% + $0.49).",
      "PayPal G&S Fee vs Friends & Family: Compare Goods and Services fees (seller protection) vs Friends & Family (no protection).",
      "PayPal Fee Merchant & Business Accounts: Advanced features and fee structures for high-volume merchants.",
      "PayPal vs Xoom Fee Comparison: Compare international transfer costs between PayPal and Xoom.",
      "PayPal Fee India & International Rates: Specific fee structures for India, Australia, UK, Germany, and other regions.",
      "PayPal Fee Structure 2025: Updated rates for 2025 including percentage and fixed fee components.",
      "PayPal Fee Withdraw & Transfer: Calculate costs for instant transfers (1.75%) vs standard bank transfers (Free).",
      "PayPal Fee Calculator by Country: Country-specific calculations for US, Canada, Japan, Hong Kong, Korea, New Zealand, etc.",
      "PayPal Fee Currency Conversions: Calculate fees for USD to EUR, USD to GBP, and other currency pairs.",
      "PayPal Fee Optimization for Ecommerce: Strategies for micropayments, volume discounts, and account setup.",
      "PayPal Fee Management for Freelancers: Accurate pricing for quotes, tax deductions, and client payments."
    ],

    faqs: [
      {
        question: "How are PayPal business fees calculated?",
        answer: "For domestic business transactions, the standard fee is 2.9% of the transaction amount plus a fixed fee of $0.49. For example, on a $100 sale, you would pay $3.39 in fees ($2.90 + $0.49)."
      },
      {
        question: "What are the fees for international payments?",
        answer: "International transactions incur an additional 1.5% fee on top of the standard domestic rate. Furthermore, if currency conversion is involved, PayPal converts funds at a retail exchange rate that includes a hefty 3-4% markup above the base exchange rate."
      },
      {
        question: "Does PayPal charge for sending money to friends and family?",
        answer: "Sending money to friends and family is free if you use your PayPal Balance or linked bank account for domestic transfers. However, if you use a credit or debit card, a fee of 2.9% + $0.30 applies."
      },
      {
        question: "How does the PayPal currency conversion fee work?",
        answer: "When you pay in a currency different from your account's holding currency, PayPal adds a 3-4% currency conversion spread to the exchange rate. This is often a hidden cost that results in you paying more than the mid-market rate found on Google."
      },
      {
        question: "How much is the fee for instant bank transfers?",
        answer: "Standard bank transfers (1-3 business days) are free. However, if you want an Instant Transfer to your bank card or debit card, PayPal charges 1.75% of the transfer amount, with a minimum fee of $0.25 and a maximum of $25."
      },
      {
        question: "Can I avoid PayPal fees?",
        answer: "For personal transactions, you can avoid fees by using your bank account or balance designated as 'Friends & Family'. For business transactions, fees are unavoidable, but you can minimize costs by billing in your customers' currency to avoid conversion fees or qualifying for volume discounts."
      },
      {
        question: "What is the difference between Goods & Services and Friends & Family fees?",
        answer: "'Goods & Services' payments include Purchase Protection but charge the seller a fee (typically 2.9% + $0.49). 'Friends & Family' payments have no fee for bank transfers but offer no buyer/seller protection."
      },
      {
        question: "Are PayPal fees tax deductible?",
        answer: "Yes, for business accounts, PayPal transaction fees are generally considered a cost of doing business and are tax-deductible. Always check your monthly statements for a total of fees paid to include in your expense reports."
      },
      {
        question: "How do I calculate the gross amount to charge clients?",
        answer: "To receive a specific net amount (e.g., $100), you need to charge a higher gross amount to cover the fees. Use the 'Gross Amount' tab in our calculator to determine exactly what to invoice. For $100 net, you'd typically charge around $103.50."
      },
      {
        question: "Does PayPal have hidden fees?",
        answer: "While standard transaction fees are transparent, 'hidden' costs often appear in the form of currency conversion spreads (3-4% markup) and cross-border fees (1.5%). Always review the detailed fee breakdown before finalizing international transactions."
      }
    ],

    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Understanding PayPal Currency Conversion Fees: How Much Will You Really Pay?</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            In today's global economy, using PayPal for international transactions has become second nature for many. However, one aspect often overlooked is PayPal's currency conversion fees, which can eat into your hard-earned money. Understanding these fees is crucial for anyone looking to transact across borders, whether you're a freelancer, small business owner, or simply someone sending money to friends or family. But how much will you really pay? In this article, we'll break down the intricacies of PayPal's currency conversion process, helping you decipher the charges that can significantly impact your bottom line. Get ready to uncover the hidden costs and equip yourself with the knowledge you need to make informed financial decisions when using PayPal!
          </p>
        </article>

        <article className="space-y-6">
          <h3 className="text-xl font-bold text-heading-accent flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            How PayPal Currency Conversion Works
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            When you send or receive money in a currency different from your account's primary currency, PayPal automatically converts the funds. This process happens instantly, but it comes at a cost. PayPal uses a retail exchange rate, which is the wholesale rate plus a conversion service charge. This means the rate you see on Google is not the rate PayPal uses; theirs includes a markup.
          </p>
        </article>

        <article className="space-y-6">
          <h3 className="text-xl font-bold text-heading-accent flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            Breakdown of PayPal Currency Conversion Fees
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            PayPal's currency conversion fee is typically between <strong>3% and 4%</strong> above the base exchange rate. This fee is applied whenever a currency conversion is required to complete a transaction.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            <li><strong>3.0%</strong> above the base exchange rate for conversions within the US.</li>
            <li><strong>4.0%</strong> above the base exchange rate for all other currency conversions.</li>
            <li>This fee is added to the exchange rate, meaning you receive less money than the actual market value.</li>
          </ul>
        </article>

        <article className="space-y-6">
          <h3 className="text-xl font-bold text-heading-accent flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Comparing PayPal's Fees to Other Payment Processors
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            While PayPal is convenient, its fees are often higher than competitors. For example:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-heading-accent border-r border-border">Provider</th>
                  <th className="text-center py-3 px-4 font-semibold text-muted-foreground">Currency Conversion Fee</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 px-4 border-r border-border font-medium text-heading-accent">PayPal</td>
                  <td className="text-center py-3 px-4">3.0% - 4.0% markup</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 border-r border-border font-medium text-heading-accent">Wise (formerly TransferWise)</td>
                  <td className="text-center py-3 px-4">~0.5% - 1.0% (Mid-market rate)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 border-r border-border font-medium text-heading-accent">Payoneer</td>
                  <td className="text-center py-3 px-4">~2.0% markup</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 border-r border-border font-medium text-heading-accent">Stripe</td>
                  <td className="text-center py-3 px-4">1.0% + FX rate margin</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article className="space-y-6">
          <h3 className="text-xl font-bold text-heading-accent flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Factors Influencing Currency Conversion Rates
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            Several factors determine the final rate you get:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            <li><strong>Market Volatility:</strong> Exchange rates fluctuate constantly based on global markets.</li>
            <li><strong>Transaction Type:</strong> Rates may differ for personal transfers vs. business usage.</li>
            <li><strong>Card Issuer Policies:</strong> If you use a credit card, your bank might charge its own foreign transaction fee on top of PayPal's.</li>
          </ul>
        </article>

        <article className="space-y-6">
          <h3 className="text-xl font-bold text-heading-accent flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            Strategies to Minimize Currency Conversion Fees
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2">1. Bill in Original Currency</h4>
              <p className="text-sm text-muted-foreground">If you have a card with no foreign transaction fees, ask PayPal to bill you in the seller's currency. Your bank will likely offer a better rate.</p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2">2. Use Alternatives like Wise</h4>
              <p className="text-sm text-muted-foreground">For large transfers, consider dedicated remix services which offer mid-market rates.</p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2">3. Hold Multiple Currencies</h4>
              <p className="text-sm text-muted-foreground">If you receive foreign payments, keep them in that currency balance instead of auto-converting.</p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2">4. Check 'Conversion Options'</h4>
              <p className="text-sm text-muted-foreground">During checkout, look for "See currency options" and choose to pay in the seller's currency to let your card issuer handle the conversion.</p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h3 className="text-xl font-bold text-heading-accent flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-primary" />
            Common Scenarios Where Fees Apply
          </h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            <li><strong>Buying from International Stores:</strong> Purchasing goods from a seller in another country.</li>
            <li><strong>Sending Money Abroad:</strong> Transferring funds to friends or family overseas.</li>
            <li><strong>Reverting Funds:</strong> If a refund is issued, the reversed exchange rate might differ, causing you to lose money.</li>
            <li><strong>Receiving Foreign Payments:</strong> Freelancers getting paid in USD or EUR while their account is in GBP or AUD.</li>
          </ul>
        </article>

        <article className="space-y-6">
          <h3 className="text-xl font-bold text-heading-accent flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            Conclusion: Making Informed Decisions
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            PayPal is a powerful tool for global commerce, but its convenience comes with a price tag in the form of currency conversion fees. By understanding how these hidden costs work—specifically the 3-4% markup—you can make smarter financial decisions. Whether it's choosing to pay in the local currency or using alternative transfer services for large amounts, being informed is the first step to saving money on every transaction.
          </p>
        </article>
      </div>
    ),

    relatedTools: [
      { name: "Invoice Generator", href: "/finance-tools/invoice-generator" },
      { name: "Discount Calculator", href: "/finance-tools/discount-calculator" },
      { name: "Bill Splitter", href: "/finance-tools/bill-splitter" },
      { name: "Tip Calculator", href: "/finance-tools/tip-calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: `PayPal Fee Calculator (${getCurrentYear()})`,
        description: "Calculate PayPal transaction fees, net amounts, and required charges instantly. Perfect for sellers, freelancers, and businesses to understand payment processing costs.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: TOOL_NAME, href: "/finance-tools/paypal-fee" }
      ]}
      toolComponent={
        <div className="p-4 rounded-lg bg-card border border-border shadow">
          <PayPalFeeCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: "Calculate PayPal fees instantly for domestic or international payments. Know exactly how much you'll receive or need to send. Free & supports all currencies.",
        path: "/finance-tools/paypal-fee"
      }}
    />
  )
}
