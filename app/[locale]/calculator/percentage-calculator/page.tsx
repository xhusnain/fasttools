import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { getTranslations } from 'next-intl/server';
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"
import { Brain, Calculator, Target, BookOpen, Shield, Users, TrendingUp, Info, AlertTriangle, CheckCircle, Zap, Percent, DollarSign } from "lucide-react"

const PercentageCalculator = dynamic(() => import("@/components/calculators/percentage-calculator").then(mod => mod.PercentageCalculator), {
  loading: () => <ToolLoader />
})

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'percentageCalculator' });

  return createMetadata({
    title: t('title'),
    description: t('description'),
    path: "/calculator/percentage-calculator",
    locale,
    breadcrumbs: [
      { label: t('breadcrumbCalculator'), href: "/calculator" },
      { label: t('breadcrumbPercentage'), href: "/calculator/percentage-calculator" }
    ],
    schemaOptions: {
      name: "FastTools Percentage Calculator",
      alternateName: "Free Online Percentage Calculator",
      applicationCategory: "UtilitiesApplication",
      ratingValue: "4.8",
      ratingCount: "1250",
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
    }
  });
}

export default async function PercentageCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('percentageCalculator');
  const tNavigation = await getTranslations('navigation');

  const toolContent = {
    toolName: t('headerTitle'),
    overview: t('overview'),

    howToSteps: [
      t('step1'),
      t('step2'),
      t('step3'),
      t('step4'),
      t('step5'),
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
    ],

    useCases: [
      t('useCase1'),
      t('useCase2'),
      t('useCase3'),
      t('useCase4'),
      t('useCase5'),
      t('useCase6'),
      t('useCase7'),
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
            {t('basicFormulaTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('basicFormulaP1')}
          </p>
          <p className="font-mono bg-muted p-3 rounded text-sm">
            {t('basicFormulaFormula')}
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('basicFormulaP2')}
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            {t('commonCalculationsTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('commonCalculationsP1')}
          </p>
          <div className="space-y-3 mb-6">
            <div>
              <h4 className="font-semibold mb-1">{t('increaseTitle')}</h4>
              <p className="mb-1">{t('increaseFormula')}</p>
              <p className="text-sm text-muted-foreground">{t('increaseExample')}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">{t('decreaseTitle')}</h4>
              <p className="mb-1">{t('decreaseFormula')}</p>
              <p className="text-sm text-muted-foreground">{t('decreaseExample')}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">{t('differenceTitle')}</h4>
              <p className="mb-1">{t('differenceFormula')}</p>
              <p className="text-sm text-muted-foreground">{t('differenceExample')}</p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            {t('applicationsTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('applicationsP1')}
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>{t('application1')}</strong></li>
            <li><strong>{t('application2')}</strong></li>
            <li><strong>{t('application3')}</strong></li>
            <li><strong>{t('application4')}</strong></li>
            <li><strong>{t('application5')}</strong></li>
            <li><strong>{t('application6')}</strong></li>
          </ul>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            {t('mentalMathTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('mentalMathP1')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-muted/50 p-4 rounded-lg">
              <span className="font-bold block mb-1">{t('shortcut10')}</span>
              <span className="text-sm">{t('shortcut10Desc')}</span>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <span className="font-bold block mb-1">{t('shortcut1')}</span>
              <span className="text-sm">{t('shortcut1Desc')}</span>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <span className="font-bold block mb-1">{t('shortcut20')}</span>
              <span className="text-sm">{t('shortcut20Desc')}</span>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <span className="font-bold block mb-1">{t('shortcut5')}</span>
              <span className="text-sm">{t('shortcut5Desc')}</span>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-primary" />
            {t('tipsTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('tipsP1')}
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>{t('tip1')}</li>
            <li>{t('tip2')}</li>
            <li>{t('tip3')}</li>
            <li>{t('tip4')}</li>
            <li>{t('tip5')}</li>
          </ul>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Percent className="h-6 w-6 text-primary" />
            {t('conversionTitle')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t('conversionP1')}
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3">{t('tableFraction')}</th>
                  <th className="p-3">{t('tableDecimal')}</th>
                  <th className="p-3">{t('tablePercentage')}</th>
                  <th className="p-3">{t('tableCommonUse')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3">{t('fractionHalf')}</td>
                  <td className="p-3">{t('decimalHalf')}</td>
                  <td className="p-3 font-bold text-green-600">{t('percentageHalf')}</td>
                  <td className="p-3">{t('useHalf')}</td>
                </tr>
                <tr>
                  <td className="p-3">{t('fractionThird')}</td>
                  <td className="p-3">{t('decimalThird')}</td>
                  <td className="p-3 font-bold text-green-600">{t('percentageThird')}</td>
                  <td className="p-3">{t('useThird')}</td>
                </tr>
                <tr>
                  <td className="p-3">{t('fractionQuarter')}</td>
                  <td className="p-3">{t('decimalQuarter')}</td>
                  <td className="p-3 font-bold text-green-600">{t('percentageQuarter')}</td>
                  <td className="p-3">{t('useQuarter')}</td>
                </tr>
                <tr>
                  <td className="p-3">{t('fractionFifth')}</td>
                  <td className="p-3">{t('decimalFifth')}</td>
                  <td className="p-3 font-bold text-green-600">{t('percentageFifth')}</td>
                  <td className="p-3">{t('useFifth')}</td>
                </tr>
                <tr>
                  <td className="p-3">{t('fractionTenth')}</td>
                  <td className="p-3">{t('decimalTenth')}</td>
                  <td className="p-3 font-bold text-green-600">{t('percentageTenth')}</td>
                  <td className="p-3">{t('useTenth')}</td>
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
          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-l-4 border-blue-500 rounded-r-lg">
            <p className="italic text-blue-700 dark:text-blue-300 leading-relaxed">
              {t('expertText')}
            </p>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-2">{t('expertAuthor')}</p>
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
                <h4 className="font-semibold text-foreground">{t('step1Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('step1Desc')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">2</div>
              <div>
                <h4 className="font-semibold text-foreground">{t('step2Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('step2Desc')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">3</div>
              <div>
                <h4 className="font-semibold text-foreground">{t('step3Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('step3Desc')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">4</div>
              <div>
                <h4 className="font-semibold text-foreground">{t('step4Title')}</h4>
                <p className="text-sm text-muted-foreground">{t('step4Desc')}</p>
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
      { question: t('faq46Q'), answer: t('faq46A') },
      { question: t('faq47Q'), answer: t('faq47A') },
      { question: t('faq48Q'), answer: t('faq48A') },
      { question: t('faq49Q'), answer: t('faq49A') },
    ],

    relatedTools: [
      { name: t('relatedTool1'), href: "/finance-tools/loan-calculator" },
      { name: t('relatedTool2'), href: "/calculator/gpa-calculator" },
      { name: t('relatedTool3'), href: "/calculator/bmi-calculator" },
      { name: t('relatedTool4'), href: "/calculator" }
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
        { label: t('breadcrumbPercentage'), href: "/calculator/percentage-calculator" }
      ]}
      toolComponent={
        <div className="space-y-4">
          <div className="border border-border rounded-xl bg-card/70 p-4 md:p-5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between shadow-sm">
            <div className="trust-signals space-y-2 text-xs md:text-sm text-muted-foreground">
              <p>{t('trustSignal1')}</p>
              <p>{t('trustSignal2')}</p>
              <p>{t('trustSignal3')}</p>
              <p>{t('trustSignal4')}</p>
            </div>
          </div>
          <PercentageCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: t('title'),
        description: t('description'),
        path: "/calculator/percentage-calculator"
      }}
    />
  )
}
