import API from "./api";

export const getAllProducts = async () => {
  const { data } = await API.get("/products");
  return data;
};

export const getProductsByCategory = async (category) => {
  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);

  const { data } = await API.get(`/products/${formattedCategory}`);
  return data;
};

export const getProductById = async (id) => {
  const { data } = await API.get(`/products/id/${id}`);
  return data;
};