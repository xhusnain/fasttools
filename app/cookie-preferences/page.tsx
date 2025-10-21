"use client"

import { useState, useEffect } from "react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Cookie, Eye, Settings, CheckCircle, AlertTriangle, ExternalLink, Mail, Globe, Lock, BarChart, Target } from "lucide-react"
import Link from "next/link"
import Head from "next/head"

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  advertising: boolean
  functional: boolean
}

export default function CookiePreferencesPage() {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    advertising: false,
    functional: false,
  })
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const savedPreferences = localStorage.getItem("cookie-preferences")
    if (savedPreferences) {
      const parsed = JSON.parse(savedPreferences)
      setPreferences(parsed)
    }
  }, [])

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cookie Policy - FastTools",
    description: "Comprehensive cookie policy covering Google AdSense cookies, Google Analytics, user consent management, and GDPR/CCPA compliance.",
    url: "https://www.fasttools.store/cookie-preferences",
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
      name: "Cookie Policy",
      description: "Cookie management and consent policies for FastTools online tools and services"
    }
  }

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'essential') return // Essential cookies cannot be disabled
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const savePreferences = () => {
    localStorage.setItem("cookie-preferences", JSON.stringify(preferences))
    localStorage.setItem("cookie-consent", "accepted")
    setSaved(true)
    
    // Initialize tracking based on preferences
    initializeTracking(preferences.analytics || preferences.advertising)
    
    setTimeout(() => setSaved(false), 3000)
  }

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      advertising: true,
      functional: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem("cookie-preferences", JSON.stringify(allAccepted))
    localStorage.setItem("cookie-consent", "accepted")
    setSaved(true)
    
    initializeTracking(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const rejectAll = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      advertising: false,
      functional: false,
    }
    setPreferences(essentialOnly)
    localStorage.setItem("cookie-preferences", JSON.stringify(essentialOnly))
    localStorage.setItem("cookie-consent", "declined")
    setSaved(true)
    
    initializeTracking(false)
    setTimeout(() => setSaved(false), 3000)
  }

  const initializeTracking = (consent: boolean) => {
    if (typeof window !== "undefined") {
      // Google Analytics consent
      if ((window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          'analytics_storage': consent ? 'granted' : 'denied',
          'ad_storage': consent ? 'granted' : 'denied',
          'personalization_storage': consent ? 'granted' : 'denied'
        })
      }
    }
  }

  return (
    <>
      <Head>
        <title>Cookie Preferences | Manage Your Privacy Settings | FastTools</title>
        <meta name="description" content="Manage your cookie preferences on FastTools. Control analytics, advertising, and essential cookies. Customize privacy settings for our free online tools." />
        <meta name="keywords" content="cookie preferences, privacy settings, cookie management, data protection, GDPR compliance" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.fasttools.store/cookie-preferences" />
      </Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Cookie Preferences", href: "/cookie-preferences" }
          ]} />

          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Cookie className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-yellow-400 px-4">Cookie Policy</h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
                Manage your cookie preferences and learn about how we use cookies in compliance with Google AdSense, Google Analytics, and privacy regulations.
              </p>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4">
                <Badge variant="secondary" className="h-7 sm:h-8 px-3 sm:px-4 text-xs sm:text-sm">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                  Google AdSense Compliant
                </Badge>
                <Badge variant="secondary" className="h-7 sm:h-8 px-3 sm:px-4 text-xs sm:text-sm">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                  GDPR Compliant
                </Badge>
                <Badge variant="secondary" className="h-7 sm:h-8 px-3 sm:px-4 text-xs sm:text-sm">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
                  CCPA Compliant
                </Badge>
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-yellow-400 px-4">Quick Navigation</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2 sm:pb-3 p-3 sm:p-6">
                    <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                      <Cookie className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Cookie Types
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-6 pt-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">Essential, analytics, advertising, and functional cookies</p>
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
                    <p className="text-xs sm:text-sm text-muted-foreground">Advertising cookies and Google Analytics compliance</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2 sm:pb-3 p-3 sm:p-6">
                    <CardTitle className="text-base sm:text-lg flex items-center gap-2">
                      <Settings className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Manage Preferences
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-6 pt-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">Control your cookie settings and consent</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-8 sm:space-y-12">
              <Card className="bg-card border border-border">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-xl sm:text-2xl font-bold text-yellow-400 flex items-center gap-2 sm:gap-3">
                    <Eye className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    What Are Cookies?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    You can learn more about our use of cookies in our{" "}
                    <Link href="/privacy-policy" className="text-link hover:text-link-hover hover:underline font-medium">
                      Privacy Policy
                    </Link>.
                  </p>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 sm:p-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Important Notice</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Our cookie usage complies with Google AdSense policies, Google Analytics requirements, GDPR, and CCPA regulations. You have full control over your cookie preferences.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cookie Categories */}
              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
                    <Cookie className="h-6 w-6 text-primary" />
                    Cookie Categories
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-yellow-400 flex items-center gap-2">
                          <Lock className="h-4 w-4 text-primary" />
                          Essential Cookies
                        </h3>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={preferences.essential}
                            disabled
                            className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
                          />
                          <span className="ml-2 text-sm text-muted-foreground">Always Active</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and remembering your cookie preferences. These cookies cannot be disabled.
                      </p>
                    </div>

                    <div className="bg-secondary/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-yellow-400 flex items-center gap-2">
                          <BarChart className="h-4 w-4 text-primary" />
                          Analytics Cookies
                        </h3>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={preferences.analytics}
                            onChange={() => togglePreference('analytics')}
                            className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
                          />
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use Google Analytics to analyze website usage and improve our services.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-yellow-400 flex items-center gap-2">
                          <Target className="h-4 w-4 text-primary" />
                          Advertising Cookies
                        </h3>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={preferences.advertising}
                            onChange={() => togglePreference('advertising')}
                            className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
                          />
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        These cookies are used to display relevant advertisements to you. They may be set by us or by third-party providers like Google AdSense. These cookies help us fund our free services.
                      </p>
                    </div>

                    <div className="bg-secondary/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-yellow-400 flex items-center gap-2">
                          <Settings className="h-4 w-4 text-primary" />
                          Functional Cookies
                        </h3>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={preferences.functional}
                            onChange={() => togglePreference('functional')}
                            className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
                          />
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings for a better user experience.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google AdSense Compliance */}
              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
                    <Shield className="h-6 w-6 text-primary" />
                    Google AdSense & Analytics Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      Google AdSense Cookie Compliance
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We use Google AdSense to display advertisements on our website. Google may use cookies to serve ads based on your prior visits to our website or other websites. Our implementation complies with Google AdSense policies and requirements.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Google AdSense Cookies:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• __gads - Google AdSense advertising cookie</li>
                          <li>• __gpi - Google AdSense interest-based advertising</li>
                          <li>• __gcl_au - Google AdSense conversion tracking</li>
                          <li>• __gcl_aw - Google AdWords conversion tracking</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Google Analytics Cookies:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• _ga - Google Analytics identification</li>
                          <li>• _ga_[ID] - Google Analytics session data</li>
                          <li>• _gid - Google Analytics user identification</li>
                          <li>• _gat - Google Analytics throttling</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-yellow-400">Cookie Consent Management</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        We implement proper cookie consent management in compliance with GDPR and CCPA requirements. You can control your cookie preferences at any time.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Your consent is required for non-essential cookies, and you can withdraw consent at any time.
                      </p>
                    </div>

                    <div className="bg-secondary/50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-yellow-400">Third-Party Cookie Controls</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        You can manage third-party cookies through your browser settings or by visiting the opt-out pages provided by Google and other advertising networks.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        We respect your privacy choices and implement appropriate technical measures to honor your preferences.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cookie Management Controls */}
              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
                    <Settings className="h-6 w-6 text-primary" />
                    Manage Your Cookie Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button onClick={acceptAll} className="flex-1 h-10 sm:h-12 text-sm sm:text-base">
                      Accept All Cookies
                    </Button>
                    <Button variant="outline" onClick={rejectAll} className="flex-1 h-10 sm:h-12 text-sm sm:text-base">
                      Reject All Non-Essential
                    </Button>
                    <Button onClick={savePreferences} className="flex-1 h-10 sm:h-12 text-sm sm:text-base">
                      Save Current Preferences
                    </Button>
                  </div>
                  
                  {saved && (
                    <div className="mt-4 p-4 bg-secondary-accent/10 border border-secondary-accent/20 text-secondary-accent rounded-lg flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Your cookie preferences have been saved!
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Third-Party Cookie Management */}
              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-yellow-400 flex items-center gap-3">
                    <ExternalLink className="h-6 w-6 text-primary" />
                    Third-Party Cookie Management
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Some cookies on our site are set by third-party services. You can manage these cookies through your browser settings or by visiting the following links:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-yellow-400">Google Ad Settings</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Manage Google advertising cookies and personalized ads
                      </p>
                      <a href="https://www.google.com/settings/ads" className="flex items-center gap-2 text-link hover:text-link-hover hover:underline font-medium text-sm" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Visit Google Ad Settings
                      </a>
                    </div>

                    <div className="bg-secondary/50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-yellow-400">Google Analytics Opt-out</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Opt out of Google Analytics tracking
                      </p>
                      <a href="https://tools.google.com/dlpage/gaoptout" className="flex items-center gap-2 text-link hover:text-link-hover hover:underline font-medium text-sm" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Opt out of Analytics
                      </a>
                    </div>

                    <div className="bg-secondary/50 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-yellow-400">Digital Advertising Alliance</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Manage advertising preferences across networks
                      </p>
                      <a href="https://www.aboutads.info/choices/" className="flex items-center gap-2 text-link hover:text-link-hover hover:underline font-medium text-sm" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Visit DAA Opt-out
                      </a>
                    </div>
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
                    If you have any questions about our use of cookies, please contact us:
                  </p>
                  <div className="bg-secondary/50 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Cookie Inquiries</h4>
                        <a href="mailto:fasttools.store@outlook.com" className="flex items-center gap-2 text-link hover:text-link-hover hover:underline font-medium">
                          <Mail className="h-4 w-4" />
                          fasttools.store@outlook.com
                        </a>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">General Support</h4>
                        <a href="mailto:fasttools.store@outlook.com" className="flex items-center gap-2 text-link hover:text-link-hover hover:underline font-medium">
                          <Mail className="h-4 w-4" />
                          fasttools.store@outlook.com
                        </a>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <h4 className="font-semibold text-foreground mb-2">Website</h4>
                      <a href="https://www.fasttools.store" className="flex items-center gap-2 text-link hover:text-link-hover hover:underline font-medium">
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
