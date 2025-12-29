'use client';

// Channel Card Component

import { Channel } from '@/types/iptv';
import Link from 'next/link';
import { Play, Tv } from 'lucide-react';
import Image from 'next/image';

interface ChannelCardProps {
    channel: Channel;
    countryCode: string;
}

export function ChannelCard({ channel, countryCode }: ChannelCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/10">
            <div className="p-4 space-y-3">
                {/* Channel Logo */}
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted/30 flex items-center justify-center">
                    {channel.logo ? (
                        <Image
                            src={channel.logo || '/placeholder-channel.png'}
                            alt={channel.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/placeholder-channel.png';
                            }}
                        />
                    ) : (
                        <Tv className="h-12 w-12 text-muted-foreground/50" />
                    )}
                </div>

                {/* Channel Info */}
                <div className="space-y-2">
                    <h3 className="font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                        {channel.name}
                    </h3>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-1.5">
                        {channel.categories.slice(0, 2).map((category, index) => (
                            <span
                                key={index}
                                className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                            >
                                {category}
                            </span>
                        ))}
                    </div>

                    {/* Language */}
                    {channel.language && (
                        <p className="text-xs text-muted-foreground">
                            Language: {channel.language}
                        </p>
                    )}
                </div>

                {/* Watch Button */}
                <Link
                    href={`/live-tv/${countryCode}/watch/${channel.id}`}
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20"
                >
                    <Play className="h-4 w-4 fill-current" />
                    Watch Live
                </Link>
            </div>

            {/* Hover Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
    );
}
