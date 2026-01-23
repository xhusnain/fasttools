import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"
import { getTranslations } from 'next-intl/server';

const CalorieCalculator = dynamic(
  () => import("@/components/health/calorie-calculator"),
  { loading: () => <ToolLoader /> }
)
import { Brain, Activity, Target, BookOpen, Shield, Users, TrendingUp, Calculator, Heart, AlertTriangle, Info, Zap, Flame } from "lucide-react"

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'calorieCalculator' });
  const tNavigation = await getTranslations({ locale: params.locale, namespace: 'navigation' });

  return createMetadata({
    title: t('title'),
    description: t('description'),
    path: "/calculator/calorie-calculator",
    breadcrumbs: [
      { label: tNavigation('calculators'), href: "/calculator" },
      { label: t('breadcrumbCalorie'), href: "/calculator/calorie-calculator" }
    ],
    schemaOptions: {
      name: t('toolName'),
      alternateName: t('toolName'),
      applicationCategory: "HealthApplication",
      featureList: [
        t('feature1'),
        t('feature2'),
        t('feature3'),
        t('feature4'),
        t('feature5'),
        t('feature6'),
        t('feature7'),
        t('feature8')
      ]
    },
    locale: params.locale
  })
}

export default async function CalorieCalculatorPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations('calorieCalculator');
  const tNavigation = await getTranslations('navigation');
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
      t('feature6'),
      t('feature7'),
      t('feature8')
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
            <Flame className="h-6 w-6 text-primary" />
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
            <Activity className="h-6 w-6 text-primary" />
            {t('activityBurnTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('activityBurnP1')}
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">{t('tableActivity')}</th>
                  <th className="p-3 text-left">{t('table125lbs')}</th>
                  <th className="p-3 text-left">{t('table155lbs')}</th>
                  <th className="p-3 text-left">{t('table185lbs')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-semibold text-foreground">{t('activityWalking')}</td>
                  <td className="p-3">120 cal</td>
                  <td className="p-3">149 cal</td>
                  <td className="p-3">178 cal</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">{t('activityRunning')}</td>
                  <td className="p-3">240 cal</td>
                  <td className="p-3">298 cal</td>
                  <td className="p-3">355 cal</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">{t('activityBicycling')}</td>
                  <td className="p-3">240 cal</td>
                  <td className="p-3">298 cal</td>
                  <td className="p-3">355 cal</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">{t('activityWeightTraining')}</td>
                  <td className="p-3">90 cal</td>
                  <td className="p-3">112 cal</td>
                  <td className="p-3">133 cal</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">{t('activitySwimming')}</td>
                  <td className="p-3">180 cal</td>
                  <td className="p-3">223 cal</td>
                  <td className="p-3">266 cal</td>
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
          <div className="p-6 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border-l-4 border-orange-500 rounded-lg">
            <p className="italic text-orange-700 dark:text-orange-300 leading-relaxed">
              "{t('expertText')}"
            </p>
            <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 mt-2">{t('expertAuthor')}</p>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            {t('calculationMethodsTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('calculationMethodsP1')}
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">{t('tableMethod')}</th>
                  <th className="p-3 text-left">{t('tableBestFor')}</th>
                  <th className="p-3 text-left">{t('tableAccuracy')}</th>
                  <th className="p-3 text-left">{t('tableRequiredData')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-medium">{t('methodMifflin')}</td>
                  <td className="p-3">{t('methodMifflinBest')}</td>
                  <td className="p-3">{t('methodMifflinAccuracy')}</td>
                  <td className="p-3">{t('methodMifflinData')}</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">{t('methodHarris')}</td>
                  <td className="p-3">{t('methodHarrisBest')}</td>
                  <td className="p-3">{t('methodHarrisAccuracy')}</td>
                  <td className="p-3">{t('methodHarrisData')}</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">{t('methodKatch')}</td>
                  <td className="p-3">{t('methodKatchBest')}</td>
                  <td className="p-3">{t('methodKatchAccuracy')}</td>
                  <td className="p-3">{t('methodKatchData')}</td>
                </tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('calculationMethodsP2')}
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            {t('zigzagTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('zigzagP1')}
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                {t('zigzagHighTitle')}
              </h4>
              <p className="text-sm text-muted-foreground">{t('zigzagHighText')}</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Activity className="h-4 w-4 text-blue-500" />
                {t('zigzagLowTitle')}
              </h4>
              <p className="text-sm text-muted-foreground">{t('zigzagLowText')}</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Heart className="h-4 w-4 text-purple-500" />
                {t('zigzagBenefitsTitle')}
              </h4>
              <p className="text-sm text-muted-foreground">{t('zigzagBenefitsText')}</p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            {t('howToCalculateTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('howToCalculateP1')}
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">1</div>
              <div>
                <h4 className="font-semibold text-foreground">{t('howToStep1Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('howToStep1Text')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">2</div>
              <div>
                <h4 className="font-semibold text-foreground">{t('howToStep2Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('howToStep2Text')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">3</div>
              <div>
                <h4 className="font-semibold text-foreground">{t('howToStep3Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('howToStep3Text')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">4</div>
              <div>
                <h4 className="font-semibold text-foreground">{t('howToStep4Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('howToStep4Text')}</p>
              </div>
            </div>
          </div>
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
                <p className="text-sm text-muted-foreground">{t('privacy1Text')}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">{t('privacy2Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('privacy2Text')}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">{t('privacy3Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('privacy3Text')}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    ),

    proTip: t('proTip'),

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
      { question: t('faq20Q'), answer: t('faq20A') },
      { question: t('faq21Q'), answer: t('faq21A') },
      { question: t('faq22Q'), answer: t('faq22A') },
      { question: t('faq23Q'), answer: t('faq23A') },
      { question: t('faq24Q'), answer: t('faq24A') },
      { question: t('faq25Q'), answer: t('faq25A') },
      { question: t('faq26Q'), answer: t('faq26A') },
      { question: t('faq27Q'), answer: t('faq27A') },
      { question: t('faq28Q'), answer: t('faq28A') },
      { question: t('faq29Q'), answer: t('faq29A') },
      { question: t('faq30Q'), answer: t('faq30A') },
      { question: t('faq31Q'), answer: t('faq31A') },
      { question: t('faq32Q'), answer: t('faq32A') }
    ],

    relatedTools: [
      { name: t('relatedTool1'), href: "/calculator/bmi-calculator" },
      { name: t('relatedTool2'), href: "/calculator/bmr-calculator" },
      { name: t('relatedTool3'), href: "/calculator/body-fat-calculator" }
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
        { label: t('breadcrumbCalorie'), href: "/calculator/calorie-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <CalorieCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: t('title'),
        description: t('description'),
        path: "/calculator/calorie-calculator"
      }}
    />
  )
}