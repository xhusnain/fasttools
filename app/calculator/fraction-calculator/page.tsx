import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import FractionCalculator from "@/components/calculators/fraction-calculator"
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, Plus, Minus, X, Divide, Brain, Square } from "lucide-react"

const baseMetadata = createMetadata({
  title: "Fraction Calculator - Solve Math Problems",
  description:
    "FastTools Fraction Calculator - Advanced calculator with addition, subtraction, multiplication, division, simplification, and conversion between fractions and decimals. Free online math tool.",
  path: "/calculator/fraction-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "Fraction Calculator", href: "/calculator/fraction-calculator" }
  ],
  schemaOptions: {
    name: "Fraction Calculator",
    alternateName: "Fraction Operations Calculator",
    applicationCategory: "MathApplication",
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
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Math",
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
  ]
}

export default function FractionCalculatorPage() {
  const toolContent = {
    toolName: "Fraction Calculator",
    overview: "Advanced fraction calculator with addition, subtraction, multiplication, division, simplification, and conversion between fractions and decimals. Perfect for students, teachers, and professionals.",

    howToSteps: [
      "Select Operation: Choose from addition (+), subtraction (-), multiplication (×), or division (÷).",
      "Enter Fractions: Input the numerator and denominator for both fractions. The calculator will automatically calculate the result.",
      "View Results: See the result, simplification steps, and decimal conversion."
    ],

    features: [
      "Fraction addition and subtraction",
      "Fraction multiplication and division",
      "Fraction simplification",
      "Decimal to fraction conversion",
      "Fraction to decimal conversion",
      "Mixed number calculations",
      "Step-by-step solutions",
      "Fraction type classification"
    ],

    useCases: [
      "Education: Essential for learning and teaching fraction operations.",
      "Cooking: Scaling recipes and adjusting ingredient quantities.",
      "Construction: Working with measurements in inches and feet.",
      "Science: Calculating ratios and concentrations.",
      "Finance: Calculating interest rates and financial ratios."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Fraction Operations & Properties</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">Addition & Subtraction</h3>
              <p className="text-sm text-muted-foreground mb-4">Fractions require a common denominator. The calculator finds the least common multiple (LCM) automatically.</p>
              <div className="bg-muted p-3 rounded text-sm font-mono">
                3/4 + 1/6 = (3×6)/(4×6) + (1×4)/(6×4) = 18/24 + 4/24 = 22/24 = 11/12
              </div>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">Multiplication & Division</h3>
              <p className="text-sm text-muted-foreground mb-4">Multiply numerators and denominators directly. For division, multiply by the reciprocal.</p>
              <div className="bg-muted p-3 rounded text-sm font-mono">
                2/5 × 3/7 = (2×3)/(5×7) = 6/35
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Why use a Fraction Calculator?</h2>
          <p className="text-muted-foreground mb-4">
            Fractions are fundamental to mathematics but can be tricky to work with, especially when dealing with different denominators or mixed numbers. Our calculator simplifies the process, providing instant results and step-by-step explanations to help you understand the underlying concepts.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>Accuracy:</strong> Eliminate calculation errors and get precise results every time.</li>
            <li><strong>Speed:</strong> Solve complex fraction problems in seconds.</li>
            <li><strong>Learning:</strong> Understand the steps involved in fraction operations with our detailed breakdowns.</li>
            <li><strong>Versatility:</strong> Handle all types of fractions, including proper, improper, and mixed numbers.</li>
          </ul>
        </section>
      </div>
    ),

    faqs: [
      {
        question: "Why are fractions fundamental to mathematical understanding?",
        answer: "Fractions express partial quantities through a ratio format with a top number (numerator) and bottom number (denominator). They enable precise representation of values that fall between integers, support ratio calculations, percentage conversions, and are crucial in practical scenarios including culinary measurements, engineering specifications, and analytical computations."
      },
      {
        question: "What method should I use when adding fractions that have different bottom numbers?",
        answer: "Identify the smallest common multiple of the denominators, then rewrite each fraction using that shared denominator before combining the top numbers. Our calculator performs these conversions automatically. Example calculation: 1/3 + 1/4 = 4/12 + 3/12 = 7/12."
      },
      {
        question: "What is the process for transforming decimal numbers into fractional form?",
        answer: "Express the decimal value as a ratio where the denominator reflects the place value (e.g., 0.5 = 5/10, 0.25 = 25/100), then reduce the fraction by dividing both parts by their greatest common factor. For instance, 0.5 simplifies to 1/2."
      },
      {
        question: "What's the difference between proper and improper fractions?",
        answer: "A proper fraction has a numerator smaller than the denominator (e.g., 3/4), while an improper fraction has a numerator equal to or larger than the denominator (e.g., 5/4). Improper fractions can be converted to mixed numbers."
      },
      {
        question: "Why do I need to learn fractions if I have a calculator?",
        answer: "Understanding fractions helps you interpret results, catch errors, and solve problems when calculators aren't available. It also builds mathematical thinking skills essential for advanced topics like algebra and calculus."
      },
      {
        question: "How can I practice fractions effectively?",
        answer: "Start with simple problems and gradually increase complexity. Use visual aids like pie charts and number lines, practice with real-world examples, and use our fraction calculator to check your work and build confidence."
      },
      {
        question: "How can I identify fractions that represent the same numerical value?",
        answer: "Fractions with identical values but different representations are called equivalent fractions (e.g., 2/4 = 1/2 = 4/8). Create equivalent fractions by applying the same multiplication or division operation to both the top and bottom numbers using any non-zero value."
      },
      {
        question: "How do I simplify fractions to their lowest terms?",
        answer: "To simplify fractions, find the greatest common divisor (GCD) of the numerator and denominator, then divide both by the GCD. For example, 8/12 simplifies to 2/3 because the GCD of 8 and 12 is 4."
      },
      {
        question: "What is the least common denominator (LCD) and why is it important?",
        answer: "The LCD is the smallest number that is a multiple of all denominators in a set of fractions. It's essential for adding and subtracting fractions with different denominators, as it allows you to convert them to equivalent fractions with the same denominator."
      },
      {
        question: "How do I multiply fractions step by step?",
        answer: "To multiply fractions: 1) Multiply the numerators together, 2) Multiply the denominators together, 3) Simplify the result if possible. For example, 2/3 × 3/4 = (2×3)/(3×4) = 6/12 = 1/2."
      },
      {
        question: "What technique is used when dividing one fraction by another?",
        answer: "Division of fractions is performed by taking the inverse of the divisor (swapping numerator and denominator) and then multiplying. For instance, 3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8 = 1 7/8."
      },
      {
        question: "What are the common fraction operations used in real life?",
        answer: "Fraction operations are used in cooking (recipe scaling), construction (measurements), finance (interest calculations), science (concentration ratios), and many other fields where precise part-to-whole relationships are important."
      },
      {
        question: "What steps are required to transform a mixed number into an improper fraction?",
        answer: "The conversion process involves: first, multiplying the whole number portion by the fractional denominator, next, adding that product to the existing numerator, finally, writing that sum over the original denominator. Example: 3 2/5 = (3×5 + 2)/5 = 17/5."
      },
      {
        question: "What is the formula for expressing fractions as percentages?",
        answer: "Transform a fraction into a percentage by performing division between the top and bottom numbers, then scaling the result by 100. For instance, 1/2 = 0.50 = 50%. This calculator performs these transformations instantly."
      },
      {
        question: "What are complex fraction problems and how do I solve them?",
        answer: "Complex fraction problems involve multiple operations in sequence. Break them down step by step, follow the order of operations (PEMDAS), and use visual representations when helpful. For example: (2/3 + 1/4) × (3/5 - 1/2) = 11/12 × 1/10 = 11/120."
      },
      {
        question: "How accurate are fraction calculator results?",
        answer: "Our calculator provides exact fraction results using precise mathematical algorithms. For decimal conversions, results are accurate to 6 decimal places, which is sufficient for most academic and professional applications."
      },
      {
        question: "What are the key features of a professional fraction calculator?",
        answer: "Professional fraction calculators should support all four operations (addition, subtraction, multiplication, division), handle mixed numbers, provide step-by-step solutions, convert between fractions and decimals, simplify results, and work with both proper and improper fractions."
      },
      {
        question: "How do fractions appear in everyday life?",
        answer: "Fractions appear in time (quarter past 3), money (half dollar), sports (three-quarters of the game), cooking (3/4 cup of flour), construction (5/8 inch thickness), and measurements (half inch). Understanding fractions helps you navigate the world more effectively!"
      },
      {
        question: "What are the different types of fractions I should know?",
        answer: "The main types are: proper fractions (numerator < denominator), improper fractions (numerator ≥ denominator), mixed numbers (whole number + fraction), and equivalent fractions (same value, different form). Each type has specific uses and conversion methods."
      },
      {
        question: "How do I solve fraction word problems?",
        answer: "For fraction word problems: 1) Read carefully and identify what's being asked, 2) Determine which operation to use, 3) Set up the problem with fractions, 4) Solve step by step, 5) Check your answer makes sense in the original context."
      },
      {
        question: "Can I use this calculator for complex fraction expressions?",
        answer: "Yes! Our calculator can handle complex expressions involving multiple operations, mixed numbers, and various fraction types. It automatically follows the order of operations and provides step-by-step solutions for educational purposes."
      }
    ],

    relatedTools: [
      { name: "Percentage Calculator", href: "/calculator/percentage-calculator" },
      { name: "Scientific Calculator", href: "/calculator/scientific-calculator" },
      { name: "Triangle Calculator", href: "/calculator/triangle-calculator" },
      { name: "BMI Calculator", href: "/calculator/bmi-calculator" },
      { name: "Age Calculator", href: "/calculator/age-calculator" },
      { name: "Time Duration", href: "/calculator/time-duration" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Fraction Calculator",
        description: "Advanced fraction calculator with addition, subtraction, multiplication, division, simplification, and conversion between fractions and decimals. Perfect for students, teachers, and professionals.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: "Fraction Calculator", href: "/calculator/fraction-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <FractionCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "FastTools - Fraction Calculator | Free Add, Subtract, Multiply & Divide",
        description: "FastTools Fraction Calculator - Advanced calculator with addition, subtraction, multiplication, division, simplification, and conversion between fractions and decimals. Free online math tool.",
        path: "/calculator/fraction-calculator"
      }}
    />
  )
}
