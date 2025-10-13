import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Calculator,
  ArrowRight,
  Calendar,
  Activity,
  DollarSign,
  Percent,
  Clock,
  Wallet,
  TrendingUp,
  GraduationCap,
  Building,
  Network,
  Ruler,
  Triangle,
  BarChart3,
  Heart,
  Timer,
  Flame,
  Scale,
  Receipt,
} from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "All Free Online Tools & Calculators | Age, BMI, Loan, Tax & More | FastTools",
  description:
    "Browse 50+ free online tools including age calculator, BMI calculator, loan EMI calculator, tax calculator, percentage calculator, and more. Fast, accurate, and easy to use. No registration required.",
  keywords: [
    "online calculators",
    "free tools",
    "age calculator",
    "BMI calculator",
    "loan calculator",
    "tax calculator",
    "percentage calculator",
    "date calculator",
    "time calculator",
    "financial calculators",
    "health calculators",
    "conversion tools",
    "utilities",
    "web tools",
    "productivity tools",
    "calculation tools",
    "math calculators",
    "financial planning tools",
    "loan EMI calculator",
    "compound interest calculator",
    "income tax calculator",
    "BMI calculator online",
    "age calculator in days",
    "percentage calculator online",
    "time duration calculator",
    "date difference calculator",
    "mortgage calculator",
    "retirement calculator",
    "investment calculator",
    "budget calculator",
    "expense calculator",
    "salary calculator",
    "tip calculator",
    "discount calculator",
    "grade calculator",
    "GPA calculator",
    "scientific calculator",
    "basic calculator",
    "advanced calculator",
    "calculator online free",
    "math tools",
    "arithmetic calculator",
    "statistics calculator",
    "probability calculator",
    "geometry calculator",
    "algebra calculator",
    "trigonometry calculator",
    "unit converter",
    "measurement converter",
    "currency converter",
    "temperature converter",
    "weight converter",
    "length converter",
    "area calculator",
    "volume calculator",
    "speed calculator",
    "distance calculator"
  ],
  openGraph: {
    title: "All Free Online Tools & Calculators | FastTools",
    description: "Browse 50+ free online tools including age calculator, BMI calculator, loan calculator, and more.",
    type: "website",
    url: "https://fasttools.store/tools",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Free Online Tools & Calculators",
    description: "Browse 50+ free online tools including age calculator, BMI calculator, loan calculator, and more.",
  },
  alternates: {
    canonical: "https://fasttools.store/tools",
  },
}

