"use client"

import { useState, useEffect } from "react"
import type { CookiePreferences } from "@/types"
import { Breadcrumbs } from "@/components/common/breadcrumbs"
import { GButton } from "@/ui/gbutton"
import { useTranslations, useLocale } from 'next-intl'
import Link from "next/link"

import { Shield, Cookie, Eye, Settings, CheckCircle, AlertTriangle, ExternalLink, Lock, BarChart, Target } from "lucide-react"


export default function CookiePreferencesPage() {
  const t = useTranslations('cookies')
  const tCommon = useTranslations('common')
  const locale = useLocale()
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
    name: t('pageTitle'),
    description: t('description'),
    url: `https://www.fasttools.store/${locale === 'en' ? '' : locale + '/'}cookie-preferences`,
    publisher: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://www.fasttools.store"
    },
    datePublished: "2025-11-01",
    dateModified: "2025-11-01",
    inLanguage: locale === 'en' ? 'en-US' : locale,
    isAccessibleForFree: true,
    about: {
      "@type": "Thing",
      name: t('pageTitle'),
      description: t('description')
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <Breadcrumbs items={[
            { label: t('pageTitle'), href: "/cookie-preferences" }
          ]} />

          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">{t('pageTitle')}</h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                {t('pageDescription')}
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-border rounded-lg">
                  <CheckCircle className="h-4 w-4 text-heading-accent" />
                  <span className="text-sm font-medium text-foreground">{t('gdprCompliant')}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-border rounded-lg">
                  <CheckCircle className="h-4 w-4 text-heading-accent" />
                  <span className="text-sm font-medium text-foreground">{t('ccpaCompliant')}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-border rounded-lg">
                  <CheckCircle className="h-4 w-4 text-heading-accent" />
                  <span className="text-sm font-medium text-foreground">{t('googleAdSenseCompliant')}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{t('lastUpdated')}</p>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 border border-border flex items-center justify-center">
                    <Eye className="h-5 w-5 text-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{t('whatAreCookies')}</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    {t('cookiesP1')}
                  </p>
                  <p>
                    {t('cookiesP2')}{" "}
                    <Link href="/privacy-policy" className="text-foreground hover:text-foreground hover:underline font-medium">
                      {t('privacyPolicy')}
                    </Link>.
                  </p>
                  <div className="bg-primary/10 border border-border rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('importantNotice')}</h4>
                        <p className="text-sm text-muted-foreground">
                          {t('importantNoticeDesc')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookie Categories */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 border border-border flex items-center justify-center">
                    <Cookie className="h-5 w-5 text-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{t('cookieCategories')}</h2>
                </div>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                          <Lock className="h-4 w-4 text-foreground" />
                          {t('essentialCookies')}
                        </h3>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            checked={preferences.essential}
                            disabled
                            className="w-4 h-4"
                          />
                          <span className="ml-2 text-sm text-muted-foreground">{t('alwaysActive')}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {t('essentialCookiesDesc')}
                      </p>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                          <BarChart className="h-4 w-4 text-foreground" />
                          {t('analyticsCookies')}
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
                        {t('analyticsCookiesDesc')}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                          <Target className="h-4 w-4 text-foreground" />
                          {t('advertisingCookies')}
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
                        {t('advertisingCookiesDesc')}
                      </p>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-heading-accent flex items-center gap-2">
                          <Settings className="h-4 w-4 text-foreground" />
                          {t('functionalCookies')}
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
                        {t('functionalCookiesDesc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google AdSense Compliance */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 border border-border flex items-center justify-center">
                    <Shield className="h-5 w-5 text-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{t('googleAdSenseCompliance')}</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-primary/10 border border-border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-heading-accent flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-heading-accent" />
                      {t('adsenseCookieCompliance')}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {t('adsenseComplianceDesc')}
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('adsenseCookies')}</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• {t('adsenseCookie1')}</li>
                          <li>• {t('adsenseCookie2')}</li>
                          <li>• {t('adsenseCookie3')}</li>
                          <li>• {t('adsenseCookie4')}</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('analyticsCookiesTitle')}</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• {t('analyticsCookie1')}</li>
                          <li>• {t('analyticsCookie2')}</li>
                          <li>• {t('analyticsCookie3')}</li>
                          <li>• {t('analyticsCookie4')}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-heading-accent">{t('consentManagement')}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {t('consentManagementDesc')}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t('consentWithdraw')}
                      </p>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-heading-accent">{t('thirdPartyControls')}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {t('thirdPartyControlsDesc')}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t('thirdPartyPrivacy')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third-Party Cookie Management */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 border border-border flex items-center justify-center">
                    <ExternalLink className="h-5 w-5 text-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{t('thirdPartyManagement')}</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {t('thirdPartyManagementDesc')}
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-heading-accent">{t('googleAdSettings')}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {t('googleAdSettingsDesc')}
                      </p>
                      <a href="https://www.google.com/settings/ads" className="flex items-center gap-2 text-foreground hover:text-foreground hover:underline font-medium text-sm" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        {t('visitGoogleAdSettings')}
                      </a>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-heading-accent">{t('googleAnalyticsOptOut')}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {t('googleAnalyticsOptOutDesc')}
                      </p>
                      <a href="https://tools.google.com/dlpage/gaoptout" className="flex items-center gap-2 text-foreground hover:text-foreground hover:underline font-medium text-sm" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        {t('optOutAnalytics')}
                      </a>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-heading-accent">{t('digitalAdvertisingAlliance')}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {t('daaDesc')}
                      </p>
                      <a href="https://www.aboutads.info/choices/" className="flex items-center gap-2 text-foreground hover:text-foreground hover:underline font-medium text-sm" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        {t('visitDAAOptOut')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cookie Management Controls */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 border border-border flex items-center justify-center">
                    <Settings className="h-5 w-5 text-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{t('managePreferences')}</h2>
                </div>
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <GButton onClick={acceptAll} className="flex-1 h-10 sm:h-12 text-sm sm:text-base">
                      {t('acceptAllCookies')}
                    </GButton>
                    <GButton variant="outline" onClick={rejectAll} className="flex-1 h-10 sm:h-12 text-sm sm:text-base">
                      {t('rejectAllNonEssential')}
                    </GButton>
                    <GButton onClick={savePreferences} className="w-full sm:w-auto">
                      {t('savePreferences')}
                    </GButton>
                  </div>

                  {saved && (
                    <div className="mt-4 p-4 bg-heading-accent-border/10 border border-heading-accent-border/30 text-heading-accent rounded-lg flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      {t('preferencesSaved')}
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
