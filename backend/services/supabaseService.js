import supabase from './supabaseClient.js';

export const upsertGitUser = async ({ github_id, username, avatar_url, star_count, updated_at }) => {
  try {
    const { data, error } = await supabase
      .from('gitusers')
      .upsert(
        {
          github_id,
          username,
          avatar_url,
          star_count,
          updated_at
        },
        { onConflict: 'username' }
      )
      .select('github_id, username, avatar_url, star_count, updated_at')
      .single();

    if (error) {
      throw new Error(`Supabase upsert failed: ${error.message}`);
    }

    return data;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown Supabase error';
    throw new Error(`Failed to save git user in Supabase: ${message}`);
  }
};
