// Main IPTV Landing Page

import { getAllCountries, getIPTVStats, getAllLanguages, getAllCategories, getAllChannels } from '@/services/iptv.service';
import { LiveTVDashboard } from '@/components/iptv/live-tv-dashboard';
import { LegalDisclaimer } from '@/components/iptv/legal-disclaimer';
import { LiveTVSEO } from '@/components/iptv/live-tv-seo';
import { createMetadata } from '@/lib/metadata-base';
import { Metadata } from 'next';
import { Tv, Globe } from 'lucide-react';

export async function generateMetadata(): Promise<Metadata> {
    const stats = await getIPTVStats();

    return createMetadata({
        title: `Watch Live TV from ${stats.totalCountries}+ Countries - Free IPTV Streaming`,
        description: `Stream ${stats.totalChannels}+ live TV channels from ${stats.totalCountries}+ countries worldwide. Watch free IPTV including news, sports, entertainment, and more. No registration required.`,
        path: '/live-tv',
    });
}

import { Suspense } from 'react';

export default async function LiveTVPage() {
    const countries = await getAllCountries();
    const stats = await getIPTVStats();
    const languages = await getAllLanguages();
    const categories = await getAllCategories();

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

                {/* Dashboard (Filters + Grid) */}
                <LiveTVDashboard
                    initialCountries={countries}
                    languages={languages}
                    categories={categories}
                />

                {/* Legal Disclaimer */}
                <LegalDisclaimer />

                {/* Dynamic SEO Content (Directory & Features) - Streamed in later */}
                <Suspense fallback={
                    <div className="w-full h-96 bg-muted/20 animate-pulse rounded-xl flex items-center justify-center text-muted-foreground">
                        Loading Channel Directory...
                    </div>
                }>
                    <LiveTVSEO countries={countries} />
                </Suspense>
            </div>
        </div>
    );
}
