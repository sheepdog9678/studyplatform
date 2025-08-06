import api from "./axiosInstance";
import { Subject, SubjectListResponse } from "../types/subject";

export const getSubjects = async (): Promise<SubjectListResponse> => {
  const response = await api.get("/api/subjects/all");
  return response.data;
};

export const getSubject = async (
  subjectId: number
): Promise<{ data: Subject }> => {
  const response = await api.get(`api/subjects/${subjectId}`);
  return response.data;
};

export const createSubject = async ({
  subjectName,
}: {
  subjectName: string;
}): Promise<{ data: Subject }> => {
  const response = await api.post("/api/subjects", { subjectName });
  return response.data;
};

export const updateSubject = async (
  subjectId: Number,
  data: { subjectName: string }
): Promise<Subject> => {
  const response = await api.put(`/api/subjects/${subjectId}`, data);
  return response.data;
};
