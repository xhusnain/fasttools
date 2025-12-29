'use client';

// Live TV Player Component using Video.js

import { useEffect, useRef, useState } from 'react';
import { AlertCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/ui/gtoast';

interface LiveTVPlayerProps {
    streamUrl: string;
    channelName: string;
}

export function LiveTVPlayer({ streamUrl, channelName }: LiveTVPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [playerReady, setPlayerReady] = useState(false);
    const { showToast, GToastContainer } = useToast();

    useEffect(() => {
        let videojs: any;
        let player: any;
        let isCleaningUp = false;

        const initializePlayer = async () => {
            if (!videoRef.current || isCleaningUp) return;

            try {
                // Dynamically import Video.js
                videojs = (await import('video.js')).default;
                await import('video.js/dist/video-js.css');

                // Suppress Video.js console errors (they're expected for unavailable streams)
                // We handle errors gracefully with user-friendly messages instead
                if (videojs.log) {
                    videojs.log.level('off'); // Suppress all Video.js console logs
                }

                // Check if element still exists before initializing
                if (!videoRef.current || isCleaningUp) return;

                // Initialize player
                player = videojs(videoRef.current, {
                    controls: true,
                    autoplay: false, // Changed to false to prevent auto-play issues
                    preload: 'auto',
                    fluid: true,
                    responsive: true,
                    liveui: true,
                    html5: {
                        vhs: {
                            overrideNative: true,
                        },
                        nativeVideoTracks: false,
                        nativeAudioTracks: false,
                        nativeTextTracks: false,
                    },
                });

                // Set source
                player.src({
                    src: streamUrl,
                    type: 'application/x-mpegURL',
                });

                player.on('loadedmetadata', () => {
                    if (isCleaningUp) return;
                    setIsLoading(false);
                    setPlayerReady(true);
                    setError(null);
                    showToast('success', `✅ ${channelName} is now playing!`, 3000);
                });

                player.on('error', (e: any) => {
                    if (isCleaningUp) return;
                    setIsLoading(false);
                    const mediaError = player.error();

                    // Determine error type and provide specific message
                    let errorMessage = 'This channel is currently unavailable.';
                    let errorDetails = '';
                    let toastMessage = '';

                    if (mediaError) {
                        switch (mediaError.code) {
                            case 1: // MEDIA_ERR_ABORTED
                                errorMessage = 'Stream loading was aborted.';
                                errorDetails = 'The stream may have been interrupted. Try refreshing the page.';
                                toastMessage = '⚠️ Stream loading aborted';
                                break;
                            case 2: // MEDIA_ERR_NETWORK
                                errorMessage = 'Network error occurred.';
                                errorDetails = 'Unable to connect to the stream. Check your internet connection.';
                                toastMessage = '🌐 Network error - Check your connection';
                                break;
                            case 3: // MEDIA_ERR_DECODE
                                errorMessage = 'Stream format not supported.';
                                errorDetails = 'The stream format cannot be played in your browser.';
                                toastMessage = '❌ Stream format not supported';
                                break;
                            case 4: // MEDIA_ERR_SRC_NOT_SUPPORTED
                                errorMessage = 'Channel not available.';
                                errorDetails = 'This stream may be offline, geo-restricted, or requires special access.';
                                toastMessage = '📡 Channel unavailable or offline';
                                break;
                            default:
                                errorMessage = 'Unable to play this channel.';
                                errorDetails = 'The stream may be temporarily offline or unavailable in your region.';
                                toastMessage = '⚠️ Unable to play channel';
                        }
                    }

                    // Check for CORS error specifically
                    if (e?.message?.includes('CORS') || e?.message?.includes('cross-origin')) {
                        errorMessage = 'Access Restricted';
                        errorDetails = 'This stream is blocked by CORS policy and cannot be played in the browser.';
                        toastMessage = '🚫 Stream blocked by CORS policy';
                    }

                    setError(`${errorMessage}|${errorDetails}`);
                    showToast('error', toastMessage || `❌ ${channelName} failed to load`, 5000);
                });

            } catch (err) {
                if (isCleaningUp) return;
                console.error('Error initializing player:', err);
                setIsLoading(false);
                setError('Player initialization failed.|Unable to load the video player. Please try refreshing the page.');
                showToast('error', '❌ Video player failed to initialize', 5000);
            }
        };

        initializePlayer();

        // Cleanup
        return () => {
            isCleaningUp = true;
            if (player) {
                try {
                    // Remove all event listeners first
                    player.off('loadedmetadata');
                    player.off('error');

                    // Pause and reset before disposing
                    if (typeof player.pause === 'function') {
                        player.pause();
                    }

                    // Dispose of player
                    if (typeof player.dispose === 'function') {
                        player.dispose();
                    }
                } catch (e) {
                    // Silently ignore disposal errors
                    console.debug('Player disposal error (safe to ignore):', e);
                }
            }
        };
    }, [streamUrl, channelName, showToast]);

    return (
        <div className="relative w-full">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
                {/* Loading State */}
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
                        <div className="text-center space-y-3">
                            <Loader2 className="h-12 w-12 text-primary animate-spin mx-auto" />
                            <p className="text-white">Loading {channelName}...</p>
                        </div>
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/90 to-black/80 z-10">
                        <div className="text-center space-y-4 max-w-md px-6">
                            <div className="relative">
                                <div className="absolute inset-0 blur-xl bg-red-500/20 rounded-full"></div>
                                <AlertCircle className="relative h-16 w-16 text-red-500 mx-auto" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-white">
                                    {error.split('|')[0]}
                                </h3>
                                <p className="text-sm text-gray-300">
                                    {error.split('|')[1] || 'Please try another channel or check back later.'}
                                </p>
                            </div>
                            <div className="pt-2 space-y-2 text-xs text-gray-400 border-t border-gray-700">
                                <p className="font-medium text-gray-300">💡 Troubleshooting Tips:</p>
                                <ul className="text-left space-y-1 list-disc list-inside">
                                    <li>Try a different channel from the same country</li>
                                    <li>Refresh the page and try again</li>
                                    <li>Some streams may be geo-restricted</li>
                                    <li>Free streams can go offline without notice</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Video Element */}
                <video
                    ref={videoRef}
                    className="video-js vjs-big-play-centered w-full h-full"
                    playsInline
                />
            </div>

            {/* Toast Container */}
            <GToastContainer />
        </div>
    );
}
