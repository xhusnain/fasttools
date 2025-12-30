'use client';

import { useEffect, useRef, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

// ... existing imports
import { AlertCircle, Globe, RefreshCw } from 'lucide-react';

interface LiveTVPlayerProps {
    streamUrl: string;
    countryCode?: string;
}

export function LiveTVPlayer({ streamUrl, countryCode = 'International' }: LiveTVPlayerProps) {
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<any>(null);
    const retryCountRef = useRef(0);
    const [playerError, setPlayerError] = useState<{ type: 'geo' | 'network' | 'format'; message: string } | null>(null);

    // Helper to get full country name (basic mapping for major ones common in iptv)
    const getCountryDisplay = (code: string) => {
        const names: Record<string, string> = {
            us: 'United States', uk: 'United Kingdom', in: 'India', ca: 'Canada', au: 'Australia',
            de: 'Germany', fr: 'France', it: 'Italy', es: 'Spain', br: 'Brazil', ru: 'Russia', cn: 'China'
        };
        return names[code.toLowerCase()] || code.toUpperCase();
    };

    const handleRetry = () => {
        setPlayerError(null);
        retryCountRef.current = 0;
        if (playerRef.current) {
            playerRef.current.src({ src: streamUrl, type: 'application/x-mpegURL' });
            playerRef.current.load();
            playerRef.current.play().catch(() => { });
        }
    };

    useEffect(() => {
        if (!videoContainerRef.current) return;

        setPlayerError(null);
        retryCountRef.current = 0;
        videoContainerRef.current.innerHTML = '';

        const videoElement = document.createElement('video');
        videoElement.className = 'video-js vjs-big-play-centered vjs-16-9';
        videoElement.playsInline = true;

        videoContainerRef.current.appendChild(videoElement);

        const player = videojs(videoElement, {
            controls: true,
            autoplay: true,
            preload: 'auto',
            fluid: true,
            responsive: true,
            liveui: true,
            html5: {
                vhs: {
                    overrideNative: !videojs.browser.IS_SAFARI,
                    enableLowInitialPlaylist: true,
                    smoothQualityChange: true,
                    withCredentials: false
                },
                nativeAudioTracks: false,
                nativeVideoTracks: false,
            },
            sources: [{
                src: streamUrl,
                type: 'application/x-mpegURL'
            }]
        });

        playerRef.current = player;

        player.on('error', () => {
            const error = player.error();
            console.error('VideoJS Error:', error);

            // Auto-retry logic
            if (error && (error.code === 4 || error.code === 2) && retryCountRef.current < 2) {
                retryCountRef.current += 1;
                console.log(`Retrying playback (${retryCountRef.current}/2)...`);
                setTimeout(() => {
                    if (!player.isDisposed()) {
                        player.src({ src: streamUrl, type: 'application/x-mpegURL' });
                        player.load();
                        const playPromise = player.play();
                        if (playPromise) playPromise.catch(() => { });
                    }
                }, 1500);
                return;
            }

            // If we ran out of retries, determine the "Hint" to show
            if (error && (error.code === 4 || error.code === 2)) {
                // Heuristic: If it's a network/src error on a specific country channel, assume geo-block or dead stream
                setPlayerError({
                    type: 'geo',
                    message: 'Stream unavailable. This channel might be geo-blocked.'
                });
            } else {
                setPlayerError({
                    type: 'format',
                    message: 'This format is not supported by your browser.'
                });
            }
        });

        const handleAutoplay = async () => {
            try {
                await player.play();
            } catch (error) {
                if (!player.isDisposed()) {
                    player.muted(true);
                    try {
                        await player.play();
                    } catch (mutedError) {
                        if (!player.isDisposed()) {
                            player.poster('');
                        }
                    }
                }
            }
        };

        void handleAutoplay();

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [streamUrl]);

    return (
        <div className="w-full relative group bg-black rounded-xl overflow-hidden shadow-2xl">
            <div ref={videoContainerRef} className="w-full" />

            {/* Error Overlay */}
            {playerError && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm p-6 text-center animate-in fade-in duration-300">
                    <div className="max-w-md space-y-4">
                        {playerError.type === 'geo' ? (
                            <>
                                <div className="mx-auto w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-2">
                                    <Globe className="h-6 w-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Stream Unavailable</h3>
                                <p className="text-gray-300 text-sm">
                                    This channel is failing to load. It is likely <b>Geo-Blocked</b> outside of its origin country.
                                </p>
                                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-left">
                                    <p className="text-xs text-red-200 font-semibold mb-1 uppercase tracking-wider flex items-center gap-2">
                                        <AlertCircle className="w-3 h-3" />
                                        Suggestion
                                    </p>
                                    <p className="text-sm text-gray-200">
                                        Try connecting your VPN to <b>{getCountryDisplay(countryCode)}</b> and reload.
                                    </p>
                                </div>
                            </>
                        ) : (
                            <>
                                <AlertCircle className="h-10 w-10 text-red-500 mx-auto" />
                                <p className="text-white font-medium">{playerError.message}</p>
                            </>
                        )}

                        <button
                            onClick={handleRetry}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-medium text-sm hover:bg-gray-200 transition-colors mt-4"
                        >
                            <RefreshCw className="h-4 w-4" />
                            Retry Stream
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
