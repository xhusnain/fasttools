import { Metadata } from 'next';
import { createMetadata } from "@/lib/metadata-base"

export const metadata: Metadata = createMetadata({
    title: "Scientific Calculator | Advanced Math Calculator",
    description: "Free online scientific calculator with 70+ mathematical functions. Advanced trigonometry, logarithms, statistics, and engineering calculations. Professional-grade calculator for students, engineers, and scientists.",
    path: "/calculator/scientific-calculator",
    ogTitle: "Scientific Calculator Online Free | Advanced Math Calculator",
    ogDescription: "Professional scientific calculator with 70+ functions. Free online calculator for trigonometry, logarithms, statistics, and engineering calculations.",
    twitterTitle: "Scientific Calculator Online Free | Advanced Math Calculator",
    twitterDescription: "Professional scientific calculator with 70+ functions. Free online calculator for trigonometry, logarithms, statistics, and engineering calculations.",
    includeSchema: false // We have custom schema in page.tsx
})

export default function ScientificCalculatorLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
