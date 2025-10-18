import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, Users, Cookie, AlertTriangle, CheckCircle, ExternalLink, Mail, Globe, FileText } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - FastTools | GDPR & CCPA Compliant Data Protection",
  description: "Comprehensive privacy policy for FastTools covering GDPR, CCPA compliance, Google AdSense policies, data collection, cookies, and user rights. Transparent data protection for free online tools.",
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
    "transparent data practices",
    "privacy by design",
    "data minimization",
    "user consent",
    "data retention",
    "privacy controls"
  ],
  openGraph: {
    title: "Privacy Policy - FastTools | GDPR & CCPA Compliant",
    description: "Comprehensive privacy policy covering GDPR, CCPA compliance, Google AdSense policies, and transparent data protection practices.",
    type: "website",
    url: "https://fasttools.store/privacy-policy",
    siteName: "FastTools",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - FastTools | GDPR & CCPA Compliant",
    description: "Comprehensive privacy policy covering GDPR, CCPA compliance, Google AdSense policies, and transparent data protection practices.",
    creator: "@fasttools",
    site: "@fasttools",
  },
  alternates: {
    canonical: "https://fasttools.store/privacy-policy",
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
  authors: [{ name: "FastTools Legal Team" }],
  creator: "FastTools",
  publisher: "FastTools",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fasttools.store'),
}

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
      url: "https://fasttools.store",
      logo: "https://fasttools.store/logo.svg"
    },
    datePublished: "2024-12-19",
    dateModified: "2024-12-19",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    about: {
      "@type": "Thing",
      name: "Privacy Policy",
      description: "Data protection and privacy practices for FastTools online tools"
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />

          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-yellow-400 px-4">Privacy Policy</h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
                Transparent data protection practices for FastTools. Learn how we collect, use, and protect your information while using our free online tools.
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4">
                <Badge variant="secondary" className="h-7 sm:h-8 px-3 sm:px-4 text-xs sm:text-sm">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                  GDPR Compliant
                </Badge>
                <Badge variant="secondary" className="h-7 sm:h-8 px-3 sm:px-4 text-xs sm:text-sm">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                  CCPA Compliant
                </Badge>
                <Badge variant="secondary" className="h-7 sm:h-8 px-3 sm:px-4 text-xs sm:text-sm">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                  Google AdSense Policy
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Last updated: December 19, 2024</p>
            </div>

            {/* Quick Navigation */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-yellow-400 px-4">Quick Navigation</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2 sm:pb-3 p-3 sm:p-6">
                    <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                      <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Data Collection
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-6 pt-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">What information we collect and why</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2 sm:pb-3 p-3 sm:p-6">
                    <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                      <Cookie className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Cookies & Tracking
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-6 pt-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">How we use cookies and tracking technologies</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2 sm:pb-3 p-3 sm:p-6">
                    <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Your Rights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-6 pt-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">GDPR, CCPA, and privacy rights</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-8 sm:space-y-12">
              <Card className="bg-card border border-border">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-xl sm:text-2xl font-bold text-yellow-400 flex items-center gap-2 sm:gap-3">
                    <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    Introduction
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    At FastTools ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website fasttools.store (the "Site") and use our free online tools and services.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    By using our Site, you consent to the data practices described in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use our Site.
                  </p>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 sm:p-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Important Notice</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          This policy complies with GDPR, CCPA, and Google AdSense requirements. We prioritize transparency and user control over personal data.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-xl sm:text-2xl font-bold text-yellow-400 flex items-center gap-2 sm:gap-3">
                    <Eye className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    Information We Collect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    We collect information about you in several ways when you use our Site:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    <div className="bg-secondary/50 rounded-lg p-3 sm:p-4">
                        <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-yellow-400 flex items-center gap-2">
                          <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                          Personal Information
                        </h3>
                      <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                        <li>• Contact information (email address) when you contact us</li>
                        <li>• Information you voluntarily provide when using our tools</li>
                        <li>• Communications with us, including support requests</li>
                      </ul>
                    </div>

                    <div className="bg-secondary/50 rounded-lg p-3 sm:p-4">
                        <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-yellow-400 flex items-center gap-2">
                          <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                          Automatic Collection
                        </h3>
                      <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                        <li>• IP address and location data</li>
                        <li>• Browser type and version</li>
                        <li>• Device information (type, operating system)</li>
                        <li>• Pages visited and time spent on our Site</li>
                        <li>• Referring website information</li>
                        <li>• Search terms used to find our Site</li>
                      </ul>
                    </div>

                    <div className="bg-secondary/50 rounded-lg p-3 sm:p-4">
                        <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-yellow-400 flex items-center gap-2">
                          <Cookie className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                          Cookies & Tracking
                        </h3>
                      <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                        <li>• Essential cookies for website functionality</li>
                        <li>• Analytics cookies to understand user behavior</li>
                        <li>• Advertising cookies for personalized ads (with your consent)</li>
                        <li>• Local storage for user preferences</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
                    <Lock className="h-6 w-6 text-primary" />
                    How We Use Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    We use the information we collect for the following purposes:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                        <div>
                          <strong className="text-foreground">Service Provision:</strong>
                          <span className="text-muted-foreground"> To provide, maintain, and improve our free online tools</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                        <div>
                          <strong className="text-foreground">Website Functionality:</strong>
                          <span className="text-muted-foreground"> To ensure our Site works properly and efficiently</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                        <div>
                          <strong className="text-foreground">Analytics:</strong>
                          <span className="text-muted-foreground"> To understand how users interact with our tools and improve user experience</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                        <div>
                          <strong className="text-foreground">Advertising:</strong>
                          <span className="text-muted-foreground"> To display relevant advertisements through Google AdSense (with your consent)</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                        <div>
                          <strong className="text-foreground">Communication:</strong>
                          <span className="text-muted-foreground"> To respond to your inquiries and provide customer support</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                        <div>
                          <strong className="text-foreground">Legal Compliance:</strong>
                          <span className="text-muted-foreground"> To comply with applicable laws and regulations</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                        <div>
                          <strong className="text-foreground">Security:</strong>
                          <span className="text-muted-foreground"> To protect against fraud, abuse, and security threats</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google AdSense Compliance Section */}
              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
                    <Shield className="h-6 w-6 text-primary" />
                    Google AdSense & Third-Party Services
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      Google AdSense Compliance
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We use Google AdSense to display advertisements on our website. Google may use cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
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
                          <a href="https://www.google.com/settings/ads" className="flex items-center gap-2 text-primary hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            Google Ad Settings
                          </a>
                          <a href="https://www.aboutads.info/choices/" className="flex items-center gap-2 text-primary hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            Digital Advertising Alliance
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-secondary/50 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-3 text-yellow-400">Google Analytics</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        We use Google Analytics to analyze how users interact with our website. This service may collect information about your device, browsing behavior, and demographics.
                      </p>
                      <a href="https://tools.google.com/dlpage/gaoptout" className="flex items-center gap-2 text-primary hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Opt out of Google Analytics
                      </a>
                    </div>

                    <div className="bg-secondary/50 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-3 text-yellow-400">Vercel Analytics</h3>
                      <p className="text-sm text-muted-foreground">
                        We use Vercel Analytics to monitor website performance and user experience. This service collects anonymous usage data to help us improve our services.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* User Rights Section */}
              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
                    <Users className="h-6 w-6 text-primary" />
                    Your Privacy Rights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-secondary-accent/10 border border-secondary-accent/20 rounded-lg p-4">
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary-accent" />
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
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-accent" />
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
                  </div>

                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      Exercise Your Rights
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      To exercise these rights, please contact us at:
                    </p>
                    <a href="mailto:privacy@fasttools.store" className="text-primary hover:underline font-medium">
                      privacy@fasttools.store
                    </a>
                    <p className="text-xs text-muted-foreground mt-2">
                      We will respond to your request within 30 days.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Section */}
              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
                    <Mail className="h-6 w-6 text-primary" />
                    Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-secondary/50 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Privacy Inquiries</h4>
                        <a href="mailto:privacy@fasttools.store" className="flex items-center gap-2 text-primary hover:underline">
                          <Mail className="h-4 w-4" />
                          privacy@fasttools.store
                        </a>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">AdSense Compliance</h4>
                        <a href="mailto:adsense-compliance@fasttools.store" className="flex items-center gap-2 text-primary hover:underline">
                          <Mail className="h-4 w-4" />
                          adsense-compliance@fasttools.store
                        </a>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <h4 className="font-semibold text-foreground mb-2">Website</h4>
                      <a href="https://fasttools.store" className="flex items-center gap-2 text-primary hover:underline">
                        <Globe className="h-4 w-4" />
                        https://fasttools.store
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

