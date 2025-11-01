import { Breadcrumbs } from "@/components/breadcrumbs"
import { GHeader } from "@/components/globalcomponents/gheader"
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
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | GDPR & CCPA Compliant | FastTools",
  description: "Comprehensive privacy policy for FastTools covering GDPR, CCPA compliance, Google AdSense policies, data collection, and user rights for free online tools.",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR compliance",
    "CCPA compliance", 
    "Google AdSense privacy",
    "cookie policy",
    "data security",
    "user privacy rights",
    "online tools privacy",
    "transparent data practices"
  ],
  openGraph: {
    title: "Privacy Policy - FastTools | GDPR & CCPA Compliant",
    description: "Comprehensive privacy policy covering GDPR, CCPA compliance, Google AdSense policies, and transparent data protection practices.",
    type: "website",
    url: "https://www.fasttools.store/privacy-policy",
    siteName: "FastTools",
    locale: "en_US",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Privacy Policy",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - FastTools | GDPR & CCPA Compliant",
    description: "Comprehensive privacy policy covering GDPR, CCPA compliance, Google AdSense policies, and transparent data protection practices.",
    creator: "@fasttools",
    site: "@fasttools",
  },
  alternates: {
    canonical: "https://www.fasttools.store/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
}

export default function PrivacyPolicyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy - FastTools",
    description: "Comprehensive privacy policy covering GDPR, CCPA compliance, Google AdSense policies, and transparent data protection practices.",
    url: "https://www.fasttools.store/privacy-policy",
    publisher: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://www.fasttools.store",
      logo: "https://www.fasttools.store/logo.svg"
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
          <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />

          <div className="max-w-5xl mx-auto mt-8 md:mt-12">
            {/* Title Section */}
            <div className="mb-12 md:mb-16">
              <GHeader
                title="Privacy Policy"
                description="Transparent data protection practices for FastTools. Learn how we collect, use, and protect your information while using our free online tools."
                titleSize="medium"
                descriptionSize="small"
                color="orange"
              />
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium text-white">GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium text-white">CCPA Compliant</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium text-white">Google AdSense Policy</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 text-center mt-4">Last updated: November 1, 2025</p>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-black border border-orange-500/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-orange-500">Introduction</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    At FastTools ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website fasttools.store (the "Site") and use our free online tools and services.
                  </p>
                  <p>
                    By using our Site, you consent to the data practices described in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use our Site.
                  </p>
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 mt-4">
                    <p className="text-sm">
                      This policy complies with GDPR, CCPA, and Google AdSense requirements. We prioritize transparency and user control over personal data.
                    </p>
                  </div>
                </div>
              </div>

              {/* Information We Collect */}
              <div className="bg-black border border-orange-500/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                    <Eye className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-orange-500">Information We Collect</h2>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  We collect information about you in several ways when you use our Site:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-black border border-border rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-green-500 mb-3 flex items-center gap-2">
                      <Users className="h-5 w-5 text-orange-500" />
                      Personal Information
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Contact information (email address) when you contact us</li>
                      <li>• Information you voluntarily provide when using our tools</li>
                      <li>• Communications with us, including support requests</li>
                    </ul>
                  </div>

                  <div className="bg-black border border-border rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-green-500 mb-3 flex items-center gap-2">
                      <Globe className="h-5 w-5 text-orange-500" />
                      Automatic Collection
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• IP address and location data</li>
                      <li>• Browser type and version</li>
                      <li>• Device information (type, operating system)</li>
                      <li>• Pages visited and time spent on our Site</li>
                      <li>• Referring website information</li>
                      <li>• Search terms used to find our Site</li>
                    </ul>
                  </div>

                  <div className="bg-black border border-border rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-green-500 mb-3 flex items-center gap-2">
                      <Cookie className="h-5 w-5 text-orange-500" />
                      Cookies & Tracking
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• Essential cookies for website functionality</li>
                      <li>• Analytics cookies to understand user behavior</li>
                      <li>• Advertising cookies for personalized ads (with your consent)</li>
                      <li>• Local storage for user preferences</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tool Usage Data */}
              <div className="bg-black border border-orange-500/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                    <Database className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-orange-500">Tool Data</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    When you use our online tools (e.g., calculator, converter, or SEO analyzer), the data you enter is processed only in your browser or temporarily on our servers to generate results.
                  </p>
                  <p>
                    We do not store or share this input data. This reassures users that their input (like numbers, text, or images) isn't saved or sold. Your tool usage data remains completely private and anonymous.
                  </p>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="bg-black border border-orange-500/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                    <Lock className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-orange-500">How We Use Your Information</h2>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  We use the information we collect for the following purposes:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                      <div>
                        <strong className="text-white">Service Provision:</strong>
                        <span className="text-gray-400"> To provide, maintain, and improve our free online tools</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                      <div>
                        <strong className="text-white">Website Functionality:</strong>
                        <span className="text-gray-400"> To ensure our Site works properly and efficiently</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                      <div>
                        <strong className="text-white">Analytics:</strong>
                        <span className="text-gray-400"> To understand how users interact with our tools and improve user experience</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                      <div>
                        <strong className="text-white">Advertising:</strong>
                        <span className="text-gray-400"> To display relevant advertisements through Google AdSense (with your consent)</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                      <div>
                        <strong className="text-white">Communication:</strong>
                        <span className="text-gray-400"> To respond to your inquiries and provide customer support</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                      <div>
                        <strong className="text-white">Legal Compliance:</strong>
                        <span className="text-gray-400"> To comply with applicable laws and regulations</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                      <div>
                        <strong className="text-white">Security:</strong>
                        <span className="text-gray-400"> To protect against fraud, abuse, and security threats</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google AdSense */}
              <div className="bg-black border border-orange-500/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-orange-500">Google AdSense & Third-Party Services</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-green-500 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Google AdSense Compliance
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      We use Google AdSense to display advertisements on our website. Google may use cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-white mb-2">AdSense Policies We Follow:</h4>
                        <ul className="space-y-1 text-sm text-gray-400">
                          <li>• Proper ad placement that doesn't interfere with content</li>
                          <li>• High-quality, original content standards</li>
                          <li>• Clear navigation and user experience</li>
                          <li>• No prohibited traffic sources</li>
                          <li>• No invalid click encouragement</li>
                          <li>• No malware or deceptive practices</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Your Ad Preferences:</h4>
                        <p className="text-sm text-gray-400 mb-3">
                          You can control personalized advertising by visiting:
                        </p>
                        <div className="space-y-2">
                          <a href="https://www.google.com/settings/ads" className="flex items-center gap-2 text-orange-500 hover:text-orange-400 hover:underline font-medium text-sm" target="_blank" rel="noopener noreferrer">
                            Google Ad Settings
                          </a>
                          <a href="https://www.aboutads.info/choices/" className="flex items-center gap-2 text-orange-500 hover:text-orange-400 hover:underline font-medium text-sm" target="_blank" rel="noopener noreferrer">
                            Digital Advertising Alliance
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-black border border-border rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-green-500">Google Analytics</h3>
                      <p className="text-sm text-gray-400 mb-3">
                        We use Google Analytics to analyze how users interact with our website. This service may collect information about your device, browsing behavior, and demographics.
                      </p>
                      <a href="https://tools.google.com/dlpage/gaoptout" className="flex items-center gap-2 text-orange-500 hover:text-orange-400 hover:underline font-medium text-sm">
                        Opt out of Google Analytics
                      </a>
                    </div>

                    <div className="bg-black border border-border rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-green-500">Vercel Analytics</h3>
                      <p className="text-sm text-gray-400">
                        We use Vercel Analytics to monitor website performance and user experience. This service collects anonymous usage data to help us improve our services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Children's Privacy */}
              <div className="bg-black border border-orange-500/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-orange-500">Children's Privacy</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    Our website and tools are not directed to children under 13 years of age. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will delete it immediately.
                  </p>
                  <p>
                    If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately at fasttools.store@outlook.com so we can take appropriate action.
                  </p>
                </div>
              </div>

              {/* Your Privacy Rights */}
              <div className="bg-black border border-orange-500/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-orange-500">Your Privacy Rights</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-400 leading-relaxed">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-black border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-green-500 mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        GDPR Rights (EU Users)
                      </h3>
                      <ul className="space-y-1 text-sm text-gray-400">
                        <li>• Right to access your personal data</li>
                        <li>• Right to rectification of inaccurate data</li>
                        <li>• Right to erasure ("right to be forgotten")</li>
                        <li>• Right to data portability</li>
                        <li>• Right to restrict processing</li>
                        <li>• Right to object to processing</li>
                      </ul>
                    </div>
                    
                    <div className="bg-black border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-green-500 mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        CCPA Rights (California Users)
                      </h3>
                      <ul className="space-y-1 text-sm text-gray-400">
                        <li>• Right to know what personal information is collected</li>
                        <li>• Right to know whether personal information is sold</li>
                        <li>• Right to say no to the sale of personal information</li>
                        <li>• Right to access personal information</li>
                        <li>• Right to equal service and price</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <Mail className="h-4 w-4 text-orange-500" />
                      Exercise Your Rights
                    </h4>
                    <p className="text-sm text-gray-400 mb-3">
                      To exercise these rights, please contact us at:
                    </p>
                    <a href="mailto:fasttools.store@outlook.com" className="text-orange-500 hover:text-orange-400 hover:underline font-medium">
                      fasttools.store@outlook.com
                    </a>
                    <p className="text-xs text-gray-400 mt-2">
                      We will respond to your request within 30 days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Policy Updates */}
              <div className="bg-black border border-orange-500/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-orange-500">Policy Updates</h2>
                </div>
                <div className="space-y-4 text-gray-400 leading-relaxed">
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
              <div className="bg-black border border-orange-500/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-orange-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-orange-500">Contact Us</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-400 leading-relaxed">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-black border border-border rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-white mb-2">Privacy Inquiries</h4>
                        <a href="mailto:fasttools.store@outlook.com" className="flex items-center gap-2 text-orange-500 hover:text-orange-400 hover:underline font-medium">
                          <Mail className="h-4 w-4" />
                          fasttools.store@outlook.com
                        </a>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">Website</h4>
                        <a href="https://www.fasttools.store" className="flex items-center gap-2 text-orange-500 hover:text-orange-400 hover:underline font-medium">
                          <Globe className="h-4 w-4" />
                          https://www.fasttools.store
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
