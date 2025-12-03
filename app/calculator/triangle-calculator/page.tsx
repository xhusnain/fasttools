import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import TriangleCalculator from "@/components/calculators/triangle-calculator"
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, Triangle, Brain, BookOpen, Square } from "lucide-react"

const baseMetadata = createMetadata({
    title: "FastTools - Triangle Calculator | Free Area, Perimeter & Angles Calculator",
    description:
        "FastTools Triangle Calculator - Advanced calculator with area, perimeter, angles, heights, medians, inradius, circumradius calculations. Supports SSS, SAS, ASA, AAS, SSA triangle solving methods.",
    path: "/calculator/triangle-calculator",
    breadcrumbs: [
        { label: "Calculator", href: "/calculator" },
        { label: "Triangle Calculator", href: "/calculator/triangle-calculator" }
    ],
    schemaOptions: {
        name: "Triangle Calculator",
        alternateName: "Triangle Solver",
        applicationCategory: "EducationalApplication",
        featureList: [
            "Calculate triangle area using multiple formulas",
            "Calculate triangle perimeter and semiperimeter",
            "Calculate all triangle angles from sides",
            "Calculate triangle heights and medians",
            "Calculate inradius and circumradius",
            "Support for SSS, SAS, ASA, AAS, SSA methods",
            "Degree and radian angle units",
            "Triangle type classification",
            "Calculation history and copy results",
            "Professional-grade accuracy"
        ]
    }
})

export const metadata: Metadata = {
    ...baseMetadata,
    applicationName: "FastTools",
    category: "Geometry",
    keywords: [
        "fasttools",
        "fast tools",
        "triangle calculator",
        "triangle area calculator",
        "triangle perimeter calculator",
        "triangle angle calculator",
        "triangle height calculator",
        "triangle sides calculator",
        "right triangle calculator",
        "equilateral triangle calculator",
        "isosceles triangle calculator",
        "scalene triangle calculator",
        "triangle solver",
        "triangle calculator online",
        "free triangle calculator",
        "triangle calculator with steps",
        "triangle side and angle calculator",
        "calculate triangle area",
        "calculate triangle perimeter",
        "calculate triangle angles",
        "find missing side of triangle",
        "triangle area from coordinates",
        "triangle angle from sides",
        "triangle perimeter formula",
        "triangle angle formula",
        "triangle side formula",
        "triangle calculator by sides",
        "triangle calculator by angles",
        "triangle calculator by base and height",
        "triangle area calculation formula",
        "triangle area calculator using heron formula",
        "triangle calculator heron's formula",
        "right angled triangle calculator",
        "triangle geometry solver",
        "triangle height from sides calculator",
        "triangle formulas",
        "triangle theorems",
        "triangle rules",
        "triangle geometry formulas",
        "heron's formula",
        "pythagorean theorem",
        "law of sines",
        "law of cosines",
        "triangle properties",
        "triangle basics",
        "geometry calculator",
        "trigonometry calculator",
        "angle calculator",
        "side length calculator"
    ]
}

