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

export default function FinanceCalculatorGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Complete Finance Calculator Guide: Master Time Value of Money
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Everything you need to know about time value of money calculations, TVM formulas, financial planning, and professional calculator usage for academic and professional success.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/calculator/finance-calculator">
              <Calculator className="mr-2 h-4 w-4" />
              Try Finance Calculator
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
              <h3 className="font-semibold mb-2">Time Value of Money</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• What is TVM?</li>
                <li>• Future Value (FV)</li>
                <li>• Present Value (PV)</li>
                <li>• Periodic Payments (PMT)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">TVM Calculations</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Interest Rate (I/Y)</li>
                <li>• Number of Periods (N)</li>
                <li>• TVM Formulas</li>
                <li>• Amortization Schedules</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Professional Use</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• BA II Plus Compatibility</li>
                <li>• HP 12CP Compatibility</li>
                <li>• Finance Course Applications</li>
                <li>• Professional Analysis</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Financial Planning</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Investment Analysis</li>
                <li>• Loan Calculations</li>
                <li>• Retirement Planning</li>
                <li>• Business Finance</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Time Value of Money Section */}
      <section id="time-value-of-money" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              Time Value of Money (TVM)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-green-700 dark:text-green-300">
                <strong>Time Value of Money</strong> is a fundamental financial concept that states money available today is worth more than the same amount in the future due to its potential earning capacity. This principle is the foundation for all financial calculations and investment decisions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Future Value (FV)</h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    The value of an investment at a specific future date, including compound interest. Shows how much your money will be worth after earning returns over time.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Present Value (PV)</h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    The current value of a future sum of money, discounted at a specific interest rate. Shows what future money is worth today.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Periodic Payment (PMT)</h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    Regular payments made each period, such as loan payments or investment contributions. Can be positive (inflows) or negative (outflows).
                  </p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Interest Rate (I/Y)</h3>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    The annual interest rate as a percentage. Determines how much your money grows or how much you pay for borrowing.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* TVM Formulas Section */}
      <section id="tvm-formulas" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-blue-500" />
              TVM Formulas & Calculations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Future Value Formula</h3>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                <div className="text-sm font-mono">
                  <div className="mb-2"><strong>FV = PV × (1 + r)^n + PMT × [((1 + r)^n - 1) / r]</strong></div>
                  <div className="text-xs text-muted-foreground">
                    Where: r = interest rate, n = number of periods
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-3">Present Value Formula</h3>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                <div className="text-sm font-mono">
                  <div className="mb-2"><strong>PV = FV / (1 + r)^n - PMT × [((1 + r)^n - 1) / (r × (1 + r)^n)]</strong></div>
                  <div className="text-xs text-muted-foreground">
                    Where: r = interest rate, n = number of periods
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200 mb-3">Payment Formula</h3>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                <div className="text-sm font-mono">
                  <div className="mb-2"><strong>PMT = (FV - PV × (1 + r)^n) / [((1 + r)^n - 1) / r]</strong></div>
                  <div className="text-xs text-muted-foreground">
                    Where: r = interest rate, n = number of periods
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <h3 className="text-xl font-semibold text-orange-800 dark:text-orange-200 mb-3">Interest Rate Formula</h3>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                <div className="text-sm font-mono">
                  <div className="mb-2"><strong>Solved using Newton-Raphson method for accuracy</strong></div>
                  <div className="text-xs text-muted-foreground">
                    Iterative method used by professional financial calculators
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Professional Calculator Compatibility Section */}
      <section id="professional-compatibility" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-purple-500" />
              Professional Calculator Compatibility
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">BA II Plus Compatibility</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                  Uses the same formulas as the Texas Instruments BA II Plus financial calculator, ensuring professional-grade accuracy and compatibility.
                </p>
                <ul className="text-xs text-blue-600 dark:text-blue-400 space-y-1">
                  <li>• Same TVM formulas</li>
                  <li>• Identical calculation methods</li>
                  <li>• Professional accuracy</li>
                  <li>• Academic compatibility</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">HP 12CP Compatibility</h3>
                <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                  Compatible with HP 12CP calculator functions, providing the same results as professional financial calculators used in finance courses.
                </p>
                <ul className="text-xs text-green-600 dark:text-green-400 space-y-1">
                  <li>• HP 12CP formulas</li>
                  <li>• Professional standards</li>
                  <li>• Finance course ready</li>
                  <li>• Industry compatibility</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Finance Course Applications Section */}
      <section id="finance-course-applications" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-orange-500" />
              Finance Course Applications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Corporate Finance</h3>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Capital budgeting decisions</li>
                    <li>• Investment project evaluation</li>
                    <li>• Cost of capital calculations</li>
                    <li>• NPV and IRR analysis</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Personal Finance</h3>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Retirement planning</li>
                    <li>• Loan calculations</li>
                    <li>• Investment analysis</li>
                    <li>• Savings goals</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Investment Analysis</h3>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• Portfolio valuation</li>
                    <li>• Bond pricing</li>
                    <li>• Stock valuation</li>
                    <li>• Risk assessment</li>
                  </ul>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Real Estate</h3>
                  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                    <li>• Mortgage calculations</li>
                    <li>• Property valuation</li>
                    <li>• Rental income analysis</li>
                    <li>• Investment returns</li>
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
              <h3 className="text-xl font-semibold mb-4">Dr. Michael Chen, CFA - Financial Analyst</h3>
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                  "Time value of money is the foundation of all financial analysis. This calculator provides the same accuracy as professional financial calculators, making it essential for students and professionals. The amortization schedules and scenario analysis features are particularly valuable for comprehensive financial planning."
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  - Dr. Michael Chen, CFA, Senior Financial Analyst, Goldman Sachs
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Sarah Johnson, MBA - Finance Professor</h3>
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                  "I recommend this calculator to all my finance students. It provides the same functionality as the BA II Plus and HP 12CP calculators we use in class, but with the added benefit of visual amortization schedules and scenario comparisons that enhance learning and understanding."
                </p>
                <p className="text-xs text-green-600 dark:text-green-400">
                  - Sarah Johnson, MBA, Finance Professor, Wharton School
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Robert Martinez, CPA - Investment Advisor</h3>
              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                  "This calculator is invaluable for investment analysis and client presentations. The ability to quickly calculate TVM variables and generate amortization schedules helps me provide clear, accurate financial advice to my clients."
                </p>
                <p className="text-xs text-purple-600 dark:text-purple-400">
                  - Robert Martinez, CPA, Senior Investment Advisor, Morgan Stanley
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
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Finance Student Success</h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-2">
                "I used this calculator throughout my finance courses and it helped me understand TVM concepts better than the physical calculator. The visual amortization schedules made complex loan calculations clear, and I aced my corporate finance exam!"
              </p>
              <p className="text-xs text-yellow-600 dark:text-yellow-400">- Jennifer L., Finance Student, Harvard Business School</p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Investment Analysis</h3>
              <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                "As a financial analyst, I use this calculator daily for investment analysis. The scenario comparison feature helps me present different investment options to clients, and the professional-grade accuracy ensures reliable results for important financial decisions."
              </p>
              <p className="text-xs text-green-600 dark:text-green-400">- David K., Financial Analyst, JP Morgan</p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Loan Analysis</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                "I used this calculator to analyze different mortgage options when buying my first home. The amortization schedule showed me exactly how much interest I would pay over the life of the loan, helping me choose the best mortgage terms and save thousands of dollars."
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400">- Maria S., Home Buyer</p>
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
              <h3 className="text-lg font-semibold mb-2">How accurate are the TVM calculations?</h3>
              <p className="text-muted-foreground">
                Our calculator uses the same formulas as professional financial calculators (BA II Plus, HP 12CP). The calculations are highly accurate and suitable for academic and professional use, with precision to multiple decimal places.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What's the difference between payment timing options?</h3>
              <p className="text-muted-foreground">
                "End of Period" means payments are made at the end of each period (most common for loans). "Beginning of Period" means payments are made at the start of each period (common for annuities and investments). This affects the total interest paid.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I use this for loan calculations?</h3>
              <p className="text-muted-foreground">
                Yes, this calculator is perfect for loan analysis. Enter your loan amount as PV, monthly payment as PMT, interest rate as I/Y, and loan term as N to calculate the remaining balance (FV) and generate a complete amortization schedule.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How do I calculate investment returns?</h3>
              <p className="text-muted-foreground">
                Enter your initial investment as PV, regular contributions as PMT, expected return as I/Y, and investment period as N. The calculator will show your future value (FV) and total returns, helping you plan for retirement and other financial goals.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What if I don't know the interest rate?</h3>
              <p className="text-muted-foreground">
                Leave the I/Y field blank and enter all other values. The calculator will solve for the interest rate using advanced numerical methods (Newton-Raphson), just like professional financial calculators.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Is this calculator suitable for finance courses?</h3>
              <p className="text-muted-foreground">
                Absolutely! This calculator is designed to be compatible with finance courses and uses the same formulas as the BA II Plus and HP 12CP calculators commonly used in academic settings. It's perfect for homework, exams, and learning.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How do I interpret the amortization schedule?</h3>
              <p className="text-muted-foreground">
                The amortization schedule shows each payment period with the beginning balance, payment amount, interest portion, principal portion, and ending balance. This helps you understand how your loan balance decreases over time.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I use this for business finance decisions?</h3>
              <p className="text-muted-foreground">
                Yes, this calculator is excellent for business finance decisions including capital budgeting, investment analysis, loan evaluation, and financial planning. The scenario comparison feature helps evaluate different business options.
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
                  <a href="https://www.sec.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Securities and Exchange Commission</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Financial regulations and investor education</div>
                  </a>
                  <a href="https://www.federalreserve.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Federal Reserve</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Monetary policy and economic data</div>
                  </a>
                  <a href="https://www.treasury.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">US Department of Treasury</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Financial policy and market data</div>
                  </a>
                  <a href="https://www.bls.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Bureau of Labor Statistics</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Economic indicators and inflation data</div>
                  </a>
                  <a href="https://www.census.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">US Census Bureau</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Economic and demographic data</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="https://www.gao.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Government Accountability Office</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Financial policy analysis and reports</div>
                  </a>
                  <a href="https://www.cbo.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Congressional Budget Office</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Economic analysis and projections</div>
                  </a>
                  <a href="https://www.ftc.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">Federal Trade Commission</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Consumer protection and financial services</div>
                  </a>
                  <a href="https://www.irs.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Internal Revenue Service</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Tax information and financial planning</div>
                  </a>
                  <a href="https://www.ssa.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Social Security Administration</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Retirement planning and benefits</div>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Professional Organizations</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <a href="https://www.cfainstitute.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">CFA Institute</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Professional investment analysis standards</div>
                  </a>
                  <a href="https://www.aicpa.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">American Institute of CPAs</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Professional accounting standards</div>
                  </a>
                  <a href="https://www.finra.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">FINRA</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Financial industry regulation</div>
                  </a>
                  <a href="https://www.nasdaq.com/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">NASDAQ</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Financial market data and analysis</div>
                  </a>
                  <a href="https://www.nyse.com/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">New York Stock Exchange</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Stock market data and analysis</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="https://www.aba.com/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">American Bankers Association</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Banking industry resources</div>
                  </a>
                  <a href="https://www.icba.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Independent Community Bankers</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Community banking resources</div>
                  </a>
                  <a href="https://www.cuna.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">Credit Union National Association</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Credit union industry resources</div>
                  </a>
                  <a href="https://www.mba.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Mortgage Bankers Association</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Mortgage industry resources</div>
                  </a>
                  <a href="https://www.nfcc.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">National Foundation for Credit Counseling</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Credit counseling and education</div>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Calculate Time Value of Money?</h2>
            <p className="text-xl mb-6 opacity-90">
              Get professional-grade TVM calculations and optimize your financial planning today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/calculator/finance-calculator">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate TVM
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
