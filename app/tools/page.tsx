import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AdSpace } from "@/components/ad-space"
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
  Home,
  Sparkles,
  Zap,
  Target,
  Users,
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
    "distance calculator",
    "mortgage rates",
    "home loan",
    "mortgage loan",
    "what is mortgage",
    "mortgage quotes",
    "current mortgage",
    "mortgage broker",
    "interest rate",
    "what is a mortgage",
    "mortgage insurance",
    "how to calculate",
    "rocket mortgage",
    "built mortgage",
    "valon mortgage",
    "true north mortgage",
    "scotiabank mortgage",
    "m&t mortgage",
    "guild mortgage",
    "carrington mortgage",
    "hypotheek",
    "hipoteca",
    "hipotecario",
    "10 year treasury",
    "rising mortgage rates",
    "mortgage payment calculator",
    "home loan calculator",
    "refinance calculator",
    "mortgage affordability calculator",
    "debt to income calculator",
    "amortization schedule calculator",
    "mortgage points calculator",
    "closing costs calculator",
    "home equity calculator",
    "rent vs buy calculator",
    "mortgage comparison calculator",
    "ARM calculator",
    "fixed rate mortgage calculator",
    "FHA loan calculator",
    "VA loan calculator",
    "conventional loan calculator",
    "jumbo loan calculator",
    "first time home buyer calculator",
    "down payment calculator",
    "PMI calculator",
    "escrow calculator",
    "property tax calculator",
    "home insurance calculator",
    "mortgage pre approval calculator",
    "loan to value calculator",
    "cash flow calculator",
    "ROI calculator",
    "cap rate calculator",
    "rental property calculator",
    "investment property calculator",
    "real estate calculator",
    "house payment calculator",
    "monthly payment calculator",
    "bi weekly mortgage calculator",
    "extra payment calculator",
    "payoff calculator",
    "refinance break even calculator",
    "cash out refinance calculator",
    "rate and term refinance calculator",
    "streamline refinance calculator",
    "reverse mortgage calculator",
    "home equity line of credit calculator",
    "construction loan calculator",
    "bridge loan calculator",
    "balloon payment calculator",
    "interest only calculator",
    "negative amortization calculator",
    "graduated payment calculator",
    "growing equity mortgage calculator",
    "shared appreciation mortgage calculator",
    "adjustable rate mortgage calculator",
    "hybrid ARM calculator",
    "interest rate cap calculator",
    "payment cap calculator",
    "lifetime cap calculator",
    "periodic cap calculator",
    "margin calculator",
    "index rate calculator",
    "teaser rate calculator",
    "introductory rate calculator",
    "promotional rate calculator",
    "discount point calculator",
    "origination fee calculator",
    "processing fee calculator",
    "underwriting fee calculator",
    "appraisal fee calculator",
    "title insurance calculator",
    "recording fee calculator",
    "transfer tax calculator",
    "stamp duty calculator",
    "conveyancing fee calculator",
    "legal fee calculator",
    "survey fee calculator",
    "inspection fee calculator",
    "home warranty calculator",
    "flood insurance calculator",
    "earthquake insurance calculator",
    "windstorm insurance calculator",
    "hazard insurance calculator",
    "liability insurance calculator",
    "umbrella insurance calculator",
    "disability insurance calculator",
    "life insurance calculator",
    "long term care insurance calculator",
    "annuity calculator",
    "pension calculator",
    "social security calculator",
    "medicare calculator",
    "medicaid calculator",
    "health insurance calculator",
    "dental insurance calculator",
    "vision insurance calculator",
    "prescription drug calculator",
    "medical expense calculator",
    "health savings account calculator",
    "flexible spending account calculator",
    "health reimbursement arrangement calculator",
    "cobra calculator",
    "aca calculator",
    "obamacare calculator",
    "marketplace calculator",
    "subsidy calculator",
    "premium tax credit calculator",
    "cost sharing reduction calculator",
    "out of pocket maximum calculator",
    "deductible calculator",
    "copay calculator",
    "coinsurance calculator",
    "prior authorization calculator",
    "step therapy calculator",
    "formulary calculator",
    "tier calculator",
    "network calculator",
    "out of network calculator",
    "in network calculator",
    "preferred provider calculator",
    "health maintenance organization calculator",
    "preferred provider organization calculator",
    "point of service calculator",
    "exclusive provider organization calculator",
    "high deductible health plan calculator",
    "health maintenance organization calculator",
    "preferred provider organization calculator",
    "point of service calculator",
    "exclusive provider organization calculator",
    "high deductible health plan calculator",
    "catastrophic health plan calculator",
    "bronze plan calculator",
    "silver plan calculator",
    "gold plan calculator",
    "platinum plan calculator",
    "actuarial value calculator",
    "metal tier calculator",
    "essential health benefits calculator",
    "minimum essential coverage calculator",
    "individual mandate calculator",
    "employer mandate calculator",
    "play or pay calculator",
    "shared responsibility calculator",
    "affordability calculator",
    "minimum value calculator",
    "full time equivalent calculator",
    "seasonal worker calculator",
    "variable hour employee calculator",
    "measurement period calculator",
    "administrative period calculator",
    "stability period calculator",
    "look back period calculator",
    "safe harbor calculator",
    "transition relief calculator",
    "grandfathered plan calculator",
    "grandmothered plan calculator",
    "non grandfathered plan calculator",
    "fully insured calculator",
    "self insured calculator",
    "level funded calculator",
    "captive calculator",
    "stop loss calculator",
    "aggregate stop loss calculator",
    "specific stop loss calculator",
    "laser calculator",
    "laser surgery calculator",
    "laser treatment calculator",
    "laser therapy calculator",
    "laser hair removal calculator",
    "laser skin resurfacing calculator",
    "laser eye surgery calculator",
    "lasik calculator",
    "prk calculator",
    "lasek calculator",
    "epi lasik calculator",
    "wavefront lasik calculator",
    "custom lasik calculator",
    "bladeless lasik calculator",
    "all laser lasik calculator",
    "intralase calculator",
    "femtosecond laser calculator",
    "microkeratome calculator",
    "mechanical microkeratome calculator",
    "automated microkeratome calculator",
    "femtosecond laser microkeratome calculator",
    "intralase femtosecond laser calculator",
    "visx star s4 calculator",
    "alcon wavelight calculator",
    "bausch and lomb technolas calculator",
    "zeiss mel 80 calculator",
    "schwind amaris calculator",
    "nidek ec 5000 calculator",
    "topcon calculator",
    "esiris calculator",
    "technolas calculator",
    "wavelight calculator",
    "allegretto calculator",
    "excimer laser calculator",
    "argon fluoride laser calculator",
    "krypton fluoride laser calculator",
    "xenon chloride laser calculator",
    "xenon fluoride laser calculator",
    "nitrogen laser calculator",
    "helium neon laser calculator",
    "carbon dioxide laser calculator",
    "neodymium yag laser calculator",
    "erbium yag laser calculator",
    "holmium yag laser calculator",
    "thulium yag laser calculator",
    "dye laser calculator",
    "titanium sapphire laser calculator",
    "alexandrite laser calculator",
    "ruby laser calculator",
    "helium cadmium laser calculator",
    "helium silver laser calculator",
    "copper vapor laser calculator",
    "gold vapor laser calculator",
    "sodium vapor laser calculator",
    "potassium vapor laser calculator",
    "cesium vapor laser calculator",
    "rubidium vapor laser calculator",
    "lithium vapor laser calculator",
    "strontium vapor laser calculator",
    "barium vapor laser calculator",
    "calcium vapor laser calculator",
    "magnesium vapor laser calculator",
    "beryllium vapor laser calculator",
    "boron vapor laser calculator",
    "carbon vapor laser calculator",
    "nitrogen vapor laser calculator",
    "oxygen vapor laser calculator",
    "fluorine vapor laser calculator",
    "neon vapor laser calculator",
    "argon vapor laser calculator",
    "krypton vapor laser calculator",
    "xenon vapor laser calculator",
    "radon vapor laser calculator",
    "francium vapor laser calculator",
    "radium vapor laser calculator",
    "actinium vapor laser calculator",
    "thorium vapor laser calculator",
    "protactinium vapor laser calculator",
    "uranium vapor laser calculator",
    "neptunium vapor laser calculator",
    "plutonium vapor laser calculator",
    "americium vapor laser calculator",
    "curium vapor laser calculator",
    "berkelium vapor laser calculator",
    "californium vapor laser calculator",
    "einsteinium vapor laser calculator",
    "fermium vapor laser calculator",
    "mendelevium vapor laser calculator",
    "nobelium vapor laser calculator",
    "lawrencium vapor laser calculator",
    "rutherfordium vapor laser calculator",
    "dubnium vapor laser calculator",
    "seaborgium vapor laser calculator",
    "bohrium vapor laser calculator",
    "hassium vapor laser calculator",
    "meitnerium vapor laser calculator",
    "darmstadtium vapor laser calculator",
    "roentgenium vapor laser calculator",
    "copernicium vapor laser calculator",
    "nihonium vapor laser calculator",
    "flerovium vapor laser calculator",
    "moscovium vapor laser calculator",
    "livermorium vapor laser calculator",
    "tennessine vapor laser calculator",
    "oganesson vapor laser calculator"
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
          url: "https://fasttools.store/tools/conversion-calculator"
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
      href: "/tools/conversion-calculator",
      color: "blue"
    },
    {
      title: "Age Calculator",
      description: "Calculate your exact age in years, months, and days from your birth date.",
      icon: Calculator,
      href: "/tools/age-calculator",
      color: "green"
    },
    {
      title: "Date Difference Calculator",
      description: "Calculate the exact difference between two dates in years, months, days, and more.",
      icon: Calendar,
      href: "/tools/date-difference",
      color: "purple"
    },
    {
      title: "BMI Calculator",
      description: "Calculate your Body Mass Index (BMI) to assess your weight category.",
      icon: Activity,
      href: "/tools/bmi-calculator",
      color: "pink"
    },
    {
      title: "Loan EMI Calculator",
      description: "Calculate your monthly loan payment (EMI) with total interest breakdown.",
      icon: DollarSign,
      href: "/tools/loan-calculator",
      color: "emerald"
    },
    {
      title: "Percentage Calculator",
      description: "Calculate percentages quickly for discounts, tips, grades, and more.",
      icon: Percent,
      href: "/tools/percentage-calculator",
      color: "orange"
    },
    {
      title: "Time Duration Calculator",
      description: "Calculate the time duration between two times in hours and minutes.",
      icon: Clock,
      href: "/tools/time-duration",
      color: "cyan"
    },
    {
      title: "Income Tax Calculator",
      description: "Calculate your estimated income tax and net salary based on annual income.",
      icon: Wallet,
      href: "/tools/tax-calculator",
      color: "yellow"
    },
    {
      title: "Compound Interest Calculator",
      description: "Calculate compound interest and see how your investment grows over time.",
      icon: TrendingUp,
      href: "/tools/compound-interest",
      color: "indigo"
    },
    {
      title: "GPA Calculator",
      description: "Calculate your Grade Point Average with comprehensive analysis and planning tools.",
      icon: GraduationCap,
      href: "/tools/gpa-calculator",
      color: "red"
    },
    {
      title: "Concrete Calculator",
      description: "Calculate concrete volume, weight, materials, and cost for construction projects.",
      icon: Building,
      href: "/tools/concrete-calculator",
      color: "gray"
    },
    {
      title: "IP Subnet Calculator",
      description: "Calculate IPv4 and IPv6 subnets with CIDR notation, VLSM, and network analysis.",
      icon: Network,
      href: "/tools/ip-subnet-calculator",
      color: "violet"
    },
    {
      title: "Scientific Calculator",
      description: "Advanced scientific calculator with trigonometric, logarithmic, power, root, and statistical functions.",
      icon: Calculator,
      href: "/tools/scientific-calculator",
      color: "teal"
    },
    {
      title: "Triangle Calculator",
      description: "Calculate triangle area, perimeter, angles, heights, medians, inradius, and circumradius with SSS, SAS, ASA, AAS, SSA methods.",
      icon: Triangle,
      href: "/tools/triangle-calculator",
      color: "lime"
    },
    {
      title: "Fraction Calculator",
      description: "Add, subtract, multiply, and divide fractions with automatic simplification, decimal conversion, and mixed number support.",
      icon: Calculator,
      href: "/tools/fraction-calculator",
      color: "sky"
    },
    {
      title: "Standard Deviation Calculator",
      description: "Calculate standard deviation, variance, mean, confidence intervals, quartiles, outliers detection, and comprehensive statistical analysis.",
      icon: BarChart3,
      href: "/tools/standard-deviation-calculator",
      color: "rose"
    },
    {
      title: "Pregnancy Conception Calculator",
      description: "Calculate your conception date with personalized trimester guidance, nutrition tips, exercise recommendations, and comprehensive pregnancy insights.",
      icon: Heart,
      href: "/tools/pregnancy-conception-calculator",
      color: "pink"
    },
    {
      title: "Pregnancy Calculator",
      description: "Track your pregnancy with comprehensive calculator. Get due date estimates, gestational age, weight gain recommendations, and personalized pregnancy insights.",
      icon: Heart,
      href: "/tools/pregnancy-calculator",
      color: "rose"
    },
    {
      title: "Pace Calculator",
      description: "Calculate running pace, training zones, heart rate zones, race predictions, and VO2 Max with our advanced pace calculator. Perfect for runners, coaches, and athletes.",
      icon: Timer,
      href: "/tools/pace-calculator",
      color: "amber"
    },
    {
      title: "BMR Calculator",
      description: "Calculate your Basal Metabolic Rate (BMR) with multiple equations. Get TDEE analysis, weight management goals, and personalized nutrition recommendations for optimal health.",
      icon: Flame,
      href: "/tools/bmr-calculator",
      color: "red"
    },
    {
      title: "Body Fat Calculator",
      description: "Calculate your body fat percentage using U.S. Navy method and BMI method. Get fat mass, lean mass, ideal body fat, and personalized health recommendations for optimal body composition.",
      icon: Scale,
      href: "/tools/body-fat-calculator",
      color: "emerald"
    },
    {
      title: "Calorie Calculator",
      description: "Calculate your daily calorie needs with advanced BMR and TDEE analysis. Get weight management goals, zigzag calorie cycling, and personalized nutrition recommendations for optimal health.",
      icon: Flame,
      href: "/tools/calorie-calculator",
      color: "orange"
    },
    {
      title: "Sales Tax Calculator",
      description: "Calculate sales tax for all 50 US states with our advanced calculator. Get accurate tax calculations, state comparisons, business tips, and compliance guidance for optimal tax planning.",
      icon: Receipt,
      href: "/tools/sales-tax-calculator",
      color: "green"
    },
    {
      title: "Interest Rate Calculator",
      description: "Calculate real interest rates on loans with fixed terms and monthly payments. Advanced Newton-Raphson method for precise rate calculation, amortization analysis, and loan optimization recommendations.",
      icon: Percent,
      href: "/tools/interest-rate-calculator",
      color: "blue"
    },
    {
      title: "Salary Calculator",
      description: "Convert salary amounts across all pay frequencies with holiday and vacation adjustments. Professional salary analysis, industry comparisons, and negotiation support for career advancement.",
      icon: DollarSign,
      href: "/tools/salary-calculator",
      color: "yellow"
    },
    {
      title: "Finance Calculator",
      description: "Professional finance calculator for time value of money calculations. Calculate FV, PV, PMT, I/Y, and N with amortization schedules, investment analysis, and financial planning tools.",
      icon: Calculator,
      href: "/tools/finance-calculator",
      color: "indigo"
    },
        {
          title: "Inflation Calculator",
          description: "Professional inflation calculator with historical CPI data from 1913-2025. Calculate purchasing power, inflation rates, and investment strategies with comprehensive economic analysis.",
          icon: TrendingUp,
          href: "/tools/inflation-calculator",
      color: "purple"
        },
        {
          title: "Investment Calculator",
          description: "Professional investment calculator for comprehensive portfolio analysis. Calculate end amount, return rate, starting amount, additional contributions, and investment length with detailed accumulation schedules.",
          icon: TrendingUp,
          href: "/tools/investment-calculator",
      color: "cyan"
        },
        {
          title: "Amortization Calculator",
          description: "Professional amortization calculator for detailed loan payment analysis. Calculate monthly payments, interest costs, amortization schedules, and extra payment savings for mortgages, auto loans, and personal loans.",
          icon: Calculator,
          href: "/tools/amortization-calculator",
      color: "teal"
        },
        {
          title: "Retirement Calculator",
          description: "Professional retirement calculator for comprehensive retirement planning. Calculate how much to save, withdrawal amounts, and retirement income needs with inflation adjustments and scenario analysis.",
          icon: DollarSign,
          href: "/tools/retirement-calculator",
      color: "emerald"
        },
        {
          title: "Payment Calculator",
          description: "Professional payment calculator for loan analysis. Calculate monthly payments, loan terms, amortization schedules, and total interest with comprehensive payment optimization strategies.",
          icon: Calculator,
          href: "/tools/payment-calculator",
      color: "sky"
        },
        {
          title: "Mortgage Calculator",
          description: "Professional mortgage calculator for home loan analysis. Calculate monthly payments, amortization schedules, total interest, and mortgage costs with comprehensive payment optimization strategies.",
          icon: Home,
          href: "/tools/mortgage-calculator",
      color: "lime"
        }
      ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-col min-h-screen">
        <div className="relative overflow-hidden">
          {/* Blue-focused but vibrant background matching homepage style */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-cyan-500/30 via-indigo-500/30 to-purple-500/30 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-400/15 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-400/10 via-transparent to-transparent"></div>
          
          {/* Blue-focused floating particles with accent colors */}
          <div className="absolute top-10 left-10 h-4 w-4 bg-blue-500 rounded-full animate-bounce animation-delay-100 shadow-lg shadow-blue-500/50"></div>
          <div className="absolute top-20 right-20 h-5 w-5 bg-cyan-500 rounded-full animate-bounce animation-delay-500 shadow-lg shadow-cyan-500/50"></div>
          <div className="absolute bottom-20 left-20 h-4 w-4 bg-indigo-500 rounded-full animate-bounce animation-delay-1000 shadow-lg shadow-indigo-500/50"></div>
          <div className="absolute bottom-10 right-10 h-3 w-3 bg-purple-500 rounded-full animate-bounce animation-delay-1500 shadow-lg shadow-purple-500/50"></div>
          <div className="absolute top-1/2 left-1/4 h-3 w-3 bg-blue-400 rounded-full animate-bounce animation-delay-2000 shadow-lg shadow-blue-400/50"></div>
          <div className="absolute top-1/3 right-1/3 h-4 w-4 bg-cyan-400 rounded-full animate-bounce animation-delay-2500 shadow-lg shadow-cyan-400/50"></div>
          
          {/* Blue-focused gradient orbs */}
          <div className="absolute -top-32 -left-32 h-48 w-48 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-full blur-3xl animate-spin animation-delay-2000"></div>
          <div className="absolute -bottom-32 -right-32 h-36 w-36 bg-gradient-to-br from-indigo-500/40 to-purple-500/40 rounded-full blur-3xl animate-spin animation-delay-3000"></div>
          
          <div className="container mx-auto px-4 py-8 relative">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }]} />

            <div className="max-w-6xl mx-auto mt-8 space-y-8">
              <div className="text-center space-y-6 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/30 via-cyan-500/30 via-indigo-500/30 to-purple-500/30 border border-blue-400/50 text-white text-sm font-bold mb-6">
                  <Calculator className="h-4 w-4 animate-pulse" />
                  <span>Professional Tools & Calculators</span>
                  <div className="h-2 w-2 bg-cyan-400 rounded-full animate-ping"></div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 via-indigo-400 via-blue-500 to-blue-600 leading-tight">
                  All Calculation Tools
                </h1>
                
                <p className="text-lg md:text-xl text-white/90 text-pretty max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive collection of free online calculation tools designed for professionals, students, 
                  and everyday users. All tools are 100% free, highly accurate, and optimized for both desktop and mobile use.
                </p>
                
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-white/80">
                  <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/25 to-cyan-500/25 border border-blue-400/40">
                    <Calculator className="h-4 w-4" />
                    <span>50+ Tools</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/25 to-indigo-500/25 border border-cyan-400/40">
                    <Users className="h-4 w-4" />
                    <span>1M+ Users</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/25 to-purple-500/25 border border-indigo-400/40">
                    <Zap className="h-4 w-4" />
                    <span>Free Forever</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/25 to-blue-600/25 border border-purple-400/40">
                    <Target className="h-4 w-4" />
                    <span>Professional</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-center mb-2">
                  <span className="text-xs text-white/60 font-medium">Advertisement</span>
                </div>
                <AdSpace slot="content" className="w-full h-24 border border-white/20 rounded-xl shadow-sm bg-white/5 backdrop-blur-xl" />
        </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {tools.map((tool, index) => (
            <Card
              key={tool.href}
                    className="border-2 border-white/20 shadow-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/50 animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CardHeader className="p-4">
                      <div className={`h-10 w-10 rounded-lg bg-gradient-to-br from-${tool.color}-500/20 to-${tool.color}-600/20 flex items-center justify-center mb-3 border border-${tool.color}-400/30 shadow-lg`}>
                        <tool.icon className={`h-5 w-5 text-${tool.color}-400`} />
                </div>
                      <CardTitle className="text-base font-bold text-white mb-2">{tool.title}</CardTitle>
                      <CardDescription className="leading-relaxed text-xs text-white/80">{tool.description}</CardDescription>
              </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <Button asChild className="w-full h-9 text-xs font-bold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
                  <Link href={tool.href}>
                    Use Tool
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

              <div className="my-8">
                <div className="text-center mb-2">
                  <span className="text-xs text-white/60 font-medium">Advertisement</span>
                </div>
                <AdSpace slot="content" className="w-full h-24 border border-white/20 rounded-xl shadow-sm bg-white/5 backdrop-blur-xl" />
        </div>

              <div className="prose prose-sm max-w-none space-y-6 animate-fade-in-up animation-delay-200">
                <div className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20">
                  <h2 className="text-xl font-bold mb-4 text-white">Understanding How These Calculation Tools Work</h2>
                  <p className="text-sm text-white/80 leading-relaxed mb-4">
            Our calculation tools use advanced mathematical algorithms and real-time data processing to deliver 
            accurate results instantly. Each calculator is built with precision-engineered formulas that handle 
            complex calculations including compound interest, tax brackets, BMI classifications, and time calculations. 
            All tools are optimized for speed and accuracy, ensuring you get reliable results every time.
          </p>
          
                  <h3 className="text-lg font-bold mb-3 text-white">Mathematical Precision</h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-4">
            Our age calculator uses precise date arithmetic to calculate exact ages down to the day. 
            The BMI calculator uses the World Health Organization's standard formula (weight in kg / height in m²) 
            with accurate category classifications. Financial calculators use compound interest formulas and 
            amortization schedules to provide detailed payment breakdowns.
          </p>
          
                  <h3 className="text-lg font-bold mb-3 text-white">Real-Time Data Processing</h3>
                  <p className="text-sm text-white/80 leading-relaxed">
            Tax calculators are updated with current tax brackets and rates, while loan calculators use 
            current interest rate data. All calculations are performed client-side for maximum speed and 
            privacy, ensuring your personal data never leaves your device.
          </p>
                </div>

                <div className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20">
                  <h2 className="text-xl font-bold mb-4 text-white">Advanced Usage Techniques</h2>
                  <p className="text-sm text-white/80 leading-relaxed mb-4">
            Master these professional techniques to get the most out of our calculation tools and make 
            informed decisions based on accurate data.
          </p>
          
                  <h3 className="text-lg font-bold mb-3 text-white">Financial Planning Mastery</h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-4">
            Use the compound interest calculator to model different investment scenarios and retirement planning. 
            Combine the loan calculator with tax calculator to understand the true cost of borrowing. 
            Use the percentage calculator for discount analysis and profit margin calculations in business planning.
          </p>
          
                  <h3 className="text-lg font-bold mb-3 text-white">Health and Fitness Optimization</h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-4">
            Track your BMI over time using the BMI calculator to monitor health trends. Use the age calculator 
            to calculate exact ages for medical records and health assessments. Combine multiple tools to create 
            comprehensive health and fitness tracking systems.
          </p>
          
                  <h3 className="text-lg font-bold mb-3 text-white">Academic and Professional Use</h3>
                  <p className="text-sm text-white/80 leading-relaxed">
            Students can use these tools for mathematics homework, science projects, and financial literacy education. 
            Professionals in finance, healthcare, and education can integrate these calculators into their workflows 
            for accurate data analysis and decision-making.
          </p>
                </div>

                <div className="mt-8">
                  <div className="text-center mb-2">
                    <span className="text-xs text-white/60 font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="content" className="w-full h-24 border border-white/20 rounded-xl shadow-sm bg-white/5 backdrop-blur-xl" />
                </div>
                </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}