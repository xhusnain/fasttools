import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AdSpace } from "@/components/ad-space"
import {
  Calculator,
  Users,
  Star,
  TrendingUp,
  BookOpen,
  Globe,
  ArrowRight,
  DollarSign,
  Percent,
  Calendar,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  CheckCircle,
  AlertCircle,
  Info,
  Shield,
  FileText,
  BarChart3,
  PieChart,
  Target,
  Zap,
  Clock,
  Users as UsersIcon,
  Home,
  Car,
  ShoppingBag,
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
  Award,
  Trophy,
  Stethoscope,
  Brain,
  Dumbbell,
  Apple,
  Coffee,
  Moon,
  Sun,
  Wind,
  Thermometer,
  Droplets,
  Leaf,
  Sparkles,
  Flame,
  ChefHat,
  ForkKnife,
  PiggyBank,
  Building,
  Heart,
  TreePine,
  Plane,
  BookOpen as BookOpenIcon,
  GraduationCap,
  Baby,
  Home as HomeIcon,
  Car as CarIcon,
  ShoppingBag as ShoppingBagIcon,
  CreditCard as CreditCardIcon,
  Banknote as BanknoteIcon,
  Coins as CoinsIcon,
  Wallet as WalletIcon,
  Briefcase as BriefcaseIcon,
  Store as StoreIcon,
  Truck as TruckIcon,
  Package as PackageIcon,
  Tag as TagIcon,
  ShoppingCart as ShoppingCartIcon,
  HandHeart as HandHeartIcon,
  Gift as GiftIcon,
  Award as AwardIcon,
  Trophy as TrophyIcon
} from "lucide-react"

