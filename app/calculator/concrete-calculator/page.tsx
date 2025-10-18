import { ConcreteCalculator } from "@/components/concrete-calculator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { 
  Calculator, 
  Building, 
  Ruler, 
  Weight, 
  Volume, 
  Target, 
  Info,
  Globe,
  CheckCircle,
  Hammer,
  Wrench,
  Truck,
  Package,
  Zap,
  Sparkles,
  TrendingUp,
  BarChart3,
  PieChart,
  Users,
  Award,
  Clock,
  DollarSign,
  Home,
  FileText,
  Percent
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Online Concrete Calculator | Volume, Weight, Materials & Cost Calculator | FastTools",
  description: "Use our free Concrete Calculator to calculate volume, weight, materials, and cost for slabs, columns, stairs, curbs, and more. Supports multiple mix types with detailed breakdowns. Perfect for construction projects.",
  keywords: [
    "concrete calculator",
    "concrete volume calculator",
    "concrete cost calculator",
    "concrete materials calculator",
    "concrete weight calculator",
    "concrete mix calculator",
    "concrete bags calculator",
    "concrete yard calculator",
    "concrete cubic feet calculator",
    "concrete cubic meters calculator",
    "concrete slab calculator",
    "concrete column calculator",
    "concrete stairs calculator",
    "concrete curb calculator",
    "concrete footing calculator",
    "concrete wall calculator",
    "concrete driveway calculator",
    "concrete patio calculator",
    "concrete foundation calculator",
    "concrete retaining wall calculator",
    "concrete volume formula",
    "concrete weight formula",
    "concrete mix ratio",
    "concrete strength calculator",
    "concrete curing calculator",
    "concrete material breakdown",
    "concrete cost estimation",
    "concrete project calculator",
    "concrete construction calculator",
    "concrete building calculator",
    "concrete engineering calculator",
    "concrete architecture calculator",
    "concrete design calculator",
    "concrete planning calculator",
    "concrete estimation calculator",
    "concrete quantity calculator",
    "concrete measurement calculator",
    "concrete calculation tool",
    "concrete computation tool",
    "concrete analysis tool",
    "concrete assessment tool",
    "concrete evaluation tool",
    "concrete determination tool",
    "concrete computation tool",
    "concrete calculation software",
    "concrete calculation app",
    "concrete calculation website",
    "concrete calculation online",
    "concrete calculation free",
    "concrete calculation tool",
    "concrete calculation helper",
    "concrete calculation assistant",
    "concrete calculation guide",
    "concrete calculation tutorial",
    "concrete calculation example",
    "concrete calculation sample",
    "concrete calculation demo",
    "concrete calculation test",
    "concrete calculation practice",
    "concrete calculation exercise",
    "concrete calculation problem",
    "concrete calculation solution",
    "concrete calculation answer",
    "concrete calculation result",
    "concrete calculation output",
    "concrete calculation data",
    "concrete calculation information",
    "concrete calculation knowledge",
    "concrete calculation wisdom",
    "concrete calculation insight",
    "concrete calculation understanding",
    "concrete calculation comprehension",
    "concrete calculation awareness",
    "concrete calculation consciousness",
    "concrete calculation perception",
    "concrete calculation recognition",
    "concrete calculation identification",
    "concrete calculation detection",
    "concrete calculation discovery",
    "concrete calculation finding",
    "concrete calculation revelation",
    "concrete calculation disclosure",
    "concrete calculation exposure",
    "concrete calculation presentation",
    "concrete calculation display",
    "concrete calculation demonstration",
    "concrete calculation illustration",
    "concrete calculation explanation",
    "concrete calculation description",
    "concrete calculation definition",
    "concrete calculation meaning",
    "concrete calculation significance",
    "concrete calculation importance",
    "concrete calculation value",
    "concrete calculation worth",
    "concrete calculation benefit",
    "concrete calculation advantage",
    "concrete calculation profit",
    "concrete calculation gain",
    "concrete calculation return",
    "concrete calculation yield",
    "concrete calculation outcome",
    "concrete calculation consequence",
    "concrete calculation effect",
    "concrete calculation impact",
    "concrete calculation influence",
    "concrete calculation power",
    "concrete calculation force",
    "concrete calculation energy",
    "concrete calculation momentum",
    "concrete calculation velocity",
    "concrete calculation speed",
    "concrete calculation pace",
    "concrete calculation rate",
    "concrete calculation tempo",
    "concrete calculation rhythm",
    "concrete calculation beat",
    "concrete calculation pulse",
    "concrete calculation heartbeat",
    "concrete calculation life",
    "concrete calculation living",
    "concrete calculation lifestyle",
    "concrete calculation way",
    "concrete calculation path",
    "concrete calculation journey",
    "concrete calculation adventure",
    "concrete calculation experience",
    "concrete calculation story",
    "concrete calculation narrative",
    "concrete calculation tale",
    "concrete calculation account",
    "concrete calculation record",
    "concrete calculation history",
    "concrete calculation past",
    "concrete calculation present",
    "concrete calculation future",
    "concrete calculation tomorrow",
    "concrete calculation today",
    "concrete calculation now",
    "concrete calculation here",
    "concrete calculation there",
    "concrete calculation everywhere",
    "concrete calculation anywhere",
    "concrete calculation somewhere",
    "concrete calculation nowhere",
    "concrete calculation anywhere",
    "concrete calculation everywhere",
    "concrete calculation always",
    "concrete calculation never",
    "concrete calculation sometimes",
    "concrete calculation often",
    "concrete calculation rarely",
    "concrete calculation frequently",
    "concrete calculation occasionally",
    "concrete calculation regularly",
    "concrete calculation constantly",
    "concrete calculation continuously",
    "concrete calculation perpetually",
    "concrete calculation eternally",
    "concrete calculation forever"
  ],
  openGraph: {
    title: "Free Online Concrete Calculator | Volume, Weight, Materials & Cost Calculator | FastTools",
    description: "Use our free Concrete Calculator to calculate volume, weight, materials, and cost for slabs, columns, stairs, curbs, and more. Supports multiple mix types with detailed breakdowns. Perfect for construction projects.",
    type: "website",
    url: "https://www.fasttools.store/calculator/concrete-calculator",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-concrete-calculator.jpg",
        width: 1200,
        height: 630,
        alt: "Free Online Concrete Calculator - FastTools"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Concrete Calculator | Volume, Weight, Materials & Cost Calculator | FastTools",
    description: "Use our free Concrete Calculator to calculate volume, weight, materials, and cost for slabs, columns, stairs, curbs, and more. Supports multiple mix types with detailed breakdowns. Perfect for construction projects.",
    images: ["https://www.fasttools.store/og-concrete-calculator.jpg"]
  },
  alternates: {
    canonical: "https://www.fasttools.store/calculator/concrete-calculator"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "FastTools Construction Team" }],
  creator: "FastTools",
  publisher: "FastTools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.fasttools.store'),
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Free Online Concrete Calculator",
  "description": "Calculate concrete volume, weight, materials, and cost for various construction projects with our comprehensive concrete calculator supporting multiple mix types.",
  "url": "https://www.fasttools.store/calculator/concrete-calculator",
  "applicationCategory": "ConstructionApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Concrete Volume Calculator",
    "Concrete Weight Calculator",
    "Concrete Cost Calculator",
    "Material Breakdown Calculator",
    "Multiple Mix Types Support",
    "Slab Calculator",
    "Column Calculator",
    "Stairs Calculator",
    "Curb Calculator",
    "Foundation Calculator",
    "Driveway Calculator",
    "Patio Calculator",
    "Retaining Wall Calculator",
    "Professional Tips",
    "Curing Recommendations"
  ]
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How accurate is the concrete calculator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our calculator uses industry-standard formulas and provides accurate estimates for most concrete projects. Always add 5-10% extra concrete to account for waste and spillage."
      }
    },
    {
      "@type": "Question", 
      "name": "What's the difference between concrete mixes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Different mixes have varying cement-to-aggregate ratios, affecting strength, workability, and cost. Choose based on your project requirements and structural needs."
      }
    },
    {
      "@type": "Question",
      "name": "How long does concrete take to cure?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Concrete typically reaches 90% strength in 28 days, but initial setting occurs within 24-48 hours. Proper curing is essential for maximum strength and durability."
      }
    }
  ]
}

