# Backend

Express backend for GitHub OAuth and Supabase persistence.

## Structure

- `server.js`
- `routes/auth.js`
- `services/githubService.js`
- `services/supabaseService.js`

## Required environment variables

- `PORT`
- `FRONTEND_URL`
- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`
- `GITHUB_CALLBACK_URL`
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env` from `.env.example`.

3. Start server:

```bash
npm run dev
```

## GitHub OAuth flow

1. Frontend redirects user to `${VITE_BACKEND_URL}/auth/github`
2. Backend redirects to GitHub authorization page
3. GitHub redirects back to `/auth/github/callback`
4. Backend exchanges code for token, fetches profile, computes star count
5. Backend upserts into Supabase `gitusers` table
6. Backend redirects to `${FRONTEND_URL}/login?authorized=1&username=<username>`

## Supabase table

Create this table in Supabase:

```sql
create table if not exists gitusers (
	username text primary key,
	starcount integer not null default 0
);
```
