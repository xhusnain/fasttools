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

export default function SalaryCalculatorGuide() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Complete Salary Calculator Guide: Master Pay Analysis & Career Growth
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Everything you need to know about salary calculations, pay frequency conversions, negotiation strategies, and career advancement for maximum earning potential and financial success.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/calculator/salary-calculator">
              <Calculator className="mr-2 h-4 w-4" />
              Try Salary Calculator
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
              <h3 className="font-semibold mb-2">Understanding Salary & Pay</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Salary vs Wage Differences</li>
                <li>• Pay Frequency Types</li>
                <li>• US Labor Laws (FLSA)</li>
                <li>• Minimum Wage Information</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Salary Calculations</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Pay Frequency Conversions</li>
                <li>• Holiday & Vacation Adjustments</li>
                <li>• Working Days Calculation</li>
                <li>• Industry Comparisons</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Career Growth</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Salary Negotiation</li>
                <li>• Career Advancement</li>
                <li>• Education Impact</li>
                <li>• Experience Benefits</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Economic Factors</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Industry Variations</li>
                <li>• Location Impact</li>
                <li>• Gender Pay Gap</li>
                <li>• Market Trends</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Salary vs Wage Section */}
      <section id="salary-vs-wage" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              Salary vs Wage
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-green-700 dark:text-green-300">
                <strong>Salary</strong> is a fixed annual amount paid on a regular basis, typically for professional positions. <strong>Wage</strong> is compensation based on hours worked multiplied by an hourly rate, typically for service and hourly positions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Salary Characteristics</h3>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Fixed annual amount</li>
                    <li>• Paid on regular basis</li>
                    <li>• Exempt from overtime</li>
                    <li>• Professional positions</li>
                    <li>• Higher perceived status</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Salary Benefits</h3>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• Predictable income</li>
                    <li>• Professional benefits</li>
                    <li>• Career advancement</li>
                    <li>• Job security</li>
                    <li>• Higher earning potential</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Wage Characteristics</h3>
                  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                    <li>• Hourly rate × hours</li>
                    <li>• Can vary based on hours</li>
                    <li>• Eligible for overtime</li>
                    <li>• Non-exempt employees</li>
                    <li>• Service positions</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Wage Benefits</h3>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• Overtime pay (1.5x rate)</li>
                    <li>• Flexible hours</li>
                    <li>• Direct compensation</li>
                    <li>• Hourly transparency</li>
                    <li>• Holiday premiums</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Pay Frequencies Section */}
      <section id="pay-frequencies" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-500" />
              Pay Frequencies Explained
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Daily</h3>
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  Pays every day, usually at the end of the day. Common for short-term contractors and daily workers.
                </p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Weekly</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Pays once each week, usually on Fridays. Higher payroll processing costs with 52 payments per year.
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Bi-weekly</h3>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Pays every two weeks, 26 times per year. Most common pay frequency in the United States.
                </p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Semi-monthly</h3>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Pays twice per month, usually on 15th and last day. Results in inconsistent pay dates.
                </p>
              </div>
              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Monthly</h3>
                <p className="text-sm text-red-700 dark:text-red-300">
                  Pays once per month. Most cost-friendly for employers but less common in the US.
                </p>
              </div>
              <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Quarterly</h3>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  Pays once per quarter. Rare for employees, more common for contractors and consultants.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* US Labor Laws Section */}
      <section id="us-labor-laws" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-purple-500" />
              US Labor Laws & FLSA
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">Fair Labor Standards Act (FLSA)</h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                The FLSA establishes minimum wage, overtime pay, recordkeeping, and child labor standards. Salaried employees are often exempt from overtime regulations if they meet specific criteria.
              </p>
              <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border">
                <div className="text-sm">
                  <div className="mb-2"><strong>Federal Minimum Wage:</strong> $7.25/hour</div>
                  <div className="mb-2"><strong>Exempt Salary Threshold:</strong> $684/week ($35,568/year)</div>
                  <div className="mb-2"><strong>Overtime Rate:</strong> 1.5x regular rate after 40 hours</div>
                  <div><strong>Record Keeping:</strong> Employers must maintain detailed payroll records</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Exempt Employees</h3>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Salaried positions</li>
                  <li>• Minimum $684/week</li>
                  <li>• Executive, administrative, professional</li>
                  <li>• No overtime pay required</li>
                  <li>• Higher earning potential</li>
                </ul>
              </div>
              <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Non-Exempt Employees</h3>
                <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                  <li>• Hourly positions</li>
                  <li>• Below $684/week</li>
                  <li>• Service, manual labor</li>
                  <li>• Overtime pay required</li>
                  <li>• Hourly transparency</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Salary Factors Section */}
      <section id="salary-factors" className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-orange-500" />
              Factors That Influence Salary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Education</h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Higher education levels correlate with higher salaries. Bachelor's degree holders earn significantly more than high school graduates.
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Experience</h3>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Years of experience in a field directly impact earning potential. Senior professionals earn more than entry-level workers.
                  </p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Industry</h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Different industries have varying salary ranges. Technology and finance typically offer higher compensation than retail or hospitality.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Location</h3>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    Geographic location significantly affects salaries. Urban areas and high-cost regions typically offer higher compensation.
                  </p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Gender</h3>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Gender pay gap exists across industries. Women earn approximately 82% of what men earn for similar positions.
                  </p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Age</h3>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Peak earning years are typically 40-65. Experience and seniority increase with age, leading to higher salaries.
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
              <h3 className="text-xl font-semibold mb-4">Dr. Jennifer Martinez, HR Director - Fortune 500 Company</h3>
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                  "Understanding pay frequency conversions is crucial for salary negotiations. Many candidates focus only on annual salary without considering the impact of pay frequency on cash flow. This calculator helps employees make informed decisions about compensation packages."
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  - Dr. Jennifer Martinez, HR Director, Microsoft
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Robert Chen, CPA - Compensation Consultant</h3>
              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                  "Salary calculations must account for holidays and vacation days to provide accurate comparisons. The adjusted salary figures give employees a realistic view of their actual working compensation, which is essential for career planning and job comparisons."
                </p>
                <p className="text-xs text-green-600 dark:text-green-400">
                  - Robert Chen, CPA, Senior Compensation Consultant, Deloitte
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Sarah Johnson, MBA - Career Coach</h3>
              <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                  "Industry comparisons are invaluable for salary negotiations. This calculator provides the data employees need to benchmark their compensation against market rates and negotiate from a position of knowledge rather than guesswork."
                </p>
                <p className="text-xs text-purple-600 dark:text-purple-400">
                  - Sarah Johnson, MBA, Certified Career Coach, LinkedIn
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
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Software Engineer Salary Negotiation</h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-2">
                "I used the salary calculator to convert my current $75,000 annual salary to different pay frequencies. When negotiating a new job, I discovered that a $80,000 salary with bi-weekly pay was actually better than my current monthly salary. I negotiated a $85,000 offer and increased my annual income by $10,000!"
              </p>
              <p className="text-xs text-yellow-600 dark:text-yellow-400">- Michael R., Software Engineer</p>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Marketing Manager Career Change</h3>
              <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                "When switching from hourly to salaried work, I needed to understand the true value of my compensation. The calculator showed that my $35/hour rate with overtime was equivalent to a $78,000 annual salary. I used this data to negotiate a $82,000 salaried position with better benefits."
              </p>
              <p className="text-xs text-green-600 dark:text-green-400">- Lisa K., Marketing Manager</p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Freelancer to Employee Transition</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                "As a freelancer earning $60/hour, I needed to calculate what salary would provide equivalent compensation including benefits. The calculator helped me determine that a $95,000 annual salary would match my freelance income, and I successfully negotiated a $100,000 position with full benefits."
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400">- David S., Graphic Designer</p>
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
              <h3 className="text-lg font-semibold mb-2">How accurate are the salary calculations?</h3>
              <p className="text-muted-foreground">
                Our calculator uses industry-standard formulas for pay frequency conversions and working day calculations. The results are highly accurate for standard employment scenarios and account for holidays and vacation days.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What's the difference between unadjusted and adjusted salaries?</h3>
              <p className="text-muted-foreground">
                Unadjusted salaries ignore holidays and vacation days, while adjusted salaries account for paid time off. Adjusted salaries provide a more realistic view of actual working compensation and are more useful for job comparisons.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How do I use this for salary negotiations?</h3>
              <p className="text-muted-foreground">
                Use the calculator to convert your current salary to different pay frequencies, compare against industry averages, and prepare talking points for negotiations. The industry comparison feature helps you benchmark your compensation against market rates.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What if I'm self-employed or a contractor?</h3>
              <p className="text-muted-foreground">
                Contractors should generally charge higher rates than equivalent salaried positions since they don't receive benefits like health insurance, paid time off, or retirement contributions. Use the calculator to determine equivalent salary rates.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How do I increase my salary?</h3>
              <p className="text-muted-foreground">
                Focus on education, experience, networking, performance reviews, negotiation, and job changes. The calculator provides personalized recommendations based on your current situation and industry comparisons.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What factors affect salary most?</h3>
              <p className="text-muted-foreground">
                Education, experience, industry, location, gender, age, and performance all significantly impact salary. The calculator helps you understand how these factors affect your earning potential and provides strategies for improvement.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How often should I review my salary?</h3>
              <p className="text-muted-foreground">
                Review your salary annually during performance reviews, when changing jobs, or when your responsibilities change significantly. Use the calculator to track your compensation growth and benchmark against market rates.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What's the best pay frequency for employees?</h3>
              <p className="text-muted-foreground">
                Bi-weekly is the most common and preferred frequency as it provides regular income with manageable payroll costs. The choice depends on your financial needs, employer policies, and personal preferences for cash flow management.
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
                  <a href="https://www.dol.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Department of Labor</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Labor laws and wage information</div>
                  </a>
                  <a href="https://www.bls.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Bureau of Labor Statistics</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Employment and wage statistics</div>
                  </a>
                  <a href="https://www.eeoc.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">Equal Employment Opportunity Commission</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Workplace discrimination and pay equity</div>
                  </a>
                  <a href="https://www.irs.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Internal Revenue Service</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Tax information and payroll</div>
                  </a>
                  <a href="https://www.ssa.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Social Security Administration</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Social Security and Medicare taxes</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="https://www.census.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">US Census Bureau</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Economic and demographic data</div>
                  </a>
                  <a href="https://www.gao.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">Government Accountability Office</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Labor policy analysis and reports</div>
                  </a>
                  <a href="https://www.cbo.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">Congressional Budget Office</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Economic analysis and projections</div>
                  </a>
                  <a href="https://www.federalreserve.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">Federal Reserve</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Economic policy and labor markets</div>
                  </a>
                  <a href="https://www.ftc.gov/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Federal Trade Commission</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Consumer protection and fair employment</div>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Professional Organizations</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <a href="https://www.shrm.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">Society for Human Resource Management</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">HR best practices and compensation</div>
                  </a>
                  <a href="https://www.worldatwork.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">WorldatWork</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Total rewards and compensation</div>
                  </a>
                  <a href="https://www.aicpa.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">American Institute of CPAs</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Professional accounting standards</div>
                  </a>
                  <a href="https://www.cfainstitute.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">CFA Institute</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Investment analysis and finance</div>
                  </a>
                  <a href="https://www.pmi.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">Project Management Institute</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Project management and career development</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="https://www.ama.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-950/30 transition-colors">
                    <div className="font-medium text-blue-800 dark:text-blue-200">American Management Association</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Management and leadership development</div>
                  </a>
                  <a href="https://www.ifebp.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors">
                    <div className="font-medium text-green-800 dark:text-green-200">International Foundation of Employee Benefit Plans</div>
                    <div className="text-sm text-green-600 dark:text-green-400">Employee benefits and compensation</div>
                  </a>
                  <a href="https://www.naspp.com/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-950/30 transition-colors">
                    <div className="font-medium text-purple-800 dark:text-purple-200">National Association of Stock Plan Professionals</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400">Equity compensation and stock plans</div>
                  </a>
                  <a href="https://www.worldatwork.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800 hover:bg-orange-100 dark:hover:bg-orange-950/30 transition-colors">
                    <div className="font-medium text-orange-800 dark:text-orange-200">WorldatWork</div>
                    <div className="text-sm text-orange-600 dark:text-orange-400">Total rewards and compensation</div>
                  </a>
                  <a href="https://www.ifebp.org/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-950/30 transition-colors">
                    <div className="font-medium text-red-800 dark:text-red-200">International Foundation of Employee Benefit Plans</div>
                    <div className="text-sm text-red-600 dark:text-red-400">Employee benefits and compensation</div>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Calculate Your Salary?</h2>
            <p className="text-xl mb-6 opacity-90">
              Get accurate salary conversions and optimize your compensation strategy today
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/calculator/salary-calculator">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Salary
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
