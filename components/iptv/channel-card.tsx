'use client';

// Channel Card Component

import { Channel } from '@/types/iptv';
import Link from 'next/link';
import { Play, Tv } from 'lucide-react';
import Image from 'next/image';

import { useState } from 'react';

interface ChannelCardProps {
    channel: Channel;
    countryCode: string;
}

export function ChannelCard({ channel, countryCode }: ChannelCardProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [imageError, setImageError] = useState(false);
    const imageSrc = imageError ? '/placeholder-channel.png' : (channel.logo || '/placeholder-channel.png');

    return (
        <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/10">
            <div className="p-2.5 space-y-2">
                {/* Channel Logo */}
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted/30 flex items-center justify-center">
                    {channel.logo ? (
                        <>
                            {isLoading && (
                                <div className="absolute inset-0 bg-muted animate-pulse" />
                            )}
                            <Image
                                src={imageSrc}
                                alt={channel.name}
                                fill
                                unoptimized
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                                className={`object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                                onError={() => setImageError(true)}
                                onLoad={() => setIsLoading(false)}
                            />
                        </>
                    ) : (
                        <Tv className="h-8 w-8 text-muted-foreground/50" />
                    )}
                    {imageError && (
                        <div className="absolute inset-0 flex items-center justify-center bg-muted/30">
                            <Tv className="h-8 w-8 text-muted-foreground/50" />
                        </div>
                    )}
                </div>

                {/* Channel Info */}
                <div className="space-y-1.5">
                    <h3 className="font-semibold text-sm text-foreground line-clamp-1 group-hover:text-primary transition-colors" title={channel.name}>
                        {channel.name}
                    </h3>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-1">
                        {channel.categories.slice(0, 1).map((category, index) => (
                            <span
                                key={index}
                                className="px-1.5 py-0.5 text-[10px] rounded-full bg-primary/10 text-primary border border-primary/20"
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Watch Button */}
                <Link
                    href={`/live-tv/${countryCode}/watch/${channel.id}`}
                    className="flex items-center justify-center gap-1.5 w-full py-1.5 px-3 rounded-md bg-primary text-primary-foreground text-xs font-medium transition-all hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20"
                >
                    <Play className="h-3 w-3 fill-current" />
                    Watch
                </Link>
            </div>

            {/* Hover Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
    );
}
