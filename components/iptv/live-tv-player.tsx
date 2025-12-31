'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { AlertCircle, RefreshCw, Loader2 } from 'lucide-react';

interface LiveTVPlayerProps {
    streamUrl: string;
    countryCode?: string;
}

export function LiveTVPlayer({ streamUrl }: LiveTVPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const playerRef = useRef<any>(null);
    const mountedRef = useRef(true);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [key, setKey] = useState(0);

    const destroyPlayer = useCallback(() => {
        if (playerRef.current) {
            try {
                playerRef.current.pause();
                playerRef.current.unload();
                playerRef.current.detachMediaElement();
                playerRef.current.destroy();
            } catch (e) {
                // ignore
            }
            playerRef.current = null;
        }
    }, []);

    const handleRetry = useCallback(() => {
        setError(null);
        setIsLoading(true);
        setKey(k => k + 1);
    }, []);

    useEffect(() => {
        mountedRef.current = true;
        const video = videoRef.current;
        if (!video) return;

        setError(null);
        setIsLoading(true);
        destroyPlayer();

        const initTimeout = setTimeout(async () => {
            if (!mountedRef.current) return;

            try {
                // All streams use FFmpeg transcoding for maximum compatibility
                const transcodeUrl = `/api/transcode?url=${encodeURIComponent(streamUrl)}`;
                console.log('[Player] Using FFmpeg transcoding for:', streamUrl);

                const mpegts = await import('mpegts.js');

                if (!mpegts.default.isSupported()) {
                    setError('Browser not supported');
                    setIsLoading(false);
                    return;
                }

                const player = mpegts.default.createPlayer({
                    type: 'mpegts',
                    isLive: true,
                    url: transcodeUrl,
                }, {
                    enableWorker: false,
                    enableStashBuffer: true,
                    stashInitialSize: 512 * 1024,
                    autoCleanupSourceBuffer: true,
                    autoCleanupMaxBackwardDuration: 60,
                    autoCleanupMinBackwardDuration: 30,
                    liveBufferLatencyChasing: true,
                    liveBufferLatencyMaxLatency: 30.0,
                    liveBufferLatencyMinRemain: 10.0,
                    fixAudioTimestampGap: true,
                });

                playerRef.current = player;
                player.attachMediaElement(video);
                player.load();

                let hasStarted = false;

                player.on(mpegts.default.Events.MEDIA_INFO, () => {
                    console.log('[Player] Media info received');
                    setIsLoading(false);
                });

                player.on(mpegts.default.Events.ERROR, (type: string, detail: string) => {
                    console.error('[Player] Error:', type, detail);
                    if (!hasStarted) {
                        setError('Failed to load stream. Try refreshing.');
                        setIsLoading(false);
                    }
                });

                video.addEventListener('canplay', () => {
                    console.log('[Player] Can play');
                    hasStarted = true;
                    setIsLoading(false);
                    video.play().catch(e => console.log('[Player] Autoplay blocked:', e));
                });

                video.addEventListener('playing', () => {
                    console.log('[Player] Playing');
                });

                video.muted = true;

            } catch (err) {
                console.error('[Player] Failed to initialize:', err);
                if (mountedRef.current) {
                    setError('Failed to load player');
                    setIsLoading(false);
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
            <div className="absolute top-2 right-2 z-40 bg-red-600/90 text-white px-2 py-1 rounded text-xs font-medium">
                🔴 LIVE
            </div>

            {isLoading && (
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/60">
                    <Loader2 className="h-10 w-10 text-white animate-spin mb-3" />
                    <p className="text-white/80 text-sm">Loading stream...</p>
                </div>
            )}

            <video
                ref={videoRef}
                key={key}
                className="w-full h-full"
                playsInline
                controls
                muted
            />

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
