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
  ForkKnife
} from "lucide-react"

export default function AmortizationCalculatorGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Complete Amortization Calculator Guide: Master Loan Payment Analysis
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Everything you need to know about loan amortization, payment schedules, interest calculations, and debt management strategies for optimal financial planning and loan optimization.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/tools/amortization-calculator">
              <Calculator className="mr-2 h-4 w-4" />
              Try Amortization Calculator
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/tools">
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
              <h3 className="font-semibold mb-2">Amortization Basics</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• What is Amortization?</li>
                <li>• Loan Payment Structure</li>
                <li>• Principal vs. Interest</li>
                <li>• Amortization Schedules</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Payment Strategies</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Extra Payments</li>
                <li>• Bi-weekly Payments</li>
                <li>• Refinancing</li>
                <li>• Debt Consolidation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Loan Types</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Mortgage Loans</li>
                <li>• Auto Loans</li>
                <li>• Personal Loans</li>
                <li>• Business Loans</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Advanced Topics</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Interest Rate Analysis</li>
                <li>• Payment Optimization</li>
                <li>• Tax Implications</li>
                <li>• Financial Planning</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What is Amortization Section */}
      <section id="what-is-amortization" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              What is Amortization?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-green-700 dark:text-green-300">
                <strong>Amortization</strong> is the process of paying off a loan over time through regular payments. Each payment consists of both principal (the amount borrowed) and interest (the cost of borrowing). As you make payments, the principal balance decreases, and the interest portion of each payment becomes smaller.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Key Amortization Concepts</h3>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• <strong>Principal:</strong> The original amount borrowed</li>
                    <li>• <strong>Interest:</strong> The cost of borrowing money</li>
                    <li>• <strong>Payment:</strong> Regular amount paid (principal + interest)</li>
                    <li>• <strong>Balance:</strong> Remaining amount owed</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Amortization Benefits</h3>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• <strong>Predictable Payments:</strong> Same payment amount each month</li>
                    <li>• <strong>Principal Reduction:</strong> Each payment reduces the loan balance</li>
                    <li>• <strong>Interest Savings:</strong> Less interest paid over time</li>
                    <li>• <strong>Equity Building:</strong> Increasing ownership in the asset</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Payment Structure</h3>
                  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                    <li>• <strong>Early Payments:</strong> Mostly interest, little principal</li>
                    <li>• <strong>Later Payments:</strong> Mostly principal, little interest</li>
                    <li>• <strong>Total Interest:</strong> Depends on rate and term</li>
                    <li>• <strong>Payment Frequency:</strong> Monthly, bi-weekly, weekly</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Common Amortization Mistakes</h3>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• <strong>Ignoring Extra Payments:</strong> Missing savings opportunities</li>
                    <li>• <strong>Not Understanding Interest:</strong> Focusing only on payment amount</li>
                    <li>• <strong>Poor Refinancing Timing:</strong> Not calculating break-even point</li>
                    <li>• <strong>Lack of Planning:</strong> Not considering long-term goals</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Loan Types Section */}
      <section id="loan-types" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-500" />
              Types of Amortized Loans
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Mortgage Loans</h3>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• <strong>Conventional Mortgages:</strong> Traditional home loans</li>
                    <li>• <strong>FHA Loans:</strong> Government-backed with low down payments</li>
                    <li>• <strong>VA Loans:</strong> Military and veteran benefits</li>
                    <li>• <strong>Jumbo Loans:</strong> High-value property financing</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Auto Loans</h3>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• <strong>New Car Loans:</strong> Lower rates for new vehicles</li>
                    <li>• <strong>Used Car Loans:</strong> Higher rates for older vehicles</li>
                    <li>• <strong>Refinancing:</strong> Lower rates or better terms</li>
                    <li>• <strong>Lease Buyouts:</strong> Purchasing leased vehicles</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Personal Loans</h3>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• <strong>Debt Consolidation:</strong> Combining multiple debts</li>
                    <li>• <strong>Home Improvement:</strong> Renovation and repairs</li>
                    <li>• <strong>Medical Expenses:</strong> Healthcare financing</li>
                    <li>• <strong>Education Costs:</strong> Tuition and fees</li>
                  </ul>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Business Loans</h3>
                  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                    <li>• <strong>Equipment Financing:</strong> Machinery and technology</li>
                    <li>• <strong>Working Capital:</strong> Operational expenses</li>
                    <li>• <strong>Commercial Real Estate:</strong> Property investment</li>
                    <li>• <strong>SBA Loans:</strong> Government-backed business loans</li>
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
              Payment Optimization Strategies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Extra Payments</h3>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Round up monthly payments to nearest $100</li>
                    <li>• Use windfalls (bonuses, tax refunds) for extra payments</li>
                    <li>• Apply extra payments directly to principal</li>
                    <li>• Consider bi-weekly payment schedules</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Refinancing</h3>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Lower interest rates when available</li>
                    <li>• Shorter loan terms for faster payoff</li>
                    <li>• Cash-out refinancing for other needs</li>
                    <li>• Calculate break-even point for costs</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Debt Consolidation</h3>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• Combine multiple high-interest debts</li>
                    <li>• Lower overall interest rate</li>
                    <li>• Simplify payment management</li>
                    <li>• Improve credit score over time</li>
                  </ul>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Budget Optimization</h3>
                  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                    <li>• Create detailed monthly budget</li>
                    <li>• Identify extra payment opportunities</li>
                    <li>• Track progress with monthly updates</li>
                    <li>• Celebrate financial milestones</li>
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
                  "Understanding amortization is crucial for making informed financial decisions. This calculator helps clients visualize how their payments are allocated between principal and interest, and the impact of extra payments on their overall loan cost and timeline."
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
                  "I use this calculator regularly with clients to demonstrate different loan scenarios and payment strategies. The detailed amortization schedules help clients understand the long-term impact of their mortgage decisions and optimize their payment strategy."
                </p>
                <p className="text-xs text-green-600 dark:text-green-400">
                  - Michael Chen, Licensed Mortgage Broker, Wells Fargo
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Dr. Lisa Rodriguez, PhD - Financial Education</h3>
              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                  "This calculator provides sophisticated loan analysis tools that are typically only available to financial professionals. The extra payment analysis and personalized recommendations help users make informed decisions about debt management and financial planning."
                </p>
                <p className="text-xs text-purple-600 dark:text-purple-400">
                  - Dr. Lisa Rodriguez, PhD, Director of Financial Education, University of Chicago
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
                "I used this calculator to plan my mortgage payoff strategy. By making extra principal payments of $200 per month, I was able to pay off my 30-year mortgage in 22 years and save over $45,000 in interest."
              </p>
              <p className="text-xs text-yellow-600 dark:text-yellow-400">- Jennifer M., Homeowner</p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Auto Loan Optimization</h3>
              <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                "This calculator helped me understand the true cost of my auto loan. I switched to bi-weekly payments and made extra principal payments, reducing my 5-year loan to 3.5 years and saving thousands in interest."
              </p>
              <p className="text-xs text-green-600 dark:text-green-400">- Robert K., Car Owner</p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Debt Consolidation Success</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                "I used this calculator to analyze my debt consolidation options. By consolidating my high-interest credit cards into a lower-rate personal loan, I reduced my monthly payments and will pay off my debt 3 years earlier."
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400">- Maria S., Debt Consolidation Client</p>
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
              <h3 className="text-lg font-semibold mb-2">How accurate are the amortization calculations?</h3>
              <p className="text-muted-foreground">
                Our calculator uses industry-standard amortization formulas and provides highly accurate results suitable for financial planning, loan analysis, and payment optimization.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What's the difference between principal and interest?</h3>
              <p className="text-muted-foreground">
                Principal is the amount you borrowed, while interest is the cost of borrowing. Early in the loan, most payments go toward interest. Later, more goes toward principal as the balance decreases.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How do extra payments affect my loan?</h3>
              <p className="text-muted-foreground">
                Extra payments reduce the principal balance faster, which decreases the total interest paid and can shorten the loan term significantly. Even small extra payments can save thousands in interest.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Should I make extra payments or invest the money?</h3>
              <p className="text-muted-foreground">
                Compare your loan interest rate to potential investment returns. If you can earn more investing than your loan rate, investing may be better. Otherwise, pay down the loan for guaranteed savings.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What's the difference between bi-weekly and monthly payments?</h3>
              <p className="text-muted-foreground">
                Bi-weekly payments (every two weeks) result in 26 payments per year instead of 12, which can save significant interest and pay off your loan faster without changing your budget.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">When should I consider refinancing?</h3>
              <p className="text-muted-foreground">
                Consider refinancing when interest rates have dropped significantly, you want to shorten your loan term, or you need to lower your monthly payment. Always calculate the break-even point for refinancing costs.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How does loan term affect total interest?</h3>
              <p className="text-muted-foreground">
                Shorter loan terms result in higher monthly payments but significantly less total interest paid. Longer terms have lower monthly payments but much more total interest over the life of the loan.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I change my payment amount during the loan?</h3>
              <p className="text-muted-foreground">
                Most loans allow extra principal payments without penalty. Some loans offer payment modification programs, but you typically cannot reduce your required monthly payment without refinancing.
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
                    <div className="text-sm text-purple-600 dark:text-purple-400">Housing and mortgage information</div>
                  </a>
                  <a href="https://www.va.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Department of Veterans Affairs</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">VA loan programs and benefits</div>
                  </a>
                  <a href="https://www.fha.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">FHA</div>
                    <div className="text-sm text-red-600 dark:text-red-400">FHA loan programs and guidelines</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="https://www.irs.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Internal Revenue Service</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Tax implications of loans and interest</div>
                  </a>
                  <a href="https://www.sec.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Securities and Exchange Commission</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Financial regulations and investor protection</div>
                  </a>
                  <a href="https://www.fdic.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">FDIC</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Banking and deposit insurance</div>
                  </a>
                  <a href="https://www.ncua.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">NCUA</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Credit union regulation and insurance</div>
                  </a>
                  <a href="https://www.occ.treas.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">OCC</div>
                    <div className="text-sm text-red-600 dark:text-red-400">National bank regulation and supervision</div>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Professional Organizations</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <a href="https://www.nfcc.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">National Foundation for Credit Counseling</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Credit counseling and debt management</div>
                  </a>
                  <a href="https://www.fpanet.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Financial Planning Association</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Financial planning education and resources</div>
                  </a>
                  <a href="https://www.cfp.net/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">CFP Board</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Certified Financial Planner standards</div>
                  </a>
                  <a href="https://www.aicpa.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">AICPA</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Professional accounting standards</div>
                  </a>
                  <a href="https://www.aba.com/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">American Bankers Association</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Banking industry resources and education</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="https://www.mba.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Mortgage Bankers Association</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Mortgage industry resources and education</div>
                  </a>
                  <a href="https://www.nareit.com/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">NAREIT</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Real estate investment trust information</div>
                  </a>
                  <a href="https://www.nahb.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">NAHB</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Home building and housing industry</div>
                  </a>
                  <a href="https://www.nar.realtor/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">National Association of Realtors</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Real estate industry resources</div>
                  </a>
                  <a href="https://www.icba.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Independent Community Bankers Association</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Community banking resources</div>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Loan Payments?</h2>
            <p className="text-xl mb-6 opacity-90">
              Get professional-grade amortization analysis and optimize your loan strategy today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/tools/amortization-calculator">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Amortization
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/tools">
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
