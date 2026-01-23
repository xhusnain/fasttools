import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { getTranslations } from 'next-intl/server';
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"

const BMICalculatorPageContent = dynamic(
  () => import("@/components/health/bmi-calculator-page-content").then((mod) => mod.BMICalculatorPageContent),
  { loading: () => <ToolLoader /> }
)
import { Brain, Activity, Target, BookOpen, AlertTriangle, Users, TrendingUp, Shield, Calculator, Heart, Info, Scale } from "lucide-react"

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'bmiCalculator' });
  const tNavigation = await getTranslations({ locale: params.locale, namespace: 'navigation' });

  return createMetadata({
    title: t('title'),
    description: t('description'),
    path: "/calculator/bmi-calculator",
    breadcrumbs: [
      { label: tNavigation('calculators'), href: "/calculator" },
      { label: t('breadcrumbBMI'), href: "/calculator/bmi-calculator" }
    ],
    schemaOptions: {
      name: t('toolName'),
      alternateName: t('toolName'),
      applicationCategory: "HealthApplication",
      ratingValue: "4.9",
      ratingCount: "3420",
      featureList: [
        t('feature1Title'),
        t('feature2Title'),
        t('feature3Title'),
        t('feature4Title')
      ]
    },
    locale: params.locale
  })
}

