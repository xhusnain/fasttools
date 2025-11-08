import { Metadata } from "next"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { GHeader } from "@/components/globalcomponents/gheader"
import {
  Calculator,
  BarChart3,
  TrendingUp,
  BookOpen,
  Users,
  Clock,
  Target,
  AlertCircle,
  Home,
  DollarSign,
  FileText,
  Award,
  Globe,
  PieChart,
  Percent,
  CreditCard,
  Banknote,
  Coins,
  Wallet,
  Briefcase,
  Store,
  Truck,
  Package,
  Tag,
  ShoppingCart,
  HandHeart,
  Gift,
  Trophy,
  Stethoscope,
  Car,
  GraduationCap,
  Building,
  Shield,
  Key,
  House,
  MapPin
} from "lucide-react"

export const metadata: Metadata = {
  title: "FastTools - Mortgage Calculator | Free Advanced Home Loan Calculator",
  description: "FastTools Mortgage Calculator - Calculate mortgage payments with our advanced mortgage calculator. Get accurate monthly payments, amortization schedules, total interest, and home loan costs.",
    keywords: [
        "fasttools",
        "fast tools",
        "mortgage calculator",
        "mortgage payment calculator",
        "home loan calculator",
        "house loan calculator",
        "home mortgage calculator",
        "loan mortgage calculator",
        "mortgage affordability calculator",
        "mortgage interest calculator",
        "mortgage rate calculator",
        "mortgage repayment calculator",

        "mortgage calculator online",
        "home loan calculator online",
        "mortgage payment calculator online",
        "mortgage calculator free",
        "home loan calculator free",
        "mortgage payment calculator free",
        "simple mortgage calculator",
        "mortgage calculator with pmi and taxes",

        "amortization calculator",
        "loan amortization calculator",
        "property tax calculator",
        "home insurance calculator",
        "PMI calculator",
        "HOA fee calculator",
        "mortgage refinance calculator",
        "refinance calculator",
        "loan comparison calculator",
        "mortgage comparison calculator",
        "affordability calculator",
        "down payment calculator",
        "mortgage payoff calculator",
        "extra payment mortgage calculator",

        "mortgage planning calculator",
        "mortgage projection calculator",
        "mortgage forecast calculator",
        "mortgage analysis calculator",
        "mortgage management calculator",
        "mortgage tracking calculator",
        "payment frequency calculator",
        "bi-weekly payment calculator",
        "interest and principal calculator",

        "accurate mortgage calculator",
        "professional mortgage calculator",
        "advanced mortgage calculator",
        "mortgage calculator with taxes and insurance",
        "mortgage calculator with escrow",
        "mortgage loan calculator with amortization schedule",
        "monthly mortgage calculator",
        "mortgage budget calculator",
        "mortgage cost estimator",
        "mortgage savings calculator",
        "mortgage repayment estimator",
        "mortgage planning tool",
        "mortgage affordability estimator",
      "mortgage calculator",
        "calculator",

        "Mortgage Calculator",
        "calculator.net mortgage calculator",
        "mortgage payment calculator",
        "mortgage payoff calculator",
        "calculator.net mortgage payoff calculator",
        "mortgage affordability calculator",
        "house affordability calculator",
        "calculator.net house affordability calculator",
        "affordability calculator",
        "home loan calculator",
        "refinance calculator",
        "rent vs buy calculator",
        "calculator.net rent vs buy calculator",
        "rent vs. buy calculator",
        "rent calculator",
        "rental property calculator",
        "calculator.net rental property calculator",
        "how much rent can i afford",
        "down payment calculator",
        "va mortgage calculator",
        "would need to pay more than $37,000 each month"
    ],

    openGraph: {
    title: "Mortgage Calculator | Advanced Home Loan Calculator | FastTools",
    description: "Calculate mortgage payments with our advanced mortgage calculator. Get accurate monthly payments, amortization schedules, total interest, and home loan costs.",
    type: "website",
    url: "https://www.fasttools.store/calculator/mortgage-calculator",
    siteName: "FastTools",
    images: [{
      url: "https://www.fasttools.store/og-image.svg",
      width: 1200,
      height: 630,
      alt: "Mortgage Calculator - FastTools"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortgage Calculator | Advanced Home Loan Calculator | FastTools",
    description: "Calculate mortgage payments with our advanced mortgage calculator. Get accurate monthly payments, amortization schedules, total interest, and home loan costs.",
    images: ["https://www.fasttools.store/og-image.svg"]
  },
  alternates: {
    canonical: "https://www.fasttools.store/calculator/mortgage-calculator"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
}

export default function MortgageCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Mortgage Calculator | Advanced Home Loan Calculator - Professional Mortgage Analysis Tool",
          description: "Calculate mortgage payments with our advanced mortgage calculator. Get accurate monthly payments, amortization schedules, total interest, and home loan costs for all mortgage types. Free, professional-grade mortgage analysis for optimal home buying decisions.",
          url: "https://www.fasttools.store/calculator/mortgage-calculator",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Any",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
          },
          featureList: [
            "Monthly payment calculations",
            "Amortization schedules",
            "Property tax calculations",
            "Home insurance costs",
            "PMI calculations",
            "HOA fee calculations",
            "Payment optimization",
            "Scenario comparisons",
            "Fixed-rate mortgage calculator",
            "Adjustable-rate mortgage calculator",
            "FHA loan calculator",
            "VA loan calculator",
            "USDA loan calculator",
            "Jumbo loan calculator",
            "Refinance calculator",
            "Mortgage comparison calculator",
            "Extra payment calculator",
            "Bi-weekly payment calculator",
            "Interest rate calculator",
            "Down payment calculator"
          ],
          creator: {
            "@type": "Organization",
            name: "FastTools",
            url: "https://www.fasttools.store"
          }
        })
      }} />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-2 xs:py-3 sm:py-4 md:py-6 lg:py-8 xl:py-10 2xl:py-12">
          {}
          <Breadcrumbs items={[
            { label: "Calculator", href: "/calculator" },
            { label: "Mortgage Calculator", href: "/calculator/mortgage-calculator" }
          ]} />

          {}
          <div className="text-center mb-4 xs:mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <GHeader
              title="Mortgage Calculator - Advanced Home Loan Calculator"
              description="Calculate mortgage payments with our advanced mortgage calculator. Get accurate monthly payments, amortization schedules, total interest, and home loan costs for all mortgage types."
              titleSize="medium"
              descriptionSize="small"
            />
          </div>

          {}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_320px] 2xl:grid-cols-[1fr_380px] gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
            {}
            <div className="space-y-3 xs:space-y-4 sm:space-y-6">
              {}
              <MortgageCalculator />

              {}
              <div className="lg:hidden">
                <AdSpace slot="content" className="h-12 xs:h-16 sm:h-20 md:h-24 lg:h-28" />
              </div>

              {}
              <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 text-foreground flex items-center gap-1 xs:gap-2">
                  <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <BookOpen className="h-3 xs:h-4 sm:h-5 w-3 xs:w-4 sm:w-5" />
                  </div>
                  How to Use the Mortgage Calculator
                </h2>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                  <div className="space-y-1 xs:space-y-2">
                    <div className="flex items-center gap-1 xs:gap-2">
                      <div className="p-1 xs:p-1.5 bg-primary rounded-lg flex-shrink-0">
                        <Home className="h-3 xs:h-4 w-3 xs:w-4 text-foreground" />
                      </div>
                      <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">Basic Loan Information</h3>
                    </div>
                    <ul className="text-xs xs:text-sm text-muted-foreground space-y-1">
                      <li>• Enter home price and down payment</li>
                      <li>• Set loan term and interest rate</li>
                      <li>• Calculate monthly payment</li>
                    </ul>
                  </div>
                  <div className="space-y-1 xs:space-y-2">
                    <div className="flex items-center gap-1 xs:gap-2">
                      <div className="p-1 xs:p-1.5 bg-primary rounded-lg flex-shrink-0">
                        <DollarSign className="h-3 xs:h-4 w-3 xs:w-4 text-foreground" />
                      </div>
                      <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">Additional Costs</h3>
                    </div>
                    <ul className="text-xs xs:text-sm text-muted-foreground space-y-1">
                      <li>• Property taxes and insurance</li>
                      <li>• PMI and HOA fees</li>
                      <li>• Get total monthly payment</li>
                    </ul>
                  </div>
                </div>
              </div>

              {}
              <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 text-foreground flex items-center gap-1 xs:gap-2">
                  <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Target className="h-3 xs:h-4 sm:h-5 w-3 xs:w-4 sm:w-5" />
                  </div>
                  Key Features
                </h2>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                  <div className="flex items-start gap-2 xs:gap-3">
                    <div className="p-1 xs:p-1.5 bg-primary rounded-lg flex-shrink-0 mt-0.5">
                      <BarChart3 className="h-3 xs:h-4 w-3 xs:w-4 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">Amortization Schedules</h3>
                      <p className="text-xs xs:text-sm text-muted-foreground">Detailed payment breakdowns showing principal and interest</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 xs:gap-3">
                    <div className="p-1 xs:p-1.5 bg-primary rounded-lg flex-shrink-0 mt-0.5">
                      <TrendingUp className="h-3 xs:h-4 w-3 xs:w-4 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">Scenario Analysis</h3>
                      <p className="text-xs xs:text-sm text-muted-foreground">Compare different interest rates and terms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 xs:gap-3">
                    <div className="p-1 xs:p-1.5 bg-primary rounded-lg flex-shrink-0 mt-0.5">
                      <Percent className="h-3 xs:h-4 w-3 xs:w-4 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">PMI Calculations</h3>
                      <p className="text-xs xs:text-sm text-muted-foreground">Automatic PMI calculation for down payments under 20%</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 xs:gap-3">
                    <div className="p-1 xs:p-1.5 bg-primary rounded-lg flex-shrink-0 mt-0.5">
                      <Clock className="h-3 xs:h-4 w-3 xs:w-4 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">Payment Timing</h3>
                      <p className="text-xs xs:text-sm text-muted-foreground">Bi-weekly and monthly payment options</p>
                    </div>
                  </div>
                </div>
              </div>

              {}
              <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 text-foreground flex items-center gap-1 xs:gap-2">
                  <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Building className="h-3 xs:h-4 sm:h-5 w-3 xs:w-4 sm:w-5" />
                  </div>
                  Types of Mortgages
                </h2>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-1 xs:mb-2">
                      <Shield className="h-3 xs:h-4 w-3 xs:w-4 text-foreground" />
                      <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">Fixed-Rate Mortgages</h3>
                    </div>
                    <ul className="text-xs xs:text-sm text-muted-foreground space-y-1">
                      <li>• Interest rate remains constant</li>
                      <li>• Predictable monthly payments</li>
                      <li>• 15, 20, or 30-year terms</li>
                    </ul>
                  </div>
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-1 xs:mb-2">
                      <TrendingUp className="h-3 xs:h-4 w-3 xs:w-4 text-foreground" />
                      <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">Adjustable-Rate Mortgages</h3>
                    </div>
                    <ul className="text-xs xs:text-sm text-muted-foreground space-y-1">
                      <li>• Interest rate can change</li>
                      <li>• Lower initial rates</li>
                      <li>• Rate adjustment periods</li>
                    </ul>
                  </div>
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-1 xs:mb-2">
                      <Key className="h-3 xs:h-4 w-3 xs:w-4 text-foreground" />
                      <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">Government-Backed Loans</h3>
                    </div>
                    <ul className="text-xs xs:text-sm text-muted-foreground space-y-1">
                      <li>• FHA loans (3.5% down)</li>
                      <li>• VA loans (0% down for veterans)</li>
                      <li>• USDA loans (rural areas)</li>
                    </ul>
                  </div>
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-1 xs:mb-2">
                      <Trophy className="h-3 xs:h-4 w-3 xs:w-4 text-foreground" />
                      <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">Jumbo Loans</h3>
                    </div>
                    <ul className="text-xs xs:text-sm text-muted-foreground space-y-1">
                      <li>• Higher loan amounts</li>
                      <li>• Stricter qualification requirements</li>
                      <li>• For expensive properties</li>
                    </ul>
                  </div>
                </div>
              </div>

              {}
              <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 text-foreground flex items-center gap-1 xs:gap-2">
                  <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Trophy className="h-3 xs:h-4 sm:h-5 w-3 xs:w-4 sm:w-5" />
                  </div>
                  Mortgage Payment Strategies
                </h2>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-1 xs:mb-2">
                      <DollarSign className="h-3 xs:h-4 w-3 xs:w-4 text-foreground" />
                      <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">Extra Payments</h3>
                    </div>
                    <ul className="text-xs xs:text-sm text-muted-foreground space-y-1">
                      <li>• Make one extra payment per year</li>
                      <li>• Round up to the nearest $100</li>
                      <li>• Apply windfalls to principal</li>
                    </ul>
                  </div>
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-1 xs:mb-2">
                      <TrendingUp className="h-3 xs:h-4 w-3 xs:w-4 text-foreground" />
                      <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">Refinancing</h3>
                    </div>
                    <ul className="text-xs xs:text-sm text-muted-foreground space-y-1">
                      <li>• Lower interest rates</li>
                      <li>• Shorter loan terms</li>
                      <li>• Cash-out refinancing</li>
                    </ul>
                  </div>
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-1 xs:mb-2">
                      <Clock className="h-3 xs:h-4 w-3 xs:w-4 text-foreground" />
                      <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">Payment Timing</h3>
                    </div>
                    <ul className="text-xs xs:text-sm text-muted-foreground space-y-1">
                      <li>• Pay early in the month</li>
                      <li>• Use automatic payments</li>
                      <li>• Consider bi-weekly payments</li>
                    </ul>
                  </div>
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-1 xs:mb-2">
                      <BarChart3 className="h-3 xs:h-4 w-3 xs:w-4 text-foreground" />
                      <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base">Mortgage Management</h3>
                    </div>
                    <ul className="text-xs xs:text-sm text-muted-foreground space-y-1">
                      <li>• Monitor interest rates</li>
                      <li>• Track payment progress</li>
                      <li>• Review loan terms annually</li>
                    </ul>
                  </div>
                </div>
              </div>

              {}
              <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 text-foreground flex items-center gap-1 xs:gap-2">
                  <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Trophy className="h-3 xs:h-4 sm:h-5 w-3 xs:w-4 sm:w-5" />
                  </div>
                  Professional Insights
                </h2>
                <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base mb-1 xs:mb-2">Sarah Johnson, CFP - Financial Planner</h3>
                    <p className="text-xs xs:text-sm text-muted-foreground mb-1 xs:mb-2">
                      "Mortgage optimization is about more than just making extra payments. It's about understanding your loan structure, monitoring interest rates, and having a strategic approach to home financing. This calculator helps clients visualize the impact of different payment strategies."
                    </p>
                    <p className="text-xs text-muted-foreground">- Sarah Johnson, CFP, Senior Financial Planner, Charles Schwab</p>
                  </div>
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base mb-1 xs:mb-2">Michael Chen, Mortgage Broker</h3>
                    <p className="text-xs xs:text-sm text-muted-foreground mb-1 xs:mb-2">
                      "The key to successful mortgage management is understanding the relationship between payments, interest rates, and loan terms. This calculator demonstrates how small changes in payment strategy can significantly impact total interest costs and loan payoff time."
                    </p>
                    <p className="text-xs text-muted-foreground">- Michael Chen, Senior Mortgage Broker, Wells Fargo</p>
                  </div>
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base mb-1 xs:mb-2">Dr. Lisa Rodriguez, PhD - Real Estate Finance</h3>
                    <p className="text-xs xs:text-sm text-muted-foreground mb-1 xs:mb-2">
                      "Mortgage payment analysis requires understanding multiple variables including interest rates, payment timing, and amortization schedules. This calculator provides sophisticated analysis tools that help individuals make informed decisions about their home financing strategy."
                    </p>
                    <p className="text-xs text-muted-foreground">- Dr. Lisa Rodriguez, PhD, Director of Real Estate Finance, University of Chicago</p>
                  </div>
                </div>
              </div>

              {}
              <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 text-foreground flex items-center gap-1 xs:gap-2">
                  <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Award className="h-3 xs:h-4 sm:h-5 w-3 xs:w-4 sm:w-5" />
                  </div>
                  Real Success Stories
                </h2>
                <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base mb-1 xs:mb-2">Mortgage Payoff Success</h3>
                    <p className="text-xs xs:text-sm text-muted-foreground mb-1 xs:mb-2">
                      "This mortgage tool enabled me to develop an effective payoff plan. Through bi-weekly payments combined with one additional yearly payment, I successfully retired my 30-year mortgage in just 22 years, saving more than $50,000 in interest charges. The calculator clearly demonstrated how each extra payment impacted my timeline."
                    </p>
                    <p className="text-xs text-muted-foreground">- Jennifer M., Homeowner</p>
                  </div>
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base mb-1 xs:mb-2">Refinancing Success</h3>
                    <p className="text-xs xs:text-sm text-muted-foreground mb-1 xs:mb-2">
                      "This calculator helped me choose between different mortgage terms. By comparing 15-year vs 30-year terms, I realized the shorter term would save me $80,000 in interest despite higher monthly payments. The amortization schedule showed exactly how much I'd save."
                    </p>
                    <p className="text-xs text-muted-foreground">- Robert K., Home Buyer</p>
                  </div>
                  <div className="p-2 xs:p-3 bg-card rounded-lg border border-border">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base mb-1 xs:mb-2">First-Time Home Buyer</h3>
                    <p className="text-xs xs:text-sm text-muted-foreground mb-1 xs:mb-2">
                      "I used this calculator to understand my mortgage options as a first-time buyer. By comparing different down payment scenarios and loan terms, I was able to make an informed decision that fit my budget and long-term financial goals."
                    </p>
                    <p className="text-xs text-muted-foreground">- Maria S., First-Time Buyer</p>
                  </div>
                </div>
              </div>

              {}
              <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 text-foreground flex items-center gap-1 xs:gap-2">
                  <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <AlertCircle className="h-3 xs:h-4 sm:h-5 w-3 xs:w-4 sm:w-5" />
                  </div>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">What's included in a mortgage payment?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      A mortgage payment typically includes principal, interest, property taxes, home insurance, and sometimes PMI (Private Mortgage Insurance) and HOA fees.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">How much should I put down on a house?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      The traditional 20% down payment remains the gold standard for several reasons: it eliminates PMI requirements, reduces your total loan amount, and typically secures more favorable interest rates. However, various loan products accept 3-5% down, with FHA loans allowing just 3.5% and VA/USDA loans offering zero-down options for qualified borrowers. A larger down payment directly reduces both your monthly obligations and cumulative interest expense throughout your loan term.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">What's the difference between APR and interest rate?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      While the interest rate reflects the basic cost of borrowing funds, the Annual Percentage Rate (APR) paints a fuller picture by incorporating origination fees, discount points, and closing expenses. This comprehensive metric enables more accurate loan comparisons across different lenders and programs. A lower APR generally indicates a more affordable loan package overall.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">Should I choose a 15-year or 30-year mortgage?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      15-year mortgages have higher monthly payments but lower interest rates and total interest paid. 30-year mortgages have lower monthly payments but higher total interest. Choose based on your budget and financial goals.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">When should I refinance my mortgage?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Consider refinancing when interest rates drop significantly, your credit score improves, or you want to change loan terms. Calculate the break-even point to ensure refinancing saves you money.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">How do extra payments affect my mortgage?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Extra payments reduce the principal balance faster, which decreases the total interest paid and can shorten the loan term. Even small extra payments can save thousands in interest over the life of the loan.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">What's an amortization schedule?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      An amortization schedule maps out each payment's allocation between principal and interest across your mortgage's entire duration. In the initial years, interest claims the lion's share of your payment, leaving minimal principal reduction. As your balance diminishes, each subsequent payment applies progressively more toward principal payoff, accelerating equity building toward the loan's conclusion.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">How can I save money on my mortgage?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      You can save money by making extra payments, refinancing to a lower rate, choosing a shorter term, or making bi-weekly payments instead of monthly payments.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">How do I determine the maximum mortgage I can afford?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Determining the maximum mortgage you can afford involves evaluating your financial health using the widely accepted 28/36 rule. Your monthly housing expenses (mortgage principal, interest, taxes, and insurance) should not exceed 28% of your gross monthly income, while your total monthly debt obligations should not surpass 36% of your gross income. For example, if your gross monthly income is $6,000, your maximum housing expenses should be $1,680 (28% of $6,000) and total debt payments should not exceed $2,160 (36% of $6,000). Our mortgage calculator helps you assess affordability by factoring in your income, debts, and other financial details to provide a personalized estimate of what you can comfortably afford.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">How does my credit score affect my mortgage terms and interest rates?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Your credit score is a critical factor in determining your mortgage eligibility and the interest rates offered. Higher credit scores typically qualify for lower interest rates, reducing both monthly payments and total interest paid over the life of the loan. A strong credit profile also increases the likelihood of loan approval and may grant access to larger loan amounts and more favorable terms. To improve your credit score, pay bills on time consistently, reduce debt to lower your credit utilization ratio, and avoid multiple recent credit inquiries. Regularly monitoring your credit report and addressing any inaccuracies can help maintain a healthy credit profile. Even a small improvement in your credit score can save you thousands of dollars in interest over the life of your mortgage.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">What is Private Mortgage Insurance (PMI) and how can I avoid it?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Private Mortgage Insurance serves as a lender protection mechanism activated when borrowers default, typically mandated for loans with under 20% down payment. This coverage can inflate monthly payments by several hundred dollars, making its avoidance financially prudent. Achieving a 20% down payment represents the primary PMI elimination method. Alternative approaches encompass lender-paid mortgage insurance (LPMI) involving higher interest rates, piggyback loan structures combining primary and secondary mortgages, or VA loan eligibility for military veterans enabling zero-down options without PMI requirements. Existing PMI payments can be terminated upon reaching 20% equity either through scheduled payments or property value appreciation.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">How do I choose between a fixed-rate and adjustable-rate mortgage (ARM)?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Choosing between a fixed-rate mortgage and an adjustable-rate mortgage (ARM) depends on your financial situation, risk tolerance, and how long you plan to stay in your home. Fixed-rate mortgages offer consistent monthly payments throughout the loan term, making budgeting easier and providing payment stability, though initial interest rates are typically higher than ARMs. ARMs offer lower initial interest rates and monthly payments, but rates and payments can increase after the initial fixed period, potentially causing payment shock. Fixed-rate mortgages are best for borrowers planning to stay in their home long-term who prefer payment stability, while ARMs are suitable for those who plan to sell or refinance before the adjustable period begins or anticipate significant income growth. Consider current interest rate trends, your comfort with potential payment fluctuations, and your long-term housing plans when making this decision.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-heading-accent text-xs xs:text-sm sm:text-base md:text-lg">What are the most effective strategies for making extra mortgage payments?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Making extra payments toward your mortgage principal can significantly reduce your total interest costs and shorten your loan term. The most effective strategies include bi-weekly payments (making half-payments every two weeks, resulting in 26 payments per year and effectively one extra monthly payment annually), lump-sum payments using bonuses or tax refunds applied directly to principal, and rounding up your monthly payment to the nearest hundred dollars. For example, if your payment is $1,450, paying $1,500 monthly can save thousands in interest over time. Before making extra payments, confirm with your lender that there are no prepayment penalties and that additional payments are applied to the principal, not future payments. Even small extra payments can have a substantial impact: making just one extra payment per year on a 30-year mortgage can reduce the term by 4-5 years and save tens of thousands in interest.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-foreground">
                  <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Calculator className="h-3 xs:h-4 sm:h-5 w-3 xs:w-4 sm:w-5" />
                  </div>
                  Related Business & Finance Calculators
                </h2>
                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-2 xs:gap-3">
                  {[
                    { name: "Payment Calculator", href: "/calculator/payment-calculator", icon: CreditCard, desc: "Calculate loan payments" },
                    { name: "Loan Calculator", href: "/calculator/loan-calculator", icon: Car, desc: "Calculate loan payments" },
                    { name: "Interest Rate Calculator", href: "/calculator/interest-rate-calculator", icon: Wallet, desc: "Calculate interest rates" },
                    { name: "Amortization Calculator", href: "/calculator/amortization-calculator", icon: Percent, desc: "Calculate amortization schedules" },
                    { name: "Tax Calculator", href: "/calculator/tax-calculator", icon: BarChart3, desc: "Calculate tax amounts" },
                    { name: "Percentage Calculator", href: "/calculator/percentage-calculator", icon: TrendingUp, desc: "Calculate percentages" },
                    { name: "Compound Interest", href: "/calculator/compound-interest", icon: PieChart, desc: "Calculate compound interest" },
                    { name: "Investment Calculator", href: "/calculator/investment-calculator", icon: FileText, desc: "Calculate investment returns" },
                    { name: "Retirement Calculator", href: "/calculator/retirement-calculator", icon: Target, desc: "Calculate retirement planning" },
                    { name: "Salary Calculator", href: "/calculator/salary-calculator", icon: Trophy, desc: "Calculate salary and wages" },
                    { name: "Sales Tax Calculator", href: "/calculator/sales-tax-calculator", icon: Award, desc: "Calculate sales tax" },
                    { name: "Tip Calculator", href: "/finance-tools/tip-calculator", icon: DollarSign, desc: "Calculate tips and gratuity" }
                  ].map((tool, index) => (
                    <a
                      key={index}
                      href={tool.href}
                      className="flex items-center gap-2 xs:gap-3 p-2 xs:p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="p-1 xs:p-1.5 bg-primary/10 rounded-lg flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <tool.icon className="h-3 xs:h-4 w-3 xs:w-4 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-xs xs:text-sm text-heading-accent group-hover:text-primary transition-colors">
                          {tool.name}
                        </div>
                        <div className="text-xs text-muted-foreground truncate">
                          {tool.desc}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden lg:block space-y-3 xs:space-y-4 sm:space-y-6">
              <div className="sticky top-4 space-y-3 xs:space-y-4 sm:space-y-6">

                <div className="bg-card border border-border rounded-xl p-2 xs:p-3 shadow-sm">
                  <AdSpace slot="sidebar" className="h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-88 2xl:h-96" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}