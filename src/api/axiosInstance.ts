import axios, { AxiosHeaders } from "axios";
import { useAuthStore } from "../store/authStore";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  let token = useAuthStore.getState().token;
  console.log("확인", useAuthStore.persist.rehydrate());

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
    const h = config.headers as AxiosHeaders | undefined;
    h?.set?.("Authorization", `Bearer ${token}`);
  }

  return config;
});

export default api;
