import axiosClient from "../api/axiosClient";
export const addItemToCart= async (idProduct, quantity)=>{
    const response=await axiosClient.post(`/cart`,{
        productId:idProduct,
        quantity
    });
    return response.data;
}
export const getCartItems=async ()=>{
    const response=await axiosClient.get(`/cart`);
    return response.data.data;
}
export const updateItemQuantity=async(id,quantity) =>{
    const response=await axiosClient.put(`/cart/${id}`,{
        quantity
    })
    return response.data;
}
export const removeItem=async (id)=>{
    const response=await axiosClient.delete(`/cart/${id}`);
    return response.data;
}