import axios from "axios";
export const API_BASE = "http://localhost:8080";
const axiosClient= axios.create({
    baseURL: API_BASE+"/api"
});

axiosClient.interceptors.request.use((config)=>{
    const token =localStorage.getItem("token");

    if (token){
        config.headers["x-access-token"]=token;
    }
    return config
})
export default axiosClient;