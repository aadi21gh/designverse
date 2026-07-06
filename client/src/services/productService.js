import API from "./api";

export const getAllProducts = async () => {
  const response = await API.get("/products");
  return response.data;
};

export const getProductsByCategory = async (category) => {
  const response = await API.get(`/products/${category}`);
  return response.data;
};