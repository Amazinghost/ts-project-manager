import axios from "axios";

//env variables for BASE URL

export const api = axios.create({
  baseURL: "",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error: ", error);

    return Promise.reject(error);
  }
);
