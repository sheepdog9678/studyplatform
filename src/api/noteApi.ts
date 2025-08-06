import api from "./axiosInstance";
import { Note, NoteListResponse, NoteResponse } from "../types/note";

export const getNotes = async (): Promise<NoteListResponse> => {
  const response = await api.get("/api/notes/all");
  console.log(response);
  return response.data;
};

export const getNote = async (noteId: number): Promise<NoteResponse> => {
  const response = await api.get(`/api/note/${noteId}`);
  return response.data;
};

export const createNote = async ({
  title,
  content,
}: {
  title: string;
  content: string;
}): Promise<Note> => {
  const res = await api.post("/api/notes", { title, content });
  return res.data;
};

export const updateNote = async (
  noteId: number,
  data: { title: string; content: string }
): Promise<Note> => {
  const response = await api.put(`/api/notes/${noteId}`, data);
  return response.data;
};

export const deleteNote = async (noteId: number): Promise<void> => {
  await api.delete(`/api/notes/${noteId}`);
};
