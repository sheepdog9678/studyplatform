export type BaseNote = {
  noteId: number;
  title: string;
  content: string;
  createdAt: string;
  modifiedAt: string;
};

export type Note = BaseNote & {
  userId?: number;
};

export type NoteListResponse = {
  data: {
    content: Note[];
  };
};

export type NoteResponse = {
  data: Note;
};
