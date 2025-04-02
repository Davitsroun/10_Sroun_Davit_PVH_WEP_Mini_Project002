import { auth } from "@/auth";

export async function nameService() {

    const session = await auth();
    console.log("session sidebare", session?.payload?.token)
    const res   = await fetch(
        `http://96.9.81.187:8080/api/v1/user`,
        {
            method: "GET",
            headers:{
                Authorization: `Bearer ${session?.payload?.token}`
            },
        }
    )
    const data = await res.json();
    return data.payload
    
}