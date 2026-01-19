import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fhswknzcogrivayzhkyi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoc3drbnpjb2dyaXZheXpoa3lpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgzNzEwNjcsImV4cCI6MjA4Mzk0NzA2N30.pEcZKJ3y33M9dkamR0a6bztu7biz3c9SII2HYoZ8lS8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
