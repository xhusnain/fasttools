import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { getTranslations } from 'next-intl/server';
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"
import { Brain } from "lucide-react"

const BMRCalculator = dynamic(() => import("@/components/health/bmr-calculator"), {
  loading: () => <ToolLoader />
})

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'bmrCalculator' });
  const tNavigation = await getTranslations({ locale: params.locale, namespace: 'navigation' });

  return createMetadata({
    title: t('title'),
    description: t('description'),
    path: "/calculator/bmr-calculator",
    breadcrumbs: [
      { label: tNavigation('calculators'), href: "/calculator" },
      { label: t('breadcrumbBMR'), href: "/calculator/bmr-calculator" }
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

export default async function BMRCalculatorPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations('bmrCalculator');
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
        <section>
          <h2 className="text-2xl font-bold mb-4">{t('whatIsTitle')}</h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-6">
            {t('whatIsP1')}
          </p>

          <h3 className="font-semibold text-xl mb-4 text-foreground">{t('bmrVsTdeeTitle')}</h3>
          <p className="mb-4 text-muted-foreground">
            {t('bmrVsTdeeP1')}
          </p>

          <GTable>
            <thead className="bg-muted text-foreground font-semibold">
              <tr>
                <th className="p-3 text-left">{t('tableActivityLevel')}</th>
                <th className="p-3 text-left">{t('tableMultiplier')}</th>
                <th className="p-3 text-left">{t('tableDescription')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              <tr>
                <td className="p-3 font-semibold text-foreground">{t('activitySedentary')}</td>
                <td className="p-3">1.2</td>
                <td className="p-3 text-muted-foreground">{t('activitySedentaryDesc')}</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">{t('activityLightly')}</td>
                <td className="p-3">1.375</td>
                <td className="p-3 text-muted-foreground">{t('activityLightlyDesc')}</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">{t('activityModerate')}</td>
                <td className="p-3">1.55</td>
                <td className="p-3 text-muted-foreground">{t('activityModerateDesc')}</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">{t('activityVery')}</td>
                <td className="p-3">1.725</td>
                <td className="p-3 text-muted-foreground">{t('activityVeryDesc')}</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">{t('activityExtra')}</td>
                <td className="p-3">1.9</td>
                <td className="p-3 text-muted-foreground">{t('activityExtraDesc')}</td>
              </tr>
            </tbody>
          </GTable>
        </section>

        <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border-l-4 border-emerald-500 rounded-lg my-8">
          <h4 className="flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-200 mb-2">
            <Brain className="h-5 w-5" />
            {t('expertTitle')}
          </h4>
          <p className="italic text-emerald-700 dark:text-emerald-300">
            "{t('expertText')}"
          </p>
          <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-2">{t('expertAuthor')}</p>
        </div>

        <section>
          <h3 className="font-semibold text-lg mb-2 mt-6 text-foreground">{t('equationsTitle')}</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-sm text-muted-foreground">
            <li><strong>{t('equationMifflin')}</strong></li>
            <li><strong>{t('equationHarris')}</strong></li>
            <li><strong>{t('equationKatch')}</strong></li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">{t('factorsTitle')}</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>{t('factorMuscle')}</strong></li>
            <li><strong>{t('factorAge')}</strong></li>
            <li><strong>{t('factorGender')}</strong></li>
            <li><strong>{t('factorGenetics')}</strong></li>
            <li><strong>{t('factorHormones')}</strong></li>
          </ul>
        </section>
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
      { question: t('faq10Q'), answer: t('faq10A') }
    ],

    relatedTools: [
      { name: t('relatedTool1'), href: "/calculator/calorie-calculator" },
      { name: t('relatedTool2'), href: "/calculator/bmi-calculator" },
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
        { label: t('breadcrumbBMR'), href: "/calculator/bmr-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <BMRCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: t('title'),
        description: t('description'),
        path: "/calculator/bmr-calculator"
      }}
    />
  )
}
