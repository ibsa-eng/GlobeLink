import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/buy";

export const fetchProperties = async (page) => {
  const response = await axios.get(`${API_BASE_URL}?page=${page}`);
  return response.data;
};
