export type Subject = {
  subjectId: number;
  userId: number;
  subjectName: string;
  createdAt: string;
  modifiedAt: string;
};



export type SubjectListResponse = {
  data: {
    content: Subject[];
  };
};
