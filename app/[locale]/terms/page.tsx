import { Breadcrumbs } from "@/components/common/breadcrumbs"
import { GHeader } from "@/ui/gheader"
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { createMetadata } from "@/lib/metadata-base"

import {
  Shield,
  FileText,
  Users,
  CheckCircle,
  BookOpen,
  RefreshCw
} from "lucide-react"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'terms' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  return createMetadata({
    title: t('title'),
    description: t('description'),
    path: "/terms",
    includeSchema: false,
    breadcrumbs: [
      {
        "label": t('pageTitle'),
        "href": "/terms"
      }
    ],
    locale
  });
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('terms');
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: t('pageTitle'),
    description: t('description'),
    url: `https://www.fasttools.store/${locale === 'en' ? '' : locale + '/'}terms`,
    publisher: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://www.fasttools.store"
    },
    datePublished: "2025-11-01",
    dateModified: "2025-11-01",
    inLanguage: locale === 'en' ? 'en-US' : locale,
    isAccessibleForFree: true,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <Breadcrumbs items={[{ label: t('pageTitle'), href: "/terms" }]} />

          <div className="max-w-5xl mx-auto mt-8 md:mt-12">
            {/* Title Section */}
            <div className="mb-12 md:mb-16">
              <GHeader
                title={t('pageTitle')}
                description={t('pageDescription')}
                titleSize="medium"
                descriptionSize="small"
                color="blue"
              />
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-border/30 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-heading-accent" />
                  <span className="text-sm font-medium text-foreground">{t('googleAdSenseCompliant')}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-border/30 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-heading-accent" />
                  <span className="text-sm font-medium text-foreground">{t('legalCompliance')}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-border/30 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-heading-accent" />
                  <span className="text-sm font-medium text-foreground">{t('userProtection')}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">{t('lastUpdated')}</p>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              {/* Agreement to Terms */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t('agreementToTerms')}</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    {t('agreementP1')}
                  </p>
                  <p>
                    {t('agreementP2')}
                  </p>
                  <div className="bg-primary/10 border border-border/30 rounded-lg p-4 mt-4">
                    <p className="text-sm">
                      {t('agreementNote')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description of Services */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t('descriptionOfServices')}</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t('servicesIntro')}
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border"></div>
                      <span className="text-muted-foreground">{t('serviceCalculators')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border"></div>
                      <span className="text-muted-foreground">{t('serviceConverters')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border"></div>
                      <span className="text-muted-foreground">{t('serviceAI')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border"></div>
                      <span className="text-muted-foreground">{t('serviceSEO')}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border"></div>
                      <span className="text-muted-foreground">{t('servicePDF')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border"></div>
                      <span className="text-muted-foreground">{t('serviceImage')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border"></div>
                      <span className="text-muted-foreground">{t('serviceSocial')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border"></div>
                      <span className="text-muted-foreground">{t('serviceDev')}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {t('servicesNote')}
                </p>
              </div>

              {/* Google AdSense */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t('googleAdSense')}</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-primary/10 border border-border/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-heading-accent flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-heading-accent" />
                      {t('adsensePolicyTitle')}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {t('adsensePolicyDesc')}
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('userObligations')}</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• {t('obligation1')}</li>
                          <li>• {t('obligation2')}</li>
                          <li>• {t('obligation3')}</li>
                          <li>• {t('obligation4')}</li>
                          <li>• {t('obligation5')}</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('ourCompliance')}</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• {t('compliance1')}</li>
                          <li>• {t('compliance2')}</li>
                          <li>• {t('compliance3')}</li>
                          <li>• {t('compliance4')}</li>
                          <li>• {t('compliance5')}</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-heading-accent">{t('advertisingTerms')}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {t('advertisingTermsDesc')}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t('advertisingOptOut')}
                      </p>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-heading-accent">{t('googleSearchConsole')}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t('searchConsoleDesc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Rights */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t('userRights')}</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-3 text-heading-accent flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-heading-accent" />
                      {t('yourRights')}
                    </h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• {t('right1')}</li>
                      <li>• {t('right2')}</li>
                      <li>• {t('right3')}</li>
                      <li>• {t('right4')}</li>
                      <li>• {t('right5')}</li>
                    </ul>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-3 text-heading-accent flex items-center gap-2">
                      <Shield className="h-4 w-4 text-heading-accent" />
                      {t('ourObligations')}
                    </h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• {t('ourObligation1')}</li>
                      <li>• {t('ourObligation2')}</li>
                      <li>• {t('ourObligation3')}</li>
                      <li>• {t('ourObligation4')}</li>
                      <li>• {t('ourObligation5')}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Terms Updates */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t('termsUpdates')}</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    {t('updatesP1')}
                  </p>
                  <p>
                    {t('updatesP2')}
                  </p>
                  <p>
                    {t('updatesP3')}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
