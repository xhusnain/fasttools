'use client';

// Channel List Component

import { Channel } from '@/types/iptv';
import { ChannelCard } from './channel-card';
import { useState } from 'react';
import { Filter } from 'lucide-react';

interface ChannelListProps {
    channels: Channel[];
    countryCode: string;
}

export function ChannelList({ channels, countryCode }: ChannelListProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    // Extract unique categories
    const categories = ['all', ...Array.from(new Set(channels.flatMap(c => c.categories)))];

    // Filter channels by category
    const filteredChannels = selectedCategory === 'all'
        ? channels
        : channels.filter(c => c.categories.includes(selectedCategory));

    return (
        <div className="space-y-6">
            {/* Category Filter */}
            <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <Filter className="h-4 w-4" />
                    <span>Filter by category:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === category
                                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                                    : 'bg-card/50 text-foreground hover:bg-card/80 border border-border/50'
                                }`}
                        >
                            {category === 'all' ? 'All' : category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Channel Count */}
            <p className="text-sm text-muted-foreground">
                Showing {filteredChannels.length} {filteredChannels.length === 1 ? 'channel' : 'channels'}
            </p>

            {/* Channel Grid */}
            {filteredChannels.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filteredChannels.map((channel) => (
                        <ChannelCard
                            key={channel.id}
                            channel={channel}
                            countryCode={countryCode}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 text-muted-foreground">
                    <p>No channels found in this category.</p>
                </div>
            )}
        </div>
    );
}
