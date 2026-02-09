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
    const [needsInteraction, setNeedsInteraction] = useState(false);

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

        const getProxiedUrl = (url: string) => {
            if (url.startsWith('http') && !url.includes(window.location.host)) {
                return `/api/iptv/proxy?url=${encodeURIComponent(url)}`;
            }
            return url;
        };

        // User requested client-side first approach.
        // We attempt direct playback. Proxy is only a fallback.
        const activeUrl = streamUrl;

        // Track stall count to avoid infinite loops
        let stallCount = 0;

        const initTimeout = setTimeout(async () => {
            if (!mountedRef.current) return;

            try {
                const Hls = (await import('hls.js')).default;

                if (Hls.isSupported()) {
                    const hls = new Hls({
                        enableWorker: true,
                        lowLatencyMode: false, // Disable low latency for better stability
                        backBufferLength: 90,
                        maxBufferLength: 60, // doubled buffer
                        liveSyncDurationCount: 5, // Increased from 3
                        manifestLoadingMaxRetry: 4,
                        levelLoadingMaxRetry: 4,
                        fragLoadingMaxRetry: 6,
                        fragLoadingTimeOut: 20000,
                        manifestLoadingTimeOut: 20000,
                        // Force video rendering even if audio-only initially detected
                        forceKeyFrameOnDiscontinuity: true,
                        // Prefer managed media source for better compatibility
                        preferManagedMediaSource: true,
                        // Allow cross-origin for the proxy if needed
                        xhrSetup: (xhr, url) => {
                            xhr.withCredentials = false;
                        }
                    });

                    playerRef.current = hls;

                    console.log(`Starting direct playback: ${activeUrl}`);
                    hls.loadSource(activeUrl);
                    hls.attachMedia(video);

                    hls.on(Hls.Events.MANIFEST_PARSED, () => {
                        console.log('Manifest parsed, attempting play');

                        // Check for video tracks and force video rendering
                        if (hls.levels && hls.levels.length > 0) {
                            const hasVideo = hls.levels.some(level => level.videoCodec);
                            console.log(`Video tracks available: ${hasVideo}, Levels: ${hls.levels.length}`);

                            // If video tracks exist, ensure we're using them
                            if (hasVideo && hls.currentLevel === -1) {
                                // Auto-select best quality with video
                                hls.currentLevel = -1; // Auto mode
                            }
                        }

                        video.play().catch((e) => {
                            console.error('Auto-play blocked by browser:', e.message);
                            setNeedsInteraction(true);
                        });
                    });

                    // Ensure video element is ready for rendering
                    hls.on(Hls.Events.MEDIA_ATTACHED, () => {
                        console.log('Media attached to video element');
                        // Force video element to be visible and ready
                        if (video) {
                            video.style.display = 'block';
                            // Ensure video has dimensions
                            if (video.videoWidth === 0 || video.videoHeight === 0) {
                                console.log('Video dimensions not set, waiting for metadata...');
                            }
                        }
                    });


                    hls.on(Hls.Events.ERROR, (_event, data) => {
                        // Only log fatal errors as errors, non-fatal as warnings
                        if (data.fatal) {
                            console.error('HLS Fatal Error:', data.type, data.details);
                        } else if (data.details !== 'bufferStalledError') {
                            // Don't spam console with buffer stalls
                            console.warn('HLS Warning:', data.type, data.details);
                        }
                        if (data.fatal) {
                            switch (data.type) {
                                case Hls.ErrorTypes.NETWORK_ERROR:
                                    // If network error happens on original URL, try proxy as fallback
                                    if (hls.url === streamUrl) {
                                        console.log('Direct load failed (CORS/Network), switching to proxy...');
                                        hls.loadSource(getProxiedUrl(streamUrl));
                                        return;
                                    }
                                    setError(`Connection failed. The stream might be offline or blocked.`);
                                    hls.startLoad();
                                    break;
                                case Hls.ErrorTypes.MEDIA_ERROR:
                                    console.log('Media error, attempting recovery...');
                                    hls.recoverMediaError();
                                    break;
                                default:
                                    destroyPlayer();
                                    setError('Source unavailable or unsupported format.');
                                    break;
                            }
                        } else {
                            // Non-fatal error handling
                            if (data.details === 'bufferStalledError') {
                                // Only log first stall to avoid spam
                                if (stallCount === 0) {
                                    console.warn('Buffer stalled, attempting to recover...');
                                }
                                stallCount++;

                                // Reduce threshold to 2 stalls
                                if (stallCount >= 2 && hls.url === streamUrl) {
                                    console.log('Repeated stalls on direct connection, switching to proxy...');
                                    stallCount = 0; // Reset
                                    hls.loadSource(getProxiedUrl(streamUrl));
                                    return;
                                }
                                // Try to nudge it
                                if (stallCount === 1) {
                                    hls.recoverMediaError();
                                }
                            }
                        }
                    });
                } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                    // Safari native support
                    video.src = activeUrl;
                    const handleError = () => {
                        if (video.src === streamUrl) {
                            console.log('Native error, trying proxy fallback...');
                            video.src = getProxiedUrl(streamUrl);
                            video.load();
                        } else {
                            setError('Native playback failed.');
                        }
                    };
                    video.addEventListener('error', handleError);
                    video.addEventListener('canplay', () => {
                        video.play().catch((e) => {
                            console.error('Auto-play blocked by browser:', e.message);
                            setNeedsInteraction(true);
                        });
                    });
                } else {
                    setError('Browser not supported for live IPTV.');
                }

            } catch (e) {
                console.error('Player init error:', e);
                if (mountedRef.current) {
                    setError('Failed to initialize player components.');
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
            />


            {needsInteraction && !error && (
                <div
                    onClick={() => {
                        if (videoRef.current) {
                            videoRef.current.play().then(() => {
                                setNeedsInteraction(false);
                            }).catch((e) => {
                                console.error('Manual play failed:', e);
                                setError('Unable to play stream. Please check your browser settings.');
                            });
                        }
                    }}
                    className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm cursor-pointer hover:bg-black/70 transition-all"
                >
                    <div className="bg-white/10 backdrop-blur-md rounded-full p-6 mb-4 border border-white/20 hover:scale-110 transition-transform">
                        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                    <p className="text-white text-lg font-medium">Click to Play</p>
                    <p className="text-gray-300 text-sm mt-2">Browser blocked autoplay</p>
                </div>
            )}

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