export default async function BMICalculatorPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations('bmiCalculator');
  const tNavigation = await getTranslations('navigation');
  const toolContent = {
    toolName: t('toolName'),
    overview: t('overview'),
    howToSteps: [
      {
        title: t('step1Title'),
        description: t('step1Desc')
      },
      {
        title: t('step2Title'),
        description: t('step2Desc')
      },
      {
        title: t('step3Title'),
        description: t('step3Desc')
      },
      {
        title: t('step4Title'),
        description: t('step4Desc')
      }
    ],
    features: [
      {
        title: t('feature1Title'),
        description: t('feature1Desc'),
        icon: "Scale"
      },
      {
        title: t('feature2Title'),
        description: t('feature2Desc'),
        icon: "Activity"
      },
      {
        title: t('feature3Title'),
        description: t('feature3Desc'),
        icon: "Globe"
      },
      {
        title: t('feature4Title'),
        description: t('feature4Desc'),
        icon: "History"
      }
    ],
    useCases: [
      {
        title: t('useCase1Title'),
        description: t('useCase1Desc')
      },
      {
        title: t('useCase2Title'),
        description: t('useCase2Desc')
      },
      {
        title: t('useCase3Title'),
        description: t('useCase3Desc')
      }
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
            <Scale className="h-6 w-6 text-primary" />
            {t('classificationTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('classificationP1')}
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">{t('tableBMIRange')}</th>
                  <th className="p-3 text-left">{t('tableWeightStatus')}</th>
                  <th className="p-3 text-left">{t('tableHealthRisk')}</th>
                  <th className="p-3 text-left">{t('tableRecommendedAction')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 text-blue-500 font-medium">{t('categoryUnderweight')}</td>
                  <td className="p-3">{t('statusUnderweight')}</td>
                  <td className="p-3">{t('riskModerate')}</td>
                  <td className="p-3">{t('actionUnderweight')}</td>
                </tr>
                <tr>
                  <td className="p-3 text-green-600 font-bold">{t('categoryNormal')}</td>
                  <td className="p-3 font-bold text-green-600">{t('statusNormal')}</td>
                  <td className="p-3">{t('riskLowest')}</td>
                  <td className="p-3">{t('actionNormal')}</td>
                </tr>
                <tr>
                  <td className="p-3 text-yellow-600 font-medium">{t('categoryOverweight')}</td>
                  <td className="p-3">{t('statusOverweight')}</td>
                  <td className="p-3">{t('riskIncreased')}</td>
                  <td className="p-3">{t('actionOverweight')}</td>
                </tr>
                <tr>
                  <td className="p-3 text-orange-600 font-medium">{t('categoryObese1')}</td>
                  <td className="p-3">{t('statusObese1')}</td>
                  <td className="p-3">{t('riskHigh')}</td>
                  <td className="p-3">{t('actionObese1')}</td>
                </tr>
                <tr>
                  <td className="p-3 text-red-600 font-medium">{t('categoryObese2')}</td>
                  <td className="p-3">{t('statusObese2')}</td>
                  <td className="p-3">{t('riskVeryHigh')}</td>
                  <td className="p-3">{t('actionObese2')}</td>
                </tr>
                <tr>
                  <td className="p-3 text-red-700 font-bold">{t('categoryObese3')}</td>
                  <td className="p-3 font-bold text-red-700">{t('statusObese3')}</td>
                  <td className="p-3">{t('riskExtremelyHigh')}</td>
                  <td className="p-3">{t('actionObese3')}</td>
                </tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            {t('howToCalculateTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('howToCalculateP1')}
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">1</div>
              <div>
                <h4 className="font-semibold text-foreground">{t('step1Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('step1Text')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">2</div>
              <div>
                <h4 className="font-semibold text-foreground">{t('step2Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('step2Text')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">3</div>
              <div>
                <h4 className="font-semibold text-foreground">{t('step3Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('step3Text')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">4</div>
              <div>
                <h4 className="font-semibold text-foreground">{t('step4Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('step4Text')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">5</div>
              <div>
                <h4 className="font-semibold text-foreground">{t('step5Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('step5Text')}</p>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            {t('healthRisksTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('healthRisksP1')}
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">{t('tableCategory')}</th>
                  <th className="p-3 text-left">{t('tablePrimaryRisks')}</th>
                  <th className="p-3 text-left">{t('tableChronicConditions')}</th>
                  <th className="p-3 text-left">{t('tableMortalityRisk')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-medium">{t('riskUnderweight')}</td>
                  <td className="p-3">{t('riskUnderweightPrimary')}</td>
                  <td className="p-3">{t('riskUnderweightChronic')}</td>
                  <td className="p-3">{t('riskUnderweightMortality')}</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-green-600">{t('riskNormal')}</td>
                  <td className="p-3">{t('riskNormalPrimary')}</td>
                  <td className="p-3">{t('riskNormalChronic')}</td>
                  <td className="p-3">{t('riskNormalMortality')}</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-yellow-600">{t('riskOverweight')}</td>
                  <td className="p-3">{t('riskOverweightPrimary')}</td>
                  <td className="p-3">{t('riskOverweightChronic')}</td>
                  <td className="p-3">{t('riskOverweightMortality')}</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-orange-600">{t('riskObese1')}</td>
                  <td className="p-3">{t('riskObese1Primary')}</td>
                  <td className="p-3">{t('riskObese1Chronic')}</td>
                  <td className="p-3">{t('riskObese1Mortality')}</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-red-600">{t('riskObese23')}</td>
                  <td className="p-3">{t('riskObese23Primary')}</td>
                  <td className="p-3">{t('riskObese23Chronic')}</td>
                  <td className="p-3">{t('riskObese23Mortality')}</td>
                </tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            {t('ethnicGuidelinesTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('ethnicGuidelinesP1')}
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">{t('tablePopulation')}</th>
                  <th className="p-3 text-left">{t('tableHealthyRange')}</th>
                  <th className="p-3 text-left">{t('tableOverweightThreshold')}</th>
                  <th className="p-3 text-left">{t('tableObeseThreshold')}</th>
                  <th className="p-3 text-left">{t('tableReason')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-medium">{t('populationGeneral')}</td>
                  <td className="p-3">{t('populationGeneralRange')}</td>
                  <td className="p-3">{t('populationGeneralOverweight')}</td>
                  <td className="p-3">{t('populationGeneralObese')}</td>
                  <td className="p-3">{t('populationGeneralReason')}</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">{t('populationAsian')}</td>
                  <td className="p-3">{t('populationAsianRange')}</td>
                  <td className="p-3">{t('populationAsianOverweight')}</td>
                  <td className="p-3">{t('populationAsianObese')}</td>
                  <td className="p-3">{t('populationAsianReason')}</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">{t('populationPacific')}</td>
                  <td className="p-3">{t('populationPacificRange')}</td>
                  <td className="p-3">{t('populationPacificOverweight')}</td>
                  <td className="p-3">{t('populationPacificObese')}</td>
                  <td className="p-3">{t('populationPacificReason')}</td>
                </tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('ethnicGuidelinesP2')}
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            {t('limitationsTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('limitationsP1')}
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                {t('limitation1Title')}
              </h4>
              <p className="text-sm text-muted-foreground">{t('limitation1Text')}</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Info className="h-4 w-4 text-blue-500" />
                {t('limitation2Title')}
              </h4>
              <p className="text-sm text-muted-foreground">{t('limitation2Text')}</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Users className="h-4 w-4 text-purple-500" />
                {t('limitation3Title')}
              </h4>
              <p className="text-sm text-muted-foreground">{t('limitation3Text')}</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Heart className="h-4 w-4 text-red-500" />
                {t('limitation4Title')}
              </h4>
              <p className="text-sm text-muted-foreground">{t('limitation4Text')}</p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            {t('bestPracticesTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('bestPracticesP1')}
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">{t('practice1Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('practice1Text')}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">{t('practice2Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('practice2Text')}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">{t('practice3Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('practice3Text')}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">{t('practice4Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('practice4Text')}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">{t('practice5Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('practice5Text')}</p>
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
      {
        name: t('relatedTool1Name'),
        href: "/calculator/body-fat-calculator",
        description: t('relatedTool1Desc')
      },
      {
        name: t('relatedTool2Name'),
        href: "/calculator/calorie-calculator",
        description: t('relatedTool2Desc')
      },
      {
        name: t('relatedTool3Name'),
        href: "/calculator/bmr-calculator",
        description: t('relatedTool3Desc')
      }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: t('headerTitle'),
        description: t('headerDescription'),
        titleSize: "medium",
        descriptionSize: "small"
      }}
      breadcrumbs={[
        { label: tNavigation('calculators'), href: "/calculator" },
        { label: t('breadcrumbBMI'), href: "/calculator/bmi-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <BMICalculatorPageContent />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: t('title'),
        description: t('description'),
        path: "/calculator/bmi-calculator"
      }}
    />
  )
}
