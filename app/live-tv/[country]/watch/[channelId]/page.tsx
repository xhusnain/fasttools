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
    const relatedChannels = await getChannelsByCountry(country);
    const otherChannels = relatedChannels
        .filter(c => c.id !== channel.id)
        .slice(0, 6);

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8 space-y-8">
                {/* Back Button */}
                <Link
                    href={`/live-tv/${country}`}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to {country.toUpperCase()} channels
                </Link>

                {/* Channel Info */}
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold text-foreground">{channel.name}</h1>
                    <div className="flex flex-wrap gap-2">
                        {channel.categories.map((category, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                    {channel.language && (
                        <p className="text-sm text-muted-foreground">
                            Language: {channel.language}
                        </p>
                    )}
                </div>

                {/* Video Player */}
                <LiveTVPlayer streamUrl={channel.streamUrl} channelName={channel.name} />

                {/* Legal Disclaimer */}
                <LegalDisclaimer />

                {/* Related Channels */}
                {otherChannels.length > 0 && (
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <Tv className="h-6 w-6 text-primary" />
                            <h2 className="text-2xl font-bold text-foreground">More Channels from {country.toUpperCase()}</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {otherChannels.map((relatedChannel) => (
                                <ChannelCard
                                    key={relatedChannel.id}
                                    channel={relatedChannel}
                                    countryCode={country}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
