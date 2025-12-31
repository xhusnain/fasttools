'use client';

import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { AlertCircle, RefreshCw, Volume2, VolumeX } from 'lucide-react';

interface LiveTVPlayerProps {
    streamUrl: string;
    countryCode?: string;
}

export function LiveTVPlayer({ streamUrl, countryCode = 'International' }: LiveTVPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const hlsRef = useRef<Hls | null>(null);
    const retryCountRef = useRef(0);
    const [playerError, setPlayerError] = useState<{ type: string; message: string } | null>(null);
    const [useTranscodedStream, setUseTranscodedStream] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handleRetry = () => {
        setPlayerError(null);
        retryCountRef.current = 0;
        setUseTranscodedStream(false); // Reset to try HLS first
        setIsLoading(true);
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        setPlayerError(null);
        setIsLoading(true);

        // Cleanup previous instance
        if (hlsRef.current) {
            hlsRef.current.destroy();
            hlsRef.current = null;
        }

        // If we've detected codec issues, use FFmpeg transcoded stream directly
        if (useTranscodedStream) {
            console.log('[Player] Using FFmpeg transcoded stream');
            const transcodedUrl = `/api/stream?url=${encodeURIComponent(streamUrl)}`;
            video.src = transcodedUrl;
            video.muted = true;

            video.onloadeddata = () => {
                console.log('[Player] Transcoded stream loaded');
                setIsLoading(false);
            };
            video.oncanplay = () => {
                console.log('[Player] Transcoded stream can play');
                setIsLoading(false);
                video.play().catch(() => { });
            };
            video.onerror = (e) => {
                console.error('[Player] Transcoded stream error:', e);
                setPlayerError({
                    type: 'error',
                    message: 'Stream transcoding failed. The stream may be unavailable.'
                });
                setIsLoading(false);
            };

            video.load();
            video.play().catch(() => { });
            return;
        }

        if (Hls.isSupported()) {
            const hls = new Hls({
                enableWorker: false,
                lowLatencyMode: false,
                backBufferLength: 30,
                maxBufferLength: 60,
                maxBufferSize: 60 * 1000 * 1000,
                maxMaxBufferLength: 120,
                manifestLoadingTimeOut: 30000,
                manifestLoadingMaxRetry: 6,
                levelLoadingTimeOut: 30000,
                levelLoadingMaxRetry: 6,
                fragLoadingTimeOut: 30000,
                fragLoadingMaxRetry: 6,
                fragLoadingMaxRetryTimeout: 64000,
                startFragPrefetch: true,
                testBandwidth: false,
                progressive: true,
                enableSoftwareAES: true,
                renderTextTracksNatively: false,
                xhrSetup: function (xhr, url) {
                    const proxyUrl = `/api/proxy?url=${encodeURIComponent(url)}`;
                    xhr.open('GET', proxyUrl, true);
                },
            });

            hlsRef.current = hls;
            hls.loadSource(streamUrl);
            hls.attachMedia(video);

            // Timeout fallback: if video doesn't start playing within 5 seconds, switch to transcoded stream
            const playbackTimeout = setTimeout(() => {
                if (video.paused && !video.ended && video.readyState < 3) {
                    console.log('[Player] Playback timeout - video not playing, switching to transcoded stream...');
                    hls.destroy();
                    hlsRef.current = null;
                    setUseTranscodedStream(true);
                }
            }, 5000);

            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                setIsLoading(false);
            });

            // Track if we successfully started playing
            video.onplaying = () => {
                clearTimeout(playbackTimeout);
                console.log('[Player] HLS playback started successfully');
            };

            hls.on(Hls.Events.MEDIA_ATTACHED, () => {
                video.muted = true;
                video.play().catch(() => { });
            });

            hls.on(Hls.Events.ERROR, (event, data) => {
                if (data.fatal) {
                    console.error('HLS Fatal Error:', data.type, data.details);

                    // Errors that indicate codec issues or persistent stream problems
                    // Switch to FFmpeg transcoded stream immediately
                    const codecErrors = [
                        'bufferAppendError',
                        'bufferAppendingError',
                        'fragParsingError',
                    ];

                    if (codecErrors.includes(data.details)) {
                        console.log('[Player] Codec/parsing error, switching to transcoded stream...');
                        hls.destroy();
                        hlsRef.current = null;
                        setUseTranscodedStream(true);
                    } else if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
                        if (retryCountRef.current < 1) {
                            retryCountRef.current++;
                            hls.recoverMediaError();
                        } else {
                            console.log('[Player] Media error persists, switching to transcoded stream...');
                            hls.destroy();
                            hlsRef.current = null;
                            setUseTranscodedStream(true);
                        }
                    } else if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
                        // Network errors (like fragLoadError) - retry only twice then fallback
                        if (retryCountRef.current < 2) {
                            retryCountRef.current++;
                            console.log(`[Player] Network error, retrying... (${retryCountRef.current}/2)`);
                            setTimeout(() => hls.startLoad(), 500);
                        } else {
                            console.log('[Player] Network errors persist, switching to transcoded stream...');
                            hls.destroy();
                            hlsRef.current = null;
                            setUseTranscodedStream(true);
                        }
                    } else {
                        setPlayerError({ type: 'error', message: `Stream error: ${data.details}` });
                        setIsLoading(false);
                    }
                }
            });

        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            // Safari Native HLS
            video.src = streamUrl;
            video.addEventListener('loadeddata', () => setIsLoading(false));
            video.addEventListener('error', () => {
                setPlayerError({ type: 'error', message: 'Stream unavailable' });
                setIsLoading(false);
            });
            video.muted = true;
            video.play().catch(() => { });
        } else {
            setPlayerError({
                type: 'format',
                message: 'Your browser does not support HLS playback.'
            });
            setIsLoading(false);
        }

        return () => {
            if (hlsRef.current) {
                hlsRef.current.destroy();
                hlsRef.current = null;
            }
        };
    }, [streamUrl, useTranscodedStream]);

    return (
        <div className="w-full relative group bg-black rounded-xl overflow-hidden shadow-2xl facet-filter-height">
            {/* Loading Indicator */}
            {isLoading && !playerError && (
                <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/60">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
                </div>
            )}

            {/* Transcoded Stream Badge */}
            {useTranscodedStream && !playerError && (
                <div className="absolute top-4 left-4 z-30 px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                    Transcoded
                </div>
            )}

            {/* Main Video Element */}
            <video
                ref={videoRef}
                className="w-full h-full object-contain"
                controls
                playsInline
            />

            {/* Error Overlay */}
            {playerError && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm p-6 text-center animate-in fade-in duration-300">
                    <div className="max-w-md space-y-4">
                        <AlertCircle className="h-10 w-10 text-red-500 mx-auto" />
                        <h3 className="text-xl font-bold text-white">Stream Error</h3>
                        <p className="text-gray-300 text-sm">{playerError.message}</p>

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
