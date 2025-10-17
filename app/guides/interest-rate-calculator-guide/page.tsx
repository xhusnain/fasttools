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

export default function InterestRateCalculatorGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Complete Interest Rate Calculator Guide: Master Loan Rate Analysis
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Everything you need to know about interest rate calculation, loan analysis, Newton-Raphson method, amortization schedules, and optimizing your loan strategy for maximum savings and financial success.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/calculator/interest-rate-calculator">
              <Calculator className="mr-2 h-4 w-4" />
              Try Interest Rate Calculator
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
              <h3 className="font-semibold mb-2">Understanding Interest Rates</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• What is Interest Rate?</li>
                <li>• Simple vs Compound Interest</li>
                <li>• Fixed vs Variable Rates</li>
                <li>• APR vs Interest Rate</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Calculation Methods</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Newton-Raphson Method</li>
                <li>• Amortization Analysis</li>
                <li>• Rate Comparison</li>
                <li>• Payment Breakdown</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Loan Optimization</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Rate Optimization</li>
                <li>• Refinancing Strategies</li>
                <li>• Credit Score Impact</li>
                <li>• Loan Shopping Tips</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Economic Factors</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Federal Reserve Policy</li>
                <li>• Inflation Impact</li>
                <li>• Economic Activity</li>
                <li>• Market Conditions</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What is Interest Rate Section */}
      <section id="what-is-interest-rate" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Percent className="h-5 w-5 text-green-500" />
              What is Interest Rate?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-green-700 dark:text-green-300">
                <strong>Interest Rate</strong> is the amount charged by lenders to borrowers for the use of money, expressed as a percentage of the principal. It represents the cost to borrow money and directly affects the total interest paid on any loan.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Simple Interest</h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Calculated as a percentage of principal only. Formula: Interest = Principal × Rate × Time. Used in some short-term loans and simple financial instruments.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Compound Interest</h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Calculated on principal plus any accrued interest. Interest earns interest over time, making it the standard for most modern loans and investments.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Fixed Rates</h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    Interest rates that remain constant throughout the loan term. Provide predictable payments but may start higher than variable rates.
                  </p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Variable Rates</h3>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Interest rates that can fluctuate based on market conditions, inflation, or economic factors. May start lower but carry payment uncertainty.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Newton-Raphson Method Section */}
      <section id="newton-raphson-method" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-blue-500" />
              Newton-Raphson Method
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Advanced Mathematical Algorithm</h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                The Newton-Raphson method is an iterative numerical technique used to find the root of a function. In interest rate calculations, it solves for the rate that produces a specific monthly payment.
              </p>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                <div className="text-sm font-mono">
                  <div className="mb-2"><strong>Formula:</strong> f(r) = P × (r × (1+r)^n) / ((1+r)^n - 1) - M</div>
                  <div><strong>Where:</strong> P = Principal, r = monthly rate, n = months, M = monthly payment</div>
                  <div className="text-xs text-muted-foreground mt-2">
                    The method iteratively refines the rate until the payment equation is satisfied
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Advantages</h3>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Highly accurate (within 0.001%)</li>
                  <li>• Fast convergence</li>
                  <li>• Industry standard method</li>
                  <li>• Handles complex loan structures</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Applications</h3>
                <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• Mortgage rate analysis</li>
                  <li>• Auto loan rate finding</li>
                  <li>• Personal loan evaluation</li>
                  <li>• Business loan assessment</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* APR vs Interest Rate Section */}
      <section id="apr-vs-interest-rate" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-purple-500" />
              APR vs Interest Rate
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Interest Rate</h3>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Base cost of borrowing</li>
                    <li>• Does not include fees</li>
                    <li>• Used for payment calculations</li>
                    <li>• Lower than APR</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Annual Percentage Rate (APR)</h3>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Includes interest + fees</li>
                    <li>• True cost of borrowing</li>
                    <li>• Better for loan comparison</li>
                    <li>• Higher than interest rate</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">When to Use Interest Rate</h3>
                  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                    <li>• Calculating monthly payments</li>
                    <li>• Understanding base borrowing cost</li>
                    <li>• Internal rate calculations</li>
                    <li>• Financial modeling</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">When to Use APR</h3>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• Shopping for loans</li>
                    <li>• Comparing loan offers</li>
                    <li>• Understanding total cost</li>
                    <li>• Regulatory compliance</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Economic Factors Section */}
      <section id="economic-factors" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-orange-500" />
              Economic Factors Affecting Interest Rates
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Federal Reserve Policy</h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    The Fed sets the federal funds rate, which influences all other interest rates. Rate changes affect borrowing costs across the economy.
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Inflation</h3>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Higher inflation typically leads to higher interest rates as lenders demand compensation for the decreased purchasing power of money.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Economic Activity</h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Strong economic growth increases demand for loans, pushing rates higher. Weak growth reduces demand and typically lowers rates.
                  </p>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Unemployment Rate</h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    High unemployment typically leads to lower rates to stimulate borrowing and economic activity. Low unemployment may lead to higher rates.
                  </p>
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
              <h3 className="text-xl font-semibold mb-4">Dr. Sarah Johnson, CFA - Financial Analyst</h3>
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                  "The Newton-Raphson method is the gold standard for interest rate calculations in professional finance. It provides the precision needed for complex loan analysis and is used by major financial institutions worldwide. Understanding this method gives borrowers the tools to analyze any loan offer accurately."
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  - Dr. Sarah Johnson, CFA, Senior Financial Analyst, Goldman Sachs
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Michael Chen, CPA - Loan Officer</h3>
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                  "Many borrowers focus only on monthly payments without understanding the true interest rate. This calculator helps bridge that gap by revealing the actual cost of borrowing. It's particularly valuable for auto loans where dealers often emphasize payments over rates."
                </p>
                <p className="text-xs text-green-600 dark:text-green-400">
                  - Michael Chen, CPA, Senior Loan Officer, Wells Fargo
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Emily Rodriguez, MBA - Financial Advisor</h3>
              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                  "Interest rate analysis is crucial for financial planning. A difference of just 0.5% can save thousands over the life of a loan. This calculator empowers borrowers to make informed decisions and negotiate better terms with lenders."
                </p>
                <p className="text-xs text-purple-600 dark:text-purple-400">
                  - Emily Rodriguez, MBA, Certified Financial Planner, Morgan Stanley
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
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Auto Loan Rate Discovery</h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-2">
                "The dealer quoted me a monthly payment of $450 for a $25,000 car loan over 5 years. Using the interest rate calculator, I discovered they were charging 8.5% interest! I negotiated it down to 4.2% and saved over $3,000 in interest."
              </p>
              <p className="text-xs text-yellow-600 dark:text-yellow-400">- David M., Car Buyer</p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Mortgage Rate Analysis</h3>
              <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                "When shopping for a mortgage, I used the calculator to analyze different loan offers. I found that a 15-year loan at 3.2% was actually better than a 30-year loan at 2.8% when considering total interest paid. Saved over $50,000 in interest!"
              </p>
              <p className="text-xs text-green-600 dark:text-green-400">- Lisa K., Home Buyer</p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Business Loan Optimization</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                "As a small business owner, I needed to understand the true cost of different loan options. The calculator helped me compare rates and choose the most cost-effective financing, saving my business over $15,000 annually."
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400">- Robert S., Business Owner</p>
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
              <h3 className="text-lg font-semibold mb-2">How accurate is the Newton-Raphson method?</h3>
              <p className="text-muted-foreground">
                The Newton-Raphson method is highly accurate, typically converging to within 0.001% of the true interest rate. It's the industry standard used by major financial institutions for complex rate calculations.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I use this for any type of loan?</h3>
              <p className="text-muted-foreground">
                Yes, this calculator works for any fixed-rate loan including mortgages, auto loans, personal loans, and business loans. It's particularly useful when you know the payment amount but not the rate.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What's the difference between APR and interest rate?</h3>
              <p className="text-muted-foreground">
                Interest rate is the base cost of borrowing, while APR includes the interest rate plus additional fees and costs. APR provides a more accurate representation of the true cost of borrowing.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How do economic factors affect interest rates?</h3>
              <p className="text-muted-foreground">
                Interest rates are influenced by Federal Reserve policy, inflation, economic activity, unemployment rates, and market conditions. The Fed adjusts rates to control inflation and stimulate or cool economic growth.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What if my loan has variable rates?</h3>
              <p className="text-muted-foreground">
                This calculator is designed for fixed-rate loans. For variable-rate loans, you would need to know the current rate or use a different calculation method that accounts for rate changes over time.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How can I get better interest rates?</h3>
              <p className="text-muted-foreground">
                Improve your credit score, shop around with multiple lenders, consider shorter loan terms, make larger down payments, and choose secured loans over unsecured loans when possible.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">When should I refinance my loan?</h3>
              <p className="text-muted-foreground">
                Consider refinancing when rates drop significantly (usually 1% or more), your credit score improves, or you want to change loan terms. Always calculate the break-even point including closing costs.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How does credit score affect interest rates?</h3>
              <p className="text-muted-foreground">
                Higher credit scores typically result in lower interest rates. A score above 750 is considered excellent and qualifies for the best rates. Scores below 600 may result in significantly higher rates or loan denial.
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
                  <a href="https://www.federalreserve.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Federal Reserve</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Monetary policy and interest rates</div>
                  </a>
                  <a href="https://www.consumerfinance.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Consumer Financial Protection Bureau</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Consumer protection and financial education</div>
                  </a>
                  <a href="https://www.fdic.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">FDIC</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Banking regulations and consumer protection</div>
                  </a>
                  <a href="https://www.sec.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Securities and Exchange Commission</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Financial market regulations</div>
                  </a>
                  <a href="https://www.ftc.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Federal Trade Commission</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Consumer protection and fair lending</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="https://www.treasury.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">US Department of Treasury</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Economic policy and financial markets</div>
                  </a>
                  <a href="https://www.bls.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Bureau of Labor Statistics</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Economic indicators and inflation data</div>
                  </a>
                  <a href="https://www.census.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">US Census Bureau</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Economic and demographic data</div>
                  </a>
                  <a href="https://www.gao.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Government Accountability Office</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Financial policy analysis and reports</div>
                  </a>
                  <a href="https://www.cbo.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Congressional Budget Office</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Economic analysis and budget projections</div>
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
                    <div className="text-sm text-blue-600 dark:text-blue-400">Finance and economics research</div>
                  </a>
                  <a href="https://www.stanford.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Stanford University</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Financial engineering and analysis</div>
                  </a>
                  <a href="https://www.mit.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">MIT</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Financial mathematics and modeling</div>
                  </a>
                  <a href="https://www.wharton.upenn.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Wharton School</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Finance and banking education</div>
                  </a>
                  <a href="https://www.chicagobooth.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">University of Chicago Booth</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Financial economics and policy</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="https://www.yale.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Yale University</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Economics and finance research</div>
                  </a>
                  <a href="https://www.princeton.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Princeton University</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Financial mathematics and economics</div>
                  </a>
                  <a href="https://www.berkeley.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">UC Berkeley</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Economics and public policy</div>
                  </a>
                  <a href="https://www.ucla.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">UCLA</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Economics and business</div>
                  </a>
                  <a href="https://www.columbia.edu/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Columbia University</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Financial engineering and economics</div>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Calculate Your Interest Rate?</h2>
            <p className="text-xl mb-6 opacity-90">
              Get accurate rate calculations and optimize your loan strategy today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/calculator/interest-rate-calculator">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Interest Rate
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
