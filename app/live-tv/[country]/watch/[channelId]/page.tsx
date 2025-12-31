// Channel Watch Page - Dynamic Route

import { getAllChannels, getChannelsByCountry } from '@/services/iptv.service';
import { LiveTVPlayer } from '@/components/iptv/live-tv-player';
import { LegalDisclaimer } from '@/components/iptv/legal-disclaimer';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Tv } from 'lucide-react';
import { ChannelCard } from '@/components/iptv/channel-card';

interface WatchPageProps {
    params: {
        country: string;
        channelId: string;
    };
}

export async function generateMetadata({ params }: WatchPageProps): Promise<Metadata> {
    const { channelId } = await params;
    const channels = await getAllChannels();
    const channel = channels.find(c => c.id === channelId);

    if (!channel) {
        return {
            title: 'Channel Not Found | FastTools',
        };
    }

    return {
        title: `Watch ${channel.name} Live - Free IPTV Streaming | FastTools`,
        description: `Stream ${channel.name} live for free. Watch ${channel.categories.join(', ')} content from ${channel.country.toUpperCase()} online.`,
        referrer: 'no-referrer',
        openGraph: {
            title: `Watch ${channel.name} Live`,
            description: `Stream ${channel.name} live for free`,
            type: 'video.other',
        },
    };
}

export default async function WatchPage({ params }: WatchPageProps) {
    const { country, channelId } = await params;
    const channels = await getAllChannels();
    const channel = channels.find(c => c.id === channelId);

    if (!channel) {
        notFound();
    }

    // Get related channels from the same country
    const allCountryChannels = await getChannelsByCountry(country);

    // Sort logic: prioritize channels with matching categories
    const otherChannels = allCountryChannels
        .filter(c => c.id !== channel.id)
        .sort((a, b) => {
            const aHasCategory = a.categories.some(cat => channel.categories.includes(cat));
            const bHasCategory = b.categories.some(cat => channel.categories.includes(cat));
            if (aHasCategory && !bHasCategory) return -1;
            if (!aHasCategory && bHasCategory) return 1;
            return 0;
        })
        .slice(0, 5);

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8">
                {/* Back Button - Outside Grid */}
                <Link
                    href={`/live-tv/${country}`}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to {country.toUpperCase()} channels
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Content (Player) */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        {/* Channel Info */}
                        <div className="space-y-3">
                            <h1 className="text-2xl md:text-3xl font-bold text-foreground">{channel.name}</h1>
                            <div className="flex flex-wrap items-center gap-3">
                                <div className="flex flex-wrap gap-2">
                                    {channel.categories.map((category, index) => (
                                        <span
                                            key={index}
                                            className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                                        >
                                            {category}
                                        </span>
                                    ))}
                                </div>
                                {channel.language && (
                                    <>
                                        <span className="text-muted-foreground/30 text-sm">•</span>
                                        <p className="text-sm text-muted-foreground font-medium">
                                            {channel.language}
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Video Player */}
                        <LiveTVPlayer
                            streamUrl={channel.streamUrl}
                            channelName={channel.name}
                            countryCode={country}
                        />
                    </div>

                    {/* Sidebar (Related Channels) */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="flex items-center gap-2 pb-2 border-b border-border/50">
                            <Tv className="h-5 w-5 text-primary" />
                            <h2 className="text-lg font-bold text-foreground">
                                Similar Channels
                            </h2>
                        </div>

                        <div className="flex flex-col gap-3">
                            {otherChannels.length > 0 ? (
                                otherChannels.map((relatedChannel) => (
                                    <Link
                                        key={relatedChannel.id}
                                        href={`/live-tv/${country}/watch/${relatedChannel.id}`}
                                        className="group flex gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors border border-transparent hover:border-border/50"
                                    >
                                        {/* Thumbnail / Logo */}
                                        <div className="relative w-24 h-16 shrink-0 rounded-md overflow-hidden bg-muted/30 flex items-center justify-center border border-border/50">
                                            {relatedChannel.logo ? (
                                                <img
                                                    src={relatedChannel.logo}
                                                    alt={relatedChannel.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <Tv className="h-6 w-6 text-muted-foreground/50" />
                                            )}
                                        </div>

                                        {/* Info */}
                                        <div className="flex flex-col justify-center gap-1 min-w-0">
                                            <h3 className="text-sm font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                                                {relatedChannel.name}
                                            </h3>
                                            <div className="flex flex-wrap gap-1">
                                                {relatedChannel.categories.slice(0, 1).map((category, index) => (
                                                    <span
                                                        key={index}
                                                        className="text-[10px] text-muted-foreground"
                                                    >
                                                        {category}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <p className="text-sm text-muted-foreground">No other channels found.</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Legal Disclaimer - Full Width Bottom */}
                <div className="mt-12">
                    <LegalDisclaimer />
                </div>
            </div>
        </div>
    );
}
