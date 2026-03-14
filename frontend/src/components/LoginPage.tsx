import { useEffect, useMemo, useState } from 'react';
import styles from './LoginPage.module.css';

type MeResponse = {
  authenticated: boolean;
  username?: string;
  starCount?: number;
  updatedAt?: string;
};

const BACKEND_URL = (import.meta as any).env?.VITE_BACKEND_URL || 'http://localhost:4000';

function LoginPage() {
  const [me, setMe] = useState<MeResponse>({ authenticated: false });
  const [error, setError] = useState<string | null>(null);

  const authorizeUrl = useMemo(() => {
    const returnTo = `${window.location.origin}/login`;
    return `${BACKEND_URL}/auth/github?returnTo=${encodeURIComponent(returnTo)}`;
  }, []);

  useEffect(() => {
    let timer: number | undefined;

    const load = async () => {
      try {
        setError(null);
        const response = await fetch(`${BACKEND_URL}/api/me`, {
          credentials: 'include'
        });
        if (!response.ok) {
          throw new Error(`Failed to fetch auth state (${response.status})`);
        }
        const payload = (await response.json()) as MeResponse;
        setMe(payload);
      } catch (caught) {
        const message = caught instanceof Error ? caught.message : 'Unknown error';
        setError(message);
      }
    };

    load();
    timer = window.setInterval(load, 5000);

    return () => {
      if (timer) {
        window.clearInterval(timer);
      }
    };
  }, []);

  return (
    <main className={styles['login-page']}>
      <section className={styles['login-card']}>
        <h1>Authorize GitHub</h1>
        <p>
          Connect your GitHub account. The backend will fetch your total star count every 5 seconds and store
          snapshots as JSON.
        </p>

        <div className={styles.actions}>
          <button type="button" onClick={() => { window.location.href = authorizeUrl; }}>
            Authorize with GitHub
          </button>
          <button type="button" onClick={() => { window.location.href = '/world'; }}>
            Back to World
          </button>
        </div>

        <div className={styles.status}>
          <strong>Status: {me.authenticated ? 'Authenticated' : 'Not authenticated'}</strong>
          {me.username && <span>GitHub: {me.username}</span>}
          {typeof me.starCount === 'number' && <span>Stars: {me.starCount}</span>}
          {me.updatedAt && <span>Updated: {new Date(me.updatedAt).toLocaleString()}</span>}
          {error && <span>Error: {error}</span>}
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