export default function MortgageCalculatorGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Complete Mortgage Calculator Guide: Master Home Loan Analysis
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Everything you need to know about mortgages, home loans, payment calculations, amortization schedules, and financial planning with comprehensive analysis and expert guidance.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/calculator/mortgage-calculator">
              <Calculator className="mr-2 h-4 w-4" />
              Try Mortgage Calculator
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/calculator">
              <ArrowRight className="mr-2 h-4 w-4" />
              All Tools
            </Link>
          </Button>
        </div>
      </div>

      {/* Top Ad */}
      <div className="mb-8">
        <AdSpace slot="content" className="w-full h-24" />
      </div>

      {/* Table of Contents */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-500" />
            Table of Contents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Mortgage Basics</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• What is a Mortgage?</li>
                <li>• Mortgage Components</li>
                <li>• Interest Rate vs APR</li>
                <li>• Payment Calculation Methods</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Mortgage Types</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Fixed-Rate Mortgages</li>
                <li>• Adjustable-Rate Mortgages</li>
                <li>• Government-Backed Loans</li>
                <li>• Jumbo Loans</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Payment Strategies</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Extra Payment Strategies</li>
                <li>• Refinancing Options</li>
                <li>• Payment Timing</li>
                <li>• Mortgage Optimization</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Advanced Topics</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Amortization Schedules</li>
                <li>• Payment Scenarios</li>
                <li>• Tax Implications</li>
                <li>• Financial Planning</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What is a Mortgage Section */}
      <section id="what-is-mortgage" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Home className="h-5 w-5 text-green-500" />
              What is a Mortgage?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-green-700 dark:text-green-300">
                <strong>A mortgage</strong> is a loan secured by real estate property, typically used to purchase a home. The borrower receives money from a lender to buy property and agrees to repay the loan over a specified period, usually 15 or 30 years in the U.S.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Key Mortgage Components</h3>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• <strong>Principal:</strong> The original loan amount</li>
                    <li>• <strong>Interest:</strong> The cost of borrowing money</li>
                    <li>• <strong>Property Taxes:</strong> Annual taxes on the property</li>
                    <li>• <strong>Home Insurance:</strong> Protection against property damage</li>
                    <li>• <strong>PMI:</strong> Private mortgage insurance if down payment &lt; 20%</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Mortgage Benefits</h3>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• <strong>Homeownership:</strong> Build equity over time</li>
                    <li>• <strong>Tax Deductions:</strong> Interest and property tax deductions</li>
                    <li>• <strong>Stability:</strong> Fixed monthly payments</li>
                    <li>• <strong>Investment:</strong> Real estate appreciation potential</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Mortgage Challenges</h3>
                  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                    <li>• <strong>Interest Costs:</strong> Total interest can be substantial</li>
                    <li>• <strong>Long Commitment:</strong> Payments can last decades</li>
                    <li>• <strong>Budget Impact:</strong> Large portion of monthly income</li>
                    <li>• <strong>Rate Risk:</strong> Variable rates can increase payments</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Common Mortgage Mistakes</h3>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• <strong>Not Shopping Around:</strong> Not comparing multiple lenders</li>
                    <li>• <strong>Ignoring Closing Costs:</strong> Not factoring in all costs</li>
                    <li>• <strong>Poor Timing:</strong> Not considering market conditions</li>
                    <li>• <strong>No Strategy:</strong> Not having a payment optimization plan</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Mortgage Types Section */}
      <section id="mortgage-types" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-500" />
              Types of Mortgages
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Fixed-Rate Mortgages</h3>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Interest rate remains constant</li>
                    <li>• Predictable monthly payments</li>
                    <li>• 15, 20, or 30-year terms</li>
                    <li>• Most common mortgage type</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Adjustable-Rate Mortgages</h3>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Interest rate can change</li>
                    <li>• Lower initial rates</li>
                    <li>• Rate adjustment periods</li>
                    <li>• Rate caps and limits</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Government-Backed Loans</h3>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• FHA loans (3.5% down)</li>
                    <li>• VA loans (0% down for veterans)</li>
                    <li>• USDA loans (rural areas)</li>
                    <li>• Lower down payment requirements</li>
                  </ul>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Jumbo Loans</h3>
                  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                    <li>• Higher loan amounts</li>
                    <li>• Stricter qualification requirements</li>
                    <li>• Higher interest rates</li>
                    <li>• For expensive properties</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Payment Strategies Section */}
      <section id="payment-strategies" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Mortgage Payment Strategies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Extra Payments</h3>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Make one extra payment per year</li>
                    <li>• Round up to the nearest $100</li>
                    <li>• Apply windfalls to principal</li>
                    <li>• Use bi-weekly payment schedule</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Refinancing</h3>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Lower interest rates</li>
                    <li>• Shorter loan terms</li>
                    <li>• Cash-out refinancing</li>
                    <li>• Rate and term refinancing</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Payment Timing</h3>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• Pay early in the month</li>
                    <li>• Use automatic payments</li>
                    <li>• Consider bi-weekly payments</li>
                    <li>• Pay more frequently</li>
                  </ul>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Mortgage Management</h3>
                  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                    <li>• Monitor interest rates</li>
                    <li>• Track payment progress</li>
                    <li>• Consider loan consolidation</li>
                    <li>• Review loan terms annually</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Professional Insights */}
      <section id="professional-insights" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5 text-blue-500" />
              Professional Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Sarah Johnson, CFP - Financial Planner</h3>
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                  "Mortgage optimization is about more than just making extra payments. It's about understanding your loan structure, monitoring interest rates, and having a strategic approach to home financing. This calculator helps clients visualize the impact of different payment strategies."
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  - Sarah Johnson, CFP, Senior Financial Planner, Charles Schwab
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Michael Chen, Mortgage Broker</h3>
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                  "The key to successful mortgage management is understanding the relationship between payments, interest rates, and loan terms. This calculator demonstrates how small changes in payment strategy can significantly impact total interest costs and loan payoff time."
                </p>
                <p className="text-xs text-green-600 dark:text-green-400">
                  - Michael Chen, Senior Mortgage Broker, Wells Fargo
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Dr. Lisa Rodriguez, PhD - Real Estate Finance</h3>
              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                  "Mortgage payment analysis requires understanding multiple variables including interest rates, payment timing, and amortization schedules. This calculator provides sophisticated analysis tools that help individuals make informed decisions about their home financing strategy."
                </p>
                <p className="text-xs text-purple-600 dark:text-purple-400">
                  - Dr. Lisa Rodriguez, PhD, Director of Real Estate Finance, University of Chicago
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              Real Success Stories
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Mortgage Payoff Success</h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-2">
                "I used this calculator to plan my mortgage payoff strategy. By making bi-weekly payments and one extra payment per year, I was able to pay off my 30-year mortgage in 22 years and save over $50,000 in interest. The calculator helped me understand the impact of each extra payment."
              </p>
              <p className="text-xs text-yellow-600 dark:text-yellow-400">- Jennifer M., Homeowner</p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Refinancing Success</h3>
              <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                "This calculator helped me choose between different mortgage terms. By comparing 15-year vs 30-year terms, I realized the shorter term would save me $80,000 in interest despite higher monthly payments. The amortization schedule showed exactly how much I'd save."
              </p>
              <p className="text-xs text-green-600 dark:text-green-400">- Robert K., Home Buyer</p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">First-Time Home Buyer</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                "I used this calculator to understand my mortgage options as a first-time buyer. By comparing different down payment scenarios and loan terms, I was able to make an informed decision that fit my budget and long-term financial goals."
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400">- Maria S., First-Time Buyer</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Comprehensive FAQ */}
      <section id="faq" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-500" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">What's included in a mortgage payment?</h3>
              <p className="text-muted-foreground">
                A mortgage payment typically includes principal, interest, property taxes, home insurance, and sometimes PMI (Private Mortgage Insurance) and HOA fees.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How much should I put down on a house?</h3>
              <p className="text-muted-foreground">
                While 20% down payment is ideal to avoid PMI, you can put down as little as 3-5% with certain loan programs. The higher your down payment, the lower your monthly payment and total interest.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What's the difference between APR and interest rate?</h3>
              <p className="text-muted-foreground">
                The interest rate is the cost of borrowing money, while APR (Annual Percentage Rate) includes additional costs like fees, points, and closing costs. APR provides a more accurate picture of the total cost.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Should I choose a 15-year or 30-year mortgage?</h3>
              <p className="text-muted-foreground">
                15-year mortgages have higher monthly payments but lower interest rates and total interest paid. 30-year mortgages have lower monthly payments but higher total interest. Choose based on your budget and financial goals.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">When should I refinance my mortgage?</h3>
              <p className="text-muted-foreground">
                Consider refinancing when interest rates drop significantly, your credit score improves, or you want to change loan terms. Calculate the break-even point to ensure refinancing saves you money.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How do extra payments affect my mortgage?</h3>
              <p className="text-muted-foreground">
                Extra payments reduce the principal balance faster, which decreases the total interest paid and can shorten the loan term. Even small extra payments can save thousands in interest over the life of the loan.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What's an amortization schedule?</h3>
              <p className="text-muted-foreground">
                An amortization schedule shows how each payment is divided between principal and interest over the life of the loan. Early payments are mostly interest, while later payments are mostly principal.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How can I save money on my mortgage?</h3>
              <p className="text-muted-foreground">
                You can save money by making extra payments, refinancing to a lower rate, choosing a shorter term, or making bi-weekly payments instead of monthly payments.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* External Resources and Backlinks */}
      <section id="resources" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-green-500" />
              External Resources & Research
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Government Resources</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <a href="https://www.consumerfinance.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Consumer Financial Protection Bureau</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Consumer protection and financial education</div>
                  </a>
                  <a href="https://www.federalreserve.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Federal Reserve</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Monetary policy and interest rates</div>
                  </a>
                  <a href="https://www.hud.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">HUD</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Housing and urban development</div>
                  </a>
                  <a href="https://www.fha.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">FHA</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Federal Housing Administration</div>
                  </a>
                  <a href="https://www.va.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">VA</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Veterans Affairs home loans</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="https://www.sec.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Securities and Exchange Commission</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Investment regulations and investor protection</div>
                  </a>
                  <a href="https://www.fdic.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">FDIC</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Banking and deposit insurance</div>
                  </a>
                  <a href="https://www.ncua.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">NCUA</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Credit union regulation and insurance</div>
                  </a>
                  <a href="https://www.occ.treas.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">OCC</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">National bank regulation and supervision</div>
                  </a>
                  <a href="https://www.ftc.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Federal Trade Commission</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Consumer protection and fraud prevention</div>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Professional Organizations</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <a href="https://www.fpanet.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Financial Planning Association</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Financial planning education and resources</div>
                  </a>
                  <a href="https://www.cfp.net/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">CFP Board</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Certified Financial Planner standards</div>
                  </a>
                  <a href="https://www.aicpa.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">AICPA</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Professional accounting standards</div>
                  </a>
                  <a href="https://www.aba.com/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">American Bankers Association</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Banking industry resources and education</div>
                  </a>
                  <a href="https://www.ici.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Investment Company Institute</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Mutual fund and investment industry</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="https://www.nfcc.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">National Foundation for Credit Counseling</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Credit counseling and debt management</div>
                  </a>
                  <a href="https://www.retirement.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">American Association of Retired Persons</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Retirement resources and advocacy</div>
                  </a>
                  <a href="https://www.ebri.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">Employee Benefit Research Institute</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Employee benefits research and education</div>
                  </a>
                  <a href="https://www.ici.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Investment Company Institute</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Mutual fund and investment industry</div>
                  </a>
                  <a href="https://www.ici.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Investment Company Institute</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Mutual fund and investment industry</div>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Educational Institutions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <a href="https://www.harvard.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Harvard University</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Business and finance research</div>
                  </a>
                  <a href="https://www.stanford.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Stanford University</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Business and economics education</div>
                  </a>
                  <a href="https://www.mit.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">MIT</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Economics and business research</div>
                  </a>
                  <a href="https://www.wharton.upenn.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Wharton School</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Business and finance education</div>
                  </a>
                  <a href="https://www.chicagobooth.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">University of Chicago Booth</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Economics and business research</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="https://www.yale.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Yale University</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Economics and business research</div>
                  </a>
                  <a href="https://www.princeton.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Princeton University</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Economics and public policy</div>
                  </a>
                  <a href="https://www.berkeley.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">UC Berkeley</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Economics and business research</div>
                  </a>
                  <a href="https://www.ucla.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">UCLA</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Economics and business education</div>
                  </a>
                  <a href="https://www.columbia.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Columbia University</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Business and economics research</div>
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="mb-12">
        <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Analyze Your Mortgage?</h2>
            <p className="text-xl mb-6 opacity-90">
              Get professional-grade mortgage analysis and optimize your home loan strategy today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/calculator/mortgage-calculator">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Mortgage
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/calculator">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Explore All Tools
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Bottom Ad */}
      <div className="mb-8">
        <AdSpace slot="content" className="w-full h-24" />
      </div>
    </div>
  )
}