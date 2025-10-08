"use client"

import { useState, useEffect } from "react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

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
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Cookie Preferences", href: "/cookie-preferences" }
      ]} />

      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Cookie Preferences</h1>
          <p className="text-muted-foreground">
            Manage your cookie preferences to control how we collect and use your data.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">What are cookies?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cookies are small text files that are stored on your device when you visit our website. They help us 
              provide you with a better experience by remembering your preferences and understanding how you use our site.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You can learn more about our use of cookies in our{" "}
              <Link href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Cookie Categories</h2>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">Essential Cookies</h3>
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
                  These cookies are necessary for the website to function properly. They enable basic functions like 
                  page navigation, access to secure areas, and remembering your cookie preferences. These cookies 
                  cannot be disabled.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">Analytics Cookies</h3>
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
                  These cookies help us understand how visitors interact with our website by collecting and reporting 
                  information anonymously. We use Google Analytics to analyze website usage and improve our services.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">Advertising Cookies</h3>
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
                  These cookies are used to display relevant advertisements to you. They may be set by us or by 
                  third-party providers like Google AdSense. These cookies help us fund our free services.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">Functional Cookies</h3>
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
                  These cookies enable enhanced functionality and personalization, such as remembering your 
                  preferences and settings for a better user experience.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Choices</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={acceptAll} className="flex-1">
                Accept All Cookies
              </Button>
              <Button variant="outline" onClick={rejectAll} className="flex-1">
                Reject All Non-Essential
              </Button>
              <Button onClick={savePreferences} className="flex-1">
                Save Current Preferences
              </Button>
            </div>
            
            {saved && (
              <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                Your cookie preferences have been saved!
              </div>
            )}
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Some cookies on our site are set by third-party services. You can manage these cookies through your 
              browser settings or by visiting the following links:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <a href="https://www.google.com/settings/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Google Ad Settings
                </a>{" "}
                - Manage Google advertising cookies
              </li>
              <li>
                <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Google Analytics Opt-out
                </a>{" "}
                - Opt out of Google Analytics
              </li>
              <li>
                <a href="https://www.aboutads.info/choices/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Digital Advertising Alliance
                </a>{" "}
                - Manage advertising preferences
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about our use of cookies, please contact us at{" "}
              <a href="mailto:privacy@fasttools.store" className="text-primary hover:underline">
                privacy@fasttools.store
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
