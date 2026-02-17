import { createClient } from '@supabase/supabase-js';

// Configuration: Ensure API keys are loaded from environment variables (Vite)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase credentials missing. Please define VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env or .env.local file.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);