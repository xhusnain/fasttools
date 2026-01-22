import React from "react"
import { Breadcrumbs } from "@/components/common/breadcrumbs"
import { GHeader } from "@/ui/gheader"
import { GAccordion, GAccordionContent, GAccordionItem, GAccordionTrigger } from "@/ui/gaccordion"
import { getTranslations } from 'next-intl/server';
import Link from "next/link"
import { Metadata } from 'next';
import { createMetadata } from "@/lib/metadata-base"
import {
  Download,
  ArrowRight,
  Youtube,
  Instagram,
  Facebook,
  Twitter,
  Copy,
  Search,
  CheckCircle,
  ShieldCheck,
  Zap,
  Star,
  Music,
  List
} from "lucide-react"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'downloaders' });

  return createMetadata({
    title: t('title'),
    description: t('description'),
    path: "/downloaders",
    ogImageAlt: "Universal Video Downloader for all platforms",
    twitterCreator: "@FastTools",
    twitterTitle: t('twitterTitle'),
    twitterDescription: t('twitterDescription'),
    breadcrumbs: [
      {
        "label": t('pageTitle'),
        "href": "/downloaders"
      }
    ],
    locale
  });
}

export default async function DownloadersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('downloaders');
  const tCommon = await getTranslations('common');
  const baseUrl = `https://www.fasttools.store${locale === 'en' ? '' : '/' + locale}`;

  const downloaders = [
    {
      id: "youtube-downloader",
      name: t('youtube'),
      description: t('youtubeDesc'),
      icon: Youtube,
      href: "/social-media-tools/youtube-downloader",
      color: "#FF0000",
      hoverColor: "#CC0000",
    },
    {
      id: "youtube-playlist",
      name: t('youtubePlaylist'),
      description: t('youtubePlaylistDesc'),
      icon: List,
      href: "/social-media-tools/youtube-playlist-downloader",
      color: "#FF0000",
      hoverColor: "#CC0000",
    },
    {
      id: "tiktok-downloader",
      name: t('tiktok'),
      description: t('tiktokDesc'),
      icon: Download,
      href: "/social-media-tools/tiktok-downloader",
      color: "#00f2ea",
      hoverColor: "#ff0050",
    },
    {
      id: "instagram-downloader",
      name: t('instagram'),
      description: t('instagramDesc'),
      icon: Instagram,
      href: "/social-media-tools/instagram-downloader",
      color: "#E1306C",
      hoverColor: "#F77737",
    },
    {
      id: "facebook-downloader",
      name: t('facebook'),
      description: t('facebookDesc'),
      icon: Facebook,
      href: "/social-media-tools/facebook-downloader",
      color: "#1877F2",
      hoverColor: "#0a52bd",
    },
    {
      id: "x-video-downloader",
      name: t('xTwitter'),
      description: t('xTwitterDesc'),
      icon: Twitter,
      href: "/social-media-tools/x-video-downloader",
      color: "#1DA1F2",
      hoverColor: "#0F85D9",
    },
    {
      id: "capcut-downloader",
      name: t('capcut'),
      description: t('capcutDesc'),
      icon: Download,
      href: "/social-media-tools/capcut-downloader",
      color: "#00CED1",
      hoverColor: "#00B4B8",
    },
    {
      id: "pinterest-downloader",
      name: t('pinterest'),
      description: t('pinterestDesc'),
      icon: Download,
      href: "/social-media-tools/pinterest-downloader",
      color: "#E60023",
      hoverColor: "#BD001A",
    },
    {
      id: "soundcloud-downloader",
      name: t('soundcloud'),
      description: t('soundcloudDesc'),
      icon: Music,
      href: "/social-media-tools/soundcloud-downloader",
      hoverColor: "#ff3300",
    },
    {
      id: "douyin-downloader",
      name: t('douyin'),
      description: t('douyinDesc'),
      icon: Download,
      href: "/social-media-tools/douyin-downloader",
      color: "#000000",
      hoverColor: "#1a1a1a",
    },
  ]

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
  ]

  const whyChooseUsItems = [
    { icon: ShieldCheck, text: t('secure') },
    { icon: Zap, text: t('fast') },
    { icon: Download, text: t('noSoftware') },
    { icon: Star, text: t('free') }
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t('jsonLdName'),
    description: t('jsonLdDescription'),
    url: `${baseUrl}/downloaders`,
    numberOfItems: downloaders.length,
    itemListElement: downloaders.map((downloader, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: downloader.name,
      description: downloader.description,
      url: `${baseUrl}${downloader.href}`
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
        item: `${baseUrl}/downloaders`
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
              { label: t('pageTitle'), href: "/downloaders" },
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

            {/* Tools Section - Now at the top */}
            <div className="mb-16">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                    {t('featuredDownloaders')}
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    {t('featuredDesc')}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {downloaders.map((downloader) => {
                  const Icon = downloader.icon
                  return (
                    <Link
                      key={downloader.id}
                      href={downloader.href}
                      className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-0.5 transition-all hover:shadow-xl"
                      style={{ '--brand-color': downloader.color } as React.CSSProperties}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-color)]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                      <div className="relative flex flex-col h-full bg-card/80 backdrop-blur-sm rounded-[10px] p-5">
                        <div className="mb-4 flex items-center justify-center">
                          <div
                            className="rounded-lg p-2.5 transition-all group-hover:scale-110"
                            style={{ backgroundColor: `${downloader.color}15`, color: downloader.color }}
                          >
                            <Icon className="h-6 w-6" />
                          </div>
                        </div>

                        <div className="flex-1 text-center">
                          <h3 className="text-lg font-bold text-heading-accent mb-1 group-hover:text-[var(--brand-color)] transition-colors">
                            {downloader.name}
                          </h3>
                          <p className="text-xs text-muted-foreground leading-snug mb-3">
                            {downloader.description}
                          </p>
                        </div>

                        <div className="mt-auto flex items-center justify-center">
                          <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: downloader.color }}>
                            <span>{t('tryNow')}</span>
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Instructions Section - Now below tools */}
            <div className="mb-20 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-3xl -z-10" />
              <div className="bg-card/40 backdrop-blur-md border border-border/40 rounded-3xl p-8 md:p-16">
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('howItWorks')}</h2>
                  <p className="text-muted-foreground text-lg">
                    {t('howItWorksDesc')}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                  {/* Step 1 */}
                  <div className="relative flex flex-col items-center text-center group">
                    <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 ring-1 ring-primary/20 transition-all group-hover:bg-primary/20 group-hover:rotate-3">
                      <Copy className="h-10 w-10 text-primary" />
                    </div>
                    <div className="absolute -top-4 -right-4 text-6xl font-black text-primary/5 pointer-events-none">01</div>
                    <h3 className="text-xl font-bold text-heading-accent mb-3">{t('step1Title')}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('step1Desc')}
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex flex-col items-center text-center group">
                    <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 ring-1 ring-primary/20 transition-all group-hover:bg-primary/20 group-hover:rotate-3">
                      <Search className="h-10 w-10 text-primary" />
                    </div>
                    <div className="absolute -top-4 -right-4 text-6xl font-black text-primary/5 pointer-events-none">02</div>
                    <h3 className="text-xl font-bold text-heading-accent mb-3">{t('step2Title')}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('step2Desc')}
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex flex-col items-center text-center group">
                    <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 ring-1 ring-primary/20 transition-all group-hover:bg-primary/20 group-hover:rotate-3">
                      <CheckCircle className="h-10 w-10 text-primary" />
                    </div>
                    <div className="absolute -top-4 -right-4 text-6xl font-black text-primary/5 pointer-events-none">03</div>
                    <h3 className="text-xl font-bold text-heading-accent mb-3">{t('step3Title')}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t('step3Desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
              <div className="lg:col-span-2 space-y-12">
                <article className="prose prose-invert prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-primary mb-6">{t('multiPlatformTitle')}</h2>
                  <p className="text-muted-foreground leading-extended">{t('multiPlatformP1')}</p>
                  <p className="text-muted-foreground leading-extended">{t('multiPlatformP2')}</p>
                </article>

                <article className="prose prose-invert prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-primary mb-6">{t('qualityTitle')}</h2>
                  <p className="text-muted-foreground leading-extended">{t('qualityDesc')}</p>
                </article>
              </div>

              <div className="lg:col-span-1 space-y-8">
                <div className="bg-card border border-border/40 rounded-2xl p-8 sticky top-24">
                  <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    {t('whyChooseUs')}
                  </h3>
                  <ul className="space-y-4">
                    {whyChooseUsItems.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground">
                        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <item.icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('faqTitle')}</h2>
                <p className="text-muted-foreground">{t('faqDesc')}</p>
              </div>
              <GAccordion type="single" collapsible className="w-full max-w-3xl mx-auto space-y-4">
                {faqItems.map((item, index) => (
                  <GAccordionItem value={`item-${index}`} key={index} className="bg-card border border-border/40 rounded-xl px-2">
                    <GAccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-4">
                      {item.question}
                    </GAccordionTrigger>
                    <GAccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                      {item.answer}
                    </GAccordionContent>
                  </GAccordionItem>
                ))}
              </GAccordion>
            </div>

            <div className="text-center text-sm text-muted-foreground max-w-4xl mx-auto p-8 rounded-2xl bg-primary/5 border border-primary/10">
              <p><strong>{t('disclaimer')}</strong> {t('disclaimerText')}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
