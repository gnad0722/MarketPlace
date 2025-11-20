import axiosClient from "../api/axiosClient";
export const register= async (username, email, password) => {
    const response=await axiosClient.post("/auth/register",{
        username,
        email,
        password
    })
    return response.data;
}
export const login= async (email, password)=>{
    const response=await axiosClient.post("/auth/login",{
        email,
        password
    })
    return response.data;
}
export const logout=async () => {
    const response=await axiosClient.post("/auth/logout")
    return response.data;
}