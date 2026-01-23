import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { getTranslations } from 'next-intl/server';
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, Award, TrendingUp, Info, Globe, Target, Users, BarChart3, Building, Clock, DollarSign, Home, FileText, Percent, BookOpen, Shield, Star, Brain, Zap, AlertTriangle, CheckCircle } from "lucide-react"
import { GTable } from "@/ui/gtable"

const GPACalculator = dynamic(() => import("@/components/calculators/gpa-calculator").then(mod => mod.GPACalculator), {
  loading: () => <ToolLoader />
})

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'gpaCalculator' });
  const tNavigation = await getTranslations({ locale: params.locale, namespace: 'navigation' });

  return createMetadata({
    title: t('title'),
    description: t('description'),
    path: "/calculator/gpa-calculator",
    breadcrumbs: [
      { label: tNavigation('calculators'), href: "/calculator" },
      { label: t('breadcrumbGPA'), href: "/calculator/gpa-calculator" }
    ],
    schemaOptions: {
      name: t('toolName'),
      alternateName: t('toolName'),
      applicationCategory: "EducationalApplication",
      featureList: [
        t('feature1'),
        t('feature2'),
        t('feature3'),
        t('feature4'),
        t('feature5'),
        t('feature6'),
        t('feature7')
      ]
    },
    locale: params.locale
  })
}

export default async function GPACalculatorPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations('gpaCalculator');
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
      t('feature7')
    ],

    useCases: [
      t('useCase1'),
      t('useCase2'),
      t('useCase3'),
      t('useCase4')
    ],

    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
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
            {t('howToCalculateTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('howToCalculateP1')}
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li><strong>{t('step1Text')}</strong></li>
              <li><strong>{t('step2Text')}</strong></li>
              <li><strong>{t('step3Text')}</strong></li>
              <li><strong>{t('step4Text')}</strong></li>
            </ol>
            <div className="overflow-x-auto">
              <GTable>
                <thead className="bg-muted text-foreground font-semibold">
                  <tr>
                    <th className="p-3 text-left">{t('tableLetterGrade')}</th>
                    <th className="p-3 text-left">{t('tablePercentage')}</th>
                    <th className="p-3 text-left">{t('tableScale40')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-sm">
                  <tr><td className="p-3 font-semibold">{t('gradeAA')}</td><td className="p-3">{t('gradeAPercent')}</td><td className="p-3">{t('gradeAValue')}</td></tr>
                  <tr><td className="p-3 font-semibold">{t('gradeAMinus')}</td><td className="p-3">{t('gradeAMinusPercent')}</td><td className="p-3">{t('gradeAMinusValue')}</td></tr>
                  <tr><td className="p-3 font-semibold">{t('gradeBPlus')}</td><td className="p-3">{t('gradeBPlusPercent')}</td><td className="p-3">{t('gradeBPlusValue')}</td></tr>
                  <tr><td className="p-3 font-semibold">{t('gradeB')}</td><td className="p-3">{t('gradeBPercent')}</td><td className="p-3">{t('gradeBValue')}</td></tr>
                </tbody>
              </GTable>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            {t('expertTitle')}
          </h2>
          <div className="p-6 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 rounded-2xl border border-purple-500/20 shadow-sm">
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 italic">
              "{t('expertText')}"
            </p>
            <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mt-2">{t('expertAuthor')}</p>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            {t('weightedVsUnweightedTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('weightedVsUnweightedP1')}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">{t('unweightedTitle')}</h3>
              <p className="text-sm text-muted-foreground">{t('unweightedDesc')}</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">{t('weightedTitle')}</h3>
              <p className="text-sm text-muted-foreground">{t('weightedDesc')}</p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            {t('goodGPATitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('goodGPAP1')}
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">{t('tableGPARange')}</th>
                  <th className="p-3 text-left">{t('tableAcademicStanding')}</th>
                  <th className="p-3 text-left">{t('tableTypicalOutcome')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-semibold text-foreground">{t('gpaRangeExcellent')}</td>
                  <td className="p-3">{t('standingExcellent')}</td>
                  <td className="p-3 text-muted-foreground">{t('outcomeExcellent')}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">{t('gpaRangeGood')}</td>
                  <td className="p-3">{t('standingGood')}</td>
                  <td className="p-3 text-muted-foreground">{t('outcomeGood')}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">{t('gpaRangeAverage')}</td>
                  <td className="p-3">{t('standingAverage')}</td>
                  <td className="p-3 text-muted-foreground">{t('outcomeAverage')}</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">{t('gpaRangeBelow')}</td>
                  <td className="p-3">{t('standingBelow')}</td>
                  <td className="p-3 text-muted-foreground">{t('outcomeBelow')}</td>
                </tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            {t('howToUseTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('howToUseP1')}
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">1</div>
              <div>
                <h4 className="font-semibold text-foreground">{t('howToUseStep1Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('howToUseStep1Text')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">2</div>
              <div>
                <h4 className="font-semibold text-foreground">{t('howToUseStep2Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('howToUseStep2Text')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">3</div>
              <div>
                <h4 className="font-semibold text-foreground">{t('howToUseStep3Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('howToUseStep3Text')}</p>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-primary" />
            {t('commonMistakesTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('commonMistakesP1')}
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-red-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">{t('mistake1Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('mistake1Text')}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-red-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">{t('mistake2Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('mistake2Text')}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-red-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">{t('mistake3Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('mistake3Text')}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-red-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">{t('mistake4Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('mistake4Text')}</p>
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
      { question: t('faq32Q'), answer: t('faq32A') },
      { question: t('faq33Q'), answer: t('faq33A') },
      { question: t('faq34Q'), answer: t('faq34A') },
      { question: t('faq35Q'), answer: t('faq35A') },
      { question: t('faq36Q'), answer: t('faq36A') },
      { question: t('faq37Q'), answer: t('faq37A') },
      { question: t('faq38Q'), answer: t('faq38A') },
      { question: t('faq39Q'), answer: t('faq39A') },
      { question: t('faq40Q'), answer: t('faq40A') },
      { question: t('faq41Q'), answer: t('faq41A') },
      { question: t('faq42Q'), answer: t('faq42A') },
      { question: t('faq43Q'), answer: t('faq43A') },
      { question: t('faq44Q'), answer: t('faq44A') },
      { question: t('faq45Q'), answer: t('faq45A') },
      { question: t('faq46Q'), answer: t('faq46A') }
    ],

    relatedTools: [
      { name: t('relatedTool1'), href: "/calculator/percentage-calculator" },
      { name: t('relatedTool2'), href: "/calculator/age-calculator" },
      { name: t('relatedTool3'), href: "/calculator/bmi-calculator" },
      { name: t('relatedTool4'), href: "/calculator/time-duration" },
      { name: t('relatedTool5'), href: "/calculator/scientific-calculator" },
      { name: t('relatedTool6'), href: "/finance-tools/loan-calculator" }
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
        { label: t('breadcrumbGPA'), href: "/calculator/gpa-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <GPACalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: t('title'),
        description: t('description'),
        path: "/calculator/gpa-calculator"
      }}
    />
  )
}