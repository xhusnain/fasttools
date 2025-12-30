import { Channel, Country } from "@/types/iptv";
import {
    GAccordion,
    GAccordionContent,
    GAccordionItem,
    GAccordionTrigger,
} from "@/ui/gaccordion";
import { Globe, Tv, Shield, Zap } from "lucide-react";

import { getAllChannels } from "@/services/iptv.service";

interface LiveTVSEOProps {
    countries: Country[];
}

export async function LiveTVSEO({ countries }: LiveTVSEOProps) {
    const channels = await getAllChannels();

    // Group channels by country code for efficient rendering
    const channelsByCountry = channels.reduce((acc, channel) => {
        const code = channel.country.toLowerCase();
        if (!acc[code]) acc[code] = [];
        acc[code].push(channel);
        return acc;
    }, {} as Record<string, Channel[]>);

    return (
        <div className="space-y-16">
            {/* Introduction Section */}
            <div className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                    Best Free Live TV Streaming Service - Watch Global Channels Online
                </h2>
                <div className="text-muted-foreground space-y-4 text-lg">
                    <p>
                        Experience the ultimate freedom of cord-cutting with FastTools Live TV.
                        Unlike paid subscription services that lock you into long-term contracts,
                        we provide a **completely free, registration-free platform** to access over
                        <strong> {channels.length}+ live television channels</strong> from
                        <strong> {countries.length}+ countries</strong>.
                    </p>
                    <p>
                        Whether you are looking for breaking news, live sports, entertainment, or
                        educational content, our platform aggregates public streams into one
                        easy-to-use dashboard. Enjoy a seamless viewing experience with our
                        smart player technology that optimizes streams for your connection.
                    </p>
                </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 bg-muted/30 rounded-xl border border-border/50 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                        <Zap className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">100% Free</h3>
                    <p className="text-sm text-muted-foreground">
                        No credit cards, no subscriptions, and no hidden fees. Just pure free streaming.
                    </p>
                </div>

                <div className="p-6 bg-muted/30 rounded-xl border border-border/50 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500">
                        <Globe className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">Global Access</h3>
                    <p className="text-sm text-muted-foreground">
                        Watch TV from {countries.length}+ countries including US, UK, India, and more.
                    </p>
                </div>

                <div className="p-6 bg-muted/30 rounded-xl border border-border/50 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500">
                        <Tv className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">No Signup</h3>
                    <p className="text-sm text-muted-foreground">
                        No registration required. Just click on a channel and start watching instantly.
                    </p>
                </div>

                <div className="p-6 bg-muted/30 rounded-xl border border-border/50 space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-500">
                        <Shield className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">Smart Support</h3>
                    <p className="text-sm text-muted-foreground">
                        Smart detection for geo-blocked content with built-in VPN guidance.
                    </p>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
                <GAccordion type="single" collapsible className="w-full">
                    <GAccordionItem value="item-1">
                        <GAccordionTrigger>Is FastTools Live TV really free?</GAccordionTrigger>
                        <GAccordionContent>
                            Yes. Our service aggregates publicly available live streams from around the web.
                            We do not charge any subscription fees and you don't need to create an account.
                        </GAccordionContent>
                    </GAccordionItem>
                    <GAccordionItem value="item-2">
                        <GAccordionTrigger>Do I need a VPN to watch?</GAccordionTrigger>
                        <GAccordionContent>
                            Some channels may be geo-restricted by the broadcaster. If a stream is blocked
                            in your region, our player will automatically detect it and suggest the best
                            country to connect your VPN to for access.
                        </GAccordionContent>
                    </GAccordionItem>
                    <GAccordionItem value="item-3">
                        <GAccordionTrigger>Can I watch on my mobile phone?</GAccordionTrigger>
                        <GAccordionContent>
                            Absolutely. Our platform is fully responsive and optimized for mobile browsers
                            on iOS and Android. No app download is required.
                        </GAccordionContent>
                    </GAccordionItem>
                    <GAccordionItem value="item-4">
                        <GAccordionTrigger>How many channels are available?</GAccordionTrigger>
                        <GAccordionContent>
                            We currently list over {channels.length} channels from {countries.length} regions,
                            categorized by genre (News, Sports, Movies, etc.) and country.
                        </GAccordionContent>
                    </GAccordionItem>
                </GAccordion>
            </div>

            {/* Complete Channel Directory */}
            <div className="space-y-8">
                <div className="border-b border-border/50 pb-4">
                    <h2 className="text-2xl font-bold text-foreground">
                        Global Channel Directory
                    </h2>
                    <p className="text-muted-foreground mt-2">
                        Browse our complete catalog of live streaming channels by country.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {countries.map((country) => {
                        const countryChannels = channelsByCountry[country.code.toLowerCase()] || [];
                        if (countryChannels.length === 0) return null;

                        return (
                            <div key={country.code} className="space-y-3 break-words">
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl">{country.flag}</span>
                                    <h3 className="font-bold text-lg text-foreground">
                                        {country.name}
                                        <span className="ml-2 text-xs font-normal text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                                            {countryChannels.length}
                                        </span>
                                    </h3>
                                </div>
                                <div className="text-xs text-muted-foreground leading-relaxed">
                                    {countryChannels.map((c) => c.name).join(", ")}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
