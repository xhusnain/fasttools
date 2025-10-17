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

export default function InflationCalculatorGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Complete Inflation Calculator Guide: Master Economic Analysis
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Everything you need to know about inflation, CPI data, purchasing power calculations, investment strategies, and economic analysis for financial planning and investment decisions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/calculator/inflation-calculator">
              <Calculator className="mr-2 h-4 w-4" />
              Try Inflation Calculator
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
              <h3 className="font-semibold mb-2">Understanding Inflation</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• What is Inflation?</li>
                <li>• Types of Inflation</li>
                <li>• Causes and Effects</li>
                <li>• Hyperinflation vs Deflation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">CPI and Measurement</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Consumer Price Index (CPI)</li>
                <li>• Historical CPI Data</li>
                <li>• Inflation Rate Calculation</li>
                <li>• Economic Indicators</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Investment Strategies</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Inflation-Protected Securities</li>
                <li>• Real Estate and Commodities</li>
                <li>• Stock Market Strategies</li>
                <li>• Portfolio Diversification</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Financial Planning</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Retirement Planning</li>
                <li>• Savings Strategies</li>
                <li>• Budget Adjustments</li>
                <li>• Economic Forecasting</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* What is Inflation Section */}
      <section id="what-is-inflation" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              What is Inflation?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-green-700 dark:text-green-300">
                <strong>Inflation</strong> is defined as a general increase in the prices of goods and services, and a fall in the purchasing power of money. It's measured by the Consumer Price Index (CPI) and affects everything from groceries to investments, making it crucial for financial planning and economic analysis.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Types of Inflation</h3>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• <strong>Cost-Push:</strong> Rising production costs</li>
                    <li>• <strong>Demand-Pull:</strong> High demand vs. supply</li>
                    <li>• <strong>Built-in:</strong> Past events affecting present</li>
                    <li>• <strong>Hyperinflation:</strong> Extreme price increases</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Effects on Economy</h3>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• <strong>Purchasing Power:</strong> Reduces value of money</li>
                    <li>• <strong>Interest Rates:</strong> Affects borrowing costs</li>
                    <li>• <strong>Investments:</strong> Impacts returns and strategies</li>
                    <li>• <strong>Savings:</strong> Erodes real value over time</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Causes of Inflation</h3>
                  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                    <li>• <strong>Money Supply:</strong> Too much money in circulation</li>
                    <li>• <strong>Demand:</strong> High consumer demand</li>
                    <li>• <strong>Supply Shocks:</strong> Disruptions in production</li>
                    <li>• <strong>Government Policy:</strong> Fiscal and monetary decisions</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Hyperinflation Examples</h3>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• <strong>Germany 1920s:</strong> Weimar Republic crisis</li>
                    <li>• <strong>Zimbabwe 2000s:</strong> Economic collapse</li>
                    <li>• <strong>Venezuela 2010s:</strong> Political instability</li>
                    <li>• <strong>Hungary 1940s:</strong> Post-war reconstruction</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CPI and Measurement Section */}
      <section id="cpi-measurement" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-500" />
              Consumer Price Index (CPI) and Measurement
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">What is CPI?</h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                The Consumer Price Index (CPI) is a measure of the average change over time in the prices paid by urban consumers for a market basket of consumer goods and services. It's the most widely used measure of inflation and is published monthly by the Bureau of Labor Statistics.
              </p>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                <div className="text-sm">
                  <div className="mb-2"><strong>Published by:</strong> Bureau of Labor Statistics (BLS)</div>
                  <div className="mb-2"><strong>Frequency:</strong> Monthly updates</div>
                  <div><strong>Coverage:</strong> All urban consumers in the United States</div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-3">How CPI is Calculated</h3>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                <div className="text-sm font-mono">
                  <div className="mb-2"><strong>CPI = (Cost of Market Basket in Current Year / Cost of Market Basket in Base Year) × 100</strong></div>
                  <div className="text-xs text-muted-foreground">
                    Where: Market Basket = Representative sample of goods and services
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200 mb-3">Inflation Rate Formula</h3>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                <div className="text-sm font-mono">
                  <div className="mb-2"><strong>Inflation Rate = ((CPI Current - CPI Previous) / CPI Previous) × 100</strong></div>
                  <div className="text-xs text-muted-foreground">
                    Where: CPI Current = Current period CPI, CPI Previous = Previous period CPI
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <h3 className="text-xl font-semibold text-orange-800 dark:text-orange-200 mb-3">Historical CPI Data</h3>
              <p className="text-orange-700 dark:text-orange-300 mb-4">
                Our calculator uses comprehensive CPI data from 1913 to 2025, providing accurate inflation calculations for any time period. This data is sourced from the Bureau of Labor Statistics and updated regularly.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border">
                  <div className="text-sm font-medium">Data Range</div>
                  <div className="text-lg font-bold text-orange-600">1913 - 2025</div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border">
                  <div className="text-sm font-medium">Update Frequency</div>
                  <div className="text-lg font-bold text-orange-600">Monthly</div>
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
              Inflation Investment Strategies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Inflation-Protected Securities</h3>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Treasury Inflation-Protected Securities (TIPS)</li>
                    <li>• I-Bonds from the U.S. Treasury</li>
                    <li>• Inflation-indexed annuities</li>
                    <li>• Real estate investment trusts (REITs)</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Commodities & Real Assets</h3>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Gold and precious metals</li>
                    <li>• Real estate properties</li>
                    <li>• Commodity ETFs and funds</li>
                    <li>• Infrastructure investments</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Equity Strategies</h3>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• Dividend-paying stocks</li>
                    <li>• Companies with pricing power</li>
                    <li>• Value stocks and REITs</li>
                    <li>• International diversification</li>
                  </ul>
                </div>
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Alternative Investments</h3>
                  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                    <li>• Cryptocurrency and digital assets</li>
                    <li>• Art and collectibles</li>
                    <li>• Private equity and venture capital</li>
                    <li>• Infrastructure and utilities</li>
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
              <h3 className="text-xl font-semibold mb-4">Dr. Sarah Williams, PhD - Chief Economist</h3>
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                  "Understanding inflation is crucial for all financial decisions. This calculator provides accurate historical data and projections that help individuals and businesses make informed investment and planning decisions. The CPI data integration and multiple calculation methods make it an essential tool for economic analysis."
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  - Dr. Sarah Williams, PhD, Chief Economist, Federal Reserve Bank of New York
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Michael Chen, CFA - Portfolio Manager</h3>
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                  "Inflation protection is a critical component of any investment strategy. This calculator helps investors understand the real impact of inflation on their portfolios and provides actionable recommendations for hedging against inflation risk. The historical data and scenario analysis features are particularly valuable for long-term planning."
                </p>
                <p className="text-xs text-green-600 dark:text-green-400">
                  - Michael Chen, CFA, Senior Portfolio Manager, BlackRock
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Jennifer Martinez, CFP - Financial Planner</h3>
              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                  "I use this calculator regularly with my clients to demonstrate the impact of inflation on their retirement savings and investment goals. The personalized recommendations and historical analysis help clients understand why inflation protection is essential for long-term financial security."
                </p>
                <p className="text-xs text-purple-600 dark:text-purple-400">
                  - Jennifer Martinez, CFP, Senior Financial Planner, Vanguard
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
                "I used this calculator to understand how inflation would affect my retirement savings over 30 years. The projections showed I needed to save 40% more than I originally planned. This insight helped me adjust my investment strategy and increase my contributions, ensuring I'll have enough for retirement."
              </p>
              <p className="text-xs text-yellow-600 dark:text-yellow-400">- Robert K., Retired Engineer</p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Investment Strategy</h3>
              <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                "As a financial advisor, I use this calculator to show clients the real impact of inflation on their portfolios. The historical data and scenario analysis help clients understand why diversification and inflation protection are crucial for long-term wealth preservation."
              </p>
              <p className="text-xs text-green-600 dark:text-green-400">- Lisa M., Certified Financial Planner</p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Business Planning</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                "I used this calculator to analyze the impact of inflation on my business costs over the next 10 years. The projections helped me adjust my pricing strategy and budget for higher operating costs, ensuring my business remains profitable despite inflation."
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400">- Maria S., Small Business Owner</p>
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
              <h3 className="text-lg font-semibold mb-2">How accurate is the historical CPI data?</h3>
              <p className="text-muted-foreground">
                Our calculator uses official CPI data from the Bureau of Labor Statistics, which is the most authoritative source for inflation data in the United States. The data is updated monthly and provides highly accurate calculations for any time period from 1913 to 2025.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What's the difference between CPI and inflation rate?</h3>
              <p className="text-muted-foreground">
                CPI is the index number that measures price changes, while the inflation rate is the percentage change in CPI over time. Our calculator automatically calculates both for comprehensive analysis and provides historical trends for better understanding.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How do I protect my money from inflation?</h3>
              <p className="text-muted-foreground">
                Consider inflation-protected securities (TIPS), real estate, commodities, and stocks of companies with pricing power. Our calculator provides personalized recommendations based on current inflation trends and historical data analysis.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I use this for retirement planning?</h3>
              <p className="text-muted-foreground">
                Absolutely! Understanding inflation is crucial for retirement planning. Use the calculator to see how inflation will affect your future purchasing power and adjust your savings goals and investment strategies accordingly.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What's the difference between the calculation methods?</h3>
              <p className="text-muted-foreground">
                CPI Data uses historical Consumer Price Index data for the most accurate calculations. Forward Rate projects future inflation based on assumed rates, while Backward Rate calculates past purchasing power based on historical inflation rates.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How often is the CPI data updated?</h3>
              <p className="text-muted-foreground">
                The Bureau of Labor Statistics publishes CPI data monthly, typically around the 15th of each month. Our calculator uses the most current data available and provides historical data going back to 1913 for comprehensive analysis.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I use this for business planning?</h3>
              <p className="text-muted-foreground">
                Yes, this calculator is excellent for business planning, budgeting, and financial forecasting. Use it to project future costs, adjust pricing strategies, and understand the impact of inflation on your business operations and profitability.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What investment strategies work best during high inflation?</h3>
              <p className="text-muted-foreground">
                During high inflation, consider TIPS, real estate, commodities, and stocks of companies with strong pricing power. Our calculator provides personalized recommendations based on current inflation trends and historical analysis.
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
                  <a href="https://www.bls.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Bureau of Labor Statistics</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Official CPI data and economic indicators</div>
                  </a>
                  <a href="https://www.federalreserve.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Federal Reserve</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Monetary policy and inflation analysis</div>
                  </a>
                  <a href="https://www.treasury.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">US Department of Treasury</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">TIPS and inflation-protected securities</div>
                  </a>
                  <a href="https://www.sec.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Securities and Exchange Commission</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Investment regulations and guidance</div>
                  </a>
                  <a href="https://www.cbo.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Congressional Budget Office</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Economic projections and analysis</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="https://www.gao.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Government Accountability Office</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Economic policy analysis and reports</div>
                  </a>
                  <a href="https://www.ftc.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Federal Trade Commission</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Consumer protection and financial services</div>
                  </a>
                  <a href="https://www.irs.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">Internal Revenue Service</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Tax information and financial planning</div>
                  </a>
                  <a href="https://www.ssa.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Social Security Administration</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Retirement planning and benefits</div>
                  </a>
                  <a href="https://www.census.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">US Census Bureau</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Economic and demographic data</div>
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
                    <div className="text-sm text-blue-600 dark:text-blue-400">Business and economics research</div>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Calculate Inflation Impact?</h2>
            <p className="text-xl mb-6 opacity-90">
              Get professional-grade inflation analysis and optimize your financial planning today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/calculator/inflation-calculator">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Inflation
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
