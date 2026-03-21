# the-gitsky

Interactive main-page night sky built with ThreeJS on a modern Vite + React + TypeScript stack.

## Project structure

See the full tree and structure notes in [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md).

## Quick start

1. Install Node.js 20+.
2. Install frontend dependencies:

	```bash
	cd frontend
	npm install
	```

3. Start the frontend dev server:

	```bash
	cd frontend
	npm run dev
	```

4. In another terminal, install and run the backend:

	```bash
	cd backend
	npm install
	npm run dev
	```

5. Open the frontend local URL shown in the terminal.

## Refactor notes

- Route flow is now split into three pages: `/` (galaxy), `/video` (intro video), and `/world` (Three.js scene).
- Three.js world overlay text has been removed and camera zoom-in is clamped.
- Repository layout is now split by runtime: frontend code under `frontend/` and API/auth service under `backend/`.

## Credits

- Video Credit goes to: NASA's Goddard Space Flight Center/CI Lab
- Moon texture credit: NASA's Scientific Visualization Studio
- Font credit: Orbitron by The League of Moveable Type via Google Fonts

## Notes

- Local rebase checkpoint updated on 2026-03-21.