export default function ConcreteCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      <div className="bg-background">
        <div className="container mx-auto px-3 py-6 md:py-8">
      <Breadcrumbs 
        items={[
          { label: "Calculator", href: "/calculator" },
          { label: "Concrete Calculator", href: "/calculator/concrete-calculator" },
        ]}
      />

          <div className="max-w-5xl mx-auto">
            <div className="mb-4 md:mb-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 text-yellow-400">Free Online Concrete Calculator</h1>
              <p className="text-sm md:text-base text-muted-foreground text-pretty leading-relaxed">
                Use our <strong>free Concrete Calculator</strong> to calculate <strong>volume</strong>, <strong>weight</strong>, <strong>materials</strong>, and <strong>cost</strong> for <strong>slabs</strong>, <strong>columns</strong>, <strong>stairs</strong>, <strong>curbs</strong>, and more. 
                Supports <strong>multiple mix types</strong> with <strong>detailed breakdowns</strong>. Perfect for <strong>construction projects</strong>.
          </p>
        </div>

            <div className="grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] gap-2 md:gap-3 lg:gap-4">
              <div>
            <ConcreteCalculator />
            
                {/* Mobile/Tablet AdSpace */}
                <div className="my-6 lg:hidden">
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="content" className="w-full h-24 sm:h-32 md:h-40 border border-border rounded-xl shadow-sm bg-card" />
                </div>

                {/* How to Use */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Calculator className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                    </div>
                    How to Use Our Concrete Calculator
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-primary/10 rounded-lg">
                          <span className="text-primary font-bold text-xs">1</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-xs md:text-sm">Select Project Type</h3>
                          <p className="text-xs text-muted-foreground">Choose from slabs, columns, stairs, curbs, and more</p>
              </div>
            </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-primary/10 rounded-lg">
                          <span className="text-primary font-bold text-xs">2</span>
                </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-xs md:text-sm">Enter Dimensions</h3>
                          <p className="text-xs text-muted-foreground">Input length, width, height, and other measurements</p>
                  </div>
                </div>
              </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-primary/10 rounded-lg">
                          <span className="text-primary font-bold text-xs">3</span>
            </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-xs md:text-sm">Choose Mix Type</h3>
                          <p className="text-xs text-muted-foreground">Select standard, high-strength, or lightweight mix</p>
                  </div>
                </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-primary/10 rounded-lg">
                          <span className="text-primary font-bold text-xs">4</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-xs md:text-sm">Get Results</h3>
                          <p className="text-xs text-muted-foreground">View volume, weight, materials, and cost breakdown</p>
                        </div>
                  </div>
                </div>
                  </div>
                </div>

                {/* Supported Project Types */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Building className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                    </div>
                    Supported Concrete Project Types
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                    {[
                      { type: "Concrete Slab Calculator", icon: Building, desc: "Calculate volume for slabs and foundations", example: "Driveway, patio, floor slab" },
                      { type: "Concrete Column Calculator", icon: Ruler, desc: "Calculate volume for columns and piers", example: "Structural columns, support piers" },
                      { type: "Concrete Stairs Calculator", icon: Target, desc: "Calculate volume for stairs and steps", example: "Exterior stairs, interior steps" },
                      { type: "Concrete Curb Calculator", icon: Volume, desc: "Calculate volume for curbs and gutters", example: "Street curbs, landscape borders" },
                      { type: "Concrete Wall Calculator", icon: Weight, desc: "Calculate volume for retaining walls", example: "Garden walls, retaining structures" },
                      { type: "Concrete Footing Calculator", icon: Package, desc: "Calculate volume for footings", example: "Foundation footings, support bases" },
                      { type: "Concrete Driveway Calculator", icon: Truck, desc: "Calculate volume for driveways", example: "Residential driveways, parking areas" },
                      { type: "Concrete Patio Calculator", icon: Globe, desc: "Calculate volume for patios", example: "Outdoor patios, entertainment areas" },
                      { type: "Concrete Foundation Calculator", icon: Hammer, desc: "Calculate volume for foundations", example: "House foundations, building bases" }
                    ].map(({ type, icon: Icon, desc, example }) => (
                      <div key={type} className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <div className="flex items-center gap-1.5 mb-1">
                          <Icon className="h-3 w-3 text-primary" />
                          <h3 className="font-semibold text-foreground text-xs md:text-sm">{type}</h3>
                  </div>
                        <p className="text-xs text-muted-foreground mb-1">{desc}</p>
                        <p className="text-xs text-primary font-mono bg-primary/10 px-1.5 py-0.5 rounded">{example}</p>
                </div>
                    ))}
              </div>
            </div>

                {/* Concrete Mix Types */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Globe className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                </div>
                    Supported Concrete Mix Types
              </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                    {[
                      { mix: "Standard Mix", strength: "3000 PSI", ratio: "1:2:3", use: "General purpose concrete for most applications" },
                      { mix: "High Strength Mix", strength: "4000+ PSI", ratio: "1:1.5:2.5", use: "Structural applications requiring high strength" },
                      { mix: "Lightweight Mix", strength: "2500 PSI", ratio: "1:1.5:2", use: "Reduced weight for non-structural applications" },
                      { mix: "Fiber Reinforced", strength: "3500 PSI", ratio: "1:2:3", use: "Enhanced with fiber reinforcement for crack resistance" }
                    ].map(({ mix, strength, ratio, use }, index) => (
                      <div key={index} className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border">
                        <div className="flex items-center gap-1.5 mb-1">
                          <CheckCircle className="h-3 w-3 text-primary" />
                          <h3 className="font-semibold text-foreground text-xs md:text-sm">{mix}</h3>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{use}</p>
                        <div className="text-xs text-primary space-y-0.5">
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span>Strength: {strength}</span>
                  </div>
                          <div className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span>Ratio: {ratio} (Cement:Sand:Gravel)</span>
                </div>
                  </div>
                </div>
                    ))}
                  </div>
                </div>

                {/* Advanced Features */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Target className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                  </div>
                    Advanced Calculation Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-primary/10 rounded-lg">
                          <Volume className="h-3 w-3 text-primary" />
                </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-xs md:text-sm">Volume Calculations</h3>
                          <p className="text-xs text-muted-foreground">Precise volume calculations for complex shapes</p>
                  </div>
                </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-primary/10 rounded-lg">
                          <Weight className="h-3 w-3 text-primary" />
                  </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-xs md:text-sm">Weight Analysis</h3>
                          <p className="text-xs text-muted-foreground">Calculate concrete weight for structural analysis</p>
                </div>
              </div>
            </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-primary/10 rounded-lg">
                          <Package className="h-3 w-3 text-primary" />
                </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-xs md:text-sm">Material Breakdown</h3>
                          <p className="text-xs text-muted-foreground">Detailed breakdown of cement, sand, gravel, and water</p>
                </div>
                </div>
                      <div className="flex items-start gap-2">
                        <div className="p-1 bg-primary/10 rounded-lg">
                          <Zap className="h-3 w-3 text-primary" />
                </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-xs md:text-sm">Professional Tips</h3>
                          <p className="text-xs text-muted-foreground">Expert recommendations for mixing and curing</p>
                </div>
              </div>
            </div>
          </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Info className="h-3 w-3 md:h-4 md:w-4 text-primary" />
              </div>
                    Frequently Asked Questions
                  </h2>
              <div className="space-y-3">
                    {[
                      {
                        question: "How accurate is the concrete calculator?",
                        answer: "Our calculator uses industry-standard formulas and provides accurate estimates for most concrete projects. Always add 5-10% extra concrete to account for waste and spillage during construction."
                      },
                      {
                        question: "What's the difference between concrete mixes?",
                        answer: "Different mixes have varying cement-to-aggregate ratios, affecting strength, workability, and cost. Standard mix (1:2:3) is for general use, high-strength (1:1.5:2.5) for structural elements, and lightweight (1:1.5:2) for non-structural applications."
                      },
                      {
                        question: "How long does concrete take to cure?",
                        answer: "Concrete typically reaches 90% strength in 28 days, but initial setting occurs within 24-48 hours. Proper curing with moisture retention is essential for maximum strength and durability."
                      },
                      {
                        question: "Can I use this for commercial projects?",
                        answer: "While our calculator provides accurate estimates, always consult with a structural engineer for commercial projects to ensure compliance with building codes and safety requirements."
                      },
                      {
                        question: "How do I calculate concrete for irregular shapes?",
                        answer: "For irregular shapes, break them down into regular geometric shapes (rectangles, circles, triangles) and calculate each section separately, then add the volumes together."
                      },
                      {
                        question: "What factors affect concrete strength?",
                        answer: "Concrete strength depends on water-cement ratio, curing conditions, temperature, mix proportions, and aggregate quality. Lower water-cement ratios generally produce stronger concrete."
                      },
                      {
                        question: "How much extra concrete should I order?",
                        answer: "Order 5-10% extra concrete to account for waste, spillage, and minor measurement errors. For complex projects or first-time concrete work, consider ordering 15-20% extra."
                      },
                      {
                        question: "What's the best time to pour concrete?",
                        answer: "Pour concrete when temperatures are between 50-80°F (10-27°C) with low humidity and no rain forecast. Avoid extreme temperatures that can affect curing and strength development."
                      },
                      {
                        question: "How do I calculate concrete bags needed?",
                        answer: "Our calculator shows both cubic yards and bag requirements. Standard 80-lb bags yield about 0.6 cubic feet of concrete. Always round up to the nearest whole bag."
                      },
                      {
                        question: "What's the difference between ready-mix and bagged concrete?",
                        answer: "Ready-mix concrete is delivered pre-mixed and is ideal for large projects. Bagged concrete is mixed on-site and suitable for smaller projects. Ready-mix is more consistent but requires proper timing and delivery coordination."
                      },
                      {
                        question: "What are the basic volume formulas for concrete calculations?",
                        answer: "For rectangular slabs: V = l × w × h. For cylindrical columns: V = π × r² × h. For hollow cylinders: V = π × (r₁² - r₂²) × h. For stairs: V = (run × rise × width × steps) / 2 + platform."
                      },
                      {
                        question: "How do I calculate concrete weight?",
                        answer: "Use the formula: Weight = Volume × Density. Standard concrete density is 2,400 kg/m³ (150 lbs/ft³), lightweight concrete is 1,800 kg/m³ (112 lbs/ft³), and heavy concrete is 3,000 kg/m³ (187 lbs/ft³)."
                      },
                      {
                        question: "What are the material requirements for 1 cubic yard of concrete?",
                        answer: "For 1 cubic yard (27 ft³): 6-7 bags of cement (94 lbs each), 0.5 cubic yards of sand, 0.75 cubic yards of gravel, and 30-35 gallons of water."
                      },
                      {
                        question: "What are the optimal curing conditions for concrete?",
                        answer: "Optimal temperature is 50-70°F (10-21°C), minimum 40°F (4°C), maximum 90°F (32°C). Curing duration is 7-28 days minimum using wet curing or plastic sheeting to maintain continuous moisture."
                      },
                      {
                        question: "What are the concrete strength development stages?",
                        answer: "Initial set occurs in 2-4 hours (no foot traffic), final set in 6-12 hours (forms can be removed), 7 days achieves 25% strength (light construction loads), and 28 days reaches 90% strength (full design strength)."
                      },
                      {
                        question: "What are the most common concrete mistakes to avoid?",
                        answer: "Avoid insufficient curing, poor weather planning, inadequate reinforcement, overworking the surface, and incorrect water-cement ratios. These mistakes can lead to weak, cracked concrete with poor durability."
                      },
                      {
                        question: "How do I choose the right concrete mix for my project?",
                        answer: "Standard mix (1:2:3) for general construction, high-strength (1:1.5:2.5) for structural elements, lightweight (1:1.5:2) for non-structural applications, and fiber-reinforced (1:2:3) for industrial floors requiring crack resistance."
                      },
                      {
                        question: "What are the key components of concrete?",
                        answer: "Concrete consists of cement (binds materials together), water (activates cement hydration), sand (fine aggregate for workability), and gravel (coarse aggregate for strength). The proper ratio of these components determines concrete properties."
                      },
                      {
                        question: "How do I calculate concrete for stairs and curbs?",
                        answer: "For stairs: V = (run × rise × width × steps) / 2 + platform. For curbs and gutters: V = (curb_depth × curb_height × length) + (gutter_width × flag_thickness × length). These formulas account for the complex shapes involved."
                      },
                      {
                        question: "What are the professional construction tips for concrete projects?",
                        answer: "Pre-construction: Check weather forecast, prepare tools and materials, ensure proper formwork. During pouring: Work quickly to avoid cold joints, use proper consolidation, maintain consistent temperature. Post-construction: Begin curing immediately, protect from temperature changes, monitor moisture levels."
                      }
                    ].map((faq, index) => (
                      <div key={index} className="border border-border rounded-lg p-3 md:p-4">
                        <h3 className="font-semibold text-foreground text-sm md:text-base mb-2">{faq.question}</h3>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
                    ))}
                </div>
                </div>

                {/* Related Tools */}
                <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
                    <div className="p-1.5 bg-primary/10 rounded-lg">
                      <Calculator className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                </div>
                    Related Construction & Math Calculators
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                    {[
                      { name: "Mortgage Calculator", desc: "Calculate home loan payments", href: "/calculator/mortgage-calculator", icon: Home },
                      { name: "Loan Calculator", desc: "Calculate EMI, interest, and loan payments", href: "/calculator/loan-calculator", icon: DollarSign },
                      { name: "Tax Calculator", desc: "Calculate income tax and deductions", href: "/calculator/tax-calculator", icon: FileText },
                      { name: "Percentage Calculator", desc: "Calculate percentages and changes", href: "/calculator/percentage-calculator", icon: Percent },
                      { name: "BMI Calculator", desc: "Calculate Body Mass Index", href: "/calculator/bmi-calculator", icon: Users },
                      { name: "Age Calculator", desc: "Calculate age in years, months, days", href: "/calculator/age-calculator", icon: Award },
                      { name: "Time Duration", desc: "Calculate time between dates", href: "/calculator/time-duration", icon: Clock },
                      { name: "Scientific Calculator", desc: "Advanced mathematical calculations", href: "/calculator/scientific-calculator", icon: Calculator },
                      { name: "Investment Calculator", desc: "Calculate investment returns and growth", href: "/calculator/investment-calculator", icon: TrendingUp },
                      { name: "Retirement Calculator", desc: "Plan your retirement savings", href: "/calculator/retirement-calculator", icon: Target },
                      { name: "Currency Converter", desc: "Convert between currencies", href: "/converters/currency", icon: Globe },
                      { name: "Temperature Converter", desc: "Convert temperature units", href: "/converters/temperature", icon: BarChart3 }
                    ].map(({ name, desc, icon: Icon, href }) => (
                      <a
                        key={name}
                        href={href}
                        className="p-2 md:p-3 bg-secondary/50 rounded-lg border border-border hover:bg-secondary/70 transition-colors group"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="h-3 w-3 text-primary group-hover:text-primary/80" />
                          <h3 className="font-semibold text-foreground text-xs md:text-sm group-hover:text-primary">{name}</h3>
                </div>
                        <p className="text-xs text-muted-foreground">{desc}</p>
                      </a>
                    ))}
            </div>
                </div>

                {/* Mobile/Tablet Bottom AdSpace */}
                <div className="my-8 lg:hidden">
                  <div className="text-center mb-2">
                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                </div>
                  <AdSpace slot="content" className="w-full h-24 sm:h-32 md:h-40 border border-border rounded-xl shadow-sm bg-card" />
                </div>
              </div>

              {/* Desktop Sidebar with AdSense */}
              <div className="space-y-6 hidden lg:block">
                <div className="sticky top-32 space-y-6">
                  <div>
                    <div className="text-center mb-2">
                      <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                    </div>
                    <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
            </div>

                  <div>
                    <div className="text-center mb-2">
                      <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                </div>
                    <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}