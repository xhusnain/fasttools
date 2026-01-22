import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"
import { Calculator, TrendingUp, Target, DollarSign, BarChart3, CheckCircle, AlertTriangle, Lightbulb, Zap, Globe, Brain, Shield } from "lucide-react"

const ROASCalculator = dynamic(() => import("@/components/calculators/roas-calculator").then(mod => mod.ROASCalculator), {
    loading: () => <ToolLoader />
})

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'roasCalculator' });

    return createMetadata({
        title: t('title'),
        description: t('description'),
        path: "/ad-tools/roas-calculator",
        locale
    });
}

export default async function ROASCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations('roasCalculator');
    const tNavigation = await getTranslations('navigation');

    const toolContent = {
        toolName: t('toolName'),
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
        ],

        useCases: [
            t('useCase1'),
            t('useCase2'),
            t('useCase3'),
            t('useCase4'),
            t('useCase5'),
        ],

        aboutTool: (
            <div className="space-y-8">
                <article className="space-y-6">
                    {/* Quick Answer Box */}
                    <div className="bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/50 p-4 rounded-lg">
                        <p className="text-sm text-blue-900 dark:text-blue-100">
                            <strong>{t('quickAnswer')}</strong> {t('quickAnswerText')}
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Calculator className="h-6 w-6 text-primary" />
                        {t('understandingROASTitle')}
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        {t('understandingROASDesc')}
                    </p>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Zap className="h-6 w-6 text-primary" />
                        {t('twoModesTitle')}
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                        <div className="bg-muted/50 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">{t('simpleModeTitle')}</h4>
                            <p className="text-sm mb-2">{t('simpleModeDesc')}</p>
                            <ul className="list-disc pl-4 text-sm space-y-1">
                                <li><strong>{t('simpleModeItem1')}</strong></li>
                                <li><strong>{t('simpleModeItem2')}</strong></li>
                                <li><strong>{t('simpleModeItem3')}</strong></li>
                                <li><strong>{t('simpleModeItem4')}</strong></li>
                            </ul>
                        </div>
                        <div className="bg-muted/50 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">{t('advancedModeTitle')}</h4>
                            <p className="text-sm mb-2">{t('advancedModeDesc')}</p>
                            <ul className="list-disc pl-4 text-sm space-y-1">
                                <li>{t('advancedModeItem1')}</li>
                                <li>{t('advancedModeItem2')}</li>
                            </ul>
                            <p className="text-sm mt-2 font-medium">{t('advancedModeNote')}</p>
                        </div>
                    </div>

                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Target className="h-6 w-6 text-primary" />
                        {t('examplesTitle')}
                    </h2>
                    <div className="space-y-4 mb-6">
                        <div className="border-l-4 border-blue-500 pl-4 py-1">
                            <h4 className="font-semibold text-sm">{t('example1Title')}</h4>
                            <p className="text-sm text-muted-foreground">{t('example1Desc')}</p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4 py-1">
                            <h4 className="font-semibold text-sm">{t('example2Title')}</h4>
                            <p className="text-sm text-muted-foreground">{t('example2Desc')}</p>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-4 py-1">
                            <h4 className="font-semibold text-sm">{t('example3Title')}</h4>
                            <p className="text-sm text-muted-foreground">{t('example3Desc')}</p>
                        </div>
                    </div>

                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <BarChart3 className="h-6 w-6 text-primary" />
                        {t('benchmarksTitle')}
                    </h2>
                    <p className="mb-3">
                        {t('benchmarksDesc1')}
                    </p>

                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                        {t('benchmarksDesc2')}
                    </p>
                    <div className="overflow-x-auto">
                        <GTable>
                            <thead className="bg-muted text-foreground font-semibold">
                                <tr>
                                    <th className="p-3 text-left">{t('tableIndustry')}</th>
                                    <th className="p-3 text-left">{t('tableROASRange')}</th>
                                    <th className="p-3 text-left">{t('tableProfitMargin')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border text-sm">
                                <tr>
                                    <td className="p-3 font-medium">{t('industryRetail')}</td>
                                    <td className="p-3">{t('industryRetailRange')}</td>
                                    <td className="p-3">{t('industryRetailFactor')}</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-medium">{t('industryB2B')}</td>
                                    <td className="p-3">{t('industryB2BRange')}</td>
                                    <td className="p-3">{t('industryB2BFactor')}</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-medium">{t('industryFinance')}</td>
                                    <td className="p-3">{t('industryFinanceRange')}</td>
                                    <td className="p-3">{t('industryFinanceFactor')}</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-medium">{t('industryRealEstate')}</td>
                                    <td className="p-3">{t('industryRealEstateRange')}</td>
                                    <td className="p-3">{t('industryRealEstateFactor')}</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-medium">{t('industryHealthcare')}</td>
                                    <td className="p-3">{t('industryHealthcareRange')}</td>
                                    <td className="p-3">{t('industryHealthcareFactor')}</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-medium">{t('industryEducation')}</td>
                                    <td className="p-3">{t('industryEducationRange')}</td>
                                    <td className="p-3">{t('industryEducationFactor')}</td>
                                </tr>
                            </tbody>
                        </GTable>
                    </div>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <TrendingUp className="h-6 w-6 text-primary" />
                        {t('roasVsRomiTitle')}
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                        {t('roasVsRomiDesc')}
                    </p>
                    <div className="overflow-x-auto">
                        <GTable>
                            <thead className="bg-muted text-foreground font-semibold">
                                <tr>
                                    <th className="p-3 text-left">{t('tableMetric')}</th>
                                    <th className="p-3 text-left">{t('tableFormula')}</th>
                                    <th className="p-3 text-left">{t('tableBestFor')}</th>
                                    <th className="p-3 text-left">{t('tableExample')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border text-sm">
                                <tr>
                                    <td className="p-3 font-medium">{t('metricROAS')}</td>
                                    <td className="p-3 font-mono">{t('formulaROAS')}</td>
                                    <td className="p-3">{t('bestForROAS')}</td>
                                    <td className="p-3">{t('exampleROAS')}</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-medium">{t('metricROI')}</td>
                                    <td className="p-3 font-mono">{t('formulaROI')}</td>
                                    <td className="p-3">{t('bestForROI')}</td>
                                    <td className="p-3">{t('exampleROI')}</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-medium">{t('metricROMI')}</td>
                                    <td className="p-3 font-mono">{t('formulaROMI')}</td>
                                    <td className="p-3">{t('bestForROMI')}</td>
                                    <td className="p-3">{t('exampleROMI')}</td>
                                </tr>
                            </tbody>
                        </GTable>
                    </div>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <DollarSign className="h-6 w-6 text-primary" />
                        {t('breakEvenTitle')}
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        {t('breakEvenDesc')}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-card border border-border rounded-lg">
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                {t('breakEvenExample1Title')}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                {t('breakEvenExample1Desc')}
                            </p>
                        </div>
                        <div className="p-4 bg-card border border-border rounded-lg">
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                                {t('breakEvenExample2Title')}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                {t('breakEvenExample2Desc')}
                            </p>
                        </div>
                    </div>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Globe className="h-6 w-6 text-primary" />
                        {t('platformsTitle')}
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        {t('platformsDesc')}
                    </p>
                    <div className="space-y-4">
                        <div className="p-4 bg-muted/30 rounded-lg">
                            <h4 className="font-semibold mb-2">{t('googleAdsTitle')}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{t('googleAdsDesc')}</p>
                            <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                                <li>{t('googleAdsItem1')}</li>
                                <li>{t('googleAdsItem2')}</li>
                                <li>{t('googleAdsItem3')}</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-muted/30 rounded-lg">
                            <h4 className="font-semibold mb-2">{t('facebookAdsTitle')}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{t('facebookAdsDesc')}</p>
                            <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                                <li>{t('facebookAdsItem1')}</li>
                                <li>{t('facebookAdsItem2')}</li>
                                <li>{t('facebookAdsItem3')}</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-muted/30 rounded-lg">
                            <h4 className="font-semibold mb-2">{t('tiktokAdsTitle')}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{t('tiktokAdsDesc')}</p>
                            <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                                <li>{t('tiktokAdsItem1')}</li>
                                <li>{t('tiktokAdsItem2')}</li>
                                <li>{t('tiktokAdsItem3')}</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-muted/30 rounded-lg">
                            <h4 className="font-semibold mb-2">{t('shopifyTitle')}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{t('shopifyDesc')}</p>
                        </div>
                    </div>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Brain className="h-6 w-6 text-primary" />
                        {t('cpcImpactTitle')}
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        {t('cpcImpactDesc')}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-card border border-border rounded-lg">
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <Target className="h-4 w-4 text-blue-500" />
                                {t('cpcTitle')}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">
                                {t('cpcDesc')}
                            </p>
                            <ul className="text-xs text-muted-foreground list-disc pl-4 space-y-1">
                                <li>{t('cpcItem1')}</li>
                                <li>{t('cpcItem2')}</li>
                                <li>{t('cpcItem3')}</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-card border border-border rounded-lg">
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <TrendingUp className="h-4 w-4 text-green-500" />
                                {t('conversionRateTitle')}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">
                                {t('conversionRateDesc')}
                            </p>
                            <ul className="text-xs text-muted-foreground list-disc pl-4 space-y-1">
                                <li>{t('conversionRateItem1')}</li>
                                <li>{t('conversionRateItem2')}</li>
                                <li>{t('conversionRateItem3')}</li>
                            </ul>
                        </div>
                        <div className="p-4 bg-card border border-border rounded-lg">
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <DollarSign className="h-4 w-4 text-purple-500" />
                                {t('aovTitle')}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">
                                {t('aovDesc')}
                            </p>
                            <ul className="text-xs text-muted-foreground list-disc pl-4 space-y-1">
                                <li>{t('aovItem1')}</li>
                                <li>{t('aovItem2')}</li>
                                <li>{t('aovItem3')}</li>
                            </ul>
                        </div>
                    </div>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Lightbulb className="h-6 w-6 text-primary" />
                        {t('strategiesTitle')}
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        {t('strategiesDesc')}
                    </p>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">1</div>
                            <div>
                                <h4 className="font-semibold text-foreground">{t('strategy1Title')}</h4>
                                <p className="text-sm text-muted-foreground">{t('strategy1Desc')}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">2</div>
                            <div>
                                <h4 className="font-semibold text-foreground">{t('strategy2Title')}</h4>
                                <p className="text-sm text-muted-foreground">{t('strategy2Desc')}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">3</div>
                            <div>
                                <h4 className="font-semibold text-foreground">{t('strategy3Title')}</h4>
                                <p className="text-sm text-muted-foreground">{t('strategy3Desc')}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">4</div>
                            <div>
                                <h4 className="font-semibold text-foreground">{t('strategy4Title')}</h4>
                                <p className="text-sm text-muted-foreground">{t('strategy4Desc')}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">5</div>
                            <div>
                                <h4 className="font-semibold text-foreground">{t('strategy5Title')}</h4>
                                <p className="text-sm text-muted-foreground">{t('strategy5Desc')}</p>
                            </div>
                        </div>
                    </div>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <BarChart3 className="h-6 w-6 text-primary" />
                        {t('multipleCampaignsTitle')}
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        {t('multipleCampaignsDesc')}
                    </p>
                    <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                        <h4 className="font-semibold mb-2">{t('multipleCampaignsExampleTitle')}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{t('multipleCampaignsExampleDesc')}</p>
                        <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                            <li>{t('multipleCampaignsItem1')}</li>
                            <li>{t('multipleCampaignsItem2')}</li>
                            <li>{t('multipleCampaignsItem3')}</li>
                        </ul>
                        <p className="text-sm text-muted-foreground mt-2">
                            <strong>{t('multipleCampaignsTotal')}</strong>
                        </p>
                    </div>
                </article>

                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Shield className="h-6 w-6 text-primary" />
                        {t('privacyTitle')}
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        {t('privacyDesc')}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-card border border-border rounded-lg text-center">
                            <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
                            <h4 className="font-semibold mb-1">{t('privacyClientSide')}</h4>
                            <p className="text-xs text-muted-foreground">{t('privacyClientSideDesc')}</p>
                        </div>
                        <div className="p-4 bg-card border border-border rounded-lg text-center">
                            <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
                            <h4 className="font-semibold mb-1">{t('privacyNoStorage')}</h4>
                            <p className="text-xs text-muted-foreground">{t('privacyNoStorageDesc')}</p>
                        </div>
                        <div className="p-4 bg-card border border-border rounded-lg text-center">
                            <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
                            <h4 className="font-semibold mb-1">{t('privacyNoRegistration')}</h4>
                            <p className="text-xs text-muted-foreground">{t('privacyNoRegistrationDesc')}</p>
                        </div>
                    </div>
                </article>

                <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20 text-center">
                    <p className="font-medium text-lg text-primary">{t('readyTitle')}</p>
                    <p className="text-muted-foreground">{t('readyDesc')}</p>
                </div>
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
        ],
        relatedTools: [
            { name: t('relatedTool1'), href: "/finance-tools/discount-calculator" },
            { name: t('relatedTool2'), href: "/finance-tools/tip-calculator" },
            { name: t('relatedTool3'), href: "/finance-tools/sales-tax-calculator" },
            { name: t('relatedTool4'), href: "/finance-tools/investment-calculator" }
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
                { label: t('breadcrumbROAS'), href: "/ad-tools/roas-calculator" }
            ]}
            toolComponent={
                <div className="p-1 sm:p-2 md:p-4 rounded-lg">
                    <ROASCalculator />
                </div>
            }
            toolContent={toolContent}
            expectedMetadata={{
                title: t('title'),
                description: t('description'),
                path: "/ad-tools/roas-calculator"
            }}
        />
    )
}
