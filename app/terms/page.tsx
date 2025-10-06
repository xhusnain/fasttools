import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - FastTools | Free Online Tools Usage Terms",
  description: "Read fasttools.store's comprehensive terms of service to understand the rules and regulations for using our free online tools and calculators.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "user agreement",
    "website terms",
    "legal terms",
    "usage terms",
    "online tools terms",
    "free tools terms",
    "calculator terms"
  ],
  openGraph: {
    title: "Terms of Service - FastTools | Free Online Tools Usage Terms",
    description: "Read fasttools.store's comprehensive terms of service to understand the rules and regulations for using our free online tools.",
    type: "website",
    url: "https://fasttools.store/terms",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - FastTools",
    description: "Read fasttools.store's comprehensive terms of service to understand the rules and regulations for using our free online tools.",
  },
  alternates: {
    canonical: "https://fasttools.store/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs items={[{ label: "Terms of Service", href: "/terms" }]} />

      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using fasttools.store, you accept and agree to be bound by the terms and provision of this
              agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Use License</h2>
            <p className="text-muted-foreground leading-relaxed">
              Permission is granted to temporarily use fasttools.store for personal, non-commercial use only. This is the
              grant of a license, not a transfer of title.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed">
              You are responsible for maintaining the confidentiality of your account and for all activities that occur
              under your account. You agree to use fasttools.store in compliance with all applicable laws and regulations.
              You must not misuse our services, attempt to access unauthorized areas, or interfere with the proper
              functioning of the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              The tools and information on fasttools.store are provided "as is". We make no warranties, expressed or implied,
              and hereby disclaim all warranties including implied warranties of merchantability or fitness for any
              particular purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Limitations</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall fasttools.store or its suppliers be liable for any damages arising out of the use or
              inability to use the tools on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:legal@fasttools.store" className="text-primary hover:underline">
                legal@fasttools.store
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
