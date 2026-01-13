'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface LiveTVPlayerProps {
    streamUrl: string;
    channelName?: string;
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
                if (playerRef.current.destroy && typeof playerRef.current.destroy === 'function') {
                    playerRef.current.destroy(); // hls.js
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
                const Hls = (await import('hls.js')).default;

                if (Hls.isSupported()) {
                    const hls = new Hls({
                        enableWorker: true,
                        lowLatencyMode: true,
                        backBufferLength: 90,
                    });

                    playerRef.current = hls;
                    hls.loadSource(streamUrl);
                    hls.attachMedia(video);

                    hls.on(Hls.Events.MANIFEST_PARSED, () => {
                        video.play().catch(() => { });
                    });

                    hls.on(Hls.Events.ERROR, (_event, data) => {
                        if (data.fatal) {
                            switch (data.type) {
                                case Hls.ErrorTypes.NETWORK_ERROR:
                                    setError('Network error');
                                    hls.startLoad();
                                    break;
                                case Hls.ErrorTypes.MEDIA_ERROR:
                                    hls.recoverMediaError();
                                    break;
                                default:
                                    destroyPlayer();
                                    setError('Playback error');
                                    break;
                            }
                        }
                    });
                } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                    video.src = streamUrl;
                    video.addEventListener('error', () => setError('Playback error'));
                    video.addEventListener('canplay', () => {
                        video.play().catch(() => { });
                    });
                } else {
                    setError('Not supported');
                }

                video.muted = true;

            } catch (e) {
                if (mountedRef.current) {
                    setError('Failed to initialize player.');
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
