// Main IPTV Landing Page

import { getAllCountries, getIPTVStats } from '@/services/iptv.service';
import { CountryGrid } from '@/components/iptv/country-grid';
import { LegalDisclaimer } from '@/components/iptv/legal-disclaimer';
import { generateMainPageSEO } from '@/components/iptv/helpers/seo-generator';
import { Metadata } from 'next';
import { Tv, Globe } from 'lucide-react';

export async function generateMetadata(): Promise<Metadata> {
    const stats = await getIPTVStats();
    const seo = generateMainPageSEO(stats.totalCountries, stats.totalChannels);

    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        openGraph: {
            title: seo.title,
            description: seo.description,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: seo.title,
            description: seo.description,
        },
    };
}

export default async function LiveTVPage() {
    const countries = await getAllCountries();
    const stats = await getIPTVStats();
    const seo = generateMainPageSEO(stats.totalCountries, stats.totalChannels);

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-12 space-y-12">
                {/* Hero Section */}
                <div className="text-center space-y-6 max-w-4xl mx-auto">
                    <div className="flex items-center justify-center gap-3">
                        <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                            <Tv className="h-8 w-8 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
                            Live TV from Around the World
                        </h1>
                    </div>

                    <p className="text-xl text-muted-foreground">
                        Stream {stats.totalChannels.toLocaleString()}+ live TV channels from {stats.totalCountries}+ countries, completely free
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-center gap-8 flex-wrap">
                        <div className="flex items-center gap-2 text-sm">
                            <Globe className="h-5 w-5 text-primary" />
                            <span className="font-semibold">{stats.totalCountries}+</span>
                            <span className="text-muted-foreground">Countries</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Tv className="h-5 w-5 text-primary" />
                            <span className="font-semibold">{stats.totalChannels.toLocaleString()}+</span>
                            <span className="text-muted-foreground">Channels</span>
                        </div>
                    </div>
                </div>

                {/* Legal Disclaimer */}
                <LegalDisclaimer />

                {/* SEO Content */}
                <div className="prose prose-invert max-w-none">
                    <div
                        className="text-muted-foreground space-y-4"
                        dangerouslySetInnerHTML={{ __html: seo.content.replace(/\n/g, '<br />') }}
                    />
                </div>

                {/* Country Grid */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground">Browse by Country</h2>
                    <CountryGrid countries={countries} />
                </div>
            </div>
        </div>
    );
}
