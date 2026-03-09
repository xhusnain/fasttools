import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const TriangleCalculator = dynamic(() => import("@/components/calculators/triangle-calculator"), {
    loading: () => <ToolLoader />
})
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, Triangle, Brain, BookOpen, Square } from "lucide-react"
import { GTable } from "@/ui/gtable"

const baseMetadata = createMetadata({
    title: "Triangle Calculator — Solve Area, Angles & Sides Free (2026)",
    description:
        "Free triangle calculator to solve any triangle by SSS, SAS, ASA, AAS, or SSA. Calculate area (Heron's formula), perimeter, all angles, heights, medians, inradius, circumradius, and triangle type classification instantly.",
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
}

export default function TriangleCalculatorPage() {
    const toolContent = {
        toolName: "Triangle Calculator",
        overview: "Solve any triangle by entering known sides and angles using SSS, SAS, ASA, AAS, or SSA methods with our free triangle calculator. The tool computes triangle area via Heron's formula, base-height method, or SAS formula; finds all unknown angles using the Law of Cosines and Law of Sines; and calculates perimeter, semiperimeter, all three heights (altitudes), medians, inradius, circumradius, and triangle type classification (equilateral, isosceles, scalene, right, obtuse, acute). Results display in both degrees and radians with 6-decimal precision suitable for geometry homework, engineering structural analysis, architectural design, surveying, and construction layout.",

        howToSteps: [
            "Choose Solving Method: Select SSS (three sides), SAS (two sides + included angle), ASA (two angles + included side), AAS (two angles + non-included side), or SSA (two sides + non-included angle) based on your known values.",
            "Enter Known Values: Input side lengths in any unit and angles in degrees or radians. The calculator validates inputs against the Triangle Inequality Theorem before solving.",
            "Calculate All Properties: Click 'Calculate' to find all unknown sides, angles, area (via Heron's formula, base-height, or SAS), perimeter, semiperimeter, heights, medians, inradius, and circumradius.",
            "Analyze Results: Review the triangle type classification (equilateral, isosceles, scalene, right, obtuse, acute), copy individual values, and access calculation history for comparison."
        ],

        features: [
            "Multiple Area Formulas: Calculate triangle area using Heron's formula (from three sides), base-times-height (A = 1/2 bh), or SAS formula (A = 1/2 ab sin C).",
            "Perimeter & Semiperimeter: Compute total perimeter and semiperimeter used in Heron's formula and inradius calculations.",
            "Angle Solver: Find all three angles from sides using the Law of Cosines and verify with the 180-degree angle sum theorem.",
            "Heights & Medians: Calculate all three altitudes (heights) and all three medians connecting vertices to opposite midpoints.",
            "Inradius & Circumradius: Compute the inscribed circle radius (r) and circumscribed circle radius (R) with Euler's inequality verification.",
            "Five Solving Methods: Full support for SSS, SAS, ASA, AAS, and ambiguous SSA (with 0, 1, or 2 solution detection).",
            "Degree & Radian Support: Toggle between degree and radian angle units for academic and engineering applications.",
            "Triangle Type Classification: Automatically identify equilateral, isosceles, scalene, right, obtuse, and acute triangles.",
            "History & Export: Save recent calculations and copy individual values to clipboard for reports and assignments.",
            "6-Decimal Precision: Professional-grade accuracy suitable for engineering, surveying, and architectural applications."
        ],

        useCases: [
            "Geometry Homework: Solve SSS, SAS, ASA, AAS, and SSA triangle problems with step-by-step results for high school and college geometry courses.",
            "Structural Engineering: Analyze truss systems, beam load triangles, and stress distribution using the Law of Cosines and Law of Sines.",
            "Surveying & Land Measurement: Calculate unknown distances and bearings between survey points using triangulation methods.",
            "Architecture & Construction: Design roof pitch angles, rafter lengths, stairway stringers, and gable framing with precise triangle geometry.",
            "Computer Graphics & Game Development: Compute triangle areas and angles for 3D mesh rendering, collision detection, and polygon tessellation.",
            "Navigation & Physics: Apply triangle calculations to vector decomposition, force diagrams, projectile trajectories, and bearing-distance problems."
        ],

        aboutTool: (
            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Triangle className="h-6 w-6" />
                        Triangle Classifications Reference
                    </h2>
                    <GTable>
                        <thead className="bg-muted text-foreground font-semibold">
                            <tr>
                                <th className="p-3">Type</th>
                                <th className="p-3">Definition</th>
                                <th className="p-3">Key Properties</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-sm">
                            <tr>
                                <td className="p-3 font-bold">Equilateral</td>
                                <td className="p-3">All 3 sides are equal</td>
                                <td className="p-3">All angles are 60°</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-bold">Isosceles</td>
                                <td className="p-3">2 sides are equal</td>
                                <td className="p-3">Base angles are equal</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-bold">Scalene</td>
                                <td className="p-3">No equal sides</td>
                                <td className="p-3">No equal angles</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-bold">Right</td>
                                <td className="p-3">Has one 90° angle</td>
                                <td className="p-3">Follows Pythagoras (a² + b² = c²)</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-bold">Obtuse</td>
                                <td className="p-3">One angle &gt; 90°</td>
                                <td className="p-3">Sum of other two angles &lt; 90°</td>
                            </tr>
                        </tbody>
                    </GTable>
                </section>

                <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-l-4 border-blue-500 rounded-lg my-8">
                    <h4 className="flex items-center gap-2 font-bold text-blue-800 dark:text-blue-200 mb-2">
                        <Brain className="h-5 w-5" />
                        Expert Insight: The Triangle Inequality Theorem
                    </h4>
                    <p className="italic text-blue-700 dark:text-blue-300">
                        "Not every set of three lines can form a triangle. The Triangle Inequality Theorem states that the sum of the lengths of any two sides must be greater than the length of the third side. If Side A = 5 and Side B = 3, Side C cannot be 9, because 5 + 3 is not greater than 9. This is a fundamental check in all geometry engines."
                    </p>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-2">— FastTools Geometry Team</p>
                </div>

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
                title: "Triangle Calculator — Solve Any Triangle by Sides or Angles (2026)",
                description: "Free triangle solver supporting SSS, SAS, ASA, AAS, and SSA methods. Compute triangle area using Heron's formula, base-height, or SAS; find all unknown angles via the Law of Cosines and Law of Sines; calculate perimeter, semiperimeter, heights, medians, inradius, circumradius, and classify triangle type (equilateral, isosceles, scalene, right, obtuse).",
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
                title: "Triangle Calculator — Solve Area, Angles & Sides Free (2026)",
                description:
                    "Free triangle calculator to solve any triangle by SSS, SAS, ASA, AAS, or SSA. Calculate area (Heron's formula), perimeter, all angles, heights, medians, inradius, circumradius, and triangle type classification instantly.",
                path: "/calculator/triangle-calculator"
            }}
        />
    )
}
