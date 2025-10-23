import { Metadata } from "next"
import TriangleCalculator from "@/components/triangle-calculator"
import { AdSpace } from "@/components/ad-space"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Calculator,
    Triangle,
    BookOpen,
    TrendingUp,
    Clock,
    Users,
    Star,
    ArrowRight,
    Brain,
    Zap,
    Ruler,
    Square,
    Circle,
    Hexagon
} from "lucide-react"

export const metadata: Metadata = {
    title: "Triangle Calculator | Area, Perimeter & Angles | FastTools",
    description: "Advanced triangle calculator with area, perimeter, angles, heights, medians, inradius, circumradius calculations. Supports SSS, SAS, ASA, AAS, SSA triangle solving methods.",
    keywords: [
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
        canonical: '/calculator/triangle-calculator',
    },
    openGraph: {
        title: "Triangle Calculator | Free Online Geometry Tool",
        description: "Advanced triangle calculator with area, perimeter, angles, heights, medians, inradius, circumradius calculations. Supports SSS, SAS, ASA, AAS, SSA triangle solving methods.",
        url: 'https://www.fasttools.store/calculator/triangle-calculator',
        siteName: 'FastTools',
        images: [
            {
                url: 'https://www.fasttools.store/og-image.svg',
                width: 1200,
                height: 630,
                alt: 'Triangle Calculator - FastTools',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Triangle Calculator | Free Online Geometry Tool",
        description: "Advanced triangle calculator with area, perimeter, angles, heights, medians, inradius, circumradius calculations. Supports SSS, SAS, ASA, AAS, SSA triangle solving methods.",
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
    verification: {
        google: 'your-google-verification-code',
    },
}

export default function TriangleCalculatorPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Triangle Calculator",
        description: "Advanced triangle calculator with comprehensive geometry calculations including area, perimeter, angles, heights, medians, inradius, and circumradius. Supports all triangle solving methods: SSS, SAS, ASA, AAS, and SSA.",
        url: "https://www.fasttools.store/calculator/triangle-calculator",
        applicationCategory: "UtilityApplication",
        operatingSystem: "Any",
        browserRequirements: "Requires JavaScript. Requires HTML5.",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
        },
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
        ],
        audience: {
            "@type": "EducationalAudience",
            educationalRole: ["student", "teacher", "professional"]
        },
        educationalUse: "instruction",
        learningResourceType: "calculator",
        educationalLevel: "beginner"
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd)
                }}
            />

            <div className="bg-background">
                <div className="container mx-auto px-3 py-6 md:py-8">
                    <div className="max-w-5xl mx-auto">
                        {/* Breadcrumbs */}
                        <Breadcrumbs />

                        {/* Header Section */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
                                Triangle Calculator - Free Online Geometry Tool
                            </h1>
                            <p className="text-lg text-muted-foreground mb-6">
                                Advanced triangle calculator with comprehensive geometry calculations including area, perimeter, angles, heights, medians, inradius, and circumradius. Supports all triangle solving methods: SSS, SAS, ASA, AAS, and SSA.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    <span>Instant Results</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="h-4 w-4" />
                                    <span>500,000+ users</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star className="h-4 w-4" />
                                    <span>4.9/5 rating</span>
                                </div>
                            </div>
                        </div>

                        {/* Main Content - Calculator and Sidebar in One Line */}
                        <div className="grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] gap-2 md:gap-3 lg:gap-4">
                            <div className="space-y-6">
                                <TriangleCalculator />

                                {/* Mobile/Tablet AdSpace */}
                                <div className="my-6 lg:hidden">
                                    <div className="text-center mb-2">
                                        <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                                    </div>
                                    <AdSpace slot="content" className="w-full h-24 sm:h-32 md:h-40 border border-border rounded-xl shadow-sm bg-card" />
                                </div>

                                {/* Educational Content Sections */}
                                <div className="space-y-6">
                                    {/* How to Use Section */}
                                    <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                                        <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
                                            <Calculator className="h-5 w-5" />
                                            How to Use Triangle Calculator
                                        </h2>
                                        <div className="space-y-3 text-sm text-muted-foreground">
                                            <p>Our advanced triangle calculator supports all major triangle solving methods:</p>
                                            <ul className="list-disc list-inside space-y-1 ml-4">
                                                <li><strong>SSS (Side-Side-Side):</strong> Provide all three sides to calculate angles and area</li>
                                                <li><strong>SAS (Side-Angle-Side):</strong> Provide two sides and the included angle</li>
                                                <li><strong>ASA (Angle-Side-Angle):</strong> Provide two angles and the included side</li>
                                                <li><strong>AAS (Angle-Angle-Side):</strong> Provide two angles and a non-included side</li>
                                                <li><strong>SSA (Side-Side-Angle):</strong> Provide two sides and a non-included angle</li>
                                            </ul>
                                            <p>Simply enter your known values and click "Calculate" to get comprehensive triangle properties including area, perimeter, angles, heights, medians, inradius, and circumradius.</p>
                                        </div>
                                    </div>

                                    {/* Triangle Types Section */}
                                    <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                                        <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
                                            <Triangle className="h-5 w-5" />
                                            Triangle Types & Properties
                                        </h2>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h3 className="text-lg font-semibold mb-2 text-yellow-400">By Sides:</h3>
                                                <ul className="space-y-1 text-sm text-muted-foreground">
                                                    <li><strong>Equilateral:</strong> All three sides equal</li>
                                                    <li><strong>Isosceles:</strong> Two sides equal</li>
                                                    <li><strong>Scalene:</strong> All sides different lengths</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold mb-2 text-yellow-400">By Angles:</h3>
                                                <ul className="space-y-1 text-sm text-muted-foreground">
                                                    <li><strong>Acute:</strong> All angles less than 90°</li>
                                                    <li><strong>Right:</strong> One angle exactly 90°</li>
                                                    <li><strong>Obtuse:</strong> One angle greater than 90°</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mathematical Formulas Section */}
                                    <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                                        <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
                                            <Brain className="h-5 w-5" />
                                            Key Mathematical Formulas
                                        </h2>
                                        <div className="space-y-3 text-sm text-muted-foreground">
                                            <div>
                                                <h3 className="text-lg font-semibold mb-2 text-yellow-400">Area Formulas:</h3>
                                                <ul className="space-y-1 ml-4">
                                                    <li><strong>Heron's Formula:</strong> A = √[s(s-a)(s-b)(s-c)] where s = (a+b+c)/2</li>
                                                    <li><strong>Base × Height:</strong> A = ½ × base × height</li>
                                                    <li><strong>SAS Formula:</strong> A = ½ × a × b × sin(C)</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold mb-2 text-yellow-400">Angle Formulas:</h3>
                                                <ul className="space-y-1 ml-4">
                                                    <li><strong>Law of Cosines:</strong> c² = a² + b² - 2ab cos(C)</li>
                                                    <li><strong>Law of Sines:</strong> a/sin(A) = b/sin(B) = c/sin(C)</li>
                                                    <li><strong>Angle Sum:</strong> A + B + C = 180°</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* FAQ Section */}
                                    <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                                        <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
                                            <BookOpen className="h-5 w-5" />
                                            Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                                                    What is the difference between SSS, SAS, ASA, AAS, and SSA triangle solving methods?
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    These are different combinations of given information for solving triangles: SSS (All three sides known), SAS (Two sides and included angle), ASA (Two angles and included side), AAS (Two angles and non-included side), and SSA (Two sides and non-included angle - can be ambiguous).
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                                                    When should I use Heron's formula vs. the base×height formula?
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Use Heron's formula when you know all three sides but not the height. Use the base×height formula when you have a base and its corresponding height. Heron's formula is more versatile as it doesn't require calculating heights.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                                                    What is the Law of Sines and when is it used?
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    The Law of Sines states that a/sin(A) = b/sin(B) = c/sin(C). It's used when you have two angles and one side (ASA, AAS), two sides and a non-included angle (SSA), or to verify results from other methods.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                                                    What is the Law of Cosines and when is it used?
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    The Law of Cosines states that c² = a² + b² - 2ab cos(C). It's used when you have all three sides (SSS) to find angles, two sides and included angle (SAS) to find the third side, and it's a generalization of the Pythagorean theorem.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                                                    Why is the SSA case sometimes ambiguous?
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    SSA can have 0, 1, or 2 solutions depending on the given values. This happens because the Law of Sines can produce multiple valid angles. You need to check if the triangle inequality holds and verify all solutions.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                                                    How accurate are triangle calculator results?
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Our calculator provides results accurate to 6 decimal places, which is sufficient for most engineering, architectural, and scientific applications. For critical calculations, always verify results using multiple methods.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                                                    What is the Pythagorean theorem and when is it used?
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    The Pythagorean theorem states that in a right triangle, a² + b² = c², where c is the hypotenuse. It's used to find missing sides in right triangles and is fundamental to trigonometry, construction, and navigation.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                                                    How do I calculate triangle area without height?
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Use Heron's formula: Area = √[s(s-a)(s-b)(s-c)] where s = (a+b+c)/2. This formula only requires the three side lengths and works for any triangle type. It's particularly useful when height is difficult to measure.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                                                    What are the special right triangles?
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Special right triangles have predictable side ratios: 30°-60°-90° triangles have sides in ratio 1:√3:2, and 45°-45°-90° triangles have sides in ratio 1:1:√2. These are commonly used in trigonometry and construction.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                                                    How do I find the centroid of a triangle?
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    The centroid is the intersection point of all three medians. It's located at 2/3 of the distance from each vertex to the midpoint of the opposite side. The centroid is also the center of mass of the triangle.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                                                    What is the difference between inradius and circumradius?
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    The inradius (r) is the radius of the circle inscribed inside the triangle, while the circumradius (R) is the radius of the circle that passes through all three vertices. For any triangle, R ≥ 2r (Euler's inequality).
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                                                    How do I solve triangles in surveying and engineering?
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    In surveying, use the Law of Sines for distance measurements and the Law of Cosines for angle calculations. For engineering applications, consider factors like material properties, load distribution, and safety margins in your calculations.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                                                    Can I use triangle calculators for 3D geometry?
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    While our calculator focuses on 2D triangles, the principles apply to 3D geometry. For 3D applications, you'll need to project triangles onto planes or use vector mathematics to handle spatial relationships.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                                                    What are the key features of a professional triangle calculator?
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Professional triangle calculators should support all solving methods (SSS, SAS, ASA, AAS, SSA), calculate area using multiple formulas (Heron's, base×height, SAS), determine heights and medians, calculate inradius and circumradius, classify triangle types, and support both degrees and radians.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                                                    How are triangle calculations used in real-world applications?
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Triangle calculations are essential in structural engineering (truss systems, beam analysis), civil engineering (surveying, land measurement), architecture (roof design, foundation planning), computer graphics (3D modeling, collision detection), and scientific research (physics, chemistry, biology).
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                                                    What advanced triangle properties can be calculated?
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Advanced properties include heights (altitudes), medians, inradius and circumradius, centroid (center of mass), circumcenter (intersection of perpendicular bisectors), orthocenter (intersection of altitudes), and incenter (intersection of angle bisectors).
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Related Tools Section */}
                                    <div className="bg-card border border-border rounded-xl p-3 md:p-4 shadow-sm">
                                        <h2 className="text-xl font-bold mb-3 flex items-center gap-2 text-yellow-400">
                                            <Square className="h-5 w-5" />
                                            Related Geometry & Math Tools
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                            {[
                                                { name: "BMI Calculator", desc: "Calculate Body Mass Index", href: "/calculator/bmi-calculator", icon: "📐" },
                                                { name: "Age Calculator", desc: "Calculate age in years, months, days", href: "/calculator/age-calculator", icon: "📏" },
                                                { name: "Percentage Calculator", desc: "Calculate percentages and changes", href: "/calculator/percentage-calculator", icon: "⭕" },
                                                { name: "Mortgage Calculator", desc: "Calculate home loan payments", href: "/calculator/mortgage-calculator", icon: "⬜" },
                                                { name: "Loan Calculator", desc: "Calculate loan payments", href: "/calculator/loan-calculator", icon: "⬛" },
                                                { name: "Tax Calculator", desc: "Calculate tax amounts", href: "/calculator/tax-calculator", icon: "🔷" },
                                                { name: "Scientific Calculator", desc: "Advanced mathematical calculations", href: "/calculator/scientific-calculator", icon: "🧮" },
                                                { name: "Time Duration", desc: "Calculate time between dates", href: "/calculator/time-duration", icon: "⏰" }
                                            ].map(({ name, desc, icon, href }) => (
                                                <a
                                                    key={name}
                                                    href={href}
                                                    className="p-3 bg-muted rounded-lg border border-border hover:bg-accent transition-colors group"
                                                >
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-lg">{icon}</span>
                                                        <h3 className="font-semibold text-sm group-hover:text-primary">{name}</h3>
                                                    </div>
                                                    <p className="text-xs text-muted-foreground">{desc}</p>
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Mobile/Tablet Bottom AdSpace */}
                                    <div className="my-6 lg:hidden">
                                        <div className="text-center mb-2">
                                            <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                                        </div>
                                        <AdSpace slot="content" className="w-full h-24 sm:h-32 md:h-40 border border-border rounded-xl shadow-sm bg-card" />
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