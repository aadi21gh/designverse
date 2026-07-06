import API from "./api";

export const createOrder = async (order) => {
  const response = await API.post("/orders", order);
  return response.data;
};