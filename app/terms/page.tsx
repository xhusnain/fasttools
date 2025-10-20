import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, FileText, Users, AlertTriangle, CheckCircle, ExternalLink, Mail, Globe, Scale, Gavel, BookOpen } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Google AdSense Compliant | FastTools",
  description: "Comprehensive terms of service for FastTools covering Google AdSense compliance, user agreements, intellectual property, and legal obligations. Free online tools usage terms.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "user agreement",
    "Google AdSense terms",
    "legal compliance",
    "website terms",
    "usage terms",
    "online tools terms",
    "free tools terms",
    "calculator terms",
    "Google policy compliance",
    "advertising terms",
    "user obligations",
    "intellectual property rights",
    "liability limitations"
  ],
  openGraph: {
    title: "Terms of Service - FastTools | Google AdSense Compliant",
    description: "Comprehensive terms of service covering Google AdSense compliance, user agreements, intellectual property, and legal obligations for free online tools.",
    type: "website",
    url: "https://www.fasttools.store/terms",
    siteName: "FastTools",
    locale: "en_US",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Terms of Service",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - FastTools | Google AdSense Compliant",
    description: "Comprehensive terms of service covering Google AdSense compliance, user agreements, and legal obligations for free online tools.",
    creator: "@fasttools",
    site: "@fasttools",
  },
  alternates: {
    canonical: "https://www.fasttools.store/terms",
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
    metadataBase: new URL('https://www.fasttools.store'),
}

export default function TermsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Service - FastTools",
    description: "Comprehensive terms of service covering Google AdSense compliance, user agreements, intellectual property, and legal obligations for free online tools.",
    url: "https://www.fasttools.store/terms",
    publisher: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://www.fasttools.store",
      logo: "https://www.fasttools.store/logo.svg"
    },
    datePublished: "2024-12-19",
    dateModified: "2024-12-19",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    about: {
      "@type": "Thing",
      name: "Terms of Service",
      description: "Legal terms and conditions for using FastTools online tools and services"
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
      <Breadcrumbs items={[{ label: "Terms of Service", href: "/terms" }]} />

          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Scale className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-yellow-400 px-4">Terms of Service</h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
                Legal terms and conditions for using FastTools. Learn about your rights, obligations, and our commitment to Google AdSense compliance.
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4">
                <Badge variant="secondary" className="h-7 sm:h-8 px-3 sm:px-4 text-xs sm:text-sm">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                  Google AdSense Compliant
                </Badge>
                <Badge variant="secondary" className="h-7 sm:h-8 px-3 sm:px-4 text-xs sm:text-sm">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                  Legal Compliance
                </Badge>
                <Badge variant="secondary" className="h-7 sm:h-8 px-3 sm:px-4 text-xs sm:text-sm">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                  User Protection
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
                      <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Service Agreement
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-6 pt-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">Terms and conditions for using our tools</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2 sm:pb-3 p-3 sm:p-6">
                    <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Google AdSense
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-6 pt-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">Advertising compliance and user obligations</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2 sm:pb-3 p-3 sm:p-6">
                    <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                      <Gavel className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Legal Rights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-6 pt-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">User rights and legal protections</p>
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
                    Agreement to Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              These Terms of Service ("Terms") govern your use of FastTools ("we," "our," or "us") website located at fasttools.store (the "Site") and our free online tools and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
            </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              If you do not agree to these Terms, please do not use our Services. We reserve the right to modify these Terms at any time, and your continued use of our Services after such modifications constitutes acceptance of the updated Terms.
            </p>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 sm:p-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Important Notice</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          These terms comply with Google AdSense policies, Google Search Console requirements, and applicable laws. By using our services, you agree to comply with all Google policies and guidelines.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                    Description of Services
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
              FastTools provides free online tools and utilities including but not limited to:
            </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-muted-foreground">Text processing and conversion tools</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-muted-foreground">File format converters</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-muted-foreground">Image processing and editing tools</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-muted-foreground">Calculators and financial tools</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-muted-foreground">AI-powered content generators</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-muted-foreground">SEO and marketing tools</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-muted-foreground">Date and time utilities</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-muted-foreground">Social media tools</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
              All tools are provided free of charge for personal and commercial use, subject to the restrictions outlined in these Terms.
            </p>
                </CardContent>
              </Card>

              {/* Google AdSense Compliance Section */}
              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
                    <Shield className="h-6 w-6 text-primary" />
                    Google AdSense & Advertising Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      Google AdSense Policy Compliance
                    </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
                      Our Services display advertisements from third parties, including Google AdSense. These advertisements are provided by third parties and are not under our control. We are not responsible for the content, accuracy, or availability of third-party advertisements.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
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
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-yellow-400">Advertising Terms</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        By using our Services, you acknowledge that advertisements may be displayed, third-party advertisers may use cookies and tracking technologies, and we may receive compensation from advertisers.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        You can opt out of personalized advertising through your browser settings or by visiting Google's Ad Settings.
                      </p>
                    </div>

                    <div className="bg-secondary/50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-yellow-400">Google Search Console</h3>
                      <p className="text-sm text-muted-foreground">
                        We comply with Google Search Console requirements including proper sitemap submission, robots.txt configuration, and technical SEO standards to ensure optimal search engine visibility and compliance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* User Rights and Legal Protections */}
              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
                    <Users className="h-6 w-6 text-primary" />
                    User Rights & Legal Protections
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-secondary-accent/10 border border-secondary-accent/20 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary-accent" />
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
                    
                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                        <Shield className="h-4 w-4 text-accent" />
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
                </CardContent>
              </Card>

              {/* Contact Section */}
              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
                    <Mail className="h-6 w-6 text-primary" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-secondary/50 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Legal Inquiries</h4>
                        <a href="mailto:fasttools.store@outlook.com" className="flex items-center gap-2 text-primary hover:underline">
                          <Mail className="h-4 w-4" />
                  fasttools.store@outlook.com
                </a>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">General Support</h4>
                        <a href="mailto:fasttools.store@outlook.com" className="flex items-center gap-2 text-primary hover:underline">
                          <Mail className="h-4 w-4" />
                          fasttools.store@outlook.com
                        </a>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <h4 className="font-semibold text-foreground mb-2">Website</h4>
                      <a href="https://www.fasttools.store" className="flex items-center gap-2 text-primary hover:underline">
                        <Globe className="h-4 w-4" />
                  https://www.fasttools.store
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

