import { Group } from "../types/group";

export const dummyGroups: Group[] = [
  {
    groupId: 1,
    managerId: 1,
    memberIds: [2, 3, 4, 5],
    memberNicknames: ["siyeon1", "siyeon2", "siyeon3", "siyeon4"],
    groupName: "알고리즘 마스터",
    maxParticipants: 10,
    createdAt: "2024-11-22 00:00:00",
    modifiedAt: "2024-11-22 00:00:00",
  },
  {
    groupId: 2,
    managerId: 2,
    memberIds: [6, 7],
    memberNicknames: ["jinho", "eunji"],
    groupName: "토익 스터디",
    maxParticipants: 8,
    createdAt: "2024-11-23 00:00:00",
    modifiedAt: "2024-11-23 00:00:00",
  },
  {
    groupId: 3,
    managerId: 3,
    memberIds: [8, 9, 10],
    memberNicknames: ["minho", "yuri", "changho"],
    groupName: "개발자 면접 준비",
    maxParticipants: 6,
    createdAt: "2024-11-24 00:00:00",
    modifiedAt: "2024-11-24 00:00:00",
  },
];
