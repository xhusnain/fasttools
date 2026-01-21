import { Breadcrumbs } from "@/components/common/breadcrumbs"
import { GHeader } from "@/ui/gheader"

import {
  Search,
  CheckCircle,
  Zap,
  Globe,
  Eye,
  Compass,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import { Metadata } from 'next';
import { createMetadata } from "@/lib/metadata-base"
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('about');
  const tCommon = await getTranslations('common');
  
  return createMetadata({
    title: t('title'),
    description: t('description'),
    path: "/about",
    breadcrumbs: [
      { label: tCommon('about'), href: "/about" }
    ]
  });
}

export default async function AboutPage() {
  const t = await getTranslations('about');
  const tCommon = await getTranslations('common');
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About FastTools - Leading Free Online Tools Platform",
    description: "Discover FastTools, the world's most comprehensive free online tools platform. Access 1000+ professional tools including AI generators, converters, calculators, SEO tools, and productivity utilities.",
    url: "https://www.fasttools.store/about",
    mainEntity: {
      "@type": "Organization",
      name: "FastTools",
      alternateName: "fasttools.store",
      description: "FastTools is the world's leading free online tools platform, offering 1000+ professional digital tools including AI generators, converters, calculators, SEO tools, and productivity utilities. Trusted by millions of users worldwide.",
      url: "https://www.fasttools.store",
      foundingDate: "2024",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "support@fasttools.store",
        availableLanguage: "English"
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "US"
      },
      sameAs: [
        "https://x.com/ZamanIsmail7",
        "https://www.facebook.com/profile.php?id=61582711433268",
        "https://www.youtube.com/@fasttools_official",
        "https://www.linkedin.com/company/fasttools/?viewAsMember=true"
      ]
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.fasttools.store"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://www.fasttools.store/about"
        }
      ]
    }
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.fasttools.store/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://www.fasttools.store/about"
      }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <Breadcrumbs
            items={[
              { label: tCommon('about'), href: "/about" },
            ]}
          />

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
            </div>

            {/* Why FastTools Section */}
            <div className="bg-card border border-border/30 rounded-2xl p-8 md:p-12 mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">{t('whyChooseTitle')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Hard to Find Tools */}
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-primary/10 border border-border/30 flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 md:h-10 md:w-10 text-foreground" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-heading-accent mb-2">{t('hardToFindTitle')}</h3>
                  <p className="text-sm md:text-base text-foreground leading-relaxed">
                    {t('hardToFindDesc')}
                  </p>
                </div>

                {/* Tools That Work */}
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-primary/10 border border-border/30 flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 md:h-10 md:w-10 text-foreground" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-heading-accent mb-2">{t('toolsThatWorkTitle')}</h3>
                  <p className="text-sm md:text-base text-foreground leading-relaxed">
                    {t('toolsThatWorkDesc')}
                  </p>
                </div>

                {/* All in One Place */}
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-primary/10 border border-border/30 flex items-center justify-center mb-4">
                    <Zap className="h-8 w-8 md:h-10 md:w-10 text-foreground" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-heading-accent mb-2">{t('allInOneTitle')}</h3>
                  <p className="text-sm md:text-base text-foreground leading-relaxed">
                    {t('allInOneDesc')}
                  </p>
                </div>

                {/* Trusted Worldwide */}
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-primary/10 border border-border/30 flex items-center justify-center mb-4">
                    <Globe className="h-8 w-8 md:h-10 md:w-10 text-foreground" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-heading-accent mb-2">{t('trustedTitle')}</h3>
                  <p className="text-sm md:text-base text-foreground leading-relaxed">
                    {t('trustedDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed Story Section */}
            <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8 mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8 text-center">{t('storyTitle')}</h2>

              <div className="space-y-6 text-foreground text-base md:text-lg leading-relaxed">
                <p>{t('storyP1')}</p>

                <p>{t('storyP2')}</p>

                <h3 className="text-xl md:text-2xl font-bold text-heading-accent mt-8 mb-4">{t('consolidateTitle')}</h3>

                <p>{t('consolidateP1')}</p>

                <p>{t('consolidateP2')}</p>

                <h3 className="text-xl md:text-2xl font-bold text-heading-accent mt-8 mb-4">{t('philosophyTitle')}</h3>

                <p>{t('philosophyP1')}</p>

                <p>{t('philosophyP2')}</p>

                <h3 className="text-xl md:text-2xl font-bold text-heading-accent mt-8 mb-4">{t('freeForeverTitle')}</h3>

                <p>{t('freeForeverP1')}</p>

                <p>{t('freeForeverP2')}</p>

                <h3 className="text-xl md:text-2xl font-bold text-heading-accent mt-8 mb-4">{t('globalTitle')}</h3>

                <p>{t('globalP1')}</p>

                <p>{t('globalP2')}</p>

                <h3 className="text-xl md:text-2xl font-bold text-heading-accent mt-8 mb-4">{t('futureTitle')}</h3>

                <p>{t('futureP1')}</p>

                <p>{t('futureP2')}</p>

                <p className="text-lg md:text-xl font-semibold text-foreground mt-8">
                  {t('joinUs')}
                </p>
              </div>
            </div>

            {/* Vision and Mission Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Vision */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <Eye className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-heading-accent">{t('vision')}</h2>
                </div>
                <p className="text-sm md:text-base text-foreground leading-relaxed">
                  {t('visionDesc')}
                </p>
              </div>

              {/* Mission */}
              <div className="bg-card border border-border/30 rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-primary/10 border border-border/30 flex items-center justify-center flex-shrink-0">
                    <Compass className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-heading-accent">{t('mission')}</h2>
                </div>
                <p className="text-sm md:text-base text-foreground leading-relaxed">
                  {t('missionDesc')}
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 md:mt-16 text-center">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-foreground font-bold rounded-lg hover:bg-primary transition-colors text-lg"
              >
                {t('viewProducts')}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
