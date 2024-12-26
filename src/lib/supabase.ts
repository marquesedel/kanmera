import { createClient } from "@supabase/supabase-js";

// Configuração direta das chaves do Supabase
export const supabase = createClient(
  "https://vmtarnlsouzrkmoolxca.supabase.co", // Substitua pelo seu URL
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtdGFybmxzb3V6cmttb29seGNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5NjcwMDMsImV4cCI6MjA1MDU0MzAwM30.Fp7vizjBY7ymAA23GyLbRZKunbd3zyTZHlWpipE1p00" // Substitua pela sua Anon Key
);