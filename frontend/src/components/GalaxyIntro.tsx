import Galaxy from './Galaxy.jsx';
import styles from './GalaxyIntro.module.css';

function GalaxyIntro() {
  const goToVideo = () => {
    window.location.href = '/video';
  };

  return (
    <main className={styles.root}>
      <div className={styles.stage}>
        <Galaxy
          starSpeed={0.5}
          density={1}
          hueShift={140}
          speed={1}
          glowIntensity={0.3}
          saturation={0}
          mouseRepulsion
          repulsionStrength={2}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          transparent
        />
      </div>
      <button className={styles.getStartedButton} type="button" onClick={goToVideo}>
        Get Started
      </button>
    </main>
  );
}

export default GalaxyIntro;
