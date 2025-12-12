import axiosClient from "../api/axiosClient";
export const createProduct = async (formData) => {
  const response = await axiosClient.post("/products", formData);
  return response.data;
};
export const getMyProduct = async (page = 1) => {
  const response = await axiosClient.get("/products/my-products", {
    params: {
      page: page,
      limit: 5
    }
  });
  return response.data.data;
};
export const getProduct = async ({
  search,
  category,
  page = 1,
  limit = 10,
  rating_min,
  rating_max = 5,
  price_min,
  price_max,
} = {}) => {
  const response = await axiosClient.get("/products", {
    params: {
      search,
      category,
      page,
      limit,
      rating_min,
      rating_max,
      price_min,
      price_max,
    },
  });

  return response.data.data;
};

export const getProductById = async (id) => {
  const response = await axiosClient.get(`/products/${id}`);
  return response.data.data;
};
export const updateProduct = async (formData, id) => {
  const response = await axiosClient.put(`/products/${id}`, formData);
  return response.data;
};
export const deleteProduct = async (id) => {
  const response = await axiosClient.delete(`/products/${id}`);
  return response.data;
};
export const deleteProductImage = async (id, idImages) => {
  const response = await axiosClient.delete(
    `/products/${id}/images/${idImages}`
  );
  return response.data;
};
export const getProductImageById = async (id) => {
  const response = await axiosClient.get(`/products/${id}/images`);
  return response.data.data;
};
