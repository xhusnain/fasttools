import { Breadcrumbs } from "@/components/common/breadcrumbs"
import { GHeader } from "@/ui/gheader"
import { GToolCard } from "@/ui/gtool-card"
import { GAccordion, GAccordionContent, GAccordionItem, GAccordionTrigger } from "@/ui/gaccordion"
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { createMetadata } from "@/lib/metadata-base"
import {
  Calculator,
  Sparkles,
  Wrench,
  Code,
  Image,
  FileText,
  Search,
  Globe,
  DollarSign,
  User,
  Briefcase,
  GraduationCap,
  Lock as LockIcon
} from "lucide-react"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'products' });

  return createMetadata({
    title: t('title'),
    description: t('description'),
    path: "/products",
    ogImageAlt: "A showcase of the wide variety of free online tools offered by FastTools.",
    twitterCreator: "@FastTools",
    twitterTitle: t('twitterTitle'),
    twitterDescription: t('twitterDescription'),
    breadcrumbs: [
      {
        "label": t('pageTitle'),
        "href": "/products"
      }
    ],
    locale
  });
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('products');
  const tCategories = await getTranslations('categories');
  const tCommon = await getTranslations('common');
  const baseUrl = `https://www.fasttools.store${locale === 'en' ? '' : '/' + locale}`;

  // Map category IDs to translation keys
  const categoryMap: Record<string, { nameKey: string; descKey: string }> = {
    'calculators': { nameKey: 'calculators.name', descKey: 'calculators.description' },
    'finance-tools': { nameKey: 'financeTools.name', descKey: 'financeTools.description' },
    'ai-tools': { nameKey: 'aiTools.name', descKey: 'aiTools.description' },
    'converters': { nameKey: 'converters.name', descKey: 'converters.description' },
    'crypto-tools': { nameKey: 'cryptoTools.name', descKey: 'cryptoTools.description' },
    'dev-tools': { nameKey: 'devTools.name', descKey: 'devTools.description' },
    'image-tools': { nameKey: 'imageTools.name', descKey: 'imageTools.description' },
    'pdf-tools': { nameKey: 'pdfTools.name', descKey: 'pdfTools.description' },
    'seo-tools': { nameKey: 'seoTools.name', descKey: 'seoTools.description' },
    'social-media': { nameKey: 'socialMedia.name', descKey: 'socialMedia.description' },
    'fun-tools': { nameKey: 'funTools.name', descKey: 'funTools.description' },
  };

  const categories = [
    { id: "calculators", icon: Calculator, href: "/calculator" },
    { id: "finance-tools", icon: DollarSign, href: "/finance-tools" },
    { id: "ai-tools", icon: Sparkles, href: "/ai-tools" },
    { id: "converters", icon: Wrench, href: "/converters" },
    { id: "crypto-tools", icon: LockIcon, href: "/crypto-tools" },
    { id: "dev-tools", icon: Code, href: "/dev-tools" },
    { id: "image-tools", icon: Image, href: "/image-tools" },
    { id: "pdf-tools", icon: FileText, href: "/pdf-tools" },
    { id: "seo-tools", icon: Search, href: "/seo-tools" },
    { id: "social-media", icon: Globe, href: "/social-media-tools" },
    { id: "fun-tools", icon: Sparkles, href: "/fun-tools" },
  ].map(cat => {
    const map = categoryMap[cat.id];
    return {
      ...cat,
      name: tCategories(map.nameKey),
      description: tCategories(map.descKey),
    };
  });

  const benefits = [
    {
      icon: User,
      title: t('individuals'),
      description: t('individualsDesc')
    },
    {
      icon: Briefcase,
      title: t('professionals'),
      description: t('professionalsDesc')
    },
    {
      icon: GraduationCap,
      title: t('students'),
      description: t('studentsDesc')
    }
  ];

  const faqItems = [
    {
      question: t('faq1Q'),
      answer: t('faq1A')
    },
    {
      question: t('faq2Q'),
      answer: t('faq2A')
    },
    {
      question: t('faq3Q'),
      answer: t('faq3A')
    },
    {
      question: t('faq4Q'),
      answer: t('faq4A')
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t('jsonLdName'),
    description: t('jsonLdDescription'),
    url: `${baseUrl}/products`,
    numberOfItems: categories.length,
    itemListElement: categories.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: category.name,
      description: category.description,
      url: `${baseUrl}${category.href}`
    }))
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: tCommon('home'),
        item: baseUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t('pageTitle'),
        item: `${baseUrl}/products`
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
              { label: t('pageTitle'), href: "/products" },
            ]}
          />

          <div className="max-w-6xl mx-auto mt-8 md:mt-12">
            <div className="mb-12 md:mb-16">
              <GHeader
                title={t('pageTitle')}
                description={t('pageDescription')}
                titleSize="large"
                descriptionSize="medium"
                color="blue"
              />
            </div>

            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">{t('exploreCategories')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {categories.map((category) => (
                  <GToolCard
                    key={category.id}
                    title={category.name}
                    description={category.description}
                    href={category.href}
                    icon={category.icon}
                    ctaText={t('viewTools')}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-16 mb-16">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{t('aiPowerTitle')}</h2>
                <p>{t('aiPowerDesc')}</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{t('devToolsTitle')}</h2>
                <p>{t('devToolsDesc')}</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{t('pdfToolsTitle')}</h2>
                <p>{t('pdfToolsDesc')}</p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">{t('whoWeServe')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="text-center p-6 bg-card border border-border/40 rounded-xl">
                      <div className="flex justify-center mb-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-heading-accent mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">{t('faqTitle')}</h2>
              <GAccordion type="single" collapsible className="w-full max-w-2xl mx-auto">
                {faqItems.map((item, index) => (
                  <GAccordionItem value={`item-${index}`} key={index}>
                    <GAccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                      {item.question}
                    </GAccordionTrigger>
                    <GAccordionContent className="text-base text-muted-foreground leading-relaxed">
                      {item.answer}
                    </GAccordionContent>
                  </GAccordionItem>
                ))}
              </GAccordion>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
