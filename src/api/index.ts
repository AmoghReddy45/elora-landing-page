import { submitLeadForm } from "./leads";

export async function handleLeadFormSubmission(request: Request) {
  try {
    const formData = await request.json();
    const result = await submitLeadForm(formData);

    if (!result.success) {
      return new Response(JSON.stringify({ error: "Failed to submit lead" }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error in API route:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
