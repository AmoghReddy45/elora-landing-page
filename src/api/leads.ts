import { supabase } from "@/lib/supabaseClient";
import type { FormValues } from "@/components/LeadCaptureForm";

export async function submitLeadForm(formData: FormValues) {
  try {
    console.log("Submitting lead to Supabase:", formData);
    console.log("Using Supabase URL:", import.meta.env.VITE_SUPABASE_URL);

    const { data, error } = await supabase.from("leads").insert([
      {
        name: formData.name,
        email: formData.email,
        company: formData.company || null,
      },
    ]);

    if (error) {
      console.error("Error inserting lead:", error);
      throw error;
    }

    console.log("Lead submitted successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Failed to submit lead:", error);
    return { success: false, error };
  }
}
