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
    const videoContainerRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<any>(null);
    const { showToast, GToastContainer } = useToast();

    // Initialize player
    useEffect(() => {
        // Safe check for container
        if (!videoContainerRef.current) return;

        // If player already exists, check if we need to do anything or just return
        // Ideally in strict mode we want to handle double-mount carefully.
        // But with manual creation, we can just create a fresh one if container is empty.

        // Clean container first to be sure
        videoContainerRef.current.innerHTML = '';

        // Create video element manually
        const videoElement = document.createElement('video');
        videoElement.className = 'video-js vjs-big-play-centered vjs-16-9';
        videoElement.playsInline = true;

        // Append to container
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

        // Events
        player.on('error', () => {
            console.error('VideoJS Error:', player.error());
            showToast('error', 'Unable to play this channel. It might be offline.', 5000);
        });

        player.on('stalled', () => {
            console.warn('Playback stalled, attempting recovery...');
            player.load();
            player.play().catch(() => { });
        });

        // Autoplay Fallback Logic
        const handleAutoplay = async () => {
            try {
                await player.play();
            } catch (error) {
                console.warn("Autoplay blocked, attempting muted fallback:", error);
                player.muted(true);
                try {
                    await player.play();
                    showToast('info', 'Video muted via browser policy. Click to unmute.', 4000);
                } catch (mutedError) {
                    console.error("Muted autoplay also blocked:", mutedError);
                    player.poster('');
                }
            }
        };

        handleAutoplay();

        // Cleanup function
        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [streamUrl]);

    // Handle source updates SEPARATELY only if player exists
    // But wait, if we depend on [] above, we need to handle streamUrl updates.
    // Actually, if we use the key-prop pattern in parent, we remount. 
    // BUT we removed the key prop. So we need to handle prop updates.

    // We can add `streamUrl` to the dependency array of the main effect?
    // NO, that would destroy and recreate player on every URL change, which is actually safer for the "audio only" bug 
    // but slightly heavier. Given the issues, HEAVIER IS BETTER for stability.
    // Let's modify the useEffect dependency to include `streamUrl` so we get a fresh player for every channel.
    // This effectively simulates the `key` prop behavior but LOCALLY managed with manual DOM.
    // This is the most robust way to ensure old state (audio zombies) are killed.

    return (
        <div className="w-full relative group">
            <div ref={videoContainerRef} className="w-full" />
            <GToastContainer />
        </div>
    );
}
