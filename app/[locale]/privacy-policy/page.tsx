import { Breadcrumbs } from "@/components/common/breadcrumbs"
import { GHeader } from "@/ui/gheader"

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
import { Metadata } from 'next';
import { createMetadata } from "@/lib/metadata-base"
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('privacy');
  const tCommon = await getTranslations('common');
  
  return createMetadata({
    title: t('title'),
    description: t('description'),
    path: "/privacy-policy",
    includeSchema: false,
    breadcrumbs: [
      {
        "label": t('pageTitle'),
        "href": "/privacy-policy"
      }
    ]
  });
}

export default async function PrivacyPolicyPage() {
  const t = await getTranslations('privacy');
  const tCommon = await getTranslations('common');
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy - FastTools",
    description: "Comprehensive privacy policy covering GDPR, CCPA compliance, Google AdSense policies, and transparent data protection practices.",
    url: "https://www.fasttools.store/privacy-policy",
    publisher: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://www.fasttools.store"
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
          <Breadcrumbs items={[{ label: t('pageTitle'), href: "/privacy-policy" }]} />

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
                  <span className="text-sm font-medium text-foreground">{t('gdprCompliant')}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-border/30 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-heading-accent" />
                  <span className="text-sm font-medium text-foreground">{t('ccpaCompliant')}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-border/30 rounded-lg">
                  <CheckCircle className="h-4 w-4 text-heading-accent" />
                  <span className="text-sm font-medium text-foreground">{t('adsensePolicy')}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">{t('lastUpdated')}</p>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t('introduction')}</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t('introP1')}</p>
                  <p>{t('introP2')}</p>
                  <div className="bg-primary/10 border border-border/30 rounded-lg p-4 mt-4">
                    <p className="text-sm">{t('introNote')}</p>
                  </div>
                </div>
              </div>

              {/* Information We Collect */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <Eye className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t('infoWeCollect')}</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t('infoWeCollectDesc')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-heading-accent mb-3 flex items-center gap-2">
                      <Users className="h-5 w-5 text-foreground" />
                      {t('personalInfo')}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• {t('personalInfo1')}</li>
                      <li>• {t('personalInfo2')}</li>
                      <li>• {t('personalInfo3')}</li>
                    </ul>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-heading-accent mb-3 flex items-center gap-2">
                      <Globe className="h-5 w-5 text-foreground" />
                      {t('automaticCollection')}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• {t('auto1')}</li>
                      <li>• {t('auto2')}</li>
                      <li>• {t('auto3')}</li>
                      <li>• {t('auto4')}</li>
                      <li>• {t('auto5')}</li>
                      <li>• {t('auto6')}</li>
                    </ul>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-heading-accent mb-3 flex items-center gap-2">
                      <Cookie className="h-5 w-5 text-foreground" />
                      {t('cookiesTracking')}
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• {t('cookies1')}</li>
                      <li>• {t('cookies2')}</li>
                      <li>• {t('cookies3')}</li>
                      <li>• {t('cookies4')}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tool Usage Data */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <Database className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t('toolData')}</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t('toolDataP1')}</p>
                  <p>{t('toolDataP2')}</p>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <Lock className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t('howWeUse')}</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t('howWeUseDesc')}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border mt-2"></div>
                      <div>
                        <strong className="text-foreground">{t('serviceProvision')}</strong>
                        <span className="text-muted-foreground"> {t('serviceProvisionDesc')}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border mt-2"></div>
                      <div>
                        <strong className="text-foreground">{t('websiteFunctionality')}</strong>
                        <span className="text-muted-foreground"> {t('websiteFunctionalityDesc')}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border mt-2"></div>
                      <div>
                        <strong className="text-foreground">{t('analytics')}</strong>
                        <span className="text-muted-foreground"> {t('analyticsDesc')}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border mt-2"></div>
                      <div>
                        <strong className="text-foreground">{t('advertising')}</strong>
                        <span className="text-muted-foreground"> {t('advertisingDesc')}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border mt-2"></div>
                      <div>
                        <strong className="text-foreground">{t('communication')}</strong>
                        <span className="text-muted-foreground"> {t('communicationDesc')}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border mt-2"></div>
                      <div>
                        <strong className="text-foreground">{t('legalCompliance')}</strong>
                        <span className="text-muted-foreground"> {t('legalComplianceDesc')}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-heading-accent-border mt-2"></div>
                      <div>
                        <strong className="text-foreground">{t('security')}</strong>
                        <span className="text-muted-foreground"> {t('securityDesc')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google AdSense */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t('adsenseTitle')}</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-primary/10 border border-border/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 text-heading-accent flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-heading-accent" />
                      {t('adsenseCompliance')}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {t('adsenseP1')}
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('adsensePolicies')}</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• {t('adsensePolicy1')}</li>
                          <li>• {t('adsensePolicy2')}</li>
                          <li>• {t('adsensePolicy3')}</li>
                          <li>• {t('adsensePolicy4')}</li>
                          <li>• {t('adsensePolicy5')}</li>
                          <li>• {t('adsensePolicy6')}</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('adPreferences')}</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {t('adPreferencesDesc')}
                        </p>
                        <div className="space-y-2">
                          <a href="https://www.google.com/settings/ads" className="flex items-center gap-2 text-foreground hover:text-foreground hover:underline font-medium text-sm" target="_blank" rel="noopener noreferrer">
                            {t('googleAdSettings')}
                          </a>
                          <a href="https://www.aboutads.info/choices/" className="flex items-center gap-2 text-foreground hover:text-foreground hover:underline font-medium text-sm" target="_blank" rel="noopener noreferrer">
                            {t('digitalAdvertisingAlliance')}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 text-heading-accent">{t('googleAnalytics')}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {t('googleAnalyticsDesc')}
                      </p>
                      <a href="https://tools.google.com/dlpage/gaoptout" className="flex items-center gap-2 text-foreground hover:text-foreground hover:underline font-medium text-sm">
                        {t('optOutAnalytics')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Children's Privacy */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t('childrenPrivacy')}</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t('childrenP1')}</p>
                  <p>{t('childrenP2')}</p>
                </div>
              </div>

              {/* Your Privacy Rights */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t('privacyRights')}</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {t('privacyRightsDesc')}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-heading-accent" />
                        {t('gdprRights')}
                      </h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• {t('gdprRight1')}</li>
                        <li>• {t('gdprRight2')}</li>
                        <li>• {t('gdprRight3')}</li>
                        <li>• {t('gdprRight4')}</li>
                        <li>• {t('gdprRight5')}</li>
                        <li>• {t('gdprRight6')}</li>
                      </ul>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-heading-accent" />
                        {t('ccpaRights')}
                      </h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• {t('ccpaRight1')}</li>
                        <li>• {t('ccpaRight2')}</li>
                        <li>• {t('ccpaRight3')}</li>
                        <li>• {t('ccpaRight4')}</li>
                        <li>• {t('ccpaRight5')}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/10 border border-border/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Mail className="h-4 w-4 text-foreground" />
                      {t('exerciseRights')}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {t('exerciseRightsDesc')}
                    </p>
                    <a href="mailto:support@fasttools.store" className="text-foreground hover:text-foreground hover:underline font-medium">
                      support@fasttools.store
                    </a>
                    <p className="text-xs text-muted-foreground mt-2">
                      {t('exerciseRightsResponse')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Policy Updates */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t('policyUpdates')}</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>{t('updatesP1')}</p>
                  <p>{t('updatesP2')}</p>
                  <p>{t('updatesP3')}</p>
                </div>
              </div>

              {/* Contact Us */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t('contactUs')}</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {t('contactDesc')}
                  </p>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('privacyInquiries')}</h4>
                        <a href="mailto:support@fasttools.store" className="flex items-center gap-2 text-foreground hover:text-foreground hover:underline font-medium">
                          <Mail className="h-4 w-4" />
                          support@fasttools.store
                        </a>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('website')}</h4>
                        <a href="https://www.fasttools.store" className="flex items-center gap-2 text-foreground hover:text-foreground hover:underline font-medium">
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
