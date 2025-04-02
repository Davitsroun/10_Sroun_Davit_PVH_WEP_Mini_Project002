"use server"



export const loginAction =  async (FormData) => {
    const username =  FormData.get("username")  
    const email = FormData.get("email")
    const password =FormData.get("password")
    


   fetch('http://96.9.81.187:8080/api/v1/auth/register', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password })  
        });
        

}