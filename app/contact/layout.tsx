import { createMetadata } from "@/lib/metadata-base"

export const metadata = createMetadata({
    title: "Contact Us | Get Help & Support",
    description: "Contact FastTools for support, feedback, or questions about our free online tools. Get help with calculators, converters, and AI tools. We typically respond within 24-48 hours.",
    path: "/contact",
    includeSchema: false // We have custom ContactPage schema in page.tsx
})

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
