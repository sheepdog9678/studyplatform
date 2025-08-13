import axios from "axios";
import { useAuthStore } from "../store/authStore";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  let token = useAuthStore.getState().token;
  console.log("axios token", token);

  if (!token && typeof window !== "undefined") {
    try {
      const raw = localStorage.getItem("auth-storage");
      if (raw) {
        const parsed = JSON.parse(raw);
        token = parsed?.state?.token ?? null;
      }
    } catch (err) {
      console.log(err);
      token = null;
    }
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
