'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface LiveTVPlayerProps {
    streamUrl: string;
    channelName?: string;
    countryCode?: string;
}

export function LiveTVPlayer({ streamUrl, channelName }: LiveTVPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const playerRef = useRef<any>(null);
    const mountedRef = useRef(true);
    const [error, setError] = useState<string | null>(null);
    const [key, setKey] = useState(0);

    const destroyPlayer = useCallback(() => {
        if (playerRef.current) {
            try {
                if (playerRef.current.destroy) {
                    playerRef.current.destroy();
                }
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

        const initTimeout = setTimeout(async () => {
            if (!mountedRef.current) return;

            try {
                // Use server-side proxy to bypass CORS restrictions
                // The proxy fetches the stream and returns it to the browser
                const proxyUrl = `/api/proxy?url=${encodeURIComponent(streamUrl)}`;
                console.log('[Player] Loading stream via proxy');

                const Hls = (await import('hls.js')).default;

                if (Hls.isSupported()) {
                    const hls = new Hls({
                        enableWorker: true,
                        lowLatencyMode: true,
                        backBufferLength: 90,
                        fragLoadingTimeOut: 20000,
                        manifestLoadingTimeOut: 20000,
                        levelLoadingTimeOut: 20000,
                    });

                    playerRef.current = hls;
                    hls.loadSource(proxyUrl);
                    hls.attachMedia(video);

                    hls.on(Hls.Events.MANIFEST_PARSED, () => {
                        video.play().catch(() => { });
                    });

                    hls.on(Hls.Events.ERROR, (event, data) => {
                        console.log('[Player] HLS error:', data.type, data.details);

                        if (data.fatal) {
                            if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
                                hls.recoverMediaError();
                            } else {
                                setError('Stream unavailable. The channel may be offline or geo-restricted.');
                            }
                        }
                    });
                } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                    // Safari Native HLS
                    video.src = proxyUrl;
                    video.addEventListener('error', () => {
                        setError('Stream unavailable.');
                    });
                    video.addEventListener('canplay', () => {
                        video.play().catch(() => { });
                    });
                } else {
                    setError('Your browser does not support HLS playback.');
                }

                video.muted = true;

            } catch (e) {
                console.error('[Player] Error:', e);
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
            <div className="absolute top-2 right-2 z-40 flex gap-2">
                <div className="bg-red-600/90 text-white px-2 py-1 rounded text-xs font-medium">
                    🔴 LIVE
                </div>
            </div>

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
