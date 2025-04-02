// export async function RegisterService({ username, email, password }) {

//     try {
//         const res = await fetch("http://96.9.81.187:8080/api/v1/auth/register", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 username,
//                 email,
//                 password
//             })
//         });

//         // Check if response is JSON
//         const contentType = res.headers.get("content-type");
//         if (!contentType || !contentType.includes("application/json")) {
//             throw new Error("Invalid response format: Expected JSON");
//         }

//         const data = await res.json();
//         console.log("Response:", data);

//         return data;
//     } catch (error) {
//         console.error("Error in RegisterService:", error);
//         return null;
//     }
// }
