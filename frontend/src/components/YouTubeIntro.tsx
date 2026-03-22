import { useEffect, useMemo, useState, useRef } from 'react';
import styles from './YouTubeIntro.module.css';

type YouTubeIntroProps = {
  videoId?: string;
  redirectUrl?: string;
};

function YouTubeIntro({ videoId = 'EBGh_1l_cZs', redirectUrl = '/world' }: YouTubeIntroProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);

  const src = useMemo(
    () =>
      `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1&vq=hd2160`,
    [videoId]
  );

  // Lazy load iframe with Intersection Observer
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    // Use Intersection Observer to detect when viewport is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !iframeLoaded) {
            setIframeLoaded(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(viewport);

    return () => observer.disconnect();
  }, [iframeLoaded]);

  useEffect(() => {
    const previousBodyBackground = document.body.style.background;
    document.body.style.background = '#000';
    let redirectTimer: number | undefined;

    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);

      redirectTimer = window.setTimeout(() => {
        window.location.href = redirectUrl;
      }, 1500);
    }, 20_000);

    return () => {
      window.clearTimeout(exitTimer);
      if (redirectTimer) {
        window.clearTimeout(redirectTimer);
      }
      document.body.style.background = previousBodyBackground;
    };
  }, [redirectUrl]);

  return (
    <main className={`${styles.root} ${isExiting ? styles.zoomExit : ''}`}>
      <div className={styles.videoViewport} ref={viewportRef}>
        {iframeLoaded && (
          <iframe
            className={`${styles.videoFrame} ${styles['pointer-events-none']}`}
            src={src}
            title="YouTube Intro"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            loading="lazy"
          />
        )}
      </div>
    </main>
  );
}

export default YouTubeIntro;
