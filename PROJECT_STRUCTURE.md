# Project Structure

This file documents the current layout of the project.

## Refactor Summary

- Three-page app flow:
    - `/` -> `GalaxyIntro`
    - `/video` -> `YouTubeIntro`
    - `/world` -> `App` (Three.js world)
- Blue Space overlay text/css removed from the Three.js world scene.
- OrbitControls zoom-in is clamped to prevent over-zooming toward the moon.

## Tree

```text
the-gitsky/
|-- index.html
|-- LICENSE
|-- package.json
|-- package-lock.json
|-- README.md
|-- PROJECT_STRUCTURE.md
|-- components.json
|-- postcss.config.js
|-- tailwind.config.js
|-- tailwind.config.ts
|-- tsconfig.json
|-- tsconfig.app.json
|-- tsconfig.node.json
|-- vite.config.ts
|-- vite.config.js
|-- vite.config.d.ts
`-- src/
    |-- App.tsx
    |-- main.tsx
    |-- styles.css
    |-- components/
        |   |-- Galaxy.jsx
        |   |-- Galaxy.css
        |   |-- GalaxyIntro.tsx
        |   |-- GalaxyIntro.module.css
        |   |-- YouTubeIntro.tsx
        |   `-- YouTubeIntro.module.css
    `-- types/
        `-- three-fallback.d.ts
```

## Notes

- `dist/` and `node_modules/` are generated directories and are not part of the authored source structure.
- `*.tsbuildinfo`, `vite.config.js`, and `vite.config.d.ts` are generated artifacts created by TypeScript/Vite tooling.