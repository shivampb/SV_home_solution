import { createClient } from '@supabase/supabase-js';

// Configuration based on provided credentials.
// Project ID: vsxbvragqfsgvsmsssxc
// Key: sb_publishable_blSTWxeiIIwCfJXH8bRQvw_K8obhYTF

const supabaseUrl = process.env.SUPABASE_URL || 'https://vsxbvragqfsgvsmsssxc.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY || 'sb_publishable_blSTWxeiIIwCfJXH8bRQvw_K8obhYTF';

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase credentials missing. Please check lib/supabase.ts or your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);