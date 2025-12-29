// SEO Content Generator for IPTV Countries

import { Country } from '@/types/iptv';

interface CountrySEO {
    title: string;
    description: string;
    content: string;
    keywords: string[];
}

/**
 * Generate SEO-optimized content for a country's IPTV page
 */
export function generateCountrySEO(country: Country): CountrySEO {
    const channelText = country.channelCount === 1 ? 'channel' : 'channels';

    return {
        title: `Watch ${country.name} Live TV - ${country.channelCount} Free ${country.flag} Channels | FastTools`,
        description: `Stream ${country.channelCount} live TV ${channelText} from ${country.name} ${country.flag} for free. Watch news, sports, entertainment, and more from ${country.name} broadcasters online.`,
        content: generateCountryContent(country),
        keywords: [
            `${country.name} live TV`,
            `${country.name} TV channels`,
            `watch ${country.name} TV online`,
            `${country.name} streaming`,
            `free ${country.name} TV`,
            'IPTV',
            'live television',
            country.name,
        ],
    };
}

/**
 * Generate detailed content about a country's TV landscape
 */
function generateCountryContent(country: Country): string {
    const templates = [
        {
            condition: (c: Country) => c.channelCount > 100,
            content: (c: Country) => `
## Watch ${c.name} Live TV Online

Discover ${c.channelCount} live television channels from ${c.name} ${c.flag}, streaming free on FastTools. Our comprehensive collection includes major broadcasters, regional networks, and specialty channels covering news, sports, entertainment, movies, and more.

### Why Watch ${c.name} TV Channels?

${c.name} offers a diverse television landscape with content ranging from breaking news and live sports to popular entertainment shows and cultural programming. Whether you're a ${c.name} expatriate staying connected to home or simply interested in ${c.name} media, our platform provides easy access to live streams.

### Popular Categories

Browse channels by category to find exactly what you're looking for:
- **News**: Stay informed with ${c.name}'s leading news networks
- **Sports**: Watch live sporting events and sports analysis
- **Entertainment**: Enjoy popular shows, series, and variety programs
- **Movies**: Stream the latest films and classic cinema
- **Music**: Tune into music channels and live performances

### How to Watch

Simply click on any channel to start streaming instantly. No registration required, no downloads needed - just pure, free access to ${c.name} television.
      `.trim(),
        },
        {
            condition: (c: Country) => c.channelCount >= 20 && c.channelCount <= 100,
            content: (c: Country) => `
## ${c.name} Live TV Channels ${c.flag}

Access ${c.channelCount} television channels from ${c.name}, available to stream for free. Our curated selection includes the country's most popular broadcasters and specialty networks.

### What's Available

From ${c.name}, you can watch:
- Breaking news and current affairs
- Live sports coverage
- Entertainment and lifestyle programming
- Cultural and educational content

### Start Watching

Click any channel below to begin streaming. All channels are available instantly with no sign-up required.
      `.trim(),
        },
        {
            condition: (c: Country) => c.channelCount < 20,
            content: (c: Country) => `
## ${c.name} TV Channels ${c.flag}

Stream ${c.channelCount} live television ${c.channelCount === 1 ? 'channel' : 'channels'} from ${c.name}. Watch news, entertainment, and more from ${c.name} broadcasters online for free.

### Available Channels

Browse our selection of ${c.name} channels below and click to start watching instantly.
      `.trim(),
        },
    ];

    const template = templates.find(t => t.condition(country)) || templates[templates.length - 1];
    return template.content(country);
}

/**
 * Generate SEO content for the main IPTV landing page
 */
export function generateMainPageSEO(totalCountries: number, totalChannels: number): CountrySEO {
    return {
        title: `Watch Live TV from ${totalCountries}+ Countries - Free IPTV Streaming | FastTools`,
        description: `Stream ${totalChannels}+ live TV channels from ${totalCountries}+ countries worldwide. Watch free IPTV including news, sports, entertainment, and more. No registration required.`,
        content: `
## Watch Live TV from Around the World

Access ${totalChannels}+ live television channels from ${totalCountries}+ countries, completely free. FastTools brings you a comprehensive collection of international IPTV streams, allowing you to watch news, sports, entertainment, movies, and more from broadcasters worldwide.

### Global Television Access

Browse channels by country to discover content from every corner of the globe. Whether you're looking for breaking news from major networks, live sports events, popular entertainment shows, or cultural programming, our platform provides instant access to diverse international content.

### Features

- **${totalCountries}+ Countries**: Channels from every continent
- **${totalChannels}+ Channels**: Extensive selection of live streams
- **Free Streaming**: No subscription or registration required
- **Instant Access**: Click and watch immediately
- **All Categories**: News, Sports, Entertainment, Movies, Music, and more

### How It Works

1. **Browse**: Select a country from the grid below
2. **Choose**: Pick a channel from the available list
3. **Watch**: Stream instantly in your browser

### Popular Categories

Our collection includes channels across all major categories:
- **News**: Stay informed with global news networks
- **Sports**: Watch live sporting events worldwide
- **Entertainment**: Enjoy international shows and series
- **Movies**: Stream films from different countries
- **Music**: Tune into music channels globally
- **Documentary**: Educational and cultural content

Start exploring live television from around the world today!
    `.trim(),
        keywords: [
            'live TV',
            'IPTV',
            'free streaming',
            'watch TV online',
            'international channels',
            'live television',
            'global TV',
            'free TV channels',
        ],
    };
}