export default function ToolsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "All Free Online Tools & Calculators",
    description: "Browse 50+ free online tools including age calculator, BMI calculator, loan calculator, and more.",
    url: "https://fasttools.store/tools",
    mainEntity: {
      "@type": "ItemList",
      name: "Free Online Tools",
      description: "Collection of free online tools and calculators",
      numberOfItems: 52,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Conversion Calculator",
          description: "Convert between 1000+ units instantly. Length, weight, temperature, currency, time, area, volume, speed, power, energy, pressure conversions",
          url: "https://fasttools.store/converters/conversion-calculator"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Age Calculator",
          description: "Calculate your exact age in years, months, and days",
          url: "https://fasttools.store/tools/age-calculator"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "BMI Calculator",
          description: "Calculate your Body Mass Index (BMI)",
          url: "https://fasttools.store/tools/bmi-calculator"
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Loan EMI Calculator",
          description: "Calculate your monthly loan payment (EMI)",
          url: "https://fasttools.store/tools/loan-calculator"
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Tax Calculator",
          description: "Calculate your estimated income tax",
          url: "https://fasttools.store/tools/tax-calculator"
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Percentage Calculator",
          description: "Calculate percentages quickly and easily",
          url: "https://fasttools.store/tools/percentage-calculator"
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "GPA Calculator",
          description: "Calculate your Grade Point Average with comprehensive analysis",
          url: "https://fasttools.store/tools/gpa-calculator"
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Concrete Calculator",
          description: "Calculate concrete volume, weight, materials, and cost for construction projects",
          url: "https://fasttools.store/tools/concrete-calculator"
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "IP Subnet Calculator",
          description: "Calculate IPv4 and IPv6 subnets with CIDR notation, VLSM, and network analysis",
          url: "https://fasttools.store/tools/ip-subnet-calculator"
        }
      ]
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://fasttools.store"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tools",
          item: "https://fasttools.store/tools"
        }
      ]
    }
  }

  const tools = [
    {
      title: "Conversion Calculator",
      description: "Convert between 1000+ units instantly. Length, weight, temperature, currency, time, area, volume, speed, power, energy, pressure conversions.",
      icon: Ruler,
      href: "/converters/conversion-calculator",
    },
    {
      title: "Age Calculator",
      description: "Calculate your exact age in years, months, and days from your birth date.",
      icon: Calculator,
      href: "/tools/age-calculator",
    },
    {
      title: "Date Difference Calculator",
      description: "Calculate the exact difference between two dates in years, months, days, and more.",
      icon: Calendar,
      href: "/tools/date-difference",
    },
    {
      title: "BMI Calculator",
      description: "Calculate your Body Mass Index (BMI) to assess your weight category.",
      icon: Activity,
      href: "/tools/bmi-calculator",
    },
    {
      title: "Loan EMI Calculator",
      description: "Calculate your monthly loan payment (EMI) with total interest breakdown.",
      icon: DollarSign,
      href: "/tools/loan-calculator",
    },
    {
      title: "Percentage Calculator",
      description: "Calculate percentages quickly for discounts, tips, grades, and more.",
      icon: Percent,
      href: "/tools/percentage-calculator",
    },
    {
      title: "Time Duration Calculator",
      description: "Calculate the time duration between two times in hours and minutes.",
      icon: Clock,
      href: "/tools/time-duration",
    },
    {
      title: "Income Tax Calculator",
      description: "Calculate your estimated income tax and net salary based on annual income.",
      icon: Wallet,
      href: "/tools/tax-calculator",
    },
    {
      title: "Compound Interest Calculator",
      description: "Calculate compound interest and see how your investment grows over time.",
      icon: TrendingUp,
      href: "/tools/compound-interest",
    },
    {
      title: "GPA Calculator",
      description: "Calculate your Grade Point Average with comprehensive analysis and planning tools.",
      icon: GraduationCap,
      href: "/tools/gpa-calculator",
    },
    {
      title: "Concrete Calculator",
      description: "Calculate concrete volume, weight, materials, and cost for construction projects.",
      icon: Building,
      href: "/tools/concrete-calculator",
    },
    {
      title: "IP Subnet Calculator",
      description: "Calculate IPv4 and IPv6 subnets with CIDR notation, VLSM, and network analysis.",
      icon: Network,
      href: "/tools/ip-subnet-calculator",
    },
    {
      title: "Scientific Calculator",
      description: "Advanced scientific calculator with trigonometric, logarithmic, power, root, and statistical functions.",
      icon: Calculator,
      href: "/tools/scientific-calculator",
    },
    {
      title: "Triangle Calculator",
      description: "Calculate triangle area, perimeter, angles, heights, medians, inradius, and circumradius with SSS, SAS, ASA, AAS, SSA methods.",
      icon: Triangle,
      href: "/tools/triangle-calculator",
    },
    {
      title: "Fraction Calculator",
      description: "Add, subtract, multiply, and divide fractions with automatic simplification, decimal conversion, and mixed number support.",
      icon: Calculator,
      href: "/tools/fraction-calculator",
    },
    {
      title: "Standard Deviation Calculator",
      description: "Calculate standard deviation, variance, mean, confidence intervals, quartiles, outliers detection, and comprehensive statistical analysis.",
      icon: BarChart3,
      href: "/tools/standard-deviation-calculator",
    },
    {
      title: "Pregnancy Conception Calculator",
      description: "Calculate your conception date with personalized trimester guidance, nutrition tips, exercise recommendations, and comprehensive pregnancy insights.",
      icon: Heart,
      href: "/tools/pregnancy-conception-calculator",
    },
    {
      title: "Pregnancy Calculator",
      description: "Track your pregnancy with comprehensive calculator. Get due date estimates, gestational age, weight gain recommendations, and personalized pregnancy insights.",
      icon: Heart,
      href: "/tools/pregnancy-calculator",
    },
    {
      title: "Pace Calculator",
      description: "Calculate running pace, training zones, heart rate zones, race predictions, and VO2 Max with our advanced pace calculator. Perfect for runners, coaches, and athletes.",
      icon: Timer,
      href: "/tools/pace-calculator",
    },
    {
      title: "BMR Calculator",
      description: "Calculate your Basal Metabolic Rate (BMR) with multiple equations. Get TDEE analysis, weight management goals, and personalized nutrition recommendations for optimal health.",
      icon: Flame,
      href: "/tools/bmr-calculator",
    },
    {
      title: "Body Fat Calculator",
      description: "Calculate your body fat percentage using U.S. Navy method and BMI method. Get fat mass, lean mass, ideal body fat, and personalized health recommendations for optimal body composition.",
      icon: Scale,
      href: "/tools/body-fat-calculator",
    },
    {
      title: "Calorie Calculator",
      description: "Calculate your daily calorie needs with advanced BMR and TDEE analysis. Get weight management goals, zigzag calorie cycling, and personalized nutrition recommendations for optimal health.",
      icon: Flame,
      href: "/tools/calorie-calculator",
    },
    {
      title: "Sales Tax Calculator",
      description: "Calculate sales tax for all 50 US states with our advanced calculator. Get accurate tax calculations, state comparisons, business tips, and compliance guidance for optimal tax planning.",
      icon: Receipt,
      href: "/tools/sales-tax-calculator",
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs items={[{ label: "Tools", href: "/tools" }]} />

      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">All Calculation Tools</h1>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Discover our comprehensive collection of free online calculation tools designed for professionals, students, 
            and everyday users. Our advanced calculator suite includes age calculators, BMI calculators, loan EMI calculators, 
            tax calculators, percentage calculators, time duration calculators, compound interest calculators, GPA calculators, and concrete calculators. All tools 
            are 100% free, highly accurate, and optimized for both desktop and mobile use. Whether you're calculating 
            personal finances, health metrics, academic grades, construction projects, or business expenses, our tools provide instant, 
            reliable results without any registration requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Card
              key={tool.href}
              className="hover:shadow-lg transition-all hover:border-primary/30 border-border/50 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 border border-primary/10">
                  <tool.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{tool.title}</CardTitle>
                <CardDescription className="leading-relaxed text-sm">{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full h-10 text-sm font-medium shadow-sm hover:shadow-md transition-all">
                  <Link href={tool.href}>
                    Use Tool
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Understanding How These Tools Work */}
        <section className="mt-16 prose prose-slate max-w-none dark:prose-invert">
          <h2 className="text-2xl font-semibold text-foreground">Understanding How These Calculation Tools Work</h2>
          <p className="text-muted-foreground">
            Our calculation tools use advanced mathematical algorithms and real-time data processing to deliver 
            accurate results instantly. Each calculator is built with precision-engineered formulas that handle 
            complex calculations including compound interest, tax brackets, BMI classifications, and time calculations. 
            All tools are optimized for speed and accuracy, ensuring you get reliable results every time.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Mathematical Precision</h3>
          <p className="text-muted-foreground">
            Our age calculator uses precise date arithmetic to calculate exact ages down to the day. 
            The BMI calculator uses the World Health Organization's standard formula (weight in kg / height in m²) 
            with accurate category classifications. Financial calculators use compound interest formulas and 
            amortization schedules to provide detailed payment breakdowns.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Real-Time Data Processing</h3>
          <p className="text-muted-foreground">
            Tax calculators are updated with current tax brackets and rates, while loan calculators use 
            current interest rate data. All calculations are performed client-side for maximum speed and 
            privacy, ensuring your personal data never leaves your device.
          </p>
        </section>

        {/* Advanced Usage Techniques */}
        <section className="mt-12 prose prose-slate max-w-none dark:prose-invert">
          <h2 className="text-2xl font-semibold text-foreground">Advanced Usage Techniques</h2>
          <p className="text-muted-foreground">
            Master these professional techniques to get the most out of our calculation tools and make 
            informed decisions based on accurate data.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Financial Planning Mastery</h3>
          <p className="text-muted-foreground">
            Use the compound interest calculator to model different investment scenarios and retirement planning. 
            Combine the loan calculator with tax calculator to understand the true cost of borrowing. 
            Use the percentage calculator for discount analysis and profit margin calculations in business planning.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Health and Fitness Optimization</h3>
          <p className="text-muted-foreground">
            Track your BMI over time using the BMI calculator to monitor health trends. Use the age calculator 
            to calculate exact ages for medical records and health assessments. Combine multiple tools to create 
            comprehensive health and fitness tracking systems.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Academic and Professional Use</h3>
          <p className="text-muted-foreground">
            Students can use these tools for mathematics homework, science projects, and financial literacy education. 
            Professionals in finance, healthcare, and education can integrate these calculators into their workflows 
            for accurate data analysis and decision-making.
          </p>
        </section>

        {/* Performance and Optimization Tips */}
        <section className="mt-12 prose prose-slate max-w-none dark:prose-invert">
          <h2 className="text-2xl font-semibold text-foreground">Performance and Optimization Tips</h2>
          <p className="text-muted-foreground">
            Maximize the efficiency and accuracy of your calculations with these proven optimization strategies.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Input Accuracy Best Practices</h3>
          <p className="text-muted-foreground">
            Always double-check your inputs before calculating. For financial calculations, use exact amounts 
            rather than rounded numbers. For BMI calculations, measure height and weight accurately. For age 
            calculations, use the exact birth date for maximum precision.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Batch Calculations</h3>
          <p className="text-muted-foreground">
            When working with multiple scenarios, use our tools to create comparison tables. Calculate different 
            loan options, investment scenarios, or tax situations side-by-side to make informed decisions. 
            Save your results for future reference and analysis.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Mobile Optimization</h3>
          <p className="text-muted-foreground">
            All our calculators are fully responsive and optimized for mobile devices. Use them on-the-go for 
            quick calculations during meetings, shopping, or while traveling. The touch-friendly interface 
            ensures accurate input even on smaller screens.
          </p>
        </section>

        {/* Common Mistakes and How to Avoid Them */}
        <section className="mt-12 prose prose-slate max-w-none dark:prose-invert">
          <h2 className="text-2xl font-semibold text-foreground">Common Mistakes and How to Avoid Them</h2>
          <p className="text-muted-foreground">
            Avoid these common calculation errors that can lead to inaccurate results and poor decision-making.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Input Format Errors</h3>
          <p className="text-muted-foreground">
            Always use the correct date format (MM/DD/YYYY) for age calculations. For BMI calculations, 
            enter height in the correct unit (feet/inches or centimeters) and weight in pounds or kilograms. 
            Double-check decimal points and number formatting to avoid calculation errors.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Financial Calculation Mistakes</h3>
          <p className="text-muted-foreground">
            When using loan calculators, ensure you're entering the annual interest rate, not monthly. 
            For tax calculations, use gross income before deductions. For compound interest calculations, 
            verify the compounding frequency (monthly, quarterly, annually) matches your investment terms.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Unit Conversion Errors</h3>
          <p className="text-muted-foreground">
            Pay attention to units when entering measurements. Convert between metric and imperial systems 
            accurately. For BMI calculations, ensure height and weight are in the same measurement system. 
            For time calculations, use consistent time formats (12-hour vs 24-hour).
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Rounding and Precision Issues</h3>
          <p className="text-muted-foreground">
            Avoid premature rounding in multi-step calculations. Let the calculator handle decimal precision 
            throughout the calculation process. Only round the final result to the appropriate number of 
            decimal places for your specific use case.
          </p>
        </section>

        {/* FAQs Section */}
        <section className="mt-12 prose prose-slate max-w-none dark:prose-invert">
          <h2 className="text-2xl font-semibold text-foreground">Frequently Asked Questions</h2>
          
          <h3 className="text-xl font-semibold text-foreground">How accurate are these calculation tools?</h3>
          <p className="text-muted-foreground">
            Our calculation tools use industry-standard formulas and algorithms to ensure maximum accuracy. 
            Financial calculators use precise mathematical formulas, BMI calculators follow WHO standards, 
            and age calculators use exact date arithmetic. All calculations are performed with high precision 
            to provide reliable results for professional and personal use.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Can I use these tools for business purposes?</h3>
          <p className="text-muted-foreground">
            Yes, all our calculation tools are free for both personal and commercial use. Business owners, 
            accountants, financial advisors, and consultants can use these tools for client calculations, 
            financial planning, and business analysis without any restrictions.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Do these tools work on mobile devices?</h3>
          <p className="text-muted-foreground">
            Absolutely! All our calculation tools are fully responsive and optimized for mobile devices. 
            They work seamlessly on smartphones and tablets, providing the same accuracy and functionality 
            as the desktop versions. The touch-friendly interface makes data entry easy on any device.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">Are my calculations and data secure?</h3>
          <p className="text-muted-foreground">
            Yes, all calculations are performed locally in your browser. Your personal data, financial information, 
            and calculation inputs never leave your device. We don't store, track, or transmit any of your 
            calculation data, ensuring complete privacy and security.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground">How often are the tax and financial data updated?</h3>
          <p className="text-muted-foreground">
            Our tax calculators and financial tools are updated regularly to reflect current rates, brackets, 
            and regulations. Tax brackets are updated annually, interest rates are updated as needed, and 
            all financial formulas are kept current with the latest industry standards and regulations.
          </p>
        </section>

        {/* Comprehensive Tools Guides Section */}
        <div className="mt-12">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">Comprehensive Tools Guides</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-blue-500" />
                  Age Calculator Guide
                </CardTitle>
                <CardDescription>
                  Complete guide to age calculation, date arithmetic, and leap year handling.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Master age calculation with our comprehensive guide covering calculation methods, 
                  date arithmetic, leap years, and practical applications for accurate age determination.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/guides/age-calculator-guide">Read Complete Guide</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-green-500" />
                  BMI Calculator Guide
                </CardTitle>
                <CardDescription>
                  Complete guide to BMI calculation, health implications, and weight management.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Master BMI calculation with our comprehensive guide covering formulas, categories, 
                  health implications, and best practices for accurate health assessment.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/guides/bmi-calculator-guide">Read Complete Guide</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
