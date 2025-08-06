import { Status } from "./auth";
import { Group } from "./group";

export type User = {
  id: number;
  nickname: string;
  status: Status;
  groupList: Group[];
};
