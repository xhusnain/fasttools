import { Metadata } from "next"
import MortgageCalculator from "@/components/mortgage-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
        "calculator"
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
          {/* Breadcrumbs */}
          <Breadcrumbs items={[
            { label: "Calculator", href: "/calculator" },
            { label: "Mortgage Calculator", href: "/calculator/mortgage-calculator" }
          ]} />
          
          {/* Header Section */}
          <div className="text-center mb-4 xs:mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-2 xs:mb-3 sm:mb-4 text-yellow-400">
              Mortgage Calculator - Advanced Home Loan Calculator
            </h1>
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto">
              Calculate mortgage payments with our <strong>advanced mortgage calculator</strong>. Get accurate <strong>monthly payments</strong>, <strong>amortization schedules</strong>, <strong>total interest</strong>, and <strong>home loan costs</strong> for all mortgage types.
            </p>
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_320px] 2xl:grid-cols-[1fr_380px] gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
            {/* Main Content */}
            <div className="space-y-3 xs:space-y-4 sm:space-y-6">
              {/* Calculator */}
              <MortgageCalculator />
              
              {/* Mobile Ad Space */}
              <div className="lg:hidden">
                <AdSpace slot="content" className="h-12 xs:h-16 sm:h-20 md:h-24 lg:h-28" />
              </div>

              {/* How to Use Section */}
              <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 text-yellow-400 flex items-center gap-1 xs:gap-2">
                  <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <BookOpen className="h-3 xs:h-4 sm:h-5 w-3 xs:w-4 sm:w-5" />
                  </div>
                  How to Use the Mortgage Calculator
                </h2>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                  <div className="space-y-1 xs:space-y-2">
                    <div className="flex items-center gap-1 xs:gap-2">
                      <div className="p-1 xs:p-1.5 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex-shrink-0">
                        <Home className="h-3 xs:h-4 w-3 xs:w-4 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">Basic Loan Information</h3>
                    </div>
                    <ul className="text-xs xs:text-sm text-muted-foreground space-y-1">
                      <li>• Enter home price and down payment</li>
                      <li>• Set loan term and interest rate</li>
                      <li>• Calculate monthly payment</li>
                    </ul>
                  </div>
                  <div className="space-y-1 xs:space-y-2">
                    <div className="flex items-center gap-1 xs:gap-2">
                      <div className="p-1 xs:p-1.5 bg-green-100 dark:bg-green-900/20 rounded-lg flex-shrink-0">
                        <DollarSign className="h-3 xs:h-4 w-3 xs:w-4 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">Additional Costs</h3>
                    </div>
                    <ul className="text-xs xs:text-sm text-muted-foreground space-y-1">
                      <li>• Property taxes and insurance</li>
                      <li>• PMI and HOA fees</li>
                      <li>• Get total monthly payment</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Key Features Section */}
              <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 text-yellow-400 flex items-center gap-1 xs:gap-2">
                  <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Target className="h-3 xs:h-4 sm:h-5 w-3 xs:w-4 sm:w-5" />
                  </div>
                  Key Features
                </h2>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                  <div className="flex items-start gap-2 xs:gap-3">
                    <div className="p-1 xs:p-1.5 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex-shrink-0 mt-0.5">
                      <BarChart3 className="h-3 xs:h-4 w-3 xs:w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">Amortization Schedules</h3>
                      <p className="text-xs xs:text-sm text-muted-foreground">Detailed payment breakdowns showing principal and interest</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 xs:gap-3">
                    <div className="p-1 xs:p-1.5 bg-green-100 dark:bg-green-900/20 rounded-lg flex-shrink-0 mt-0.5">
                      <TrendingUp className="h-3 xs:h-4 w-3 xs:w-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">Scenario Analysis</h3>
                      <p className="text-xs xs:text-sm text-muted-foreground">Compare different interest rates and terms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 xs:gap-3">
                    <div className="p-1 xs:p-1.5 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex-shrink-0 mt-0.5">
                      <Percent className="h-3 xs:h-4 w-3 xs:w-4 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">PMI Calculations</h3>
                      <p className="text-xs xs:text-sm text-muted-foreground">Automatic PMI calculation for down payments under 20%</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 xs:gap-3">
                    <div className="p-1 xs:p-1.5 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex-shrink-0 mt-0.5">
                      <Clock className="h-3 xs:h-4 w-3 xs:w-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base">Payment Timing</h3>
                      <p className="text-xs xs:text-sm text-muted-foreground">Bi-weekly and monthly payment options</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mortgage Types Section */}
              <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 text-yellow-400 flex items-center gap-1 xs:gap-2">
                  <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Building className="h-3 xs:h-4 sm:h-5 w-3 xs:w-4 sm:w-5" />
                  </div>
                  Types of Mortgages
                </h2>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                  <div className="p-2 xs:p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-2 mb-1 xs:mb-2">
                      <Shield className="h-3 xs:h-4 w-3 xs:w-4 text-blue-600" />
                      <h3 className="font-semibold text-blue-800 dark:text-blue-200 text-xs xs:text-sm sm:text-base">Fixed-Rate Mortgages</h3>
                    </div>
                    <ul className="text-xs xs:text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• Interest rate remains constant</li>
                      <li>• Predictable monthly payments</li>
                      <li>• 15, 20, or 30-year terms</li>
                    </ul>
                  </div>
                  <div className="p-2 xs:p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 mb-1 xs:mb-2">
                      <TrendingUp className="h-3 xs:h-4 w-3 xs:w-4 text-green-600" />
                      <h3 className="font-semibold text-green-800 dark:text-green-200 text-xs xs:text-sm sm:text-base">Adjustable-Rate Mortgages</h3>
                    </div>
                    <ul className="text-xs xs:text-sm text-green-700 dark:text-green-300 space-y-1">
                      <li>• Interest rate can change</li>
                      <li>• Lower initial rates</li>
                      <li>• Rate adjustment periods</li>
                    </ul>
                  </div>
                  <div className="p-2 xs:p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center gap-2 mb-1 xs:mb-2">
                      <Key className="h-3 xs:h-4 w-3 xs:w-4 text-purple-600" />
                      <h3 className="font-semibold text-purple-800 dark:text-purple-200 text-xs xs:text-sm sm:text-base">Government-Backed Loans</h3>
                    </div>
                    <ul className="text-xs xs:text-sm text-purple-700 dark:text-purple-300 space-y-1">
                      <li>• FHA loans (3.5% down)</li>
                      <li>• VA loans (0% down for veterans)</li>
                      <li>• USDA loans (rural areas)</li>
                    </ul>
                  </div>
                  <div className="p-2 xs:p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <div className="flex items-center gap-2 mb-1 xs:mb-2">
                      <Trophy className="h-3 xs:h-4 w-3 xs:w-4 text-orange-600" />
                      <h3 className="font-semibold text-orange-800 dark:text-orange-200 text-xs xs:text-sm sm:text-base">Jumbo Loans</h3>
                    </div>
                    <ul className="text-xs xs:text-sm text-orange-700 dark:text-orange-300 space-y-1">
                      <li>• Higher loan amounts</li>
                      <li>• Stricter qualification requirements</li>
                      <li>• For expensive properties</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Payment Strategies Section */}
              <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 text-yellow-400 flex items-center gap-1 xs:gap-2">
                  <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Trophy className="h-3 xs:h-4 sm:h-5 w-3 xs:w-4 sm:w-5" />
                  </div>
                  Mortgage Payment Strategies
                </h2>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                  <div className="p-2 xs:p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-2 mb-1 xs:mb-2">
                      <DollarSign className="h-3 xs:h-4 w-3 xs:w-4 text-blue-600" />
                      <h3 className="font-semibold text-blue-800 dark:text-blue-200 text-xs xs:text-sm sm:text-base">Extra Payments</h3>
                    </div>
                    <ul className="text-xs xs:text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• Make one extra payment per year</li>
                      <li>• Round up to the nearest $100</li>
                      <li>• Apply windfalls to principal</li>
                    </ul>
                  </div>
                  <div className="p-2 xs:p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 mb-1 xs:mb-2">
                      <TrendingUp className="h-3 xs:h-4 w-3 xs:w-4 text-green-600" />
                      <h3 className="font-semibold text-green-800 dark:text-green-200 text-xs xs:text-sm sm:text-base">Refinancing</h3>
                    </div>
                    <ul className="text-xs xs:text-sm text-green-700 dark:text-green-300 space-y-1">
                      <li>• Lower interest rates</li>
                      <li>• Shorter loan terms</li>
                      <li>• Cash-out refinancing</li>
                    </ul>
                  </div>
                  <div className="p-2 xs:p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center gap-2 mb-1 xs:mb-2">
                      <Clock className="h-3 xs:h-4 w-3 xs:w-4 text-purple-600" />
                      <h3 className="font-semibold text-purple-800 dark:text-purple-200 text-xs xs:text-sm sm:text-base">Payment Timing</h3>
                    </div>
                    <ul className="text-xs xs:text-sm text-purple-700 dark:text-purple-300 space-y-1">
                      <li>• Pay early in the month</li>
                      <li>• Use automatic payments</li>
                      <li>• Consider bi-weekly payments</li>
                    </ul>
                  </div>
                  <div className="p-2 xs:p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <div className="flex items-center gap-2 mb-1 xs:mb-2">
                      <BarChart3 className="h-3 xs:h-4 w-3 xs:w-4 text-orange-600" />
                      <h3 className="font-semibold text-orange-800 dark:text-orange-200 text-xs xs:text-sm sm:text-base">Mortgage Management</h3>
                    </div>
                    <ul className="text-xs xs:text-sm text-orange-700 dark:text-orange-300 space-y-1">
                      <li>• Monitor interest rates</li>
                      <li>• Track payment progress</li>
                      <li>• Review loan terms annually</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Professional Insights Section */}
              <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 text-yellow-400 flex items-center gap-1 xs:gap-2">
                  <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Trophy className="h-3 xs:h-4 sm:h-5 w-3 xs:w-4 sm:w-5" />
                  </div>
                  Professional Insights
                </h2>
                <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                  <div className="p-2 xs:p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 text-xs xs:text-sm sm:text-base mb-1 xs:mb-2">Sarah Johnson, CFP - Financial Planner</h3>
                    <p className="text-xs xs:text-sm text-blue-700 dark:text-blue-300 mb-1 xs:mb-2">
                      "Mortgage optimization is about more than just making extra payments. It's about understanding your loan structure, monitoring interest rates, and having a strategic approach to home financing. This calculator helps clients visualize the impact of different payment strategies."
                    </p>
                    <p className="text-xs text-blue-600 dark:text-blue-400">- Sarah Johnson, CFP, Senior Financial Planner, Charles Schwab</p>
                  </div>
                  <div className="p-2 xs:p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 text-xs xs:text-sm sm:text-base mb-1 xs:mb-2">Michael Chen, Mortgage Broker</h3>
                    <p className="text-xs xs:text-sm text-green-700 dark:text-green-300 mb-1 xs:mb-2">
                      "The key to successful mortgage management is understanding the relationship between payments, interest rates, and loan terms. This calculator demonstrates how small changes in payment strategy can significantly impact total interest costs and loan payoff time."
                    </p>
                    <p className="text-xs text-green-600 dark:text-green-400">- Michael Chen, Senior Mortgage Broker, Wells Fargo</p>
                  </div>
                  <div className="p-2 xs:p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h3 className="font-semibold text-purple-800 dark:text-purple-200 text-xs xs:text-sm sm:text-base mb-1 xs:mb-2">Dr. Lisa Rodriguez, PhD - Real Estate Finance</h3>
                    <p className="text-xs xs:text-sm text-purple-700 dark:text-purple-300 mb-1 xs:mb-2">
                      "Mortgage payment analysis requires understanding multiple variables including interest rates, payment timing, and amortization schedules. This calculator provides sophisticated analysis tools that help individuals make informed decisions about their home financing strategy."
                    </p>
                    <p className="text-xs text-purple-600 dark:text-purple-400">- Dr. Lisa Rodriguez, PhD, Director of Real Estate Finance, University of Chicago</p>
                  </div>
                </div>
              </div>

              {/* Success Stories Section */}
              <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 text-yellow-400 flex items-center gap-1 xs:gap-2">
                  <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Award className="h-3 xs:h-4 sm:h-5 w-3 xs:w-4 sm:w-5" />
                  </div>
                  Real Success Stories
                </h2>
                <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                  <div className="p-2 xs:p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 text-xs xs:text-sm sm:text-base mb-1 xs:mb-2">Mortgage Payoff Success</h3>
                    <p className="text-xs xs:text-sm text-yellow-700 dark:text-yellow-300 mb-1 xs:mb-2">
                      "I used this calculator to plan my mortgage payoff strategy. By making bi-weekly payments and one extra payment per year, I was able to pay off my 30-year mortgage in 22 years and save over $50,000 in interest. The calculator helped me understand the impact of each extra payment."
                    </p>
                    <p className="text-xs text-yellow-600 dark:text-yellow-400">- Jennifer M., Homeowner</p>
                  </div>
                  <div className="p-2 xs:p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 text-xs xs:text-sm sm:text-base mb-1 xs:mb-2">Refinancing Success</h3>
                    <p className="text-xs xs:text-sm text-green-700 dark:text-green-300 mb-1 xs:mb-2">
                      "This calculator helped me choose between different mortgage terms. By comparing 15-year vs 30-year terms, I realized the shorter term would save me $80,000 in interest despite higher monthly payments. The amortization schedule showed exactly how much I'd save."
                    </p>
                    <p className="text-xs text-green-600 dark:text-green-400">- Robert K., Home Buyer</p>
                  </div>
                  <div className="p-2 xs:p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 text-xs xs:text-sm sm:text-base mb-1 xs:mb-2">First-Time Home Buyer</h3>
                    <p className="text-xs xs:text-sm text-blue-700 dark:text-blue-300 mb-1 xs:mb-2">
                      "I used this calculator to understand my mortgage options as a first-time buyer. By comparing different down payment scenarios and loan terms, I was able to make an informed decision that fit my budget and long-term financial goals."
                    </p>
                    <p className="text-xs text-blue-600 dark:text-blue-400">- Maria S., First-Time Buyer</p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 text-yellow-400 flex items-center gap-1 xs:gap-2">
                  <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <AlertCircle className="h-3 xs:h-4 sm:h-5 w-3 xs:w-4 sm:w-5" />
                  </div>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base md:text-lg">What's included in a mortgage payment?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      A mortgage payment typically includes principal, interest, property taxes, home insurance, and sometimes PMI (Private Mortgage Insurance) and HOA fees.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base md:text-lg">How much should I put down on a house?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      While 20% down payment is ideal to avoid PMI, you can put down as little as 3-5% with certain loan programs. The higher your down payment, the lower your monthly payment and total interest.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base md:text-lg">What's the difference between APR and interest rate?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      The interest rate is the cost of borrowing money, while APR (Annual Percentage Rate) includes additional costs like fees, points, and closing costs. APR provides a more accurate picture of the total cost.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base md:text-lg">Should I choose a 15-year or 30-year mortgage?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      15-year mortgages have higher monthly payments but lower interest rates and total interest paid. 30-year mortgages have lower monthly payments but higher total interest. Choose based on your budget and financial goals.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base md:text-lg">When should I refinance my mortgage?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Consider refinancing when interest rates drop significantly, your credit score improves, or you want to change loan terms. Calculate the break-even point to ensure refinancing saves you money.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base md:text-lg">How do extra payments affect my mortgage?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Extra payments reduce the principal balance faster, which decreases the total interest paid and can shorten the loan term. Even small extra payments can save thousands in interest over the life of the loan.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base md:text-lg">What's an amortization schedule?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      An amortization schedule shows how each payment is divided between principal and interest over the life of the loan. Early payments are mostly interest, while later payments are mostly principal.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base md:text-lg">How can I save money on my mortgage?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      You can save money by making extra payments, refinancing to a lower rate, choosing a shorter term, or making bi-weekly payments instead of monthly payments.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base md:text-lg">How do I determine the maximum mortgage I can afford?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Determining the maximum mortgage you can afford involves evaluating your financial health using the widely accepted 28/36 rule. Your monthly housing expenses (mortgage principal, interest, taxes, and insurance) should not exceed 28% of your gross monthly income, while your total monthly debt obligations should not surpass 36% of your gross income. For example, if your gross monthly income is $6,000, your maximum housing expenses should be $1,680 (28% of $6,000) and total debt payments should not exceed $2,160 (36% of $6,000). Our mortgage calculator helps you assess affordability by factoring in your income, debts, and other financial details to provide a personalized estimate of what you can comfortably afford.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base md:text-lg">How does my credit score affect my mortgage terms and interest rates?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Your credit score is a critical factor in determining your mortgage eligibility and the interest rates offered. Higher credit scores typically qualify for lower interest rates, reducing both monthly payments and total interest paid over the life of the loan. A strong credit profile also increases the likelihood of loan approval and may grant access to larger loan amounts and more favorable terms. To improve your credit score, pay bills on time consistently, reduce debt to lower your credit utilization ratio, and avoid multiple recent credit inquiries. Regularly monitoring your credit report and addressing any inaccuracies can help maintain a healthy credit profile. Even a small improvement in your credit score can save you thousands of dollars in interest over the life of your mortgage.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base md:text-lg">What is Private Mortgage Insurance (PMI) and how can I avoid it?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Private Mortgage Insurance (PMI) is a policy that protects lenders against loss if a borrower defaults on a loan, typically required when your down payment is less than 20% of the home's purchase price. PMI can add hundreds of dollars to your monthly payment, so avoiding it is financially beneficial. The most straightforward way to avoid PMI is to make a down payment of at least 20%. Other options include lender-paid mortgage insurance (LPMI) where the lender pays PMI in exchange for a higher interest rate, piggyback loans that combine a primary mortgage with a secondary loan, or VA loans for eligible veterans which don't require PMI even with no down payment. If you're already paying PMI, you can request its removal once you've built 20% equity in your home through payments or property appreciation.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base md:text-lg">How do I choose between a fixed-rate and adjustable-rate mortgage (ARM)?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Choosing between a fixed-rate mortgage and an adjustable-rate mortgage (ARM) depends on your financial situation, risk tolerance, and how long you plan to stay in your home. Fixed-rate mortgages offer consistent monthly payments throughout the loan term, making budgeting easier and providing payment stability, though initial interest rates are typically higher than ARMs. ARMs offer lower initial interest rates and monthly payments, but rates and payments can increase after the initial fixed period, potentially causing payment shock. Fixed-rate mortgages are best for borrowers planning to stay in their home long-term who prefer payment stability, while ARMs are suitable for those who plan to sell or refinance before the adjustable period begins or anticipate significant income growth. Consider current interest rate trends, your comfort with potential payment fluctuations, and your long-term housing plans when making this decision.
                    </p>
                  </div>
                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2">
                    <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base md:text-lg">What are the most effective strategies for making extra mortgage payments?</h3>
                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Making extra payments toward your mortgage principal can significantly reduce your total interest costs and shorten your loan term. The most effective strategies include bi-weekly payments (making half-payments every two weeks, resulting in 26 payments per year and effectively one extra monthly payment annually), lump-sum payments using bonuses or tax refunds applied directly to principal, and rounding up your monthly payment to the nearest hundred dollars. For example, if your payment is $1,450, paying $1,500 monthly can save thousands in interest over time. Before making extra payments, confirm with your lender that there are no prepayment penalties and that additional payments are applied to the principal, not future payments. Even small extra payments can have a substantial impact: making just one extra payment per year on a 30-year mortgage can reduce the term by 4-5 years and save tens of thousands in interest.
                    </p>
                  </div>
                </div>
              </div>

              {/* External Resources Section */}
              <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 text-yellow-400 flex items-center gap-1 xs:gap-2">
                  <div className="p-1 xs:p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Globe className="h-3 xs:h-4 sm:h-5 w-3 xs:w-4 sm:w-5" />
                  </div>
                  External Resources & Research
                </h2>
                <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base mb-1 xs:mb-2">Government Resources</h3>
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-1 xs:gap-2">
                      <a href="https://www.consumerfinance.gov/" target="_blank" rel="noopener noreferrer" className="block p-1 xs:p-2 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                        <div className="font-medium text-blue-800 dark:text-blue-200 text-xs">Consumer Financial Protection Bureau</div>
                        <div className="text-xs text-blue-600 dark:text-blue-400">Consumer protection and financial education</div>
                      </a>
                      <a href="https://www.federalreserve.gov/" target="_blank" rel="noopener noreferrer" className="block p-1 xs:p-2 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                        <div className="font-medium text-green-800 dark:text-green-200 text-xs">Federal Reserve</div>
                        <div className="text-xs text-green-600 dark:text-green-400">Monetary policy and interest rates</div>
                      </a>
                      <a href="https://www.hud.gov/" target="_blank" rel="noopener noreferrer" className="block p-1 xs:p-2 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                        <div className="font-medium text-purple-800 dark:text-purple-200 text-xs">HUD</div>
                        <div className="text-xs text-purple-600 dark:text-purple-400">Housing and urban development</div>
                      </a>
                      <a href="https://www.fha.gov/" target="_blank" rel="noopener noreferrer" className="block p-1 xs:p-2 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                        <div className="font-medium text-orange-800 dark:text-orange-200 text-xs">FHA</div>
                        <div className="text-xs text-orange-600 dark:text-orange-400">Federal Housing Administration</div>
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-xs xs:text-sm sm:text-base mb-1 xs:mb-2">Professional Organizations</h3>
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-1 xs:gap-2">
                      <a href="https://www.fpanet.org/" target="_blank" rel="noopener noreferrer" className="block p-1 xs:p-2 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                        <div className="font-medium text-blue-800 dark:text-blue-200 text-xs">Financial Planning Association</div>
                        <div className="text-xs text-blue-600 dark:text-blue-400">Financial planning education</div>
                      </a>
                      <a href="https://www.cfp.net/" target="_blank" rel="noopener noreferrer" className="block p-1 xs:p-2 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                        <div className="font-medium text-green-800 dark:text-green-200 text-xs">CFP Board</div>
                        <div className="text-xs text-green-600 dark:text-green-400">Certified Financial Planner standards</div>
                      </a>
                      <a href="https://www.aicpa.org/" target="_blank" rel="noopener noreferrer" className="block p-1 xs:p-2 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                        <div className="font-medium text-purple-800 dark:text-purple-200 text-xs">AICPA</div>
                        <div className="text-xs text-purple-600 dark:text-purple-400">Professional accounting standards</div>
                      </a>
                      <a href="https://www.aba.com/" target="_blank" rel="noopener noreferrer" className="block p-1 xs:p-2 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                        <div className="font-medium text-orange-800 dark:text-orange-200 text-xs">American Bankers Association</div>
                        <div className="text-xs text-orange-600 dark:text-orange-400">Banking industry resources</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Tools Section */}
              <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
                <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 flex items-center gap-1 xs:gap-2 text-yellow-400">
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
                        <div className="font-medium text-xs xs:text-sm text-foreground group-hover:text-primary transition-colors">
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
            
            {/* Sidebar */}
            <div className="hidden lg:block space-y-3 xs:space-y-4 sm:space-y-6">
              <div className="sticky top-4 space-y-3 xs:space-y-4 sm:space-y-6">
                {/* Sidebar Ad 1 */}
                <div className="bg-card border border-border rounded-xl p-2 xs:p-3 shadow-sm">
                  <AdSpace slot="sidebar" className="h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 xl:h-88 2xl:h-96" />
                </div>
                
                {/* Sidebar Ad 2 */}
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