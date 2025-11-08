"use client"

import { useState, useEffect } from "react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Shield, Cookie, Eye, Settings, CheckCircle, AlertTriangle, ExternalLink, Lock, BarChart, Target } from "lucide-react"

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
    datePublished: "2025-11-01",
    dateModified: "2025-11-01",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    about: {
      "@type": "Thing",
      name: "Cookie Policy",
      description: "Cookie management and consent policies for FastTools online tools and services"
    }
  }

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'essential') return

    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const savePreferences = () => {
    localStorage.setItem("cookie-preferences", JSON.stringify(preferences))
    localStorage.setItem("cookie-consent", "accepted")
    setSaved(true)

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
            { label: "Cookie Preferences", href: "/cookie-preferences" }
          ]} />

          <div className="max-w-5xl mx-auto">
            {}
            <div className="text-center mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">Cookie Policy</h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                Manage your cookie preferences and learn about how we use cookies in compliance with Google AdSense, Google Analytics, and privacy regulations.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-border rounded-lg">
                  <CheckCircle className="h-4 w-4 text-heading-accent" />
                  <span className="text-sm font-medium text-foreground">GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-border rounded-lg">
                  <CheckCircle className="h-4 w-4 text-heading-accent" />
                  <span className="text-sm font-medium text-foreground">CCPA Compliant</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-border rounded-lg">
                  <CheckCircle className="h-4 w-4 text-heading-accent" />
                  <span className="text-sm font-medium text-foreground">Google AdSense Compliant</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Last updated: November 1, 2025</p>
            </div>

            {}
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 border border-border flex items-center justify-center">
                    <Eye className="h-5 w-5 text-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">What Are Cookies?</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
                  </p>
                  <p>
                    You can learn more about our use of cookies in our{" "}
                    <Link href="/privacy-policy" className="text-foreground hover:text-foreground hover:underline font-medium">
                      Privacy Policy
                    </Link>.
                  </p>
                  <div className="bg-primary/10 border border-border rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Important Notice</h4>
                        <p className="text-sm text-muted-foreground">
                          Our cookie usage complies with Google AdSense policies, Google Analytics requirements, GDPR, and CCPA regulations. You have full control over your cookie preferences.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 border border-border flex items-center justify-center">
                    <Cookie className="h-5 w-5 text-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Cookie Categories</h2>
                </div>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                          <Lock className="h-4 w-4 text-foreground" />
                          Essential Cookies
                        </h3>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={preferences.essential}
                            disabled
                            className="w-4 h-4"
                          />
                          <span className="ml-2 text-sm text-muted-foreground">Always Active</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and remembering your cookie preferences. These cookies cannot be disabled.
                      </p>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                          <BarChart className="h-4 w-4 text-foreground" />
                          Analytics Cookies
                        </h3>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={preferences.analytics}
                            onChange={() => togglePreference('analytics')}
                            className="w-4 h-4"
                          />
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use Google Analytics to analyze website usage and improve our services.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                          <Target className="h-4 w-4 text-foreground" />
                          Advertising Cookies
                        </h3>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={preferences.advertising}
                            onChange={() => togglePreference('advertising')}
                            className="w-4 h-4"
                          />
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        These cookies are used to display relevant advertisements to you. They may be set by us or by third-party providers like Google AdSense. These cookies help us fund our free services.
                      </p>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                          <Settings className="h-4 w-4 text-foreground" />
                          Functional Cookies
                        </h3>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={preferences.functional}
                            onChange={() => togglePreference('functional')}
                            className="w-4 h-4"
                          />
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings for a better user experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 border border-border flex items-center justify-center">
                    <Shield className="h-5 w-5 text-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Google AdSense & Analytics Compliance</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-primary/10 border border-border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-heading-accent flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-heading-accent" />
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
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-heading-accent">Cookie Consent Management</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        We implement proper cookie consent management in compliance with GDPR and CCPA requirements. You can control your cookie preferences at any time.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Your consent is required for non-essential cookies, and you can withdraw consent at any time.
                      </p>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-heading-accent">Third-Party Cookie Controls</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        You can manage third-party cookies through your browser settings or by visiting the opt-out pages provided by Google and other advertising networks.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        We respect your privacy choices and implement appropriate technical measures to honor your preferences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 border border-border flex items-center justify-center">
                    <ExternalLink className="h-5 w-5 text-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Third-Party Cookie Management</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Some cookies on our site are set by third-party services. You can manage these cookies through your browser settings or by visiting the following links:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-heading-accent">Google Ad Settings</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Manage Google advertising cookies and personalized ads
                      </p>
                      <a href="https://www.google.com/settings/ads" className="flex items-center gap-2 text-foreground hover:text-foreground hover:underline font-medium text-sm" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Visit Google Ad Settings
                      </a>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-heading-accent">Google Analytics Opt-out</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Opt out of Google Analytics tracking
                      </p>
                      <a href="https://tools.google.com/dlpage/gaoptout" className="flex items-center gap-2 text-foreground hover:text-foreground hover:underline font-medium text-sm" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Opt out of Analytics
                      </a>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-heading-accent">Digital Advertising Alliance</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Manage advertising preferences across networks
                      </p>
                      <a href="https://www.aboutads.info/choices/" className="flex items-center gap-2 text-foreground hover:text-foreground hover:underline font-medium text-sm" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Visit DAA Opt-out
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 border border-border flex items-center justify-center">
                    <Settings className="h-5 w-5 text-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Manage Your Cookie Preferences</h2>
                </div>
                <div className="space-y-6">
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
                    <div className="mt-4 p-4 bg-heading-accent-border/10 border border-heading-accent-border/30 text-heading-accent rounded-lg flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Your cookie preferences have been saved!
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
