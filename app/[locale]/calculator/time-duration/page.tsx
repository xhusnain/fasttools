import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { getTranslations } from 'next-intl/server';
import { createMetadata } from "@/lib/metadata-base"
import { Clock, Calculator, Target, TrendingUp, Globe, Calendar, Plus, Minus, Zap, BarChart3, CheckCircle, BookOpen, Users, Award, Copy, Brain } from "lucide-react"
import { GTable } from "@/ui/gtable"

const TimeDurationCalculator = dynamic(() => import("@/components/calculators/time-duration-calculator").then(mod => mod.TimeDurationCalculator), {
  loading: () => <ToolLoader />
})

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'timeDurationCalculator' });
  const tNavigation = await getTranslations({ locale: params.locale, namespace: 'navigation' });

  return createMetadata({
    title: t('title'),
    description: t('description'),
    path: "/calculator/time-duration",
    breadcrumbs: [
      { label: tNavigation('calculators'), href: "/calculator" },
      { label: t('breadcrumbTimeDuration'), href: "/calculator/time-duration" }
    ],
    schemaOptions: {
      name: t('toolName'),
      alternateName: t('toolName'),
      applicationCategory: "Time Management Tool",
      featureList: [
        t('feature1'),
        t('feature2'),
        t('feature3'),
        t('feature4'),
        t('feature5'),
        t('feature6'),
        t('feature7'),
        t('feature8'),
        t('feature9'),
        t('feature10')
      ]
    },
    locale: params.locale
  })
}

