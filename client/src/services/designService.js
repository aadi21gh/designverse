import axios from "axios";

const API =
  "http://localhost:5000/api/designs";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem(
      "token"
    )}`,
  },
});

export const saveDesign = (design) =>
  axios.post(
    API,
    design,
    authHeader()
  );

export const getMyDesigns = () =>
  axios.get(
    API,
    authHeader()
  );

export const getDesign = (id) =>
  axios.get(
    `${API}/${id}`,
    authHeader()
  );

export const updateDesign = (
  id,
  design
) =>
  axios.put(
    `${API}/${id}`,
    design,
    authHeader()
  );

export const deleteDesign = (id) =>
  axios.delete(
    `${API}/${id}`,
    authHeader()
  );