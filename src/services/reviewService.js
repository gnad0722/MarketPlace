import axiosClient from "../api/axiosClient";
export const reviewProduct = async (id) => {
  const response = await axiosClient.get(`/reviews/${id}`);
  return response.data.data;
}
export const postReplyReview = async (reviewId, comment) => {
  const response = await axiosClient.post(`/reviews/${reviewId}/reply`, {
    comment
  }
  );
  return response.data;
}