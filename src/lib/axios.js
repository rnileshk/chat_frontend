import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-backend-8old.onrender.com" : "/api",
  withCredentials: true,
});
