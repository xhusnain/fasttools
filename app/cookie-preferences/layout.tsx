import { createMetadata } from "@/lib/metadata-base"

export const metadata = createMetadata({
    title: "Cookie Preferences | Manage Privacy Settings",
    description: "Manage your cookie preferences and privacy settings on FastTools. Control how we use cookies for analytics and advertising to ensure your privacy.",
    path: "/cookie-preferences",
    includeSchema: false
})

export default function CookiePreferencesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
