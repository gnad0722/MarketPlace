import axiosClient from "../api/axiosClient";
export const getOrderHistory= async ()=>{
    const response =await axiosClient.get("/orders");
    return response.data.data;
}