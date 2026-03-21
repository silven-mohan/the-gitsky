import { useEffect, useMemo, useState } from 'react';
import styles from './LoginPage.module.css';

type MeResponse = {
  username: string;
  avatar_url?: string;
  star_count?: number;
};

const envBackendUrl = (import.meta as any).env?.VITE_BACKEND_URL as string | undefined;
const isLocalHost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const BACKEND_URL = envBackendUrl || (isLocalHost ? 'http://localhost:4000' : '');

function LoginPage() {
  const [me, setMe] = useState<MeResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const isBackendConfigured = Boolean(BACKEND_URL);

  const authorizeUrl = useMemo(() => {
    if (!BACKEND_URL) {
      return '#';
    }
    return `${BACKEND_URL}/auth/github`;
  }, []);

  useEffect(() => {
    if (!BACKEND_URL) {
      setError('Missing VITE_BACKEND_URL. Set it in Vercel project environment variables.');
      return;
    }

    const url = new URL(window.location.href);
    const tokenFromUrl = url.searchParams.get('token');
    if (tokenFromUrl) {
      localStorage.setItem('auth_token', tokenFromUrl);
      url.searchParams.delete('token');
      window.history.replaceState({}, '', url.pathname + (url.search ? url.search : ''));
      window.location.replace('/world');
      return;
    }

    const savedToken = localStorage.getItem('auth_token');
    if (!savedToken) {
      return;
    }

    const load = async () => {
      try {
        setError(null);
        const response = await fetch(`${BACKEND_URL}/api/me`, {
          headers: {
            Authorization: `Bearer ${savedToken}`
          }
        });
        if (!response.ok) {
          if (response.status === 401) {
            localStorage.removeItem('auth_token');
          }
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
  }, []);

  return (
    <main className={styles['login-page']}>
      <section className={styles['login-card']}>
        <h1>Sign in with GitHub</h1>
        <p>Use your GitHub account to continue to The GitSky.</p>

        <div className={styles.actions}>
          <button
            className={styles['github-button']}
            type="button"
            disabled={!isBackendConfigured}
            onClick={() => {
              if (!isBackendConfigured) {
                return;
              }
              window.location.href = authorizeUrl;
            }}
          >
            <span aria-hidden="true">🐙</span>
            Continue with GitHub
          </button>
        </div>

        <div className={styles.status}>
          <strong>Status: {me ? 'Authenticated' : 'Not authenticated'}</strong>
          {me?.username && <span>GitHub: {me.username}</span>}
          {me?.avatar_url && <span>Avatar: {me.avatar_url}</span>}
          {typeof me?.star_count === 'number' && <span>Stars: {me.star_count}</span>}
          {error && <span>Error: {error}</span>}
        </div>

        <section className={styles.policies} aria-label="Privacy and guidelines">
          <h2>Privacy and Guidelines</h2>
          <p>
            By continuing, you authorize The GitSky to read your public GitHub profile and repository metadata needed to
            compute star counts. We do not request write access to your repositories.
          </p>
          <p className={styles['policy-links']}>
            <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noreferrer">
              Privacy Policy
            </a>
            <span aria-hidden="true">•</span>
            <a href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service" target="_blank" rel="noreferrer">
              Usage Guidelines
            </a>
          </p>
          <ul>
            <li>Only public GitHub data required for app features is processed.</li>
            <li>Authentication is handled through GitHub OAuth and secured with JWT.</li>
            <li>Do not share tokens or impersonate other users.</li>
            <li>Use the platform respectfully and in compliance with GitHub terms.</li>
          </ul>
        </section>
      </section>
    </main>
  );
}

export default LoginPage;
