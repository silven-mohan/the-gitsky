# the-gitsky

Interactive main-page night sky built with ThreeJS on a modern Vite + React + TypeScript stack.

## Project structure

See the full tree and structure notes in [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md).

## Quick start

1. Install Node.js 20+.
2. Install dependencies:

	```bash
	npm install
	```

3. Start the dev server:

	```bash
	npm run dev
	```

4. Open the local URL shown in the terminal.

## Refactor notes

- Route flow is now split into three pages: `/` (galaxy), `/video` (intro video), and `/world` (Three.js scene).
- Three.js world overlay text has been removed and camera zoom-in is clamped.

## Credits

- Video Credit goes to: NASA's Goddard Space Flight Center/CI Lab