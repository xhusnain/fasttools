'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import 'video.js/dist/video-js.css';

interface LiveTVPlayerProps {
    streamUrl: string;
    countryCode?: string;
}

export function LiveTVPlayer({ streamUrl }: LiveTVPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const playerRef = useRef<any>(null);
    const mountedRef = useRef(true);
    const [error, setError] = useState<string | null>(null);
    const [key, setKey] = useState(0);

    const destroyPlayer = useCallback(() => {
        if (playerRef.current) {
            try {
                playerRef.current.dispose();
            } catch (e) {
                // ignore
            }
            playerRef.current = null;
        }
    }, []);

    const handleRetry = useCallback(() => {
        setError(null);
        setKey(k => k + 1);
    }, []);

    useEffect(() => {
        mountedRef.current = true;
        const video = videoRef.current;
        if (!video) return;

        setError(null);
        destroyPlayer();

        const proxyUrl = `/api/proxy?url=${encodeURIComponent(streamUrl)}`;

        const initTimeout = setTimeout(async () => {
            if (!mountedRef.current) return;

            try {
                const videojs = (await import('video.js')).default;

                console.log('[Video.js] Creating player for:', streamUrl);
                console.log('[Video.js] Proxy URL:', proxyUrl);

                const player = videojs(video, {
                    controls: true,
                    autoplay: true,
                    muted: true,
                    preload: 'auto',
                    fluid: true,
                    responsive: true,
                    liveui: true,
                    liveTracker: {
                        trackingThreshold: 0,
                        liveTolerance: 5, // Lower tolerance - stay closer to live
                    },
                    html5: {
                        vhs: {
                            overrideNative: true,
                            enableLowInitialPlaylist: true,
                            smoothQualityChange: false, // Disable for faster switching
                            allowSeeksWithinUnsafeLiveWindow: true,
                            handlePartialData: true,
                            // Aggressive live settings
                            useBandwidthFromLocalStorage: false,
                            limitRenditionByPlayerDimensions: false,
                            useDevicePixelRatio: false,
                            // Shorter timeouts for expired segments
                            bandwidth: 10000000, // Assume high bandwidth
                            // Experimental settings for problematic streams
                            experimentalBufferBasedABR: false,
                            experimentalLLHLS: false,
                        },
                        nativeVideoTracks: false,
                        nativeAudioTracks: false,
                        nativeTextTracks: false,
                    },
                    sources: [{
                        src: proxyUrl,
                        type: 'application/x-mpegURL',
                    }],
                });

                playerRef.current = player;

                player.on('loadedmetadata', () => {
                    console.log('[Video.js] Loaded metadata');
                });

                // Event handlers defined below with recovery logic

                player.on('error', () => {
                    const err = player.error();
                    console.error('[Video.js] Error:', err?.code, err?.message);
                    if (mountedRef.current && err) {
                        // Don't show error for minor issues
                        if (err.code === 4) { // MEDIA_ERR_SRC_NOT_SUPPORTED
                            setError('Stream format not supported');
                        }
                    }
                });

                player.on('stalled', () => {
                    console.log('[Video.js] Stalled, attempting recovery...');
                    // Try to recover by seeking to live edge
                    setTimeout(() => {
                        if (player && !player.isDisposed()) {
                            try {
                                // Cast to any to access liveTracker
                                const liveTracker = (player as any).liveTracker;
                                if (liveTracker && liveTracker.liveCurrentTime) {
                                    console.log('[Video.js] Seeking to live edge...');
                                    player.currentTime(liveTracker.liveCurrentTime());
                                    player.play();
                                }
                            } catch (e) {
                                console.log('[Video.js] Recovery failed:', e);
                            }
                        }
                    }, 3000);
                });

                // Waiting/playing counters for recovery
                let waitingCount = 0;
                player.on('waiting', () => {
                    waitingCount++;
                    console.log('[Video.js] Waiting (count:', waitingCount + ')');
                    if (waitingCount >= 5) {
                        console.log('[Video.js] Too many waiting events, reloading...');
                        waitingCount = 0;
                        try {
                            player.load();
                        } catch (e) {
                            console.log('[Video.js] Reload failed:', e);
                        }
                    }
                });

                player.on('playing', () => {
                    console.log('[Video.js] Playing');
                    waitingCount = 0;
                });

            } catch (err) {
                console.error('[Player] Failed to initialize:', err);
                if (mountedRef.current) {
                    setError('Failed to load player');
                }
            }
        }, 100);

        return () => {
            mountedRef.current = false;
            clearTimeout(initTimeout);
            destroyPlayer();
        };
    }, [streamUrl, key, destroyPlayer]);

    return (
        <div className="w-full relative group bg-black rounded-xl overflow-hidden shadow-2xl facet-filter-height">
            <div data-vjs-player>
                <video
                    ref={videoRef}
                    key={key}
                    className="video-js vjs-big-play-centered vjs-theme-sea w-full h-full"
                    playsInline
                />
            </div>

            {error && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/80 p-6 text-center">
                    <AlertCircle className="h-10 w-10 text-red-500 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Stream Error</h3>
                    <p className="text-gray-300 text-sm mb-4">{error}</p>
                    <button
                        onClick={handleRetry}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-medium text-sm hover:bg-gray-200"
                    >
                        <RefreshCw className="h-4 w-4" />
                        Retry
                    </button>
                </div>
            )}
        </div>
    );
}
