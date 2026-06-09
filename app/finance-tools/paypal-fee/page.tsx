import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const PayPalFeeCalculator = dynamic(() => import("@/components/finance/paypal-fee-calculator").then(mod => mod.PayPalFeeCalculator), {
  loading: () => <ToolLoader />
})
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { buildSchemas, createMetadata } from "@/lib/metadata-base"
import { Calculator, DollarSign, Target, TrendingUp, BarChart3, Copy, HelpCircle, Lightbulb, Star, Info, FileText } from "lucide-react"
import { GImage } from "@/ui/gimage"
import type { Metadata } from "next"

const TOOL_TITLE = "PayPal Fee Calculator — Instant Fees & G&S"
const TOOL_NAME = "PayPal Fee Calculator"
const TOOL_DEFINITION = "A PayPal fee calculator estimates transaction fees, seller net amount, and the gross amount to ask for across PayPal Checkout, Goods and Services, cards, international payments, QR payments, and micropayments."

const paypalMetadataOptions = {
  title: `PayPal Fee Calculator — Instant Fees & G&S`,
  description: "Free PayPal fee calculator. Calculate PayPal G&S fee, PayPal credit card fee, and processing fees for any transaction. Domestic and international rates, micropayments, and reverse-fee gross-up — for sellers, freelancers, and businesses.",
  path: "/finance-tools/paypal-fee",
  toolName: TOOL_NAME,
  definition: TOOL_DEFINITION,
  breadcrumbs: [
    { label: "Finance Tools", href: "/finance-tools" },
    { label: TOOL_NAME, href: "/finance-tools/paypal-fee" }
  ],
  schemaOptions: {
    name: "PayPal Fee Calculator",
    alternateName: [
      "PayPal Fees Calculator",
      "PayPal Calculator Fee",
      "Calculate PayPal G&S Fee",
      "PayPal Credit Card Fee Calculator",
      "PayPal Processing Fees Calculator",
      "PayPal Reverse Fee Calculator",
      "PayPal Gross Up Calculator",
      "Goods and Services Fee Calculator",
      "PayPal Friends and Family Calculator",
      "PayPal International Fee Tool",
      "PayPal Seller Fee Tool",
      "Freelancer PayPal Fee Tool",
      "Etsy PayPal Fee Calculator",
      "PayPal Micropayments Fee Tool",
      "Net Revenue PayPal Calculator",
    ],
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
}

const baseMetadata = createMetadata(paypalMetadataOptions)
const schemas = buildSchemas(paypalMetadataOptions)

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Finance Tools",
}

