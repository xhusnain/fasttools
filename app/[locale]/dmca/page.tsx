import type { Metadata } from "next"
import { GHeader } from "@/ui/gheader"
import { createMetadata } from "@/lib/metadata-base"
import { getTranslations } from 'next-intl/server';
import { Mail, FileText, AlertTriangle } from "lucide-react"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'dmca' });

    return createMetadata({
        title: t('title'),
        description: t('description'),
        path: "/dmca",
        breadcrumbs: [
            { label: t('pageTitle'), href: "/dmca" }
        ],
        locale
    });
}

export default async function DmcaPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations('dmca');

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12">
                        <GHeader
                            title={t('pageTitle')}
                            description={t('pageSubtitle')}
                            titleSize="large"
                            descriptionSize="medium"
                            color="blue"
                            centered
                        />
                    </div>

                    <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 bg-card border border-border rounded-xl p-8 md:p-12 shadow-sm">
                        <section>
                            <h2 className="flex items-center gap-2 text-2xl font-bold text-primary">
                                <FileText className="h-6 w-6" />
                                {t('introduction')}
                            </h2>
                            <p className="text-muted-foreground">
                                {t('introductionP1')}{" "}
                                <a href={t('dmcaLink')} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                    {t('dmcaLink')}
                                </a>
                                {", "}{t('introductionP2')}
                            </p>
                        </section>

                        <section>
                            <h2 className="flex items-center gap-2 text-2xl font-bold text-primary">
                                <AlertTriangle className="h-6 w-6" />
                                {t('noticeTitle')}
                            </h2>
                            <p className="text-muted-foreground mb-4">
                                {t('noticeP1')}
                            </p>

                            <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                <h3 className="text-lg font-semibold mb-4">{t('noticeRequirements')}</h3>
                                <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                                    <li>{t('requirement1')}</li>
                                    <li>{t('requirement2')}</li>
                                    <li>{t('requirement3')}</li>
                                    <li>
                                        {t('requirement4')}
                                        <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                            <li>"{t('statement1')}"</li>
                                            <li>"{t('statement2')}"</li>
                                        </ul>
                                    </li>
                                    <li>{t('requirement5')}</li>
                                </ol>
                            </div>
                        </section>

                        <section>
                            <h2 className="flex items-center gap-2 text-2xl font-bold text-primary">
                                <Mail className="h-6 w-6" />
                                {t('copyrightAgent')}
                            </h2>
                            <p className="text-muted-foreground mb-4">
                                {t('copyrightAgentP1')}
                            </p>
                            <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                                <p className="font-semibold text-foreground">{t('copyrightAgentLabel')}</p>
                                <p className="text-muted-foreground">{t('legalDepartment')}</p>
                                <p className="text-muted-foreground mt-2">
                                    <strong>{t('email')}</strong>{" "}
                                    <a href="mailto:dmca@fasttools.store" className="text-primary hover:underline">dmca@fasttools.store</a>
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-foreground">{t('counterNotices')}</h2>
                            <p className="text-muted-foreground">
                                {t('counterNoticesP1')}
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                                <li>{t('counterNotice1')}</li>
                                <li>{t('counterNotice2')}</li>
                                <li>{t('counterNotice3')}</li>
                                <li>{t('counterNotice4')}</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
