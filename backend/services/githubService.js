const GITHUB_TOKEN_URL = 'https://github.com/login/oauth/access_token';
const GITHUB_USER_URL = 'https://api.github.com/user';

export const exchangeCodeForAccessToken = async ({ code, clientId, clientSecret, redirectUri }) => {
  const response = await fetch(GITHUB_TOKEN_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: redirectUri
    })
  });

  if (!response.ok) {
    throw new Error(`GitHub token exchange failed (${response.status})`);
  }

  const payload = await response.json();
  if (!payload.access_token) {
    throw new Error('GitHub did not return an access token');
  }

  return payload.access_token;
};

export const fetchGitHubProfile = async (accessToken) => {
  const response = await fetch(GITHUB_USER_URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'the-gitsky-backend'
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch GitHub profile (${response.status})`);
  }

  const profile = await response.json();
  if (!profile?.login) {
    throw new Error('GitHub profile did not include login');
  }

  return profile;
};

export const fetchGitHubStarCount = async ({ username, accessToken }) => {
  let page = 1;
  let totalStars = 0;

  while (true) {
    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/vnd.github+json',
          'User-Agent': 'the-gitsky-backend'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch repositories for ${username} (${response.status})`);
    }

    const repos = await response.json();
    if (!Array.isArray(repos) || repos.length === 0) {
      break;
    }

    for (const repo of repos) {
      totalStars += Number(repo.stargazers_count || 0);
    }

    if (repos.length < 100) {
      break;
    }

    page += 1;
  }

  return totalStars;
};
