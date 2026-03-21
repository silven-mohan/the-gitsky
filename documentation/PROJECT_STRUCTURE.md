# Project Structure

This file documents the current, cleaned layout of the repository.

## Runtime Layout

- `frontend/`: Vite + React + TypeScript UI app.
- `backend/`: Express API for auth and GitHub/star data.

## Route Flow

- `/` -> `GalaxyIntro`
- `/video` -> `YouTubeIntro`
- `/world` -> `App` (Three.js world)

## Tree

```text
the-gitsky/
|-- LICENSE
|-- README.md
|-- .gitignore
|-- documentation/
|   |-- documentation.md
|   `-- PROJECT_STRUCTURE.md
|-- frontend/
|   |-- .env.example
|   |-- index.html
|   |-- package.json
|   |-- package-lock.json
|   |-- postcss.config.js
|   |-- tailwind.config.ts
|   |-- tsconfig.json
|   |-- tsconfig.app.json
|   |-- tsconfig.node.json
|   |-- vite.config.ts
|   |-- vercel.json
|   |-- public/
|   |   `-- textures/
|   |       |-- lroc_color_poles_4k.tif
|   |       `-- moon.jpg
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
    |-- .env.example
    |-- README.md
    |-- package.json
    |-- package-lock.json
    |-- server.js
    |-- routes/
    |   |-- api.js
    |   `-- auth.js
    |-- middleware/
    |   `-- authMiddleware.js
    |-- services/
    |   |-- githubService.js
    |   |-- supabaseClient.js
    |   `-- supabaseService.js
    `-- data/
        |-- latest-stars.json
        `-- star-history.json
```

## Generated And Ignored Artifacts

- `*/node_modules/`
- `frontend/dist/`
- `.vite/`
- `*.tsbuildinfo`
- `frontend/vite.config.d.ts`
- `backend/.env` and `frontend/.env`

## Cleanup Notes

- Removed duplicate/generated frontend config outputs (`vite.config.js`, `vite.config.d.ts`, `tailwind.config.js`).
- Removed stale backend wrapper entry at `backend/src/server.js`.
- Removed unused scaffold file `frontend/components.json`.