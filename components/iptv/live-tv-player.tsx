'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { env } from '@/config/env';
import { requiresTranscoding } from '@/data/transcoded-channels';

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

    // Determine initial mode based on known problematic channels list
    const initialMode = requiresTranscoding(streamUrl, channelName) ? 'transcode' : 'direct';
    const [mode, setMode] = useState<'direct' | 'transcode'>(initialMode);
    const [hasFallenBack, setHasFallenBack] = useState(false);

    const destroyPlayer = useCallback(() => {
        if (playerRef.current) {
            try {
                if (playerRef.current.destroy) {
                    playerRef.current.destroy(); // mpegts
                } else if (playerRef.current.destroy && typeof playerRef.current.destroy === 'function') {
                    playerRef.current.destroy(); // hls.js
                } else if (playerRef.current.dispose) {
                    playerRef.current.dispose(); // video.js if used
                }
            } catch (e) {
                // ignore
            }
            playerRef.current = null;
        }
    }, []);

    const handleRetry = useCallback(() => {
        setError(null);
        // On retry, re-evaluate initial mode logic to see if we should try direct again
        const retryMode = requiresTranscoding(streamUrl, channelName) ? 'transcode' : 'direct';
        setMode(retryMode);
        setHasFallenBack(false);
        setKey(k => k + 1);
    }, [streamUrl, channelName]);

    const switchToTranscode = useCallback(() => {
        if (hasFallenBack) return;

        setHasFallenBack(true);
        setMode('transcode');
        destroyPlayer();
        setKey(k => k + 1);
    }, [hasFallenBack, destroyPlayer]);

    useEffect(() => {
        mountedRef.current = true;
        const video = videoRef.current;
        if (!video) return;

        setError(null);
        destroyPlayer();

        const initTimeout = setTimeout(async () => {
            if (!mountedRef.current) return;

            try {
                if (mode === 'transcode') {
                    // --- Transcode Mode (FFmpeg) ---
                    const transcodeUrl = `${env.apiUrl}/transcode?url=${encodeURIComponent(streamUrl)}`;

                    const mpegts = await import('mpegts.js');

                    if (!mpegts.default.isSupported()) {
                        setError('Browser not supported for transcoding');
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

                    player.on(mpegts.default.Events.ERROR, (type: string) => {
                        if (!hasStarted && type === 'MediaError') {
                            setError('Stream failed even with transcoding.');
                        }
                    });

                    video.addEventListener('canplay', () => {
                        hasStarted = true;
                        video.play().catch(() => { });
                    });

                } else {
                    // --- Direct Mode (HLS) ---
                    const proxyUrl = `/api/proxy?url=${encodeURIComponent(streamUrl)}`;
                    const Hls = (await import('hls.js')).default;

                    if (Hls.isSupported()) {
                        const hls = new Hls({
                            enableWorker: true,
                            lowLatencyMode: true,
                            backBufferLength: 90,
                        });

                        playerRef.current = hls;
                        hls.loadSource(proxyUrl);
                        hls.attachMedia(video);

                        hls.on(Hls.Events.MANIFEST_PARSED, () => {
                            video.play().catch(() => { });
                        });

                        hls.on(Hls.Events.ERROR, (event, data) => {
                            // Network errors or fatal errors -> switch to transcode
                            if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
                                switchToTranscode();
                                return;
                            }

                            if (data.fatal) {
                                switch (data.type) {
                                    case Hls.ErrorTypes.MEDIA_ERROR:
                                        hls.recoverMediaError();
                                        break;
                                    default:
                                        switchToTranscode();
                                        break;
                                }
                            }
                        });
                    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                        // Safari Native HLS
                        video.src = proxyUrl;
                        video.addEventListener('error', () => {
                            switchToTranscode();
                        });
                        video.addEventListener('canplay', () => {
                            video.play().catch(() => { });
                        });
                    } else {
                        // No HLS support -> fallback to transcode
                        switchToTranscode();
                    }
                }

                video.muted = true;

            } catch (e) {
                if (mountedRef.current) {
                    if (mode === 'direct') {
                        switchToTranscode();
                    } else {
                        setError('Failed to load player');
                    }
                }
            }
        }, 100);

        return () => {
            mountedRef.current = false;
            clearTimeout(initTimeout);
            destroyPlayer();
        };
    }, [streamUrl, key, mode, destroyPlayer, switchToTranscode]);

    return (
        <div className="w-full relative group bg-black rounded-xl overflow-hidden shadow-2xl facet-filter-height">
            <div className="absolute top-2 right-2 z-40 flex gap-2">
                <div className="bg-red-600/90 text-white px-2 py-1 rounded text-xs font-medium">
                    🔴 LIVE
                </div>
                {mode === 'transcode' && (
                    <div className="bg-yellow-500/90 text-black px-2 py-1 rounded text-xs font-medium">
                        ⚡ HD-T
                    </div>
                )}
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
