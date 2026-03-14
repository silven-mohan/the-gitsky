import { useEffect, useMemo, useState } from 'react';
import styles from './YouTubeIntro.module.css';

type YouTubeIntroProps = {
  videoId?: string;
  redirectUrl?: string;
};

function YouTubeIntro({ videoId = 'EBGh_1l_cZs', redirectUrl = '/world' }: YouTubeIntroProps) {
  const [isExiting, setIsExiting] = useState(false);

  const src = useMemo(
    () =>
      `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1&vq=hd2160`,
    [videoId]
  );

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
      <div className={styles.videoViewport}>
        <iframe
          className={`${styles.videoFrame} ${styles['pointer-events-none']}`}
          src={src}
          title="YouTube Intro"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </main>
  );
}

export default YouTubeIntro;
