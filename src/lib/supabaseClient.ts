import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/supabase";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log("Initializing Supabase client with:", {
  urlAvailable: !!supabaseUrl,
  keyAvailable: !!supabaseAnonKey,
});

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "Missing Supabase environment variables. Please check your environment variables.",
  );
}

// Create a mock client if environment variables are missing (for development)
const createMockClient = () => {
  console.warn(
    "Using mock Supabase client. Data will not be saved to a real database.",
  );
  return {
    from: () => ({
      insert: async () => {
        console.log("Mock insert called");
        return { data: { id: "mock-id" }, error: null };
      },
    }),
  };
};

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient<Database>(supabaseUrl, supabaseAnonKey)
    : (createMockClient() as any);
