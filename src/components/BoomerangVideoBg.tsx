import React, { useEffect, useRef, useState } from 'react';

const CLOUDFRONT_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260715_090628_7052d8a6-a094-4341-a4a2-ad58493a67a9.mp4';

export const BoomerangVideoBg: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const displayCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isBoomerangReady, setIsBoomerangReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const displayCanvas = displayCanvasRef.current;
    if (!video || !displayCanvas) return;

    let frames: (ImageBitmap | HTMLCanvasElement)[] = [];
    let isCapturing = true;
    let lastTime = -1;
    let animFrameId: number | null = null;
    let videoFrameCallbackId: number | null = null;
    let pingPongTimer: NodeJS.Timeout | null = null;

    const captureCurrentFrame = () => {
      if (!isCapturing || !video || video.videoWidth === 0 || video.videoHeight === 0) return;

      const currentTime = video.currentTime;
      // Deduplicate by currentTime (at least ~0.025s apart)
      if (Math.abs(currentTime - lastTime) < 0.025) return;
      lastTime = currentTime;

      const targetWidth = Math.min(video.videoWidth, 960);
      const scale = targetWidth / video.videoWidth;
      const targetHeight = Math.round(video.videoHeight * scale);

      try {
        const offCanvas = document.createElement('canvas');
        offCanvas.width = targetWidth;
        offCanvas.height = targetHeight;
        const offCtx = offCanvas.getContext('2d');
        if (offCtx) {
          offCtx.drawImage(video, 0, 0, targetWidth, targetHeight);
          frames.push(offCanvas);
        }
      } catch (err) {
        // In case of CORS canvas taint
        console.warn('Frame capture notice:', err);
      }
    };

    const startCapturing = () => {
      // Cast video as any for browser-specific videoFrameCallback compatibility
      const vid = video as unknown as {
        requestVideoFrameCallback?: (cb: (now: number, metadata: unknown) => void) => number;
        cancelVideoFrameCallback?: (id: number) => void;
      };

      if (typeof vid.requestVideoFrameCallback === 'function') {
        const onFrame = () => {
          if (!isCapturing) return;
          captureCurrentFrame();
          if (typeof vid.requestVideoFrameCallback === 'function') {
            videoFrameCallbackId = vid.requestVideoFrameCallback(onFrame);
          }
        };
        videoFrameCallbackId = vid.requestVideoFrameCallback(onFrame);
      } else {
        const loop = () => {
          if (!isCapturing) return;
          captureCurrentFrame();
          animFrameId = requestAnimationFrame(loop);
        };
        animFrameId = requestAnimationFrame(loop);
      }
    };

    const startPingPong = () => {
      if (frames.length < 2) {
        // Fallback: If frames couldn't be captured, fallback to native loop
        video.loop = true;
        video.play().catch(() => {});
        return;
      }

      setIsBoomerangReady(true);

      const ctx = displayCanvas.getContext('2d');
      if (!ctx) return;

      const firstFrame = frames[0];
      displayCanvas.width = firstFrame.width;
      displayCanvas.height = firstFrame.height;

      let currentIndex = 0;
      let forward = true;

      // 30fps interval = 1000/30 ms
      const intervalMs = 1000 / 30;

      pingPongTimer = setInterval(() => {
        const frame = frames[currentIndex];
        if (frame) {
          ctx.drawImage(frame, 0, 0, displayCanvas.width, displayCanvas.height);
        }

        if (forward) {
          currentIndex++;
          if (currentIndex >= frames.length - 1) {
            forward = false;
          }
        } else {
          currentIndex--;
          if (currentIndex <= 0) {
            forward = true;
          }
        }
      }, intervalMs);
    };

    const handleEnded = () => {
      isCapturing = false;
      const vid = video as unknown as { cancelVideoFrameCallback?: (id: number) => void };
      if (videoFrameCallbackId !== null && typeof vid.cancelVideoFrameCallback === 'function') {
        vid.cancelVideoFrameCallback(videoFrameCallbackId);
      }
      if (animFrameId !== null) {
        cancelAnimationFrame(animFrameId);
      }
      startPingPong();
    };

    const handlePlay = () => {
      startCapturing();
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('ended', handleEnded);

    // Initial play attempt
    video.play().catch(() => {
      // Auto-play policy handling
    });

    return () => {
      isCapturing = false;
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('ended', handleEnded);
      if (animFrameId !== null) cancelAnimationFrame(animFrameId);
      if (pingPongTimer) clearInterval(pingPongTimer);
      frames = [];
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 scale-100 sm:scale-[1.15] origin-top overflow-hidden pointer-events-none">
      {/* Hidden/Capture Video with mobile autoPlay and centered building framing */}
      <video
        ref={videoRef}
        src={CLOUDFRONT_VIDEO_URL}
        autoPlay
        muted
        playsInline
        preload="auto"
        poster="/src/assets/images/hero_roof_waterproofing_1791350218954.jpg"
        crossOrigin="anonymous"
        className="w-full h-full object-cover object-[center_35%] sm:object-top"
        style={{ display: isBoomerangReady ? 'none' : 'block' }}
      />

      {/* Ping-pong Boomerang Display Canvas */}
      <canvas
        ref={displayCanvasRef}
        className="w-full h-full object-cover object-[center_35%] sm:object-top"
        style={{ display: isBoomerangReady ? 'block' : 'none' }}
      />
    </div>
  );
};
