import api from "./axiosInstance";
import { useAuthStore } from "../store/authStore";
import { SignupFormInputs } from "../types/auth";
import { User } from "../types/user";

export const signup = async (data: SignupFormInputs) => {
  const response = await api.post("/api/auth/signup", data);
  return response.data;
};

export const login = async (data: { email: string; password: string }) => {
  const response = await api.post("/api/auth/login", data);
  const token = (
    response.headers["authorization"] as string | undefined
  )?.replace(/^Bearer\s+/i, "");
  if (token) useAuthStore.getState().setToken(token);

  const profile = await getUserProfile();
  useAuthStore.getState().setUser(profile);
  return response.data;
};

export const getUserProfile = async (): Promise<User> => {
  const response = await api.get<{ data: User }>("/api/users/profile");
  return response.data.data;
};

export const updateUserProfile = async (data: SignupFormInputs) => {
  const response = await api.put("/api/users/profile", data);
  return response.data;
};