export default function PayPalFeeCalculatorPage() {
  const toolContent = {
    toolName: TOOL_NAME,
    definition: TOOL_DEFINITION,
    quickAnswer: "Enter the payment amount, choose the PayPal payment type, and the calculator shows the fee, what you receive, and what to ask for if you want the buyer to cover the fee. For US domestic commercial payments, common rates include 3.49% + $0.49 for PayPal Checkout and 2.99% + $0.49 for standard credit/debit card payments; international commercial payments add 1.50%.",
    keyTakeaways: [
      "PayPal fees depend on payment type, seller country, buyer country, currency, and funding method",
      "US PayPal Checkout, Guest Checkout, and Pay with Venmo are commonly 3.49% + fixed fee",
      "US standard credit/debit card commercial payments are commonly 2.99% + fixed fee",
      "US Send/Receive Money for Goods and Services is listed separately at 2.99% on PayPal's current merchant fee page",
      "International commercial payments usually add a 1.50% cross-border fee plus any currency conversion spread",
      "Use the gross-up result when you need to receive an exact net amount after PayPal deducts fees",
    ],
    overview: `Free PayPal calculator fee tool to calculate PayPal fees, net amounts, and required charges instantly. Whether you need to calculate PayPal G&S fee, PayPal credit card fee, or PayPal processing fees — this calculator covers all transaction types. Perfect for sellers, freelancers, and businesses to understand payment processing costs. Supports domestic, international, Goods & Services, Friends & Family, and credit card PayPal fee calculations.`,

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
      "PayPal Domestic Fees: Standard US commercial rates vary by payment type, including 3.49% + fixed fee for PayPal Checkout and 2.99% + fixed fee for standard credit/debit card payments.",
      "PayPal International Fees: Cross-border PayPal fee calculations (+1.5% international fee, 3-4% currency conversion fee).",
      "PayPal Special Rates: Calculate separate fee models for micropayments, charity/donation payments, QR payments, and other special transaction types.",
      "PayPal G&S Fee vs Friends & Family: Compare Goods and Services fees (seller protection) vs Friends & Family (no protection).",
      "PayPal Fee Merchant & Business Accounts: Advanced features and fee structures for high-volume merchants.",
      "PayPal vs Xoom Fee Comparison: Compare international transfer costs between PayPal and Xoom.",
      "PayPal Fee India & International Rates: Specific fee structures for India, Australia, UK, Germany, and other regions.",
      "PayPal Fee Structure: Updated rates for including percentage and fixed fee components.",
      "PayPal Fee Withdraw & Transfer: Calculate costs for instant transfers (1.75%) vs standard bank transfers (Free).",
      "PayPal Fee Calculator by Country: Country-specific calculations for US, Canada, Japan, Hong Kong, Korea, New Zealand, etc.",
      "PayPal Fee Currency Conversions: Calculate fees for USD to EUR, USD to GBP, and other currency pairs.",
      "PayPal Fee Optimization for Ecommerce: Strategies for micropayments, volume discounts, and account setup.",
      "PayPal Fee Management for Freelancers: Accurate pricing for quotes, tax deductions, and client payments."
    ],

    faqs: [
      {
        question: "How do I calculate PayPal fees?",
        answer: "Enter the transaction amount, choose domestic or international, then select the payment type. For a US PayPal Checkout payment, the common commercial rate is 3.49% + $0.49, so a $100 payment has a $3.98 fee and leaves $96.02. For standard credit/debit card commercial payments, PayPal lists 2.99% + fixed fee."
      },
      {
        question: "How do I calculate PayPal G&S fee?",
        answer: "To calculate a PayPal Goods and Services fee, enter the amount and choose the Goods and Services option. PayPal's current US merchant fee page lists Send/Receive Money for Goods and Services at 2.99%, while PayPal Checkout, Guest Checkout, and Venmo commercial flows are 3.49% + fixed fee. Pick the payment type that matches how the buyer is paying."
      },
      {
        question: "What is the PayPal credit card fee?",
        answer: "For US commercial transactions, PayPal lists standard credit and debit card payments at 2.99% + the fixed fee for the currency received, which is $0.49 for USD. Personal card-funded transfers use a separate personal-transfer fee schedule."
      },
      {
        question: "What are the fees for international payments?",
        answer: "International transactions incur an additional 1.5% fee on top of the standard domestic rate. Furthermore, if currency conversion is involved, PayPal converts funds at a retail exchange rate that includes a hefty 3-4% markup above the base exchange rate."
      },
      {
        question: "Does PayPal charge for sending money to friends and family?",
        answer: "Eligible domestic Friends & Family transfers are usually free when funded from a PayPal balance or linked bank account. Card-funded personal transfers use a separate personal fee schedule, so select the personal card option in the calculator or verify the current PayPal consumer fee page for your country."
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
        answer: "'Goods & Services' payments are commercial payments and usually charge the seller a fee, while eligible domestic 'Friends & Family' bank or balance transfers can be free but do not provide buyer/seller protection. Do not use Friends & Family for business transactions just to avoid fees."
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
      },
      {
        question: "What are PayPal fees in the UK?",
        answer: "UK PayPal fees use a different country-specific schedule from US fees. Select GBP and the UK seller location in the calculator for an estimate, then verify against PayPal's official UK fee page before using the result for invoices or pricing."
      },
      {
        question: "What's the PayPal micropayment fee rate?",
        answer: "PayPal offers a special micropayment rate for transactions under ~$10: 4.99% + $0.09 per transaction (replacing the standard 2.99% + $0.49). It's optimized for very small payments where the fixed $0.49 fee would eat a large chunk of revenue. You have to opt in to micropayments at the account level — it's not automatic, and you cannot mix-and-match per transaction."
      },
      {
        question: "Are PayPal QR code / in-person fees different?",
        answer: "Yes. PayPal in-person QR-code payments are charged at 1.90% + $0.10 — significantly cheaper than the 2.99% + $0.49 online rate. This applies when a buyer scans a QR code at a physical location using the PayPal app. The calculator above supports this fee type if you're processing in-person sales."
      },
      {
        question: "Do PayPal fees come out before or after I receive the money?",
        answer: "Fees are deducted automatically before the money is credited to your PayPal balance. If a customer sends $100 through a 3.49% + $0.49 Checkout flow, the fee is $3.98 and you receive $96.02. This is why the reverse-calculation feature is useful when you need to receive an exact net amount."
      },
      {
        question: "Has PayPal raised its fees?",
        answer: "PayPal's standard merchant rate has been incrementally rising over the past few years (from 2.9% + $0.30 historically to 2.99% + $0.49, and 3.49% + $0.49 for some Checkout flows). Always check PayPal's official fee page for current rates before settling on a fee model for your business. Our calculator uses the latest published rates."
      },
      {
        question: "How is this PayPal fee calculator different from PayPal's own?",
        answer: "PayPal's own calculator (in their help center) only handles basic domestic G&S. Our tool covers G&S vs Friends & Family vs credit card vs micropayment vs QR-code, plus international cross-border, currency conversion, reverse gross-up, and multiple country fee schedules — all in one screen, free, with no PayPal login needed."
      }
    ],

    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <GImage
            src="/images/finance/paypal-calculator-hero.png"
            alt="FastTools PayPal Fee Calculator"
            width={800}
            height={450}
            className="w-full h-auto rounded-lg shadow-md"
          />
          <h2 className="text-2xl font-bold text-foreground">PayPal Calculator Fee — Maximize Your Profits with Our PayPal Fee Calculator</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            In the world of online business and freelancing, every cent counts. Understanding your transaction costs is essential for maintaining healthy profit margins. Our PayPal rates calculator is designed to demystify complex fee structures, giving you an instant, accurate breakdown of what you’ll pay and what you’ll keep.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6 mb-4">Why Use a PayPal Fee Calculator?</h3>
          <p className="text-base text-muted-foreground mb-4">
            PayPal’s fees change based on your location, the sender’s country, and the type of transaction. Calculating these manually is prone to error. Our tool helps you:
          </p>
          <ul className="list-none space-y-3">
            <li className="flex items-start gap-2">
              <Target className="h-5 w-5 text-primary mt-0.5" />
              <span className="text-muted-foreground"><strong>Price Products Correctly:</strong> Know exactly how much to "ask for" so that you receive your full asking price after deductions.</span>
            </li>
            <li className="flex items-start gap-2">
              <Target className="h-5 w-5 text-primary mt-0.5" />
              <span className="text-muted-foreground"><strong>Calculate International Fees:</strong> Automatically factor in the additional percentage-based fees for cross-border payments.</span>
            </li>
            <li className="flex items-start gap-2">
              <Target className="h-5 w-5 text-primary mt-0.5" />
              <span className="text-muted-foreground"><strong>Optimize Invoicing:</strong> Ensure your clients cover the transaction costs by including the fee in your total invoice amount.</span>
            </li>
          </ul>

          <h3 className="text-xl font-bold text-foreground mt-6 mb-4">How the Rates are Calculated</h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            Most PayPal commercial transactions follow a percentage plus fixed-fee model. On PayPal&apos;s US merchant fee page, updated May 19, 2026, PayPal Checkout, Guest Checkout, and Pay with Venmo are listed at 3.49% + fixed fee; standard credit and debit card payments are 2.99% + fixed fee; and Send/Receive Money for Goods and Services is listed at 2.99%. International commercial payments add a 1.50% cross-border fee. The calculator separates these fee types so you can match the exact payment flow.
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6 mb-4">100% Accuracy for Freelancers and Merchants</h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            Whether you are a global seller or sending a one-time personal payment, transparency is key. Simply enter your transaction amount and select your region. Our algorithm does the rest, showing you the Total Fee, the Net Amount you will receive, and the Gross Amount you should request.
          </p>
        </article>

        {/* Real-World Examples & Case Studies */}
        <article className="space-y-6">
          <h3 className="text-xl font-bold text-heading-accent flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-primary" />
            Real-World Fee Scenarios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-card border border-border shadow-sm">
              <h4 className="font-semibold text-foreground mb-2">Freelancer Payment ($500)</h4>
              <p className="text-sm text-muted-foreground mb-3">Receiving a $500 payment from a US client.</p>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between"><span>Checkout fee (3.49% + $0.49):</span> <span className="text-red-500">-$17.94</span></div>
                <div className="flex justify-between font-bold border-t border-border pt-1"><span>You Keep:</span> <span className="text-green-600">$482.06</span></div>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border shadow-sm">
              <h4 className="font-semibold text-foreground mb-2">Small Business Sale ($50)</h4>
              <p className="text-sm text-muted-foreground mb-3">Selling a $50 handmade item online.</p>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between"><span>Checkout fee (3.49% + $0.49):</span> <span className="text-red-500">-$2.24</span></div>
                <div className="flex justify-between font-bold border-t border-border pt-1"><span>You Keep:</span> <span className="text-green-600">$47.77</span></div>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border shadow-sm">
              <h4 className="font-semibold text-foreground mb-2">International Transfer ($1,000)</h4>
              <p className="text-sm text-muted-foreground mb-3">Sending $1,000 to family in Europe.</p>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between"><span>Cross-border fee:</span> <span className="text-red-500">+1.50%</span></div>
                <div className="flex justify-between"><span>FX Markup (~4%):</span> <span className="text-red-500">~$40.00</span></div>
                <div className="flex justify-between font-bold border-t border-border pt-1"><span>Total Extra Cost:</span> <span className="text-red-600">varies by currency</span></div>
              </div>
            </div>
          </div>
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

        {/* Comparison Tables */}
        <article className="space-y-6">
          <h3 className="text-xl font-bold text-heading-accent flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            PayPal Fees vs. Competitors
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            See how PayPal stacks up against other popular payment platforms.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-heading-accent border-r border-border">Provider</th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground border-r border-border">Standard Fee</th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Instant Transfer</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border">
                  <td className="py-3 px-4 border-r border-border font-medium text-heading-accent">PayPal</td>
                  <td className="py-3 px-4 border-r border-border">3.49% + $0.49 (Checkout/Venmo); 2.99% + $0.49 cards</td>
                  <td className="py-3 px-4">1.75% (Max $25)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 border-r border-border font-medium text-heading-accent">Venmo</td>
                  <td className="py-3 px-4 border-r border-border">1.9% + $0.10</td>
                  <td className="py-3 px-4">1.75% (Min $0.25, Max $25)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 border-r border-border font-medium text-heading-accent">Stripe</td>
                  <td className="py-3 px-4 border-r border-border">2.9% + $0.30 (standard online cards)</td>
                  <td className="py-3 px-4">1% (Min $0.50)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4 border-r border-border font-medium text-heading-accent">Square</td>
                  <td className="py-3 px-4 border-r border-border">2.6% + $0.10 (In-person)</td>
                  <td className="py-3 px-4">1.5%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        {/* Regulatory & Problem Solving */}
        <article className="space-y-6">
          <h3 className="text-xl font-bold text-heading-accent flex items-center gap-2">
            <Info className="h-5 w-5 text-primary" />
            Important Regulatory Updates
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <h4 className="font-bold text-yellow-600 dark:text-yellow-500 mb-2">IRS 1099-K Reporting Changes</h4>
              <p className="text-sm text-foreground">
                For the tax year, the IRS threshold for reporting goods and services transactions is significantly lower than in previous years. If you receive payments for goods or services over <strong>$600</strong> in a calendar year, PayPal is required to file Form 1099-K. This does <em>not</em> apply to personal Friends & Family payments.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Dispute & Chargeback Fees</h4>
              <p className="text-sm text-muted-foreground">
                Merchants should be aware that if a buyer files a dispute or chargeback, PayPal may charge a <strong>Dispute Fee</strong> ranging from $15 to $30 USD per instance, depending on your dispute rate tier. This fee is levied even if you win the dispute in some high-volume cases.
              </p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h3 className="text-xl font-bold text-heading-accent flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            Breakdown of PayPal Currency Conversion Fees
          </h3>
          <GImage
            src="/images/finance/paypal-fee-breakdown.png"
            alt="PayPal Fee Breakdown Infographic"
            width={800}
            height={450}
            className="w-full h-auto rounded-lg shadow-sm my-4"
          />
          <p className="text-base text-muted-foreground leading-relaxed">
            PayPal's currency conversion fee is typically between <strong>3% and 4%</strong> above the base exchange rate. This fee is applied whenever a currency conversion is required to complete a transaction.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            <li><strong>3.0%</strong> above the base exchange rate for conversions within the US.</li>
            <li><strong>4.0%</strong> above the base exchange rate for all other currency conversions.</li>
            <li>This fee is added to the exchange rate, meaning you receive less money than the actual market value.</li>
          </ul>
        </article>

        {/* Strategies Section */}
        <article className="space-y-6">
          <h3 className="text-xl font-bold text-heading-accent flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            Strategies to Minimize Curve Fees
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
            Why Am I Being Charged More? (Troubleshooting)
          </h3>
          <div className="accordion-like space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-foreground">Cross-Border Fees</h4>
              <p className="text-sm text-muted-foreground">If the sender's account is in a different country, an extra <strong>1.50%</strong> fee usually applies, even if the currency is the same.</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-foreground">Payment Method Surcharge</h4>
              <p className="text-sm text-muted-foreground">Personal card-funded transfers use a separate personal-transfer fee schedule, whereas eligible domestic bank or balance transfers are often free.</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-foreground">Pending Holds</h4>
              <p className="text-sm text-muted-foreground">If your funds are on hold, it doesn't increase fees, but it affects cash flow. This is common for new sellers or high-value items to prevent fraud.</p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h3 className="text-xl font-bold text-heading-accent flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            Conclusion: Making Informed Decisions
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            PayPal is a powerful tool for global commerce, but its convenience comes with a price tag in the form of currency conversion fees. By understanding how these hidden costs work—specifically the 3-4% markup—you can make smarter financial decisions. Whether it&apos;s choosing to pay in the local currency or using alternative transfer services for large amounts, being informed is the first step to saving money on every transaction.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            PayPal Fee Schedule by Country
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            PayPal rates differ by seller country. Use the table below as a reference; the calculator above applies the right rate when you select your country.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border border-border">
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left border-b border-border">Seller country</th>
                  <th className="p-3 text-left border-b border-border">Domestic G&amp;S rate</th>
                  <th className="p-3 text-left border-b border-border">Cross-border surcharge</th>
                  <th className="p-3 text-left border-b border-border">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-3 font-semibold">United States</td><td className="p-3">2.99% + $0.49 (3.49% + $0.49 for Checkout)</td><td className="p-3">+1.5%</td><td className="p-3">Micropayments: 4.99% + $0.09; QR: 1.90% + $0.10</td></tr>
                <tr><td className="p-3 font-semibold">United Kingdom</td><td className="p-3">Varies by PayPal UK fee schedule</td><td className="p-3">Varies by buyer location</td><td className="p-3">Verify current UK-specific rates before invoicing</td></tr>
                <tr><td className="p-3 font-semibold">European Union</td><td className="p-3">2.49% + €0.35 (EEA)</td><td className="p-3">+1.29% (non-EEA only)</td><td className="p-3">No surcharge within EEA</td></tr>
                <tr><td className="p-3 font-semibold">Australia</td><td className="p-3">2.6% + A$0.30</td><td className="p-3">+1.5% (international)</td><td className="p-3">Different rate for charity (1.1%)</td></tr>
                <tr><td className="p-3 font-semibold">Canada</td><td className="p-3">Varies by PayPal Canada fee schedule</td><td className="p-3">Varies by buyer location</td><td className="p-3">Verify current Canada-specific rates before invoicing</td></tr>
                <tr><td className="p-3 font-semibold">India</td><td className="p-3">4.4% + ₹3 (international receive only)</td><td className="p-3">included</td><td className="p-3">PayPal India only supports cross-border</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground">
            <em>Rates change. Always verify against PayPal&apos;s official country-specific fee page before pricing your products.</em>
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            FastTools vs Other Free PayPal Fee Calculators
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border border-border">
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left border-b border-border">Feature</th>
                  <th className="p-3 text-left border-b border-border text-green-600">FastTools</th>
                  <th className="p-3 text-left border-b border-border">Airwallex</th>
                  <th className="p-3 text-left border-b border-border">Salecalc</th>
                  <th className="p-3 text-left border-b border-border">PayPal&apos;s own</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-3 font-semibold">Domestic G&amp;S fee</td><td className="p-3 text-green-600">✓</td><td className="p-3">✓</td><td className="p-3">✓</td><td className="p-3">✓</td></tr>
                <tr><td className="p-3 font-semibold">International + currency conversion</td><td className="p-3 text-green-600">✓</td><td className="p-3">✓</td><td className="p-3">partial</td><td className="p-3 text-red-500">✗</td></tr>
                <tr><td className="p-3 font-semibold">G&amp;S vs Friends &amp; Family distinction</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td></tr>
                <tr><td className="p-3 font-semibold">Credit card vs PayPal balance</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td></tr>
                <tr><td className="p-3 font-semibold">Micropayments + QR rates</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td></tr>
                <tr><td className="p-3 font-semibold">Reverse calc (gross-up)</td><td className="p-3 text-green-600">✓</td><td className="p-3">partial</td><td className="p-3">✓</td><td className="p-3 text-red-500">✗</td></tr>
                <tr><td className="p-3 font-semibold">Multi-country (US/UK/EU/AU/CA/IN)</td><td className="p-3 text-green-600">✓</td><td className="p-3">50+ countries</td><td className="p-3">50+ countries</td><td className="p-3 text-red-500">✗ (one country at a time)</td></tr>
                <tr><td className="p-3 font-semibold">No login, no upsell</td><td className="p-3 text-green-600">✓</td><td className="p-3">upsells Airwallex</td><td className="p-3">✓</td><td className="p-3 text-red-500">requires PayPal login</td></tr>
              </tbody>
            </table>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            The Same Tool, Many Names
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            This calculator answers every PayPal fee question — whether you call it a fee, charge, processing cost, or commission:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Lightbulb className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /><span>paypal fee calculator / paypal fees calculator</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /><span>paypal calculator fee / paypal calculator fees</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /><span>paypal g&amp;s fee calculator / paypal goods and service fee calculator</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /><span>paypal credit card fee calculator</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /><span>paypal processing fee calculator</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /><span>paypal fees calculator uk / paypal calculator uk</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /><span>paypal fee calculator india / australia / canada</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /><span>calculate paypal fees / how much does paypal charge</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /><span>paypal cost calculator / paypal commission calculator</span></li>
            <li className="flex items-start gap-2"><Lightbulb className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /><span>paypal micropayment calculator / paypal QR fee</span></li>
          </ul>
        </article>
      </div>
    ),

    relatedTools: [
      { name: "PayPal G&S Fee Calculator", href: "/finance-tools/paypal-goods-and-services-fee-calculator" },
      { name: "Invoice Generator", href: "/finance-tools/invoice-generator" },
      { name: "Freelance Rate Calculator", href: "/finance-tools/freelance-rate-calculator" },
      { name: "Sales Tax Calculator", href: "/finance-tools/sales-tax-calculator" },
      { name: "Discount Calculator", href: "/finance-tools/discount-calculator" },
      { name: "Bill Splitter", href: "/finance-tools/bill-splitter" },
      { name: "Tip Calculator", href: "/finance-tools/tip-calculator" },
      { name: "All Finance Tools", href: "/finance-tools" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: `PayPal Fee Calculator — Calculate PayPal G&S, Credit Card & Processing Fees`,
        description: "Free PayPal calculator fee tool. Calculate PayPal G&S fee, PayPal credit card fee calculator, and PayPal processing fees calculator. Instant results for sellers, freelancers & businesses.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Finance Tools", href: "/finance-tools" },
        { label: TOOL_NAME, href: "/finance-tools/paypal-fee" }
      ]}
      schemas={schemas}
      toolComponent={
        <div className="p-4 rounded-lg bg-card border border-border shadow">
          <PayPalFeeCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: TOOL_TITLE,
        description: "Free PayPal calculator fee tool. Calculate PayPal G&S fee, PayPal credit card fee, and PayPal processing fees instantly. Know exactly how much you'll receive or need to send.",
        path: "/finance-tools/paypal-fee"
      }}
    />
  )
}
