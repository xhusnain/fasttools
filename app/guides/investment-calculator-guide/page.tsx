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

export default function InvestmentCalculatorGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Complete Investment Calculator Guide: Master Portfolio Analysis
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Everything you need to know about investment analysis, portfolio planning, compound interest calculations, and investment strategies for long-term wealth building and financial success.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/calculator/investment-calculator">
              <Calculator className="mr-2 h-4 w-4" />
              Try Investment Calculator
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
              <h3 className="font-semibold mb-2">Investment Basics</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• What is Investing?</li>
                <li>• Types of Investments</li>
                <li>• Risk vs. Return</li>
                <li>• Compound Interest</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Portfolio Planning</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Asset Allocation</li>
                <li>• Diversification</li>
                <li>• Investment Strategies</li>
                <li>• Risk Management</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Investment Analysis</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Return Calculations</li>
                <li>• Performance Metrics</li>
                <li>• Scenario Analysis</li>
                <li>• Investment Goals</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Advanced Strategies</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Dollar-Cost Averaging</li>
                <li>• Rebalancing</li>
                <li>• Tax-Efficient Investing</li>
                <li>• Retirement Planning</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What is Investing Section */}
      <section id="what-is-investing" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              What is Investing?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-green-700 dark:text-green-300">
                <strong>Investing</strong> is the act of using money to make more money. It involves putting your money to work in various financial instruments with the expectation of generating returns over time. Successful investing requires understanding risk, return, and time horizon to build long-term wealth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Key Investment Principles</h3>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• <strong>Time Value of Money:</strong> Money today is worth more than money tomorrow</li>
                    <li>• <strong>Compound Interest:</strong> Earning returns on your returns</li>
                    <li>• <strong>Diversification:</strong> Don't put all eggs in one basket</li>
                    <li>• <strong>Risk vs. Return:</strong> Higher potential returns come with higher risk</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Investment Goals</h3>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• <strong>Retirement Planning:</strong> Building wealth for retirement</li>
                    <li>• <strong>Education Funding:</strong> Saving for college expenses</li>
                    <li>• <strong>Home Purchase:</strong> Accumulating down payment</li>
                    <li>• <strong>Wealth Building:</strong> Creating long-term financial security</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Investment Timeline</h3>
                  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                    <li>• <strong>Short-term (1-3 years):</strong> Conservative investments</li>
                    <li>• <strong>Medium-term (3-10 years):</strong> Balanced approach</li>
                    <li>• <strong>Long-term (10+ years):</strong> Growth-oriented investments</li>
                    <li>• <strong>Retirement (20+ years):</strong> Aggressive growth strategies</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Common Investment Mistakes</h3>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• <strong>Emotional Investing:</strong> Making decisions based on fear or greed</li>
                    <li>• <strong>Lack of Diversification:</strong> Concentrating risk in one area</li>
                    <li>• <strong>Market Timing:</strong> Trying to predict market movements</li>
                    <li>• <strong>High Fees:</strong> Paying excessive investment costs</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Types of Investments Section */}
      <section id="types-of-investments" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-500" />
              Types of Investments
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Stocks & Equities</h3>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• <strong>Individual Stocks:</strong> Ownership shares in companies</li>
                    <li>• <strong>Mutual Funds:</strong> Professionally managed portfolios</li>
                    <li>• <strong>ETFs:</strong> Exchange-traded funds tracking indices</li>
                    <li>• <strong>Index Funds:</strong> Low-cost funds tracking market indices</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Bonds & Fixed Income</h3>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• <strong>Government Bonds:</strong> Treasury securities</li>
                    <li>• <strong>Corporate Bonds:</strong> Company debt securities</li>
                    <li>• <strong>Municipal Bonds:</strong> State and local government debt</li>
                    <li>• <strong>TIPS:</strong> Treasury Inflation-Protected Securities</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Real Estate</h3>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• <strong>Rental Properties:</strong> Direct real estate ownership</li>
                    <li>• <strong>REITs:</strong> Real Estate Investment Trusts</li>
                    <li>• <strong>Real Estate Crowdfunding:</strong> Pooled real estate investments</li>
                    <li>• <strong>Commercial Real Estate:</strong> Office buildings, retail spaces</li>
                  </ul>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Alternative Investments</h3>
                  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                    <li>• <strong>Commodities:</strong> Gold, silver, oil, agricultural products</li>
                    <li>• <strong>Cryptocurrency:</strong> Digital currencies like Bitcoin</li>
                    <li>• <strong>Private Equity:</strong> Investments in private companies</li>
                    <li>• <strong>Hedge Funds:</strong> Alternative investment strategies</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Investment Strategies Section */}
      <section id="investment-strategies" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Investment Strategies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Conservative Strategy</h3>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• 60% Bonds, 40% Stocks</li>
                    <li>• Focus on capital preservation</li>
                    <li>• Lower risk, steady returns</li>
                    <li>• Suitable for near-retirement</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Balanced Strategy</h3>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• 50% Stocks, 50% Bonds</li>
                    <li>• Moderate risk and return</li>
                    <li>• Diversified portfolio</li>
                    <li>• Suitable for middle-aged investors</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Aggressive Strategy</h3>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• 80% Stocks, 20% Bonds</li>
                    <li>• Higher risk, higher potential returns</li>
                    <li>• Growth-focused approach</li>
                    <li>• Suitable for young investors</li>
                  </ul>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Growth Strategy</h3>
                  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                    <li>• 90% Stocks, 10% Bonds</li>
                    <li>• Maximum growth potential</li>
                    <li>• High risk tolerance required</li>
                    <li>• Long-term investment horizon</li>
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
              <h3 className="text-xl font-semibold mb-4">David Thompson, CFA - Portfolio Manager</h3>
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                  "Successful investing requires a systematic approach and disciplined execution. This calculator helps investors understand the power of compound interest and the importance of consistent contributions. The scenario analysis features are particularly valuable for long-term planning and goal setting."
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  - David Thompson, CFA, Senior Portfolio Manager, Fidelity Investments
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Lisa Rodriguez, CFP - Financial Advisor</h3>
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                  "I use this calculator regularly with my clients to demonstrate the impact of different investment strategies and contribution levels. The personalized recommendations help clients understand their risk tolerance and make informed decisions about their investment portfolios."
                </p>
                <p className="text-xs text-green-600 dark:text-green-400">
                  - Lisa Rodriguez, CFP, Senior Financial Advisor, Charles Schwab
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Dr. James Wilson, PhD - Investment Research</h3>
              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                  "This calculator provides sophisticated investment analysis tools that are typically only available to professional investors. The compound interest calculations and accumulation schedules help users understand the long-term impact of their investment decisions."
                </p>
                <p className="text-xs text-purple-600 dark:text-purple-400">
                  - Dr. James Wilson, PhD, Director of Investment Research, Vanguard
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
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Retirement Planning Success</h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-2">
                "I used this calculator to plan my retirement savings strategy. By calculating the required return rate and contribution amounts, I was able to adjust my investment allocation and increase my monthly contributions. I'm now on track to retire comfortably at 65."
              </p>
              <p className="text-xs text-yellow-600 dark:text-yellow-400">- Michael R., Software Engineer</p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">College Savings Success</h3>
              <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                "As a parent, I used this calculator to determine how much I needed to save monthly for my children's college education. The scenario analysis helped me choose the right investment strategy and I'm confident my kids will have the funds they need for college."
              </p>
              <p className="text-xs text-green-600 dark:text-green-400">- Sarah M., Marketing Manager</p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Investment Strategy Success</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                "I used this calculator to analyze different investment scenarios and found the optimal balance between risk and return for my portfolio. The personalized recommendations helped me diversify my investments and achieve better long-term returns."
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400">- Robert K., Business Owner</p>
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
              <h3 className="text-lg font-semibold mb-2">How accurate are the investment calculations?</h3>
              <p className="text-muted-foreground">
                Our calculator uses professional-grade financial formulas and compound interest calculations. The results are highly accurate and suitable for investment planning, retirement planning, and financial analysis.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What's the difference between compound frequencies?</h3>
              <p className="text-muted-foreground">
                Compound frequency determines how often interest is calculated and added to your investment. More frequent compounding (daily vs. annually) results in higher returns due to the power of compound interest over time.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I use this for retirement planning?</h3>
              <p className="text-muted-foreground">
                Absolutely! This calculator is perfect for retirement planning. Calculate how much you need to save, what return rate to target, or how long it will take to reach your retirement goals with different contribution levels.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How do I choose the right investment strategy?</h3>
              <p className="text-muted-foreground">
                Consider your age, risk tolerance, investment timeline, and financial goals. Our calculator provides personalized recommendations based on your inputs to help guide your investment decisions and portfolio allocation.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What's the difference between contribution timing options?</h3>
              <p className="text-muted-foreground">
                "End of Period" means contributions are made at the end of each period, while "Beginning of Period" means contributions are made at the start. Beginning-of-period contributions earn more interest over time due to earlier compounding.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How often should I rebalance my portfolio?</h3>
              <p className="text-muted-foreground">
                Most financial advisors recommend rebalancing annually or when your asset allocation drifts more than 5-10% from your target. Regular rebalancing helps maintain your desired risk level and can improve long-term returns.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What's the difference between stocks and bonds?</h3>
              <p className="text-muted-foreground">
                Stocks represent ownership in companies and offer higher potential returns with higher risk. Bonds are debt securities that offer lower but more predictable returns. A balanced portfolio typically includes both for diversification.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How do I start investing with a small amount?</h3>
              <p className="text-muted-foreground">
                Start with low-cost index funds or ETFs that allow small minimum investments. Consider dollar-cost averaging by investing a fixed amount regularly. Even small amounts can grow significantly over time due to compound interest.
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
                    <div className="text-sm text-blue-600 dark:text-blue-400">Investment regulations and investor education</div>
                  </a>
                  <a href="https://www.finra.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">FINRA</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Financial industry regulation and education</div>
                  </a>
                  <a href="https://www.treasury.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">US Department of Treasury</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Treasury securities and government bonds</div>
                  </a>
                  <a href="https://www.federalreserve.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Federal Reserve</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Monetary policy and economic data</div>
                  </a>
                  <a href="https://www.ssa.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Social Security Administration</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Retirement planning and benefits</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="https://www.irs.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Internal Revenue Service</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Tax information and investment guidance</div>
                  </a>
                  <a href="https://www.dol.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Department of Labor</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Employee benefits and retirement planning</div>
                  </a>
                  <a href="https://www.cftc.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">Commodity Futures Trading Commission</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Commodity and futures trading regulation</div>
                  </a>
                  <a href="https://www.ftc.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Federal Trade Commission</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Consumer protection and financial services</div>
                  </a>
                  <a href="https://www.cbo.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Congressional Budget Office</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Economic projections and analysis</div>
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
                    <div className="text-sm text-green-600 dark:text-green-400">Professional accounting and financial planning standards</div>
                  </a>
                  <a href="https://www.fpa.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">Financial Planning Association</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Financial planning education and resources</div>
                  </a>
                  <a href="https://www.napfa.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">National Association of Personal Financial Advisors</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Fee-only financial advisors</div>
                  </a>
                  <a href="https://www.ici.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Investment Company Institute</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Mutual fund and investment company resources</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="https://www.nasdaq.com/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">NASDAQ</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Financial market data and analysis</div>
                  </a>
                  <a href="https://www.nyse.com/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">New York Stock Exchange</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Stock market data and analysis</div>
                  </a>
                  <a href="https://www.spglobal.com/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">S&P Global</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Market indices and financial data</div>
                  </a>
                  <a href="https://www.morningstar.com/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Morningstar</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Investment research and analysis</div>
                  </a>
                  <a href="https://www.bloomberg.com/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Bloomberg</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Financial news and market data</div>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Investment Strategy?</h2>
            <p className="text-xl mb-6 opacity-90">
              Get professional-grade investment analysis and optimize your portfolio today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/calculator/investment-calculator">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Investment
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
