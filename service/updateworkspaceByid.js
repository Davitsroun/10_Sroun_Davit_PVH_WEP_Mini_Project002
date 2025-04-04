"use server"
import { auth } from "@/auth";

export const updateworkspaceyid =  async ({inputValue, workspaceId}) => {

    const session = await auth();

    const response = await fetch(`http://96.9.81.187:8080/api/v1/workspace/${workspaceId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${session?.payload?.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({workspaceName: inputValue}) 
    });
}
