import { createMetadata } from "@/lib/metadata-base"

export const metadata = createMetadata({
    title: "Contact Us",
    description: "Get in touch with fasttools.store support team for feedback, tool requests, or assistance.",
    path: "/contact",
    includeSchema: false
})

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
