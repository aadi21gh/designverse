import API from "./api";

export const getProfile = async () => {
  const response = await API.get("/users/profile");
  return response.data;
};