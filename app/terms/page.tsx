import { Breadcrumbs } from "@/components/common/breadcrumbs"
import { GHeader } from "@/ui/gheader"

import {
  Shield,
  FileText,
  Users,
  CheckCircle,
  Mail,
  Globe,
  Scale,
  BookOpen,
  RefreshCw
} from "lucide-react"
import { createMetadata } from "@/lib/metadata-base"

export const metadata = createMetadata({
  title: "Terms of Service | Google AdSense Compliant | FastTools",
  description: "Comprehensive terms of service for FastTools covering Google AdSense compliance, user agreements, and legal obligations for free online tools.",
  path: "/terms",
  includeSchema: false
})

export default function TermsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Service - FastTools",
    description: "Comprehensive terms of service covering Google AdSense compliance, user agreements, and legal obligations for free online tools.",
    url: "https://www.fasttools.store/terms",
    publisher: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://www.fasttools.store"
    },
    datePublished: "2025-11-01",
    dateModified: "2025-11-01",
    inLanguage: "en-US",
    isAccessibleForFree: true,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <Breadcrumbs items={[{ label: "Terms of Service", href: "/terms" }]} />

          <div className="max-w-5xl mx-auto mt-8 md:mt-12">
            {/* Title Section */}
            <div className="mb-12 md:mb-16">
              <GHeader
                title="Terms of Service"
                description="Legal terms and conditions for using FastTools. Learn about your rights, obligations, and our commitment to Google AdSense compliance."
                titleSize="medium"
                descriptionSize="small"
                color="blue"
              />
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-border/30 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-heading-accent" />
                  <span className="text-sm font-medium text-foreground">Google AdSense Compliant</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-border/30 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-heading-accent" />
                  <span className="text-sm font-medium text-foreground">Legal Compliance</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-border/30 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-heading-accent" />
                  <span className="text-sm font-medium text-foreground">User Protection</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">Last updated: November 1, 2025</p>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              {/* Agreement to Terms */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Agreement to Terms</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    These Terms of Service ("Terms") govern your use of FastTools ("we," "our," or "us") website located at fasttools.store (the "Site") and our free online tools and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
                  </p>
                  <p>
                    If you do not agree to these Terms, please do not use our Services. We reserve the right to modify these Terms at any time, and your continued use of our Services after such modifications constitutes acceptance of the updated Terms.
                  </p>
                  <div className="bg-primary/10 border border-border/30 rounded-lg p-4 mt-4">
                    <p className="text-sm">
                      These terms comply with Google AdSense policies, Google Search Console requirements, and applicable laws. By using our services, you agree to comply with all Google policies and guidelines.
                    </p>
                  </div>
                </div>
              </div>

              {/* Description of Services */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Description of Services</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  FastTools provides free online tools and utilities including but not limited to:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border"></div>
                      <span className="text-muted-foreground">Calculators and financial tools</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border"></div>
                      <span className="text-muted-foreground">Currency and unit converters</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border"></div>
                      <span className="text-muted-foreground">AI-powered content generators</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border"></div>
                      <span className="text-muted-foreground">SEO and marketing tools</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border"></div>
                      <span className="text-muted-foreground">PDF utilities</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border"></div>
                      <span className="text-muted-foreground">Image processing tools</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border"></div>
                      <span className="text-muted-foreground">Social media utilities</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border"></div>
                      <span className="text-muted-foreground">Developer tools</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  All tools are provided free of charge for personal and commercial use, subject to the restrictions outlined in these Terms.
                </p>
              </div>

              {/* Google AdSense */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Google AdSense & Advertising Compliance</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-primary/10 border border-border/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-heading-accent flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-heading-accent" />
                      Google AdSense Policy Compliance
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Our Services display advertisements from third parties, including Google AdSense. These advertisements are provided by third parties and are not under our control. We are not responsible for the content, accuracy, or availability of third-party advertisements.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">User Obligations:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Do not click on ads for any reason other than genuine interest</li>
                          <li>• Do not encourage others to click on ads</li>
                          <li>• Do not use automated systems to generate ad clicks</li>
                          <li>• Do not manipulate ad placement or behavior</li>
                          <li>• Do not interfere with ad functionality</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Our Compliance:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Proper ad placement that doesn't interfere with content</li>
                          <li>• High-quality, original content standards</li>
                          <li>• Clear navigation and user experience</li>
                          <li>• No prohibited traffic sources</li>
                          <li>• No invalid click encouragement</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-heading-accent">Advertising Terms</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        By using our Services, you acknowledge that advertisements may be displayed, third-party advertisers may use cookies and tracking technologies, and we may receive compensation from advertisers.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        You can opt out of personalized advertising through your browser settings or by visiting Google's Ad Settings.
                      </p>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-heading-accent">Google Search Console</h3>
                      <p className="text-sm text-muted-foreground">
                        We comply with Google Search Console requirements including proper sitemap submission, robots.txt configuration, and technical SEO standards to ensure optimal search engine visibility and compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Rights */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">User Rights & Legal Protections</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-3 text-heading-accent flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-heading-accent" />
                      Your Rights
                    </h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Access to free tools and services</li>
                      <li>• Privacy protection as outlined in our Privacy Policy</li>
                      <li>• Data portability and deletion rights</li>
                      <li>• Fair and transparent service provision</li>
                      <li>• Protection from unauthorized data collection</li>
                    </ul>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-3 text-heading-accent flex items-center gap-2">
                      <Shield className="h-4 w-4 text-heading-accent" />
                      Our Obligations
                    </h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Provide reliable and secure services</li>
                      <li>• Protect user data and privacy</li>
                      <li>• Comply with Google AdSense policies</li>
                      <li>• Maintain service availability and performance</li>
                      <li>• Transparent data practices</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Terms Updates */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Terms Updates</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We may update these Terms of Service from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                  </p>
                  <p>
                    The updated version will be indicated by a revised "Last updated" date at the top. We encourage you to review these Terms periodically to stay informed about your rights and obligations.
                  </p>
                  <p>
                    Your continued use of our Site after any changes to these Terms constitutes your acceptance of the new terms.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
