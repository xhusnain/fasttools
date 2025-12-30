'use client';

import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

interface LiveTVPlayerProps {
    streamUrl: string;
}

export function LiveTVPlayer({ streamUrl }: LiveTVPlayerProps) {
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<any>(null);

    const retryCountRef = useRef(0);

    useEffect(() => {
        if (!videoContainerRef.current) return;

        retryCountRef.current = 0;
        videoContainerRef.current.innerHTML = '';

        const videoElement = document.createElement('video');
        videoElement.className = 'video-js vjs-big-play-centered vjs-16-9';
        videoElement.playsInline = true;

        videoContainerRef.current.appendChild(videoElement);

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
            sources: [{
                src: streamUrl,
                type: 'application/x-mpegURL'
            }]
        });

        playerRef.current = player;

        player.on('error', () => {
            const error = player.error();
            console.error('VideoJS Error:', error);

            if (error && (error.code === 4 || error.code === 2) && retryCountRef.current < 3) {
                retryCountRef.current += 1;
                setTimeout(() => {
                    if (!player.isDisposed()) {
                        player.src({ src: streamUrl, type: 'application/x-mpegURL' });
                        player.load();
                        const playPromise = player.play();
                        if (playPromise) {
                            playPromise.catch(() => { });
                        }
                    }
                }, 1500);
                return;
            }
        });

        player.on('stalled', () => {
            player.load();
            const playPromise = player.play();
            if (playPromise) {
                playPromise.catch(() => { });
            }
        });

        const handleAutoplay = async () => {
            try {
                await player.play();
            } catch (error) {
                player.muted(true);
                try {
                    await player.play();
                } catch (mutedError) {
                    player.poster('');
                }
            }
        };

        void handleAutoplay();

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [streamUrl]);

    return (
        <div className="w-full relative group">
            <div ref={videoContainerRef} className="w-full" />
        </div>
    );
}
