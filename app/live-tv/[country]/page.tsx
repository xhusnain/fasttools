// Country Detail Page - Dynamic Route

import { getCountryChannels, getAllCountries } from '@/services/iptv.service';
import { ChannelList } from '@/components/iptv/channel-list';
import { CountryChannelDashboard } from '@/components/iptv/country-channel-dashboard';
import { LegalDisclaimer } from '@/components/iptv/legal-disclaimer';
import { generateCountrySEO } from '@/components/iptv/helpers/seo-generator';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Tv } from 'lucide-react';
import { createMetadata } from '@/lib/metadata-base';

interface CountryPageProps {
    params: {
        country: string;
    };
}

export async function generateStaticParams() {
    const countries = await getAllCountries();

    // Generate static pages for top 50 countries
    return countries.slice(0, 50).map((country) => ({
        country: country.code,
    }));
}

export async function generateMetadata({ params }: CountryPageProps): Promise<Metadata> {
    const { country: countryCode } = await params;
    const countryData = await getCountryChannels(countryCode);

    if (!countryData) {
        return {
            title: 'Country Not Found | FastTools',
        };
    }

    const seo = generateCountrySEO(countryData.country);

    const metadata = createMetadata({
        title: seo.title,
        description: seo.description,
        path: `/live-tv/${countryCode}`,
        ogImageAlt: `${countryData.country.name} Live TV Channels`,
    });

    return {
        ...metadata,
        keywords: seo.keywords,
    };
}

export default async function CountryPage({ params }: CountryPageProps) {
    const { country: countryCode } = await params;
    const countryData = await getCountryChannels(countryCode);

    if (!countryData) {
        notFound();
    }

    const { country, channels } = countryData;
    const seo = generateCountrySEO(country);

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-12 space-y-8">
                {/* Back Button */}
                <Link
                    href="/live-tv"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to all countries
                </Link>

                {/* Header */}
                <div className="space-y-4">
                    <div className="flex flex-row items-center gap-3 md:gap-4 select-none">
                        <span className="text-4xl md:text-6xl">{country.flag}</span>
                        <div>
                            <h1 className="text-2xl md:text-4xl font-bold text-foreground line-clamp-1">{country.name} Live TV</h1>
                            <p className="text-sm md:text-lg text-muted-foreground mt-1 md:mt-2">
                                {country.channelCount} {country.channelCount === 1 ? 'channel' : 'channels'} available
                            </p>
                        </div>
                    </div>
                </div>

                {/* Filterable Channel List */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Tv className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-bold text-foreground">Available Channels</h2>
                    </div>
                    <CountryChannelDashboard initialChannels={channels} countryCode={country.code} />
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
            </div>
        </div>
    );
}
