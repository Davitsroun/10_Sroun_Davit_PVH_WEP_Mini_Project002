"use server"
import { auth } from "@/auth";

export const insertask =  async ({formData,id}) => {
      const session = await auth();
      console.log("data muy muy id", id )
      console.log("data", formData )
       const response = await  fetch(`http://96.9.81.187:8080/api/v1/task/workspace/${id}`, {
            method: "POST",
            headers: { 
              "accept": "*/*",
             "Authorization": `Bearer ${session?.payload?.token}`,
            "Content-Type": "application/json"
        },
            body: JSON.stringify( formData )  
        });
        console.log("token", session)
        const data= await response.json();
        console.log("Success", data)
        return data
}