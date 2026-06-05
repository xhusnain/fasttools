import { Breadcrumbs } from "@/components/common/breadcrumbs"
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld"
import { GHeader } from "@/ui/gheader"

import {
  Shield,
  Lock,
  Eye,
  Users,
  Cookie,
  CheckCircle,
  Mail,
  Globe,
  FileText,
  Database,
  Clock,
  RefreshCw
} from "lucide-react"
import { Metadata } from 'next';
import { createMetadata } from "@/lib/metadata-base"

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy | GDPR & CCPA Compliant",
  description: "Comprehensive privacy policy for FastTools covering GDPR, CCPA compliance, Google AdSense policies, data collection, and user rights for free online tools.",
  path: "/privacy-policy",
  includeSchema: false,
  breadcrumbs: [
    {
      "label": "Privacy Policy",
      "href": "/privacy-policy"
    }
  ]
})

export default function PrivacyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy - FastTools",
    description: "Comprehensive privacy policy covering GDPR, CCPA compliance, Google AdSense policies, and transparent data protection practices.",
    url: "https://fasttools.store/privacy-policy",
    publisher: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://fasttools.store"
    },
    datePublished: "2025-11-01",
    dateModified: "2025-11-01",
    inLanguage: "en-US",
    isAccessibleForFree: true,
  }

  return (
    <>
      <BreadcrumbJsonLd items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />

          <div className="max-w-5xl mx-auto mt-8 md:mt-12">
            {/* Title Section */}
            <div className="mb-12 md:mb-16">
              <GHeader
                title="Privacy Policy"
                description="Transparent data protection practices for FastTools. Learn how we collect, use, and protect your information while using our free online tools."
                titleSize="medium"
                descriptionSize="small"
                color="blue"
              />
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-border/30 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-heading-accent" />
                  <span className="text-sm font-medium text-foreground">GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-border/30 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-heading-accent" />
                  <span className="text-sm font-medium text-foreground">CCPA Compliant</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-border/30 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-heading-accent" />
                  <span className="text-sm font-medium text-foreground">Google AdSense Policy</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">Last updated: November 1,</p>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Introduction</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    At FastTools ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://fasttools.store (the "Site") and use our free online tools and services.
                  </p>
                  <p>
                    By using our Site, you consent to the data practices described in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use our Site.
                  </p>
                  <div className="bg-primary/10 border border-border/30 rounded-lg p-4 mt-4">
                    <p className="text-sm">
                      This policy complies with GDPR, CCPA, and Google AdSense requirements. We prioritize transparency and user control over personal data.
                    </p>
                  </div>
                </div>
              </div>

              {/* Information We Collect */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <Eye className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Information We Collect</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We collect information about you in several ways when you use our Site:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-heading-accent mb-3 flex items-center gap-2">
                      <Users className="h-5 w-5 text-foreground" />
                      Personal Information
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Contact information (email address) when you contact us</li>
                      <li>• Information you voluntarily provide when using our tools</li>
                      <li>• Communications with us, including support requests</li>
                    </ul>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-heading-accent mb-3 flex items-center gap-2">
                      <Globe className="h-5 w-5 text-foreground" />
                      Automatic Collection
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• IP address and location data</li>
                      <li>• Browser type and version</li>
                      <li>• Device information (type, operating system)</li>
                      <li>• Pages visited and time spent on our Site</li>
                      <li>• Referring website information</li>
                      <li>• Search terms used to find our Site</li>
                    </ul>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-heading-accent mb-3 flex items-center gap-2">
                      <Cookie className="h-5 w-5 text-foreground" />
                      Cookies & Tracking
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Essential cookies for website functionality</li>
                      <li>• Analytics cookies to understand user behavior</li>
                      <li>• Advertising cookies for personalized ads (with your consent)</li>
                      <li>• Local storage for user preferences</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tool Usage Data */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <Database className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Tool Data</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    When you use our online tools (e.g., calculator, converter, or SEO analyzer), the data you enter is processed only in your browser or temporarily on our servers to generate results.
                  </p>
                  <p>
                    We do not store or share this input data. This reassures users that their input (like numbers, text, or images) isn't saved or sold. Your tool usage data remains completely private and anonymous.
                  </p>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <Lock className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">How We Use Your Information</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We use the information we collect for the following purposes:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border mt-2"></div>
                      <div>
                        <strong className="text-foreground">Service Provision:</strong>
                        <span className="text-muted-foreground"> To provide, maintain, and improve our free online tools</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border mt-2"></div>
                      <div>
                        <strong className="text-foreground">Website Functionality:</strong>
                        <span className="text-muted-foreground"> To ensure our Site works properly and efficiently</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border mt-2"></div>
                      <div>
                        <strong className="text-foreground">Analytics:</strong>
                        <span className="text-muted-foreground"> To understand how users interact with our tools and improve user experience</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border mt-2"></div>
                      <div>
                        <strong className="text-foreground">Advertising:</strong>
                        <span className="text-muted-foreground"> To display relevant advertisements through Google AdSense (with your consent)</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border mt-2"></div>
                      <div>
                        <strong className="text-foreground">Communication:</strong>
                        <span className="text-muted-foreground"> To respond to your inquiries and provide customer support</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border mt-2"></div>
                      <div>
                        <strong className="text-foreground">Legal Compliance:</strong>
                        <span className="text-muted-foreground"> To comply with applicable laws and regulations</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border mt-2"></div>
                      <div>
                        <strong className="text-foreground">Security:</strong>
                        <span className="text-muted-foreground"> To protect against fraud, abuse, and security threats</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google AdSense */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Google AdSense & Third-Party Services</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-primary/10 border border-border/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-heading-accent flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-heading-accent" />
                      Google AdSense Compliance
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We use Google AdSense to display advertisements on our website. Google may use cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">AdSense Policies We Follow:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Proper ad placement that doesn't interfere with content</li>
                          <li>• High-quality, original content standards</li>
                          <li>• Clear navigation and user experience</li>
                          <li>• No prohibited traffic sources</li>
                          <li>• No invalid click encouragement</li>
                          <li>• No malware or deceptive practices</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Your Ad Preferences:</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          You can control personalized advertising by visiting:
                        </p>
                        <div className="space-y-2">
                          <a href="https://www.google.com/settings/ads" className="flex items-center gap-2 text-foreground hover:text-foreground hover:underline font-medium text-sm" target="_blank" rel="noopener noreferrer">
                            Google Ad Settings
                          </a>
                          <a href="https://www.aboutads.info/choices/" className="flex items-center gap-2 text-foreground hover:text-foreground hover:underline font-medium text-sm" target="_blank" rel="noopener noreferrer">
                            Digital Advertising Alliance
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-heading-accent">Google Analytics</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        We use Google Analytics to analyze how users interact with our website. This service may collect information about your device, browsing behavior, and demographics.
                      </p>
                      <a href="https://tools.google.com/dlpage/gaoptout" className="flex items-center gap-2 text-foreground hover:text-foreground hover:underline font-medium text-sm">
                        Opt out of Google Analytics
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Children's Privacy */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Children's Privacy</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Our website and tools are not directed to children under 13 years of age. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will delete it immediately.
                  </p>
                  <p>
                    If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately at support@fasttools.store so we can take appropriate action.
                  </p>
                </div>
              </div>

              {/* Your Privacy Rights */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Your Privacy Rights</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-heading-accent" />
                        GDPR Rights (EU Users)
                      </h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Right to access your personal data</li>
                        <li>• Right to rectification of inaccurate data</li>
                        <li>• Right to erasure ("right to be forgotten")</li>
                        <li>• Right to data portability</li>
                        <li>• Right to restrict processing</li>
                        <li>• Right to object to processing</li>
                      </ul>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-heading-accent" />
                        CCPA Rights (California Users)
                      </h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Right to know what personal information is collected</li>
                        <li>• Right to know whether personal information is sold</li>
                        <li>• Right to say no to the sale of personal information</li>
                        <li>• Right to access personal information</li>
                        <li>• Right to equal service and price</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/10 border border-border/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Mail className="h-4 w-4 text-foreground" />
                      Exercise Your Rights
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      To exercise these rights, please contact us at:
                    </p>
                    <a href="mailto:support@fasttools.store" className="text-foreground hover:text-foreground hover:underline font-medium">
                      support@fasttools.store
                    </a>
                    <p className="text-xs text-muted-foreground mt-2">
                      We will respond to your request within 30 days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Policy Updates */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Policy Updates</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                  </p>
                  <p>
                    The updated version will be indicated by a revised "Last updated" date at the top. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                  </p>
                  <p>
                    Your continued use of our Site after any changes to this Privacy Policy constitutes your acceptance of the new terms.
                  </p>
                </div>
              </div>

              {/* Contact Us */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Contact Us</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Privacy Inquiries</h4>
                        <a href="mailto:support@fasttools.store" className="flex items-center gap-2 text-foreground hover:text-foreground hover:underline font-medium">
                          <Mail className="h-4 w-4" />
                          support@fasttools.store
                        </a>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Website</h4>
                        <a href="https://fasttools.store" className="flex items-center gap-2 text-foreground hover:text-foreground hover:underline font-medium">
                          <Globe className="h-4 w-4" />
                          https://fasttools.store
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
