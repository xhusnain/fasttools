import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { getTranslations } from 'next-intl/server';

const DateDifferenceCalculator = dynamic(() => import("@/components/calculators/date-difference-calculator").then(mod => mod.DateDifferenceCalculator), {
  loading: () => <ToolLoader />
})
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"
import { Brain, Calendar, Target, BookOpen, Shield, Users, TrendingUp, Calculator, Clock, AlertTriangle, Info, Zap, CheckCircle } from "lucide-react"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'dateDifferenceCalculator' });
  const tNavigation = await getTranslations({ locale, namespace: 'navigation' });

  return {
    ...createMetadata({
      title: t('title'),
      description: t('description'),
      path: "/calculator/date-difference",
      locale,
      breadcrumbs: [
        { label: tNavigation('calculators'), href: "/calculator" },
        { label: t('breadcrumbDateDifference'), href: "/calculator/date-difference" }
      ],
      schemaOptions: {
        name: t('toolName'),
        alternateName: t('headerTitle'),
        applicationCategory: "UtilityApplication",
        featureList: [
          t('feature1'),
          t('feature2'),
          t('feature3'),
          t('feature4'),
          t('feature5'),
          t('feature6')
        ]
      }
    }),
    applicationName: "FastTools",
    category: "Date & Time",
  };
}

export default async function DateDifferencePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'dateDifferenceCalculator' });
  const tNavigation = await getTranslations({ locale, namespace: 'navigation' });

  const toolContent = {
    toolName: t('toolName'),
    overview: t('overview'),

    howToSteps: [
      t('step1'),
      t('step2'),
      t('step3'),
      t('step4'),
      t('step5')
    ],

    features: [
      t('feature1'),
      t('feature2'),
      t('feature3'),
      t('feature4'),
      t('feature5'),
      t('feature6')
    ],

    useCases: [
      t('useCase1'),
      t('useCase2'),
      t('useCase3'),
      t('useCase4'),
      t('useCase5'),
      t('useCase6')
    ],

    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            {t('whatIsTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('whatIsP1')}
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('whatIsP2')}
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            {t('commonDurationsTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('commonDurationsP1')}
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">{t('tableDurationName')}</th>
                  <th className="p-3 text-left">{t('tableApproxLength')}</th>
                  <th className="p-3 text-left">{t('tableCommonUseCase')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-semibold text-foreground">{t('fortnight')}</td>
                  <td className="p-3">{t('fortnightDays')}</td>
                  <td className="p-3 text-muted-foreground">{t('fortnightUse')}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">{t('standardMonth')}</td>
                  <td className="p-3">{t('standardMonthDays')}</td>
                  <td className="p-3 text-muted-foreground">{t('standardMonthUse')}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">{t('quarter')}</td>
                  <td className="p-3">{t('quarterDays')}</td>
                  <td className="p-3 text-muted-foreground">{t('quarterUse')}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">{t('year')}</td>
                  <td className="p-3">{t('yearDays')}</td>
                  <td className="p-3 text-muted-foreground">{t('yearUse')}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">{t('workYear')}</td>
                  <td className="p-3">{t('workYearDays')}</td>
                  <td className="p-3 text-muted-foreground">{t('workYearUse')}</td>
                </tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            {t('expertTitle')}
          </h2>
          <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-l-4 border-blue-500 rounded-lg">
            <p className="italic text-blue-700 dark:text-blue-300 leading-relaxed">
              "{t('expertText')}"
            </p>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-2">{t('expertAuthor')}</p>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            {t('whyCalculateTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('whyCalculateP1')}
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            {t('howItWorksTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('howItWorksP1')}
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('howItWorksP2')}
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-heading-accent mb-2 text-sm">{t('step1Title')}</h3>
              <p className="text-sm text-muted-foreground">{t('step1Desc')}</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-heading-accent-border">
              <h3 className="font-semibold text-heading-accent mb-2 text-sm">{t('step2Title')}</h3>
              <p className="text-sm text-heading-accent">{t('step2Desc')}</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-heading-accent mb-2 text-sm">{t('step3Title')}</h3>
              <p className="text-sm text-muted-foreground">{t('step3Desc')}</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-heading-accent mb-2 text-sm">{t('step4Title')}</h3>
              <p className="text-sm text-muted-foreground">{t('step4Desc')}</p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Info className="h-6 w-6 text-primary" />
            {t('differentMethodsTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('differentMethodsP1')}
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-heading-accent mb-2">{t('calendarDaysTitle')}</h3>
              <p className="text-sm text-muted-foreground mb-2">{t('calendarDaysDesc')}</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-heading-accent-border">
              <h3 className="font-semibold text-heading-accent mb-2">{t('businessDaysTitle')}</h3>
              <p className="text-sm text-heading-accent mb-2">{t('businessDaysDesc')}</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-heading-accent mb-2">{t('yearMonthDayTitle')}</h3>
              <p className="text-sm text-muted-foreground mb-2">{t('yearMonthDayDesc')}</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-heading-accent mb-2">{t('timeZoneAwareTitle')}</h3>
              <p className="text-sm text-muted-foreground mb-2">{t('timeZoneAwareDesc')}</p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-primary" />
            {t('whyUseTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('whyUseP1')}
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>{t('benefit1')}</strong></li>
            <li><strong>{t('benefit2')}</strong></li>
            <li><strong>{t('benefit3')}</strong></li>
            <li><strong>{t('benefit4')}</strong></li>
            <li><strong>{t('benefit5')}</strong></li>
            <li><strong>{t('benefit6')}</strong></li>
          </ul>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-primary" />
            {t('bestPracticesTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('bestPracticesP1')}
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>{t('practice1')}</strong></li>
            <li><strong>{t('practice2')}</strong></li>
            <li><strong>{t('practice3')}</strong></li>
            <li><strong>{t('practice4')}</strong></li>
            <li><strong>{t('practice5')}</strong></li>
            <li><strong>{t('practice6')}</strong></li>
          </ul>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            {t('privacyTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('privacyP1')}
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">{t('privacy1Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('privacy1Desc')}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">{t('privacy2Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('privacy2Desc')}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">{t('privacy3Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('privacy3Desc')}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    ),

    faqs: Array.from({ length: 39 }, (_, i) => ({
      question: t(`faq${i + 1}Q`),
      answer: t(`faq${i + 1}A`)
    })),

    relatedTools: [
      { name: t('relatedTool1'), href: "/calculator/age-calculator" },
      { name: t('relatedTool2'), href: "/calculator/time-duration" },
      { name: t('relatedTool3'), href: "/finance-tools/retirement-calculator" },
      { name: t('relatedTool4'), href: "/calculator/pregnancy-calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: t('headerTitle'),
        description: t('headerDescription'),
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: tNavigation('calculators'), href: "/calculator" },
        { label: t('breadcrumbDateDifference'), href: "/calculator/date-difference" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <DateDifferenceCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: t('title'),
        description: t('description'),
        path: "/calculator/date-difference"
      }}
    />
  )
}
