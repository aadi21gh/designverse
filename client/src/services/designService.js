import API from "./api";

export const saveDesign = async (design) => {
  const response = await API.post("/designs", design);
  return response.data;
};