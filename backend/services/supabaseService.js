import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be configured');
}

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

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
