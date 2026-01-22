import { Metadata } from 'next';
import React from 'react'
import Image from "next/image"
import { GToolCard } from "@/ui/gtool-card"
import { getTranslations } from 'next-intl/server';
import {
  Calculator,
  Calendar,
  Activity,
  Percent,
  Clock,
  TrendingUp,
  Triangle,
  BarChart3,
  Heart,
  Flame,
  Zap,
  Target,
  Users,
  Utensils,
  ArrowRightLeft,
  BookOpen,
  Blocks,
  Router,
  Cake,
  Stethoscope,
  HeartPulse,
  CalendarHeart,
  Binary,
  Sigma,
  Footprints
} from "lucide-react"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { createMetadata } from "@/lib/metadata-base"

// Helper function to get tool translation key from href
function getToolKey(href: string): string {
  const toolId = href.split('/').pop()?.replace(/-/g, '') || '';
  const keyMap: Record<string, string> = {
    'scientificcalculator': 'scientific',
    'percentagecalculator': 'percentage',
    'datedifference': 'dateDifference',
    'timeduration': 'timeDuration',
    'bmicalculator': 'bmi',
    'bmrcalculator': 'bmr',
    'caloriecalculator': 'calorie',
    'gpacalculator': 'gpa',
    'concretecalculator': 'concrete',
    'ipsubnetcalculator': 'ipSubnet',
    'agecalculator': 'age',
    'pregnancycalculator': 'pregnancy',
    'pregnancyconceptioncalculator': 'pregnancyConception',
    'fractioncalculator': 'fraction',
    'standarddeviationcalculator': 'standardDeviation',
    'trianglecalculator': 'triangle',
    'pacecalculator': 'pace',
    'bodyfatcalculator': 'bodyFat',
    'conversioncalculator': 'conversion',
    'lovecalculator': 'love',
  };
  return keyMap[toolId] || toolId;
}

const toolIcons: Record<string, any> = {
  scientific: Calculator,
  percentage: Percent,
  dateDifference: Calendar,
  timeDuration: Clock,
  bmi: Activity,
  bmr: Flame,
  calorie: Utensils,
  gpa: BookOpen,
  concrete: Blocks,
  ipSubnet: Router,
  age: Cake,
  pregnancy: Stethoscope,
  pregnancyConception: CalendarHeart,
  fraction: Binary,
  standardDeviation: Sigma,
  triangle: Triangle,
  pace: Footprints,
  bodyFat: HeartPulse,
  conversion: ArrowRightLeft,
  love: Heart,
}

const toolColors: Record<string, string> = {
  scientific: "blue",
  percentage: "green",
  dateDifference: "purple",
  timeDuration: "blue",
  bmi: "pink",
  bmr: "red",
  calorie: "yellow",
  gpa: "blue",
  concrete: "stone",
  ipSubnet: "slate",
  age: "blue",
  pregnancy: "pink",
  pregnancyConception: "rose",
  fraction: "blue",
  standardDeviation: "violet",
  triangle: "indigo",
  pace: "emerald",
  bodyFat: "purple",
  conversion: "teal",
  love: "pink",
}

const toolHrefs = [
  "/calculator/scientific-calculator",
  "/calculator/percentage-calculator",
  "/calculator/date-difference",
  "/calculator/time-duration",
  "/calculator/bmi-calculator",
  "/calculator/bmr-calculator",
  "/calculator/calorie-calculator",
  "/calculator/gpa-calculator",
  "/calculator/concrete-calculator",
  "/calculator/ip-subnet-calculator",
  "/calculator/age-calculator",
  "/calculator/pregnancy-calculator",
  "/calculator/pregnancy-conception-calculator",
  "/calculator/fraction-calculator",
  "/calculator/standard-deviation-calculator",
  "/calculator/triangle-calculator",
  "/calculator/pace-calculator",
  "/calculator/body-fat-calculator",
  "/calculator/conversion-calculator",
  "/calculator/love-calculator",
]

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'calculatorPage' });

  return createMetadata({
    title: t('title'),
    description: t('description'),
    path: "/calculator",
    locale
  });
}

