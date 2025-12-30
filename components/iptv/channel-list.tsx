'use client';

// Channel List Component with Virtualization

import { Channel } from '@/types/iptv';
import { ChannelCard } from './channel-card';
import { VirtuosoGrid } from 'react-virtuoso';
import { forwardRef } from 'react';

interface ChannelListProps {
    channels: Channel[];
    countryCode: string;
}

const GridList = forwardRef<HTMLDivElement, any>(({ style, children, ...props }, ref) => (
    <div
        ref={ref}
        {...props}
        style={style}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 pb-8"
    >
        {children}
    </div>
));

const GridItem = ({ children, ...props }: any) => (
    <div {...props}>
        {children}
    </div>
);

export function ChannelList({ channels, countryCode }: ChannelListProps) {
    if (channels.length === 0) {
        return (
            <div className="text-center py-12 text-muted-foreground">
                <p>No channels found.</p>
            </div>
        );
    }

    return (
        <div className="w-full">
            <VirtuosoGrid
                useWindowScroll
                totalCount={channels.length}
                components={{
                    List: GridList,
                    Item: GridItem,
                }}
                itemContent={(index) => (
                    <ChannelCard
                        channel={channels[index]}
                        countryCode={countryCode}
                    />
                )}
            />
        </div>
    );
}

GridList.displayName = 'GridList';
GridItem.displayName = 'GridItem';
