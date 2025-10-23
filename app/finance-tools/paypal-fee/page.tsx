import { PayPalFeeCalculator } from "@/components/paypal-fee-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Calculator, 
  DollarSign, 
  CreditCard, 
  Globe, 
  Shield, 
  Zap, 
  Target, 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  Users, 
  Award, 
  Clock, 
  FileText, 
  Percent,
  AlertCircle,
  CheckCircle,
  Info,
  ExternalLink,
  Copy,
  Download,
  Share2,
  Settings,
  HelpCircle,
  BookOpen,
  Lightbulb,
  Star,
  Heart,
  Gift,
  ShoppingCart,
  Banknote,
  Coins,
  Receipt,
  Wallet,
  PiggyBank,
  TrendingDown,
  ArrowUp,
  ArrowDown,
  Minus,
  Plus,
  Equal,
  Hash,
  HashIcon
} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { getCurrentYear } from "@/lib/utils"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: `PayPal Fee Calculator – Calculate PayPal Fees Instantly (${getCurrentYear()})`,
  description: "Calculate PayPal fees instantly for domestic or international payments. Know exactly how much you'll receive or need to send. Free & supports all currencies.",
  keywords: [
    "paypal fee calculator",
    `paypal fees ${getCurrentYear()}`,
    "calculate paypal fee",
    "paypal international fee calculator",
    "paypal business fee calculator",
    "paypal merchant fee calculator",
    "paypal sending fee calculator",
    "paypal receiving fee calculator",
    "paypal transaction fee calculator",
    "paypal usd eur gbp inr fees",
    "paypal percentage calculator",
    "paypal invoice fee calculator",
    "paypal net amount calculator",
    "paypal reverse fee calculator",
    "paypal deduction calculator",
    "paypal goods and services fee",
    "paypal personal payment fee",
    "paypal refund fee calculator",
    "paypal currency conversion fee calculator",
    "paypal charge calculator",
    "paypal profit calculator",
    "paypal net received calculator",
    "free paypal calculator",
    "paypal fee tool online",
    "paypal cost calculator",
    "calculate paypal fees instantly"
  ],
  alternates: { canonical: "https://www.fasttools.store/finance-tools/paypal-fee" },
  openGraph: {
    title: `PayPal Fee Calculator – Calculate PayPal Fees Instantly (${getCurrentYear()})`,
    description: "Calculate PayPal fees instantly for domestic or international payments. Know exactly how much you'll receive or need to send. Free & supports all currencies.",
    url: "https://www.fasttools.store/finance-tools/paypal-fee",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free PayPal Fee Calculator - Calculate Transaction Fees Instantly",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `PayPal Fee Calculator – Calculate PayPal Fees Instantly (${getCurrentYear()})`,
    description: "Calculate PayPal fees instantly for domestic or international payments. Know exactly how much you'll receive or need to send. Free & supports all currencies.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "PayPal Fee Calculator",
      alternateName: "PayPal Fees Calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/finance-tools/paypal-fee",
      description: "Calculate PayPal fees instantly for domestic or international payments. Know exactly how much you'll receive or need to send. Free & supports all currencies.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
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
      ],
      author: {
        "@type": "Organization",
        name: "FastTools",
        url: "https://www.fasttools.store"
      },
      publisher: { 
        "@type": "Organization", 
        name: "FastTools", 
        url: "https://www.fasttools.store",
        logo: {
          "@type": "ImageObject",
          url: "https://www.fasttools.store/logo.svg",
          width: 320,
          height: 80
        }
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      version: "2.0",
      softwareVersion: "2.0",
      downloadUrl: "https://www.fasttools.store/finance-tools/paypal-fee",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: `paypal fee calculator, paypal fees ${getCurrentYear()}, calculate paypal fee, paypal international fee calculator, paypal business fee calculator, paypal merchant fee calculator, paypal sending fee calculator, paypal receiving fee calculator, paypal transaction fee calculator, paypal usd eur gbp inr fees, paypal percentage calculator, paypal invoice fee calculator, paypal net amount calculator, paypal reverse fee calculator, paypal deduction calculator, paypal goods and services fee, paypal personal payment fee, paypal refund fee calculator, paypal currency conversion fee calculator, paypal charge calculator, paypal profit calculator, paypal net received calculator, free paypal calculator, paypal fee tool online, paypal cost calculator, calculate paypal fees instantly`,
      about: {
        "@type": "Thing",
        name: "Payment Processing Fees",
        description: "Free online tools for calculating PayPal fees, transaction costs, and payment processing charges"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
    }),
  },
}