export default async function ToolsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('calculatorPage');
  const tTools = await getTranslations('tools.calculators');
  const tNavigation = await getTranslations('navigation');

  const tools = toolHrefs.map(href => {
    const key = getToolKey(href);
    return {
      title: tTools(`${key}.title`),
      description: tTools(`${key}.description`),
      icon: toolIcons[key],
      href,
      color: toolColors[key],
    };
  });

  const faqs = [
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
  ];

  const toolConfig = createToolConfig({
    toolName: t('title'),
    description: t('description'),
    path: "/calculator",
    header: {
      title: t('headerTitle'),
      description: t('headerDescription'),
      titleSize: "medium",
      descriptionSize: "small",
      color: "blue"
    },
    breadcrumbs: [
      { label: tNavigation('calculators'), href: "/calculator" }
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
      ],
      aboutTool: (
        <>
          <div className="space-y-8">
            <div className="p-6 rounded-lg bg-card border border-border shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <div className="h-6 w-6 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <BarChart3 className="h-4 w-4 text-foreground" />
                </div>
                {t('whyUseTitle')}
              </h2>

              <h3 className="text-xl font-bold mb-3 text-heading-accent">{t('precisionTitle')}</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                {t('precisionDesc')}
              </p>

              <h3 className="text-xl font-bold mb-3 text-heading-accent">{t('empoweringTitle')}</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                {t('empoweringDesc')}
              </p>

              <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden border border-border shadow-lg my-6">
                <Image
                  src="/images/calculation-accuracy.png"
                  alt="Precision and Accuracy in Calculations"
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-bold mb-3 text-heading-accent">{t('algorithmTitle')}</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                {t('algorithmDesc')}
              </p>

              <h3 className="text-xl font-bold mb-3 text-heading-accent">{t('verifiedTitle')}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {t('verifiedDesc')}
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <div className="h-6 w-6 rounded-lg bg-heading-accent-border/10 flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-heading-accent" />
                </div>
                {t('popularTitle')}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h3 className="text-lg font-bold mb-2 text-primary">{t('financialTitle')}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {t('financialDesc')}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-heading-accent-border/5 border border-heading-accent-border/20">
                  <h3 className="text-lg font-bold mb-2 text-heading-accent">{t('healthTitle')}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {t('healthDesc')}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-blue-500/5 border border-border">
                  <h3 className="text-lg font-bold mb-2 text-foreground">{t('scientificTitle')}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {t('scientificDesc')}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-purple-500/5 border border-border">
                  <h3 className="text-lg font-bold mb-2 text-foreground">{t('conversionTitle')}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {t('conversionDesc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <div className="h-6 w-6 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calculator className="h-4 w-4 text-foreground" />
                </div>
                {t('howWorkTitle')}
              </h2>

              <div className="prose prose-sm max-w-none text-muted-foreground">
                <h3 className="text-xl font-bold mb-3 text-heading-accent">{t('algorithmicTitle')}</h3>
                <p className="mb-4 leading-relaxed">
                  {t('algorithmicDesc')}
                </p>

                <h3 className="text-xl font-bold mb-3 text-heading-accent">{t('statisticalTitle')}</h3>
                <p className="mb-4 leading-relaxed">
                  {t('statisticalDesc')}
                </p>

                <h3 className="text-xl font-bold mb-3 text-heading-accent">{t('cognitiveTitle')}</h3>
                <p className="mb-4 leading-relaxed">
                  {t('cognitiveDesc')}
                </p>

                <h3 className="text-xl font-bold mb-3 text-heading-accent">{t('economicTitle')}</h3>
                <p className="mb-4 leading-relaxed">
                  {t('economicDesc')}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <div className="h-6 w-6 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <BarChart3 className="h-4 w-4 text-foreground" />
                </div>
                {t('industryTitle')}
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border border-border">
                    <h3 className="text-lg font-bold mb-2 text-foreground">{t('healthcareTitle')}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {t('healthcareDesc')}
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-muted border border-border">
                    <h3 className="text-lg font-bold mb-2 text-foreground">{t('financialServicesTitle')}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {t('financialServicesDesc')}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-heading-accent-border0 dark:bg-heading-accent-border50/20 border border-heading-accent-border dark:border-heading-accent-border">
                    <h3 className="text-lg font-bold mb-2 text-heading-accent dark:text-heading-accent">{t('educationTitle')}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {t('educationDesc')}
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-muted border border-border">
                    <h3 className="text-lg font-bold mb-2 text-foreground">{t('engineeringTitle')}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {t('engineeringDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <div className="h-6 w-6 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                  <Calculator className="h-4 w-4 text-indigo-500" />
                </div>
                {t('technicalTitle')}
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-3 text-card-foreground">{t('mathematicalTitle')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-indigo-50 dark:bg-indigo-950/20 border border-border">
                      <h4 className="font-bold mb-2 text-indigo-700 dark:text-indigo-300">{t('financialCalcTitle')}</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>{t('financialCalc1')}</li>
                        <li>{t('financialCalc2')}</li>
                        <li>{t('financialCalc3')}</li>
                        <li>{t('financialCalc4')}</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-lg bg-pink-50 dark:bg-pink-950/20 border border-border">
                      <h4 className="font-bold mb-2 text-foreground">{t('scientificCalcTitle')}</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>{t('scientificCalc1')}</li>
                        <li>{t('scientificCalc2')}</li>
                        <li>{t('scientificCalc3')}</li>
                        <li>{t('scientificCalc4')}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-3 text-card-foreground">{t('qualityTitle')}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {t('qualityDesc')}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 rounded-lg bg-heading-accent-border0 dark:bg-heading-accent-border50/20 border border-heading-accent-border dark:border-heading-accent-border">
                      <div className="text-2xl font-bold text-heading-accent dark:text-heading-accent mb-1">{t('accuracyRate')}</div>
                      <div className="text-sm text-muted-foreground">{t('accuracyLabel')}</div>
                    </div>

                    <div className="text-center p-4 rounded-lg bg-muted border border-border">
                      <div className="text-2xl font-bold text-foreground mb-1">{t('decimalPrecision')}</div>
                      <div className="text-sm text-muted-foreground">{t('precisionLabel')}</div>
                    </div>

                    <div className="text-center p-4 rounded-lg bg-muted border border-border">
                      <div className="text-2xl font-bold text-foreground mb-1">{t('errorRate')}</div>
                      <div className="text-sm text-muted-foreground">{t('errorLabel')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
      faqs,
    }
  })

  return <ToolPageLayout {...toolConfig.getLayoutProps(<CalculatorGrid tools={tools} stats={[t('stat50Tools'), t('stat1MUsers'), t('statFreeForever'), t('statProfessional')]} />)} />
}

function CalculatorGrid({ tools, stats }: { tools: Array<{ title: string; description: string; icon: any; href: string; color: string }>, stats: string[] }) {
  return (
    <div className="space-y-8">
      <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-border shadow-xl">
        <Image
          src="/images/calculator-hero.png"
          alt="Calculator Tools Illustration"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-card border border-primary shadow-md hover:shadow-lg transition-all duration-300">
          <Calculator className="h-4 w-4 text-primary" />
          <span className="text-primary font-medium text-sm">{stats[0]}</span>
        </div>
        <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-card border border-heading-accent-border shadow-md hover:shadow-lg transition-all duration-300">
          <Users className="h-4 w-4 text-heading-accent" />
          <span className="text-heading-accent font-medium text-sm">{stats[1]}</span>
        </div>
        <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-card border border-accent shadow-md hover:shadow-lg transition-all duration-300">
          <Zap className="h-4 w-4 text-accent" />
          <span className="text-accent font-medium text-sm">{stats[2]}</span>
        </div>
        <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-card border border-secondary-accent shadow-md hover:shadow-lg transition-all duration-300">
          <Target className="h-4 w-4 text-secondary-accent" />
          <span className="text-secondary-accent font-medium text-sm">{stats[3]}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <GToolCard
              key={tool.href}
              title={tool.title}
              description={tool.description}
              href={tool.href}
              icon={Icon}
              className="animate-fade-in-up"
            />
          );
        })}
      </div>
    </div>
  )
}
