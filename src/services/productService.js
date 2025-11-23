import axiosClient from "../api/axiosClient";
export const createProduct = async (
  nameProduct,
  description,
  price,
  stock,
  category
) => {
  const response = await axiosClient.post("/products", {
    name: nameProduct,
    description,
    price,
    stock,
    category,
  });
  return response.data;
};
export const getProduct =async ({
    search="",
    category="",
    page=1,
    limit=10,
}={})=>{
    const response=await axiosClient.get("/products",{
        params:{
            search,
            category,
            page,
            limit
        }
    })
    
    return response.data.data;
}

export const getProductById= async(id)=>{
  const response= await axiosClient.get(`/products/${id}`);
  return response.data.data;
}
export const updateProduct = async (
  nameProduct,
  description,
  price,
  stock,
  category,
  id
) => {
  const response = await axiosClient.put( `/products/${id}`, {
    name: nameProduct,
    description,
    price,
    stock,
    category,
  });
  return response.data;
};
export const deleteProduct =async(id)=>{
  const response=await axiosClient.delete(`/products/${id}`);
  return response.data;
}