export default function PayPalFeeCalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Finance Tools", href: "/finance-tools" },
            { label: "PayPal Fee Calculator", href: "/finance-tools/paypal-fee" },
          ]}
        />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="xl:col-span-3 space-y-8">
              {/* Hero Section */}
              <div className="text-center mb-8 animate-fade-in-up">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                  PayPal Fee Calculator ({getCurrentYear()})
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Calculate PayPal transaction fees, net amounts, and required charges instantly. 
                  Perfect for sellers, freelancers, and businesses to understand payment processing costs.
                </p>
              </div>

              {/* Tool Card */}
              <Card className="border border-border shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
                    <Calculator className="h-6 w-6 text-primary" />
                    PayPal Fee Calculator
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    Enter transaction amount to calculate PayPal fees, net received, and required charges
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <PayPalFeeCalculator />
                </CardContent>
              </Card>

              {/* Features & Usage Guide */}
              <div className="space-y-6">
                <Card className="border border-border shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Features & Usage Guide
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-card border border-border">
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-primary" />
                          Transaction Fee Calculation
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Calculate exact PayPal fees based on standard rates (2.9% + $0.30) or custom rates for different countries and transaction types.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-card border border-border">
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          Net Amount Calculation
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Determine exactly how much you'll receive after PayPal deducts their fees from your transaction amount.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-card border border-border">
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Calculator className="h-4 w-4 text-primary" />
                          Required Charge Calculation
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Calculate how much to charge customers to receive your desired net amount after PayPal fees.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-card border border-border">
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Copy className="h-4 w-4 text-primary" />
                          Results Export
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Copy calculation results for invoices, contracts, or financial planning documents.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* PayPal Fee Structure */}
                <Card className="border border-border shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      Understanding PayPal Fee Structure
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                        <h3 className="font-semibold text-foreground mb-2">Standard Fees</h3>
                        <p className="text-sm text-muted-foreground mb-2">Most common PayPal fee structure:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• 2.9% + $0.30 per transaction</li>
                          <li>• Domestic transactions</li>
                          <li>• Goods and services</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                        <h3 className="font-semibold text-foreground mb-2">International Fees</h3>
                        <p className="text-sm text-muted-foreground mb-2">Cross-border transactions:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• 4.4% + fixed fee</li>
                          <li>• Currency conversion fees</li>
                          <li>• Additional country fees</li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                        <h3 className="font-semibold text-foreground mb-2">Special Rates</h3>
                        <p className="text-sm text-muted-foreground mb-2">Reduced fees for:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Micropayments (5% + $0.05)</li>
                          <li>• Nonprofit organizations</li>
                          <li>• High-volume merchants</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Fee Optimization Strategies */}
                <Card className="border border-border shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      Fee Optimization Strategies
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <h3 className="font-semibold text-foreground">For Small Businesses</h3>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Consider micropayment pricing for transactions under $10</li>
                          <li>• Use Friends & Family for personal transactions (no fees)</li>
                          <li>• Batch multiple small transactions when possible</li>
                          <li>• Negotiate volume discounts for high transaction volumes</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-semibold text-foreground">For Freelancers</h3>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Factor PayPal fees into your pricing structure</li>
                          <li>• Use invoicing tools to track fee costs</li>
                          <li>• Consider alternative payment methods for large projects</li>
                          <li>• Keep detailed records for tax deduction purposes</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Comprehensive FAQ Section */}
                <Card className="border border-border shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                      <HelpCircle className="h-5 w-5 text-primary" />
                      Comprehensive FAQ Section
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-card border border-border">
                        <h3 className="font-semibold text-foreground mb-2">How are PayPal fees calculated?</h3>
                        <p className="text-sm text-muted-foreground">
                          PayPal fees are typically calculated as a percentage of the transaction amount plus a fixed fee. 
                          The standard rate is 2.9% + $0.30 for domestic transactions. For example, a $100 transaction 
                          would incur a fee of $3.20 (2.9% of $100 = $2.90 + $0.30 = $3.20), leaving you with $96.80.
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-card border border-border">
                        <h3 className="font-semibold text-foreground mb-2">What's the difference between PayPal Personal and Business accounts?</h3>
                        <p className="text-sm text-muted-foreground">
                          Personal accounts are free for basic transactions but have limited features. Business accounts 
                          offer advanced features like invoicing, reporting, and API access, but charge fees on most 
                          transactions. Business accounts are required for selling goods and services professionally.
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-card border border-border">
                        <h3 className="font-semibold text-foreground mb-2">How do international PayPal fees work?</h3>
                        <p className="text-sm text-muted-foreground">
                          International transactions typically incur higher fees (4.4% + fixed fee) and may include 
                          currency conversion charges. The exact fees depend on the countries involved and the currencies 
                          used. Always check PayPal's fee structure for specific country combinations.
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-card border border-border">
                        <h3 className="font-semibold text-foreground mb-2">Can I avoid PayPal fees entirely?</h3>
                        <p className="text-sm text-muted-foreground">
                          You can avoid fees by using PayPal's Friends & Family option for personal transactions, 
                          but this doesn't provide seller protection. For business transactions, fees are unavoidable 
                          but can be minimized through proper account setup and volume discounts.
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-card border border-border">
                        <h3 className="font-semibold text-foreground mb-2">What are PayPal micropayment fees?</h3>
                        <p className="text-sm text-muted-foreground">
                          Micropayment pricing is designed for transactions under $10 and charges 5% + $0.05 per transaction. 
                          This can be more cost-effective for small transactions. You need to apply for micropayment pricing 
                          and it's typically used by digital content sellers, app developers, and online game operators.
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-card border border-border">
                        <h3 className="font-semibold text-foreground mb-2">How do I calculate what to charge to receive a specific amount?</h3>
                        <p className="text-sm text-muted-foreground">
                          To receive exactly $100 after PayPal fees, you need to charge more than $100. Using the standard 
                          rate of 2.9% + $0.30, you would charge approximately $103.30. The formula is: 
                          Required Charge = (Desired Net Amount + Fixed Fee) ÷ (1 - Percentage Fee).
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-card border border-border">
                        <h3 className="font-semibold text-foreground mb-2">Are there fees for PayPal refunds?</h3>
                        <p className="text-sm text-muted-foreground">
                          PayPal refunds the original transaction fee when you issue a full refund within 60 days. 
                          Partial refunds receive a proportional fee refund. Refunds issued after 60 days may not 
                          receive fee refunds, and you may incur additional processing fees.
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-card border border-border">
                        <h3 className="font-semibold text-foreground mb-2">What are PayPal chargeback fees?</h3>
                        <p className="text-sm text-muted-foreground">
                          Chargeback fees are typically $20 per chargeback, regardless of the transaction amount. 
                          These fees are charged when customers dispute transactions through their credit card company. 
                          Maintaining good customer service and clear transaction descriptions can help reduce chargebacks.
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-card border border-border">
                        <h3 className="font-semibold text-foreground mb-2">How do PayPal fees compare to other payment processors?</h3>
                        <p className="text-sm text-muted-foreground">
                          PayPal's fees are competitive with other major processors. Stripe charges 2.9% + $0.30, 
                          Square charges 2.9% + $0.30, and traditional merchant accounts typically charge 2.5-3.5% 
                          plus monthly fees. PayPal's advantage is ease of setup and global acceptance.
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-card border border-border">
                        <h3 className="font-semibold text-foreground mb-2">Can I negotiate lower PayPal fees?</h3>
                        <p className="text-sm text-muted-foreground">
                          High-volume merchants (typically $10,000+ monthly) can negotiate custom rates with PayPal. 
                          Contact PayPal's merchant services team to discuss volume discounts. Nonprofit organizations 
                          may also qualify for reduced rates with proper documentation.
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-card border border-border">
                        <h3 className="font-semibold text-foreground mb-2">How do currency conversion fees work?</h3>
                        <p className="text-sm text-muted-foreground">
                          PayPal charges a currency conversion fee (typically 3-4%) when converting between currencies. 
                          This is in addition to transaction fees. You can avoid conversion fees by maintaining balances 
                          in multiple currencies or using PayPal's currency conversion tools strategically.
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-card border border-border">
                        <h3 className="font-semibold text-foreground mb-2">What are PayPal withdrawal fees?</h3>
                        <p className="text-sm text-muted-foreground">
                          Withdrawing funds to your bank account is typically free for standard transfers (1-3 business days). 
                          Instant transfers may incur fees of 1% (minimum $0.25, maximum $10). International withdrawals 
                          may have additional fees depending on the country and bank.
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-card border border-border">
                        <h3 className="font-semibold text-foreground mb-2">How do I track PayPal fees for accounting?</h3>
                        <p className="text-sm text-muted-foreground">
                          PayPal provides detailed transaction reports that include fee breakdowns. You can download 
                          these reports for accounting purposes. Fees are typically deductible business expenses, 
                          so keeping accurate records is important for tax purposes.
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-card border border-border">
                        <h3 className="font-semibold text-foreground mb-2">What happens if PayPal fees change?</h3>
                        <p className="text-sm text-muted-foreground">
                          PayPal typically provides 30 days notice before fee changes. You'll receive email notifications 
                          and can find updated fee structures in your account settings. Always review fee changes and 
                          adjust your pricing accordingly to maintain profit margins.
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-card border border-border">
                        <h3 className="font-semibold text-foreground mb-2">Are there fees for PayPal invoicing?</h3>
                        <p className="text-sm text-muted-foreground">
                          Creating and sending invoices through PayPal is free. However, when customers pay invoices, 
                          standard transaction fees apply. PayPal's invoicing system is integrated with their payment 
                          processing, so fees are the same as regular transactions.
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-card border border-border">
                        <h3 className="font-semibold text-foreground mb-2">How do PayPal fees affect my profit margins?</h3>
                        <p className="text-sm text-muted-foreground">
                          PayPal fees directly reduce your profit margins. For a 2.9% + $0.30 fee structure, a $100 
                          sale becomes $96.80 profit. Always factor these costs into your pricing strategy. Consider 
                          offering discounts for alternative payment methods or building fees into your product pricing.
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-card border border-border">
                        <h3 className="font-semibold text-foreground mb-2">Can I pass PayPal fees to customers?</h3>
                        <p className="text-sm text-muted-foreground">
                          While you can't directly charge customers PayPal fees, you can build these costs into your 
                          pricing. Some businesses add processing fees to transactions, but this must be disclosed 
                          clearly. Check local laws regarding surcharging, as some jurisdictions prohibit it.
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-card border border-border">
                        <h3 className="font-semibold text-foreground mb-2">What are the best practices for minimizing PayPal fees?</h3>
                        <p className="text-sm text-muted-foreground">
                          Best practices include: choosing the right account type for your needs, using micropayment 
                          pricing for small transactions, negotiating volume discounts, avoiding unnecessary currency 
                          conversions, maintaining good customer relationships to reduce chargebacks, and regularly 
                          reviewing your fee structure for optimization opportunities.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden xl:block w-80">
              <div className="sticky top-32 space-y-6">
                <div>
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="sidebar" className="w-full h-64 border border-border rounded-xl shadow-sm bg-card" />
                </div>
                <div>
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="sidebar" className="w-full h-64 border border-border rounded-xl shadow-sm bg-card" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
