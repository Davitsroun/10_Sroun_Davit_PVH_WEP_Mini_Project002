
import { auth } from "@/auth";

export async function task() {

    const session = await auth();

    const res   = await fetch(
        `http://96.9.81.187:8080/api/v1/tasks/workspace/d05221fe-5120-4530-a60f-eb5f29ffa946?pageNo=0&pageSize=10&sortBy=taskId&sortDirection=ASC`,
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