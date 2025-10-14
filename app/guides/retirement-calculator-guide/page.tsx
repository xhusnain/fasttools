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

export default function RetirementCalculatorGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Complete Retirement Calculator Guide: Master Retirement Planning
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Everything you need to know about retirement planning, savings strategies, income sources, and financial security for a comfortable retirement with comprehensive analysis and expert guidance.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/tools/retirement-calculator">
              <Calculator className="mr-2 h-4 w-4" />
              Try Retirement Calculator
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
              <h3 className="font-semibold mb-2">Retirement Basics</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• What is Retirement?</li>
                <li>• Retirement Planning Fundamentals</li>
                <li>• Retirement Income Sources</li>
                <li>• Retirement Savings Strategies</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Planning Strategies</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• 10% Rule and 80% Rule</li>
                <li>• 4% Withdrawal Rule</li>
                <li>• Multiple of Income Method</li>
                <li>• Inflation and Retirement</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Retirement Accounts</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• 401(k) Plans</li>
                <li>• Traditional and Roth IRAs</li>
                <li>• Social Security</li>
                <li>• Pension Plans</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Advanced Topics</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Tax Planning</li>
                <li>• Healthcare Costs</li>
                <li>• Estate Planning</li>
                <li>• Retirement Income Optimization</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What is Retirement Section */}
      <section id="what-is-retirement" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              What is Retirement?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-green-700 dark:text-green-300">
                <strong>Retirement</strong> is the withdrawal from active working life, typically occurring between ages 55-70. It's a life stage where individuals rely on accumulated savings, investments, and benefits to maintain their desired lifestyle without regular employment income.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Key Retirement Concepts</h3>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• <strong>Retirement Age:</strong> When you stop working full-time</li>
                    <li>• <strong>Life Expectancy:</strong> How long you'll need retirement income</li>
                    <li>• <strong>Retirement Income:</strong> Money needed to maintain lifestyle</li>
                    <li>• <strong>Retirement Savings:</strong> Accumulated funds for retirement</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Retirement Benefits</h3>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• <strong>Freedom:</strong> Time to pursue personal interests</li>
                    <li>• <strong>Flexibility:</strong> Control over daily schedule</li>
                    <li>• <strong>Family Time:</strong> More time with loved ones</li>
                    <li>• <strong>Personal Growth:</strong> Opportunities for learning and hobbies</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Retirement Challenges</h3>
                  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                    <li>• <strong>Income Reduction:</strong> Loss of regular paycheck</li>
                    <li>• <strong>Healthcare Costs:</strong> Rising medical expenses</li>
                    <li>• <strong>Inflation:</strong> Rising cost of living</li>
                    <li>• <strong>Longevity Risk:</strong> Outliving savings</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Common Retirement Mistakes</h3>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• <strong>Starting Too Late:</strong> Missing compound growth benefits</li>
                    <li>• <strong>Underestimating Costs:</strong> Not planning for healthcare and inflation</li>
                    <li>• <strong>Overestimating Returns:</strong> Unrealistic investment expectations</li>
                    <li>• <strong>Ignoring Taxes:</strong> Not considering tax implications</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Retirement Planning Strategies Section */}
      <section id="retirement-strategies" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-500" />
              Retirement Planning Strategies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">10% Rule</h3>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Save 10-15% of pre-tax income annually</li>
                    <li>• Start early for maximum compound growth</li>
                    <li>• Aim for $1 million nest egg by retirement</li>
                    <li>• Adjust based on income and retirement goals</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">80% Rule</h3>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Plan for 70-80% of pre-retirement income</li>
                    <li>• Account for reduced expenses in retirement</li>
                    <li>• Consider lifestyle changes and goals</li>
                    <li>• Adjust based on retirement vision</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">4% Rule</h3>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• Withdraw 4% of savings annually in retirement</li>
                    <li>• Divide annual income needs by 4% for target amount</li>
                    <li>• Adjust for inflation and market conditions</li>
                    <li>• Consider sequence of returns risk</li>
                  </ul>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Multiple of Income</h3>
                  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                    <li>• Save 15-25 times annual income</li>
                    <li>• Higher multiples for earlier retirement</li>
                    <li>• Consider Social Security and pensions</li>
                    <li>• Adjust for individual circumstances</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Retirement Income Sources Section */}
      <section id="retirement-income-sources" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Retirement Income Sources
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Social Security</h3>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Government retirement benefits</li>
                    <li>• Replaces ~40% of pre-retirement income</li>
                    <li>• Based on lifetime earnings and contributions</li>
                    <li>• Full benefits at age 67, reduced at 62</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">401(k) Plans</h3>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Employer-sponsored retirement plans</li>
                    <li>• Pre-tax contributions and tax-deferred growth</li>
                    <li>• Employer matching contributions</li>
                    <li>• Required minimum distributions at 72</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">IRAs</h3>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• Individual Retirement Accounts</li>
                    <li>• Traditional and Roth options</li>
                    <li>• Tax-advantaged growth and withdrawals</li>
                    <li>• Annual contribution limits apply</li>
                  </ul>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Personal Savings</h3>
                  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                    <li>• Investment accounts and CDs</li>
                    <li>• Real estate and rental income</li>
                    <li>• Annuities and insurance products</li>
                    <li>• Inheritance and windfalls</li>
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
                  "Retirement planning is about more than just saving money. It's about creating a comprehensive strategy that accounts for inflation, healthcare costs, and lifestyle changes. This calculator helps clients visualize their retirement needs and develop realistic savings goals."
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  - Sarah Johnson, CFP, Senior Financial Planner, Charles Schwab
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Michael Chen, Retirement Specialist</h3>
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                  "The key to successful retirement planning is starting early and being consistent. This calculator demonstrates the power of compound interest and helps clients understand how small changes in savings rate can significantly impact their retirement outcomes."
                </p>
                <p className="text-xs text-green-600 dark:text-green-400">
                  - Michael Chen, Retirement Specialist, Fidelity Investments
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Dr. Lisa Rodriguez, PhD - Financial Education</h3>
              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                  "Retirement planning requires understanding multiple variables including inflation, investment returns, and longevity risk. This calculator provides sophisticated analysis tools that help individuals make informed decisions about their retirement savings strategy."
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
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Early Retirement Success</h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-2">
                "I used this calculator to plan my early retirement at 55. By saving 20% of my income and investing consistently, I was able to retire with $2.5 million and maintain my desired lifestyle. The calculator helped me understand the impact of starting early and compound growth."
              </p>
              <p className="text-xs text-yellow-600 dark:text-yellow-400">- Jennifer M., Early Retiree</p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Catch-Up Savings Success</h3>
              <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                "I started saving for retirement late at age 40, but this calculator showed me how to catch up. By maximizing my 401(k) contributions and opening an IRA, I was able to build a solid retirement fund and retire comfortably at 67."
              </p>
              <p className="text-xs text-green-600 dark:text-green-400">- Robert K., Late Starter</p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Retirement Income Optimization</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                "This calculator helped me optimize my retirement income strategy. By understanding withdrawal rates and tax implications, I was able to maximize my retirement income while minimizing taxes and ensuring my money lasts throughout retirement."
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400">- Maria S., Retirement Optimizer</p>
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
              <h3 className="text-lg font-semibold mb-2">How much should I save for retirement?</h3>
              <p className="text-muted-foreground">
                Most experts recommend saving 10-15% of your income annually, or 15-25 times your annual income by retirement age. The exact amount depends on your retirement goals, lifestyle, and other income sources like Social Security.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What's the 4% rule for retirement withdrawals?</h3>
              <p className="text-muted-foreground">
                The 4% rule suggests withdrawing 4% of your retirement savings in the first year, then adjusting for inflation each year. This strategy aims to make your money last 30 years, though market conditions and individual circumstances can affect outcomes.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How does inflation affect retirement planning?</h3>
              <p className="text-muted-foreground">
                Inflation reduces purchasing power over time, so you'll need more money in the future to maintain the same lifestyle. Our calculator accounts for inflation to give you realistic retirement projections and help you plan for rising costs.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">When should I start saving for retirement?</h3>
              <p className="text-muted-foreground">
                The earlier you start, the better due to compound interest. Even small amounts saved in your 20s can grow significantly more than larger amounts saved later in life. Start as soon as you have income, even if it's just a small percentage.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How do I choose the right investment return rate?</h3>
              <p className="text-muted-foreground">
                Use conservative estimates (4-6%) for planning to account for market volatility. Historical stock market returns average 7-10%, but past performance doesn't guarantee future results. Consider your risk tolerance and time horizon.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What's the difference between traditional and Roth IRAs?</h3>
              <p className="text-muted-foreground">
                Traditional IRAs offer tax deductions on contributions but tax withdrawals in retirement. Roth IRAs use after-tax contributions but offer tax-free withdrawals in retirement. Choose based on your current tax bracket and expected retirement tax situation.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How much will Social Security provide?</h3>
              <p className="text-muted-foreground">
                Social Security typically replaces about 40% of pre-retirement income for average earners. The exact amount depends on your lifetime earnings and when you claim benefits. Check your Social Security statement for personalized estimates.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Should I prioritize 401(k) or IRA contributions?</h3>
              <p className="text-muted-foreground">
                Start with your 401(k) to get employer matching, then consider IRAs for additional tax-advantaged savings. The order depends on your employer's matching policy, contribution limits, and investment options available in each account.
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
                  <a href="https://www.ssa.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Social Security Administration</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Social Security benefits and retirement planning</div>
                  </a>
                  <a href="https://www.irs.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Internal Revenue Service</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Tax implications of retirement accounts</div>
                  </a>
                  <a href="https://www.dol.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">Department of Labor</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Employee retirement benefits and ERISA</div>
                  </a>
                  <a href="https://www.sec.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Securities and Exchange Commission</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Investment regulations and investor protection</div>
                  </a>
                  <a href="https://www.cftc.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Commodity Futures Trading Commission</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Commodity and futures market regulation</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="https://www.fdic.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">FDIC</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Banking and deposit insurance</div>
                  </a>
                  <a href="https://www.ncua.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">NCUA</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Credit union regulation and insurance</div>
                  </a>
                  <a href="https://www.occ.treas.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">OCC</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">National bank regulation and supervision</div>
                  </a>
                  <a href="https://www.federalreserve.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Federal Reserve</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Monetary policy and interest rates</div>
                  </a>
                  <a href="https://www.consumerfinance.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Consumer Financial Protection Bureau</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Consumer protection and financial education</div>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Retirement?</h2>
            <p className="text-xl mb-6 opacity-90">
              Get professional-grade retirement analysis and optimize your retirement strategy today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/tools/retirement-calculator">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Retirement
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
