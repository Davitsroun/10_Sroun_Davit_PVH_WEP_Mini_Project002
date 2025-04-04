"use client"
import { auth } from "@/auth";

export const updatestatusTask=  async (value) => {

    const session = await auth();
    console.log("taskuid" , value)
    // const response = await fetch(`http://96.9.81.187:8080/api/v1/workspace/${workspaceId}`, {
    //   method: "PUT",
    //   headers: {
    //     Authorization: `Bearer ${session?.payload?.token}`,
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({workspaceName: inputValue}) 
    // });
}
