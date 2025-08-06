import api from "./axiosInstance";
import { useAuthStore } from "../store/authStore";
import { SignupFormInputs } from "../types/auth";

export const signup = async (data: SignupFormInputs) => {
  const response = await api.post("/api/auth/signup", data);
  return response.data;
};

export const login = async (username: string, password: string) => {
  const response = await api.post("/api/auth/login", {
    username,
    password,
  });

  const token = response.headers["authorization"]?.replace("Bearer ", "");
  if (token) {
    useAuthStore.getState().setToken(token);
  }

  return token;
};

export const getUserProfile = async () => {
  const response = await api.get("/api/users/profile");
  return response.data;
};

export const updateUserProfile = async (data: SignupFormInputs) => {
  const response = await api.put("/api/users/profile", data);
  return response.data;
};