export default function TriangleCalculatorPage() {
    const toolContent = {
        toolName: "Triangle Calculator",
        overview: "Advanced triangle calculator with comprehensive geometry calculations including area, perimeter, angles, heights, medians, inradius, and circumradius. Supports all triangle solving methods: SSS, SAS, ASA, AAS, and SSA.",

        howToSteps: [
            "Choose Method: Select the solving method based on your known values (SSS, SAS, ASA, AAS, or SSA).",
            "Enter Values: Input the known side lengths and/or angles.",
            "Calculate: Click 'Calculate' to find all unknown properties.",
            "Analyze: Review the detailed results including area, perimeter, heights, and more."
        ],

        features: [
            "Calculate triangle area using multiple formulas",
            "Calculate triangle perimeter and semiperimeter",
            "Calculate all triangle angles from sides",
            "Calculate triangle heights and medians",
            "Calculate inradius and circumradius",
            "Support for SSS, SAS, ASA, AAS, SSA methods",
            "Degree and radian angle units",
            "Triangle type classification",
            "Calculation history and copy results",
            "Professional-grade accuracy"
        ],

        useCases: [
            "Education: Learning and teaching geometry concepts.",
            "Engineering: Structural analysis and surveying.",
            "Architecture: Design and construction planning.",
            "Construction: Roof framing and layout."
        ],

        aboutTool: (
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Triangle className="h-6 w-6" />
                        Triangle Types & Properties
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 bg-card rounded-lg border border-border">
                            <h3 className="text-lg font-semibold mb-3 text-foreground">By Sides:</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><strong>Equilateral:</strong> All three sides equal</li>
                                <li><strong>Isosceles:</strong> Two sides equal</li>
                                <li><strong>Scalene:</strong> All sides different lengths</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-card rounded-lg border border-border">
                            <h3 className="text-lg font-semibold mb-3 text-foreground">By Angles:</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><strong>Acute:</strong> All angles less than 90°</li>
                                <li><strong>Right:</strong> One angle exactly 90°</li>
                                <li><strong>Obtuse:</strong> One angle greater than 90°</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Brain className="h-6 w-6" />
                        Key Mathematical Formulas
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-foreground">Area Formulas:</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground ml-4 list-disc">
                                <li><strong>Heron's Method:</strong> Area equals the square root of s times (s minus a) times (s minus b) times (s minus c), with s representing the semiperimeter (half the perimeter)</li>
                                <li><strong>Base × Height:</strong> A = ½ × base × height</li>
                                <li><strong>SAS Formula:</strong> A = ½ × a × b × sin(C)</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-foreground">Angle Formulas:</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground ml-4 list-disc">
                                <li><strong>Cosine Rule:</strong> For any side c, c squared equals the sum of squares of the other two sides minus twice their product multiplied by the cosine of the included angle</li>
                                <li><strong>Sine Rule:</strong> The ratio of any side to the sine of its opposite angle remains constant across all three sides</li>
                                <li><strong>Triangle Angle Theorem:</strong> The sum of interior angles always equals 180 degrees in Euclidean geometry</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        ),

        faqs: [
            {
                question: "What is the difference between SSS, SAS, ASA, AAS, and SSA triangle solving methods?",
                answer: "These are different combinations of given information for solving triangles: SSS (All three sides known), SAS (Two sides and included angle), ASA (Two angles and included side), AAS (Two angles and non-included side), and SSA (Two sides and non-included angle - can be ambiguous)."
            },
            {
                question: "When should I use Heron's formula vs. the base×height formula?",
                answer: "Use Heron's formula when you know all three sides but not the height. Use the base×height formula when you have a base and its corresponding height. Heron's formula is more versatile as it doesn't require calculating heights."
            },
            {
                question: "When should I apply the Sine Rule for triangle calculations?",
                answer: "Apply the Sine Rule when working with ASA or AAS configurations (two angles and one side), SSA scenarios (two sides and a non-included angle), or when cross-checking calculation results. This trigonometric principle establishes a constant ratio relationship between sides and their opposite angles, making it invaluable for solving triangles with limited known values."
            },
            {
                question: "When is the Cosine Rule the most effective solving method?",
                answer: "The Cosine Rule excels in SSS scenarios (all three sides known) for angle determination, SAS configurations (two sides with included angle) for finding the third side length, and serves as a fundamental extension of the Pythagorean theorem that applies to all triangle types, not just right triangles."
            },
            {
                question: "Why is the SSA case sometimes ambiguous?",
                answer: "SSA can have 0, 1, or 2 solutions depending on the given values. This happens because the Law of Sines can produce multiple valid angles. You need to check if the triangle inequality holds and verify all solutions."
            },
            {
                question: "How accurate are triangle calculator results?",
                answer: "Our calculator provides results accurate to 6 decimal places, which is sufficient for most engineering, architectural, and scientific applications. For critical calculations, always verify results using multiple methods."
            },
            {
                question: "What is the Pythagorean theorem and when is it used?",
                answer: "The Pythagorean theorem states that in a right triangle, a² + b² = c², where c is the hypotenuse. It's used to find missing sides in right triangles and is fundamental to trigonometry, construction, and navigation."
            },
            {
                question: "How can I determine triangle area when height measurements are unavailable?",
                answer: "When height measurements aren't accessible, employ the semiperimeter method developed by Heron of Alexandria. Calculate the semiperimeter by halving the perimeter, then apply the square root of the product of the semiperimeter and its differences with each side length. This approach works universally across all triangle classifications without requiring altitude calculations."
            },
            {
                question: "What are the special right triangles?",
                answer: "Special right triangles have predictable side ratios: 30°-60°-90° triangles have sides in ratio 1:√3:2, and 45°-45°-90° triangles have sides in ratio 1:1:√2. These are commonly used in trigonometry and construction."
            },
            {
                question: "How do I locate the geometric center of a triangle?",
                answer: "The geometric center, known as the centroid, emerges at the convergence of all three medians (lines connecting vertices to midpoints of opposite sides). Positioned precisely two-thirds along each median from its vertex origin, this point serves as the triangle's balance point where uniform density distribution would concentrate its mass."
            },
            {
                question: "What is the difference between inradius and circumradius?",
                answer: "The inradius (r) is the radius of the circle inscribed inside the triangle, while the circumradius (R) is the radius of the circle that passes through all three vertices. For any triangle, R ≥ 2r (Euler's inequality)."
            },
            {
                question: "How do I solve triangles in surveying and engineering?",
                answer: "In surveying, use the Law of Sines for distance measurements and the Law of Cosines for angle calculations. For engineering applications, consider factors like material properties, load distribution, and safety margins in your calculations."
            },
            {
                question: "Can I use triangle calculators for 3D geometry?",
                answer: "While our calculator focuses on 2D triangles, the principles apply to 3D geometry. For 3D applications, you'll need to project triangles onto planes or use vector mathematics to handle spatial relationships."
            },
            {
                question: "What are the key features of a professional triangle calculator?",
                answer: "Professional triangle calculators should support all solving methods (SSS, SAS, ASA, AAS, SSA), calculate area using multiple formulas (Heron's, base×height, SAS), determine heights and medians, calculate inradius and circumradius, classify triangle types, and support both degrees and radians."
            },
            {
                question: "How are triangle calculations used in real-world applications?",
                answer: "Triangle calculations are essential in structural engineering (truss systems, beam analysis), civil engineering (surveying, land measurement), architecture (roof design, foundation planning), computer graphics (3D modeling, collision detection), and scientific research (physics, chemistry, biology)."
            },
            {
                question: "What advanced triangle properties can be calculated?",
                answer: "Advanced properties include heights (altitudes), medians, inradius and circumradius, centroid (geometric center), circumcenter (intersection of perpendicular bisectors), orthocenter (intersection of altitudes), and incenter (intersection of angle bisectors)."
            }
        ],

        relatedTools: [
            { name: "BMI Calculator", href: "/calculator/bmi-calculator" },
            { name: "Age Calculator", href: "/calculator/age-calculator" },
            { name: "Percentage Calculator", href: "/calculator/percentage-calculator" },
            { name: "Mortgage Calculator", href: "/finance-tools/mortgage-calculator" },
            { name: "Loan Calculator", href: "/finance-tools/loan-calculator" },
            { name: "Tax Calculator", href: "/finance-tools/tax-calculator" },
            { name: "Scientific Calculator", href: "/calculator/scientific-calculator" },
            { name: "Time Duration", href: "/calculator/time-duration" }
        ]
    }

    return (
        <ToolPageLayout
            header={{
                title: "Triangle Calculator",
                description: "Advanced triangle calculator with comprehensive geometry calculations including area, perimeter, angles, heights, medians, inradius, and circumradius. Supports all triangle solving methods: SSS, SAS, ASA, AAS, and SSA.",
                titleSize: "medium",
                descriptionSize: "small",
                color: "blue"
            }}
            breadcrumbs={[
                { label: "Calculator", href: "/calculator" },
                { label: "Triangle Calculator", href: "/calculator/triangle-calculator" }
            ]}
            toolComponent={
                <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
                    <TriangleCalculator />
                </div>
            }
            toolContent={toolContent}
            expectedMetadata={{
                title: "FastTools - Triangle Calculator | Free Area, Perimeter & Angles Calculator",
                description: "FastTools Triangle Calculator - Advanced calculator with area, perimeter, angles, heights, medians, inradius, circumradius calculations. Supports SSS, SAS, ASA, AAS, SSA triangle solving methods.",
                path: "/calculator/triangle-calculator"
            }}
        />
    )
}