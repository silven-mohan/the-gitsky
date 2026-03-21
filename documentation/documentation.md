# The GitSky: Full Project Structure Analysis

## 1. Overview

The repository is organized as a two-runtime application:

- Frontend runtime: Vite + React + TypeScript + Three.js
- Backend runtime: Express + Supabase + GitHub OAuth

The frontend is a route-by-path single-page shell that selects one of three page components by `window.location.pathname`.
The backend exposes auth and API endpoints with JWT-based protected routes.

## 2. Top-Level Repository Layout

```text
the-gitsky/
|- LICENSE
|- README.md
|- .gitignore
|- documentation/
|  |- documentation.md
|  `- PROJECT_STRUCTURE.md
|- frontend/
|- backend/
```

### Top-level responsibility map

- `README.md`: setup, quick start, and credits.
- `documentation/PROJECT_STRUCTURE.md`: concise current tree snapshot.
- `.gitignore`: build/cache/environment exclusions.
- `frontend/`: UI app, static assets, build tooling.
- `backend/`: API server, auth logic, integrations.

## 3. Frontend Structure (Vite + React + TypeScript)

```text
frontend/
|- .env.example
|- index.html
|- package.json
|- package-lock.json
|- postcss.config.js
|- tailwind.config.ts
|- tsconfig.json
|- tsconfig.app.json
|- tsconfig.node.json
|- vite.config.ts
|- vercel.json
|- public/
|  `- textures/
|     |- lroc_color_poles_4k.tif
|     `- moon.jpg
`- src/
   |- App.tsx
   |- main.tsx
   |- styles.css
   |- components/
   |  |- Galaxy.jsx
   |  |- Galaxy.css
   |  |- GalaxyIntro.tsx
   |  |- GalaxyIntro.module.css
   |  |- LoginPage.tsx
   |  |- LoginPage.module.css
   |  |- YouTubeIntro.tsx
   |  `- YouTubeIntro.module.css
   `- types/
      `- three-fallback.d.ts
```

### Frontend runtime flow

- Entry point: `src/main.tsx`
- Path-based component selection:
  - `/` -> `GalaxyIntro`
  - `/video` -> `YouTubeIntro`
  - `/login` -> `LoginPage`
  - `/world` -> `App`

### Core frontend modules

- `src/App.tsx`
  - Hosts the Three.js world.
  - Creates renderer, camera, controls, stars, moon mesh, and interaction loop.
  - Fetches user star data from backend endpoint `/api/stars`.
  - Handles camera transitions to selected user stars.
  - Shows moon landing overlay image (`/textures/moon.jpg`) when zooming close to moon.

- `src/components/GalaxyIntro.tsx` + `src/components/Galaxy.jsx`
  - Intro visual/hero and initial route surface.

- `src/components/YouTubeIntro.tsx`
  - Video-focused page in route flow.

- `src/components/LoginPage.tsx`
  - Login/create flow entry for GitHub-authenticated path.

- `src/styles.css`
  - Shared world UI styling and overlay styling.

### Frontend build/config notes

- Build command: `npm run build` -> `tsc -b && vite build`
- Vite config: `vite.config.ts`
- TS project references:
  - `tsconfig.app.json` for app code
  - `tsconfig.node.json` for node-side config typing
- `tsconfig.node.json` includes `noEmit: true` to avoid generated config artifacts.

## 4. Backend Structure (Express API)

```text
backend/
|- .env.example
|- README.md
|- package.json
|- package-lock.json
|- server.js
|- routes/
|  |- api.js
|  `- auth.js
|- middleware/
|  `- authMiddleware.js
|- services/
|  |- githubService.js
|  |- supabaseClient.js
|  `- supabaseService.js
`- data/
   |- latest-stars.json
   `- star-history.json
```

### Backend runtime flow

- Entry point: `server.js`
- Middleware:
  - CORS restricted to `FRONTEND_URL`
  - JSON parser
- Health endpoint: `GET /health`
- Mounted route groups:
  - `GET /auth/github`
  - `GET /auth/github/callback`
  - `GET /api/stars`
  - `GET /api/me` (JWT protected)
  - `GET /api/user-star` (JWT protected)

### Backend module responsibilities

- `routes/auth.js`
  - GitHub OAuth redirect and callback flow.
  - Exchanges OAuth code for access token.
  - Fetches profile + star count.
  - Upserts user into Supabase.
  - Signs JWT and redirects to frontend `/login?token=...`.

- `routes/api.js`
  - Serves public star leaderboard and protected user endpoints.

- `middleware/authMiddleware.js`
  - Validates bearer JWT and attaches payload to request.

- `services/githubService.js`
  - GitHub token exchange.
  - Profile fetch.
  - Paginated repository fetch and star aggregation.

- `services/supabaseService.js` and `services/supabaseClient.js`
  - Supabase write and client initialization.

## 5. Data and Asset Organization

### Frontend static assets

- `frontend/public/textures/lroc_color_poles_4k.tif`
  - Moon surface texture (loaded in Three.js using TIFF loader).
- `frontend/public/textures/moon.jpg`
  - Landing overlay image shown near moon zoom threshold.

### Backend data snapshots

- `backend/data/latest-stars.json`
- `backend/data/star-history.json`

These appear to be data artifacts/snapshots and are not part of live route wiring in the current runtime path.

## 6. Dependency and Tooling Profile

### Frontend dependencies (runtime)

- `react`, `react-dom`, `three`, `ogl`, `@fontsource-variable/geist`

### Frontend dev dependencies

- Vite toolchain (`vite`, `@vitejs/plugin-react`)
- TypeScript (`typescript`, types packages)
- Tailwind/PostCSS stack

### Backend dependencies

- `express`, `cors`, `dotenv`
- `jsonwebtoken`, `express-session`
- `@supabase/supabase-js`

## 7. Environment Contract

### Frontend

- Optional: `VITE_BACKEND_URL`
- Local fallback in app: `http://localhost:4000` when hostname is localhost/127.0.0.1.

### Backend required variables

- `FRONTEND_URL`
- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`
- `GITHUB_CALLBACK_URL`
- `JWT_SECRET`
- Supabase credentials (through Supabase client setup)

## 8. Routing and Integration Map

### Browser path routing

- `/` -> intro page
- `/video` -> video intro
- `/login` -> auth/login page
- `/world` -> 3D world page

### API integration points

- Frontend world view consumes `/api/stars` for user star points.
- Auth flow redirects from backend callback to frontend login with JWT token query parameter.

## 9. Quality and Maintainability Observations

### Current strengths

- Clear runtime separation between frontend and backend.
- Good service/middleware separation in backend.
- Frontend route surfaces are cleanly grouped by feature/component.
- Build artifacts and generated config outputs are reduced and mostly controlled.

### Structural risks to monitor

- `backend/data/*` snapshots may drift if ownership/lifecycle is not documented.
- Path-based routing in `main.tsx` is simple but can become harder to scale than dedicated client routing.
- `App.tsx` holds substantial world logic in one file; complexity may continue to grow.

## 10. Recommended Next Documentation Additions

- Add an endpoint contract section (request/response examples) in backend README.
- Add an env-variable matrix with required/optional/default values.
- Add a short architecture decision log for route strategy and Three.js scene organization.

## 11. Generated and Ignored Artifacts

Expected ignored/generated content:

- `node_modules/`
- `frontend/dist/`
- `.vite/`
- `*.tsbuildinfo`
- environment files (`frontend/.env`, `backend/.env`)

This keeps repository history focused on source and stable configuration.
