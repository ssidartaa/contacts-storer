import axios from "axios";

const api = axios.create({
  baseURL: "https://contacts-storer-api.onrender.com",
  timeout: 5000,
});

export default api;
