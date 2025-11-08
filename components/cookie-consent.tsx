"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  advertising: boolean
  functional: boolean
}

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    advertising: false,
    functional: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    const savedPreferences = localStorage.getItem("cookie-preferences")

    if (!consent) {
      setShowConsent(true)
    } else if (savedPreferences) {
      const parsed = JSON.parse(savedPreferences)
      setPreferences(parsed)
    }
  }, [])

  const acceptAllCookies = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      advertising: true,
      functional: true,
    }

    localStorage.setItem("cookie-consent", "accepted")
    localStorage.setItem("cookie-preferences", JSON.stringify(allAccepted))
    setPreferences(allAccepted)
    setShowConsent(false)

    initializeTracking(true)
  }

  const acceptSelectedCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    localStorage.setItem("cookie-preferences", JSON.stringify(preferences))
    setShowConsent(false)
    setShowPreferences(false)

    initializeTracking(preferences.analytics || preferences.advertising)
  }

  const declineAllCookies = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      advertising: false,
      functional: false,
    }

    localStorage.setItem("cookie-consent", "declined")
    localStorage.setItem("cookie-preferences", JSON.stringify(essentialOnly))
    setPreferences(essentialOnly)
    setShowConsent(false)

    initializeTracking(false)
  }

  const initializeTracking = (consent: boolean) => {
    if (typeof window !== "undefined") {

        if (window.gtag) {

            window.gtag('consent', 'update', {
          'analytics_storage': consent ? 'granted' : 'denied',
          'ad_storage': consent ? 'granted' : 'denied',
          'ad_user_data': consent ? 'granted' : 'denied',
          'ad_personalization': consent ? 'granted' : 'denied',
          'personalization_storage': consent ? 'granted' : 'denied'
        })
      }

      if (consent && window.adsbygoogle) {

        window.adsbygoogle.push({})
      }
    }
  }

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'essential') return

    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t shadow-lg">
      <div className="container mx-auto max-w-4xl">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🍪</span>
                <h3 className="text-lg font-semibold">Cookie Consent</h3>
              </div>
              <p className="text-sm text-foreground leading-relaxed">
                We use cookies to enhance your browsing experience, analyze our traffic, and display relevant advertisements.
                By clicking "Accept All", you consent to our use of all cookies. You can also{" "}
                <Link href="/cookie-preferences" className="text-link hover:text-link-hover hover:underline font-medium">
                  customize your preferences
                </Link>{" "}
                or read our{" "}
                <Link href="/privacy-policy" className="text-link hover:text-link-hover hover:underline font-medium">
                  Privacy Policy
                </Link>{" "}
                for more information.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={declineAllCookies}>
                Decline All
              </Button>
              <Button variant="outline" size="sm" onClick={() => setShowPreferences(true)}>
                Customize
              </Button>
              <Button size="sm" onClick={acceptAllCookies}>
                Accept All
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Cookie Preferences</h3>
              <Button variant="outline" size="sm" onClick={() => setShowPreferences(false)}>
                Back
              </Button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <h4 className="font-medium">Essential Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Required for basic website functionality. Cannot be disabled.
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.essential}
                    disabled
                    className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <h4 className="font-medium">Analytics Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Help us understand how visitors interact with our website (Google Analytics).
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={() => togglePreference('analytics')}
                    className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <h4 className="font-medium">Advertising Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Used to display relevant advertisements (Google AdSense).
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.advertising}
                    onChange={() => togglePreference('advertising')}
                    className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <h4 className="font-medium">Functional Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Remember your preferences and settings for a better experience.
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    onChange={() => togglePreference('functional')}
                    className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <Button variant="outline" size="sm" onClick={declineAllCookies}>
                Decline All
              </Button>
              <Button size="sm" onClick={acceptSelectedCookies}>
                Save Preferences
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
