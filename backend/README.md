# Backend

Express backend for GitHub OAuth authorization and star-count polling.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env` from `.env.example` and fill GitHub OAuth credentials.

3. Start server:

```bash
npm run dev
```

## Data storage

Backend stores JSON files under `backend/data/`:
- `latest-stars.json`: latest known star count per username.
- `star-history.json`: snapshot history (username, starCount, timestamp).
