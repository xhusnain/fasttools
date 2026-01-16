import { createMetadata } from "@/lib/metadata-base"
import type { Metadata } from "next"

export const metadata: Metadata = createMetadata({
  title: "Cookie Preferences - Manage Your Cookie Settings",
  description: "Manage your cookie preferences for FastTools. Control Google AdSense, Google Analytics, and other cookies. GDPR and CCPA compliant cookie management.",
  path: "/cookie-preferences",
  breadcrumbs: [
    { label: "Cookie Preferences", href: "/cookie-preferences" }
  ]
})

export default function CookiePreferencesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
