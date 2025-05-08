import { handleLeadFormSubmission } from "./index";

export const apiMiddleware = async (request: Request) => {
  const url = new URL(request.url);
  const path = url.pathname;

  // Route for handling lead form submissions
  if (path === "/api/leads" && request.method === "POST") {
    return handleLeadFormSubmission(request);
  }

  // Return 404 for any other API routes
  return new Response(JSON.stringify({ error: "Not found" }), {
    status: 404,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
