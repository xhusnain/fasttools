'use client';

import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { useToast } from '@/ui/gtoast';

interface LiveTVPlayerProps {
    streamUrl: string;
    channelName: string;
}

export function LiveTVPlayer({ streamUrl, channelName }: LiveTVPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const playerRef = useRef<any>(null);
    const { showToast, GToastContainer } = useToast();

    useEffect(() => {
        const initializePlayer = () => {
            if (!videoRef.current) return;

            try {
                // Initialize player with Video.js defaults
                playerRef.current = videojs(videoRef.current, {
                    controls: true,
                    autoplay: true,
                    preload: 'auto',
                    fluid: true,
                    responsive: true,
                    liveui: true,
                });

                // Set source
                playerRef.current.src({
                    src: streamUrl,
                    type: 'application/x-mpegURL',
                });

                // Only handle errors - let Video.js handle everything else
                playerRef.current.on('error', () => {
                    showToast('error', 'Channel is offline', 3000);
                });

            } catch (err) {
                console.error('Player initialization error:', err);
                showToast('error', 'Channel is offline', 3000);
            }
        };

        initializePlayer();

        // Cleanup
        return () => {
            if (playerRef.current) {
                playerRef.current.dispose();
                playerRef.current = null;
            }
        };
    }, [streamUrl, channelName, showToast]);

    return (
        <div className="w-full">
            <div data-vjs-player>
                <video
                    ref={videoRef}
                    className="video-js vjs-big-play-centered"
                    playsInline
                />
            </div>
            <GToastContainer />
        </div>
    );
}
