export type Status = "STUDENT" | "WORKER" | "HOUSEWIFE" | "ETC";

export type SignupFormInputs = {
  name: string;
  email: string;
  password: string;
  nickname: string;
  status: Status;
};
