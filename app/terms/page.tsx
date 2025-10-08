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
          <p className="text-muted-foreground">Last updated: December 19, 2024</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service ("Terms") govern your use of FastTools ("we," "our," or "us") website located at fasttools.store (the "Site") and our free online tools and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              If you do not agree to these Terms, please do not use our Services. We reserve the right to modify these Terms at any time, and your continued use of our Services after such modifications constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Description of Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              FastTools provides free online tools and utilities including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Text processing and conversion tools</li>
              <li>File format converters</li>
              <li>Image processing and editing tools</li>
              <li>Calculators and financial tools</li>
              <li>AI-powered content generators</li>
              <li>SEO and marketing tools</li>
              <li>Date and time utilities</li>
              <li>Social media tools</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              All tools are provided free of charge for personal and commercial use, subject to the restrictions outlined in these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Acceptable Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree to use our Services only for lawful purposes and in accordance with these Terms. You may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Use our Services for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Interfere with or disrupt our Services or servers</li>
              <li>Use automated systems to access our Services without permission</li>
              <li>Upload or transmit viruses, malware, or other harmful code</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Use our Services to create or distribute spam or unsolicited communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">User Content and Data</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you use our Services, you may upload, input, or provide content and data ("User Content"). You retain ownership of your User Content, but by using our Services, you grant us a limited, non-exclusive, royalty-free license to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Process your User Content to provide our Services</li>
              <li>Store your User Content temporarily for processing</li>
              <li>Improve our Services based on usage patterns</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We do not claim ownership of your User Content and will not use it for purposes other than providing our Services. We implement appropriate security measures to protect your data, but you are responsible for backing up any important information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Services, including all content, features, and functionality, are owned by FastTools and are protected by copyright, trademark, and other intellectual property laws. You may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Copy, modify, or distribute our Services without permission</li>
              <li>Reverse engineer, decompile, or disassemble our Services</li>
              <li>Remove or alter any copyright, trademark, or other proprietary notices</li>
              <li>Use our trademarks or logos without written permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Advertising and Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our Services may display advertisements from third parties, including Google AdSense. These advertisements are provided by third parties and are not under our control. We are not responsible for the content, accuracy, or availability of third-party advertisements.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By using our Services, you acknowledge that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Advertisements may be displayed on our website</li>
              <li>Third-party advertisers may use cookies and tracking technologies</li>
              <li>We may receive compensation from advertisers</li>
              <li>You can opt out of personalized advertising through your browser settings</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>AdSense Policy Compliance:</strong> We comply with Google AdSense policies and guidelines. Users are prohibited from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Clicking on ads for any reason other than genuine interest</li>
              <li>Encouraging others to click on ads</li>
              <li>Using automated systems to generate ad clicks or impressions</li>
              <li>Manipulating ad placement or behavior</li>
              <li>Interfering with ad functionality or performance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Privacy and Data Protection</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your privacy is important to us. Our collection and use of your information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our Services, you consent to the collection and use of your information as described in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Disclaimers and Limitations</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>DISCLAIMER:</strong> Our Services are provided "as is" and "as available" without warranties of any kind, either express or implied. We disclaim all warranties, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Warranties of merchantability and fitness for a particular purpose</li>
              <li>Warranties of non-infringement</li>
              <li>Warranties regarding accuracy, reliability, or completeness</li>
              <li>Warranties regarding uninterrupted or error-free operation</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>LIMITATION OF LIABILITY:</strong> To the maximum extent permitted by law, FastTools shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Loss of profits, data, or business opportunities</li>
              <li>Damages resulting from use or inability to use our Services</li>
              <li>Damages resulting from unauthorized access to your data</li>
              <li>Damages resulting from third-party conduct or content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify, defend, and hold harmless FastTools and its officers, directors, employees, and agents from and against any claims, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or relating to your use of our Services, violation of these Terms, or infringement of any rights of another party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may terminate or suspend your access to our Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use our Services will cease immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Governing Law and Dispute Resolution</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles. Any disputes arising out of or relating to these Terms or our Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website and updating the "Last updated" date. Your continued use of our Services after such modifications constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-muted-foreground">
                <strong>Email:</strong>{" "}
                <a href="mailto:legal@fasttools.store" className="text-primary hover:underline">
                  legal@fasttools.store
                </a>
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Website:</strong>{" "}
                <a href="https://fasttools.store" className="text-primary hover:underline">
                  https://fasttools.store
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
