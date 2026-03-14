# Project Structure

This file documents the current layout of the project.

## Refactor Summary

- Three-page app flow:
    - `/` -> `GalaxyIntro`
    - `/video` -> `YouTubeIntro`
    - `/world` -> `App` (Three.js world)
- Blue Space overlay text/css removed from the Three.js world scene.
- OrbitControls zoom-in is clamped to prevent over-zooming toward the moon.
- Repository layout split:
    - `frontend/` contains the Vite React app.
    - `backend/` contains the GitHub OAuth and star-polling API service.

## Tree

```text
the-gitsky/
|-- LICENSE
|-- README.md
|-- PROJECT_STRUCTURE.md
|-- frontend/
|   |-- index.html
|   |-- package.json
|   |-- package-lock.json
|   |-- components.json
|   |-- postcss.config.js
|   |-- tailwind.config.js
|   |-- tailwind.config.ts
|   |-- tsconfig.json
|   |-- tsconfig.app.json
|   |-- tsconfig.node.json
|   |-- vite.config.ts
|   |-- vite.config.js
|   |-- vite.config.d.ts
|   `-- src/
|       |-- App.tsx
|       |-- main.tsx
|       |-- styles.css
|       |-- components/
|       |   |-- Galaxy.jsx
|       |   |-- Galaxy.css
|       |   |-- GalaxyIntro.tsx
|       |   |-- GalaxyIntro.module.css
|       |   |-- LoginPage.tsx
|       |   |-- LoginPage.module.css
|       |   |-- YouTubeIntro.tsx
|       |   `-- YouTubeIntro.module.css
|       `-- types/
|           `-- three-fallback.d.ts
`-- backend/
    |-- package.json
    |-- package-lock.json
    |-- .env.example
    |-- README.md
    |-- data/
    |   |-- latest-stars.json
    |   `-- star-history.json
    `-- src/
        `-- server.js
```

## Notes

- `frontend/dist/` and `*/node_modules/` are generated directories and are not part of the authored source structure.
- `*.tsbuildinfo`, `frontend/vite.config.js`, and `frontend/vite.config.d.ts` are generated artifacts created by TypeScript/Vite tooling.