export default async function TimeDurationPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations('timeDurationCalculator');
  const tNavigation = await getTranslations('navigation');
  const toolContent = {
    toolName: t('toolName'),
    overview: t('overview'),

    howToSteps: [
      t('step1'),
      t('step2'),
      t('step3')
    ],

    features: [
      t('feature1'),
      t('feature2'),
      t('feature3'),
      t('feature4'),
      t('feature5'),
      t('feature6'),
      t('feature7'),
      t('feature8'),
      t('feature9'),
      t('feature10')
    ],

    useCases: [
      t('useCase1'),
      t('useCase2'),
      t('useCase3')
    ],

    aboutTool: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">{t('whatIsTitle')}</h2>
          <p className="text-muted-foreground mb-4">
            {t('whatIsP1')}
          </p>
        </section>

        <div className="p-6 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-2xl border border-blue-500/20 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Brain className="h-24 w-24 text-blue-500" />
          </div>
          <h4 className="flex items-center gap-2 font-bold text-blue-700 dark:text-blue-400 mb-3 relative z-10">
            <Brain className="h-5 w-5" />
            {t('expertTitle')}
          </h4>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 relative z-10 italic">
            "{t('expertText')}"
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-4">{t('commonConversionsTitle')}</h2>
          <GTable>
            <thead className="bg-muted text-foreground font-semibold">
              <tr>
                <th className="p-3 text-left">{t('tableUnitOfTime')}</th>
                <th className="p-3 text-left">{t('tableEquivalentValue')}</th>
                <th className="p-3 text-left">{t('tableScientificNotation')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              <tr>
                <td className="p-3 font-semibold text-foreground">{t('unitMinute')}</td>
                <td className="p-3">{t('unitMinuteValue')}</td>
                <td className="p-3">{t('unitMinuteNotation')}</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">{t('unitHour')}</td>
                <td className="p-3">{t('unitHourValue')}</td>
                <td className="p-3">{t('unitHourNotation')}</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">{t('unitDay')}</td>
                <td className="p-3">{t('unitDayValue')}</td>
                <td className="p-3">{t('unitDayNotation')}</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">{t('unitWeek')}</td>
                <td className="p-3">{t('unitWeekValue')}</td>
                <td className="p-3">{t('unitWeekNotation')}</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">{t('unitMonth')}</td>
                <td className="p-3">{t('unitMonthValue')}</td>
                <td className="p-3">{t('unitMonthNotation')}</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">{t('unitYear')}</td>
                <td className="p-3">{t('unitYearValue')}</td>
                <td className="p-3">{t('unitYearNotation')}</td>
              </tr>
            </tbody>
          </GTable>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">{t('completeGuideTitle')}</h2>
          <p className="text-muted-foreground mb-4">
            {t('completeGuideP1')}
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">{t('understandingTitle')}</h3>
              <p className="text-muted-foreground mb-2">
                {t('understandingP1')}
              </p>
              <p className="text-muted-foreground">
                {t('understandingP2')}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">{t('workHoursTitle')}</h3>
              <p className="text-muted-foreground mb-2">
                {t('workHoursP1')}
              </p>
              <p className="text-muted-foreground">
                {t('workHoursP2')}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">{t('advancedTitle')}</h3>
              <p className="text-muted-foreground mb-2">
                {t('advancedP1')}
              </p>
              <p className="text-muted-foreground mb-2">
                {t('advancedP2')}
              </p>
              <p className="text-muted-foreground">
                {t('advancedP3')}
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">{t('examplesTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">{t('exampleWorkHours')}</h3>
              <p className="text-sm text-muted-foreground mb-2">{t('exampleWorkHoursDesc')}</p>
              <p className="text-sm font-mono bg-primary/10 px-2 py-1 rounded inline-block">{t('exampleWorkHoursResult')}</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">{t('exampleTimeAddition')}</h3>
              <p className="text-sm text-muted-foreground mb-2">{t('exampleTimeAdditionDesc')}</p>
              <p className="text-sm font-mono bg-primary/10 px-2 py-1 rounded inline-block">{t('exampleTimeAdditionResult')}</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">{t('exampleBusinessHours')}</h3>
              <p className="text-sm text-muted-foreground mb-2">{t('exampleBusinessHoursDesc')}</p>
              <p className="text-sm font-mono bg-primary/10 px-2 py-1 rounded inline-block">{t('exampleBusinessHoursResult')}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">{t('comparisonTitle')}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-2 font-semibold text-foreground">{t('comparisonFeature')}</th>
                  <th className="text-left p-2 font-semibold text-foreground">{t('comparisonBasicDuration')}</th>
                  <th className="text-left p-2 font-semibold text-foreground">{t('comparisonBusinessHours')}</th>
                  <th className="text-left p-2 font-semibold text-foreground">{t('comparisonTimezone')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="p-2 text-muted-foreground">{t('comparisonTimeRange')}</td>
                  <td className="p-2 text-foreground">{t('comparisonTimeRangeAny')}</td>
                  <td className="p-2 text-foreground">{t('comparisonTimeRangeBusiness')}</td>
                  <td className="p-2 text-foreground">{t('comparisonTimeRangeTimezone')}</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-2 text-muted-foreground">{t('comparisonBreakExclusion')}</td>
                  <td className="p-2 text-foreground">{t('comparisonBreakExclusionManual')}</td>
                  <td className="p-2 text-foreground">{t('comparisonBreakExclusionAuto')}</td>
                  <td className="p-2 text-foreground">{t('comparisonBreakExclusionManual')}</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="p-2 text-muted-foreground">{t('comparisonBestFor')}</td>
                  <td className="p-2 text-foreground">{t('comparisonBestForGeneral')}</td>
                  <td className="p-2 text-foreground">{t('comparisonBestForPayroll')}</td>
                  <td className="p-2 text-foreground">{t('comparisonBestForGlobal')}</td>
                </tr>
                <tr>
                  <td className="p-2 text-muted-foreground">{t('comparisonPrecision')}</td>
                  <td className="p-2 text-foreground">{t('comparisonPrecisionValue')}</td>
                  <td className="p-2 text-foreground">{t('comparisonPrecisionValue')}</td>
                  <td className="p-2 text-foreground">{t('comparisonPrecisionValue')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    ),

    faqs: [
      { question: t('faq1Q'), answer: t('faq1A') },
      { question: t('faq2Q'), answer: t('faq2A') },
      { question: t('faq3Q'), answer: t('faq3A') },
      { question: t('faq4Q'), answer: t('faq4A') },
      { question: t('faq5Q'), answer: t('faq5A') },
      { question: t('faq6Q'), answer: t('faq6A') },
      { question: t('faq7Q'), answer: t('faq7A') },
      { question: t('faq8Q'), answer: t('faq8A') },
      { question: t('faq9Q'), answer: t('faq9A') },
      { question: t('faq10Q'), answer: t('faq10A') },
      { question: t('faq11Q'), answer: t('faq11A') },
      { question: t('faq12Q'), answer: t('faq12A') },
      { question: t('faq13Q'), answer: t('faq13A') },
      { question: t('faq14Q'), answer: t('faq14A') },
      { question: t('faq15Q'), answer: t('faq15A') },
      { question: t('faq16Q'), answer: t('faq16A') },
      { question: t('faq17Q'), answer: t('faq17A') },
      { question: t('faq18Q'), answer: t('faq18A') },
      { question: t('faq19Q'), answer: t('faq19A') },
      { question: t('faq20Q'), answer: t('faq20A') }
    ],

    relatedTools: [
      { name: t('relatedTool1'), href: "/calculator/age-calculator" },
      { name: t('relatedTool2'), href: "/calculator/date-difference" },
      { name: t('relatedTool3'), href: "/finance-tools/loan-calculator" },
      { name: t('relatedTool4'), href: "/calculator/percentage-calculator" },
      { name: t('relatedTool5'), href: "/calculator/bmi-calculator" },
      { name: t('relatedTool6'), href: "/finance-tools/compound-interest" }
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
        { label: t('breadcrumbTimeDuration'), href: "/calculator/time-duration" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <TimeDurationCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: t('title'),
        description: t('description'),
        path: "/calculator/time-duration"
      }}
    />
  )
}
