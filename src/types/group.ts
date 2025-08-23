export type Group = {
  groupId: number;
  managerId: number;
  memberIds: number[];
  memberNicknames: string[];
  groupName: string;
  maxParticipants: number;
  createdAt: string;
  modifiedAt: string;
};

export type GroupListResponse = {
  data: Group[];
};
