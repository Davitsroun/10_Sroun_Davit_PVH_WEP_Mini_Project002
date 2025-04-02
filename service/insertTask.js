"use server"
import { auth } from "@/auth";

export const insertask =  async (FormData) => {
      const session = await auth();
    console.log("workspace", FormData)
   fetch('http://96.9.81.187:8080/api/v1/workspace', {
            method: "POST",
            headers: { 
                 Authorization: `Bearer ${session?.payload?.token}`,
            "Content-Type": "application/json"
        },
            body: JSON.stringify( FormData )  
        });
}