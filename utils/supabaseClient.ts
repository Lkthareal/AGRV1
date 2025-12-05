import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oifysisjbfbyjdgrwbie.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pZnlzaXNqYmZieWpkZ3J3YmllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2NTU0NTQsImV4cCI6MjA4MDIzMTQ1NH0.EFxI8KnqhyTT7MxeP9quiSmcsFL_86_04mXqtIhBS_g';

export const supabase = createClient(supabaseUrl, supabaseKey);