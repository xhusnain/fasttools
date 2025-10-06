import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - ToolifyHub | Free Online Tools Data Protection",
  description: "Read ToolifyHub's comprehensive privacy policy to understand how we collect, use, and protect your information when using our free online tools and calculators.",
  keywords: [
    "privacy policy",
    "data protection",
    "privacy",
    "GDPR",
    "CCPA",
    "personal information",
    "data security",
    "cookies",
    "user privacy",
    "online tools privacy"
  ],
  openGraph: {
    title: "Privacy Policy - ToolifyHub | Free Online Tools Data Protection",
    description: "Read ToolifyHub's comprehensive privacy policy to understand how we collect, use, and protect your information.",
    type: "website",
    url: "https://toolifyhub.com/privacy-policy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - ToolifyHub",
    description: "Read ToolifyHub's comprehensive privacy policy to understand how we collect, use, and protect your information.",
  },
  alternates: {
    canonical: "https://toolifyhub.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />

      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              At ToolifyHub, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect information about you in a variety of ways. The information we may collect on the Site
              includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Personal Data: Information you voluntarily provide when using our tools</li>
              <li>Usage Data: Information automatically collected when you visit our site</li>
              <li>Cookies and Tracking Technologies: Data collected through cookies and similar technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect in the following ways:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>To provide and maintain our services</li>
              <li>To improve and optimize our website</li>
              <li>To understand how users interact with our tools</li>
              <li>To display relevant advertisements (Google AdSense)</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and hold certain
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
              sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use Google AdSense to display advertisements on our website. Google may use cookies to serve ads based
              on your prior visits to our website or other websites. You can opt out of personalized advertising by
              visiting Google's Ads Settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use administrative, technical, and physical security measures to help protect your personal
              information. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to delete your personal information</li>
              <li>The right to opt-out of certain data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal
              information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@toolifyhub.com" className="text-primary hover:underline">
                privacy@toolifyhub.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
