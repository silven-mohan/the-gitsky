import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GalaxyIntro from './components/GalaxyIntro';
import YouTubeIntro from './components/YouTubeIntro';
import './styles.css';

const path = window.location.pathname;
const RootComponent =
  path === '/world'
    ? App
    : path === '/video'
      ? YouTubeIntro
      : GalaxyIntro;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);
