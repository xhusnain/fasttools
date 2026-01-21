import type { Metadata } from "next"
import type React from "react"
import Script from "next/script"
import "../globals.css"
import dynamic from "next/dynamic"
import { Header } from "@/components/common/header"
import { Footer } from "@/components/common/footer"
import { ThemeProvider } from "@/components/common/theme-provider"
import { env } from "@/config/env"
import { createMetadata, globalViewport, getWebsiteSchema } from "@/lib/metadata-base"
import { roboto, montserrat, openSans } from "@/app/fonts"
import { DeferredScript } from "@/components/common/deferred-script"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const CookieConsent = dynamic(
    () => import("@/components/common/cookie-consent").then(mod => mod.CookieConsent)
)
const WelcomePopup = dynamic(
    () => import("@/components/common/welcome-popup").then(mod => mod.WelcomePopup)
)

export const viewport = globalViewport

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const baseUrl = env.siteUrl;
    
    const localeMap: Record<string, string> = {
        'en': 'en-US',
        'es': 'es-ES',
        'de': 'de-DE',
        'pt-BR': 'pt-BR',
        'ar': 'ar-SA',
        'zh-CN': 'zh-CN'
    };

    const defaultMetadata = {
        metadataBase: new URL(baseUrl),
        title: {
            default: "FastTools - 1000+ Free Online Tools",
            template: "%s | FastTools",
        },
        description: "FastTools provides 1000+ free online tools and expert articles: PDF tools, AI generators, calculators, developer utilities, and a tech blog with in-depth tutorials. 100% free, secure local processing, and works on all devices.",
        authors: [{ name: "FastTools Team", url: baseUrl }],
        robots: {
            index: true,
            follow: true,
        },
        verification: {
            google: "l2XEjZ8SEN_FD96ft9mIUW8cPiLW4mDbX6wZabF-xv0",
            yandex: "242a8cf232328714",
            me: ["support@fasttools.store"],
            other: {
                "msvalidate.01": "DE0A07DC9E742C4C8E795D7C99EF238B",
                "p:domain_verify": "603c992f6d70753cf89c1a0141990c73",
                "facebook-domain-verification": "m4jw5d6c1jsteghq2xo00wflvif79x",
                "google-adsense-account": "ca-pub-6296569221534302",
            },
        },
        twitter: {
            card: "summary_large_image" as const,
            creator: "@ZamanIsmail7",
        },
        alternates: {
            languages: {
                'en': baseUrl, // English has no prefix with 'as-needed'
                'es': `${baseUrl}/es`,
                'de': `${baseUrl}/de`,
                'pt-BR': `${baseUrl}/pt-BR`,
                'ar': `${baseUrl}/ar`,
                'zh-CN': `${baseUrl}/zh-CN`,
                'x-default': baseUrl, // English (default locale)
            },
        },
        openGraph: {
            locale: localeMap[locale] || 'en-US',
            alternateLocale: routing.locales.filter(l => l !== locale).map(l => localeMap[l] || l),
        },
    };

    return defaultMetadata;
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages();
    const websiteSchema = {
        ...getWebsiteSchema(),
        inLanguage: locale === 'en' ? 'en-US' : locale === 'es' ? 'es-ES' : locale === 'de' ? 'de-DE' : locale === 'pt-BR' ? 'pt-BR' : locale === 'ar' ? 'ar-SA' : 'zh-CN'
    };

    return (
        <>
            <script
                dangerouslySetInnerHTML={{
                    __html: `document.documentElement.setAttribute('lang', '${locale}'); document.documentElement.setAttribute('dir', '${locale === 'ar' ? 'rtl' : 'ltr'}');`
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <NextIntlClientProvider messages={messages}>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                storageKey="theme"
                enableSystem={false}
                disableTransitionOnChange
            >
                <a href="#main-content" className="skip-link">
                    Skip to main content
                </a>
                <Header />
                <main id="main-content" role="main" tabIndex={-1} className="outline-none">
                    {children}
                </main>
                <Footer />
                <CookieConsent />
                <WelcomePopup />
                {env.isProduction && (
                    <DeferredScript
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6296569221534302"
                        id="adsbygoogle-script"
                        crossOrigin="anonymous"
                    />
                )}
            </ThemeProvider>
        </NextIntlClientProvider>
        </>
    )
}
