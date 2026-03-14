# Project Structure

This file documents the current, refactored layout of the project.

## Refactor Summary

- Kept runtime media assets in `public/media`.
- Removed duplicate HLS playlist/chunk files from `src/media`.
- Kept the original source `.mov` file in `src/media` as a non-runtime asset.
- Removed stale TypeScript exclude for removed source media chunks.

## Tree

```text
the-gitsky/
|-- index.html
|-- LICENSE
|-- package.json
|-- package-lock.json
|-- README.md
|-- PROJECT_STRUCTURE.md
|-- tsconfig.json
|-- tsconfig.app.json
|-- tsconfig.node.json
|-- vite.config.ts
|-- vite.config.js
|-- vite.config.d.ts
|-- public/
|   `-- media/
|       |-- index.m3u8
|       |-- index0.ts
|       |-- index1.ts
|       `-- index2.ts
`-- src/
    |-- App.tsx
    |-- main.tsx
    |-- styles.css
    |-- components/
    |-- media/
    |   `-- 12656_Big_Bang_ProRes_5760x3240_30.mov
    `-- types/
        `-- three-fallback.d.ts
```

## Notes

- `dist/` and `node_modules/` are generated directories and are not part of the authored source structure.
- If you later wire up video playback in React, reference HLS files from `/media/...` so Vite serves them from `public`.
