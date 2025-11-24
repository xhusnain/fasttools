import { createMetadata } from "@/lib/metadata-base"

export const metadata = createMetadata({
    title: "Cookie Preferences | Manage Your Privacy Settings",
    description: "Manage your cookie preferences on FastTools. Control analytics, advertising, and essential cookies. Customize privacy settings for our free online tools.",
    path: "/cookie-preferences",
    includeSchema: false // We have custom WebPage schema in page.tsx
})

export default function CookiePreferencesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
