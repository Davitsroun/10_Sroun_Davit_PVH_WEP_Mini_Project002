"use server"
import { auth } from "@/auth";

export const inserWorkspace = async (FormData) => {
  try {
    const session = await auth();
    console.log("task", FormData);

    // Check if session token is available
    if (!session?.payload?.token) {
      throw new Error("No token available");
    }

    // Send the POST request
    const response = await fetch('http://96.9.81.187:8080/api/v1/task/workspace/d05221fe-5120-4530-a60f-eb5f29ffa946', {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session?.payload?.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(FormData) // Convert FormData to JSON
    });

    // Check for success
    if (!response.ok) {
      // If the response is not OK, throw an error
      const errorData = await response.json();
      console.error("Error response:", errorData);
      throw new Error(`Request failed with status: ${response.status}`);
    }

    // Parse and log the successful response data
    const data = await response.json();
    console.log("Success:", data);
    return data;
  } catch (error) {
    console.error("Error inserting workspace:", error);
    throw error; // Rethrow or handle error appropriately
  }
};
