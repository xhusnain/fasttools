'use client';

import { useEffect, useRef, useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { useToast } from '@/ui/gtoast';
import { AlertCircle } from 'lucide-react';

interface LiveTVPlayerProps {
    streamUrl: string;
    channelName: string;
}

export function LiveTVPlayer({ streamUrl, channelName }: LiveTVPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const playerRef = useRef<any>(null);
    const { showToast, GToastContainer } = useToast();
    const [isError, setIsError] = useState(false);

    // Initialize player
    useEffect(() => {
        if (!playerRef.current) {
            const videoElement = videoRef.current;
            if (!videoElement) return;

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
                    },
                    nativeAudioTracks: false,
                    nativeVideoTracks: false,
                },
            });

            playerRef.current = player;

            player.on('error', () => {
                console.error('VideoJS Error:', player.error());
                setIsError(true);
                showToast('error', 'Unable to play this channel. It might be offline.', 5000);
            });

            player.on('stalled', () => {
                console.warn('Playback stalled, attempting recovery...');
                player.load();
                const playPromise = player.play();
                if (playPromise) {
                    playPromise.catch(console.error);
                }
            });
        }
    }, [showToast]);

    // Handle source updates
    useEffect(() => {
        const player = playerRef.current;
        if (player && streamUrl) {
            setIsError(false);
            player.src({
                src: streamUrl,
                type: 'application/x-mpegURL',
            });
        }
    }, [streamUrl]);

    // Cleanup
    useEffect(() => {
        return () => {
            const player = playerRef.current;
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, []);

    return (
        <div className="w-full relative group">
            <div data-vjs-player>
                <video
                    ref={videoRef}
                    className="video-js vjs-big-play-centered vjs-16-9"
                    playsInline
                />
            </div>

            {isError && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/90 text-white rounded-lg">
                    <AlertCircle className="w-12 h-12 mb-4 text-red-500" />
                    <h3 className="text-xl font-bold mb-2">Channel Unavailable</h3>
                    <p className="text-gray-400 text-center max-w-md px-4">
                        We're having trouble connecting to this stream. The channel might be temporarily offline or restricted in your region.
                    </p>
                </div>
            )}

            <GToastContainer />
        </div>
    );
}
