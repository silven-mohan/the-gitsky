import supabase from './supabaseClient.js';

export const upsertGitUser = async ({ username, starcount }) => {
  try {
    const { data, error } = await supabase
      .from('gitusers')
      .upsert({ username, starcount }, { onConflict: 'username' })
      .select('username, starcount')
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
