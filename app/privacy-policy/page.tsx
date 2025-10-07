import { Breadcrumbs } from "@/components/breadcrumbs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - FastTools | Free Online Tools Data Protection",
  description: "Read fasttools.store's comprehensive privacy policy to understand how we collect, use, and protect your information when using our free online tools and calculators.",
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
    title: "Privacy Policy - FastTools | Free Online Tools Data Protection",
    description: "Read fasttools.store's comprehensive privacy policy to understand how we collect, use, and protect your information.",
    type: "website",
    url: "https://fasttools.store/privacy-policy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - FastTools",
    description: "Read fasttools.store's comprehensive privacy policy to understand how we collect, use, and protect your information.",
  },
  alternates: {
    canonical: "https://fasttools.store/privacy-policy",
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
          <p className="text-muted-foreground">Last updated: December 19, 2024</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              At FastTools ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website fasttools.store (the "Site") and use our free online tools and services.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              By using our Site, you consent to the data practices described in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use our Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect information about you in several ways when you use our Site:
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Contact information (email address) when you contact us</li>
              <li>Information you voluntarily provide when using our tools</li>
              <li>Communications with us, including support requests</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Device information (type, operating system)</li>
              <li>Pages visited and time spent on our Site</li>
              <li>Referring website information</li>
              <li>Search terms used to find our Site</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Cookies and Tracking Technologies</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand user behavior</li>
              <li>Advertising cookies for personalized ads (with your consent)</li>
              <li>Local storage for user preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Service Provision:</strong> To provide, maintain, and improve our free online tools</li>
              <li><strong>Website Functionality:</strong> To ensure our Site works properly and efficiently</li>
              <li><strong>Analytics:</strong> To understand how users interact with our tools and improve user experience</li>
              <li><strong>Advertising:</strong> To display relevant advertisements through Google AdSense (with your consent)</li>
              <li><strong>Communication:</strong> To respond to your inquiries and provide customer support</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
              <li><strong>Security:</strong> To protect against fraud, abuse, and security threats</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience and analyze our traffic. Cookies are small text files stored on your device that help us remember your preferences and understand how you use our Site.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Types of Cookies We Use</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand website usage (Google Analytics)</li>
              <li><strong>Advertising Cookies:</strong> Used to display relevant ads (Google AdSense)</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>

            <p className="text-muted-foreground leading-relaxed">
              You can control cookies through your browser settings. However, disabling certain cookies may affect the functionality of our Site. For more information about managing cookies, visit{" "}
              <a href="https://www.allaboutcookies.org/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                allaboutcookies.org
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use several third-party services that may collect information about you:
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Google AdSense</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use Google AdSense to display advertisements on our website. Google may use cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You can opt out of personalized advertising by visiting{" "}
              <a href="https://www.google.com/settings/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                Google's Ad Settings
              </a>{" "}
              or by visiting{" "}
              <a href="https://www.aboutads.info/choices/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                www.aboutads.info/choices/
              </a>.
            </p>

            <h3 className="text-xl font-semibold mb-3">Google Analytics</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use Google Analytics to analyze how users interact with our website. This service may collect information about your device, browsing behavior, and demographics. You can opt out of Google Analytics by installing the{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>

            <h3 className="text-xl font-semibold mb-3">Vercel Analytics</h3>
            <p className="text-muted-foreground leading-relaxed">
              We use Vercel Analytics to monitor website performance and user experience. This service collects anonymous usage data to help us improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business</li>
              <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights, property, or safety</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, user information may be transferred as part of the transaction</li>
              <li><strong>Consent:</strong> We may share information with your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Secure hosting and infrastructure</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Opt-out:</strong> Opt out of certain data processing activities</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where consent is the legal basis</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise these rights, please contact us at{" "}
              <a href="mailto:privacy@fasttools.store" className="text-primary hover:underline">
                privacy@fasttools.store
              </a>. We will respond to your request within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-muted-foreground">
                <strong>Email:</strong>{" "}
                <a href="mailto:privacy@fasttools.store" className="text-primary hover:underline">
                  privacy@fasttools.store
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
