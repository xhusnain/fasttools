'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import 'video.js/dist/video-js.css';

interface LiveTVPlayerProps {
    streamUrl: string;
    countryCode?: string;
}

// Problematic servers that need transcoding
const PROBLEMATIC_SERVERS = [
    '66.102.120.18',
];

function needsTranscoding(url: string): boolean {
    return PROBLEMATIC_SERVERS.some(server => url.includes(server));
}

export function LiveTVPlayer({ streamUrl }: LiveTVPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const playerRef = useRef<any>(null);
    const mpegtsPlayerRef = useRef<any>(null);
    const mountedRef = useRef(true);
    const [error, setError] = useState<string | null>(null);
    const [isTranscoding, setIsTranscoding] = useState(false);
    const [key, setKey] = useState(0);

    const destroyPlayer = useCallback(() => {
        // Destroy Video.js player
        if (playerRef.current) {
            try {
                playerRef.current.dispose();
            } catch (e) {
                // ignore
            }
            playerRef.current = null;
        }
        // Destroy mpegts.js player
        if (mpegtsPlayerRef.current) {
            try {
                mpegtsPlayerRef.current.pause();
                mpegtsPlayerRef.current.unload();
                mpegtsPlayerRef.current.detachMediaElement();
                mpegtsPlayerRef.current.destroy();
            } catch (e) {
                // ignore
            }
            mpegtsPlayerRef.current = null;
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

        const useTranscode = needsTranscoding(streamUrl);
        setIsTranscoding(useTranscode);

        const initTimeout = setTimeout(async () => {
            if (!mountedRef.current) return;

            try {
                if (useTranscode) {
                    // Use mpegts.js for transcoded MPEG-TS stream
                    const transcodeUrl = `/api/transcode?url=${encodeURIComponent(streamUrl)}`;
                    console.log('[Player] Using transcoding for:', streamUrl);
                    console.log('[Player] Transcode URL:', transcodeUrl);

                    const mpegts = await import('mpegts.js');

                    if (!mpegts.default.isSupported()) {
                        setError('Browser not supported for transcoded streams');
                        return;
                    }

                    const player = mpegts.default.createPlayer({
                        type: 'mpegts',
                        isLive: true,
                        url: transcodeUrl,
                    }, {
                        enableWorker: false,
                        enableStashBuffer: true,
                        stashInitialSize: 384 * 1024,
                        autoCleanupSourceBuffer: true,
                        autoCleanupMaxBackwardDuration: 30,
                        autoCleanupMinBackwardDuration: 15,
                        liveBufferLatencyChasing: true,
                        liveBufferLatencyMaxLatency: 15.0,
                        liveBufferLatencyMinRemain: 5.0,
                        fixAudioTimestampGap: true,
                    });

                    mpegtsPlayerRef.current = player;
                    player.attachMediaElement(video);
                    player.load();

                    player.on(mpegts.default.Events.MEDIA_INFO, (info: any) => {
                        console.log('[mpegts] Media info:', info);
                    });

                    player.on(mpegts.default.Events.ERROR, (type: string, detail: string) => {
                        console.error('[mpegts] Error:', type, detail);
                    });

                    video.addEventListener('canplay', () => {
                        console.log('[Video] Can play');
                        video.play().catch(e => console.log('[Video] Autoplay blocked:', e));
                    });

                    video.addEventListener('playing', () => {
                        console.log('[Video] Playing!');
                    });

                } else {
                    // Use Video.js for normal streams
                    const proxyUrl = `/api/proxy?url=${encodeURIComponent(streamUrl)}`;
                    console.log('[Video.js] Creating player for:', streamUrl);
                    console.log('[Video.js] Proxy URL:', proxyUrl);

                    const videojs = (await import('video.js')).default;

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
                            liveTolerance: 5,
                        },
                        html5: {
                            vhs: {
                                overrideNative: true,
                                enableLowInitialPlaylist: true,
                                smoothQualityChange: false,
                                allowSeeksWithinUnsafeLiveWindow: true,
                                handlePartialData: true,
                                bandwidth: 10000000,
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

                    player.on('error', () => {
                        const err = player.error();
                        console.error('[Video.js] Error:', err?.code, err?.message);
                        if (mountedRef.current && err && err.code === 4) {
                            setError('Stream format not supported');
                        }
                    });

                    player.on('stalled', () => {
                        console.log('[Video.js] Stalled, attempting recovery...');
                        setTimeout(() => {
                            if (player && !player.isDisposed()) {
                                try {
                                    const liveTracker = (player as any).liveTracker;
                                    if (liveTracker && liveTracker.liveCurrentTime) {
                                        player.currentTime(liveTracker.liveCurrentTime());
                                        player.play();
                                    }
                                } catch (e) {
                                    // ignore
                                }
                            }
                        }, 3000);
                    });

                    let waitingCount = 0;
                    player.on('waiting', () => {
                        waitingCount++;
                        console.log('[Video.js] Waiting (count:', waitingCount + ')');
                        if (waitingCount >= 5) {
                            waitingCount = 0;
                            try { player.load(); } catch (e) { /* ignore */ }
                        }
                    });

                    player.on('playing', () => {
                        console.log('[Video.js] Playing');
                        waitingCount = 0;
                    });
                }

                video.muted = true;

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
            {isTranscoding && (
                <div className="absolute top-2 right-2 z-40 bg-yellow-500/80 text-black px-2 py-1 rounded text-xs font-medium">
                    🔄 Live Transcoding
                </div>
            )}

            <div data-vjs-player>
                <video
                    ref={videoRef}
                    key={key}
                    className="video-js vjs-big-play-centered vjs-theme-sea w-full h-full"
                    playsInline
                    controls
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
