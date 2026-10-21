

const SUPABASE_URL = "https://ssbvdlukbepunnjvzfkj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_3X3bpXFI0dUAWjHiWAyklQ_qky1S23C";

const { createClient } = window.supabase;

window.archiveSupabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
