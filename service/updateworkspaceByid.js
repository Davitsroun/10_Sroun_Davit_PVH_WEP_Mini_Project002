"use server"
import { auth } from "@/auth";

export const updateworkspaceyid =  async ({inputValue, workspaceId}) => {

    const session = await auth();
    console.log("workspace update", workspaceId, inputValue)

    const response = await fetch(`http://96.9.81.187:8080/api/v1/workspace/${workspaceId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session?.payload?.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputValue) 
    });
}
