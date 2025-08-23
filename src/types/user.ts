import { Status } from "./auth";
import { Group } from "./group";

export type User = {
  memberId: number;
  nickname: string;
  status: Status;
  groupList: Group[];
};
