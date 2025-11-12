import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mqoolkmpxatsglkzorgw.supabase.co'; // replace with your URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xb29sa21weGF0c2dsa3pvcmd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNjYyMzEsImV4cCI6MjA3Nzk0MjIzMX0.f8t-cUQHKRmRvfd1CNmz8bisMaASxbo_vEDSOrqPNK4'; // replace with your anon key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);