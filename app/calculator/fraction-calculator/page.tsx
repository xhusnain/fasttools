import { Metadata } from "next"
import FractionCalculator from "@/components/fraction-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { GHeader } from "@/components/globalcomponents/gheader"
import { Button } from "@/components/ui/button"
import { 
  Calculator, 
  Plus, 
  Minus, 
  X, 
  Divide,
  Brain,
  Square
} from "lucide-react"

export const metadata: Metadata = {
  title: "FastTools - Fraction Calculator | Free Add, Subtract, Multiply & Divide",
  description: "FastTools Fraction Calculator - Advanced calculator with addition, subtraction, multiplication, division, simplification, and conversion between fractions and decimals. Free online math tool.",
  keywords: [
      "fasttools",
      "fast tools",
      "fraction calculator",
      "fractions calculator",
      "fraction calculator online",
      "free fraction calculator",
      "fraction calculator with steps",
      "fraction math calculator",
      "fraction solver",
      "fraction simplifier",
      "fraction addition calculator",
      "fraction subtraction calculator",
      "fraction multiplication calculator",
      "fraction division calculator",
      "fraction operations calculator",
      "fraction calculator add subtract multiply divide",
      "fraction calculator step by step",
      "fraction to decimal calculator",
      "decimal to fraction calculator",
      "simplify fractions",
      "reduce fractions calculator",
      "fraction simplification tool",
      "mixed number calculator",
      "fraction calculator for students",
      "fraction calculator for teachers",
      "fraction calculator for school",
      "fraction calculator for homework",
      "fraction calculator for algebra",
      "fraction calculator for geometry",
      "fraction formulas",
      "fraction equations",
      "fraction rules",
      "fraction math steps",
      "fraction learning tool",
      "how to calculate fractions online",
      "how to simplify fractions",
      "how to add fractions with different denominators",
      "online calculator for fractions",
      "fraction calculator with common denominator",
      "step by step fraction solver"
  ],
  authors: [{ name: "FastTools" }],
  creator: "FastTools",
  publisher: "FastTools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.fasttools.store'),
  alternates: {
    canonical: '/calculator/fraction-calculator',
  },
  openGraph: {
    title: "Fraction Calculator | Free Online Math Tool",
    description: "Advanced fraction calculator with addition, subtraction, multiplication, division, simplification, and conversion between fractions and decimals.",
    url: 'https://www.fasttools.store/calculator/fraction-calculator',
    siteName: 'FastTools',
    images: [
      {
        url: 'https://www.fasttools.store/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Fraction Calculator - FastTools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fraction Calculator | Free Online Math Tool",
    description: "Advanced fraction calculator with addition, subtraction, multiplication, division, simplification, and conversion between fractions and decimals.",
    images: ['https://www.fasttools.store/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

}

export default function FractionCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Fraction Calculator",
            description: "Advanced fraction calculator with addition, subtraction, multiplication, division, simplification, and conversion between fractions and decimals.",
            url: "https://www.fasttools.store/calculator/fraction-calculator",
            applicationCategory: "MathApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD"
            },
            featureList: [
              "Fraction addition and subtraction",
              "Fraction multiplication and division", 
              "Fraction simplification",
              "Decimal to fraction conversion",
              "Fraction to decimal conversion",
              "Mixed number calculations",
              "Step-by-step solutions",
              "Fraction type classification"
            ]
          })
        }}
      />

      <div className="bg-card">
        <div className="container mx-auto px-3 py-6 md:py-8">
          <div className="max-w-7xl mx-auto">
            <Breadcrumbs items={[
              { label: "Calculator", href: "/calculator" },
              { label: "Fraction Calculator", href: "/calculator/fraction-calculator" }
            ]} />

            <div className="mb-4 md:mb-6">
              <GHeader 
                title="Fraction Calculator - Free Online Math Tool"
                description="Advanced fraction calculator with addition, subtraction, multiplication, division, simplification, and conversion between fractions and decimals. Perfect for students, teachers, and professionals."
                titleSize="medium"
              />
                </div>

            {/* Mobile/Tablet AdSpace after GHeader */}
            <div className="my-6 lg:hidden">
              <div className="text-center mb-2">
                <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
              </div>
              <AdSpace slot="content" className="w-full h-24 sm:h-32 md:h-40 border border-border rounded-xl shadow-sm bg-card" />
            </div>

            {/* Main Content - Calculator and Sidebar in One Line */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] gap-4 md:gap-6 lg:gap-4">
              <div className="space-y-6">
                <FractionCalculator />

                <div className="space-y-6 mt-6 md:mt-8">
                  <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                    <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                      <Calculator className="h-5 w-5 text-foreground" />
                      How to Use Fraction Calculator
                    </h2>
                    <div className="space-y-4 text-sm text-muted-foreground">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-heading-accent">Step 1: Select Operation</h3>
                          <p className="mb-4">Choose from addition (+), subtraction (-), multiplication (×), or division (÷).</p>
                          <div className="grid grid-cols-2 gap-2">
                            <Button size="sm" variant="outline" className="text-xs justify-start border-border bg-card text-foreground hover:bg-secondary">
                              <Plus className="h-3 w-3 mr-2" />Add
                            </Button>
                            <Button size="sm" variant="outline" className="text-xs justify-start border-border bg-card text-foreground hover:bg-secondary">
                              <Minus className="h-3 w-3 mr-2" />Subtract
                            </Button>
                            <Button size="sm" variant="outline" className="text-xs justify-start border-border bg-card text-foreground hover:bg-secondary">
                              <X className="h-3 w-3 mr-2" />Multiply
                            </Button>
                            <Button size="sm" variant="outline" className="text-xs justify-start border-border bg-card text-foreground hover:bg-secondary">
                              <Divide className="h-3 w-3 mr-2" />Divide
                            </Button>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-3 text-heading-accent">Step 2: Enter Fractions</h3>
                          <p className="mb-4">Input the numerator and denominator for both fractions. The calculator will automatically calculate the result.</p>
                          <div className="bg-muted border border-border p-3 rounded-lg text-sm">
                            <div className="text-center font-mono text-foreground">3/4 + 1/6 = 11/12</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                    <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                      <Plus className="h-5 w-5 text-foreground" />
                      Fraction Operations & Properties
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-heading-accent">Addition & Subtraction</h3>
                        <p className="mb-4">Fractions require a common denominator. The calculator finds the least common multiple (LCM) automatically.</p>
                        <div className="bg-muted border border-border p-3 rounded-lg text-sm">
                          <div className="font-mono text-foreground">3/4 + 1/6 = (3×6)/(4×6) + (1×4)/(6×4) = 18/24 + 4/24 = 22/24 = 11/12</div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-heading-accent">Multiplication & Division</h3>
                        <p className="mb-4">Multiply numerators and denominators directly. For division, multiply by the reciprocal.</p>
                        <div className="bg-muted border border-border p-3 rounded-lg text-sm">
                          <div className="font-mono text-foreground">2/5 × 3/7 = (2×3)/(5×7) = 6/35</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                    <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                      <Brain className="h-5 w-5 text-foreground" />
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-heading-accent mb-2">
                          Why are fractions fundamental to mathematical understanding?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Fractions express partial quantities through a ratio format with a top number (numerator) and bottom number (denominator). 
                          They enable precise representation of values that fall between integers, support ratio calculations, percentage conversions, 
                          and are crucial in practical scenarios including culinary measurements, engineering specifications, and analytical computations.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-heading-accent mb-2">
                          What method should I use when adding fractions that have different bottom numbers?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Identify the smallest common multiple of the denominators, then rewrite each fraction using that shared denominator before combining the top numbers. 
                          Our calculator performs these conversions automatically. Example calculation: 1/3 + 1/4 = 4/12 + 3/12 = 7/12.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-heading-accent mb-2">
                          What is the process for transforming decimal numbers into fractional form?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Express the decimal value as a ratio where the denominator reflects the place value (e.g., 0.5 = 5/10, 0.25 = 25/100), 
                          then reduce the fraction by dividing both parts by their greatest common factor. For instance, 0.5 simplifies to 1/2.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-heading-accent mb-2">
                          What's the difference between proper and improper fractions?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          A proper fraction has a numerator smaller than the denominator (e.g., 3/4), while an improper fraction 
                          has a numerator equal to or larger than the denominator (e.g., 5/4). Improper fractions can be converted to mixed numbers.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-heading-accent mb-2">
                          Why do I need to learn fractions if I have a calculator?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Understanding fractions helps you interpret results, catch errors, and solve problems when calculators aren't available. 
                          It also builds mathematical thinking skills essential for advanced topics like algebra and calculus.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-heading-accent mb-2">
                          How can I practice fractions effectively?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Start with simple problems and gradually increase complexity. Use visual aids like pie charts and number lines, 
                          practice with real-world examples, and use our fraction calculator to check your work and build confidence.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-heading-accent mb-2">
                          How can I identify fractions that represent the same numerical value?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Fractions with identical values but different representations are called equivalent fractions (e.g., 2/4 = 1/2 = 4/8). 
                          Create equivalent fractions by applying the same multiplication or division operation to both the top and bottom numbers using any non-zero value.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-heading-accent mb-2">
                          How do I simplify fractions to their lowest terms?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          To simplify fractions, find the greatest common divisor (GCD) of the numerator and denominator, then divide both by the GCD. 
                          For example, 8/12 simplifies to 2/3 because the GCD of 8 and 12 is 4.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-heading-accent mb-2">
                          What is the least common denominator (LCD) and why is it important?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          The LCD is the smallest number that is a multiple of all denominators in a set of fractions. It's essential for adding and subtracting 
                          fractions with different denominators, as it allows you to convert them to equivalent fractions with the same denominator.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-heading-accent mb-2">
                          How do I multiply fractions step by step?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          To multiply fractions: 1) Multiply the numerators together, 2) Multiply the denominators together, 3) Simplify the result if possible. 
                          For example, 2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-heading-accent mb-2">
                          What technique is used when dividing one fraction by another?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Division of fractions is performed by taking the inverse of the divisor (swapping numerator and denominator) and then multiplying. 
                          For instance, 3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8 = 1 7/8.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-heading-accent mb-2">
                          What are the common fraction operations used in real life?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Fraction operations are used in cooking (recipe scaling), construction (measurements), finance (interest calculations), 
                          science (concentration ratios), and many other fields where precise part-to-whole relationships are important.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-heading-accent mb-2">
                          What steps are required to transform a mixed number into an improper fraction?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          The conversion process involves: first, multiplying the whole number portion by the fractional denominator, next, adding that product to the existing numerator, 
                          finally, writing that sum over the original denominator. Example: 3 2/5 = (3×5 + 2)/5 = 17/5.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-heading-accent mb-2">
                          What is the formula for expressing fractions as percentages?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Transform a fraction into a percentage by performing division between the top and bottom numbers, then scaling the result by 100. 
                          For instance, 1/2 = 0.50 = 50%. This calculator performs these transformations instantly.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-heading-accent mb-2">
                          What are complex fraction problems and how do I solve them?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Complex fraction problems involve multiple operations in sequence. Break them down step by step, follow the order of operations (PEMDAS), 
                          and use visual representations when helpful. For example: (2/3 + 1/4) × (3/5 - 1/2) = 11/12 × 1/10 = 11/120.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-heading-accent mb-2">
                          How accurate are fraction calculator results?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Our calculator provides exact fraction results using precise mathematical algorithms. For decimal conversions, 
                          results are accurate to 6 decimal places, which is sufficient for most academic and professional applications.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-heading-accent mb-2">
                          What are the key features of a professional fraction calculator?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Professional fraction calculators should support all four operations (addition, subtraction, multiplication, division), 
                          handle mixed numbers, provide step-by-step solutions, convert between fractions and decimals, simplify results, 
                          and work with both proper and improper fractions.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-heading-accent mb-2">
                          How do fractions appear in everyday life?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Fractions appear in time (quarter past 3), money (half dollar), sports (three-quarters of the game), 
                          cooking (3/4 cup of flour), construction (5/8 inch thickness), and measurements (half inch). Understanding fractions helps you navigate the world more effectively!
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-heading-accent mb-2">
                          What are the different types of fractions I should know?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          The main types are: proper fractions (numerator &lt; denominator), improper fractions (numerator ≥ denominator), 
                          mixed numbers (whole number + fraction), and equivalent fractions (same value, different form). Each type has specific uses and conversion methods.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-heading-accent mb-2">
                          How do I solve fraction word problems?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          For fraction word problems: 1) Read carefully and identify what's being asked, 2) Determine which operation to use, 
                          3) Set up the problem with fractions, 4) Solve step by step, 5) Check your answer makes sense in the original context.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-heading-accent mb-2">
                          Can I use this calculator for complex fraction expressions?
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Yes! Our calculator can handle complex expressions involving multiple operations, mixed numbers, and various fraction types. 
                          It automatically follows the order of operations and provides step-by-step solutions for educational purposes.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Related Tools Section */}
                  <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                    <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-foreground">
                      <Square className="h-5 w-5 text-foreground" />
                      Related Math & Calculator Tools
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { name: "Percentage Calculator", desc: "Calculate percentages and changes", href: "/calculator/percentage-calculator", icon: "📊" },
                        { name: "Scientific Calculator", desc: "Advanced mathematical calculations", href: "/calculator/scientific-calculator", icon: "🧮" },
                        { name: "Triangle Calculator", desc: "Calculate triangle properties", href: "/calculator/triangle-calculator", icon: "📐" },
                        { name: "BMI Calculator", desc: "Calculate Body Mass Index", href: "/calculator/bmi-calculator", icon: "⚖️" },
                        { name: "Age Calculator", desc: "Calculate age in years, months, days", href: "/calculator/age-calculator", icon: "🎂" },
                        { name: "Time Duration", desc: "Calculate time between dates", href: "/calculator/time-duration", icon: "⏰" },
                        { name: "Mortgage Calculator", desc: "Calculate home loan payments", href: "/calculator/mortgage-calculator", icon: "🏠" },
                        { name: "Loan Calculator", desc: "Calculate loan payments and interest", href: "/calculator/loan-calculator", icon: "💰" },
                        { name: "Tax Calculator", desc: "Calculate taxes and deductions", href: "/calculator/tax-calculator", icon: "🧾" },
                        { name: "Compound Interest", desc: "Calculate compound interest growth", href: "/calculator/compound-interest", icon: "📈" },
                        { name: "GPA Calculator", desc: "Calculate grade point average", href: "/calculator/gpa-calculator", icon: "🎓" }
                      ].map(({ name, desc, icon, href }) => (
                        <a
                          key={href}
                          href={href}
                          className="p-3 bg-card rounded-lg border border-border hover:bg-secondary hover:border-heading-accent-border/50 transition-colors group"
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg">{icon}</span>
                            <h3 className="font-semibold text-sm text-heading-accent group-hover:text-heading-accent">{name}</h3>
                          </div>
                          <p className="text-xs text-muted-foreground group-hover:text-foreground">{desc}</p>
                        </a>
                      ))}
                    </div>
                  </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
