import { Group, GroupListResponse } from "../types/group";
import api from "./axiosInstance";

export const getGroups = async (): Promise<GroupListResponse> => {
  const response = await api.get("/api/groups/all");
  return response.data;
};

export const getGroup = async (groupId: number): Promise<{ data: Group }> => {
  const response = await api.get(`/api/groups/${groupId}`);
  return response.data;
};

export const createGroup = async (data: {
  groupName: string;
  maxParticipants: number;
}) => {
  const response = await api.post("/api/groups", data);
  return response.data;
};

export const updateGroup = async (
  groupId: number,
  data: { groupName: string; maxParticipants: number }
) => {
  const response = await api.put(`/api/groups/${groupId}`, data);
  return response.data;
};

export const deleteGroup = async (groupId: number): Promise<void> => {
  await api.delete(`/api/groups/${groupId}`);
};

export const joinGroup = async (data: {
  memberId: number;
  groupId: number;
}): Promise<Group> => {
  const response = await api.post(
    `/api/groups/${data.groupId}/member`,
    data.memberId
  );
  return response.data;
};
