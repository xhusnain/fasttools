import { Metadata } from 'next';
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { getTranslations } from 'next-intl/server';
import { createMetadata } from "@/lib/metadata-base"

const ScientificCalculatorWrapper = dynamic(() => import("@/components/calculators/scientific-calculator-wrapper").then(mod => mod.ScientificCalculatorWrapper), {
  loading: () => <ToolLoader />
})
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { Calculator, Brain, Pi } from "lucide-react"
import Image from "next/image"
import { GTable } from "@/ui/gtable"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'scientificCalculator' });

  return createMetadata({
    title: t('title'),
    description: t('description'),
    path: "/calculator/scientific-calculator",
    locale
  });
}

export default async function ScientificCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('scientificCalculator');
  const tTools = await getTranslations('tools.calculators');
  const tNavigation = await getTranslations('navigation');

  const toolConfig = createToolConfig({
    toolName: t('title'),
    description: t('description'),
    path: "/calculator/scientific-calculator",
    header: {
      title: t('headerTitle'),
      description: t('headerDescription'),
      titleSize: "medium",
      descriptionSize: "small",
      color: "blue"
    },
    breadcrumbs: [
      { label: tNavigation('calculators'), href: "/calculator" },
      { label: tTools('scientific.title'), href: "/calculator/scientific-calculator" }
    ],
    content: {
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
      ],
      aboutTool: (
        <>
          <div className="space-y-8">
            <div className="p-6 rounded-lg bg-card border border-border shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <div className="h-6 w-6 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calculator className="h-4 w-4 text-foreground" />
                </div>
                {t('whatIsTitle')}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                {t('whatIsP1')}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                {t('whatIsP2')}
              </p>
              <h3 className="text-lg font-semibold mb-3 text-heading-accent">{t('keyFeaturesTitle')}</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>{t('keyFeature1')}</strong></li>
                <li><strong>{t('keyFeature2')}</strong></li>
                <li><strong>{t('keyFeature3')}</strong></li>
                <li><strong>{t('keyFeature4')}</strong></li>
                <li><strong>{t('keyFeature5')}</strong></li>
              </ul>

              <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden border border-border shadow-lg my-6">
                <Image
                  src="/images/scientific-calculator-functions.png"
                  alt="Scientific Calculator Functions - Trigonometry, Logarithms, Powers, Roots, and Mathematical Constants"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <div className="h-6 w-6 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Brain className="h-4 w-4 text-foreground" />
                </div>
                {t('functionsGuideTitle')}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-heading-accent">{t('trigTitle')}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>{t('trig1')}</strong></li>
                    <li><strong>{t('trig2')}</strong></li>
                    <li><strong>{t('trig3')}</strong></li>
                    <li><strong>{t('trig4')}</strong></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-heading-accent">{t('logTitle')}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>{t('log1')}</strong></li>
                    <li><strong>{t('log2')}</strong></li>
                    <li><strong>{t('log3')}</strong></li>
                    <li><strong>{t('log4')}</strong></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-heading-accent">{t('powerTitle')}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>{t('power1')}</strong></li>
                    <li><strong>{t('power2')}</strong></li>
                    <li><strong>{t('power3')}</strong></li>
                    <li><strong>{t('power4')}</strong></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-heading-accent">{t('advancedTitle')}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>{t('advanced1')}</strong></li>
                    <li><strong>{t('advanced2')}</strong></li>
                    <li><strong>{t('advanced3')}</strong></li>
                    <li><strong>{t('advanced4')}</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <div className="h-6 w-6 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Pi className="h-4 w-4 text-foreground" />
                </div>
                {t('constantsTitle')}
              </h2>
              <GTable>
                <thead className="bg-muted text-foreground font-semibold">
                  <tr>
                    <th className="p-3">{t('tableSymbol')}</th>
                    <th className="p-3">{t('tableName')}</th>
                    <th className="p-3">{t('tableValue')}</th>
                    <th className="p-3">{t('tableSignificance')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-sm">
                  <tr>
                    <td className="p-3 font-bold text-lg">{t('piSymbol')}</td>
                    <td className="p-3 font-semibold">{t('piName')}</td>
                    <td className="p-3">{t('piValue')}</td>
                    <td className="p-3">{t('piSignificance')}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-lg">{t('eSymbol')}</td>
                    <td className="p-3 font-semibold">{t('eName')}</td>
                    <td className="p-3">{t('eValue')}</td>
                    <td className="p-3">{t('eSignificance')}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-lg">{t('phiSymbol')}</td>
                    <td className="p-3 font-semibold">{t('phiName')}</td>
                    <td className="p-3">{t('phiValue')}</td>
                    <td className="p-3">{t('phiSignificance')}</td>
                  </tr>
                </tbody>
              </GTable>
            </div>

            <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-l-4 border-blue-500 rounded-r-lg my-8">
              <h4 className="flex items-center gap-2 font-bold text-blue-800 dark:text-blue-200 mb-2">
                <Brain className="h-5 w-5" />
                {t('expertTitle')}
              </h4>
              <p className="italic text-blue-700 dark:text-blue-300">
                {t('expertText')}
              </p>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-2">{t('expertAuthor')}</p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-foreground">{t('whyChooseTitle')}</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                {t('whyChooseP1')}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                {t('whyChooseP2')}
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-foreground">{t('degreeRadianTitle')}</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                {t('degreeRadianP1')}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                {t('degreeRadianP2')}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                <strong>{t('degreeRadianProTip')}</strong>
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-foreground">{t('memoryTitle')}</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                {t('memoryP1')}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                {t('memoryP2')}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                <strong>{t('memoryExample')}</strong>
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-lg">
              <h2 className="text-xl font-bold mb-4 text-foreground">{t('powersTitle')}</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                {t('powersP1')}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                {t('powersP2')}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                {t('powersP3')}
              </p>
            </div>
          </div>
        </>
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
      ],
      relatedTools: [
        { name: t('relatedTool1'), href: "/calculator/percentage-calculator" },
        { name: t('relatedTool2'), href: "/calculator/bmi-calculator" },
        { name: t('relatedTool3'), href: "/calculator/age-calculator" },
        { name: t('relatedTool4'), href: "/finance-tools/loan-calculator" }
      ]
    }
  })

  return <ToolPageLayout {...toolConfig.getLayoutProps(<ScientificCalculatorWrapper><></></ScientificCalculatorWrapper>)} />
}
